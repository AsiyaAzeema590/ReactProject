import React, { Children } from "react";
import Usercontext from "./Usercontext";

const UsercontextProvider = ({children}) => {//children is the generic namw which we it in all the below components
    const [user,setUser] = React.useState(null)//we create the state to give the value to the user
    
    return(
        //we give the value from here
        <Usercontext.Provider value = {{user ,setUser}}> 
              {children} 
        </Usercontext.Provider>
    )
}

export  default UsercontextProvider