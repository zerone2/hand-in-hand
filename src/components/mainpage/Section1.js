import React, { forwardRef } from 'react'
import mainImg from 'assets/images/HandinHand_full_illustration.png'
import titleImg from 'assets/images/HandinHandChallenge-title.png'
// import topUnderlineImg from 'assets/images/title_underline_top.png'
// import bottomUnderlineImg from 'assets/images/title_underline_bottom.png'
import './section.css'

const AnchorBtns = ({ topics, refs, onClick }) => {
  return (
    <div className={'container mx-auto my-24 flex flex-col md:flex-row flex-nowrap justify-center items-center px-8 lg:px-16'}>
      {topics.map((topic, idx) => (
        <div className={'w-full hover-btn rounded-full bg-black text-white text-lg py-6 px-6 mx-3 mb-2 md:mb-0'} onClick={() => onClick(refs[idx])}>
          {topic}
        </div>
      ))}
    </div>
  )
}

const Section1 = forwardRef((props, ref) => {
  const { onClick, refs } = props
  const topics = ['챌린지 개요', '챌린지 주제', '참가 대상', '대회 일정', '시상 내역']
  return (
    <>
      <div className={'container mx-auto max-w-screen-xl flex flex-col lg:flex-row flex-nowrap justify-between items-center'} ref={ref}>
        <div className={'flex-1 mt-16 p-8 max-w-screen-lg'}>
            <img src={mainImg} alt={'main'} />
        </div>

        <div className={'flex flex-col p-8'}>
          <img src={titleImg} alt={'title'} />
          {/*<div className={'text-7xl text-right font-black'}>*/}
          {/*  <p>Hand In Hand</p>*/}
          {/*  <img src={topUnderlineImg} style={{ width: 505, float: 'right' }} alt={'underline'} />*/}
          {/*  <p>Challenge</p>*/}
          {/*  <img src={bottomUnderlineImg} style={{ width: 385, float: 'right' }} alt={'underline'} />*/}
          {/*</div>*/}
          <div className={'mt-8 text-right font-bold text-md sm:text-lg'}>
            <p>수어(手語/Sign language) 데이터를 활용한</p>
            <p>베리어프리 서비스 디자인 챌린지</p>
            <p className={'text-xl font-normal mt-2'}>
              총상금{' '}
              <em style={{ color: '#48beef' }} className={'not-italic font-bold'}>
                900만원
              </em>
              (총 3팀)
            </p>
          </div>
        </div>
      </div>
      <AnchorBtns topics={topics} refs={refs} onClick={onClick} />
    </>
  )
})

export default Section1
