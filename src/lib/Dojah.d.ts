import * as React from 'react';

declare namespace Dojah {
  interface Config {
    uri: string;
  }

  interface Props {
    appID: string;
    publicKey: string;
    type: string;
    response: (status: string, data?: any) => void;
    config?: Record<string, any>;
    metadata?: Record<string, any>;
    userData?: Record<string, any>;
    govData?: Record<string, any>;
  }
}

declare class Dojah extends React.Component<Dojah.Props> {
  static config: Dojah.Config;
}

export default Dojah;