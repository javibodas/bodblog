import React, { useState, useEffect } from 'react';


export default function SpanClickable(props){

    const [ isOpen, setIsOpen ] = useState(0);
    const [ spanClass, setSpanClass ] = useState('');
    const [ ulClass , setUlClass ] = useState('');
  
    const handleClick = function(){
      if(isOpen){
        setIsOpen(0);
        setSpanClass('caret year-articles');
        setUlClass('nested'); 
      }else{
        setIsOpen(1)
        setSpanClass('caret year-articles caret-down');
        setUlClass('nested active');
      }
    }
  
    useEffect(function(){
      if(props.open){ 
        setIsOpen(1)
        setSpanClass('caret year-articles caret-down');
        setUlClass('nested active');
      }else{
        setIsOpen(0);
        setSpanClass('caret year-articles');
        setUlClass('nested');
      }
    }, []);
  
    return (<>
              <span className={spanClass} onClick={handleClick}>{props.text}</span><ul className={ulClass}>{props.elements}</ul>
              <style jsx>{`
                .caret {
                  cursor: pointer;
                  user-select: none;
                  color: var(--caret-color);
                  font-weight: normal;
                }

                .caret:hover{
                  font-weight: bold;
                }
                
                .caret::before {
                  content: "\\2182";
                  color: var(--caret-color);
                  display: inline-block;
                  margin-right: 6px;
                }

                .caret-down::before {
                  content: "\\2181";
                }
                .caret-down{
                  font-weight: bold;
                }

                .nested {
                  opacity: 0;
                  display: none;
                }
                .active {
                  opacity: 1;
                  display: block;
                  transition: opacity 1s ease-out;
                }
              `}</style>
            </>);
  }