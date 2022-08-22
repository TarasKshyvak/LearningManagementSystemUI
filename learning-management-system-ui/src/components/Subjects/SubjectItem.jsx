import React from 'react';
import { generatePath, Link } from 'react-router-dom';

const SubjectItem = (props) => {
    const path = generatePath("/Subjects/:id", {id: props.subject.id});

    return (
        <div>
            <Link to={path}>{props.subject.name}</Link>
        </div>
    );
};

export default SubjectItem;