import React, { Component } from 'react';
import api from '../../services/api';


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
    return (
        <div className="product-list">
            {this.state.Products.map(Products => (
                <h2 key={Products._id}>{Products.title}</h2>//retorna elementos da lista
            ))};
        </div>
    )};    
};