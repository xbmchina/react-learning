import React from 'react';

export default class ComA extends React.Component {



    render() {
        return (
            <div>
                {this.props.user.id}
            </div>
        )
    }
}