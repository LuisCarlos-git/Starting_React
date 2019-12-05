import React, { Component } from 'react';
import api from '../../services/api';
import './style.css';
import { Link } from 'react-router-dom';


export default class Main extends Component {

    state = {
        Products: [],
        ProductInfo: {},
        page: 1,
    };


    componentDidMount(){
        this.loadProducts();
    };

    loadProducts = async (page = 1) => {
        const response = await api.get(`/products?page=${page}`);

        const { docs, ...ProductInfo } = response.data;

        this.setState({ Products: docs, ProductInfo, page })//add produtos da api no array
    };

    prevPage = () => {
        const { page, ProductInfo } = this.state;

        if(page === 1) return;

        const pageNumber = page - 1;

        this.loadProducts(pageNumber)
    }

    nextPage = () => {
        const { page, ProductInfo } = this.state;

        if(page === ProductInfo.pages) return;

        const pageNamber = page + 1;

        this.loadProducts(pageNamber)
    }


    render() {
        
        const { Products, page, ProductInfo } = this.state;

        return (
            <div className="product-list">
                {Products.map(Products => (
                    <article key={Products._id}>

                        <strong>{Products.title}</strong>
                        <p>{Products.description}</p>

                        <Link to={`/product/${Products._id}`}>Access</Link>
                    </article>//retorna elementos da lista {key = {nome_da Variavel._id  usar sempre no elemento apos o map()}}
                ))};
                <div className="buttons">
                    <button disabled={page === 1} onClick={this.prevPage}>Previous</button>
                    <button disabled={page === ProductInfo.pages} onClick={this.nextPage}>Next</button>
                </div>
            </div>
        );
    };    
};