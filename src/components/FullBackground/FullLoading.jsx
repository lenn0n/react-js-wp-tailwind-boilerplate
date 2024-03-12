import React from 'react'

function FullLoading({ loadingText = "???" }) {
  return (
    <div>{loadingText}</div>
  )
}

export default FullLoading