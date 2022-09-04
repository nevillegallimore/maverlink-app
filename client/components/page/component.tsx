// import external dependencies
import React, { ReactNode } from 'react';

// import internal dependencies


////////////////////////////////////////////////////////////////////////////////////////////////////

export interface PageProperties {
    children?: ReactNode;
    name: string;
    subtitle: string;
    title: string;
}

export const Page = ({ children, name, subtitle, title }: PageProperties) => {
    return (
        <div className="page" data-component="page" data-page={name}>
            <div className="page__page-head">
                <h2 className="page__title">{title}</h2>
                <p className="page__subtitle">{subtitle}</p>
            </div>

            <div className="page__page-body">{children}</div>
        </div>
    );
};

Page.displayName = 'Page';
