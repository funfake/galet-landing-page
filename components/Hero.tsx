const Hero = () => {
  return (
    <section id='hero' className='px-6 pt-10 md:pt-16 mb-48 md:px-10'>
      <img src='/logo.svg' alt='' className='mb-16' />
      <h1 className='text-xl text-clr-black font-bold max-w-md md:text-3xl lg:text-4xl lg:max-w-3xl xl:max-w-4xl mb-5 md:mb-7 lg:mb-10'>
        La révolution du papier dans votre poche.
      </h1>
      <p className='text-clr-black text-sm max-w-md md:max-w-lg lg:max-w-3xl md:text-base lg:text-md mb-5'>
        Il est maintenant commun de trouver des QR Codes à scanner avec son téléphone permettant de relier réalité et virtuel. Imprimer sur papier a comme conséquence de tuer le dynamisme pourtant précieux pour les statistiques, ou pour tout simplement modifier son contenu.
      </p>
      <p className='text-clr-black text-sm max-w-md md:max-w-lg lg:max-w-3xl md:text-base lg:text-md'>
        Galet propose une solution clé en main permettant d’afficher n’importe quel lien sur son écran e-ink reprogrammable.
      </p>
    </section>
  )
}
export default Hero
