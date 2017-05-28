import React from 'react';
import { connect } from 'react-redux';

import * as gridApi from '../../api/grid-api';

import { Grid, Row, Col } from 'react-bootstrap';

class GridContainer extends React.Component {
    componentDidMount() {
        gridApi.getRandomGrid();
    };

    render() {
        return (
            <Grid bsClass="placingGrid">
                <Row bsClass="row">
                    <Col bsClass="col" sm={1} md={1} lg={1}/>
                    <Col bsClass="col" sm={1} md={1} lg={1}/>
                    <Col bsClass="col" sm={1} md={1} lg={1}/>
                    <Col bsClass="col" sm={1} md={1} lg={1}/>
                    <Col bsClass="col" sm={1} md={1} lg={1}/>
                    <Col bsClass="col" sm={1} md={1} lg={1}/>
                    <Col bsClass="col" sm={1} md={1} lg={1}/>
                    <Col bsClass="col" sm={1} md={1} lg={1}/>
                    <Col bsClass="col" sm={1} md={1} lg={1}/>
                    <Col bsClass="col" sm={1} md={1} lg={1}/>
                </Row>
                <Row bsClass="row">
                    <Col bsClass="col" sm={1} md={1} lg={1}/>
                    <Col bsClass="col" sm={1} md={1} lg={1}/>
                    <Col bsClass="col" sm={1} md={1} lg={1}/>
                    <Col bsClass="col" sm={1} md={1} lg={1}/>
                    <Col bsClass="col" sm={1} md={1} lg={1}/>
                    <Col bsClass="col" sm={1} md={1} lg={1}/>
                    <Col bsClass="col" sm={1} md={1} lg={1}/>
                    <Col bsClass="col" sm={1} md={1} lg={1}/>
                    <Col bsClass="col" sm={1} md={1} lg={1}/>
                    <Col bsClass="col" sm={1} md={1} lg={1}/>
                </Row>
                <Row bsClass="row">
                    <Col bsClass="col" sm={1} md={1} lg={1}/>
                    <Col bsClass="col" sm={1} md={1} lg={1}/>
                    <Col bsClass="col" sm={1} md={1} lg={1}/>
                    <Col bsClass="col" sm={1} md={1} lg={1}/>
                    <Col bsClass="col" sm={1} md={1} lg={1}/>
                    <Col bsClass="col" sm={1} md={1} lg={1}/>
                    <Col bsClass="col" sm={1} md={1} lg={1}/>
                    <Col bsClass="col" sm={1} md={1} lg={1}/>
                    <Col bsClass="col" sm={1} md={1} lg={1}/>
                    <Col bsClass="col" sm={1} md={1} lg={1}/>
                </Row>
                <Row bsClass="row">
                    <Col bsClass="col" sm={1} md={1} lg={1}/>
                    <Col bsClass="col" sm={1} md={1} lg={1}/>
                    <Col bsClass="col" sm={1} md={1} lg={1}/>
                    <Col bsClass="col" sm={1} md={1} lg={1}/>
                    <Col bsClass="col" sm={1} md={1} lg={1}/>
                    <Col bsClass="col" sm={1} md={1} lg={1}/>
                    <Col bsClass="col" sm={1} md={1} lg={1}/>
                    <Col bsClass="col" sm={1} md={1} lg={1}/>
                    <Col bsClass="col" sm={1} md={1} lg={1}/>
                    <Col bsClass="col" sm={1} md={1} lg={1}/>
                </Row>
                <Row bsClass="row">
                    <Col bsClass="col" sm={1} md={1} lg={1}/>
                    <Col bsClass="col" sm={1} md={1} lg={1}/>
                    <Col bsClass="col" sm={1} md={1} lg={1}/>
                    <Col bsClass="col" sm={1} md={1} lg={1}/>
                    <Col bsClass="col" sm={1} md={1} lg={1}/>
                    <Col bsClass="col" sm={1} md={1} lg={1}/>
                    <Col bsClass="col" sm={1} md={1} lg={1}/>
                    <Col bsClass="col" sm={1} md={1} lg={1}/>
                    <Col bsClass="col" sm={1} md={1} lg={1}/>
                    <Col bsClass="col" sm={1} md={1} lg={1}/>
                </Row>
                <Row bsClass="row">
                    <Col bsClass="col" sm={1} md={1} lg={1}/>
                    <Col bsClass="col" sm={1} md={1} lg={1}/>
                    <Col bsClass="col" sm={1} md={1} lg={1}/>
                    <Col bsClass="col" sm={1} md={1} lg={1}/>
                    <Col bsClass="col" sm={1} md={1} lg={1}/>
                    <Col bsClass="col" sm={1} md={1} lg={1}/>
                    <Col bsClass="col" sm={1} md={1} lg={1}/>
                    <Col bsClass="col" sm={1} md={1} lg={1}/>
                    <Col bsClass="col" sm={1} md={1} lg={1}/>
                    <Col bsClass="col" sm={1} md={1} lg={1}/>
                </Row>
                <Row bsClass="row">
                    <Col bsClass="col" sm={1} md={1} lg={1}/>
                    <Col bsClass="col" sm={1} md={1} lg={1}/>
                    <Col bsClass="col" sm={1} md={1} lg={1}/>
                    <Col bsClass="col" sm={1} md={1} lg={1}/>
                    <Col bsClass="col" sm={1} md={1} lg={1}/>
                    <Col bsClass="col" sm={1} md={1} lg={1}/>
                    <Col bsClass="col" sm={1} md={1} lg={1}/>
                    <Col bsClass="col" sm={1} md={1} lg={1}/>
                    <Col bsClass="col" sm={1} md={1} lg={1}/>
                    <Col bsClass="col" sm={1} md={1} lg={1}/>
                </Row>
                <Row bsClass="row">
                    <Col bsClass="col" sm={1} md={1} lg={1}/>
                    <Col bsClass="col" sm={1} md={1} lg={1}/>
                    <Col bsClass="col" sm={1} md={1} lg={1}/>
                    <Col bsClass="col" sm={1} md={1} lg={1}/>
                    <Col bsClass="col" sm={1} md={1} lg={1}/>
                    <Col bsClass="col" sm={1} md={1} lg={1}/>
                    <Col bsClass="col" sm={1} md={1} lg={1}/>
                    <Col bsClass="col" sm={1} md={1} lg={1}/>
                    <Col bsClass="col" sm={1} md={1} lg={1}/>
                    <Col bsClass="col" sm={1} md={1} lg={1}/>
                </Row>
                <Row bsClass="row">
                    <Col bsClass="col" sm={1} md={1} lg={1}/>
                    <Col bsClass="col" sm={1} md={1} lg={1}/>
                    <Col bsClass="col" sm={1} md={1} lg={1}/>
                    <Col bsClass="col" sm={1} md={1} lg={1}/>
                    <Col bsClass="col" sm={1} md={1} lg={1}/>
                    <Col bsClass="col" sm={1} md={1} lg={1}/>
                    <Col bsClass="col" sm={1} md={1} lg={1}/>
                    <Col bsClass="col" sm={1} md={1} lg={1}/>
                    <Col bsClass="col" sm={1} md={1} lg={1}/>
                    <Col bsClass="col" sm={1} md={1} lg={1}/>
                </Row>
                <Row bsClass="row">
                    <Col bsClass="col" sm={1} md={1} lg={1}/>
                    <Col bsClass="col" sm={1} md={1} lg={1}/>
                    <Col bsClass="col" sm={1} md={1} lg={1}/>
                    <Col bsClass="col" sm={1} md={1} lg={1}/>
                    <Col bsClass="col" sm={1} md={1} lg={1}/>
                    <Col bsClass="col" sm={1} md={1} lg={1}/>
                    <Col bsClass="col" sm={1} md={1} lg={1}/>
                    <Col bsClass="col" sm={1} md={1} lg={1}/>
                    <Col bsClass="col" sm={1} md={1} lg={1}/>
                    <Col bsClass="col" sm={1} md={1} lg={1}/>
                </Row>
            </Grid>
        )
    }
}

const mapStateToProps = function(store) {
    return {
        playerGrid: store.playerGridState.playerGrid
    };
};

export default connect(mapStateToProps)(GridContainer);