import { useState} from 'react';
import {Form, Button} from 'react-bootstrap';
import {useHistory} from "react-router";
import backendService from "../services/backendService";


export default function NewResource() {
    const [data, setData] = useState({resourceName:"",source:"", coverURL:"", description:""})
    const history=useHistory();
    return (
        <div>
            <div class="container NewResourceScreen">
            <h1>Add a New Resource</h1>
            <Form>
                <Form.Group controlId="formName" className="w-50">
                    <Form.Label>Resource Name</Form.Label>
                    <Form.Control type="text" name="resourceName" onChange={(e)=>{
                        setData({...data,[e.target.name]:e.target.value})
                    }}/>
                </Form.Group>
                <Form.Group className="w-50" controlId="formResourceLink">
                    <Form.Label>Link to Resource</Form.Label>
                    <Form.Control type="text" placeholder="" name="source" onChange={(e)=>{
                        setData({...data,[e.target.name]:e.target.value})
                    }}/>
                </Form.Group>
                
                <Form.Group controlId="formFile" id="imageDiv" className="mb-3">
                    <Form.Label>Add image URL</Form.Label>
                    <Form.Control type="text" name="coverURL" onChange={(e)=>{
                        setData({...data,[e.target.name]:e.target.value})
                    }}/>
                </Form.Group>
                <Form.Group className="w-50" controlId="formDescription">
                    <Form.Label>Description of Resource</Form.Label>
                    <Form.Control as="textarea" rows={3} name="description" onChange={(e)=>{
                        setData({...data,[e.target.name]:e.target.value})
                    }}/>
                </Form.Group>
                <br></br>
                <Button variant="primary" type="submit" onClick={async (e)=>{
                    e.preventDefault()
                    let reqBody = {
                        ...data,
                        author: sessionStorage.username
                    };
                    let response = await backendService("POST", "/resource",reqBody, sessionStorage.username, sessionStorage.passwordHash);
                    if(response.statusCode === 200){
                        history.replace('/home/repository');
                    }}}>
                    Submit
                </Button>
            </Form>
            </div>
        </div>
    )
}