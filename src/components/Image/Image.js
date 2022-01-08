import React, { useState, useEffect } from 'react';
import LazyLoad from "react-lazyload";
//import { Loading } from "../../components/Loader/Loader";

import { getFile } from "../../context/api/ApiFiles";

export const Image = ({ fileId, fileTitle, fileHeight }) => {

    const [file, setFile] = useState(null)
    const [isLoading, setIsLoadeding] = useState(true)

    useEffect(() => {
        let mounted = true;

        getFile(fileId).then(file => {
            if (mounted) {
                setFile(file);
                setIsLoadeding(false);
            }
        });

        return () => mounted = false;

    }, [fileId]);


    return (
        <>
            
            {isLoading ? (
                <>
                </>
            ) : (
            
                <LazyLoad once>
                    <img src={file} alt={fileTitle} />
                </LazyLoad>
            
            )}
            
        </>
    );
};