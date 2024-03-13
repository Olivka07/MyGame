import { lazy } from 'react';
import { Loadable } from '../../components/Loadable/Loadable';

export const AsyncThemePage = Loadable(lazy(() => import('./ThemePage')));
