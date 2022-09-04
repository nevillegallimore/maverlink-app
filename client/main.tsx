// import external dependencies
import React from 'react';
import { createRoot } from 'react-dom/client';

// import internal dependencies
import { BusinessNichePage } from '@client/pages';

////////////////////////////////////////////////////////////////////////////////////////////////////

const Application = () => {
    return (
        <div className="application">
            <header className="header">
                Header goes here...
            </header>

            <main className="content">
                <BusinessNichePage />
            </main>

            <footer className="footer">
                Footer goes here...
            </footer>
        </div>
    );
};

////////////////////////////////////////////////////////////////////////////////////////////////////

const element = document.getElementById('root');

if (element) {
    const root = createRoot(element);
    root.render(<Application />);
} else {
    console.error('Sorry, unable to find root element.', element);
}
