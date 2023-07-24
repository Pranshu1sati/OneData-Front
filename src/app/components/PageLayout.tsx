'use client'
import Footer from './Footer'
import Header from './Header'
const PageLayout = ({children} : any) => {

  return (<>

    <Header/>
      {children}
    <Footer/>
        </>    
  )
}
export default PageLayout