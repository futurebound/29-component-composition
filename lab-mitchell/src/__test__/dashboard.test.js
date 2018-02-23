import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
require('jest');

Enzyme.configure({adapter: new Adapter()});

import Dashboard from '../component/dashboard/dashboard';

describe('#dashboard', function() {
  describe('testing initial state', () => {
    test('initial state', () => {
      let mountedDashboard = Enzyme.mount(<Dashboard />);

      expect(mountedDashboard.state('notes')).toEqual([]);
    });
  });
})