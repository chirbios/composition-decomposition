import React from 'react'

import MiddleLogo from './MiddleLogo'
import MiddleLinks from './MiddleLinks'

export default function MiddleBlockSearch(props) {
  const Links = props.links.map((link) => {
    return <MiddleLinks url={link.url} title={link.title} />;
  })
  return (
    <>
      <div className="middle-block-search">
        <MiddleLogo />
        <div className="middle-block-search-main">
          <div className="middle-block-search-main-links">{Links}</div>
          <div className="middle-block-search-main-input">
            <input type="text" />
            <button>Искать</button>
          </div>
        </div>
      </div>
    </>
  )
}