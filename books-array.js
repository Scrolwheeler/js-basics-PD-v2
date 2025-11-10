let books = [
    {title: "Harijs potters", author: "Dž. K. Roulinga", isAvailable: "Jā"},
    {title: "Sprīdītis", author: "Anna Brigadere", isAvailable: "Nē"}
]
i = 0
for(let i = 0; i < books.lenght; i++){
   console.log("nosaukums: " + books[i].title + " " + "vai tā ir pieejama? " + books[i].isAvailable); 
}
