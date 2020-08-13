import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    // handleClick running the handleClick passed by the props from Game.js>Dice.js
    handleClick() {
        this.props.handleClick(this.props.idx);
    }

    render() {
        return (
            <button
                className={"Die"}
                style={{
                    backgroundColor: this.props.locked ? "grey" : "black",
                }}
                onClick={this.handleClick}
            >
                {this.props.val}
            </button>
        );
    }
}

export default Die;
