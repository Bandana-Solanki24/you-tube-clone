import icons from '../assets/images/icons';
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';
import { useEffect, useState } from 'react';

const Head = () => {
    const [searchQuery, setSearchQuery] = useState("");  // For search input
    const [searchResults, setSearchResults] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const dispatch = useDispatch();

    const toggleMenuHandler = () => {
        dispatch(toggleMenu());
    };

    useEffect(() => {
        if (searchQuery === "") return;
        const timer = setTimeout(() => searchResult(), 200);
        return () => {
            clearTimeout(timer);

        }

    }, [searchQuery]);

    const searchResult = async () => {
        try {
            const data = await fetch(`/api/complete/search?client=firefox&ds=yt&q=${searchQuery}`);
            const json = await data.json();
            console.log(json);
            setSearchResults(json[1]);  // Assuming results are in the second index of the response
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    return (
        <>
            <div className='flex justify-between items-center shadow-lg w-full p-5 sticky top-0 z-9 bg-white'>
                <div className='flex gap-6'>
                    <img className='cursor-pointer' src={icons.Hamburger} alt="hamburger" onClick={() => toggleMenuHandler()} />
                    <img src={icons.Logo} alt="logo" className='w-24' />
                </div>
                <div className='flex'>
                    <div className='border border-gray-200 rounded-tl-full rounded-bl-full px-5 py-2 w-[500px] flex flex-col'>
                        <input
                            type="search"
                            placeholder='Search'
                            className='outline-none'
                            onChange={(e) => setSearchQuery(e.target.value)}
                            onFocus={() => setShowSuggestions(true)}
                            onBlur={() => setShowSuggestions(false)}
                        />
                        {/* Render search results */}

                    </div>
                    <button className='bg-gray-300 px-5 rounded-tr-full rounded-br-full'>
                        <img src={icons.Search} alt="search" />
                    </button>
                </div>

                <div>
                    <img className='w-10' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&s" alt="user" />
                </div>
            </div>
            {showSuggestions && <div className='border mt-2 fixed left-[34%] top-[53px] w-[486px] bg-white rounded-lg cursor-pointer shadow-lg'>
                {
                    searchResults.length > 0 && (
                        <ul>
                            {searchResults.map((result, index) => (
                                <li key={index} className='p-2 hover:bg-gray-100 flex gap-1 font-medium' ><img src={icons.Search} alt="" />{result}</li>
                            ))}
                        </ul>
                    )
                }
            </div>}

        </>
    );
};

export default Head;
