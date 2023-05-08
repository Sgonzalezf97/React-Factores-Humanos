import React from 'react'


function AccessBar() {
    function DarkTheme() {
        let Todo = document.getElementById("root")
        if (Todo.classList.contains("bg-dark")){
            Todo.classList.remove("bg-dark")
            Todo.classList.remove("text-light")
        }else {
            Todo.classList.add("bg-dark")
            Todo.classList.add("text-light")
        }
    }
    
    return (
        <>
            <div class="content-example-barra ">
                <div class="barra-accesibilidad-govco">
                    <button id="botoncontraste" class="icon-contraste" alt="Boton de contraste" title='Contraste' onClick={()=>DarkTheme()}>
                    </button>
                    {/* <button id="botondisminuir" class="icon-reducir" onclick="disminuirTamanio('disminuir')">

                        <span id="titledisminuir">Reducir letra</span>
                    </button>
                    <button id="botonaumentar" class="icon-aumentar" onclick="aumentarTamanio('aumentar')">
                        <span id="titleaumentar">Aumentar letra</span>
                    </button> */}
                </div>

            </div>
        </>
    )
}


export default AccessBar

