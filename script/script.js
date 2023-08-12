class Tarefa{

    constructor(){
    this.arrayTarefa = [];
       this.id = 1;


    }

    // filtrar(){
    //     const resultadoFiltro = document.getElementById('importanciaOpcao').value;
       
            
    //         resultadoFiltro.sort(() =>{
                
    //         })
                
            

        
    // }
    



    

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

        let tdId = tr.insertCell();
        let tdDescricao = tr.insertCell();//insere uma nova coluna e insere ao tdDescricao
        let tdAutor = tr.insertCell();
        let tdDepartamento = tr.insertCell(); 
        let tdImportancia= tr.insertCell(); 
        let tdAcao = tr.insertCell();
//pegando os i pra adicionar os campos
        tdId.innerText = this.arrayTarefa[i].id;
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
        imgDel.setAttribute("onclick","tarefa.deletar("+this.arrayTarefa[i].id+")");

        tdAcao.appendChild(imgDel);

        console.log(this.arrayTarefa);
        }

    }


    adicionar(tarefa){
        this.arrayTarefa.push(tarefa);
    this.id ++;

    }

    lerDados(){
        let tarefa = {}
        tarefa.id = this.id;
        tarefa.nomeDescricao = document.getElementById('idDescricao').value;
        tarefa.nomeAutor = document.getElementById('idAutor').value;
        tarefa.nomeDepartamento = document.getElementById('idDepartamento').value;
        tarefa.nomeImportancia = document.getElementById('importanciaOpcao').value;
        
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
        // document.getElementById('idImportancia').value ='';
    }
    deletar(id){

        let tbody = document.getElementById('tbody');
        
for (let i = 0; i<this.arrayTarefa.length; i++){
    if(this.arrayTarefa[i].id == id){
        this.arrayTarefa.splice(i,1);
        tbody.deleteRow(i);
    }
}

       
    }


    
}

var tarefa = new Tarefa()