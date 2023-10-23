import React from 'react';

const TableItems = ({ i }) => {
    return (
        <tr>
            <td>
                <h5>{i.name}</h5>
            </td>
            <td>
                <h5>{i.status}</h5>
            </td>
        </tr>
    );
};

export default TableItems;