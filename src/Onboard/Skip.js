import React from 'react'
import { Link } from 'react-router-dom'
import "../Styles.css/onBoard.css"

export default function Skip() {
  return (
    <div className='skip'>
        <Link className='skipLink' to="/emptyhome"> Skip</Link>
    </div>
  )
}
