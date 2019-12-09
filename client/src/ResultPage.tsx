import React from "react";

interface Props {
    message: string;
}

const ResultPage = ({ message }: Props): JSX.Element => {
    return (
        <h2>{message}</h2>
    );
};

export default ResultPage;
