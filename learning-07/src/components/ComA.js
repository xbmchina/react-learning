import React from 'react';

export default class ComA extends React.Component {



    render() {
        console.log("ComA........."+this.props.user)
        return (
            <div>
                {this.props.user}
            </div>
        )
    }
}