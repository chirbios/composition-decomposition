import React from 'react';
import MiddleSearch from './MiddleSearch';
import MiddleBanner from './MiddleBanner';

import './middle.css';

import linksData from './data/links.json';

export default function MiddleBlock(props) {
  return (
    <div className="middle-block">
      <MiddleSearch links={linksData} />
      <MiddleBanner />
    </div>
  );
}