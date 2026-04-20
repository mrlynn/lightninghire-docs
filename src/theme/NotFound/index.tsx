import React, {type ReactNode} from 'react';
import NotFound from '@theme-original/NotFound';
import type NotFoundType from '@theme/NotFound';
import type {WrapperProps} from '@docusaurus/types';

type Props = WrapperProps<typeof NotFoundType>;

/**
 * The actual branded 404 content (Bolty + recovery links) lives in
 * `@theme/NotFound/Content` so it renders on both static and SPA-level
 * 404s. This file is left as a pass-through wrapper.
 */
export default function NotFoundWrapper(props: Props): ReactNode {
  return <NotFound {...props} />;
}
