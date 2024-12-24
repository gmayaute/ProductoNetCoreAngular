import { Component } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { Producto } from '../../models/producto.model';

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.component.html',
  styleUrls: ['./agregar-producto.component.css']
})
export class AgregarProductoComponent {
  producto: Producto = { id: 0, nombre: '', precio: 0, fechaCreacion: '' };

  constructor(private productoService: ProductoService) { }

  agregarProducto(): void {
    this.productoService.agregarProducto(this.producto).subscribe(data => {
      alert('Producto agregado con éxito');
    });
  }
}