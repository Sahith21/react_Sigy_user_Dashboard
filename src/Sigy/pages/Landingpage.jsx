import React from 'react'
import Topbar from '../components/Topbar'
import Itemsdisplay from '../components/Itemsdisplay'
import Chains from '../components/Chains'
import Firmcollections from '../components/Firmcollections'

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