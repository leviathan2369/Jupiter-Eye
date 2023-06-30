import Header from './components/Header'
import Sell from './components/Sell'
import Policy from './components/Policy'
import DialogLoc from './components/DialogLocasisation'

function SellPage() {
  return (
    <div className="">
      <Header />
      <main className="relative h-[200vh] bg-[#0E1129]">
        <div className="relative h-[200vh]  ">
          <DialogLoc />
          <Sell />
        </div>
      </main>
      <section className="relative z-40 -mt-[100vh] sm:hidden lg:hidden md:hidden min-h-screen bg-[#1B1B1B]">
        <div className="w-full flex flex-col items-center md:flex-row md:justify-between space-y-10 py-16">
          <h1 className="text-center text-5xl font-medium tracking-wide text-pink-200 xl:text-4xl">
            About Us
          </h1>
          <div className="w-full md:w-1/2 space-y-36"></div>
          <Policy />
        </div>
      </section>
    </div>
  )
}

export default SellPage
