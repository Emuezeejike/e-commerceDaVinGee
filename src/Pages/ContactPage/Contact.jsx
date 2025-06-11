
import Warranty from '../../Components/Warranty'
import address from '../../assets/images/address.svg'
import phone from '../../assets/images/phone.svg'
import workingTime from '../../assets/images/working.svg'
import { Link } from 'react-router-dom'
import '../../Components/ImageBg.css'
import Bgimg from '../../assets/images/big6.png'

const Contact = () => {
  return (
    <div>
      <div className='bg-gray-200'>
        <div className=' w-[40%] m-auto flex justify-center items-center'>
        <img loading='lazy' src={Bgimg} alt='background' className='' />
        <div className='flex flex-col justify-center items-center'>
          <h1 className='font-bold text-3xl text-center text-black'>Contact</h1>
        <div className='flex gap-2 mt-4 text-sm'>
          <Link to={'/'} className='font-semibold hover:text-orange-500 transition duration-200'>Home</Link>
          <p className='font-semibold '>{'>'}</p>
          <span className="text-sm ">Contact</span>
        </div>
        </div>  
      </div>
      </div>
      
      <div>
        <h1 className='text-center font-bold mt-4 text-2xl family-poppins'>Get In Touch With Us</h1>
        <p className='text-center text-sm family-poppins'>For more information about our Products & Services. Please feel free to drop us <br /> an Email. Our Staff will always be there to help you out. Do not hesitate!</p>
      </div>
      <div className='flex w-[60%] md:flex-row justify-around m-auto gap-8 family-poppins'>
          <div className='flex flex-col gap-4 mt-15'>
            <div className='flex gap-4'>
              <div>
                <img src={address} alt='address' />
              </div>
              <div>
                <p className='font-bold'>Address</p>
                <p className='text-sm'>400 Osho Drive, <br /> Suite 200 Coral, <br /> Lagos Nigeria</p>
              </div>
            </div>
            <div className='flex gap-4'>
              <div>
                <img src={phone} alt='phone' />
              </div>
              <div>
                <p className='font-bold'>Phone</p>
                <p className='text-sm'>Mobile: +(234) 907-866-6231</p>
                <p className='text-sm'>Work: +(234) 907-866-6231</p>
              </div>
            </div>
            <div className='flex gap-4'>
              <div>
                <img src={workingTime} alt='working time' />
              </div>
              <div>
                <p className='font-bold'>Working Time</p>
                <p className='text-sm'>Monday-Friday: 9:00 - 22:00</p>
                <p className='text-sm'>Saturday-Sunday: 9:00 - 21:00</p>
              </div>
            </div> 
          </div>
          <div className='flex flex-col gap-4 mt-15 w-[40%]'>
            <form action="POST">
              <div className='flex flex-col gap-2'>
                <label className='text-sm' htmlFor="name">Your Name</label>
                <input className='border text-sm rounded-sm border-gray-400 p-2' type="text" id="name" name="name" placeholder="John Benson" autoComplete='name' required />
              </div>
              <div className='flex flex-col gap-2'>
                <label className='mt-4 text-sm' htmlFor="email">Email address</label>
                <input className='border text-sm border-gray-400 p-2 rounded-sm' type="email" id="email" name="email" placeholder="example@email.com" autoComplete='email' required />
              </div>
              <div className='flex flex-col gap-2'>
                <label className='mt-4 text-sm' htmlFor="subject">Subject</label>
                <input className='border text-sm border-gray-400 p-2 rounded-sm' type="text" id="subject" name="subject" placeholder="Optional" autoComplete='subject' />
              </div>
              <div className='flex flex-col gap-2'>
                <label className='mt-4 text-sm' htmlFor="message">Message</label>
                <textarea className='border text-sm border-gray-400 rounded-sm p-8' cols={'50'} id="message" name="message" placeholder="Your Message" autoComplete='message' required></textarea>
              </div>
              <button className="hover:cursor-pointer hover:bg-gray-500 bg-gray-300 text-black px-10 p-2 rounded-sm text-sm my-8" type="submit">Submit</button>
            </form>
          </div>
      </div>    
      <Warranty />
    </div>
  )
}
export default Contact