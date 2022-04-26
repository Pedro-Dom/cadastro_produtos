import { Component, OnInit } from '@angular/core';
import { Produto } from '../produto';
import { PRODUTOS } from '../mock-produtos'

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  produtos = PRODUTOS;
  selectedProduto? : Produto;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(produto : Produto) : void {
    this.selectedProduto = produto;
  }

}
