import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { EstudiantesService } from 'src/app/services/estudiantes.service';
import { calcularEdad } from 'src/app/functions';
import { MatDialog } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-estudiantes',
    templateUrl: './estudiantes.component.html',
    styleUrls: ['./estudiantes.component.css']
})
export class EstudiantesComponent implements OnInit {

    displayedColumns: string[] = ['image', 'name', 'patronus', 'age'];
    dataSource: MatTableDataSource<any>;
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    constructor(private estudiantesService: EstudiantesService, public dialog: MatDialog) {
        this.estudiantesService.get().subscribe((r: any) => {
            this.dataSource = new MatTableDataSource(r);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
        });
    }

    ngOnInit(): void {
    }

    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();

        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }

    openDialog() {
        const dialogRef = this.dialog.open(EstudianteDialog);

        dialogRef.afterClosed().subscribe(result => {
            result = JSON.parse(result);
            let dateOfBirth = result.dateOfBirth.split('-');
            result.dateOfBirth = dateOfBirth[2] + '-' + dateOfBirth[1] + '-' + dateOfBirth[0];
            this.dataSource.data.push(result);
        });
    }

    getEdad = (fecha) => calcularEdad(fecha);
}


@Component({
    selector: 'estudiante.dialog',
    templateUrl: 'estudiante.dialog.html',
    styleUrls: ['./estudiantes.component.css']
})
export class EstudianteDialog {
    formEstudiante = new FormGroup({
        name: new FormControl('', [Validators.required, Validators.maxLength(20)]),
        patronus: new FormControl('', [Validators.required, Validators.maxLength(20)]),
        dateOfBirth: new FormControl('', [Validators.required]),
        image: new FormControl('', [Validators.required]),
    });

    preview(files) {
        if (files.length === 0)
            return;

        var reader = new FileReader();
        reader.readAsDataURL(files[0]);
        reader.onload = (_event) => {
            this.formEstudiante.get('image').setValue(reader.result);
        }
    }
}