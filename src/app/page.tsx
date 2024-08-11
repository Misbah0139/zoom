import React from 'react'

const page = () => {
  return (
    <div> <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
    <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="/misbah.jpg" alt="" width="384" height="512"></img>
    <div className ="pt-6 md:p-8 text-center md:text-left space-y-4">
      <blockquote>
        <p className="text-lg font-small">
          “Hello, my name is Misbah and I am a student pursuing a Bachelor of Science in Cyber Security. I am excited to learn and explore the world of cybersecurity, and I look forward to connecting with like-minded individuals who share my passion for technology and security”
        </p>
      </blockquote>
      <figcaption className="font-medium">
        <div className="text-sky-500 dark:text-blue-400">
          Misbah Arshad
        </div>
        <div className="text-slate-700 dark:text-slate-500">
          Cyber security student
        </div>
      </figcaption>
    </div>
  </figure></div>
  )
}

export default page