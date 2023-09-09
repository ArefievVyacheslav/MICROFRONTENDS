export function createStore() {
  const subscribers = []
  let currentFrontend = null
  let tasks = []
  let taskCount = 0
  return {
    get currentFrontend () { return currentFrontend },
    get taskCount () { return taskCount },
    get tasks () { return tasks },
    setFrontend: newFrontend => {
      currentFrontend = newFrontend
      subscribers.forEach(fn => fn())
    },
    setTaskCount: count => {
      taskCount = count
      subscribers.forEach(fn => fn())
    },
    setTasks: tasksArr => {
      tasks = tasksArr
      subscribers.forEach(fn => fn())
    },
    subscribe (fn) { subscribers.push(fn) }
  }
}
