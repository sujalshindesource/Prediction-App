// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
      
//     </div>
//   );
// }

// export default App;




















// Phase 1

// import React, { useState } from 'react';

// export default function App() {
//   const [step, setStep] = useState(0);
//   const [formData, setFormData] = useState({
//     name: '',
//     birthDate: '',
//     predictionTypes: [],
//     lifeFeeling: '',
//     mistakes: '',
//     partnerName: '',
//     relationshipStatus: '',
//     relationshipDesc: '',
//     foreverPerson: ''
//   });

//   const totalSteps = 8;

//   const nextStep = () => setStep(prev => prev + 1);
//   const skipStep = () => setStep(prev => prev + 1);
//   const resetApp = () => {
//     setStep(0);
//     setFormData({
//       name: '',
//       birthDate: '',
//       predictionTypes: [],
//       lifeFeeling: '',
//       mistakes: '',
//       partnerName: '',
//       relationshipStatus: '',
//       relationshipDesc: '',
//       foreverPerson: ''
//     });
//   };

//   return (
//     <div style={styles.app}>
//       {/* Fixed Navbar */}
//       <nav style={styles.navbar}>
//         <div style={styles.navContent}>
//           <div style={styles.logo}>
//             <span style={styles.logoIcon}>🔮</span>
//             <span style={styles.logoText}>FUTURE INSIGHT</span>
//           </div>
//           {step > 0 && (
//             <div style={styles.navRight}>
//               <div style={styles.progressBadge}>
//                 STEP {step} OF {totalSteps}
//               </div>
//             </div>
//           )}
//           {step === 0 && (
//             <div style={styles.navRight}>
//               <button style={styles.iconBtn}>⚙️</button>
//               <button style={styles.iconBtn}>❓</button>
//             </div>
//           )}
//         </div>
//       </nav>

//       {/* Main View - Component Switching */}
//       <main style={styles.mainView}>
//         {step === 0 && <WelcomeScreen onStart={nextStep} />}
//         {step > 0 && <div style={styles.placeholder}>Step {step} - Coming in next phase...</div>}
//       </main>
//     </div>
//   );
// }

// // ==================== STEP 0: WELCOME SCREEN ====================
// function WelcomeScreen({ onStart }) {
//   return (
//     <div style={styles.stepContainer}>
//       <div style={styles.welcomeCard}>
//         {/* Logo Icon */}
//         <div style={styles.welcomeIconContainer}>
//           <div style={styles.welcomeIcon}>
//             <div style={styles.iconLayers}>
//               <div style={styles.iconLayer1}></div>
//               <div style={styles.iconLayer2}></div>
//               <div style={styles.iconLayer3}></div>
//             </div>
//           </div>
//         </div>

//         {/* Title */}
//         <h1 style={styles.welcomeTitle}>Future Insight</h1>
//         <p style={styles.welcomeSubtitle}>BRIGHT • DARK • LOVE PATH</p>

//         {/* Start Button */}
//         <button style={styles.startBtn} onClick={onStart}>
//           Start Prediction ✨
//         </button>

//         {/* Footer Text */}
//         <p style={styles.welcomeFooter}>V1.0 • SECURE & PRIVATE CONNECTION</p>
//       </div>

//       {/* Bottom Attribution */}
//       <div style={styles.attribution}>
//         POWERED BY NEURAL INSIGHT ENGINE
//       </div>
//     </div>
//   );
// }

// // ==================== STYLES ====================
// const styles = {
//   app: {
//     width: '100vw',
//     height: '100vh',
//     backgroundColor: '#0a1628',
//     backgroundImage: 'radial-gradient(circle at 50% 50%, #1a2744 0%, #0a1628 100%)',
//     color: '#ffffff',
//     fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
//     overflow: 'hidden',
//     display: 'flex',
//     flexDirection: 'column',
//   },

//   // ===== NAVBAR =====
//   navbar: {
//     width: '100%',
//     height: '70px',
//     borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
//     backgroundColor: 'rgba(10, 22, 40, 0.8)',
//     backdropFilter: 'blur(10px)',
//     display: 'flex',
//     alignItems: 'center',
//     padding: '0 30px',
//     position: 'sticky',
//     top: 0,
//     zIndex: 100,
//   },
//   navContent: {
//     width: '100%',
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   logo: {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '10px',
//     fontSize: '18px',
//     fontWeight: '700',
//     letterSpacing: '1px',
//   },
//   logoIcon: {
//     fontSize: '24px',
//   },
//   logoText: {
//     background: 'linear-gradient(135deg, #667eea 0%, #4facfe 100%)',
//     WebkitBackgroundClip: 'text',
//     WebkitTextFillColor: 'transparent',
//   },
//   navRight: {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '15px',
//   },
//   iconBtn: {
//     background: 'rgba(255, 255, 255, 0.05)',
//     border: '1px solid rgba(255, 255, 255, 0.1)',
//     borderRadius: '8px',
//     width: '40px',
//     height: '40px',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     cursor: 'pointer',
//     fontSize: '18px',
//     transition: 'all 0.3s ease',
//   },
//   progressBadge: {
//     background: 'rgba(70, 100, 200, 0.2)',
//     border: '1px solid rgba(100, 150, 255, 0.3)',
//     borderRadius: '20px',
//     padding: '8px 16px',
//     fontSize: '12px',
//     fontWeight: '600',
//     letterSpacing: '0.5px',
//     color: '#88aaff',
//   },

//   // ===== MAIN VIEW =====
//   mainView: {
//     flex: 1,
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: '20px',
//     overflow: 'auto',
//   },
//   stepContainer: {
//     width: '100%',
//     maxWidth: '600px',
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     gap: '30px',
//   },

//   // ===== WELCOME SCREEN =====
//   welcomeCard: {
//     background: 'rgba(20, 35, 60, 0.6)',
//     border: '1px solid rgba(255, 255, 255, 0.08)',
//     borderRadius: '24px',
//     padding: '60px 50px',
//     textAlign: 'center',
//     backdropFilter: 'blur(20px)',
//     boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4)',
//     width: '100%',
//   },
//   welcomeIconContainer: {
//     display: 'flex',
//     justifyContent: 'center',
//     marginBottom: '30px',
//   },
//   welcomeIcon: {
//     width: '100px',
//     height: '100px',
//     background: 'rgba(70, 100, 200, 0.2)',
//     borderRadius: '20px',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     position: 'relative',
//     boxShadow: '0 0 40px rgba(70, 100, 200, 0.4)',
//   },
//   iconLayers: {
//     position: 'relative',
//     width: '50px',
//     height: '50px',
//   },
//   iconLayer1: {
//     position: 'absolute',
//     top: '0',
//     left: '50%',
//     transform: 'translateX(-50%)',
//     width: '45px',
//     height: '12px',
//     background: 'linear-gradient(135deg, #667eea 0%, #4facfe 100%)',
//     borderRadius: '3px',
//     boxShadow: '0 0 20px rgba(100, 150, 255, 0.6)',
//   },
//   iconLayer2: {
//     position: 'absolute',
//     top: '18px',
//     left: '50%',
//     transform: 'translateX(-50%)',
//     width: '40px',
//     height: '12px',
//     background: 'linear-gradient(135deg, #667eea 0%, #4facfe 100%)',
//     borderRadius: '3px',
//     opacity: 0.8,
//   },
//   iconLayer3: {
//     position: 'absolute',
//     top: '36px',
//     left: '50%',
//     transform: 'translateX(-50%)',
//     width: '35px',
//     height: '12px',
//     background: 'linear-gradient(135deg, #667eea 0%, #4facfe 100%)',
//     borderRadius: '3px',
//     opacity: 0.6,
//   },
//   welcomeTitle: {
//     fontSize: '48px',
//     fontWeight: '700',
//     margin: '0 0 10px 0',
//     background: 'linear-gradient(135deg, #ffffff 0%, #d0d0d0 100%)',
//     WebkitBackgroundClip: 'text',
//     WebkitTextFillColor: 'transparent',
//   },
//   welcomeSubtitle: {
//     fontSize: '14px',
//     fontWeight: '600',
//     letterSpacing: '2px',
//     color: '#6699ff',
//     marginBottom: '40px',
//   },
//   startBtn: {
//     background: 'linear-gradient(135deg, #667eea 0%, #4facfe 100%)',
//     border: 'none',
//     borderRadius: '50px',
//     padding: '18px 50px',
//     fontSize: '18px',
//     fontWeight: '600',
//     color: '#ffffff',
//     cursor: 'pointer',
//     width: '100%',
//     maxWidth: '400px',
//     boxShadow: '0 10px 30px rgba(70, 100, 200, 0.4)',
//     transition: 'all 0.3s ease',
//     marginBottom: '30px',
//   },
//   welcomeFooter: {
//     fontSize: '11px',
//     color: '#6699ff',
//     letterSpacing: '1px',
//     opacity: '0.6',
//     margin: 0,
//   },
//   attribution: {
//     fontSize: '11px',
//     color: '#556688',
//     letterSpacing: '1.5px',
//     fontWeight: '500',
//   },

//   // ===== PLACEHOLDER =====
//   placeholder: {
//     fontSize: '20px',
//     color: '#88aaff',
//     textAlign: 'center',
//   },
// };







// phase 2
// 


// import React, { useState } from 'react';

// export default function App() {
//   const [step, setStep] = useState(0);
//   const [formData, setFormData] = useState({
//     name: '',
//     birthDate: '',
//     predictionTypes: [],
//     lifeFeeling: '',
//     mistakes: '',
//     partnerName: '',
//     relationshipStatus: '',
//     relationshipDesc: '',
//     foreverPerson: ''
//   });

//   const totalSteps = 8;

//   const nextStep = () => setStep(prev => prev + 1);
//   const skipStep = () => setStep(prev => prev + 1);
//   const resetApp = () => {
//     setStep(0);
//     setFormData({
//       name: '',
//       birthDate: '',
//       predictionTypes: [],
//       lifeFeeling: '',
//       mistakes: '',
//       partnerName: '',
//       relationshipStatus: '',
//       relationshipDesc: '',
//       foreverPerson: ''
//     });
//   };

//   return (
//     <div style={styles.app}>
//       {/* Fixed Navbar */}
//       <nav style={styles.navbar}>
//         <div style={styles.navContent}>
//           <div style={styles.logo}>
//             <span style={styles.logoIcon}>🔮</span>
//             <span style={styles.logoText}>FUTURE INSIGHT</span>
//           </div>
//           {step > 0 && (
//             <div style={styles.navRight}>
//               <div style={styles.progressBadge}>
//                 STEP {step} OF {totalSteps}
//               </div>
//             </div>
//           )}
//           {step === 0 && (
//             <div style={styles.navRight}>
//               <button style={styles.iconBtn}>⚙️</button>
//               <button style={styles.iconBtn}>❓</button>
//             </div>
//           )}
//         </div>
//       </nav>

//       {/* Main View - Component Switching */}
//       <main style={styles.mainView}>
//         {step === 0 && <WelcomeScreen onStart={nextStep} />}
//         {step === 1 && <BasicDetailsScreen formData={formData} setFormData={setFormData} onNext={nextStep} />}
//         {step === 2 && <PredictionTypeScreen formData={formData} setFormData={setFormData} onNext={nextStep} />}
//         {step === 3 && <LifeFeelingScreen formData={formData} setFormData={setFormData} onNext={nextStep} onSkip={skipStep} />}
//         {step === 4 && <MistakesScreen formData={formData} setFormData={setFormData} onNext={nextStep} onSkip={skipStep} />}
//         {step > 4 && <div style={styles.placeholder}>Step {step} - Coming in next phase...</div>}
//       </main>
//     </div>
//   );
// }

// // ==================== STEP 0: WELCOME SCREEN ====================
// function WelcomeScreen({ onStart }) {
//   return (
//     <div style={styles.stepContainer}>
//       <div style={styles.welcomeCard}>
//         {/* Logo Icon */}
//         <div style={styles.welcomeIconContainer}>
//           <div style={styles.welcomeIcon}>
//             <div style={styles.iconLayers}>
//               <div style={styles.iconLayer1}></div>
//               <div style={styles.iconLayer2}></div>
//               <div style={styles.iconLayer3}></div>
//             </div>
//           </div>
//         </div>

//         {/* Title */}
//         <h1 style={styles.welcomeTitle}>Future Insight</h1>
//         <p style={styles.welcomeSubtitle}>BRIGHT • DARK • LOVE PATH</p>

//         {/* Start Button */}
//         <button 
//           style={styles.startBtn} 
//           onClick={onStart}
//           onMouseEnter={(e) => {
//             e.target.style.transform = 'translateY(-3px)';
//             e.target.style.boxShadow = '0 15px 40px rgba(70, 100, 200, 0.6)';
//           }}
//           onMouseLeave={(e) => {
//             e.target.style.transform = 'translateY(0)';
//             e.target.style.boxShadow = '0 10px 30px rgba(70, 100, 200, 0.4)';
//           }}
//         >
//           Start Prediction ✨
//         </button>

//         {/* Footer Text */}
//         <p style={styles.welcomeFooter}>V1.0 • SECURE & PRIVATE CONNECTION</p>
//       </div>

//       {/* Bottom Attribution */}
//       <div style={styles.attribution}>
//         POWERED BY NEURAL INSIGHT ENGINE
//       </div>
//     </div>
//   );
// }

// // ==================== STEP 1: BASIC DETAILS SCREEN ====================
// function BasicDetailsScreen({ formData, setFormData, onNext }) {
//   const [errors, setErrors] = useState({ name: '', birthDate: '' });

//   const handleSubmit = () => {
//     let hasError = false;
//     const newErrors = { name: '', birthDate: '' };

//     if (!formData.name.trim()) {
//       newErrors.name = 'Please enter your name';
//       hasError = true;
//     }

//     if (!formData.birthDate) {
//       newErrors.birthDate = 'Please select your birth date';
//       hasError = true;
//     }

//     setErrors(newErrors);

//     if (!hasError) {
//       onNext();
//     }
//   };

//   return (
//     <div style={styles.stepContainer}>
//       <div style={styles.card}>
//         {/* Header */}
//         <div style={styles.cardHeader}>
//           <h2 style={styles.cardTitle}>Basic Details</h2>
//           <div style={styles.stepBadge}>STEP 1 OF 6</div>
//         </div>
//         <p style={styles.cardSubtitle}>Welcome to your future. Let's start with the basics.</p>

//         {/* Form */}
//         <div style={styles.formGroup}>
//           <label style={styles.label}>FULL NAME</label>
//           <div style={styles.inputContainer}>
//             <span style={styles.inputIcon}>📋</span>
//             <input
//               type="text"
//               placeholder="e.g. Alexander Pierce"
//               value={formData.name}
//               onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//               style={{
//                 ...styles.input,
//                 ...(errors.name ? styles.inputError : {})
//               }}
//             />
//           </div>
//           {errors.name && <p style={styles.errorText}>{errors.name}</p>}
//         </div>

//         <div style={styles.formGroup}>
//           <label style={styles.label}>BIRTH DATE</label>
//           <div style={styles.inputContainer}>
//             <span style={styles.inputIcon}>📅</span>
//             <input
//               type="date"
//               value={formData.birthDate}
//               onChange={(e) => setFormData({ ...formData, birthDate: e.target.value })}
//               style={{
//                 ...styles.input,
//                 ...(errors.birthDate ? styles.inputError : {})
//               }}
//             />
//           </div>
//           {errors.birthDate && <p style={styles.errorText}>{errors.birthDate}</p>}
//         </div>

//         {/* Continue Button */}
//         <button 
//           style={{...styles.continueBtn, width: '100%', marginTop: '10px'}} 
//           onClick={handleSubmit}
//           onMouseEnter={(e) => {
//             e.target.style.transform = 'translateY(-2px)';
//             e.target.style.boxShadow = '0 15px 40px rgba(70, 100, 200, 0.5)';
//           }}
//           onMouseLeave={(e) => {
//             e.target.style.transform = 'translateY(0)';
//             e.target.style.boxShadow = '0 10px 30px rgba(70, 100, 200, 0.4)';
//           }}
//         >
//           Continue →
//         </button>

//         {/* Footer */}
//         <p style={styles.cardFooter}>
//           🔒 Your data is encrypted and used only for prediction accuracy.
//         </p>
//       </div>
//     </div>
//   );
// }

// // ==================== STEP 2: PREDICTION TYPE SELECTION ====================
// function PredictionTypeScreen({ formData, setFormData, onNext }) {
//   const [error, setError] = useState('');

//   const predictionOptions = [
//     {
//       id: 'bright',
//       icon: '☀️',
//       title: 'Bright Side',
//       description: 'Optimistic insights and positive outcomes for your journey.',
//     },
//     {
//       id: 'dark',
//       icon: '🌙',
//       title: 'Dark Side',
//       description: 'Mysterious paths and hidden truths from the shadows.',
//     },
//     {
//       id: 'love',
//       icon: '❤️',
//       title: 'Love Life',
//       description: 'Discover your romantic destiny and connections.',
//     },
//   ];

//   const togglePrediction = (id) => {
//     const current = formData.predictionTypes || [];
//     if (current.includes(id)) {
//       setFormData({
//         ...formData,
//         predictionTypes: current.filter(t => t !== id)
//       });
//     } else {
//       setFormData({
//         ...formData,
//         predictionTypes: [...current, id]
//       });
//     }
//     setError('');
//   };

//   const handleContinue = () => {
//     if (!formData.predictionTypes || formData.predictionTypes.length === 0) {
//       setError('REQUIRES SELECTION');
//       return;
//     }
//     onNext();
//   };

//   return (
//     <div style={styles.stepContainer}>
//       <div style={styles.predictionCard}>
//         {/* Header */}
//         <h2 style={styles.predictionTitle}>Choose Your Prediction</h2>
//         <p style={styles.predictionSubtitle}>Select the path you wish to explore today.</p>

//         {/* Prediction Cards */}
//         <div style={styles.predictionGrid}>
//           {predictionOptions.map((option) => {
//             const isSelected = formData.predictionTypes?.includes(option.id);
//             return (
//               <div
//                 key={option.id}
//                 onClick={() => togglePrediction(option.id)}
//                 style={{
//                   ...styles.predictionOption,
//                   ...(isSelected ? styles.predictionOptionSelected : {}),
//                 }}
//                 onMouseEnter={(e) => {
//                   if (!isSelected) {
//                     e.currentTarget.style.borderColor = 'rgba(100, 150, 255, 0.5)';
//                     e.currentTarget.style.transform = 'translateY(-5px)';
//                   }
//                 }}
//                 onMouseLeave={(e) => {
//                   if (!isSelected) {
//                     e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
//                     e.currentTarget.style.transform = 'translateY(0)';
//                   }
//                 }}
//               >
//                 <div style={styles.predictionIcon}>{option.icon}</div>
//                 <h3 style={styles.predictionOptionTitle}>{option.title}</h3>
//                 <p style={styles.predictionOptionDesc}>{option.description}</p>
//               </div>
//             );
//           })}
//         </div>

//         {/* Continue Button */}
//         <button 
//           style={{...styles.continueBtn, width: '100%'}}
//           onClick={handleContinue}
//           onMouseEnter={(e) => {
//             e.target.style.transform = 'translateY(-2px)';
//             e.target.style.boxShadow = '0 15px 40px rgba(70, 100, 200, 0.5)';
//           }}
//           onMouseLeave={(e) => {
//             e.target.style.transform = 'translateY(0)';
//             e.target.style.boxShadow = '0 10px 30px rgba(70, 100, 200, 0.4)';
//           }}
//         >
//           CONTINUE
//         </button>

//         {error && <p style={styles.errorTextCenter}>{error}</p>}
//       </div>

//       {/* Footer Attribution */}
//       <div style={styles.attribution}>
//         © 2024 FUTURE INSIGHT AI. ALL DIMENSIONS SECURED.
//       </div>
//     </div>
//   );
// }

// // ==================== STEP 3: CURRENT LIFE FEELING (OPTIONAL) ====================
// function LifeFeelingScreen({ formData, setFormData, onNext, onSkip }) {
//   const maxChars = 500;
//   const currentLength = formData.lifeFeeling?.length || 0;

//   return (
//     <div style={styles.stepContainer}>
//       <div style={styles.card}>
//         {/* Header */}
//         <div style={styles.cardHeader}>
//           <h2 style={styles.cardTitle}>Current Life Reflection</h2>
//           <div style={styles.stepBadge}>STEP 3 OF 6</div>
//         </div>
//         <p style={styles.cardSubtitle}>
//           Share how you're feeling about your current life journey. This helps us provide deeper insights.
//         </p>

//         {/* Optional Badge */}
//         <div style={styles.optionalBadge}>
//           <span style={styles.optionalIcon}>💭</span>
//           <span>Optional - Enhances Accuracy</span>
//         </div>

//         {/* Textarea */}
//         <div style={styles.formGroup}>
//           <label style={styles.label}>HOW DO YOU FEEL ABOUT YOUR CURRENT LIFE?</label>
//           <textarea
//             placeholder="e.g. I feel stuck in my career but excited about new opportunities. My relationships are strong but I'm uncertain about the future..."
//             value={formData.lifeFeeling || ''}
//             onChange={(e) => {
//               if (e.target.value.length <= maxChars) {
//                 setFormData({ ...formData, lifeFeeling: e.target.value });
//               }
//             }}
//             style={styles.textarea}
//             rows={6}
//           />
//           <div style={styles.charCounter}>
//             {currentLength} / {maxChars} characters
//           </div>
//           <p style={styles.hintText}>
//             💡 Deep reflection improves prediction accuracy. Recommended: 50+ words
//           </p>
//         </div>

//         {/* Buttons */}
//         <div style={styles.buttonGroup}>
//           <button 
//             style={styles.skipBtn}
//             onClick={onSkip}
//             onMouseEnter={(e) => {
//               e.target.style.background = 'rgba(255, 255, 255, 0.08)';
//             }}
//             onMouseLeave={(e) => {
//               e.target.style.background = 'rgba(255, 255, 255, 0.05)';
//             }}
//           >
//             Skip this step
//           </button>
//           <button 
//             style={styles.continueBtn}
//             onClick={onNext}
//             onMouseEnter={(e) => {
//               e.target.style.transform = 'translateY(-2px)';
//               e.target.style.boxShadow = '0 15px 40px rgba(70, 100, 200, 0.5)';
//             }}
//             onMouseLeave={(e) => {
//               e.target.style.transform = 'translateY(0)';
//               e.target.style.boxShadow = '0 10px 30px rgba(70, 100, 200, 0.4)';
//             }}
//           >
//             Continue →
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// // ==================== STEP 4: MISTAKES/PATTERNS + FOREVER PERSON (OPTIONAL) ====================
// function MistakesScreen({ formData, setFormData, onNext, onSkip }) {
//   const maxChars = 500;
//   const currentLength = formData.mistakes?.length || 0;

//   return (
//     <div style={styles.stepContainer}>
//       <div style={styles.card}>
//         {/* Header */}
//         <div style={styles.cardHeader}>
//           <h2 style={styles.cardTitle}>Repeated Mistakes or Patterns</h2>
//           <div style={styles.stepBadge}>STEP 4 OF 6</div>
//         </div>
//         <p style={styles.cardSubtitle}>
//           Identify the loops that have consistently held you back from your desired trajectory.
//         </p>

//         {/* Optional Badge */}
//         <div style={styles.optionalBadge}>
//           <span style={styles.optionalIcon}>🔄</span>
//           <span>Reflective Input</span>
//         </div>

//         {/* Mistakes Textarea */}
//         <div style={styles.formGroup}>
//           <label style={styles.label}>WHAT PATTERNS DO YOU KEEP REPEATING?</label>
//           <textarea
//             placeholder="e.g. Avoiding difficult conversations, over-committing to projects, or ignoring small warning signs in decision making..."
//             value={formData.mistakes || ''}
//             onChange={(e) => {
//               if (e.target.value.length <= maxChars) {
//                 setFormData({ ...formData, mistakes: e.target.value });
//               }
//             }}
//             style={styles.textarea}
//             rows={5}
//           />
//           <div style={styles.charCounter}>
//             {currentLength} / {maxChars} characters
//           </div>
//         </div>

//         {/* Forever Person Input */}
//         <div style={styles.formGroup}>
//           <label style={styles.label}>WHO DO YOU WANT TO BE WITH FOREVER? 💫</label>
//           <div style={styles.inputContainer}>
//             <span style={styles.inputIcon}>👤</span>
//             <input
//               type="text"
//               placeholder="The person you'd choose, no matter the relationship..."
//               value={formData.foreverPerson || ''}
//               onChange={(e) => setFormData({ ...formData, foreverPerson: e.target.value })}
//               style={styles.input}
//             />
//           </div>
//           <p style={styles.hintText}>
//             💡 This can be anyone - friend, family, partner, or someone you wish to be closer to
//           </p>
//         </div>

//         {/* Buttons */}
//         <div style={styles.buttonGroup}>
//           <button 
//             style={styles.skipBtn}
//             onClick={onSkip}
//             onMouseEnter={(e) => {
//               e.target.style.background = 'rgba(255, 255, 255, 0.08)';
//             }}
//             onMouseLeave={(e) => {
//               e.target.style.background = 'rgba(255, 255, 255, 0.05)';
//             }}
//           >
//             Skip this step
//           </button>
//           <button 
//             style={styles.continueBtn}
//             onClick={onNext}
//             onMouseEnter={(e) => {
//               e.target.style.transform = 'translateY(-2px)';
//               e.target.style.boxShadow = '0 15px 40px rgba(70, 100, 200, 0.5)';
//             }}
//             onMouseLeave={(e) => {
//               e.target.style.transform = 'translateY(0)';
//               e.target.style.boxShadow = '0 10px 30px rgba(70, 100, 200, 0.4)';
//             }}
//           >
//             Continue →
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// // ==================== STYLES ====================
// const styles = {
//   app: {
//     width: '100vw',
//     height: '100vh',
//     backgroundColor: '#0a1628',
//     backgroundImage: 'radial-gradient(circle at 50% 50%, #1a2744 0%, #0a1628 100%)',
//     color: '#ffffff',
//     fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
//     overflow: 'hidden',
//     display: 'flex',
//     flexDirection: 'column',
//   },

//   // ===== NAVBAR =====
//   navbar: {
//     width: '100%',
//     height: '70px',
//     borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
//     backgroundColor: 'rgba(10, 22, 40, 0.8)',
//     backdropFilter: 'blur(10px)',
//     display: 'flex',
//     alignItems: 'center',
//     padding: '0 30px',
//     position: 'sticky',
//     top: 0,
//     zIndex: 100,
//   },
//   navContent: {
//     width: '100%',
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   logo: {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '10px',
//     fontSize: '18px',
//     fontWeight: '700',
//     letterSpacing: '1px',
//   },
//   logoIcon: {
//     fontSize: '24px',
//   },
//   logoText: {
//     background: 'linear-gradient(135deg, #667eea 0%, #4facfe 100%)',
//     WebkitBackgroundClip: 'text',
//     WebkitTextFillColor: 'transparent',
//   },
//   navRight: {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '15px',
//   },
//   iconBtn: {
//     background: 'rgba(255, 255, 255, 0.05)',
//     border: '1px solid rgba(255, 255, 255, 0.1)',
//     borderRadius: '8px',
//     width: '40px',
//     height: '40px',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     cursor: 'pointer',
//     fontSize: '18px',
//     transition: 'all 0.3s ease',
//   },
//   progressBadge: {
//     background: 'rgba(70, 100, 200, 0.2)',
//     border: '1px solid rgba(100, 150, 255, 0.3)',
//     borderRadius: '20px',
//     padding: '8px 16px',
//     fontSize: '12px',
//     fontWeight: '600',
//     letterSpacing: '0.5px',
//     color: '#88aaff',
//   },

//   // ===== MAIN VIEW =====
//   mainView: {
//     flex: 1,
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: '20px',
//     overflow: 'auto',
//   },
//   stepContainer: {
//     width: '100%',
//     maxWidth: '600px',
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     gap: '30px',
//   },

//   // ===== WELCOME SCREEN =====
//   welcomeCard: {
//     background: 'rgba(20, 35, 60, 0.6)',
//     border: '1px solid rgba(255, 255, 255, 0.08)',
//     borderRadius: '24px',
//     padding: 'clamp(40px, 8vw, 60px) clamp(30px, 6vw, 50px)',
//     textAlign: 'center',
//     backdropFilter: 'blur(20px)',
//     boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4)',
//     width: '100%',
//   },
//   welcomeIconContainer: {
//     display: 'flex',
//     justifyContent: 'center',
//     marginBottom: '30px',
//   },
//   welcomeIcon: {
//     width: '100px',
//     height: '100px',
//     background: 'rgba(70, 100, 200, 0.2)',
//     borderRadius: '20px',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     position: 'relative',
//     boxShadow: '0 0 40px rgba(70, 100, 200, 0.4)',
//   },
//   iconLayers: {
//     position: 'relative',
//     width: '50px',
//     height: '50px',
//   },
//   iconLayer1: {
//     position: 'absolute',
//     top: '0',
//     left: '50%',
//     transform: 'translateX(-50%)',
//     width: '45px',
//     height: '12px',
//     background: 'linear-gradient(135deg, #667eea 0%, #4facfe 100%)',
//     borderRadius: '3px',
//     boxShadow: '0 0 20px rgba(100, 150, 255, 0.6)',
//   },
//   iconLayer2: {
//     position: 'absolute',
//     top: '18px',
//     left: '50%',
//     transform: 'translateX(-50%)',
//     width: '40px',
//     height: '12px',
//     background: 'linear-gradient(135deg, #667eea 0%, #4facfe 100%)',
//     borderRadius: '3px',
//     opacity: 0.8,
//   },
//   iconLayer3: {
//     position: 'absolute',
//     top: '36px',
//     left: '50%',
//     transform: 'translateX(-50%)',
//     width: '35px',
//     height: '12px',
//     background: 'linear-gradient(135deg, #667eea 0%, #4facfe 100%)',
//     borderRadius: '3px',
//     opacity: 0.6,
//   },
//   welcomeTitle: {
//     fontSize: 'clamp(32px, 6vw, 48px)',
//     fontWeight: '700',
//     margin: '0 0 10px 0',
//     background: 'linear-gradient(135deg, #ffffff 0%, #d0d0d0 100%)',
//     WebkitBackgroundClip: 'text',
//     WebkitTextFillColor: 'transparent',
//   },
//   welcomeSubtitle: {
//     fontSize: 'clamp(12px, 2vw, 14px)',
//     fontWeight: '600',
//     letterSpacing: '2px',
//     color: '#6699ff',
//     marginBottom: '40px',
//   },
//   startBtn: {
//     background: 'linear-gradient(135deg, #667eea 0%, #4facfe 100%)',
//     border: 'none',
//     borderRadius: '50px',
//     padding: '18px 50px',
//     fontSize: 'clamp(16px, 2.5vw, 18px)',
//     fontWeight: '600',
//     color: '#ffffff',
//     cursor: 'pointer',
//     width: '100%',
//     maxWidth: '400px',
//     boxShadow: '0 10px 30px rgba(70, 100, 200, 0.4)',
//     transition: 'all 0.3s ease',
//     marginBottom: '30px',
//   },
//   welcomeFooter: {
//     fontSize: '11px',
//     color: '#6699ff',
//     letterSpacing: '1px',
//     opacity: '0.6',
//     margin: 0,
//   },
//   attribution: {
//     fontSize: '11px',
//     color: '#556688',
//     letterSpacing: '1.5px',
//     fontWeight: '500',
//   },

//   // ===== PLACEHOLDER =====
//   placeholder: {
//     fontSize: '20px',
//     color: '#88aaff',
//     textAlign: 'center',
//   },

//   // ===== STEP 1: BASIC DETAILS =====
//   card: {
//     background: 'rgba(20, 35, 60, 0.6)',
//     border: '1px solid rgba(255, 255, 255, 0.08)',
//     borderRadius: '20px',
//     padding: 'clamp(25px, 5vw, 40px)',
//     backdropFilter: 'blur(20px)',
//     boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4)',
//     width: '100%',
//   },
//   cardHeader: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: '10px',
//     flexWrap: 'wrap',
//     gap: '10px',
//   },
//   cardTitle: {
//     fontSize: 'clamp(24px, 4vw, 32px)',
//     fontWeight: '700',
//     margin: 0,
//     color: '#ffffff',
//   },
//   stepBadge: {
//     background: 'rgba(70, 100, 200, 0.3)',
//     border: '1px solid rgba(100, 150, 255, 0.4)',
//     borderRadius: '20px',
//     padding: '6px 14px',
//     fontSize: '11px',
//     fontWeight: '600',
//     letterSpacing: '0.5px',
//     color: '#88aaff',
//   },
//   cardSubtitle: {
//     fontSize: '15px',
//     color: '#aabbcc',
//     marginBottom: '30px',
//     marginTop: '5px',
//   },
//   formGroup: {
//     marginBottom: '25px',
//   },
//   label: {
//     fontSize: '12px',
//     fontWeight: '600',
//     letterSpacing: '1px',
//     color: '#88aaff',
//     marginBottom: '10px',
//     display: 'block',
//   },
//   inputContainer: {
//     position: 'relative',
//     display: 'flex',
//     alignItems: 'center',
//   },
//   inputIcon: {
//     position: 'absolute',
//     left: '18px',
//     fontSize: '18px',
//     pointerEvents: 'none',
//   },
//   input: {
//     width: '100%',
//     background: 'rgba(15, 25, 45, 0.6)',
//     border: '1px solid rgba(255, 255, 255, 0.1)',
//     borderRadius: '12px',
//     padding: '14px 18px 14px 50px',
//     fontSize: '15px',
//     color: '#ffffff',
//     outline: 'none',
//     transition: 'all 0.3s ease',
//     fontFamily: 'inherit',
//   },
//   inputError: {
//     borderColor: 'rgba(255, 100, 100, 0.5)',
//   },
//   errorText: {
//     color: '#ff6b6b',
//     fontSize: '12px',
//     marginTop: '6px',
//     marginLeft: '4px',
//   },
//   continueBtn: {
//     flex: '2',
//     minWidth: '140px',
//     background: 'linear-gradient(135deg, #667eea 0%, #4facfe 100%)',
//     border: 'none',
//     borderRadius: '12px',
//     padding: '16px 40px',
//     fontSize: '16px',
//     fontWeight: '600',
//     color: '#ffffff',
//     cursor: 'pointer',
//     boxShadow: '0 10px 30px rgba(70, 100, 200, 0.4)',
//     transition: 'all 0.3s ease',
//   },
//   cardFooter: {
//     fontSize: '12px',
//     color: '#6699ff',
//     textAlign: 'center',
//     marginTop: '20px',
//     opacity: 0.7,
//   },

//   // ===== STEP 2: PREDICTION TYPE =====
//   predictionCard: {
//     background: 'rgba(20, 35, 60, 0.4)',
//     border: '1px solid rgba(255, 255, 255, 0.05)',
//     borderRadius: '24px',
//     padding: 'clamp(30px, 6vw, 50px) clamp(25px, 4vw, 40px)',
//     backdropFilter: 'blur(20px)',
//     boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4)',
//     width: '100%',
//     maxWidth: '900px',
//   },
//   predictionTitle: {
//     fontSize: 'clamp(28px, 5vw, 40px)',
//     fontWeight: '700',
//     margin: '0 0 10px 0',
//     textAlign: 'center',
//     color: '#ffffff',
//   },
//   predictionSubtitle: {
//     fontSize: 'clamp(14px, 2vw, 16px)',
//     color: '#aabbcc',
//     textAlign: 'center',
//     marginBottom: '40px',
//   },
//   predictionGrid: {
//     display: 'grid',
//     gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
//     gap: '20px',
//     marginBottom: '35px',
//   },
//   predictionOption: {
//     background: 'rgba(25, 40, 70, 0.5)',
//     border: '1px solid rgba(255, 255, 255, 0.1)',
//     borderRadius: '20px',
//     padding: '35px 25px',
//     textAlign: 'center',
//     cursor: 'pointer',
//     transition: 'all 0.3s ease',
//   },
//   predictionOptionSelected: {
//     background: 'rgba(70, 100, 200, 0.2)',
//     border: '2px solid rgba(100, 150, 255, 0.6)',
//     boxShadow: '0 10px 40px rgba(70, 100, 200, 0.3)',
//     transform: 'translateY(-5px)',
//   },
//   predictionIcon: {
//     fontSize: '48px',
//     marginBottom: '15px',
//   },
//   predictionOptionTitle: {
//     fontSize: '20px',
//     fontWeight: '700',
//     margin: '0 0 10px 0',
//     color: '#ffffff',
//   },
//   predictionOptionDesc: {
//     fontSize: '13px',
//     color: '#99aabb',
//     lineHeight: '1.5',
//     margin: 0,
//   },
//   errorTextCenter: {
//     color: '#ff6b6b',
//     fontSize: '13px',
//     textAlign: 'center',
//     marginTop: '15px',
//     fontWeight: '600',
//     letterSpacing: '0.5px',
//   },

//   // ===== STEP 3 & 4: OPTIONAL QUESTIONS =====
//   optionalBadge: {
//     display: 'inline-flex',
//     alignItems: 'center',
//     gap: '8px',
//     background: 'rgba(100, 200, 150, 0.15)',
//     border: '1px solid rgba(100, 200, 150, 0.3)',
//     borderRadius: '20px',
//     padding: '8px 16px',
//     fontSize: '12px',
//     fontWeight: '600',
//     color: '#66dd99',
//     marginBottom: '25px',
//   },
//   optionalIcon: {
//     fontSize: '16px',
//   },
//   textarea: {
//     width: '100%',
//     background: 'rgba(15, 25, 45, 0.6)',
//     border: '1px solid rgba(255, 255, 255, 0.1)',
//     borderRadius: '12px',
//     padding: '16px 18px',
//     fontSize: '15px',
//     color: '#ffffff',
//     outline: 'none',
//     transition: 'all 0.3s ease',
//     fontFamily: 'inherit',
//     resize: 'vertical',
//     lineHeight: '1.6',
//   },
//   charCounter: {
//     fontSize: '11px',
//     color: '#88aaff',
//     textAlign: 'right',
//     marginTop: '8px',
//     opacity: 0.7,
//   },
//   hintText: {
//     fontSize: '12px',
//     color: '#99aabb',
//     marginTop: '10px',
//     marginLeft: '4px',
//     lineHeight: '1.5',
//   },
//   buttonGroup: {
//     display: 'flex',
//     gap: '15px',
//     marginTop: '15px',
//     flexWrap: 'wrap',
//   },
//   skipBtn: {
//     flex: '1',
//     minWidth: '140px',
//     background: 'rgba(255, 255, 255, 0.05)',
//     border: '1px solid rgba(255, 255, 255, 0.15)',
//     borderRadius: '12px',
//     padding: '14px 30px',
//     fontSize: '15px',
//     fontWeight: '600',
//     color: '#aabbcc',
//     cursor: 'pointer',
//     transition: 'all 0.3s ease',
//   },

//   // ===== RESPONSIVE MEDIA QUERIES (applied via inline conditions in components) =====
// };






// phase 3



// import React, { useState } from 'react';

// export default function App() {
//   const [step, setStep] = useState(0);
//   const [formData, setFormData] = useState({
//     name: '',
//     birthDate: '',
//     predictionTypes: [],
//     lifeFeeling: '',
//     foreverPerson: '',
//     foreverPersonReason: '',
//     partnerName: '',
//     relationshipStatus: '',
//     relationshipDesc: ''
//   });

//   const totalSteps = 8;

//   const nextStep = () => setStep(prev => prev + 1);
//   const skipStep = () => setStep(prev => prev + 1);
//   const resetApp = () => {
//     setStep(0);
//     setFormData({
//       name: '',
//       birthDate: '',
//       predictionTypes: [],
//       lifeFeeling: '',
//       foreverPerson: '',
//       foreverPersonReason: '',
//       partnerName: '',
//       relationshipStatus: '',
//       relationshipDesc: ''
//     });
//   };

//   return (
//     <div style={styles.app}>
//       {/* Fixed Navbar */}
//       <nav style={styles.navbar}>
//         <div style={styles.navContent}>
//           <div style={styles.logo}>
//             <span style={styles.logoIcon}>🔮</span>
//             <span style={styles.logoText}>FUTURE INSIGHT</span>
//           </div>
//           {step > 0 && (
//             <div style={styles.navRight}>
//               <div style={styles.progressBadge}>
//                 STEP {step} OF {totalSteps}
//               </div>
//             </div>
//           )}
//           {step === 0 && (
//             <div style={styles.navRight}>
//               <button style={styles.iconBtn}>⚙️</button>
//               <button style={styles.iconBtn}>❓</button>
//             </div>
//           )}
//         </div>
//       </nav>

//       {/* Main View - Component Switching */}
//       <main style={styles.mainView}>
//         {step === 0 && <WelcomeScreen onStart={nextStep} />}
//         {step === 1 && <BasicDetailsScreen formData={formData} setFormData={setFormData} onNext={nextStep} />}
//         {step === 2 && <PredictionTypeScreen formData={formData} setFormData={setFormData} onNext={nextStep} />}
//         {step === 3 && <LifeFeelingScreen formData={formData} setFormData={setFormData} onNext={nextStep} onSkip={skipStep} />}
//         {step === 4 && <MistakesScreen formData={formData} setFormData={setFormData} onNext={nextStep} onSkip={skipStep} />}
//         {step > 4 && <div style={styles.placeholder}>Step {step} - Coming in next phase...</div>}
//       </main>
//     </div>
//   );
// }

// // ==================== STEP 0: WELCOME SCREEN ====================
// function WelcomeScreen({ onStart }) {
//   return (
//     <div style={styles.stepContainer}>
//       <div style={styles.welcomeCard}>
//         {/* Logo Icon */}
//         <div style={styles.welcomeIconContainer}>
//           <div style={styles.welcomeIcon}>
//             <div style={styles.iconLayers}>
//               <div style={styles.iconLayer1}></div>
//               <div style={styles.iconLayer2}></div>
//               <div style={styles.iconLayer3}></div>
//             </div>
//           </div>
//         </div>

//         {/* Title */}
//         <h1 style={styles.welcomeTitle}>Future Insight</h1>
//         <p style={styles.welcomeSubtitle}>BRIGHT • DARK • LOVE PATH</p>

//         {/* Start Button */}
//         <button 
//           style={styles.startBtn} 
//           onClick={onStart}
//           onMouseEnter={(e) => {
//             e.target.style.transform = 'translateY(-3px)';
//             e.target.style.boxShadow = '0 15px 40px rgba(70, 100, 200, 0.6)';
//           }}
//           onMouseLeave={(e) => {
//             e.target.style.transform = 'translateY(0)';
//             e.target.style.boxShadow = '0 10px 30px rgba(70, 100, 200, 0.4)';
//           }}
//         >
//           Start Prediction ✨
//         </button>

//         {/* Footer Text */}
//         <p style={styles.welcomeFooter}>V1.0 • SECURE & PRIVATE CONNECTION</p>
//       </div>

//       {/* Bottom Attribution */}
//       <div style={styles.attribution}>
//         POWERED BY NEURAL INSIGHT ENGINE
//       </div>
//     </div>
//   );
// }

// // ==================== STEP 1: BASIC DETAILS SCREEN ====================
// function BasicDetailsScreen({ formData, setFormData, onNext }) {
//   const [errors, setErrors] = useState({ name: '', birthDate: '' });

//   const handleSubmit = () => {
//     let hasError = false;
//     const newErrors = { name: '', birthDate: '' };

//     if (!formData.name.trim()) {
//       newErrors.name = 'Please enter your name';
//       hasError = true;
//     }

//     if (!formData.birthDate) {
//       newErrors.birthDate = 'Please select your birth date';
//       hasError = true;
//     }

//     setErrors(newErrors);

//     if (!hasError) {
//       onNext();
//     }
//   };

//   return (
//     <div style={styles.stepContainer}>
//       <div style={styles.card}>
//         {/* Header */}
//         <div style={styles.cardHeader}>
//           <h2 style={styles.cardTitle}>Basic Details</h2>
//           <div style={styles.stepBadge}>STEP 1 OF 6</div>
//         </div>
//         <p style={styles.cardSubtitle}>Welcome to your future. Let's start with the basics.</p>

//         {/* Form */}
//         <div style={styles.formGroup}>
//           <label style={styles.label}>FULL NAME</label>
//           <div style={styles.inputContainer}>
//             <span style={styles.inputIcon}>📋</span>
//             <input
//               type="text"
//               placeholder="e.g. Alexander Pierce"
//               value={formData.name}
//               onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//               style={{
//                 ...styles.input,
//                 ...(errors.name ? styles.inputError : {})
//               }}
//             />
//           </div>
//           {errors.name && <p style={styles.errorText}>{errors.name}</p>}
//         </div>

//         <div style={styles.formGroup}>
//           <label style={styles.label}>BIRTH DATE</label>
//           <div style={styles.inputContainer}>
//             <span style={styles.inputIcon}>📅</span>
//             <input
//               type="date"
//               value={formData.birthDate}
//               onChange={(e) => setFormData({ ...formData, birthDate: e.target.value })}
//               style={{
//                 ...styles.input,
//                 ...(errors.birthDate ? styles.inputError : {})
//               }}
//             />
//           </div>
//           {errors.birthDate && <p style={styles.errorText}>{errors.birthDate}</p>}
//         </div>

//         {/* Continue Button */}
//         <button 
//           style={{...styles.continueBtn, width: '100%', marginTop: '10px'}} 
//           onClick={handleSubmit}
//           onMouseEnter={(e) => {
//             e.target.style.transform = 'translateY(-2px)';
//             e.target.style.boxShadow = '0 15px 40px rgba(70, 100, 200, 0.5)';
//           }}
//           onMouseLeave={(e) => {
//             e.target.style.transform = 'translateY(0)';
//             e.target.style.boxShadow = '0 10px 30px rgba(70, 100, 200, 0.4)';
//           }}
//         >
//           Continue →
//         </button>

//         {/* Footer */}
//         <p style={styles.cardFooter}>
//           🔒 Your data is encrypted and used only for prediction accuracy.
//         </p>
//       </div>
//     </div>
//   );
// }

// // ==================== STEP 2: PREDICTION TYPE SELECTION ====================
// function PredictionTypeScreen({ formData, setFormData, onNext }) {
//   const [error, setError] = useState('');

//   const predictionOptions = [
//     {
//       id: 'bright',
//       icon: '☀️',
//       title: 'Bright Side',
//       description: 'Optimistic insights and positive outcomes for your journey.',
//     },
//     {
//       id: 'dark',
//       icon: '🌙',
//       title: 'Dark Side',
//       description: 'Mysterious paths and hidden truths from the shadows.',
//     },
//     {
//       id: 'love',
//       icon: '❤️',
//       title: 'Love Life',
//       description: 'Discover your romantic destiny and connections.',
//     },
//   ];

//   const togglePrediction = (id) => {
//     const current = formData.predictionTypes || [];
//     if (current.includes(id)) {
//       setFormData({
//         ...formData,
//         predictionTypes: current.filter(t => t !== id)
//       });
//     } else {
//       setFormData({
//         ...formData,
//         predictionTypes: [...current, id]
//       });
//     }
//     setError('');
//   };

//   const handleContinue = () => {
//     if (!formData.predictionTypes || formData.predictionTypes.length === 0) {
//       setError('REQUIRES SELECTION');
//       return;
//     }
//     onNext();
//   };

//   return (
//     <div style={styles.stepContainer}>
//       <div style={styles.predictionCard}>
//         {/* Header */}
//         <h2 style={styles.predictionTitle}>Choose Your Prediction</h2>
//         <p style={styles.predictionSubtitle}>Select the path you wish to explore today.</p>

//         {/* Prediction Cards */}
//         <div style={styles.predictionGrid}>
//           {predictionOptions.map((option) => {
//             const isSelected = formData.predictionTypes?.includes(option.id);
//             return (
//               <div
//                 key={option.id}
//                 onClick={() => togglePrediction(option.id)}
//                 style={{
//                   ...styles.predictionOption,
//                   ...(isSelected ? styles.predictionOptionSelected : {}),
//                 }}
//                 onMouseEnter={(e) => {
//                   if (!isSelected) {
//                     e.currentTarget.style.borderColor = 'rgba(100, 150, 255, 0.5)';
//                     e.currentTarget.style.transform = 'translateY(-5px)';
//                   }
//                 }}
//                 onMouseLeave={(e) => {
//                   if (!isSelected) {
//                     e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
//                     e.currentTarget.style.transform = 'translateY(0)';
//                   }
//                 }}
//               >
//                 <div style={styles.predictionIcon}>{option.icon}</div>
//                 <h3 style={styles.predictionOptionTitle}>{option.title}</h3>
//                 <p style={styles.predictionOptionDesc}>{option.description}</p>
//               </div>
//             );
//           })}
//         </div>

//         {/* Continue Button */}
//         <button 
//           style={{...styles.continueBtn, width: '100%'}}
//           onClick={handleContinue}
//           onMouseEnter={(e) => {
//             e.target.style.transform = 'translateY(-2px)';
//             e.target.style.boxShadow = '0 15px 40px rgba(70, 100, 200, 0.5)';
//           }}
//           onMouseLeave={(e) => {
//             e.target.style.transform = 'translateY(0)';
//             e.target.style.boxShadow = '0 10px 30px rgba(70, 100, 200, 0.4)';
//           }}
//         >
//           CONTINUE
//         </button>

//         {error && <p style={styles.errorTextCenter}>{error}</p>}
//       </div>

//       {/* Footer Attribution */}
//       <div style={styles.attribution}>
//         © 2024 FUTURE INSIGHT AI. ALL DIMENSIONS SECURED.
//       </div>
//     </div>
//   );
// }

// // ==================== STEP 3: CURRENT LIFE FEELING (OPTIONAL) ====================
// function LifeFeelingScreen({ formData, setFormData, onNext, onSkip }) {
//   const maxChars = 500;
//   const currentLength = formData.lifeFeeling?.length || 0;

//   return (
//     <div style={styles.stepContainer}>
//       <div style={styles.card}>
//         {/* Header */}
//         <div style={styles.cardHeader}>
//           <h2 style={styles.cardTitle}>Current Life Reflection</h2>
//           <div style={styles.stepBadge}>STEP 3 OF 6</div>
//         </div>
//         <p style={styles.cardSubtitle}>
//           Share how you're feeling about your current life journey. This helps us provide deeper insights.
//         </p>

//         {/* Optional Badge */}
//         <div style={styles.optionalBadge}>
//           <span style={styles.optionalIcon}>💭</span>
//           <span>Optional - Enhances Accuracy</span>
//         </div>

//         {/* Textarea */}
//         <div style={styles.formGroup}>
//           <label style={styles.label}>HOW DO YOU FEEL ABOUT YOUR CURRENT LIFE?</label>
//           <textarea
//             placeholder="e.g. I feel stuck in my career but excited about new opportunities. My relationships are strong but I'm uncertain about the future..."
//             value={formData.lifeFeeling || ''}
//             onChange={(e) => {
//               if (e.target.value.length <= maxChars) {
//                 setFormData({ ...formData, lifeFeeling: e.target.value });
//               }
//             }}
//             style={styles.textarea}
//             rows={6}
//           />
//           <div style={styles.charCounter}>
//             {currentLength} / {maxChars} characters
//           </div>
//           <p style={styles.hintText}>
//             💡 Deep reflection improves prediction accuracy. Recommended: 50+ words
//           </p>
//         </div>

//         {/* Buttons */}
//         <div style={styles.buttonGroup}>
//           <button 
//             style={styles.skipBtn}
//             onClick={onSkip}
//             onMouseEnter={(e) => {
//               e.target.style.background = 'rgba(255, 255, 255, 0.08)';
//             }}
//             onMouseLeave={(e) => {
//               e.target.style.background = 'rgba(255, 255, 255, 0.05)';
//             }}
//           >
//             Skip this step
//           </button>
//           <button 
//             style={styles.continueBtn}
//             onClick={onNext}
//             onMouseEnter={(e) => {
//               e.target.style.transform = 'translateY(-2px)';
//               e.target.style.boxShadow = '0 15px 40px rgba(70, 100, 200, 0.5)';
//             }}
//             onMouseLeave={(e) => {
//               e.target.style.transform = 'translateY(0)';
//               e.target.style.boxShadow = '0 10px 30px rgba(70, 100, 200, 0.4)';
//             }}
//           >
//             Continue →
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// // ==================== STEP 4: FOREVER PERSON (OPTIONAL) ====================
// function MistakesScreen({ formData, setFormData, onNext, onSkip }) {
//   return (
//     <div style={styles.stepContainer}>
//       <div style={styles.card}>
//         {/* Header */}
//         <div style={styles.cardHeader}>
//           <h2 style={styles.cardTitle}>Your Forever Person</h2>
//           <div style={styles.stepBadge}>STEP 4 OF 6</div>
//         </div>
//         <p style={styles.cardSubtitle}>
//           Who is the ONE person you want in your life until the very end?
//         </p>

//         {/* Optional Badge */}
//         <div style={styles.optionalBadge}>
//           <span style={styles.optionalIcon}>💫</span>
//           <span>Deep Personal Insight</span>
//         </div>

//         {/* Explanation Box */}
//         <div style={styles.explanationBox}>
//           <h3 style={styles.explanationTitle}>🌟 This is About Your Soul Connection</h3>
//           <p style={styles.explanationText}>
//             Think deeply. Among everyone in your life - past, present, or someone you wish to be closer to - who is that ONE person you want by your side until death?
//           </p>
//           <ul style={styles.explanationList}>
//             <li>✓ This can be <strong>any gender</strong> - male, female, or anyone</li>
//             <li>✓ This can be <strong>any relationship</strong> - friend, family member, partner, lover, or someone special</li>
//             <li>✓ It doesn't matter what your current relationship is with them</li>
//             <li>✓ <strong>You can only choose ONE</strong> - the one person who matters most to your soul</li>
//           </ul>
//           <p style={styles.explanationWarning}>
//             ⚠️ <strong>There may be many people you love</strong>, but you must choose only ONE. The person you want with you until your very last breath. Think carefully.
//           </p>
//         </div>

//         {/* Forever Person Input */}
//         <div style={styles.formGroup}>
//           <label style={styles.label}>WHO IS YOUR FOREVER PERSON? 💖</label>
//           <div style={styles.inputContainer}>
//             <span style={styles.inputIcon}>👤</span>
//             <input
//               type="text"
//               placeholder="Enter their name... (the ONE person you choose)"
//               value={formData.foreverPerson || ''}
//               onChange={(e) => setFormData({ ...formData, foreverPerson: e.target.value })}
//               style={styles.input}
//             />
//           </div>
//           <p style={styles.hintText}>
//             💭 Close your eyes. Think about your last day on Earth. Who do you see? Who do you want holding your hand? That's your answer.
//           </p>
//         </div>

//         {/* Optional: Tell us more */}
//         <div style={styles.formGroup}>
//           <label style={styles.label}>WHY THIS PERSON? (OPTIONAL)</label>
//           <textarea
//             placeholder="What makes this person irreplaceable in your life? Why them above everyone else?"
//             value={formData.foreverPersonReason || ''}
//             onChange={(e) => {
//               if (e.target.value.length <= 300) {
//                 setFormData({ ...formData, foreverPersonReason: e.target.value });
//               }
//             }}
//             style={styles.textarea}
//             rows={4}
//           />
//           <div style={styles.charCounter}>
//             {(formData.foreverPersonReason?.length || 0)} / 300 characters
//           </div>
//         </div>

//         {/* Buttons */}
//         <div style={styles.buttonGroup}>
//           <button 
//             style={styles.skipBtn}
//             onClick={onSkip}
//             onMouseEnter={(e) => {
//               e.target.style.background = 'rgba(255, 255, 255, 0.08)';
//             }}
//             onMouseLeave={(e) => {
//               e.target.style.background = 'rgba(255, 255, 255, 0.05)';
//             }}
//           >
//             Skip this step
//           </button>
//           <button 
//             style={styles.continueBtn}
//             onClick={onNext}
//             onMouseEnter={(e) => {
//               e.target.style.transform = 'translateY(-2px)';
//               e.target.style.boxShadow = '0 15px 40px rgba(70, 100, 200, 0.5)';
//             }}
//             onMouseLeave={(e) => {
//               e.target.style.transform = 'translateY(0)';
//               e.target.style.boxShadow = '0 10px 30px rgba(70, 100, 200, 0.4)';
//             }}
//           >
//             Continue →
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// // ==================== STYLES ====================
// const styles = {
//   app: {
//     width: '100vw',
//     height: '100vh',
//     backgroundColor: '#0a1628',
//     backgroundImage: 'radial-gradient(circle at 50% 50%, #1a2744 0%, #0a1628 100%)',
//     color: '#ffffff',
//     fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
//     overflow: 'hidden',
//     display: 'flex',
//     flexDirection: 'column',
//   },

//   // ===== NAVBAR =====
//   navbar: {
//     width: '100%',
//     height: '70px',
//     borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
//     backgroundColor: 'rgba(10, 22, 40, 0.8)',
//     backdropFilter: 'blur(10px)',
//     display: 'flex',
//     alignItems: 'center',
//     padding: '0 30px',
//     position: 'sticky',
//     top: 0,
//     zIndex: 100,
//   },
//   navContent: {
//     width: '100%',
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   logo: {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '10px',
//     fontSize: '18px',
//     fontWeight: '700',
//     letterSpacing: '1px',
//   },
//   logoIcon: {
//     fontSize: '24px',
//   },
//   logoText: {
//     background: 'linear-gradient(135deg, #667eea 0%, #4facfe 100%)',
//     WebkitBackgroundClip: 'text',
//     WebkitTextFillColor: 'transparent',
//   },
//   navRight: {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '15px',
//   },
//   iconBtn: {
//     background: 'rgba(255, 255, 255, 0.05)',
//     border: '1px solid rgba(255, 255, 255, 0.1)',
//     borderRadius: '8px',
//     width: '40px',
//     height: '40px',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     cursor: 'pointer',
//     fontSize: '18px',
//     transition: 'all 0.3s ease',
//   },
//   progressBadge: {
//     background: 'rgba(70, 100, 200, 0.2)',
//     border: '1px solid rgba(100, 150, 255, 0.3)',
//     borderRadius: '20px',
//     padding: '8px 16px',
//     fontSize: '12px',
//     fontWeight: '600',
//     letterSpacing: '0.5px',
//     color: '#88aaff',
//   },

//   // ===== MAIN VIEW =====
//   mainView: {
//     flex: 1,
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: '20px',
//     overflow: 'auto',
//   },
//   stepContainer: {
//     width: '100%',
//     maxWidth: '600px',
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     gap: '30px',
//   },

//   // ===== WELCOME SCREEN =====
//   welcomeCard: {
//     background: 'rgba(20, 35, 60, 0.6)',
//     border: '1px solid rgba(255, 255, 255, 0.08)',
//     borderRadius: '24px',
//     padding: 'clamp(40px, 8vw, 60px) clamp(30px, 6vw, 50px)',
//     textAlign: 'center',
//     backdropFilter: 'blur(20px)',
//     boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4)',
//     width: '100%',
//   },
//   welcomeIconContainer: {
//     display: 'flex',
//     justifyContent: 'center',
//     marginBottom: '30px',
//   },
//   welcomeIcon: {
//     width: '100px',
//     height: '100px',
//     background: 'rgba(70, 100, 200, 0.2)',
//     borderRadius: '20px',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     position: 'relative',
//     boxShadow: '0 0 40px rgba(70, 100, 200, 0.4)',
//   },
//   iconLayers: {
//     position: 'relative',
//     width: '50px',
//     height: '50px',
//   },
//   iconLayer1: {
//     position: 'absolute',
//     top: '0',
//     left: '50%',
//     transform: 'translateX(-50%)',
//     width: '45px',
//     height: '12px',
//     background: 'linear-gradient(135deg, #667eea 0%, #4facfe 100%)',
//     borderRadius: '3px',
//     boxShadow: '0 0 20px rgba(100, 150, 255, 0.6)',
//   },
//   iconLayer2: {
//     position: 'absolute',
//     top: '18px',
//     left: '50%',
//     transform: 'translateX(-50%)',
//     width: '40px',
//     height: '12px',
//     background: 'linear-gradient(135deg, #667eea 0%, #4facfe 100%)',
//     borderRadius: '3px',
//     opacity: 0.8,
//   },
//   iconLayer3: {
//     position: 'absolute',
//     top: '36px',
//     left: '50%',
//     transform: 'translateX(-50%)',
//     width: '35px',
//     height: '12px',
//     background: 'linear-gradient(135deg, #667eea 0%, #4facfe 100%)',
//     borderRadius: '3px',
//     opacity: 0.6,
//   },
//   welcomeTitle: {
//     fontSize: 'clamp(32px, 6vw, 48px)',
//     fontWeight: '700',
//     margin: '0 0 10px 0',
//     background: 'linear-gradient(135deg, #ffffff 0%, #d0d0d0 100%)',
//     WebkitBackgroundClip: 'text',
//     WebkitTextFillColor: 'transparent',
//   },
//   welcomeSubtitle: {
//     fontSize: 'clamp(12px, 2vw, 14px)',
//     fontWeight: '600',
//     letterSpacing: '2px',
//     color: '#6699ff',
//     marginBottom: '40px',
//   },
//   startBtn: {
//     background: 'linear-gradient(135deg, #667eea 0%, #4facfe 100%)',
//     border: 'none',
//     borderRadius: '50px',
//     padding: '18px 50px',
//     fontSize: 'clamp(16px, 2.5vw, 18px)',
//     fontWeight: '600',
//     color: '#ffffff',
//     cursor: 'pointer',
//     width: '100%',
//     maxWidth: '400px',
//     boxShadow: '0 10px 30px rgba(70, 100, 200, 0.4)',
//     transition: 'all 0.3s ease',
//     marginBottom: '30px',
//   },
//   welcomeFooter: {
//     fontSize: '11px',
//     color: '#6699ff',
//     letterSpacing: '1px',
//     opacity: '0.6',
//     margin: 0,
//   },
//   attribution: {
//     fontSize: '11px',
//     color: '#556688',
//     letterSpacing: '1.5px',
//     fontWeight: '500',
//   },

//   // ===== PLACEHOLDER =====
//   placeholder: {
//     fontSize: '20px',
//     color: '#88aaff',
//     textAlign: 'center',
//   },

//   // ===== STEP 1: BASIC DETAILS =====
//   card: {
//     background: 'rgba(20, 35, 60, 0.6)',
//     border: '1px solid rgba(255, 255, 255, 0.08)',
//     borderRadius: '20px',
//     padding: 'clamp(25px, 5vw, 40px)',
//     backdropFilter: 'blur(20px)',
//     boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4)',
//     width: '100%',
//   },
//   cardHeader: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: '10px',
//     flexWrap: 'wrap',
//     gap: '10px',
//   },
//   cardTitle: {
//     fontSize: 'clamp(24px, 4vw, 32px)',
//     fontWeight: '700',
//     margin: 0,
//     color: '#ffffff',
//   },
//   stepBadge: {
//     background: 'rgba(70, 100, 200, 0.3)',
//     border: '1px solid rgba(100, 150, 255, 0.4)',
//     borderRadius: '20px',
//     padding: '6px 14px',
//     fontSize: '11px',
//     fontWeight: '600',
//     letterSpacing: '0.5px',
//     color: '#88aaff',
//   },
//   cardSubtitle: {
//     fontSize: '15px',
//     color: '#aabbcc',
//     marginBottom: '30px',
//     marginTop: '5px',
//   },
//   formGroup: {
//     marginBottom: '25px',
//   },
//   label: {
//     fontSize: '12px',
//     fontWeight: '600',
//     letterSpacing: '1px',
//     color: '#88aaff',
//     marginBottom: '10px',
//     display: 'block',
//   },
//   inputContainer: {
//     position: 'relative',
//     display: 'flex',
//     alignItems: 'center',
//   },
//   inputIcon: {
//     position: 'absolute',
//     left: '18px',
//     fontSize: '18px',
//     pointerEvents: 'none',
//   },
//   input: {
//     width: '100%',
//     background: 'rgba(15, 25, 45, 0.6)',
//     border: '1px solid rgba(255, 255, 255, 0.1)',
//     borderRadius: '12px',
//     padding: '14px 18px 14px 50px',
//     fontSize: '15px',
//     color: '#ffffff',
//     outline: 'none',
//     transition: 'all 0.3s ease',
//     fontFamily: 'inherit',
//   },
//   inputError: {
//     borderColor: 'rgba(255, 100, 100, 0.5)',
//   },
//   errorText: {
//     color: '#ff6b6b',
//     fontSize: '12px',
//     marginTop: '6px',
//     marginLeft: '4px',
//   },
//   continueBtn: {
//     flex: '2',
//     minWidth: '140px',
//     background: 'linear-gradient(135deg, #667eea 0%, #4facfe 100%)',
//     border: 'none',
//     borderRadius: '12px',
//     padding: '16px 40px',
//     fontSize: '16px',
//     fontWeight: '600',
//     color: '#ffffff',
//     cursor: 'pointer',
//     boxShadow: '0 10px 30px rgba(70, 100, 200, 0.4)',
//     transition: 'all 0.3s ease',
//   },
//   cardFooter: {
//     fontSize: '12px',
//     color: '#6699ff',
//     textAlign: 'center',
//     marginTop: '20px',
//     opacity: 0.7,
//   },

//   // ===== STEP 2: PREDICTION TYPE =====
//   predictionCard: {
//     background: 'rgba(20, 35, 60, 0.4)',
//     border: '1px solid rgba(255, 255, 255, 0.05)',
//     borderRadius: '24px',
//     padding: 'clamp(30px, 6vw, 50px) clamp(25px, 4vw, 40px)',
//     backdropFilter: 'blur(20px)',
//     boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4)',
//     width: '100%',
//     maxWidth: '900px',
//   },
//   predictionTitle: {
//     fontSize: 'clamp(28px, 5vw, 40px)',
//     fontWeight: '700',
//     margin: '0 0 10px 0',
//     textAlign: 'center',
//     color: '#ffffff',
//   },
//   predictionSubtitle: {
//     fontSize: 'clamp(14px, 2vw, 16px)',
//     color: '#aabbcc',
//     textAlign: 'center',
//     marginBottom: '40px',
//   },
//   predictionGrid: {
//     display: 'grid',
//     gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
//     gap: '20px',
//     marginBottom: '35px',
//   },
//   predictionOption: {
//     background: 'rgba(25, 40, 70, 0.5)',
//     border: '1px solid rgba(255, 255, 255, 0.1)',
//     borderRadius: '20px',
//     padding: '35px 25px',
//     textAlign: 'center',
//     cursor: 'pointer',
//     transition: 'all 0.3s ease',
//   },
//   predictionOptionSelected: {
//     background: 'rgba(70, 100, 200, 0.2)',
//     border: '2px solid rgba(100, 150, 255, 0.6)',
//     boxShadow: '0 10px 40px rgba(70, 100, 200, 0.3)',
//     transform: 'translateY(-5px)',
//   },
//   predictionIcon: {
//     fontSize: '48px',
//     marginBottom: '15px',
//   },
//   predictionOptionTitle: {
//     fontSize: '20px',
//     fontWeight: '700',
//     margin: '0 0 10px 0',
//     color: '#ffffff',
//   },
//   predictionOptionDesc: {
//     fontSize: '13px',
//     color: '#99aabb',
//     lineHeight: '1.5',
//     margin: 0,
//   },
//   errorTextCenter: {
//     color: '#ff6b6b',
//     fontSize: '13px',
//     textAlign: 'center',
//     marginTop: '15px',
//     fontWeight: '600',
//     letterSpacing: '0.5px',
//   },

//   // ===== STEP 3 & 4: OPTIONAL QUESTIONS =====
//   optionalBadge: {
//     display: 'inline-flex',
//     alignItems: 'center',
//     gap: '8px',
//     background: 'rgba(100, 200, 150, 0.15)',
//     border: '1px solid rgba(100, 200, 150, 0.3)',
//     borderRadius: '20px',
//     padding: '8px 16px',
//     fontSize: '12px',
//     fontWeight: '600',
//     color: '#66dd99',
//     marginBottom: '25px',
//   },
//   optionalIcon: {
//     fontSize: '16px',
//   },
//   textarea: {
//     width: '100%',
//     background: 'rgba(15, 25, 45, 0.6)',
//     border: '1px solid rgba(255, 255, 255, 0.1)',
//     borderRadius: '12px',
//     padding: '16px 18px',
//     fontSize: '15px',
//     color: '#ffffff',
//     outline: 'none',
//     transition: 'all 0.3s ease',
//     fontFamily: 'inherit',
//     resize: 'vertical',
//     lineHeight: '1.6',
//   },
//   charCounter: {
//     fontSize: '11px',
//     color: '#88aaff',
//     textAlign: 'right',
//     marginTop: '8px',
//     opacity: 0.7,
//   },
//   hintText: {
//     fontSize: '12px',
//     color: '#99aabb',
//     marginTop: '10px',
//     marginLeft: '4px',
//     lineHeight: '1.5',
//   },
//   buttonGroup: {
//     display: 'flex',
//     gap: '15px',
//     marginTop: '15px',
//     flexWrap: 'wrap',
//   },
//   skipBtn: {
//     flex: '1',
//     minWidth: '140px',
//     background: 'rgba(255, 255, 255, 0.05)',
//     border: '1px solid rgba(255, 255, 255, 0.15)',
//     borderRadius: '12px',
//     padding: '14px 30px',
//     fontSize: '15px',
//     fontWeight: '600',
//     color: '#aabbcc',
//     cursor: 'pointer',
//     transition: 'all 0.3s ease',
//   },

//   // ===== STEP 4: FOREVER PERSON EXPLANATION BOX =====
//   explanationBox: {
//     background: 'rgba(100, 80, 200, 0.1)',
//     border: '1px solid rgba(150, 130, 255, 0.3)',
//     borderRadius: '16px',
//     padding: '20px 25px',
//     marginBottom: '30px',
//   },
//   explanationTitle: {
//     fontSize: '18px',
//     fontWeight: '700',
//     color: '#bbaaff',
//     margin: '0 0 12px 0',
//   },
//   explanationText: {
//     fontSize: '14px',
//     color: '#ccddee',
//     lineHeight: '1.7',
//     margin: '0 0 15px 0',
//   },
//   explanationList: {
//     fontSize: '14px',
//     color: '#ccddee',
//     lineHeight: '1.8',
//     margin: '0 0 15px 0',
//     paddingLeft: '20px',
//   },
//   explanationWarning: {
//     fontSize: '14px',
//     color: '#ffcc77',
//     lineHeight: '1.7',
//     margin: '0',
//     padding: '12px 15px',
//     background: 'rgba(255, 200, 100, 0.08)',
//     borderRadius: '10px',
//     borderLeft: '3px solid #ffcc77',
//   },

//   // ===== RESPONSIVE MEDIA QUERIES (applied via inline conditions in components) =====
// };





// phase 5 



// import React, { useState } from 'react';

// export default function App() {
//   const [step, setStep] = useState(0);
//   const [formData, setFormData] = useState({
//     name: '',
//     birthDate: '',
//     predictionTypes: [],
//     lifeFeeling: '',
//     foreverPerson: '',
//     foreverPersonReason: '',
//     partnerName: '',
//     relationshipStatus: '',
//     relationshipDesc: ''
//   });

//   const totalSteps = 8;

//   const nextStep = () => setStep(prev => prev + 1);
//   const skipStep = () => setStep(prev => prev + 1);
//   const resetApp = () => {
//     setStep(0);
//     setFormData({
//       name: '',
//       birthDate: '',
//       predictionTypes: [],
//       lifeFeeling: '',
//       foreverPerson: '',
//       foreverPersonReason: '',
//       partnerName: '',
//       relationshipStatus: '',
//       relationshipDesc: ''
//     });
//   };

//   return (
//     <div style={styles.app}>
//       {/* Fixed Navbar */}
//       <nav style={styles.navbar}>
//         <div style={styles.navContent}>
//           <div style={styles.logo}>
//             <span style={styles.logoIcon}>🔮</span>
//             <span style={styles.logoText}>FUTURE INSIGHT</span>
//           </div>
//           {step > 0 && (
//             <div style={styles.navRight}>
//               <div style={styles.progressBadge}>
//                 STEP {step} OF {totalSteps}
//               </div>
//             </div>
//           )}
//           {step === 0 && (
//             <div style={styles.navRight}>
//               <button style={styles.iconBtn}>⚙️</button>
//               <button style={styles.iconBtn}>❓</button>
//             </div>
//           )}
//         </div>
//       </nav>

//       {/* Main View - Component Switching */}
//       <main style={styles.mainView}>
//         {step === 0 && <WelcomeScreen onStart={nextStep} />}
//         {step === 1 && <BasicDetailsScreen formData={formData} setFormData={setFormData} onNext={nextStep} />}
//         {step === 2 && <PredictionTypeScreen formData={formData} setFormData={setFormData} onNext={nextStep} />}
//         {step === 3 && <LifeFeelingScreen formData={formData} setFormData={setFormData} onNext={nextStep} onSkip={skipStep} />}
//         {step === 4 && <MistakesScreen formData={formData} setFormData={setFormData} onNext={nextStep} onSkip={skipStep} />}
//         {step === 5 && (
//           formData.predictionTypes?.includes('love') 
//             ? <LoveLifeScreen formData={formData} setFormData={setFormData} onNext={nextStep} />
//             : (() => { nextStep(); return null; })()
//         )}
//         {step === 6 && <ReviewScreen formData={formData} onNext={nextStep} />}
//         {step > 6 && <div style={styles.placeholder}>Step {step} - Coming in final phase...</div>}
//       </main>
//     </div>
//   );
// }

// // ==================== STEP 0: WELCOME SCREEN ====================
// function WelcomeScreen({ onStart }) {
//   return (
//     <div style={styles.stepContainer}>
//       <div style={styles.welcomeCard}>
//         {/* Logo Icon */}
//         <div style={styles.welcomeIconContainer}>
//           <div style={styles.welcomeIcon}>
//             <div style={styles.iconLayers}>
//               <div style={styles.iconLayer1}></div>
//               <div style={styles.iconLayer2}></div>
//               <div style={styles.iconLayer3}></div>
//             </div>
//           </div>
//         </div>

//         {/* Title */}
//         <h1 style={styles.welcomeTitle}>Future Insight</h1>
//         <p style={styles.welcomeSubtitle}>BRIGHT • DARK • LOVE PATH</p>

//         {/* Start Button */}
//         <button 
//           style={styles.startBtn} 
//           onClick={onStart}
//           onMouseEnter={(e) => {
//             e.target.style.transform = 'translateY(-3px)';
//             e.target.style.boxShadow = '0 15px 40px rgba(70, 100, 200, 0.6)';
//           }}
//           onMouseLeave={(e) => {
//             e.target.style.transform = 'translateY(0)';
//             e.target.style.boxShadow = '0 10px 30px rgba(70, 100, 200, 0.4)';
//           }}
//         >
//           Start Prediction ✨
//         </button>

//         {/* Footer Text */}
//         <p style={styles.welcomeFooter}>V1.0 • SECURE & PRIVATE CONNECTION</p>
//       </div>

//       {/* Bottom Attribution */}
//       <div style={styles.attribution}>
//         POWERED BY NEURAL INSIGHT ENGINE
//       </div>
//     </div>
//   );
// }

// // ==================== STEP 1: BASIC DETAILS SCREEN ====================
// function BasicDetailsScreen({ formData, setFormData, onNext }) {
//   const [errors, setErrors] = useState({ name: '', birthDate: '' });

//   const handleSubmit = () => {
//     let hasError = false;
//     const newErrors = { name: '', birthDate: '' };

//     if (!formData.name.trim()) {
//       newErrors.name = 'Please enter your name';
//       hasError = true;
//     }

//     if (!formData.birthDate) {
//       newErrors.birthDate = 'Please select your birth date';
//       hasError = true;
//     }

//     setErrors(newErrors);

//     if (!hasError) {
//       onNext();
//     }
//   };

//   return (
//     <div style={styles.stepContainer}>
//       <div style={styles.card}>
//         {/* Header */}
//         <div style={styles.cardHeader}>
//           <h2 style={styles.cardTitle}>Basic Details</h2>
//           <div style={styles.stepBadge}>STEP 1 OF 6</div>
//         </div>
//         <p style={styles.cardSubtitle}>Welcome to your future. Let's start with the basics.</p>

//         {/* Form */}
//         <div style={styles.formGroup}>
//           <label style={styles.label}>FULL NAME</label>
//           <div style={styles.inputContainer}>
//             <span style={styles.inputIcon}>📋</span>
//             <input
//               type="text"
//               placeholder="e.g. Alexander Pierce"
//               value={formData.name}
//               onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//               style={{
//                 ...styles.input,
//                 ...(errors.name ? styles.inputError : {})
//               }}
//             />
//           </div>
//           {errors.name && <p style={styles.errorText}>{errors.name}</p>}
//         </div>

//         <div style={styles.formGroup}>
//           <label style={styles.label}>BIRTH DATE</label>
//           <div style={styles.inputContainer}>
//             <span style={styles.inputIcon}>📅</span>
//             <input
//               type="date"
//               value={formData.birthDate}
//               onChange={(e) => setFormData({ ...formData, birthDate: e.target.value })}
//               style={{
//                 ...styles.input,
//                 ...(errors.birthDate ? styles.inputError : {})
//               }}
//             />
//           </div>
//           {errors.birthDate && <p style={styles.errorText}>{errors.birthDate}</p>}
//         </div>

//         {/* Continue Button */}
//         <button 
//           style={{...styles.continueBtn, width: '100%', marginTop: '10px'}} 
//           onClick={handleSubmit}
//           onMouseEnter={(e) => {
//             e.target.style.transform = 'translateY(-2px)';
//             e.target.style.boxShadow = '0 15px 40px rgba(70, 100, 200, 0.5)';
//           }}
//           onMouseLeave={(e) => {
//             e.target.style.transform = 'translateY(0)';
//             e.target.style.boxShadow = '0 10px 30px rgba(70, 100, 200, 0.4)';
//           }}
//         >
//           Continue →
//         </button>

//         {/* Footer */}
//         <p style={styles.cardFooter}>
//           🔒 Your data is encrypted and used only for prediction accuracy.
//         </p>
//       </div>
//     </div>
//   );
// }

// // ==================== STEP 2: PREDICTION TYPE SELECTION ====================
// function PredictionTypeScreen({ formData, setFormData, onNext }) {
//   const [error, setError] = useState('');

//   const predictionOptions = [
//     {
//       id: 'bright',
//       icon: '☀️',
//       title: 'Bright Side',
//       description: 'Optimistic insights and positive outcomes for your journey.',
//     },
//     {
//       id: 'dark',
//       icon: '🌙',
//       title: 'Dark Side',
//       description: 'Mysterious paths and hidden truths from the shadows.',
//     },
//     {
//       id: 'love',
//       icon: '❤️',
//       title: 'Love Life',
//       description: 'Discover your romantic destiny and connections.',
//     },
//   ];

//   const togglePrediction = (id) => {
//     const current = formData.predictionTypes || [];
//     if (current.includes(id)) {
//       setFormData({
//         ...formData,
//         predictionTypes: current.filter(t => t !== id)
//       });
//     } else {
//       setFormData({
//         ...formData,
//         predictionTypes: [...current, id]
//       });
//     }
//     setError('');
//   };

//   const handleContinue = () => {
//     if (!formData.predictionTypes || formData.predictionTypes.length === 0) {
//       setError('REQUIRES SELECTION');
//       return;
//     }
//     onNext();
//   };

//   return (
//     <div style={styles.stepContainer}>
//       <div style={styles.predictionCard}>
//         {/* Header */}
//         <h2 style={styles.predictionTitle}>Choose Your Prediction</h2>
//         <p style={styles.predictionSubtitle}>Select the path you wish to explore today.</p>

//         {/* Prediction Cards */}
//         <div style={styles.predictionGrid}>
//           {predictionOptions.map((option) => {
//             const isSelected = formData.predictionTypes?.includes(option.id);
//             return (
//               <div
//                 key={option.id}
//                 onClick={() => togglePrediction(option.id)}
//                 style={{
//                   ...styles.predictionOption,
//                   ...(isSelected ? styles.predictionOptionSelected : {}),
//                 }}
//                 onMouseEnter={(e) => {
//                   if (!isSelected) {
//                     e.currentTarget.style.borderColor = 'rgba(100, 150, 255, 0.5)';
//                     e.currentTarget.style.transform = 'translateY(-5px)';
//                   }
//                 }}
//                 onMouseLeave={(e) => {
//                   if (!isSelected) {
//                     e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
//                     e.currentTarget.style.transform = 'translateY(0)';
//                   }
//                 }}
//               >
//                 <div style={styles.predictionIcon}>{option.icon}</div>
//                 <h3 style={styles.predictionOptionTitle}>{option.title}</h3>
//                 <p style={styles.predictionOptionDesc}>{option.description}</p>
//               </div>
//             );
//           })}
//         </div>

//         {/* Continue Button */}
//         <button 
//           style={{...styles.continueBtn, width: '100%'}}
//           onClick={handleContinue}
//           onMouseEnter={(e) => {
//             e.target.style.transform = 'translateY(-2px)';
//             e.target.style.boxShadow = '0 15px 40px rgba(70, 100, 200, 0.5)';
//           }}
//           onMouseLeave={(e) => {
//             e.target.style.transform = 'translateY(0)';
//             e.target.style.boxShadow = '0 10px 30px rgba(70, 100, 200, 0.4)';
//           }}
//         >
//           CONTINUE
//         </button>

//         {error && <p style={styles.errorTextCenter}>{error}</p>}
//       </div>

//       {/* Footer Attribution */}
//       <div style={styles.attribution}>
//         © 2024 FUTURE INSIGHT AI. ALL DIMENSIONS SECURED.
//       </div>
//     </div>
//   );
// }

// // ==================== STEP 3: CURRENT LIFE FEELING (OPTIONAL) ====================
// function LifeFeelingScreen({ formData, setFormData, onNext, onSkip }) {
//   const maxChars = 500;
//   const currentLength = formData.lifeFeeling?.length || 0;

//   return (
//     <div style={styles.stepContainer}>
//       <div style={styles.card}>
//         {/* Header */}
//         <div style={styles.cardHeader}>
//           <h2 style={styles.cardTitle}>Current Life Reflection</h2>
//           <div style={styles.stepBadge}>STEP 3 OF 6</div>
//         </div>
//         <p style={styles.cardSubtitle}>
//           Share how you're feeling about your current life journey. This helps us provide deeper insights.
//         </p>

//         {/* Optional Badge */}
//         <div style={styles.optionalBadge}>
//           <span style={styles.optionalIcon}>💭</span>
//           <span>Optional - Enhances Accuracy</span>
//         </div>

//         {/* Textarea */}
//         <div style={styles.formGroup}>
//           <label style={styles.label}>HOW DO YOU FEEL ABOUT YOUR CURRENT LIFE?</label>
//           <textarea
//             placeholder="e.g. I feel stuck in my career but excited about new opportunities. My relationships are strong but I'm uncertain about the future..."
//             value={formData.lifeFeeling || ''}
//             onChange={(e) => {
//               if (e.target.value.length <= maxChars) {
//                 setFormData({ ...formData, lifeFeeling: e.target.value });
//               }
//             }}
//             style={styles.textarea}
//             rows={6}
//           />
//           <div style={styles.charCounter}>
//             {currentLength} / {maxChars} characters
//           </div>
//           <p style={styles.hintText}>
//             💡 Deep reflection improves prediction accuracy. Recommended: 50+ words
//           </p>
//         </div>

//         {/* Buttons */}
//         <div style={styles.buttonGroup}>
//           <button 
//             style={styles.skipBtn}
//             onClick={onSkip}
//             onMouseEnter={(e) => {
//               e.target.style.background = 'rgba(255, 255, 255, 0.08)';
//             }}
//             onMouseLeave={(e) => {
//               e.target.style.background = 'rgba(255, 255, 255, 0.05)';
//             }}
//           >
//             Skip this step
//           </button>
//           <button 
//             style={styles.continueBtn}
//             onClick={onNext}
//             onMouseEnter={(e) => {
//               e.target.style.transform = 'translateY(-2px)';
//               e.target.style.boxShadow = '0 15px 40px rgba(70, 100, 200, 0.5)';
//             }}
//             onMouseLeave={(e) => {
//               e.target.style.transform = 'translateY(0)';
//               e.target.style.boxShadow = '0 10px 30px rgba(70, 100, 200, 0.4)';
//             }}
//           >
//             Continue →
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// // ==================== STEP 4: FOREVER PERSON (OPTIONAL) ====================
// function MistakesScreen({ formData, setFormData, onNext, onSkip }) {
//   return (
//     <div style={styles.stepContainer}>
//       <div style={styles.card}>
//         {/* Header */}
//         <div style={styles.cardHeader}>
//           <h2 style={styles.cardTitle}>Your Forever Person</h2>
//           <div style={styles.stepBadge}>STEP 4 OF 6</div>
//         </div>
//         <p style={styles.cardSubtitle}>
//           Who is the ONE person you want in your life until the very end?
//         </p>

//         {/* Explanation Box */}
//         <div style={styles.explanationBox}>
//           <h3 style={styles.explanationTitle}>🌟 Choose Your Soul Connection</h3>
//           <p style={styles.explanationText}>
//             Among everyone in your life - who is that ONE person you want by your side until death?
//           </p>
//           <ul style={styles.explanationList}>
//             <li>✓ Any gender • Any relationship (friend, family, partner, anyone)</li>
//             <li>⚠️ <strong>Only ONE person</strong> - the one who matters most to your soul</li>
//           </ul>
//         </div>

//         {/* Forever Person Input */}
//         <div style={styles.formGroup}>
//           <label style={styles.label}>WHO IS YOUR FOREVER PERSON? 💖</label>
//           <div style={styles.inputContainer}>
//             <span style={styles.inputIcon}>👤</span>
//             <input
//               type="text"
//               placeholder="Enter their name... (the ONE person you choose)"
//               value={formData.foreverPerson || ''}
//               onChange={(e) => setFormData({ ...formData, foreverPerson: e.target.value })}
//               style={styles.input}
//             />
//           </div>
//           <p style={styles.hintText}>
//             💭 Think about your last day on Earth. Who do you want there? That's your answer.
//           </p>
//         </div>

//         {/* Optional: Tell us more */}
//         <div style={styles.formGroup}>
//           <label style={styles.label}>WHY THIS PERSON? (OPTIONAL)</label>
//           <textarea
//             placeholder="What makes this person irreplaceable in your life?"
//             value={formData.foreverPersonReason || ''}
//             onChange={(e) => {
//               if (e.target.value.length <= 200) {
//                 setFormData({ ...formData, foreverPersonReason: e.target.value });
//               }
//             }}
//             style={styles.textarea}
//             rows={3}
//           />
//           <div style={styles.charCounter}>
//             {(formData.foreverPersonReason?.length || 0)} / 200 characters
//           </div>
//         </div>

//         {/* Buttons */}
//         <div style={styles.buttonGroup}>
//           <button 
//             style={styles.skipBtn}
//             onClick={onSkip}
//             onMouseEnter={(e) => {
//               e.target.style.background = 'rgba(255, 255, 255, 0.08)';
//             }}
//             onMouseLeave={(e) => {
//               e.target.style.background = 'rgba(255, 255, 255, 0.05)';
//             }}
//           >
//             Skip this step
//           </button>
//           <button 
//             style={styles.continueBtn}
//             onClick={onNext}
//             onMouseEnter={(e) => {
//               e.target.style.transform = 'translateY(-2px)';
//               e.target.style.boxShadow = '0 15px 40px rgba(70, 100, 200, 0.5)';
//             }}
//             onMouseLeave={(e) => {
//               e.target.style.transform = 'translateY(0)';
//               e.target.style.boxShadow = '0 10px 30px rgba(70, 100, 200, 0.4)';
//             }}
//           >
//             Continue →
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// // ==================== STEP 5: LOVE LIFE DETAILS (CONDITIONAL) ====================
// function LoveLifeScreen({ formData, setFormData, onNext }) {
//   const statusOptions = ['Single', 'Dating', 'Committed', 'Married', 'Complicated'];

//   return (
//     <div style={styles.stepContainer}>
//       <div style={styles.card}>
//         {/* Header */}
//         <div style={styles.cardHeader}>
//           <h2 style={styles.cardTitle}>Love Life Details</h2>
//           <div style={styles.stepBadge}>STEP 5 OF 6</div>
//         </div>
//         <p style={styles.cardSubtitle}>
//           Provide details to refine your connection prediction.
//         </p>

//         {/* Partner Name */}
//         <div style={styles.formGroup}>
//           <label style={styles.label}>PARTNER NAME (OPTIONAL)</label>
//           <div style={styles.inputContainer}>
//             <span style={styles.inputIcon}>💕</span>
//             <input
//               type="text"
//               placeholder="Enter full name..."
//               value={formData.partnerName || ''}
//               onChange={(e) => setFormData({ ...formData, partnerName: e.target.value })}
//               style={styles.input}
//             />
//           </div>
//         </div>

//         {/* Relationship Status */}
//         <div style={styles.formGroup}>
//           <label style={styles.label}>RELATIONSHIP STATUS</label>
//           <div style={styles.statusGrid}>
//             {statusOptions.map(status => {
//               const isSelected = formData.relationshipStatus === status;
//               return (
//                 <button
//                   key={status}
//                   onClick={() => setFormData({ ...formData, relationshipStatus: status })}
//                   style={{
//                     ...styles.statusBtn,
//                     ...(isSelected ? styles.statusBtnSelected : {})
//                   }}
//                   onMouseEnter={(e) => {
//                     if (!isSelected) {
//                       e.target.style.background = 'rgba(100, 150, 255, 0.15)';
//                       e.target.style.borderColor = 'rgba(100, 150, 255, 0.4)';
//                     }
//                   }}
//                   onMouseLeave={(e) => {
//                     if (!isSelected) {
//                       e.target.style.background = 'rgba(255, 255, 255, 0.05)';
//                       e.target.style.borderColor = 'rgba(255, 255, 255, 0.15)';
//                     }
//                   }}
//                 >
//                   {status}
//                 </button>
//               );
//             })}
//           </div>
//         </div>

//         {/* About Connection */}
//         <div style={styles.formGroup}>
//           <label style={styles.label}>ABOUT THIS CONNECTION (OPTIONAL)</label>
//           <textarea
//             placeholder="Share a brief history or current dynamic..."
//             value={formData.relationshipDesc || ''}
//             onChange={(e) => {
//               if (e.target.value.length <= 300) {
//                 setFormData({ ...formData, relationshipDesc: e.target.value });
//               }
//             }}
//             style={styles.textarea}
//             rows={4}
//           />
//           <div style={styles.charCounter}>
//             {(formData.relationshipDesc?.length || 0)} / 300 characters
//           </div>
//         </div>

//         {/* Continue Button */}
//         <button 
//           style={{...styles.continueBtn, width: '100%', marginTop: '10px'}}
//           onClick={onNext}
//           onMouseEnter={(e) => {
//             e.target.style.transform = 'translateY(-2px)';
//             e.target.style.boxShadow = '0 15px 40px rgba(70, 100, 200, 0.5)';
//           }}
//           onMouseLeave={(e) => {
//             e.target.style.transform = 'translateY(0)';
//             e.target.style.boxShadow = '0 10px 30px rgba(70, 100, 200, 0.4)';
//           }}
//         >
//           Continue →
//         </button>
//       </div>
//     </div>
//   );
// }

// // ==================== STEP 6: REVIEW SCREEN ====================
// function ReviewScreen({ formData, onNext }) {
//   const [expandedSections, setExpandedSections] = useState({
//     basic: true,
//     predictions: false,
//     reflection: false
//   });

//   const toggleSection = (section) => {
//     setExpandedSections(prev => ({
//       ...prev,
//       [section]: !prev[section]
//     }));
//   };

//   return (
//     <div style={styles.stepContainer}>
//       <div style={{...styles.card, maxWidth: '700px'}}>
//         {/* Header */}
//         <div style={styles.reviewHeader}>
//           <h2 style={styles.cardTitle}>Review Your Inputs</h2>
//           <div style={styles.stepBadge}>STEP 6 OF 6</div>
//         </div>
//         <p style={styles.cardSubtitle}>
//           Finalize your parameters before initiating the neural synthesis.
//         </p>

//         {/* Basic Details Section */}
//         <div style={styles.reviewSection}>
//           <button 
//             style={styles.reviewSectionHeader}
//             onClick={() => toggleSection('basic')}
//           >
//             <div style={styles.reviewSectionTitle}>
//               <span style={styles.reviewIcon}>👤</span>
//               <span>Basic Details</span>
//             </div>
//             <span style={styles.expandIcon}>{expandedSections.basic ? '▲' : '▼'}</span>
//           </button>
//           {expandedSections.basic && (
//             <div style={styles.reviewSectionContent}>
//               <div style={styles.reviewItem}>
//                 <span style={styles.reviewLabel}>SUBJECT NAME</span>
//                 <span style={styles.reviewValue}>{formData.name}</span>
//               </div>
//               <div style={styles.reviewItem}>
//                 <span style={styles.reviewLabel}>TARGET DATE</span>
//                 <span style={styles.reviewValue}>{formData.birthDate}</span>
//               </div>
//             </div>
//           )}
//         </div>

//         {/* Prediction Path Section */}
//         <div style={styles.reviewSection}>
//           <button 
//             style={styles.reviewSectionHeader}
//             onClick={() => toggleSection('predictions')}
//           >
//             <div style={styles.reviewSectionTitle}>
//               <span style={styles.reviewIcon}>🔮</span>
//               <span>Prediction Path</span>
//             </div>
//             <span style={styles.expandIcon}>{expandedSections.predictions ? '▲' : '▼'}</span>
//           </button>
//           {expandedSections.predictions && (
//             <div style={styles.reviewSectionContent}>
//               <div style={styles.scopeBadges}>
//                 {formData.predictionTypes?.includes('bright') && (
//                   <span style={styles.scopeBadge}>🌟 Bright Side</span>
//                 )}
//                 {formData.predictionTypes?.includes('dark') && (
//                   <span style={styles.scopeBadge}>🌙 Dark Side</span>
//                 )}
//                 {formData.predictionTypes?.includes('love') && (
//                   <span style={styles.scopeBadge}>❤️ Love Life</span>
//                 )}
//               </div>
//             </div>
//           )}
//         </div>

//         {/* Reflection Section */}
//         <div style={styles.reviewSection}>
//           <button 
//             style={styles.reviewSectionHeader}
//             onClick={() => toggleSection('reflection')}
//           >
//             <div style={styles.reviewSectionTitle}>
//               <span style={styles.reviewIcon}>💭</span>
//               <span>Reflection</span>
//             </div>
//             <span style={styles.expandIcon}>{expandedSections.reflection ? '▲' : '▼'}</span>
//           </button>
//           {expandedSections.reflection && (
//             <div style={styles.reviewSectionContent}>
//               {formData.lifeFeeling && (
//                 <div style={styles.reviewTextBlock}>
//                   <span style={styles.reviewLabel}>LIFE REFLECTION</span>
//                   <p style={styles.reviewTextValue}>{formData.lifeFeeling}</p>
//                 </div>
//               )}
//               {formData.foreverPerson && (
//                 <div style={styles.reviewTextBlock}>
//                   <span style={styles.reviewLabel}>FOREVER PERSON</span>
//                   <p style={styles.reviewTextValue}>{formData.foreverPerson}</p>
//                 </div>
//               )}
//               {!formData.lifeFeeling && !formData.foreverPerson && (
//                 <p style={styles.emptyText}>No reflection data provided</p>
//               )}
//             </div>
//           )}
//         </div>

//         {/* Generate Button */}
//         <button 
//           style={styles.generateBtn}
//           onClick={onNext}
//           onMouseEnter={(e) => {
//             e.target.style.transform = 'translateY(-2px) scale(1.02)';
//             e.target.style.boxShadow = '0 20px 50px rgba(70, 100, 200, 0.6)';
//           }}
//           onMouseLeave={(e) => {
//             e.target.style.transform = 'translateY(0) scale(1)';
//             e.target.style.boxShadow = '0 15px 40px rgba(70, 100, 200, 0.5)';
//           }}
//         >
//           Generate Prediction ⚡
//         </button>

//         {/* Footer */}
//         <p style={styles.encryptedFooter}>
//           🔒 ENCRYPTED END-TO-END PROCESSING
//         </p>
//       </div>
//     </div>
//   );
// }

// // ==================== STYLES ====================
// const styles = {
//   app: {
//     width: '100vw',
//     height: '100vh',
//     backgroundColor: '#0a1628',
//     backgroundImage: 'radial-gradient(circle at 50% 50%, #1a2744 0%, #0a1628 100%)',
//     color: '#ffffff',
//     fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
//     overflow: 'hidden',
//     display: 'flex',
//     flexDirection: 'column',
//   },

//   // ===== NAVBAR =====
//   navbar: {
//     width: '100%',
//     height: '70px',
//     borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
//     backgroundColor: 'rgba(10, 22, 40, 0.8)',
//     backdropFilter: 'blur(10px)',
//     display: 'flex',
//     alignItems: 'center',
//     padding: '0 30px',
//     position: 'sticky',
//     top: 0,
//     zIndex: 100,
//   },
//   navContent: {
//     width: '100%',
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   logo: {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '10px',
//     fontSize: '18px',
//     fontWeight: '700',
//     letterSpacing: '1px',
//   },
//   logoIcon: {
//     fontSize: '24px',
//   },
//   logoText: {
//     background: 'linear-gradient(135deg, #667eea 0%, #4facfe 100%)',
//     WebkitBackgroundClip: 'text',
//     WebkitTextFillColor: 'transparent',
//   },
//   navRight: {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '15px',
//   },
//   iconBtn: {
//     background: 'rgba(255, 255, 255, 0.05)',
//     border: '1px solid rgba(255, 255, 255, 0.1)',
//     borderRadius: '8px',
//     width: '40px',
//     height: '40px',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     cursor: 'pointer',
//     fontSize: '18px',
//     transition: 'all 0.3s ease',
//   },
//   progressBadge: {
//     background: 'rgba(70, 100, 200, 0.2)',
//     border: '1px solid rgba(100, 150, 255, 0.3)',
//     borderRadius: '20px',
//     padding: '8px 16px',
//     fontSize: '12px',
//     fontWeight: '600',
//     letterSpacing: '0.5px',
//     color: '#88aaff',
//   },

//   // ===== MAIN VIEW =====
//   mainView: {
//     flex: 1,
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: '20px',
//     overflow: 'auto',
//   },
//   stepContainer: {
//     width: '100%',
//     maxWidth: '600px',
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     gap: '30px',
//   },

//   // ===== WELCOME SCREEN =====
//   welcomeCard: {
//     background: 'rgba(20, 35, 60, 0.6)',
//     border: '1px solid rgba(255, 255, 255, 0.08)',
//     borderRadius: '24px',
//     padding: 'clamp(40px, 8vw, 60px) clamp(30px, 6vw, 50px)',
//     textAlign: 'center',
//     backdropFilter: 'blur(20px)',
//     boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4)',
//     width: '100%',
//   },
//   welcomeIconContainer: {
//     display: 'flex',
//     justifyContent: 'center',
//     marginBottom: '30px',
//   },
//   welcomeIcon: {
//     width: '100px',
//     height: '100px',
//     background: 'rgba(70, 100, 200, 0.2)',
//     borderRadius: '20px',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     position: 'relative',
//     boxShadow: '0 0 40px rgba(70, 100, 200, 0.4)',
//   },
//   iconLayers: {
//     position: 'relative',
//     width: '50px',
//     height: '50px',
//   },
//   iconLayer1: {
//     position: 'absolute',
//     top: '0',
//     left: '50%',
//     transform: 'translateX(-50%)',
//     width: '45px',
//     height: '12px',
//     background: 'linear-gradient(135deg, #667eea 0%, #4facfe 100%)',
//     borderRadius: '3px',
//     boxShadow: '0 0 20px rgba(100, 150, 255, 0.6)',
//   },
//   iconLayer2: {
//     position: 'absolute',
//     top: '18px',
//     left: '50%',
//     transform: 'translateX(-50%)',
//     width: '40px',
//     height: '12px',
//     background: 'linear-gradient(135deg, #667eea 0%, #4facfe 100%)',
//     borderRadius: '3px',
//     opacity: 0.8,
//   },
//   iconLayer3: {
//     position: 'absolute',
//     top: '36px',
//     left: '50%',
//     transform: 'translateX(-50%)',
//     width: '35px',
//     height: '12px',
//     background: 'linear-gradient(135deg, #667eea 0%, #4facfe 100%)',
//     borderRadius: '3px',
//     opacity: 0.6,
//   },
//   welcomeTitle: {
//     fontSize: 'clamp(32px, 6vw, 48px)',
//     fontWeight: '700',
//     margin: '0 0 10px 0',
//     background: 'linear-gradient(135deg, #ffffff 0%, #d0d0d0 100%)',
//     WebkitBackgroundClip: 'text',
//     WebkitTextFillColor: 'transparent',
//   },
//   welcomeSubtitle: {
//     fontSize: 'clamp(12px, 2vw, 14px)',
//     fontWeight: '600',
//     letterSpacing: '2px',
//     color: '#6699ff',
//     marginBottom: '40px',
//   },
//   startBtn: {
//     background: 'linear-gradient(135deg, #667eea 0%, #4facfe 100%)',
//     border: 'none',
//     borderRadius: '50px',
//     padding: '18px 50px',
//     fontSize: 'clamp(16px, 2.5vw, 18px)',
//     fontWeight: '600',
//     color: '#ffffff',
//     cursor: 'pointer',
//     width: '100%',
//     maxWidth: '400px',
//     boxShadow: '0 10px 30px rgba(70, 100, 200, 0.4)',
//     transition: 'all 0.3s ease',
//     marginBottom: '30px',
//   },
//   welcomeFooter: {
//     fontSize: '11px',
//     color: '#6699ff',
//     letterSpacing: '1px',
//     opacity: '0.6',
//     margin: 0,
//   },
//   attribution: {
//     fontSize: '11px',
//     color: '#556688',
//     letterSpacing: '1.5px',
//     fontWeight: '500',
//   },

//   // ===== PLACEHOLDER =====
//   placeholder: {
//     fontSize: '20px',
//     color: '#88aaff',
//     textAlign: 'center',
//   },

//   // ===== STEP 1: BASIC DETAILS =====
//   card: {
//     background: 'rgba(20, 35, 60, 0.6)',
//     border: '1px solid rgba(255, 255, 255, 0.08)',
//     borderRadius: '20px',
//     padding: 'clamp(25px, 5vw, 40px)',
//     backdropFilter: 'blur(20px)',
//     boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4)',
//     width: '100%',
//   },
//   cardHeader: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: '10px',
//     flexWrap: 'wrap',
//     gap: '10px',
//   },
//   cardTitle: {
//     fontSize: 'clamp(24px, 4vw, 32px)',
//     fontWeight: '700',
//     margin: 0,
//     color: '#ffffff',
//   },
//   stepBadge: {
//     background: 'rgba(70, 100, 200, 0.3)',
//     border: '1px solid rgba(100, 150, 255, 0.4)',
//     borderRadius: '20px',
//     padding: '6px 14px',
//     fontSize: '11px',
//     fontWeight: '600',
//     letterSpacing: '0.5px',
//     color: '#88aaff',
//   },
//   cardSubtitle: {
//     fontSize: '15px',
//     color: '#aabbcc',
//     marginBottom: '30px',
//     marginTop: '5px',
//   },
//   formGroup: {
//     marginBottom: '25px',
//   },
//   label: {
//     fontSize: '12px',
//     fontWeight: '600',
//     letterSpacing: '1px',
//     color: '#88aaff',
//     marginBottom: '10px',
//     display: 'block',
//   },
//   inputContainer: {
//     position: 'relative',
//     display: 'flex',
//     alignItems: 'center',
//   },
//   inputIcon: {
//     position: 'absolute',
//     left: '18px',
//     fontSize: '18px',
//     pointerEvents: 'none',
//   },
//   input: {
//     width: '100%',
//     background: 'rgba(15, 25, 45, 0.6)',
//     border: '1px solid rgba(255, 255, 255, 0.1)',
//     borderRadius: '12px',
//     padding: '14px 18px 14px 50px',
//     fontSize: '15px',
//     color: '#ffffff',
//     outline: 'none',
//     transition: 'all 0.3s ease',
//     fontFamily: 'inherit',
//   },
//   inputError: {
//     borderColor: 'rgba(255, 100, 100, 0.5)',
//   },
//   errorText: {
//     color: '#ff6b6b',
//     fontSize: '12px',
//     marginTop: '6px',
//     marginLeft: '4px',
//   },
//   continueBtn: {
//     flex: '2',
//     minWidth: '140px',
//     background: 'linear-gradient(135deg, #667eea 0%, #4facfe 100%)',
//     border: 'none',
//     borderRadius: '12px',
//     padding: '16px 40px',
//     fontSize: '16px',
//     fontWeight: '600',
//     color: '#ffffff',
//     cursor: 'pointer',
//     boxShadow: '0 10px 30px rgba(70, 100, 200, 0.4)',
//     transition: 'all 0.3s ease',
//   },
//   cardFooter: {
//     fontSize: '12px',
//     color: '#6699ff',
//     textAlign: 'center',
//     marginTop: '20px',
//     opacity: 0.7,
//   },

//   // ===== STEP 2: PREDICTION TYPE =====
//   predictionCard: {
//     background: 'rgba(20, 35, 60, 0.4)',
//     border: '1px solid rgba(255, 255, 255, 0.05)',
//     borderRadius: '24px',
//     padding: 'clamp(30px, 6vw, 50px) clamp(25px, 4vw, 40px)',
//     backdropFilter: 'blur(20px)',
//     boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4)',
//     width: '100%',
//     maxWidth: '900px',
//   },
//   predictionTitle: {
//     fontSize: 'clamp(28px, 5vw, 40px)',
//     fontWeight: '700',
//     margin: '0 0 10px 0',
//     textAlign: 'center',
//     color: '#ffffff',
//   },
//   predictionSubtitle: {
//     fontSize: 'clamp(14px, 2vw, 16px)',
//     color: '#aabbcc',
//     textAlign: 'center',
//     marginBottom: '40px',
//   },
//   predictionGrid: {
//     display: 'grid',
//     gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
//     gap: '20px',
//     marginBottom: '35px',
//   },
//   predictionOption: {
//     background: 'rgba(25, 40, 70, 0.5)',
//     border: '1px solid rgba(255, 255, 255, 0.1)',
//     borderRadius: '20px',
//     padding: '35px 25px',
//     textAlign: 'center',
//     cursor: 'pointer',
//     transition: 'all 0.3s ease',
//   },
//   predictionOptionSelected: {
//     background: 'rgba(70, 100, 200, 0.2)',
//     border: '2px solid rgba(100, 150, 255, 0.6)',
//     boxShadow: '0 10px 40px rgba(70, 100, 200, 0.3)',
//     transform: 'translateY(-5px)',
//   },
//   predictionIcon: {
//     fontSize: '48px',
//     marginBottom: '15px',
//   },
//   predictionOptionTitle: {
//     fontSize: '20px',
//     fontWeight: '700',
//     margin: '0 0 10px 0',
//     color: '#ffffff',
//   },
//   predictionOptionDesc: {
//     fontSize: '13px',
//     color: '#99aabb',
//     lineHeight: '1.5',
//     margin: 0,
//   },
//   errorTextCenter: {
//     color: '#ff6b6b',
//     fontSize: '13px',
//     textAlign: 'center',
//     marginTop: '15px',
//     fontWeight: '600',
//     letterSpacing: '0.5px',
//   },

//   // ===== STEP 3 & 4: OPTIONAL QUESTIONS =====
//   optionalBadge: {
//     display: 'inline-flex',
//     alignItems: 'center',
//     gap: '8px',
//     background: 'rgba(100, 200, 150, 0.15)',
//     border: '1px solid rgba(100, 200, 150, 0.3)',
//     borderRadius: '20px',
//     padding: '8px 16px',
//     fontSize: '12px',
//     fontWeight: '600',
//     color: '#66dd99',
//     marginBottom: '25px',
//   },
//   optionalIcon: {
//     fontSize: '16px',
//   },
//   textarea: {
//     width: '100%',
//     background: 'rgba(15, 25, 45, 0.6)',
//     border: '1px solid rgba(255, 255, 255, 0.1)',
//     borderRadius: '12px',
//     padding: '16px 18px',
//     fontSize: '15px',
//     color: '#ffffff',
//     outline: 'none',
//     transition: 'all 0.3s ease',
//     fontFamily: 'inherit',
//     resize: 'vertical',
//     lineHeight: '1.6',
//   },
//   charCounter: {
//     fontSize: '11px',
//     color: '#88aaff',
//     textAlign: 'right',
//     marginTop: '8px',
//     opacity: 0.7,
//   },
//   hintText: {
//     fontSize: '12px',
//     color: '#99aabb',
//     marginTop: '10px',
//     marginLeft: '4px',
//     lineHeight: '1.5',
//   },
//   buttonGroup: {
//     display: 'flex',
//     gap: '15px',
//     marginTop: '15px',
//     flexWrap: 'wrap',
//   },
//   skipBtn: {
//     flex: '1',
//     minWidth: '140px',
//     background: 'rgba(255, 255, 255, 0.05)',
//     border: '1px solid rgba(255, 255, 255, 0.15)',
//     borderRadius: '12px',
//     padding: '14px 30px',
//     fontSize: '15px',
//     fontWeight: '600',
//     color: '#aabbcc',
//     cursor: 'pointer',
//     transition: 'all 0.3s ease',
//   },

//   // ===== STEP 4: FOREVER PERSON EXPLANATION BOX =====
//   explanationBox: {
//     background: 'rgba(100, 80, 200, 0.1)',
//     border: '1px solid rgba(150, 130, 255, 0.3)',
//     borderRadius: '16px',
//     padding: '16px 20px',
//     marginBottom: '25px',
//   },
//   explanationTitle: {
//     fontSize: '16px',
//     fontWeight: '700',
//     color: '#bbaaff',
//     margin: '0 0 8px 0',
//   },
//   explanationText: {
//     fontSize: '13px',
//     color: '#ccddee',
//     lineHeight: '1.6',
//     margin: '0 0 10px 0',
//   },
//   explanationList: {
//     fontSize: '13px',
//     color: '#ccddee',
//     lineHeight: '1.7',
//     margin: '0',
//     paddingLeft: '20px',
//     listStyle: 'none',
//   },

//   // ===== STEP 5: LOVE LIFE DETAILS =====
//   statusGrid: {
//     display: 'grid',
//     gridTemplateColumns: 'repeat(auto-fit, minmax(110px, 1fr))',
//     gap: '12px',
//   },
//   statusBtn: {
//     background: 'rgba(255, 255, 255, 0.05)',
//     border: '1px solid rgba(255, 255, 255, 0.15)',
//     borderRadius: '10px',
//     padding: '12px 20px',
//     fontSize: '14px',
//     fontWeight: '600',
//     color: '#aabbcc',
//     cursor: 'pointer',
//     transition: 'all 0.3s ease',
//   },
//   statusBtnSelected: {
//     background: 'rgba(100, 150, 255, 0.2)',
//     borderColor: 'rgba(100, 150, 255, 0.6)',
//     color: '#88aaff',
//     boxShadow: '0 5px 20px rgba(100, 150, 255, 0.3)',
//   },

//   // ===== STEP 6: REVIEW SCREEN =====
//   reviewHeader: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: '10px',
//     flexWrap: 'wrap',
//     gap: '10px',
//   },
//   reviewSection: {
//     background: 'rgba(255, 255, 255, 0.03)',
//     border: '1px solid rgba(255, 255, 255, 0.08)',
//     borderRadius: '14px',
//     marginBottom: '15px',
//     overflow: 'hidden',
//   },
//   reviewSectionHeader: {
//     width: '100%',
//     background: 'transparent',
//     border: 'none',
//     padding: '16px 20px',
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     cursor: 'pointer',
//     transition: 'background 0.3s ease',
//     color: '#ffffff',
//   },
//   reviewSectionTitle: {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '10px',
//     fontSize: '16px',
//     fontWeight: '600',
//   },
//   reviewIcon: {
//     fontSize: '20px',
//   },
//   expandIcon: {
//     fontSize: '12px',
//     color: '#88aaff',
//   },
//   reviewSectionContent: {
//     padding: '10px 20px 20px 20px',
//     borderTop: '1px solid rgba(255, 255, 255, 0.05)',
//   },
//   reviewItem: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     padding: '10px 0',
//     borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
//   },
//   reviewLabel: {
//     fontSize: '11px',
//     fontWeight: '600',
//     letterSpacing: '0.5px',
//     color: '#88aaff',
//   },
//   reviewValue: {
//     fontSize: '14px',
//     color: '#ffffff',
//     fontWeight: '500',
//   },
//   reviewTextBlock: {
//     marginBottom: '15px',
//   },
//   reviewTextValue: {
//     fontSize: '13px',
//     color: '#ccddee',
//     lineHeight: '1.6',
//     marginTop: '8px',
//     marginBottom: '0',
//   },
//   scopeBadges: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     gap: '10px',
//   },
//   scopeBadge: {
//     background: 'rgba(100, 150, 255, 0.15)',
//     border: '1px solid rgba(100, 150, 255, 0.3)',
//     borderRadius: '20px',
//     padding: '8px 16px',
//     fontSize: '13px',
//     fontWeight: '600',
//     color: '#88aaff',
//   },
//   emptyText: {
//     fontSize: '13px',
//     color: '#6688aa',
//     fontStyle: 'italic',
//   },
//   generateBtn: {
//     background: 'linear-gradient(135deg, #667eea 0%, #4facfe 100%)',
//     border: 'none',
//     borderRadius: '14px',
//     padding: '18px 40px',
//     fontSize: '18px',
//     fontWeight: '700',
//     color: '#ffffff',
//     cursor: 'pointer',
//     width: '100%',
//     boxShadow: '0 15px 40px rgba(70, 100, 200, 0.5)',
//     transition: 'all 0.3s ease',
//     marginTop: '20px',
//   },
//   encryptedFooter: {
//     fontSize: '11px',
//     color: '#6699ff',
//     textAlign: 'center',
//     marginTop: '15px',
//     opacity: 0.7,
//     letterSpacing: '0.5px',
//   },

//   // ===== RESPONSIVE MEDIA QUERIES (applied via inline conditions in components) =====
// };








// final output i guess 
// import React, { useState, useEffect } from 'react';

// export default function App() {
//   // Load saved step and formData from localStorage on mount
//   const [step, setStep] = useState(() => {
//     const savedStep = localStorage.getItem('futureInsightStep');
//     return savedStep ? parseInt(savedStep) : 0;
//   });
  
//   const [formData, setFormData] = useState(() => {
//     const savedData = localStorage.getItem('futureInsightData');
//     return savedData ? JSON.parse(savedData) : {
//       name: '',
//       birthDate: '',
//       predictionTypes: [],
//       lifeFeeling: '',
//       foreverPerson: '',
//       foreverPersonReason: '',
//       partnerName: '',
//       relationshipStatus: '',
//       relationshipDesc: ''
//     };
//   });

//   // Auto-save formData to localStorage whenever it changes
//   useEffect(() => {
//     localStorage.setItem('futureInsightData', JSON.stringify(formData));
//   }, [formData]);

//   // Auto-save step to localStorage whenever it changes
//   useEffect(() => {
//     localStorage.setItem('futureInsightStep', step.toString());
//   }, [step]);

//   const totalSteps = 8;

//   const nextStep = () => setStep(prev => prev + 1);
//   const skipStep = () => setStep(prev => prev + 1);
  
//   const resetApp = () => {
//     setStep(0);
//     setFormData({
//       name: '',
//       birthDate: '',
//       predictionTypes: [],
//       lifeFeeling: '',
//       foreverPerson: '',
//       foreverPersonReason: '',
//       partnerName: '',
//       relationshipStatus: '',
//       relationshipDesc: ''
//     });
//     // Clear localStorage
//     localStorage.removeItem('futureInsightStep');
//     localStorage.removeItem('futureInsightData');
//   };

//   return (
//     <div style={styles.app}>
//       <style>
//         {`
//           @keyframes rotate {
//             from { transform: rotate(0deg); }
//             to { transform: rotate(360deg); }
//           }
//         `}
//       </style>
//       {/* Fixed Navbar */}
//       <nav style={styles.navbar}>
//         <div style={styles.navContent}>
//           <div style={styles.logo}>
//             <span style={styles.logoIcon}>🔮</span>
//             <span style={styles.logoText}>FUTURE INSIGHT</span>
//           </div>
//           {step > 0 && (
//             <div style={styles.navRight}>
//               <div style={styles.progressBadge}>
//                 STEP {step} OF {totalSteps}
//               </div>
//             </div>
//           )}
//           {step === 0 && (
//             <div style={styles.navRight}>
//               <button style={styles.iconBtn}>⚙️</button>
//               <button style={styles.iconBtn}>❓</button>
//             </div>
//           )}
//         </div>
//       </nav>

//       {/* Main View - Component Switching */}
//       <main style={styles.mainView}>
//         {step === 0 && <WelcomeScreen onStart={nextStep} />}
//         {step === 1 && <BasicDetailsScreen formData={formData} setFormData={setFormData} onNext={nextStep} />}
//         {step === 2 && <PredictionTypeScreen formData={formData} setFormData={setFormData} onNext={nextStep} />}
//         {step === 3 && <LifeFeelingScreen formData={formData} setFormData={setFormData} onNext={nextStep} onSkip={skipStep} />}
//         {step === 4 && <MistakesScreen formData={formData} setFormData={setFormData} onNext={nextStep} onSkip={skipStep} />}
//         {step === 5 && (
//           formData.predictionTypes?.includes('love') 
//             ? <LoveLifeScreen formData={formData} setFormData={setFormData} onNext={nextStep} />
//             : (() => { nextStep(); return null; })()
//         )}
//         {step === 6 && <ReviewScreen formData={formData} onNext={nextStep} />}
//         {step === 7 && <LoadingScreen onComplete={nextStep} />}
//         {step === 9 && <ResultsScreen formData={formData} onRestart={resetApp} />}
//       </main>
//     </div>
//   );
// }

// // ==================== STEP 0: WELCOME SCREEN ====================
// function WelcomeScreen({ onStart }) {
//   return (
//     <div style={styles.stepContainer}>
//       <div style={styles.welcomeCard}>
//         {/* Logo Icon */}
//         <div style={styles.welcomeIconContainer}>
//           <div style={styles.welcomeIcon}>
//             <div style={styles.iconLayers}>
//               <div style={styles.iconLayer1}></div>
//               <div style={styles.iconLayer2}></div>
//               <div style={styles.iconLayer3}></div>
//             </div>
//           </div>
//         </div>

//         {/* Title */}
//         <h1 style={styles.welcomeTitle}>Future Insight</h1>
//         <p style={styles.welcomeSubtitle}>BRIGHT • DARK • LOVE PATH</p>

//         {/* Start Button */}
//         <button 
//           style={styles.startBtn} 
//           onClick={onStart}
//           onMouseEnter={(e) => {
//             e.target.style.transform = 'translateY(-3px)';
//             e.target.style.boxShadow = '0 15px 40px rgba(70, 100, 200, 0.6)';
//           }}
//           onMouseLeave={(e) => {
//             e.target.style.transform = 'translateY(0)';
//             e.target.style.boxShadow = '0 10px 30px rgba(70, 100, 200, 0.4)';
//           }}
//         >
//           Start Prediction ✨
//         </button>

//         {/* Footer Text */}
//         <p style={styles.welcomeFooter}>V1.0 • SECURE & PRIVATE CONNECTION</p>
//       </div>

//       {/* Bottom Attribution */}
//       <div style={styles.attribution}>
//         POWERED BY NEURAL INSIGHT ENGINE
//       </div>
//     </div>
//   );
// }

// // ==================== STEP 1: BASIC DETAILS SCREEN ====================
// function BasicDetailsScreen({ formData, setFormData, onNext }) {
//   const [errors, setErrors] = useState({ name: '', birthDate: '' });

//   const handleSubmit = () => {
//     let hasError = false;
//     const newErrors = { name: '', birthDate: '' };

//     if (!formData.name.trim()) {
//       newErrors.name = 'Please enter your name';
//       hasError = true;
//     }

//     if (!formData.birthDate) {
//       newErrors.birthDate = 'Please select your birth date';
//       hasError = true;
//     }

//     setErrors(newErrors);

//     if (!hasError) {
//       onNext();
//     }
//   };

//   return (
//     <div style={styles.stepContainer}>
//       <div style={styles.card}>
//         {/* Header */}
//         <div style={styles.cardHeader}>
//           <h2 style={styles.cardTitle}>Basic Details</h2>
//           <div style={styles.stepBadge}>STEP 1 OF 6</div>
//         </div>
//         <p style={styles.cardSubtitle}>Welcome to your future. Let's start with the basics.</p>

//         {/* Form */}
//         <div style={styles.formGroup}>
//           <label style={styles.label}>FULL NAME</label>
//           <div style={styles.inputContainer}>
//             <span style={styles.inputIcon}>📋</span>
//             <input
//               type="text"
//               placeholder="e.g. Alexander Pierce"
//               value={formData.name}
//               onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//               style={{
//                 ...styles.input,
//                 ...(errors.name ? styles.inputError : {})
//               }}
//             />
//           </div>
//           {errors.name && <p style={styles.errorText}>{errors.name}</p>}
//         </div>

//         <div style={styles.formGroup}>
//           <label style={styles.label}>BIRTH DATE</label>
//           <div style={styles.inputContainer}>
//             <span style={styles.inputIcon}>📅</span>
//             <input
//               type="date"
//               value={formData.birthDate}
//               onChange={(e) => setFormData({ ...formData, birthDate: e.target.value })}
//               style={{
//                 ...styles.input,
//                 ...(errors.birthDate ? styles.inputError : {})
//               }}
//             />
//           </div>
//           {errors.birthDate && <p style={styles.errorText}>{errors.birthDate}</p>}
//         </div>

//         {/* Continue Button */}
//         <button 
//           style={{...styles.continueBtn, width: '100%', marginTop: '10px'}} 
//           onClick={handleSubmit}
//           onMouseEnter={(e) => {
//             e.target.style.transform = 'translateY(-2px)';
//             e.target.style.boxShadow = '0 15px 40px rgba(70, 100, 200, 0.5)';
//           }}
//           onMouseLeave={(e) => {
//             e.target.style.transform = 'translateY(0)';
//             e.target.style.boxShadow = '0 10px 30px rgba(70, 100, 200, 0.4)';
//           }}
//         >
//           Continue →
//         </button>

//         {/* Footer */}
//         <p style={styles.cardFooter}>
//           🔒 Your data is encrypted and used only for prediction accuracy.
//         </p>
//       </div>
//     </div>
//   );
// }

// // ==================== STEP 2: PREDICTION TYPE SELECTION ====================
// function PredictionTypeScreen({ formData, setFormData, onNext }) {
//   const [error, setError] = useState('');

//   const predictionOptions = [
//     {
//       id: 'bright',
//       icon: '☀️',
//       title: 'Bright Side',
//       description: 'Optimistic insights and positive outcomes for your journey.',
//     },
//     {
//       id: 'dark',
//       icon: '🌙',
//       title: 'Dark Side',
//       description: 'Mysterious paths and hidden truths from the shadows.',
//     },
//     {
//       id: 'love',
//       icon: '❤️',
//       title: 'Love Life',
//       description: 'Discover your romantic destiny and connections.',
//     },
//   ];

//   const togglePrediction = (id) => {
//     const current = formData.predictionTypes || [];
//     if (current.includes(id)) {
//       setFormData({
//         ...formData,
//         predictionTypes: current.filter(t => t !== id)
//       });
//     } else {
//       setFormData({
//         ...formData,
//         predictionTypes: [...current, id]
//       });
//     }
//     setError('');
//   };

//   const handleContinue = () => {
//     if (!formData.predictionTypes || formData.predictionTypes.length === 0) {
//       setError('REQUIRES SELECTION');
//       return;
//     }
//     onNext();
//   };

//   return (
//     <div style={styles.stepContainer}>
//       <div style={styles.predictionCard}>
//         {/* Header */}
//         <h2 style={styles.predictionTitle}>Choose Your Prediction</h2>
//         <p style={styles.predictionSubtitle}>Select the path you wish to explore today.</p>

//         {/* Prediction Cards */}
//         <div style={styles.predictionGrid}>
//           {predictionOptions.map((option) => {
//             const isSelected = formData.predictionTypes?.includes(option.id);
//             return (
//               <div
//                 key={option.id}
//                 onClick={() => togglePrediction(option.id)}
//                 style={{
//                   ...styles.predictionOption,
//                   ...(isSelected ? styles.predictionOptionSelected : {}),
//                 }}
//                 onMouseEnter={(e) => {
//                   if (!isSelected) {
//                     e.currentTarget.style.borderColor = 'rgba(100, 150, 255, 0.5)';
//                     e.currentTarget.style.transform = 'translateY(-5px)';
//                   }
//                 }}
//                 onMouseLeave={(e) => {
//                   if (!isSelected) {
//                     e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
//                     e.currentTarget.style.transform = 'translateY(0)';
//                   }
//                 }}
//               >
//                 <div style={styles.predictionIcon}>{option.icon}</div>
//                 <h3 style={styles.predictionOptionTitle}>{option.title}</h3>
//                 <p style={styles.predictionOptionDesc}>{option.description}</p>
//               </div>
//             );
//           })}
//         </div>

//         {/* Continue Button */}
//         <button 
//           style={{...styles.continueBtn, width: '100%'}}
//           onClick={handleContinue}
//           onMouseEnter={(e) => {
//             e.target.style.transform = 'translateY(-2px)';
//             e.target.style.boxShadow = '0 15px 40px rgba(70, 100, 200, 0.5)';
//           }}
//           onMouseLeave={(e) => {
//             e.target.style.transform = 'translateY(0)';
//             e.target.style.boxShadow = '0 10px 30px rgba(70, 100, 200, 0.4)';
//           }}
//         >
//           CONTINUE
//         </button>

//         {error && <p style={styles.errorTextCenter}>{error}</p>}
//       </div>

//       {/* Footer Attribution */}
//       <div style={styles.attribution}>
//         © 2024 FUTURE INSIGHT AI. ALL DIMENSIONS SECURED.
//       </div>
//     </div>
//   );
// }

// // ==================== STEP 3: CURRENT LIFE FEELING (OPTIONAL) ====================
// function LifeFeelingScreen({ formData, setFormData, onNext, onSkip }) {
//   const maxChars = 50;
//   const currentLength = formData.lifeFeeling?.length || 0;

//   return (
//     <div style={styles.stepContainer}>
//       <div style={styles.card}>
//         {/* Header */}
//         <div style={styles.cardHeader}>
//           <h2 style={styles.cardTitle}>FriendShip Rate CheackUp : </h2>
//           <div style={styles.stepBadge}>STEP 3 OF 6</div>
//         </div>
//         <p style={styles.cardSubtitle}>
//           Name a friend : 
//         </p>

//         {/* Optional Badge */}
//         <div style={styles.optionalBadge}>
//           <span style={styles.optionalIcon}>💭</span>
//           <span>Optional - Enhances Accuracy</span>
//         </div>

//         {/* Textarea */}
//         <div style={styles.formGroup}>
//           <label style={styles.label}>NAME OF FRND</label>
//           <textarea
//             placeholder="e.g. Nano"
//             value={formData.lifeFeeling || ''}
//             onChange={(e) => {
//               if (e.target.value.length <= maxChars) {
//                 setFormData({ ...formData, lifeFeeling: e.target.value });
//               }
//             }}
//             style={styles.textarea}
//             rows={6}
//           />
//           <div style={styles.charCounter}>
//             {currentLength} / {maxChars} characters
//           </div>
//           <p style={styles.hintText}>
//             💡 Deep reflection improves prediction accuracy. Recommended
//           </p>
//         </div>

//         {/* Buttons */}
//         <div style={styles.buttonGroup}>
//           <button 
//             style={styles.skipBtn}
//             onClick={onSkip}
//             onMouseEnter={(e) => {
//               e.target.style.background = 'rgba(255, 255, 255, 0.08)';
//             }}
//             onMouseLeave={(e) => {
//               e.target.style.background = 'rgba(255, 255, 255, 0.05)';
//             }}
//           >
//             Skip this step
//           </button>
//           <button 
//             style={styles.continueBtn}
//             onClick={onNext}
//             onMouseEnter={(e) => {
//               e.target.style.transform = 'translateY(-2px)';
//               e.target.style.boxShadow = '0 15px 40px rgba(70, 100, 200, 0.5)';
//             }}
//             onMouseLeave={(e) => {
//               e.target.style.transform = 'translateY(0)';
//               e.target.style.boxShadow = '0 10px 30px rgba(70, 100, 200, 0.4)';
//             }}
//           >
//             Continue →
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// // ==================== STEP 4: FOREVER PERSON (OPTIONAL) ====================
// function MistakesScreen({ formData, setFormData, onNext, onSkip }) {
//   return (
//     <div style={styles.stepContainer}>
//       <div style={styles.card}>
//         {/* Header */}
//         <div style={styles.cardHeader}>
//           <h2 style={styles.cardTitle}>Your Forever Person</h2>
//           <div style={styles.stepBadge}>STEP 4 OF 6</div>
//         </div>
//         <p style={styles.cardSubtitle}>
//           Who is the ONE person you want in your life until the very end?
//         </p>

//         {/* Explanation Box */}
//         <div style={styles.explanationBox}>
//           <h3 style={styles.explanationTitle}>🌟 Choose Your Soul Connection</h3>
//           <p style={styles.explanationText}>
//             Among everyone in your life - who is that ONE person you want by your side until death?
//           </p>
//           <ul style={styles.explanationList}>
//             <li>✓ Any gender • Any relationship (friend, family, partner, anyone)</li>
//             <li>⚠️ <strong>Only ONE person</strong> - the one who matters most to your soul</li>
//           </ul>
//         </div>

//         {/* Forever Person Input */}
//         <div style={styles.formGroup}>
//           <label style={styles.label}>WHO IS YOUR FOREVER PERSON? 💖</label>
//           <div style={styles.inputContainer}>
//             <span style={styles.inputIcon}>👤</span>
//             <input
//               type="text"
//               placeholder="Enter their name... (the ONE person you choose)"
//               value={formData.foreverPerson || ''}
//               onChange={(e) => setFormData({ ...formData, foreverPerson: e.target.value })}
//               style={styles.input}
//             />
//           </div>
//           <p style={styles.hintText}>
//             💭 Think about your last day on Earth. Who do you want there? That's your answer.
//           </p>
//         </div>

//         {/* Optional: Tell us more */}
//         <div style={styles.formGroup}>
//           <label style={styles.label}>WHY THIS PERSON? (OPTIONAL)</label>
//           <textarea
//             placeholder="What makes this person irreplaceable in your life?"
//             value={formData.foreverPersonReason || ''}
//             onChange={(e) => {
//               if (e.target.value.length <= 200) {
//                 setFormData({ ...formData, foreverPersonReason: e.target.value });
//               }
//             }}
//             style={styles.textarea}
//             rows={3}
//           />
//           <div style={styles.charCounter}>
//             {(formData.foreverPersonReason?.length || 0)} / 200 characters
//           </div>
//         </div>

//         {/* Buttons */}
//         <div style={styles.buttonGroup}>
//           <button 
//             style={styles.skipBtn}
//             onClick={onSkip}
//             onMouseEnter={(e) => {
//               e.target.style.background = 'rgba(255, 255, 255, 0.08)';
//             }}
//             onMouseLeave={(e) => {
//               e.target.style.background = 'rgba(255, 255, 255, 0.05)';
//             }}
//           >
//             Skip this step
//           </button>
//           <button 
//             style={styles.continueBtn}
//             onClick={onNext}
//             onMouseEnter={(e) => {
//               e.target.style.transform = 'translateY(-2px)';
//               e.target.style.boxShadow = '0 15px 40px rgba(70, 100, 200, 0.5)';
//             }}
//             onMouseLeave={(e) => {
//               e.target.style.transform = 'translateY(0)';
//               e.target.style.boxShadow = '0 10px 30px rgba(70, 100, 200, 0.4)';
//             }}
//           >
//             Continue →
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// // ==================== STEP 5: LOVE LIFE DETAILS (CONDITIONAL) ====================
// function LoveLifeScreen({ formData, setFormData, onNext }) {
//   const statusOptions = ['Single', 'Dating', 'Committed', 'Married', 'Complicated'];

//   return (
//     <div style={styles.stepContainer}>
//       <div style={styles.card}>
//         {/* Header */}
//         <div style={styles.cardHeader}>
//           <h2 style={styles.cardTitle}>Love Life Details</h2>
//           <div style={styles.stepBadge}>STEP 5 OF 6</div>
//         </div>
//         <p style={styles.cardSubtitle}>
//           Provide details to refine your connection prediction.
//         </p>

//         {/* Partner Name */}
//         <div style={styles.formGroup}>
//           <label style={styles.label}>PARTNER NAME (OPTIONAL)</label>
//           <div style={styles.inputContainer}>
//             <span style={styles.inputIcon}>💕</span>
//             <input
//               type="text"
//               placeholder="Enter full name..."
//               value={formData.partnerName || ''}
//               onChange={(e) => setFormData({ ...formData, partnerName: e.target.value })}
//               style={styles.input}
//             />
//           </div>
//         </div>

//         {/* Relationship Status */}
//         <div style={styles.formGroup}>
//           <label style={styles.label}>RELATIONSHIP STATUS</label>
//           <div style={styles.statusGrid}>
//             {statusOptions.map(status => {
//               const isSelected = formData.relationshipStatus === status;
//               return (
//                 <button
//                   key={status}
//                   onClick={() => setFormData({ ...formData, relationshipStatus: status })}
//                   style={{
//                     ...styles.statusBtn,
//                     ...(isSelected ? styles.statusBtnSelected : {})
//                   }}
//                   onMouseEnter={(e) => {
//                     if (!isSelected) {
//                       e.target.style.background = 'rgba(100, 150, 255, 0.15)';
//                       e.target.style.borderColor = 'rgba(100, 150, 255, 0.4)';
//                     }
//                   }}
//                   onMouseLeave={(e) => {
//                     if (!isSelected) {
//                       e.target.style.background = 'rgba(255, 255, 255, 0.05)';
//                       e.target.style.borderColor = 'rgba(255, 255, 255, 0.15)';
//                     }
//                   }}
//                 >
//                   {status}
//                 </button>
//               );
//             })}
//           </div>
//         </div>

//         {/* About Connection */}
//         <div style={styles.formGroup}>
//           <label style={styles.label}>ABOUT THIS CONNECTION (OPTIONAL)</label>
//           <textarea
//             placeholder="Share a brief history or current dynamic..."
//             value={formData.relationshipDesc || ''}
//             onChange={(e) => {
//               if (e.target.value.length <= 300) {
//                 setFormData({ ...formData, relationshipDesc: e.target.value });
//               }
//             }}
//             style={styles.textarea}
//             rows={4}
//           />
//           <div style={styles.charCounter}>
//             {(formData.relationshipDesc?.length || 0)} / 300 characters
//           </div>
//         </div>

//         {/* Continue Button */}
//         <button 
//           style={{...styles.continueBtn, width: '100%', marginTop: '10px'}}
//           onClick={onNext}
//           onMouseEnter={(e) => {
//             e.target.style.transform = 'translateY(-2px)';
//             e.target.style.boxShadow = '0 15px 40px rgba(70, 100, 200, 0.5)';
//           }}
//           onMouseLeave={(e) => {
//             e.target.style.transform = 'translateY(0)';
//             e.target.style.boxShadow = '0 10px 30px rgba(70, 100, 200, 0.4)';
//           }}
//         >
//           Continue →
//         </button>
//       </div>
//     </div>
//   );
// }

// // ==================== STEP 6: REVIEW SCREEN ====================
// function ReviewScreen({ formData, onNext }) {
//   const [expandedSections, setExpandedSections] = useState({
//     basic: true,
//     predictions: false,
//     reflection: false
//   });

//   const toggleSection = (section) => {
//     setExpandedSections(prev => ({
//       ...prev,
//       [section]: !prev[section]
//     }));
//   };

//   return (
//     <div style={styles.stepContainer}>
//       <div style={{...styles.card, maxWidth: '700px'}}>
//         {/* Header */}
//         <div style={styles.reviewHeader}>
//           <h2 style={styles.cardTitle}>Review Your Inputs</h2>
//           <div style={styles.stepBadge}>STEP 6 OF 6</div>
//         </div>
//         <p style={styles.cardSubtitle}>
//           Finalize your parameters before initiating the neural synthesis.
//         </p>

//         {/* Basic Details Section */}
//         <div style={styles.reviewSection}>
//           <button 
//             style={styles.reviewSectionHeader}
//             onClick={() => toggleSection('basic')}
//           >
//             <div style={styles.reviewSectionTitle}>
//               <span style={styles.reviewIcon}>👤</span>
//               <span>Basic Details</span>
//             </div>
//             <span style={styles.expandIcon}>{expandedSections.basic ? '▲' : '▼'}</span>
//           </button>
//           {expandedSections.basic && (
//             <div style={styles.reviewSectionContent}>
//               <div style={styles.reviewItem}>
//                 <span style={styles.reviewLabel}>SUBJECT NAME</span>
//                 <span style={styles.reviewValue}>{formData.name}</span>
//               </div>
//               <div style={styles.reviewItem}>
//                 <span style={styles.reviewLabel}>TARGET DATE</span>
//                 <span style={styles.reviewValue}>{formData.birthDate}</span>
//               </div>
//             </div>
//           )}
//         </div>

//         {/* Prediction Path Section */}
//         <div style={styles.reviewSection}>
//           <button 
//             style={styles.reviewSectionHeader}
//             onClick={() => toggleSection('predictions')}
//           >
//             <div style={styles.reviewSectionTitle}>
//               <span style={styles.reviewIcon}>🔮</span>
//               <span>Prediction Path</span>
//             </div>
//             <span style={styles.expandIcon}>{expandedSections.predictions ? '▲' : '▼'}</span>
//           </button>
//           {expandedSections.predictions && (
//             <div style={styles.reviewSectionContent}>
//               <div style={styles.scopeBadges}>
//                 {formData.predictionTypes?.includes('bright') && (
//                   <span style={styles.scopeBadge}>🌟 Bright Side</span>
//                 )}
//                 {formData.predictionTypes?.includes('dark') && (
//                   <span style={styles.scopeBadge}>🌙 Dark Side</span>
//                 )}
//                 {formData.predictionTypes?.includes('love') && (
//                   <span style={styles.scopeBadge}>❤️ Love Life</span>
//                 )}
//               </div>
//             </div>
//           )}
//         </div>

//         {/* Reflection Section */}
//         <div style={styles.reviewSection}>
//           <button 
//             style={styles.reviewSectionHeader}
//             onClick={() => toggleSection('reflection')}
//           >
//             <div style={styles.reviewSectionTitle}>
//               <span style={styles.reviewIcon}>💭</span>
//               <span>Reflection</span>
//             </div>
//             <span style={styles.expandIcon}>{expandedSections.reflection ? '▲' : '▼'}</span>
//           </button>
//           {expandedSections.reflection && (
//             <div style={styles.reviewSectionContent}>
//               {formData.lifeFeeling && (
//                 <div style={styles.reviewTextBlock}>
//                   <span style={styles.reviewLabel}>LIFE REFLECTION</span>
//                   <p style={styles.reviewTextValue}>{formData.lifeFeeling}</p>
//                 </div>
//               )}
//               {formData.foreverPerson && (
//                 <div style={styles.reviewTextBlock}>
//                   <span style={styles.reviewLabel}>FOREVER PERSON</span>
//                   <p style={styles.reviewTextValue}>{formData.foreverPerson}</p>
//                 </div>
//               )}
//               {!formData.lifeFeeling && !formData.foreverPerson && (
//                 <p style={styles.emptyText}>No reflection data provided</p>
//               )}
//             </div>
//           )}
//         </div>

//         {/* Generate Button */}
//         <button 
//           style={styles.generateBtn}
//           onClick={onNext}
//           onMouseEnter={(e) => {
//             e.target.style.transform = 'translateY(-2px) scale(1.02)';
//             e.target.style.boxShadow = '0 20px 50px rgba(70, 100, 200, 0.6)';
//           }}
//           onMouseLeave={(e) => {
//             e.target.style.transform = 'translateY(0) scale(1)';
//             e.target.style.boxShadow = '0 15px 40px rgba(70, 100, 200, 0.5)';
//           }}
//         >
//           Generate Prediction ⚡
//         </button>

//         {/* Footer */}
//         <p style={styles.encryptedFooter}>
//           🔒 ENCRYPTED END-TO-END PROCESSING
//         </p>
//       </div>
//     </div>
//   );
// }

// // ==================== STEP 7: LOADING SCREEN ====================
// function LoadingScreen({ onComplete }) {
//   const [progress, setProgress] = useState(0);
//   const [statusText, setStatusText] = useState('Analyzing patterns...');

//   const statusMessages = [
//     'Analyzing patterns...',
//     'Building insight...',
//     'Revealing paths...',
//     'Synthesizing predictions...',
//     'Finalizing results...'
//   ];

//   useEffect(() => {
//     let progressInterval;
//     let messageIndex = 0;

//     // Progress bar animation
//     progressInterval = setInterval(() => {
//       setProgress(prev => {
//         if (prev >= 100) {
//           clearInterval(progressInterval);
//           setTimeout(() => onComplete(), 500);
//           return 100;
//         }
//         return prev + 2;
//       });
//     }, 60);

//     // Status message rotation
//     const messageInterval = setInterval(() => {
//       messageIndex = (messageIndex + 1) % statusMessages.length;
//       setStatusText(statusMessages[messageIndex]);
//     }, 1200);

//     return () => {
//       clearInterval(progressInterval);
//       clearInterval(messageInterval);
//     };
//   }, [onComplete]);

//   return (
//     <div style={styles.loadingContainer}>
//       {/* Animated Circles */}
//       <div style={styles.loadingOrbitContainer}>
//         <div style={styles.loadingCenter}></div>
//         <div style={styles.loadingOrbit1}>
//           <div style={styles.loadingDot}></div>
//         </div>
//         <div style={styles.loadingOrbit2}>
//           <div style={styles.loadingDot}></div>
//         </div>
//       </div>

//       {/* Status Text */}
//       <h2 style={styles.loadingTitle}>SYSTEM PROCESS</h2>
//       <p style={styles.loadingStatus}>{statusText}</p>

//       {/* Progress Bar */}
//       <div style={styles.progressBarContainer}>
//         <div style={{...styles.progressBarFill, width: `${progress}%`}}></div>
//       </div>
//       <div style={styles.progressText}>
//         <span>DEEP SYNC</span>
//         <span>{progress}%</span>
//       </div>

//       {/* Footer */}
//       <div style={styles.loadingFooter}>
//         <span>NEURAL ENGINE V4.2</span>
//         <span>•</span>
//         <span>QUANTUM LATENCY: 12MS</span>
//         <span>•</span>
//         <span>SECURE LINK ACTIVE</span>
//       </div>
//     </div>
//   );
// }

// // ==================== STEP 8: RESULTS SCREEN ====================
// function ResultsScreen({ formData, onRestart }) {
//   const [expandedSections, setExpandedSections] = useState({
//     bright: true,
//     dark: false,
//     love: false
//   });

//   // Prediction databases
//   const brightPredictions = [
//     "Your career trajectory shows a significant upward shift. Expect a major breakthrough in creative endeavors within the next lunar cycle. Success is gravitating towards your persistent energy, manifesting as an unexpected offer from a high-profile collaborator.",
//     "A period of abundance approaches. Your financial wisdom will lead to opportunities you haven't yet imagined. The universe is aligning resources in your favor, and your patient efforts are about to yield remarkable returns.",
//     "Your personal growth will accelerate dramatically. You're entering a phase where clarity replaces confusion, and your authentic self emerges powerfully. People will be drawn to your renewed confidence and vision.",
//     "Travel and new experiences will transform your perspective. An unexpected journey will introduce you to people and ideas that reshape your future in the most positive ways.",
//     "Your creative talents are about to be recognized on a larger scale. What you've been building in private will soon demand public attention, bringing fulfillment and validation."
//   ];

//   const darkPredictions = [
//     "A trusted relationship faces a critical test. Someone close to you harbors unspoken resentment that will surface unexpectedly. This revelation, though painful, will ultimately liberate you from a pattern you didn't recognize.",
//     "Financial pressure will mount from an unexpected source. A decision you've postponed will demand immediate attention, forcing you to confront uncomfortable truths about security and independence.",
//     "Your carefully constructed plans will be disrupted by forces beyond your control. This chaos, though initially devastating, is clearing space for something more aligned with your true path.",
//     "A secret you've kept will become increasingly burdensome. The energy required to maintain this facade is draining your vitality and authenticity. Liberation awaits on the other side of truth.",
//     "Health concerns you've ignored will demand attention. Your body is sending increasingly urgent signals that require immediate acknowledgment and action."
//   ];

//   const lovePredictions = [
//     "Your romantic path takes an unexpected turn. If single, a connection forms in the most unlikely circumstances. If partnered, a breakthrough conversation dissolves long-standing barriers and deepens intimacy profoundly.",
//     "The person you can't stop thinking about is thinking about you too. Cosmic timing is aligning for a significant moment between you. Trust the pull you feel - it's reciprocated more than you realize.",
//     "A cycle of relationship patterns is completing. The lessons you've been learning through repeated experiences are finally integrating. Your next connection will reflect this evolution powerfully.",
//     "Distance that has separated you from someone important will soon close. Whether physical or emotional, the gap is narrowing through forces neither of you fully controls.",
//     "Your definition of love is about to expand dramatically. Someone will show you dimensions of connection you haven't previously experienced, fundamentally altering your understanding of intimacy."
//   ];

//   // Get random predictions based on selected types
//   const getRandomPrediction = (array) => {
//     return array[Math.floor(Math.random() * array.length)];
//   };

//   const results = {
//     bright: formData.predictionTypes?.includes('bright') ? getRandomPrediction(brightPredictions) : null,
//     dark: formData.predictionTypes?.includes('dark') ? getRandomPrediction(darkPredictions) : null,
//     love: formData.predictionTypes?.includes('love') ? getRandomPrediction(lovePredictions) : null
//   };

//   const toggleSection = (section) => {
//     setExpandedSections(prev => ({
//       ...prev,
//       [section]: !prev[section]
//     }));
//   };

//   const downloadResults = () => {
//     const text = `
// FUTURE INSIGHT PREDICTION RESULTS
// Generated: ${new Date().toLocaleString()}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// SUBJECT INFORMATION
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Name: ${formData.name}
// Birth Date: ${formData.birthDate}
// ${formData.foreverPerson ? `Forever Person: ${formData.foreverPerson}` : ''}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// PREDICTIONS
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// ${results.bright ? `🌟 BRIGHT SIDE:\n${results.bright}\n\n` : ''}
// ${results.dark ? `🌑 DARK SIDE:\n${results.dark}\n\n` : ''}
// ${results.love ? `❤️ LOVE LIFE:\n${results.love}\n\n` : ''}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Powered by Future Insight AI
// For reflection and entertainment purposes.
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//     `;
    
//     const blob = new Blob([text], { type: 'text/plain' });
//     const url = URL.createObjectURL(blob);
//     const a = document.createElement('a');
//     a.href = url;
//     a.download = `FutureInsight_${formData.name.replace(/\s+/g, '_')}_${Date.now()}.txt`;
//     a.click();
//     URL.revokeObjectURL(url);
//   };

//   return (
//     <div style={styles.resultsContainer}>
//       <div style={styles.resultsCard}>
//         {/* Header */}
//         <div style={styles.resultsHeader}>
//           <h1 style={styles.resultsTitle}>Your Future Insight Is Ready</h1>
//           <p style={styles.resultsSubtitle}>Temporal sync complete. Analysis finalized.</p>
//         </div>

//         {/* Stats Row */}
//         <div style={styles.statsRow}>
//           <div style={styles.statBox}>
//             <div style={styles.statLabel}>CLARITY SCORE</div>
//             <div style={styles.statValue}>98% <span style={styles.statChange}>+2%</span></div>
//           </div>
//           <div style={styles.statBox}>
//             <div style={styles.statLabel}>TEMPORAL DEPTH</div>
//             <div style={styles.statValue}>High <span style={styles.statBadge}>═</span></div>
//           </div>
//           <div style={styles.statBox}>
//             <div style={styles.statLabel}>INSIGHT ACCURACY</div>
//             <div style={styles.statValue}>94% <span style={styles.statLocked}>Locked</span></div>
//           </div>
//         </div>

//         {/* Prediction Sections */}
//         {results.bright && (
//           <div style={styles.predictionSection}>
//             <button 
//               style={styles.predictionHeader}
//               onClick={() => toggleSection('bright')}
//             >
//               <div style={styles.predictionHeaderLeft}>
//                 <span style={styles.predictionIconLarge}>☀️</span>
//                 <span style={styles.predictionSectionTitle}>Bright Side</span>
//               </div>
//               <span style={styles.expandIcon}>{expandedSections.bright ? '▲' : '▼'}</span>
//             </button>
//             {expandedSections.bright && (
//               <div style={styles.predictionContent}>
//                 <p style={styles.predictionText}>{results.bright}</p>
//               </div>
//             )}
//           </div>
//         )}

//         {results.dark && (
//           <div style={styles.predictionSection}>
//             <button 
//               style={styles.predictionHeader}
//               onClick={() => toggleSection('dark')}
//             >
//               <div style={styles.predictionHeaderLeft}>
//                 <span style={styles.predictionIconLarge}>🌙</span>
//                 <span style={styles.predictionSectionTitle}>Dark Side</span>
//               </div>
//               <span style={styles.expandIcon}>{expandedSections.dark ? '▲' : '▼'}</span>
//             </button>
//             {expandedSections.dark && (
//               <div style={styles.predictionContent}>
//                 <p style={styles.predictionText}>{results.dark}</p>
//               </div>
//             )}
//           </div>
//         )}

//         {results.love && (
//           <div style={styles.predictionSection}>
//             <button 
//               style={styles.predictionHeader}
//               onClick={() => toggleSection('love')}
//             >
//               <div style={styles.predictionHeaderLeft}>
//                 <span style={styles.predictionIconLarge}>❤️</span>
//                 <span style={styles.predictionSectionTitle}>Love Life</span>
//               </div>
//               <span style={styles.expandIcon}>{expandedSections.love ? '▲' : '▼'}</span>
//             </button>
//             {expandedSections.love && (
//               <div style={styles.predictionContent}>
//                 <p style={styles.predictionText}>{results.love}</p>
//               </div>
//             )}
//           </div>
//         )}

//         {/* Action Buttons */}
//         <div style={styles.resultsActions}>
//           <button 
//             style={styles.restartBtn}
//             onClick={onRestart}
//             onMouseEnter={(e) => {
//               e.target.style.transform = 'translateY(-2px)';
//               e.target.style.boxShadow = '0 10px 30px rgba(100, 150, 255, 0.4)';
//             }}
//             onMouseLeave={(e) => {
//               e.target.style.transform = 'translateY(0)';
//               e.target.style.boxShadow = 'none';
//             }}
//           >
//             🔄 Restart Session
//           </button>
//           <button 
//             style={styles.exportBtn}
//             onClick={downloadResults}
//             onMouseEnter={(e) => {
//               e.target.style.transform = 'translateY(-2px)';
//               e.target.style.boxShadow = '0 10px 30px rgba(100, 255, 150, 0.3)';
//             }}
//             onMouseLeave={(e) => {
//               e.target.style.transform = 'translateY(0)';
//               e.target.style.boxShadow = 'none';
//             }}
//           >
//             ⬇️ Export Insight
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// // ==================== STYLES ====================
// const styles = {
//   app: {
//     width: '100vw',
//     height: '100vh',
//     backgroundColor: '#0a1628',
//     backgroundImage: 'radial-gradient(circle at 50% 50%, #1a2744 0%, #0a1628 100%)',
//     color: '#ffffff',
//     fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
//     overflow: 'hidden',
//     display: 'flex',
//     flexDirection: 'column',
//   },

//   // ===== NAVBAR =====
//   navbar: {
//     width: '100%',
//     height: '70px',
//     borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
//     backgroundColor: 'rgba(10, 22, 40, 0.8)',
//     backdropFilter: 'blur(10px)',
//     display: 'flex',
//     alignItems: 'center',
//     padding: '0 30px',
//     position: 'sticky',
//     top: 0,
//     zIndex: 100,
//   },
//   navContent: {
//     width: '100%',
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   logo: {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '10px',
//     fontSize: '18px',
//     fontWeight: '700',
//     letterSpacing: '1px',
//   },
//   logoIcon: {
//     fontSize: '24px',
//   },
//   logoText: {
//     background: 'linear-gradient(135deg, #667eea 0%, #4facfe 100%)',
//     WebkitBackgroundClip: 'text',
//     WebkitTextFillColor: 'transparent',
//   },
//   navRight: {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '15px',
//   },
//   iconBtn: {
//     background: 'rgba(255, 255, 255, 0.05)',
//     border: '1px solid rgba(255, 255, 255, 0.1)',
//     borderRadius: '8px',
//     width: '40px',
//     height: '40px',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     cursor: 'pointer',
//     fontSize: '18px',
//     transition: 'all 0.3s ease',
//   },
//   progressBadge: {
//     background: 'rgba(70, 100, 200, 0.2)',
//     border: '1px solid rgba(100, 150, 255, 0.3)',
//     borderRadius: '20px',
//     padding: '8px 16px',
//     fontSize: '12px',
//     fontWeight: '600',
//     letterSpacing: '0.5px',
//     color: '#88aaff',
//   },

//   // ===== MAIN VIEW =====
//   mainView: {
//     flex: 1,
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: '20px',
//     overflow: 'auto',
//   },
//   stepContainer: {
//     width: '100%',
//     maxWidth: '600px',
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     gap: '30px',
//   },

//   // ===== WELCOME SCREEN =====
//   welcomeCard: {
//     background: 'rgba(20, 35, 60, 0.6)',
//     border: '1px solid rgba(255, 255, 255, 0.08)',
//     borderRadius: '24px',
//     padding: 'clamp(40px, 8vw, 60px) clamp(30px, 6vw, 50px)',
//     textAlign: 'center',
//     backdropFilter: 'blur(20px)',
//     boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4)',
//     width: '100%',
//   },
//   welcomeIconContainer: {
//     display: 'flex',
//     justifyContent: 'center',
//     marginBottom: '30px',
//   },
//   welcomeIcon: {
//     width: '100px',
//     height: '100px',
//     background: 'rgba(70, 100, 200, 0.2)',
//     borderRadius: '20px',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     position: 'relative',
//     boxShadow: '0 0 40px rgba(70, 100, 200, 0.4)',
//   },
//   iconLayers: {
//     position: 'relative',
//     width: '50px',
//     height: '50px',
//   },
//   iconLayer1: {
//     position: 'absolute',
//     top: '0',
//     left: '50%',
//     transform: 'translateX(-50%)',
//     width: '45px',
//     height: '12px',
//     background: 'linear-gradient(135deg, #667eea 0%, #4facfe 100%)',
//     borderRadius: '3px',
//     boxShadow: '0 0 20px rgba(100, 150, 255, 0.6)',
//   },
//   iconLayer2: {
//     position: 'absolute',
//     top: '18px',
//     left: '50%',
//     transform: 'translateX(-50%)',
//     width: '40px',
//     height: '12px',
//     background: 'linear-gradient(135deg, #667eea 0%, #4facfe 100%)',
//     borderRadius: '3px',
//     opacity: 0.8,
//   },
//   iconLayer3: {
//     position: 'absolute',
//     top: '36px',
//     left: '50%',
//     transform: 'translateX(-50%)',
//     width: '35px',
//     height: '12px',
//     background: 'linear-gradient(135deg, #667eea 0%, #4facfe 100%)',
//     borderRadius: '3px',
//     opacity: 0.6,
//   },
//   welcomeTitle: {
//     fontSize: 'clamp(32px, 6vw, 48px)',
//     fontWeight: '700',
//     margin: '0 0 10px 0',
//     background: 'linear-gradient(135deg, #ffffff 0%, #d0d0d0 100%)',
//     WebkitBackgroundClip: 'text',
//     WebkitTextFillColor: 'transparent',
//   },
//   welcomeSubtitle: {
//     fontSize: 'clamp(12px, 2vw, 14px)',
//     fontWeight: '600',
//     letterSpacing: '2px',
//     color: '#6699ff',
//     marginBottom: '40px',
//   },
//   startBtn: {
//     background: 'linear-gradient(135deg, #667eea 0%, #4facfe 100%)',
//     border: 'none',
//     borderRadius: '50px',
//     padding: '18px 50px',
//     fontSize: 'clamp(16px, 2.5vw, 18px)',
//     fontWeight: '600',
//     color: '#ffffff',
//     cursor: 'pointer',
//     width: '100%',
//     maxWidth: '400px',
//     boxShadow: '0 10px 30px rgba(70, 100, 200, 0.4)',
//     transition: 'all 0.3s ease',
//     marginBottom: '30px',
//   },
//   welcomeFooter: {
//     fontSize: '11px',
//     color: '#6699ff',
//     letterSpacing: '1px',
//     opacity: '0.6',
//     margin: 0,
//   },
//   attribution: {
//     fontSize: '11px',
//     color: '#556688',
//     letterSpacing: '1.5px',
//     fontWeight: '500',
//   },

//   // ===== PLACEHOLDER =====
//   placeholder: {
//     fontSize: '20px',
//     color: '#88aaff',
//     textAlign: 'center',
//   },

//   // ===== STEP 1: BASIC DETAILS =====
//   card: {
//     background: 'rgba(20, 35, 60, 0.6)',
//     border: '1px solid rgba(255, 255, 255, 0.08)',
//     borderRadius: '20px',
//     padding: 'clamp(25px, 5vw, 40px)',
//     backdropFilter: 'blur(20px)',
//     boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4)',
//     width: '100%',
//   },
//   cardHeader: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: '10px',
//     flexWrap: 'wrap',
//     gap: '10px',
//   },
//   cardTitle: {
//     fontSize: 'clamp(24px, 4vw, 32px)',
//     fontWeight: '700',
//     margin: 0,
//     color: '#ffffff',
//   },
//   stepBadge: {
//     background: 'rgba(70, 100, 200, 0.3)',
//     border: '1px solid rgba(100, 150, 255, 0.4)',
//     borderRadius: '20px',
//     padding: '6px 14px',
//     fontSize: '11px',
//     fontWeight: '600',
//     letterSpacing: '0.5px',
//     color: '#88aaff',
//   },
//   cardSubtitle: {
//     fontSize: '15px',
//     color: '#aabbcc',
//     marginBottom: '30px',
//     marginTop: '5px',
//   },
//   formGroup: {
//     marginBottom: '25px',
//   },
//   label: {
//     fontSize: '12px',
//     fontWeight: '600',
//     letterSpacing: '1px',
//     color: '#88aaff',
//     marginBottom: '10px',
//     display: 'block',
//   },
//   inputContainer: {
//     position: 'relative',
//     display: 'flex',
//     alignItems: 'center',
//   },
//   inputIcon: {
//     position: 'absolute',
//     left: '18px',
//     fontSize: '18px',
//     pointerEvents: 'none',
//   },
//   input: {
//     width: '100%',
//     background: 'rgba(15, 25, 45, 0.6)',
//     border: '1px solid rgba(255, 255, 255, 0.1)',
//     borderRadius: '12px',
//     padding: '14px 18px 14px 50px',
//     fontSize: '15px',
//     color: '#ffffff',
//     outline: 'none',
//     transition: 'all 0.3s ease',
//     fontFamily: 'inherit',
//   },
//   inputError: {
//     borderColor: 'rgba(255, 100, 100, 0.5)',
//   },
//   errorText: {
//     color: '#ff6b6b',
//     fontSize: '12px',
//     marginTop: '6px',
//     marginLeft: '4px',
//   },
//   continueBtn: {
//     flex: '2',
//     minWidth: '140px',
//     background: 'linear-gradient(135deg, #667eea 0%, #4facfe 100%)',
//     border: 'none',
//     borderRadius: '12px',
//     padding: '16px 40px',
//     fontSize: '16px',
//     fontWeight: '600',
//     color: '#ffffff',
//     cursor: 'pointer',
//     boxShadow: '0 10px 30px rgba(70, 100, 200, 0.4)',
//     transition: 'all 0.3s ease',
//   },
//   cardFooter: {
//     fontSize: '12px',
//     color: '#6699ff',
//     textAlign: 'center',
//     marginTop: '20px',
//     opacity: 0.7,
//   },

//   // ===== STEP 2: PREDICTION TYPE =====
//   predictionCard: {
//     background: 'rgba(20, 35, 60, 0.4)',
//     border: '1px solid rgba(255, 255, 255, 0.05)',
//     borderRadius: '24px',
//     padding: 'clamp(30px, 6vw, 50px) clamp(25px, 4vw, 40px)',
//     backdropFilter: 'blur(20px)',
//     boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4)',
//     width: '100%',
//     maxWidth: '900px',
//   },
//   predictionTitle: {
//     fontSize: 'clamp(28px, 5vw, 40px)',
//     fontWeight: '700',
//     margin: '0 0 10px 0',
//     textAlign: 'center',
//     color: '#ffffff',
//   },
//   predictionSubtitle: {
//     fontSize: 'clamp(14px, 2vw, 16px)',
//     color: '#aabbcc',
//     textAlign: 'center',
//     marginBottom: '40px',
//   },
//   predictionGrid: {
//     display: 'grid',
//     gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
//     gap: '20px',
//     marginBottom: '35px',
//   },
//   predictionOption: {
//     background: 'rgba(25, 40, 70, 0.5)',
//     border: '1px solid rgba(255, 255, 255, 0.1)',
//     borderRadius: '20px',
//     padding: '35px 25px',
//     textAlign: 'center',
//     cursor: 'pointer',
//     transition: 'all 0.3s ease',
//   },
//   predictionOptionSelected: {
//     background: 'rgba(70, 100, 200, 0.2)',
//     border: '2px solid rgba(100, 150, 255, 0.6)',
//     boxShadow: '0 10px 40px rgba(70, 100, 200, 0.3)',
//     transform: 'translateY(-5px)',
//   },
//   predictionIcon: {
//     fontSize: '48px',
//     marginBottom: '15px',
//   },
//   predictionOptionTitle: {
//     fontSize: '20px',
//     fontWeight: '700',
//     margin: '0 0 10px 0',
//     color: '#ffffff',
//   },
//   predictionOptionDesc: {
//     fontSize: '13px',
//     color: '#99aabb',
//     lineHeight: '1.5',
//     margin: 0,
//   },
//   errorTextCenter: {
//     color: '#ff6b6b',
//     fontSize: '13px',
//     textAlign: 'center',
//     marginTop: '15px',
//     fontWeight: '600',
//     letterSpacing: '0.5px',
//   },

//   // ===== STEP 3 & 4: OPTIONAL QUESTIONS =====
//   optionalBadge: {
//     display: 'inline-flex',
//     alignItems: 'center',
//     gap: '8px',
//     background: 'rgba(100, 200, 150, 0.15)',
//     border: '1px solid rgba(100, 200, 150, 0.3)',
//     borderRadius: '20px',
//     padding: '8px 16px',
//     fontSize: '12px',
//     fontWeight: '600',
//     color: '#66dd99',
//     marginBottom: '25px',
//   },
//   optionalIcon: {
//     fontSize: '16px',
//   },
//   textarea: {
//     width: '100%',
//     background: 'rgba(15, 25, 45, 0.6)',
//     border: '1px solid rgba(255, 255, 255, 0.1)',
//     borderRadius: '12px',
//     padding: '16px 18px',
//     fontSize: '15px',
//     color: '#ffffff',
//     outline: 'none',
//     transition: 'all 0.3s ease',
//     fontFamily: 'inherit',
//     resize: 'vertical',
//     lineHeight: '1.6',
//   },
//   charCounter: {
//     fontSize: '11px',
//     color: '#88aaff',
//     textAlign: 'right',
//     marginTop: '8px',
//     opacity: 0.7,
//   },
//   hintText: {
//     fontSize: '12px',
//     color: '#99aabb',
//     marginTop: '10px',
//     marginLeft: '4px',
//     lineHeight: '1.5',
//   },
//   buttonGroup: {
//     display: 'flex',
//     gap: '15px',
//     marginTop: '15px',
//     flexWrap: 'wrap',
//   },
//   skipBtn: {
//     flex: '1',
//     minWidth: '140px',
//     background: 'rgba(255, 255, 255, 0.05)',
//     border: '1px solid rgba(255, 255, 255, 0.15)',
//     borderRadius: '12px',
//     padding: '14px 30px',
//     fontSize: '15px',
//     fontWeight: '600',
//     color: '#aabbcc',
//     cursor: 'pointer',
//     transition: 'all 0.3s ease',
//   },

//   // ===== STEP 4: FOREVER PERSON EXPLANATION BOX =====
//   explanationBox: {
//     background: 'rgba(100, 80, 200, 0.1)',
//     border: '1px solid rgba(150, 130, 255, 0.3)',
//     borderRadius: '16px',
//     padding: '16px 20px',
//     marginBottom: '25px',
//   },
//   explanationTitle: {
//     fontSize: '16px',
//     fontWeight: '700',
//     color: '#bbaaff',
//     margin: '0 0 8px 0',
//   },
//   explanationText: {
//     fontSize: '13px',
//     color: '#ccddee',
//     lineHeight: '1.6',
//     margin: '0 0 10px 0',
//   },
//   explanationList: {
//     fontSize: '13px',
//     color: '#ccddee',
//     lineHeight: '1.7',
//     margin: '0',
//     paddingLeft: '20px',
//     listStyle: 'none',
//   },

//   // ===== STEP 5: LOVE LIFE DETAILS =====
//   statusGrid: {
//     display: 'grid',
//     gridTemplateColumns: 'repeat(auto-fit, minmax(110px, 1fr))',
//     gap: '12px',
//   },
//   statusBtn: {
//     background: 'rgba(255, 255, 255, 0.05)',
//     border: '1px solid rgba(255, 255, 255, 0.15)',
//     borderRadius: '10px',
//     padding: '12px 20px',
//     fontSize: '14px',
//     fontWeight: '600',
//     color: '#aabbcc',
//     cursor: 'pointer',
//     transition: 'all 0.3s ease',
//   },
//   statusBtnSelected: {
//     background: 'rgba(100, 150, 255, 0.2)',
//     borderColor: 'rgba(100, 150, 255, 0.6)',
//     color: '#88aaff',
//     boxShadow: '0 5px 20px rgba(100, 150, 255, 0.3)',
//   },

//   // ===== STEP 6: REVIEW SCREEN =====
//   reviewHeader: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: '10px',
//     flexWrap: 'wrap',
//     gap: '10px',
//   },
//   reviewSection: {
//     background: 'rgba(255, 255, 255, 0.03)',
//     border: '1px solid rgba(255, 255, 255, 0.08)',
//     borderRadius: '14px',
//     marginBottom: '15px',
//     overflow: 'hidden',
//   },
//   reviewSectionHeader: {
//     width: '100%',
//     background: 'transparent',
//     border: 'none',
//     padding: '16px 20px',
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     cursor: 'pointer',
//     transition: 'background 0.3s ease',
//     color: '#ffffff',
//   },
//   reviewSectionTitle: {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '10px',
//     fontSize: '16px',
//     fontWeight: '600',
//   },
//   reviewIcon: {
//     fontSize: '20px',
//   },
//   expandIcon: {
//     fontSize: '12px',
//     color: '#88aaff',
//   },
//   reviewSectionContent: {
//     padding: '10px 20px 20px 20px',
//     borderTop: '1px solid rgba(255, 255, 255, 0.05)',
//   },
//   reviewItem: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     padding: '10px 0',
//     borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
//   },
//   reviewLabel: {
//     fontSize: '11px',
//     fontWeight: '600',
//     letterSpacing: '0.5px',
//     color: '#88aaff',
//   },
//   reviewValue: {
//     fontSize: '14px',
//     color: '#ffffff',
//     fontWeight: '500',
//   },
//   reviewTextBlock: {
//     marginBottom: '15px',
//   },
//   reviewTextValue: {
//     fontSize: '13px',
//     color: '#ccddee',
//     lineHeight: '1.6',
//     marginTop: '8px',
//     marginBottom: '0',
//   },
//   scopeBadges: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     gap: '10px',
//   },
//   scopeBadge: {
//     background: 'rgba(100, 150, 255, 0.15)',
//     border: '1px solid rgba(100, 150, 255, 0.3)',
//     borderRadius: '20px',
//     padding: '8px 16px',
//     fontSize: '13px',
//     fontWeight: '600',
//     color: '#88aaff',
//   },
//   emptyText: {
//     fontSize: '13px',
//     color: '#6688aa',
//     fontStyle: 'italic',
//   },
//   generateBtn: {
//     background: 'linear-gradient(135deg, #667eea 0%, #4facfe 100%)',
//     border: 'none',
//     borderRadius: '14px',
//     padding: '18px 40px',
//     fontSize: '18px',
//     fontWeight: '700',
//     color: '#ffffff',
//     cursor: 'pointer',
//     width: '100%',
//     boxShadow: '0 15px 40px rgba(70, 100, 200, 0.5)',
//     transition: 'all 0.3s ease',
//     marginTop: '20px',
//   },
//   encryptedFooter: {
//     fontSize: '11px',
//     color: '#6699ff',
//     textAlign: 'center',
//     marginTop: '15px',
//     opacity: 0.7,
//     letterSpacing: '0.5px',
//   },

//   // ===== STEP 7: LOADING SCREEN =====
//   loadingContainer: {
//     width: '100%',
//     maxWidth: '600px',
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     justifyContent: 'center',
//     gap: '30px',
//   },
//   loadingOrbitContainer: {
//     position: 'relative',
//     width: '200px',
//     height: '200px',
//   },
//   loadingCenter: {
//     position: 'absolute',
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',
//     width: '30px',
//     height: '30px',
//     background: 'radial-gradient(circle, #88aaff 0%, #4466cc 100%)',
//     borderRadius: '50%',
//     boxShadow: '0 0 40px rgba(100, 150, 255, 0.8)',
//   },
//   loadingOrbit1: {
//     position: 'absolute',
//     top: '50%',
//     left: '50%',
//     width: '120px',
//     height: '120px',
//     margin: '-60px 0 0 -60px',
//     border: '2px dashed rgba(100, 150, 255, 0.3)',
//     borderRadius: '50%',
//     animation: 'rotate 3s linear infinite',
//   },
//   loadingOrbit2: {
//     position: 'absolute',
//     top: '50%',
//     left: '50%',
//     width: '180px',
//     height: '180px',
//     margin: '-90px 0 0 -90px',
//     border: '2px dashed rgba(100, 150, 255, 0.2)',
//     borderRadius: '50%',
//     animation: 'rotate 5s linear infinite reverse',
//   },
//   loadingDot: {
//     position: 'absolute',
//     top: '0',
//     left: '50%',
//     transform: 'translateX(-50%)',
//     width: '12px',
//     height: '12px',
//     background: 'linear-gradient(135deg, #667eea 0%, #4facfe 100%)',
//     borderRadius: '50%',
//     boxShadow: '0 0 20px rgba(100, 150, 255, 0.8)',
//   },
//   loadingTitle: {
//     fontSize: '14px',
//     fontWeight: '600',
//     letterSpacing: '3px',
//     color: '#88aaff',
//     margin: 0,
//   },
//   loadingStatus: {
//     fontSize: '20px',
//     fontWeight: '600',
//     color: '#ccddee',
//     margin: 0,
//     minHeight: '30px',
//   },
//   progressBarContainer: {
//     width: '100%',
//     maxWidth: '400px',
//     height: '8px',
//     background: 'rgba(255, 255, 255, 0.05)',
//     borderRadius: '10px',
//     overflow: 'hidden',
//     border: '1px solid rgba(255, 255, 255, 0.1)',
//   },
//   progressBarFill: {
//     height: '100%',
//     background: 'linear-gradient(90deg, #667eea 0%, #4facfe 100%)',
//     borderRadius: '10px',
//     transition: 'width 0.3s ease',
//     boxShadow: '0 0 20px rgba(100, 150, 255, 0.6)',
//   },
//   progressText: {
//     width: '100%',
//     maxWidth: '400px',
//     display: 'flex',
//     justifyContent: 'space-between',
//     fontSize: '11px',
//     fontWeight: '600',
//     color: '#88aaff',
//     letterSpacing: '1px',
//   },
//   loadingFooter: {
//     display: 'flex',
//     gap: '10px',
//     fontSize: '10px',
//     color: '#556688',
//     letterSpacing: '0.5px',
//     marginTop: '20px',
//     flexWrap: 'wrap',
//     justifyContent: 'center',
//   },

//   // ===== STEP 8: RESULTS SCREEN =====
//   resultsContainer: {
//     width: '100%',
//     maxWidth: '800px',
//     padding: '20px',
//   },
//   resultsCard: {
//     background: 'rgba(20, 35, 60, 0.5)',
//     border: '1px solid rgba(255, 255, 255, 0.08)',
//     borderRadius: '24px',
//     padding: 'clamp(30px, 5vw, 50px)',
//     backdropFilter: 'blur(20px)',
//   },
//   resultsHeader: {
//     textAlign: 'center',
//     marginBottom: '30px',
//   },
//   resultsTitle: {
//     fontSize: 'clamp(28px, 5vw, 42px)',
//     fontWeight: '700',
//     margin: '0 0 10px 0',
//     background: 'linear-gradient(135deg, #ffffff 0%, #88aaff 100%)',
//     WebkitBackgroundClip: 'text',
//     WebkitTextFillColor: 'transparent',
//   },
//   resultsSubtitle: {
//     fontSize: 'clamp(13px, 2vw, 15px)',
//     color: '#aabbcc',
//     margin: 0,
//   },
//   statsRow: {
//     display: 'grid',
//     gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
//     gap: '15px',
//     marginBottom: '30px',
//   },
//   statBox: {
//     background: 'rgba(255, 255, 255, 0.03)',
//     border: '1px solid rgba(255, 255, 255, 0.08)',
//     borderRadius: '12px',
//     padding: '15px',
//     textAlign: 'center',
//   },
//   statLabel: {
//     fontSize: '10px',
//     fontWeight: '600',
//     letterSpacing: '1px',
//     color: '#88aaff',
//     marginBottom: '8px',
//   },
//   statValue: {
//     fontSize: '24px',
//     fontWeight: '700',
//     color: '#ffffff',
//   },
//   statChange: {
//     fontSize: '14px',
//     color: '#66dd99',
//     marginLeft: '5px',
//   },
//   statBadge: {
//     fontSize: '16px',
//     color: '#4facfe',
//   },
//   statLocked: {
//     fontSize: '12px',
//     color: '#ff88aa',
//   },
//   predictionSection: {
//     background: 'rgba(25, 40, 70, 0.4)',
//     border: '1px solid rgba(255, 255, 255, 0.08)',
//     borderRadius: '16px',
//     marginBottom: '15px',
//     overflow: 'hidden',
//   },
//   predictionHeader: {
//     width: '100%',
//     background: 'transparent',
//     border: 'none',
//     padding: '20px',
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     cursor: 'pointer',
//     transition: 'background 0.3s ease',
//   },
//   predictionHeaderLeft: {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '15px',
//   },
//   predictionIconLarge: {
//     fontSize: '32px',
//   },
//   predictionSectionTitle: {
//     fontSize: '20px',
//     fontWeight: '700',
//     color: '#ffffff',
//   },
//   predictionContent: {
//     padding: '0 20px 20px 20px',
//     borderTop: '1px solid rgba(255, 255, 255, 0.05)',
//   },
//   predictionText: {
//     fontSize: '15px',
//     color: '#ccddee',
//     lineHeight: '1.8',
//     marginTop: '15px',
//   },
//   resultsActions: {
//     display: 'flex',
//     gap: '15px',
//     marginTop: '30px',
//     flexWrap: 'wrap',
//   },
//   restartBtn: {
//     flex: '1',
//     minWidth: '180px',
//     background: 'rgba(100, 150, 255, 0.15)',
//     border: '1px solid rgba(100, 150, 255, 0.3)',
//     borderRadius: '12px',
//     padding: '16px 30px',
//     fontSize: '15px',
//     fontWeight: '600',
//     color: '#88aaff',
//     cursor: 'pointer',
//     transition: 'all 0.3s ease',
//   },
//   exportBtn: {
//     flex: '1',
//     minWidth: '180px',
//     background: 'rgba(100, 255, 150, 0.12)',
//     border: '1px solid rgba(100, 255, 150, 0.3)',
//     borderRadius: '12px',
//     padding: '16px 30px',
//     fontSize: '15px',
//     fontWeight: '600',
//     color: '#66dd99',
//     cursor: 'pointer',
//     transition: 'all 0.3s ease',
//   },

//   // ===== RESPONSIVE MEDIA QUERIES (applied via inline conditions in components) =====
// };






// for my changes and bug fix 
// have bugs in reloading and storing data so another replacement is reqired 

// import React, { useState, useEffect } from 'react';
// import { initializeApp } from 'firebase/app';
// import { getFirestore, collection, addDoc, doc, updateDoc, serverTimestamp } from 'firebase/firestore';

// // Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyABi1-Erg0-44tnKhSPR_L4MpaYGE-sA0g",
//   authDomain: "prediction-app-b6174.firebaseapp.com",
//   projectId: "prediction-app-b6174",
//   storageBucket: "prediction-app-b6174.firebasestorage.app",
//   messagingSenderId: "333703591463",
//   appId: "1:333703591463:web:7463dc87ceb6c99e260002"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

// export default function App() {
//   // Generate unique session ID for this user
//   const [sessionId] = useState(() => {
//     const existing = localStorage.getItem('sessionId');
//     if (existing) return existing;
//     const newId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
//     localStorage.setItem('sessionId', newId);
//     return newId;
//   });

//   const [documentId, setDocumentId] = useState(null);

//   // Load saved step and formData from localStorage on mount
//   const [step, setStep] = useState(() => {
//     const savedStep = localStorage.getItem('futureInsightStep');
//     return savedStep ? parseInt(savedStep) : 0;
//   });
  
//   const [formData, setFormData] = useState(() => {
//     const savedData = localStorage.getItem('futureInsightData');
//     return savedData ? JSON.parse(savedData) : {
//       name: '',
//       birthDate: '',
//       predictionTypes: [],
//       friendNames: [''], // Array of friend names
//       foreverPerson: '',
//       foreverPersonReason: '',
//       partnerName: '',
//       relationshipStatus: '',
//       relationshipDesc: ''
//     };
//   });

//   // Auto-save formData to localStorage AND Firebase whenever it changes
//   useEffect(() => {
//     localStorage.setItem('futureInsightData', JSON.stringify(formData));
    
//     // Save to Firebase
//     const saveToFirebase = async () => {
//       try {
//         const dataToSave = {
//           sessionId,
//           step,
//           ...formData,
//           lastUpdated: serverTimestamp()
//         };

//         if (documentId) {
//           // Update existing document
//           const docRef = doc(db, 'predictions', documentId);
//           await updateDoc(docRef, dataToSave);
//         } else {
//           // Create new document
//           const docRef = await addDoc(collection(db, 'predictions'), {
//             ...dataToSave,
//             createdAt: serverTimestamp()
//           });
//           setDocumentId(docRef.id);
//           localStorage.setItem('documentId', docRef.id);
//         }
//       } catch (error) {
//         console.error('Firebase save error:', error);
//       }
//     };

//     if (step > 0) {
//       saveToFirebase();
//     }
//   }, [formData, step, sessionId, documentId]);

//   // Auto-save step to localStorage whenever it changes
//   useEffect(() => {
//     localStorage.setItem('futureInsightStep', step.toString());
//   }, [step]);

//   const totalSteps = 8;

//   const nextStep = () => setStep(prev => prev + 1);
//   const skipStep = () => setStep(prev => prev + 1);
  
//   const resetApp = () => {
//     setStep(0);
//     setFormData({
//       name: '',
//       birthDate: '',
//       predictionTypes: [],
//       friendNames: [''],
//       foreverPerson: '',
//       foreverPersonReason: '',
//       partnerName: '',
//       relationshipStatus: '',
//       relationshipDesc: ''
//     });
//     setDocumentId(null);
//     // Clear localStorage
//     localStorage.removeItem('futureInsightStep');
//     localStorage.removeItem('futureInsightData');
//     localStorage.removeItem('documentId');
//     localStorage.removeItem('sessionId');
//   };

//   return (
//     <div style={styles.app}>
//       <style>
//         {`
//           @keyframes rotate {
//             from { transform: rotate(0deg); }
//             to { transform: rotate(360deg); }
//           }
//         `}
//       </style>
//       {/* Fixed Navbar */}
//       <nav style={styles.navbar}>
//         <div style={styles.navContent}>
//           <div style={styles.logo}>
//             <span style={styles.logoIcon}>🔮</span>
//             <span style={styles.logoText}>FUTURE INSIGHT</span>
//           </div>
//           {step > 0 && (
//             <div style={styles.navRight}>
//               <div style={styles.progressBadge}>
//                 STEP {step} OF {totalSteps}
//               </div>
//             </div>
//           )}
//           {step === 0 && (
//             <div style={styles.navRight}>
//               <button style={styles.iconBtn}>⚙️</button>
//               <button style={styles.iconBtn}>❓</button>
//             </div>
//           )}
//         </div>
//       </nav>

//       {/* Main View - Component Switching */}
//       <main style={styles.mainView}>
//         {step === 0 && <WelcomeScreen onStart={nextStep} />}
//         {step === 1 && <BasicDetailsScreen formData={formData} setFormData={setFormData} onNext={nextStep} />}
//         {step === 2 && <PredictionTypeScreen formData={formData} setFormData={setFormData} onNext={nextStep} />}
//         {step === 3 && <LifeFeelingScreen formData={formData} setFormData={setFormData} onNext={nextStep} onSkip={skipStep} />}
//         {step === 4 && <MistakesScreen formData={formData} setFormData={setFormData} onNext={nextStep} onSkip={skipStep} />}
//         {step === 5 && (
//           formData.predictionTypes?.includes('love') 
//             ? <LoveLifeScreen formData={formData} setFormData={setFormData} onNext={nextStep} />
//             : (() => { nextStep(); return null; })()
//         )}
//         {step === 6 && <ReviewScreen formData={formData} onNext={nextStep} />}
//         {step === 7 && <LoadingScreen onComplete={nextStep} />}
//         {step === 9 && <ResultsScreen formData={formData} onRestart={resetApp} />}
//       </main>
//     </div>
//   );
// }

// // ==================== STEP 0: WELCOME SCREEN ====================
// function WelcomeScreen({ onStart }) {
//   return (
//     <div style={styles.stepContainer}>
//       <div style={styles.welcomeCard}>
//         {/* Logo Icon */}
//         <div style={styles.welcomeIconContainer}>
//           <div style={styles.welcomeIcon}>
//             <div style={styles.iconLayers}>
//               <div style={styles.iconLayer1}></div>
//               <div style={styles.iconLayer2}></div>
//               <div style={styles.iconLayer3}></div>
//             </div>
//           </div>
//         </div>

//         {/* Title */}
//         <h1 style={styles.welcomeTitle}>Future Insight</h1>
//         <p style={styles.welcomeSubtitle}>BRIGHT • DARK • LOVE PATH</p>

//         {/* Start Button */}
//         <button 
//           style={styles.startBtn} 
//           onClick={onStart}
//           onMouseEnter={(e) => {
//             e.target.style.transform = 'translateY(-3px)';
//             e.target.style.boxShadow = '0 15px 40px rgba(70, 100, 200, 0.6)';
//           }}
//           onMouseLeave={(e) => {
//             e.target.style.transform = 'translateY(0)';
//             e.target.style.boxShadow = '0 10px 30px rgba(70, 100, 200, 0.4)';
//           }}
//         >
//           Start Prediction ✨
//         </button>

//         {/* Footer Text */}
//         <p style={styles.welcomeFooter}>V1.0 • SECURE & PRIVATE CONNECTION</p>
//       </div>

//       {/* Bottom Attribution */}
//       <div style={styles.attribution}>
//         POWERED BY NEURAL INSIGHT ENGINE
//       </div>
//     </div>
//   );
// }

// // ==================== STEP 1: BASIC DETAILS SCREEN ====================
// function BasicDetailsScreen({ formData, setFormData, onNext }) {
//   const [errors, setErrors] = useState({ name: '', birthDate: '' });

//   const handleSubmit = () => {
//     let hasError = false;
//     const newErrors = { name: '', birthDate: '' };

//     if (!formData.name.trim()) {
//       newErrors.name = 'Please enter your name';
//       hasError = true;
//     }

//     if (!formData.birthDate) {
//       newErrors.birthDate = 'Please select your birth date';
//       hasError = true;
//     }

//     setErrors(newErrors);

//     if (!hasError) {
//       onNext();
//     }
//   };

//   return (
//     <div style={styles.stepContainer}>
//       <div style={styles.card}>
//         {/* Header */}
//         <div style={styles.cardHeader}>
//           <h2 style={styles.cardTitle}>Basic Details</h2>
//           <div style={styles.stepBadge}>STEP 1 OF 6</div>
//         </div>
//         <p style={styles.cardSubtitle}>Welcome to your future. Let's start with the basics.</p>

//         {/* Form */}
//         <div style={styles.formGroup}>
//           <label style={styles.label}>FULL NAME</label>
//           <div style={styles.inputContainer}>
//             <span style={styles.inputIcon}>📋</span>
//             <input
//               type="text"
//               placeholder="e.g. Alexander Pierce"
//               value={formData.name}
//               onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//               style={{
//                 ...styles.input,
//                 ...(errors.name ? styles.inputError : {})
//               }}
//             />
//           </div>
//           {errors.name && <p style={styles.errorText}>{errors.name}</p>}
//         </div>

//         <div style={styles.formGroup}>
//           <label style={styles.label}>BIRTH DATE</label>
//           <div style={styles.inputContainer}>
//             <span style={styles.inputIcon}>📅</span>
//             <input
//               type="date"
//               value={formData.birthDate}
//               onChange={(e) => setFormData({ ...formData, birthDate: e.target.value })}
//               style={{
//                 ...styles.input,
//                 ...(errors.birthDate ? styles.inputError : {})
//               }}
//             />
//           </div>
//           {errors.birthDate && <p style={styles.errorText}>{errors.birthDate}</p>}
//         </div>

//         {/* Continue Button */}
//         <button 
//           style={{...styles.continueBtn, width: '100%', marginTop: '10px'}} 
//           onClick={handleSubmit}
//           onMouseEnter={(e) => {
//             e.target.style.transform = 'translateY(-2px)';
//             e.target.style.boxShadow = '0 15px 40px rgba(70, 100, 200, 0.5)';
//           }}
//           onMouseLeave={(e) => {
//             e.target.style.transform = 'translateY(0)';
//             e.target.style.boxShadow = '0 10px 30px rgba(70, 100, 200, 0.4)';
//           }}
//         >
//           Continue →
//         </button>

//         {/* Footer */}
//         <p style={styles.cardFooter}>
//           🔒 Your data is encrypted and used only for prediction accuracy.
//         </p>
//       </div>
//     </div>
//   );
// }

// // ==================== STEP 2: PREDICTION TYPE SELECTION ====================
// function PredictionTypeScreen({ formData, setFormData, onNext }) {
//   const [error, setError] = useState('');

//   const predictionOptions = [
//     {
//       id: 'bright',
//       icon: '☀️',
//       title: 'Bright Side',
//       description: 'Optimistic insights and positive outcomes for your journey.',
//     },
//     {
//       id: 'dark',
//       icon: '🌙',
//       title: 'Dark Side',
//       description: 'Mysterious paths and hidden truths from the shadows.',
//     },
//     {
//       id: 'love',
//       icon: '❤️',
//       title: 'Love Life',
//       description: 'Discover your romantic destiny and connections.',
//     },
//   ];

//   const togglePrediction = (id) => {
//     const current = formData.predictionTypes || [];
//     if (current.includes(id)) {
//       setFormData({
//         ...formData,
//         predictionTypes: current.filter(t => t !== id)
//       });
//     } else {
//       setFormData({
//         ...formData,
//         predictionTypes: [...current, id]
//       });
//     }
//     setError('');
//   };

//   const handleContinue = () => {
//     if (!formData.predictionTypes || formData.predictionTypes.length === 0) {
//       setError('REQUIRES SELECTION');
//       return;
//     }
//     onNext();
//   };

//   return (
//     <div style={styles.stepContainer}>
//       <div style={styles.predictionCard}>
//         {/* Header */}
//         <h2 style={styles.predictionTitle}>Choose Your Prediction</h2>
//         <p style={styles.predictionSubtitle}>Select the path you wish to explore today.</p>

//         {/* Prediction Cards */}
//         <div style={styles.predictionGrid}>
//           {predictionOptions.map((option) => {
//             const isSelected = formData.predictionTypes?.includes(option.id);
//             return (
//               <div
//                 key={option.id}
//                 onClick={() => togglePrediction(option.id)}
//                 style={{
//                   ...styles.predictionOption,
//                   ...(isSelected ? styles.predictionOptionSelected : {}),
//                 }}
//                 onMouseEnter={(e) => {
//                   if (!isSelected) {
//                     e.currentTarget.style.borderColor = 'rgba(100, 150, 255, 0.5)';
//                     e.currentTarget.style.transform = 'translateY(-5px)';
//                   }
//                 }}
//                 onMouseLeave={(e) => {
//                   if (!isSelected) {
//                     e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
//                     e.currentTarget.style.transform = 'translateY(0)';
//                   }
//                 }}
//               >
//                 <div style={styles.predictionIcon}>{option.icon}</div>
//                 <h3 style={styles.predictionOptionTitle}>{option.title}</h3>
//                 <p style={styles.predictionOptionDesc}>{option.description}</p>
//               </div>
//             );
//           })}
//         </div>

//         {/* Continue Button */}
//         <button 
//           style={{...styles.continueBtn, width: '100%'}}
//           onClick={handleContinue}
//           onMouseEnter={(e) => {
//             e.target.style.transform = 'translateY(-2px)';
//             e.target.style.boxShadow = '0 15px 40px rgba(70, 100, 200, 0.5)';
//           }}
//           onMouseLeave={(e) => {
//             e.target.style.transform = 'translateY(0)';
//             e.target.style.boxShadow = '0 10px 30px rgba(70, 100, 200, 0.4)';
//           }}
//         >
//           CONTINUE
//         </button>

//         {error && <p style={styles.errorTextCenter}>{error}</p>}
//       </div>

//       {/* Footer Attribution */}
//       <div style={styles.attribution}>
//         © 2024 FUTURE INSIGHT AI. ALL DIMENSIONS SECURED.
//       </div>
//     </div>
//   );
// }

// // ==================== STEP 3: FRIENDSHIP RATE CHECKER ====================
// function LifeFeelingScreen({ formData, setFormData, onNext, onSkip }) {
//   const addFriend = () => {
//     setFormData({
//       ...formData,
//       friendNames: [...formData.friendNames, '']
//     });
//   };

//   const removeFriend = (index) => {
//     const newFriends = formData.friendNames.filter((_, i) => i !== index);
//     setFormData({
//       ...formData,
//       friendNames: newFriends.length > 0 ? newFriends : ['']
//     });
//   };

//   const updateFriend = (index, value) => {
//     const newFriends = [...formData.friendNames];
//     newFriends[index] = value;
//     setFormData({
//       ...formData,
//       friendNames: newFriends
//     });
//   };

//   return (
//     <div style={styles.stepContainer}>
//       <div style={styles.card}>
//         {/* Header */}
//         <div style={styles.cardHeader}>
//           <h2 style={styles.cardTitle}>Friendship Rate Checkup</h2>
//           <div style={styles.stepBadge}>STEP 3 OF 6</div>
//         </div>
//         <p style={styles.cardSubtitle}>
//           Add friends to check your friendship compatibility rates
//         </p>

//         {/* Optional Badge */}
//         <div style={styles.optionalBadge}>
//           <span style={styles.optionalIcon}>👥</span>
//           <span>Optional - Fun Feature</span>
//         </div>

//         {/* Friend Inputs */}
//         <div style={styles.formGroup}>
//           <label style={styles.label}>FRIEND NAMES</label>
//           {formData.friendNames.map((friend, index) => (
//             <div key={index} style={styles.friendInputRow}>
//               <div style={{...styles.inputContainer, flex: 1}}>
//                 <span style={styles.inputIcon}>👤</span>
//                 <input
//                   type="text"
//                   placeholder={`Friend ${index + 1} name...`}
//                   value={friend}
//                   onChange={(e) => updateFriend(index, e.target.value)}
//                   style={styles.input}
//                 />
//               </div>
//               {formData.friendNames.length > 1 && (
//                 <button
//                   style={styles.removeBtn}
//                   onClick={() => removeFriend(index)}
//                   onMouseEnter={(e) => {
//                     e.target.style.background = 'rgba(255, 100, 100, 0.2)';
//                   }}
//                   onMouseLeave={(e) => {
//                     e.target.style.background = 'rgba(255, 100, 100, 0.1)';
//                   }}
//                 >
//                   ✕
//                 </button>
//               )}
//             </div>
//           ))}
          
//           {/* Add Friend Button */}
//           <button
//             style={styles.addFriendBtn}
//             onClick={addFriend}
//             onMouseEnter={(e) => {
//               e.target.style.background = 'rgba(100, 150, 255, 0.2)';
//             }}
//             onMouseLeave={(e) => {
//               e.target.style.background = 'rgba(100, 150, 255, 0.1)';
//             }}
//           >
//             ➕ Add Another Friend
//           </button>

//           <p style={styles.hintText}>
//             💡 We'll calculate friendship compatibility for each friend in the results!
//           </p>
//         </div>

//         {/* Buttons */}
//         <div style={styles.buttonGroup}>
//           <button 
//             style={styles.skipBtn}
//             onClick={onSkip}
//             onMouseEnter={(e) => {
//               e.target.style.background = 'rgba(255, 255, 255, 0.08)';
//             }}
//             onMouseLeave={(e) => {
//               e.target.style.background = 'rgba(255, 255, 255, 0.05)';
//             }}
//           >
//             Skip this step
//           </button>
//           <button 
//             style={styles.continueBtn}
//             onClick={onNext}
//             onMouseEnter={(e) => {
//               e.target.style.transform = 'translateY(-2px)';
//               e.target.style.boxShadow = '0 15px 40px rgba(70, 100, 200, 0.5)';

//               e.target.style.transform = 'translateY(0)';
//               e.target.style.boxShadow = '0 10px 30px rgba(70, 100, 200, 0.4)';
//             }}
//             onMouseLeave={(e) => {
//               e.target.style.transform = 'translateY(0)';
//               e.target.style.boxShadow = '0 10px 30px rgba(70, 100, 200, 0.4)';
//             }}
//           >
//             Continue →
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// // ==================== STEP 4: FOREVER PERSON (OPTIONAL) ====================
// function MistakesScreen({ formData, setFormData, onNext, onSkip }) {
//   return (
//     <div style={styles.stepContainer}>
//       <div style={styles.card}>
//         {/* Header */}
//         <div style={styles.cardHeader}>
//           <h2 style={styles.cardTitle}>Your Forever Person</h2>
//           <div style={styles.stepBadge}>STEP 4 OF 6</div>
//         </div>
//         <p style={styles.cardSubtitle}>
//           Who is the ONE person you want in your life until the very end?
//         </p>

//         {/* Explanation Box */}
//         <div style={styles.explanationBox}>
//           <h3 style={styles.explanationTitle}>🌟 Choose Your Soul Connection</h3>
//           <p style={styles.explanationText}>
//             Among everyone in your life - who is that ONE person you want by your side until death?
//           </p>
//           <ul style={styles.explanationList}>
//             <li>✓ Any gender • Any relationship (friend, family, partner, anyone)</li>
//             <li>⚠️ <strong>Only ONE person</strong> - the one who matters most to your soul</li>
//           </ul>
//         </div>

//         {/* Forever Person Input */}
//         <div style={styles.formGroup}>
//           <label style={styles.label}>WHO IS YOUR FOREVER PERSON? 💖</label>
//           <div style={styles.inputContainer}>
//             <span style={styles.inputIcon}>👤</span>
//             <input
//               type="text"
//               placeholder="Enter their name... (the ONE person you choose)"
//               value={formData.foreverPerson || ''}
//               onChange={(e) => setFormData({ ...formData, foreverPerson: e.target.value })}
//               style={styles.input}
//             />
//           </div>
//           <p style={styles.hintText}>
//             💭 Think about your last day on Earth. Who do you want there? That's your answer.
//           </p>
//         </div>

//         {/* Optional: Tell us more */}
//         <div style={styles.formGroup}>
//           <label style={styles.label}>WHY THIS PERSON? (OPTIONAL)</label>
//           <textarea
//             placeholder="What makes this person irreplaceable in your life?"
//             value={formData.foreverPersonReason || ''}
//             onChange={(e) => {
//               if (e.target.value.length <= 200) {
//                 setFormData({ ...formData, foreverPersonReason: e.target.value });
//               }
//             }}
//             style={styles.textarea}
//             rows={3}
//           />
//           <div style={styles.charCounter}>
//             {(formData.foreverPersonReason?.length || 0)} / 200 characters
//           </div>
//         </div>

//         {/* Buttons */}
//         <div style={styles.buttonGroup}>
//           <button 
//             style={styles.skipBtn}
//             onClick={onSkip}
//             onMouseEnter={(e) => {
//               e.target.style.background = 'rgba(255, 255, 255, 0.08)';
//             }}
//             onMouseLeave={(e) => {
//               e.target.style.background = 'rgba(255, 255, 255, 0.05)';
//             }}
//           >
//             Skip this step
//           </button>
//           <button 
//             style={styles.continueBtn}
//             onClick={onNext}
//             onMouseEnter={(e) => {
//               e.target.style.transform = 'translateY(-2px)';
//               e.target.style.boxShadow = '0 15px 40px rgba(70, 100, 200, 0.5)';
//             }}
//             onMouseLeave={(e) => {
//               e.target.style.transform = 'translateY(0)';
//               e.target.style.boxShadow = '0 10px 30px rgba(70, 100, 200, 0.4)';
//             }}
//           >
//             Continue →
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// // ==================== STEP 5: LOVE LIFE DETAILS (CONDITIONAL) ====================
// function LoveLifeScreen({ formData, setFormData, onNext }) {
//   const statusOptions = ['Single', 'Dating', 'Committed', 'Married', 'Complicated'];

//   return (
//     <div style={styles.stepContainer}>
//       <div style={styles.card}>
//         {/* Header */}
//         <div style={styles.cardHeader}>
//           <h2 style={styles.cardTitle}>Love Life Details</h2>
//           <div style={styles.stepBadge}>STEP 5 OF 6</div>
//         </div>
//         <p style={styles.cardSubtitle}>
//           Provide details to refine your connection prediction.
//         </p>

//         {/* Partner Name */}
//         <div style={styles.formGroup}>
//           <label style={styles.label}>PARTNER NAME (OPTIONAL)</label>
//           <div style={styles.inputContainer}>
//             <span style={styles.inputIcon}>💕</span>
//             <input
//               type="text"
//               placeholder="Enter full name..."
//               value={formData.partnerName || ''}
//               onChange={(e) => setFormData({ ...formData, partnerName: e.target.value })}
//               style={styles.input}
//             />
//           </div>
//         </div>

//         {/* Relationship Status */}
//         <div style={styles.formGroup}>
//           <label style={styles.label}>RELATIONSHIP STATUS</label>
//           <div style={styles.statusGrid}>
//             {statusOptions.map(status => {
//               const isSelected = formData.relationshipStatus === status;
//               return (
//                 <button
//                   key={status}
//                   onClick={() => setFormData({ ...formData, relationshipStatus: status })}
//                   style={{
//                     ...styles.statusBtn,
//                     ...(isSelected ? styles.statusBtnSelected : {})
//                   }}
//                   onMouseEnter={(e) => {
//                     if (!isSelected) {
//                       e.target.style.background = 'rgba(100, 150, 255, 0.15)';
//                       e.target.style.borderColor = 'rgba(100, 150, 255, 0.4)';
//                     }
//                   }}
//                   onMouseLeave={(e) => {
//                     if (!isSelected) {
//                       e.target.style.background = 'rgba(255, 255, 255, 0.05)';
//                       e.target.style.borderColor = 'rgba(255, 255, 255, 0.15)';
//                     }
//                   }}
//                 >
//                   {status}
//                 </button>
//               );
//             })}
//           </div>
//         </div>

//         {/* About Connection */}
//         <div style={styles.formGroup}>
//           <label style={styles.label}>ABOUT THIS CONNECTION (OPTIONAL)</label>
//           <textarea
//             placeholder="Share a brief history or current dynamic..."
//             value={formData.relationshipDesc || ''}
//             onChange={(e) => {
//               if (e.target.value.length <= 300) {
//                 setFormData({ ...formData, relationshipDesc: e.target.value });
//               }
//             }}
//             style={styles.textarea}
//             rows={4}
//           />
//           <div style={styles.charCounter}>
//             {(formData.relationshipDesc?.length || 0)} / 300 characters
//           </div>
//         </div>

//         {/* Continue Button */}
//         <button 
//           style={{...styles.continueBtn, width: '100%', marginTop: '10px'}}
//           onClick={onNext}
//           onMouseEnter={(e) => {
//             e.target.style.transform = 'translateY(-2px)';
//             e.target.style.boxShadow = '0 15px 40px rgba(70, 100, 200, 0.5)';
//           }}
//           onMouseLeave={(e) => {
//             e.target.style.transform = 'translateY(0)';
//             e.target.style.boxShadow = '0 10px 30px rgba(70, 100, 200, 0.4)';
//           }}
//         >
//           Continue →
//         </button>
//       </div>
//     </div>
//   );
// }

// // ==================== STEP 6: REVIEW SCREEN ====================
// function ReviewScreen({ formData, onNext }) {
//   const [expandedSections, setExpandedSections] = useState({
//     basic: true,
//     predictions: false,
//     reflection: false
//   });

//   const toggleSection = (section) => {
//     setExpandedSections(prev => ({
//       ...prev,
//       [section]: !prev[section]
//     }));
//   };

//   return (
//     <div style={styles.stepContainer}>
//       <div style={{...styles.card, maxWidth: '700px'}}>
//         {/* Header */}
//         <div style={styles.reviewHeader}>
//           <h2 style={styles.cardTitle}>Review Your Inputs</h2>
//           <div style={styles.stepBadge}>STEP 6 OF 6</div>
//         </div>
//         <p style={styles.cardSubtitle}>
//           Finalize your parameters before initiating the neural synthesis.
//         </p>

//         {/* Basic Details Section */}
//         <div style={styles.reviewSection}>
//           <button 
//             style={styles.reviewSectionHeader}
//             onClick={() => toggleSection('basic')}
//           >
//             <div style={styles.reviewSectionTitle}>
//               <span style={styles.reviewIcon}>👤</span>
//               <span>Basic Details</span>
//             </div>
//             <span style={styles.expandIcon}>{expandedSections.basic ? '▲' : '▼'}</span>
//           </button>
//           {expandedSections.basic && (
//             <div style={styles.reviewSectionContent}>
//               <div style={styles.reviewItem}>
//                 <span style={styles.reviewLabel}>SUBJECT NAME</span>
//                 <span style={styles.reviewValue}>{formData.name}</span>
//               </div>
//               <div style={styles.reviewItem}>
//                 <span style={styles.reviewLabel}>TARGET DATE</span>
//                 <span style={styles.reviewValue}>{formData.birthDate}</span>
//               </div>
//             </div>
//           )}
//         </div>

//         {/* Prediction Path Section */}
//         <div style={styles.reviewSection}>
//           <button 
//             style={styles.reviewSectionHeader}
//             onClick={() => toggleSection('predictions')}
//           >
//             <div style={styles.reviewSectionTitle}>
//               <span style={styles.reviewIcon}>🔮</span>
//               <span>Prediction Path</span>
//             </div>
//             <span style={styles.expandIcon}>{expandedSections.predictions ? '▲' : '▼'}</span>
//           </button>
//           {expandedSections.predictions && (
//             <div style={styles.reviewSectionContent}>
//               <div style={styles.scopeBadges}>
//                 {formData.predictionTypes?.includes('bright') && (
//                   <span style={styles.scopeBadge}>🌟 Bright Side</span>
//                 )}
//                 {formData.predictionTypes?.includes('dark') && (
//                   <span style={styles.scopeBadge}>🌙 Dark Side</span>
//                 )}
//                 {formData.predictionTypes?.includes('love') && (
//                   <span style={styles.scopeBadge}>❤️ Love Life</span>
//                 )}
//               </div>
//             </div>
//           )}
//         </div>

//         {/* Reflection Section */}
//         <div style={styles.reviewSection}>
//           <button 
//             style={styles.reviewSectionHeader}
//             onClick={() => toggleSection('reflection')}
//           >
//             <div style={styles.reviewSectionTitle}>
//               <span style={styles.reviewIcon}>💭</span>
//               <span>Reflection</span>
//             </div>
//             <span style={styles.expandIcon}>{expandedSections.reflection ? '▲' : '▼'}</span>
//           </button>
//           {expandedSections.reflection && (
//             <div style={styles.reviewSectionContent}>
//               {formData.lifeFeeling && (
//                 <div style={styles.reviewTextBlock}>
//                   <span style={styles.reviewLabel}>LIFE REFLECTION</span>
//                   <p style={styles.reviewTextValue}>{formData.lifeFeeling}</p>
//                 </div>
//               )}
//               {formData.foreverPerson && (
//                 <div style={styles.reviewTextBlock}>
//                   <span style={styles.reviewLabel}>FOREVER PERSON</span>
//                   <p style={styles.reviewTextValue}>{formData.foreverPerson}</p>
//                 </div>
//               )}
//               {!formData.lifeFeeling && !formData.foreverPerson && (
//                 <p style={styles.emptyText}>No reflection data provided</p>
//               )}
//             </div>
//           )}
//         </div>

//         {/* Generate Button */}
//         <button 
//           style={styles.generateBtn}
//           onClick={onNext}
//           onMouseEnter={(e) => {
//             e.target.style.transform = 'translateY(-2px) scale(1.02)';
//             e.target.style.boxShadow = '0 20px 50px rgba(70, 100, 200, 0.6)';
//           }}
//           onMouseLeave={(e) => {
//             e.target.style.transform = 'translateY(0) scale(1)';
//             e.target.style.boxShadow = '0 15px 40px rgba(70, 100, 200, 0.5)';
//           }}
//         >
//           Generate Prediction ⚡
//         </button>

//         {/* Footer */}
//         <p style={styles.encryptedFooter}>
//           🔒 ENCRYPTED END-TO-END PROCESSING
//         </p>
//       </div>
//     </div>
//   );
// }

// // ==================== STEP 7: LOADING SCREEN ====================
// function LoadingScreen({ onComplete }) {
//   const [progress, setProgress] = useState(0);
//   const [statusText, setStatusText] = useState('Analyzing patterns...');

//   const statusMessages = [
//     'Analyzing patterns...',
//     'Building insight...',
//     'Revealing paths...',
//     'Synthesizing predictions...',
//     'Finalizing results...'
//   ];

//   useEffect(() => {
//     let progressInterval;
//     let messageIndex = 0;

//     // Progress bar animation
//     progressInterval = setInterval(() => {
//       setProgress(prev => {
//         if (prev >= 100) {
//           clearInterval(progressInterval);
//           setTimeout(() => onComplete(), 500);
//           return 100;
//         }
//         return prev + 2;
//       });
//     }, 60);

//     // Status message rotation
//     const messageInterval = setInterval(() => {
//       messageIndex = (messageIndex + 1) % statusMessages.length;
//       setStatusText(statusMessages[messageIndex]);
//     }, 1200);

//     return () => {
//       clearInterval(progressInterval);
//       clearInterval(messageInterval);
//     };
//   }, [onComplete]);

//   return (
//     <div style={styles.loadingContainer}>
//       {/* Animated Circles */}
//       <div style={styles.loadingOrbitContainer}>
//         <div style={styles.loadingCenter}></div>
//         <div style={styles.loadingOrbit1}>
//           <div style={styles.loadingDot}></div>
//         </div>
//         <div style={styles.loadingOrbit2}>
//           <div style={styles.loadingDot}></div>
//         </div>
//       </div>

//       {/* Status Text */}
//       <h2 style={styles.loadingTitle}>SYSTEM PROCESS</h2>
//       <p style={styles.loadingStatus}>{statusText}</p>

//       {/* Progress Bar */}
//       <div style={styles.progressBarContainer}>
//         <div style={{...styles.progressBarFill, width: `${progress}%`}}></div>
//       </div>
//       <div style={styles.progressText}>
//         <span>DEEP SYNC</span>
//         <span>{progress}%</span>
//       </div>

//       {/* Footer */}
//       <div style={styles.loadingFooter}>
//         <span>NEURAL ENGINE V4.2</span>
//         <span>•</span>
//         <span>QUANTUM LATENCY: 12MS</span>
//         <span>•</span>
//         <span>SECURE LINK ACTIVE</span>
//       </div>
//     </div>
//   );
// }

// // ==================== STEP 8: RESULTS SCREEN ====================
// function ResultsScreen({ formData, onRestart }) {
//   const [expandedSections, setExpandedSections] = useState({
//     bright: true,
//     dark: false,
//     love: false,
//     friendship: false
//   });

//   // Prediction databases
//   const brightPredictions = [
//     "Your career trajectory shows a significant upward shift. Expect a major breakthrough in creative endeavors within the next lunar cycle. Success is gravitating towards your persistent energy, manifesting as an unexpected offer from a high-profile collaborator.",
//     "A period of abundance approaches. Your financial wisdom will lead to opportunities you haven't yet imagined. The universe is aligning resources in your favor, and your patient efforts are about to yield remarkable returns.",
//     "Your personal growth will accelerate dramatically. You're entering a phase where clarity replaces confusion, and your authentic self emerges powerfully. People will be drawn to your renewed confidence and vision.",
//     "Travel and new experiences will transform your perspective. An unexpected journey will introduce you to people and ideas that reshape your future in the most positive ways.",
//     "Your creative talents are about to be recognized on a larger scale. What you've been building in private will soon demand public attention, bringing fulfillment and validation."
//   ];

//   const darkPredictions = [
//     "A trusted relationship faces a critical test. Someone close to you harbors unspoken resentment that will surface unexpectedly. This revelation, though painful, will ultimately liberate you from a pattern you didn't recognize.",
//     "Financial pressure will mount from an unexpected source. A decision you've postponed will demand immediate attention, forcing you to confront uncomfortable truths about security and independence.",
//     "Your carefully constructed plans will be disrupted by forces beyond your control. This chaos, though initially devastating, is clearing space for something more aligned with your true path.",
//     "A secret you've kept will become increasingly burdensome. The energy required to maintain this facade is draining your vitality and authenticity. Liberation awaits on the other side of truth.",
//     "Health concerns you've ignored will demand attention. Your body is sending increasingly urgent signals that require immediate acknowledgment and action."
//   ];

//   const lovePredictions = [
//     "Your romantic path takes an unexpected turn. If single, a connection forms in the most unlikely circumstances. If partnered, a breakthrough conversation dissolves long-standing barriers and deepens intimacy profoundly.",
//     "The person you can't stop thinking about is thinking about you too. Cosmic timing is aligning for a significant moment between you. Trust the pull you feel - it's reciprocated more than you realize.",
//     "A cycle of relationship patterns is completing. The lessons you've been learning through repeated experiences are finally integrating. Your next connection will reflect this evolution powerfully.",
//     "Distance that has separated you from someone important will soon close. Whether physical or emotional, the gap is narrowing through forces neither of you fully controls.",
//     "Your definition of love is about to expand dramatically. Someone will show you dimensions of connection you haven't previously experienced, fundamentally altering your understanding of intimacy."
//   ];

//   // Friendship descriptions database
//   const friendshipDescriptions = [
//     "The more you love them, they will love you back twice as much.",
//     "A bond that grows stronger with time and trust.",
//     "This friendship brings balance and harmony to your life.",
//     "You inspire each other to become better versions of yourselves.",
//     "Together, you create memories that last a lifetime.",
//     "This connection feels like home - comfortable and genuine.",
//     "Your energies complement each other perfectly.",
//     "Distance or time can't weaken this special bond.",
//     "You understand each other without needing words.",
//     "This friendship is a rare treasure worth nurturing."
//   ];

//   // Get random predictions based on selected types
//   const getRandomPrediction = (array) => {
//     return array[Math.floor(Math.random() * array.length)];
//   };

//   const getRandomNumber = (min, max) => {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//   };

//   // Generate friendship rates for each friend
//   const friendshipRates = formData.friendNames
//     ?.filter(name => name.trim() !== '')
//     .map(name => ({
//       name,
//       rate: getRandomNumber(0, 100),
//       description: getRandomPrediction(friendshipDescriptions)
//     })) || [];

//   // Generate love life rate if Love Life prediction was selected
//   const loveLifeRate = formData.predictionTypes?.includes('love') ? getRandomNumber(0, 100) : null;

//   const results = {
//     bright: formData.predictionTypes?.includes('bright') ? getRandomPrediction(brightPredictions) : null,
//     dark: formData.predictionTypes?.includes('dark') ? getRandomPrediction(darkPredictions) : null,
//     love: formData.predictionTypes?.includes('love') ? getRandomPrediction(lovePredictions) : null
//   };

//   const toggleSection = (section) => {
//     setExpandedSections(prev => ({
//       ...prev,
//       [section]: !prev[section]
//     }));
//   };

//   const downloadResults = () => {
//     const text = `
// FUTURE INSIGHT PREDICTION RESULTS
// Generated: ${new Date().toLocaleString()}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// SUBJECT INFORMATION
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Name: ${formData.name}
// Birth Date: ${formData.birthDate}
// ${formData.foreverPerson ? `Forever Person: ${formData.foreverPerson}` : ''}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// PREDICTIONS
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// ${results.bright ? `🌟 BRIGHT SIDE:\n${results.bright}\n\n` : ''}
// ${results.dark ? `🌑 DARK SIDE:\n${results.dark}\n\n` : ''}
// ${results.love ? `❤️ LOVE LIFE:\n${results.love}\n${loveLifeRate !== null ? `Love Life Compatibility Rate: ${loveLifeRate}%\n` : ''}\n` : ''}

// ${friendshipRates.length > 0 ? `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// FRIENDSHIP COMPATIBILITY RATES
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// ${friendshipRates.map(fr => `👥 ${fr.name}: ${fr.rate}%\n${fr.description}\n`).join('\n')}
// ` : ''}
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Powered by Future Insight AI
// For reflection and entertainment purposes.
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//     `;
    
//     const blob = new Blob([text], { type: 'text/plain' });
//     const url = URL.createObjectURL(blob);
//     const a = document.createElement('a');
//     a.href = url;
//     a.download = `FutureInsight_${formData.name.replace(/\s+/g, '_')}_${Date.now()}.txt`;
//     a.click();
//     URL.revokeObjectURL(url);
//   };

//   return (
//     <div style={styles.resultsContainer}>
//       <div style={styles.resultsCard}>
//         {/* Header */}
//         <div style={styles.resultsHeader}>
//           <h1 style={styles.resultsTitle}>Your Future Insight Is Ready</h1>
//           <p style={styles.resultsSubtitle}>Temporal sync complete. Analysis finalized.</p>
//         </div>

//         {/* Stats Row */}
//         <div style={styles.statsRow}>
//           <div style={styles.statBox}>
//             <div style={styles.statLabel}>CLARITY SCORE</div>
//             <div style={styles.statValue}>98% <span style={styles.statChange}>+2%</span></div>
//           </div>
//           <div style={styles.statBox}>
//             <div style={styles.statLabel}>TEMPORAL DEPTH</div>
//             <div style={styles.statValue}>High <span style={styles.statBadge}>═</span></div>
//           </div>
//           <div style={styles.statBox}>
//             <div style={styles.statLabel}>INSIGHT ACCURACY</div>
//             <div style={styles.statValue}>94% <span style={styles.statLocked}>Locked</span></div>
//           </div>
//         </div>

//         {/* Prediction Sections */}
//         {results.bright && (
//           <div style={styles.predictionSection}>
//             <button 
//               style={styles.predictionHeader}
//               onClick={() => toggleSection('bright')}
//             >
//               <div style={styles.predictionHeaderLeft}>
//                 <span style={styles.predictionIconLarge}>☀️</span>
//                 <span style={styles.predictionSectionTitle}>Bright Side</span>
//               </div>
//               <span style={styles.expandIcon}>{expandedSections.bright ? '▲' : '▼'}</span>
//             </button>
//             {expandedSections.bright && (
//               <div style={styles.predictionContent}>
//                 <p style={styles.predictionText}>{results.bright}</p>
//               </div>
//             )}
//           </div>
//         )}

//         {results.dark && (
//           <div style={styles.predictionSection}>
//             <button 
//               style={styles.predictionHeader}
//               onClick={() => toggleSection('dark')}
//             >
//               <div style={styles.predictionHeaderLeft}>
//                 <span style={styles.predictionIconLarge}>🌙</span>
//                 <span style={styles.predictionSectionTitle}>Dark Side</span>
//               </div>
//               <span style={styles.expandIcon}>{expandedSections.dark ? '▲' : '▼'}</span>
//             </button>
//             {expandedSections.dark && (
//               <div style={styles.predictionContent}>
//                 <p style={styles.predictionText}>{results.dark}</p>
//               </div>
//             )}
//           </div>
//         )}

//         {results.love && (
//           <div style={styles.predictionSection}>
//             <button 
//               style={styles.predictionHeader}
//               onClick={() => toggleSection('love')}
//             >
//               <div style={styles.predictionHeaderLeft}>
//                 <span style={styles.predictionIconLarge}>❤️</span>
//                 <span style={styles.predictionSectionTitle}>Love Life</span>
//               </div>
//               <span style={styles.expandIcon}>{expandedSections.love ? '▲' : '▼'}</span>
//             </button>
//             {expandedSections.love && (
//               <div style={styles.predictionContent}>
//                 <p style={styles.predictionText}>{results.love}</p>
//                 {loveLifeRate !== null && (
//                   <div style={styles.loveRateBox}>
//                     <div style={styles.loveRateLabel}>💕 Love Life Compatibility Rate</div>
//                     <div style={styles.loveRateValue}>{loveLifeRate}%</div>
//                     <div style={styles.loveRateBar}>
//                       <div style={{...styles.loveRateFill, width: `${loveLifeRate}%`}}></div>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             )}
//           </div>
//         )}

//         {/* Friendship Rates Section */}
//         {friendshipRates.length > 0 && (
//           <div style={styles.predictionSection}>
//             <button 
//               style={styles.predictionHeader}
//               onClick={() => toggleSection('friendship')}
//             >
//               <div style={styles.predictionHeaderLeft}>
//                 <span style={styles.predictionIconLarge}>👥</span>
//                 <span style={styles.predictionSectionTitle}>Friendship Compatibility</span>
//               </div>
//               <span style={styles.expandIcon}>{expandedSections.friendship ? '▲' : '▼'}</span>
//             </button>
//             {expandedSections.friendship && (
//               <div style={styles.predictionContent}>
//                 {friendshipRates.map((fr, index) => (
//                   <div key={index} style={styles.friendshipRateItem}>
//                     <div style={styles.friendshipRateHeader}>
//                       <span style={styles.friendName}>👤 {fr.name}</span>
//                       <span style={styles.friendRate}>{fr.rate}%</span>
//                     </div>
//                     <div style={styles.friendRateBar}>
//                       <div style={{...styles.friendRateFill, width: `${fr.rate}%`}}></div>
//                     </div>
//                     <p style={styles.friendDescription}>{fr.description}</p>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         )}

//         {/* Action Buttons */}
//         <div style={styles.resultsActions}>
//           <button 
//             style={styles.restartBtn}
//             onClick={onRestart}
//             onMouseEnter={(e) => {
//               e.target.style.transform = 'translateY(-2px)';
//               e.target.style.boxShadow = '0 10px 30px rgba(100, 150, 255, 0.4)';
//             }}
//             onMouseLeave={(e) => {
//               e.target.style.transform = 'translateY(0)';
//               e.target.style.boxShadow = 'none';
//             }}
//           >
//             🔄 Restart Session
//           </button>
//           <button 
//             style={styles.exportBtn}
//             onClick={downloadResults}
//             onMouseEnter={(e) => {
//               e.target.style.transform = 'translateY(-2px)';
//               e.target.style.boxShadow = '0 10px 30px rgba(100, 255, 150, 0.3)';
//             }}
//             onMouseLeave={(e) => {
//               e.target.style.transform = 'translateY(0)';
//               e.target.style.boxShadow = 'none';
//             }}
//           >
//             ⬇️ Export Insight
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// // ==================== STYLES ====================
// const styles = {
//   app: {
//     width: '100vw',
//     height: '100vh',
//     backgroundColor: '#0a1628',
//     backgroundImage: 'radial-gradient(circle at 50% 50%, #1a2744 0%, #0a1628 100%)',
//     color: '#ffffff',
//     fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
//     overflow: 'hidden',
//     display: 'flex',
//     flexDirection: 'column',
//   },

//   // ===== NAVBAR =====
//   navbar: {
//     width: '100%',
//     height: '70px',
//     borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
//     backgroundColor: 'rgba(10, 22, 40, 0.8)',
//     backdropFilter: 'blur(10px)',
//     display: 'flex',
//     alignItems: 'center',
//     padding: '0 30px',
//     position: 'sticky',
//     top: 0,
//     zIndex: 100,
//   },
//   navContent: {
//     width: '100%',
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   logo: {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '10px',
//     fontSize: '18px',
//     fontWeight: '700',
//     letterSpacing: '1px',
//   },
//   logoIcon: {
//     fontSize: '24px',
//   },
//   logoText: {
//     background: 'linear-gradient(135deg, #667eea 0%, #4facfe 100%)',
//     WebkitBackgroundClip: 'text',
//     WebkitTextFillColor: 'transparent',
//   },
//   navRight: {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '15px',
//   },
//   iconBtn: {
//     background: 'rgba(255, 255, 255, 0.05)',
//     border: '1px solid rgba(255, 255, 255, 0.1)',
//     borderRadius: '8px',
//     width: '40px',
//     height: '40px',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     cursor: 'pointer',
//     fontSize: '18px',
//     transition: 'all 0.3s ease',
//   },
//   progressBadge: {
//     background: 'rgba(70, 100, 200, 0.2)',
//     border: '1px solid rgba(100, 150, 255, 0.3)',
//     borderRadius: '20px',
//     padding: '8px 16px',
//     fontSize: '12px',
//     fontWeight: '600',
//     letterSpacing: '0.5px',
//     color: '#88aaff',
//   },

//   // ===== MAIN VIEW =====
//   mainView: {
//     flex: 1,
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: '20px',
//     overflow: 'auto',
//   },
//   stepContainer: {
//     width: '100%',
//     maxWidth: '600px',
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     gap: '30px',
//   },

//   // ===== WELCOME SCREEN =====
//   welcomeCard: {
//     background: 'rgba(20, 35, 60, 0.6)',
//     border: '1px solid rgba(255, 255, 255, 0.08)',
//     borderRadius: '24px',
//     padding: 'clamp(40px, 8vw, 60px) clamp(30px, 6vw, 50px)',
//     textAlign: 'center',
//     backdropFilter: 'blur(20px)',
//     boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4)',
//     width: '100%',
//   },
//   welcomeIconContainer: {
//     display: 'flex',
//     justifyContent: 'center',
//     marginBottom: '30px',
//   },
//   welcomeIcon: {
//     width: '100px',
//     height: '100px',
//     background: 'rgba(70, 100, 200, 0.2)',
//     borderRadius: '20px',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     position: 'relative',
//     boxShadow: '0 0 40px rgba(70, 100, 200, 0.4)',
//   },
//   iconLayers: {
//     position: 'relative',
//     width: '50px',
//     height: '50px',
//   },
//   iconLayer1: {
//     position: 'absolute',
//     top: '0',
//     left: '50%',
//     transform: 'translateX(-50%)',
//     width: '45px',
//     height: '12px',
//     background: 'linear-gradient(135deg, #667eea 0%, #4facfe 100%)',
//     borderRadius: '3px',
//     boxShadow: '0 0 20px rgba(100, 150, 255, 0.6)',
//   },
//   iconLayer2: {
//     position: 'absolute',
//     top: '18px',
//     left: '50%',
//     transform: 'translateX(-50%)',
//     width: '40px',
//     height: '12px',
//     background: 'linear-gradient(135deg, #667eea 0%, #4facfe 100%)',
//     borderRadius: '3px',
//     opacity: 0.8,
//   },
//   iconLayer3: {
//     position: 'absolute',
//     top: '36px',
//     left: '50%',
//     transform: 'translateX(-50%)',
//     width: '35px',
//     height: '12px',
//     background: 'linear-gradient(135deg, #667eea 0%, #4facfe 100%)',
//     borderRadius: '3px',
//     opacity: 0.6,
//   },
//   welcomeTitle: {
//     fontSize: 'clamp(32px, 6vw, 48px)',
//     fontWeight: '700',
//     margin: '0 0 10px 0',
//     background: 'linear-gradient(135deg, #ffffff 0%, #d0d0d0 100%)',
//     WebkitBackgroundClip: 'text',
//     WebkitTextFillColor: 'transparent',
//   },
//   welcomeSubtitle: {
//     fontSize: 'clamp(12px, 2vw, 14px)',
//     fontWeight: '600',
//     letterSpacing: '2px',
//     color: '#6699ff',
//     marginBottom: '40px',
//   },
//   startBtn: {
//     background: 'linear-gradient(135deg, #667eea 0%, #4facfe 100%)',
//     border: 'none',
//     borderRadius: '50px',
//     padding: '18px 50px',
//     fontSize: 'clamp(16px, 2.5vw, 18px)',
//     fontWeight: '600',
//     color: '#ffffff',
//     cursor: 'pointer',
//     width: '100%',
//     maxWidth: '400px',
//     boxShadow: '0 10px 30px rgba(70, 100, 200, 0.4)',
//     transition: 'all 0.3s ease',
//     marginBottom: '30px',
//   },
//   welcomeFooter: {
//     fontSize: '11px',
//     color: '#6699ff',
//     letterSpacing: '1px',
//     opacity: '0.6',
//     margin: 0,
//   },
//   attribution: {
//     fontSize: '11px',
//     color: '#556688',
//     letterSpacing: '1.5px',
//     fontWeight: '500',
//   },

//   // ===== PLACEHOLDER =====
//   placeholder: {
//     fontSize: '20px',
//     color: '#88aaff',
//     textAlign: 'center',
//   },

//   // ===== STEP 1: BASIC DETAILS =====
//   card: {
//     background: 'rgba(20, 35, 60, 0.6)',
//     border: '1px solid rgba(255, 255, 255, 0.08)',
//     borderRadius: '20px',
//     padding: 'clamp(25px, 5vw, 40px)',
//     backdropFilter: 'blur(20px)',
//     boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4)',
//     width: '100%',
//   },
//   cardHeader: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: '10px',
//     flexWrap: 'wrap',
//     gap: '10px',
//   },
//   cardTitle: {
//     fontSize: 'clamp(24px, 4vw, 32px)',
//     fontWeight: '700',
//     margin: 0,
//     color: '#ffffff',
//   },
//   stepBadge: {
//     background: 'rgba(70, 100, 200, 0.3)',
//     border: '1px solid rgba(100, 150, 255, 0.4)',
//     borderRadius: '20px',
//     padding: '6px 14px',
//     fontSize: '11px',
//     fontWeight: '600',
//     letterSpacing: '0.5px',
//     color: '#88aaff',
//   },
//   cardSubtitle: {
//     fontSize: '15px',
//     color: '#aabbcc',
//     marginBottom: '30px',
//     marginTop: '5px',
//   },
//   formGroup: {
//     marginBottom: '25px',
//   },
//   label: {
//     fontSize: '12px',
//     fontWeight: '600',
//     letterSpacing: '1px',
//     color: '#88aaff',
//     marginBottom: '10px',
//     display: 'block',
//   },
//   inputContainer: {
//     position: 'relative',
//     display: 'flex',
//     alignItems: 'center',
//   },
//   inputIcon: {
//     position: 'absolute',
//     left: '18px',
//     fontSize: '18px',
//     pointerEvents: 'none',
//   },
//   input: {
//     width: '100%',
//     background: 'rgba(15, 25, 45, 0.6)',
//     border: '1px solid rgba(255, 255, 255, 0.1)',
//     borderRadius: '12px',
//     padding: '14px 18px 14px 50px',
//     fontSize: '15px',
//     color: '#ffffff',
//     outline: 'none',
//     transition: 'all 0.3s ease',
//     fontFamily: 'inherit',
//   },
//   inputError: {
//     borderColor: 'rgba(255, 100, 100, 0.5)',
//   },
//   errorText: {
//     color: '#ff6b6b',
//     fontSize: '12px',
//     marginTop: '6px',
//     marginLeft: '4px',
//   },
//   continueBtn: {
//     flex: '2',
//     minWidth: '140px',
//     background: 'linear-gradient(135deg, #667eea 0%, #4facfe 100%)',
//     border: 'none',
//     borderRadius: '12px',
//     padding: '16px 40px',
//     fontSize: '16px',
//     fontWeight: '600',
//     color: '#ffffff',
//     cursor: 'pointer',
//     boxShadow: '0 10px 30px rgba(70, 100, 200, 0.4)',
//     transition: 'all 0.3s ease',
//   },
//   cardFooter: {
//     fontSize: '12px',
//     color: '#6699ff',
//     textAlign: 'center',
//     marginTop: '20px',
//     opacity: 0.7,
//   },

//   // ===== STEP 2: PREDICTION TYPE =====
//   predictionCard: {
//     background: 'rgba(20, 35, 60, 0.4)',
//     border: '1px solid rgba(255, 255, 255, 0.05)',
//     borderRadius: '24px',
//     padding: 'clamp(30px, 6vw, 50px) clamp(25px, 4vw, 40px)',
//     backdropFilter: 'blur(20px)',
//     boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4)',
//     width: '100%',
//     maxWidth: '900px',
//   },
//   predictionTitle: {
//     fontSize: 'clamp(28px, 5vw, 40px)',
//     fontWeight: '700',
//     margin: '0 0 10px 0',
//     textAlign: 'center',
//     color: '#ffffff',
//   },
//   predictionSubtitle: {
//     fontSize: 'clamp(14px, 2vw, 16px)',
//     color: '#aabbcc',
//     textAlign: 'center',
//     marginBottom: '40px',
//   },
//   predictionGrid: {
//     display: 'grid',
//     gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
//     gap: '20px',
//     marginBottom: '35px',
//   },
//   predictionOption: {
//     background: 'rgba(25, 40, 70, 0.5)',
//     border: '1px solid rgba(255, 255, 255, 0.1)',
//     borderRadius: '20px',
//     padding: '35px 25px',
//     textAlign: 'center',
//     cursor: 'pointer',
//     transition: 'all 0.3s ease',
//   },
//   predictionOptionSelected: {
//     background: 'rgba(70, 100, 200, 0.2)',
//     border: '2px solid rgba(100, 150, 255, 0.6)',
//     boxShadow: '0 10px 40px rgba(70, 100, 200, 0.3)',
//     transform: 'translateY(-5px)',
//   },
//   predictionIcon: {
//     fontSize: '48px',
//     marginBottom: '15px',
//   },
//   predictionOptionTitle: {
//     fontSize: '20px',
//     fontWeight: '700',
//     margin: '0 0 10px 0',
//     color: '#ffffff',
//   },
//   predictionOptionDesc: {
//     fontSize: '13px',
//     color: '#99aabb',
//     lineHeight: '1.5',
//     margin: 0,
//   },
//   errorTextCenter: {
//     color: '#ff6b6b',
//     fontSize: '13px',
//     textAlign: 'center',
//     marginTop: '15px',
//     fontWeight: '600',
//     letterSpacing: '0.5px',
//   },

//   // ===== STEP 3 & 4: OPTIONAL QUESTIONS =====
//   optionalBadge: {
//     display: 'inline-flex',
//     alignItems: 'center',
//     gap: '8px',
//     background: 'rgba(100, 200, 150, 0.15)',
//     border: '1px solid rgba(100, 200, 150, 0.3)',
//     borderRadius: '20px',
//     padding: '8px 16px',
//     fontSize: '12px',
//     fontWeight: '600',
//     color: '#66dd99',
//     marginBottom: '25px',
//   },
//   optionalIcon: {
//     fontSize: '16px',
//   },
//   textarea: {
//     width: '100%',
//     background: 'rgba(15, 25, 45, 0.6)',
//     border: '1px solid rgba(255, 255, 255, 0.1)',
//     borderRadius: '12px',
//     padding: '16px 18px',
//     fontSize: '15px',
//     color: '#ffffff',
//     outline: 'none',
//     transition: 'all 0.3s ease',
//     fontFamily: 'inherit',
//     resize: 'vertical',
//     lineHeight: '1.6',
//   },
//   charCounter: {
//     fontSize: '11px',
//     color: '#88aaff',
//     textAlign: 'right',
//     marginTop: '8px',
//     opacity: 0.7,
//   },
//   hintText: {
//     fontSize: '12px',
//     color: '#99aabb',
//     marginTop: '10px',
//     marginLeft: '4px',
//     lineHeight: '1.5',
//   },
//   buttonGroup: {
//     display: 'flex',
//     gap: '15px',
//     marginTop: '15px',
//     flexWrap: 'wrap',
//   },
//   skipBtn: {
//     flex: '1',
//     minWidth: '140px',
//     background: 'rgba(255, 255, 255, 0.05)',
//     border: '1px solid rgba(255, 255, 255, 0.15)',
//     borderRadius: '12px',
//     padding: '14px 30px',
//     fontSize: '15px',
//     fontWeight: '600',
//     color: '#aabbcc',
//     cursor: 'pointer',
//     transition: 'all 0.3s ease',
//   },

//   // ===== STEP 4: FOREVER PERSON EXPLANATION BOX =====
//   explanationBox: {
//     background: 'rgba(100, 80, 200, 0.1)',
//     border: '1px solid rgba(150, 130, 255, 0.3)',
//     borderRadius: '16px',
//     padding: '16px 20px',
//     marginBottom: '25px',
//   },
//   explanationTitle: {
//     fontSize: '16px',
//     fontWeight: '700',
//     color: '#bbaaff',
//     margin: '0 0 8px 0',
//   },
//   explanationText: {
//     fontSize: '13px',
//     color: '#ccddee',
//     lineHeight: '1.6',
//     margin: '0 0 10px 0',
//   },
//   explanationList: {
//     fontSize: '13px',
//     color: '#ccddee',
//     lineHeight: '1.7',
//     margin: '0',
//     paddingLeft: '20px',
//     listStyle: 'none',
//   },

//   // ===== STEP 5: LOVE LIFE DETAILS =====
//   statusGrid: {
//     display: 'grid',
//     gridTemplateColumns: 'repeat(auto-fit, minmax(110px, 1fr))',
//     gap: '12px',
//   },
//   statusBtn: {
//     background: 'rgba(255, 255, 255, 0.05)',
//     border: '1px solid rgba(255, 255, 255, 0.15)',
//     borderRadius: '10px',
//     padding: '12px 20px',
//     fontSize: '14px',
//     fontWeight: '600',
//     color: '#aabbcc',
//     cursor: 'pointer',
//     transition: 'all 0.3s ease',
//   },
//   statusBtnSelected: {
//     background: 'rgba(100, 150, 255, 0.2)',
//     borderColor: 'rgba(100, 150, 255, 0.6)',
//     color: '#88aaff',
//     boxShadow: '0 5px 20px rgba(100, 150, 255, 0.3)',
//   },

//   // ===== STEP 6: REVIEW SCREEN =====
//   reviewHeader: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: '10px',
//     flexWrap: 'wrap',
//     gap: '10px',
//   },
//   reviewSection: {
//     background: 'rgba(255, 255, 255, 0.03)',
//     border: '1px solid rgba(255, 255, 255, 0.08)',
//     borderRadius: '14px',
//     marginBottom: '15px',
//     overflow: 'hidden',
//   },
//   reviewSectionHeader: {
//     width: '100%',
//     background: 'transparent',
//     border: 'none',
//     padding: '16px 20px',
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     cursor: 'pointer',
//     transition: 'background 0.3s ease',
//     color: '#ffffff',
//   },
//   reviewSectionTitle: {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '10px',
//     fontSize: '16px',
//     fontWeight: '600',
//   },
//   reviewIcon: {
//     fontSize: '20px',
//   },
//   expandIcon: {
//     fontSize: '12px',
//     color: '#88aaff',
//   },
//   reviewSectionContent: {
//     padding: '10px 20px 20px 20px',
//     borderTop: '1px solid rgba(255, 255, 255, 0.05)',
//   },
//   reviewItem: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     padding: '10px 0',
//     borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
//   },
//   reviewLabel: {
//     fontSize: '11px',
//     fontWeight: '600',
//     letterSpacing: '0.5px',
//     color: '#88aaff',
//   },
//   reviewValue: {
//     fontSize: '14px',
//     color: '#ffffff',
//     fontWeight: '500',
//   },
//   reviewTextBlock: {
//     marginBottom: '15px',
//   },
//   reviewTextValue: {
//     fontSize: '13px',
//     color: '#ccddee',
//     lineHeight: '1.6',
//     marginTop: '8px',
//     marginBottom: '0',
//   },
//   scopeBadges: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     gap: '10px',
//   },
//   scopeBadge: {
//     background: 'rgba(100, 150, 255, 0.15)',
//     border: '1px solid rgba(100, 150, 255, 0.3)',
//     borderRadius: '20px',
//     padding: '8px 16px',
//     fontSize: '13px',
//     fontWeight: '600',
//     color: '#88aaff',
//   },
//   emptyText: {
//     fontSize: '13px',
//     color: '#6688aa',
//     fontStyle: 'italic',
//   },
//   generateBtn: {
//     background: 'linear-gradient(135deg, #667eea 0%, #4facfe 100%)',
//     border: 'none',
//     borderRadius: '14px',
//     padding: '18px 40px',
//     fontSize: '18px',
//     fontWeight: '700',
//     color: '#ffffff',
//     cursor: 'pointer',
//     width: '100%',
//     boxShadow: '0 15px 40px rgba(70, 100, 200, 0.5)',
//     transition: 'all 0.3s ease',
//     marginTop: '20px',
//   },
//   encryptedFooter: {
//     fontSize: '11px',
//     color: '#6699ff',
//     textAlign: 'center',
//     marginTop: '15px',
//     opacity: 0.7,
//     letterSpacing: '0.5px',
//   },

//   // ===== STEP 7: LOADING SCREEN =====
//   loadingContainer: {
//     width: '100%',
//     maxWidth: '600px',
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     justifyContent: 'center',
//     gap: '30px',
//   },
//   loadingOrbitContainer: {
//     position: 'relative',
//     width: '200px',
//     height: '200px',
//   },
//   loadingCenter: {
//     position: 'absolute',
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',
//     width: '30px',
//     height: '30px',
//     background: 'radial-gradient(circle, #88aaff 0%, #4466cc 100%)',
//     borderRadius: '50%',
//     boxShadow: '0 0 40px rgba(100, 150, 255, 0.8)',
//   },
//   loadingOrbit1: {
//     position: 'absolute',
//     top: '50%',
//     left: '50%',
//     width: '120px',
//     height: '120px',
//     margin: '-60px 0 0 -60px',
//     border: '2px dashed rgba(100, 150, 255, 0.3)',
//     borderRadius: '50%',
//     animation: 'rotate 3s linear infinite',
//   },
//   loadingOrbit2: {
//     position: 'absolute',
//     top: '50%',
//     left: '50%',
//     width: '180px',
//     height: '180px',
//     margin: '-90px 0 0 -90px',
//     border: '2px dashed rgba(100, 150, 255, 0.2)',
//     borderRadius: '50%',
//     animation: 'rotate 5s linear infinite reverse',
//   },
//   loadingDot: {
//     position: 'absolute',
//     top: '0',
//     left: '50%',
//     transform: 'translateX(-50%)',
//     width: '12px',
//     height: '12px',
//     background: 'linear-gradient(135deg, #667eea 0%, #4facfe 100%)',
//     borderRadius: '50%',
//     boxShadow: '0 0 20px rgba(100, 150, 255, 0.8)',
//   },
//   loadingTitle: {
//     fontSize: '14px',
//     fontWeight: '600',
//     letterSpacing: '3px',
//     color: '#88aaff',
//     margin: 0,
//   },
//   loadingStatus: {
//     fontSize: '20px',
//     fontWeight: '600',
//     color: '#ccddee',
//     margin: 0,
//     minHeight: '30px',
//   },
//   progressBarContainer: {
//     width: '100%',
//     maxWidth: '400px',
//     height: '8px',
//     background: 'rgba(255, 255, 255, 0.05)',
//     borderRadius: '10px',
//     overflow: 'hidden',
//     border: '1px solid rgba(255, 255, 255, 0.1)',
//   },
//   progressBarFill: {
//     height: '100%',
//     background: 'linear-gradient(90deg, #667eea 0%, #4facfe 100%)',
//     borderRadius: '10px',
//     transition: 'width 0.3s ease',
//     boxShadow: '0 0 20px rgba(100, 150, 255, 0.6)',
//   },
//   progressText: {
//     width: '100%',
//     maxWidth: '400px',
//     display: 'flex',
//     justifyContent: 'space-between',
//     fontSize: '11px',
//     fontWeight: '600',
//     color: '#88aaff',
//     letterSpacing: '1px',
//   },
//   loadingFooter: {
//     display: 'flex',
//     gap: '10px',
//     fontSize: '10px',
//     color: '#556688',
//     letterSpacing: '0.5px',
//     marginTop: '20px',
//     flexWrap: 'wrap',
//     justifyContent: 'center',
//   },

//   // ===== STEP 8: RESULTS SCREEN =====
//   resultsContainer: {
//     width: '100%',
//     maxWidth: '800px',
//     padding: '20px',
//   },
//   resultsCard: {
//     background: 'rgba(20, 35, 60, 0.5)',
//     border: '1px solid rgba(255, 255, 255, 0.08)',
//     borderRadius: '24px',
//     padding: 'clamp(30px, 5vw, 50px)',
//     backdropFilter: 'blur(20px)',
//   },
//   resultsHeader: {
//     textAlign: 'center',
//     marginBottom: '30px',
//   },
//   resultsTitle: {
//     fontSize: 'clamp(28px, 5vw, 42px)',
//     fontWeight: '700',
//     margin: '0 0 10px 0',
//     background: 'linear-gradient(135deg, #ffffff 0%, #88aaff 100%)',
//     WebkitBackgroundClip: 'text',
//     WebkitTextFillColor: 'transparent',
//   },
//   resultsSubtitle: {
//     fontSize: 'clamp(13px, 2vw, 15px)',
//     color: '#aabbcc',
//     margin: 0,
//   },
//   statsRow: {
//     display: 'grid',
//     gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
//     gap: '15px',
//     marginBottom: '30px',
//   },
//   statBox: {
//     background: 'rgba(255, 255, 255, 0.03)',
//     border: '1px solid rgba(255, 255, 255, 0.08)',
//     borderRadius: '12px',
//     padding: '15px',
//     textAlign: 'center',
//   },
//   statLabel: {
//     fontSize: '10px',
//     fontWeight: '600',
//     letterSpacing: '1px',
//     color: '#88aaff',
//     marginBottom: '8px',
//   },
//   statValue: {
//     fontSize: '24px',
//     fontWeight: '700',
//     color: '#ffffff',
//   },
//   statChange: {
//     fontSize: '14px',
//     color: '#66dd99',
//     marginLeft: '5px',
//   },
//   statBadge: {
//     fontSize: '16px',
//     color: '#4facfe',
//   },
//   statLocked: {
//     fontSize: '12px',
//     color: '#ff88aa',
//   },
//   predictionSection: {
//     background: 'rgba(25, 40, 70, 0.4)',
//     border: '1px solid rgba(255, 255, 255, 0.08)',
//     borderRadius: '16px',
//     marginBottom: '15px',
//     overflow: 'hidden',
//   },
//   predictionHeader: {
//     width: '100%',
//     background: 'transparent',
//     border: 'none',
//     padding: '20px',
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     cursor: 'pointer',
//     transition: 'background 0.3s ease',
//   },
//   predictionHeaderLeft: {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '15px',
//   },
//   predictionIconLarge: {
//     fontSize: '32px',
//   },
//   predictionSectionTitle: {
//     fontSize: '20px',
//     fontWeight: '700',
//     color: '#ffffff',
//   },
//   predictionContent: {
//     padding: '0 20px 20px 20px',
//     borderTop: '1px solid rgba(255, 255, 255, 0.05)',
//   },
//   predictionText: {
//     fontSize: '15px',
//     color: '#ccddee',
//     lineHeight: '1.8',
//     marginTop: '15px',
//   },
//   resultsActions: {
//     display: 'flex',
//     gap: '15px',
//     marginTop: '30px',
//     flexWrap: 'wrap',
//   },
//   restartBtn: {
//     flex: '1',
//     minWidth: '180px',
//     background: 'rgba(100, 150, 255, 0.15)',
//     border: '1px solid rgba(100, 150, 255, 0.3)',
//     borderRadius: '12px',
//     padding: '16px 30px',
//     fontSize: '15px',
//     fontWeight: '600',
//     color: '#88aaff',
//     cursor: 'pointer',
//     transition: 'all 0.3s ease',
//   },
//   exportBtn: {
//     flex: '1',
//     minWidth: '180px',
//     background: 'rgba(100, 255, 150, 0.12)',
//     border: '1px solid rgba(100, 255, 150, 0.3)',
//     borderRadius: '12px',
//     padding: '16px 30px',
//     fontSize: '15px',
//     fontWeight: '600',
//     color: '#66dd99',
//     cursor: 'pointer',
//     transition: 'all 0.3s ease',
//   },

//   // ===== STEP 3: FRIENDSHIP RATE CHECKER =====
//   friendInputRow: {
//     display: 'flex',
//     gap: '10px',
//     marginBottom: '12px',
//     alignItems: 'center',
//   },
//   removeBtn: {
//     background: 'rgba(255, 100, 100, 0.1)',
//     border: '1px solid rgba(255, 100, 100, 0.3)',
//     borderRadius: '8px',
//     width: '40px',
//     height: '48px',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     cursor: 'pointer',
//     fontSize: '18px',
//     color: '#ff8888',
//     transition: 'all 0.3s ease',
//   },
//   addFriendBtn: {
//     background: 'rgba(100, 150, 255, 0.1)',
//     border: '1px solid rgba(100, 150, 255, 0.3)',
//     borderRadius: '12px',
//     padding: '12px 20px',
//     fontSize: '14px',
//     fontWeight: '600',
//     color: '#88aaff',
//     cursor: 'pointer',
//     transition: 'all 0.3s ease',
//     width: '100%',
//     marginTop: '10px',
//   },

//   // ===== RESULTS: LOVE RATE =====
//   loveRateBox: {
//     background: 'rgba(255, 100, 150, 0.08)',
//     border: '1px solid rgba(255, 100, 150, 0.2)',
//     borderRadius: '12px',
//     padding: '20px',
//     marginTop: '20px',
//   },
//   loveRateLabel: {
//     fontSize: '14px',
//     fontWeight: '600',
//     color: '#ffaacc',
//     marginBottom: '10px',
//   },
//   loveRateValue: {
//     fontSize: '36px',
//     fontWeight: '700',
//     color: '#ff88bb',
//     marginBottom: '15px',
//   },
//   loveRateBar: {
//     width: '100%',
//     height: '12px',
//     background: 'rgba(255, 255, 255, 0.05)',
//     borderRadius: '10px',
//     overflow: 'hidden',
//   },
//   loveRateFill: {
//     height: '100%',
//     background: 'linear-gradient(90deg, #ff6b9d 0%, #ff88bb 100%)',
//     borderRadius: '10px',
//     transition: 'width 0.5s ease',
//   },

//   // ===== RESULTS: FRIENDSHIP RATES =====
//   friendshipRateItem: {
//     background: 'rgba(100, 150, 255, 0.05)',
//     border: '1px solid rgba(100, 150, 255, 0.15)',
//     borderRadius: '12px',
//     padding: '18px',
//     marginBottom: '15px',
//   },
//   friendshipRateHeader: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: '12px',
//   },
//   friendName: {
//     fontSize: '18px',
//     fontWeight: '600',
//     color: '#ffffff',
//   },
//   friendRate: {
//     fontSize: '24px',
//     fontWeight: '700',
//     color: '#88aaff',
//   },
//   friendRateBar: {
//     width: '100%',
//     height: '10px',
//     background: 'rgba(255, 255, 255, 0.05)',
//     borderRadius: '10px',
//     overflow: 'hidden',
//     marginBottom: '12px',
//   },
//   friendRateFill: {
//     height: '100%',
//     background: 'linear-gradient(90deg, #667eea 0%, #4facfe 100%)',
//     borderRadius: '10px',
//     transition: 'width 0.5s ease',
//   },
//   friendDescription: {
//     fontSize: '13px',
//     color: '#aabbcc',
//     lineHeight: '1.6',
//     fontStyle: 'italic',
//     margin: 0,
//   },

//   // ===== RESPONSIVE MEDIA QUERIES (applied via inline conditions in components) =====
// };







// after datasotr fixes 


import React, { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, doc, setDoc, getDoc, serverTimestamp } from 'firebase/firestore';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABi1-Erg0-44tnKhSPR_L4MpaYGE-sA0g",
  authDomain: "prediction-app-b6174.firebaseapp.com",
  projectId: "prediction-app-b6174",
  storageBucket: "prediction-app-b6174.firebasestorage.app",
  messagingSenderId: "333703591463",
  appId: "1:333703591463:web:7463dc87ceb6c99e260002"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default function App() {
  // Load saved step and formData from localStorage on mount
  const [step, setStep] = useState(() => {
    const savedStep = localStorage.getItem('futureInsightStep');
    return savedStep ? parseInt(savedStep) : 0;
  });
  
  const [formData, setFormData] = useState(() => {
    const savedData = localStorage.getItem('futureInsightData');
    return savedData ? JSON.parse(savedData) : {
      name: '',
      birthDate: '',
      predictionTypes: [],
      friendNames: [''],
      foreverPerson: '',
      foreverPersonReason: '',
      partnerName: '',
      relationshipStatus: '',
      relationshipDesc: ''
    };
  });

  // Store generated results so they don't change on reload
  const [savedResults, setSavedResults] = useState(() => {
    const saved = localStorage.getItem('savedResults');
    return saved ? JSON.parse(saved) : null;
  });

  // Auto-save formData to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('futureInsightData', JSON.stringify(formData));
  }, [formData]);

  // Auto-save step to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('futureInsightStep', step.toString());
  }, [step]);

  // Auto-save savedResults to localStorage
  useEffect(() => {
    if (savedResults) {
      localStorage.setItem('savedResults', JSON.stringify(savedResults));
    }
  }, [savedResults]);

  // Save to Firebase - using username as document ID
  useEffect(() => {
    const saveToFirebase = async () => {
      if (!formData.name || step === 0) return; // Don't save if no name yet
      
      try {
        // Use sanitized username as document ID
        const docId = formData.name.toLowerCase().replace(/[^a-z0-9]/g, '_');
        const docRef = doc(db, 'predictions', docId);
        
        const dataToSave = {
          name: formData.name,
          birthDate: formData.birthDate,
          predictionTypes: formData.predictionTypes,
          friendNames: formData.friendNames,
          foreverPerson: formData.foreverPerson,
          foreverPersonReason: formData.foreverPersonReason,
          partnerName: formData.partnerName,
          relationshipStatus: formData.relationshipStatus,
          relationshipDesc: formData.relationshipDesc,
          currentStep: step,
          lastUpdated: serverTimestamp()
        };
        
        // Add results if they exist
        if (savedResults) {
          dataToSave.results = savedResults;
        }
        
        // Check if document exists
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
          // Update existing
          await setDoc(docRef, dataToSave, { merge: true });
        } else {
          // Create new with createdAt
          await setDoc(docRef, {
            ...dataToSave,
            createdAt: serverTimestamp()
          });
        }
      } catch (error) {
        console.error('Firebase save error:', error);
      }
    };
    
    // Debounce saves by 1 second
    const timeoutId = setTimeout(() => {
      saveToFirebase();
    }, 1000);
    
    return () => clearTimeout(timeoutId);
  }, [formData, step, savedResults]);

  const totalSteps = 8;

  const nextStep = () => setStep(prev => prev + 1);
  const skipStep = () => setStep(prev => prev + 1);
  
  const resetApp = () => {
    setStep(0);
    setFormData({
      name: '',
      birthDate: '',
      predictionTypes: [],
      friendNames: [''],
      foreverPerson: '',
      foreverPersonReason: '',
      partnerName: '',
      relationshipStatus: '',
      relationshipDesc: ''
    });
    setSavedResults(null);
    // Clear localStorage
    localStorage.removeItem('futureInsightStep');
    localStorage.removeItem('futureInsightData');
    localStorage.removeItem('savedResults');
  };

  return (
    <div style={styles.app}>
      <style>
        {`
          @keyframes rotate {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}
      </style>
      {/* Fixed Navbar */}
      <nav style={styles.navbar}>
        <div style={styles.navContent}>
          <div style={styles.logo}>
            <span style={styles.logoIcon}>🔮</span>
            <span style={styles.logoText}>FUTURE INSIGHT</span>
          </div>
          {step > 0 && (
            <div style={styles.navRight}>
              <button
              onClick={resetApp}
              >
                reset app
              </button>
              <div style={styles.progressBadge}>
                STEP {step} OF {totalSteps}
              </div>
            </div>
          )}
          {step === 0 && (
            <div style={styles.navRight}>
              <button style={styles.iconBtn}>⚙️</button>
              <button style={styles.iconBtn}>❓</button>
            </div>
          )}
        </div>
      </nav>

      {/* Main View - Component Switching */}
      <main style={styles.mainView}>
        {step === 0 && <WelcomeScreen onStart={nextStep} />}
        {step === 1 && <BasicDetailsScreen formData={formData} setFormData={setFormData} onNext={nextStep} />}
        {step === 2 && <PredictionTypeScreen formData={formData} setFormData={setFormData} onNext={nextStep} />}
        {step === 3 && <LifeFeelingScreen formData={formData} setFormData={setFormData} onNext={nextStep} onSkip={skipStep} />}
        {step === 4 && <MistakesScreen formData={formData} setFormData={setFormData} onNext={nextStep} onSkip={skipStep} />}
        {step === 5 && (
          formData.predictionTypes?.includes('love') 
            ? <LoveLifeScreen formData={formData} setFormData={setFormData} onNext={nextStep} />
            : (() => { nextStep(); return null; })()
        )}
        {step === 6 && <ReviewScreen formData={formData} onNext={nextStep} />}
        {step === 7 && <LoadingScreen onComplete={nextStep} />}
        {step === 8 && <ResultsScreen formData={formData} savedResults={savedResults} onSaveResults={setSavedResults} onRestart={resetApp} />}
      </main>
    </div>
  );
}

// ==================== STEP 0: WELCOME SCREEN ====================
function WelcomeScreen({ onStart }) {
  return (
    <div style={styles.stepContainer}>
      <div style={styles.welcomeCard}>
        {/* Logo Icon */}
        <div style={styles.welcomeIconContainer}>
          <div style={styles.welcomeIcon}>
            <div style={styles.iconLayers}>
              <div style={styles.iconLayer1}></div>
              <div style={styles.iconLayer2}></div>
              <div style={styles.iconLayer3}></div>
            </div>
          </div>
        </div>

        {/* Title */}
        <h1 style={styles.welcomeTitle}>Future Insight</h1>
        <p style={styles.welcomeSubtitle}>BRIGHT • DARK • LOVE PATH</p>

        {/* Start Button */}
        <button 
          style={styles.startBtn} 
          onClick={onStart}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-3px)';
            e.target.style.boxShadow = '0 15px 40px rgba(70, 100, 200, 0.6)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = '0 10px 30px rgba(70, 100, 200, 0.4)';
          }}
        >
          Start Prediction ✨
        </button>

        {/* Footer Text */}
        <p style={styles.welcomeFooter}>V1.0 • SECURE & PRIVATE CONNECTION</p>
      </div>

      {/* Bottom Attribution */}
      <div style={styles.attribution}>
        POWERED BY NEURAL INSIGHT ENGINE
      </div>
    </div>
  );
}

// ==================== STEP 1: BASIC DETAILS SCREEN ====================
function BasicDetailsScreen({ formData, setFormData, onNext }) {
  const [errors, setErrors] = useState({ name: '', birthDate: '' });

  const handleSubmit = () => {
    let hasError = false;
    const newErrors = { name: '', birthDate: '' };

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name';
      hasError = true;
    }

    if (!formData.birthDate) {
      newErrors.birthDate = 'Please select your birth date';
      hasError = true;
    }

    setErrors(newErrors);

    if (!hasError) {
      onNext();
    }
  };

  return (
    <div style={styles.stepContainer}>
      <div style={styles.card}>
        {/* Header */}
        <div style={styles.cardHeader}>
          <h2 style={styles.cardTitle}>Basic Details</h2>
          <div style={styles.stepBadge}>STEP 1 OF 6</div>
        </div>
        <p style={styles.cardSubtitle}>Welcome to your future. Let's start with the basics.</p>

        {/* Form */}
        <div style={styles.formGroup}>
          <label style={styles.label}>FULL NAME</label>
          <div style={styles.inputContainer}>
            <span style={styles.inputIcon}>📋</span>
            <input
              type="text"
              placeholder="e.g. Alexander Pierce"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              style={{
                ...styles.input,
                ...(errors.name ? styles.inputError : {})
              }}
            />
          </div>
          {errors.name && <p style={styles.errorText}>{errors.name}</p>}
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>BIRTH DATE</label>
          <div style={styles.inputContainer}>
            <span style={styles.inputIcon}>📅</span>
            <input
              type="date"
              value={formData.birthDate}
              onChange={(e) => setFormData({ ...formData, birthDate: e.target.value })}
              style={{
                ...styles.input,
                ...(errors.birthDate ? styles.inputError : {})
              }}
            />
          </div>
          {errors.birthDate && <p style={styles.errorText}>{errors.birthDate}</p>}
        </div>

        {/* Continue Button */}
        <button 
          style={{...styles.continueBtn, width: '100%', marginTop: '10px'}} 
          onClick={handleSubmit}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-2px)';
            e.target.style.boxShadow = '0 15px 40px rgba(70, 100, 200, 0.5)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = '0 10px 30px rgba(70, 100, 200, 0.4)';
          }}
        >
          Continue →
        </button>

        {/* Footer */}
        <p style={styles.cardFooter}>
          🔒 Your data is encrypted and used only for prediction accuracy.
        </p>
      </div>
    </div>
  );
}

// ==================== STEP 2: PREDICTION TYPE SELECTION ====================
function PredictionTypeScreen({ formData, setFormData, onNext }) {
  const [error, setError] = useState('');

  const predictionOptions = [
    {
      id: 'bright',
      icon: '☀️',
      title: 'Bright Side',
      description: 'Optimistic insights and positive outcomes for your journey.',
    },
    {
      id: 'dark',
      icon: '🌙',
      title: 'Dark Side',
      description: 'Mysterious paths and hidden truths from the shadows.',
    },
    {
      id: 'love',
      icon: '❤️',
      title: 'Love Life',
      description: 'Discover your romantic destiny and connections.',
    },
  ];

  const togglePrediction = (id) => {
    const current = formData.predictionTypes || [];
    if (current.includes(id)) {
      setFormData({
        ...formData,
        predictionTypes: current.filter(t => t !== id)
      });
    } else {
      setFormData({
        ...formData,
        predictionTypes: [...current, id]
      });
    }
    setError('');
  };

  const handleContinue = () => {
    if (!formData.predictionTypes || formData.predictionTypes.length === 0) {
      setError('REQUIRES SELECTION');
      return;
    }
    onNext();
  };

  return (
    <div style={styles.stepContainer}>
      <div style={styles.predictionCard}>
        {/* Header */}
        <h2 style={styles.predictionTitle}>Choose Your Prediction</h2>
        <p style={styles.predictionSubtitle}>Select the path you wish to explore today.</p>

        {/* Prediction Cards */}
        <div style={styles.predictionGrid}>
          {predictionOptions.map((option) => {
            const isSelected = formData.predictionTypes?.includes(option.id);
            return (
              <div
                key={option.id}
                onClick={() => togglePrediction(option.id)}
                style={{
                  ...styles.predictionOption,
                  ...(isSelected ? styles.predictionOptionSelected : {}),
                }}
                onMouseEnter={(e) => {
                  if (!isSelected) {
                    e.currentTarget.style.borderColor = 'rgba(100, 150, 255, 0.5)';
                    e.currentTarget.style.transform = 'translateY(-5px)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isSelected) {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }
                }}
              >
                <div style={styles.predictionIcon}>{option.icon}</div>
                <h3 style={styles.predictionOptionTitle}>{option.title}</h3>
                <p style={styles.predictionOptionDesc}>{option.description}</p>
              </div>
            );
          })}
        </div>

        {/* Continue Button */}
        <button 
          style={{...styles.continueBtn, width: '100%'}}
          onClick={handleContinue}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-2px)';
            e.target.style.boxShadow = '0 15px 40px rgba(70, 100, 200, 0.5)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = '0 10px 30px rgba(70, 100, 200, 0.4)';
          }}
        >
          CONTINUE
        </button>

        {error && <p style={styles.errorTextCenter}>{error}</p>}
      </div>

      {/* Footer Attribution */}
      <div style={styles.attribution}>
        © 2024 FUTURE INSIGHT AI. ALL DIMENSIONS SECURED.
      </div>
    </div>
  );
}

// ==================== STEP 3: FRIENDSHIP RATE CHECKER ====================
function LifeFeelingScreen({ formData, setFormData, onNext, onSkip }) {
  const addFriend = () => {
    setFormData({
      ...formData,
      friendNames: [...formData.friendNames, '']
    });
  };

  const removeFriend = (index) => {
    const newFriends = formData.friendNames.filter((_, i) => i !== index);
    setFormData({
      ...formData,
      friendNames: newFriends.length > 0 ? newFriends : ['']
    });
  };

  const updateFriend = (index, value) => {
    const newFriends = [...formData.friendNames];
    newFriends[index] = value;
    setFormData({
      ...formData,
      friendNames: newFriends
    });
  };

  return (
    <div style={styles.stepContainer}>
      <div style={styles.card}>
        {/* Header */}
        <div style={styles.cardHeader}>
          <h2 style={styles.cardTitle}>Friendship Rate Checkup</h2>
          <div style={styles.stepBadge}>STEP 3 OF 6</div>
        </div>
        <p style={styles.cardSubtitle}>
          Add friends to check your friendship compatibility rates
        </p>

        {/* Optional Badge */}
        <div style={styles.optionalBadge}>
          <span style={styles.optionalIcon}>👥</span>
          <span>Optional - Fun Feature</span>
        </div>

        {/* Friend Inputs */}
        <div style={styles.formGroup}>
          <label style={styles.label}>FRIEND NAMES</label>
          {formData.friendNames.map((friend, index) => (
            <div key={index} style={styles.friendInputRow}>
              <div style={{...styles.inputContainer, flex: 1}}>
                <span style={styles.inputIcon}>👤</span>
                <input
                  type="text"
                  placeholder={`Friend ${index + 1} name...`}
                  value={friend}
                  onChange={(e) => updateFriend(index, e.target.value)}
                  style={styles.input}
                />
              </div>
              {formData.friendNames.length > 1 && (
                <button
                  style={styles.removeBtn}
                  onClick={() => removeFriend(index)}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'rgba(255, 100, 100, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'rgba(255, 100, 100, 0.1)';
                  }}
                >
                  ✕
                </button>
              )}
            </div>
          ))}
          
          {/* Add Friend Button */}
          <button
            style={styles.addFriendBtn}
            onClick={addFriend}
            onMouseEnter={(e) => {
              e.target.style.background = 'rgba(100, 150, 255, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'rgba(100, 150, 255, 0.1)';
            }}
          >
            ➕ Add Another Friend
          </button>

          <p style={styles.hintText}>
            💡 We'll calculate friendship compatibility for each friend in the results!
          </p>
        </div>

        {/* Buttons */}
        <div style={styles.buttonGroup}>
          <button 
            style={styles.skipBtn}
            onClick={onSkip}
            onMouseEnter={(e) => {
              e.target.style.background = 'rgba(255, 255, 255, 0.08)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'rgba(255, 255, 255, 0.05)';
            }}
          >
            Skip this step
          </button>
          <button 
            style={styles.continueBtn}
            onClick={onNext}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 15px 40px rgba(70, 100, 200, 0.5)';
              
            }}
            onMouseLeave={(e) =>{
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 10px 30px rgba(70, 100, 200, 0.4)';
            }}
          >
            Continue →
          </button>
        </div>
      </div>
    </div>
  );
}

// ==================== STEP 4: FOREVER PERSON (OPTIONAL) ====================
function MistakesScreen({ formData, setFormData, onNext, onSkip }) {
  return (
    <div style={styles.stepContainer}>
      <div style={styles.card}>
        {/* Header */}
        <div style={styles.cardHeader}>
          <h2 style={styles.cardTitle}>Your Forever Person</h2>
          <div style={styles.stepBadge}>STEP 4 OF 6</div>
        </div>
        <p style={styles.cardSubtitle}>
          Who is the ONE person you want in your life until the very end?
        </p>

        {/* Explanation Box */}
        <div style={styles.explanationBox}>
          <h3 style={styles.explanationTitle}>🌟 Choose Your Soul Connection</h3>
          <p style={styles.explanationText}>
            Among everyone in your life - who is that ONE person you want by your side until death?
          </p>
          <ul style={styles.explanationList}>
            <li>✓ Any gender • Any relationship (friend, family, partner, anyone)</li>
            <li>⚠️ <strong>Only ONE person</strong> - the one who matters most to your soul</li>
          </ul>
        </div>

        {/* Forever Person Input */}
        <div style={styles.formGroup}>
          <label style={styles.label}>WHO IS YOUR FOREVER PERSON? 💖</label>
          <div style={styles.inputContainer}>
            <span style={styles.inputIcon}>👤</span>
            <input
              type="text"
              placeholder="Enter their name... (the ONE person you choose)"
              value={formData.foreverPerson || ''}
              onChange={(e) => setFormData({ ...formData, foreverPerson: e.target.value })}
              style={styles.input}
            />
          </div>
          <p style={styles.hintText}>
            💭 Think about your last day on Earth. Who do you want there? That's your answer.
          </p>
        </div>

        {/* Optional: Tell us more */}
        <div style={styles.formGroup}>
          <label style={styles.label}>WHY THIS PERSON? (OPTIONAL)</label>
          <textarea
            placeholder="What makes this person irreplaceable in your life?"
            value={formData.foreverPersonReason || ''}
            onChange={(e) => {
              if (e.target.value.length <= 200) {
                setFormData({ ...formData, foreverPersonReason: e.target.value });
              }
            }}
            style={styles.textarea}
            rows={3}
          />
          <div style={styles.charCounter}>
            {(formData.foreverPersonReason?.length || 0)} / 200 characters
          </div>
        </div>

        {/* Buttons */}
        <div style={styles.buttonGroup}>
          <button 
            style={styles.skipBtn}
            onClick={onSkip}
            onMouseEnter={(e) => {
              e.target.style.background = 'rgba(255, 255, 255, 0.08)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'rgba(255, 255, 255, 0.05)';
            }}
          >
            Skip this step
          </button>
          <button 
            style={styles.continueBtn}
            onClick={onNext}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 15px 40px rgba(70, 100, 200, 0.5)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 10px 30px rgba(70, 100, 200, 0.4)';
            }}
          >
            Continue →
          </button>
        </div>
      </div>
    </div>
  );
}

// ==================== STEP 5: LOVE LIFE DETAILS (CONDITIONAL) ====================
function LoveLifeScreen({ formData, setFormData, onNext }) {
  const statusOptions = ['Single', 'Dating', 'Committed', 'Married', 'Complicated'];

  return (
    <div style={styles.stepContainer}>
      <div style={styles.card}>
        {/* Header */}
        <div style={styles.cardHeader}>
          <h2 style={styles.cardTitle}>Love Life Details</h2>
          <div style={styles.stepBadge}>STEP 5 OF 6</div>
        </div>
        <p style={styles.cardSubtitle}>
          Provide details to refine your connection prediction.
        </p>

        {/* Partner Name */}
        <div style={styles.formGroup}>
          <label style={styles.label}>PARTNER NAME (OPTIONAL)</label>
          <div style={styles.inputContainer}>
            <span style={styles.inputIcon}>💕</span>
            <input
              type="text"
              placeholder="Enter full name..."
              value={formData.partnerName || ''}
              onChange={(e) => setFormData({ ...formData, partnerName: e.target.value })}
              style={styles.input}
            />
          </div>
        </div>

        {/* Relationship Status */}
        <div style={styles.formGroup}>
          <label style={styles.label}>RELATIONSHIP STATUS</label>
          <div style={styles.statusGrid}>
            {statusOptions.map(status => {
              const isSelected = formData.relationshipStatus === status;
              return (
                <button
                  key={status}
                  onClick={() => setFormData({ ...formData, relationshipStatus: status })}
                  style={{
                    ...styles.statusBtn,
                    ...(isSelected ? styles.statusBtnSelected : {})
                  }}
                  onMouseEnter={(e) => {
                    if (!isSelected) {
                      e.target.style.background = 'rgba(100, 150, 255, 0.15)';
                      e.target.style.borderColor = 'rgba(100, 150, 255, 0.4)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isSelected) {
                      e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                      e.target.style.borderColor = 'rgba(255, 255, 255, 0.15)';
                    }
                  }}
                >
                  {status}
                </button>
              );
            })}
          </div>
        </div>

        {/* About Connection */}
        <div style={styles.formGroup}>
          <label style={styles.label}>ABOUT THIS CONNECTION (OPTIONAL)</label>
          <textarea
            placeholder="Share a brief history or current dynamic..."
            value={formData.relationshipDesc || ''}
            onChange={(e) => {
              if (e.target.value.length <= 300) {
                setFormData({ ...formData, relationshipDesc: e.target.value });
              }
            }}
            style={styles.textarea}
            rows={4}
          />
          <div style={styles.charCounter}>
            {(formData.relationshipDesc?.length || 0)} / 300 characters
          </div>
        </div>

        {/* Continue Button */}
        <button 
          style={{...styles.continueBtn, width: '100%', marginTop: '10px'}}
          onClick={onNext}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-2px)';
            e.target.style.boxShadow = '0 15px 40px rgba(70, 100, 200, 0.5)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = '0 10px 30px rgba(70, 100, 200, 0.4)';
          }}
        >
          Continue →
        </button>
      </div>
    </div>
  );
}

// ==================== STEP 6: REVIEW SCREEN ====================
function ReviewScreen({ formData, onNext }) {
  const [expandedSections, setExpandedSections] = useState({
    basic: true,
    predictions: false,
    reflection: false
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <div style={styles.stepContainer}>
      <div style={{...styles.card, maxWidth: '700px'}}>
        {/* Header */}
        <div style={styles.reviewHeader}>
          <h2 style={styles.cardTitle}>Review Your Inputs</h2>
          <div style={styles.stepBadge}>STEP 6 OF 6</div>
        </div>
        <p style={styles.cardSubtitle}>
          Finalize your parameters before initiating the neural synthesis.
        </p>

        {/* Basic Details Section */}
        <div style={styles.reviewSection}>
          <button 
            style={styles.reviewSectionHeader}
            onClick={() => toggleSection('basic')}
          >
            <div style={styles.reviewSectionTitle}>
              <span style={styles.reviewIcon}>👤</span>
              <span>Basic Details</span>
            </div>
            <span style={styles.expandIcon}>{expandedSections.basic ? '▲' : '▼'}</span>
          </button>
          {expandedSections.basic && (
            <div style={styles.reviewSectionContent}>
              <div style={styles.reviewItem}>
                <span style={styles.reviewLabel}>SUBJECT NAME</span>
                <span style={styles.reviewValue}>{formData.name}</span>
              </div>
              <div style={styles.reviewItem}>
                <span style={styles.reviewLabel}>TARGET DATE</span>
                <span style={styles.reviewValue}>{formData.birthDate}</span>
              </div>
            </div>
          )}
        </div>

        {/* Prediction Path Section */}
        <div style={styles.reviewSection}>
          <button 
            style={styles.reviewSectionHeader}
            onClick={() => toggleSection('predictions')}
          >
            <div style={styles.reviewSectionTitle}>
              <span style={styles.reviewIcon}>🔮</span>
              <span>Prediction Path</span>
            </div>
            <span style={styles.expandIcon}>{expandedSections.predictions ? '▲' : '▼'}</span>
          </button>
          {expandedSections.predictions && (
            <div style={styles.reviewSectionContent}>
              <div style={styles.scopeBadges}>
                {formData.predictionTypes?.includes('bright') && (
                  <span style={styles.scopeBadge}>🌟 Bright Side</span>
                )}
                {formData.predictionTypes?.includes('dark') && (
                  <span style={styles.scopeBadge}>🌙 Dark Side</span>
                )}
                {formData.predictionTypes?.includes('love') && (
                  <span style={styles.scopeBadge}>❤️ Love Life</span>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Reflection Section */}
        <div style={styles.reviewSection}>
          <button 
            style={styles.reviewSectionHeader}
            onClick={() => toggleSection('reflection')}
          >
            <div style={styles.reviewSectionTitle}>
              <span style={styles.reviewIcon}>💭</span>
              <span>Reflection</span>
            </div>
            <span style={styles.expandIcon}>{expandedSections.reflection ? '▲' : '▼'}</span>
          </button>
          {expandedSections.reflection && (
            <div style={styles.reviewSectionContent}>
              {formData.lifeFeeling && (
                <div style={styles.reviewTextBlock}>
                  <span style={styles.reviewLabel}>LIFE REFLECTION</span>
                  <p style={styles.reviewTextValue}>{formData.lifeFeeling}</p>
                </div>
              )}
              {formData.foreverPerson && (
                <div style={styles.reviewTextBlock}>
                  <span style={styles.reviewLabel}>FOREVER PERSON</span>
                  <p style={styles.reviewTextValue}>{formData.foreverPerson}</p>
                </div>
              )}
              {!formData.lifeFeeling && !formData.foreverPerson && (
                <p style={styles.emptyText}>No reflection data provided</p>
              )}
            </div>
          )}
        </div>

        {/* Generate Button */}
        <button 
          style={styles.generateBtn}
          onClick={onNext}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-2px) scale(1.02)';
            e.target.style.boxShadow = '0 20px 50px rgba(70, 100, 200, 0.6)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0) scale(1)';
            e.target.style.boxShadow = '0 15px 40px rgba(70, 100, 200, 0.5)';
          }}
        >
          Generate Prediction ⚡
        </button>

        {/* Footer */}
        <p style={styles.encryptedFooter}>
          🔒 ENCRYPTED END-TO-END PROCESSING
        </p>
      </div>
    </div>
  );
}

// ==================== STEP 7: LOADING SCREEN ====================
function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('Analyzing patterns...');

  const statusMessages = [
    'Analyzing patterns...',
    'Building insight...',
    'Revealing paths...',
    'Synthesizing predictions...',
    'Finalizing results...'
  ];

  useEffect(() => {
    let progressInterval;
    let messageIndex = 0;

    // Progress bar animation
    progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => onComplete(), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 60);

    // Status message rotation
    const messageInterval = setInterval(() => {
      messageIndex = (messageIndex + 1) % statusMessages.length;
      setStatusText(statusMessages[messageIndex]);
    }, 1200);

    return () => {
      clearInterval(progressInterval);
      clearInterval(messageInterval);
    };
  }, [onComplete]);

  return (
    <div style={styles.loadingContainer}>
      {/* Animated Circles */}
      <div style={styles.loadingOrbitContainer}>
        <div style={styles.loadingCenter}></div>
        <div style={styles.loadingOrbit1}>
          <div style={styles.loadingDot}></div>
        </div>
        <div style={styles.loadingOrbit2}>
          <div style={styles.loadingDot}></div>
        </div>
      </div>

      {/* Status Text */}
      <h2 style={styles.loadingTitle}>SYSTEM PROCESS</h2>
      <p style={styles.loadingStatus}>{statusText}</p>

      {/* Progress Bar */}
      <div style={styles.progressBarContainer}>
        <div style={{...styles.progressBarFill, width: `${progress}%`}}></div>
      </div>
      <div style={styles.progressText}>
        <span>DEEP SYNC</span>
        <span>{progress}%</span>
      </div>

      {/* Footer */}
      <div style={styles.loadingFooter}>
        <span>NEURAL ENGINE V4.2</span>
        <span>•</span>
        <span>QUANTUM LATENCY: 12MS</span>
        <span>•</span>
        <span>SECURE LINK ACTIVE</span>
      </div>
    </div>
  );
}

// ==================== STEP 8: RESULTS SCREEN ====================
function ResultsScreen({ formData, savedResults, onSaveResults, onRestart }) {
  const [expandedSections, setExpandedSections] = useState({
    bright: true,
    dark: false,
    love: false,
    friendship: false
  });

  // Prediction databases
  const brightPredictions = [
    "Your career trajectory shows a significant upward shift. Expect a major breakthrough in creative endeavors within the next lunar cycle. Success is gravitating towards your persistent energy, manifesting as an unexpected offer from a high-profile collaborator.",
    "A period of abundance approaches. Your financial wisdom will lead to opportunities you haven't yet imagined. The universe is aligning resources in your favor, and your patient efforts are about to yield remarkable returns.",
    "Your personal growth will accelerate dramatically. You're entering a phase where clarity replaces confusion, and your authentic self emerges powerfully. People will be drawn to your renewed confidence and vision.",
    "Travel and new experiences will transform your perspective. An unexpected journey will introduce you to people and ideas that reshape your future in the most positive ways.",
    "Your creative talents are about to be recognized on a larger scale. What you've been building in private will soon demand public attention, bringing fulfillment and validation."
  ];

  const darkPredictions = [
    "A trusted relationship faces a critical test. Someone close to you harbors unspoken resentment that will surface unexpectedly. This revelation, though painful, will ultimately liberate you from a pattern you didn't recognize.",
    "Financial pressure will mount from an unexpected source. A decision you've postponed will demand immediate attention, forcing you to confront uncomfortable truths about security and independence.",
    "Your carefully constructed plans will be disrupted by forces beyond your control. This chaos, though initially devastating, is clearing space for something more aligned with your true path.",
    "A secret you've kept will become increasingly burdensome. The energy required to maintain this facade is draining your vitality and authenticity. Liberation awaits on the other side of truth.",
    "Health concerns you've ignored will demand attention. Your body is sending increasingly urgent signals that require immediate acknowledgment and action."
  ];

  const lovePredictions = [
    "Your romantic path takes an unexpected turn. If single, a connection forms in the most unlikely circumstances. If partnered, a breakthrough conversation dissolves long-standing barriers and deepens intimacy profoundly.",
    "The person you can't stop thinking about is thinking about you too. Cosmic timing is aligning for a significant moment between you. Trust the pull you feel - it's reciprocated more than you realize.",
    "A cycle of relationship patterns is completing. The lessons you've been learning through repeated experiences are finally integrating. Your next connection will reflect this evolution powerfully.",
    "Distance that has separated you from someone important will soon close. Whether physical or emotional, the gap is narrowing through forces neither of you fully controls.",
    "Your definition of love is about to expand dramatically. Someone will show you dimensions of connection you haven't previously experienced, fundamentally altering your understanding of intimacy."
  ];

  // Friendship descriptions database
  const friendshipDescriptions = [
    "The more you love them, they will love you back twice as much.",
    "A bond that grows stronger with time and trust.",
    "This friendship brings balance and harmony to your life.",
    "You inspire each other to become better versions of yourselves.",
    "Together, you create memories that last a lifetime.",
    "This connection feels like home - comfortable and genuine.",
    "Your energies complement each other perfectly.",
    "Distance or time can't weaken this special bond.",
    "You understand each other without needing words.",
    "This friendship is a rare treasure worth nurturing."
  ];

  // Get random predictions based on selected types
  const getRandomPrediction = (array) => {
    return array[Math.floor(Math.random() * array.length)];
  };

  const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  // Check if results already exist (from savedResults), otherwise generate new ones
  const results = savedResults || {
    bright: formData.predictionTypes?.includes('bright') ? getRandomPrediction(brightPredictions) : null,
    dark: formData.predictionTypes?.includes('dark') ? getRandomPrediction(darkPredictions) : null,
    love: formData.predictionTypes?.includes('love') ? getRandomPrediction(lovePredictions) : null,
    friendshipRates: formData.friendNames
      ?.filter(name => name.trim() !== '')
      .map(name => ({
        name,
        rate: getRandomNumber(0, 100),
        description: getRandomPrediction(friendshipDescriptions)
      })) || [],
    loveLifeRate: formData.predictionTypes?.includes('love') ? getRandomNumber(0, 100) : null
  };

  // Save results if not already saved
  useEffect(() => {
    if (!savedResults && (results.bright || results.dark || results.love || results.friendshipRates.length > 0)) {
      onSaveResults(results);
    }
  }, []);

  // Extract for easier use
  const friendshipRates = results.friendshipRates || [];
  const loveLifeRate = results.loveLifeRate;

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const downloadResults = () => {
    const text = `
FUTURE INSIGHT PREDICTION RESULTS
Generated: ${new Date().toLocaleString()}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SUBJECT INFORMATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Name: ${formData.name}
Birth Date: ${formData.birthDate}
${formData.foreverPerson ? `Forever Person: ${formData.foreverPerson}` : ''}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PREDICTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

${results.bright ? `🌟 BRIGHT SIDE:\n${results.bright}\n\n` : ''}
${results.dark ? `🌑 DARK SIDE:\n${results.dark}\n\n` : ''}
${results.love ? `❤️ LOVE LIFE:\n${results.love}\n${loveLifeRate !== null ? `Love Life Compatibility Rate: ${loveLifeRate}%\n` : ''}\n` : ''}

${friendshipRates.length > 0 ? `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
FRIENDSHIP COMPATIBILITY RATES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

${friendshipRates.map(fr => `👥 ${fr.name}: ${fr.rate}%\n${fr.description}\n`).join('\n')}
` : ''}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Powered by Future Insight AI
For reflection and entertainment purposes.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    `;
    
    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `FutureInsight_${formData.name.replace(/\s+/g, '_')}_${Date.now()}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div style={styles.resultsContainer}>
      <div style={styles.resultsCard}>
        {/* Header */}
        <div style={styles.resultsHeader}>
          <h1 style={styles.resultsTitle}>Your Future Insight Is Ready</h1>
          <p style={styles.resultsSubtitle}>Temporal sync complete. Analysis finalized.</p>
        </div>

        {/* Stats Row */}
        <div style={styles.statsRow}>
          <div style={styles.statBox}>
            <div style={styles.statLabel}>CLARITY SCORE</div>
            <div style={styles.statValue}>98% <span style={styles.statChange}>+2%</span></div>
          </div>
          <div style={styles.statBox}>
            <div style={styles.statLabel}>TEMPORAL DEPTH</div>
            <div style={styles.statValue}>High <span style={styles.statBadge}>═</span></div>
          </div>
          <div style={styles.statBox}>
            <div style={styles.statLabel}>INSIGHT ACCURACY</div>
            <div style={styles.statValue}>94% <span style={styles.statLocked}>Locked</span></div>
          </div>
        </div>

        {/* Prediction Sections */}
        {results.bright && (
          <div style={styles.predictionSection}>
            <button 
              style={styles.predictionHeader}
              onClick={() => toggleSection('bright')}
            >
              <div style={styles.predictionHeaderLeft}>
                <span style={styles.predictionIconLarge}>☀️</span>
                <span style={styles.predictionSectionTitle}>Bright Side</span>
              </div>
              <span style={styles.expandIcon}>{expandedSections.bright ? '▲' : '▼'}</span>
            </button>
            {expandedSections.bright && (
              <div style={styles.predictionContent}>
                <p style={styles.predictionText}>{results.bright}</p>
              </div>
            )}
          </div>
        )}

        {results.dark && (
          <div style={styles.predictionSection}>
            <button 
              style={styles.predictionHeader}
              onClick={() => toggleSection('dark')}
            >
              <div style={styles.predictionHeaderLeft}>
                <span style={styles.predictionIconLarge}>🌙</span>
                <span style={styles.predictionSectionTitle}>Dark Side</span>
              </div>
              <span style={styles.expandIcon}>{expandedSections.dark ? '▲' : '▼'}</span>
            </button>
            {expandedSections.dark && (
              <div style={styles.predictionContent}>
                <p style={styles.predictionText}>{results.dark}</p>
              </div>
            )}
          </div>
        )}

        {results.love && (
          <div style={styles.predictionSection}>
            <button 
              style={styles.predictionHeader}
              onClick={() => toggleSection('love')}
            >
              <div style={styles.predictionHeaderLeft}>
                <span style={styles.predictionIconLarge}>❤️</span>
                <span style={styles.predictionSectionTitle}>Love Life</span>
              </div>
              <span style={styles.expandIcon}>{expandedSections.love ? '▲' : '▼'}</span>
            </button>
            {expandedSections.love && (
              <div style={styles.predictionContent}>
                <p style={styles.predictionText}>{results.love}</p>
                {loveLifeRate !== null && (
                  <div style={styles.loveRateBox}>
                    <div style={styles.loveRateLabel}>💕 Love Life Compatibility Rate</div>
                    <div style={styles.loveRateValue}>{loveLifeRate}%</div>
                    <div style={styles.loveRateBar}>
                      <div style={{...styles.loveRateFill, width: `${loveLifeRate}%`}}></div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* Friendship Rates Section */}
        {friendshipRates.length > 0 && (
          <div style={styles.predictionSection}>
            <button 
              style={styles.predictionHeader}
              onClick={() => toggleSection('friendship')}
            >
              <div style={styles.predictionHeaderLeft}>
                <span style={styles.predictionIconLarge}>👥</span>
                <span style={styles.predictionSectionTitle}>Friendship Compatibility</span>
              </div>
              <span style={styles.expandIcon}>{expandedSections.friendship ? '▲' : '▼'}</span>
            </button>
            {expandedSections.friendship && (
              <div style={styles.predictionContent}>
                {friendshipRates.map((fr, index) => (
                  <div key={index} style={styles.friendshipRateItem}>
                    <div style={styles.friendshipRateHeader}>
                      <span style={styles.friendName}>👤 {fr.name}</span>
                      <span style={styles.friendRate}>{fr.rate}%</span>
                    </div>
                    <div style={styles.friendRateBar}>
                      <div style={{...styles.friendRateFill, width: `${fr.rate}%`}}></div>
                    </div>
                    <p style={styles.friendDescription}>{fr.description}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Action Buttons */}
        <div style={styles.resultsActions}>
          <button 
            style={styles.restartBtn}
            onClick={onRestart}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 10px 30px rgba(100, 150, 255, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = 'none';
            }}
          >
            🔄 Restart Session
          </button>
          <button 
            style={styles.exportBtn}
            onClick={downloadResults}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 10px 30px rgba(100, 255, 150, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = 'none';
            }}
          >
            ⬇️ Export Insight
          </button>
        </div>
      </div>
    </div>
  );
}

// ==================== STYLES ====================
const styles = {
  app: {
    width: '100vw',
    height: '100vh',
    backgroundColor: '#0a1628',
    backgroundImage: 'radial-gradient(circle at 50% 50%, #1a2744 0%, #0a1628 100%)',
    color: '#ffffff',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
  },

  // ===== NAVBAR =====
  navbar: {
    width: '100%',
    height: '70px',
    borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
    backgroundColor: 'rgba(10, 22, 40, 0.8)',
    backdropFilter: 'blur(10px)',
    display: 'flex',
    alignItems: 'center',
    padding: '0 30px',
    position: 'sticky',
    top: 0,
    zIndex: 100,
  },
  navContent: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    fontSize: '18px',
    fontWeight: '700',
    letterSpacing: '1px',
  },
  logoIcon: {
    fontSize: '24px',
  },
  logoText: {
    background: 'linear-gradient(135deg, #667eea 0%, #4facfe 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  navRight: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
  },
  iconBtn: {
    background: 'rgba(255, 255, 255, 0.05)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '8px',
    width: '40px',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    fontSize: '18px',
    transition: 'all 0.3s ease',
  },
  progressBadge: {
    background: 'rgba(70, 100, 200, 0.2)',
    border: '1px solid rgba(100, 150, 255, 0.3)',
    borderRadius: '20px',
    padding: '8px 16px',
    fontSize: '12px',
    fontWeight: '600',
    letterSpacing: '0.5px',
    color: '#88aaff',
  },

  // ===== MAIN VIEW =====
  mainView: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    overflow: 'auto',
  },
  stepContainer: {
    width: '100%',
    maxWidth: '600px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '30px',
  },

  // ===== WELCOME SCREEN =====
  welcomeCard: {
    background: 'rgba(20, 35, 60, 0.6)',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    borderRadius: '24px',
    padding: 'clamp(40px, 8vw, 60px) clamp(30px, 6vw, 50px)',
    textAlign: 'center',
    backdropFilter: 'blur(20px)',
    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4)',
    width: '100%',
  },
  welcomeIconContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '30px',
  },
  welcomeIcon: {
    width: '100px',
    height: '100px',
    background: 'rgba(70, 100, 200, 0.2)',
    borderRadius: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    boxShadow: '0 0 40px rgba(70, 100, 200, 0.4)',
  },
  iconLayers: {
    position: 'relative',
    width: '50px',
    height: '50px',
  },
  iconLayer1: {
    position: 'absolute',
    top: '0',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '45px',
    height: '12px',
    background: 'linear-gradient(135deg, #667eea 0%, #4facfe 100%)',
    borderRadius: '3px',
    boxShadow: '0 0 20px rgba(100, 150, 255, 0.6)',
  },
  iconLayer2: {
    position: 'absolute',
    top: '18px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '40px',
    height: '12px',
    background: 'linear-gradient(135deg, #667eea 0%, #4facfe 100%)',
    borderRadius: '3px',
    opacity: 0.8,
  },
  iconLayer3: {
    position: 'absolute',
    top: '36px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '35px',
    height: '12px',
    background: 'linear-gradient(135deg, #667eea 0%, #4facfe 100%)',
    borderRadius: '3px',
    opacity: 0.6,
  },
  welcomeTitle: {
    fontSize: 'clamp(32px, 6vw, 48px)',
    fontWeight: '700',
    margin: '0 0 10px 0',
    background: 'linear-gradient(135deg, #ffffff 0%, #d0d0d0 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  welcomeSubtitle: {
    fontSize: 'clamp(12px, 2vw, 14px)',
    fontWeight: '600',
    letterSpacing: '2px',
    color: '#6699ff',
    marginBottom: '40px',
  },
  startBtn: {
    background: 'linear-gradient(135deg, #667eea 0%, #4facfe 100%)',
    border: 'none',
    borderRadius: '50px',
    padding: '18px 50px',
    fontSize: 'clamp(16px, 2.5vw, 18px)',
    fontWeight: '600',
    color: '#ffffff',
    cursor: 'pointer',
    width: '100%',
    maxWidth: '400px',
    boxShadow: '0 10px 30px rgba(70, 100, 200, 0.4)',
    transition: 'all 0.3s ease',
    marginBottom: '30px',
  },
  welcomeFooter: {
    fontSize: '11px',
    color: '#6699ff',
    letterSpacing: '1px',
    opacity: '0.6',
    margin: 0,
  },
  attribution: {
    fontSize: '11px',
    color: '#556688',
    letterSpacing: '1.5px',
    fontWeight: '500',
  },

  // ===== PLACEHOLDER =====
  placeholder: {
    fontSize: '20px',
    color: '#88aaff',
    textAlign: 'center',
  },

  // ===== STEP 1: BASIC DETAILS =====
  card: {
    background: 'rgba(20, 35, 60, 0.6)',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    borderRadius: '20px',
    padding: 'clamp(25px, 5vw, 40px)',
    backdropFilter: 'blur(20px)',
    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4)',
    width: '100%',
  },
  cardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '10px',
    flexWrap: 'wrap',
    gap: '10px',
  },
  cardTitle: {
    fontSize: 'clamp(24px, 4vw, 32px)',
    fontWeight: '700',
    margin: 0,
    color: '#ffffff',
  },
  stepBadge: {
    background: 'rgba(70, 100, 200, 0.3)',
    border: '1px solid rgba(100, 150, 255, 0.4)',
    borderRadius: '20px',
    padding: '6px 14px',
    fontSize: '11px',
    fontWeight: '600',
    letterSpacing: '0.5px',
    color: '#88aaff',
  },
  cardSubtitle: {
    fontSize: '15px',
    color: '#aabbcc',
    marginBottom: '30px',
    marginTop: '5px',
  },
  formGroup: {
    marginBottom: '25px',
  },
  label: {
    fontSize: '12px',
    fontWeight: '600',
    letterSpacing: '1px',
    color: '#88aaff',
    marginBottom: '10px',
    display: 'block',
  },
  inputContainer: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
  },
  inputIcon: {
    position: 'absolute',
    left: '18px',
    fontSize: '18px',
    pointerEvents: 'none',
  },
  input: {
    width: '100%',
    background: 'rgba(15, 25, 45, 0.6)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '12px',
    padding: '14px 18px 14px 50px',
    fontSize: '15px',
    color: '#ffffff',
    outline: 'none',
    transition: 'all 0.3s ease',
    fontFamily: 'inherit',
  },
  inputError: {
    borderColor: 'rgba(255, 100, 100, 0.5)',
  },
  errorText: {
    color: '#ff6b6b',
    fontSize: '12px',
    marginTop: '6px',
    marginLeft: '4px',
  },
  continueBtn: {
    flex: '2',
    minWidth: '140px',
    background: 'linear-gradient(135deg, #667eea 0%, #4facfe 100%)',
    border: 'none',
    borderRadius: '12px',
    padding: '16px 40px',
    fontSize: '16px',
    fontWeight: '600',
    color: '#ffffff',
    cursor: 'pointer',
    boxShadow: '0 10px 30px rgba(70, 100, 200, 0.4)',
    transition: 'all 0.3s ease',
  },
  cardFooter: {
    fontSize: '12px',
    color: '#6699ff',
    textAlign: 'center',
    marginTop: '20px',
    opacity: 0.7,
  },

  // ===== STEP 2: PREDICTION TYPE =====
  predictionCard: {
    background: 'rgba(20, 35, 60, 0.4)',
    border: '1px solid rgba(255, 255, 255, 0.05)',
    borderRadius: '24px',
    padding: 'clamp(30px, 6vw, 50px) clamp(25px, 4vw, 40px)',
    backdropFilter: 'blur(20px)',
    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4)',
    width: '100%',
    maxWidth: '900px',
  },
  predictionTitle: {
    fontSize: 'clamp(28px, 5vw, 40px)',
    fontWeight: '700',
    margin: '0 0 10px 0',
    textAlign: 'center',
    color: '#ffffff',
  },
  predictionSubtitle: {
    fontSize: 'clamp(14px, 2vw, 16px)',
    color: '#aabbcc',
    textAlign: 'center',
    marginBottom: '40px',
  },
  predictionGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '20px',
    marginBottom: '35px',
  },
  predictionOption: {
    background: 'rgba(25, 40, 70, 0.5)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '20px',
    padding: '35px 25px',
    textAlign: 'center',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
  predictionOptionSelected: {
    background: 'rgba(70, 100, 200, 0.2)',
    border: '2px solid rgba(100, 150, 255, 0.6)',
    boxShadow: '0 10px 40px rgba(70, 100, 200, 0.3)',
    transform: 'translateY(-5px)',
  },
  predictionIcon: {
    fontSize: '48px',
    marginBottom: '15px',
  },
  predictionOptionTitle: {
    fontSize: '20px',
    fontWeight: '700',
    margin: '0 0 10px 0',
    color: '#ffffff',
  },
  predictionOptionDesc: {
    fontSize: '13px',
    color: '#99aabb',
    lineHeight: '1.5',
    margin: 0,
  },
  errorTextCenter: {
    color: '#ff6b6b',
    fontSize: '13px',
    textAlign: 'center',
    marginTop: '15px',
    fontWeight: '600',
    letterSpacing: '0.5px',
  },

  // ===== STEP 3 & 4: OPTIONAL QUESTIONS =====
  optionalBadge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    background: 'rgba(100, 200, 150, 0.15)',
    border: '1px solid rgba(100, 200, 150, 0.3)',
    borderRadius: '20px',
    padding: '8px 16px',
    fontSize: '12px',
    fontWeight: '600',
    color: '#66dd99',
    marginBottom: '25px',
  },
  optionalIcon: {
    fontSize: '16px',
  },
  textarea: {
    width: '100%',
    background: 'rgba(15, 25, 45, 0.6)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '12px',
    padding: '16px 18px',
    fontSize: '15px',
    color: '#ffffff',
    outline: 'none',
    transition: 'all 0.3s ease',
    fontFamily: 'inherit',
    resize: 'vertical',
    lineHeight: '1.6',
  },
  charCounter: {
    fontSize: '11px',
    color: '#88aaff',
    textAlign: 'right',
    marginTop: '8px',
    opacity: 0.7,
  },
  hintText: {
    fontSize: '12px',
    color: '#99aabb',
    marginTop: '10px',
    marginLeft: '4px',
    lineHeight: '1.5',
  },
  buttonGroup: {
    display: 'flex',
    gap: '15px',
    marginTop: '15px',
    flexWrap: 'wrap',
  },
  skipBtn: {
    flex: '1',
    minWidth: '140px',
    background: 'rgba(255, 255, 255, 0.05)',
    border: '1px solid rgba(255, 255, 255, 0.15)',
    borderRadius: '12px',
    padding: '14px 30px',
    fontSize: '15px',
    fontWeight: '600',
    color: '#aabbcc',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },

  // ===== STEP 4: FOREVER PERSON EXPLANATION BOX =====
  explanationBox: {
    background: 'rgba(100, 80, 200, 0.1)',
    border: '1px solid rgba(150, 130, 255, 0.3)',
    borderRadius: '16px',
    padding: '16px 20px',
    marginBottom: '25px',
  },
  explanationTitle: {
    fontSize: '16px',
    fontWeight: '700',
    color: '#bbaaff',
    margin: '0 0 8px 0',
  },
  explanationText: {
    fontSize: '13px',
    color: '#ccddee',
    lineHeight: '1.6',
    margin: '0 0 10px 0',
  },
  explanationList: {
    fontSize: '13px',
    color: '#ccddee',
    lineHeight: '1.7',
    margin: '0',
    paddingLeft: '20px',
    listStyle: 'none',
  },

  // ===== STEP 5: LOVE LIFE DETAILS =====
  statusGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(110px, 1fr))',
    gap: '12px',
  },
  statusBtn: {
    background: 'rgba(255, 255, 255, 0.05)',
    border: '1px solid rgba(255, 255, 255, 0.15)',
    borderRadius: '10px',
    padding: '12px 20px',
    fontSize: '14px',
    fontWeight: '600',
    color: '#aabbcc',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
  statusBtnSelected: {
    background: 'rgba(100, 150, 255, 0.2)',
    borderColor: 'rgba(100, 150, 255, 0.6)',
    color: '#88aaff',
    boxShadow: '0 5px 20px rgba(100, 150, 255, 0.3)',
  },

  // ===== STEP 6: REVIEW SCREEN =====
  reviewHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '10px',
    flexWrap: 'wrap',
    gap: '10px',
  },
  reviewSection: {
    background: 'rgba(255, 255, 255, 0.03)',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    borderRadius: '14px',
    marginBottom: '15px',
    overflow: 'hidden',
  },
  reviewSectionHeader: {
    width: '100%',
    background: 'transparent',
    border: 'none',
    padding: '16px 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    cursor: 'pointer',
    transition: 'background 0.3s ease',
    color: '#ffffff',
  },
  reviewSectionTitle: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    fontSize: '16px',
    fontWeight: '600',
  },
  reviewIcon: {
    fontSize: '20px',
  },
  expandIcon: {
    fontSize: '12px',
    color: '#88aaff',
  },
  reviewSectionContent: {
    padding: '10px 20px 20px 20px',
    borderTop: '1px solid rgba(255, 255, 255, 0.05)',
  },
  reviewItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 0',
    borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
  },
  reviewLabel: {
    fontSize: '11px',
    fontWeight: '600',
    letterSpacing: '0.5px',
    color: '#88aaff',
  },
  reviewValue: {
    fontSize: '14px',
    color: '#ffffff',
    fontWeight: '500',
  },
  reviewTextBlock: {
    marginBottom: '15px',
  },
  reviewTextValue: {
    fontSize: '13px',
    color: '#ccddee',
    lineHeight: '1.6',
    marginTop: '8px',
    marginBottom: '0',
  },
  scopeBadges: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
  },
  scopeBadge: {
    background: 'rgba(100, 150, 255, 0.15)',
    border: '1px solid rgba(100, 150, 255, 0.3)',
    borderRadius: '20px',
    padding: '8px 16px',
    fontSize: '13px',
    fontWeight: '600',
    color: '#88aaff',
  },
  emptyText: {
    fontSize: '13px',
    color: '#6688aa',
    fontStyle: 'italic',
  },
  generateBtn: {
    background: 'linear-gradient(135deg, #667eea 0%, #4facfe 100%)',
    border: 'none',
    borderRadius: '14px',
    padding: '18px 40px',
    fontSize: '18px',
    fontWeight: '700',
    color: '#ffffff',
    cursor: 'pointer',
    width: '100%',
    boxShadow: '0 15px 40px rgba(70, 100, 200, 0.5)',
    transition: 'all 0.3s ease',
    marginTop: '20px',
  },
  encryptedFooter: {
    fontSize: '11px',
    color: '#6699ff',
    textAlign: 'center',
    marginTop: '15px',
    opacity: 0.7,
    letterSpacing: '0.5px',
  },

  // ===== STEP 7: LOADING SCREEN =====
  loadingContainer: {
    width: '100%',
    maxWidth: '600px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '30px',
  },
  loadingOrbitContainer: {
    position: 'relative',
    width: '200px',
    height: '200px',
  },
  loadingCenter: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '30px',
    height: '30px',
    background: 'radial-gradient(circle, #88aaff 0%, #4466cc 100%)',
    borderRadius: '50%',
    boxShadow: '0 0 40px rgba(100, 150, 255, 0.8)',
  },
  loadingOrbit1: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '120px',
    height: '120px',
    margin: '-60px 0 0 -60px',
    border: '2px dashed rgba(100, 150, 255, 0.3)',
    borderRadius: '50%',
    animation: 'rotate 3s linear infinite',
  },
  loadingOrbit2: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '180px',
    height: '180px',
    margin: '-90px 0 0 -90px',
    border: '2px dashed rgba(100, 150, 255, 0.2)',
    borderRadius: '50%',
    animation: 'rotate 5s linear infinite reverse',
  },
  loadingDot: {
    position: 'absolute',
    top: '0',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '12px',
    height: '12px',
    background: 'linear-gradient(135deg, #667eea 0%, #4facfe 100%)',
    borderRadius: '50%',
    boxShadow: '0 0 20px rgba(100, 150, 255, 0.8)',
  },
  loadingTitle: {
    fontSize: '14px',
    fontWeight: '600',
    letterSpacing: '3px',
    color: '#88aaff',
    margin: 0,
  },
  loadingStatus: {
    fontSize: '20px',
    fontWeight: '600',
    color: '#ccddee',
    margin: 0,
    minHeight: '30px',
  },
  progressBarContainer: {
    width: '100%',
    maxWidth: '400px',
    height: '8px',
    background: 'rgba(255, 255, 255, 0.05)',
    borderRadius: '10px',
    overflow: 'hidden',
    border: '1px solid rgba(255, 255, 255, 0.1)',
  },
  progressBarFill: {
    height: '100%',
    background: 'linear-gradient(90deg, #667eea 0%, #4facfe 100%)',
    borderRadius: '10px',
    transition: 'width 0.3s ease',
    boxShadow: '0 0 20px rgba(100, 150, 255, 0.6)',
  },
  progressText: {
    width: '100%',
    maxWidth: '400px',
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '11px',
    fontWeight: '600',
    color: '#88aaff',
    letterSpacing: '1px',
  },
  loadingFooter: {
    display: 'flex',
    gap: '10px',
    fontSize: '10px',
    color: '#556688',
    letterSpacing: '0.5px',
    marginTop: '20px',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },

  // ===== STEP 8: RESULTS SCREEN =====
  resultsContainer: {
    width: '100%',
    maxWidth: '800px',
    padding: '20px',
  },
  resultsCard: {
    background: 'rgba(20, 35, 60, 0.5)',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    borderRadius: '24px',
    padding: 'clamp(30px, 5vw, 50px)',
    backdropFilter: 'blur(20px)',
  },
  resultsHeader: {
    textAlign: 'center',
    marginBottom: '30px',
  },
  resultsTitle: {
    fontSize: 'clamp(28px, 5vw, 42px)',
    fontWeight: '700',
    margin: '0 0 10px 0',
    background: 'linear-gradient(135deg, #ffffff 0%, #88aaff 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  resultsSubtitle: {
    fontSize: 'clamp(13px, 2vw, 15px)',
    color: '#aabbcc',
    margin: 0,
  },
  statsRow: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
    gap: '15px',
    marginBottom: '30px',
  },
  statBox: {
    background: 'rgba(255, 255, 255, 0.03)',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    borderRadius: '12px',
    padding: '15px',
    textAlign: 'center',
  },
  statLabel: {
    fontSize: '10px',
    fontWeight: '600',
    letterSpacing: '1px',
    color: '#88aaff',
    marginBottom: '8px',
  },
  statValue: {
    fontSize: '24px',
    fontWeight: '700',
    color: '#ffffff',
  },
  statChange: {
    fontSize: '14px',
    color: '#66dd99',
    marginLeft: '5px',
  },
  statBadge: {
    fontSize: '16px',
    color: '#4facfe',
  },
  statLocked: {
    fontSize: '12px',
    color: '#ff88aa',
  },
  predictionSection: {
    background: 'rgba(25, 40, 70, 0.4)',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    borderRadius: '16px',
    marginBottom: '15px',
    overflow: 'hidden',
  },
  predictionHeader: {
    width: '100%',
    background: 'transparent',
    border: 'none',
    padding: '20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    cursor: 'pointer',
    transition: 'background 0.3s ease',
  },
  predictionHeaderLeft: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
  },
  predictionIconLarge: {
    fontSize: '32px',
  },
  predictionSectionTitle: {
    fontSize: '20px',
    fontWeight: '700',
    color: '#ffffff',
  },
  predictionContent: {
    padding: '0 20px 20px 20px',
    borderTop: '1px solid rgba(255, 255, 255, 0.05)',
  },
  predictionText: {
    fontSize: '15px',
    color: '#ccddee',
    lineHeight: '1.8',
    marginTop: '15px',
  },
  resultsActions: {
    display: 'flex',
    gap: '15px',
    marginTop: '30px',
    flexWrap: 'wrap',
  },
  restartBtn: {
    flex: '1',
    minWidth: '180px',
    background: 'rgba(100, 150, 255, 0.15)',
    border: '1px solid rgba(100, 150, 255, 0.3)',
    borderRadius: '12px',
    padding: '16px 30px',
    fontSize: '15px',
    fontWeight: '600',
    color: '#88aaff',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
  exportBtn: {
    flex: '1',
    minWidth: '180px',
    background: 'rgba(100, 255, 150, 0.12)',
    border: '1px solid rgba(100, 255, 150, 0.3)',
    borderRadius: '12px',
    padding: '16px 30px',
    fontSize: '15px',
    fontWeight: '600',
    color: '#66dd99',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },

  // ===== STEP 3: FRIENDSHIP RATE CHECKER =====
  friendInputRow: {
    display: 'flex',
    gap: '10px',
    marginBottom: '12px',
    alignItems: 'center',
  },
  removeBtn: {
    background: 'rgba(255, 100, 100, 0.1)',
    border: '1px solid rgba(255, 100, 100, 0.3)',
    borderRadius: '8px',
    width: '40px',
    height: '48px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    fontSize: '18px',
    color: '#ff8888',
    transition: 'all 0.3s ease',
  },
  addFriendBtn: {
    background: 'rgba(100, 150, 255, 0.1)',
    border: '1px solid rgba(100, 150, 255, 0.3)',
    borderRadius: '12px',
    padding: '12px 20px',
    fontSize: '14px',
    fontWeight: '600',
    color: '#88aaff',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    width: '100%',
    marginTop: '10px',
  },

  // ===== RESULTS: LOVE RATE =====
  loveRateBox: {
    background: 'rgba(255, 100, 150, 0.08)',
    border: '1px solid rgba(255, 100, 150, 0.2)',
    borderRadius: '12px',
    padding: '20px',
    marginTop: '20px',
  },
  loveRateLabel: {
    fontSize: '14px',
    fontWeight: '600',
    color: '#ffaacc',
    marginBottom: '10px',
  },
  loveRateValue: {
    fontSize: '36px',
    fontWeight: '700',
    color: '#ff88bb',
    marginBottom: '15px',
  },
  loveRateBar: {
    width: '100%',
    height: '12px',
    background: 'rgba(255, 255, 255, 0.05)',
    borderRadius: '10px',
    overflow: 'hidden',
  },
  loveRateFill: {
    height: '100%',
    background: 'linear-gradient(90deg, #ff6b9d 0%, #ff88bb 100%)',
    borderRadius: '10px',
    transition: 'width 0.5s ease',
  },

  // ===== RESULTS: FRIENDSHIP RATES =====
  friendshipRateItem: {
    background: 'rgba(100, 150, 255, 0.05)',
    border: '1px solid rgba(100, 150, 255, 0.15)',
    borderRadius: '12px',
    padding: '18px',
    marginBottom: '15px',
  },
  friendshipRateHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '12px',
  },
  friendName: {
    fontSize: '18px',
    fontWeight: '600',
    color: '#ffffff',
  },
  friendRate: {
    fontSize: '24px',
    fontWeight: '700',
    color: '#88aaff',
  },
  friendRateBar: {
    width: '100%',
    height: '10px',
    background: 'rgba(255, 255, 255, 0.05)',
    borderRadius: '10px',
    overflow: 'hidden',
    marginBottom: '12px',
  },
  friendRateFill: {
    height: '100%',
    background: 'linear-gradient(90deg, #667eea 0%, #4facfe 100%)',
    borderRadius: '10px',
    transition: 'width 0.5s ease',
  },
  friendDescription: {
    fontSize: '13px',
    color: '#aabbcc',
    lineHeight: '1.6',
    fontStyle: 'italic',
    margin: 0,
  },

  // ===== RESPONSIVE MEDIA QUERIES (applied via inline conditions in components) =====
};