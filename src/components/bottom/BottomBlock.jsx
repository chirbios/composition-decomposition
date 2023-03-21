import React from 'react'


import BottomCol1 from './BottomCol1'
import BottomCol2 from './BottomCol2'
import BottomCol3 from './BottomCol3'

import './bottom.css'

export default function BottomBlock(props) {
  return (
    <div className="bottom-block">
      <div className="bottom-block-col1">
        <BottomCol1 />
      </div>
      <div className="bottom-block-col2">
        <BottomCol2 />
      </div>
      <div className="bottom-block-col3">
        <BottomCol3 />
      </div>
    </div>
  );
}
