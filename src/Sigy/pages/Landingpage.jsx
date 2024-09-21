import React from 'react'
import Topbar from '../components/topbar'
import Itemsdisplay from '../components/Itemsdisplay'
import Chains from '../components/chains'
import Firmcollections from '../components/firmcollections'

const Landingpage = () => {
  return (
    <div>
        <Topbar />
        <div className="landingsection">
        <Itemsdisplay />
        <Chains />
        <Firmcollections />
        </div>
    </div>
  )
}

export default Landingpage