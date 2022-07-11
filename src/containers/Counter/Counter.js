import React, { Component } from 'react';
import { connect } from 'react-redux'

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter} />
                <CounterControl label="Add 10" clicked={this.props.onAddCounter} />
                <CounterControl label="Subtract 10" clicked={this.props.onSubtractCounter} />
            </div>
        );
    }
}

// Access the state values
const mapStateToProps = (state) => {
    return {
        // propName: state.what
        ctr: state.counter
    }
}

// Dispatch Actions from Components
const mapDispatchToProps = (dispatch) => {
    return {
        // propName: () => dispatch(actions)
        onIncrementCounter: () => dispatch( {type: 'INC_COUNTER'} ),
        onDecrementCounter: () => dispatch( {type: 'DEC_COUNTER'} ),
        onAddCounter: () => dispatch( {type: 'ADD_COUNTER', payload: 10} ),
        onSubtractCounter: () => dispatch( {type: 'SUB_COUNTER', payload: 10} )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);