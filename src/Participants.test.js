import React from 'react';
import { connect } from 'react-redux';
import { shallowWithStore } from 'enzyme-redux';
import Participants from './components/Participants/';
import { createMockStore } from 'redux-test-utils';

describe('example shallowWithStore', () => {
  const ReactComponent = () => (<Participants />);
  describe('state', () => {
    it('state is working', () => {
      const expectedState = 'expectedState';
      const mapStateToProps = (state) => ({
        state,
      });

      const ConnectedComponent = connect(mapStateToProps)(ReactComponent);
      const component = shallowWithStore(<ConnectedComponent />, createMockStore(expectedState));
      expect(component.props().state).toBe(expectedState);
    });
  });

  describe('dispatch', () => {
    it('works', () => {
      const action = {
        type: 'DATA_FETCHED',
      };
      const mapDispatchToProps = (dispatch) => ({
        dispatchProp() {
          dispatch(action);
        },
      });
      const store = createMockStore();
      const ConnectedComponent = connect(undefined, mapDispatchToProps)(ReactComponent);
      const component = shallowWithStore(<ConnectedComponent />, store);
      component.props().dispatchProp();
      expect(store.isActionDispatched(action)).toBe(true);

    });
  });
});
