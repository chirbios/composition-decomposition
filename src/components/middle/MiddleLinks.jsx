import React from 'react';

export default function MiddleLinks(props) {
  return (
    <span>
      <a href={props.url}>{props.title}</a>
    </span>
  );
}