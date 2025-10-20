# dojah-kyc-sdk-react

> https://github.com/dojah-inc/React-Js-sdk

[![NPM](https://img.shields.io/npm/v/react-dojah.svg)](https://www.npmjs.com/package/dojah-kyc-sdk-react) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)


## Install

```sh
npm install dojah-kyc-sdk-react --save
```

or with `yarn`

```sh
yarn add dojah-kyc-sdk-react
```

## Usage

```jsx
import React from 'react'
import Dojah from 'dojah-kyc-sdk-react'

const App = () => {
  /**
   *  This is your app ID
   * (go to your dashboard at
   * https://dojah.io/dashboard
   * to create an app and retrieve it)
   */
  const appID = "";

  /**
   *  This is your account public key
   *  (go to your dashboard at
   *  https://dojah.io/dashboard to
   *  retrieve it. You can also regenerate one)
   */
  const publicKey = "";

  /**
   *  This is the widget type you'd like to load
   *  (go to your dashboard at
   *  https://dojah.io/dashboard to enable different
   *  widget types)
   */
  const type = "custom";

  /**
   *  These are the configuration options
   *  available to you are:
   *  {debug: BOOL, pages: ARRAY[page: STRING, config: OBJECT]}
   *
   *  The config object is as defined below
   *
   *  NOTE: The otp and selfie options are only
   *  available to the `verification` widget
   */
  const config = {
    widget_id: ""
  };

  /**
   *  These are the user's data to verify, options
   *  available to you possible options are:
   *  {first_name: STRING, last_name: STRING, dob: DATE STRING}
   *
   *  NOTE: Passing all the values will automatically skip
   *  the user-data page (thus the commented out `last_name`)
   */
  const userData = {
    first_name: 'Chijioke',
    last_name: '', // 'Nna'
    dob: '2022-05-01',
  };

  /**
   *  These are the metadata options
   *  You can pass any values within the object
   */
  const metadata = {
    user_id: '121',
  };

  const govData = {
    bvn: "",
    nin: "",
    dl: "",
    mobile: ""
  }

    const referenceId = "1234555666" //Unique reference Id

  /**
   * @param {String} type
   * This method receives the type
   * The type can only be one of:
   * loading, begin, success, error, close
   * @param {String} data
   * This is the data from doja
   */
  const response = (type, data) => {
    console.log(type, data);
    if (type === 'success') {
    } else if (type === 'error') {
    } else if (type === 'close') {
    } else if (type === 'begin') {
    } else if (type === 'loading') {
    }
  }

  // The Doja library accepts 3 props and
  // initiliazes the doja widget and connect process
  return (
    <Dojah
      response={response}
      appID={appID}
      publicKey={publicKey}
      type={type}
      config={config}
      userData={userData}
      metadata={metadata}
      govData={govData}
      referenceId = {referenceId}
    />
  );
}

export default App

```

See the `examples` folder for an implementation

## Deployment

**`REMEMBER TO CHANGE THE APP ID and PUBLIC KEY WHEN DEPLOYING TO A LIVE (PRODUCTION) ENVIRONMENT`**

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b feature/feature-name`
3. Commit your changes: `git commit -am 'Some commit message'`
4. Push to the branch: `git push origin feature/feature-name`
5. Submit a pull request 😉😉

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
