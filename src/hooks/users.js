import {useEffect, useState} from 'react';
import { getUsers } from '../services/users'
export const useUsers = (props) => {
    const [users, setUsers] = useState([]);
    


    function getData() {  
      getUsers().then(data => {
        
        if (data) {

          setUsers(data)

        }
      }).catch(err =>{
        
      
      })
    }
      useEffect(() =>{
     
          getData()
      },[])

    return {
         users
    } 
} 
