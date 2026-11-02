// An <img> whose address comes from page data (converter step add_image_sizes). It adds the image's intrinsic width
// and height from lib/image-sizes.json (generated from public/images by scripts/convert_design.py) unless the data
// gives them, so the browser reserves the space before the image loads.
import React from 'react';
import SIZES from '../lib/image-sizes.json';

export default function Img(props) {
  const s = props.width ? null : SIZES[props.src];
  return s ? <img width={s[0]} height={s[1]} {...props} /> : <img {...props} />;
}
