import { Request, Response } from "express";
import { LivroRepository } from "../repository/LivroRepository";

export class LivroController {
  
  static async criar(req: Request, res: Response) {
    const { titulo, autor, isbn, anoPublicacao, disponivel } = req.body;

    if (!titulo || !autor || !isbn) {
      return res.status(400).json({ message: "Campos obrigatórios faltando" });
    }

    const livro = LivroRepository.create({
      titulo,
      autor,
      isbn,
      anoPublicacao,
      disponivel
    });

    await LivroRepository.save(livro);
    return res.status(201).json(livro);
  }

  static async listar(req: Request, res: Response) {
    const livros = await LivroRepository.find();
    return res.json(livros);
  }

  static async buscarPorId(req: Request, res: Response) {
    const id = Number(req.params.id);
    const livro = await LivroRepository.findOneBy({ id });

    if (!livro) {
      return res.status(404).json({ message: "Livro não encontrado" });
    }

    return res.json(livro);
  }

  static async atualizar(req: Request, res: Response) {
    const id = Number(req.params.id);
    const livro = await LivroRepository.findOneBy({ id });

    if (!livro) {
      return res.status(404).json({ message: "Livro não encontrado" });
    }

    Object.assign(livro, req.body);
    await LivroRepository.save(livro);

    return res.json(livro);
  }

  static async deletar(req: Request, res: Response) {
    const id = Number(req.params.id);
    const livro = await LivroRepository.findOneBy({ id });

    if (!livro) {
      return res.status(404).json({ message: "Livro não encontrado" });
    }

    await LivroRepository.delete(id);
    return res.status(204).send();
  }

}
