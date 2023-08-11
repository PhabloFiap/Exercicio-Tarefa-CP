class Tarefa{

    constructor(){
    this.arrayTarefa = [];
       


    }

    salvar(){
       let tarefa = this.lerDados();
        
        event.preventDefault();
        this.listaTabela();
       
    }

    listaTabela(){
    let tbody = document.getElementById('tbody');
        tbody.innerText= '';
        for(let i= 0; i< this.arrayTarefa.length; i++ ){
        let tr = tbody.insertRow();

        let tdDescricao = tr.insertCell();
        let tdAutor = tr.insertCell();
        let tdDepartamento = tr.insertCell(); 
        let tdImportancia= tr.insertCell(); 

        tdDescricao.innerText = this.arrayTarefa[i].nomeDescricao;
        tdAutor.innerText = this.arrayTarefa[i].nomeAutor;
        tdDepartamento.innerText = this.arrayTarefa[i].nomeDepartamento;
        tdImportancia.innerText = this.arrayTarefa[i].nomeImportancia;

        //  


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
        

    }
}

var tarefa = new Tarefa()