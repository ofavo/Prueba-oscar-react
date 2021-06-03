import React from 'react';
import { useUsers } from '../hooks/users'
import './css/viewUsers.css'
import {
    useHistory
  } from "react-router-dom";
import Loading from '../components/loading';
const ViewUsers = () => {
    const { users } = useUsers()
    const history = useHistory();
    return (
        <div className="container p-3 text-center">
               {users.length > 0
                    ?          <ul class="list-group w-50 mx-auto shadow">
                    {users?.map((ele, index) => {
                        return(
                        <li key={index} class="list-group-item d-flex justify-content-between align-items-center"
                                onClick={()=>{
                                    history.push("user",{user:ele})
                                }}
                        >
                            {ele.login}
                            <span class="badge rounded-pill">
                                <img className="border rounded-circle" src={ele.avatar_url} />
    
                            </span>
                        </li> 
                        )
                    })
    
                    }
    
        
                </ul>
                :<Loading />

               } 
  
        </div>
    )
}

export default ViewUsers;