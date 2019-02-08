const User = require('./user');
const Post = require('./post');
const Comment = require('./comment');
const Like = require('./like');
const Relationship = require('./relationship');
const Tag = require('./tag');

User.hasMany(Post);
Post.belongsTo(User);

User.hasMany(Comment);
Comment.belongsTo(Post);

User.hasMany(Like);
Like.belongsTo(User);
Post.hasMany(Like);
Like.belongsTo(Post);

User.belongsToMany(User, { through: Relationship, as: 'following' });

Post.hasMany(Tag);
Tag.belongsTo(Post);

module.exports = {
  User,
  Post,
  Comment,
  Like,
  Relationship,
  Tag,
};
