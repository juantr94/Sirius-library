import React from 'react';
import {Link} from "react-router-dom";
//import useRedirection from "../hooks/useRedirection";

function Home() {

    //useRedirection("/restaurants", 3000); // Redireccionamos a la vista de restaurantes en 3 segundos

    return (
        <div className="col-12 justify-content-center p-2"> 
            <div >
                Bienvenido
            </div>
        </div>
    );
}

export default Home;