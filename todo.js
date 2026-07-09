let tarefas = [];

//Adicionar tarefas
function adicionarTarefa(tarefa){
    tarefas.push(tarefa);
}

//Remover tarefas
function removerTarefa(indice){
    tarefas.splice(indice, 1);
}

//Listar tarefas
function listarTarefas(){
    console.log(tarefas);
}


//testes
adicionarTarefa("Estudar javascript");
adicionarTarefa("Fazer exercícios");
adicionarTarefa("Assistir aula");

removerTarefa(2); 

listarTarefas();