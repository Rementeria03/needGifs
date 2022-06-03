import { useEffect, useState } from "react";
import getSingleGif from "services/getSingleGif";
import { useGifs } from "./useGifs";

export default function useSingleGif ({ id }) {
  const { gifs } = useGifs()
  const gifFromCache = gifs.find(singleGif => singleGif.id === id)

  const [gif, setGif] = useState(gifFromCache)

  useEffect(() => {
    if(!gif){
      getSingleGif({id})
        .then(setGif)
    }   
  }, [id, gif])

  return {gif}
}