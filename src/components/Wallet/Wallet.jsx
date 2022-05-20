import React from 'react';
import styled from 'styled-components'
import { BiWallet } from 'react-icons/bi';
import "./Wallet.css"

const Wallet = ()=>{
  return <Container>
    <h1>This is the Wallet</h1>
    <Body>
        <Columna1>
            <Text>Assets</Text>
            <WalletStatus>
                <Icon><BiWallet id='wallet-icon'></BiWallet></Icon>
                <div>
                    <Text>Overview</Text>
                    <Text>$0.00</Text>
                </div>                
            </WalletStatus>
        </Columna1>
        <Columna2>
            <Columna3>
                <section>
                    <Icon><BiWallet id='wallet-icon'></BiWallet></Icon>            
                    <Title>Overview</Title>
                </section>
                <Balance>
                    <Text>Balance</Text>
                    <Title>$0.00</Title>
                </Balance>
                <Buttons>
                    <button><Text>Buy/Sell</Text></button>
                    <button><Text>Fund</Text></button>
                    <button><Text>Transfer</Text></button>
                </Buttons>
            </Columna3>
            <Columna3><Text>Overview</Text></Columna3>
        </Columna2>
    </Body>
  </Container>
}

export default Wallet


const Container = styled.div`
    width: 95vw;
    height: 100vh;
    margin-left: 25px;
    display: flex;
    flex-direction: column;
`
const Text = styled.p`
    color: black;
    padding: 10px;
    padding-left: 20px;
    font-weight: 20px;
`

const Title = styled.h2`
    color: black;
    font-weight: bold;
`

const Body = styled.div`
    margin-top: 25px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-around;
`
const Icon = styled.div`
    width: 49px;
    height: 49px;
    border-radius: 100%;
    background: black;
`

const Columna1 = styled.div`
    display: flex;
    flex-direction: column;

    width: 408px;
    height: 192px;

    background: #F6D756;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    align-items: center
    flex-wrap: wrap;
`
const WalletStatus = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    background: white;
    border-radius: 2%;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    align-items: center;
    padding-left: 5px;
`

const Columna2 = styled.div`
    display: flex;
    flex-direction: column;
    width: 70vw;
    height: 80vh;
`

const Columna3 = styled.div`
    display:flex;
    flex-direction: column;

    width: 100%;
    height: 100%;
    background: #F6D756;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    padding: 10px;
    padding-left: 20px;
    margin-bottom: 10px;

    section{
        display:flex;
        flex-direction: row;
        &:first-child{
            padding-top: 8px;
        }
        margin-bottom: 50px;
    }
`



const Balance = styled.div`
    display:flex;
    flex-direction: column;
    margin-left: 10px;
    p{
        margin-left: -18px;
        margin-bottom: 0px;
    }
    h2{
        font-weight: lighter;
        font-size: 100px;
    }
    margin-bottom: 25px;
`

const Buttons = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-evenly;
    
    button{
        width: 134px;
        height: 49px;
        background: #FFFFFF;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 5px;
        p{
            margin-left: -18px;
        }
        &:last-child{
            background: #1A1A1A;
            p{
                color: #F6D756;
            }
        }
    }


`

// position: absolute;
// width: 49px;
// height: 49px;
// left: 106px;
// top: 212px;