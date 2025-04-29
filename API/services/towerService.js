const { Tower } = require("../Entity");
const towerOut = require("../models/out/tower/towerOut");
const ApiError = require("../exeptions/api-error");
const components = require("../types/componentTypes");

const TOWER_TYPE_SIZE = components.towerTypeSize;
const TOWER_FAN_TYPE = components.towerFanType;
const reverseTowerTypeSize = components.invertMap(TOWER_TYPE_SIZE);
const reverseTowerFanType = components.invertMap(TOWER_FAN_TYPE);

class TowerService {
  async create(towerData) {
    const existingTower = await Tower.findOne({
      where: { title: towerData.title },
    });

    if (existingTower) {
      throw ApiError.BadRequest(
        `Tower with title "${towerData.title}" already exists`
      );
    }

    const type_size = TOWER_TYPE_SIZE.get(towerData.type_size);
    if (!type_size) {
      throw ApiError.BadRequest(
        `Unknown tower type size: ${towerData.type_size}`
      );
    }

    if (towerData.fan_included) {
      const fan_type = TOWER_FAN_TYPE.get(towerData.fan_type);
      if (!fan_type) {
        throw ApiError.BadRequest(
          `Unknown tower fan type: ${towerData.fan_type}`
        );
      }
    }

    await Tower.create({
      ...towerData,
      type_size,
      fan_type,
    });
  }

  async getAllTowers() {
    const towers = await Tower.findAll();
    return towers.map((tower) => {
      const towerObj = tower.toJSON();
      towerObj.type_size = reverseTowerTypeSize.get(towerObj.type_size);
      towerObj.fan_type =
        towerObj.fan_type !== null
          ? reverseTowerFanType.get(towerObj.fan_type)
          : null;
      return new towerOut(towerObj);
    });
  }

  async getTowerById(towerId) {
    const tower = await Tower.findByPk(towerId);

    if (!tower) {
      throw ApiError.BadRequest("Tower with such ID not found");
    }

    const towerObj = tower.toJSON();
    towerObj.type_size = reverseTowerTypeSize.get(towerObj.type_size);
    towerObj.fan_type =
      towerObj.fan_type !== null
        ? reverseTowerFanType.get(towerObj.fan_type)
        : null;
    return new towerOut(towerObj);
  }

  async update(towerId, towerData) {
    const tower = await Tower.findByPk(towerId);
    if (!tower) {
      throw ApiError.BadRequest("Tower not found");
    }

    const towerTitleCheck = await Tower.findOne({
      where: { title: towerData.title },
    });
    if (towerTitleCheck && towerTitleCheck.id !== tower.id) {
      throw ApiError.BadRequest(
        `Tower with title "${towerData.title}" already exists`
      );
    }

    const type_size = TOWER_TYPE_SIZE.get(towerData.type_size);
    if (!type_size) {
      throw ApiError.BadRequest(
        `Unknown tower type size: ${towerData.type_size}`
      );
    }

    if (towerData.fan_included) {
      const fan_type = TOWER_FAN_TYPE.get(towerData.fan_type);
      if (!fan_type) {
        throw ApiError.BadRequest(
          `Unknown tower fan type: ${towerData.fan_type}`
        );
      }
    }

    tower.set({
      ...towerData,
      type_size,
      fan_type,
    });
    return await tower.save();
  }

  async delete(towerId) {
    const tower = await Tower.findByPk(towerId);
    if (!tower) {
      throw ApiError.BadRequest("Tower not found");
    }
    return await tower.destroy();
  }
}

module.exports = new TowerService();
