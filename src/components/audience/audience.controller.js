import AudienceService from "./audience.service.js";

class AudienceController {
  async getAll(req, res) {
    const response = await AudienceService.getAll();
    res.status(200).json(response);
    try {
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getOne(req, res) {
    try {
      const response = await AudienceService.getOne(req.params.id);
      res.status(200).json(response);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async create(req, res) {
    try {
      const response = await AudienceService.create(req.body);
      res.json(response);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const response = await AudienceService.update(id, req.body);
      res.status(200).json(response);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async delete(req, res) {
    try {
      const response = await AudienceService.delete(req.params.id);
      res.status(200).json(response);
    } catch (e) {
      res.status(500).json(e);
    }
  }
}

export default new AudienceController();
