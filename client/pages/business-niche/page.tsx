// import external dependencies
import React from 'react';

// import internal dependencies
import { Page, PageProperties } from '@client/components';

////////////////////////////////////////////////////////////////////////////////////////////////////

export const BusinessNichePage = () => {
    const pageProps: PageProperties = {
        name: "business-niche",
        subtitle: "Please select the corresponding niche of your business",
        title: "Just one more step...",
    };

    return (
        <Page {...pageProps}>
            <ul>
                <li>Agriculture &amp; Wildlife</li>
                <li>Business &amp; Information</li>
                <li>Construction &amp; Contracting</li>
            </ul>
        </Page>
    );
}

BusinessNichePage.displayName = 'BusinessNichePage';
