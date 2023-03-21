import React from 'react';

export default function TopBlockTabLinks(props) {
  return (
    <span>
      <a href={props.url} key={props.id}>
        {props.title}
      </a>
    </span>
  );
}