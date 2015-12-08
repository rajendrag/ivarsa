var Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
    return sequelize.define("Unit", {
                                      id: {
                                              type: Sequelize.STRING,
                                              field: 'iq_unit_mstr_id'
                                      },
                                      unitName: {
                                            type: Sequelize.STRING,
                                            field: 'unit_name'
                                      },
                                     owner: {
                                             type: Sequelize.STRING,
                                             field: 'owner'
                                     },
                                      description: {
                                              type: Sequelize.STRING,
                                              field: 'description'
                                      },
                                      createdBy: {
                                                type: Sequelize.STRING,
                                                field: 'created_by'
                                        },
                                      modifiedBy: {
                                               type: Sequelize.STRING,
                                               field: 'modified_by'
                                       },
                                      nofChairs: {
                                                type: Sequelize.INTEGER,
                                                field: 'nof_chairs'
                                      },
                                      nofBeds: {
                                                type: Sequelize.INTEGER,
                                                field: 'nof_beds'
                                      }

                                    },
                                    {
                                        timestamps: true,
                                        createdAt: 'created_datetime',
                                        updatedAt: 'modified_datetime',
                                        deletedAt: false,
                                        force:false,
                                        freezeTableName: false, // Model tableName will be the same as the model name
                                        tableName: 'iq_unit_mstr'
                                    })
}