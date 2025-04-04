import React, {useState} from 'react'
const NewsletterOne = () => {
    const [isChecked1 , setIsChecked1] = useState(false)
    const [isChecked2 , setIsChecked2] = useState(false)
    const [isChecked3 , setIsChecked3] = useState(false)
    const [isChecked4 , setIsChecked4] = useState(false)
    function handleChange1 (){
        setIsChecked1(!isChecked1)
    }
    function handleChange2 (){
        setIsChecked2(!isChecked2)
    }
    function handleChange3 (){
        setIsChecked3(!isChecked3)
    }
    function handleChange4 (){
        setIsChecked4(!isChecked4)
    }
  return (
    <div className="  bg-white text-black">
    <div className=''>
        <div className="">
            <div className="flex">
            <div className="">
      <h3 className='text-4xl text-black font-bold pl-8'>Newsletters</h3>
      </div>
      <div className="">
      <button className='border-2 border-red-700 w-48 h-11 text-[] ml-12 rounded font-semibold hover:opacity-80'>Manage Subscriptions</button>
      </div>
      </div>
      </div><br />
      <p className='pl-8'>Sign up for Newsletters below. Just tell us which newsletter you want to receive and where to send them.</p><br />
      
      <div className="flex justify-around mb-5">

      <div className=""> 
        <div className="">
           <label className='text-lg font-bold '>
            <input type="checkbox" checked={isChecked1} onChange={handleChange1} className='w-28 h-5 ml-[-40px]' />
              Food Diary Newsletter
           </label>
           <p className='text-gray-500 ml-[70px]'>3 emails/week</p>
           <p className="ml-[70px]">Get the best recipes delivered daily.</p>
           {/* <p>{isChecked ? "Checked!" : "Not Checked"}</p> */}
        </div><br />

        <div className="">
           <label className='text-lg font-bold'>
            <input type="checkbox" checked={isChecked2} onChange={handleChange2} className='w-28 h-5 ml-[-40px]' />
              New to Food Diary
           </label>
           <p className='text-gray-500 ml-[70px]'>1 email/week</p>
           <p className="ml-[70px]">All the latest on-site recipes, including uploads from your favorite creators.</p>
           {/* <p>{isChecked ? "Checked!" : "Not Checked"}</p> */}
        </div><br />

        <div className="">
           <label className='text-lg font-bold'>
            <input type="checkbox" checked={isChecked3} onChange={handleChange3} className='w-28 h-5 ml-[-40px]' />
              Personalized Recommendations
           </label>
           <p className='text-gray-500 ml-[70px]'>1-3 emails/week</p>
           <p className="ml-[70px]">Get recipes curated just for you, sent to your inbox in a flash.</p>
           {/* <p>{isChecked ? "Checked!" : "Not Checked"}</p> */}
        </div><br />

        <div className="">
           <label className='text-lg font-bold'>
            <input type="checkbox" checked={isChecked4} onChange={handleChange4} className='w-28 h-5 ml-[-40px]' />
              Trending on Food Diary
           </label>
           <p className='text-gray-500 ml-[70px]'>1-3 emails/week</p>
           <p className="ml-[70px] ">Get the recipes that are coming in-hot-on Food Diary, served sizzling up right to your inbox.</p>
           {/* <p>{isChecked ? "Checked!" : "Not Checked"}</p> */}
        </div>
      </div>
      
    
    <div className="">
      <div className="border-l-2 h-96 border-gray-300"></div>
    </div>
    <div className="">
        <p className='font-bold text-lg'>Email</p><br />
        <input type="text" className='w-60 h-11 rounded pl-4 email'/><br /><br />
        <p className='text-xs'>By submitting your email address, you're <br /> agreeing to let us send you customized <br /> marketing messages about us and our advertising <br /> partners. You are also agreeing to our <br /><a href="" className='text-blue-800 text-xs ml-[-0.2px]'>Terms of Service</a> and <a href="" className='text-blue-800 text-xs ml-[-0.2px]'>Privacy Policy</a>.</p><br />
        <button className='border-2 border-red-700 w-48 h-11 bg-red-700 font-semibold text-lg rounded text-white hover:opacity-95'>Sign Up</button>
    </div>
    </div>
    </div>
    </div>
  )
}

export default NewsletterOne
