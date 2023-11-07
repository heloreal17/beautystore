import React from 'react'
import Product from './Product'


const Home = () => {
    return (
        <div>
            <div id="carouselExampleIndicators" class="carousel" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="https://img.freepik.com/fotos-gratis/colecao-close-up-de-produtos-de-maquiagem-e-beleza_23-2148620012.jpg?w=740&t=st=1699358188~exp=1699358788~hmac=063ce945c28c639b39b545bfa2c1f09a4883701cf16b3453b40de057e3f36c52" class="d-block w-100" alt="Loja" height="600px"/></div>
                        <div class="carousel-item">
                            <img src="https://img.freepik.com/fotos-gratis/arranjo-de-produtos-de-beleza-de-alto-angulo_23-2148574430.jpg?w=740&t=st=1699358215~exp=1699358815~hmac=e4b79b74b12faa3b4104281ddfb6283e588d25ab8d89087066c36cf45db534ea" class="d-block w-100" alt="Loja" height="600px"/></div>
                            <div class="carousel-item">
                                <img src="https://img.freepik.com/fotos-gratis/jovem-mulher-aplicando-bronzer-na-parede-branca_114579-49587.jpg?w=740&t=st=1699358253~exp=1699358853~hmac=a7614943cf62c9f6f66cf08fd209c6bca9398fa47f62aaa59a169f01e8836b6e" class="d-block w-100" alt="Loja" height="600px"/></div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                
                        
                        <Product/>
                        
                    </div>

                    
                    )
}

                    export default Home
