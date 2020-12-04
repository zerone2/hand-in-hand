import React, { forwardRef } from 'react'

const Section6 = forwardRef((props, ref) => {
  return (
    <div className={'section6 p-8 flex flex-col py-20 flex-nowrap justify-center items-center'} ref={ref}>
      <div className={'title text-4xl font-bold border-solid'}>
        <p>시상 내역</p>
        <div className={'title_line mt-1'} />
      </div>
      <div className={'flex flex-col items-center mt-16 text-xl text-center font-bold'}>
        <div style={{ height: 90 }} className={'top w-full flex flex-row justify-between items-center bg-gray-800 text-white rounded-t-2xl'}>
          <div className={'w-full'}>대상</div>
          <div className={'w-full'}>최우수상</div>
          <div className={'w-full'}>우수상</div>
        </div>
        <div style={{ height: 90 }} className={'top w-full h-full flex flex-row justify-between items-center bg-white text-grey-800 rounded-b-2xl'}>
          <div className={'w-full'}>500만원</div>
          <div className={'w-full'}>300만원</div>
          <div className={'w-full'}>100만원</div>
        </div>
        <ul className={'w-full mt-8 list-inside list-disc text-left text-lg sm:text-xl font-bold'}>
          <li>결선 진출팀 전원 기계식 키보드 제공</li>
          <li className={'mt-2'}>
            결선 진출팀에 DGX A100 1core 1week 제공
            <span className={'ml-2 py-2 px-6 bg-gray-200 rounded-full text-base font-normal'}>커먼 컴퓨터 후원</span>
          </li>
        </ul>
      </div>
    </div>
  )
})

export default Section6
