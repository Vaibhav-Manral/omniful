import React from 'react';
import Button from 'react-bootstrap/Button';
import { FiLink2 } from "react-icons/fi";
import {FiChevronDown} from 'react-icons/fi';

function OutlineTypesExample(p) {


  return (
    <>
      <Button size="sm" style={p.css} variant="light">
        <div style={p.check}>
            <FiLink2 className='_Filink2icon'/>
        </div>
        <div style={p.check}>
           <span>Quick Link</span> 
        </div>
        <div style={p.check}>
            <FiChevronDown className='_Filink2icon'/>
        </div>
        </Button>{' '}
    </>
  );
}

export default OutlineTypesExample;