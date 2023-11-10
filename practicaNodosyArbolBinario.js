
//Escribe una función que dado un árbol binario A, obtenga una copia B del mismo.


// class Nodo {
//     constructor(valor) {
//       this.valor = valor;
//       this.izquierda = null;
//       this.derecha = null;
//     }
//   }
  
//   function copiarArbol(arbol) {
//     if (arbol === null) {
//       return null;
//     }
  
//     let nuevoNodo = new Nodo(arbol.valor);
//     nuevoNodo.izquierda = copiarArbol(arbol.izquierda);
//     nuevoNodo.derecha = copiarArbol(arbol.derecha);
  
//     return nuevoNodo;
//   }
  
//   // Crear un árbol de ejemplo
//   let raiz = new Nodo(5);
//   raiz.izquierda = new Nodo(6);
//   raiz.derecha = new Nodo(7);
  
//   // Obtener una copia del árbol
//   let copiaArbol = copiarArbol(raiz);
  
//   // Mostrar la copia en la consola
//   console.log(copiaArbol);


 //Escribe una función que visualice los nodos que están en el nivel n de un árbol binario.


  class Nodo {
    constructor(valor) {
      this.valor = valor;
      this.izquierda = null;
      this.derecha = null;
    }
  }
  
  function mostrarNodosEnNivel(arbol, nivel) {
    if (arbol === null) {
      return;
    }
  
    if (nivel === 0) {
      console.log(arbol.valor);
    } else {
      mostrarNodosEnNivel(arbol.izquierda, nivel - 1);
      mostrarNodosEnNivel(arbol.derecha, nivel - 1);
    }
  }
  
  // Crear un árbol de ejemplo
  let raiz = new Nodo(1);
  raiz.izquierda = new Nodo(2);
  raiz.derecha = new Nodo(3);
  raiz.izquierda.izquierda = new Nodo(4);
  raiz.izquierda.derecha = new Nodo(5);
  raiz.derecha.izquierda = new Nodo(6);
  raiz.derecha.derecha = new Nodo(7);
  
  // Mostrar los nodos en el nivel 2 del árbol
  console.log("Nodos en el nivel 2:");
  mostrarNodosEnNivel(raiz, 2);