import React from 'react';
import styled from 'styled-components'


const BuyCoin = ()=>{

    return <Container>
        <p>Buy a coin</p>
    </Container>
}

export default BuyCoin;


const Container = styled.div`
    width: 90vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    scroll-snap-align: end;

`