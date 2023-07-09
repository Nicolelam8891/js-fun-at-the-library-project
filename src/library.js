function createLibrary(libraryName) {
var library = {
  name: libraryName,
  shelves: {
    fantasy: [],
    fiction: [],
    nonFiction: []
  }
}
  return library
}

function addBook(libraryName, bookName){
var genre = bookName.genre;

if (genre === "fantasy") {
  libraryName.shelves.fantasy.push(bookName);
  return libraryName.shelves.fantasy;
} else if (genre === "fiction") {
  libraryName.shelves.fiction.push(bookName);
  return libraryName.shelves.fiction;
} else if (genre === "nonFiction") {
  libraryName.shelves.nonFiction.push(bookName);
  return libraryName.shelves.nonFiction;
}

return libraryName;
}

function checkoutBook(libraryName, bookTitle, bookGenre) {
  var name = libraryName.name;  
  //get to the genre without doing the if statement
    
    for (var i = 0; i < libraryName.shelves.fantasy.length; i++) {
      var book = libraryName.shelves.fantasy[i]
      var title = book.title;
      if (title === bookTitle) {
        libraryName.shelves.fantasy.splice(i, 1); 
        return `You have now checked out ${bookTitle} from the ${name}.`;
      }
    } console.log (libraryName); 

  // } else if (bookGenre === "fiction") {
  //   for (var i = 0; i < libraryName.shelves.fiction.length; i++) {
  //     var book = libraryName.shelves.fiction[i]
  //     var title = book.title;
  //     if (title === bookTitle) {
  //       libraryName.shelves.fiction.splice(i, 1);
  //       return `You have now checked out ${bookTitle} from the ${name}.`;
  //     }  
  //   } console.log (libraryName); 

  // } else if (bookGenre === "nonFiction") {
  //   for (var i = 0; i < libraryName.shelves.nonFiction.length; i++) {
  //     var book = libraryName.shelves.nonFiction[i]
  //     var title = book.title
  //     if (title === bookTitle) {
  //       libraryName.shelves.nonFiction.splice(i, 1);
  //       return `You have now checked out ${bookTitle} from the ${name}.`;
  //     }
  //   } console.log (libraryName); 
  
  // } 

}
  


module.exports = {
  createLibrary,
  addBook,
  checkoutBook,
  // takeStock
};

