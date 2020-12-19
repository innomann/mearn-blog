import React from 'react'
import { Card, Button, Form, Container, Row, Col } from "react-bootstrap";
import Inputs from '../form/Inputs';

const SignUp = ({user,onBlur, onChange,onSubmit}) => {
    const {user_name,email,password,errors} = user
    
    return (
        <Container>
            <Row>
                <Col className="mx-auto" sm={11} md={7} lg={5}>
                    <Card className="my-4">
                        <Form noValidate onSubmit={onSubmit} className="p-sm-3 p-xs-1">
                            <Card.Body>
                                <Card.Title as="h3" className="text-center mb-4 mt-2 theme-color">SignUp</Card.Title>
                                <Inputs name="user_name" type="text" placeholder="Enter Username" value={user_name}  onChange = {onChange} onBlur = {onBlur}  text={{model:"SignUp",label:"Username" ,error:errors.name}} />
                                <Inputs name="email" type="email" placeholder="Enter Email" value={email} onChange = {onChange} onBlur = {onBlur}  text={{model:"SignUp",label:"Email" ,error:errors.email}}/>
                                <Inputs name="password" type="password" placeholder="Enter Password"  value={password}  onChange ={onChange} onBlur = {onBlur}  text={{model:"SignUp",label:"Password" ,error:errors.password}}/>
                                <Button variant="info" type="submit" className="mt-4">
                                Submit
                               </Button>
                            </Card.Body>
                        </Form>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}



export default SignUp
