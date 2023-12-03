import Image from 'next/image'
import { Button } from './ui/button'

const Pricing = () => {
  return (
    <section
      id='pricing'
      className='relative mx-auto rounded-xl mb-24 max-w-6xl items-center flex md:justify-evenly flex-col md:flex-row md:mb-40 lg:mb-64 '
    >
      {/* image */}

      <div className='px-20 md:px-0 md:ml-20 z-20 -translate-y-28  md:max-w-sm mx-auto '>
        <Image
          src='/demo.png'
          alt='app illustration'
          width={500}
          height={500}
        />
      </div>

      {/* pricing container */}
      <div className='py-12 px-9 bg-clr-orange md:mr-20 text-clr-white z-50 rounded-xl w-full translate-y-2 md:absolute md:right-10 md:top-72 md:w-fit   md:px-12 lg:px-14 lg:py-16 md:-translate-y-0 '>
        <h2 className='font-bold text-lg mb-3 lg:mb-6 lg:text-xl'>
          Abonnement
        </h2>
        <p className='text-base mb-9 max-w-xs lg:max-w-sm lg:text-md lg:mb-12 '>
          Nous proposons un abonnement mensuel qui vous permettra de bénéficier de tous les avantages de notre Galet sans aucune contrainte.
        </p>
        {/* price container */}
        <div className='flex items-center mb-10 lg:mb-12'>
          <strong className='text-price font-bold mr-4'>4€</strong>
          <p className='text-md font-normal self'> / mois par galet</p>
        </div>
        {/* button container */}
        <div className='flex flex-col space-y-4 '>
          <Button
            variant='secondary'
            className='flex py-8 rounded-2xl space-x-3 items-center justify-center hover:bg-clr-yellow'
          >
            <p className='text-btn font-bold tracking-tight'>
              Commencer maintenant
            </p>
          </Button>
        </div>
      </div>
    </section>
  )
}
export default Pricing
