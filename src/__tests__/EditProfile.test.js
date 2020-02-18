import React from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import EditProfile from "../components/EditProfile/EditProfile";


let container = null;

beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
})
afterEach(() => {
    document.body.removeChild(container);
    container = null;
})


describe('Edit Profile component', () => {
    //Rachael Test #5
    test('H1 Text', () => {
        act(() => {
            ReactDOM.render(<EditProfile />, container)
        })
        const firstH1 = container.querySelector('h1:nth-child(1)');
        expect(firstH1.textContent).toBe('Edit Profile')
    });

})