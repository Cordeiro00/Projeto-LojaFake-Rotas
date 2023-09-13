import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import MinhaImagem from './Paginas/FakeLogo.png';
import { Link } from 'react-router-dom';
import { Image,Button } from 'antd';


function App() { 

    return (
        <div className="App">
            <header className="App-header">
                <Image id = "logo" src={MinhaImagem}/>
                <div className='apresentacao'>
                    <h1>LOJA FAKE</h1>
                    <p>Seja você um entusiasta das compras online ou apenas um curioso à procura das últimas tendências, a Loja Fake é o seu destino definitivo para uma experiência de compras única. Fundada com a visão de tornar o ato de comprar online simples, conveniente e empolgante, nossa loja oferece uma ampla variedade de produtos de alta qualidade, desde moda e eletrônicos até beleza e decoração para a casa. Na Loja Fake, acreditamos que cada produto deve contar uma história e atender às suas necessidades específicas. É por isso que trabalhamos incansavelmente para oferecer uma coleção cuidadosamente selecionada de produtos que atendem aos mais altos padrões de qualidade e estilo.</p>
                    <Link to="/Produtos"><Button className = "botao" size={'large'} >Produtos</Button></Link>
                </div>
            </header>
        </div>
    );
}  

export default App;
