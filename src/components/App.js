import React from 'react'
import { Grid } from 'semantic-ui-react'
import "./App.css";

import ColorPanel from './ColorPanel/ColorPanel'
import SlidePanel from './SlidePanel/SlidePanel'
import Messages from './Messages/Messages'
import MetaPanel from './MetaPanel/MetaPanel'

const App = () => {
  return (
    <Grid columns="equal" className="app" style={{ background: '#eee' }}>
      <ColorPanel />
      <SlidePanel />
        <Grid.Column style={{marginLeft: 320}}>
           <Messages />
        </Grid.Column>

        <Grid.Column width={4}>
             <MetaPanel />
        </Grid.Column>
    </Grid>
  )
}

export default App
