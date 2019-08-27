import React from 'react';

var SizeList = ({ sizes, sizesUnavailable }) => {
 return (
   <div className='size-list'>
     {sizes.map((size, index) => {
       if (index === 0){
         return (
           <div className='first' key={index}>{size}</div>
         )
       } else if (size === sizesUnavailable){
         return (
           <div className='unavailable' key={index}>{size}</div>
         )
       } 
       else {
         return (
           <div className='available' key={index}>{size}</div>
         )
       }
     })}
   </div>
 ) 
}

export default SizeList;