function createTitle(newTitle) {
  newTitle = `The ${newTitle}`
  return newTitle
}

function buildMainCharacter(characterName, characterAge, characterPronouns) {
  var character = {
    name: characterName,
    age: characterAge,
    pronouns: characterPronouns
  }
  return character; 
}

function saveReview(comment, reviews){
  console.log("comment", comment);
  console.log("reviews", reviews);
  
    if (reviews.includes(comment)) {
      return reviews;
    } else {
      reviews.push(comment);
      return reviews;
    }
  }

function calculatePageCount(title) {
 total = title.length * 20 
  return total
}
  
function writeBook(bookTitle, bookCharacter, genre) {
    var book = {
      title: bookTitle, 
      mainCharacter: bookCharacter,
      pageCount: calculatePageCount(bookTitle),
      genre: genre
    };
    return book;
}

function editBook(ghoulBook) {
  ghoulBook.pageCount = ghoulBook.pageCount * (3/4);
    return ghoulBook;
}
module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}