var library = [    
  { title:  'The Road Ahead', author: 'Bill Gates', libraryID: 1254},   
  { title: 'Walter Isaacson', author: 'Steve Jobs', libraryID: 4264},   
  { title: 'Mockingjay: The Final Book of The Hunger Games', author: 'Suzanne Collins',    libraryID: 3245}
  ];

// sort by value
  library.sort(function(a, b) {
    return a.libraryID - b.libraryID;
  });
  

  // sort by name
library.sort(function(a, b) {
  var titleA = a.title.toUpperCase(); // ignore upper and lowercase
  var titleB = b.title.toUpperCase(); // ignore upper and lowercase
  if (titleA < titleB) {
    return -1;
  }
  if (titleA > titleB) {
    return 1;
  }
  // names must be equal
});

