import React, { useContext } from "react";
import TableBody from "../DataBody";
import "./table.css";
import DataContext from "../../utils/DataAreaContext";

const Table = () => {
    const context = useContext(DataContext);

    return (

        <div className="empTable mt-5">
            <table
                id="table"
                className="table table-striped table-hover table-condensed"
            >
                <thead>
                    <tr>
                        {context.employees.headings.map(({ name, width }) => {
                            return (
                                <th
                                    className="col"
                                    key={name}
                                    style={{ width }}
                                    onClick={() => {
                                        context.sortList(name.toLowerCase());
                                    }}
                                >
                                    {name}
                                    <span className="pointer"></span>
                                </th>
                            );
                        })}
                    </tr>
                </thead>
                <TableBody />
            </table>
        </div>
    );
}

export default Table;