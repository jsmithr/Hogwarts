import { Component, OnInit, ViewChild } from '@angular/core';
import { PersonajesService } from 'src/app/services/personajes.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { calcularEdad } from 'src/app/functions';

@Component({
    selector: 'app-personajes',
    templateUrl: './personajes.component.html',
    styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {
    casas: any[] = [
        { img: 'slytherin.jpg', name: 'Slytherin' },
        { img: 'gryffindor.jpg', name: 'Gryffindor' },
        { img: 'ravenclaw.jpg', name: 'Ravenclaw' },
        { img: 'hufflepuff.jpg', name: 'Hufflepuff' }];
    displayedColumns: string[] = ['image', 'name', 'patronus', 'age'];
    dataSource: MatTableDataSource<any>;
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    constructor(private personajesService: PersonajesService) { }

    ngOnInit(): void {
    }

    getPersonajes(casa: any) {
        this.personajesService.get(casa.name.toLowerCase()).subscribe((r: any) => {
            this.dataSource = new MatTableDataSource(r);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
        });
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
