import React from 'react';
import LazyLoad from "react-lazyload";

import {getFile} from "../../context/api/ApiFiles";

export const Image = ({ fileId, fileTitle }) => {

    const [file, setFile] = React.useState(null);

    React.useEffect(() => {
        let mounted = true;

        getFile(fileId).then(file => {
            if(mounted){
            setFile(file);
            }
        });

        return () => mounted = false;

    }, [fileId]);


    return (
        <>
            <LazyLoad height={100} once>
                <img src={file} alt={fileTitle} />
            </LazyLoad>
        </>
    );
};