import { useEffect, useState } from "react"
import { responseType, Photo } from "../types/data"

const useFetchData = (url: string) => {
const [data, setData] = useState<Photo[] | null>(null)
const [loading, setLoading] = useState<boolean>(false)
const [error, setError] = useState<any>()

useEffect(() => {
    const fetchData = async() =>{
    setLoading(true)
   try {
    const response = await fetch('https://api.pexels.com/v1/search?query=flowers', {
        headers: {
            Authorization: `${process.env.API_KEY}`
    }})  
    const json: responseType= await response.json()
    console.log(json)
   setData(json.photos)
} 
catch (error){
setError(error)}
finally{setLoading(false)}
}
fetchData()}, [url])
return {data, loading, error}
}

export default useFetchData