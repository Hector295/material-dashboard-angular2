import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  selectedFileName: string = 'Subir Foto de Perfil';
  selectedImageUrl: string;
  selectedFile: File;  // Variable para almacenar la imagen seleccionada
  defaultImageUrl = '../assets/img/perfil-default.png';  // URL de la imagen por defecto

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    const file2 = event.target.files[0];
    this.selectedFileName = file2 ? file2.name : 'Subir Foto de Perfil';
    if (file) {
      this.selectedFile = file;

      // Previsualización de la imagen seleccionada
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e: any) => {
        this.selectedImageUrl = e.target.result;
      };
    } else {
      this.selectedFile = null;
      this.selectedImageUrl = this.defaultImageUrl;
    }
  }

  selectedPdf: File;  // Variable para almacenar el archivo PDF seleccionado
  pdfUrl: string;  // Variable para almacenar la URL del PDF

  onPdfSelected(event: any) {
    const file: File = event.target.files[0];
    if (file && file.type === 'application/pdf') {
      this.selectedPdf = file;
      this.pdfUrl = URL.createObjectURL(file);
    } else {
      this.selectedPdf = null;
      this.pdfUrl = null;
    }
  }

}
