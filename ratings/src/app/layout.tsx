import './globals.css'
import Link from 'next/link'
import { UserCircle, Search, ChevronDown } from 'lucide-react'
import { Button } from "@/components/ui/button"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>
      <div>
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
      </div>
      {children}

    </body>
    </html>
  )
}