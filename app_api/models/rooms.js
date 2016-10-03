var mongoose = require("mongoose");


var roomSchema = new mongoose.Schema({
	roomName: {
		type: String,
		unique: true,
		required: true
	},
	description: {
		type:String,
		default: "This is your room's description."
	}, 
	admin : {
		type: String,
		required: true,
		default: ["test"]
	},
	public: {
		type: Boolean,
		required: true,
		default: false
	},
	playlist: Boolean,
	userLimit: {
		type: Number,
		required: true,
		default: 10
	},
	currentUsers:{
		type: Number,
		required: true,
		default: 0
	},
	tags: {
		type: [String]
	},
	nowPlayingID: Number
});

mongoose.model('Room', roomSchema);