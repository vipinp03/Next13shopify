"use client"
import { createContext, useState, useEffect } from 'react'

// import { createCheckout, updateCheckout } from '../lib/shopify'

const UserContext = createContext()

export default function UserProvider({ children }) {
  const [login, setLogin] = useState(false)
  const [selectLang,setSelectLang]=useState("")
  const [selectCountry,setSelectCountry]=useState("")
  const [selectLangPop,setSelectLangPop]=useState(false)
  

  useEffect(() => {
    if (localStorage.login_token) {
     setLogin(true)
    }else{
        // api call
        // localStorage.setItem("login_token", JSON.stringify([newCart, newCheckout]))
    }

  }, [])
  async function HandelLogin(token) {
    setLogin(true)
    localStorage.setItem("login_token", JSON.stringify(token))
   
  }

  return (
    <UserContext.Provider value={{login,setLogin,HandelLogin,selectLang,setSelectLang,selectLangPop,setSelectLangPop,selectCountry,setSelectCountry}}>
      {children}
    </UserContext.Provider>
  )
}

const UserConsumer = UserContext.Consumer


export { UserConsumer, UserContext }

