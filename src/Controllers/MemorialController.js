import MemorialModel from "../Models/MemorialModel.js";

class MemorialController {
  async create(req, res) {
    try {
      const memorial = await MemorialModel.create(req.body);
      return res.status(200).json(memorial);
    } catch (error) {
      res.status(500).json({ message: "Error while creating archive", error: error.message });
    }
  }
  async read(req, res) {
    try {
      const memorial = await MemorialModel.find();
      return res.status(200).json(memorial);
    } catch (error) {
      res.status(500).json({ message: "Error while fetching archive", error: error.message });
    }
  }
  async update(req, res) {
    try {
      const { id } = req.params;

      const memorial = await MemorialModel.findByIdAndUpdate(id, req.body);
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
