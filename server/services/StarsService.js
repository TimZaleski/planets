import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";


class StarsService {
  async find(query = {}) {
    return await dbContext.Stars.find(query).populate('galaxy')
  }
  async findById(id) {
    let star = await dbContext.Stars.findById(id).populate('galaxy')
    if (!star) {
      throw new BadRequest("invalid id")
    }
    return star
  }
  async create(star) {
    return await dbContext.Stars.create(star)
  }
  async edit(update) {
    let updated = await dbContext.Stars.findOneAndUpdate({ _id: update.id }, update, { new: true })
    if (!updated) {
      throw new BadRequest("invalid id")
    }
    return updated
  }
  async delete(id) {
    let deleted = await dbContext.Stars.findOneAndDelete({ _id: id })
    if (!deleted) {
      throw new BadRequest("invalid id")
    }
  }

}

export const starsService = new StarsService();