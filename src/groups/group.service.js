import Group from "./group.shema.js";

class GroupService {
  async getAll() {
    const groups = await Group.find();
    return groups;
  }

  async getOne(id) {
    const response = await Group.findById(id);
    return response;
  }

  async create(group) {
    const { name, course, amountOfStudents } = group;
    const createdGroup = await Group.create({ name, course, amountOfStudents });
    return createdGroup;
  }

  async update(group) {
    const newGroup = await Group.findByIdAndUpdate(group._id, group, {
      new: true,
    });
    return newGroup;
  }

  async delete(groupId) {
    const deletedGroup = await Group.findByIdAndDelete(groupId);
    return deletedGroup;
  }
}

export default new GroupService();
