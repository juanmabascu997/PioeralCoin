import {Button, Form, FormControl} from 'react-bootstrap'
import React from 'react';
import './MainPage.css'
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import styled from 'styled-components'
import NavBars from '../Nav/Nav';
import BuyCoin from '../BuyCoin/BuyCoin';
import About from '../About/About';


const MainPage = ()=>{
  return <Container id='main'>
        <NavBars></NavBars>
        <div id='maintitles'>
            <h1>   Descentralized for a better tomorrow</h1>
            <p>Change your way in see the market</p>
        </div>
        <div id='mainboxs'>
            <div id='piocoin'>
                <h2>$0.13</h2>
                <p>1PIO Coin</p>
            </div>
            <div id='volume'>
                <h2>1.98M</h2>
                <p>24H Volume</p>
            </div>
            <div id='supply'>
                <h2>34M</h2>
                <p>Circulating supply</p>
            </div>
            <div id='maketcap'>
                <h2>133.66M</h2>
                <p>Fully diluted market cap</p>
            </div>
        </div>
        <div id='sections'>
            <section><Button>Swap tokens</Button><Button>Buy with credit card</Button></section>
                <Form id='forms'>
                    <FormControl
                    type='number'
                    placeholder="ETH"
                    aria-label="Search"
                    />
                    <BsFillArrowRightCircleFill color='#D9CFC3'/>
                    <FormControl
                    type='number'
                    placeholder="PIO"
                    aria-label="Search"
                    />
                </Form>          
        </div>
        <BuyCoin></BuyCoin>
        <About></About>
  </Container>
}

export default MainPage;

const Container = styled.div`
    width: 100%;
    height: 100%;
    scroll-snap-align: start;

`