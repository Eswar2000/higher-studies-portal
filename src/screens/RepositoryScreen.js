import {Button, Card} from 'react-bootstrap'

export default function RespositoryScreen() {
    return (
        <div>
            <div class='RepositoryScreen'>
                <h1 id='heading'>RESOURCE REPOSITORY</h1>
                <div id='books-grid'>
                    <div class='book-tile'>
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://images-na.ssl-images-amazon.com/images/I/81bGEoXpcUL.jpg" />
                    <Card.Body>
                        <Card.Title class='card-title'>The Official Guide to the GRE General Test</Card.Title>
                        <Card.Text>
                        The GRE or the Graduate Record Examination, is an entrance test that is necessary to secure admission into a graduate course in the US.
                        </Card.Text>
                        <Button variant="primary" size="sm">View Resource</Button>
                    </Card.Body>
                    </Card>
                    </div>

                    <div class='book-tile'>
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://images-na.ssl-images-amazon.com/images/I/51-GkDNfYFL._SX384_BO1,204,203,200_.jpg" />
                    <Card.Body>
                        <Card.Title class='card-title'>GRE Prep by Magoosh</Card.Title>
                        <Card.Text>
                        Magoosh gives students everything they need to make studying from their computers or mobile devices a breeze. Our online GRE prep offers over a thousand practice questions and video explanations.
                        </Card.Text>
                        <Button variant="primary">View Resource</Button>
                    </Card.Body>
                    </Card>
                    </div>

                    <div class='book-tile'>
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://img.veritasprep.com/2018-site/gre-home-product1.jpeg" />
                    <Card.Body>
                        <Card.Title class='card-title'>Оnline GRE strategy session</Card.Title>
                        <Card.Text>
                        The GRE strategy session is a useful guide if you are unsure how to start your GRE preparation. You can register for one of Veritas Prep’s upcoming free live online GRE strategy sessions.
                        </Card.Text>
                        <Button variant="primary">View Resource</Button>
                    </Card.Body>
                    </Card>
                    </div>

                    <div class='book-tile'>
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://takelessons.com/blog/wp-content/uploads/2014/10/4357228667_8f03047bd9_b.jpg" />
                    <Card.Body>
                        <Card.Title class='card-title'>GRE study guide</Card.Title>
                        <Card.Text>
                        A comprehensive study guide was designed to help students get their bearings at the start of their GRE preparation. The guide is packed with all kinds of useful information such as a description of the sections and an explanation of the scoring system.
                        </Card.Text>
                        <Button variant="primary">View Resource</Button>
                    </Card.Body>
                    </Card>
                    </div>

                    <div class='book-tile'>
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://images-na.ssl-images-amazon.com/images/I/41IqUmMaFuL._SX385_BO1,204,203,200_.jpg" />
                    <Card.Body>
                        <Card.Title class='card-title'>GMAT Official Guide 2021</Card.Title>
                        <Card.Text>
                        The Official Guide is your must-have study guide that features Verbal, Quantitative, and Integrated Reasoning questions types.
                        </Card.Text>
                        <Button variant="primary">View Resource</Button>
                    </Card.Body>
                    </Card>
                    </div>

                    <div class='book-tile'>
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://www.businessbecause.com/uploads/default/news/images/4a3d25987a04931e22680a7dbd40600208a17d93.webp" />
                    <Card.Body>
                        <Card.Title class='card-title'>The Critical Reasoning Bible</Card.Title>
                        <Card.Text>
                        The PowerScore Critical Reasoning Bible comes highly recommended. This in-depth guide is packed with theory and mini-drills to get your head around Critical Reasoning concepts. 
                        </Card.Text>
                        <Button variant="primary">View Resource</Button>
                    </Card.Body>
                    </Card>
                    </div>

                    <div class='book-tile'>
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://www.jagranjosh.com/imported/images/E/Articles/SWAYAM-Exam-2019.jpg" />
                    <Card.Body>
                        <Card.Title class='card-title'>SWAYAM Online Courses</Card.Title>
                        <Card.Text>
                        SWAYAM Online Courses provides access to teaching-learning resources. These resources were earlier delivered on the SWAYAM platform.
                        </Card.Text>
                        <Button variant="primary">View Resource</Button>
                    </Card.Body>
                    </Card>
                    </div>

                    <div class='book-tile'>
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://static.vikaspedia.in/media/images_en/education/interactive-resources/epathashala-logotest.jpg" />
                    <Card.Body>
                        <Card.Title class='card-title'>e-PG Pathshala</Card.Title>
                        <Card.Text>
                        e-PG Pathshala hosts high quality, curriculum-based, interactive e-content containing 23,000 modules (e-text and video) in 70 Post Graduate disciplines.
                        </Card.Text>
                        <Button variant="primary">View Resource</Button>
                    </Card.Body>
                    </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}