import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent {
  name: string = '';
  description: string = '';
  price: number = 0;
  image: File | null = null;

  constructor(private http: HttpClient) {}

  onFileChange(event: any) {
    this.image = event.target.files[0];
  }

  onSubmit() {
    if (!this.image) {
      alert('Please select an image.');
      return;
    }

    const formData = new FormData();
    formData.append('name', this.name);
    formData.append('description', this.description);
    formData.append('price', this.price.toString());
    formData.append('image', this.image);

    this.http.post('http://localhost:8080/api/items', formData).subscribe({
      next: (res) => {
        alert('Product added successfully!');
        this.resetForm();
      },
      error: (err) => {
        console.error(err);
        alert('Error adding product.');
      },
    });
  }

  resetForm() {
    this.name = '';
    this.description = '';
    this.price = 0;
    this.image = null;
  }
}
