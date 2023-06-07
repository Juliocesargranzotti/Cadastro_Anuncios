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
  cadastro: Cadastro[] = [];
  isEditing: boolean = false;
  formGroupCadastro: FormGroup;
  submitted: boolean = false;

  constructor(private cadastroService: CadastroService, private formBuilder: FormBuilder) {
    this.formGroupCadastro = formBuilder.group({
      id: [''],
      titulo: ['', [Validators.required]],
      preco: ['', [Validators.required]],
      descricao: ['', [Validators.required]],
      date: ['', [Validators.required]],
      img: ['', [Validators.required]],
      status: ['']
    });
  }
  ngOnInit(): void {
    this.loadCadastro();
  }

  loadCadastro() {
    this.cadastroService.getCadastro().subscribe({
      next: data => this.cadastro = data
    });
  }

    }
