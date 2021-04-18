import React from 'react';
import renderer from 'react-test-renderer';
import Welcome from "./welcome";

it('render correctly', () => {
    const three = renderer
        .create(<Welcome/>)
        .toJSON()
    expect(three).toMatchSnapshot()
})