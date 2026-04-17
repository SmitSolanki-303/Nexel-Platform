'use client'

import type { Header } from '@/payload-types'

import { Button } from '@/components/ui/button'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet'
import { useAuth } from '@/providers/Auth'
import { cn } from '@/utilities/cn'
import { MenuIcon } from 'lucide-react'
import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

interface Props {
  menu: Header['navItems']
}

export function MobileMenu({ menu }: Props) {
  const { user } = useAuth()

  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [isOpen, setIsOpen] = useState(false)

  const closeMobileMenu = () => setIsOpen(false)

  // Fixed navigation items for Jaladhi Fashion
  const navigationItems = [
    { label: 'Home', href: '/' },
    { label: 'Our Shop', href: '/shop' },
    { label: 'Our Story', href: '/our-story' },
  ]

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [isOpen])

  useEffect(() => {
    setIsOpen(false)
  }, [pathname, searchParams])

  return (
    <Sheet onOpenChange={setIsOpen} open={isOpen}>
      <SheetTrigger className="relative flex h-11 w-11 items-center justify-center rounded-lg border border-neutral/20 text-neutral transition-colors hover:bg-accent">
        <MenuIcon className="h-4" />
      </SheetTrigger>

      <SheetContent side="left" className="px-4 bg-surface">
        <SheetHeader className="px-0 pt-4 pb-0">
          <SheetTitle className="text-neutral font-plus-jakarta-sans">Jaladhi</SheetTitle>
          <SheetDescription />
        </SheetHeader>

        <div className="py-4">
          <ul className="flex w-full flex-col">
            {navigationItems.map((item) => (
              <li className="py-2" key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    'block text-lg font-medium text-neutral hover:text-primary transition-colors font-inter',
                    {
                      'text-primary font-semibold': pathname === item.href,
                    },
                  )}
                  onClick={closeMobileMenu}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {user ? (
          <div className="mt-4">
            <h2 className="text-xl mb-4 text-neutral font-plus-jakarta-sans">My account</h2>
            <hr className="my-2 border-neutral/10" />
            <ul className="flex flex-col gap-2">
              <li>
                <Link
                  href="/orders"
                  onClick={closeMobileMenu}
                  className="text-neutral hover:text-primary transition-colors font-inter"
                >
                  Orders
                </Link>
              </li>
              <li>
                <Link
                  href="/account/addresses"
                  onClick={closeMobileMenu}
                  className="text-neutral hover:text-primary transition-colors font-inter"
                >
                  Addresses
                </Link>
              </li>
              <li>
                <Link
                  href="/account"
                  onClick={closeMobileMenu}
                  className="text-neutral hover:text-primary transition-colors font-inter"
                >
                  Manage account
                </Link>
              </li>
              <li className="mt-6">
                <Button
                  asChild
                  variant="outline"
                  className="border-neutral/20 text-neutral hover:bg-accent"
                >
                  <Link href="/logout" onClick={closeMobileMenu} className="font-inter">
                    Log out
                  </Link>
                </Button>
              </li>
            </ul>
          </div>
        ) : (
          <div>
            <h2 className="text-xl mb-4 text-neutral font-plus-jakarta-sans">My account</h2>
            <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-center">
              <Button
                asChild
                className="w-full sm:flex-1 bg-primary hover:bg-primary/90 text-surface"
                variant="default"
              >
                <Link href="/login" onClick={closeMobileMenu} className="font-inter">
                  Log in
                </Link>
              </Button>
              <span className="text-center text-sm text-neutral/60 sm:text-base font-inter">
                or
              </span>
              <Button
                asChild
                className="w-full sm:flex-1 border-neutral/20 text-neutral hover:bg-accent"
                variant="outline"
              >
                <Link href="/create-account" onClick={closeMobileMenu} className="font-inter">
                  Create an account
                </Link>
              </Button>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  )
}
