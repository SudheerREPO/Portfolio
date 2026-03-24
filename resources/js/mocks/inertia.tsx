import React from 'react';

// A mock Head component that injects title into the document natively
export const Head = ({ title, children }: { title?: string, children?: React.ReactNode }) => {
    React.useEffect(() => {
        if (title) {
            document.title = title;
        }
    }, [title]);

    return <>{children}</>;
};

export const Link = ({ href, children, ...props }: any) => {
    return <a href={href} {...props}>{children}</a>;
};

export const usePage = () => ({
    props: {}
});
