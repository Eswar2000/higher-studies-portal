import {Button, Card} from 'react-bootstrap';
import {useRouteMatch} from "react-router";
import {Link} from 'react-router-dom';
import {useEffect, useState} from "react";
import backendService from "../services/backendService";
import {BsFillBookmarkFill } from "react-icons/bs";

export default function RepositoryScreen() {
    // const history=useHistory();
    const [resources, setResources] = useState([]);
    const [bookmarks, setBookmarks] = useState([])

    const fetchResources = async() => {

        let response = await backendService("GET", "/resource?author=all", null, sessionStorage.username, sessionStorage.passwordHash);
        // let receivedStatusCode = response.statusCode;
        response = response.response;

        let tempResource = [];

        if(typeof response.resource!=="undefined"){
            if(typeof response.resource.length==="undefined"){
                tempResource.push({
                    resourceID: response.resource.resourceID._text,
                    name: response.resource.resourceName._text,
                    author: response.resource.author._text,
                    coverURL: response.resource.coverURL._text,
                    storageLocation: response.resource.storageLocation._text
                });
            }else{
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
            }
        }

        await fetchBookmarks();

        setResources(tempResource);
    }

    const fetchBookmarks=async ()=>{
        let response2 = await backendService("GET", "/bookmark", null, sessionStorage.username, sessionStorage.passwordHash);
        // let receivedStatusCode2 = response2.statusCode;
        response2 = response2.response;

        let tempBookmark = [];

        if(typeof response2.resourceName!=="undefined"){
            if(typeof response2.resourceName.length === "undefined"){
                tempBookmark.push(response2.resourceName._text)
            }else{
                for(let i=0; i<response2.resourceName.length; i++) {
                    tempBookmark.push(response2.resourceName[i]._text);
                }
            }
        }
        console.log(tempBookmark);
        setBookmarks(tempBookmark);
    }

    const url=useRouteMatch().url;

    const toggleBookmarkStatus=async (resourceID)=>{
        let reqBody = {
            resourceID: resourceID,
            username: sessionStorage.username
        }
        let response = await backendService("POST", "/bookmark", reqBody, sessionStorage.username, sessionStorage.passwordHash);
        if(response.statusCode === 200) {
            fetchBookmarks();
        }
    }

    useEffect(()=>{
        fetchResources();
        // eslint-disable-next-line
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
                                    <a rel={"noreferrer"} href={resource.storageLocation} target="_blank"><Button variant="dark" size="sm">View Resource</Button></a>
                                    <div>
                                       {    
                                            (bookmarks.includes(resource.resourceID))? (

                                                    <BsFillBookmarkFill style={{float: 'right'}} onClick={()=>{toggleBookmarkStatus(resource.resourceID)}}/>
                                             ) :(
                                                    <BsFillBookmarkFill class="bookmark-unmarked" style={{float: 'right'}} onClick={()=>{toggleBookmarkStatus(resource.resourceID)}}/>
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