import { lazy } from 'react';
import { Loadable } from '../../components/Loadable/Loadable';

export const AsyncQuestionPage = Loadable(lazy(() => import('./QuestionPage')));
