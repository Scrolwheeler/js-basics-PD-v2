

let books = [
    {title: "Harijs potters", author: "Dž. K. Roulinga", isAvailable: "Jā"},
    {title: "Sprīdītis", author: "Anna Brigadere", isAvailable: "Nē"}
]

function printBookInfo(attribute,){
    for(let i = 0; i < books.length; i++){
        attribute = books[i]
console.log(attribute);
}
}
printBookInfo(title);
printBookInfo(author);

