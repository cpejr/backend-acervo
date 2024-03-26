import ArchiveModel from "../Models/ArchiveModel.js";
import { getArchive } from "../Config/aws.js";

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
}
export default new ArchiveController();
