
// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
// var obj = new ObjectID();
// console.log(obj);

// var user = {name: 'eitan', age: 60};
// var {name} = user;
// console.log(name);

// MongoDB v3 MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => { //v2
	if (err) {
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server');
	// v3  const db = client.db('TodoApp')

	// db.collection('Todos').insertOne({
	// 	text: 'Something to do',
	// 	completed: false
	// }, (err, result) => {
	// 	if(err) {
	// 		return console.log('Unable to insert todo', err)
	// 	}

	// 	console.log(JSON.stringify(result.ops, undefined, 2));
	// });

	// db.collection('Users').insertOne({
	// 	name: 'Eitan Aviran',
	// 	age: 60,
	// 	location: 'Israel'
	// }, (err, result)=>{
	// 	if(err) {
	// 		return console.log('Unable to insert user', err);
	// 	}

	// 	console.log(JSON.stringify(result.ops, undefined, 2));
	// })

	db.close(); //v2
	//v3 client.close();
});