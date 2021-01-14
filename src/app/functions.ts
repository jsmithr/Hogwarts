export const calcularEdad = (fecha) => {
    if (fecha == '')
        return 'No registra fecha';

    fecha = fecha.split('-');
    fecha = fecha[2] + '-' + fecha[1] + '-' + fecha[0]
    let fecha1 = new Date(fecha);
    let fecha2 = new Date();

    let resta = fecha2.getTime() - fecha1.getTime();
    return Math.floor(resta / (1000 * 60 * 60 * 24) / 365);
}