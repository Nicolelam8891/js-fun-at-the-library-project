function shelfBook(book, shelf) { 
  if (shelf.length < 3) {
    shelf.unshift(book);
  } else {
   return shelf
  }
}
  
function unshelfBook(bookTitle, shelf) {
  for (var i = 0; i < shelf.length; i++) {
    var book = shelf[i];
    if (bookTitle === book.title){
    shelf.splice(i, 1)
    } 
  }
  return shelf
}

function listTitles(shelf) {
  var array = [];
  for (var i = 0; i < shelf.length; i++) {
    var book = shelf[i]
    array.push(book.title)
  }
  return array.join(', ');
} 

function searchShelf (shelf, title) {
  var boolean;
  for (var i = 0; i < shelf.length; i++) {
    var book = shelf[i]
    if (book.title === title) {
      boolean = true
    } else {
      boolean = false
    }
  }
  return boolean;
}

module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};