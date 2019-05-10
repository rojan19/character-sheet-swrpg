/**
 * Created by janda on 2.5.2019.
 */
import React from 'react'
export default class Edit extends React.Component {
    handleClick = () => this.props.history.push("/sheet");

    render() {
        return (
            <span>asdf<button onClick={() => this.handleClick()}>stamina</button></span>
        )
    }
}