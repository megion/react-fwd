import React, { Component } from "react"
import { connect } from "react-redux"
//import SignInForm from "../components/Auth/SignInForm"
//import { signIn } from "../ducks/auth"

class SingInPage extends Component {
  static propTypes = {}

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <p>Sing in page</p>
        {/*<SignInForm onSubmit={this.handleSignIn} />*/}
      </div>
    )
  }

  handleSignIn = ({ email, password }) => {
    //this.props.signIn(email, password)
  }
}

export default connect(
  null,
  //{ signIn } // map reducer function to props
)(SingInPage)
