import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layoutWithHeader'
import HeaderGeneric from '../components/HeaderGeneric'
import pic04 from '../assets/images/pic04.jpg'

class Generic extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet title="Generic Page Title" />
        <HeaderGeneric />
        <div id="main">
          <section id="content" className="main">
            <span className="image main">
              <img src={pic04} alt="" />
            </span>
            <h2>Magna feugiat lorem</h2>
            <p>
              Donec eget ex magna. Interdum et malesuada fames ac ante ipsum
              primis in faucibus. Pellentesque venenatis dolor imperdiet dolor
              mattis sagittis. Praesent rutrum sem diam, vitae egestas enim
              auctor sit amet. Pellentesque leo mauris, consectetur id ipsum sit
              amet, fergiat. Pellentesque in mi eu massa lacinia malesuada et a
              elit. Donec urna ex, lacinia in purus ac, pretium pulvinar mauris.
              Curabitur sapien risus, commodo eget turpis at, elementum
              convallis fames ac ante ipsum primis in faucibus.
            </p>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Generic
