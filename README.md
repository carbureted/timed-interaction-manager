# timed-interaction-manager
Timed InteractionManager for React Native

`npm install timed-interaction-manager`

If you've used react-native InteractionManager before, you may have noticed that it doesn't always fire runAfterInteractions! This is super dangerous, but it works like 95% of the time, so it's potentially still pretty useful even in its buggy state.

There's an open [issue](https://github.com/facebook/react-native/issues/8624), but this package lets you use the same InteractionManager interface while also letting you optionally add a timeout for safety. I like to set the timeout at ~100-200ms longer than I expect any animation to take, but YMMV.

#Usage

## With timeout
```javascript
import timedInteractionManager from 'timed-interaction-manager'

// resolves when interactions complete or 500ms
timedInteractionManager.runAfterInteractions(() => {
  console.log("doing things!")
}, 500)
```

## Without timeout
```javascript
import timedInteractionManager from 'timed-interaction-manager'

// resolves when interactions complete (or potentially never!)
timedInteractionManager.runAfterInteractions(() => {
    console.log("doing things!")
})
```
