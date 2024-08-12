import { Request, Response } from "express";
import { TodoService } from "../services/todoService";

const todoService = new TodoService();

export class TodoController {

    public getAll(req: Request, res: Response): void {
        res.json(todoService.getAll());
    }

    public getById(req: Request, res: Response): void {
        const result = todoService.getById(req.params.id);

        if (result) {
            res.json(result);
        } else {
            res.status(400).json("No Todo with that id found");
        }
    }

    public create(req: Request, res: Response): void {
        const newTodo = todoService.create(req.body);
        res.status(201).json(newTodo);
    }

    public update(req: Request, res: Response): void {
        const updatedTodo = todoService.update(req.params.id, req.body);

        if (updatedTodo) {
            res.json("Todo " + req.params.id + " updated succesfully.");
        } else {
            res.status(404).json("Error updating Todo " + req.params.id);
        }
    }

    public delete(req: Request, res: Response): void {
        const deleteTodo = todoService.delete(req.params.id);

        if (deleteTodo) {
            res.json("Todo " + req.params.id + " deleted succesfully.");
        } else {
            res.status(404).json("Error deleting Todo " + req.params.id);
        }
    }

}

