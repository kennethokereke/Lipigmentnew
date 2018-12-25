import React from 'react'
import Profile from '../Components/Pages/profile'

import renderer from 'react-test-renderer'

it('renders with crashing', () =>{
const rendered = renderer.create(<Profile/>).toJSON();
expect(rendered).toBeTruthy();
});