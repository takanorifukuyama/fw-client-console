import React from 'react';
import PaperSheet from '../Component/Paper';
import TextField from '../Component/TextField'
// import { formatWithOptions } from 'util';

const PostApp = () => {
    const first = {
        title: (
            <h1>Request</h1>

        ),
        content: (
            <div>
                <TextField 
                    label="依頼元"
                />
                
            </div>
        )
    }

    return (
        <React.Fragment>
            <PaperSheet 
                card_title={first.title}
                card_content={first.content}
            />
        </React.Fragment>
    )
}
export default PostApp;