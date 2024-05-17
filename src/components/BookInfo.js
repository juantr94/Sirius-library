import React from "react";
import '../styles/bookCard.css';
import { Link } from "react-router-dom";
import { libraryContext } from "../context/libraryContext";

export const BookInfo = ({ id, title, authors, publisher,publishedDate,industryIdentifiers,description}) => {
    return (
        <div class="col-sm-5 mb-3 mb-sm-0 ">
        <div className="card ">
            <div className="card">
                <h5 className="card-header">{title}</h5>
                <div className="card-body">
                    <h6 className="card-subtitle mb-2 text-body-secondary">Autor: {authors.map((autor, index)=> index > 0 ? ", " + autor :  autor )}</h6>
                    <p className="card-text"></p>
                    <p className="card-text">Editora: {publisher}</p>
                    <p className="card-text">Fecha de publicación: {publishedDate}</p>
                    <p className="card-text">{industryIdentifiers.map((iden, index) => index > 0 ? `, ` + iden.type + `:` + iden.identifier: iden.type + `: ` + iden.identifier )}</p>
                   
                    <Link to={`/catalogo/${id}`}>
                        <button className="btn btn-primary">Descripcion</button>
                    </Link> 
                   
                </div>
            </div>
        </div>
        </div>
    );
}