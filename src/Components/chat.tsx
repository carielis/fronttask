import { useQuery } from "@apollo/client"
import  React from "react"
import {getMessage} from '../graphql/user'
import {get} from "lodash"

export const Chat = () => {
    const {loading, data} = useQuery(getMessage)
   
    const messageData = get(data, 'message', {})
    if(loading) return<p>Load</p>
    return(
        <div>
           {messageData.map((m : any) => {
               return <div>{m.message}</div>
           })}
        </div>
       
        
    )
    }
    
