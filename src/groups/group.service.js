import Pool from "../utils/database.js";
class GroupService {
  async getAll() {
    const query = "SELECT * FROM `group`";
    const groups = await Pool.query(query);
    return groups[0];
  }

  async getOne(id) {
    const query = "SELECT * FROM `group` WHERE id = " + `${id}`;
    const response = await Pool.query(query);
    return response[0];
  }

  async create(group) {
    console.log(group);
    const { name, course, amountOfStudents, idFaculty } = group;
    const query =
      "INSERT INTO `group` VALUES " +
      `(id, "${name}", ${course}, ${amountOfStudents}, ${idFaculty})`;
    const createdGroup = await Pool.query(query);
    return createdGroup;
  }

  async update(id, group) {
    const { name, course, amount_of_students, id_faculty } = group;
    const query =
      "UPDATE `group` SET " +
      `name = "${name}", course = ${course}, amount_of_students = ${amount_of_students}, id_faculty=${id_faculty}  WHERE id = ${id}`;
    const newGroup = await Pool.query(query);
    return newGroup;
  }

  async delete(groupId) {
    const query = "DELETE FROM `group` WHERE id = " + `${groupId}`;
    const deletedGroup = await Pool.query(query);
    return deletedGroup;
  }
}

export default new GroupService();
