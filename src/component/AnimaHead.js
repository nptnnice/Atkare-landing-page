import React from 'react';
import { useState, useEffect } from 'react'

function AnimaHead() {
  const [nice, setNice] = useState(1)

  const increaseNice = () => {
    if (nice < 8) setNice((nice) => nice + 1)
    else setNice(1)
  }

  const animation = () => {
    if (nice == 1) {
      return (
        <div className='animation'>
          <div className='top'></div>
          <h1 className='one'>คอนโด</h1>
          <h1 className='two'>ธุรกิจ</h1>
          <h1 className='three'>โรงงาน</h1>
          <h1 className='four middle'>โรงเรียน</h1>
          <h1 className='five'>คอนโด</h1>
          <h1 className='six'>ธุรกิจ</h1>
          <h1 className='seven'>โรงงาน</h1>
          <h1 className='eight'>โรงเรียน</h1>
          <div className='bottom'></div>
        </div>
      )
    }
    if (nice == 2) {
      return (
        <div className='animation'>
          <div className='top'></div>
          <h1 className='one first'>คอนโด</h1>
          <h1 className='two first'>ธุรกิจ</h1>
          <h1 className='three first'>โรงงาน</h1>
          <h1 className='four first'>โรงเรียน</h1>
          <h1 className='five first middle'>คอนโด</h1>
          <h1 className='six first'>ธุรกิจ</h1>
          <h1 className='seven first'>โรงงาน</h1>
          <h1 className='eight first'>โรงเรียน</h1>
          <div className='bottom'></div>
        </div>
      )
    }
    if (nice == 3) {
      return (
        <div className='animation'>
          <div className='top'></div>
          <h1 className='one second'>คอนโด</h1>
          <h1 className='two second'>ธุรกิจ</h1>
          <h1 className='three second'>โรงงาน</h1>
          <h1 className='four second'>โรงเรียน</h1>
          <h1 className='five second'>คอนโด</h1>
          <h1 className='six second middle'>ธุรกิจ</h1>
          <h1 className='seven second'>โรงงาน</h1>
          <h1 className='eight second'>โรงเรียน</h1>
          <div className='bottom'></div>
        </div>
      )
    }
    if (nice == 4) {
      return (
        <div className='animation'>
          <div className='top'></div>
          <h1 className='one third'>คอนโด</h1>
          <h1 className='two third'>ธุรกิจ</h1>
          <h1 className='three third'>โรงงาน</h1>
          <h1 className='four third'>โรงเรียน</h1>
          <h1 className='five third'>คอนโด</h1>
          <h1 className='six third'>ธุรกิจ</h1>
          <h1 className='seven third middle'>โรงงาน</h1>
          <h1 className='eight third'>โรงเรียน</h1>
          <div className='bottom'></div>
        </div>
      )
    }
    if (nice == 5) {
      return (
        <div className='animation'>
          <div className='top'></div>
          <h1 className='one fourth'>คอนโด</h1>
          <h1 className='two fourth'>ธุรกิจ</h1>
          <h1 className='three fourth'>โรงงาน</h1>
          <h1 className='four fourth'>โรงเรียน</h1>
          <h1 className='five fourth'>คอนโด</h1>
          <h1 className='six fourth'>ธุรกิจ</h1>
          <h1 className='seven fourth'>โรงงาน</h1>
          <h1 className='eight fourth middle'>โรงเรียน</h1>
          <div className='bottom'></div>
        </div>
      )
    }
    if (nice == 6) {
      return (
        <div className='animation'>
          <div className='top'></div>
          <h1 className='one fifth middle'>คอนโด</h1>
          <h1 className='two fifth'>ธุรกิจ</h1>
          <h1 className='three fifth'>โรงงาน</h1>
          <h1 className='four fifth'>โรงเรียน</h1>
          <h1 className='five fifth'>คอนโด</h1>
          <h1 className='six fifth'>ธุรกิจ</h1>
          <h1 className='seven fifth'>โรงงาน</h1>
          <h1 className='eight fifth'>โรงเรียน</h1>
          <div className='bottom'></div>
        </div>
      )
    }
    if (nice == 7) {
      return (
        <div className='animation'>
          <div className='top'></div>
          <h1 className='one sixth'>คอนโด</h1>
          <h1 className='two sixth middle'>ธุรกิจ</h1>
          <h1 className='three sixth'>โรงงาน</h1>
          <h1 className='four sixth'>โรงเรียน</h1>
          <h1 className='five sixth'>คอนโด</h1>
          <h1 className='six sixth'>ธุรกิจ</h1>
          <h1 className='seven sixth'>โรงงาน</h1>
          <h1 className='eight sixth'>โรงเรียน</h1>
          <div className='bottom'></div>
        </div>
      )
    }
    if (nice == 8) {
      return (
        <div className='animation'>
          <div className='top'></div>
          <h1 className='one seventh'>คอนโด</h1>
          <h1 className='two seventh'>ธุรกิจ</h1>
          <h1 className='three seventh middle'>โรงงาน</h1>
          <h1 className='four seventh'>โรงเรียน</h1>
          <h1 className='five seventh'>คอนโด</h1>
          <h1 className='six seventh'>ธุรกิจ</h1>
          <h1 className='seven seventh'>โรงงาน</h1>
          <h1 className='eight seventh'>โรงเรียน</h1>
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