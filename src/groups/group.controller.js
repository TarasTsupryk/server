import GroupService from "./group.service.js";

class GroupController {
  async getAll(req, res) {
    const groups = await GroupService.getAll();
    res.status(200).json(groups);
    try {
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getOne(req, res) {
    try {
      const group = await GroupService.getOne(req.params.id);
      res.status(200).json(group);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async create(req, res) {
    try {
      const createdGroup = await GroupService.create(req.body);
      res.json(createdGroup);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async update(req, res) {
    try {
      const newGroup = await GroupService.update(req.body);
      res.status(200).json(newGroup);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async delete(req, res) {
    try {
      const deletedGroup = await GroupService.delete(req.params.id);
      res.status(200).json(deletedGroup);
    } catch (e) {
      res.status(500).json(e);
    }
  }
}

export default new GroupController();
