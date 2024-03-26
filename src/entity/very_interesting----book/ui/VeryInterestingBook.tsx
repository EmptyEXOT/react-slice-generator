import React, {FC, ReactNode} from 'react';
import classNames from "classnames";
import {useDispatch, useSelector} from "react-redux";
import {veryInterestingBookErrorSelector, veryInterestingBookLoadingSelector} from "../model/selectors";


export interface VeryInterestingBookProps {
    children?: ReactNode
    className?: string
}

export const VeryInterestingBook: FC<VeryInterestingBookProps> = ({
                                 children,
                                 className,
                                 ...props,
                             }) => {
    const dispatch = useDispatch<any>()
    const veryInterestingBookError = useSelector(veryInterestingBookErrorSelector);
    const veryInterestingBookLoading = useSelector(veryInterestingBookLoadingSelector);

    return (
        <div className={classNames(className, '')}>
            
        </div>
    );
};