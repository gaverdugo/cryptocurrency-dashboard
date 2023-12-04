interface TableRowProps {
    data: String[];
}

export function TableRow({data}: TableRowProps) {
    return (
        <tr className='h-1'>
            { data.map((item, i) => <td key={i} className='px-2 py-1'>{item || ''}</td>) }
        </tr>
    )
}