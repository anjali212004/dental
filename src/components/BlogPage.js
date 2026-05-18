import { useParams } from "react-router-dom";

const BlogPage = () => {
  const { slug } = useParams();

  return (
    <div className="container mt-5">
      <h1>{slug.replace("-", " ")}</h1>
      <p>Yahan aap blog ka actual content daal sakte hain...</p>
    </div>
  );
};

export default BlogPage;
