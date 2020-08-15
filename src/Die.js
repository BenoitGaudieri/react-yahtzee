import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
    static defaultProps = {
        numberWords: ["one", "two", "three", "four", "five", "six"],
        // default initial value for spinning trigger
        // val: 6,
    };
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    // handleClick running the handleClick passed by the props from Game.js>Dice.js
    handleClick() {
        this.props.handleClick(this.props.idx);
    }

    render() {
        const { numberWords, locked, val, disabled, rolling } = this.props;
        let classes = `Die fas fa-dice-${numberWords[val - 1]} fa-5x `;
        if (locked) {
            classes += "Die-locked";
        }
        if (rolling) {
            classes += "Die-rolling";
        }
        return (
            <i
                className={classes}
                onClick={this.handleClick}
                disabled={disabled}
            >
                {/* {this.props.val} */}
            </i>
        );
    }
}

export default Die;
