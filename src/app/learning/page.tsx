'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import Link from 'next/link'

const learningModules = [
  {
    id: 'basics',
    title: 'Disaster Preparedness Basics',
    description: 'Fundamental concepts every student should know',
    icon: '📚',
    difficulty: 'Beginner',
    duration: '15 min',
    progress: 0,
    color: 'bg-green-500',
    lessons: [
      'Understanding Natural Disasters',
      'Risk Assessment',
      'Basic Emergency Planning',
      'Communication Strategies'
    ]
  },
  {
    id: 'typhoon',
    title: 'Typhoon Safety Module',
    description: 'Comprehensive typhoon preparedness and response',
    icon: '🌪️',
    difficulty: 'Intermediate',
    duration: '25 min',
    progress: 0,
    color: 'bg-blue-500',
    lessons: [
      'Typhoon Formation and Tracking',
      'Warning Signals and What They Mean',
      'Preparation Steps',
      'During and After Safety Measures'
    ]
  },
  {
    id: 'earthquake',
    title: 'Earthquake Response Training',
    description: 'Life-saving earthquake safety techniques',
    icon: '🏔️',
    difficulty: 'Intermediate',
    duration: '20 min',
    progress: 0,
    color: 'bg-amber-500',
    lessons: [
      'Drop, Cover, and Hold On',
      'Safe Spaces and Danger Zones',
      'Post-Earthquake Safety',
      'School-Specific Procedures'
    ]
  },
  {
    id: 'first-aid',
    title: 'Emergency First Aid',
    description: 'Essential medical response skills',
    icon: '🏥',
    difficulty: 'Intermediate',
    duration: '30 min',
    progress: 0,
    color: 'bg-red-500',
    lessons: [
      'Basic Life Support',
      'Wound Care and Bleeding Control',
      'Choking and CPR',
      'Emergency Assessment'
    ]
  },
  {
    id: 'evacuation',
    title: 'Campus Evacuation Procedures',
    description: 'TUP-Cuenca specific evacuation protocols',
    icon: '🚪',
    difficulty: 'Beginner',
    duration: '10 min',
    progress: 0,
    color: 'bg-purple-500',
    lessons: [
      'Campus Layout and Exits',
      'Assembly Points',
      'Evacuation Signals',
      'Special Considerations'
    ]
  },
  {
    id: 'communication',
    title: 'Emergency Communication',
    description: 'Staying connected during disasters',
    icon: '📱',
    difficulty: 'Beginner',
    duration: '15 min',
    progress: 0,
    color: 'bg-indigo-500',
    lessons: [
      'Emergency Contact Plans',
      'Alternative Communication Methods',
      'Social Media Safety',
      'Official Information Sources'
    ]
  }
]

const achievements = [
  { name: 'First Steps', description: 'Completed your first learning module', icon: '🎯', earned: false },
  { name: 'Prepared Student', description: 'Completed 3 learning modules', icon: '📖', earned: false },
  { name: 'Safety Expert', description: 'Completed all learning modules', icon: '🏆', earned: false },
  { name: 'Quick Learner', description: 'Perfect score on first assessment', icon: '⚡', earned: false }
]

export default function LearningPage() {  
  const completedModules = learningModules.filter(module => module.progress >= 100).length
  const overallProgress = Math.round((learningModules.reduce((sum, module) => sum + module.progress, 0) / learningModules.length))

  return (
    <div className="container mx-auto px-4 py-6">
      {/* Header */}
      <div className="flex items-center mb-6">
        <span className="text-6xl mr-4">📚</span>
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Interactive Learning
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Master disaster preparedness through engaging interactive modules
          </p>
        </div>
      </div>

      {/* Progress Overview */}
      <Card className="mb-6 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>📊 Your Learning Journey</span>
            <div className="flex space-x-2">
              <Badge variant="outline" className="text-lg px-3 py-1">
                {completedModules}/{learningModules.length} Modules
              </Badge>
              <Badge variant="outline" className="text-lg px-3 py-1">
                {overallProgress}%
              </Badge>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Progress value={overallProgress} className="mb-4" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-purple-600">{overallProgress}%</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Overall Progress</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-600">{completedModules}</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Completed</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-600">0</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Certificates</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-orange-600">0</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Achievements</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <Link href="/learning/assessment">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer bg-red-50 dark:bg-red-900/20 border-red-200">
            <CardContent className="p-6 text-center">
              <div className="text-4xl mb-3">🧪</div>
              <h3 className="font-semibold text-lg mb-2">Take Assessment</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Test your disaster preparedness knowledge
              </p>
            </CardContent>
          </Card>
        </Link>

        <Link href="/learning/scenarios">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer bg-blue-50 dark:bg-blue-900/20 border-blue-200">
            <CardContent className="p-6 text-center">
              <div className="text-4xl mb-3">🎮</div>
              <h3 className="font-semibold text-lg mb-2">Practice Scenarios</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Interactive emergency simulations
              </p>
            </CardContent>
          </Card>
        </Link>

        <Card className="cursor-pointer bg-green-50 dark:bg-green-900/20 border-green-200">
          <CardContent className="p-6 text-center">
            <div className="text-4xl mb-3">📊</div>
            <h3 className="font-semibold text-lg mb-2">Track Progress</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Monitor your learning achievements
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Learning Modules */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {learningModules.map((module) => (
          <Card key={module.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <span className="text-4xl">{module.icon}</span>
                  <div>
                    <CardTitle className="text-lg">{module.title}</CardTitle>
                    <CardDescription>{module.description}</CardDescription>
                  </div>
                </div>
                <div className="text-right">
                  <Badge 
                    variant="outline"
                    className={`mb-2 ${
                      module.difficulty === 'Beginner' 
                        ? 'border-green-300 text-green-700'
                        : 'border-blue-300 text-blue-700'
                    }`}
                  >
                    {module.difficulty}
                  </Badge>
                  <div className="text-sm text-gray-500">{module.duration}</div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Progress */}
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Progress</span>
                  <span>{module.progress}%</span>
                </div>
                <Progress value={module.progress} className="mb-3" />
              </div>
              
              {/* Lessons */}
              <div>
                <h4 className="font-semibold mb-2 text-sm">Lessons:</h4>
                <div className="space-y-1">
                  {module.lessons.map((lesson, lessonIndex) => (
                    <div key={lessonIndex} className="flex items-center text-sm">
                      <span className="w-4 h-4 rounded-full border mr-2 flex items-center justify-center">
                        {module.progress > (lessonIndex + 1) * 25 ? '✓' : lessonIndex + 1}
                      </span>
                      <span className={module.progress > (lessonIndex + 1) * 25 ? 'line-through text-gray-500' : ''}>
                        {lesson}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Action Button */}
              <Button className="w-full">
                {module.progress === 0 ? 'Start Learning' : module.progress >= 100 ? 'Review' : 'Continue'}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Achievements */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center">
            🏆 Achievements
          </CardTitle>
          <CardDescription>
            Unlock badges as you progress through your learning journey
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {achievements.map((achievement, index) => (
              <div 
                key={index} 
                className={`text-center p-4 border rounded-lg ${
                  achievement.earned 
                    ? 'bg-yellow-50 border-yellow-200 dark:bg-yellow-900/20' 
                    : 'bg-gray-50 border-gray-200 dark:bg-gray-800'
                }`}
              >
                <div className={`text-3xl mb-2 ${achievement.earned ? '' : 'grayscale opacity-50'}`}>
                  {achievement.icon}
                </div>
                <h4 className="font-semibold text-sm mb-1">{achievement.name}</h4>
                <p className="text-xs text-gray-600 dark:text-gray-300">
                  {achievement.description}
                </p>
                {!achievement.earned && (
                  <Badge variant="outline" className="mt-2 text-xs">
                    Locked
                  </Badge>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Study Tips */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            💡 Learning Tips for Students
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3 flex items-center">
                🎯 Effective Learning
              </h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Complete modules in order for best understanding
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Take notes and practice scenarios regularly
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Discuss concepts with classmates and family
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Apply knowledge to create real emergency plans
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3 flex items-center">
                📝 Assessment Prep
              </h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  Review all module content before taking assessments
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  Focus on practical application, not just memorization
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  Retake assessments to improve your understanding
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  Use scenarios to test your decision-making skills
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}