import React from 'react';
import QRCode from 'qrcode.react';
import classNames from 'classnames';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { string } from 'prop-types';

import PrimaryButton from 'shared/components/Forms/PrimaryButton';

import styles from './Receive.scss';

export default class Receive extends React.PureComponent {
  static propTypes = {
    className: string,
    address: string.isRequired
  };

  static defaultProps = {
    className: null
  };

  render() {
    const { className, address } = this.props;

    return (
      <div className={classNames(styles.receive, className)}>
        <div className={styles.label}>My public wallet address</div>
        <div className={styles.address}>{address}</div>

        <CopyToClipboard text={address}>
          <PrimaryButton className={styles.copy}>Copy to clipboard</PrimaryButton>
        </CopyToClipboard>

        <div className={styles.label}>My wallet QR code</div>
        <QRCode className={styles.qrcode} value={address} />
      </div>
    );
  }
}
