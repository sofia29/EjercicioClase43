const productos = ["Celular", "Cartera", "Taza", "Vaso", "Florero"]

let accion = prompt('¿Qué acción querés realizar en tu carrito de compras? Opciones: borrar, editar, agregar')


//CODIGO POR SI USUARIO QUIERE BORRAR PRODUCTO

if (accion.toLowerCase() === "borrar") {
    
    productoBorrable = prompt("¿Qué producto querés borrar del carrito?")
    
    if (productoBorrable.toLowerCase() === "celular") {
        for (let i = 0; i < productos.length; i++) {
            if (productos[i].toLowerCase() === "celular") {
                productos.splice(i, 1) 
                alert(`El producto fue eliminado con éxito. Tu carrito ahora tiene los siguientes productos: ${productos}`)    
            }
        }

    }
  
    else if (productoBorrable.toLowerCase() === "cartera") {
       for (let i = 0; i < productos.length; i++) {
            if (productos[i].toLowerCase() === "cartera") {
                productos.splice(i, 1) 
                alert(`El producto fue eliminado con éxito. Tu carrito ahora tiene los siguientes productos: ${productos}`) 
            }     
        }
        
    }


    else if (productoBorrable.toLowerCase() === "taza") {
        for (let i = 0; i < productos.length; i++) {
            if (productos[i].toLowerCase() === "taza") {
                productos.splice(i, 1); 
                alert(`El producto fue eliminado con éxito. Tu carrito ahora tiene los siguientes productos: ${productos}`) 
            }
        }

    }

    else if (productoBorrable.toLowerCase() === "vaso") {
        for (let i = 0; i < productos.length; i++) {
            if (productos[i].toLowerCase()  === "vaso") {
                productos.splice(i, 1) 
                alert(`El producto fue eliminado con éxito. Tu carrito ahora tiene los siguientes productos: ${productos}`) 
            }
        
        }
    }

    else if (productoBorrable.toLowerCase()  === "florero") {
        for (let i = 0; i < productos.length; i++) {
            if (productos[i].toLowerCase()  === "florero") {
                productos.splice(i, 1) 
                alert(`El producto fue eliminado con éxito. Tu carrito ahora tiene los siguientes productos: ${productos}`) 
            }
      
        }    

        
    
    }

else {alert(`No ingresaste una opción válida. Tu carrito sigue teniendo los siguientes productos: ${productos}`)}

console.log(productos)

    }

    
//CODIGO POR SI USUARIO QUIERE EDITAR PRODUCTO


else if (accion.toLowerCase() === "editar") {    

    productoEditable = prompt("¿Qué producto del carrito querés editar?")

    if (productoEditable.toLowerCase()  === "celular") {
        for (let i = 0; i < productos.length; i++) {
            if (productos[i].toLowerCase()  === "celular") {
             productos[i] = "Celular Importado"   
                alert(`El producto fue editado con éxito. Tu carrito ahora tiene los siguientes productos: ${productos}`) 
            }
      
        }    

    }


    else if (productoEditable.toLowerCase()  === "cartera") {
        for (let i = 0; i < productos.length; i++) {
            if (productos[i].toLowerCase()  === "cartera") {
             productos[i] = "Cartera animal print"   
                alert(`El producto fue editado con éxito. Tu carrito ahora tiene los siguientes productos: ${productos}`) 
            }
      
        }    

    }

    else if (productoEditable.toLowerCase()  === "taza") {
        for (let i = 0; i < productos.length; i++) {
            if (productos[i].toLowerCase()  === "taza") {
             productos[i] = "Taza apta lavaplatos"   
                alert(`El producto fue editado con éxito. Tu carrito ahora tiene los siguientes productos: ${productos}`) 
            }
      
        }    

    }


    else if (productoEditable.toLowerCase()  === "vaso") {
        for (let i = 0; i < productos.length; i++) {
            if (productos[i].toLowerCase()  === "vaso") {
             productos[i] = "Vaso de plástico"   
                alert(`El producto fue editado con éxito. Tu carrito ahora tiene los siguientes productos: ${productos}`) 
            }
      
        }    

    }

    else if (productoEditable.toLowerCase()  === "florero") {
        for (let i = 0; i < productos.length; i++) {
            if (productos[i].toLowerCase()  === "florero") {
             productos[i] = "Florero de porcelana"   
                alert(`El producto fue editado con éxito. Tu carrito ahora tiene los siguientes productos: ${productos}`) 
            }
      
        }    

    }

    else {alert(`No ingresaste una opción válida. Tu carrito sigue teniendo los siguientes productos: ${productos}`)}

    console.log(productos)
}

    



//CODIGO POR SI USUARIO QUIERE AGREGAR PRODUCTO


else if (accion.toLowerCase() === "agregar") {    

    productoAgregable = prompt("¿Qué producto querés agregar al carrito?")
    productos.push(productoAgregable)
    alert(`Agregaste ${productoAgregable} con éxito. Tu carrito ahora tiene los siguientes productos: ${productos}`)
    console.log(productos)

}


else {
    alert(`No ingresaste una opción váida. Tu carrito sigue teniendo los siguientes productos: ${productos}`)
    console.log(productos)
}


