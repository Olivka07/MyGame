import React from 'react';
import './index.scss';
import { Route, Routes } from 'react-router-dom';
import { AsyncThemePage } from '../pages/ThemePage/AsyncThemePage';
import { AsyncQuestionPage } from '../pages/QuestionPage/AsyncQuestionPage';

const App = () => {
    return (
        <Routes>
            <Route path='/' element={<AsyncThemePage />} />
            <Route path='/question/:ids' element={<AsyncQuestionPage />} />
        </Routes>
    );
};

export default App;
