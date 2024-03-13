import React, { FC } from 'react';
import classes from './ceil.module.scss';
import { Link } from 'react-router-dom';
import { IQuestion } from '../../model/types';

interface CeilQuestionProps {
    question: IQuestion;
    id_theme: number;
}

const CeilQuestion: FC<CeilQuestionProps> = ({ question, id_theme }) => {
    return (
        <div
            className={
                question.solved
                    ? classes['ceil-question__solved']
                    : classes['ceil-question']
            }
        >
            {!question.solved && (
                <Link
                    className={classes['ceil-link']}
                    to={`/question/ids=${id_theme}_${question.id}`}
                >
                    {question.score}
                </Link>
            )}
        </div>
    );
};

export default CeilQuestion;
