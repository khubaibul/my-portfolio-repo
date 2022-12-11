import { useEffect } from 'react';


const useDynamicTitle = (title) => {
    useEffect(() => {
        window.document.title = `${title} - KI Shakib | Web Developer`;
    }, [title])
};


export default useDynamicTitle;