import React, { FC, PropsWithChildren } from 'react';
import classes from './timer.module.scss';

export const Timer: FC<PropsWithChildren> = ({ children }) => {
    return <p className={classes.timer}>Таймер: {children}</p>;
};
