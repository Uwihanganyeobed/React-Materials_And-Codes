import React, { useState } from 'react'

class LifecycleDemo extends React.Component {
  constructor(props) {
    super(props)
    this.state = { count: 0 }
  }

  componentDidMount() {
    this.props.addLog('componentDidMount — mounted')
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      this.props.addLog(`componentDidUpdate — count changed to ${this.state.count}`)
    }
  }

  componentWillUnmount() {
    this.props.addLog('componentWillUnmount — will unmount')
  }

  increment = () => this.setState(({ count }) => ({ count: count + 1 }))

  render() {
    return (
      <div style={{border: '1px solid #666', padding: 12, borderRadius: 6}}>
        <h3>LifecycleDemo (class)</h3>
        <p>Local count: {this.state.count}</p>
        <button onClick={this.increment}>Increment (triggers update)</button>
      </div>
    )
  }
}

export default function App() {
  const [show, setShow] = useState(true)
  const [logs, setLogs] = useState([])

  const addLog = (msg) => setLogs(l => [...l, `${new Date().toLocaleTimeString()}: ${msg}`])

  return (
    <div style={{fontFamily: 'sans-serif', padding: 20}}>
      <h2>React Class Component Lifecycle Demo</h2>

      <div style={{marginBottom:12}}>
        <button onClick={() => setShow(s => !s)}>{show ? 'Unmount' : 'Mount'} Demo</button>
        <button onClick={() => setLogs([])} style={{marginLeft:8}}>Clear Logs</button>
      </div>

      <div style={{display: 'flex', gap: 16}}>
        <div style={{flex: '0 0 320px'}}>
          {show && <LifecycleDemo addLog={addLog} />}
        </div>

        <div style={{flex: 1}}>
          <h4>Lifecycle Logs</h4>
          <div style={{background: '#f7f7f7', padding: 12, minHeight: 120}}>
            {logs.length === 0 ? (
              <em>No logs yet. Mount the demo or click increment.</em>
            ) : (
              <ul style={{margin:0, paddingLeft:18}}>
                {logs.map((l, i) => <li key={i}>{l}</li>)}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
