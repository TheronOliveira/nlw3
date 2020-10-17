const { request } = require('express');
const Database = require('./db');

const saveOrphanage = require('./saveOrphanage');

Database.then(async (db) =>{

    await saveOrphanage(db,{
        lat: "-27.2057496",
        lng: "-49.6182355",
        name: "Lar das Solidário",
        about: "Presta assistência a crianças de 06 a 15 anos ue se encontre em situação de risco e/ou vullnerabilidade social",
        whatsapp: "974745897",
        images: [
            "https://images.unsplash.com/photo-1600712242868-18d4e92fb599?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
            "https://images.unsplash.com/photo-1600711725042-deb9fbaeb1e3?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
        ].toString(),//converte url em texto
        instruction: "Venha como se sentir a vontade e traga muito amor e paciência para dar",
        opening_hours: "Horário de visitas das 08h as 18h",
        open_on_weekends: "1"
    });

    //select todos os campos
    //const selectOrphanages = await db.all("SELECT * FROM orphanages;")
    //console.log(selectOrphanages)

    //atualizar
    /*await db.run(`
            UPDATE orphanages set whatsapp = '957884122', about = 'Presta assistência a crianças de 06 a 15 anos ue se encontre em situação de risco e/ou vullnerabilidade social' where id = 2;
    `)*/

    //deletar
    /*await db.run(`
            DELETE FROM orphanages where id = 4;
    `)*/

      //consultar um orphanage
      const orphanage = await db.all("SELECT * FROM orphanages;")
      console.log(orphanage)
})