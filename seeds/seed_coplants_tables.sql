import bcrypt from 'bcrypt';
import { db } from '@vercel/postgres';
import { plants, plantImages, users, saved } from '../lib/data'


const client = await db.connect();

async function seedPlants() {
  const insertedPlants = await Promise.all(
    x.map(async (x) => {
      return client.sql`
        INSERT INTO XXX ()
        VALUES ()
        ON CONFLICT (id) DO NOTHING;
      `
    })
  )
  return insertedPlants
};

async function seedPlantImages() {
  const insertedPlantImages = await Promise.all(
    x.map(async (x) => {
      return client.sql`
        INSERT INTO XXX ()
        VALUES ()
        ON CONFLICT (id) DO NOTHING;
      `
    })
  )
  return insertedPlantImages
};

async function seedSaved() {
  const insertedSaved = await Promise.all(
    x.map(async (x) => {
      return client.sql`
        INSERT INTO XXX ()
        VALUES ()
        ON CONFLICT (id) DO NOTHING;
      `
    })
  )
  return insertedSaved
};

async function seedUsers() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  const insertedUsers = await Promise.all(
    users.map(async (user) => {
      const hashedPassword = await bcrypt.hash(user.password, 10);
      return client.sql`
        INSERT INTO users (id, name, email, password)
        VALUES (${user.id}, ${user.email}, ${hashedPassword})
        ON CONFLICT (id) DO NOTHING;
      `;
    }),
  );
  return insertedUsers;
}


  // try {
  //   await client.sql`BEGIN`;
  //   await seedPlants();
  //   await seedPlantImages();
  //   await seedSaved();
  //   await seedUsers();
  //   await client.sql`COMMIT`;

  //   return Response.json({ message: 'Database seeded successfully' });
  // } catch (error) {
  //   await client.sql`ROLLBACK`;
  //   return Response.json({ error }, { status: 500 });
  // }
