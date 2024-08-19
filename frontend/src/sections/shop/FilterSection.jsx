import React from 'react'

const FilterSection = ({
  totalProductsLength,
  currentPage,
  resultSize,
  limit,
  setLimit,
}) => {
  const start = (currentPage - 1) * resultSize + 1
  const end = Math.min(start + resultSize - 1, totalProductsLength)

  return (
    <div className='w-full h-full max-container flex items-center'>
      <div className='w-full flex flex-col lg:flex-row lg: justify-between lg:items-center'>
        <div className=' '>{`Showing ${start}–${end} of ${totalProductsLength} results`}</div>
        <div className='flex gap-10 mt-5 lg:mt-0'>
          <div className='flex items-center gap-3'>
            <p className=''>Show</p>
            <input
              className='text-center outline-none h-full p-3 rounded-md'
              onChange={(e) => setLimit(e.target.value)}
              type='number'
              max={16}
              value={limit}
              min={2}
            />
          </div>
          <div className='flex items-center gap-3'>
            <p className=''>Short by</p>
            <select className='outline-none p-3 rounded-md'>
              <option> Default</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FilterSection
