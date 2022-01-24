import React from 'react';
import Button from '@mui/material/Button';
import { DashBoardState } from './DashBoardState';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
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
            fontSize:'2em'
        }));
        return (
            <div>
                <React.Fragment>
                    <CssBaseline/>                    
                    <Container maxWidth="xl">
                        <Box sx={{ height: '16vh', backgroundColor:'#ebdaeb' }}>
                            <h1>Prash - Anu</h1>
                        </Box>
                    </Container>
                    <Container maxWidth="xl">
                        <Box sx={{ height: '50vh', backgroundColor:'#ebdaeb' }} >
                            Carousal
                        </Box>
                    </Container>
                    <Container maxWidth="xl">                       
                        <Box sx={{ flexGrow: 1, height: '34vh', backgroundColor:'#ebdaeb' }}>
                            <Grid container spacing={2}>
                                <Grid item xs={4}>
                                    <Item style={{backgroundColor:'#990b84'}}>Google maps</Item>
                                </Grid>
                                <Grid item xs={4}>
                                    <Item style={{backgroundColor:'#990b84'}}>Contacts</Item>
                                </Grid>
                                <Grid item xs={4}>
                                    <Item style={{backgroundColor:'#990b84'}}>Calendar</Item>
                                </Grid>
                                <Grid item xs={4}>
                                    <Item style={{backgroundColor:'#990b84'}}>Short video</Item>
                                </Grid>
                                <Grid item xs={4}>
                                    <Item style={{backgroundColor:'#990b84'}}>Instagram</Item>
                                </Grid>
                                <Grid item xs={4}>
                                    <Item style={{backgroundColor:'#990b84'}}>Gllary</Item>
                                </Grid>
                            </Grid>
                        </Box>                        
                    </Container>
                </React.Fragment>
            </div>
        );
    }

}