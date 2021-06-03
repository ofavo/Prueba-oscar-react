import React, { useEffect, useState } from 'react';
import {useRepos} from '../hooks/repos'
import './css/viewIndividulUser.css'
import Loading from '../components/loading'
import {
    useHistory
  } from "react-router-dom";
const ViewIndividualUser = (props) => {
    const [user, setUser] = useState("")
    const { repos } = useRepos(props.location.state.user.repos_url)
    const history = useHistory();
    useEffect(() => {
        setUser(props.location.state.user)
    }, [])

    return (
        <div className="container container-two p-3 text-center">
            <div className="row">
                <div className="col-12 col-md-3">
                <div className="card" >
                <img src={user.avatar_url} className="card-img-top"  />
                <div className="card-body">
                    <h5 className="card-title">{user.login}</h5>
                    
                </div>

                </div>
                  <button className="btn btn-primary mt-3"
                    onClick={()=>{
                        history.goBack()
                    }}
                  >
                      <strong>Volver</strong> 
                      </button>  
             
            </div> 
            <div className="col repos">
                <h3>Repositiorios</h3>
               {repos.length > 0
                   ? <ul class="list-group shadow">
                   {repos?.map((ele, index) => {
                       return(
                       <li key={index} class="list list-group-item d-flex justify-content-between align-items-center"
                         
                       >
   
                          <h4><strong>Nombre :</strong> {ele.name}</h4> 
                          <p><strong>Descripcion :</strong> 
                               {ele.description}</p>
                           
                           <span class="badge rounded-pill">
                               <a href={ele.html_url} className="btn btn-primary" target="_blank">Ver</a>
   
                           </span>
                       </li> 
                       )
                   })
   
                   }
   
       
               </ul>
                   :<Loading /> 
               } 


            </div>  
            </div>

      


        </div>
    )
}

export default ViewIndividualUser;