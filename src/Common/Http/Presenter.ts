import { Request } from 'express'
import { isEmpty } from '../Helpers/Helper'

interface Pagination<Interface = any> {
    data: Interface[]
    meta: {
        current_page: number
        from: number
        last_page: number
        per_page: number
        to: number
        total: number
    }
}

export abstract class Presenter<Data = any, Interface = any> {
    private request: Request

    abstract present(data: Data): Interface

    presentAll(data: Data[]): Pagination<Interface> {
        const toPresent = (data: Data) => this.present(data)

        const currentPage = +this.request.query?.page || 1
        const perPage = +this.request.query?.limit || 15
        const begin = (currentPage - 1) * perPage
        const lastPage = currentPage > 1 ? currentPage - 1 : 1
        const to = Math.min(begin + perPage, data.length)

        let items = data.map(toPresent)

        items = this.sort(items)

        items = items.splice(begin, perPage)

        return {
            data: items,
            meta: {
                current_page: currentPage,
                from: begin,
                last_page: lastPage,
                per_page: perPage,
                to: to,
                total: data.length
            }
        }
    }

    setRequest(req: Request): Presenter {
        this.request = req

        return this
    }

    private sort(items: Interface[]): Interface[] {
        let sort = this.request.query?.sort

        if (isEmpty(sort)) return items

        const field = sort.toString().replace('-', '')
        const byRequestQuery = (a: Interface, b: Interface) => {
            const sortDirection = sort.toString().includes('-') ? 'desc' : 'asc'
            if ('desc' === sortDirection) return b[field] - a[field]
            else return a[field] - b[field]
        }

        return items.sort(byRequestQuery)
    }
}
