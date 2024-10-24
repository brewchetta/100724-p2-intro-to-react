import Dog from './Dog'
import Cat from './Cat'

function App() {

    const doggos = ["Zoey", "Maxie", "Pip", "Scott", "Milbree", "JD"]

    return (
        <div>
            <h1>Welcome to Phase 2!</h1>
            <p>We're using React this phase!</p>
            <p>Type whatever I want</p>
            <h2>And build the website of my dreams!</h2>

            <Dog doggos={ doggos } pizza={"pizza"} hamburger={12} weLoveDogs={true} />
            <Dog doggos={ ["Jilly", "Koby", "Jigglemuffin"] } />
            <Cat />
        </div>
    )
}

export default App