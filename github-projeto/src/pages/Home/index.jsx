import styles from "./home.css";

export function Home() {
  return (
    <>
      <div className="tudo">
        <div className={styles.title}>
            <h1>Search Devs</h1>
        </div>

        <div > 
          <input className="user" type="text" placeholder="Type the username here..." />
        </div>

        <div className="pesquisar">
            <button>Buscar</button>
        </div>
        
      </div>
    </>
  );
}
