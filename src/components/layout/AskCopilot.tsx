import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, User } from 'lucide-react';

export function AskCopilot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hi there! I am Nagendra\'s AI Assistant. How can I help you learn more about his experience or projects?' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!inputValue.trim()) return;

    // Add user message
    const userMsg = { role: 'user', content: inputValue };
    setMessages(prev => [...prev, userMsg]);
    setInputValue('');

    // Simulate AI response based on simple heuristics
    setTimeout(() => {
      let aiResponse = "I'm a demo version of Nagendra's assistant! To ask complex questions, please reach out directly.";
      const lowerInput = userMsg.content.toLowerCase();
      
      if (lowerInput.includes('experience') || lowerInput.includes('work')) {
        aiResponse = "Nagendra has 3.4+ years of experience as an Azure AI Engineer & Copilot Developer at Cognizant. He specializes in Generative AI, RAG systems, and data pipelines.";
      } else if (lowerInput.includes('project') || lowerInput.includes('portfolio')) {
        aiResponse = "Some of his notable projects include the Enterprise Knowledge Copilot, Customer Support Copilot, and Business Insights (NL to SQL) tool. You can find more detail in the Projects section!";
      } else if (lowerInput.includes('skill') || lowerInput.includes('tech')) {
        aiResponse = "His key skills include Azure OpenAI, AI Search, Python, SQL, Azure Data Factory, Databricks, and LangChain.";
      } else if (lowerInput.includes('contact') || lowerInput.includes('hire')) {
        aiResponse = "You can reach Nagendra at nagendrababub16@gmail.com, or scroll to the Contact section to send him a direct message!";
      }

      setMessages(prev => [...prev, { role: 'assistant', content: aiResponse }]);
    }, 1000);
  };

  return (
    <>
      {/* Floating Action Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 w-14 h-14 bg-primary-600 hover:bg-primary-700 text-white rounded-full flex items-center justify-center shadow-2xl z-50 transition-colors ${
          isOpen ? 'hidden' : 'flex'
        }`}
        aria-label="Ask AI Assistant"
      >
        <MessageSquare className="w-6 h-6" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-6 right-6 w-80 sm:w-96 h-[500px] z-50 glass rounded-2xl flex flex-col overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800"
          >
            {/* Header */}
            <div className="bg-primary-600 text-white p-4 flex justify-between items-center shrink-0">
              <div className="flex items-center space-x-2">
                <Bot className="w-6 h-6" />
                <div>
                  <h3 className="font-bold text-sm">Portfolio Copilot</h3>
                  <p className="text-xs text-primary-200">Powered by Demo AI</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-primary-200 hover:text-white transition-colors"
                aria-label="Close Chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50 dark:bg-slate-900/90">
              {messages.map((msg, idx) => (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  key={idx} 
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex items-end space-x-2 max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse space-x-reverse' : 'flex-row'}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                      msg.role === 'user' ? 'bg-primary-100 text-primary-700' : 'bg-green-100 text-green-700'
                    }`}>
                      {msg.role === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                    </div>
                    <div className={`p-3 rounded-2xl text-sm shadow-sm ${
                      msg.role === 'user' 
                        ? 'bg-primary-600 text-white rounded-br-none' 
                        : 'bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 rounded-bl-none border border-slate-100 dark:border-slate-700'
                    }`}>
                      {msg.content}
                    </div>
                  </div>
                </motion.div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 shrink-0">
              <form 
                onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                className="flex items-center relative"
              >
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ask about my skills..."
                  className="w-full bg-slate-100 dark:bg-slate-800 border-none rounded-full py-2.5 pl-4 pr-12 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim()}
                  className="absolute right-2 p-1.5 bg-primary-600 text-white rounded-full hover:bg-primary-700 disabled:opacity-50 disabled:hover:bg-primary-600 transition-colors"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
