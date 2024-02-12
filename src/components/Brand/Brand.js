import React from 'react';
import { navigate } from 'gatsby';

import header_logo from '../../assets/main_logo.png'
import * as styles from './Brand.module.css';

const Brand = (props) => {
  return (
    <div
      className={styles.root}
      role={'presentation'}
      onClick={() => navigate('/')}
    >
      {/* <h4>SYDNEY</h4> */}
      <img className='main_logo' src={header_logo} alt='main_logo_kd' title="KD" />
      
    </div>
  );
};

export default Brand;
