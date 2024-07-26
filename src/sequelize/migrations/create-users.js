/* eslint-disable prettier/prettier */

/* eslint-disable @typescript-eslint/no-unused-vars */
'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Users', {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.STRING
            },
            email: {
                allowNull: false,
                type: Sequelize.STRING
            },
            username: {
                allowNull: false,
                type: Sequelize.STRING
            },
            password: {
                allowNull: false,
                type: Sequelize.STRING
            },
            fullname: {
                allowNull: false,
                type: Sequelize.STRING
            },
            avatar: {
                allowNull: false,
                type: Sequelize.STRING
            },
            provider_id: {
                allowNull: false,
                type: Sequelize.STRING,
                references: {
                    model: 'Auth_providers',
                    key: 'id',
                },
            },

            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('Users');
    }
};
