import React from 'react';

export default function TopBlockNewsLinks(props) {
  return (
    <>
      <li key={props.id}>
        <a href={props.url}>
          <img className="" src={props.icon} />
          <span className="">{props.title}</span>
        </a>
      </li>
    </>
  );
}