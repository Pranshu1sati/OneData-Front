'use client'
import Footer from './Footer'
import Header from './Header'
import SideBar from './SideBar'
const PageLayout = ({ children }: any) => {

  return (
    <>
      <Header />
      <div className='w-full md:grid md:grid-cols-5 mt-16 h-[75vh] bg-[#e9ecef]'>
        {/* we need to hide this in login and signup page , check if user is present in context if and then use conditional rendering */}
        <section className='hidden col-span-1 md:flex h-full  w-full md:flex-col'>
          <SideBar/>
        </section>
        <main className=' flex flex-col' >
          {children}
        </main>
      </div>
      <Footer />
    </>
  )
}
export default PageLayout