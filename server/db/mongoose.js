const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGOLAB_URI,{useNewUrlParser:true});

module.exports = {mongoose};