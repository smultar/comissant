import React, { useState, useEffect } from 'react';

// Global
import config from '../config.json';

// Component


const Page = () => {


    // Render
    return (
        <div id="page">
          <div id="updater">
            <img src="svg/logo-white.svg" draggable={false}></img>
            <p className="up-title">{config.name.display}</p>
            <p className="up-sub">MAIN PAGE</p>

          </div>
        </div>
      );

}

export default Page;