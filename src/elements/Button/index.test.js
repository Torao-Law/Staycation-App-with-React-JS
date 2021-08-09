import React from 'react'

import { BrowserRouter as Router } from 'react-router-dom'
import { render } from '@testing-library/react'
import Button from './index'

test("Should not allowed click if isDisable is present", () => {
    const { container} = render(<Button isDisable></Button>);

    expect (container.querySelector("span.disabled")).toBeInTheDocument();
});

test("Should render Loading", () => {
    const { container, getByText} = render(<Button isLoading></Button>);

    expect (getByText(/loading/i)).toBeInTheDocument();
    expect (container.querySelector("span")).toBeInTheDocument();
});

test("Should render <a> elements", () => {
    const { container } = render(<Button type="link" isExternal></Button>);

    expect (container.querySelector("a")).toBeInTheDocument();
});

test("Should render <Link> elements", () => {
    const { container } = render(
    <Router>
        <Button href="" type="link"></Button>
    </Router>
    );
    expect (container.querySelector("a")).toBeInTheDocument();
});



