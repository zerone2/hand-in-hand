import React, { forwardRef } from 'react'
import nextIcon from 'assets/images/ic-navigate-next.png'
import './section.css'

const Section5 = forwardRef((props, ref) => {
  return (
    <div className={'section5 py-20 flex flex-col justify-center items-center'} ref={ref}>
      <div className={'title text-4xl font-bold border-solid'}>
        <p>대회 일정</p>
        <div className={'title_line mt-1'} />
      </div>
      <div className={'flex flex-col items-center mt-16'}>
        <div className={'w-full flex flex-row justify-center items-center'}>
          <div className={'flow-box w-full h-full flex flex-row items-center'}>
            <div className={'box-left h-full flex justify-center items-center bg-gray-800 text-lg text-white font-bold rounded-l-2xl'}>모집</div>
            <div className={'box-right w-full h-full bg-gray-100 flex flex-row justify-start items-center text-left rounded-r-2xl'}>
              <div className={'ml-8'}>
                <p className={'mb-2 font-bold'}>참가의향서 접수</p>
                <a href={'https://bit.ly/hihc2020'} style={{ color: '#48beef' }} className={'font-bold hover:underline'}>
                  bit.ly/hihc2020
                </a>
                <p className={'mt-2'}>12월 1일(화) ~ 12월 8일(화)</p>
              </div>
              <div className={'ml-28'}>
                <p className={'mb-2 font-bold'}>최종 서류 제출</p>
                <p>12월 16일(수) 18시 00분까지</p>
              </div>
            </div>
          </div>
          <img src={nextIcon} alt={'next'} style={{ width: 32, height: 32 }} />
        </div>

        <div className={'w-full flex flex-row justify-center items-center mt-8'}>
          <div className={'flow-box-small w-full h-full flex flex-row items-center'}>
            <div className={'box-left h-full flex justify-center items-center bg-gray-800 text-lg text-white font-bold rounded-l-2xl'}>1차 평가</div>
            <div className={'box-right w-full h-full bg-gray-100 flex flex-row justify-start items-center text-left rounded-r-2xl'}>
              <div className={'ml-8'}>
                <p className={'mb-2 text-lg font-bold'}>12월 17일(목)</p>
                <p>서류 평가 진행</p>
                <p className={'mt-2'}>(관련 전문가)</p>
              </div>
            </div>
          </div>
          <img src={nextIcon} alt={'next'} style={{ width: 32, height: 32 }} />
          <div className={'flow-box-small w-full h-full flex flex-row items-center'}>
            <div
              className={'box-left h-full flex justify-center items-center bg-gray-800 text-lg text-white font-bold rounded-l-2xl px-10 text-left'}
            >
              1차 평가 발표
            </div>
            <div className={'box-right w-full h-full bg-gray-100 flex flex-row justify-start items-center text-left rounded-r-2xl'}>
              <div className={'ml-8'}>
                <p className={'mb-2 text-lg font-bold'}>12월 17일(목) 18시 00분</p>
                <p>대학 공고 페이지를</p>
                <p className={'mt-2'}>통해 발표</p>
              </div>
            </div>
          </div>
          <img src={nextIcon} alt={'next'} style={{ width: 32, height: 32 }} />
        </div>

        <div className={'w-full flex flex-row justify-center items-center mt-8'}>
          <div className={'flow-box-small w-full h-full flex flex-row items-center'}>
            <div className={'box-left h-full flex justify-center items-center bg-gray-800 text-lg text-white font-bold rounded-l-2xl'}>멘토링</div>
            <div className={'box-right w-full h-full bg-gray-100 flex flex-row justify-start items-center text-left rounded-r-2xl'}>
              <div className={'ml-8'}>
                <p className={'mb-2 text-lg font-bold'}>12월 18일(금)</p>
                <p>참가기업과 전문가</p>
                <p className={'mt-2'}>1:1 온라인 멘토링</p>
              </div>
            </div>
          </div>
          <img src={nextIcon} alt={'next'} style={{ width: 32, height: 32 }} />
          <div className={'flow-box-small w-full h-full flex flex-row items-center'}>
            <div className={'box-left h-full flex justify-center items-center bg-gray-800 text-lg text-white font-bold rounded-l-2xl'}>최종 발표</div>
            <div className={'box-right w-full h-full bg-gray-100 flex flex-row justify-start items-center text-left rounded-r-2xl'}>
              <div className={'ml-8'}>
                <p className={'mb-2 text-lg font-bold'}>12월 20일(일)</p>
                <p className={'text-lg font-bold'}>오후 3시 ~ 6시</p>
                <p className={'mt-2'}>오프라인 진행</p>
              </div>
            </div>
          </div>
          <img src={nextIcon} alt={'next'} style={{ width: 32, height: 32 }} />
        </div>
      </div>
    </div>
  )
})

export default Section5
