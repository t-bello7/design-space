import { Link } from "react-router-dom"

const Home = () => {
    return (
      <div className="md:container text-3xl font-bold underline md:mx-auto">
        <Link to="/chart-component"> <h1>Designs</h1> </Link>
        <Link to="/loyal-base"> <h1>Loyal Base</h1> </Link>
        <Link to="/scroll-animate"> <h1>Scroll Animations</h1> </Link>
        <Link to="/learing-framer-motion"> Learning Framer Motion </Link>
        <Link to="/button"> <h1> Buttons </h1> </Link>
        <Link to="/digital-page"> <h1> Digital landing page</h1></Link>
        <Link to="/yasmen"> Yasmen Page Transition </Link>
      </div>
    )
}

export default Home