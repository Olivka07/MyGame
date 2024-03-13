import React, { FC, PropsWithChildren } from 'react';
import classes from './button.module.scss';

interface ButtonProps extends PropsWithChildren {
    click: () => void;
    style?: any;
}

export const Button: FC<ButtonProps> = ({ click, children, style }) => {
    return (
        <button style={style} className={classes.btn} onClick={click}>
            {children}
        </button>
    );
};
