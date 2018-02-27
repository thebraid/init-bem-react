import React, { Fragment } from 'react';
import { decl } from 'bem-react-core';

export default decl({
    block: 'App',
    content() {
        return (
            <Fragment>
                <div>App</div>
            </Fragment>
        )
    }
})
