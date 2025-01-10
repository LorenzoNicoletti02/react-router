import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

function PostDetail() {
  const urlIndex = "http://localhost:3000/posts";
  const { id } = useParams();
  const [post, setPost] = useState({});

  useEffect(() => {
    axios.get(`${urlIndex}/${id}`).then((Response) => {
      setPost(Response.data);
    });
  }, []);

  return (
    <>
      <div className={post.card}>
        <h2 className={post.title}>{titolo}</h2>
        <img src={`${urlIndex}/${immagine}`} alt="" className={post.image} />
        <p className={post.content}>{contenuto}</p>
        <h4 className={post.category}>{categoria}</h4>
        <div className={post.tags}>
          {arraySpanTags &&
            arraySpanTags.map((tag) => <span className={post.tag}>{tag}</span>)}
        </div>
      </div>
    </>
  );
}

export default PostDetail;
