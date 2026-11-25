// An <img> whose address comes from page data (converter step add_image_sizes). It adds the image's intrinsic width
// and height from lib/image-sizes.json (generated from public/images by scripts/convert_design.py) unless the data
// gives them, so the browser reserves the space before the image loads. Photos with smaller copies in
// public/images/w/ also get srcset and sizes (lib/image-srcset.json), so phones download a smaller file.
import React from 'react';
import SIZES from '../lib/image-sizes.json';
import SRCSET from '../lib/image-srcset.json';

const SRC_SIZES = '100vw';

export default function Img(props) {
  const s = props.width ? null : SIZES[props.src];
  const set = !props.srcSet && SRCSET[props.src] ? { srcSet: SRCSET[props.src], sizes: SRC_SIZES } : null;
  return <img {...(s ? { width: s[0], height: s[1] } : null)} {...set} {...props} />;
}
