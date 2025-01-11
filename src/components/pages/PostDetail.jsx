import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function PostDetail() {
  const urlIndex = "http://localhost:3000";
  const { id } = useParams();
  const [post, setPost] = useState({});

  useEffect(() => {
    axios.get(`${urlIndex}/posts/${id}`).then((Response) => {
      setPost(Response.data);
    });
  }, []);

  return (
    <>
      <div key={post.id}>
        <div>
          <h5>{post.titolo}</h5>
          {post.immagine && (
            <img
              src={`${urlIndex}/${post.immagine}`}
              alt={`${urlIndex}/${post.immagine}`}
            />
          )}
          <p>{post.contenuto}</p>
        </div>
      </div>
    </>
  );
}

export default PostDetail;
