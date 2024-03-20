import { Model } from "mongoose";
import EventModel from "../Models/EventModel.js";
class EventController {
  async create(req, res) {
    console.log(req);
    try {
      const { id_categoryPrice, id_categoryType, ...rest } = req.body;
      const categoryPrices = await Promise.all(
        id_categoryPrice.map(async (id) => await CategoryPricesModel.findById(id))
      );

      const categoryTypes = await Promise.all(
        id_categoryType.map(async (id) => await CategoryPricesModel.findById(id))
      );
      if (categoryTypes.includes(null) || categoryPrices.includes(null)) {
        return res.status(400).json({ message: "One or more category IDs do not exist" });
      }

      const event = await EventModel.create({
        id_categoryPrice: id_categoryPrice,
        id_categoryType: id_categoryType,
        ...rest,
        imageURL: "",
      });
      //save image url
      const { imageURL: base64Image, name } = req.body;
      const imageURL = await uploadImage(base64Image, name);
      event.set({ imageURL });
      await event.save();
      return res.status(200).json(event);
    } catch (error) {
      res.status(500).json({ message: "Error while creating event", error: error.message });
    }
  }
  async read(req, res) {
    try {
      const event = await EventModel.find(req.body)
        .populate("id_categoryPrice")
        .populate("id_categoryType");
      return res.status(200).json(event);
    } catch (error) {
      res.status(500).json({ message: "Error while fetching event", error: error.message });
    }
  }
  async update(req, res) {
    try {
      const { id } = req.params;
      const event = await EventModel.findByIdAndUpdate(id, req.body);
      return res.status(200).json(event);
    } catch (error) {
      res.status(500).json({ message: "Error while updating event", error: error.message });
    }
  }
  async delete(req, res) {
    try {
      const { id } = req.params;
      await EventModel.findByIdAndDelete(id);
      return res.status(200).json({ messsage: "Event deleted successfully!" });
    } catch (error) {
      res.status(500).json({ message: "Error while deleting event", error: error.message });
    }
  }

  async filterCategories(req, res) {
    try {
      let idsArray = [];
      const { id, name, type } = req.query;

      if (id) {
        idsArray = id;
      }

      let events = [];

      if (idsArray.length === 0) {
        events = await EventModel.find();
      } else {
        const query = {
          $or: [{ id_categoryPrice: { $in: idsArray } }, { id_categoryType: { $in: idsArray } }],
        };
        events = await EventModel.find(query);
      }
      const populatePromises = events.map(async (event) => {
        const populatedEvent = await EventModel.populate(event, "id_categoryPrice id_categoryType");
        return populatedEvent;
      });

      events = await Promise.all(populatePromises);

      if (name) {
        const regexName = new RegExp(name, "i");
        events = events.filter((event) => regexName.test(event.name));
      }
      switch (type) {
        case "name":
          const OrderedEvents = events.sort((a, b) => {
            if (a.name < b.name) {
              return -1;
            }
            if (a.name > b.name) {
              return 1;
            }
            return 0;
          });
          events = OrderedEvents;
          break;

        case "date":
          const OrderedTime = events.reverse();
          events = OrderedTime;
          break;
      }
      const uniqueEventObjects = () => {
        const mapIds = new Map();
        const UniqueArray = [];
        events.forEach((obj) => {
          if (!mapIds.has(obj._id)) {
            mapIds.set(obj._id, true);
            UniqueArray.push(obj);
          }
        });
        return UniqueArray;
      };

      const filteredEvents = uniqueEventObjects();

      return res.status(200).json(filteredEvents);
    } catch (error) {
      res.status(500).json({ message: "Error while filtering Events", error: error.message });
    }
  }
}
export default new EventController();
