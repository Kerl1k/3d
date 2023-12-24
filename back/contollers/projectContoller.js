const { Project, File } = require("../models/models");
const ApiError = require("../error/ApiError");
const uuid = require("uuid");
const path = require("path");
const fs = require("node:fs/promises");

class ProjectController {
  async create(req, res) {
    const { id, name, subdivision, email, phone, status } = req.body;
    const { file } = req.files;
    const type = file.name.split(".").pop();
    let fileName = file.name;
    await fs.mkdir("static/" + id, () => {});
    file.mv(path.resolve(__dirname, "..", "static/", id, fileName));
    // const files = File.create({
    //   id: Date.now(),
    //   name: fileName,
    //   type,
    //   accessLink: "",
    //   size: file.size,
    //   path: id,
    //   date: Date.now(),
    // });

    const project = Project.create({
      id,
      name,
      subdivision,
      email,
      phone,
      status,
      fileName,
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
