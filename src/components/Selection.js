import React, { useState } from 'react'

const Selection = ({ applyColor }) => {
  const [selectionStyle, updateSelectionStyle] = useState({ background: "" });

  return (
    <div
      className='fix-box subheading'
      style={selectionStyle}
      onClick={() => applyColor(updateSelectionStyle)}
    >
      Selection
    </div>
  )
}

export default Selection
