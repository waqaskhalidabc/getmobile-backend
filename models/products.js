var mongoose=require("mongoose");
const Joi = require("@hapi/joi");


var productSchema=mongoose.Schema({

title: String,
price :Number,
ram: String,
description:String,
contact: String,

});


function validateProduct(data) {
    const schema = Joi.object({
        title: Joi.string().min(3).max(30).required(),
      price: Joi.number().min(0).required(),
      ram:Joi.string().min(1).required(),
      description: Joi.string().max(150),
contact: Joi.string().min(11).max(11).required(),
    });
    return schema.validate(data, { abortEarly: false });
  }


const Product=mongoose.model('product',productSchema);

module.exports.Product=Product;
module.exports.validate = validateProduct;

