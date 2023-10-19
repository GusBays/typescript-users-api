export abstract class DbInterpreter<Filter = any> {
    protected query: Filter

    setOptions(query: Filter): DbInterpreter {
        this.query = query

        return this
    }

    abstract interpret(): Filter
}
