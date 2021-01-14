const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
  genes: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  age: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  img1: {
    type: String,
    required: true
  },
  img2: {
    type: String,
    required: true
  },
  img3: {
    type: String,
    required: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
}
)

module.exports = mongoose.model('Product', productSchema)
