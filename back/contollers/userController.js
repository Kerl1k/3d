const ApiError = require("../error/ApiError");
const { User } = require("../models/models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

class UserController {
  async registration(req, res) {
    const { login, password } = req.body;
    if (!login || !password) {
      return next(ApiError.badRequest("неверный логин или пароль"));
    }
    const condidate = await User.findOne({ where: { login } });
    if (condidate) {
      return next(
        ApiError.badRequest("пользователь с таким именем уже существует")
      );
    }
    const hashPassword = await bcrypt.hash(password, 5);
    const user = await User.create({ login, password: hashPassword });
    const token = jwt.sign({ id: user.id, login }, process.env.SECRET_KEY, {
      expiresIn: "24h",
    });
    return res.json({ token });
  }
  async login(req, res) {
    const { login, password } = req.body;
    const user = await User.findOne({ where: { login } });
    if (!user) {
      return next(ApiError.badRequest("Пользователь не найден"));
    }
    let comparePassworod = bcrypt.compareSync(password, user.password);
    if (!comparePassworod) {
      return next(ApiError.badRequest("Неправильный пароль"));
    }
    const token = jwt.sign({ id: user.id, login }, process.env.SECRET_KEY, {
      expiresIn: "24h",
    });
    return res.json({ token });
  }
  async check(req, res) {
    const { id } = req.query;
    if (!id) {
      return next(ApiError.badRequest("Не задан ID"));
    }
    res.json(id);
  }
}

module.exports = new UserController();
