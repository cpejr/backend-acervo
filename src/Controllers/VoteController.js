const VoteModel = require("../Models/VoteModel");

class VoteController {
  async create(req, res) {
    const event = await VoteModel.create(req.body);
    return res.status(200).json(event);
  }
  async read(req, res) {
    const event = await VoteModel.find();
    return res.status(200).json(event);
  }
  async update(req, res) {
    const { id } = req.params;
    const event = await VoteModel.findByIdAndDelete(id, req.body);
  }
  async delete(req, res) {
    const { id } = req.params;
    await VoteModel.findByIdAndDelete(id);
    return res.status(200).json({ mensagem: "Voto Deletado com sucesso!" });
  }
}
module.exports = new VoteController();
