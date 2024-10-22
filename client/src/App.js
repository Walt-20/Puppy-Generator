import React from 'react'
import PuppyImage from './PuppyImage'

const App = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
            <h1 className="text-4xl font-bold mb-8 text-gray-800">Cute Puppy App</h1>
            <PuppyImage />
        </div>
    )
}

export default App