import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cadastro } from '../cadastro';
import { CadastroService } from '../cadastro.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

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
}
