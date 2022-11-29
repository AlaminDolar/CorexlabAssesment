import React from 'react';
import { BsBell } from 'react-icons/bs';
import { BsChatDots } from 'react-icons/bs';
import { RiLogoutBoxRLine } from 'react-icons/ri';






const header = () => {
    return (
        <div className='pl-[323px]'>
<div className="navbar bg-white ">
        <div className="flex-1">
           <p><span>Auction</span> / All Auction</p>
        </div>
    
<div className="flex-none">

   
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
    <div >
    <BsBell></BsBell>
    </div>
      </label>
  </div>


   
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
    <div >
    <BsChatDots></BsChatDots>
    </div>
      </label>
  </div>

    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
    <div className="rounded-full">
      <img  src="https://placeimg.com/80/80/people" />
    </div>
      </label>
  </div>

    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
    <div >
    <RiLogoutBoxRLine></RiLogoutBoxRLine>
    </div>
      </label>
  </div>

   


</div>
</div>
    </div>
    );
};

export default header;