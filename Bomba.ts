import Equipos from "./Equipos";

class Bomba extends Equipos{
    
    public id:string;
    public caudalEntrada:number;
    public caudalSalida:number;
    public fabricante:string;

    constructor (id:string,descripcion:string,fechaFabricacion:Date,fechaInstalacion:Date,caudalEntrada:number,caudalSalida:number,fabricante:string){
        super(id,descripcion,fechaFabricacion,fechaInstalacion)
        this.id=id;
        this.caudalEntrada=caudalEntrada;
        this.caudalSalida=caudalSalida;
        this.fabricante=fabricante;
        
    }
   
    }
    let bombaSumergible=new Bomba("bms","bomba sumergible",new Date("2022/08/15"),new Date("2023/01/05"),500,450,"belarra")
    console.log(bombaSumergible)
     
    


export default Bomba


