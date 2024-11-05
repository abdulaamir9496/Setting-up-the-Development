
function HomePage() {

    function callingName() {
        return 'Muhammad Aamir'
    }
    return (
        <div>
            <h1>This is Home Page {callingName()}</h1>
        </div>
    )
}

export default HomePage

//we can do calculations, functions, variables etc., in as a JSX properties. 
//It is the beauty of JSX