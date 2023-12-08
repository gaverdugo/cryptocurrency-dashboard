import { DefaultBodyType, http, HttpResponse, StrictRequest } from 'msw'

interface ResolverParams {
    request: StrictRequest<DefaultBodyType>
}

const multiPriceResolver = ({ request }: ResolverParams) => {
    const url = new URL(request.url)
    const max = 3000
    const min = 2000

    const fromSymbols = url.searchParams.get('fsyms')?.split(',')
    const toSymbols = url.searchParams.get('tsyms')?.split(',')

    const reduceToSymbols = (fromSymbol: string) => {
        return toSymbols?.reduce((acc, key) => {
            if (key === fromSymbol) return {...acc, [key]: 1}
            const randomValue = (Math.random() * (max - min)) + min
            return {...acc, [key]: randomValue.toFixed(2)}
        }, {})
    }

    const res = fromSymbols?.reduce((acc, key) => ({...acc, [key]: reduceToSymbols(key)}), {})

    return HttpResponse.json(res)
}

export const handlers = [
    http.get(
        `/pricemulti`,
        multiPriceResolver
    )
]