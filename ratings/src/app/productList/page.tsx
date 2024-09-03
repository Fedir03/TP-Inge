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
      {/* Top Navigation Bar */}
      <header className="bg-primary text-primary-foreground p-4">
        <nav className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <Link href="/" className="text-2xl font-bold">
              RateIt
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost">
                  Categories <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link href="/categories/electronics">Electronics</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/categories/books">Books</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/categories/home">Home & Kitchen</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link href="/contact" className="hover:underline">
              Contact Us
            </Link>
            <Link href="/about" className="hover:underline">
              About Us
            </Link>
            <Link href="/productList" className="hover:underline">
              Pingu
            </Link>
          </div>
          <Link href="/login" className="text-primary-foreground hover:text-primary-foreground/80">
            <UserCircle className="h-6 w-6" />
            <span className="sr-only">Login or Sign Up</span>
          </Link>
        </nav>
      </header>

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
                  <div className="flex items-center">
                    {Array(5).fill(null).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${i < product.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}