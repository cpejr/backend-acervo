import ArchiveModel from "../Models/ArchiveModel.js";
import { deleteArchive, getArchive, sendArchive } from "../Config/Aws.js";

class ArchiveController {
  async getArchivesbyID(req, res) {
    try {
      const ids = Array.isArray(req) ? req : [req]; // Garante que ids seja um vetor
      const base64Strings = [];

      for (const id of ids) {
        const archive = await ArchiveModel.findById(id);

        if (!archive) {
          return res.status(404).json({ message: `Archive with ID ${id} not found` });
        }

        const urlSplit = archive.url.split("/");
        const key = urlSplit.pop();
        const result = await getArchive(key);

        const base64String = Buffer.from(result).toString("base64");
        base64Strings.push(base64String);
      }

      return base64Strings;
    } catch (error) {
      // res.status(500).json({ message: "Error while fetching archive", error: error.message });
      console.log(error);
    }
  }

  async create(req, res) {
    try {
      const files = Array.isArray(req.file) ? req.file : [req.file];
      const archiveIds = [];

      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const nameWithIteration = `${req.name}${i + 1} `;
        const result = await sendArchive(file, nameWithIteration);
        const url = result;
        const archive = await ArchiveModel.create({ url });
        archiveIds.push(archive._id);
      }

      return archiveIds;
    } catch (error) {
      console.log(error);
      // res.status(500).json({ message: "error while creating archive", error: error.message });
    }
  }
  async deleteArchives(req, res) {
    try {
      console.log(req);
      const ids = Array.isArray(req) ? req : [req]; // Garante que ids seja um vetor

      for (const id of ids) {
        const archive = await ArchiveModel.findById(id);

        if (!archive) {
          return res.status(404).json({ message: `Archive with ID ${id} not found` });
        }

        const urlSplit = archive.url.split("/");
        const key = urlSplit.pop();
        await deleteArchive(key);
        console.log("aqui");
        await ArchiveModel.findByIdAndDelete(id);
        console.log("aqui22");
      }
    } catch (error) {
      // res.status(500).json({ message: "Error while fetching archive", error: error.message });
      console.log(error);
    }
  }
}

export default new ArchiveController();
