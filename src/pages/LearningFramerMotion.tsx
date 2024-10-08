import { 
    FramerExitAnimation,
    FramerMenuToggle,
    FramerCounter,
    FramerToggleButton,
    SharedLayoutAnimation
} from "../components"

const LearningFramerMotion = () => {

    return (
        <section className='mx-11'>
            <h2> Framer Decalarative Exit Animation  </h2>
            <FramerExitAnimation />
            <h2> Framer Menu Animation</h2>
            <FramerMenuToggle />
            <h2> Framer Counter Animaton </h2>
            <FramerCounter />
            <h3> Toggle Button </h3>
            <div className="bg-primary-soft-red">
                <FramerToggleButton />
            </div>
            <h3> Shared Layout Animation </h3>
            <SharedLayoutAnimation />
        </section>
    )
}

export default LearningFramerMotion;