import styles from "./home.css";
import { useState } from "react";
import axios from 'axios';

export function Home() {
  // barra de pesquisa, user
   const [user, setUser] = useState('') 
  //  button, pesquisar o user solicitado
  const pesquisa=()=> async () =>{
await axios
// puxando a api
.get(`https://api.github.com/users/${user}`)
// resposta da pesquisa
.then((response)=>{
  console.log(response);
})
.catch((e) => console.log(e));
  };
  return (
    <>
      <div className="tudo">
        <div className={styles.title}>
            <h1>Search Devs</h1>
        </div>

        <div > 
          <input className="user" type="text" placeholder="Type the username here..."  onChange={(e)=> setUser(e.target.value)}/>
        </div>

        <div className="pesquisar">
            <button onClick={()=> pesquisa()}>Buscar</button>
        </div>
        
      </div>
    </>
  );
}
