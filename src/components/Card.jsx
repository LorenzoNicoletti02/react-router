import styles from "./Card.module.css";

const urlIndex = "http://localhost:3000";

export default function Card({
  titolo = "",
  contenuto = "",
  id = "",
  categoria = "",
  immagine = "",
  callbackCestina,
  arrayTags = [],
}) {
  let arraySpanTags = [];
  // Devo fare un map di questo array tags craendo un array di span
  if (arrayTags) {
    arraySpanTags = arrayTags.map((currTag, currIndex) => (
      <span key={currIndex}>{currTag}</span>
    ));
  }
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{titolo}</h2>
      <img src={`${urlIndex}/${immagine}`} alt="" className={styles.image} />
      <p className={styles.content}>{contenuto}</p>
      <h4 className={styles.category}>{categoria}</h4>
      <div className={styles.tags}>
        {arraySpanTags &&
          arraySpanTags.map((tag) => <span className={styles.tag}>{tag}</span>)}
      </div>
      <div>
        <a href={`/ListaPost/${id}`}>Dettagli</a>
        <button onClick={callbackCestina} className={styles.button}>
          Cestina
        </button>
      </div>
    </div>
  );
}
