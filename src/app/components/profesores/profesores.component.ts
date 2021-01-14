import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ProfesoresService } from 'src/app/services/profesores.service';
import { calcularEdad } from 'src/app/functions';

@Component({
    selector: 'app-profesores',
    templateUrl: './profesores.component.html',
    styleUrls: ['./profesores.component.css']
})
export class ProfesoresComponent implements OnInit {
    displayedColumns: string[] = ['image', 'name', 'patronus', 'age'];
    dataSource: MatTableDataSource<any>;
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    constructor(private profesoresService: ProfesoresService) {
        this.profesoresService.get().subscribe((r: any) => {
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

    getEdad = (fecha) => calcularEdad(fecha);

}
