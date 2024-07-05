"use client"
import React, { useState } from 'react'

function CategoryFilter({selectedCategory}) {
    const [activeIndex,setActiveIndex]=useState(0)
    const filterOptions=[
        {
            id:1,
            name:'All',
            value:'all'
        },
        {
            id:2,
            name:'Sinhala',
            value:'sinhala'
        },
        {
            id:3,
            name:'History',
            value:'history'
        },
        {
            id:4,
            name:'Mathematics',
            value:'mathematics'
        },
        {
            id:5,
            name:'Health',
            value:'health'
        },
        {
            id:6,
            name:'Science',
            value:'science'
        }
    ]
  return (
    <div className='flex gap-5'>
        {filterOptions.map((item,index)=>(
            <button key={index}
            onClick={()=>
                {setActiveIndex(index);
                selectedCategory(item.value)}}
            className={`border p-2 px-4
            text-sm rounded-md
            hover:border-purple-800 font-semibold
            hover:bg-gray-50
            ${activeIndex==index?'border-purple-800 bg-purple-50 text-purple-800':null}`}>
                <h2>{item.name}</h2>
            </button>
        ))}
    </div>
  )
}

export default CategoryFilter