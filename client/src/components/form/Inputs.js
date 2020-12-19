import React from 'react'
import Form from "react-bootstrap/Form";

const Inputs = ({name, type,placeholder,onChange,onBlur, text}) => {
    const style = {
        color:"red"
    }
    return (
        <Form.Group >
             <Form.Label>{text.label } </Form.Label>
             <Form.Control name =  {name} type ={type} placeholder={placeholder} onChange={onChange} onBlur={onBlur}/>
             <Form.Control.Feedback type="invalid">
              {text.error}
            </Form.Control.Feedback>
            <p type="invalid" style={style} >
            {text.error}
            </p>
        </Form.Group>
    )
}


export default Inputs
