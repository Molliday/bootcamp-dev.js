// Assignment
// 1.
const a = 2;
const b = 4;
const hasil = a*b;
console.log("hasil a * b = "+hasil);
// 2.
//a
function carHonda (name, speed, color, wheels){
    this.name = name;
    this.speed = speed;
    this.color = color;
    this.wheels = wheels;
}

const Civic = new carHonda ("civic", 2000, "red", 4);
console.log(Civic);
//b
const Brio = new carHonda ("brio", 1000, "white", 4);
console.log(Brio);

// 3.
// object user dan movie
const data = {
    name: "Figur",
    nameMovie: "Cinderella Movie",
}
//const name = "Figur";
//const nameMovie = "GGS";
const minAgeToWatchCinema = 13;
const myAge = 14;
// harga ticket
//const priceTicket = 20000;
const priceTicket = 20000;
const myMoney = 30000;
// validasi
const hasTicket = priceTicket <= myMoney;
const isAdult = myAge >= minAgeToWatchCinema;
// function validasi ticket
function toWatchCinemaMovie() 
{
    if (isAdult && hasTicket) return console.log("Selamat " + data.name +  " kamu berhasil membeli tiket " + data.nameMovie +" dengan harga " + priceTicket);
    if (!hasTicket) return console.log("Gagal membeli tiket karena tidak memiliki Ticket");
    if (!isAdult) return console.log("Gagal membeli tiket karena belum cukup umur");
}


toWatchCinemaMovie();