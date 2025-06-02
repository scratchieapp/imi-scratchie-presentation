import React from 'react';
import { Shield, TrendingUp, Lightbulb, Users, Calendar, DollarSign, ArrowRight, Award, Target, Globe } from 'lucide-react';

const HomePage = () => {
  const sections = [
    {
      id: 1,
      title: "The Hidden Cost of Traditional Safety",
      subtitle: "Why Compliance Isn't Enough",
      icon: Shield,
      color: "from-red-500 to-orange-500",
      description: "Discover the engagement gap and the true cost of reactive safety management",
      duration: "10 minutes"
    },
    {
      id: 2,
      title: "Introducing Behavioral Safety 2.0",
      subtitle: "From Compliance to Culture",
      icon: Lightbulb,
      color: "from-blue-500 to-cyan-500",
      description: "Learn how modern BBS transforms workplace safety through positive reinforcement",
      duration: "10 minutes"
    },
    {
      id: 3,
      title: "How Scratchie Works at IMI",
      subtitle: "Your Safety Culture Transformation",
      icon: Users,
      color: "from-purple-500 to-pink-500",
      description: "See the practical implementation from pilot to enterprise-wide deployment",
      duration: "15 minutes"
    },
    {
      id: 4,
      title: "Success Metrics & ROI",
      subtitle: "Measuring What Matters",
      icon: TrendingUp,
      color: "from-green-500 to-emerald-500",
      description: "Explore leading indicators, business impact, and real client results",
      duration: "10 minutes"
    },
    {
      id: 5,
      title: "Implementation Roadmap",
      subtitle: "Your Journey to Zero Harm",
      icon: Calendar,
      color: "from-indigo-500 to-purple-500",
      description: "Follow the proven 12-month roadmap from 500 to 10,000+ safety champions",
      duration: "10 minutes"
    },
    {
      id: 6,
      title: "Investment & Partnership",
      subtitle: "Your Safety Transformation Partner",
      icon: DollarSign,
      color: "from-amber-500 to-yellow-500",
      description: "Calculate your ROI and discover the SCG + Scratchie partnership advantage",
      duration: "10 minutes"
    }
  ];

  const handleSectionClick = (sectionId) => {
    // Navigate to the section
    window.location.href = `/section-${sectionId}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-r from-green-600 to-blue-600 p-3 rounded-lg">
                <img 
                  src="/scratchie-carrot.png" 
                  alt="Scratchie Carrot Icon" 
                  className="w-8 h-8 object-contain"
                />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Scratchie for IMI</h1>
                <p className="text-sm text-gray-600">Building a World-Class Safety Culture</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500">Presentation by</p>
              <p className="font-semibold text-gray-900">SCG + Scratchie Partnership</p>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-3xl shadow-2xl p-12 text-white">
          <div className="max-w-4xl">
            <h2 className="text-5xl font-bold mb-6">
              Transform 10,000+ Workers into Safety Champions
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Discover how Scratchie's digital behavioral safety platform can revolutionize 
              IMI's safety culture, reduce incidents by 40%, and create the safest shipyard 
              in the Middle East.
            </p>
            <div className="flex flex-wrap gap-6 text-sm">
              <div className="flex items-center">
                <Target className="mr-2" size={20} />
                <span>Aligned with Saudi Aramco Zero Harm</span>
              </div>
              <div className="flex items-center">
                <Globe className="mr-2" size={20} />
                <span>Multi-language Support</span>
              </div>
              <div className="flex items-center">
                <TrendingUp className="mr-2" size={20} />
                <span>Proven 500:1 ROI</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-green-600">28%</div>
            <p className="text-gray-600 mt-1">Improvement in Safety Attitudes</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-blue-600">96%</div>
            <p className="text-gray-600 mt-1">Worker Preference</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-purple-600">&lt;0.5%</div>
            <p className="text-gray-600 mt-1">of Payroll Investment</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-orange-600">1 Month</div>
            <p className="text-gray-600 mt-1">ROI Break-even</p>
          </div>
        </div>
      </div>

      {/* Section Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
          Explore the Complete Presentation
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <button
                key={section.id}
                onClick={() => handleSectionClick(section.id)}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 text-left group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`bg-gradient-to-r ${section.color} p-3 rounded-lg`}>
                    <Icon className="text-white" size={24} />
                  </div>
                  <span className="text-sm text-gray-500">{section.duration}</span>
                </div>
                
                <h4 className="text-lg font-bold text-gray-900 mb-1">
                  Section {section.id}: {section.title}
                </h4>
                <p className="text-sm text-gray-600 mb-3">{section.subtitle}</p>
                <p className="text-sm text-gray-700 mb-4">{section.description}</p>
                
                <div className="flex items-center text-blue-600 group-hover:text-blue-700">
                  <span className="text-sm font-semibold">View Section</span>
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gray-900 text-white py-12">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Safety Culture?</h3>
          <p className="text-lg mb-8 opacity-90">
            Let's build the safest shipyard in the world - together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => window.location.href = '/section-1'}
              className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center"
            >
              Start Presentation
              <ArrowRight className="ml-2" size={20} />
            </button>
            <button className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold">
              Download PDF Version
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;