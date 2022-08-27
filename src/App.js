import React from 'react';
import { Component } from 'react'
import { Header } from './Components/Header';
import { Balance } from './Components/Balance';
import {Income} from './Components/Income';
import {Transactionlist} from './Components/Transactionlist';
import {AddTransaction} from './Components/AddTransaction';
import './style.css';


import { Globalprovider } from './Context/Globalstate';

export default class App extends Component {
  render() {
    return (
      <Globalprovider className='all'>
        <div className='all'>
        <Header className='head' />
        <div className='container'>
        <Balance />
        <Income />
        <Transactionlist />
        <AddTransaction />
        </div>
        </div>
      </Globalprovider>
     
      
      )}};