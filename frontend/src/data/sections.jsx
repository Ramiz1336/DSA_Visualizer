
import sortingAnimation from '../assets/sorting.json';
import searchingAnimation from '../assets/searching.json';
import graphAnimation from '../assets/graph.json';

export const sections = [
  {
    title: "Sorting Algorithms",
    animation: sortingAnimation,
    items: [
      {
        label: "Bubble Sort",
        to: "/sorting/bubblesort",
        desc: "Compare and swap adjacent elements repeatedly on each move",
        docs: "https://www.geeksforgeeks.org/bubble-sort/",
        time: "O(n^2)",
        space: "O(1)",
        best: "O(n)",
        worst: "O(n^2)",
        stable: true,
        fromColor: "from-green-400",
        toColor: "to-green-600",
        code: `
function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}
console.log(bubbleSort([64, 34, 25, 12, 22, 11, 90]));
    `,
      },
      {
        label: "Selection Sort",
        to: "/sorting/selectionsort",
        desc: "Repeatedly select the minimum element and place it at the beginning",
        docs: "https://www.geeksforgeeks.org/selection-sort/",
        time: "O(n^2)",
        space: "O(1)",
        best: "O(n^2)",
        worst: "O(n^2)",
        stable: false,
        fromColor: "from-yellow-400",
        toColor: "to-yellow-600",
        code: `
function selectionSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let minIdx = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIdx]) minIdx = j;
    }
    [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
  }
  return arr;
}
console.log(selectionSort([64, 25, 12, 22, 11]));
    `,
      },
      {
        label: "Insertion Sort",
        to: "/sorting/insertionsort",
        desc: "Build a sorted array by inserting elements into their correct position",
        docs: "https://www.geeksforgeeks.org/insertion-sort/",
        time: "O(n^2)",
        space: "O(1)",
        best: "O(n)",
        worst: "O(n^2)",
        stable: true,
        fromColor: "from-indigo-400",
        toColor: "to-indigo-600",
        code: `
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
}
console.log(insertionSort([12, 11, 13, 5, 6]));
    `,
      },
    ],
  },
  {
    title: "Searching Algorithms",
    animation: searchingAnimation,
    items: [
      {
        label: "Linear Search",
        to: "/searching/linearsearch",
        desc: "Scan each element until the target is found",
        docs: "https://www.geeksforgeeks.org/linear-search/",
        time: "O(n)",
        space: "O(1)",
        best: "O(1)",
        worst: "O(n)",
        stable: true,
        fromColor: "from-green-400",
        toColor: "to-green-600",
        code: `
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
}
console.log(linearSearch([2, 3, 4, 10, 40], 10));
    `,
      },
      {
        label: "Binary Search",
        to: "/searching/binarysearch",
        desc: "Repeatedly divide sorted array to find target",
        docs: "https://www.geeksforgeeks.org/binary-search/",
        time: "O(log n)",
        space: "O(1)",
        best: "O(1)",
        worst: "O(log n)",
        stable: true,
        fromColor: "from-yellow-400",
        toColor: "to-yellow-600",
        code: `
function binarySearch(arr, target) {
  let left = 0, right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}
console.log(binarySearch([2, 3, 4, 10, 40], 10));
    `,
      },
    ],
  },
  {
    title: "Graph Traversals",
    animation: graphAnimation,
    items: [
      {
        label: "Breadth-first Search",
        to: "/graph/bfs",
        desc: "Explore neighbors level-by-level",
        docs: "https://www.geeksforgeeks.org/breadth-first-search-or-bfs-for-a-graph/",
        time: "O(V + E)",
        space: "O(V)",
        best: "O(V)",
        worst: "O(V + E)",
        stable: "N/A",
        fromColor: "from-teal-400",
        toColor: "to-green-600",
        code: `
function bfs(graph, start) {
  const visited = new Set();
  const queue = [start];

  while (queue.length) {
    const node = queue.shift();
    if (!visited.has(node)) {
      visited.add(node);
      console.log(node);
      for (const neighbor of graph[node]) {
        queue.push(neighbor);
      }
    }
  }
}

const graph = {
  A: ['B', 'C'],
  B: ['D', 'E'],
  C: ['F'],
  D: [],
  E: ['F'],
  F: []
};

bfs(graph, 'A');
    `,
      },
      {
        label: "Depth-first Search",
        to: "/graph/dfs",
        desc: "Explore as far as possible along each branch",
        docs: "https://www.geeksforgeeks.org/depth-first-search-or-dfs-for-a-graph/",
        time: "O(V + E)",
        space: "O(V)",
        best: "O(V)",
        worst: "O(V + E)",
        stable: "N/A",
        fromColor: "from-blue-400",
        toColor: "to-blue-600",
        code: `
function dfs(graph, start, visited = new Set()) {
  if (visited.has(start)) return;
  visited.add(start);
  console.log(start);

  for (const neighbor of graph[start]) {
    dfs(graph, neighbor, visited);
  }
}

const graph = {
  A: ['B', 'C'],
  B: ['D', 'E'],
  C: ['F'],
  D: [],
  E: ['F'],
  F: []
};

dfs(graph, 'A');
    `,
      },
    ],
  },
];

export default sections

