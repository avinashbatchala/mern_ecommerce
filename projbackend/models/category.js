const mongoose = require("mongoose")

const categorySchema = new mongoose.Schema({
    name: {
        type: String.apply,
        trim: true,
        required: true,
        maxlength: 32,
        unique: true
    }
}, 
{timestamps: true}
)

module.exports = mongoose.model("Category", categorySchema)