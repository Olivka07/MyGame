import React, { Suspense, lazy } from 'react';
import { IData } from '../../model/types';
import { RowQuestion } from '../../components/RowQuestion/RowQuestion';
import classes from './theme-page.module.scss';
import { useUnit } from 'effector-react';
import { $data } from '../../model/store';

const ThemePage = () => {
    const data = useUnit($data);

    return (
        <div className={classes['grid-theme']}>
            {data &&
                data.length > 0 &&
                data.map((theme) => {
                    return (
                        <>
                            <div className={classes['theme-title']}>
                                {theme.title}
                            </div>
                            <div>
                                {theme.questions.length > 0 && (
                                    <RowQuestion
                                        key={theme.id}
                                        themeQuestions={theme.questions}
                                        id_theme={theme.id}
                                    />
                                )}
                            </div>
                        </>
                    );
                })}
        </div>
    );
};

export default ThemePage;
