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
	},
	_creator: {
		type: mongoose.Schema.Types.ObjectId,
		required:true
	}
});

const Todo = mongoose.model('Todo', todooSchema);

module.exports = {Todo};