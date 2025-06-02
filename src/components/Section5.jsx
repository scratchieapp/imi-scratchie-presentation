import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, Calendar, Users, Target, TrendingUp, Award, Shield, BarChart3, Rocket, CheckCircle2, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const ImplementationRoadmap = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      id: 'intro',
      title: 'Your Journey to Zero Harm',
      subtitle: 'Transforming 10,000+ Workers into Safety Champions',
      content: (
        <div className="space-y-8">
          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white p-8 rounded-2xl shadow-xl">
              <h2 className="text-4xl font-bold mb-4">From Compliance to Culture</h2>
              <p className="text-xl">A proven 12-month roadmap tailored for IMI's scale and ambitions</p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-6 mt-12">
            <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-blue-200">
              <div className="text-blue-600 text-3xl font-bold mb-2">3 Months</div>
              <p className="text-gray-700">Pilot Success in Shipbuilding</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-green-200">
              <div className="text-green-600 text-3xl font-bold mb-2">9 Months</div>
              <p className="text-gray-700">Scale Across All Operations</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-purple-200">
              <div className="text-purple-600 text-3xl font-bold mb-2">12 Months</div>
              <p className="text-gray-700">World-Class Safety Culture</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'month1',
      title: 'Month 1: Foundation',
      subtitle: 'Building on Your ISO 45001 Excellence',
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <Target className="text-blue-600 mr-3" size={32} />
                  <h3 className="text-xl font-bold">Safety Culture Assessment</h3>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle2 className="text-green-500 mr-2 mt-1 flex-shrink-0" size={16} />
                    <span>Baseline measurement across all nationalities</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-green-500 mr-2 mt-1 flex-shrink-0" size={16} />
                    <span>Identify high-risk behaviors in welding/fabrication</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-green-500 mr-2 mt-1 flex-shrink-0" size={16} />
                    <span>Map current safety participation rates</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <Users className="text-green-600 mr-3" size={32} />
                  <h3 className="text-xl font-bold">Champion Training</h3>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle2 className="text-green-500 mr-2 mt-1 flex-shrink-0" size={16} />
                    <span>100 supervisors certified as Scratchie Champions</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-green-500 mr-2 mt-1 flex-shrink-0" size={16} />
                    <span>Multi-language training (Arabic, English, Hindi)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-green-500 mr-2 mt-1 flex-shrink-0" size={16} />
                    <span>Focus on positive reinforcement techniques</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-purple-50 p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <Shield className="text-purple-600 mr-3" size={32} />
                  <h3 className="text-xl font-bold">Behavior Targeting Workshop</h3>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle2 className="text-green-500 mr-2 mt-1 flex-shrink-0" size={16} />
                    <span>Define 10 critical behaviors for shipbuilding</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-green-500 mr-2 mt-1 flex-shrink-0" size={16} />
                    <span>Align with Aramco Zero Harm standards</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-green-500 mr-2 mt-1 flex-shrink-0" size={16} />
                    <span>Create behavior-specific reward criteria</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-orange-50 p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <BarChart3 className="text-orange-600 mr-3" size={32} />
                  <h3 className="text-xl font-bold">Platform Configuration</h3>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle2 className="text-green-500 mr-2 mt-1 flex-shrink-0" size={16} />
                    <span>Customize for IMI branding and values</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-green-500 mr-2 mt-1 flex-shrink-0" size={16} />
                    <span>Set up reward tiers (SAR 50-200 range)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-green-500 mr-2 mt-1 flex-shrink-0" size={16} />
                    <span>Configure real-time analytics dashboard</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-blue-100 to-green-100 p-6 rounded-xl mt-8">
            <div className="text-center">
              <p className="text-lg font-semibold text-gray-800">Week 4 Milestone:</p>
              <p className="text-2xl font-bold text-blue-600">500 Welders Ready for Pilot Launch</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'month2',
      title: 'Month 2: Launch',
      subtitle: 'Activating Your First 500 Safety Champions',
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white p-6 rounded-xl mb-8">
            <h3 className="text-2xl font-bold text-center">Pilot Area: Ras Al-Khair Shipbuilding Division</h3>
            <p className="text-center text-lg mt-2">Focus: Welding, Fabrication & Material Handling Teams</p>
          </div>
          
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="text-lg font-bold text-gray-800 mb-4">Week 1-2: Soft Launch</h4>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h5 className="font-semibold text-blue-600 mb-2">Daily Supervisor Coaching</h5>
                <ul className="text-sm space-y-1 text-gray-700">
                  <li>• 15-minute morning huddles on recognition</li>
                  <li>• Live demonstration of reward giving</li>
                  <li>• Address questions in real-time</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h5 className="font-semibold text-green-600 mb-2">Worker Activation</h5>
                <ul className="text-sm space-y-1 text-gray-700">
                  <li>• App download assistance stations</li>
                  <li>• First reward guaranteed within 48 hours</li>
                  <li>• Multi-language support desk</li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-lg font-bold text-gray-800 mb-4">Week 3-4: Full Activation</h4>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h5 className="font-semibold text-purple-600 mb-2">Weekly Data Reviews</h5>
                <ul className="text-sm space-y-1 text-gray-700">
                  <li>• Participation rates by nationality</li>
                  <li>• Most recognized behaviors</li>
                  <li>• Early success stories</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h5 className="font-semibold text-orange-600 mb-2">Monthly Recognition Event</h5>
                <ul className="text-sm space-y-1 text-gray-700">
                  <li>• Top safety performers celebration</li>
                  <li>• Team competition launch</li>
                  <li>• Executive visibility and support</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-4 gap-4 mt-8">
            <div className="bg-blue-50 p-4 rounded-lg text-center">
              <div className="text-3xl font-bold text-blue-600">80%</div>
              <p className="text-sm text-gray-700 mt-1">Target Daily Active Users</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg text-center">
              <div className="text-3xl font-bold text-green-600">500+</div>
              <p className="text-sm text-gray-700 mt-1">Weekly Recognitions</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg text-center">
              <div className="text-3xl font-bold text-purple-600">10x</div>
              <p className="text-sm text-gray-700 mt-1">Increase in Hazard Reports</p>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg text-center">
              <div className="text-3xl font-bold text-orange-600">Zero</div>
              <p className="text-sm text-gray-700 mt-1">Target LTIs</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'month3',
      title: 'Month 3: Optimize',
      subtitle: 'Data-Driven Refinement for Maximum Impact',
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-6 rounded-xl mb-8">
            <h3 className="text-2xl font-bold text-center">From Pilot to Proven Success</h3>
            <p className="text-center text-lg mt-2">Refining the formula before enterprise-wide scale</p>
          </div>
          
          <div className="grid grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <BarChart3 className="text-purple-600 mr-3" size={28} />
                <h4 className="text-lg font-bold">Data Analysis</h4>
              </div>
              <div className="space-y-3">
                <div className="bg-purple-50 p-3 rounded-lg">
                  <p className="text-sm font-semibold text-purple-700">Behavioral Insights</p>
                  <p className="text-xs text-gray-600 mt-1">Which behaviors improved most?</p>
                </div>
                <div className="bg-purple-50 p-3 rounded-lg">
                  <p className="text-sm font-semibold text-purple-700">Engagement Patterns</p>
                  <p className="text-xs text-gray-600 mt-1">Peak recognition times & locations</p>
                </div>
                <div className="bg-purple-50 p-3 rounded-lg">
                  <p className="text-sm font-semibold text-purple-700">ROI Calculation</p>
                  <p className="text-xs text-gray-600 mt-1">Cost per incident prevented</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <Target className="text-green-600 mr-3" size={28} />
                <h4 className="text-lg font-bold">Behavior Refinement</h4>
              </div>
              <div className="space-y-3">
                <div className="bg-green-50 p-3 rounded-lg">
                  <p className="text-sm font-semibold text-green-700">Adjust Targets</p>
                  <p className="text-xs text-gray-600 mt-1">Focus on highest-impact behaviors</p>
                </div>
                <div className="bg-green-50 p-3 rounded-lg">
                  <p className="text-sm font-semibold text-green-700">Reward Optimization</p>
                  <p className="text-xs text-gray-600 mt-1">Fine-tune values for motivation</p>
                </div>
                <div className="bg-green-50 p-3 rounded-lg">
                  <p className="text-sm font-semibold text-green-700">Team Dynamics</p>
                  <p className="text-xs text-gray-600 mt-1">Launch shift competitions</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <Rocket className="text-blue-600 mr-3" size={28} />
                <h4 className="text-lg font-bold">Scale Planning</h4>
              </div>
              <div className="space-y-3">
                <div className="bg-blue-50 p-3 rounded-lg">
                  <p className="text-sm font-semibold text-blue-700">Success Stories</p>
                  <p className="text-xs text-gray-600 mt-1">Document & share wins</p>
                </div>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <p className="text-sm font-semibold text-blue-700">Champion Network</p>
                  <p className="text-xs text-gray-600 mt-1">Identify super-users</p>
                </div>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <p className="text-sm font-semibold text-blue-700">Rollout Roadmap</p>
                  <p className="text-xs text-gray-600 mt-1">Plan next 3,000 workers</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-green-100 to-blue-100 p-6 rounded-xl mt-8">
            <h4 className="text-lg font-bold text-center mb-4">Pilot Results Dashboard</h4>
            <div className="grid grid-cols-4 gap-4">
              <div className="text-center">
                <p className="text-3xl font-bold text-green-600">25%</p>
                <p className="text-sm text-gray-700">↑ Safety Participation</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600">3x</p>
                <p className="text-sm text-gray-700">↑ Near-Miss Reports</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-purple-600">40%</p>
                <p className="text-sm text-gray-700">↓ Minor Incidents</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-orange-600">95%</p>
                <p className="text-sm text-gray-700">Worker Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'scale',
      title: 'Months 4-12: Scale & Embed',
      subtitle: 'From 500 to 10,000+ Safety Champions',
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-6 rounded-xl mb-8">
            <h3 className="text-2xl font-bold text-center">Enterprise-Wide Transformation</h3>
            <p className="text-center text-lg mt-2">Creating One Safety Culture Across All IMI Operations</p>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h4 className="text-xl font-bold mb-4 text-gray-800">Phased Rollout Schedule</h4>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                  <div className="flex items-center">
                    <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">1</div>
                    <div>
                      <p className="font-semibold">Months 4-6: Entire Shipyard</p>
                      <p className="text-sm text-gray-600">3,000+ workers across all shipbuilding operations</p>
                    </div>
                  </div>
                  <CheckCircle2 className="text-blue-600" size={24} />
                </div>
                
                <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                  <div className="flex items-center">
                    <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">2</div>
                    <div>
                      <p className="font-semibold">Months 7-9: Rig Construction</p>
                      <p className="text-sm text-gray-600">Expand to offshore rig building teams</p>
                    </div>
                  </div>
                  <CheckCircle2 className="text-green-600" size={24} />
                </div>
                
                <div className="flex items-center justify-between p-4 bg-purple-50 rounded-lg">
                  <div className="flex items-center">
                    <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">3</div>
                    <div>
                      <p className="font-semibold">Months 10-12: Full Enterprise</p>
                      <p className="text-sm text-gray-600">All operations including contractors & support</p>
                    </div>
                  </div>
                  <CheckCircle2 className="text-purple-600" size={24} />
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
                <h5 className="text-lg font-bold mb-3 text-blue-800">Integration Excellence</h5>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle2 className="text-blue-600 mr-2 mt-1 flex-shrink-0" size={16} />
                    <span>Connect with HSE management systems</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-blue-600 mr-2 mt-1 flex-shrink-0" size={16} />
                    <span>API integration with timesheet systems</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-blue-600 mr-2 mt-1 flex-shrink-0" size={16} />
                    <span>Real-time dashboard for Aramco reporting</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl">
                <h5 className="text-lg font-bold mb-3 text-green-800">Advanced Analytics</h5>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle2 className="text-green-600 mr-2 mt-1 flex-shrink-0" size={16} />
                    <span>Predictive safety risk modeling</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-green-600 mr-2 mt-1 flex-shrink-0" size={16} />
                    <span>Behavioral trend analysis by trade</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-green-600 mr-2 mt-1 flex-shrink-0" size={16} />
                    <span>ROI tracking and optimization</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-orange-400 to-red-500 text-white p-8 rounded-xl">
              <h4 className="text-2xl font-bold text-center mb-6">12-Month Target Outcomes</h4>
              <div className="grid grid-cols-4 gap-4">
                <div className="text-center">
                  <p className="text-4xl font-bold">50%</p>
                  <p className="text-sm mt-1">Reduction in TRIR</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold">Zero</p>
                  <p className="text-sm mt-1">Fatalities</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold">10x</p>
                  <p className="text-sm mt-1">Safety Participation</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold">#1</p>
                  <p className="text-sm mt-1">Safest Yard in ME</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="max-w-6xl mx-auto p-8 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="flex items-center space-x-4 mb-2">
              <Link to="/" className="text-blue-600 hover:text-blue-800 font-semibold transition-colors">
                ← Back to Home
              </Link>
            </div>
            <h1 className="text-3xl font-bold text-gray-800">Section 5: Implementation Roadmap</h1>
            <p className="text-lg text-gray-600 mt-2">{slides[currentSlide].title}</p>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-500">Slide {currentSlide + 1} of {slides.length}</span>
          </div>
        </div>
        
        {/* Progress bar */}
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-blue-600 to-green-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Slide Content */}
      <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 min-h-[600px]">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{slides[currentSlide].subtitle}</h2>
        <div className="mt-6">
          {slides[currentSlide].content}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center">
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className={`flex items-center px-6 py-3 rounded-lg font-semibold transition-all ${
            currentSlide === 0
              ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
              : 'bg-blue-600 text-white hover:bg-blue-700'
          }`}
        >
          <ChevronLeft className="mr-2" size={20} />
          Previous
        </button>

        {/* Slide indicators */}
        <div className="flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide
                  ? 'bg-blue-600 w-8'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          className={`flex items-center px-6 py-3 rounded-lg font-semibold transition-all ${
            currentSlide === slides.length - 1
              ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
              : 'bg-green-600 text-white hover:bg-green-700'
          }`}
        >
          Next
          <ChevronRight className="ml-2" size={20} />
        </button>
      </div>
    </div>
  );
};

export default ImplementationRoadmap;