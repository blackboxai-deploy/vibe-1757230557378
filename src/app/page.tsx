'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import Link from 'next/link'

const quickAccessItems = [
  {
    title: 'Emergency Contacts',
    description: 'Quick access to emergency numbers',
    href: '/emergency/contacts',
    urgent: true,
    icon: '📞'
  },
  {
    title: 'Evacuation Routes',
    description: 'TUP-Cuenca campus evacuation paths',
    href: '/emergency/routes',
    urgent: true,
    icon: '🚪'
  },
  {
    title: 'First Aid Guide',
    description: 'Step-by-step emergency medical procedures',
    href: '/emergency/first-aid',
    urgent: true,
    icon: '🏥'
  },
  {
    title: 'Emergency Kit Checklist',
    description: 'Essential supplies for disaster preparedness',
    href: '/preparedness/kit',
    urgent: false,
    icon: '🎒'
  }
]

const disasterTypes = [
  { name: 'Typhoon', href: '/disasters/typhoon', color: 'bg-blue-500', icon: '🌪️' },
  { name: 'Earthquake', href: '/disasters/earthquake', color: 'bg-amber-500', icon: '🏔️' },
  { name: 'Flood', href: '/disasters/flood', color: 'bg-cyan-500', icon: '🌊' },
  { name: 'Fire', href: '/disasters/fire', color: 'bg-red-500', icon: '🔥' },
  { name: 'Volcanic Eruption', href: '/disasters/volcano', color: 'bg-orange-500', icon: '🌋' }
]

export default function HomePage() {
  const [offlineStatus, setOfflineStatus] = useState(false)
  const [learningProgress, setLearningProgress] = useState(0)

  useEffect(() => {
    const updateOfflineStatus = () => {
      setOfflineStatus(!navigator.onLine)
    }

    // Check initial status
    updateOfflineStatus()

    // Listen for online/offline events
    window.addEventListener('online', updateOfflineStatus)
    window.addEventListener('offline', updateOfflineStatus)

    // Load learning progress from localStorage
    const savedProgress = localStorage.getItem('learningProgress')
    if (savedProgress) {
      setLearningProgress(parseInt(savedProgress))
    }

    return () => {
      window.removeEventListener('online', updateOfflineStatus)
      window.removeEventListener('offline', updateOfflineStatus)
    }
  }, [])

  return (
    <div className="container mx-auto px-4 py-6">
      {/* Header Section */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              TUP-Cuenca Disaster Preparedness
            </h1>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              Stay prepared, stay safe. Your offline guide to disaster readiness.
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <Badge variant={offlineStatus ? 'destructive' : 'default'}>
              {offlineStatus ? '🔴 Offline Mode' : '🟢 Online'}
            </Badge>
          </div>
        </div>

        {/* Quick Access Emergency Actions */}
        <Card className="border-red-200 bg-red-50 dark:bg-red-900/10 mb-6">
          <CardHeader>
            <CardTitle className="text-red-700 dark:text-red-300 flex items-center">
              🚨 Emergency Quick Access
            </CardTitle>
            <CardDescription>
              Critical information and contacts for immediate emergency response
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {quickAccessItems.map((item, index) => (
                <Link key={index} href={item.href}>
                  <Button
                    variant={item.urgent ? 'destructive' : 'outline'}
                    className="w-full h-auto p-4 flex-col space-y-2"
                  >
                    <span className="text-2xl">{item.icon}</span>
                    <span className="font-semibold">{item.title}</span>
                    <span className="text-xs opacity-75 text-center">
                      {item.description}
                    </span>
                  </Button>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Learning Progress */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center">
            📊 Learning Progress
          </CardTitle>
          <CardDescription>
            Track your disaster preparedness knowledge
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>Overall Completion</span>
                <span>{learningProgress}%</span>
              </div>
              <Progress value={learningProgress} className="w-full" />
            </div>
            <div className="flex space-x-4">
              <Link href="/learning" className="flex-1">
                <Button variant="outline" className="w-full">
                  Continue Learning
                </Button>
              </Link>
              <Link href="/learning/assessment" className="flex-1">
                <Button className="w-full">
                  Take Assessment
                </Button>
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Disaster Types */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>🌟 Disaster Preparedness Guides</CardTitle>
          <CardDescription>
            Learn about specific disasters common in the Philippines
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {disasterTypes.map((disaster, index) => (
              <Link key={index} href={disaster.href}>
                <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl mb-3">{disaster.icon}</div>
                    <h3 className="font-semibold text-lg mb-2">{disaster.name}</h3>
                    <div className={`h-2 rounded-full ${disaster.color} mb-3`}></div>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Complete guide and safety procedures
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Additional Features */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              📋 Emergency Preparedness
            </CardTitle>
            <CardDescription>
              Tools and checklists for disaster readiness
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <Link href="/preparedness/plan">
                <Button variant="outline" className="w-full justify-start">
                  📝 Create Personal Emergency Plan
                </Button>
              </Link>
              <Link href="/preparedness/kit">
                <Button variant="outline" className="w-full justify-start">
                  🎒 Emergency Kit Checklist
                </Button>
              </Link>
              <Link href="/preparedness/family">
                <Button variant="outline" className="w-full justify-start">
                  👨‍👩‍👧‍👦 Family Communication Plan
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              📚 Educational Resources
            </CardTitle>
            <CardDescription>
              Articles, tips, and real-world case studies
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <Link href="/resources/articles">
                <Button variant="outline" className="w-full justify-start">
                  📰 Disaster Preparedness Articles
                </Button>
              </Link>
              <Link href="/resources/case-studies">
                <Button variant="outline" className="w-full justify-start">
                  📖 Case Studies & Real Stories
                </Button>
              </Link>
              <Link href="/resources/tips">
                <Button variant="outline" className="w-full justify-start">
                  💡 Daily Preparedness Tips
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}