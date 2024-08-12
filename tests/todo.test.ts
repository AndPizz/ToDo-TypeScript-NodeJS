import { TodoService } from "../src/services/todoService";


describe("TodoService", () => {
    const todoService = new TodoService();

    it("should create a new todo", () => {
        const todo = { title: 'Test Todo', description: 'Test Description', completed: false };
        const createdTodo = todoService.create(todo);

        expect(createdTodo).toMatchObject(todo);
        expect(createdTodo.id).toBeDefined();
    });

})