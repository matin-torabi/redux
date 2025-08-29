
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategory } from '../../redux/category';

export default function Categ() {
    const {category, loading, error} = useSelector((state)=>state.category)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchCategory())
    },[])        
  return (
    <>
        {category.category?.map((item)=>{
            return (
                <a href="" key={item.id}>
                    <img 
                    src={item.image} 
                    alt={item.alt} 
                    className="w-[185px] pt-[28px] object-cover h-[185px]" 
                    />
                </a>
            )
        })
        }
    </>
  );
}
