let books = [
    {title: "Harijs potters", author: "Dž. K. Roulinga", isAvailable: "Jā"},
    {title: "Sprīdītis", author: "Anna Brigadere", isAvailable: "Nē"}
]

function printBookInfo(attribute){
for(let i = 0; i < 2; i++){
   console.log(attribute); 
}
}

printBookInfo(books[i].title);
printBookInfo(books[i].author);