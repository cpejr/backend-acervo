import UserModel from "Models/UserModel.js";

class UserController {
  async create(req, res) {
    // const event = await UserModel.create(req.body);
    // return res.status(200).json(event);
  }
  async read(req, res) {
    // const event = await UserModel.find();
    // return res.status(200).json(event);
  }
  async update(req, res) {
    // const { id } = req.params;
    // const event = await UserModel.findByIdAndDelete(id, req.body);
  }
  async delete(req, res) {
    // const { id } = req.params;
    // await UserModel.findByIdAndDelete(id);
    // return res.status(200).json({ mensagem: "Usuário Deletado com sucesso!" });
  }
}
export default new UserController();
