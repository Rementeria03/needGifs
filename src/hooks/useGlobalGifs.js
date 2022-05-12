import { useContext } from "react";
import { GifsContext } from "../context/GifsContext";

export function useGlobalGifs (){
    const {gifs} = useContext(GifsContext);
    return gifs
}