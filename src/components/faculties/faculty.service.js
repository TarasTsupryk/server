import Pool from "../../utils/database.js";

class FacultyService {
  async getAll() {
    const query = "SELECT * FROM faculty ORDER BY id";
    const response = await Pool.query(query);
    return response[0];
  }

  async getOne(facultyId) {
    const query = "SELECT * FROM faculty WHERE id = " + `${facultyId}`;
    const response = await Pool.query(query);
    return response[0];
  }

  async create(faculty) {
    const { name } = faculty;
    if (!name) return "name cannot be empty";
    const query = "INSERT INTO faculty VALUES " + `(id, "${name}")`;
    const response = await Pool.query(query);
    return response;
  }

  async update(facultyId, faculty) {
    const { name } = faculty;
    if (!name) return "name cannot be empty";
    const query = `UPDATE faculty SET name = "${name}" WHERE id = ${facultyId}`;
    try {
      const response = await Pool.query(query);
      return response;
    } catch (e) {
      console.log(e);
    }
  }

  async delete(facultyId) {
    const query = "DELETE FROM faculty WHERE id = " + `${facultyId}`;
    const response = await Pool.query(query);
    return response;
  }
}

export default new FacultyService();
