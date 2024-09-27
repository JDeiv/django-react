import { Link } from "react-router-dom"

const Nav = () => {
    return (
        <>
            <nav className='flex items-center justify-between px-2'>
                {/* <div className='flex-1'>
                    <a href="/"><div className='flex-1 border w-20 h-20'></div></a>
                </div> */}
                <div className='flex flex-2 gap-8 items-center justify-between w-3/4  px-2 mx-4'>
                    <ul className='flex gap-8 justify-start w-full px-4'>
                        <Link to="/"><button type='button' className="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Home</button></Link>


                    </ul>

                </div>

            </nav>
        </>
    )
}
export default Nav

