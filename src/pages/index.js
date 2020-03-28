import React from 'react'

import Layout from '../components/layoutWithHeader'
import DataDisplay from '../components/DataDisplay'

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      stickyNav: false,
    }
  }

  _handleWaypointEnter = () => {
    this.setState(() => ({ stickyNav: false }))
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }))
  }

  componentDidMount() {
    //const [response, stateDistrictWiseResponse] = await Promise.all([axios.get('https://api.covid19india.org/data.json'), axios.get('https://api.covid19india.org/state_district_wise.json')]);
  }
  render() {
    return (
      <Layout
        sticky={this.state.stickyNav}
        onEnter={this._handleWaypointEnter}
        onLeave={this._handleWaypointLeave}
        title="Home Page - Tmh"
      >
        <div id="main">
          {/* <section id="first" className="main special">
            <header className="major">
              <h2>Magna veroeros</h2>
            </header>
            <ul className="features">
              <li>
                <span className="icon major style1 fa-code"></span>
                <h3>Ipsum consequat</h3>
                <p>
                  Sed lorem amet ipsum dolor et amet nullam consequat a feugiat
                  consequat tempus veroeros sed consequat.
                </p>
              </li>
              <li>
                <span className="icon major style3 fa-copy"></span>
                <h3>Amed sed feugiat</h3>
                <p>
                  Sed lorem amet ipsum dolor et amet nullam consequat a feugiat
                  consequat tempus veroeros sed consequat.
                </p>
              </li>
              <li>
                <span className="icon major style5 fa-diamond"></span>
                <h3>Dolor nullam</h3>
                <p>
                  Sed lorem amet ipsum dolor et amet nullam consequat a feugiat
                  consequat tempus veroeros sed consequat.
                </p>
              </li>
            </ul>
            <footer className="major">
              <ul className="actions">
                <li>
                  <Link to="/generic" className="button">
                    Learn More
                  </Link>
                </li>
              </ul>
            </footer>
          </section> */}
          <DataDisplay></DataDisplay>
        </div>
      </Layout>
    )
  }
}

export default Index
