import React from 'react';
import Button from '@mui/material/Button';
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
                            <h1>Prash - Anu</h1>
                        </Box>
                    </Container>
                    <Container maxWidth="xl">
                        <Box sx={{ height: '50vh', backgroundColor: '#ebdaeb' }} >
                            <Carousel style={{ width: '30em', height: '5em', marginLeft: '28%' }} interval={2000} touch={true}>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={one}
                                        alt="First slide"
                                    />
                                    <Carousel.Caption>
                                        <h3>First slide label</h3>
                                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={two}
                                        alt="Second slide"
                                    />

                                    <Carousel.Caption>
                                        <h3>Second slide label</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
                                        <h3>Third slide label</h3>
                                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </Box>
                    </Container>
                    <Container maxWidth="xl">
                        <Box sx={{ flexGrow: 1, height: '34vh', backgroundColor: '#ebdaeb' }}>
                            <Grid container spacing={2}>
                                <Grid item xs={4}>
                                    <Item style={{ backgroundColor: '#990b84' }}>Google maps</Item>
                                </Grid>
                                <Grid item xs={4}>
                                    <Item style={{ backgroundColor: '#990b84' }}>Contacts</Item>
                                </Grid>
                                <Grid item xs={4}>
                                    <Item style={{ backgroundColor: '#990b84' }}>Calendar</Item>
                                </Grid>
                                <Grid item xs={4}>
                                    <Item style={{ backgroundColor: '#990b84' }}>Short video</Item>
                                </Grid>
                                <Grid item xs={4}>
                                    <Item style={{ backgroundColor: '#990b84' }}>Instagram</Item>
                                </Grid>
                                <Grid item xs={4}>
                                    <Item style={{ backgroundColor: '#990b84' }}>Gllary</Item>
                                </Grid>
                            </Grid>
                        </Box>
                    </Container>
                </React.Fragment>
            </div>
        );
    }

}