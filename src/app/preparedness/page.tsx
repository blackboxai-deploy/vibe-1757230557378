'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import Link from 'next/link'

const preparednessAreas = [
  {
    title: 'Emergency Kit',
    description: 'Essential supplies for 72 hours of self-sufficiency',
    icon: '🎒',
    completion: 0,
    href: '/preparedness/kit',
    color: 'bg-blue-500',
    items: ['Water & Food', 'First Aid', 'Tools & Supplies', 'Documents', 'Communication']
  },
  {
    title: 'Family Emergency Plan',
    description: 'Communication and meeting plans for your household',
    icon: '👨‍👩‍👧‍👦',
    completion: 0,
    href: '/preparedness/family',
    color: 'bg-green-500',
    items: ['Contact Info', 'Meeting Points', 'Evacuation Routes', 'Roles & Responsibilities']
  },
  {
    title: 'Personal Emergency Plan',
    description: 'Individual preparedness plan for students',
    icon: '📝',
    completion: 0,
    href: '/preparedness/plan',
    color: 'bg-purple-500',
    items: ['Student Info', 'Campus Knowledge', 'Personal Needs', 'Emergency Contacts']
  },
  {
    title: 'Home & Workplace Safety',
    description: 'Make your spaces safer and more resilient',
    icon: '🏠',
    completion: 0,
    href: '/preparedness/safety',
    color: 'bg-orange-500',
    items: ['Hazard Assessment', 'Safety Improvements', 'Emergency Supplies', 'Escape Routes']
  }
]

const quickActions = [
  {
    title: 'Create Go-Bag',
    description: 'Pack essentials for quick evacuation',
    icon: '🎒',
    urgent: true
  },
  {
    title: 'Update Contacts',
    description: 'Ensure emergency contacts are current',
    icon: '📞',
    urgent: false
  },
  {
    title: 'Practice Evacuation',
    description: 'Time your escape routes',
    icon: '🚪',
    urgent: false
  },
  {
    title: 'Check Supplies',
    description: 'Verify expiration dates and quantities',
    icon: '📦',
    urgent: false
  }
]

export default function PreparednessPage() {
  const overallCompletion = Math.round(
    preparednessAreas.reduce((sum, area) => sum + area.completion, 0) / preparednessAreas.length
  )

  return (
    <div className="container mx-auto px-4 py-6">
      {/* Header */}
      <div className="flex items-center mb-6">
        <span className="text-6xl mr-4">📋</span>
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Emergency Preparedness
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Build your disaster readiness step by step
          </p>
        </div>
      </div>

      {/* Overall Progress */}
      <Card className="mb-6 bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-900/20 dark:to-green-900/20">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>📊 Your Preparedness Level</span>
            <Badge variant="outline" className="text-lg px-3 py-1">
              {overallCompletion}%
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Progress value={overallCompletion} className="mb-4" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {preparednessAreas.map((area, index) => (
              <div key={index}>
                <div className="text-2xl mb-1">{area.icon}</div>
                <div className="text-sm font-medium">{area.completion}%</div>
                <div className="text-xs text-gray-600 dark:text-gray-300">{area.title}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center">
            ⚡ Quick Actions
          </CardTitle>
          <CardDescription>
            Simple tasks you can do right now to improve your preparedness
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickActions.map((action, index) => (
              <div key={index} className="text-center p-4 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors cursor-pointer">
                <div className="text-3xl mb-2">{action.icon}</div>
                <h4 className="font-semibold mb-1">{action.title}</h4>
                <p className="text-xs text-gray-600 dark:text-gray-300 mb-3">
                  {action.description}
                </p>
                {action.urgent && (
                  <Badge variant="destructive" className="text-xs">
                    Priority
                  </Badge>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Preparedness Areas */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {preparednessAreas.map((area, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <span className="text-4xl">{area.icon}</span>
                  <div>
                    <CardTitle className="text-xl">{area.title}</CardTitle>
                    <CardDescription>{area.description}</CardDescription>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-blue-600">{area.completion}%</div>
                  <div className="text-xs text-gray-500">Complete</div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <Progress value={area.completion} className="mb-3" />
              
              <div>
                <h4 className="font-semibold mb-2 text-sm">Key Components:</h4>
                <div className="flex flex-wrap gap-1">
                  {area.items.map((item, itemIndex) => (
                    <Badge key={itemIndex} variant="outline" className="text-xs">
                      {item}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div className="flex space-x-2">
                <Link href={area.href} className="flex-1">
                  <Button className="w-full">
                    {area.completion === 0 ? 'Get Started' : 'Continue'}
                  </Button>
                </Link>
                <Button variant="outline" size="sm">
                  Guide
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Preparedness Tips */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center">
            💡 Preparedness Tips for Students
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3 flex items-center">
                🎓 On Campus
              </h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Know the locations of emergency exits and evacuation routes
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Keep important phone numbers in your phone and written down
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Maintain emergency supplies in your locker or bag
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Participate in emergency drills seriously
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3 flex items-center">
                🏠 At Home/Dormitory
              </h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  Create a family communication plan with roommates
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  Keep a well-stocked emergency kit accessible
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  Know how to turn off utilities (gas, water, electricity)
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  Stay informed about local emergency plans and warnings
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Resources */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            📚 Additional Resources
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/resources/articles">
              <Button variant="outline" className="w-full h-auto p-4 flex-col space-y-2">
                <span className="text-2xl">📰</span>
                <span>Preparedness Articles</span>
              </Button>
            </Link>
            <Link href="/learning">
              <Button variant="outline" className="w-full h-auto p-4 flex-col space-y-2">
                <span className="text-2xl">🎓</span>
                <span>Interactive Learning</span>
              </Button>
            </Link>
            <Link href="/emergency/contacts">
              <Button variant="outline" className="w-full h-auto p-4 flex-col space-y-2">
                <span className="text-2xl">📞</span>
                <span>Emergency Contacts</span>
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}