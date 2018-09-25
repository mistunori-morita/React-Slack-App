import React, { Component } from 'react'
import { Menu, Icon, Modal, Form, Input, Button } from 'semantic-ui-react'


export default class Channels extends Component {

  state = {
    channels: [],
    channelName: '',
    channelDetails: '',
    modal: false
  }

  openModal = () => {
    this.setState({
      modal: true
    })
  }

  closeModal = () => {
    this.setState({
      modal: false
    })
  }


  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }


  render() {
    const { channels , modal } = this.state

    return (
      <div>
        <Menu.Menu style={{ paddingBottom: '2em'}}>
          <Menu.Item>
            <span>
              <Icon name="exchange"/> CHANNELS
            </span>{ " " }
            ({ channels.length}) <Icon name="add" onClick={this.openModal}/>
          </Menu.Item>
        </Menu.Menu>

        <Modal basic open={modal} onClose={this.closeModal}>
          <Modal.Header>Add a Channle</Modal.Header>
          <Modal.Content>
            <Form>
              <Form.Field>
                <Input 
                  fluid
                  label="Name of Channel"
                  name="ChannelName"
                  onChange={this.handleChange}

                />
              </Form.Field>
              <Form.Field>
                <Input 
                  fluid
                  label="About the Channel"
                  name="channelDetails"
                  onChange={this.handleChange}

                />
              </Form.Field>
            </Form>
          </Modal.Content>

          <Modal.Actions>
            <Button color="green" inverted>
             <Icon name="checkmark"/> Add
            </Button>
            <Button color="red" inverted onClick={this.closeModal}>
             <Icon name="remove"/> Cancel
            </Button>
          </Modal.Actions>
        </Modal>
      </div>
    )
  }
}
