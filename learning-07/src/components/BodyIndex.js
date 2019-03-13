import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ComA from './ComA'
import ComB from './ComB'
import * as userInfoActions from '../store/actions/user'
 class BodyIndex extends React.Component {

    componentDidMount() {
        this.props.userInfoActions.loginSuccess({
            id:'呵呵呵呵',
            username: 'bibibiibibi'
        })
    }


    render() {

        return (
            <div>
                <p>Hello world</p>
                <ComA user={this.props.user}/>
                <ComB user= {this.props.user} />
            </div>
        )
    }
}
function  mapStateToProps(state) {
    console.log("mapStateToProps...."+state);
    return {
        user: state.user.userInfo
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userInfoActions: bindActionCreators(userInfoActions,dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BodyIndex)