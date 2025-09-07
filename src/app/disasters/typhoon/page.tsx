'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Alert, AlertDescription } from '@/components/ui/alert'

const typhoonCategories = [
  { name: 'Tropical Depression', windSpeed: '< 63 km/h', signal: 'No Signal', danger: 'Low' },
  { name: 'Tropical Storm', windSpeed: '63-88 km/h', signal: 'Signal #1', danger: 'Medium' },
  { name: 'Severe Tropical Storm', windSpeed: '89-117 km/h', signal: 'Signal #2', danger: 'High' },
  { name: 'Typhoon', windSpeed: '118-184 km/h', signal: 'Signal #3', danger: 'Very High' },
  { name: 'Super Typhoon', windSpeed: '> 185 km/h', signal: 'Signal #4-5', danger: 'Extreme' }
]

const beforePreparation = [
  'Monitor weather reports and typhoon warnings regularly',
  'Secure loose outdoor items (furniture, signs, decorations)',
  'Trim tree branches that could fall on your home or power lines',
  'Check and clean gutters and drainage systems',
  'Stock emergency supplies (water, food, flashlights, batteries)',
  'Charge all electronic devices and power banks',
  'Prepare important documents in waterproof containers',
  'Plan evacuation routes and identify safe areas in your home'
]

const duringActions = [
  'Stay indoors and away from windows and glass doors',
  'Listen to battery-powered radio for emergency updates',
  'Avoid using electrical appliances during the storm',
  'Do not go outside during the "eye" of the typhoon',
  'Stay in the strongest part of the building (interior rooms)',
  'Keep emergency supplies accessible',
  'Remain calm and keep family members together',
  'Avoid flooded areas and do not attempt to cross flowing water'
]

const afterActions = [
  'Wait for official all-clear before going outside',
  'Be cautious of damaged structures and downed power lines',
  'Check for injuries and provide first aid if trained',
  'Document damage with photos for insurance claims',
  'Report emergencies to local authorities',
  'Help neighbors if it is safe to do so',
  'Avoid drinking tap water until declared safe',
  'Clean up debris carefully, watch for nails and sharp objects'
]

export default function TyphoonPage() {
  return (
    <div className="container mx-auto px-4 py-6">
      {/* Header */}
      <div className="flex items-center mb-6">
        <span className="text-6xl mr-4">🌪️</span>
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Typhoon Preparedness
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Complete guide for typhoon safety and preparedness
          </p>
        </div>
      </div>

      {/* Alert Box */}
      <Alert className="mb-6 border-blue-200 bg-blue-50 dark:bg-blue-900/20">
        <AlertDescription>
          <strong>🇵🇭 Philippines Typhoon Season:</strong> June to November (Peak: September-October)
          <br />
          The Philippines experiences an average of 20 typhoons per year, making it essential for all residents to be prepared.
        </AlertDescription>
      </Alert>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="before">Before</TabsTrigger>
          <TabsTrigger value="during">During</TabsTrigger>
          <TabsTrigger value="after">After</TabsTrigger>
          <TabsTrigger value="signals">Warning Signals</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                🌊 What is a Typhoon?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                A typhoon is a powerful tropical cyclone that forms over warm ocean waters. In the Philippines, 
                typhoons are the most common and destructive natural disasters, bringing strong winds, heavy rainfall, 
                storm surge, and flooding.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-4 border rounded-lg">
                  <div className="text-2xl mb-2">💨</div>
                  <h4 className="font-semibold">Strong Winds</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Up to 250+ km/h in super typhoons
                  </p>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <div className="text-2xl mb-2">🌧️</div>
                  <h4 className="font-semibold">Heavy Rainfall</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Can exceed 300mm in 24 hours
                  </p>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <div className="text-2xl mb-2">🌊</div>
                  <h4 className="font-semibold">Storm Surge</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Ocean water pushed inland by winds
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>🎯 TUP-Cuenca Specific Risks</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-start">
                  <span className="text-amber-500 mr-2">⚠️</span>
                  <div>
                    <h4 className="font-semibold">Flash Flooding Risk</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Campus located in area prone to rapid water accumulation during heavy rains
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-amber-500 mr-2">⚠️</span>
                  <div>
                    <h4 className="font-semibold">Power Outages</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Strong winds can damage electrical infrastructure
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-amber-500 mr-2">⚠️</span>
                  <div>
                    <h4 className="font-semibold">Transportation Disruption</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Roads may become impassable due to flooding or debris
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Before Tab */}
        <TabsContent value="before" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                📋 Before the Typhoon Hits
              </CardTitle>
              <CardDescription>
                Preparation steps to take when a typhoon is approaching
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {beforePreparation.map((item, index) => (
                  <div key={index} className="flex items-start p-3 border rounded-lg">
                    <input type="checkbox" className="mt-1 mr-3" />
                    <div>
                      <p className="text-sm">{item}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>🎒 Emergency Kit Essentials</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Basic Supplies</h4>
                  <ul className="text-sm space-y-1">
                    <li>• 3 days of water (1 gallon per person per day)</li>
                    <li>• 3 days of non-perishable food</li>
                    <li>• Battery-powered or hand crank radio</li>
                    <li>• Flashlight and extra batteries</li>
                    <li>• First aid kit</li>
                    <li>• Whistle for signaling help</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Additional Items</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Important documents (waterproof container)</li>
                    <li>• Cash and credit cards</li>
                    <li>• Emergency contact information</li>
                    <li>• Medications</li>
                    <li>• Change of clothes and sturdy shoes</li>
                    <li>• Cell phone with chargers and backup battery</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* During Tab */}
        <TabsContent value="during" className="space-y-6">
          <Card className="bg-red-50 dark:bg-red-900/20 border-red-200">
            <CardHeader>
              <CardTitle className="text-red-700 dark:text-red-300 flex items-center">
                🚨 During the Typhoon - Critical Actions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {duringActions.map((item, index) => (
                  <div key={index} className="flex items-start p-3 bg-white dark:bg-gray-800 rounded-lg border">
                    <span className="text-red-600 mr-3 font-bold">{index + 1}.</span>
                    <p className="text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                ⚠️ Critical Safety Rules
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-red-600 mb-2">❌ DO NOT</h4>
                  <ul className="text-sm space-y-2">
                    <li>• Go outside during the storm</li>
                    <li>• Use electrical appliances</li>
                    <li>• Touch downed power lines</li>
                    <li>• Drive or walk through flood water</li>
                    <li>• Open windows or doors</li>
                    <li>• Leave your safe location during the "eye"</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-green-600 mb-2">✅ DO</h4>
                  <ul className="text-sm space-y-2">
                    <li>• Stay in interior rooms</li>
                    <li>• Keep emergency radio on</li>
                    <li>• Stay calm and help others stay calm</li>
                    <li>• Monitor for emergency updates</li>
                    <li>• Keep family members together</li>
                    <li>• Wait for official all-clear</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* After Tab */}
        <TabsContent value="after" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                🔄 After the Typhoon - Recovery Steps
              </CardTitle>
              <CardDescription>
                What to do once the typhoon has passed
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {afterActions.map((item, index) => (
                  <div key={index} className="flex items-start p-3 border rounded-lg">
                    <span className="text-blue-600 mr-3 font-bold">{index + 1}.</span>
                    <p className="text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Warning Signals Tab */}
        <TabsContent value="signals" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                🚦 PAGASA Typhoon Warning Signals
              </CardTitle>
              <CardDescription>
                Understanding the Philippine weather warning system
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {typhoonCategories.map((category, index) => {
                  const dangerColors: { [key: string]: string } = {
                    'Low': 'bg-green-100 border-green-300 text-green-800',
                    'Medium': 'bg-yellow-100 border-yellow-300 text-yellow-800',
                    'High': 'bg-orange-100 border-orange-300 text-orange-800',
                    'Very High': 'bg-red-100 border-red-300 text-red-800',
                    'Extreme': 'bg-purple-100 border-purple-300 text-purple-800'
                  }
                  
                  return (
                    <div key={index} className={`p-4 border-2 rounded-lg ${dangerColors[category.danger]}`}>
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-bold text-lg">{category.name}</h4>
                        <Badge variant="outline" className="bg-white">
                          {category.signal}
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span>Wind Speed: {category.windSpeed}</span>
                        <span className="font-semibold">{category.danger} Danger</span>
                      </div>
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>📱 Official Information Sources</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Weather Agencies</h4>
                  <ul className="text-sm space-y-1">
                    <li>• PAGASA (Philippine weather service)</li>
                    <li>• NDRRMC (National Disaster Council)</li>
                    <li>• Local Government Units</li>
                    <li>• Barangay officials</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Media Sources</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Official government social media</li>
                    <li>• Local radio stations</li>
                    <li>• Emergency broadcast system</li>
                    <li>• Weather apps and websites</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}