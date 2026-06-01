import React from 'react'
import { motion } from "motion/react"
import { FcGoogle } from "react-icons/fc";
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../utils/firebase';
import axios from "axios"
import { serverUrl } from '../App';
import { useDispatch } from 'react-redux';

import { setUserData } from '../redux/userSlice';
function Auth() {
  const dispatch = useDispatch()
 

  const handleGoogleAuth = async () => {
    
    try {
      const response = await signInWithPopup(auth,provider)
      const User = response.user
      const name = User.displayName
      const email = User.email
      const result = await axios.post(serverUrl + "/api/auth/google" , {name , email},{
        withCredentials:true
      })
      dispatch(setUserData(result.data))
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className='min-h-screen overflow-hidden bg-white text-black px-8'>
       <motion.header
  initial={{ opacity: 0, y: -15 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  className="max-w-7xl mx-auto mt-8
  bg-white/90 backdrop-blur-xl
  border border-gray-200
  rounded-2xl
  px-8 py-5
  shadow-sm"
>
  <div className="flex items-center justify-between">

    <div>
      <h1 className="text-3xl font-bold text-indigo-600">
        AceMind AI
      </h1>

      <p className="text-sm text-gray-500">
        Study Smarter. Revise Faster.
      </p>
    </div>

    <nav className="hidden md:flex items-center gap-8">

      <a href="#features" className="text-gray-600 hover:text-indigo-600">
  Features
</a>

<a href="#how-it-works" className="text-gray-600 hover:text-indigo-600">
  How It Works
</a>

<a href="/pricing" className="text-gray-600 hover:text-indigo-600">
  Pricing
</a>

<a href="#contact" className="text-gray-600 hover:text-indigo-600">
  Contact
</a>
    </nav>

  </div>
</motion.header>

        <main className='max-w-7xl mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center'>
        
        {/* LEFT CONTENT */}
        <motion.div 
         initial = {{opacity: 0 , x:-60}}
        animate = {{opacity:1 , x:0}}
        transition={{duration:0.7}}
        >
            <div className="mb-6">
  <span className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-sm font-medium mb-6">
    🚀 Trusted by students for faster revision
  </span>

  <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight text-gray-900">
    Ace Every Exam <br />
    with <span className="text-indigo-600">AI</span>
  </h1>
</div>
              <motion.button
              onClick={handleGoogleAuth}
              whileHover={{
                y:-10,
                rotateX:8,
                rotateY:-8,
                scale:1.07
              }}
              whileTap={{scale:0.97}}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
               className='mt-10 px-10 py-4 rounded-xl
              flex items-center gap-3
              bg-gradient-to-br from-black/90 via-black/80 to-black/90
              border border-gray-200
              text-white font-semibold text-base
              shadow-[0_25px_60px_rgba(0,0,0,0.7)]'>
                <FcGoogle size={22}/>
                Continue with Google


              </motion.button>

              <p className="mt-6 max-w-xl text-lg text-gray-600 leading-relaxed">
  Generate notes, revision sheets, viva preparation material,
  visual learning guides and smart exam strategies
  in seconds using AI.
</p>
              <p className='mt-4 text-sm text-gray-500'> <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-xl">

  <div className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm hover:shadow-lg transition">
    <p className="text-2xl font-bold text-indigo-600">50+</p>
    <p className="text-xs text-gray-500">Free Credits</p>
  </div>

  <div className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm hover:shadow-lg transition">
    <p className="text-2xl font-bold text-indigo-600">4</p>
    <p className="text-xs text-gray-500">Study Modes</p>
  </div>

  <div className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm hover:shadow-lg transition">
    <p className="text-2xl font-bold text-indigo-600">PDF</p>
    <p className="text-xs text-gray-500">Export Ready</p>
  </div>

  <div className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm hover:shadow-lg transition">
    <p className="text-2xl font-bold text-indigo-600">AI</p>
    <p className="text-xs text-gray-500">Powered</p>
  </div>

</div>

</p>

        </motion.div>

        {/* RIGHT CONTENT */}
       <div className="flex justify-center items-center">
  <img
    src="hero-ai.png"
    alt="AceMind AI"
    className="w-full max-w-2xl drop-shadow-2xl hover:scale-105 transition duration-500"
  />
</div>


        </main>
        <section id="features" className="max-w-7xl mx-auto pb-20">

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">

    {/* Card 1 */}
    <div className="bg-black rounded-3xl p-6 text-white transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <div className="text-3xl mb-3">⚡</div>
      <h3 className="font-bold text-lg">Exam Panic Mode</h3>
      <p className="text-sm text-gray-300 mt-2">
        Last-minute preparation for tomorrow's exam.
      </p>
    </div>

    {/* Card 2 */}
    <div className="bg-black rounded-3xl p-6 text-white transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <div className="text-3xl mb-3">🧠</div>
      <h3 className="font-bold text-lg">Smart Revision</h3>
      <p className="text-sm text-gray-300 mt-2">
        Ultra-short AI-generated revision notes.
      </p>
    </div>

    {/* Card 3 */}
    <div className="bg-black rounded-3xl p-6 text-white transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <div className="text-3xl mb-3">🎤</div>
      <h3 className="font-bold text-lg">Viva Preparation</h3>
      <p className="text-sm text-gray-300 mt-2">
        Expected viva questions and answers.
      </p>
    </div>

    {/* Card 4 */}
    <div className="bg-black rounded-3xl p-6 text-white transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <div className="text-3xl mb-3">📈</div>
      <h3 className="font-bold text-lg">Visual Learning</h3>
      <p className="text-sm text-gray-300 mt-2">
        Charts, diagrams and flow maps.
      </p>
    </div>

    {/* Card 5 */}
    <div className="bg-black rounded-3xl p-6 text-white transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <div className="text-3xl mb-3">🎯</div>
      <h3 className="font-bold text-lg">Target Score Planner</h3>
      <p className="text-sm text-gray-300 mt-2">
        Preparation based on your target marks.
      </p>
    </div>

  </div>

</section>
<section id="how-it-works" className="max-w-7xl mx-auto py-24">

  <div className="text-center mb-16">

    <span className="inline-block px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-sm font-medium">
      How It Works
    </span>

    <h2 className="mt-6 text-5xl font-bold text-gray-900">
      Generate Exam Notes in 4 Simple Steps
    </h2>

    <p className="mt-4 text-gray-500 text-lg">
      AceMind AI transforms any topic into exam-ready study material within seconds.
    </p>

  </div>

  <div className="grid md:grid-cols-4 gap-8">

    <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="text-4xl mb-4">📝</div>
      <h3 className="font-bold text-xl mb-2">
        Enter Topic
      </h3>
      <p className="text-gray-500">
        Enter any subject, chapter or topic.
      </p>
    </div>

    <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="text-4xl mb-4">⚡</div>
      <h3 className="font-bold text-xl mb-2">
        Select Mode
      </h3>
      <p className="text-gray-500">
        Revision, Viva, Detailed or Exam Mode.
      </p>
    </div>

    <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="text-4xl mb-4">🤖</div>
      <h3 className="font-bold text-xl mb-2">
        AI Generation
      </h3>
      <p className="text-gray-500">
        AI creates structured notes instantly.
      </p>
    </div>

    <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="text-4xl mb-4">📄</div>
      <h3 className="font-bold text-xl mb-2">
        Export PDF
      </h3>
      <p className="text-gray-500">
        Download professional study material.
      </p>
    </div>

  </div>

</section>
<section className="max-w-7xl mx-auto py-24">

  <div className="text-center mb-16">

    <span className="inline-block px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-sm font-medium">
      Why AceMind
    </span>

    <h2 className="mt-6 text-5xl font-bold text-gray-900">
      Why Students Choose AceMind
    </h2>

    <p className="mt-4 text-gray-500 text-lg">
      Designed for smarter preparation, faster revision and better exam performance.
    </p>

  </div>

  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

    <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="text-4xl mb-4">⚡</div>
      <h3 className="font-bold text-xl mb-2">Faster Revision</h3>
      <p className="text-gray-500">
        Convert lengthy chapters into quick revision notes.
      </p>
    </div>

    <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="text-4xl mb-4">🎯</div>
      <h3 className="font-bold text-xl mb-2">Exam Focused</h3>
      <p className="text-gray-500">
        Study only what matters for exams.
      </p>
    </div>

    <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="text-4xl mb-4">🧠</div>
      <h3 className="font-bold text-xl mb-2">AI-Powered Learning</h3>
      <p className="text-gray-500">
        Personalized study material generated instantly.
      </p>
    </div>

    <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="text-4xl mb-4">📄</div>
      <h3 className="font-bold text-xl mb-2">Export Ready PDFs</h3>
      <p className="text-gray-500">
        Download clean and professional notes anytime.
      </p>
    </div>

  </div>

</section>
<section className="max-w-7xl mx-auto py-24">

  <div className="text-center mb-16">

    <span className="inline-block px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-sm font-medium">
      Who Is It For?
    </span>

    <h2 className="mt-6 text-5xl font-bold text-gray-900">
      Built for Every Type of Student
    </h2>

    <p className="mt-4 text-gray-500 text-lg">
      Whether you're revising at the last minute or preparing months ahead.
    </p>

  </div>

  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

    <div className="bg-gradient-to-br from-indigo-50 to-white border border-indigo-100 rounded-3xl p-8">
      <div className="text-4xl mb-4">🎓</div>
      <h3 className="font-bold text-xl mb-2">
        University Students
      </h3>
      <p className="text-gray-600">
        Simplify difficult subjects into easy exam notes.
      </p>
    </div>

    <div className="bg-gradient-to-br from-purple-50 to-white border border-purple-100 rounded-3xl p-8">
      <div className="text-4xl mb-4">⚡</div>
      <h3 className="font-bold text-xl mb-2">
        Last-Minute Learners
      </h3>
      <p className="text-gray-600">
        Revise important topics quickly before exams.
      </p>
    </div>

    <div className="bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-3xl p-8">
      <div className="text-4xl mb-4">🎤</div>
      <h3 className="font-bold text-xl mb-2">
        Viva Preparation
      </h3>
      <p className="text-gray-600">
        Prepare expected viva questions and answers.
      </p>
    </div>

    <div className="bg-gradient-to-br from-green-50 to-white border border-green-100 rounded-3xl p-8">
      <div className="text-4xl mb-4">📚</div>
      <h3 className="font-bold text-xl mb-2">
        Deep Study
      </h3>
      <p className="text-gray-600">
        Generate detailed notes for complete understanding.
      </p>
    </div>

  </div>

</section>
<section className="max-w-7xl mx-auto py-24">

  <div className="rounded-[40px] overflow-hidden bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 p-16 text-center text-white shadow-2xl">

    <span className="inline-block px-4 py-2 rounded-full bg-white/20 backdrop-blur text-sm font-medium">
      Ready to Start?
    </span>

    <h2 className="mt-6 text-5xl font-bold">
      Ace Your Next Exam with AI
    </h2>

    <p className="mt-6 text-lg text-white/80 max-w-2xl mx-auto">
      Generate exam notes, revision sheets, viva preparation material and
      downloadable PDFs within seconds.
    </p>

    <button
      className="mt-10 px-8 py-4 rounded-2xl bg-white text-indigo-700 font-semibold shadow-lg hover:scale-105 transition"
    >
      Start Free with 50 Credits
    </button>

  </div>

</section>
<footer id="contact" className="border-t border-gray-200 mt-10">

  <div className="max-w-7xl mx-auto py-12 flex flex-col md:flex-row justify-between items-center gap-6">

    <div>
      <h3 className="text-2xl font-bold text-indigo-600">
        AceMind AI
      </h3>

      <p className="text-gray-500 mt-2">
        Study Smarter. Revise Faster.
      </p>
    </div>

    <div className="flex gap-8 text-gray-500">

      <a href="#features">Features</a>
<a href="/pricing">Pricing</a>
<a href="#contact">Contact</a>

    </div>

  </div>

</footer>
      
    </div>
  )
}
function Feature({icon , title , des}){
    return(
        <motion.div 
        whileHover={{ y: -12, rotateX: 8, rotateY: -8, scale: 1.05 }}
       transition={{ type: "spring", stiffness: 200, damping: 18 }}
        className='relative rounded-2xl p-6
        bg-gradient-to-br from-black/90 via-black/80 to-black/90
        backdrop-blur-2xl
        border border-gray-200
        shadow-[0_30px_80px_rgba(0,0,0,0.7)]
        text-white'
         style={{ transformStyle: "preserve-3d" }}
        >
         
            <div className='relative z-10' style={{ transform: "translateZ(30px)" }}>
                 <div className="text-4xl mb-3">{icon}</div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{des}</p>

            </div>
          


        </motion.div>
    )
}

export default Auth
