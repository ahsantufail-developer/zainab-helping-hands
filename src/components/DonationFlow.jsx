import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { calculateImpact } from '../utils/impactCalculator';
import QRPayment from './QRPayment';
import SuccessState from './SuccessState';
import { Check } from 'lucide-react';

const CAUSES = [
  {
    id: 'food',
    badge: '🌾 Food Program',
    name: 'Monthly Rashan Package',
    impact: 'Feeds 1 family for 30 days',
    counter: '312 packages this month',
    image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'water',
    badge: '💧 Water Program',
    name: 'Clean Water Installation',
    impact: 'Serves a community for years',
    counter: '87 installations complete',
    image: 'https://images.unsplash.com/photo-1541252260730-0412e8e2108e?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'family',
    badge: '🤲 Family Care',
    name: 'Widow & Orphan Support',
    impact: 'Monthly care for a family',
    counter: 'Active ongoing cases',
    image: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=800&auto=format&fit=crop&q=80'
  }
];

const PRESETS = [500, 1500, 5000, 10000];

export default function DonationFlow() {
  const [step, setStep] = useState(0);
  const [causeSelected, setCauseSelected] = useState(null);
  const [amount, setAmount] = useState('');
  const [isMonthly, setIsMonthly] = useState(false);
  const [details, setDetails] = useState({ name: '', phone: '', email: '', message: '' });

  const nextStep = () => setStep(prev => prev + 1);

  const renderStepIndicator = () => {
    return (
      <div className="flex items-center justify-center mb-12 relative w-full max-w-md mx-auto">
        <div className="absolute left-0 right-0 h-[2px] bg-borderBase top-1/2 -translate-y-1/2 z-0"></div>
        {[0, 1, 2, 3].map(i => (
          <div key={i} className="flex-1 flex justify-center relative z-10">
            <motion.div
              className={`w-4 h-4 rounded-full border-2 transition-colors duration-300
                ${step === i ? 'bg-gold-500 border-gold-500 scale-125 shadow-[0_0_15px_rgba(201,149,42,0.6)]' : ''}
                ${step > i ? 'bg-green-700 border-green-700' : ''}
                ${step < i ? 'bg-white border-borderBase' : ''}
              `}
              layoutId={step === i ? 'activeStepIndicator' : undefined}
            >
              {step > i && <Check size={12} className="text-white mx-auto mt-[1px]" strokeWidth={3} />}
            </motion.div>
          </div>
        ))}
      </div>
    );
  };

  const renderStepContent = () => {
    if (step === 4) {
      const cause = CAUSES.find(c => c.id === causeSelected);
      return <SuccessState amount={amount} cause={cause.name} />;
    }

    return (
      <>
        {renderStepIndicator()}
        
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {step === 0 && (
              <div className="max-w-5xl mx-auto">
                <div className="text-center mb-10">
                  <h2 className="font-heading text-3xl md:text-4xl text-green-950 mb-3">What will your giving build today?</h2>
                  <p className="font-body text-textMuted">Choose a cause — your donation goes exactly here.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                  {CAUSES.map(cause => (
                    <div 
                      key={cause.id}
                      onClick={() => setCauseSelected(cause.id)}
                      className={`relative h-[300px] rounded-xl overflow-hidden cursor-pointer group transition-all duration-300 ${causeSelected === cause.id ? '-translate-y-2 shadow-xl' : 'hover:-translate-y-1 hover:shadow-lg'}`}
                    >
                      <div 
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                        style={{ backgroundImage: `url(${cause.image})` }}
                      />
                      <div className={`absolute inset-0 transition-colors duration-300 ${causeSelected === cause.id ? 'bg-green-950/60' : 'bg-green-950/70 group-hover:bg-green-950/60'}`} />
                      
                      {causeSelected === cause.id && (
                        <motion.div 
                          layoutId="selected-border"
                          className="absolute inset-0 border-[3px] border-gold-500 rounded-xl z-20 pointer-events-none"
                        />
                      )}
                      
                      <div className="absolute top-4 left-4 z-10">
                        <span className="bg-gold-500 text-green-950 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                          {cause.badge}
                        </span>
                      </div>
                      
                      {causeSelected === cause.id && (
                        <motion.div 
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="absolute top-4 right-4 z-10 bg-green-700 w-8 h-8 rounded-full flex items-center justify-center text-white"
                        >
                          <Check size={18} strokeWidth={3} />
                        </motion.div>
                      )}

                      <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                        <h3 className="font-heading text-2xl text-white mb-1">{cause.name}</h3>
                        <p className="font-body text-gold-200 text-sm mb-3">{cause.impact}</p>
                        
                        <AnimatePresence>
                          {causeSelected === cause.id && (
                            <motion.div 
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="font-body text-xs text-white/70 overflow-hidden"
                            >
                              <div className="pt-2 border-t border-white/20 mt-2">
                                Current Need: <strong>{cause.counter}</strong>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-10 text-center">
                  <button 
                    onClick={nextStep}
                    disabled={!causeSelected}
                    className={`px-8 py-3 rounded font-body font-semibold transition-all w-full md:w-auto ${causeSelected ? 'bg-gold-500 text-green-950 hover:bg-gold-400' : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}
                    title={!causeSelected ? 'Please choose a cause' : ''}
                  >
                    Continue →
                  </button>
                </div>
              </div>
            )}

            {step === 1 && (
              <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                <div className="bg-green-50 p-8 rounded-xl h-full flex flex-col justify-center border border-green-100">
                  <h2 className="font-heading text-3xl text-green-950 mb-6">How much would you like to give?</h2>
                  
                  <div className="text-xl font-heading text-green-800 mb-2">
                    Your ₨{amount || '...'} will
                  </div>
                  
                  <div className="h-20 relative">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={amount + isMonthly}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute inset-0 font-body text-2xl text-green-950 leading-tight"
                      >
                        {calculateImpact(amount, isMonthly)}
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>

                <div>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {PRESETS.map(val => (
                      <motion.button
                        key={val}
                        whileTap={{ scale: 0.96 }}
                        onClick={() => setAmount(val.toString())}
                        className={`py-4 rounded-lg font-display text-2xl transition-all border-2
                          ${amount === val.toString() ? 'bg-gold-500 border-gold-500 text-green-950 shadow-md -translate-y-1' : 'bg-white border-borderBase text-green-950 hover:border-gold-500 hover:-translate-y-1'}`}
                      >
                        ₨ {val.toLocaleString()}
                        {amount === val.toString() && <Check size={16} className="inline-block ml-2 mb-1" />}
                      </motion.button>
                    ))}
                  </div>
                  
                  <div className="relative mb-8">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 font-display text-2xl text-green-950">₨</span>
                    <input 
                      type="text"
                      value={amount}
                      onChange={(e) => {
                        const val = e.target.value.replace(/[^0-9]/g, '');
                        setAmount(val);
                      }}
                      placeholder="Or enter any amount..."
                      className="w-full h-16 pl-12 pr-4 rounded-lg border-2 border-borderBase font-display text-2xl text-green-950 outline-none transition-all focus:border-gold-500 focus:shadow-[0_0_0_3px_rgba(201,149,42,0.3)] placeholder-gray-300"
                    />
                  </div>

                  <div className="flex items-center justify-center gap-4 bg-surface p-4 rounded-lg mb-8">
                    <span className={`font-body text-sm font-medium ${!isMonthly ? 'text-green-950' : 'text-textMuted'}`}>One-time</span>
                    <div 
                      className={`w-14 h-7 rounded-full cursor-pointer relative transition-colors ${isMonthly ? 'bg-green-700' : 'bg-gray-300'}`}
                      onClick={() => setIsMonthly(!isMonthly)}
                    >
                      <motion.div 
                        className="absolute top-1 left-1 w-5 h-5 bg-white rounded-full shadow-sm"
                        animate={{ x: isMonthly ? 28 : 0 }}
                        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                      />
                    </div>
                    <span className={`font-body text-sm font-medium ${isMonthly ? 'text-green-950' : 'text-textMuted'}`}>Monthly</span>
                  </div>

                  <AnimatePresence>
                    {isMonthly && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="bg-green-100 text-green-800 text-sm font-body text-center p-2 rounded mb-6 font-medium"
                      >
                        Sadaqah Jariyah — ongoing reward
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <button 
                    onClick={nextStep}
                    disabled={!amount || parseInt(amount, 10) === 0}
                    className={`w-full py-4 rounded font-body font-semibold transition-all ${amount && parseInt(amount, 10) > 0 ? 'bg-gold-500 text-green-950 hover:bg-gold-400' : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}
                  >
                    Continue to Details →
                  </button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="max-w-xl mx-auto">
                <div className="text-center mb-10">
                  <h2 className="font-heading text-3xl text-green-950 mb-3">Almost there — just your details</h2>
                </div>
                
                <div className="space-y-6">
                  <div className="float-label">
                    <input 
                      type="text" 
                      id="donorName" 
                      placeholder=" "
                      required
                      value={details.name}
                      onChange={e => setDetails({...details, name: e.target.value})}
                      className="w-full h-14 px-4 pt-4 border-b-2 border-borderBase bg-transparent outline-none font-body text-green-950 focus:border-gold-500 transition-colors"
                    />
                    <label htmlFor="donorName">Full Name *</label>
                  </div>

                  <div className="float-label">
                    <input 
                      type="tel" 
                      id="donorPhone" 
                      placeholder=" "
                      required
                      value={details.phone}
                      onChange={e => {
                        let val = e.target.value;
                        if (!val.startsWith('+92')) {
                          if (val.startsWith('0')) val = '+92' + val.substring(1);
                          else val = '+92' + val;
                        }
                        setDetails({...details, phone: val});
                      }}
                      className="w-full h-14 px-4 pt-4 border-b-2 border-borderBase bg-transparent outline-none font-body text-green-950 focus:border-gold-500 transition-colors"
                    />
                    <label htmlFor="donorPhone">WhatsApp Number *</label>
                  </div>

                  <div className="float-label">
                    <input 
                      type="email" 
                      id="donorEmail" 
                      placeholder=" "
                      value={details.email}
                      onChange={e => setDetails({...details, email: e.target.value})}
                      className="w-full h-14 px-4 pt-4 border-b-2 border-borderBase bg-transparent outline-none font-body text-green-950 focus:border-gold-500 transition-colors"
                    />
                    <label htmlFor="donorEmail">Email (optional)</label>
                    <div className="text-xs text-textMuted mt-1">For donation confirmation only</div>
                  </div>

                  <div className="float-label relative">
                    <textarea 
                      id="donorMessage" 
                      placeholder=" "
                      rows="3"
                      maxLength="200"
                      value={details.message}
                      onChange={e => setDetails({...details, message: e.target.value})}
                      className="w-full px-4 pt-6 pb-2 border-b-2 border-borderBase bg-transparent outline-none font-body text-green-950 focus:border-gold-500 transition-colors resize-none"
                    ></textarea>
                    <label htmlFor="donorMessage">Donor Message (optional)</label>
                    <div className={`absolute bottom-2 right-2 text-xs font-body ${details.message.length > 180 ? 'text-gold-500' : 'text-textMuted'}`}>
                      {details.message.length}/200
                    </div>
                  </div>
                </div>

                <div className="text-center mt-8 mb-8 text-xs text-textMuted flex items-center justify-center gap-2">
                  <span>🔒</span> Your details are never shared. WhatsApp confirmation within 24 hours.
                </div>

                <button 
                  onClick={nextStep}
                  disabled={!details.name || !details.phone || details.phone.length < 10}
                  className={`w-full py-4 rounded font-body font-semibold transition-all ${details.name && details.phone.length >= 10 ? 'bg-gold-500 text-green-950 hover:bg-gold-400' : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}
                >
                  Proceed to Payment →
                </button>
              </div>
            )}

            {step === 3 && (
              <div className="max-w-5xl mx-auto">
                <QRPayment 
                  amount={amount} 
                  cause={CAUSES.find(c => c.id === causeSelected)?.name} 
                  isMonthly={isMonthly}
                  donorDetails={details}
                  onComplete={nextStep}
                />
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </>
    );
  };

  return (
    <section id="donate" className="section-padding bg-white relative overflow-hidden">
      <div className="container-custom">
        <div className="w-full bg-white relative z-10">
          {renderStepContent()}
        </div>
      </div>
    </section>
  );
}
