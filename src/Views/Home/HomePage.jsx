import React from "react";
import { FormattedMessage } from "react-intl";
import colors from '../../layout/Colors'
import {Hello} from '../../components/Home';

export default function HomePage() {
  return (
    <>
      <h2 style={{color: colors.red[500]}} >
        <FormattedMessage id="AUTH_WELCOME"/>
      </h2>

      <Hello>
      <FormattedMessage id="AUTH_WELCOME"/>
      </Hello>
    </>
  );
}
