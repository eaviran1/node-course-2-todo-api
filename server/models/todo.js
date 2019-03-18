const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todooSchema = new Schema({
	text: {
		type: String,
		required: true,
		minlength: 1,
		trim: true
	},
	completed: {
		type: Boolean,
		default: false
	},
	completedAt: {
		type: Number,
		default: null
	}
});

const Todo = mongoose.model('Todo', todooSchema);
// const Todo = mongoose.model('Todo', {
// 	text: {
// 		type: String,
// 		required: true,
// 		minlength: 1,
// 		trim: true
// 	},
// 	completed: {
// 		type: Boolean,
// 		default: false
// 	},
// 	completedAt: {
// 		type: Number,
// 		default: null
// 	}
// });

module.exports = {Todo};