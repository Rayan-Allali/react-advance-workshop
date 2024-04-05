import { useEffect, useContext } from 'react';
import { UserContext } from "../context/userContext";
import customAxios from "../api/customAxios"
function UseFetchUser() {

 const {user,setUser} = useContext(UserContext)
    const fetchUser = async () => {
        try {
          const api = await customAxios();
        const response = await api.get("/users/1")
          if (response.status >= 200 && response.status < 300) {
            setUser(response.data);
          }
        } catch (err) {
          console.error(err);
        }
      };
   useEffect(()=>{
    fetchUser()
   },[])
  return {user,setUser};
}
export default UseFetchUser;
