import { useMemo } from "react";
import { TableRow } from "./TableRow";

interface TableProps {
    columns: Array<String>;
    data: Array<Array<String>>;
    numRows: number;
}

export function Table({columns, data, numRows}: TableProps) {
    const columnsLength = useMemo(() => columns.length, [columns])

    return (
        <table className='shadow-md bg-slate-700 text-slate-50 rounded-md overflow-hidden'>
            <tr>
                {columns.map(column => <th className='px-2 py-1 bg-slate-900'>{column}</th>)}
            </tr>
            {
                data.slice(0, numRows).map((dataItem) => <TableRow columnsLength={columnsLength} data={dataItem}/>)
            }
        </table>
    )
}