import {useEffect, useState} from "react";

export const useRepo = () => {

    const [books, setBooks] = useState([]);
    /**
     * Se hace uso de useEffect para definir un efecto de montaje que traerá la información de ingredientes
     * del back-end en el primer renderizado.
     */
    useEffect(() => {
        //fetch(process.env.REACT_APP_GW_URL).then((res) => res.json()).then((res) => setRestaurants(res));

        setTimeout(() => {
            setBooks()
        }, 2500);
    }, []);

    return books;
}


