const EventModel = require("../Models/EventModel");

class EventController {
  async create(req, res) {
    // const event = await EventModel.create(req.body);
    // return res.status(200).json(event);
  }
  async read(req, res) {
    // const event = await EventModel.find();
    // return res.status(200).json(event);
  }
  async update(req, res) {
    // const { id } = req.params;
    // const event = await EventModel.findByIdAndDelete(id, req.body);
  }
  async delete(req, res) {
    // const { id } = req.params;
    // await EventModel.findByIdAndDelete(id);
    // return res.status(200).json({ mensagem: "Evento Deletado com sucesso!" });
  }
}
module.exports = new EventController();
