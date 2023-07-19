# Assignment: Creating Recaman Sequence on a Number Line using Canvas API in JavaScript

This is the Hosting Page [My Recaman-Sequence](https://64b80fa1dc48e633238ac861--dainty-entremet-900f11.netlify.app/)

## Canvas
![page](https://github.com/sayanghoshofficial/Recaman-Sequence/assets/99132893/5ba695a7-83aa-41ce-9f4b-f204e0fdc6e4)
![ezgif com-video-to-gif](https://github.com/sayanghoshofficial/Recaman-Sequence/assets/99132893/51ae1ff5-5a18-4708-90ae-b239cc4f70d1)



## Functionality
### By incresing the Range Input It create half circle If the current number 'n' is greater than zero and has not been previously used, move 'n' steps backward. Otherwise, move 'n' steps forward.


### The Recamán sequence is a mathematical sequence defined by mathematician Bernard Recamán in 1964. It is a sequence of integers where the next term is determined by subtracting the current term by the current index if the result is positive and has not been previously included in the sequence. Otherwise, the next term is obtained by adding the current term with the current index.

#### More formally, the Recamán sequence is defined as follows:

##### 1. Start with the first term, a[0] = 0.
##### 2. For each subsequent term, a[n], where n > 0:
######    - If a[n-1] - n > 0 and the result is not already in the sequence, then a[n] = a[n-1] - n.
######  - Otherwise, a[n] = a[n-1] + n.

### The Recamán sequence begins: 0, 1, 3, 6, 2, 7, 13, 20, 12, 21, 11, 22, 10, 23, ...

### The sequence continues by applying the rules iteratively to generate the next terms. The uniqueness condition ensures that no two terms in the sequence are the same.

### The Recamán sequence exhibits interesting and sometimes unexpected behavior. It has connections to various mathematical areas, including number theory, set theory, and fractal geometry, and has been studied extensively for its properties and patterns.
