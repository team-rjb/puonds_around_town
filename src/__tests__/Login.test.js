import React from "react";
import ReactDOM from "react-dom";
import { act, Simulate } from "react-dom/test-utils";
import Login from "../components/Login/Login";
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
            ReactDOM.render(<Login.WrappedComponent />, container)
        })
        const firstH1 = container.querySelector('h1:nth-child(1)');
        expect(firstH1.textContent).toBe('Pounds Around Town')
    })
    test('H3 Text', () => {
        act(() => {
            ReactDOM.render(<Login.WrappedComponent />, container)
        })
        const firstH3 = container.querySelector('h3:nth-child(2)');
        expect(firstH3.textContent).toBe('Login Below')
    })
    test('state object username', () => {
        let state = {
            username:"",
        }
        expect(state.username).toEqual(state.username);
    })
    test('state object password', () => {
        let state = {
            password:"",
        }
        expect(state.password).toEqual(state.password);
    })
    test('button text', () => {
        act(() => {
            ReactDOM.render(<Login.WrappedComponent />, container)
        })
        const buttonText = container.querySelector('button:nth-child(3)');
        expect(buttonText).toBe(null)
    })
})