import React from 'react'
import iitpLogo from 'assets/images/IITP_logo.png'
import testworksLogo from 'assets/images/testworks_logo.png'
import comcomLogo from 'assets/images/comcom_logo.png'
import niaLogo from 'assets/images/NIA_logo.png'
import eq4allLogo from 'assets/images/EQ4ALL_logo.png'
import kaistLogo from 'assets/images/KAIST_logo.png'
import kadLogo from 'assets/images/KAD_logo.png'
import ketiLogo from 'assets/images/KETI_logo.png'
import nazarene from 'assets/images/nazarene_logo.png'

const Section7 = () => {
  return (
    <div className={'section5 py-20 flex flex-col justify-center items-center'}>
      <div className={'title text-4xl font-bold border-solid'}>
        <p>함께하는 곳</p>
        <div className={'title_line mt-1'} />
      </div>
      <div className={'flex flex-col justify-center mt-16 p-8'}>
        <div className={'w-full flex flex-col sm:flex-row flex-nowrap justify-between items-center sm:items-start font-bold text-center'}>
          <div className={'flex flex-col mb-8 sm:mb-0 items-center'}>
            <div className={'w-full py-1 mb-2 sm:mb-14 text-lg bg-gray-100 rounded-3xl'}>주최</div>
            <div>
              <img src={iitpLogo} alt={'IITP'} className={'mb-2'} />
              <img src={niaLogo} alt={'NIA'} />
            </div>
          </div>

          <div className={'flex flex-col mb-8 sm:mb-0 items-center'}>
            <div className={'w-full py-1 mb-4 sm:mb-14 text-lg bg-gray-100 rounded-3xl'}>주관</div>
            <img src={testworksLogo} alt={'test works'} />
          </div>

          <div className={'flex flex-col mb-8 sm:mb-0 items-center'}>
            <div className={'w-full py-1 mb-4 sm:mb-14 text-lg bg-gray-100 rounded-3xl'}>운영</div>
            <img src={comcomLogo} alt={'common computer'} />
          </div>
        </div>
        <div className={'w-full flex flex-col items-center mt-16'}>
          <div className={'w-full py-1 mb-4 sm:mb-12 text-lg bg-gray-100 rounded-3xl font-bold'}>참여기업</div>
          <div className={'flex flex-col sm:flex-row flex-nowrap items-center'}>
            <img src={eq4allLogo} alt={'EQ4ALL'} />
            <img src={kaistLogo} alt={'KAIST'} />
            <img src={kadLogo} alt={'KAD'} />
            <img src={ketiLogo} alt={'KETI'} />
            <img src={nazarene} alt={'나사렛대학교'} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section7
