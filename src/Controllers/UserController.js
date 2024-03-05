import UserModel from "../Models/UserModel.js";
import jwt from "jsonwebtoken";

class UserController {
  async create(req, res) {
    try {
      let userFound = await UserModel.findOne({ email: req.body.email });

      if (!userFound) {
        userFound = await UserModel.create(req.body);
        await userFound.save();
      }
      const token = jwt.sign({ userFound }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE_IN,
      });
      return res.status(200).json({ token, user: userFound });
    } catch (error) {
      res.status(500).json({ message: "ERRO", error: error.message });
    }
  }

  async read(req, res) {
    try {
      const { id } = req.params;
      const user = await UserModel.findById(id);
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ message: "ERRO", error: error.message });
    }
  }

  async readAll(req, res) {
    try {
      const user = await UserModel.find();
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ message: "Error while fethcing Users", error: error.message });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const userFound = await UserModel.findById(id);
      if (!userFound)
        return res.status(404).json({ message: "Usuário com id " + id + " não encontrado!" });
      const user = await userFound.set(req.body).save();
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ message: "ERRO", error: error.message });
    }
  }

  async destroy(req, res) {
    try {
      const { id } = req.params;
      const userFound = await UserModel.findById(id);
      if (!userFound) {
        return res.status(404).json({ message: "Usuário com id " + id + " não encontrado!" });
      }
      await userFound.deleteOne();
      res.status(200).json({
        mensagem: "Usuário com id " + id + " deletado com sucesso!",
      });
    } catch (error) {
      res.status(500).json({ message: "ERRO", error: error.message });
    }
  }
}
export default new UserController();
