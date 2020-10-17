
const Database = require('./database/db');

const saveOrphanage = require('./database/saveOrphanage');

module.exports = {
    index(req, res){
        //const city = req.query.city
        return res.render('index')
    },

    async orphanage(req, res){
        const id = req.query.id
        try {
            const db = await Database;
            const results = await db.all(`SELECT * FROM orphanages WHERE id ="${id}"`)
            const orphanage = results[0]


            orphanage.images = orphanage.images.split(",")
            orphanage.firstImage = orphanage.images[0]
            //console.log(orphanage[0])

            //orphanage[0].images

            if(orphanage.open_on_Weekends == 0){ //if ternario
                open_on_Weekends = false
            }else{
                open_on_Weekends = true
            }

            return res.render('orphanage', { orphanage })
        } catch (error) {
            console.log(error)
            res.send('Erro no banco de dados')
        }

        return res.render('orphanage')
    },

    async orphanages(req, res){
        try {
            const db = await Database;
            const orphanages = await db.all("SELECT * FROM orphanages;")
            return res.render('orphanages', { orphanages })
        } catch (error) {
            console.log(error)
            return res.send('Erro banco de dados')   
        }
        
    },

    createOrphanage(req, res){
        return res.render('create-Orphanage')
    },

    async saveOrphanage(req, res){
        //console.log(req.body)

        const fields = req.body

        //validaar se todos os campos estao preenchidos
        if(Object.values(fields).includes('')){
            return res.send('Todos os campos devem ser preenchidos')
        }

        try {
             //salvar orphanage
        const db = await Database;
        await saveOrphanage(db, {
            lat: fields.lat,
            lng: fields.lng,
            name: fields.name,
            about: fields.about,
            whatsapp: fields.whatsapp,
            iamges: fields.images.toString(),
            instruction: fields.instruction,
            opening_hours: fields.opening_hours,
            open_on_Weekeds: fields.open_on_Weekeds,
        })

        //redirecionar p/ orphanages
        return res.redirect('/orphanages')
            
        } catch (error) {
            console.log(error)
            return res.send('Erro no banco de dados')
        }
       
    }
}