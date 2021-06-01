export async function getUserData(){
    try{
        let resultado = await fetch('https://randomuser.me/api?results=10');
        let json = await rasultado.json();
        return json.results;
    }catch(e){
        console.log("Error: "+ e);
    }
}