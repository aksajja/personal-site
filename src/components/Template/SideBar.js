import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Akarshan Sajja</h2>
        <p><a href="mailto:asajja@asu.edu">asajja@asu.edu</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Akarshan. ML Researcher | Math entusiast
        | Full stack developer.
        Currently a Graduate student at Arizona State University,
        working with Dr.Gautam Dasarathy.
        I am a BITS Pilani Alumni. Earlier I was
        at <a href="https://www.adonmo.com/">Adonmo</a>, an ad-tech startup, where I was the 2nd employee
        and saw it grow from $0 -&gt; $10 million valuation.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Akarshan Sajja <Link to="/">aksajja.github.io</Link>.</p>
    </section>
  </section>
);

export default SideBar;
