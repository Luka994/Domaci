let charmander = {
    ime: 'Charmander',
    vrsta: 'vatreni',
    sposobnosti: ['Blaze', 'Solar Power'],
    karakteristike: {napad: 52, odbrana: 43, brzina: 65},
    img: src='https://static.pokemonpets.com/images/monsters-images-800-800/4-Charmander.png'
}



let squirtle = {
    ime: 'Squirtle',
    vrsta: 'vodeni',
    sposobnosti: ['Torrent', 'Rain Dish'],
    karakteristike: {napad: 48, odbrana: 65, brzina: 43},
    img: src='https://static.pokemonpets.com/images/monsters-images-800-800/4-Charmander.png'
} 


let caterpie = {
    ime: 'Caterpie',
    vrsta: 'buba',
    sposobnosti: ['Shield Dust', 'Run Away'],
    karakteristike: {napad: 30, odbrana: 35, brzina: 45},
    img: src='https://static.pokemonpets.com/images/monsters-images-800-800/4-Charmander.png'
} 

let ekans = {
    ime: 'Ekans',
    vrsta:'otrovni',
    sposobnosti: ['Intimidate', 'Shed Skin', 'Unnerve'],
    karakteristike: {napad: 60, odbrana: 44, brzina: 55},
    img: src='https://static.pokemonpets.com/images/monsters-images-800-800/4-Charmander.png'
} 
 

let pokeNiz=[ekans, caterpie, squirtle, charmander];
console.log(pokeNiz);
//2. zadatak
let spos = pokeNiz.map((pokemon)=>{
    let s='';
    return s+=`${pokemon.sposobnosti}`;
})                        
 console.log(spos);
//3. zadatak
let sortiranje = pokeNiz.sort((a,b)=>{
    return b.karakteristike.brzina-a.karakteristike.brzina;
})
console.log(sortiranje);
//4. zadatak
let njPk= pokeNiz.sort((a,b)=>{
     return b.karakteristike.napad-a.karakteristike.napad;
})
console.log(njPk[0]);
//5. zadatak
let div = document.createElement('div');
let div1 = document.createElement('div');
let div2 = document.createElement('div');
let div3 = document.createElement('div');

let p = document.createElement('p');
let p1= document.createElement('p');
let p2= document.createElement('p');
let p3= document.createElement('p');
let img = document.createElement('img');

let img1 = document.createElement('img');

let img2 = document.createElement('img');

let img3 = document.createElement('img');

let wrapper = document.querySelector('.wrapper');
wrapper.appendChild(div);
wrapper.appendChild(div1);
wrapper.appendChild(div2);
wrapper.appendChild(div3);

div.appendChild(p);
div.appendChild(img);
div1.appendChild(p1);
div1.appendChild(img1);
div2.appendChild(p2);
div2.appendChild(img2);
div3.appendChild(p3);
div3.appendChild(img3);

let pobednik = function pobednik(){
    p.innerHTML=njPk[0].ime;
    img.src='https://www.destructoid.com//ul/168461-E.jpg';
    p1.innerHTML='';
    img1.src='';
    p2.innerHTML='';
    img2.src='';
    p3.innerHTML='';
    img3.src='';
};
let svi= function svi(){
    p.innerHTML=pokeNiz[0].ime;
    img.src='https://www.destructoid.com//ul/168461-E.jpg';
    p1.innerHTML=pokeNiz[1].ime;
    img1.src='https://static.pokemonpets.com/images/monsters-images-800-800/4-Charmander.png';
    p2.innerHTML=pokeNiz[2].ime;
    img2.src='https://img.pokemondb.net/artwork/large/squirtle.jpg';
    p3.innerHTML=pokeNiz[3].ime;
    img3.src='https://img.pokemondb.net/artwork/large/caterpie.jpg';
};



let btn1=document.querySelector('#pobednik');
    btn1.addEventListener('click', pobednik);
let btn = document.querySelector('#prikaz');
btn.addEventListener('click', svi);



