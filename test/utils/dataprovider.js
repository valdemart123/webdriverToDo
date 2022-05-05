const faker = require('faker');

module.exports = class User {
  constructor() {
  }

  getText() {
    return faker.lorem.lines(1);
  }

  getArabicText() {
    return 'بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِي';
  }
}