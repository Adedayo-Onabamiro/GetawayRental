import React from 'react'

export const TeamMemberCard = (props) => {
    let imgSrc = props.imgSrc;
    let name = props.name;
    let role = props.role
  return (
    <div className="Membercard">
        <img src={imgSrc} alt="Avatar" />
        <div className="MembercardContainer">
            <h4><b>{name}</b></h4> 
            <p>{role}</p> 
        </div>
    </div>
  )
}
