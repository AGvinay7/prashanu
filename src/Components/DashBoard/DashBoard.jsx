import React from 'react';
// import Button from '@mui/material/Button';
import { DashBoardState } from './DashBoardState';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Carousel from 'react-bootstrap/Carousel';
import one from '../../Images/one.jpg';
import two from '../../Images/two.jpg';
import three from '../../Images/three.jpg';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ContactsIcon from '@mui/icons-material/Contacts';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ReactPlayer from 'react-player';
import Accordion from 'react-bootstrap/Accordion';
import ListGroup from 'react-bootstrap/ListGroup';
import './Dashboard.css';
// import AHR from '../../Images/AHR.JPG';
// import ARG from '../../Images/ARG.jpg';
// import AGC from '../../Images/AGC.jpg';
// import ARS1 from '../../Images/ARS1.jpg';
// import ARH from '../../Images/ARH.jpg';
// import ARS from '../../Images/ARS.jpg';
// import L from '../../Images/L.JPG';
// import ARR from '../../Images/ARR.jpg';
import bg1 from '../../Images/bg1.jpg';
import PA from '../../Images/PA.png';
// import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsSnapchat } from "react-icons/bs";

export default class DashBoard extends React.Component {

    constructor(props) {
        super(props);
        this.state = DashBoardState
    }
    render() {
        const Item = styled(Paper)(({ theme }) => ({
            ...theme.typography.body2,
            padding: theme.spacing(1.5),
            textAlign: 'center',
            color: "#faf7fa",
            fontSize: '1em'
        }));
        return (
            <div style={{ backgroundImage: `url(${bg1})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                <React.Fragment>
                    <CssBaseline />
                    <Container style={{ padding: "0px" }} maxWidth="xl">
                        {/* <Box sx={{ height: '16vh' }}> */}
                        <Box style={{ paddingBottom: '2em' }}>
                            <h1><b>Prashanth<FavoriteBorderIcon></FavoriteBorderIcon>Anitha</b></h1>
                            <img src={PA} height={'20%'} width={'20%'}></img>
                        </Box>
                    </Container>
                    <Container style={{ padding: "0px" }} maxWidth="xl">
                        <Box sx={{ height: '50vh' }} >
                            <Carousel style={{ marginLeft: '15%', width: '17em' }} interval={3000} touch={true}>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={one}
                                        alt="First slide"
                                    />
                                    <Carousel.Caption>
                                        <h3>Save the date - 4th May 2022</h3>
                                        <p>Our wedding day won't be the same without you there.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={two}
                                        alt="Second slide"
                                    />

                                    <Carousel.Caption>
                                        <h3>Prashanth AG weds Anitha Kaluti</h3>
                                        <p>As a beloved friend, you must share in our joy.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        // height={}
                                        className="d-block w-100"
                                        src={three}
                                        alt="Third slide"
                                    />
                                    <Carousel.Caption>
                                        <h3>It's wedding time!</h3>
                                        <p>We want to share this new chapter of our life with you and your family.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </Box>
                    </Container>
                    <br />
                    <br />
                    <Container maxWidth="xl">
                        {/* <Box sx={{ flexGrow: 1, height: '34vh', backgroundColor: '#ebdaeb' }}> */}
                        <Box sx={{ flexGrow: 1, height: '42vh' }}>
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <Item style={{ backgroundColor: '#990b84' }} onClick={() => window.open("https://goo.gl/maps/56QH4Visv14T98QK7", "_blank")} ><b>Location </b><LocationOnIcon></LocationOnIcon></Item>
                                </Grid>
                                <Grid item xs={6}>
                                    <Item style={{ backgroundColor: '#990b84' }} onClick={() => this.setState({ openContactsModal: true })} ><b>Contacts </b><ContactsIcon></ContactsIcon></Item>
                                </Grid>
                                <Grid item xs={6}>
                                    <Item style={{ backgroundColor: '#990b84' }} onClick={() => this.setState({ showCalendar: true })}><b>Calendar </b><CalendarTodayIcon></CalendarTodayIcon></Item>
                                </Grid>
                                <Grid item xs={6}>
                                    <Item style={{ backgroundColor: '#990b84' }} onClick={() => this.setState({ playerOn: true })} ><b>Play video</b> <SubscriptionsIcon></SubscriptionsIcon></Item>
                                </Grid>
                            </Grid>
                            <Grid style={{ marginTop: '1.7em' }}>
                                <h3 style={{ color: '#d3d4cd' }}>With best compliments from our family members</h3>
                                <p style={{ color: '#d3d4cd' }}>Aralimarada family Hithla and Kaluti family Jamakhandi</p>
                                <span style={{ fontSize: '8px' }}>Made with love by vinay</span>
                                <div style={{ display: 'flex', textAlign: 'center', marginLeft: '46%' }}>
                                    <div style={{ padding: '0.5em' }}><BsInstagram onClick={() => window.open('https://instagram.com/agvinn?utm_medium=copy_link', '_blank').focus()}></BsInstagram></div>
                                    <div style={{ padding: '0.5em' }}><BsFacebook onClick={() => window.open('https://www.facebook.com/profile.php?id=100076736859297', '_blank').focus()}></BsFacebook></div>
                                    <div style={{ padding: '0.5em' }}><BsSnapchat onClick={() => window.open('https://www.snapchat.com/add/agvinnn?share_id=ODYyNkYw&locale=en_IN', '_blank').focus()}></BsSnapchat></div>
                                </div>

                                {/* <h4>With best compliments from our family members, friends and well wishers</h4> */}
                                <div>
                                    {/* <Accordion>
                                            <Accordion.Item eventKey="0">
                                                <Accordion.Header style={{ textAlign: 'center' }}>With best compliments from our family members</Accordion.Header>
                                                <Accordion.Body>
                                                    Aralimarada family Hithla and Kaluti family Jhamakhandi.
                                                </Accordion.Body> */}
                                    {/* <Accordion.Body>
                                                <ListGroup variant='flush'>
                                                    <ListGroup.Item>
                                                        <Container>
                                                            <Row style={{ marginLeft: '15%' }} xs={2} md={4} lg={6}>
                                                                <img src={AHR}></img>
                                                            </Row>
                                                            <Row style={{ marginLeft: '18.5%' }}>
                                                                Ramappa
                                                            </Row>
                                                        </Container>
                                                    </ListGroup.Item>
                                                    <ListGroup.Item>
                                                        <Container>
                                                            <Row style={{ marginLeft: '15%' }} xs={2} md={4} lg={6}>
                                                                <img src={L}></img>
                                                            </Row>
                                                            <Row style={{ marginLeft: '18.5%' }}>
                                                                Lalithamma
                                                            </Row>
                                                        </Container>
                                                    </ListGroup.Item>
                                                    <ListGroup.Item>
                                                        <Container>
                                                            <Row style={{ marginLeft: '15%' }} xs={2} md={4} lg={6}>
                                                                <img src={ARG}></img>
                                                            </Row>
                                                            <Row style={{ marginLeft: '18.5%' }}>
                                                                Gangadhar
                                                            </Row>
                                                        </Container>
                                                    </ListGroup.Item>
                                                    <ListGroup.Item>
                                                        <Container>
                                                            <Row style={{ marginLeft: '15%' }} xs={2} md={4} lg={6}>
                                                                <img src={AGC}></img>
                                                            </Row>
                                                            <Row style={{ marginLeft: '18.5%' }}>
                                                                Chandrakala
                                                            </Row>
                                                        </Container>
                                                    </ListGroup.Item>
                                                    <ListGroup.Item>
                                                        <Container>
                                                            <Row style={{ marginLeft: '15%' }} xs={2} md={4} lg={6}>
                                                                <img src={ARR}></img>
                                                            </Row>
                                                            <Row style={{ marginLeft: '18.5%' }}>
                                                                Ravikumar AR
                                                            </Row>
                                                        </Container>
                                                    </ListGroup.Item>
                                                    <ListGroup.Item>
                                                        <Container>
                                                            <Row style={{ marginLeft: '15%' }} xs={2} md={4} lg={6}>
                                                                <img src={ARS1}></img>
                                                            </Row>
                                                            <Row style={{ marginLeft: '18.5%' }}>
                                                                Shivkumar AR
                                                            </Row>
                                                        </Container>
                                                    </ListGroup.Item>
                                                    <ListGroup.Item>
                                                        <Container>
                                                            <Row style={{ marginLeft: '15%' }} xs={2} md={4} lg={6}>
                                                                <img src={ARH}></img>
                                                            </Row>
                                                            <Row style={{ marginLeft: '18.5%' }}>
                                                                Halesh AR
                                                            </Row>
                                                        </Container>
                                                    </ListGroup.Item>
                                                    <ListGroup.Item>
                                                        <Container>
                                                            <Row style={{ marginLeft: '15%' }} xs={2} md={4} lg={6}>
                                                                <img src={ARS}></img>
                                                            </Row>
                                                            <Row style={{ marginLeft: '18.5%' }}>
                                                                Satish AR
                                                            </Row>
                                                        </Container>
                                                    </ListGroup.Item>
                                                </ListGroup>
                                            </Accordion.Body> */}
                                    {/* </Accordion.Item>
                                        </Accordion> */}
                                </div>
                            </Grid>
                        </Box>
                    </Container>
                </React.Fragment>
                {this.state.openContactsModal && this.showContactsModal()}
                {this.state.showCalendar && this.showCalendar()}
                {this.state.playerOn && this.playPlayer()}
            </div>
        );
    }



    playPlayer = () => {
        return (
            <>
                <Modal
                    size='xl'
                    show={this.state.playerOn}
                    onHide={() => this.setState({ playerOn: false })}

                >

                    <Modal.Body>
                        <ReactPlayer
                            width='21rem'
                            // url='https://drive.google.com/file/d/1hwpZRvcvpJ662zGvATZ2tOjEQsFTdLnD/view?usp=sharing'
                            url='https://youtu.be/eXFCZw2U0gc'
                            controls={true}
                            onEnded={() => this.setState({ playerOn: false })}
                            onHide={() => this.setState({ playerOn: false })}
                            playsinline={true}
                            playing={this.state.playerOn} />
                        {/* <div><Button onClick={() => this.setState({ playerOn: false })}>Close player</Button></div> */}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => this.setState({ playerOn: false })}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>

            </>

        )
    }

    showContactsModal = () => {
        return (
            <>
                <Modal
                    show={this.state.openContactsModal}
                    onHide={() => this.setState({ openContactsModal: false })}

                >
                    <Modal.Header closeButton>
                        <Modal.Title> Contact Numbers</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Table striped bordered hover size="sm">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Number</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><b>- Hithla -</b></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Ravikumar AR</td>
                                    <td>9483305801</td>
                                </tr>
                                <tr>
                                    <td>Gangadhar AR</td>
                                    <td>8762755322</td>
                                </tr>
                                <tr>
                                    <td>Vinay AG</td>
                                    <td>9538805660</td>
                                </tr>
                                <tr>
                                    <td>Prashanth AG</td>
                                    <td>9538161161</td>
                                </tr>

                                <tr>
                                    <td><b>- Jamakhandi -</b></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Deepak Kaluti</td>
                                    <td>9738303910</td>
                                </tr>
                                <tr>
                                    <td>Manu Kaluti</td>
                                    <td>9535153239</td>
                                </tr>
                                <tr>
                                    <td>Naveen Kaluti</td>
                                    <td>9972805816</td>
                                </tr>

                            </tbody>
                        </Table>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => this.setState({ openContactsModal: false })}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }

    showCalendar = () => {
        return (
            <>
                <Modal
                    show={this.state.showCalendar}
                    onHide={() => this.setState({ showCalendar: false })}

                >
                    <Modal.Header closeButton>
                        <Modal.Title> Date and time of events</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Table striped bordered hover size="sm">
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Time</th>
                                    <th>Event</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>03-05-2022</td>
                                    <td>Evening 4 PM</td>
                                    <td>Event 1</td>
                                </tr>
                                <tr>
                                    <td>04-05-2022</td>
                                    <td>Morning 11 AM</td>
                                    <td>Mohortha</td>
                                </tr>
                                <tr>
                                    <td>06-05-2022</td>
                                    <td>Morning 11 AM </td>
                                    <td>Event 5</td>
                                </tr>
                                <tr>
                                    <td>8th May</td>
                                    <td>Noon</td>
                                    <td>Receiption at Hithala</td>
                                </tr>

                            </tbody>
                        </Table>

                        <Button onClick={() => window.open("https://goo.gl/maps/6nzvUA3VZXrR62wCA", "_blank")}>Click here to get Hithala location</Button>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => this.setState({ showCalendar: false })}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }


}