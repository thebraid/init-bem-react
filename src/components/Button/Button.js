import React from 'react';
import { decl } from 'bem-react-core';

export default decl({
    block: 'Button',
    tag: 'button',
    mods({children, ...arg}) {
        return arg;
    }
})
