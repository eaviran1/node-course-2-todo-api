
// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => { //v2
	if (err) {
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server');

	// db.collection('Todos').find({
	// 	_id: new  ObjectID("5c8638baef4f3a6f92b06c6a")
	// }).toArray().then((docs)=>{
	// 	console.log('Todos');
	// 	console.log(JSON.stringify(docs, undefined, 2));
	// }, (err) => {
	// 	console.log('Unable to fetch todos', err);
	// })

	// db.collection('Todos').find().count().then((count)=>{
	// 	console.log('Todos count: ',count);
	// }, (err) => {
	// 	console.log('Unable to fetch todos', err);
	// })

	db.collection('Users').find({
		name: 'Eitan Aviran'
	}).toArray().then((users) => {
		console.log('Users');
		console.log(JSON.stringify(users,undefined,2));
	}, (err) => {
		console.log('Unable to fetch users', err)
	});

	// db.close();
});