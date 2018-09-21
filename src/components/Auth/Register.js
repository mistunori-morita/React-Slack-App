import React, { Component } from 'react'
import { Grid, Form, Segment, Button, Header, Message, Icon} from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import firebase from '../../firebase'

export default class Register extends Component {

  state = {
    usename: '',
    email: '',
    password: '',
    passwordConfirmation: '',
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    //fireaseのメソッド
    firebase
    .auth()
    .createUserWithEmailAndPassword(this.state.email, this.state.password)
    .then(createdUser => {
      console.log(createdUser);
    })
    .catch(err => {
      console.error(err);
    })
  }


  render() {
    const { username, email, password, passwordConfirmation} = this.state;


    return <Grid textAlign="center" verticalAlign="middle" className="app">
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" icon color="orange" textAlign="center">
            <Icon name="address book outline" color="orange" />
            DevChat
          </Header>
          <Form onSubmit={this.handleSubmit} size="large">
            <Segment stacked>
              <Form.Input fluid name="username" icon="user" iconPosition="left" placeholder="Username" valuse={username} type="text" onChange={this.handleChange} />
              <Form.Input fluid name="email" icon="mail" iconPosition="left" placeholder="Email Address" valuse={email} type="email" onChange={this.handleChange} />
              <Form.Input fluid name="password" icon="lock" iconPosition="left" placeholder="Password" valuse={password} type="password" onChange={this.handleChange} />
              <Form.Input fluid name="passwordConfirmation" icon="repeat" iconPosition="left" placeholder="Password Confirmation" valuse={passwordConfirmation} type="password" onChange={this.handleChange} />
              <Button color="orange" fluid size="large">
                Submit
              </Button>
            </Segment>
          </Form>
          <Message>
            Already a user? <Link to="/login">Login</Link>
          </Message>
        </Grid.Column>
      </Grid>;
  }
}
