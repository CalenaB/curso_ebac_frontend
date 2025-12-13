const alunos = [{
  nome: "Ana",
  nota: 8
}, {
  nome: "Bruno",
  nota: 5
}, {
  nome: "Carla",
  nota: 7
}, {
  nome: "Diego",
  nota: 4
}, {
  nome: "Eduarda",
  nota: 10
}];
const alunosAprovados = lista => {
  return lista.filter(aluno => aluno.nota >= 6);
};
console.log(alunosAprovados(alunos));
