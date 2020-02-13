'use strict';

module.exports = function(sequelize, Datatypes) {
    const parks = sequelize.define("parks", {
        id: {
            type: Datatypes.INTEGER(11),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        num: Datatypes.INTEGER,
        facility_name: Datatypes.STRING,
        facility_type: Datatypes.STRING,
        facility_inout: Datatypes.STRING,
        x_coord: Datatypes.FLOAT,
        y_coord: Datatypes.FLOAT,
        latitude: Datatypes.FLOAT,
        longitude: Datatypes.FLOAT,
        createdAt: {
            type: Datatypes.DATE(3),
            allowNull: false,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP(3)')
        },
        updatedAt: {
            type: Datatypes.DATE(3),
            allowNull: false,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP(3)')
        }
    })
    // parks.associate = (models) => {
    //     require
    // }
    return parks;
};

// Users.associate = function(models) {
//     Users.hasOne(models.login, {
//       foreignKey: 'user_id',
//       as: 'loginDetails'
//     });

//     Users.hasMany(models.customer_query, {
//       foreignKey: 'user_id',
//       as: 'queryDetails'
//     });
//   };