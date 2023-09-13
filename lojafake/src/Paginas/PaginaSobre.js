import axios from 'axios';
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Button as AntButton , Image } from 'antd';
import { useParams, Link } from 'react-router-dom';
import MinhaImagem from './FakeLogo.png';

function PaginaSobre() {
    const [produtos, setProdutos] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then(response => {
                setProdutos(response.data);
            });
    }, [id]);

    if (!produtos) return <div className="d-flex justify-content-center mt-5">Carregando...</div>;

    return (
        <>
        <header class = "cabecalho"> 
                <nav class="navbar navbar-expand-lg bg-body-tertiary">
                    <div class="container-fluid">
                        <Link to="/">
                            <Image id="Fake" src={MinhaImagem}/>
                        </Link>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                            <a class="nav-link active " aria-current="page"> <Link to = "/"></Link></a>
                            </li>
                        </ul>
                        </div>
                    </div>
                </nav>
            </header>
            <button className="btn btn-light mb-4">
            <Link to = "/Produtos">← Voltar</Link>
            </button>        
            <div className="container mt-4">
            <div className="card">
                <div className="row no-gutters">
                    <div className="col-md-5">
                        <img src={produtos.image} alt={produtos.title} className="card-img"/>
                    </div>
                    <div className="col-md-7">
                        <div className="card-body">
                            <h2 className="card-title mb-4">{produtos.title}</h2>
                            <p className="card-text mb-4">{produtos.description}</p>
                            <h4 className="card-text mb-4">Price: ${produtos.price}</h4>
                            <Link to="/cart" className="mt-3">
                                <AntButton type="primary">Adicionar ao carrinho</AntButton>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default PaginaSobre;
