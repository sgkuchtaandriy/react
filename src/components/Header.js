import React, { Component } from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';

import Link from './Link';

const List = styled.ul`
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:0;
    height:49px;
`

class Header extends React.Component{
    render(){
        return (
            <Row>
                <Col lg={12}>
                    <nav>
                        <List>
                            <Link link="#" text="Master" />
                            <Link link="#" text="Master 2" />
                            <Link link="#" text="Master 3" />
                            <Link link="#" text="Master 4" />
                            <Link link="#" text="Master 5" />
                        </List>
                    </nav>
                </Col>
            </Row>
        )
    }
}
export default Header