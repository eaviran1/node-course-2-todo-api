// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => { //v2
	if (err) {
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server');

	// db.collection('Todos').deleteMany({text:'Eat lunch'}).then((res)=>{
	// 	console.log(res);
	// })

	// db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((res)=>{
	// 	console.log(res)
	// });

	// db.collection('Todos').findOneAndDelete({completed:false}).then((res)=>{
	// 	console.log(res);
	// })

	db.collection('Users').deleteMany({name:'Eitan Aviran'}).then((res)=>{
		console.log(res);
	});

	db.collection('Users').findOneAndDelete({
		_id: new ObjectID('5c863e911c717d2ab803e2c0')
	}).then((res)=>{console.log(res)});


	// db.close();
});