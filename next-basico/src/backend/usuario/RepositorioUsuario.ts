import { Usuario } from "@/shared/models/Usuario";
import { PrismaClient } from "@prisma/client";

export default class RepositorioUsuario {
  private static db: PrismaClient = new PrismaClient();

  static async salvar(usuario: Usuario): Promise<Usuario> {
    return await this.db.usuario.upsert({
      where: { id: usuario.id },
      update: usuario,
      create: usuario,
    });
  }

  static async obterPorId(id: string): Promise<Usuario> {
    return (await this.db.usuario.findUnique({ where: { id } })) as Usuario;
  }

  static async obterTodos(): Promise<Usuario[]> {
    return await this.db.usuario.findMany();
  }

  static async deletar(id: string): Promise<void> {
    await this.db.usuario.delete({ where: { id } });
  }
}
