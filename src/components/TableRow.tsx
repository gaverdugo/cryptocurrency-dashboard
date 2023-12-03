interface TableRowProps {
    columnsLength: number;
    data: Array<String>;
}

export function TableRow({columnsLength, data}: TableRowProps) {
    return (
        <tr>
            {data.slice(columnsLength).map(item => <td className='px-2 py-1'>{item || ''}</td>)}
        </tr>
    )
}