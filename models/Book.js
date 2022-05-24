// models/Book.js

const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  authors: {
    type: String,
    required: true
  },
  journal_name: {
    type: String,
    required: true
  },
  content: {
    type: String
  },
  publication_date: {
    type: Date
  },
  volume: {
    type: Number
  },
  number: {
    type: Number
  },
  pages: {
    type: Number
  },
  updated_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Book = mongoose.model('book', BookSchema);