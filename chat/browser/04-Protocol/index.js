import React from 'react'
import ReactDOM from 'react-dom'
import App from '../common/views/App'
import createLibp2p from './libp2p'
import ChatProtocol from './chat-protocol'

ReactDOM.render(<App createLibp2p={createLibp2p} ChatProtocol={ChatProtocol} />, document.getElementById('root'))