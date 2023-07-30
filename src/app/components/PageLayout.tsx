'use client'
import Footer from './Footer'
import Header from './Header'
import SideBar from './SideBar'
const PageLayout = ({ children }: any) => {

  return (
    <>
      <Header />
      {/* <div className='w-full md:grid md:grid-cols-5 mt-20  bg-[#e9ecef]'>
        we need to hide this in login and signup page , check if user is present in context if and then use conditional rendering
        <section className='hidden col-span-1 md:flex h-full  w-full md:flex-col'>
          <SideBar/>
        </section>
        if user is not present then make col-span-5
        <main className='col-span-4 flex flex-col px-10' >
          {children}
        </main>
      </div> */}
      <main className='col-span-4 flex flex-col px-10' >
          {children}
        </main>
      <Footer />
    </>
  )
}
export default PageLayout