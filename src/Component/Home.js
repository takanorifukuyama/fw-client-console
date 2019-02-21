import React from 'react';
import PaperSheet from './Paper';

const HomeApp = () => {
    const first = {
        title: (
            <div>hello world</div>
        ),
        content: (
            <div>trytrytry</div>
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

export default HomeApp;