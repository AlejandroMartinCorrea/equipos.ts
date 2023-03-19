import { StreamPipeOptions } from "stream/web";
import Equipos from "./Equipos";
import Motor from "./Motor";

enum Consumo{Bajo=("bajo"),Medio=("medio"),Alto=("alto")}
enum Combustible{Nafta=("nafta"),Diesel=("diesel"),Mezcla=("mezcla")}


class MotorCombustible extends Motor{
   public id:string;
   public cilindros:number;
   private tipoCombustible:Combustible;

   constructor(id:string,descripcion:string,fechaFabricacion:Date,fechaInstalacion:Date,potencia:number,
      eficiencia:Consumo,fabricante:string,cilindros:number,tipoCombustible:Combustible,){

   super(id,descripcion,fechaFabricacion,fechaInstalacion,potencia,eficiencia,fabricante);
   this.id=id;
   this.cilindros=cilindros;
    this.tipoCombustible=tipoCombustible;
   
   }


   }
export class ArchiboEquipos{
   leer(array:any){
      console.log("equipos",array=Equipos);
   }
   agregar(equipo:Equipos,array:Equipos[]){
      if(array.push(equipo)){
         console.log("se agrego un nuevo equipoa",array)
      }}
     verTodo(array){
      console.log(array)
     }
     consultar(descripcion: string, array: Equipos[]){
         let equipoEncontrado = array.find(equipo=> equipo.descripcion=== descripcion)
         if(equipoEncontrado){
             console.log(descripcion, ' Existe en archivo', equipoEncontrado)
             return equipoEncontrado}}
         
         editar(descripcion:string, array: Equipos[], dato: string){
            let datoModificar :any = this.consultar(descripcion,array);
            datoModificar = this.consultar(descripcion,array)
            if(datoModificar){
                datoModificar.descripcion = dato;
                console.log( "equipo modificado ahora la nueva descripcion es:", dato);
               }}
               eliminar(id: string, array: Equipos[]) {
                  let equipoEliminado= array.filter(equipo=> equipo.id != id);
                  if(equipoEliminado){    
                      console.log(equipoEliminado);
                      return array = equipoEliminado;  }}    


                  }
 let motorExplocion=new MotorCombustible("RR","motor explocion",new Date("2015/06/17"),
 new Date("2018/09/02"),100,Consumo.Bajo,"toyota",4,Combustible.Nafta,) 
console.log(motorExplocion)
let motorAltoRendimiento=new MotorCombustible("mar","motor alto rendimiento",new Date("2018/12/10"),
new Date("2020/08/07"),200,Consumo.Medio,"honda",6,Combustible.Diesel,)

     let totalEquipos=[motorExplocion,motorAltoRendimiento]
   let archivos=new ArchiboEquipos;
   //archivos.leer(totalEquipos);
   archivos.eliminar("mar",[])