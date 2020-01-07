'use strict';
module.exports = (sequelize, DataTypes) => {
  const category = sequelize.define('category', {
    name: DataTypes.STRING
  }, {});
  category.associate = function(models) {
    models.category.belongsToMany(models.user, {through: 'users_categories'})
    models.category.belongsToMany(models.recipe, {through: 'recipes_categories'})
  };
  return category;
};