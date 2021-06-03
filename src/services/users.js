import {api} from "../environment";

function getUsers(){
        
    return fetch(api+'users')
        .then(response => response.json())
        .then(data => { return data }); 
}

function getRepos(url){
        
    return fetch(url)
        .then(response => response.json())
        .then(data => { return data }); 
}

export {
    getUsers, getRepos
}