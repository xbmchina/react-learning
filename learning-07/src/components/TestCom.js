import React from 'react';
import { connect } from 'react-redux';
import { addComment } from '../store/actions/comment'

@connect(
    state => ({comment:state.comments.comment}),
    { addComment } 
  )
 class TestCom extends React.Component {

    componentDidMount() {
      this.props.addComment({
          comment: 100
      })  
    }


    render() {
        console.log("render...."+this.props.comment);
        return (
            <div>
                <p>TestCom.... {this.props.comment} </p>
            </div>
        )
    }
}

export default TestCom;