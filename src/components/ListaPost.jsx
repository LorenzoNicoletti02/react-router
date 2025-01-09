import { useState, useEffect } from "react";
import Card from "./Card";
import axios from "axios";

function ListaPost() {
  const urlIndex = "http://localhost:3000/posts";
  const urlDelete = "http://localhost:3000/posts/";
  const [arrayState, setArrayState] = useState([]);

  const funzioneCestina = async (idToDelete) => {
    try {
      // Fai la chiamata DELETE al backend
      axios.delete(`${urlDelete}${idToDelete}`).then((response) => {
        console.log(response.data);
      });
      setArrayState((prev_arr) =>
        prev_arr.filter((item) => item.id !== idToDelete)
      );
    } catch (error) {
      console.error("Errore in funzioneCestina:", error);
    }
  };

  // Funzione che fa fetch data back-end tramite axios
  const fetchIniziale = async () => {
    try {
      const response = await axios.get(urlIndex).then((response) => {
        setArrayState(response.data);
        console.log(response.data);
      });
      return response.data; // Restituisci i dati
    } catch (error) {
      console.error("Errore nella fetch:", error);
      return null; // Gestisci l'errore
    }
  };

  useEffect(() => {
    fetchIniziale();
    // Ho controllato che il mio array state viene sostituito con l'array preso dal backend
  }, []);

  return (
    <>
      {arrayState &&
        Array.isArray(arrayState) &&
        arrayState.map((currObject) => (
          <Card
            key={currObject.id} // Usa l'ID univoco
            titolo={currObject.titolo}
            contenuto={currObject.contenuto}
            categoria={currObject.categoria}
            immagine={currObject.immagine}
            callbackCestina={(event) => {
              funzioneCestina(currObject.id); // Passa l'ID
            }}
          />
        ))}
    </>
  );
}

export default ListaPost;
