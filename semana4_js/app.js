const fetchpokemon = () => {
    const pokeName = document.getElementById("pokeName");
    let pokeInput = pokeName.value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
    
    fetch(url).then((res) =>{
        if(res.status != 200){
            //console.log(res);
            pokeImge("./recursos/pika.jpeg")
        }
        else{
            //console.log(res.json.toString);
            return res.json();
        }
        return res.json();
    }).then((data) => {
        let pokeImg = data.sprites.front_default;
        pokeImge(pokeImg);
        
        //Nombre
        let pokenombre = data.forms[0].name;
        document.getElementById('nombre').innerHTML = "Nombre: " + pokenombre;
        //Tipo de pokemon
        let poketipo = data.types[0].type.name;
        document.getElementById('tipo').innerHTML = "Tipo: " + poketipo;
        //Estadísticas
        //hp
        let pokeHp = data.stats[0].base_stat;
        document.getElementById('est0').innerHTML = "Hp: " + pokeHp;
        //attack
        let pokeAttack = data.stats[1].base_stat;
        document.getElementById('est1').innerHTML = "Ataque: " + pokeAttack;
        //defense
        let pokeDefence = data.stats[2].base_stat;
        document.getElementById('est2').innerHTML = "Defensa: " + pokeDefence;
        //special-attack
        let pokeSpecialAttack = data.stats[3].base_stat;
        document.getElementById('est3').innerHTML = "Ataque especial: " + pokeSpecialAttack;
        //special-defence
        let pokespecialDefence = data.stats[4].base_stat;
        document.getElementById('est4').innerHTML = "Defensa especial: " + pokespecialDefence;
        //speed
        let pokeSpeed = data.stats[5].base_stat;
        document.getElementById('est5').innerHTML = "Velocidad: " + pokeSpeed;
        //moves
        let pokemove = data.moves[0].move.name;
        document.getElementById('move').innerHTML = "Movimiento: " + pokemove;
                                          
    })
    
}



const pokeImge = (url) => {
    const pokeImg = document.getElementById("pokeImg");
    pokeImg.src = url;
}


