const { Project } = require("../models/models");
const ApiError = require("../error/ApiError");
const uuid = require("uuid");
const path = require("path");

class ProjectController {
  async create(req, res) {
    const { name, subdivision, email, phone, status } = req.body;
    const { file } = req.files;
    let fileName = uuid.v4();
    file.mv(path.resolve(__dirname, "..", "static", fileName));
    const project = await Project.create({
      name,
      subdivision,
      email,
      phone,
      status,
      file: fileName,
    });
    return res.json(project);
  }

  async getOne(req, res) {
    const { id } = req.params;
    const project = await Project.findOne({
      where: { id },
    });
    return res.json(project);
  }
  async getAll(req, res) {
    console.log("QWE");
    const project = await Project.findAll();
    res.json(project);
  }
  async change(req, res) {}
  async delete(req, res) {}
}

module.exports = new ProjectController();
