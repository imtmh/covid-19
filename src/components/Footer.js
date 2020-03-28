import React from 'react'

const Footer = props => (
  <footer id="footer">
    {/* <section>
      <ul className="actions">
        <li>
          <Link to="/generic" className="button">
            Learn More
          </Link>
        </li>
      </ul>
    </section> */}
    <section>
      {/* <h2>Etiam feugiat</h2>
      <dl className="alt">
        <dt>Address</dt>
        <dd>1234 Somewhere Road &bull; Nashville, TN 00000 &bull; USA</dd>
        <dt>Phone</dt>
        <dd>(000) 000-0000 x 0000</dd>
        <dt>Email</dt>
        <dd>
          <a href="https://codebushi.com">information@untitled.tld</a>
        </dd>
      </dl> */}
      <ul className="icons">
        {/* <li>
          <a
            href="https://twitter.com/huntaroSan"
            className="icon fa-twitter alt"
          >
            <span className="label">Twitter</span>
          </a>
        </li>
        <li>
          <a href="https://codebushi.com" className="icon fa-facebook alt">
            <span className="label">Facebook</span>
          </a>
        </li>
        <li>
          <a href="https://codebushi.com" className="icon fa-instagram alt">
            <span className="label">Instagram</span>
          </a>
        </li> */}
        <li>
          <a href="https://github.com/imtmh" className="icon fa-github alt">
            <span className="label">GitHub</span>
          </a>
        </li>
        {/* <li>
          <a href="https://codebushi.com" className="icon fa-dribbble alt">
            <span className="label">Dribbble</span>
          </a>
        </li> */}
      </ul>
    </section>
    <p className="copyright">
      &copy; Covid-19. Design: <a href="https://github.com/imtmh">Tmh</a>.
    </p>
  </footer>
)

export default Footer
