"use strict";

module.exports = function(sequelize, DataTypes) {
    var UnitOpHours =  sequelize.define("UnitOpHours", {
                                      id: {
                                          type: DataTypes.STRING,
                                          field: 'iq_unit_hrs_of_operation_id',
                                          primaryKey : true
                                      },
                                        unitId: {
                                            type: DataTypes.STRING,
                                            allowNull: true,
                                            field:'iq_unit_mstr_id',
                                        },
                                        day: {
                                          type: DataTypes.ENUM('SUNDAY','MONDAY','TUESDAY','WEDNESDAY','THURSDAY','FRIDAY','SATURDAY'),
                                          allowNull: true
                                        },
                                        fromTime: {
                                          type: DataTypes.DATE,
                                          allowNull: true,
                                          field :'from_time'
                                        },
                                        untilTime: {
                                          type: DataTypes.DATE,
                                          allowNull: true,
                                          field : 'until_time'
                                        },
                                        lastApptTime: {
                                          type: DataTypes.DATE,
                                          allowNull: true,
                                          field : 'last_appt_time'
                                        },
                                        createdBy: {
                                          type: DataTypes.STRING,
                                          allowNull: true,
                                          field : 'created_by'
                                        },
                                        modified_by: {
                                          type: DataTypes.STRING,
                                          allowNull: true,
                                          field :'modified_by'
                                        },
                                        createdDatetime: {
                                          type: DataTypes.DATE,
                                          allowNull: true,
                                          field : 'created_datetime'
                                        },
                                        modified_datetime: {
                                          type: DataTypes.DATE,
                                          allowNull: true,
                                          field :'modified_datetime'
                                        }
                                    },
                                    {
                                        timestamps: true,
                                        createdAt: 'created_datetime',
                                        updatedAt: 'modified_datetime',
                                        deletedAt: false,
                                        force:false,
                                        freezeTableName: true, // Model tableName will be the same as the model name
                                        tableName: 'iq_unit_hrs_of_operation',
                                        classMethods: {
                                              associate: function(models) {
                                                      UnitOpHours.belongsTo(models.Unit, {
                                                        onDelete: "CASCADE",
                                                        foreignKey: "iq_unit_mstr_id"
                                                      });
                                              }
                                        }
                                    }
                                    );


                                    return UnitOpHours;
}