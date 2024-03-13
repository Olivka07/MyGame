import React from 'react';
import './index.scss';
import { Route, Routes } from 'react-router-dom';
import { AsyncThemePage } from '../pages/ThemePage/AsyncThemePage';
import { AsyncQuestionPage } from '../pages/QuestionPage/AsyncQuestionPage';

const App = () => {
    console.log('Хай');
    return (
        <Routes>
            <Route path='/question/:ids' element={<AsyncQuestionPage />} />
            <Route path='*' element={<AsyncThemePage />} />
        </Routes>
    );
};

export default App;
