import TeacherService from "./teacher.service.js";

class TeacherController {
  async getAll(req, res) {
    const teachers = await TeacherService.getAll();
    res.status(200).json(teachers);
    try {
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getOne(req, res) {
    try {
      const teacher = await TeacherService.getOne(req.params.id);
      res.status(200).json(teacher);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async create(req, res) {
    try {
      const createdTeacher = await TeacherService.create(req.body);
      res.json(createdTeacher);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const newTeacher = await TeacherService.update(id, req.body);
      res.status(200).json(newTeacher);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async delete(req, res) {
    try {
      const deletedTeacher = await TeacherService.delete(req.params.id);
      res.status(200).json(deletedTeacher);
    } catch (e) {
      res.status(500).json(e);
    }
  }
}

export default new TeacherController();
