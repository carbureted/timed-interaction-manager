import { InteractionManager } from 'react-native'

export default {
  ...InteractionManager,
  runAfterInteractions: (callback, maxTime) => {
    var called = false
    var timeout

    if (maxTime) {
      timeout = setTimeout(() => { 
        called = true
        callback()
      }, maxTime)
    }

    InteractionManager.runAfterInteractions(() => {
      if (called) return
      if (timeout) {
        clearTimeout(timeout)
      }
      callback()
    })
  }
}

