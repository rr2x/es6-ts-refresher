import React from 'react';
import { render, fireEvent, cleanup, waitFor } from '@testing-library/react';
import { DisplayText } from './DisplayText';
import "@testing-library/jest-dom/extend-expect";

jest.mock("./UserTodos"); // existing at: __mocks__/UserTodos.tsx

afterEach(cleanup);

describe("Test DisplayText", () => {
  const userFullName = "John Tester";

  const getUserFullnameMock = (username: string): [Promise<string>, jest.Mock<Promise<string>,[string]>] => {
    const promise = new Promise<string>((res,rej) => res(userFullName));
    // mock existing function
    const getUserFullname = jest.fn(async (username: string): Promise<string> => promise);
    return [promise, getUserFullname];
  }

  it("renders without crashing", () => {
    const username = "testuser";
    const [promise, getUserFullname] = getUserFullnameMock(username);

    const { baseElement } = render(<DisplayText getUserFullname={getUserFullname} />);

    expect(baseElement).toBeInTheDocument();
  });


  it("matches snapshot", () => {
    const username ="testuser";
    const [promise, getUserFullname] = getUserFullnameMock(username);

    const { baseElement } = render(<DisplayText getUserFullname={getUserFullname} />);
    // check if the desired UI and HTML elements are created by the component
    // on cmd, just: "Press u to update failing snapshots".
    // if you want to update the stored snapshot
    expect(baseElement).toMatchSnapshot();
  });

  it("receives input text", () => {
    const username = "testuser";
    const [promise, getUserFullname] = getUserFullnameMock(username);

    const { getByTestId } = render(<DisplayText getUserFullname={getUserFullname} />);
    const input = getByTestId("user-input");

    fireEvent.change(input, { target: { value: username }});

    expect(input).toBeInTheDocument();
    expect(input).toHaveValue(username);
  });

  it("shows welcome message", async () => {
    const username = "testuser";
    const [promise, getUserFullname] = getUserFullnameMock(username);

    const msg = `Welcome to React testing, ${userFullName}`;
    const { getByTestId } = render(<DisplayText getUserFullname={getUserFullname} />);

    const input = getByTestId("user-input");
    const label = getByTestId("final-msg");

    fireEvent.change(input, { target: { value: username }});

    const btn = getByTestId("input-submit");

    fireEvent.click(btn);

    expect(label).toBeInTheDocument();
    await waitFor(() => promise);
    expect(label.innerHTML).toBe(msg);
  });
});