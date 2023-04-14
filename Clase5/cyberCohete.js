let errorAlDespegue = false;

function etapa(num,duracion) {
    return (new Promise((resolve, reject) => {
        console.log(`Etapa ${num} iniciada a las ${(new Date()).toLocaleTimeString()}`)
        if (!errorAlDespegue) {
            setTimeout(() => {
                console.log(`Etapa ${num} finalizada a las ${(new Date()).toLocaleTimeString()}`)
                resolve();
            }, duracion);
        } else {
            reject(`Etapa ${num} abortada a las ${(new Date()).toLocaleTimeString()}`)
        }
    }))
}

// async function despegueCohete() {
//     console.log("Etapa 1 comenzada a las " + (new Date()).toLocaleTimeString())
//     setTimeout(() => {
//         let ciclo1 = await valorFalla();
//             if (!ciclo1) {
//                 console.log("Etapa 1 finalizada a las " + (new Date()).toLocaleTimeString())
//                 console.log("Etapa 2 comenzada a las " + (new Date()).toLocaleTimeString())
//                 setTimeout(() => {
//                     let ciclo2 = await valorFalla();
//                     if (!ciclo2){
//                         console.log("Etapa 2 finalizada a las " + (new Date()).toLocaleTimeString())
//                         console.log("Etapa 3 comenzada a las " + (new Date()).toLocaleTimeString())
//                     } else {
//                         console.log("Abortar despegue")
//                         return
//                     }
//                 }, 8000);
//             } else {
//                 console.log("Abortar despegue")
//                 return
//             };
//         }, 5000)
// }
// //             setTimeout(() => {
// //                 console.log("Etapa 3 finalizada a las " + (new Date()).toLocaleTimeString())
// //                 console.log("Etapa 4 comenzada a las " + (new Date()).toLocaleTimeString())
// //                 setTimeout(() => {
// //                     console.log("Etapa 4 finalizada a las " + (new Date()).toLocaleTimeString())
// //                 }, 10000);
// //             }, 12000);
// //         }, 8000);
// //     }, 5000);
// // }

function generarError() {
    let timeError = Math.ceil(Math.random() * 50 * 1000)
    console.log("segundo de error= " + timeError)
    setTimeout(() => {
        errorAlDespegue = true
    }, timeError);
}

async function despegue() {
    try {
        await etapa(1, 5000)
        await etapa(2, 8000)
        await etapa(3, 12000)
        await etapa(4, 10000)
    } catch (e) {
        console.log(`Se ha detectado un error. ${e}`)
    } finally {
        console.log("Despegue concretado con exito")
    }
}

generarError();
despegue();

// let timeError = Math.ceil(Math.random() * 50)
// console.log(timeError)
