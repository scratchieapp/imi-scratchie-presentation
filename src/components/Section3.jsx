import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Rocket, Users, Target, TrendingUp, Calendar, CheckCircle, Settings, Globe, Award, BarChart3, Layers, ArrowRight, Building, Zap, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const SlideDeck = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const slides = [
    <TitleSlide />,
    <PhaseOverviewSlide />,
    <PilotPhaseSlide />,
    <PilotDetailsSlide />,
    <ScalePhaseSlide />,
    <EnterprisePhaseSlide />,
    <IntegrationSlide />,
    <CulturalJourneySlide />,
    <SummarySlide />
  ];

  const nextSlide = () => {
    if (!isAnimating && currentSlide < slides.length - 1) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentSlide(currentSlide + 1);
        setIsAnimating(false);
      }, 300);
    }
  };

  const prevSlide = () => {
    if (!isAnimating && currentSlide > 0) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentSlide(currentSlide - 1);
        setIsAnimating(false);
      }, 300);
    }
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentSlide]);

  return (
    <div className="h-screen w-screen bg-gray-900 flex flex-col overflow-hidden">
      {/* Header */}
      <div className="bg-gray-800 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Link to="/" className="text-white font-bold text-xl hover:text-blue-300 transition-colors">
            IMI Safety Transformation
          </Link>
          <div className="text-gray-400 text-sm">Section 3: How Scratchie Works at IMI</div>
        </div>
        <div className="text-gray-400 text-sm">
          Slide {currentSlide + 1} of {slides.length}
        </div>
      </div>

      {/* Slide Content */}
      <div className="flex-1 relative overflow-hidden">
        <div className={`absolute inset-0 transition-transform duration-300 ${isAnimating ? 'scale-95 opacity-0' : 'scale-100 opacity-100'}`}>
          {slides[currentSlide]}
        </div>
      </div>

      {/* Navigation */}
      <div className="bg-gray-800 px-6 py-4 flex justify-between items-center">
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
            currentSlide === 0 
              ? 'bg-gray-700 text-gray-500 cursor-not-allowed' 
              : 'bg-blue-600 text-white hover:bg-blue-700'
          }`}
        >
          <ChevronLeft className="w-5 h-5" />
          <span>Previous</span>
        </button>

        <div className="flex space-x-2">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`h-2 rounded-full transition-all ${
                index === currentSlide ? 'w-8 bg-blue-500' : 'w-2 bg-gray-600'
              }`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
            currentSlide === slides.length - 1
              ? 'bg-gray-700 text-gray-500 cursor-not-allowed' 
              : 'bg-blue-600 text-white hover:bg-blue-700'
          }`}
        >
          <span>Next</span>
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

// Slide Components
const TitleSlide = () => (
  <div className="h-full flex items-center justify-center bg-gradient-to-br from-blue-900 via-purple-900 to-gray-900 p-8">
    <div className="text-center max-w-4xl">
      <Rocket className="w-24 h-24 text-purple-500 mx-auto mb-8 animate-pulse" />
      <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
        Your Safety Culture Transformation
      </h1>
      <p className="text-2xl text-gray-300 mb-8">
        A Phased Journey to World-Class Safety at IMI
      </p>
      <div className="flex justify-center space-x-8 text-gray-400">
        <div className="text-center">
          <div className="text-3xl font-bold text-blue-500">3 Phases</div>
          <div className="text-sm">Strategic Rollout</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-green-500">12 Months</div>
          <div className="text-sm">Full Transformation</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-purple-500">10,000+</div>
          <div className="text-sm">Workers Engaged</div>
        </div>
      </div>
    </div>
  </div>
);

const PhaseOverviewSlide = () => {
  const [activePhase, setActivePhase] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActivePhase((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const phases = [
    {
      name: "Pilot Phase",
      duration: "Months 1-3",
      scope: "500 Workers",
      location: "Shipbuilding Division",
      color: "blue",
      icon: <Target className="w-8 h-8" />
    },
    {
      name: "Scale Phase",
      duration: "Months 4-9",
      scope: "3,000+ Workers",
      location: "Entire Shipyard",
      color: "green",
      icon: <TrendingUp className="w-8 h-8" />
    },
    {
      name: "Enterprise Phase",
      duration: "Months 10-12",
      scope: "10,000+ Workers",
      location: "IMI-Wide",
      color: "purple",
      icon: <Globe className="w-8 h-8" />
    }
  ];

  return (
    <div className="h-full flex items-center justify-center bg-gray-900 p-8">
      <div className="max-w-5xl w-full">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
          Your 12-Month Journey
        </h2>

        <div className="relative mb-12">
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-700 transform -translate-y-1/2" />
          <div className="relative flex justify-between">
            {phases.map((phase, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-500 ${
                  index === activePhase 
                    ? `bg-${phase.color}-500 scale-125 shadow-lg shadow-${phase.color}-500/50` 
                    : 'bg-gray-800 scale-100'
                }`}>
                  <div className={`transition-all duration-500 ${
                    index === activePhase ? 'text-white' : 'text-gray-500'
                  }`}>
                    {phase.icon}
                  </div>
                </div>
                
                <div className={`mt-6 text-center transition-all duration-500 ${
                  index === activePhase ? 'opacity-100 transform translate-y-0' : 'opacity-60 transform translate-y-2'
                }`}>
                  <h3 className={`text-xl font-bold mb-1 ${
                    index === activePhase ? 'text-white' : 'text-gray-400'
                  }`}>{phase.name}</h3>
                  <p className={`text-sm mb-1 ${
                    index === activePhase 
                      ? phase.color === 'blue' ? 'text-blue-400' 
                      : phase.color === 'green' ? 'text-green-400' 
                      : 'text-purple-400'
                      : 'text-gray-500'
                  }`}>{phase.duration}</p>
                  <p className="text-gray-400 text-sm">{phase.scope}</p>
                  <p className="text-gray-500 text-xs">{phase.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-800 rounded-xl p-8">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-orange-500 mb-2">25%</div>
              <p className="text-gray-300">Increase in Safety Behaviors</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-500 mb-2">30%</div>
              <p className="text-gray-300">Reduction in Incidents</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-500 mb-2">40%</div>
              <p className="text-gray-300">TRIR Improvement</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const PilotPhaseSlide = () => {
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowDetails(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="h-full flex items-center justify-center bg-gray-900 p-8">
      <div className="max-w-5xl w-full">
        <div className="flex items-center justify-center mb-8">
          <div className="bg-blue-500 rounded-full p-4 mr-4">
            <Target className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Phase 1: Pilot Program
          </h2>
        </div>

        <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500 rounded-xl p-8 mb-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Shipbuilding Division Focus</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-500 mr-2 mt-0.5" />
                  <span>500 welders & fabricators at Ras Al-Khair</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-500 mr-2 mt-0.5" />
                  <span>Focus on critical behaviors: PPE, hot work, lifting</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-500 mr-2 mt-0.5" />
                  <span>100 supervisors trained as champions</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-500 mr-2 mt-0.5" />
                  <span>Daily rewards and recognition</span>
                </li>
              </ul>
            </div>

            <div className={`transform transition-all duration-700 ${showDetails ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
              <h3 className="text-2xl font-bold text-white mb-4">Success Metrics</h3>
              <div className="space-y-4">
                <div className="bg-gray-800 rounded-lg p-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Near-miss reports</span>
                    <span className="text-green-500 font-bold">+300%</span>
                  </div>
                </div>
                <div className="bg-gray-800 rounded-lg p-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Safety participation</span>
                    <span className="text-green-500 font-bold">80%+</span>
                  </div>
                </div>
                <div className="bg-gray-800 rounded-lg p-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Positive behaviors</span>
                    <span className="text-green-500 font-bold">+25%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gray-800 rounded-xl p-6 text-center">
            <Calendar className="w-8 h-8 text-blue-500 mx-auto mb-3" />
            <h4 className="text-lg font-bold text-white mb-1">Month 1</h4>
            <p className="text-gray-400">Setup & Training</p>
          </div>
          <div className="bg-gray-800 rounded-xl p-6 text-center">
            <Zap className="w-8 h-8 text-green-500 mx-auto mb-3" />
            <h4 className="text-lg font-bold text-white mb-1">Month 2</h4>
            <p className="text-gray-400">Launch & Engagement</p>
          </div>
          <div className="bg-gray-800 rounded-xl p-6 text-center">
            <BarChart3 className="w-8 h-8 text-purple-500 mx-auto mb-3" />
            <h4 className="text-lg font-bold text-white mb-1">Month 3</h4>
            <p className="text-gray-400">Measure & Optimize</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const PilotDetailsSlide = () => {
  const [activeWeek, setActiveWeek] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveWeek((prev) => (prev + 1) % 4);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const weeks = [
    {
      week: "Week 1",
      title: "Foundation",
      activities: ["Safety culture assessment", "Behavior targeting workshop", "Platform configuration"]
    },
    {
      week: "Week 2", 
      title: "Training",
      activities: ["Supervisor training (100)", "Champion selection", "App deployment"]
    },
    {
      week: "Week 3",
      title: "Soft Launch",
      activities: ["Pilot area go-live", "Daily coaching", "Initial rewards"]
    },
    {
      week: "Week 4",
      title: "Full Launch",
      activities: ["All 500 workers active", "Recognition events", "Data monitoring"]
    }
  ];

  return (
    <div className="h-full flex items-center justify-center bg-gray-900 p-8">
      <div className="max-w-5xl w-full">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
          Pilot Implementation Details
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-gray-800 rounded-xl p-6">
            <h3 className="text-2xl font-bold text-white mb-4">Month 1: Foundation</h3>
            <div className="space-y-3">
              {weeks.map((week, index) => (
                <div 
                  key={index}
                  className={`border-l-4 pl-4 transition-all duration-500 ${
                    index === activeWeek 
                      ? 'border-blue-500 bg-blue-500/10' 
                      : 'border-gray-700'
                  }`}
                >
                  <h4 className={`font-semibold mb-1 ${
                    index === activeWeek ? 'text-white' : 'text-gray-400'
                  }`}>
                    {week.week}: {week.title}
                  </h4>
                  <ul className={`text-sm space-y-1 ${
                    index === activeWeek ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {week.activities.map((activity, actIndex) => (
                      <li key={actIndex}>• {activity}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-3">Key Success Factors</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                  <span>Executive visibility and support</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                  <span>Daily supervisor engagement</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                  <span>Clear communication in multiple languages</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                  <span>Visible early wins celebration</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-3">Reward Structure</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Daily Recognition Budget</span>
                  <span className="text-green-500 font-bold">SAR 2,500</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Average Reward Value</span>
                  <span className="text-blue-500 font-bold">SAR 50-100</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Monthly Investment</span>
                  <span className="text-purple-500 font-bold">SAR 27,500</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-orange-500/20 border border-orange-500 rounded-xl p-6 text-center">
          <Target className="w-8 h-8 text-orange-500 mx-auto mb-3" />
          <p className="text-xl text-white font-semibold">
            Pilot Goal: Prove 25% improvement in safety behaviors and engagement
          </p>
        </div>
      </div>
    </div>
  );
};

const ScalePhaseSlide = () => {
  const [showExpansion, setShowExpansion] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowExpansion(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="h-full flex items-center justify-center bg-gray-900 p-8">
      <div className="max-w-5xl w-full">
        <div className="flex items-center justify-center mb-8">
          <div className="bg-green-500 rounded-full p-4 mr-4">
            <TrendingUp className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Phase 2: Scale Across Shipyard
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className={`bg-gray-800 rounded-xl p-6 transform transition-all duration-500 ${showExpansion ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}>
            <Users className="w-12 h-12 text-green-500 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">3,000+ Workers</h3>
            <p className="text-gray-300">All shipbuilding personnel included</p>
          </div>

          <div className={`bg-gray-800 rounded-xl p-6 transform transition-all duration-500 delay-200 ${showExpansion ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}>
            <Building className="w-12 h-12 text-blue-500 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Contractors Included</h3>
            <p className="text-gray-300">Unified safety culture across all teams</p>
          </div>

          <div className={`bg-gray-800 rounded-xl p-6 transform transition-all duration-500 delay-300 ${showExpansion ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}>
            <Award className="w-12 h-12 text-purple-500 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Team Competitions</h3>
            <p className="text-gray-300">Shift vs shift safety challenges</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500 rounded-xl p-8 mb-8">
          <h3 className="text-2xl font-bold text-white mb-4">Expansion Strategy</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-semibold text-white mb-3">Phased Rollout</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Month 4-5: Fabrication shops</li>
                <li>• Month 5-6: Assembly areas</li>
                <li>• Month 6-7: Painting & finishing</li>
                <li>• Month 7-9: Support departments</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-3">New Features</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Multi-language support (Arabic)</li>
                <li>• Team leaderboards</li>
                <li>• Monthly recognition events</li>
                <li>• Advanced analytics dashboard</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-4">
          <div className="bg-gray-800 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-green-500">30%</div>
            <div className="text-sm text-gray-400">Incident Reduction</div>
          </div>
          <div className="bg-gray-800 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-blue-500">10x</div>
            <div className="text-sm text-gray-400">More Reports</div>
          </div>
          <div className="bg-gray-800 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-purple-500">85%</div>
            <div className="text-sm text-gray-400">Engagement Rate</div>
          </div>
          <div className="bg-gray-800 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-orange-500">SAR 2M</div>
            <div className="text-sm text-gray-400">Saved in Year 1</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const EnterprisePhaseSlide = () => {
  const areas = [
    { name: "Rig Construction", icon: <Settings className="w-6 h-6" />, workers: "2,000+" },
    { name: "Marine Operations", icon: <Globe className="w-6 h-6" />, workers: "1,500+" },
    { name: "Support Services", icon: <Users className="w-6 h-6" />, workers: "1,000+" },
    { name: "Future Operations", icon: <Rocket className="w-6 h-6" />, workers: "2,500+" }
  ];

  const [visibleAreas, setVisibleAreas] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleAreas((prev) => (prev < areas.length ? prev + 1 : prev));
    }, 500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="h-full flex items-center justify-center bg-gray-900 p-8">
      <div className="max-w-5xl w-full">
        <div className="flex items-center justify-center mb-8">
          <div className="bg-purple-500 rounded-full p-4 mr-4">
            <Globe className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Phase 3: Enterprise-Wide
          </h2>
        </div>

        <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500 rounded-xl p-8 mb-8">
          <div className="text-center mb-6">
            <h3 className="text-3xl font-bold text-white mb-2">10,000+ Workers</h3>
            <p className="text-xl text-gray-300">Full IMI Transformation</p>
          </div>

          <div className="grid md:grid-cols-4 gap-4">
            {areas.map((area, index) => (
              <div
                key={index}
                className={`bg-gray-800 rounded-xl p-4 text-center transform transition-all duration-500 ${
                  index < visibleAreas 
                    ? 'translate-y-0 opacity-100 scale-100' 
                    : 'translate-y-10 opacity-0 scale-95'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="text-purple-500 mb-2">{area.icon}</div>
                <h4 className="text-sm font-bold text-white">{area.name}</h4>
                <p className="text-xs text-gray-400">{area.workers}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-4">Advanced Capabilities</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-purple-500 mr-2 mt-0.5" />
                <span>Predictive analytics for risk prevention</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-purple-500 mr-2 mt-0.5" />
                <span>Integration with HSE systems</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-purple-500 mr-2 mt-0.5" />
                <span>Automated behavior insights</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-purple-500 mr-2 mt-0.5" />
                <span>Executive dashboards</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-4">Enterprise Results</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-300">TRIR Reduction</span>
                <span className="text-green-500 font-bold text-xl">40%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Safety Culture Score</span>
                <span className="text-blue-500 font-bold text-xl">9.2/10</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">ROI</span>
                <span className="text-purple-500 font-bold text-xl">8:1</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Regional Leader</span>
                <span className="text-orange-500 font-bold text-xl">✓</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl p-6 text-white inline-block">
            <p className="text-xl font-bold">
              "Safest Shipyard in the Middle East"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const IntegrationSlide = () => {
  const [showConnections, setShowConnections] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowConnections(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const integrations = [
    { name: "ISO 45001", desc: "Safety Management", icon: <Shield className="w-8 h-8" /> },
    { name: "SAP/Oracle", desc: "HR Systems", icon: <Users className="w-8 h-8" /> },
    { name: "HSE Reporting", desc: "Incident Management", icon: <BarChart3 className="w-8 h-8" /> },
    { name: "Aramco Standards", desc: "Compliance", icon: <CheckCircle className="w-8 h-8" /> }
  ];

  return (
    <div className="h-full flex items-center justify-center bg-gray-900 p-8">
      <div className="max-w-5xl w-full">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
          Seamless Integration
        </h2>

        <div className="relative mb-12">
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-full p-8 mx-auto w-32 h-32 flex items-center justify-center">
            <Layers className="w-16 h-16 text-white" />
          </div>
          
          <div className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 ${showConnections ? 'opacity-100' : 'opacity-0'}`}>
            {integrations.map((integration, index) => {
              const angle = (index * 90) * Math.PI / 180;
              const radius = 200;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;
              
              return (
                <div
                  key={index}
                  className="absolute"
                  style={{
                    transform: `translate(${x}px, ${y}px)`,
                    transition: 'all 0.5s ease-out',
                    transitionDelay: `${index * 200}ms`
                  }}
                >
                  <div className="bg-gray-800 rounded-xl p-4 text-center w-32">
                    <div className="text-blue-500 mb-2">{integration.icon}</div>
                    <h4 className="text-sm font-bold text-white">{integration.name}</h4>
                    <p className="text-xs text-gray-400">{integration.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-48">
          <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500 rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-4">Data Flow</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center">
                <ArrowRight className="w-5 h-5 text-green-500 mr-2" />
                <span>Real-time behavior data to HSE systems</span>
              </li>
              <li className="flex items-center">
                <ArrowRight className="w-5 h-5 text-green-500 mr-2" />
                <span>Employee records from HR databases</span>
              </li>
              <li className="flex items-center">
                <ArrowRight className="w-5 h-5 text-green-500 mr-2" />
                <span>Compliance reports to Aramco</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500 rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-4">Benefits</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-blue-500 mr-2" />
                <span>No duplicate data entry</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-blue-500 mr-2" />
                <span>Unified safety dashboard</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-blue-500 mr-2" />
                <span>Automated compliance reporting</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const CulturalJourneySlide = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setProgress((prev) => (prev < 100 ? prev + 2 : prev));
      }, 50);
      return () => clearInterval(interval);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const milestones = [
    { month: 1, event: "First reward given", icon: "🎯" },
    { month: 3, event: "500 active users", icon: "👥" },
    { month: 6, event: "First injury-free month", icon: "🏆" },
    { month: 9, event: "Culture shift visible", icon: "🚀" },
    { month: 12, event: "Regional safety leader", icon: "⭐" }
  ];

  return (
    <div className="h-full flex items-center justify-center bg-gray-900 p-8">
      <div className="max-w-5xl w-full">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
          Your Cultural Transformation Journey
        </h2>

        <div className="relative mb-12">
          <div className="h-4 bg-gray-700 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-blue-500 via-green-500 to-purple-500 transition-all duration-100 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          
          <div className="absolute -top-2 left-0 right-0 flex justify-between">
            {milestones.map((milestone, index) => (
              <div 
                key={index} 
                className={`text-center transition-all duration-500 ${
                  progress >= (index / (milestones.length - 1)) * 100 
                    ? 'opacity-100 transform scale-110' 
                    : 'opacity-40 transform scale-90'
                }`}
              >
                <div className="text-2xl mb-2">{milestone.icon}</div>
                <div className="text-xs text-gray-400">Month {milestone.month}</div>
                <div className="text-xs text-white font-semibold mt-1">{milestone.event}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-16">
          <div className="bg-gradient-to-br from-red-500/20 to-orange-500/20 border border-red-500 rounded-xl p-6 text-center">
            <h3 className="text-xl font-bold text-white mb-2">Before</h3>
            <ul className="text-gray-300 space-y-2 text-left">
              <li>• Fear-based compliance</li>
              <li>• Low engagement (54%)</li>
              <li>• Reactive safety</li>
              <li>• Siloed departments</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-yellow-500/20 to-green-500/20 border border-yellow-500 rounded-xl p-6 text-center">
            <h3 className="text-xl font-bold text-white mb-2">During</h3>
            <ul className="text-gray-300 space-y-2 text-left">
              <li>• Growing enthusiasm</li>
              <li>• Active participation</li>
              <li>• Peer recognition</li>
              <li>• Visible quick wins</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-green-500/20 to-blue-500/20 border border-green-500 rounded-xl p-6 text-center">
            <h3 className="text-xl font-bold text-white mb-2">After</h3>
            <ul className="text-gray-300 space-y-2 text-left">
              <li>• Proactive safety culture</li>
              <li>• 95%+ engagement</li>
              <li>• Everyone owns safety</li>
              <li>• Industry benchmark</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 text-center">
          <div className="bg-gray-800 rounded-xl p-6 inline-block">
            <p className="text-2xl text-white font-bold mb-2">
              "Safety is no longer something we do - it's who we are"
            </p>
            <p className="text-gray-400">- Future IMI Worker</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const SummarySlide = () => {
  return (
    <div className="h-full flex items-center justify-center bg-gradient-to-br from-blue-900 via-purple-900 to-gray-900 p-8">
      <div className="max-w-4xl w-full text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
          Your 12-Month Transformation
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gray-800/80 backdrop-blur rounded-xl p-6">
            <Target className="w-12 h-12 text-blue-500 mx-auto mb-3" />
            <h3 className="text-xl font-bold text-white mb-2">Months 1-3</h3>
            <p className="text-gray-300">Pilot Success</p>
            <p className="text-green-500 font-semibold">500 workers engaged</p>
          </div>

          <div className="bg-gray-800/80 backdrop-blur rounded-xl p-6">
            <TrendingUp className="w-12 h-12 text-green-500 mx-auto mb-3" />
            <h3 className="text-xl font-bold text-white mb-2">Months 4-9</h3>
            <p className="text-gray-300">Scale Impact</p>
            <p className="text-green-500 font-semibold">3,000+ workers, 30% safer</p>
          </div>

          <div className="bg-gray-800/80 backdrop-blur rounded-xl p-6">
            <Globe className="w-12 h-12 text-purple-500 mx-auto mb-3" />
            <h3 className="text-xl font-bold text-white mb-2">Months 10-12</h3>
            <p className="text-gray-300">Enterprise Excellence</p>
            <p className="text-green-500 font-semibold">10,000+ champions</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500 rounded-xl p-8 mb-8">
          <h3 className="text-2xl font-bold text-white mb-4">Expected Outcomes</h3>
          <div className="grid md:grid-cols-2 gap-4 text-left">
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
              <span className="text-gray-300">40% TRIR reduction</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
              <span className="text-gray-300">SAR 2M+ cost savings</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
              <span className="text-gray-300">95%+ engagement rate</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
              <span className="text-gray-300">Regional safety leader</span>
            </div>
          </div>
        </div>

        <div className="text-white">
          <p className="text-2xl mb-4">Ready to begin?</p>
          <p className="text-3xl font-bold">
            Let's talk numbers and next steps →
          </p>
        </div>
      </div>
    </div>
  );
};

export default SlideDeck;