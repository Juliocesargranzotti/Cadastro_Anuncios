import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cadastro } from '../cadastro';
import { CadastroService } from '../cadastro.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {

  cadastro : Cadastro[] = [];
  isEditing : boolean = false;
  formGroupClient: FormGroup;
  CadastroService: any;
  submitted: boolean = false;


  constructor (private cadastroService : CadastroService, private formBuilder : FormBuilder){

    this.formGroupClient = formBuilder.group({
      id : [''],
      titulo : ['',[Validators.required]],
      descricao : ['',[Validators.required]],
      preco : ['',[Validators.required]],
      date : ['',[Validators.required]],
      status : ['',[Validators.required]]
    });
  }

  ngOnInit(): void {
    this.loadCadastro();
  }


  loadCadastro() {
    this.cadastroService.getCadastro().subscribe(
      {
        next : data => this.cadastro = data

      }
      );
  }

  save(){

    this.submitted = true;

   if(this.formGroupClient.valid){
    if(this.isEditing)
    {
      this.cadastroService.update(this.formGroupClient.value).subscribe(
        {
          next: () => {
            this.loadCadastro();
            this.formGroupClient.reset();
            this.isEditing = false;
            this.submitted = false;
          }
        }
      )
    }
    else{
      this.cadastroService.save(this.formGroupClient.value).subscribe(
        {
          next: data => {
            this.cadastro.push(data);
            this.formGroupClient.reset();
            this.submitted = false;
          }
        }
        );
    }
 }
}

  clean(){
    this.formGroupClient.reset();
    this.isEditing = false;
    this.submitted = false;
  }

  edit(cadastro : Cadastro){
    this.formGroupClient.setValue(cadastro);
    this.isEditing = true;
  }

  delete(cadastro : Cadastro){
    this.cadastroService.delete(cadastro).subscribe({
      next: () => this.loadCadastro()
    })
  }

  get titulo() : any {
    return this.formGroupClient.get("titulo");
  }

  get descricao() : any{
    return this.formGroupClient.get("descricao");
  }

  get preco() : any{
    return this.formGroupClient.get("preco");
  }

  get status() : any{
    return this.formGroupClient.get("status");
  }

}

