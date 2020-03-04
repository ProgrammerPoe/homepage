// needed for react
import * as serviceWorker from './serviceWorker';
import {run} from './application/main.js';

run();

// needed for react
serviceWorker.unregister();
