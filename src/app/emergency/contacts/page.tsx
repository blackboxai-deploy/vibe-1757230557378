'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

const emergencyContacts = [
  {
    category: 'National Emergency Services',
    contacts: [
      { name: 'Philippine National Police', number: '911', description: 'General emergency services' },
      { name: 'Bureau of Fire Protection', number: '116', description: 'Fire emergency' },
      { name: 'Philippine Red Cross', number: '143', description: 'Disaster response and medical assistance' },
      { name: 'NDRRMC Hotline', number: '(02) 8911-1406', description: 'National Disaster Risk Reduction' }
    ]
  },
  {
    category: 'TUP-Cuenca Extension Program',
    contacts: [
      { name: 'TUP-Cuenca Main Office', number: '(043) 778-1742', description: 'Main campus administration' },
      { name: 'Security Office', number: 'Local 101', description: 'Campus security and safety' },
      { name: 'Medical Clinic', number: 'Local 102', description: 'Campus medical services' },
      { name: 'Student Affairs', number: 'Local 103', description: 'Student support services' }
    ]
  },
  {
    category: 'Local Government - Cuenca',
    contacts: [
      { name: 'Cuenca Municipal Hall', number: '(043) 756-8234', description: 'Local government services' },
      { name: 'Cuenca Police Station', number: '(043) 756-8123', description: 'Local police services' },
      { name: 'Cuenca Fire Station', number: '(043) 756-8456', description: 'Local fire department' },
      { name: 'Rural Health Unit', number: '(043) 756-8789', description: 'Local health services' }
    ]
  },
  {
    category: 'Medical Facilities',
    contacts: [
      { name: 'Batangas Medical Center', number: '(043) 723-2424', description: 'Major hospital - Batangas City' },
      { name: 'St. Patrick Hospital', number: '(043) 756-1234', description: 'Local hospital' },
      { name: 'Poison Control Center', number: '(02) 8524-1078', description: 'Poisoning emergencies' },
      { name: 'DOH Emergency Hotline', number: '(02) 8651-7800', description: 'Department of Health' }
    ]
  },
  {
    category: 'Utilities & Services',
    contacts: [
      { name: 'MERALCO Emergency', number: '16211', description: 'Power outages and electrical emergencies' },
      { name: 'Maynilad Water Services', number: '1627', description: 'Water service emergencies' },
      { name: 'PLDT Repair Service', number: '172', description: 'Telephone service issues' },
      { name: 'Globe Emergency Line', number: '211', description: 'Mobile network issues' }
    ]
  }
]

export default function EmergencyContactsPage() {
  const handleCall = (number: string) => {
    if (typeof window !== 'undefined') {
      window.open(`tel:${number}`, '_self')
    }
  }

  const handleSMS = (number: string) => {
    if (typeof window !== 'undefined') {
      window.open(`sms:${number}`, '_self')
    }
  }

  return (
    <div className="container mx-auto px-4 py-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          📞 Emergency Contacts
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          Critical phone numbers for emergency situations. Tap to call directly.
        </p>
      </div>

      {/* Emergency Instructions */}
      <Card className="bg-red-50 dark:bg-red-900/20 border-red-200 mb-6">
        <CardHeader>
          <CardTitle className="text-red-700 dark:text-red-300 flex items-center">
            🚨 EMERGENCY CALLING INSTRUCTIONS
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <p className="font-semibold">For Life-Threatening Emergencies:</p>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border-l-4 border-red-500">
              <p className="text-lg font-bold text-red-600">DIAL 911 FIRST</p>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Stay calm • Speak clearly • Give your exact location • Follow dispatcher instructions
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Contact Categories */}
      <div className="space-y-6">
        {emergencyContacts.map((category, categoryIndex) => (
          <Card key={categoryIndex}>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                {category.category}
                <Badge variant="outline">
                  {category.contacts.length} contacts
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {category.contacts.map((contact, contactIndex) => (
                  <div 
                    key={contactIndex}
                    className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                  >
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg">{contact.name}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">
                        {contact.description}
                      </p>
                      <p className="font-mono text-lg font-bold text-blue-600 dark:text-blue-400">
                        {contact.number}
                      </p>
                    </div>
                    <div className="flex space-x-2 ml-4">
                      <Button 
                        onClick={() => handleCall(contact.number)}
                        className="bg-green-600 hover:bg-green-700"
                      >
                        📞 Call
                      </Button>
                      <Button 
                        variant="outline"
                        onClick={() => handleSMS(contact.number)}
                      >
                        💬 SMS
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Important Notes */}
      <Card className="mt-6 bg-amber-50 dark:bg-amber-900/20 border-amber-200">
        <CardHeader>
          <CardTitle className="text-amber-700 dark:text-amber-300 flex items-center">
            ⚠️ Important Notes
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-2 text-sm">
            <li>Keep this list accessible even when offline - bookmark this page</li>
            <li>Program emergency numbers into your phone contacts</li>
            <li>Know your exact location (address, landmarks) when calling for help</li>
            <li>For campus emergencies, contact TUP-Cuenca Security first, then external services if needed</li>
            <li>Some services may charge for calls - emergency calls are typically free</li>
            <li>Update your personal emergency contacts regularly</li>
            <li>Share this contact list with family and roommates</li>
          </ul>
        </CardContent>
      </Card>

      {/* Personal Emergency Contacts */}
      <Card className="mt-6">
        <CardHeader>
          <CardTitle className="flex items-center">
            👨‍👩‍👧‍👦 Personal Emergency Contacts
          </CardTitle>
          <CardDescription>
            Add your personal emergency contacts here
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Create your personal emergency contact list
            </p>
            <Button>
              + Add Personal Contacts
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}