import React, { useState, useEffect } from 'react';
import BeatLoader from "react-spinners/BeatLoader";
import { Button } from '@material-ui/core';

const OtherPage = () => {
    const [loading, setLoading] = useState(true);

    const override = `
        display: block;
        margin: 0 auto;
        border-color: red;
    `;

    useEffect(() => {
        setTimeout(() => setLoading(false), 1000)
    }, [])

    return (
        <div className='centred-item'>
            {loading ? (
                <BeatLoader
                    color='lightblue'
                    loading={loading}
                    css={override}
                    size={20}
                />
            ) : (
                <div className='centred-item'>
                    <h1>OtherPage</h1>
                    <p>
                        lorem ipsum dolor sit amet consectetur adipisicing elit. hic ea, laboriosam reiciendis sunt perferendis
                        veniam minima autem eius placeat repudiandae molestias quis? quisquam voluptas a blanditiis aliquam libero
                        error sit.
                    </p>
                    <Button
                        variant="contained"
                        color="primary"
                        href="/contact"
                    >
                        Contact
            </Button>
                </div>
            )
            }
        </div>
    );
};

export default OtherPage;