import React from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';

class ShotGridContainer extends React.Component {

    fire  = () => {
        console.log("fire");
    };


    renderCols = (cols, row) => {
        let line = [];
        for(let j = row; j < row+10; j++) {
            line[j] = <Col bsClass="col" sm={1} md={1} lg={1} x={j-row} y={row} className={cols[j].IsOccupied ? "occupied" : "water"} key={row+j} onClick={this.fire} />;
        }
        return line;
    };

    renderRow = (row) => {
        let cols=[];
        this.props.shotGrid.Cases.forEach((cases,index) => {
            if( index >= row && index < row+10 )
            {
                cols[index] = cases;
            }
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
                {this.props.shotGrid.Cases.map((cases, index) => {
                    if( index%10 === 0 && index < 100 )
                    {
                        return (
                            this.renderRow(index)
                        )
                    }
                    else
                    {
                        return null;
                    }
                })}
            </Grid>
        )
    }
}

const mapStateToProps = function(store) {
    return {
        shotGrid: store.shotGridState.shotGrid
    };
};

export default connect(mapStateToProps)(ShotGridContainer);
