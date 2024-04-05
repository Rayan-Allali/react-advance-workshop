/* eslint-disable react/prop-types */
import ThirdCard from "./thirdCompnent"

const PostCard = ({ post }) => {
    return (
       <>
        <div className="border rounded-md border-gray-300 p-4 mb-4">
            <h2 className="text-lg font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-600">{post.body}</p>
        </div>
         <ThirdCard /></>
    );
}

export default PostCard;
