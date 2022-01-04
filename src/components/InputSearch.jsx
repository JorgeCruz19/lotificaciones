import React from 'react'

const InputSearch = () => {
    return (
        <div class="w-full flex bg-gray-100 p-4 my-4 space-x-4 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input class="bg-gray-100 outline-none" type="text" placeholder="Buscar..." />
        </div>
    )
}

export default InputSearch
