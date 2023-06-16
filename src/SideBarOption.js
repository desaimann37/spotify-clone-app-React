import React from 'react'
import './sidebarOption.css'

function SideBarOption({ title , Icon }) {
  return (
    <div className="sidebarOption">
      <p>{title}</p>
    </div>
  )
}

export default SideBarOption
