
// var a = { name:"Ajsa", surname:"Alibasic" };
// var aKeys = Object.keys(a);
// var aValues = Object.values(a);

// console.log(aKeys.includes("name"));
// console.log(values);

// if( a["name"] != undifined ){
//     console.log("A object ima proparty address");
// }

// var objekat = {
//     name: "Ajsa",
//     surname: "Alibasic",
//     address:{ 
//         street:"Kolubarska",
//         number: "62",
//         city: "Novi Pazar"
//     },
//     friends: [{name:"Nerma"},{name:"Temina"}]
// };

// // console.log(objekat.friends[0].name);

// objekat.fullname = `${objekat.name} ${objekat.surname}`;
// objekat.ajsa = "Student";

// delete objekat.name;

// console.log(objekat);


var nizKorisnika = [{ name: "Ajsa" }, { name:"Nerma" }, { name:"Temina" }];

// for(var i=0; i<nizKorisnika.length;i++){
//     const korisnik = nizKorisnika[i];
//     if(korisnik.name === 'Nerma'){
//         console.log(korisnik);
//     }
// }



function  logfindObject(niz, parametar, vrednostParametra){
    for(var i=0; i<niz.length;i++){
        const objekat = niz[i];
        if(objekat[parametar] === vrednostParametra){
            return objekat;
        }
    }
}

console.log(logfindObject(nizKorisnika, 'name', 'Nerma'));

