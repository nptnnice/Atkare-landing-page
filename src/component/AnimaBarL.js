import React from "react";

const AnimaBarL = (props) => {

  if(props.animation==true)
  return (
    <div className='bar'>
      <div className="col1 move1">
        <div className="move-bar2">
          <div className="circle-box"></div>
          <div className="rec-box"></div>
        </div>
        <div className="move-bar1">
          <div className="circle-box"></div>
          <div className="rec-box"></div>
        </div>
        <div className="move-bar2">
          <div className="circle-box"></div>
          <div className="rec-box"></div>
        </div>
        <div className="move-bar1">
          <div className="circle-box"></div>
          <div className="rec-box"></div>
        </div>
      </div>
      <div className="col2 move2">
        <div className="move-bar3">
          <div className="circle-box"></div>
          <div className="rec-box"></div>
        </div>
        <div className="move-bar4">
          <div className="circle-box"></div>
          <div className="rec-box"></div>
        </div>
        <div className="move-bar3">
          <div className="circle-box"></div>
          <div className="rec-box"></div>
        </div>
        <div className="move-bar4">
          <div className="circle-box"></div>
          <div className="rec-box"></div>
        </div>
        <div className="move-bar3">
          <div className="circle-box"></div>
          <div className="rec-box"></div>
        </div>
      </div>
      <div className="col3 move3 remove">
        <div className="move-bar1">
          <div className="circle-box"></div>
          <div className="rec-box"></div>
        </div>
        <div className="move-bar2">
          <div className="circle-box"></div>
          <div className="rec-box"></div>
        </div>
        <div className="move-bar1">
          <div className="circle-box"></div>
          <div className="rec-box"></div>
        </div>
        <div className="move-bar2">
          <div className="circle-box"></div>
          <div className="rec-box"></div>
        </div>
      </div>
    </div>
  );
  else
    return (
    <div className='bar'>
      <div className="col1">
        <div className="move-bar2">
          <div className="circle-box"></div>
          <div className="rec-box"></div>
        </div>
        <div className="move-bar1">
          <div className="circle-box"></div>
          <div className="rec-box"></div>
        </div>
        <div className="move-bar4">
          <div className="circle-box"></div>
          <div className="rec-box"></div>
        </div>
        <div className="move-bar3">
          <div className="circle-box"></div>
          <div className="rec-box"></div>
        </div>
        <div className="move-bar2">
          <div className="circle-box"></div>
          <div className="rec-box"></div>
        </div>
      </div>
      <div className="col2 move-more">
        <div className="move-bar2">
          <div className="circle-box"></div>
          <div className="rec-box"></div>
        </div>
        <div className="move-bar3">
          <div className="circle-box"></div>
          <div className="rec-box"></div>
        </div>
        <div className="move-bar4">
          <div className="circle-box"></div>
          <div className="rec-box"></div>
        </div>
        <div className="move-bar1">
          <div className="circle-box"></div>
          <div className="rec-box"></div>
        </div>
        <div className="move-bar4">
          <div className="circle-box"></div>
          <div className="rec-box"></div>
        </div>
      </div>
      <div className="col3 remove">
        <div className="move-bar1">
          <div className="circle-box"></div>
          <div className="rec-box"></div>
        </div>
        <div className="move-bar2">
          <div className="circle-box"></div>
          <div className="rec-box"></div>
        </div>
        <div className="move-bar1">
          <div className="circle-box"></div>
          <div className="rec-box"></div>
        </div>
        <div className="move-bar2">
          <div className="circle-box"></div>
          <div className="rec-box"></div>
        </div>
        <div className="move-bar3">
          <div className="circle-box"></div>
          <div className="rec-box"></div>
        </div>
      </div>
    </div>)

};

export default AnimaBarL;
