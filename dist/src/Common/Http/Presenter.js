"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Presenter = void 0;
const Helper_1 = require("../Helpers/Helper");
class Presenter {
    presentAll(data) {
        var _a, _b;
        const toPresent = (data) => this.present(data);
        const currentPage = +((_a = this.request.query) === null || _a === void 0 ? void 0 : _a.page) || 1;
        const perPage = +((_b = this.request.query) === null || _b === void 0 ? void 0 : _b.limit) || 15;
        const begin = (currentPage - 1) * perPage;
        const lastPage = currentPage > 1 ? currentPage - 1 : 1;
        const to = Math.min(begin + perPage, data.length);
        let items = data.map(toPresent);
        items = this.sort(items);
        items = items.splice(begin, perPage);
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
        };
    }
    setRequest(req) {
        this.request = req;
        return this;
    }
    sort(items) {
        var _a;
        let sort = (_a = this.request.query) === null || _a === void 0 ? void 0 : _a.sort;
        if ((0, Helper_1.isEmpty)(sort))
            return items;
        const field = sort.toString().replace('-', '');
        const byRequestQuery = (a, b) => {
            const sortDirection = sort.toString().includes('-') ? 'desc' : 'asc';
            if ('desc' === sortDirection)
                return b[field] - a[field];
            else
                return a[field] - b[field];
        };
        return items.sort(byRequestQuery);
    }
}
exports.Presenter = Presenter;
//# sourceMappingURL=Presenter.js.map