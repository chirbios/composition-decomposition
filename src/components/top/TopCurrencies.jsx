import React from 'react';

export default function TopBlockCurrencies(props) {
  return (
    <span>
      <a href={props.url}>
        <b>{props.title}</b> {props.rate} {props.diff}
      </a>
    </span>
  );
}
