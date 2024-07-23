import { Fragment } from 'react'
import ImageHero from '../images/slider-img.png'
import ServicesComp from './ServicesComp'
import AboutComp from './AboutComp'
import WhyUsComp from './WhyUsComp'
import TeamComp from './TeamComp'



function HomeComp() {
  
  return (
    <Fragment>
     <section className='bac-hero'>
      <div className='corsol'>
      <div className='container'>
        <div className='text-hero'>
          <h1>CRYPTO CURRENCY</h1>
          <p>Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic?
             Esse dicta aliquid error repudiandae earum suscipit fugiat molestias,
             veniam, vel architecto veritatis delectus repellat modi impedit sequi.</p>
             <button className='btn-all'>Read More</button>
        </div>
        <div className='image-hero'>
          <img src={ImageHero} alt=''></img>
        </div>
      </div>
      <div className='container none'>
        <div className='text-hero'>
          <h1>CRYPTO CURRENCY</h1>
          <p>Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic?
             Esse dicta aliquid error repudiandae earum suscipit fugiat molestias,
             veniam, vel architecto veritatis delectus repellat modi impedit sequi.</p>
             <button className='btn-all'>Read More</button>
        </div>
        <div className='image-hero'>
          <img src={ImageHero} alt=''></img>
        </div>
      </div>
      <div className='container none'>
        <div className='text-hero'>
          <h1>CRYPTO CURRENCY</h1>
          <p>Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic?
             Esse dicta aliquid error repudiandae earum suscipit fugiat molestias,
             veniam, vel architecto veritatis delectus repellat modi impedit sequi.</p>
             <button className='btn-all'>Read More</button>
        </div>
        <div className='image-hero'>
          <img src={ImageHero} alt=''></img>
        </div>
      </div>
      </div>
        <div className='btn-slider'>
        <span ></span>
        <span ></span>
        <span ></span>
        </div>
     </section>
    
    
      <ServicesComp/>
      <AboutComp/>
      <WhyUsComp/>
      <TeamComp/>
    </Fragment>
  )
}

export default HomeComp
