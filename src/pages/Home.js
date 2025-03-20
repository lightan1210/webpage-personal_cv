import Project from "../components/Project"

const Home = () => {
    return (
        <div className="home">
            <nav className="container">
                <h1>PROYECTOS</h1>
                <ul className="projects">
                    <Project description={"Proyecto 1"} />
                    <Project description={"Proyecto 2"} />
                    <Project description={"Proyecto 3"} />
                    <Project description={"Proyecto 4"} />
                    <Project description={"Proyecto 5"} />
                    <Project description={"Proyecto 6"} />
                    <Project description={"Proyecto 7"} />
                    <Project description={"Proyecto 8"} />
                    <Project description={"Proyecto 9"} />
                    <Project description={"Proyecto 10"} />
                    <Project description={"Proyecto 11"} />
                    <Project description={"Proyecto 12"} />
                </ul>
            </nav>
        </div>
    )
}

export default Home;