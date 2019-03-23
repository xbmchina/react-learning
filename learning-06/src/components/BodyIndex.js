import React from 'react';
import ComponentHeader from './ComponentHeader';
import ComponentFooter from './ComponentFooter';

export default class BodyIndex extends React.Component {

    render() {
        return (
            <div>
                <ComponentHeader/>
                <ComponentFooter/>
            </div>
        )
    }
}
