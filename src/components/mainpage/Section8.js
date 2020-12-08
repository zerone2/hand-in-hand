import React from 'react'
import emailIcon from 'assets/images/ic_round-email.png'

const Section8 = () => {
  return (
    <div className={'section8 flex flex-col py-20 flex-nowrap justify-center items-center'}>
      <div className={'title text-4xl font-bold border-solid'}>
        <p>문의</p>
        <div className={'title_line mt-1'} />
      </div>
      <div className={'flex flex-row justify-center items-center mt-10'}>
        <img src={emailIcon} alt={'email'} />
        <p className={'ml-4 text-xl sm:text-2xl'}>2020.hihc@gmail.com</p>
      </div>
    </div>
  )
}

export default Section8
