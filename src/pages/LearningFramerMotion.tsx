import { 
    FramerExitAnimation,
    FramerMenuToggle,
    FramerCounter,
    FramerToggleButton
} from "../components"

const LearningFramerMotion = () => {

    return (
        <section>
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
        </section>
    )
}

export default LearningFramerMotion;