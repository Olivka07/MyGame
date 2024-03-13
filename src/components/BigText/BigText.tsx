import React, { FC, PropsWithChildren } from 'react';
import classes from './big-text.module.scss';

export const BigText: FC<PropsWithChildren> = ({ children }) => {
    return <p className={classes['big-text']}>{children}</p>;
};
