import React from 'react';

const SvgStar = props => (
  <svg viewBox="0 0 40 40" {...props} width="1em" height="1em">
    <path
      className="prefix__ls-Rating-fill1"
      fill="#F8BD65"
      d="M19.4 31L7.9 37l2.2-12.8-9.3-9.1 12.9-1.8 5.7-11.7 5.7 11.7L38 15.1l-9.3 9.1L30.9 37z"
      opacity={0.3}
    />
    <path
      className="prefix__ls-Rating-fill"
      fill="#F8BD65"
      d="M20.4 32L8.9 38l2.2-12.8-9.3-9.1 12.9-1.8 5.7-11.7 5.7 11.7L39 16.1l-9.3 9.1L31.9 38z"
    />
  </svg>
);

export default SvgStar;
