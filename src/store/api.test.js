  test('it should work', () => {
    expect(true).toBeTruthy()
  })

// Test getting settings
describe('settings', () => {
  beforeEach(() => {
    jest.mock('./api', () => {
      return {
        readSettings: jest
          .fn() // jest spy here
          .mockReturnValue(Promise.resolve())
          .mockReturnValueOnce(Promise.resolve({ status: 'ok' }))
      }
    })  
  })


  // jest.mock('./api') // from __mocks__ directory

  test('it should read settings', async () => {
    const api = require('./api')
    const readSettings = api.readSettings

    const expectedResult = { status: 'ok' }
    expect(readSettings).toHaveBeenCalledTimes(0)


    const result = await api.readSettings()
    expect(readSettings).toHaveBeenCalledTimes(1)
    expect(result).toEqual(expectedResult)

    const secondResult = await api.readSettings()
    expect(secondResult).toEqual(undefined)
    expect(readSettings).toHaveBeenCalledTimes(2)
  })

  test('sth should be done', done => {
    const api = require('./api')
    const readSettings = api.readSettings

    readSettings().then(() => {
      expect(api.readSettings).toHaveBeenCalled()
      done()
    })

  })
})
