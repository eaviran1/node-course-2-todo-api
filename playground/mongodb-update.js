// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => { //v2
	if (err) {
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server');

	// db.collection('Todos').findOneAndUpdate({
	// 	_id : new ObjectID("5c866997ef4f3a6f92b07a6f")
	// }, {
	// 	$set:{
	// 		completed: true
	// 	}		
	// }, {
	// 	returnOriginal: false
	// }).then((res)=>{
	// 	console.log(res);
	// });

	db.collection('Users').findOneAndUpdate({
		_id : new ObjectID("5c863e8c5cc49437081ee448")
	}, {
		$set: {
			name: 'Eitan Aviran'
		},
		$inc: {
			age:1
		}
	}, {
		returnOriginal : false
	}).then((res)=> console.log(res));

	// db.close();
});