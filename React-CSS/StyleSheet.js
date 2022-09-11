import React from 'react'
import Style from './Style.css';

function StyleSheet(props) {
    let className=props.isvalue ? "demo" : "";
  return (
    <div>
        <h1 className={className}>StyleSheet</h1>
    </div>
  )
}

export default StyleSheet