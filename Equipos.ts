class Equipos{
    public id:string;
    public descripcion:string;
    public fechaFabricacion:Date;
    public fechaInstalacion:Date;

    constructor(id:string,descripcion:string,fechaFabricacion:Date,fechaInstalacion:Date){
        this.id=id;
        this.descripcion=descripcion;
        this.fechaFabricacion=fechaFabricacion;
        this.fechaInstalacion=fechaInstalacion;

    } 

    } 
    let equiposriego=new Equipos("rap","equipo riego alta presion",new Date("2015/12/28"),new Date("2019/05/17"),)
console.log(equiposriego);

    export default Equipos
     
