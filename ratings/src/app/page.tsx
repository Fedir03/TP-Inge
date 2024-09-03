import Link from 'next/link'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { UserCircle, Search, ChevronDown } from 'lucide-react'

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-primary text-primary-foreground p-4">
        <nav className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <Link href="/" className="text-2xl font-bold">
              Pingust.ar
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