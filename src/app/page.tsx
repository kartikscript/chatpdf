import { Button } from '@/components/ui/button'
import { UserButton, auth } from '@clerk/nextjs'
import { LogIn } from 'lucide-react';//logo
import Link from 'next/link';





export default async function Home() {
  const {userId}=await auth() // if signed in then userId  would be string and so isAuth=true, else null
  const isAuth =!!userId; //'!!' if usedId is  a empty string null or undef then isAuth is false else true

  return (
   <main className="w-screen min-h-screen bg-gradient-to-r from-rose-100 to-teal-100">
       <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 '>
          <div className='flex flex-col justify-center items-center'>
              <div className='flex justify-center'>
                  <h1 className='text-5xl font-semibold mr-5'>Chat With Any PDF</h1>
                  <UserButton afterSignOutUrl='/'/>
              </div>
              <div className='flex mt-2'>
                  {isAuth && <Button>Go To Chats</Button>}
              </div>
              <p className='text-lg text-center text-black/60 mt-1 max-w-xl '>Join Millions of Students,Researchers and Professionals to answer and understand research with AI</p>
              <div>
                {isAuth ? (<h1>File Uploaded !!</h1>) : (
                  <Link href='/sign-in'>
                      <Button>Login to Get Started <LogIn className='w-4 h-4 ml-2'/></Button>
                      
                  </Link>
                )}
              </div>
          </div>
       </div>
   </main>
  )
}
