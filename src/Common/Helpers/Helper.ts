export function not(value: boolean): boolean {
    return !value
}

export function isNull(value: any): boolean {
    return value === null
}

export function isUndefined(value: any): boolean {
    return value === undefined
}

export function isEmpty(value: any): boolean {
    if (Array.isArray(value)) return value.length === 0
    if (value instanceof Object) return Object.keys(value).length === 0
    return isNull(value) || isUndefined(value)
}

export function isNotEmpty(value: any): boolean {
    return not(isEmpty(value))
}

export function first<T = any>(items: T[]): T {
    return items[0]
}

export function last<T = any>(values: T[]): T {
    return values[values.length - 1]
}

export function toSnakeCase(text: string): string {
    return text.replace(' ', '_').toLowerCase()
}
