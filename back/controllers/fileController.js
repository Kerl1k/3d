const { File } = require("../models/models");

class FileController {
  async getOne(req, res) {
    const { projectId } = req.params;
    const file = await File.findAll({
      where: { projectId },
    });
    return res.json(file);
  }
}

module.exports = new FileController();
