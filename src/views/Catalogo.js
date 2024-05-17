import React from 'react';
import '../styles/catalogo.css';
import { useRepo } from '../hooks/useRepo';
import { BookInfo } from '../components/BookInfo';
import { useFetch } from '../hooks/useFetch';
import { libraryContext } from '../context/libraryContext';


function Catalogo(){

    const {data, loading} = useFetch("https://www.googleapis.com/books/v1/volumes?q=subject:cultura");
    
    return(
        <div class="repo-container row-gap-3">            
              {loading && <li>Loading...</li>}              
              {data && data.items?.map((dato) => (
                    <BookInfo                        
                       key={dato.volumeInfo.title}
                       title={dato.volumeInfo.title}                       
                       authors={dato.volumeInfo.authors}
                       publisher={dato.volumeInfo.publisher}
                       publishedDate={dato.volumeInfo.publishedDate}
                       industryIdentifiers= {dato.volumeInfo.industryIdentifiers}
                       description= {dato.volumeInfo.description}
                    />
                 ))}                         
        </div>
    );
};

export default Catalogo;
