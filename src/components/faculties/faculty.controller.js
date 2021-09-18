import FacultyService from "./faculty.service.js";

class FacultyController {
  async getAll(req, res) {
    const groups = await FacultyService.getAll();
    res.status(200).json(groups);
    try {
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getOne(req, res) {
    try {
      const group = await FacultyService.getOne(req.params.id);
      res.status(200).json(group);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async create(req, res) {
    try {
      const createdGroup = await FacultyService.create(req.body);
      res.json(createdGroup);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const newGroup = await FacultyService.update(id, req.body);
      res.status(200).json(newGroup);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async delete(req, res) {
    try {
      const deletedGroup = await FacultyService.delete(req.params.id);
      res.status(200).json(deletedGroup);
    } catch (e) {
      res.status(500).json(e);
    }
  }
}

export default new FacultyController();
