import React, { forwardRef } from 'react'

const Section3 = forwardRef((props, ref) => {
  return (
    <div className={'section3 py-20 flex flex-col justify-center items-center'} ref={ref}>
      <div className={'title text-4xl font-bold border-solid'}>
        <p>챌린지 주제</p>
        <div className={'title_line mt-1'} />
      </div>
      <div className={'mt-14 text-xl px-60'}>
        (주)테스트웍스에서 제공하는 한국 수어영상 데이터를 활용하여 다양한 분야에서 활용 가능한 인공지능 서비스 구상 및 데모 개발
      </div>
      <div style={{ width: 960 }} className={'flex flex-col justify-center items-center mt-12'}>
        <div className={'w-full flex flex-row text-left'}>
          <div style={{ width: 220 }} className={'bg-gray-800 rounded-tl-xl text-white font-bold font-lg pt-12 pl-12'}>
            필수주제
          </div>
          <div className={'w-full bg-gray-100 pl-12 pt-12 pb-8 rounded-tr-xl border-solid border-gray-200 border-b'}>
            <p className={'text-black font-bold'}>수어 영상 데이터를 활용하여 개발 가능한 인공지능 서비스 아이디어 도출</p>
            <p className={'text-gray-800 opacity-50 text-base pr-20 mt-2'}>
              청각 장애인 등 수어 사용자들의 활동 반경을 넓혀주고, 일상생활에서 마주하는 다양한 어려움에 대해 적재적소에 도움을 줄 수 있는 서비스
            </p>
          </div>
        </div>

        <div className={'w-full flex flex-row text-left'}>
          <div style={{ width: 220 }} className={'bg-gray-800 text-white font-bold font-lg pt-8 pl-12'}>
            가산점 주제 (1)
          </div>
          <div className={'w-full bg-gray-100 pl-12 pt-8 pb-8 border-solid border-gray-200 border-b'}>
            <p className={'text-black font-bold'}>인공지능 서비스 구현을 위한 시스템 아키텍쳐 설계</p>
          </div>
        </div>

        <div className={'w-full flex flex-row text-left'}>
          <div style={{ width: 220 }} className={'bg-gray-800 rounded-bl-xl text-white font-bold font-lg pt-8 pl-12'}>
            가산점 주제 (2)
          </div>
          <div className={'w-full bg-gray-100 pl-12 pt-8 pb-12 rounded-br-xl'}>
            <p className={'text-black font-bold'}>수어영상데이터를 활용한 인공지능 시스템의 구현</p>
            <p className={'text-gray-800 opacity-50 text-base pr-20 mt-2'}>수어 행동 패턴 인식 모델 구현/데모 시 가산점</p>
          </div>
        </div>
      </div>
      <div
        className={
          'hover-btn mt-14 py-6 px-12 flex flex-row flex-nowrap justify-center items-center border-solid rounded-full border-2 border-gray-700 text-xl'
        }
      >
        샘플 데이터 보러가기
      </div>
    </div>
  )
})

export default Section3
