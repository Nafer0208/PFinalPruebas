function AbrirModal(id)
{
    $(id).modal("show");console.log("Doble click");
}
function Validar(){
    let Nombre,Direccion,Municipio,Telefono,TermAccept;
    Nombre = document.getElementById("Nombre");
    if(Nombre.value != "")
    {
        document.getElementById("NombreVacio").innerHTML= "";
        Direccion = document.getElementById("Direccion");
        if(Direccion.value != "")
        {
            document.getElementById("DireccionVacia").innerHTML = "";
            Municipio = document.getElementById("Municipio");
            if(Municipio.value != "")
            {   
                document.getElementById("MunicipioVacio").innerHTML = "";
                Telefono = document.getElementById("NumeroTel");
                if(Telefono.value != "")
                {   
                    document.getElementById("TelefonoVacio").innerHTML = "";
                    TermAccept = document.getElementById("TermsAcept").checked;
                   if(CpNuevosCx.IAdquision.value != "")
                   {
                    document.getElementById("MotCompraVacio").innerHTML = "";
                    if(TermAccept == true){
                        document.getElementById("TermsVacio").innerHTML = "";
                        alert("Sus datos han sido guardados con exito");
                    }
                    else{
                        document.getElementById("TermsVacio").innerHTML = "Debes aceptar los terminos y condiciones para continuar";
                        return false;
                    }                   
                   }
                   else
                   {
                    document.getElementById("MotCompraVacio").innerHTML = "Este campo no puede estar vacio.";
                    return false;
                   }
                }
                else
                {
                    document.getElementById("TelefonoVacio").innerHTML = "Este campo no puede estar vacio.";
                    Telefono.focus();
                    return false;    
                }
            }
            else
            {
                document.getElementById("MunicipioVacio").innerHTML = "Este campo no puede estar vacio.";
                Municipio.focus();
                return false;
            }
        }
        else
        {
            document.getElementById("DireccionVacia").innerHTML = "Este campo no puede estar vacio.";
            Direccion.focus();
            return false;
        }
    }
    else
    {   
        document.getElementById("NombreVacio").innerHTML = "Este campo no puede estar vacio.";
        Nombre.focus();
        return false;
    }
}