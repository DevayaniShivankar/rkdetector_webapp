import React from "react";

function Button(props) {
    return(
        <div className="group relative">
            <button type="button" class="text-purple-700 hover:text-white border border-purple-700 hover:focus:ring-4 
            focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-purple-400 
            dark:text-purple-400 dark:hover:text-white dark:hover: dark:focus:ring-purple-900">{props.buttonText}</button>
            </div>
          
    )
}

export default Button;