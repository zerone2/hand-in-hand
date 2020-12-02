import React, { useRef } from 'react'
import { Section1, Section2, Section3, Section4, Section5, Section6, Section7, Section8, Footer } from 'components/mainpage'

const Mainpage = () => {
  const ref1 = useRef(null)
  const ref2 = useRef(null)
  const ref3 = useRef(null)
  const ref4 = useRef(null)
  const ref5 = useRef(null)
  const ref6 = useRef(null)

  const handleScrollTo = (elRef) => {
    // Incase the ref supplied isn't ref.current
    const el = elRef.current ? elRef.current : elRef

    // Scroll the element into view
    el.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  return (
    <div className={'mainpage'}>
      <Section1 onClick={handleScrollTo} refs={[ref2, ref3, ref4, ref5, ref6]} ref={ref1} />
      <Section2 ref={ref2} />
      <Section3 ref={ref3} />
      <Section4 ref={ref4} />
      <Section5 ref={ref5} />
      <Section6 ref={ref6} />
      <Section7 />
      <Section8 />
      <Footer />
    </div>
  )
}

export default Mainpage
