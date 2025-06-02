import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, AlertTriangle, Users, Clock, DollarSign, TrendingDown, Target, Globe, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const SlideDeck = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const slides = [
    <TitleSlide />,
    <NumbersThatMatterSlide />,
    <CostComparisonSlide />,
    <EngagementGapSlide />,
    <LanguageBarrierSlide />,
    <ProductionPressureSlide />,
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
          <div className="text-gray-400 text-sm">Section 1: The Hidden Cost of Traditional Safety</div>
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
  <div className="h-full flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 p-8">
    <div className="text-center max-w-4xl">
      <AlertTriangle className="w-24 h-24 text-orange-500 mx-auto mb-8 animate-pulse" />
      <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
        The Hidden Cost of Traditional Safety
      </h1>
      <p className="text-2xl text-gray-300 mb-8">
        Why Compliance Isn't Enough for IMI's World-Class Operations
      </p>
      <div className="flex justify-center space-x-8 text-gray-400">
        <div className="text-center">
          <div className="text-3xl font-bold text-orange-500">10,000+</div>
          <div className="text-sm">Workers</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-orange-500">54%</div>
          <div className="text-sm">Engagement Gap</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-orange-500">500:1</div>
          <div className="text-sm">Prevention ROI</div>
        </div>
      </div>
    </div>
  </div>
);

const NumbersThatMatterSlide = () => {
  const [showComparison, setShowComparison] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowComparison(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="h-full flex items-center justify-center bg-gray-900 p-8">
      <div className="max-w-5xl w-full">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
          The Numbers That Matter
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-800 rounded-xl p-8 transform hover:scale-105 transition-transform">
            <div className="text-green-500 mb-4">
              <Users className="w-12 h-12" />
            </div>
            <h3 className="text-xl font-semibold text-gray-300 mb-2">Average Welder</h3>
            <div className="text-4xl font-bold text-white">SAR 4,500</div>
            <div className="text-gray-400">per month</div>
          </div>

          <div className={`bg-gray-800 rounded-xl p-8 transform transition-all duration-500 ${showComparison ? 'scale-105 ring-2 ring-red-500' : 'scale-100'}`}>
            <div className="text-red-500 mb-4">
              <AlertTriangle className="w-12 h-12" />
            </div>
            <h3 className="text-xl font-semibold text-gray-300 mb-2">Hand Injury Cost</h3>
            <div className="text-4xl font-bold text-white">SAR 50,000+</div>
            <div className="text-gray-400">medical + lost time + delays</div>
          </div>

          <div className="bg-gray-800 rounded-xl p-8 transform hover:scale-105 transition-transform">
            <div className="text-blue-500 mb-4">
              <Award className="w-12 h-12" />
            </div>
            <h3 className="text-xl font-semibold text-gray-300 mb-2">Scratchie Reward</h3>
            <div className="text-4xl font-bold text-white">SAR 50-100</div>
            <div className="text-gray-400">instant recognition</div>
          </div>
        </div>

        {showComparison && (
          <div className="mt-12 text-center animate-fade-in">
            <div className="inline-flex items-center space-x-4 bg-orange-500/20 border border-orange-500 rounded-full px-8 py-4">
              <span className="text-2xl text-white">ROI:</span>
              <span className="text-4xl font-bold text-orange-500">500:1</span>
              <span className="text-2xl text-white">Prevention vs Treatment</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const CostComparisonSlide = () => {
  const [animateChart, setAnimateChart] = useState(false);

  useEffect(() => {
    setAnimateChart(true);
  }, []);

  return (
    <div className="h-full flex items-center justify-center bg-gray-900 p-8">
      <div className="max-w-5xl w-full">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
          Real Cost Impact Analysis
        </h2>

        <div className="bg-gray-800 rounded-xl p-8">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <span className="text-gray-300 text-lg">Monthly Scratchie Investment (500 workers)</span>
              <span className="text-2xl font-bold text-green-500">SAR 27,500</span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-gray-300 text-lg">Cost of ONE Lost Time Injury</span>
              <span className="text-2xl font-bold text-red-500">SAR 150,000</span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-gray-300 text-lg">Cost of Project Delay (1 week)</span>
              <span className="text-2xl font-bold text-red-500">SAR 500,000+</span>
            </div>

            <div className="border-t border-gray-700 pt-6 mt-6">
              <div className="flex items-center justify-between">
                <span className="text-gray-300 text-xl font-semibold">Break-even Point</span>
                <span className="text-3xl font-bold text-orange-500">1 Prevented Incident</span>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <div className="h-4 bg-gray-700 rounded-full overflow-hidden">
              <div 
                className={`h-full bg-gradient-to-r from-green-500 to-blue-500 transition-all duration-2000 ${animateChart ? 'w-full' : 'w-0'}`}
                style={{ width: animateChart ? '100%' : '0%' }}
              />
            </div>
            <div className="flex justify-between mt-2 text-sm text-gray-400">
              <span>Prevention Cost</span>
              <span>Incident Cost Savings</span>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <div className="inline-flex items-center space-x-2 text-gray-300">
            <DollarSign className="w-6 h-6 text-green-500" />
            <span className="text-xl">Total First Year Savings Potential: </span>
            <span className="text-3xl font-bold text-green-500">SAR 2M+</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const EngagementGapSlide = () => {
  const [showStats, setShowStats] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowStats(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="h-full flex items-center justify-center bg-gray-900 p-8">
      <div className="max-w-5xl w-full">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
          The Engagement Gap
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className={`transform transition-all duration-500 ${showStats ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
              <div className="bg-gray-800 rounded-xl p-6 border-l-4 border-red-500">
                <div className="text-5xl font-bold text-red-500 mb-2">54%</div>
                <div className="text-xl text-gray-300">Current Employee Engagement</div>
                <div className="text-gray-400 mt-2">Nearly half your workforce isn't fully engaged</div>
              </div>
            </div>

            <div className={`transform transition-all duration-500 delay-200 ${showStats ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
              <div className="bg-gray-800 rounded-xl p-6 border-l-4 border-orange-500">
                <div className="text-3xl font-bold text-orange-500 mb-2">Traditional Approach</div>
                <div className="text-gray-300">❌ Punitive - "Don't do this"</div>
                <div className="text-gray-300">❌ Delayed feedback</div>
                <div className="text-gray-300">❌ Top-down only</div>
              </div>
            </div>

            <div className={`transform transition-all duration-500 delay-300 ${showStats ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
              <div className="bg-gray-800 rounded-xl p-6 border-l-4 border-green-500">
                <div className="text-3xl font-bold text-green-500 mb-2">What Workers Want</div>
                <div className="text-gray-300">✓ Recognition for good work</div>
                <div className="text-gray-300">✓ Instant feedback</div>
                <div className="text-gray-300">✓ Digital engagement</div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="relative">
              <div className="w-64 h-64 rounded-full border-8 border-gray-700 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-bold text-white mb-2">46%</div>
                  <div className="text-xl text-gray-400">Disengaged Workers</div>
                  <div className="text-orange-500 font-semibold mt-2">= Higher Risk</div>
                </div>
              </div>
              <div className={`absolute inset-0 w-64 h-64 rounded-full border-8 border-green-500 ${showStats ? 'animate-pulse' : ''}`} 
                   style={{ clipPath: 'polygon(50% 50%, 50% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 46%)' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const LanguageBarrierSlide = () => {
  const languages = ['English', 'Arabic', 'Hindi', 'Tagalog', 'Bengali', 'Korean'];
  const [activeLanguage, setActiveLanguage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLanguage((prev) => (prev + 1) % languages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-full flex items-center justify-center bg-gray-900 p-8">
      <div className="max-w-5xl w-full">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
          Breaking Language Barriers
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center">
            <Globe className="w-32 h-32 text-blue-500 mx-auto mb-6" />
            <div className="space-y-2">
              {languages.map((lang, index) => (
                <div
                  key={lang}
                  className={`text-2xl transition-all duration-300 ${
                    index === activeLanguage 
                      ? 'text-white font-bold scale-110' 
                      : 'text-gray-600'
                  }`}
                >
                  {lang}
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-800 rounded-xl p-6">
              <h3 className="text-2xl font-bold text-white mb-4">The Challenge</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  Training materials in multiple languages
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  Communication gaps in critical moments
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  Cultural differences in safety perception
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500 rounded-xl p-6">
              <h3 className="text-2xl font-bold text-white mb-4">The Scratchie Solution</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Visual, intuitive interface
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Recognition transcends language
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Multi-language support (Arabic ready)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductionPressureSlide = () => {
  const [showPressure, setShowPressure] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowPressure(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="h-full flex items-center justify-center bg-gray-900 p-8">
      <div className="max-w-5xl w-full">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
          The Production Pressure Reality
        </h2>

        <div className="bg-gray-800 rounded-xl p-8 mb-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="transform hover:scale-105 transition-transform">
              <div className="text-5xl font-bold text-orange-500 mb-2">20</div>
              <div className="text-xl text-gray-300">Rigs to Deliver</div>
            </div>
            <div className="transform hover:scale-105 transition-transform">
              <div className="text-5xl font-bold text-orange-500 mb-2">52</div>
              <div className="text-xl text-gray-300">Ships on Order</div>
            </div>
            <div className="transform hover:scale-105 transition-transform">
              <div className="text-5xl font-bold text-orange-500 mb-2">$17B</div>
              <div className="text-xl text-gray-300">GDP Target</div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className={`bg-red-500/10 border border-red-500 rounded-xl p-6 transform transition-all duration-500 ${showPressure ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
            <h3 className="text-2xl font-bold text-red-500 mb-4 flex items-center">
              <TrendingDown className="w-6 h-6 mr-2" />
              Under Pressure
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li>• Tight delivery schedules</li>
              <li>• Pressure creates shortcuts</li>
              <li>• Quality vs speed tensions</li>
              <li>• Rising incident risk</li>
            </ul>
          </div>

          <div className={`bg-green-500/10 border border-green-500 rounded-xl p-6 transform transition-all duration-500 delay-200 ${showPressure ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
            <h3 className="text-2xl font-bold text-green-500 mb-4 flex items-center">
              <Target className="w-6 h-6 mr-2" />
              Proactive Solution
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li>• Reward safe efficiency</li>
              <li>• Celebrate quality work</li>
              <li>• Real-time positive feedback</li>
              <li>• Build safety habits</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Clock className="w-16 h-16 text-orange-500 mx-auto mb-4 animate-pulse" />
          <p className="text-2xl text-gray-300">
            The time to build a proactive safety culture is <span className="font-bold text-white">NOW</span>
          </p>
        </div>
      </div>
    </div>
  );
};

const SummarySlide = () => {
  return (
    <div className="h-full flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      <div className="max-w-4xl w-full text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
          The Hidden Costs Are Clear
        </h2>

        <div className="space-y-6 text-left max-w-3xl mx-auto">
          <div className="flex items-start space-x-4">
            <div className="bg-red-500 rounded-full p-2 mt-1">
              <DollarSign className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-1">Financial Impact</h3>
              <p className="text-gray-300">One incident costs more than a year of prevention</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="bg-orange-500 rounded-full p-2 mt-1">
              <Users className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-1">Engagement Crisis</h3>
              <p className="text-gray-300">46% of your workforce isn't fully engaged</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="bg-yellow-500 rounded-full p-2 mt-1">
              <Globe className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-1">Cultural Barriers</h3>
              <p className="text-gray-300">Multiple languages and backgrounds need unity</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="bg-blue-500 rounded-full p-2 mt-1">
              <Clock className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-1">Time Pressure</h3>
              <p className="text-gray-300">Production demands create safety risks</p>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">The Solution?</h3>
            <p className="text-xl">
              Transform compliance into culture with behavioral safety that scales
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Add fade-in animation
const style = document.createElement('style');
style.textContent = `
  @keyframes fade-in {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .animate-fade-in {
    animation: fade-in 0.5s ease-out;
  }
`;
document.head.appendChild(style);

export default SlideDeck;