import React, { Component } from 'react';
import api from '../../services/api';
import './style.css';


export default class Main extends Component {

    state = {
        Products: [],
    };


    componentDidMount(){
        this.loadProducts();
    };

    loadProducts = async () => {
        const response = await api.get('/products');

        this.setState({ Products: response.data.docs })//add produtos da api no array
    };

    render() {
        
        const { Products } = this.state;

        return (
            <div className="product-list">
                {Products.map(Products => (
                    <article key={Products._id}>

                        <strong>{Products.title}</strong>
                        <p>{Products.description}</p>

                        <a href="#">Acessar</a>

                    </article>//retorna elementos da lista {key = {nome_da Variavel._id  usar sempre no elemento apos o map()}}
                ))};
            </div>
        );
    };    
};