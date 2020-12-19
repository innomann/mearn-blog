import React from 'react'
import { Card, Container, Row,Form,Col,Button,Alert } from 'react-bootstrap'
import Inputs from '../form/Inputs'

function Login({message,user,onChange, onBlur, onSubmit}) {
    const {email,password,errors} = user
    return (
        <Container>
            <Row>
                <Col className="mx-auto" sm={11} md={7} lg={5}>
                    <Card className="my-4">
                        <Form noValidate onSubmit = {onSubmit} className="p-sm-3 p-xs-1">
                            <Card.Body>
                                <Card.Title as="h3" className="text-center theme-color mb-4 mt-2">
                                  Login
                                </Card.Title>
                                {message.length > 0 && (
                                <Alert variant="success">{message}</Alert>
                                 )}
                                <Inputs name = "email" type = "email" placehoder = "Enter Email" value = {email} onChange = {onChange} onBlur = {onBlur}  text={{module:"login",label:"Email",error:errors.email}} />
                                <Inputs name = "password" type = "password" placehoder = "Enter Password" value= {password} onChange = {onChange} onBlur = {onBlur}  text={{module:"login",label:"password",error:errors.password}} />
                                <Button variant="info" type="submit" className="mt-3">Submit</Button>
                            </Card.Body>
                        </Form>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Login
