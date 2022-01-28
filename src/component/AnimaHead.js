import React from 'react';
import { useState, useEffect } from 'react'

function AnimaHead() {
  const [nice, setNice] = useState(1)

  const increaseNice = () => {
    if (nice < 5) setNice((nice) => nice + 1)
    else setNice(1)
  }

  const animation = () => {
    if (nice == 1) {
      return (
        <div className='animation'>
          <div className='top'></div>
          <h1 className='one'>คอนโด</h1>
          <h1 className='two'>โรงงาน</h1>
          <h1 className='three middle'>โรงเรียน</h1>
          <h1 className='four'>คอนโด</h1>
          <h1 className='five'>โรงงาน</h1>
          <div className='bottom'></div>
        </div>
      )
    }
    if (nice == 2) {
      return (
        <div className='animation'>
          <div className='top'></div>
          <h1 className='one first'>คอนโด</h1>
          <h1 className='two first'>โรงงาน</h1>
          <h1 className='three first'>โรงเรียน</h1>
          <h1 className='four first middle'>คอนโด</h1>
          <h1 className='five first'>โรงงาน</h1>
          <div className='bottom'></div>
        </div>
      )
    }
    if (nice == 3) {
      return (
        <div className='animation'>
          <div className='top'></div>
          <h1 className='one second '>คอนโด</h1>
          <h1 className='two second'>โรงงาน</h1>
          <h1 className='three second'>โรงเรียน</h1>
          <h1 className='four second'>คอนโด</h1>
          <h1 className='five second middle'>โรงงาน</h1>
          <div className='bottom'></div>
        </div>
      )
    }
    if (nice == 4) {
      return (
        <div className='animation'>
          <div className='top'></div>
          <h1 className='one third middle '>คอนโด</h1>
          <h1 className='two third'>โรงงาน</h1>
          <h1 className='three third'>โรงเรียน</h1>
          <h1 className='four third'>คอนโด</h1>
          <h1 className='five third '>โรงงาน</h1>
          <div className='bottom'></div>
        </div>
      )
    }
    if (nice == 5) {
      return (
        <div className='animation'>
          <div className='top'></div>
          <h1 className='one forth '>คอนโด</h1>
          <h1 className='two forth middle'>โรงงาน</h1>
          <h1 className='three forth'>โรงเรียน</h1>
          <h1 className='four forth'>คอนโด</h1>
          <h1 className='five forth '>โรงงาน</h1>
          <div className='bottom'></div>
        </div>
      )
    }
  }

  useEffect(() => {
    let id = setInterval(increaseNice, 1200)
    return () => clearInterval(id)
  })

  return (
    <div className='App'>
      {animation()}
      <br />
    </div>
  )
}

export default AnimaHead