import React, { forwardRef } from 'react'

const Section4 = forwardRef((props, ref) => {
  return (
    <div className={'section4 flex flex-col py-20 flex-nowrap justify-center items-center'} ref={ref}>
      <div className={'title text-4xl font-bold border-solid'}>
        <p>참가 대상</p>
        <div className={'title_line mt-1'} />
      </div>
      <div className={'mt-14 text-md sm:text-xl font-bold'}>
        <p>인공지능, 학습용 데이터, 빅데이터 분석, 데이터 기반</p>
        <p className={'mt-2'}>비즈니스 모델/서비스 개발에 관심 있는 누구나</p>
      </div>
      <div className={'mt-8 flex flex-col sm:flex-row flex-wrap justify-center items-center text-center'}>
        <div className={'mb-4 sm:mb-0 sm:mr-4 bg-gray-200 rounded-full px-6 py-2 text-base'}>팀단위 구성(2인 이상, 5인 이하)</div>
        <div className={'bg-gray-200 rounded-full px-6 py-2 text-base'}>학력무관</div>
      </div>
    </div>
  )
})

export default Section4
