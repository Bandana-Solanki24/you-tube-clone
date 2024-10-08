
import icons from '../assets/images/icons'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';

const Head = () => {
    const dispatch = useDispatch();

    const toggleMenuHandler = () => {
        dispatch(toggleMenu())

    }

    return (
        <div className='flex justify-between items-center shadow-lg w-full p-5 sticky top-0 z-9 bg-white'>
            <div className='flex gap-6'>
                <img className='cursor-pointer' src={icons.Hamburger} alt="hamburger" onClick={() => toggleMenuHandler()} />
                <img src={icons.Logo} alt="logo" className='w-24' /></div>
            <div className='flex'>
                <div className='border border-gray-200 rounded-tl-full  rounded-bl-full px-5 py-2 w-[500px] flex justify-between align-middle'>
                    <input type="text" placeholder='Search' className='outline-none' />
                </div>
                <button className='bg-gray-300 px-5 rounded-tr-full  rounded-br-full'> <img src={icons.Search} alt="search" /></button>
            </div>
            <div>
                <img className='w-10' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&s" alt="user" />
            </div>
        </div >
    )
}

export default Head
