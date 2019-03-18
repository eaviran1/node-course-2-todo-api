const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

const id = '5c8e44570c04ae2d841eec0b';

// const id = '5c8f892a44d42946d8f2bb15';

if(!ObjectID.isValid(id)){
	console.log('Id is not valid');
}

// Todo.find({
// 	_id: id
// }).then((todos)=>{
// 	console.log('Todos', todos);
// });

// Todo.findOne({
// 	_id: id
// }).then((todo)=>{
// 	console.log('Todo', todo);
// });

// Todo.findById(id).then((todo)=>{
// 	if(!todo){
// 		return console.log('Id not found');
// 	}
// 	console.log('Todo By Id', todo);
// }).catch((e)=>console.log(e))

User.findById(id).then((user)=>{
	if(!user){
		return console.log('Id not found');
	}
	console.log('User By Id', user);
}).catch((e)=>console.log(e))