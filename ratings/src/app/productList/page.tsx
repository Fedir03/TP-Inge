'use client';

import Link from 'next/link'

import React, { useState } from 'react';
import {UserCircle, ChevronDown, Search, Star } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const categories = ["Electronics", "Clothing", "Books", "Home & Garden", "Toys"]
const products = Array(20).fill(null).map((_, i) => ({
  id: i + 1,
  name: `Product ${i + 1}`,
  rating: Math.floor(Math.random() * 5) + 1,
  image: `/placeholder.svg?height=200&width=200&text=Product+${i + 1}`
}))

export default function ProductPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Categories")

  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Content */}
      <div className="flex-1 flex">
        {/* Sidebar */}
        <aside className="w-64 bg-gray-100 p-4 hidden md:block">
          <h2 className="text-lg font-semibold mb-4">Filters</h2>
          <Input type="text" placeholder="Search..." className="mb-4" />
          <h3 className="font-medium mb-2">Categories</h3>
          <ul>
            {categories.map((category) => (
              <li key={category} className="mb-1">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  {category}
                </label>
              </li>
            ))}
          </ul>
        </aside>

        {/* Product Grid */}
        <main className="flex-1 p-4 overflow-y-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                  
                  <Link href="/productList/product" className="flex items-center">
                    {Array(5).fill(null).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${i < product.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                      />
                    ))}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}