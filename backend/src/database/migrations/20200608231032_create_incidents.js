exports.up = function (knex) {
    return knex.schema.createTable('incidents', function (table) {
        table.increments();

        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable();

        table.string('ong_id').notNullable();

        table.foreign('ong_id').references('id').inTable('ongs');
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('incidents');
};


/**
 * Para rodar o comando criado: npx knex migrate:latest
 * Para criar este arquivo: npx knex migrate:make create_incidents
 * Para dar rollback: npx knex migrate:rollback
 * Para listar todos os comandos: npx knex
 */