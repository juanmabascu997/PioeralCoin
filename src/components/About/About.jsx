import React from 'react';
import styled from 'styled-components'


const About = ()=>{

    return <Container>
        <p>About coin</p>
    </Container>
}

export default About;


const Container = styled.div`
    width: 90vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    scroll-snap-align: end;

`