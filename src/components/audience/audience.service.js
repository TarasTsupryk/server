import Pool from "../../utils/database.js";

class AudienceService {
  async getAll() {
    const query = "SELECT * FROM audience ORDER BY id";
    const audience = await Pool.query(query);
    return audience[0];
  }

  async getOne(id) {
    const query = "SELECT * FROM audience WHERE id = " + `${id}`;
    const response = await Pool.query(query);
    return response[0];
  }

  async create(audience) {
    const { number, floor, educational_building } = audience;
    const query =
      "INSERT INTO audience VALUES " +
      `(id, "${number}", ${floor}, ${educational_building})`;
    const createdAudience = await Pool.query(query);
    return createdAudience;
  }

  async update(id, audience) {
    const { number, floor, educational_building } = audience;
    const query =
      "UPDATE audience SET " +
      `number = "${number}", floor = ${floor}, educational_building = ${educational_building} WHERE id = ${id}`;
    try {
      const newAudience = await Pool.query(query);
      return newAudience;
    } catch (e) {
      console.log(e);
    }
  }

  async delete(groupId) {
    const query = "DELETE FROM audience WHERE id = " + `${groupId}`;
    const deletedAudience = await Pool.query(query);
    return deletedAudience;
  }
}

export default new AudienceService();
