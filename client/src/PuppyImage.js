import React, { useState } from 'react'

const PuppyImage = () => {
  const [puppyImageUrl, setPuppyImageUrl] = useState('')
  const [loading, setLoading] = useState(false)

  const fetchPuppyImage = async () => {
    setLoading(true)
    try {
      const response = await fetch('/api/puppy')
      const data = await response.json()
      setPuppyImageUrl(data.imageUrl)
    } catch (error) {
      console.error('Error fetching puppy image:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="text-center mt-12">
      <button
        onClick={fetchPuppyImage}
        className="px-4 py-2 text-lg cursor-pointer bg-blue-500 text-white rounded hover:bg-blue-700"
      >
        {loading ? 'Loading...' : 'Click For Cute Puppy'}
      </button>

      {puppyImageUrl && (
        <div className="mt-5">
          <img src={puppyImageUrl} alt="Cute Puppy" className="w-72 mx-auto" />
        </div>
      )}
    </div>
  )
}

export default PuppyImage