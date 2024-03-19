import { Model } from "mongoose";
import EventModel from "../Models/EventModel.js";
class EventController {
  async create(req, res) {
    try {
      const event = await EventModel.create(req.body);
      return res.status(200).json(event);
    } catch (error) {
      res.status(500).json({ message: "Error while creating event", error: error.message });
    }
  }
  async read(req, res) {
    try {
      const event = await EventModel.find();
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
      console.log(id);
      console.log(name);
      console.log(type);

      if (id) {
        idsArray = id.split(",");
      }

      let events = [];

      if (idsArray.length === 0) {
        events = await EventModel.find();
      } else {
        const query = {
          $or: [{ id_categoryprices: { $in: idsArray } }, { id_categorytypes: { $in: idsArray } }],
        };
        events = await EventModel.find(query);
      }
      const populatePromises = events.map(async (tool) => {
        const populatedTool = await EventModel.populate(tool, "id_categoryprices id_categorytypes");
        return populatedTool;
      });

      events = await Promise.all(populatePromises);

      if (name) {
        const regexName = new RegExp(name, "i");
        events = events.filter((tool) => regexName.test(tool.name));
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
      const uniqueToolObjects = () => {
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

      const filteredEvents = uniqueToolObjects();

      return res.status(200).json(filteredEvents);
    } catch (error) {
      res.status(500).json({ message: "Error while filtering Events", error: error.message });
    }
  }
}
export default new EventController();
