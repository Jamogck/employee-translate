import React, { useState } from 'react';
import { MessageSquare, Sparkles } from 'lucide-react';
import './index.css'

const PassiveAggressiveTranslator = () => {
  const [input, setInput] = useState('');
  const [translation, setTranslation] = useState('');
  const [isThinking, setIsThinking] = useState(false);

  // Keyword patterns and their associated responses
  const patterns = [
    {
      keywords: ['meeting', 'sync', 'touch base', 'catch up', 'discuss'],
      responses: [
        "Ah yes, another wonderful opportunity to waste an hour of my life that I'll never get back.",
        "Can't wait to sit through another meeting that could've been an email!",
        "Oh great, more time to pretend I'm not playing Candy Crush under the table."
      ]
    },
    {
      keywords: ['deadline', 'asap', 'urgent', 'priority', 'soon'],
      responses: [
        "Your poor planning is about to become my night-and-weekend emergency.",
        "I assume you mean 'drop everything else you're doing because I didn't plan ahead.'",
        "Funny how everything is urgent except my requests for a raise."
      ]
    },
    {
      keywords: ['help', 'assist', 'support', 'guidance'],
      responses: [
        "Wonderful, another chance to do someone else's job while they take credit for it.",
        "I see you've mistaken me for someone who isn't already drowning in work.",
        "Oh, you need my expertise now? How convenient."
      ]
    },
    {
      keywords: ['team', 'collaborate', 'together', 'group'],
      responses: [
        "Ah yes, 'team' - where I do all the work and everyone gets the credit.",
        "Can't wait to carry the entire project while pretending we're all contributing equally!",
        "Nothing like forced collaboration to ruin a perfectly productive day."
      ]
    },
    {
      keywords: ['thanks', 'thank you', 'appreciate', 'grateful'],
      responses: [
        "Your empty gratitude has been noted and filed appropriately (in the trash).",
        "I'll add this thanks to my collection of meaningless corporate pleasantries.",
        "Oh, verbal payment! Just what I needed instead of actual recognition or compensation."
      ]
    }
  ];

  // Base responses for when no patterns match
  const baseResponses = [
    "I'm maintaining my professional smile while dying inside.",
    "What a delightfully corporate way to express complete despair.",
    "Translation: I've lost all hope and am running purely on caffeine and spite.",
    "That's a creative way to say 'I hate everything about this situation.'",
    "Ah, the sweet sound of suppressed rage wrapped in professional courtesy."
  ];

  const generateTranslation = (text) => {
    // Simulate "AI thinking" with a slight delay
    setIsThinking(true);
    
    setTimeout(() => {
      const lowercaseInput = text.toLowerCase();
      
      // Check for exact matches first
      const exactMatches = {
        'good morning': "Oh look who finally decided to show up to work today!",
        'happy monday': "I've been dreading this day since last Monday ended.",
        'per my last email': "Are you illiterate or just willfully ignorant? I literally just explained this."
      };

      if (exactMatches[lowercaseInput]) {
        setTranslation(exactMatches[lowercaseInput]);
        setIsThinking(false);
        return;
      }

      // Look for pattern matches
      for (const pattern of patterns) {
        if (pattern.keywords.some(keyword => lowercaseInput.includes(keyword))) {
          const response = pattern.responses[Math.floor(Math.random() * pattern.responses.length)];
          setTranslation(response);
          setIsThinking(false);
          return;
        }
      }

      // Default to random base response if no patterns match
      setTranslation(baseResponses[Math.floor(Math.random() * baseResponses.length)]);
      setIsThinking(false);
    }, 500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="w-full max-w-3xl mx-auto p-6 space-y-6 bg-white rounded-xl shadow-lg">
        <div className="flex items-center space-x-2 mb-4">
          <MessageSquare className="w-6 h-6 text-blue-500" />
          <h1 className="text-2xl font-bold text-gray-800">Employee Translate</h1>
          <Sparkles className="w-5 h-5 text-yellow-500" />
        </div>
        
        <div className="grid gap-4">
          <div className="relative">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Enter any workplace phrase..."
              className="w-full h-32 p-4 border rounded-lg bg-white text-gray-800 resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          
          <button
            onClick={() => generateTranslation(input)}
            disabled={isThinking}
            className={`w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center space-x-2 ${isThinking ? 'opacity-75' : ''}`}
          >
            {isThinking ? (
              <>
                <span className="animate-pulse">Analyzing corporate speak...</span>
              </>
            ) : (
              'Translate'
            )}
          </button>
          
          <div className="relative">
            <textarea
              value={translation}
              readOnly
              placeholder="Your passive-aggressive translation will appear here..."
              className="w-full h-32 p-4 border rounded-lg bg-gray-50 text-gray-800 resize-none"
            />
          </div>
        </div>
        
        <p className="text-sm text-gray-500 text-center italic">
        <a target="_blank" href="https://jordan-v1u1riy0.scoreapp.com/">Find out how your team is really doing &rarr;</a>
        </p>
      </div>
    </div>
  );
};

export default PassiveAggressiveTranslator;