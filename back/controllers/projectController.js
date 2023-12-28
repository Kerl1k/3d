const { Project, File } = require("../models/models");
const path = require("path");
const fs = require("node:fs/promises");

class ProjectController {
  async create(req, res) {
    const { id, name, subdivision, email, phone, status } = req.body;
    const project = Project.create({
      id,
      name,
      subdivision,
      email,
      phone,
      status,
    });

    const files = req.files;
    const keys = Object.keys(files);
    await fs.mkdir("static/" + id);
    for (const key of keys) {
      const currentFile = files[key];
      const type = currentFile.name.split(".").pop();
      let fileName = currentFile.name;
      currentFile.mv(path.resolve(__dirname, "..", "static/", id, fileName));
      console.log({
        id: Date.now(),
        name: fileName,
        type,
        accessLink: "",
        size: currentFile.size,
        path: id,
        date: Date.now(),
        projectId: id,
      });
      File.create({
        id: Date.now(),
        name: fileName,
        type,
        accessLink: "",
        size: currentFile.size,
        path: id,
        date: Date.now(),
        projectId: id,
      });
    }
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
