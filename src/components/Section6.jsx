import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, Calculator, TrendingUp, Users, Shield, Award, DollarSign, BarChart3, Zap, Globe, Target, Clock, CheckCircle2, AlertTriangle, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';

const InvestmentPartnership = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [pilotWorkers, setPilotWorkers] = useState(500);
  const [monthlyReward, setMonthlyReward] = useState(75);
  
  // Calculate investment details
  const platformCost = pilotWorkers * 5;
  const rewardsBudget = pilotWorkers * monthlyReward;
  const totalMonthlyInvestment = platformCost + rewardsBudget;
  const totalAnnualInvestment = totalMonthlyInvestment * 12;
  
  // Average welder salary SAR 4,500/month
  const avgMonthlySalary = 4500;
  const totalPayroll = pilotWorkers * avgMonthlySalary;
  const investmentAsPercentOfPayroll = ((totalMonthlyInvestment / totalPayroll) * 100).toFixed(2);
  
  // Cost of one LTI
  const costOfLTI = 50000; // SAR
  const monthsToBreakeven = (costOfLTI / totalMonthlyInvestment).toFixed(1);
  
  const slides = [
    {
      id: 'intro',
      title: 'Investment & Partnership',
      subtitle: 'Your Safety Transformation Partner',
      content: (
        <div className="space-y-8">
          <div className="text-center">
            <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-8 rounded-2xl shadow-xl">
              <h2 className="text-4xl font-bold mb-4">Smart Investment, Massive Returns</h2>
              <p className="text-xl">Transform safety culture for less than 0.5% of payroll</p>
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-6 mt-12">
            <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-green-200">
              <DollarSign className="text-green-600 mb-3" size={40} />
              <div className="text-2xl font-bold text-gray-800">SAR 5</div>
              <p className="text-gray-600 mt-1">Per worker per month</p>
              <p className="text-sm text-gray-500 mt-2">Platform access</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-blue-200">
              <Award className="text-blue-600 mb-3" size={40} />
              <div className="text-2xl font-bold text-gray-800">SAR 50-100</div>
              <p className="text-gray-600 mt-1">Monthly reward budget</p>
              <p className="text-sm text-gray-500 mt-2">Per worker average</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-purple-200">
              <TrendingUp className="text-purple-600 mb-3" size={40} />
              <div className="text-2xl font-bold text-gray-800">1 Month</div>
              <p className="text-gray-600 mt-1">ROI break-even</p>
              <p className="text-sm text-gray-500 mt-2">One prevented LTI</p>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-orange-100 to-red-100 p-6 rounded-xl">
            <div className="text-center">
              <p className="text-lg font-semibold text-gray-800">The Real Question:</p>
              <p className="text-2xl font-bold text-red-600 mt-2">Can you afford NOT to invest in behavioral safety?</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'calculator',
      title: 'Investment Calculator',
      subtitle: 'See Your ROI in Real Numbers',
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-blue-500 to-green-500 text-white p-6 rounded-xl mb-8">
            <h3 className="text-2xl font-bold text-center">Interactive ROI Calculator</h3>
            <p className="text-center text-lg mt-2">Adjust the numbers to see your potential return</p>
          </div>
          
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h4 className="text-lg font-bold mb-4 text-gray-800">Investment Inputs</h4>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Number of Workers in Pilot
                    </label>
                    <input
                      type="range"
                      min="100"
                      max="1000"
                      value={pilotWorkers}
                      onChange={(e) => setPilotWorkers(Number(e.target.value))}
                      className="w-full"
                    />
                    <div className="text-center mt-1 text-2xl font-bold text-blue-600">{pilotWorkers}</div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Average Monthly Reward per Worker (SAR)
                    </label>
                    <input
                      type="range"
                      min="50"
                      max="100"
                      value={monthlyReward}
                      onChange={(e) => setMonthlyReward(Number(e.target.value))}
                      className="w-full"
                    />
                    <div className="text-center mt-1 text-2xl font-bold text-green-600">SAR {monthlyReward}</div>
                  </div>
                </div>
                
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Platform Cost:</span>
                      <span className="font-semibold">SAR {platformCost.toLocaleString()}/month</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Rewards Budget:</span>
                      <span className="font-semibold">SAR {rewardsBudget.toLocaleString()}/month</span>
                    </div>
                    <div className="flex justify-between text-lg font-bold pt-2 border-t">
                      <span>Total Monthly:</span>
                      <span className="text-blue-600">SAR {totalMonthlyInvestment.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total Annual:</span>
                      <span className="text-green-600">SAR {totalAnnualInvestment.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-xl shadow-lg">
                <h4 className="text-lg font-bold mb-4 text-gray-800">ROI Analysis</h4>
                
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-600">Investment as % of Payroll:</span>
                      <span className="text-2xl font-bold text-green-600">{investmentAsPercentOfPayroll}%</span>
                    </div>
                    <div className="text-xs text-gray-500">Based on avg salary SAR 4,500/month</div>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-600">Cost of One LTI:</span>
                      <span className="text-xl font-bold text-red-600">SAR 50,000</span>
                    </div>
                    <div className="text-xs text-gray-500">Medical, lost time, investigation</div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white p-4 rounded-lg">
                    <div className="text-center">
                      <p className="text-sm">Break-even in just</p>
                      <p className="text-3xl font-bold">{monthsToBreakeven} months</p>
                      <p className="text-sm mt-1">Prevent ONE injury to pay for entire program</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-orange-50 p-6 rounded-xl shadow-lg">
                <h4 className="text-lg font-bold mb-3 text-gray-800">Additional Returns</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle2 className="text-green-500 mr-2 mt-1 flex-shrink-0" size={16} />
                    <span className="text-sm">5% productivity gain from reduced rework</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-green-500 mr-2 mt-1 flex-shrink-0" size={16} />
                    <span className="text-sm">20% reduction in turnover costs</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-green-500 mr-2 mt-1 flex-shrink-0" size={16} />
                    <span className="text-sm">Better insurance premiums</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-green-500 mr-2 mt-1 flex-shrink-0" size={16} />
                    <span className="text-sm">Enhanced reputation with Aramco</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'comparison',
      title: 'Cost Comparison',
      subtitle: 'The True Cost of Safety',
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white p-6 rounded-xl mb-8">
            <h3 className="text-2xl font-bold text-center">Prevention vs. Reaction</h3>
            <p className="text-center text-lg mt-2">Every SAR spent on prevention saves hundreds in treatment</p>
          </div>
          
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-red-600">Cost of Incidents</h4>
              
              <div className="bg-red-50 p-4 rounded-lg border-2 border-red-200">
                <div className="flex items-center mb-2">
                  <AlertTriangle className="text-red-600 mr-2" size={24} />
                  <span className="font-semibold">Minor Injury (First Aid)</span>
                </div>
                <div className="text-2xl font-bold text-red-600">SAR 5,000</div>
                <p className="text-sm text-gray-600 mt-1">Treatment, lost hours, paperwork</p>
              </div>
              
              <div className="bg-red-50 p-4 rounded-lg border-2 border-red-300">
                <div className="flex items-center mb-2">
                  <AlertTriangle className="text-red-600 mr-2" size={24} />
                  <span className="font-semibold">Lost Time Injury</span>
                </div>
                <div className="text-2xl font-bold text-red-600">SAR 50,000+</div>
                <p className="text-sm text-gray-600 mt-1">Medical, replacement, delays</p>
              </div>
              
              <div className="bg-red-50 p-4 rounded-lg border-2 border-red-400">
                <div className="flex items-center mb-2">
                  <AlertTriangle className="text-red-600 mr-2" size={24} />
                  <span className="font-semibold">Serious Injury</span>
                </div>
                <div className="text-2xl font-bold text-red-600">SAR 500,000+</div>
                <p className="text-sm text-gray-600 mt-1">Long-term care, legal, reputation</p>
              </div>
              
              <div className="bg-red-50 p-4 rounded-lg border-2 border-red-500">
                <div className="flex items-center mb-2">
                  <AlertTriangle className="text-red-600 mr-2" size={24} />
                  <span className="font-semibold">Project Delay (1 week)</span>
                </div>
                <div className="text-2xl font-bold text-red-600">SAR 2,000,000+</div>
                <p className="text-sm text-gray-600 mt-1">Penalties, overtime, client impact</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-green-600">Cost of Prevention</h4>
              
              <div className="bg-green-50 p-4 rounded-lg border-2 border-green-300">
                <div className="flex items-center mb-2">
                  <Shield className="text-green-600 mr-2" size={24} />
                  <span className="font-semibold">Scratchie Platform</span>
                </div>
                <div className="text-2xl font-bold text-green-600">SAR 5/worker/month</div>
                <p className="text-sm text-gray-600 mt-1">Full platform access, analytics, support</p>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg border-2 border-green-300">
                <div className="flex items-center mb-2">
                  <Award className="text-green-600 mr-2" size={24} />
                  <span className="font-semibold">Recognition Rewards</span>
                </div>
                <div className="text-2xl font-bold text-green-600">SAR 50-100/worker/month</div>
                <p className="text-sm text-gray-600 mt-1">Instant motivation, behavior change</p>
              </div>
              
              <div className="bg-gradient-to-r from-green-100 to-blue-100 p-6 rounded-lg mt-8">
                <h5 className="font-bold text-gray-800 mb-3">Return on Investment</h5>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span>Prevent 1 minor injury/month:</span>
                    <span className="font-bold text-green-600">100% ROI</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Prevent 1 LTI/year:</span>
                    <span className="font-bold text-green-600">500% ROI</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Prevent 1 serious injury:</span>
                    <span className="font-bold text-blue-600">5,000% ROI</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg text-center">
                <p className="text-lg font-semibold text-blue-800">
                  "The best safety investment is the one that prevents the incident from happening."
                </p>
                <p className="text-sm text-gray-600 mt-2">- Saudi Aramco Safety Excellence Standards</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'partnership',
      title: 'SCG + Scratchie Partnership',
      subtitle: 'Complete Safety Transformation Support',
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-6 rounded-xl mb-8">
            <h3 className="text-2xl font-bold text-center">Two Leaders, One Vision</h3>
            <p className="text-center text-lg mt-2">Combining BBS expertise with cutting-edge technology</p>
          </div>
          
          <div className="grid grid-cols-2 gap-8 mb-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl shadow-lg">
              <div className="text-center mb-4">
                <div className="bg-blue-600 text-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-3">
                  <Users size={40} />
                </div>
                <h4 className="text-xl font-bold text-blue-800">Safety Consulting Group</h4>
                <p className="text-gray-600 mt-1">BBS Excellence & Implementation</p>
              </div>
              
              <div className="space-y-3">
                <div className="bg-white p-3 rounded-lg">
                  <p className="font-semibold text-gray-800">✓ Behavioral Safety Expertise</p>
                  <p className="text-sm text-gray-600">20+ years implementing BBS globally</p>
                </div>
                <div className="bg-white p-3 rounded-lg">
                  <p className="font-semibold text-gray-800">✓ Middle East Experience</p>
                  <p className="text-sm text-gray-600">Deep understanding of regional culture</p>
                </div>
                <div className="bg-white p-3 rounded-lg">
                  <p className="font-semibold text-gray-800">✓ Change Management</p>
                  <p className="text-sm text-gray-600">Proven methods for culture transformation</p>
                </div>
                <div className="bg-white p-3 rounded-lg">
                  <p className="font-semibold text-gray-800">✓ Training & Coaching</p>
                  <p className="text-sm text-gray-600">Build internal capability</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl shadow-lg">
              <div className="text-center mb-4">
                <div className="bg-green-600 text-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-3">
                  <Zap size={40} />
                </div>
                <h4 className="text-xl font-bold text-green-800">Scratchie</h4>
                <p className="text-gray-600 mt-1">Technology Platform & Analytics</p>
              </div>
              
              <div className="space-y-3">
                <div className="bg-white p-3 rounded-lg">
                  <p className="font-semibold text-gray-800">✓ Digital BBS Platform</p>
                  <p className="text-sm text-gray-600">Instant recognition, real-time data</p>
                </div>
                <div className="bg-white p-3 rounded-lg">
                  <p className="font-semibold text-gray-800">✓ Multi-Language Support</p>
                  <p className="text-sm text-gray-600">Arabic, English, Hindi + more</p>
                </div>
                <div className="bg-white p-3 rounded-lg">
                  <p className="font-semibold text-gray-800">✓ Advanced Analytics</p>
                  <p className="text-sm text-gray-600">AI-powered insights & predictions</p>
                </div>
                <div className="bg-white p-3 rounded-lg">
                  <p className="font-semibold text-gray-800">✓ Proven Results</p>
                  <p className="text-sm text-gray-600">96% worker preference, 28% attitude improvement</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-purple-100 to-indigo-100 p-8 rounded-xl">
            <h4 className="text-xl font-bold text-center text-gray-800 mb-6">Your Complete Support System</h4>
            
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg text-center">
                <Clock className="text-purple-600 mx-auto mb-2" size={32} />
                <p className="font-semibold">24/7 Support</p>
                <p className="text-sm text-gray-600 mt-1">Always there when you need us</p>
              </div>
              <div className="bg-white p-4 rounded-lg text-center">
                <Target className="text-purple-600 mx-auto mb-2" size={32} />
                <p className="font-semibold">Dedicated Success Team</p>
                <p className="text-sm text-gray-600 mt-1">Your personal transformation guides</p>
              </div>
              <div className="bg-white p-4 rounded-lg text-center">
                <BarChart3 className="text-purple-600 mx-auto mb-2" size={32} />
                <p className="font-semibold">Monthly Reviews</p>
                <p className="text-sm text-gray-600 mt-1">Data-driven optimization</p>
              </div>
            </div>
            
            <div className="text-center mt-6">
              <p className="text-lg font-semibold text-purple-800">
                "Together, we don't just implement a system - we transform your culture"
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'why-now',
      title: 'Why Now?',
      subtitle: 'The Perfect Time for IMI\'s Safety Transformation',
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-6 rounded-xl mb-8">
            <h3 className="text-2xl font-bold text-center">The Window of Opportunity is Now</h3>
            <p className="text-center text-lg mt-2">Early adoption means embedded excellence</p>
          </div>
          
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <Rocket className="text-blue-600 mr-3" size={32} />
                  <h4 className="text-lg font-bold">Early in Your Journey</h4>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle2 className="text-green-500 mr-2 mt-1 flex-shrink-0" size={16} />
                    <span className="text-gray-700">No legacy systems to overcome</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-green-500 mr-2 mt-1 flex-shrink-0" size={16} />
                    <span className="text-gray-700">Build right culture from Day 1</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-green-500 mr-2 mt-1 flex-shrink-0" size={16} />
                    <span className="text-gray-700">Set the standard for the industry</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <Globe className="text-green-600 mr-3" size={32} />
                  <h4 className="text-lg font-bold">Proven & Localized</h4>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle2 className="text-green-500 mr-2 mt-1 flex-shrink-0" size={16} />
                    <span className="text-gray-700">Already in Arabic & English</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-green-500 mr-2 mt-1 flex-shrink-0" size={16} />
                    <span className="text-gray-700">Tested with similar workforces</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-green-500 mr-2 mt-1 flex-shrink-0" size={16} />
                    <span className="text-gray-700">Culturally appropriate rewards</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-8 rounded-xl">
              <div className="text-center mb-6">
                <Target className="mx-auto mb-3" size={48} />
                <h4 className="text-2xl font-bold">Vision 2030 Alignment</h4>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-white bg-opacity-20 p-4 rounded-lg">
                  <p className="font-semibold">Digital Transformation</p>
                  <p className="text-sm mt-1">Leading with technology</p>
                </div>
                <div className="bg-white bg-opacity-20 p-4 rounded-lg">
                  <p className="font-semibold">Saudi Workforce</p>
                  <p className="text-sm mt-1">Engaging young nationals</p>
                </div>
                <div className="bg-white bg-opacity-20 p-4 rounded-lg">
                  <p className="font-semibold">World-Class Standards</p>
                  <p className="text-sm mt-1">Global best practices</p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-orange-50 p-6 rounded-xl shadow-lg">
                <h5 className="font-bold text-orange-800 mb-3">Competitive Advantage</h5>
                <p className="text-gray-700 mb-3">Be the first major Saudi yard with digital BBS:</p>
                <ul className="space-y-2 text-sm">
                  <li>• Attract best talent ("safest yard to work")</li>
                  <li>• Win more Aramco contracts</li>
                  <li>• Lower insurance premiums</li>
                  <li>• Higher productivity than competitors</li>
                </ul>
              </div>
              
              <div className="bg-red-50 p-6 rounded-xl shadow-lg">
                <h5 className="font-bold text-red-800 mb-3">Cost of Delay</h5>
                <p className="text-gray-700 mb-3">Every month without BBS means:</p>
                <ul className="space-y-2 text-sm">
                  <li>• More preventable incidents</li>
                  <li>• Lost productivity opportunity</li>
                  <li>• Competitors getting ahead</li>
                  <li>• Harder to change established habits</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-8 rounded-xl">
              <div className="text-center">
                <Zap className="mx-auto mb-3" size={48} />
                <h4 className="text-2xl font-bold mb-3">Start Today, Lead Tomorrow</h4>
                <p className="text-lg">
                  With 20 rigs and 52 ships to deliver, every day of safer, 
                  more productive work counts. The sooner you start, the 
                  greater your competitive advantage.
                </p>
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
              <Link to="/" className="text-green-600 hover:text-green-800 font-semibold transition-colors">
                ← Back to Home
              </Link>
            </div>
            <h1 className="text-3xl font-bold text-gray-800">Section 6: Investment & Partnership</h1>
            <p className="text-lg text-gray-600 mt-2">{slides[currentSlide].title}</p>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-500">Slide {currentSlide + 1} of {slides.length}</span>
          </div>
        </div>
        
        {/* Progress bar */}
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-green-600 to-blue-600 h-2 rounded-full transition-all duration-300"
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
              : 'bg-green-600 text-white hover:bg-green-700'
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
                  ? 'bg-green-600 w-8'
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
              : 'bg-blue-600 text-white hover:bg-blue-700'
          }`}
        >
          Next
          <ChevronRight className="ml-2" size={20} />
        </button>
      </div>
    </div>
  );
};

export default InvestmentPartnership;