import React, { useState, forwardRef } from 'react'
import Modal from '../modal'
import playIcon from 'assets/images/ic-play.png'
import closeIcon from 'assets/images/ic_close.png'
import './section.css'

const Section2 = forwardRef((props, ref) => {
  const [show, setShow] = useState(false)
  return (
    <div className={'section2 flex flex-col py-20 flex-nowrap justify-center items-center'} ref={ref}>
      <div className={'title text-4xl font-bold border-solid'}>
        <p>챌린지 개요</p>
        <div className={'title_line mt-1'} />
      </div>
      <div className={'mt-14 px-36 text-xl font-bold leading-10'}>
        2020 인공지능 학습용 데이터 구축 사업을 통해 준비된 한국 수어영상 데이터를 사용하여 대중교통·교육·문화생활·거주 등 일상 생활 및 전문 분야에서
        활용 가능한 서비스 구상 및 데모 개발 수행
      </div>
      <div
        className={
          'hover-btn mt-10 py-3 px-6 sm:py-6 sm:px-12 flex flex-row flex-nowrap justify-center items-baseline border-solid rounded-full border-2 border-gray-700 text-xl'
        }
        onClick={() => setShow(true)}
      >
        대회 가이드 영상 시청하기
        <img src={playIcon} alt={'play'} style={{ marginLeft: 5, width: 15.5, height: 15.5 }} />
      </div>
      <Modal visible={show} onClose={() => setShow(false)}>
        <div className={'relative sm:w-1/3 rounded-3xl p-16 sm:py-24 bg-white text-2xl text-gray-800 font-bold'}>
          <img src={closeIcon} onClick={() => setShow(false)} alt={'close'} className={'absolute top-3 right-3'} />
          영상이 준비중입니다.
        </div>
      </Modal>
    </div>
  )
})

export default Section2
