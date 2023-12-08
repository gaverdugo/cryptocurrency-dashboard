interface TableRowProps {
    data: String[];
}

export function TableRow({data}: TableRowProps) {
    
    const localeOptions = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    } as const

    return (
        <tr className='h-1'>
            { data.map((item, i) => {
                if(item instanceof Date) {
                    return (<td key={i} className='px-2 py-1 whitespace-nowrap'>{item.toLocaleDateString('en-US', localeOptions)}</td>)
                } else {
                    return (<td key={i} className='px-2 py-1'>{item || ''}</td>)
                }
            }) }
        </tr>
    )
}