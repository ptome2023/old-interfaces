class Jugador {
    constructor(){
        this.turno=false;
        this.fichas =[];
        this.numero;
    }

    getTurno(){
        return this.turno;
    }

    setTurno(turno){
        this.turno =turno; 
    }

    getFichas(){
        return this.fichas;
    }
    


}