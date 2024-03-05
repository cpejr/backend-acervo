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
  async login(req, res) {
    try {
      let userFound = await UserModel.findOne({ email: req.body.email });

      if (!userFound) {
        userFound = await UserModel.create(req.body);

        await userFound.save();
      }
      const token = jwt.sign(
        {
          userFound,
        },
        process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_EXPIRE_IN }
      );

      return res.status(200).json({ token, user: userFound });
    } catch (error) {
      res.status(500).json({ message: "Error at login", error: error.message });
    }
  }
}
export default new UserController();
