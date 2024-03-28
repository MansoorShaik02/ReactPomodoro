import React from 'react'
import './App.css'

const BackButton = (props) => {
    return (
        <button{...props} className='backbutton'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" width={24} height={24} />
        </svg>
        </button>
    )
}

export default BackButton