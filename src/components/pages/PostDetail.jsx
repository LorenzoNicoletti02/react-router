import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function PostDetail() {
  const urlIndex = "http://localhost:3000/posts";
  const { id } = useParams();
  const [post, setPost] = useState({});

  useEffect(() => {
    axios.get(`${urlIndex}/${id}`).then((Response) => {
      setPost(Response.data);
      console.log(Response.data);
    });
  }, []);

  return (
    <>
      <div key={post.id}>
        <div>
          <h5>{post.titolo}</h5>
          {post.immagine && (
            <img src={`${urlIndex}/${post.immagine}`} alt={post.immagine} />
          )}
          <p>{post.contenuto}</p>
        </div>
      </div>
    </>
  );
}

export default PostDetail;
