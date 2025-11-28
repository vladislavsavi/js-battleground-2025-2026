// Глубина объекта
// Напишите функцию, которая определяет глубину объекта. Эта функция определяет, сколько раз мы можем максимально «спуститься вниз», обращаясь по ключу.

// Глубину не объектов и пустых объектов мы считаем равной нулю.

function getType(value) {
  const toStringResult = Object.prototype.toString.call(value)
  return toStringResult.slice(8, -1);
}

function depth(obj, currentDepth = 1) {
    if (getType(obj) !== 'Object') {
        return 0;
    }

    const child = Object.values(obj);


    if (child.length === 0) {
        return 0;
    }
    
    let maxDepth = currentDepth;
    for (const value of child) {
        if (value && typeof value === 'object') {
            maxDepth = Math.max(maxDepth, depth(value, currentDepth + 1));
        }
    }

    return maxDepth;
}


const obj = {
  a: 1,
  b: {
    c: 2,
    d: 3,
  },
  e: {
    f: {
      g: 4,
      h: 5,
    },
  },
  i: 6,
};

console.log(depth(obj)); // 3

console.log(depth({})); // 0

console.log(depth(42)); // 0