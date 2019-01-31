import React, { Component } from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';

const Repair = styled.div`
    color:#fff;
    font-weight: 700;
    line-height: 50px;
    font-size:40px;
    span{
        display:block;
        font-size:24px;
        line-height: 30px;
    }
`
const LightText = styled.div`
    color:#fff;
    font-weight: 300;
    line-height: 28px;
    font-size:18px;
    margin-top:54px;
`
const CallBtn = styled.button`
    width:247px;
    height:67px;
    margin-top:32px;
    background-color:#ffa14b;
    border-radius: 30px;
    color:#fff;
    font-size:18px;
    border:0;
    font-weight:bold;
`
class Main extends React.Component{
    render(){
        return (
            <Row>
                <Col lg={5}>
                    <Repair>
                        Качественный ремонт
                        <span>iphone за 35 минут и гарантия 1 год</span>
                    </Repair>
                    <LightText>
                        Оставьте заявку на бесплатную диагностику без очереди,
                        и получите защитное стекло, стоимостью 1000 рублей,
                        с установкой в подарок!
                    </LightText>
                    <CallBtn>
                        Отправить заявку!
                    </CallBtn>
                </Col>
                <Col lgoffset={1} lg={5}>

                </Col>
            </Row>
        )
    }
}
export default Main