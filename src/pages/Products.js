import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import Product from '../components/Product'

function Products() {
  return (
    <Container className='mt-3'>
        <h3>Products</h3>
        <Row className='mt-2'>
            <Col md={3} sm={6} xs={12}>
                <Product />
            </Col>
        </Row>
    </Container>
  )
}

export default Products