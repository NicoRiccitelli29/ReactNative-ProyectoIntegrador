export async function getUserData(UsuariosAImportar){
    try{
        let resultado = await fetch('https://randomuser.me/api?results=' + UsuariosAImportar);
        let json = await resultado.json();
        return json.results;
    }catch(e){
        console.log("Error: "+ e);
    }
}