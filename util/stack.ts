export class StackNode<T> {
  value: any
  next: StackNode<T> | null

  constructor(value: T) {
    this.value = value
    this.next = null
  }
}

export class Stack<T> {
  top: StackNode<T> | null
  size: number

  constructor() {
    this.top = null
    this.size = 0
  }

  push<T>(value: T) {
    const newNode = new StackNode(value)
    newNode.next = this.top
    this.top = newNode
    return ++this.size
  }

  pop(): T | null {
    if (!this.top) return null
    const value = this.top.value
    this.top = this.top.next
    this.size -= 1
    return value
  }
}
