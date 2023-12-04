import { TableRow } from "./TableRow";

interface TableProps {
    columns: String[];
    data: Array<Array<String>>;
}

export function Table({columns, data}: TableProps) {

    return (
        <table className='shadow-md bg-slate-700 text-slate-50 rounded-md overflow-hidden'>
            <thead>
                <tr>
                    {columns.map((column, i) => <th key={i} className='px-2 py-1 bg-slate-900'>{column}</th>)}
                </tr>
            </thead>
            <tbody>
                {data.map((dataItem, i) => <TableRow key={i} data={dataItem}/>)}
            </tbody>
        </table>
    )
}