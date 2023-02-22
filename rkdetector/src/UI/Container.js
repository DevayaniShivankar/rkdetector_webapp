import React from "react";
import Button from "./Button.js";
import Terminal from "./Terminal.js";

function Container(props) {
    return(
        <div className="group relative w-full h-screen">

            <div class="container mx-auto p-4 px-8 h-full bg-zinc-900 grid grid-cols-3 gap-4 justify-center items-center">
                <div class="grid grid-cols-1 gap-4 justify-items-center">
                <Button buttonText="Button 1"/>
                <Button buttonText="Button 2"/>
                <Button buttonText="Button 3"/>
                </div>

                <div class="h-full col-span-2">
                <Terminal/>
                </div> 

            </div>    
        
        </div>
          
    )
}

export default Container;