import {Button, Card} from 'react-bootstrap';
import {useRouteMatch} from "react-router";
import {Link} from 'react-router-dom';
import {useEffect, useState} from "react";
import backendService from "../services/backendService";

export default function RepositoryScreen() {

    const [resources, setResources] = useState([]);
    const [statusCode, setStatusCode] = useState(0);

    const fetchResources = async() => {
        let response = await backendService("GET", "/resource", {author: "all"}, sessionStorage.username, sessionStorage.passwordHash);
        let receivedStatusCode = response.statusCode;
        console.log(response);
        response = response.response;

        let tempResource = [];

        for(let i=0; i<response.resource.length; i++) {
            let resource = {
                resourceID: response.resource[i].resourceID._text,
                name: response.resource[i].name._text,
                author: response.resource[i]._text,
                coverURL: response.resource[i].coverURL._text,
                storageLocation: response.resource[i].storageLocation._text
            }
            tempResource.push(resource);
        }

        setResources(tempResource);
        setStatusCode(receivedStatusCode);
    }

    const url=useRouteMatch().url;

    useEffect(()=>{
        fetchResources();
    },[]);

    return (
        <div>
            <div class='RepositoryScreen'>
                <h1 id='heading'>RESOURCE REPOSITORY</h1>
                <div className="col-md-12 text-center">
                    <Link to={`${url}/new`}>
                        <Button variant="dark" size="sm">
                            Add New Resource
                        </Button>
                    </Link>
                </div>
                <div id='books-grid'>
                    {resources.forEach(resource => {
                        <div class='book-tile'>
                            <Card style={{width: '18rem'}}>
                                <Card.Img variant="top" src={resource.coverURL} />
                                <Card.Body>
                                    <Card.Title class='card-title'>{resource.name}</Card.Title>
                                    <Card.Text>{resource.text}</Card.Text>
                                    <Button variant="dark" size="sm">View Resource</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    })}
                </div>
            </div>
        </div>
    );
}