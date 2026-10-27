import React from 'react';
import Link from 'next/link';

// Internal links use next/link (client-side navigation, prefetching); everything else is a normal <a>.
export default function A({ href, children, ...rest }) {
  if (typeof href === 'string' && href.startsWith('/') && !href.startsWith('/images/')) {
    return <Link href={href} {...rest}>{children}</Link>;
  }
  return <a href={href} {...rest}>{children}</a>;
}
