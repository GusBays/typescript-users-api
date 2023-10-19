"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserPresenter = void 0;
const Presenter_1 = require("../../../../../Common/Http/Presenter");
class UserPresenter extends Presenter_1.Presenter {
    present(data) {
        return {
            name: data.getName(),
            city: data.getCity(),
            country: data.getCountry(),
            favorite_sport: data.getFavoriteSport()
        };
    }
}
exports.UserPresenter = UserPresenter;
//# sourceMappingURL=UserPresenter.js.map