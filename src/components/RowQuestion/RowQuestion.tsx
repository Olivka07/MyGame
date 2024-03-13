import React, { FC, PropsWithChildren } from 'react';
import classes from './row.module.scss';
import { IQuestion } from '../../model/types';
import CeilQuestion from '../CeilQuestion/CeilQuestion';

interface RowQuestionProps {
    themeQuestions: IQuestion[];
    id_theme: number;
}
export const RowQuestion: FC<RowQuestionProps> = ({
    themeQuestions,
    id_theme,
}) => {
    return (
        <div className={classes['row-question']}>
            {themeQuestions.map((question) => (
                <CeilQuestion
                    key={question.id}
                    question={question}
                    id_theme={id_theme}
                />
            ))}
        </div>
    );
};
