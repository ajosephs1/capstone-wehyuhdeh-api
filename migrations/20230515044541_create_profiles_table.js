/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema
      .createTable('profile', (table) => {
        table.uuid('user_id').primary();
        table.string('first_name').notNullable();
        table.string('last_name').notNullable()
        table.string('username').notNullable();
        table.string('email').notNullable();
        table.string('password').notNullable();
        table.timestamp('updated_at').defaultTo(knex.fn.now());
      })
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTable('profile');
  };