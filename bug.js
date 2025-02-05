```javascript
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    // This effect runs after every render
    console.log('Count:', count);
    // Incorrect use of setCount, creates an infinite loop
    setCount(count + 1);
  });

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
}

export default MyComponent;
```