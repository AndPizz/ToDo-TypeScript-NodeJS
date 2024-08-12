import { Todo } from "../models/todo";
import { randomUUID } from "crypto";


let todos : Todo[] = [];

export class TodoService{
    public getAll(): Todo[] {
        return todos;
    }

    public getById(id: string): Todo | undefined{
        return todos.find(todo => todo.id === id)
    }

    public create(todo: Omit<Todo, 'id'>): Todo {
        const newTodo = { ...todo, id: randomUUID() };
        todos.push(newTodo);
        return newTodo;
    }

        public update(id: string, updatedTodo: Partial<Omit<Todo, 'id'>>): Todo | null {
        const todoIndex = todos.findIndex(todo => todo.id === id);
        if (todoIndex === -1) return null;
        todos[todoIndex] = { ...todos[todoIndex], ...updatedTodo };
        return todos[todoIndex];
    }

    public delete(id: string): boolean {
        const todoIndex = todos.findIndex(todo => todo.id === id);
        if (todoIndex === -1) return false;
        todos.splice(todoIndex, 1);
        return true;
    }
}