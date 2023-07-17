const realizar = [
  { id: 1, tarea: "Hacer mercado", completed: false },
  { id: 2, tarea: "Estudiar para la Prueba", completed: false },
  { id: 3, tarea: "Sacar a pasear a Tobby", completed: false },
];

const actividad = document.querySelector("input");
const btnagregar = document.querySelector("button");
const total = document.querySelector("#total");
const realizada = document.querySelector("#reali");
const mi_lista = document.querySelector("tbody");


//Agregar las tareas a partir de la ultima
const nuevaTarea = () => {
  const agregarTarea = actividad.value;
  if (!agregarTarea) {
    alert("Por favor ingrese una tarea");
    return; //oh return false, el fin es, que no se ejecute la otra parte del codigo
  }
  const ultimaActividad = realizar[realizar.length - 1];
  const nuevaActividad = {
    id: ultimaActividad ? ultimaActividad.id + 1 : 1, // se incrementa el ID , se usa operador ternario(si tienes id,damelo y le incrementas 1 sino comienzas en 1)
    tarea: agregarTarea,//la que ingrese el usuario
    completed: false,
  };
  realizar.push(nuevaActividad);
  actividad.value = "";

  printareas();
};

function printareas() {
  let html = "";
  let cantRealizada ;

  for (tarea of realizar) {
    html += `<tr>
         <td>${tarea.id}</td>
         <td>${tarea.tarea}</td>
         <td><input class="inptpintado" type="checkbox" id=${tarea.id} value=${tarea.id}
       ${tarea.completed ? "checked" : ""} onclick="cambiarEstado(${
      tarea.id
    })"></td>
         <td><button class="btnpintado" onclick="borrando(${tarea.id})">X</button></button></td>
         </tr>`;
  }

  cantRealizada = realizar.filter((tarea) => tarea.completed === true).length;
  //console.log("cantidad", cantRealizada);
  mi_lista.innerHTML = html;
  actividad.value = "";
  total.innerHTML = realizar.length; // aqui se muestra o renderiza el total de las tareas
  realizada.innerHTML = cantRealizada;//cantidad de tareas realizadas
  //console.log(cantRealizada)
}



const cambiarEstado = (id) => {
  const tarea = realizar.find((tarea) => tarea.id === id);//El método find() devuelve el valor del primer elemento del array que cumple la función de prueba proporcionada.
  //console.log("encontrado", tarea);

  tarea.completed = !tarea.completed;//si se consigue el primer objeto en false ,pasalo a true y viceversa

  //console.log("estado", tarea);

  printareas();
};


const borrando = (id) => {
  // console.log(id)
  const indexB = realizar.findIndex((tarea) => tarea.id === id);
  // console.log('indexB '+indexB)
  realizar.splice(indexB, 1);
  printareas();
};


printareas();
//evento agregar
btnagregar.addEventListener("click", nuevaTarea);

