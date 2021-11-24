import {Button, Card} from 'react-bootstrap';
import {useRouteMatch} from "react-router";
import {Link} from 'react-router-dom';
import {useEffect, useState} from "react";
import backendService from "../services/backendService";
import {useHistory} from "react-router";
import { BsBookmark, BsFillBookmarkFill } from "react-icons/bs";

export default function RepositoryScreen() {
    const history=useHistory();
    const [resources, setResources] = useState([]);
    const [statusCode, setStatusCode] = useState(0);
    const [bookmarks, setBookmarks] = useState([])

    const fetchResources = async() => {

        let response = await backendService("GET", "/resource?author=all", null, sessionStorage.username, sessionStorage.passwordHash);
        let receivedStatusCode = response.statusCode;
        response = response.response;

        let tempResource = [];

        for(let i=0; i<response.resource.length; i++) {
            let resource = {
                resourceID: response.resource[i].resourceID._text,
                name: response.resource[i].resourceName._text,
                author: response.resource[i].author._text,
                coverURL: response.resource[i].coverURL._text,
                storageLocation: response.resource[i].storageLocation._text
            }
            tempResource.push(resource);
        }

        setResources(tempResource);
        setStatusCode(receivedStatusCode);

        let response2 = await backendService("GET", "/bookmark", null, sessionStorage.username, sessionStorage.passwordHash);
        let receivedStatusCode2 = response2.statusCode;
        response2 = response2.response;

        let tempBookmark = [];

        for(let i=0; i<response2.resourceName.length; i++) {
            tempBookmark.push(response2.resourceName[i]._text);
        }
        setBookmarks(tempBookmark);
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
                    {resources.map(resource => 
                        <div class='book-tile'>
                            <Card style={{width: '18rem'}}>
                                <Card.Img variant="top" src={resource.coverURL} />
                                <Card.Body>
                                    <Card.Title class='card-title'>{resource.name}</Card.Title>
                                    <Card.Text>{resource.text}</Card.Text>
                                    <Button variant="dark" size="sm">View Resource</Button>
                                    <div>
                                       {    
                                            (bookmarks.includes(resource.resourceID))? (

                                                    <BsFillBookmarkFill style={{float: 'right'}}>
                                                    </BsFillBookmarkFill>
                                             ) :(
                                                    <BsFillBookmarkFill class="bookmark-unmarked" style={{float: 'right'}} onClick={async (e)=> {
                                                        let reqBody = {
                                                            resourceID: resource.resourceID,
                                                            username: sessionStorage.username
                                                        }
                                                        let response = await backendService("POST", "/bookmark", reqBody, sessionStorage.username, sessionStorage.passwordHash);
                                                        if(response.statusCode === 200) {
                                                            history.replace('/home');
                                                        }
                                                    }} ></BsFillBookmarkFill>
                                             )
                                        }
                                    </div>
                                    
                                </Card.Body>
                            </Card>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}