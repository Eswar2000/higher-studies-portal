import {Form, Button} from 'react-bootstrap';

export default function NewResource() {
    return (
        <div>
            <div class="container NewResourceScreen">
            <h1>Add a New Resource</h1>
            <Form>
                <Form.Group className="w-50" controlId="formResourceLink">
                    <Form.Label>Link to Resource</Form.Label>
                    <Form.Control type="text" placeholder="" />
                </Form.Group>
                <Form.Group controlId="formFile" id="imageDiv" className="mb-3">
                    <Form.Label>Add an image</Form.Label>
                    <Form.Control type="file" />
                </Form.Group>
                <Form.Group className="w-50" controlId="formDescription">
                    <Form.Label>Description of Resource</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <br></br>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            </div>
        </div>
    )
}