import React, { Component } from "react";
import "./RuleRow.css";

class RuleRow extends Component {
    render() {
        // shorten the handler assigning score, name, description and doScore directly to their this.hljs-preprocessor
        // we can now reference directly to score, name, doScore, description without this.props
        const { score, name, doScore, description } = this.props;
        // check if the score exists, if it does disabled is true.
        const disabled = score !== undefined;
        return (
            <tr
                className={`RuleRow RuleRow-${
                    disabled ? "disabled" : "active"
                }`}
                onClick={
                    // prevents the reuse of a score row that has already been used
                    disabled ? null : doScore
                }
            >
                <td className="RuleRow-name">{name}</td>
                <td className="RuleRow-score">
                    {disabled ? score : description}
                </td>
            </tr>
        );
    }
}

export default RuleRow;
