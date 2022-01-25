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
            <div>
                <React.Fragment>
                    <CssBaseline />
                    <Container maxWidth="xl">
                        <Box sx={{ height: '16vh', backgroundColor: '#ebdaeb' }}>
                            <h1><b>Prash <FavoriteBorderIcon></FavoriteBorderIcon> Anu</b></h1>
                        </Box>
                    </Container>
                    <Container maxWidth="xl">
                        <Box sx={{ height: '50vh', backgroundColor: '#ebdaeb' }} >
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
                                        <h3>Label for 3rd slide</h3>
                                        <p>We want to share this new chapter of our life with you and your family.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </Box>
                    </Container>
                    <Container maxWidth="xl">
                        <Box sx={{ flexGrow: 1, height: '34vh', backgroundColor: '#ebdaeb' }}>
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <Item style={{ backgroundColor: '#990b84' }} onClick={() => window.open("https://goo.gl/maps/ToHfKhdyqCto9UxYA", "_blank")} >Location <LocationOnIcon></LocationOnIcon></Item>
                                </Grid>
                                <Grid item xs={6}>
                                    <Item style={{ backgroundColor: '#990b84' }} onClick={() => this.setState({ openContactsModal: true })} >Contacts <ContactsIcon></ContactsIcon></Item>
                                </Grid>
                                <Grid item xs={6}>
                                    <Item style={{ backgroundColor: '#990b84' }} onClick={() => this.setState({ showCalendar: true })}>Calendar <CalendarTodayIcon></CalendarTodayIcon></Item>
                                </Grid>
                                <Grid item xs={6}>
                                    <Item style={{ backgroundColor: '#990b84' }}>Short video <SubscriptionsIcon></SubscriptionsIcon></Item>
                                </Grid>                               
                            </Grid>
                        </Box>
                    </Container>
                </React.Fragment>
                {this.state.openContactsModal && this.showContactsModal()}
                {this.state.showCalendar && this.showCalendar()}

            </div>
        );
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
                                    <td>Vinay AG</td>
                                    <td>0002222515</td>
                                </tr>
                                <tr>

                                    <td>Prashanth</td>
                                    <td>6656+44+44</td>
                                </tr>
                                <tr>

                                    <td>Gangadhar</td>
                                    <td>6545464654</td>
                                </tr>
                                <tr>

                                    <td>Deepak Kaluti</td>
                                    <td>9998887776</td>
                                </tr>
                                <tr>

                                    <td>Manu Kaluti</td>
                                    <td>0022255555</td>
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
                                    <td>06-05-2022</td>
                                    <td>Evening 4 PM</td>
                                    <td>Event 6</td>
                                </tr>

                            </tbody>
                        </Table>
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