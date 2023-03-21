import React from 'react'

import TopTabLinks from './TopTabLinks'
import TopNewsLinks from './TopNewsLinks'
import TopCurrencies from './TopCurrencies'

export default function TopBlockNews(props) {
  const tabs = props.tabs;
  const news = props.news;
  const currencies = props.currencies;
  const tabLinks = tabs.map((link) => {
    return <TopTabLinks title={link.title} url={link.url} />
  });
  const newsLinks = news.map((link) => {
    return (
      <TopNewsLinks
        id={link.id}
        icon={link.icon}
        title={link.title}
        url={link.url}
      />
    );
  });
  
  const currs = currencies.map((item) => {
    return (
      <TopCurrencies
        title={item.title}
        url={item.title}
        rate={item.rate}
        diff={item.diff}
      />
    );
  });

  return (
    <div className="top-block-news">
      <div className="top-block-news-tabs">{tabLinks}</div>
      <ul className="top-block-news-links">{newsLinks}</ul>
      <div className="top-block-news-currencies">{currs}</div>
    </div>
  );
}
