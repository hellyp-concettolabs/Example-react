import React,{createContext,useContext,useState} from 'react'

const UserContext = createContext();
const useUser = () => useContext(UserContext)

function UserProvider({children}) {
    const [userData,setUserData] = useState({})
    const updateUser = (data) =>{
        setUserData(data);
    }
  return (
    <div>
      <UserContext.Provider value={{userData,updateUser}}>
        {children}
      </UserContext.Provider>
    </div>
  )
}

export default UserProvider;
export {useUser}
