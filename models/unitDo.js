"use strict";

module.exports = function(sequelize, DataTypes) {
    return sequelize.define("Unit", {
                                      id: {
                                              type: DataTypes.STRING,
                                              field: 'iq_unit_mstr_id'
                                      },
                                      unitName: {
                                            type: DataTypes.STRING,
                                            field: 'unit_name'
                                      },
                                     owner: {
                                             type: DataTypes.STRING,
                                             field: 'owner'
                                     },
                                      description: {
                                              type: DataTypes.STRING,
                                              field: 'description'
                                      },
                                      createdBy: {
                                                type: DataTypes.STRING,
                                                field: 'created_by'
                                        },
                                      modifiedBy: {
                                               type: DataTypes.STRING,
                                               field: 'modified_by'
                                       },
                                      nofChairs: {
                                                type: DataTypes.INTEGER,
                                                field: 'nof_chairs'
                                      },
                                      nofBeds: {
                                                type: DataTypes.INTEGER,
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