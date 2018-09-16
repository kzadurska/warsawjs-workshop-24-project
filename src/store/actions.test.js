jest.mock('./api')
import configureStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk'
import reducer from './reducers'
import { readSettings as apiReadSettings } from './api';
import { readSettings } from './actions'
import * as TYPES from './constants';


describe('action', () => {
  let store;
  const mockStore = configureStore([thunkMiddleware])
  
  beforeEach(() => {
    store = mockStore({})
    store.replaceReducer(reducer)
  })

  afterEach(() => {
    store = null
  })

  test('readSettings', async () => {
    expect(store.getActions()).toEqual([])
    
    expect(apiReadSettings).not.toHaveBeenCalled();

    await store.dispatch(readSettings())
      .then(() => {
        expect(store.getActions()).toEqual([
          { type: TYPES.READ_SETTINGS_START },
          { type: TYPES.READ_SETTINGS_END, payload: { status: 'ok' } }
        ])
      })

    expect(apiReadSettings).toHaveBeenCalled();
  })
})