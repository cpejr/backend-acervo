import ArchiveModel from "../Models/ArchiveModel.js";
import { getArchive, sendArchive } from "../Config/Aws.js";

class ArchiveController {
  async read(req, res) {
    try {
      const key = req;
      const result = await getArchive(key);
      return result;
    } catch (error) {
      res.status(500).json({ message: "Error while fetching archive", error: error.message });
    }
  }
  async create(req, res) {
    try {
      // const result = sendArchive;

      console.log(req);
    } catch (error) {
      res.status(500).json({ message: "error while creating archive", error: error.message });
    }
  }
}

export default new ArchiveController();
