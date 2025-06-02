import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, TrendingUp, BarChart3, DollarSign, Users, Award, Target, Calendar, AlertTriangle, CheckCircle, Building, ArrowUp, ArrowDown, Activity, PieChart } from 'lucide-react';
import { Link } from 'react-router-dom';

const SlideDeck = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const slides = [
    <TitleSlide />,
    <MeasurementFrameworkSlide />,
    <LeadingIndicatorsSlide />,
    <LaggingIndicatorsSlide />,
    <CostSavingsSlide />,
    <ProductivityImpactSlide />,
    <RetentionROISlide />,
    <ClientResultsSlide />,
    <ROICalculatorSlide />,
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
          <div className="text-gray-400 text-sm">Section 4: Success Metrics & ROI</div>
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
  <div className="h-full flex items-center justify-center bg-gradient-to-br from-green-900 via-blue-900 to-gray-900 p-8">
    <div className="text-center max-w-4xl">
      <BarChart3 className="w-24 h-24 text-green-500 mx-auto mb-8 animate-pulse" />
      <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
        Measuring What Matters
      </h1>
      <p className="text-2xl text-gray-300 mb-8">
        Success Metrics & Return on Investment
      </p>
      <div className="flex justify-center space-x-8 text-gray-400">
        <div className="text-center">
          <div className="text-3xl font-bold text-green-500">40%</div>
          <div className="text-sm">TRIR Reduction</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-blue-500">SAR 2M+</div>
          <div className="text-sm">Year 1 Savings</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-purple-500">8:1</div>
          <div className="text-sm">ROI Ratio</div>
        </div>
      </div>
    </div>
  </div>
);

const MeasurementFrameworkSlide = () => {
  const [showFramework, setShowFramework] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowFramework(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="h-full flex items-center justify-center bg-gray-900 p-8">
      <div className="max-w-5xl w-full">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
          Comprehensive Measurement Framework
        </h2>

        <div className={`grid md:grid-cols-2 gap-8 transition-all duration-700 ${showFramework ? 'opacity-100' : 'opacity-0'}`}>
          <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500 rounded-xl p-8">
            <div className="flex items-center mb-4">
              <Activity className="w-8 h-8 text-blue-500 mr-3" />
              <h3 className="text-2xl font-bold text-white">Leading Indicators</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Predictive metrics that show future safety performance
            </p>
            <ul className="space-y-2 text-gray-300">
              <li>• Daily active users</li>
              <li>• Safety observations</li>
              <li>• Positive behaviors recognized</li>
              <li>• Hazards identified proactively</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-green-500/20 to-blue-500/20 border border-green-500 rounded-xl p-8">
            <div className="flex items-center mb-4">
              <BarChart3 className="w-8 h-8 text-green-500 mr-3" />
              <h3 className="text-2xl font-bold text-white">Lagging Indicators</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Historical metrics that confirm safety improvements
            </p>
            <ul className="space-y-2 text-gray-300">
              <li>• TRIR reduction</li>
              <li>• Lost Time Injuries</li>
              <li>• Near-miss reporting rates</li>
              <li>• Days without incidents</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 bg-gray-800 rounded-xl p-6 text-center">
          <Target className="w-12 h-12 text-orange-500 mx-auto mb-4" />
          <p className="text-xl text-white font-semibold">
            Real-time dashboards provide instant visibility into both indicator types
          </p>
        </div>
      </div>
    </div>
  );
};

const LeadingIndicatorsSlide = () => {
  const [animateCharts, setAnimateCharts] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimateCharts(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const indicators = [
    { name: "Daily Active Users", current: "80%+", target: "Target", trend: "up", color: "green" },
    { name: "Safety Observations", current: "10x", baseline: "Baseline", trend: "up", color: "blue" },
    { name: "Behaviors Recognized", current: "1,000+", frequency: "Per Week", trend: "up", color: "purple" },
    { name: "Hazards Identified", current: "5x", baseline: "Baseline", trend: "up", color: "orange" }
  ];

  return (
    <div className="h-full flex items-center justify-center bg-gray-900 p-8">
      <div className="max-w-5xl w-full">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
          Leading Indicators Drive Prevention
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {indicators.map((indicator, index) => (
            <div
              key={index}
              className={`bg-gray-800 rounded-xl p-6 transform transition-all duration-500 ${
                animateCharts ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-bold text-white">{indicator.name}</h3>
                <ArrowUp className={`w-5 h-5 text-${indicator.color}-500`} />
              </div>
              
              <div className={`text-4xl font-bold text-${indicator.color}-500 mb-2`}>
                {indicator.current}
              </div>
              
              <div className="text-sm text-gray-400">
                {indicator.target || indicator.baseline || indicator.frequency}
              </div>
              
              <div className="mt-4 h-2 bg-gray-700 rounded-full overflow-hidden">
                <div 
                  className={`h-full bg-${indicator.color}-500 transition-all duration-1000`}
                  style={{ 
                    width: animateCharts ? '85%' : '0%',
                    transitionDelay: `${index * 150 + 500}ms`
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500 rounded-xl p-8">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <Users className="w-8 h-8 text-green-500 mx-auto mb-2" />
              <p className="text-lg text-white font-semibold">High Engagement</p>
              <p className="text-gray-400">Workers check app daily</p>
            </div>
            <div>
              <Award className="w-8 h-8 text-blue-500 mx-auto mb-2" />
              <p className="text-lg text-white font-semibold">Peer Recognition</p>
              <p className="text-gray-400">Culture of appreciation</p>
            </div>
            <div>
              <AlertTriangle className="w-8 h-8 text-purple-500 mx-auto mb-2" />
              <p className="text-lg text-white font-semibold">Proactive Reporting</p>
              <p className="text-gray-400">Issues caught early</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const LaggingIndicatorsSlide = () => {
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowResults(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="h-full flex items-center justify-center bg-gray-900 p-8">
      <div className="max-w-5xl w-full">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
          Lagging Indicators Confirm Success
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className={`bg-gray-800 rounded-xl p-8 transform transition-all duration-700 ${showResults ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
            <h3 className="text-2xl font-bold text-white mb-6">Year 1 Safety Improvements</h3>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-300">TRIR (Total Recordable Incident Rate)</span>
                <div className="flex items-center">
                  <ArrowDown className="w-5 h-5 text-green-500 mr-2" />
                  <span className="text-2xl font-bold text-green-500">40%</span>
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Lost Time Injuries</span>
                <div className="flex items-center">
                  <ArrowDown className="w-5 h-5 text-green-500 mr-2" />
                  <span className="text-2xl font-bold text-green-500">50%</span>
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Near-Miss Reporting</span>
                <div className="flex items-center">
                  <ArrowUp className="w-5 h-5 text-blue-500 mr-2" />
                  <span className="text-2xl font-bold text-blue-500">300%</span>
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Days Without Incident</span>
                <div className="flex items-center">
                  <ArrowUp className="w-5 h-5 text-purple-500 mr-2" />
                  <span className="text-2xl font-bold text-purple-500">2x</span>
                </div>
              </div>
            </div>
          </div>

          <div className={`transform transition-all duration-700 ${showResults ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
            <div className="bg-gradient-to-br from-blue-500/20 to-green-500/20 border border-blue-500 rounded-xl p-6 mb-4">
              <h4 className="text-xl font-bold text-white mb-3">Why Near-Miss Reporting Goes Up</h4>
              <p className="text-gray-300">
                Increased near-miss reporting is a <span className="text-green-500 font-semibold">positive sign</span> - 
                it means workers feel safe to report issues without fear of punishment. 
                This leads to prevention of major incidents.
              </p>
            </div>

            <div className="bg-gray-800 rounded-xl p-6">
              <h4 className="text-xl font-bold text-white mb-3">Benchmark Comparison</h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-400">Industry Average TRIR</span>
                  <span className="text-gray-300">3.2</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">IMI Current</span>
                  <span className="text-orange-500">2.8</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">IMI with Scratchie</span>
                  <span className="text-green-500 font-bold">1.7</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-xl p-6 text-white inline-block">
            <p className="text-2xl font-bold">
              Move from Average to Industry Leader in 12 Months
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const CostSavingsSlide = () => {
  const [animateNumbers, setAnimateNumbers] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimateNumbers(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="h-full flex items-center justify-center bg-gray-900 p-8">
      <div className="max-w-5xl w-full">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
          Direct Cost Savings Analysis
        </h2>

        <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500 rounded-xl p-8 mb-8">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Incident Cost Breakdown</h3>
          
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="text-center">
              <div className={`text-3xl font-bold text-red-500 transition-all duration-1000 ${animateNumbers ? 'opacity-100' : 'opacity-0'}`}>
                SAR 50,000
              </div>
              <p className="text-gray-300 mt-2">Minor Injury Cost</p>
              <p className="text-sm text-gray-500">(Medical + 3 days lost)</p>
            </div>
            
            <div className="text-center">
              <div className={`text-3xl font-bold text-red-500 transition-all duration-1000 delay-200 ${animateNumbers ? 'opacity-100' : 'opacity-0'}`}>
                SAR 150,000
              </div>
              <p className="text-gray-300 mt-2">Serious Injury Cost</p>
              <p className="text-sm text-gray-500">(Medical + 2 weeks lost)</p>
            </div>
            
            <div className="text-center">
              <div className={`text-3xl font-bold text-red-500 transition-all duration-1000 delay-300 ${animateNumbers ? 'opacity-100' : 'opacity-0'}`}>
                SAR 500,000+
              </div>
              <p className="text-gray-300 mt-2">Major Incident Cost</p>
              <p className="text-sm text-gray-500">(Medical + delays + penalties)</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-800 rounded-xl p-6">
            <h4 className="text-xl font-bold text-white mb-4">Prevention Investment</h4>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-300">Scratchie Platform (Annual)</span>
                <span className="text-blue-500">SAR 300,000</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Rewards Budget (Annual)</span>
                <span className="text-blue-500">SAR 600,000</span>
              </div>
              <div className="border-t border-gray-700 pt-3">
                <div className="flex justify-between">
                  <span className="text-gray-300 font-semibold">Total Investment</span>
                  <span className="text-blue-500 font-bold text-xl">SAR 900,000</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-xl p-6">
            <h4 className="text-xl font-bold text-white mb-4">Savings from Prevention</h4>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-300">Prevented Minor Injuries (20)</span>
                <span className="text-green-500">SAR 1,000,000</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Prevented Serious Injuries (5)</span>
                <span className="text-green-500">SAR 750,000</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Prevented Major Incident (1)</span>
                <span className="text-green-500">SAR 500,000</span>
              </div>
              <div className="border-t border-gray-700 pt-3">
                <div className="flex justify-between">
                  <span className="text-gray-300 font-semibold">Total Savings</span>
                  <span className="text-green-500 font-bold text-xl">SAR 2,250,000</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-xl p-6 text-white inline-block">
            <DollarSign className="w-12 h-12 mx-auto mb-2" />
            <p className="text-3xl font-bold mb-1">SAR 1.35M Net Savings</p>
            <p className="text-xl">150% Return on Investment - Year 1</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductivityImpactSlide = () => {
  const [showMetrics, setShowMetrics] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowMetrics(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="h-full flex items-center justify-center bg-gray-900 p-8">
      <div className="max-w-5xl w-full">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
          Productivity & Efficiency Gains
        </h2>

        <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500 rounded-xl p-8 mb-8">
          <div className="text-center mb-6">
            <TrendingUp className="w-16 h-16 text-purple-500 mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-white">5% Productivity Improvement</h3>
            <p className="text-gray-300">From reduced rework, fewer disruptions, and higher morale</p>
          </div>

          <div className={`grid md:grid-cols-3 gap-6 transition-all duration-700 ${showMetrics ? 'opacity-100' : 'opacity-0'}`}>
            <div className="bg-gray-800 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-green-500">-30%</div>
              <p className="text-gray-400 text-sm">Rework from errors</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-blue-500">+15%</div>
              <p className="text-gray-400 text-sm">Team efficiency</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-purple-500">2 hrs</div>
              <p className="text-gray-400 text-sm">Saved per supervisor/week</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-800 rounded-xl p-6">
            <h4 className="text-xl font-bold text-white mb-4">Time Savings</h4>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                <span>Less time on incident investigations</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                <span>Reduced administrative burden</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                <span>Fewer work stoppages</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                <span>Streamlined safety meetings</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-800 rounded-xl p-6">
            <h4 className="text-xl font-bold text-white mb-4">Quality Improvements</h4>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-blue-500 mr-2 mt-0.5" />
                <span>Better focus leads to fewer errors</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-blue-500 mr-2 mt-0.5" />
                <span>Pride in work increases quality</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-blue-500 mr-2 mt-0.5" />
                <span>Team collaboration improves</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-blue-500 mr-2 mt-0.5" />
                <span>On-time delivery increases</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 bg-orange-500/20 border border-orange-500 rounded-xl p-6 text-center">
          <p className="text-xl text-white">
            <span className="font-bold">5% productivity gain on SAR 17B GDP target = </span>
            <span className="text-3xl font-bold text-orange-500">SAR 850M potential impact</span>
          </p>
        </div>
      </div>
    </div>
  );
};

const RetentionROISlide = () => {
  const [showRetention, setShowRetention] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowRetention(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const retentionCosts = {
    turnover: 15,
    replacementCost: 25000,
    trainingTime: 3,
    productivityLoss: 40
  };

  return (
    <div className="h-full flex items-center justify-center bg-gray-900 p-8">
      <div className="max-w-5xl w-full">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
          Retention & Reputation Impact
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className={`bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500 rounded-xl p-6 transform transition-all duration-700 ${showRetention ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
            <Users className="w-12 h-12 text-blue-500 mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">Employee Retention</h3>
            
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-300">Current Turnover Rate</span>
                  <span className="text-orange-500 font-bold">{retentionCosts.turnover}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">With Scratchie</span>
                  <span className="text-green-500 font-bold">12%</span>
                </div>
              </div>
              
              <div className="border-t border-gray-700 pt-3">
                <p className="text-sm text-gray-400 mb-2">Cost per replacement: SAR {retentionCosts.replacementCost.toLocaleString()}</p>
                <p className="text-lg text-white font-semibold">
                  Annual Savings: <span className="text-green-500">SAR 750,000</span>
                </p>
              </div>
            </div>
          </div>

          <div className={`bg-gradient-to-br from-green-500/20 to-blue-500/20 border border-green-500 rounded-xl p-6 transform transition-all duration-700 delay-200 ${showRetention ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
            <Award className="w-12 h-12 text-green-500 mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">Employer Reputation</h3>
            
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                <span>"Best Place to Work" recognition</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                <span>Easier recruitment of top talent</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                <span>Client confidence in safety standards</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                <span>Aramco preferred contractor status</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-800 rounded-xl p-8">
          <h3 className="text-xl font-bold text-white mb-4 text-center">The Multiplier Effect</h3>
          
          <div className="grid md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-500 mb-1">96%</div>
              <p className="text-sm text-gray-400">Workers prefer Scratchie sites</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-500 mb-1">25%</div>
              <p className="text-sm text-gray-400">Faster hiring</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-500 mb-1">2x</div>
              <p className="text-sm text-gray-400">Employee referrals</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-500 mb-1">Top 3</div>
              <p className="text-sm text-gray-400">Regional employer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ClientResultsSlide = () => {
  const [activeCase, setActiveCase] = useState(0);

  const cases = [
    {
      company: "Taylor Construction",
      industry: "Construction",
      stat: "96%",
      metric: "Worker Preference",
      quote: "Workers actively request to be assigned to Scratchie-enabled sites",
      icon: <Building className="w-8 h-8" />
    },
    {
      company: "McDonald's Franchises",
      industry: "Quick Service Restaurant",
      stat: "28%",
      metric: "Safety Attitude Improvement",
      quote: "Crew members are competing to be safety champions",
      icon: <Users className="w-8 h-8" />
    },
    {
      company: "Toll Group",
      industry: "Logistics",
      stat: "45%",
      metric: "Incident Reduction",
      quote: "Our drivers love it - safety training is now a positive challenge",
      icon: <TrendingUp className="w-8 h-8" />
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCase((prev) => (prev + 1) % cases.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-full flex items-center justify-center bg-gray-900 p-8">
      <div className="max-w-5xl w-full">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
          Proven Results Across Industries
        </h2>

        <div className="relative h-96">
          {cases.map((caseStudy, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-500 ${
                index === activeCase 
                  ? 'opacity-100 transform scale-100' 
                  : 'opacity-0 transform scale-95 pointer-events-none'
              }`}
            >
              <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500 rounded-xl p-8 h-full flex flex-col justify-center">
                <div className="text-center mb-6">
                  <div className="text-blue-500 mb-4">{caseStudy.icon}</div>
                  <h3 className="text-3xl font-bold text-white mb-2">{caseStudy.company}</h3>
                  <p className="text-gray-400">{caseStudy.industry}</p>
                </div>
                
                <div className="text-center mb-6">
                  <div className="text-6xl font-bold text-green-500 mb-2">{caseStudy.stat}</div>
                  <p className="text-xl text-gray-300">{caseStudy.metric}</p>
                </div>
                
                <div className="text-center">
                  <p className="text-xl text-gray-300 italic">"{caseStudy.quote}"</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center space-x-2 mt-8">
          {cases.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveCase(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === activeCase ? 'bg-blue-500 w-8' : 'bg-gray-600'
              }`}
            />
          ))}
        </div>

        <div className="mt-8 bg-gray-800 rounded-xl p-6 text-center">
          <p className="text-xl text-white">
            These results translate directly to IMI's heavy industry environment
          </p>
        </div>
      </div>
    </div>
  );
};

const ROICalculatorSlide = () => {
  const [showCalculation, setShowCalculation] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowCalculation(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="h-full flex items-center justify-center bg-gray-900 p-8">
      <div className="max-w-5xl w-full">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
          Total ROI Calculation
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className={`transform transition-all duration-700 ${showCalculation ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
            <div className="bg-red-500/10 border border-red-500 rounded-xl p-6 mb-4">
              <h3 className="text-xl font-bold text-white mb-4">Total Investment (Year 1)</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-300">Platform License</span>
                  <span className="text-red-500">SAR 300,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Reward Budget</span>
                  <span className="text-red-500">SAR 600,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Implementation</span>
                  <span className="text-red-500">SAR 100,000</span>
                </div>
                <div className="border-t border-gray-700 pt-2">
                  <div className="flex justify-between">
                    <span className="text-white font-bold">Total</span>
                    <span className="text-red-500 font-bold text-xl">SAR 1,000,000</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={`transform transition-all duration-700 ${showCalculation ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
            <div className="bg-green-500/10 border border-green-500 rounded-xl p-6 mb-4">
              <h3 className="text-xl font-bold text-white mb-4">Total Returns (Year 1)</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-300">Incident Prevention</span>
                  <span className="text-green-500">SAR 2,250,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Productivity Gains</span>
                  <span className="text-green-500">SAR 4,500,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Retention Savings</span>
                  <span className="text-green-500">SAR 750,000</span>
                </div>
                <div className="border-t border-gray-700 pt-2">
                  <div className="flex justify-between">
                    <span className="text-white font-bold">Total</span>
                    <span className="text-green-500 font-bold text-xl">SAR 7,500,000</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl p-8 text-center text-white">
          <PieChart className="w-16 h-16 mx-auto mb-4" />
          <div className="text-5xl font-bold mb-2">7.5:1 ROI</div>
          <p className="text-2xl mb-4">SAR 6.5M Net Benefit in Year 1</p>
          <div className="grid md:grid-cols-3 gap-4 mt-6 text-sm">
            <div>
              <div className="font-bold">Payback Period</div>
              <div>6 weeks</div>
            </div>
            <div>
              <div className="font-bold">5-Year Value</div>
              <div>SAR 35M+</div>
            </div>
            <div>
              <div className="font-bold">Cost per Worker</div>
              <div>SAR 100/year</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SummarySlide = () => {
  return (
    <div className="h-full flex items-center justify-center bg-gradient-to-br from-green-900 via-blue-900 to-gray-900 p-8">
      <div className="max-w-4xl w-full text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
          Measurable Success, Guaranteed
        </h2>

        <div className="bg-gray-800/80 backdrop-blur rounded-xl p-8 mb-8">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <Activity className="w-12 h-12 text-blue-500 mx-auto mb-3" />
              <h3 className="text-xl font-bold text-white mb-3">Leading Indicators</h3>
              <ul className="text-gray-300 space-y-1 text-left">
                <li>✓ 80%+ daily engagement</li>
                <li>✓ 10x safety observations</li>
                <li>✓ 1,000+ weekly recognitions</li>
                <li>✓ 5x hazard identification</li>
              </ul>
            </div>
            <div>
              <BarChart3 className="w-12 h-12 text-green-500 mx-auto mb-3" />
              <h3 className="text-xl font-bold text-white mb-3">Lagging Indicators</h3>
              <ul className="text-gray-300 space-y-1 text-left">
                <li>✓ 40% TRIR reduction</li>
                <li>✓ 50% fewer LTIs</li>
                <li>✓ 2x days without incidents</li>
                <li>✓ Industry leader status</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8">
            <DollarSign className="w-12 h-12 text-green-500 mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-white mb-3">Financial Impact</h3>
            <div className="text-3xl font-bold text-green-500 mb-2">7.5:1 ROI</div>
            <p className="text-xl text-gray-300">SAR 6.5M net benefit in Year 1</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-xl p-6 text-white">
          <p className="text-2xl font-bold mb-2">Success is Measurable</p>
          <p className="text-xl">Let's implement your safety transformation →</p>
        </div>
      </div>
    </div>
  );
};

export default SlideDeck;