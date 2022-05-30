import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../css/Footer.css'

const Footerr = () => {
    return (
        <div className='bg'>
            <Container className='mt-5'>
                <Row>
                    <Col md="3">
                        <div className='img_db'>
                            <img width="150px" src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg" alt="wqdjbqw" />
                        </div>
                    </Col>
                    <Col md="2" className='list_item fw-bold'>
                        <div className='mt-5'>
                            <p>THE BASICS</p>
                            <ul>
                                <li><a href="#">About TMDB</a></li>
                                <li><a href="#">Contact Us</a></li>
                                <li><a href="#">Support Forums</a></li>
                                <li><a href="#">API</a></li>
                                <li><a href="#">System Status</a></li>
                            </ul>
                        </div>
                    </Col>
                    <Col md="2" className='list_item fw-bold'>
                        <div className='mt-5'>
                            <p>GET INVOLVED</p>
                            <ul>
                                <li><a href="#">Contribution Bible</a></li>
                                <li><a href="#">Add New Movie</a></li>
                                <li><a href="#">Add New TV Show</a></li>
                            </ul>
                        </div>
                    </Col>
                    <Col md="2" className='list_item fw-bold'>
                        <div className='mt-5'>
                            <p>COMMUNITY</p>
                            <ul>
                                <li><a href="#">Guidelines</a></li>
                                <li><a href="#">Discussions</a></li>
                                <li><a href="#">Leaderboard</a></li>
                                <li><a href="#">Twitter</a></li>
                            </ul>
                        </div>
                    </Col>
                    <Col md="2" className='list_item fw-bold'>
                        <div className='mt-5'>
                            <p>LEGAL</p>
                            <ul>
                                <li><a href="#">Terms of Use</a></li>
                                <li><a href="#">API Terms of Use</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Footerr;
