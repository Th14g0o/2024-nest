import { Injectable } from '@nestjs/common';
import { CreateTarefaDto } from './dto/create-tarefa.dto';
import { UpdateTarefaDto } from './dto/update-tarefa.dto';

@Injectable()
export class TarefasService {
  tarefas = [
    { id: 1, titulo: "Criar projeto nest", concluido: false }
  ]

  create(createTarefaDto: CreateTarefaDto) {
    this.tarefas.push(
      {
        id: this.tarefas.length + 1,
        ...createTarefaDto
      }
    );
    return this.tarefas;
  }

  findAll() {
    return this.tarefas;
  }

  findOne(id: number) {
    if (id > 0) {
      const tarefa = this.tarefas.filter((item) => item.id === id);
      return tarefa.length === 1 ? tarefa[0] : null;
    }
    return null;
  }

  update(id: number, updateTarefaDto: UpdateTarefaDto) {
    return `This action updates a #${id} tarefa`;
  }

  remove(id: number) {
    return `This action removes a #${id} tarefa`;
  }
}
