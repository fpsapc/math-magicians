import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import renderer from 'react-test-renderer';
import { HashRouter } from 'react-router-dom';
import Layout from '../Layout';

it('render correctly and mathes the snapshot', () => {
  const tree = renderer.create(
    <HashRouter>
      {' '}
      <Layout />
    </HashRouter>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
