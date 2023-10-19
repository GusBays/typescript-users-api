export interface IUser {
    id?: number
    name: string
    city: string
    country: string
    favorite_sport: string
    created_at?: string
    updated_at?: string
}

export interface IUserCsv {
    name?: string
    city?: string
    country?: string
    favorite_sport?: string
}

export interface IUserPresenter {
    name: string
    city: string
    country: string
    favorite_sport: string
}

export interface IUserFilter {
    name?: string
    city?: string
    country?: string
    favorite_sport?: string
    queryString?: string
}
