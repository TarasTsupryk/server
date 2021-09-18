import Pool from "../../utils/database.js";

class TeacherService {
  async getAll() {
    const query = "SELECT * FROM teacher ORDER BY id";
    const teachers = await Pool.query(query);
    return teachers[0];
  }

  async getOne(id) {
    const query = `SELECT * FROM teacher WHERE id = ${id}`;
    const teacher = await Pool.query(query);
    return teacher[0];
  }

  async create(teacher) {
    const { name, surname, date_of_birth, position, photo } = teacher;
    const query = `INSERT INTO teacher VALUES (id, "${name}", "${surname}", "${date_of_birth}", "${position}", "${photo}")`;
    const createdTeacher = await Pool.query(query);
    return createdTeacher;
  }

  async update(id, teacher) {
    const { name, surname, date_of_birth, position, photo } = teacher;
    const query = `UPDATE teacher SET
    name = "${name}", surname = "${surname}", date_of_birth = "${date_of_birth}", position="${position}", photo = "${photo}" WHERE id = ${id}`;
    console.log(query);
    const newTeacher = await Pool.query(query);
    return newTeacher;
  }

  async delete(teacherId) {
    const query = `DELETE FROM teacher WHERE id = ${teacherId}`;
    const deletedTeacher = await Pool.query(query);
    return deletedTeacher;
  }
}

export default new TeacherService();
