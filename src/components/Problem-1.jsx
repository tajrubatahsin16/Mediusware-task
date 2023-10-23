import React, { useState } from 'react';
import TableItems from './TableItems';

const Problem1 = () => {

    const [show, setShow] = useState('all');
    const [table, setTable] = useState([]);
    const addToTable = (e) => {
        e.preventDefault();
        const form = e.target;
        const id = form.id.value;
        const name = form.name.value;
        const status = form.status.value;
        const newInfo = [...table, { id, name, status }];
        setTable(newInfo);
        form.reset();
    }

    const active = table.filter(item => item.status === 'active');
    const completed = table.filter(item => item.status === 'completed');

    const handleClick = (val) => {
        setShow(val);
    }
    const customSort = (a, b) => {
        if (a.status === 'active' && b.status !== 'active') {
            return -1;
        }
        if (a.status !== 'active' && b.status === 'active') {
            return 1;
        }
        if (a.status === 'completed' && b.status !== 'completed') {
            return -1;
        }
        if (a.status !== 'completed' && b.status === 'completed') {
            return 1;
        }
        return 0;
    };

    table.sort(customSort);

    return (

        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-1</h4>
                <div className="col-6 ">
                    <form onSubmit={addToTable} className="row gy-2 gx-3 align-items-center mb-4">
                        <div className="col-auto">
                            <input type="number" className="form-control" name='id' placeholder="Id" />
                        </div>
                        <div className="col-auto">
                            <input type="text" className="form-control" name='name' placeholder="Name" />
                        </div>
                        <div className="col-auto">
                            <input type="text" className="form-control" name='status' placeholder="Status" />
                        </div>
                        <div className="col-auto">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
                <div className="col-8">
                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li className="nav-item">
                            <button className={`nav-link ${show === 'all' && 'active'}`} type="button" onClick={() => handleClick('all')}>All</button>
                        </li>
                        <li className="nav-item">
                            <button className={`nav-link ${show === 'active' && 'active'}`} type="button" onClick={() => handleClick('active')}>Active</button>
                        </li>
                        <li className="nav-item">
                            <button className={`nav-link ${show === 'completed' && 'active'}`} type="button" onClick={() => handleClick('completed')}>Completed</button>
                        </li>
                    </ul>
                    <div className="tab-content"></div>
                    <table className="table table-striped ">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                show === 'all'
                                ? table.map((i) => <TableItems key={i.id} i={i}></TableItems>)
                                : show === 'active'
                                ? active.map((i) => <TableItems key={i.id} i={i}></TableItems>)
                                : completed.map((i) => <TableItems key={i.id} i={i}></TableItems>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Problem1;