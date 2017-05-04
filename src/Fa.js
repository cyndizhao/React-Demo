import React from 'react';

function Fa(props){
  const {kind, size, spin, color = ""} = props
  const styling = {
    color: color
  }
  const FontAwesome = function(){
    let faKind, faSize, faSpin
    if(kind){ faKind = `fa-${kind}`}
    if(size){ faSize = `fa-${size}`}
    if(spin){ faSpin = `fa-spin`}
    return `fa ${faKind} ${faSize} ${faSpin}`
  }
  return (
    <i className={ FontAwesome()} style = {styling}></i>
  )
}

export default Fa;
