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
      return res.status(200).json({ mensagem: "Evento Deletado com sucesso!" });
    } catch (error) {
      res.status(500).json({ message: "Error while deleting event", error: error.message });
    }
  }
}
export default new EventController();
