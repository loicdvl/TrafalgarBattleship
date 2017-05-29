import React from 'react';
import { connect } from 'react-redux';

import * as gridApi from '../../api/grid-api';

import { Grid, Row, Col } from 'react-bootstrap';

class GridContainer extends React.Component {
    componentDidMount() {
        gridApi.getRandomGrid();
    };

    renderCols = (cols, row) => {
        let line = [];
        for(let j = row; j < row+10; j++) {
            line[j] = <Col bsClass="col" sm={1} md={1} lg={1} x={j-row} y={row} className={cols[j].IsOccupied ? "occupied" : "water"} key={row+j} />;
        }
        return line;
    };

    renderRow = (row) => {
        let cols=[];
        this.props.playerGrid.map((cases,index) => {
            if( index >= row && index < row+10 )
                return (
                    cols[index] = cases
                );
        });
        return (
            <Row bsClass="row" key={row}>
                {this.renderCols(cols, row)}
            </Row>
        )
    };

    render() {
        return (
            <Grid bsClass="placingGrid">
                {this.props.playerGrid.map((cases, index) => {
                    if( index%10 === 0 && index < 100 )
                    {
                        return (
                            this.renderRow(index)
                        )
                    }
                })}
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