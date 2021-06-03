import {useEffect, useState} from 'react';
import { getRepos } from '../services/users'
export const useRepos = (props) => {
    const [repos, setRepos] = useState([]);
    


    function getData() {  
      getRepos(props).then(data => {
        
        if (data) {

          setRepos(data)

        }
      }).catch(err =>{
        
      
      })
    }
      useEffect(() =>{
        
         getData()
      },[])

    return {
         repos
    } 
} 
