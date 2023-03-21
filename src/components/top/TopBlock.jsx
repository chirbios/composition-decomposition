import React from 'react'
import './top.css'

import TopNews from './TopNews'
import TopAdv from './TopAdv'

import news from './data/news.json'
import tabs from './data/tabs.json'
import currencies from './data/currencies.json'

export default function TopBlock() {
  return (
    <div className="top-block">
      <TopNews tabs={tabs} news={news} currencies={currencies} />
      <TopAdv />
    </div>
  );
}