import React from 'react'

import './chart-footer.css';

const ChartFooter = ({dataSource}) => {

    return (
        <div>
            {dataSource != null ?
                <div className="data-sources"><b>Source:</b>&nbsp; 
                    <span className="site-link" onClick={()=> window.open(dataSource.url)}>{dataSource.label}</span>
                    <span className="footer-comment"><br/>{dataSource.comment}</span>
                </div>
                :
                <span></span>
            }
        </div>
    )
};


export default ChartFooter;