import * as React from "react";
import * as ReactDOM from "react-dom";
import { Hello } from './components/test/test';


ReactDOM.render(
    <Hello compiler='test' framework='diunima'></Hello>,
    document.getElementById('root') as HTMLElement
)