import { createContext, useCallback, useState } from 'react';


export const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {  // children is the component that is wrapped by AuthContextProvider
  const [user, setUser] = useState(null)
  const [registerInfo, setRegisterInfo] = useState({ //
    name: "",
    mail: "",
    password: "",
  });


  console.log("registerInfo", registerInfo);

  const updateRegisterInfo = useCallback((info) => {
    setRegisterInfo(info)
  }, [])

  return (
    <AuthContext.Provider  // this is the context provider
      value={{           // this is the value that is passed to the context provider
        user,
        registerInfo,               // this is the value that is passed to the context provider
        updateRegisterInfo
      }}>
      {children}
    </AuthContext.Provider>
  )
}