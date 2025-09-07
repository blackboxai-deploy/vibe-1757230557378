'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import Link from 'next/link'

const disasters = [
  {
    name: 'Typhoon',
    icon: '🌪️',
    riskLevel: 'High',
    color: 'bg-blue-500',
    description: 'Strong tropical cyclones affecting the Philippines yearly',
    preparedness: 75,
    href: '/disasters/typhoon',
    facts: [
      'Philippines experiences 20+ typhoons annually',
      'Peak season: June to November',
      'Can bring 200+ km/h winds and heavy flooding'
    ]
  },
  {
    name: 'Earthquake',
    icon: '🏔️',
    riskLevel: 'Very High',
    color: 'bg-amber-500',
    description: 'Seismic activity from multiple fault lines',
    preparedness: 60,
    href: '/disasters/earthquake',
    facts: [
      'Philippines sits on Pacific Ring of Fire',
      'Major fault lines: West Valley, East Valley, Marikina',
      'Average of 5 earthquakes magnitude 4+ daily'
    ]
  },
  {
    name: 'Flood',
    icon: '🌊',
    riskLevel: 'High',
    color: 'bg-cyan-500',
    description: 'Urban flooding and river overflow events',
    preparedness: 70,
    href: '/disasters/flood',
    facts: [
      'Monsoon rains cause seasonal flooding',
      'Flash floods can occur within minutes',
      'Low-lying areas most vulnerable'
    ]
  },
  {
    name: 'Fire',
    icon: '🔥',
    riskLevel: 'Medium',
    color: 'bg-red-500',
    description: 'Building fires and electrical hazards',
    preparedness: 80,
    href: '/disasters/fire',
    facts: [
      'Most fires start from electrical problems',
      'Smoke is more dangerous than flames',
      'You have 2-3 minutes to escape safely'
    ]
  },
  {
    name: 'Volcanic Eruption',
    icon: '🌋',
    riskLevel: 'Medium',
    color: 'bg-orange-500',
    description: 'Active volcanoes and ash fall hazards',
    preparedness: 55,
    href: '/disasters/volcano',
    facts: [
      'Philippines has 53 active volcanoes',
      'Nearest active: Taal Volcano (Batangas)',
      'Ash fall can travel hundreds of kilometers'
    ]
  }
]

const riskLevelColors: { [key: string]: string } = {
  'Very High': 'text-red-700 bg-red-100 border-red-200',
  'High': 'text-orange-700 bg-orange-100 border-orange-200',
  'Medium': 'text-yellow-700 bg-yellow-100 border-yellow-200',
  'Low': 'text-green-700 bg-green-100 border-green-200'
}

export default function DisastersPage() {
  return (
    <div className="container mx-auto px-4 py-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          ⚠️ Disaster Preparedness Guide
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          Learn about disasters common in the Philippines and how to prepare for them.
        </p>
      </div>

      {/* Philippines Disaster Context */}
      <Card className="mb-6 bg-blue-50 dark:bg-blue-900/20 border-blue-200">
        <CardHeader>
          <CardTitle className="text-blue-700 dark:text-blue-300 flex items-center">
            🇵🇭 Philippines Disaster Profile
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">20+</div>
              <p className="text-sm">Typhoons annually</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">53</div>
              <p className="text-sm">Active volcanoes</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">5+</div>
              <p className="text-sm">Daily earthquakes</p>
            </div>
          </div>
          <p className="text-center text-sm text-blue-600 dark:text-blue-300 mt-4">
            The Philippines is one of the most disaster-prone countries in the world due to its geographic location.
          </p>
        </CardContent>
      </Card>

      {/* Disaster Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {disasters.map((disaster, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <span className="text-4xl">{disaster.icon}</span>
                  <div>
                    <CardTitle className="text-xl">{disaster.name}</CardTitle>
                    <CardDescription>{disaster.description}</CardDescription>
                  </div>
                </div>
                <Badge 
                  className={riskLevelColors[disaster.riskLevel]}
                  variant="outline"
                >
                  {disaster.riskLevel} Risk
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Risk Facts */}
              <div>
                <h4 className="font-semibold mb-2">Key Facts:</h4>
                <ul className="text-sm space-y-1">
                  {disaster.facts.map((fact, factIndex) => (
                    <li key={factIndex} className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      {fact}
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Preparedness Level */}
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Preparedness Resources</span>
                  <span>{disaster.preparedness}% Complete</span>
                </div>
                <Progress value={disaster.preparedness} className="mb-3" />
              </div>
              
              {/* Action Buttons */}
              <div className="flex space-x-2">
                <Link href={disaster.href} className="flex-1">
                  <Button className="w-full">
                    Learn More
                  </Button>
                </Link>
                <Button variant="outline" size="sm">
                  Quick Tips
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Seasonal Alert */}
      <Card className="mb-6 bg-amber-50 dark:bg-amber-900/20 border-amber-200">
        <CardHeader>
          <CardTitle className="text-amber-700 dark:text-amber-300 flex items-center">
            📅 Seasonal Disaster Calendar
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <h4 className="font-semibold">Dec - Feb</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">Cool dry season, lowest typhoon risk</p>
            </div>
            <div>
              <h4 className="font-semibold">Mar - May</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">Hot dry season, fire risk increases</p>
            </div>
            <div>
              <h4 className="font-semibold">Jun - Sep</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">Southwest monsoon, flooding common</p>
            </div>
            <div>
              <h4 className="font-semibold">Oct - Nov</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">Peak typhoon season, highest risk</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Action Guide */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            ⚡ Universal Emergency Actions
          </CardTitle>
          <CardDescription>
            Basic steps that apply to most disaster situations
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl mb-2">1️⃣</div>
              <h4 className="font-semibold mb-2">STAY INFORMED</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Monitor official weather and disaster alerts
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">2️⃣</div>
              <h4 className="font-semibold mb-2">HAVE A PLAN</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Know evacuation routes and meeting points
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">3️⃣</div>
              <h4 className="font-semibold mb-2">BUILD A KIT</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Emergency supplies for 72 hours minimum
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}