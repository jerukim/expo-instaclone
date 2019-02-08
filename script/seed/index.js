const db = require('../../server/db');
const {
  User,
  Post,
  Comment,
  Like,
  Relationship,
  Tag,
} = require('../../server/db/models');
const {
  userData,
  postData,
  likeData,
  commentData,
  relationshipData,
} = require('./seed');

async function seed() {
  await db.sync({ force: true });
  console.log('db synced!');

  const users = await Promise.all(userData.map(user => User.create(user)));
  console.log(`seeded ${users.length} users`);

  const posts = await Promise.all(postData.map(post => Post.create(post)));
  console.log(`seeded ${posts.length} posts`);

  const likes = await Promise.all(likeData.map(like => Like.create(like)));
  console.log(`seeded ${likes.length} likes`);

  const comments = await Promise.all(
    commentData.map(comment => Comment.create(comment))
  );
  console.log(`seeded ${comments.length} comments`);

  const relationships = await Promise.all(
    relationshipData.map(relationship => Relationship.create(relationship))
  );
  console.log(`seeded ${relationships.length} relationships`);

  console.log('seeded successfully');
}

async function runSeed() {
  console.log('seeding...');
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log('closing db connection');
    await db.close();
    console.log('db connection closed');
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed();
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed;
