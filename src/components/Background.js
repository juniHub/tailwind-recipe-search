import React from 'react';

const Background = ( { children } ) =>
{
    return (
        // Remove transition-all to disable the background color transition.
        <body className="bg-yellow-50 dark:bg-gray-800 transition-all">
            {children}
        </body>
    )
}

export default Background;