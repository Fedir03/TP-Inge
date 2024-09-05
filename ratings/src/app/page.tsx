import Link from 'next/link'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

import {Search} from 'lucide-react'

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow flex items-center justify-center px-4">
        <div className="w-full max-w-2xl">
          <h1 className="text-4xl font-bold text-center mb-8">Find and Rate Products</h1>
          <form action="/search" className="flex items-center">
            <Input
              type="search"
              placeholder="Search for products..."
              className="flex-grow"
              name="q"
            />
            <Button type="submit" className="ml-2">
              <Search className="h-4 w-4 mr-2" />
              Search
            </Button>
          </form>
        </div>
      </main>

      <footer className="bg-muted text-muted-foreground p-4 mt-auto">
        <div className="container mx-auto text-center">
          © 2023 RateIt. All rights reserved.
        </div>
      </footer>
    </div>
  )
}