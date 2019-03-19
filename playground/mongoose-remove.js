const {ObjectID} = require('mongodb');

const {mongoose} = require('../server/db/mongoose');
const {Todo} = require('../server/models/todo');
const {User} = require('../server/models/user');

// Todo.deleteMany({}).then((result)=> console.log(result));

Todo.findByIdAndRemove('5c90c7923cc7426c339dd62b').then((todo) =>{
	console.log(todo);
});
