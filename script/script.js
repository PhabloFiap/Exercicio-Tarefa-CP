class Tarefa{

    constructor(){
    this.arrayTarefa = [];
       


    }

    salvar(){
       let tarefa = this.lerDados();
        console.log(tarefa);
        event.preventDefault();
        this.listaTabela();

        this.adicionar(tarefa);
        
        this.listaTabela();
       this.cancelar();
    }

    listaTabela(){
    let tbody = document.getElementById('tbody');
        tbody.innerText= '';//pra nao deixar duplicar os itens fazendo vir vazio
        for(let i= 0; i< this.arrayTarefa.length; i++ ){
        let tr = tbody.insertRow();//cria uma nova linha dentro da tabela (tbody)

        let tdDescricao = tr.insertCell();//insere uma nova coluna e insere ao tdDescricao
        let tdAutor = tr.insertCell();
        let tdDepartamento = tr.insertCell(); 
        let tdImportancia= tr.insertCell(); 
        let tdAcao = tr.insertCell();
//pegando os i pra adicionar os campos
        tdDescricao.innerText = this.arrayTarefa[i].nomeDescricao;
        tdAutor.innerText = this.arrayTarefa[i].nomeAutor;
        tdDepartamento.innerText = this.arrayTarefa[i].nomeDepartamento;
        tdImportancia.innerText = this.arrayTarefa[i].nomeImportancia;

        //  adicionar imagem

        let imgEdit = document.createElement('img');
        imgEdit.src='./img/edit.png';
        tdAcao.appendChild(imgEdit);


        let imgDel = document.createElement('img');
        imgDel.src= './img/del.png';
        imgDel.setAttribute("onclick","tarefa.deletar()")

        tdAcao.appendChild(imgDel);
        }

    }


    adicionar(tarefa){
        this.arrayTarefa.push(tarefa);


    }

    lerDados(){
        let tarefa = {}

        tarefa.nomeDescricao = document.getElementById('idDescricao').value;
        tarefa.nomeAutor = document.getElementById('idAutor').value;
        tarefa.nomeDepartamento = document.getElementById('idDepartamento').value;
        tarefa.nomeImportancia = document.getElementById('idImportancia').value;
        
        return tarefa;  
      }
    //   validaCampos(tarefa){
    //     let msg = '';

    //     if(tarefa.nomeDescricao ==''){
    //         msg +=' Informe a descricao ';
    //     }
    //     if(tarefa.nomeAutor == ''){
    //         msg +=' Informe o nome do autor ';
    //     }
    //     if(tarefa.nomeDepartamento == ''){
    //         msg +=' Informe odepartamento ';
    //     }
    //     if(tarefa.nomeImportancia == ''){
    //         msg +=' Informe a relevancia ';
    //     }
    //     if(msg!= ''){
    //         alert(msg);
    //         return false
    //     }
    //     return true;
    //   }
    cancelar(){
        document.getElementById('idDescricao').value = '';
        document.getElementById('idAutor').value ='';
        document.getElementById('idDepartamento').value ='';
        document.getElementById('idImportancia').value ='';
    }
    deletar(){
        alert('teste delete'); 
    }
}

var tarefa = new Tarefa()