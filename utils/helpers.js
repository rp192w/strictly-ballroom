
const { Project } = require('../models');

const getProjectData = async (userId) => {
  const projectData = await Project.findAll({ where: { user_id: userId } });
  return projectData.map((project) => project.get({ plain: true }));
};

module.exports = { getProjectData };
