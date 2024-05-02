import * as React from 'react';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.body);
root.render(
    <div style={{width: "100%", height: "100vh"}}>
        <iframe style={{width: "100%", height: "100vh"}} src={"https://sork.app/client/login?client=true"}/>
</div>
)
;