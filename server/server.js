const _=require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} =require('mongodb');

const{mongoose} = require('./db/mongoose');
mongoose.set('useCreateIndex', true);

const {Todo} = require('./models/todo');
const {User} = require('./models/user');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
	const todo = new Todo({
		text: req.body.text
	});

	todo.save().then((doc)=>{
		res.send(doc);
	}, (e)=> {
		res.status(400).send(e);
	});
});

app.get('/todos', (req, res) => {
	Todo.find().then((todos)=>{
		res.send({todos});
	}, (e)=>{
		res.status(400).send(e);
	});
});

app.get('/todos/:id',(req, res)=>{
	const id = req.params.id;
	
	if(!ObjectID.isValid(id)) {
		return res.status(404).send()
		console.log('Id is not valid');
	}

	Todo.findById(id).then((todo)=>{
		if(!todo){
			return res.status(404).send();
		}
		res.send({todo});
	}).catch((e)=>{
		res.status(400).send();
	});
});

app.delete('/todos/:id', (req, res)=>{
	//get the id
	const id = req.params.id;
	if(!ObjectID.isValid(id)) {
		return res.status(404).send();
	}
	//remove todo by isValid
	Todo.findByIdAndRemove(id).then((todo) =>{
		if(!todo){
			return res.status(404).send();
		}
		return res.send({todo});
	}).catch((e)=>res.status(400).send());
});

app.post('/users', (req, res)=> {
	const body = _.pick(req.body, ['email', 'password']);
	var  user = new User(body);

	user.save().then((user)=>{
		res.send(user);
	}).catch((e)=>{
		res.status(400).send(e);
	})
})



app.listen(port, () => {
	console.log(`Started on port ${port}`);
});

module.exports = {app};

