'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'

const emergencyActions = [
  {
    title: 'Call Emergency Services',
    description: 'Immediate emergency contact numbers',
    href: '/emergency/contacts',
    icon: '📞',
    color: 'bg-red-500',
    urgent: true
  },
  {
    title: 'Evacuation Routes',
    description: 'TUP-Cuenca campus evacuation paths and safe zones',
    href: '/emergency/routes',
    icon: '🚪',
    color: 'bg-orange-500',
    urgent: true
  },
  {
    title: 'First Aid Guide',
    description: 'Step-by-step emergency medical procedures',
    href: '/emergency/first-aid',
    icon: '🏥',
    color: 'bg-green-500',
    urgent: true
  },
  {
    title: 'Shelter Information',
    description: 'Designated shelters and safe locations',
    href: '/emergency/shelter',
    icon: '🏠',
    color: 'bg-blue-500',
    urgent: false
  }
]

const quickTips = [
  {
    situation: 'During an Earthquake',
    action: 'DROP, COVER, and HOLD ON',
    details: 'Drop to hands and knees, take cover under a desk or table, hold on and protect your head'
  },
  {
    situation: 'During a Fire',
    action: 'GET LOW and GO',
    details: 'Stay low to avoid smoke, feel doors before opening, use stairs never elevators'
  },
  {
    situation: 'During a Flood',
    action: 'MOVE TO HIGHER GROUND',
    details: 'Never walk or drive through flood water, even 6 inches can knock you down'
  },
  {
    situation: 'During a Typhoon',
    action: 'STAY INDOORS',
    details: 'Stay away from windows, go to interior rooms, avoid electrical equipment'
  }
]

export default function EmergencyPage() {
  return (
    <div className="container mx-auto px-4 py-6">
      {/* Emergency Header */}
      <div className="bg-red-50 dark:bg-red-900/20 border-2 border-red-200 rounded-lg p-6 mb-6">
        <div className="flex items-center mb-4">
          <span className="text-4xl mr-4">🚨</span>
          <div>
            <h1 className="text-3xl font-bold text-red-700 dark:text-red-300">
              EMERGENCY RESPONSE CENTER
            </h1>
            <p className="text-red-600 dark:text-red-400 text-lg">
              Quick access to critical emergency information
            </p>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border-l-4 border-red-500">
          <p className="font-semibold text-gray-800 dark:text-gray-200">
            🔴 EMERGENCY HOTLINE: <span className="text-red-600">911</span>
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
            For immediate life-threatening emergencies, call 911 first, then use this app for additional guidance.
          </p>
        </div>
      </div>

      {/* Quick Emergency Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {emergencyActions.map((action, index) => (
          <Link key={index} href={action.href}>
            <Card className="hover:shadow-lg transition-all cursor-pointer h-full">
              <CardContent className="p-6 text-center">
                <div className="text-5xl mb-4">{action.icon}</div>
                <h3 className="font-bold text-lg mb-2">{action.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                  {action.description}
                </p>
                {action.urgent && (
                  <Badge variant="destructive" className="mb-2">
                    URGENT
                  </Badge>
                )}
                <div className={`h-2 rounded-full ${action.color} mt-4`}></div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      {/* Quick Action Tips */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center">
            ⚡ Quick Action Guide
          </CardTitle>
          <CardDescription>
            Immediate actions to take during common emergencies
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {quickTips.map((tip, index) => (
              <div key={index} className="border rounded-lg p-4 bg-gray-50 dark:bg-gray-800">
                <h4 className="font-semibold text-lg mb-2 text-gray-800 dark:text-gray-200">
                  {tip.situation}
                </h4>
                <p className="text-red-600 dark:text-red-400 font-bold mb-2">
                  {tip.action}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {tip.details}
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Emergency Preparedness Status */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            📊 Your Emergency Readiness
          </CardTitle>
          <CardDescription>
            Check your current preparedness level
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div>
                <h4 className="font-semibold">Emergency Kit</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Essential supplies for 72 hours
                </p>
              </div>
              <Link href="/preparedness/kit">
                <Button variant="outline">
                  Check Kit
                </Button>
              </Link>
            </div>
            
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div>
                <h4 className="font-semibold">Family Emergency Plan</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Communication and meeting plans
                </p>
              </div>
              <Link href="/preparedness/family">
                <Button variant="outline">
                  Create Plan
                </Button>
              </Link>
            </div>
            
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div>
                <h4 className="font-semibold">Emergency Contacts</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Important phone numbers saved
                </p>
              </div>
              <Link href="/emergency/contacts">
                <Button variant="outline">
                  View Contacts
                </Button>
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}