import React, { Component } from 'react'
import { Grid, Form, Segment, Button, Header, Message, Icon} from 'semantic-ui-react'
import { Link } from 'react-router-dom' 

export default class Register extends Component {

  state = {}

  handleChange = () => {}




  render() {
    return <Grid textAlign="center" verticalAlign="middle" className="app">
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" icon color="orange" textAlign="center">
            <Icon name="address book outline" color="orange" />
            DevChat
          </Header>
          <Form size="lage">
            <Segment stacked>
              <Form.Input fluid name="username" icon="user" iconPosition="left" placeholder="Username" type="text" onChange={this.handleChange} />
              <Form.Input fluid name="email" icon="mail" iconPosition="left" placeholder="Email Address" type="email" onChange={this.handleChange} />
              <Form.Input fluid name="password" icon="lock" iconPosition="left" placeholder="Password" type="password" onChange={this.handleChange} />
              <Form.Input fluid name="passwordConfirmation" icon="repeat" iconPosition="left" placeholder="Password Confirmation" type="password" onChange={this.handleChange} />
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
