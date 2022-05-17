import {Button, Form, FormControl} from 'react-bootstrap'
import React from 'react';
import './MainPage.css'

const MainPage = ()=>{
  return <div>
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
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    />
                    <FormControl
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    />
                </Form>          
        </div>
  </div>
}

export default MainPage;