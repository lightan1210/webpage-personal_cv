import image from '../images/logo512.png'

const Project = ({ title }) => {
    return (
        <li className="project">
            <h1>{title}</h1>
            <div className="info">
                <img className="preview" src={image} />
                <p className="epigraphy">Officia amet exercitation consectetur mollit et nostrud ut dolor aliqua non sunt deserunt. Velit qui et ad amet aliqua cupidatat. Officia amet minim ea nisi minim cillum in dolore. Duis eu ex ex qui magna. Sit aliqua fugiat est et nisi voluptate Lorem. Commodo qui voluptate et nulla qui ipsum elit. Laborum elit dolor cillum proident incididunt.</p>
            </div>
        </li>
    )
}

export default Project;