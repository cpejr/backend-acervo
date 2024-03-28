import MemorialModel from "../Models/MemorialModel.js";

class MemorialController {
  async create(req, res) {
    try {
      const { title, shortDescription, longDescription, link, characteristics, ...archives } =
        req.body;
      const archivesArray = Object.values(archives);

      const memorial = await MemorialModel.create({
        title,
        shortDescription,
        longDescription,
        link,
        characteristics,
        archive: archivesArray,
      });
      return res.status(200).json(memorial);
    } catch (error) {
      res.status(500).json({ message: "Error while creating archive", error: error.message });
    }
  }
  async read(req, res) {
    try {
      const selection = req.body;

      if (selection == {}) {
        const memorial = await MemorialModel.find().sort([["title", "asc"]]);
        return res.status(200).json(memorial);
      }

      if (selection.filters.length != 0) {
        const memorial = await MemorialModel.find()
          .where("characteristics")
          .in(selection.filters)
          .sort([[selection.order, "asc"]]);
        return res.status(200).json(memorial);
      } else {
        const memorial = await MemorialModel.find().sort([[selection.order, "asc"]]);
        return res.status(200).json(memorial);
      }
    } catch (error) {
      res.status(500).json({ message: "Error while fetching memorial cards", error: error.message });
    }
  }
  async update(req, res) {
    try {
      const { id } = req.params;
      const { title, link, ...archives } = req.body;
      const archivesArray = Object.values(archives);
      const memorial = await MemorialModel.findByIdAndUpdate(id, {
        title,
        link,
        archive: archivesArray,
      });
      return res.status(200).json(memorial);
    } catch (error) {
      res.status(500).json({ message: "Error while updating archive", error: error.message });
    }
  }
  async delete(req, res) {
    try {
      const { id } = req.params;
      await MemorialModel.findByIdAndDelete(id);
      return res.status(200).json({ messsage: "Archive deleted successfully!" });
    } catch (error) {
      res.status(500).json({ message: "Error while deleting archive", error: error.message });
    }
  }
}
export default new MemorialController();
