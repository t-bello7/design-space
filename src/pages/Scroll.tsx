import {
    SmoothScrollHero,
    AuroHero,
    ShuffleHero
} from '../components'

const Scroll = () => {
    return (
        <div className='mx-11'>
            <h2> Smooth Scroll </h2>
            <SmoothScrollHero />
            <h2> Aurora Hero  </h2>
            <AuroHero />
            <h2> Shuffle Hero </h2>
            <ShuffleHero />
        </div>
    )
}

export default Scroll