let klubs = [
    {vārds : "Harijs", uzvards: "potters", loma : "vaditajs", stundas: 12},
    {vārds : "liene", uzvards: "stirna", loma : "vaditajs", stundas: 20},
    {vārds : "oskars", uzvards: "zakis", loma : "biedrs", stundas: 6},
    {vārds : "eduards", uzvards: "lapiņš", loma : "biedrs", stundas: 4},
    {vārds : "haralds", uzvards: "ozols", loma : "biedrs", stundas: 9},
    {vārds : "dominiks", uzvards: "grejs", loma : "biedrs", stundas: 7},
    {vārds : "emils", uzvards: "pelekais", loma : "biedrs", stundas: 11}
]

for(let i = 0; i < klubs.length; i++){
if (klubs[i].loma == "vaditajs"){
    console.log("Vaditajs: " + klubs[i].vārds);
}

}

let TotalHours = 0
for(let n = 0; n < klubs.length; n++){
TotalHours = TotalHours + klubs[n].stundas
}


console.log("brivpratigo stundu skaits : " + TotalHours);
