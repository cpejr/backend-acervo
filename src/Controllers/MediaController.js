import MediaModel from "Models/MediaModel.js";

class MediaController {
  async create(req, res) {
    // const event = await MediaModel.create(req.body);
    // return res.status(200).json(event);
  }
  async read(req, res) {
    // const event = await MediaModel.find();
    // return res.status(200).json(event);
  }
  async update(req, res) {
    // const { id } = req.params;
    // const event = await MediaModel.findByIdAndDelete(id, req.body);
  }
  async delete(req, res) {
    // const { id } = req.params;
    // await MediaModel.findByIdAndDelete(id);
    // return res.status(200).json({ mensagem: "Imagem Deletada com sucesso!" });
  }
}
module.exports = new MediaController();
