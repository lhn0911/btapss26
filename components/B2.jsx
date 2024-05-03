import React, { Component } from 'react';

class Calculation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num1: 10,
            num2: 10,
            resultAdd: 0,
            resultSubtract: 0,
            resultMultiply: 0,
            resultDivide: 0
        };
    }

    add = () => {
        const { num1, num2 } = this.state;
        return num1 + num2;
    }

    subtract = () => {
        const { num1, num2 } = this.state;
        return num1 - num2;
    }

    multiply = () => {
        const { num1, num2 } = this.state;
        return num1 * num2;
    }
    divide = () => {
        const { num1, num2 } = this.state;
        return num1 / num2;
    }

    render() {
        return (
            <div>
                <p>Addition: {this.add()}</p>
                <p>Subtraction: {this.subtract()}</p>
                <p>Multiplication: {this.multiply()}</p>
                <p>Division: {this.divide()}</p>
            </div>
        );
    }
}

export default Calculation;
