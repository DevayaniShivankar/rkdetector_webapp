import React from "react";

function Terminal(props) {
    return(
        <div className="group relative h-full">

            <div class="p-6 h-full w-full bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Logs</h5>
                <p class="font-mono text-gray-700 dark:text-gray-400">This is where the logs will be printed.</p>
            </div>

        </div>
          
    )
}

export default Terminal;