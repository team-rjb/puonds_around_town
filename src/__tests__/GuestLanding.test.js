import React from "react";
import ReactDOM from "react-dom";
import { act, Simulate } from "react-dom/test-utils";
import GuestLanding from "../components/GuestLanding/GuestLanding";
import App from "../App";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

let container = null;

beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
})
afterEach(() => {
    document.body.removeChild(container);
    container = null;
})

//Beth Tests
describe('Login component', () => {
    test('H1 Text', () => {
        act(() => {
            ReactDOM.render(<GuestLanding.WrappedComponent />, container)
        })
        const firstH1 = container.querySelector('h1:nth-child(1)');
        expect(firstH1.textContent).toBe('Welcome to Pounds Around Town!')
    })
})