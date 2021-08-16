const mongoose = require("mongoose");
var uniqueValidator = require('mongoose-unique-validator');
const ProductSchema = new mongoose.Schema({
    project: { 
				type: String,
				required: [true,"Project is required"],
				minlength:[3,"Project must be at least 3 char"],
				unique: [true,"Project must be unique"],
			},

	progress: { 
				type: Number,
				required: [true,"progress is required"]
			},

	due: 	{
				type: Date,
				required: [true,"date is required"]
			}
	},

	{timestamps: true });
	ProductSchema.plugin(uniqueValidator);
module.exports.Product = mongoose.model('Product', ProductSchema);




