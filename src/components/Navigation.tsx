'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

const navigationItems = [
  {
    title: 'Dashboard',
    href: '/',
    icon: '🏠'
  },
  {
    title: 'Emergency',
    href: '/emergency',
    icon: '🚨',
    urgent: true
  },
  {
    title: 'Disasters',
    href: '/disasters',
    icon: '⚠️',
    subItems: [
      { title: 'Typhoon', href: '/disasters/typhoon' },
      { title: 'Earthquake', href: '/disasters/earthquake' },
      { title: 'Flood', href: '/disasters/flood' },
      { title: 'Fire', href: '/disasters/fire' },
      { title: 'Volcano', href: '/disasters/volcano' }
    ]
  },
  {
    title: 'Preparedness',
    href: '/preparedness',
    icon: '📋',
    subItems: [
      { title: 'Emergency Plan', href: '/preparedness/plan' },
      { title: 'Emergency Kit', href: '/preparedness/kit' },
      { title: 'Family Plan', href: '/preparedness/family' }
    ]
  },
  {
    title: 'Learning',
    href: '/learning',
    icon: '📚'
  },
  {
    title: 'Resources',
    href: '/resources',
    icon: '📖'
  }
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const NavItems = ({ mobile = false }: { mobile?: boolean }) => (
    <div className={cn(
      'flex gap-1',
      mobile ? 'flex-col space-y-2' : 'flex-row'
    )}>
      {navigationItems.map((item, index) => {
        const isActive = pathname === item.href || pathname.startsWith(item.href + '/')
        
        return (
          <div key={index} className="relative group">
            <Link href={item.href} onClick={() => mobile && setIsOpen(false)}>
              <Button
                variant={isActive ? 'default' : 'ghost'}
                size={mobile ? 'default' : 'sm'}
                className={cn(
                  'w-full justify-start',
                  item.urgent && 'bg-red-100 text-red-700 hover:bg-red-200 dark:bg-red-900 dark:text-red-300',
                  mobile && 'text-left'
                )}
              >
                <span className="mr-2">{item.icon}</span>
                {item.title}
                {item.urgent && (
                  <Badge variant="destructive" className="ml-2 text-xs">
                    URGENT
                  </Badge>
                )}
              </Button>
            </Link>
            
            {/* Desktop Dropdown */}
            {!mobile && item.subItems && (
              <div className="absolute top-full left-0 mt-1 w-48 bg-white dark:bg-gray-800 border rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  {item.subItems.map((subItem, subIndex) => (
                    <Link
                      key={subIndex}
                      href={subItem.href}
                      className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      {subItem.title}
                    </Link>
                  ))}
                </div>
              </div>
            )}
            
            {/* Mobile Sub-items */}
            {mobile && item.subItems && (
              <div className="ml-6 mt-2 space-y-1">
                {item.subItems.map((subItem, subIndex) => (
                  <Link
                    key={subIndex}
                    href={subItem.href}
                    onClick={() => setIsOpen(false)}
                  >
                    <Button
                      variant="ghost"
                      size="sm"
                      className="w-full justify-start text-sm"
                    >
                      {subItem.title}
                    </Button>
                  </Link>
                ))}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:block bg-white dark:bg-gray-900 border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center text-white font-bold">
                  T
                </div>
                <span className="font-semibold text-xl">TUP-Cuenca Safety</span>
              </Link>
            </div>
            
            <div className="flex-1 flex justify-center">
              <NavItems />
            </div>
            
            <div className="flex items-center space-x-2">
              <Badge variant="outline" className="text-xs">
                Offline Ready
              </Badge>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="md:hidden bg-white dark:bg-gray-900 border-b">
        <div className="flex items-center justify-between h-16 px-4">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center text-white font-bold">
              T
            </div>
            <span className="font-semibold">TUP-Cuenca</span>
          </Link>
          
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm">
                <span className="text-xl">☰</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex flex-col space-y-6 mt-6">
                <div className="text-center">
                  <h2 className="text-2xl font-bold">TUP-Cuenca</h2>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Disaster Preparedness
                  </p>
                  <Badge variant="outline" className="mt-2">
                    Offline Ready
                  </Badge>
                </div>
                <NavItems mobile={true} />
                
                <div className="border-t pt-6">
                  <p className="text-xs text-center text-gray-500">
                    Technological University of the Philippines
                    <br />
                    Cuenca Extension Program
                  </p>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>

      {/* Mobile Bottom Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 border-t z-40">
        <div className="grid grid-cols-4 gap-1 p-2">
          {navigationItems.slice(0, 4).map((item, index) => {
            const isActive = pathname === item.href || pathname.startsWith(item.href + '/')
            
            return (
              <Link key={index} href={item.href}>
                <Button
                  variant={isActive ? 'default' : 'ghost'}
                  size="sm"
                  className="w-full flex-col h-auto py-2"
                >
                  <span className="text-lg mb-1">{item.icon}</span>
                  <span className="text-xs">{item.title}</span>
                </Button>
              </Link>
            )
          })}
        </div>
      </div>
    </>
  )
}