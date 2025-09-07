'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Checkbox } from '@/components/ui/checkbox'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const kitCategories = {
  water: {
    name: '💧 Water & Hydration',
    items: [
      { id: 'water', name: '1 gallon water per person per day', description: 'For drinking, cooking, and sanitation', quantity: '3 days supply', essential: true, category: 'water' },
      { id: 'purification', name: 'Water purification tablets', description: 'Backup water treatment', quantity: '1 bottle', essential: true, category: 'water' },
      { id: 'bottles', name: 'Water bottles/containers', description: 'For storing and carrying water', quantity: '2-3 bottles', essential: false, category: 'water' }
    ]
  },
  food: {
    name: '🥫 Food & Nutrition',
    items: [
      { id: 'canned-food', name: 'Canned goods', description: 'Ready-to-eat meals, fruits, vegetables', quantity: '3 days supply', essential: true, category: 'food' },
      { id: 'dry-goods', name: 'Dry foods', description: 'Rice, crackers, nuts, energy bars', quantity: '3 days supply', essential: true, category: 'food' },
      { id: 'baby-food', name: 'Baby formula/food', description: 'If you have infants', quantity: '3 days supply', essential: false, category: 'food' },
      { id: 'can-opener', name: 'Manual can opener', description: 'Essential for canned foods', quantity: '1', essential: true, category: 'food' }
    ]
  },
  medical: {
    name: '🏥 First Aid & Medical',
    items: [
      { id: 'first-aid', name: 'First aid kit', description: 'Bandages, antiseptic, pain relievers', quantity: '1 complete kit', essential: true, category: 'medical' },
      { id: 'medications', name: 'Prescription medications', description: '7-day supply minimum', quantity: '1 week+', essential: true, category: 'medical' },
      { id: 'medical-supplies', name: 'Medical supplies', description: 'Thermometer, medical tape, scissors', quantity: 'Basic set', essential: false, category: 'medical' },
      { id: 'hygiene', name: 'Hygiene items', description: 'Soap, toothbrush, feminine supplies', quantity: '1 week supply', essential: true, category: 'medical' }
    ]
  },
  safety: {
    name: '🔦 Safety & Tools',
    items: [
      { id: 'flashlight', name: 'Flashlight', description: 'LED flashlight with extra batteries', quantity: '1 per person', essential: true, category: 'safety' },
      { id: 'radio', name: 'Emergency radio', description: 'Battery or crank-powered', quantity: '1', essential: true, category: 'safety' },
      { id: 'whistle', name: 'Emergency whistle', description: 'For signaling help', quantity: '1 per person', essential: true, category: 'safety' },
      { id: 'tools', name: 'Multi-tool or knife', description: 'For various emergency tasks', quantity: '1', essential: false, category: 'safety' },
      { id: 'duct-tape', name: 'Duct tape', description: 'For repairs and securing items', quantity: '1 roll', essential: false, category: 'safety' }
    ]
  },
  documents: {
    name: '📄 Important Documents',
    items: [
      { id: 'identification', name: 'Identification documents', description: 'ID, passport, driver license (copies)', quantity: 'Complete set', essential: true, category: 'documents' },
      { id: 'financial', name: 'Financial documents', description: 'Bank info, insurance papers', quantity: 'Copies', essential: true, category: 'documents' },
      { id: 'medical-info', name: 'Medical information', description: 'Prescriptions, medical history', quantity: 'Complete list', essential: true, category: 'documents' },
      { id: 'contacts', name: 'Emergency contact list', description: 'Family, friends, doctors, work', quantity: '1 list', essential: true, category: 'documents' },
      { id: 'cash', name: 'Cash', description: 'Small bills and coins', quantity: 'P2000-5000', essential: true, category: 'documents' }
    ]
  },
  comfort: {
    name: '👕 Clothing & Comfort',
    items: [
      { id: 'clothing', name: 'Change of clothes', description: 'Weather-appropriate clothing', quantity: '3 days worth', essential: true, category: 'comfort' },
      { id: 'blankets', name: 'Blankets/sleeping bags', description: 'For warmth and comfort', quantity: '1 per person', essential: false, category: 'comfort' },
      { id: 'rain-gear', name: 'Rain gear', description: 'Poncho or rain jacket', quantity: '1 per person', essential: false, category: 'comfort' },
      { id: 'shoes', name: 'Sturdy shoes', description: 'Closed-toe, comfortable walking shoes', quantity: '1 pair per person', essential: true, category: 'comfort' }
    ]
  }
}

export default function EmergencyKitPage() {
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set())
  
  const handleItemCheck = (itemId: string, checked: boolean) => {
    const newCheckedItems = new Set(checkedItems)
    if (checked) {
      newCheckedItems.add(itemId)
    } else {
      newCheckedItems.delete(itemId)
    }
    setCheckedItems(newCheckedItems)
  }

  const allItems = Object.values(kitCategories).reduce((acc: any[], category) => [...acc, ...category.items], [])
  const essentialItems = allItems.filter(item => item.essential)
  const checkedEssential = essentialItems.filter(item => checkedItems.has(item.id)).length
  const essentialCompletion = Math.round((checkedEssential / essentialItems.length) * 100)
  
  const totalCompletion = Math.round((checkedItems.size / allItems.length) * 100)

  return (
    <div className="container mx-auto px-4 py-6">
      {/* Header */}
      <div className="flex items-center mb-6">
        <span className="text-6xl mr-4">🎒</span>
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Emergency Kit Checklist
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Build your 72-hour emergency survival kit
          </p>
        </div>
      </div>

      {/* Progress Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <Card className="bg-red-50 dark:bg-red-900/20 border-red-200">
          <CardHeader>
            <CardTitle className="text-red-700 dark:text-red-300 flex items-center">
              🚨 Essential Items
            </CardTitle>
            <CardDescription>
              Critical items for survival (must-have)
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between mb-3">
              <span className="text-2xl font-bold">{checkedEssential}/{essentialItems.length}</span>
              <Badge variant={essentialCompletion >= 100 ? 'default' : 'destructive'}>
                {essentialCompletion}%
              </Badge>
            </div>
            <Progress value={essentialCompletion} className="mb-2" />
            <p className="text-sm text-gray-600 dark:text-gray-300">
              These items are critical for basic survival and safety
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              📊 Complete Kit Progress
            </CardTitle>
            <CardDescription>
              Overall emergency kit completion
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between mb-3">
              <span className="text-2xl font-bold">{checkedItems.size}/{allItems.length}</span>
              <Badge variant="outline">
                {totalCompletion}%
              </Badge>
            </div>
            <Progress value={totalCompletion} className="mb-2" />
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Includes both essential and recommended items
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Kit Guidelines */}
      <Card className="mb-6 bg-blue-50 dark:bg-blue-900/20 border-blue-200">
        <CardHeader>
          <CardTitle className="text-blue-700 dark:text-blue-300 flex items-center">
            📋 Emergency Kit Guidelines
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl mb-2">72</div>
              <p className="text-sm font-semibold">Hours of supplies</p>
              <p className="text-xs text-gray-600 dark:text-gray-300">Minimum self-sufficiency period</p>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">1</div>
              <p className="text-sm font-semibold">Gallon water per day</p>
              <p className="text-xs text-gray-600 dark:text-gray-300">Per person for drinking & sanitation</p>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">6</div>
              <p className="text-sm font-semibold">Month rotation</p>
              <p className="text-xs text-gray-600 dark:text-gray-300">Check and refresh supplies</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Kit Categories */}
      <Tabs defaultValue="water" className="w-full">
        <TabsList className="grid w-full grid-cols-3 md:grid-cols-6">
          <TabsTrigger value="water" className="text-xs">💧 Water</TabsTrigger>
          <TabsTrigger value="food" className="text-xs">🥫 Food</TabsTrigger>
          <TabsTrigger value="medical" className="text-xs">🏥 Medical</TabsTrigger>
          <TabsTrigger value="safety" className="text-xs">🔦 Safety</TabsTrigger>
          <TabsTrigger value="documents" className="text-xs">📄 Documents</TabsTrigger>
          <TabsTrigger value="comfort" className="text-xs">👕 Comfort</TabsTrigger>
        </TabsList>

        {Object.entries(kitCategories).map(([key, category]) => (
          <TabsContent key={key} value={key} className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  {category.name}
                  <Badge variant="outline">
                    {category.items.filter(item => checkedItems.has(item.id)).length}/{category.items.length}
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {category.items.map((item) => (
                    <div key={item.id} className="flex items-start space-x-3 p-4 border rounded-lg">
                      <Checkbox
                        id={item.id}
                        checked={checkedItems.has(item.id)}
                        onCheckedChange={(checked) => handleItemCheck(item.id, checked as boolean)}
                        className="mt-1"
                      />
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <label 
                            htmlFor={item.id}
                            className="font-semibold cursor-pointer"
                          >
                            {item.name}
                          </label>
                          {item.essential && (
                            <Badge variant="destructive" className="text-xs">
                              Essential
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">
                          {item.description}
                        </p>
                        <p className="text-xs font-medium text-blue-600 dark:text-blue-400">
                          Quantity: {item.quantity}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>

      {/* Storage Tips */}
      <Card className="mt-6">
        <CardHeader>
          <CardTitle className="flex items-center">
            📦 Storage & Maintenance Tips
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3">Storage Guidelines</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  Store in cool, dry place away from direct sunlight
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  Use waterproof containers for important documents
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  Keep kit easily accessible and family members know location
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  Consider portable kit for car and workplace
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Maintenance Schedule</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Check expiration dates every 6 months
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Test batteries and replace as needed
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Update documents and contact information annually
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Replace water every 6 months
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <div className="mt-6 flex space-x-4">
        <Button className="flex-1">
          Save Progress
        </Button>
        <Button variant="outline">
          Print Checklist
        </Button>
        <Button variant="outline">
          Share with Family
        </Button>
      </div>
    </div>
  )
}