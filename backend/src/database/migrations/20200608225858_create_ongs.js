exports.up = function (knex) {
    return knex.schema.createTable('ongs', function (table) {
        table.string('id').primary();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
        table.string('city').notNullable();
        table.string('uf', 2).notNullable();
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('ongs');
};

/**
 * Para rodar o comando criado: npx knex migrate:latest
 * Para criar este arquivo: npx knex migrate:make create_incidents
 */