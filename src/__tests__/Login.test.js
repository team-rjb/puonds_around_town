import React from "react";
import ReactDOM from "react-dom";
import { act, Simulate } from "react-dom/test-utils";
import Login from "../components/Login/Login";
import App from "../App";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

let container = null;

beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
})
afterEach(() => {
    document.body.removeChild(container);
    container = null;
})

describe('Login', () => {
    test('asdasd', () => {
        act(() => {
            ReactDOM.render(<Login.WrappedComponent />, container)
        })
        const firstH1 = container.querySelector('h1:nth-child(1)');
        expect(firstH1.textContent).toBe('Testing Tests')
    })
})