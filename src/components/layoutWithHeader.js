import React from 'react'
import '../assets/scss/main.scss'
import Helmet from 'react-helmet'
import { Waypoint } from 'react-waypoint'
import Footer from './Footer'
import Nav from './Nav'
import Header from '../components/Header'

class Template extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: 'is-loading',
    }
  }

  componentDidMount() {
    this.timeoutId = setTimeout(() => {
      this.setState({ loading: '' })
    }, 100)
  }

  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId)
    }
  }

  render() {
    const { children, sticky, onEnter, onLeave, title } = this.props

    return (
      <div className={`body ${this.state.loading}`}>
        <div id="wrapper">
          <Helmet title={title} />
          <Header />
          <Waypoint onEnter={onEnter} onLeave={onLeave}></Waypoint>
          <Nav sticky={sticky} />

          {children}
          <Footer />
        </div>
      </div>
    )
  }
}

export default Template
