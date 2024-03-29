import { Navigate, useNavigate, Routes, Route } from "react-router-dom";

const Post = () => {
    const status = 200;

    const navigate = useNavigate();

    const onClick = () => {
        navigate("/about");
    };

    if (status === 404) {
        return <Navigate to="/notFound" />;
    }

    return (
        <div>
            <h1>Post</h1>
            <button onClick={onClick}>Click</button>
            <Routes>
                <Route path="/show" element={<h1>Hello World</h1>} />
            </Routes>
        </div>
    );
};

export default Post;

// import { useParams } from "react-router-dom";

// const Post = () => {
//     const params = useParams();

//     return (
//         <div>
//             <h1>Post {params.id}</h1>
//             <p>Name {params.name}</p>
//         </div>
//     );
// };

// export default Post;
