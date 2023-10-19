import { Request } from 'express'
import { UserFilter } from '../../../Domain/UserFilter'
import { isEmpty } from '../../../../../Common/Helpers/Helper'

export class RequestUserFilterAdapter extends UserFilter {
    constructor(request: Request) {
        const transformName = () => {
            const name = request.query?.name
            if (isEmpty(name)) return null
            return name.toString()
        }

        const transformCity = () => {
            const city = request.query?.city
            if (isEmpty(city)) return null
            return city.toString()
        }

        const transformCountry = () => {
            const country = request.query?.country
            if (isEmpty(country)) return null
            return country.toString()
        }

        const transformFavoriteSport = () => {
            const favoriteSport = request.query?.favorite_sport
            if (isEmpty(favoriteSport)) return null
            return favoriteSport.toString()
        }

        const transformQueryString = () => {
            const queryString = request.query.q
            if (isEmpty(queryString)) return null
            return queryString.toString().toLocaleLowerCase()
        }

        super(
            transformName(),
            transformCity(),
            transformCountry(),
            transformFavoriteSport(),
            transformQueryString()
        )
    }
}
