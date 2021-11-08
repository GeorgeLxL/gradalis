/**
 * Content loader
 */
import React from 'react';
import HashLoader from "react-spinners/HashLoader";

const ContentLoader = () => (
    <div className="iron-progress-bar d-flex justify-content-center align-items-center" style={{ backgroundColor: '#000' }}>
        <HashLoader
            size={50}
            color={"#DAC720"}
            loading={true}
        />
    </div>
);

export default ContentLoader;