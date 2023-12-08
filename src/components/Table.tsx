import { useEffect } from "react";
import { useMatrix } from "../hooks/useMatrix";
import { TableRow } from "./TableRow";

interface TableProps {
    columns: String[];
    data: Object[];
}

export function Table({columns, data}: TableProps) {

    const matrix = useMatrix(data, columns.length, 5)

    useEffect(() => {
        console.log(data)
    }, [data])

    return (
        <table className='shadow-md bg-slate-700 text-slate-50 text-sm rounded-md overflow-hidden mx-1'>
            <thead>
                <tr>
                    {columns.map((column, i) => (
                        <th key={i} className={`px-2 py-1 bg-slate-900 ${i === 1 ? 'grow': 'w-2'}`}>{column}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {matrix.map((matrixItem, i) => <TableRow key={i} data={matrixItem}/>)}
            </tbody>
        </table>
    )
}