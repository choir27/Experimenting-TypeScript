interface Pokemon {
    name: string,
    type: string,
    catchStatus: boolean,
    moves: string[],
    status?: string,
}

export type chooseAttack = (v:Pokemon)=>string


let listOfPokemon: Pokemon[] = [];

function createPokemon (pokemon: Pokemon):void{
    listOfPokemon.push(pokemon)
}

createPokemon({name: "Pikachu", type: "electric", catchStatus: true, moves: ["Thunderbolt", "Quick Attack", "Iron Tail", "Volt Tackle"]})
createPokemon({name: "Lapras", type: "water/ice", catchStatus: false, status: 'healthy', moves: ["Surf", "Ice-Beam", "Thunderbolt", "Psychic"]})
createPokemon({name: "Espeon", type: "psychic", catchStatus: false, status: 'healthy', moves: ["Psychic", "Morning Sun", "Shadow ball", "Calm Mind"]})

//go through all elements of the array type
//each array element is an object type
//make each value uppercase if it's a string, otherwise skip it
//return new array

function checkType(type: string){
    if(type.includes("/")){
        let newType = type.split("/");
        return newType.map((ele:string)=>{
            return ele[0].toUpperCase() + ele.substring(1)
        }).join("/");
    }else{
        return type.slice(0,1).toUpperCase() + type.substring(1);
    }
}

function checkMoves(moves: string[]){
    return moves.map((move:string)=>{
        return move[0].toUpperCase() + move.substring(1)
    })
}

function upperPokemon(s:Pokemon):Pokemon{
    return {name: s.name.slice(0,1).toUpperCase() + s.name.substring(1,s.name.length),
            catchStatus: s.catchStatus,
            moves: checkMoves(s.moves),
            type: checkType(s.type),
            status: s.status ? s.status.slice(0,1).toUpperCase() + s.status?.substring(1,s.status.length) : "N/A"
    }
}

const arrayOfPokemon:Pokemon[] = listOfPokemon.map((pokemon:Pokemon)=>{
    return upperPokemon(pokemon)
}
)

function testPokemon(pokemon:Pokemon[],poke: chooseAttack){
    return pokemon.map(poke)
}

console.log(testPokemon(arrayOfPokemon, (v)=>{
    return `${v.name} used ${v.moves[Math.floor(Math.random()*4)]}!`
}))