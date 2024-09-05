"use client";  // Esto convierte el componente en un Client Component


import React, { useState } from 'react';
import { Star } from 'lucide-react'

interface CategoryRating {
  name: string
  rating: number
}

export default function ProductReview() {
  const [review, setReview] = useState('')
  const [categoryRatings, setCategoryRatings] = useState<CategoryRating[]>([
    { name: 'Category 1', rating: 0 },
    { name: 'Category 2', rating: 0 },
    { name: 'Category 3', rating: 0 },
  ])

  const calculateOverallRating = (): number => {
    const sum = categoryRatings.reduce((acc, category) => acc + category.rating, 0)
    return Math.round((sum / categoryRatings.length) * 2) / 2
  }

  const handleRatingChange = (index: number, rating: number) => {
    const newRatings = [...categoryRatings]
    newRatings[index].rating = rating
    setCategoryRatings(newRatings)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const overallRating = calculateOverallRating()
    console.log('Submitted review:', { categoryRatings, overallRating, review })
    // Here you would typically send this data to your backend
  }

  const StarRating = ({ rating, onRatingChange }: { rating: number; onRatingChange: (rating: number) => void }) => {
    return (
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-6 h-6 cursor-pointer ${
              star <= rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
            }`}
            onClick={() => onRatingChange(star)}
          />
        ))}
      </div>
    )
  }

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Product Review</h2>
      <form onSubmit={handleSubmit}>
        {categoryRatings.map((category, index) => (
          <div key={category.name} className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">{category.name}</label>
            <StarRating
              rating={category.rating}
              onRatingChange={(rating) => handleRatingChange(index, rating)}
            />
          </div>
        ))}
        <div className="mb-4">
          <label htmlFor="review" className="block text-sm font-medium text-gray-700 mb-1">
            Your Review
          </label>
          <textarea
            id="review"
            rows={4}
            className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
            value={review}
            onChange={(e) => setReview(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <span className="block text-sm font-medium text-gray-700 mb-1">Overall Rating</span>
          <div className="flex items-center">
            <StarRating rating={calculateOverallRating()} onRatingChange={() => {}} />
            <span className="ml-2 text-lg font-semibold">{calculateOverallRating().toFixed(1)}</span>
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
        >
          Submit Review
        </button>
      </form>
    </div>
  )
}