import React from 'react';

type Props = {
    children: JSX.Element,
};

const Button = (props: Props): JSX.Element => {
    const { children } = props;
    const handleClick = () => {
        console.log('handleClick-->>>');
    };
    return <button className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600" onClick={handleClick}>{children}</button>;
};

export default Button;
