import React from 'react';
import styled from 'styled-components'


const BuyCoin = ()=>{

    return <Container>
        <h1>Buy a coin </h1>
        <div>
            <hr></hr>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has 
            been the industry's standard dummy text ever since the 1500s, when an unknown printer took a 
            galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, 
            but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 
            1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop 
            publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
        <div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has 
            been the industry's standard dummy text ever since the 1500s, when an unknown printer took a 
            galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, 
            but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 
            1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop 
            publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
    </Container>
}

export default BuyCoin;


const Container = styled.div`
    width: 95vw;
    height: 100vh;
    display: flex;
    margin-left: 25px;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    scroll-stop-align: start;

`