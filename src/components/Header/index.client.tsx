'use client'
import { Cart } from '@/components/Cart'
import { OpenCartButton } from '@/components/Cart/OpenCart'
import Link from 'next/link'
import { Suspense } from 'react'

import type { Header } from 'src/payload-types'
import { MobileMenu } from './MobileMenu'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useAuth } from '@/providers/Auth'
import { cn } from '@/utilities/cn'
import { Search, User } from 'lucide-react'
import { usePathname } from 'next/navigation'

type Props = {
  header: Header
}

export function HeaderClient({ header }: Props) {
  const { user, logout } = useAuth()
  const pathname = usePathname()

  // Fixed navigation items for Jaladhi Fashion
  const navigationItems = [
    { label: 'Home', href: '/' },
    { label: 'Our Shop', href: '/shop' },
    { label: 'Our Story', href: '/our-story' },
  ]

  return (
    <div className="sticky top-0 z-50 backdrop-blur-md bg-surface/90 border-b border-neutral/10">
      <nav className="max-w-[1440px] mx-auto px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Mobile Menu */}
          <div className="block flex-none md:hidden">
            <Suspense fallback={null}>
              <MobileMenu menu={header.navItems || []} />
            </Suspense>
          </div>

          {/* Logo - Left Side */}
          <div className="flex items-center gap-4">
            <Link
              className="text-xl font-bold text-neutral hover:text-primary transition-colors tracking-tight font-plus-jakarta-sans"
              href="/"
            >
              Jaladhi Fashion
            </Link>

            {/* Center Section - Navigation + Search */}
            <div className="hidden md:flex items-center flex-1 justify-center space-x-8">
              {/* Navigation Menu */}
              <div className="flex items-center space-x-6">
                {navigationItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      'text-sm font-medium text-neutral hover:text-primary transition-colors tracking-wide font-inter',
                      {
                        'text-primary font-semibold': pathname === item.href,
                      },
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - User & Cart Icons */}
          <div className="flex items-center space-x-3">
            {/* Search Icon - Mobile/Tablet Only */}
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral/50 h-4 w-4" />
              <input
                type="text"
                placeholder="Search our curated styles..."
                className="w-80 pl-10 pr-4 py-2 border border-neutral/20 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-surface text-neutral placeholder-neutral/50 font-inter"
              />
            </div>

            <Button variant="ghost" size="sm" className="p-2 md:hidden hover:bg-accent">
              <Search className="h-5 w-5 text-neutral" />
              <span className="sr-only">Search</span>
            </Button>

            {/* User Account Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="p-2 hover:bg-accent">
                  <User className="h-5 w-5 text-neutral" />
                  <span className="sr-only">User account</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="w-48 bg-surface border-neutral/20 rounded-lg"
              >
                {user ? (
                  <>
                    <DropdownMenuItem asChild className="hover:bg-accent">
                      <Link href="/account" className="text-neutral font-inter">
                        My Account
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild className="hover:bg-accent">
                      <Link href="/orders" className="text-neutral font-inter">
                        My Orders
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator className="bg-neutral/10" />
                    <DropdownMenuItem
                      onClick={() => logout()}
                      className="hover:bg-accent text-neutral font-inter"
                    >
                      Sign Out
                    </DropdownMenuItem>
                  </>
                ) : (
                  <>
                    <DropdownMenuItem asChild className="hover:bg-accent">
                      <Link href="/login" className="text-neutral font-inter">
                        Sign In
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild className="hover:bg-accent">
                      <Link href="/create-account" className="text-neutral font-inter">
                        Create Account
                      </Link>
                    </DropdownMenuItem>
                  </>
                )}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Cart */}
            <Suspense fallback={<OpenCartButton />}>
              <Cart />
            </Suspense>
          </div>
        </div>
      </nav>
    </div>
  )
}
