/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('profile').del()
  await knex('profile').insert([
    {
      "user_id": "5506f383-f2ca-4c17-bd45-84b6e273a8f7",
      "first_name": "Tafari",
      "last_name": "Campbell",
      "username": "tafaricampbell",
      "email": "tafaricampbell@example.com",
      "password": "password123"
    },
    {
      "user_id": "58425e20-6c72-4de3-b6c3-b5763ca06bc7",
      "first_name": "Sasha",
      "last_name": "McLeod",
      "username": "sashamcleod",
      "email": "sashamcleod@example.com",
      "password": "password123"
    },
    {
      "user_id": "2d6f674a-2e0c-46cf-a8a3-6f9d0c36a6f1",
      "first_name": "Jahiem",
      "last_name": "Brown",
      "username": "jahiembrown",
      "email": "jahiembrown@example.com",
      "password": "password123"
    }
    ,
    {
      "user_id": "b58d31dc-2c37-4322-b2e9-7c9f09744ea1",
      "first_name": "Aaliyah",
      "last_name": "Chang",
      "username": "aaliyahchang",
      "email": "aaliyahchang@example.com",
      "password": "password123"
    }
    ,
    {
      "user_id": "8ecae0d6-52f6-4a00-bb5f-4875c5c69615",
      "first_name": "Javon",
      "last_name": "Johnson",
      "username": "javonjohnson",
      "email": "javonjohnson@example.com",
      "password": "password123"
    },
    {
      "user_id": "77351a2a-5db5-4f4c-a4b4-8e72626d9d2f",
      "first_name": "Anastacia",
      "last_name": "Watson",
      "username": "anastaciawatson",
      "email": "anastaciawatson@example.com",
      "password": "password123"
    },
    {
      "user_id": "469f83dc-0311-4e63-8ce5-5af5f5ed23f5",
      "first_name": "Rashida",
      "last_name": "Blake",
      "username": "rashidablake",
      "email": "rashidablake@example.com",
      "password": "password123"
    },
    {
      "user_id": "19b2f497-51d7-4b1d-a0f4-71fb4e685170",
      "first_name": "Demar",
      "last_name": "Grant",
      "username": "demargrant",
      "email": "demargrant@example.com",
      "password": "password123"
    },

    {
      "user_id": "0ed7c0e8-c791-4d92-a0cc-babf15873c46",
      "first_name": "Jada",
      "last_name": "Campbell",
      "username": "jadacampbell",
      "email": "jadacampbell@example.com",
      "password": "password123"
    },
    {
      "user_id": "76a3f6ee-7e36-4be1-90c2-2e43f7c05ed2",
      "first_name": "Marlon",
      "last_name": "Davis",
      "username": "marlondavis",
      "email": "marlondavis@example.com",
      "password": "password123"
    }
  ]);
};


