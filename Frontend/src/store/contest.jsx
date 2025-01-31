import { createContext, useState , useEffect } from "react";
import { useUser } from '@clerk/clerk-react'
import axios from 'axios';

export const context = createContext({
    pageNo: 1,
    setPageNo: () => {},
    userData:{}
})

function ContextProvider({ children }) {

    const [pageNo, setPageNo] = useState(1);
    const { user } = useUser();
    const [userData,setUserData] = useState({});

    const contextValue = {
        pageNo, setPageNo , userData
    }

    const sendUserDetails = async () => {
        if (user?.id) {
            try {
                const responce = await axios.post("http://localhost:4000/user/getUser", {
                    id: user.id
                });
                setUserData(responce.data.user);
            } catch (error) {
                console.log("Error in Navbar : ", error);
            }
        }
    }

    useEffect(() => {
        if (user !== null) {
            sendUserDetails()
        }
        else{
            setUserData({})
        }
    }, [user])

    return (
        <context.Provider value={contextValue} >
            {children}
        </context.Provider>
    )
}

export default ContextProvider