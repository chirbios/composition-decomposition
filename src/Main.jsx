import React from 'react'
import TopBlock from './components/top/TopBlock'
import MiddleBlock from './components/middle/MiddleBlock'
import BottomBlock from './components/bottom/BottomBlock'

import './style.css';

export default function Main() {
  return (
    <div className="container">
      <TopBlock />
      <MiddleBlock />
      <BottomBlock /> 
    </div>
  )
}
