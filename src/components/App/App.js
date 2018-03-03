import React, { Fragment } from 'react';
import { decl } from 'bem-react-core';

import Button from 'b:Button m:primary m:circular m:size=mini|tiny|small|large|big|massive';

export default decl({
    block: 'App',
    content() {
        return (
            <Fragment>
                <span>App</span>
                <div style={{display: "flex", flexFlow: "column", alignItems: "left"}}>

                    <Button primary={true}>Primary</Button>
                    <Button circular>Circular</Button>

                    <br/>Button size<br/>
                    <Button size='mini'>mini</Button>
                    <Button size='tiny'>tiny</Button>
                    <Button size='small'>small</Button>
                    <Button size='large'>large</Button>
                    <Button size='big'>big</Button>
                    <Button size='massive'>massive</Button>

                    <br/>Button combo<br/>

                    <Button
                        size='large'
                        primary
                        circular
                    >large, primary, circular</Button>

                </div>
            </Fragment>
        )
    }
})
