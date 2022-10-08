import React from 'react'

export const TextInput = ({
    id,
    label,
    placeholder
}) => {
  return (
    <div className='mb-4 px-5'>
        <label className='block'>
            {label}
        </label>
        <input type="text" className='w-full px-1 py-2 ml-2' placeholder={placeholder} />
    </div>
  )
}

export default TextInput