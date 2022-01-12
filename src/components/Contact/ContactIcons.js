import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import data from '../../data/contact';

const ContactIcons = () => (
  <ul className="icons">
    <li key="GoogleScholar">
      <a href="https://scholar.google.com/citations?hl=en&user=TCezQdcAAAAJ">
        <span className="fab fa-scholar fa-lg" />
      </a>
    </li>
    {data.map((s) => (
      <li key={s.label}>
        <a href={s.link}>
          <FontAwesomeIcon icon={s.icon} />
        </a>
      </li>
    ))}
  </ul>
);

export default ContactIcons;
