import Pool from "../../utils/database.js";

class DisciplineService {
  async getAll() {
    const query = " SELECT * FROM discipline ORDER BY id";
    const disciplines = await Pool.query(query);
    return disciplines[0];
  }

  async getOne(id) {
    const query = `SELECT * FROM discipline WHERE id = ${id}`;
    const discipline = await Pool.query(query);
    return discipline[0];
  }

  async create(discipline) {
    const { name, id_group } = discipline;
    const query = `INSERT INTO discipline VALUES (id, "${name}", ${id_group})`;
    const createDiscipline = await Pool.query(query);
    return createDiscipline;
  }

  async update(disciplineId, discipline) {
    const { name, id_group } = discipline;
    const query = `UPDATE discipline SET
    name = "${name}", id_group = "${id_group}" WHERE id = ${disciplineId}`;
    const newDiscipline = await Pool.query(query);
    return newDiscipline;
  }

  async delete(disciplineId) {
    const query = `DELETE FROM discipline WHERE id = ${disciplineId}`;
    const deletedDiscipline = await Pool.query(query);
    return deletedDiscipline;
  }
}

export default new DisciplineService();
