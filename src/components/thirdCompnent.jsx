import { useContext } from "react";
import { UserContext } from "../context/userContext";

function ThirdCard() {
    const { user } = useContext(UserContext);
    console.log(user);
    return (
        <div className="border rounded-md border-gray-300 p-4 mt-4">
            <p className="font-bold text-lg mb-2">{user.name}</p>
            <p className="text-gray-600">{user.email}</p>
        </div>
    );
}

export default ThirdCard;
