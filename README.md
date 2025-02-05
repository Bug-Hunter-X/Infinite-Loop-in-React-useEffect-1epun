# React useEffect Infinite Loop Bug

This repository demonstrates a common error in React applications: creating an infinite loop within the `useEffect` hook.  The `useEffect` hook is designed to perform side effects after a component renders, but improperly updating the state within the effect can lead to an infinite rendering cycle.

## Bug Description

The `bug.js` file contains a `MyComponent` that uses the `useEffect` hook to log the current count. However, it also attempts to increment the count using `setCount(count + 1)` within the effect. This causes an infinite loop because every change to the `count` state triggers a re-render, which in turn triggers the effect again, leading to an endless cycle of updates.

## Solution

The `bugSolution.js` file demonstrates how to correctly handle this situation.  The key is to only update the state under certain conditions or use techniques like preventing the infinite loop using dependencies to limit the effect's execution.