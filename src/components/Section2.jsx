import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Sparkles, TrendingUp, Smartphone, Users, Award, Zap, CheckCircle, Brain, Globe, Rocket, Building, Target, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const SlideDeck = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const slides = [
    <TitleSlide />,
    <WhatIsModernBBSSlide />,
    <EvolutionSlide />,
    <WhyIMINeedsThisSlide />,
    <CleanSlateAdvantageSlide />,
    <ScratchieIntroSlide />,
    <HowItWorksSlide />,
    <ScratchieAdvantagesSlide />,
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
          <div className="text-gray-400 text-sm">Section 2: Introducing Behavioral Safety 2.0</div>
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
  <div className="h-full flex items-center justify-center bg-gradient-to-br from-blue-900 via-gray-900 to-green-900 p-8">
    <div className="text-center max-w-4xl">
      <Sparkles className="w-24 h-24 text-green-500 mx-auto mb-8 animate-pulse" />
      <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
        Behavioral Safety 2.0
      </h1>
      <p className="text-2xl text-gray-300 mb-8">
        From Compliance to Culture
      </p>
      <div className="flex justify-center space-x-8 text-gray-400">
        <div className="text-center">
          <div className="text-3xl font-bold text-green-500">Digital</div>
          <div className="text-sm">Not Paper</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-blue-500">Positive</div>
          <div className="text-sm">Not Punitive</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-purple-500">Real-time</div>
          <div className="text-sm">Not Monthly</div>
        </div>
      </div>
    </div>
  </div>
);

const WhatIsModernBBSSlide = () => {
  const [showFeatures, setShowFeatures] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowFeatures(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="h-full flex items-center justify-center bg-gray-900 p-8">
      <div className="max-w-5xl w-full">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
          What is Modern BBS?
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500 rounded-xl p-6">
              <Brain className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-3">Behavioral Science</h3>
              <p className="text-gray-300">
                Uses positive reinforcement psychology to encourage safe behaviors through 
                immediate rewards and recognition
              </p>
            </div>
            
            <div className={`bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500 rounded-xl p-6 transform transition-all duration-500 ${showFeatures ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
              <Users className="w-12 h-12 text-green-500 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-3">Everyone Participates</h3>
              <p className="text-gray-300">
                Not just for HSE teams - every worker becomes a safety champion through 
                peer observation and recognition
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className={`bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500 rounded-xl p-6 transform transition-all duration-500 delay-200 ${showFeatures ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
              <Zap className="w-12 h-12 text-purple-500 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-3">Real-Time Feedback</h3>
              <p className="text-gray-300">
                Instant recognition when safe behavior happens, not weeks later in a report
              </p>
            </div>
            
            <div className={`bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500 rounded-xl p-6 transform transition-all duration-500 delay-300 ${showFeatures ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
              <TrendingUp className="w-12 h-12 text-orange-500 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-3">Data-Driven Insights</h3>
              <p className="text-gray-300">
                Analytics reveal behavior patterns, predict risks, and measure cultural change
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-2xl text-gray-300">
            It's not about catching people doing things wrong -<br/>
            <span className="text-3xl font-bold text-green-500">it's about celebrating what they do right</span>
          </p>
        </div>
      </div>
    </div>
  );
};

const EvolutionSlide = () => {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev < 3 ? prev + 1 : prev));
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  const steps = [
    { era: "1980s", title: "Compliance Era", desc: "Rules, regulations, punishment", color: "red" },
    { era: "2000s", title: "Systems Era", desc: "ISO standards, procedures, audits", color: "orange" },
    { era: "2010s", title: "Culture Era", desc: "Leadership, engagement, awareness", color: "yellow" },
    { era: "2025", title: "Behavior Era", desc: "Digital, positive, real-time, data-driven", color: "green" }
  ];

  return (
    <div className="h-full flex items-center justify-center bg-gray-900 p-8">
      <div className="max-w-5xl w-full">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
          The Evolution of Safety
        </h2>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-700 transform -translate-y-1/2" />
          
          {/* Progress Line */}
          <div 
            className="absolute top-1/2 left-0 h-1 bg-gradient-to-r from-red-500 via-orange-500 to-green-500 transform -translate-y-1/2 transition-all duration-1000"
            style={{ width: `${(activeStep / 3) * 100}%` }}
          />

          {/* Timeline Steps */}
          <div className="relative grid grid-cols-4 gap-4">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className={`w-12 h-12 mx-auto rounded-full border-4 transition-all duration-500 ${
                  index <= activeStep 
                    ? `bg-${step.color}-500 border-${step.color}-500 scale-110` 
                    : 'bg-gray-800 border-gray-600'
                }`} />
                
                <div className={`mt-8 transition-all duration-500 ${
                  index <= activeStep ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'
                }`}>
                  <div className={`text-lg font-bold ${
                    step.color === 'red' ? 'text-red-500' :
                    step.color === 'orange' ? 'text-orange-500' :
                    step.color === 'yellow' ? 'text-yellow-500' :
                    'text-green-500'
                  }`}>{step.era}</div>
                  <div className="text-xl font-semibold text-white mt-2">{step.title}</div>
                  <div className="text-sm text-gray-400 mt-1">{step.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={`mt-16 text-center transition-all duration-500 ${activeStep === 3 ? 'opacity-100' : 'opacity-0'}`}>
          <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500 rounded-xl p-6 inline-block">
            <p className="text-2xl text-white font-semibold">
              IMI has the opportunity to lead the region into the Behavior Era
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const WhyIMINeedsThisSlide = () => {
  const reasons = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "No Legacy BBS System",
      desc: "Clean slate advantage - build it right from the start",
      color: "blue"
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "Align with Aramco Standards",
      desc: "Saudi Aramco's Zero Harm requires behavior-based approaches",
      color: "green"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Vision 2030 Digital Leader",
      desc: "Support Saudi's digital transformation in industrial safety",
      color: "purple"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Attract & Retain Talent",
      desc: "Young Saudis expect modern, engaging workplaces",
      color: "orange"
    }
  ];

  const [visibleReasons, setVisibleReasons] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleReasons((prev) => (prev < reasons.length ? prev + 1 : prev));
    }, 500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="h-full flex items-center justify-center bg-gray-900 p-8">
      <div className="max-w-5xl w-full">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
          Why IMI Needs This Now
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className={`bg-gray-800 rounded-xl p-6 border-l-4 transform transition-all duration-500 ${
                index < visibleReasons 
                  ? 'translate-x-0 opacity-100 scale-100' 
                  : 'translate-x-10 opacity-0 scale-95'
              } ${
                reason.color === 'blue' ? 'border-blue-500' :
                reason.color === 'green' ? 'border-green-500' :
                reason.color === 'purple' ? 'border-purple-500' :
                'border-orange-500'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className={`mb-4 ${
                reason.color === 'blue' ? 'text-blue-500' :
                reason.color === 'green' ? 'text-green-500' :
                reason.color === 'purple' ? 'text-purple-500' :
                'text-orange-500'
              }`}>
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{reason.title}</h3>
              <p className="text-gray-300">{reason.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-500 to-green-500 rounded-xl p-8 text-center">
          <Rocket className="w-16 h-16 text-white mx-auto mb-4" />
          <p className="text-2xl font-bold text-white mb-2">
            The Perfect Time to Lead
          </p>
          <p className="text-xl text-blue-100">
            As IMI builds its culture from the ground up, embedding modern BBS 
            ensures safety excellence becomes part of your DNA
          </p>
        </div>
      </div>
    </div>
  );
};

const CleanSlateAdvantageSlide = () => {
  const [showComparison, setShowComparison] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowComparison(true), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="h-full flex items-center justify-center bg-gray-900 p-8">
      <div className="max-w-5xl w-full">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
          The Clean Slate Advantage
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className={`bg-red-500/10 border border-red-500 rounded-xl p-8 transform transition-all duration-700 ${showComparison ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
            <h3 className="text-2xl font-bold text-red-500 mb-6">Traditional Shipyards</h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start">
                <span className="text-red-500 mr-3 text-xl">×</span>
                <span>Legacy paper-based systems</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-3 text-xl">×</span>
                <span>Resistance to change</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-3 text-xl">×</span>
                <span>Ingrained punitive culture</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-3 text-xl">×</span>
                <span>Siloed safety departments</span>
              </li>
            </ul>
          </div>

          <div className={`bg-green-500/10 border border-green-500 rounded-xl p-8 transform transition-all duration-700 ${showComparison ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
            <h3 className="text-2xl font-bold text-green-500 mb-6">IMI Opportunity</h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start">
                <span className="text-green-500 mr-3 text-xl">✓</span>
                <span>Digital-first approach</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 text-xl">✓</span>
                <span>Young, adaptable workforce</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 text-xl">✓</span>
                <span>Build positive culture from Day 1</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 text-xl">✓</span>
                <span>Integrated safety = everyone's job</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-gray-800 rounded-xl p-8 inline-block">
            <Shield className="w-16 h-16 text-blue-500 mx-auto mb-4" />
            <p className="text-2xl text-white font-bold mb-2">
              "This is how we do safety at IMI"
            </p>
            <p className="text-xl text-gray-300">
              Make modern BBS your competitive advantage from the start
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const ScratchieIntroSlide = () => {
  const [showFeatures, setShowFeatures] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowFeatures(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="h-full flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 p-8">
      <div className="max-w-5xl w-full">
        <div className="text-center mb-12">
          <Award className="w-24 h-24 text-yellow-500 mx-auto mb-6 animate-pulse" />
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Introducing Scratchie
          </h2>
          <p className="text-2xl text-gray-300">
            The Digital Platform That Makes Safety Winning
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className={`bg-gradient-to-br from-green-500/20 to-blue-500/20 border border-green-500 rounded-xl p-6 text-center transform transition-all duration-500 ${showFeatures ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}>
            <Zap className="w-12 h-12 text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Instant Digital Rewards</h3>
            <p className="text-gray-300">
              Supervisors reward safe behaviors in real-time with a tap
            </p>
          </div>

          <div className={`bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500 rounded-xl p-6 text-center transform transition-all duration-500 delay-100 ${showFeatures ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}>
            <Globe className="w-12 h-12 text-blue-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Works Across Languages</h3>
            <p className="text-gray-300">
              Visual, intuitive interface with Arabic support
            </p>
          </div>

          <div className={`bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500 rounded-xl p-6 text-center transform transition-all duration-500 delay-200 ${showFeatures ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}>
            <TrendingUp className="w-12 h-12 text-purple-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Scales Effortlessly</h3>
            <p className="text-gray-300">
              From 100 to 10,000+ workers without missing a beat
            </p>
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div className="bg-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-4">Proven Results</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                28% improvement in safety attitudes
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                96% worker preference for Scratchie sites
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                Used by McDonald's, Toll Group, major construction
              </li>
            </ul>
          </div>

          <div className="bg-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-4">Built for Industry</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-blue-500 mr-2" />
                Designed for tough work environments
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-blue-500 mr-2" />
                Works with gloves and PPE
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-blue-500 mr-2" />
                Offline capability for remote areas
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const HowItWorksSlide = () => {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const steps = [
    {
      number: "1",
      title: "Spot Safe Behavior",
      desc: "Supervisor sees worker following safety protocols",
      icon: <Users className="w-16 h-16" />,
      color: "blue"
    },
    {
      number: "2",
      title: "Open Scratchie App",
      desc: "Supervisor taps to create instant reward",
      icon: <Smartphone className="w-16 h-16" />,
      color: "green"
    },
    {
      number: "3",
      title: "Worker Receives Recognition",
      desc: "Worker gets notification and 'scratches' to reveal prize",
      icon: <Award className="w-16 h-16" />,
      color: "purple"
    },
    {
      number: "4",
      title: "Culture Transforms",
      desc: "Positive behaviors spread, incidents decrease",
      icon: <TrendingUp className="w-16 h-16" />,
      color: "orange"
    }
  ];

  return (
    <div className="h-full flex items-center justify-center bg-gray-900 p-8">
      <div className="max-w-5xl w-full">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
          How Scratchie Works
        </h2>

        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`relative transform transition-all duration-500 ${
                index === activeStep ? 'scale-105' : 'scale-100'
              }`}
            >
              <div className={`bg-gray-800 rounded-xl p-6 text-center border-2 transition-all duration-500 ${
                index === activeStep 
                  ? `border-${step.color}-500 bg-${step.color}-500/10` 
                  : 'border-gray-700'
              }`}>
                <div className={`mb-4 transition-all duration-500 ${
                  index === activeStep 
                    ? `text-${step.color}-500` 
                    : 'text-gray-500'
                }`}>
                  {step.icon}
                </div>
                <div className={`text-3xl font-bold mb-2 ${
                  index === activeStep ? 'text-white' : 'text-gray-600'
                }`}>
                  {step.number}
                </div>
                <h3 className={`text-lg font-semibold mb-2 ${
                  index === activeStep ? 'text-white' : 'text-gray-400'
                }`}>
                  {step.title}
                </h3>
                <p className={`text-sm ${
                  index === activeStep ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {step.desc}
                </p>
              </div>
              
              {index < steps.length - 1 && (
                <div className={`absolute top-1/2 -right-3 transform -translate-y-1/2 transition-all duration-500 ${
                  index < activeStep ? 'text-green-500' : 'text-gray-600'
                }`}>
                  <ChevronRight className="w-6 h-6" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500 rounded-xl p-8 text-center">
          <p className="text-2xl text-white font-semibold mb-2">
            Simple • Instant • Effective
          </p>
          <p className="text-xl text-gray-300">
            Transform safety culture one recognition at a time
          </p>
        </div>
      </div>
    </div>
  );
};

const ScratchieAdvantagesSlide = () => {
  const advantages = [
    {
      category: "For Workers",
      items: [
        "Feel valued and appreciated",
        "Instant rewards for doing right",
        "Fun, engaging experience",
        "Build safety reputation"
      ],
      icon: <Users className="w-8 h-8" />,
      color: "green"
    },
    {
      category: "For Supervisors",
      items: [
        "Easy one-tap recognition",
        "Build stronger teams",
        "Less time on paperwork",
        "Real-time safety insights"
      ],
      icon: <Shield className="w-8 h-8" />,
      color: "blue"
    },
    {
      category: "For Management",
      items: [
        "Predictive safety analytics",
        "ROI through prevention",
        "Compliance evidence",
        "Cultural transformation"
      ],
      icon: <Building className="w-8 h-8" />,
      color: "purple"
    }
  ];

  const [visibleAdvantages, setVisibleAdvantages] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleAdvantages((prev) => (prev < advantages.length ? prev + 1 : prev));
    }, 600);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="h-full flex items-center justify-center bg-gray-900 p-8">
      <div className="max-w-5xl w-full">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
          The Scratchie Difference
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className={`bg-gray-800 rounded-xl p-6 transform transition-all duration-700 ${
                index < visibleAdvantages 
                  ? 'translate-y-0 opacity-100 scale-100' 
                  : 'translate-y-10 opacity-0 scale-95'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className={`flex items-center mb-4 ${
                advantage.color === 'green' ? 'text-green-500' :
                advantage.color === 'blue' ? 'text-blue-500' :
                'text-purple-500'
              }`}>
                {advantage.icon}
                <h3 className="text-xl font-bold text-white ml-3">{advantage.category}</h3>
              </div>
              <ul className="space-y-2">
                {advantage.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start text-gray-300">
                    <CheckCircle className={`w-5 h-5 mr-2 mt-0.5 flex-shrink-0 ${
                      advantage.color === 'green' ? 'text-green-500' :
                      advantage.color === 'blue' ? 'text-blue-500' :
                      'text-purple-500'
                    }`} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500 rounded-xl p-6">
            <Target className="w-8 h-8 text-orange-500 mb-3" />
            <h3 className="text-xl font-bold text-white mb-2">Perfectly Aligned</h3>
            <p className="text-gray-300">
              Supports Saudi Aramco's Zero Harm vision and IMI's world-class safety goals
            </p>
          </div>

          <div className="bg-gradient-to-r from-blue-500/20 to-green-500/20 border border-blue-500 rounded-xl p-6">
            <Rocket className="w-8 h-8 text-blue-500 mb-3" />
            <h3 className="text-xl font-bold text-white mb-2">Ready to Scale</h3>
            <p className="text-gray-300">
              Start with shipbuilding, expand across all IMI operations seamlessly
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const SummarySlide = () => {
  return (
    <div className="h-full flex items-center justify-center bg-gradient-to-br from-blue-900 via-gray-900 to-green-900 p-8">
      <div className="max-w-4xl w-full text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
          From Compliance to Culture
        </h2>

        <div className="bg-gray-800/50 backdrop-blur rounded-xl p-8 mb-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <Brain className="w-12 h-12 text-blue-500 mx-auto mb-3" />
              <h3 className="text-xl font-bold text-white mb-2">Modern BBS</h3>
              <p className="text-gray-300">Positive, digital, real-time</p>
            </div>
            <div>
              <Building className="w-12 h-12 text-green-500 mx-auto mb-3" />
              <h3 className="text-xl font-bold text-white mb-2">Perfect for IMI</h3>
              <p className="text-gray-300">Clean slate advantage</p>
            </div>
            <div>
              <Award className="w-12 h-12 text-purple-500 mx-auto mb-3" />
              <h3 className="text-xl font-bold text-white mb-2">Scratchie Platform</h3>
              <p className="text-gray-300">Proven, scalable, effective</p>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8">
            <p className="text-2xl text-gray-300 mb-4">
              Transform 10,000+ workers into safety champions
            </p>
            <p className="text-3xl font-bold text-white">
              One recognition at a time
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-xl p-6 text-white">
          <p className="text-2xl font-bold mb-2">Ready to Lead the Industry?</p>
          <p className="text-xl">Let's see how Scratchie fits IMI's operations →</p>
        </div>
      </div>
    </div>
  );
};

// Add keyframe animations
const style = document.createElement('style');
style.textContent = `
  @keyframes fade-in {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes scale-in {
    from { transform: scale(0.8); opacity: 0; }
    to { transform: scale(1); opacity: 1; }
  }
  .animate-fade-in {
    animation: fade-in 0.8s ease-out;
  }
  .animate-scale-in {
    animation: scale-in 0.5s ease-out;
  }
`;
document.head.appendChild(style);

export default SlideDeck;