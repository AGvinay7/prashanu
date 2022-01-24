import React from 'react';
import { Button } from 'reactstrap';
import { DashBoardState } from './DashBoardState';
export default class DashBoard extends React.Component {

    constructor(props) {
        super(props);
        this.state = DashBoardState
    }

    render() {
        return (
            <>
                <Button onClick={() => alert("Hey")}>
                    Click me
                </Button>
            </>
        );
    }

}