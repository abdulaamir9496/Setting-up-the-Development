import Hello from './components/Hello'
import HomePage from './components/HomePage'
import LoginPage from './components/LoginPage'

function App () {
    return (
        <>
            <Hello />
            <HomePage />
            <LoginPage />
        </>
    )
}

export default App

// This is just a static data which renders the output in the web page.
//In order to make it dynamic we have to use Props 