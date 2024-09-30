// Saldo inicial de la cuenta
let saldo = 100000;

function operacionesBancarias() {
    let salir = false;

    while (!salir) {
        // Mostrar el menú de opciones
        let opcion = parseInt(prompt(
            "Seleccione una operación:\n" +
            "1. Depósito\n" +
            "2. Retiro\n" +
            "3. Consulta de saldo\n" +
            "4. Salir"
        ));

        switch (opcion) {
            case 1: // Depósito
                let deposito = parseFloat(prompt("Ingrese la cantidad a depositar:"));
                if (!isNaN(deposito) && deposito > 0) {
                    saldo += deposito;
                    alert(`Depósito exitoso. Su nuevo saldo es: $${saldo}`);
                } else {
                    alert("Ingrese una cantidad válida.");
                }
                break;

            case 2: // Retiro
                let retiro = parseFloat(prompt("Ingrese la cantidad a retirar:"));
                if (!isNaN(retiro) && retiro > 0) {
                    if (retiro <= saldo) {
                        saldo -= retiro;
                        alert(`Retiro exitoso. Su nuevo saldo es: $${saldo}`);
                    } else {
                        alert("Error: No tiene suficiente saldo para realizar el retiro.");
                    }
                } else {
                    alert("Ingrese una cantidad válida.");
                }
                break;

            case 3: // Consulta de saldo
                alert(`Su saldo actual es: $${saldo}`);
                break;

            case 4: // Salir
                salir = true;
                alert("Gracias por usar nuestro servicio.");
                break;

            default: // Opción inválida
                alert("Opción no válida, por favor seleccione una opción válida.");
        }
    }
}

// Ejecutar el simulador de operaciones bancarias
operacionesBancarias();
