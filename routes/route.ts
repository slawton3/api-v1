import express, { Request, Response } from 'express';

class Route {
    private path: string;

    const router = express.Router();

    constructor(path){
        this.path = path;
    }
    
    public react() {
        return this.router.get(this.path, (req, res) => {
            res.send(`Success`);
        })
    }
}