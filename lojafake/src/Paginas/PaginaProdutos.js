import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link } from 'react-router-dom';
import "./paginaProduto.css"
import {Image} from "antd";
import MinhaImagem from './FakeLogo.png';

function PaginaProdutos() {
    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then(response => {
                setProdutos(response.data);
            });
    }, []);

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

            <main className="container mt-4" id="produtos">
                <div className="row justify-content-center">
                    {produtos.map(produtos => (
                        <div key={produtos.id} className="col-md-4 mb-3">
                            <div className="card h-100">
                                <img src={produtos.image} className="card-img-top" alt={produtos.title} />
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title">{produtos.title}</h5>
                                    <p className="card-text">Price: ${produtos.price}</p>
                                    <Link to={`/Sobre/${produtos.id}`} className="btn btn-primary mt-auto">
                                        Comprar Agora
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
            <div className="footer">
            <div className="container">
                <div className="row">

                    <div className="col-md-4 footer-section">
                        <h4>Sobre Nós</h4>
                        <p>Loja voltada para venda de produtos variados</p>
                    </div>
                    <div className="col-md-4 footer-section">
                        <h4>Links Úteis</h4>
                        <ul>
                            <li><Link to="/">Início</Link></li>
                            <li><Link to="/contato">Contato</Link></li>
                            <li><Link to="/sobre">Sobre</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-4 footer-section">
                        <h4>Contato</h4>
                        <p>Email: exemplo@email.com</p>
                        <p>Telefone: (11) 1234-5678</p>
                    </div>
                </div>
                <div className="text-center mt-4">
                    <p>&copy; 2023 Todos os direitos reservados.</p>
                </div>
            </div>
        </div>
        </>
    );
}

export default PaginaProdutos;
