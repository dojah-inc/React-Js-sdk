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
   *  https://app.dojah.io/dashboard to enable different
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
    widget_id: "68c7d8c4bd774cbc0c0d5aef"
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

  // const govData = {
  //   bvn: "",
  //   nin: "",
  //   dl: "",
  //   mobile: ""
  // }

  //const referenceId = "1234555666" //Unique reference Id
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
      //govData={govData}
      //referenceId={referenceId}
    />
  );
}

export default App
