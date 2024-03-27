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
      const files = Array.isArray(req.file) ? req.file : [req.file];
      const archiveIds = [];

      for (const file of files) {
        const result = await sendArchive(file, req.name);
        const url = result;

        const archive = await ArchiveModel.create({ url });
        archiveIds.push(archive._id);
      }
      return archiveIds;
    } catch (error) {
      res.status(500).json({ message: "error while creating archive", error: error.message });
    }
  }
}

export default new ArchiveController();
