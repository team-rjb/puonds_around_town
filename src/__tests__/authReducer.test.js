import { getCurrentUser } from "../redux/reducers/authReducer.js";

describe('getCurrentUser', () => {
    test('passes when value is NaN', () => {
        expect(NaN).toBeNaN();
        expect(1).not.toBeNaN();
    });
})