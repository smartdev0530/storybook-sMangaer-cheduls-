import React from "react";
import { FormattedMessage } from "react-intl";

const translate = (id, value = {}) => <FormattedMessage id={id} values={{ ...value }} />;

export default translate;

/*
HOW TO USE
1. add { key: value } in messages/{language}.js

2. import translate function in component
pass key from messages/{language} which we need to display
ex: translate('hello')

`
For display of dynamic content pass obj with key to replace
ex: translate('hello', { path: <span>John</span> })
in messages replace string with dynamic key to replace at {key} location
ex: 'hello {path}'    // OUTPUT: hello <span>Joe</span>
`
*/
