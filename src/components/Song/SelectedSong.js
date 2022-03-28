import React from 'react'
import { useSelector } from 'react-redux'

function SelectedSong() {
  const data = useSelector(state => state.selectedSong)
  if (!data) return null;
  return (
    <div>
      <h1>{data.name}</h1>
      <h3>{data.time}</h3>
    </div>
  )
}

export default SelectedSong