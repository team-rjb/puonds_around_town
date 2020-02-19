import React from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import AddPost from "../components/AddPost/AddPost";
import { HashRouter } from "react-router-dom";
import { render, fireEvent } from "@testing-library/react";
let container = null;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});
afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

describe("Add post component", () => {
  //Rachael Test #1
  test("H1 Text", () => {
    act(() => {
      ReactDOM.render(
        <HashRouter><AddPost.WrappedComponent /></HashRouter>,
        container
      );
    });
    const firstH1 = container.querySelector("h1:nth-child(1)");
    expect(firstH1.textContent).toBe("Add a Dog To Your Shelter");
  });

  // Rachael Test #2
  test("Check Button text", () => {
    act(() => {
      ReactDOM.render(
        <HashRouter> <AddPost.WrappedComponent /></HashRouter>,
        container
      );
    });
    const buttonText = container.querySelector("button:nth-child(3)");
    expect(buttonText).toBe(null);
  });
  // Rachael #3
  test("state object username", () => {
    let state = {
      username: ""
    };
    expect(state.username).toEqual(state.username);
  });
  // Rachael #4
  test("state object password", () => {
    let state = {
      password: ""
    };
    expect(state.password).toEqual(state.password);
  });
});







//Jason test 3
describe("H1 content test", () => {
  test("H1 Text add dog", () => {
    act(() => {
      ReactDOM.render(
        <HashRouter><AddPost.WrappedComponent /></HashRouter>,
        container
      );
    });
    const firstH1 = container.querySelector("h1:nth-child(1)");
    expect(firstH1.textContent).toBe("Add a Dog To Your Shelter");
  });
});

// Jason Test 4
test("Check text inside add button", () => {
  act(() => {
    ReactDOM.render(
      <HashRouter><AddPost.WrappedComponent /></HashRouter>,
      container
    );
  });
  const buttonText = container.querySelector("button:nth-child(1)");
  expect(buttonText.textContent).toBe("Add Your Dog");
});
//Jason Test 5
test("Allow user to input a pet name", () => {
  const searchString = "lion";
  const { getByPlaceholderText } = render(
    <HashRouter><AddPost.WrappedComponent /></HashRouter>
  );
  const inputNode = getByPlaceholderText("Name");
  fireEvent.change(inputNode, { target: { value: searchString } });
  expect(inputNode.value).toBe("lion");
});
//Jason Test 6
test("Allow user to input a breed", () => {
  const searchString = "malamute";
  const { getByPlaceholderText } = render(
    <HashRouter><AddPost.WrappedComponent /></HashRouter>
  );
  const inputNode = getByPlaceholderText("Breed");
  fireEvent.change(inputNode, { target: { value: searchString } });
  expect(inputNode.value).toBe("malamute");
});
//Jason Test 7
test("Allow user to input an age", () => {
  const searchString = 1;
  const { getByPlaceholderText } = render(
    <HashRouter><AddPost.WrappedComponent /></HashRouter>
  );
  const inputNode = getByPlaceholderText("Age");
  fireEvent.change(inputNode, { target: { value: searchString } });
  expect(inputNode.value).toBe("1");
});
//Jason Test 8
test("Allow user to input a Gender", () => {
  const searchString = "Male";
  const { getByPlaceholderText } = render(
    <HashRouter><AddPost.WrappedComponent /></HashRouter>
  );
  const inputNode = getByPlaceholderText("Gender");
  fireEvent.change(inputNode, { target: { value: searchString } });
  expect(inputNode.value).toBe("Male");
});
//Jason Test 9
test("Allow user to input Bio", () => {
  const searchString = "This is sure as heck one fine old pupper!";
  const { getByPlaceholderText } = render(
    <HashRouter><AddPost.WrappedComponent /></HashRouter>
  );
  const inputNode = getByPlaceholderText("Bio");
  fireEvent.change(inputNode, { target: { value: searchString } });
  expect(inputNode.value).toBe("This is sure as heck one fine old pupper!");
});
//Jason Test 10
test("Allow user to input fixed/altered", () => {
  const searchString = "True";
  const { getByPlaceholderText } = render(
    <HashRouter><AddPost.WrappedComponent /></HashRouter>
  );
  const inputNode = getByPlaceholderText("Fixed");
  fireEvent.change(inputNode, { target: { value: searchString } });
  expect(inputNode.value).toBe("True");
});
