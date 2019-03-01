Initialize npm
```
npm init
```

Install React Core
```
npm install react@15.5.4 --save
```

Install React-DOM libraries
```
npm install react-dom@15.5.4 --save
```

Install Webpack module bundler
```
npm install webpack@3.4.0 --save-dev
```

Install Webpack globally: provides access to Webpack commands in the Terminal
```
npm install webpack@3.4.0 -g
```

Install primary Babel library
```
npm install babel-core@6.24.1 --save-dev
```

Loader tool to integrate Babel with Webpack
```
npm install babel-loader@7.0.0 --save-dev
```

Logic for Babel to transpile code to ES5
```
npm install babel-preset-es2015@6.24.1 --save-dev
```

Allows Babel to understand React code
```
npm install babel-preset-react@6.24.1 --save-dev
```

Install Prop Types library
```
npm install prop-types@15.5.10 --save
```

Install Webpack Development Server globally
```
npm install webpack-dev-server@2.5.0 -g
```

Install Webpack Development Server locally
```
npm install webpack-dev-server@2.5.0 --save-dev
```

Install React-Hot-Loader to work with Webpack-Dev-Server
```
npm install react-hot-loader@3.0.0-beta.7 --save-dev
```

Install HTML-Webpack-Plugin: programmatically generates an index.html file using Webpack
```
npm install html-webpack-plugin@2.29.0 --save-dev
```

Install ES Lint globally
```
npm install eslint@4.13.1 -g
```

Install ES Lint locally
```
npm install eslint@4.13.1 --save-dev
```

Initialize ES Lint in the project
```
eslint --init
```

Terminal response: How would you like to configure ESLint?
Select: Answer questions about your style from the list. Use these responses unless you know you want a different configuration:
```
? Are you using ECMAScript 6 features? YES
? Are you using ES6 modules? YES
? Where will your code run? Browser
? Do you use CommonJS? NO
? Do you use JSX? YES
? Do you use React? YES
? What style of indentation do you use? Spaces  
? What quotes do you use for strings? SINGLE
? What line endings do you use? UNIX
? Do you require semicolons? YES
? What format do you want your config file to be in? JSON
```

Run ES Lint
```
eslint src/** src/**/**
```

If you get an error saying something like, "ESLint couldn't find the plugin "eslint-plugin-react"," check that your package.json file has the line, "eslint-plugin-react": "^7.12.4" in devDependencies (your version may not be identical).

If the plugin is present there . . .

Install ES Lint React plugin globally
```
npm install eslint-plugin-react -g
```

Run ES Lint again. If it still doesn't work or the plugin was not present:

Install ES Lint React plugin locally
```
npm install eslint-plugin-react --save-dev
```

Add a rule to .eslintrc that tells ESLint that component names and React in JSX do count as uses of a variable
```
...
    "rules": {
        "react/jsx-uses-vars": 2,
        "react/jsx-uses-react": 2,
...
```

Only do the following if ES Lint is throwing errors about 'module' not being defined.

In src/index.jsx surround the hot module replacement related code with these lines asking ES Lint to ignore this section:
```
...
/*eslint-disable */
if (module.hot) {
  module.hot.accept('./components/App', () => {
    render(App);
  });
}
/*eslint-enable */
```

Add the following rules to .eslintrc rules section. Put them above the "indent" rule.
```
"react/jsx-no-duplicate-props": 2,
"react/jsx-no-undef": 2,
"react/no-multi-comp": 2,
"react/jsx-indent-props": [
    "error",
    2
  ],
"react/jsx-pascal-case": 2,
"react/prop-types": 2,
"react/jsx-indent": [
    "error",
    2
],
```

Add ES Lint to scripts in package.json:
```
...
  "scripts": {
    "lint": "eslint 'src/**' 'src/**/**'; exit 0"
...
```

Install eslint-loader Webpack loader to work with ESLint
```
npm install eslint-loader --save-dev
```

Add the following ES Lint loader rules to webpack.config.js rules section. Put them above the Babel loader rules.
```
{
  test: /\.jsx?$/,
  enforce: "pre",
  loader: "eslint-loader",
  exclude: /node_modules/,
  options: {
    emitWarning: true,
    configFile: "./.eslintrc.json"
    }
},
```

Add ES Lint fix option to scripts
```
"lint-fix": "eslint 'src/**' 'src/**/**' --fix; exit 0"
```

Install React-Router-Dom library
```
npm install react-router-dom@4.0.0 --save
```

Import HashRouter to src/index.jsx
```
import { HashRouter } from 'react-router-dom';
```

Surround App Component in HashRouter tags
```
<HashRouter>
  <Component/>
</HashRouter>
```

Import Switch & Route to App.jsx
```
import { Switch, Route } from 'react-router-dom';
```

Add Switch elements & Route tags to App.jsx
```
<Header/>
<Switch>
  <Route exact path='/' component={TicketList} />
  <Route path='/newticket' component={NewTicketForm} />
</Switch>
```

Import NewTicketForm to App.jsx
```
import NewTicketForm from './NewTicketForm';
```

Create NewTicketForm component
```
import React from "react";

function NewTicketForm(){
  return (
    <div>
      <form>
        <input
          type='text'
          id='names'
          placeholder='Pair Names'/>
        <input
          type='text'
          id='location'
          placeholder='Location'/>
        <textarea
          id='issue'
          placeholder='Describe your issue.'/>
        <button type='submit'>Help!</button>
      </form>
    </div>
  );
}

export default NewTicketForm;
```

Import Link to Header.jsx & add Link elements
```
import React from "react";
import { Link } from 'react-router-dom';

function Header(){
  return (
    <div>
      <h1>Help Queue</h1>
      <Link to="/">Home</Link> | <Link to="/newticket">Create Ticket</Link>
    </div>
  );
}

export default Header;
```

Install webpack URL loader
```
npm install url-loader@0.6.2 --save-dev
```

Install webpack file loader
```
npm install file-loader@1.1.6 --save-dev
```

Configure webpack.config to use URL & file loader
```
module: {
  rules: [
    ...
    {
      test: /\.(png|gif|jp(e*)g|svg)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 8000,
          name: 'images/[hash]-[name].[ext]'
        }
      }
    }
    ...
```
