function saveOrphanage(db, orphanage){
    return db.run(`
        INSERT INTO orphanages 
        (
        lat,
        lng,
        name,
        about,
        whatsapp,
        images,
        instruction,
        opening_hours,
        open_on_weekedens
        )
        VALUES
        (
        "${orphanage.lat}",
        "${orphanage.lng}",
        "${orphanage.name}",
        "${orphanage.about}",
        "${orphanage.whatsapp}",
        "${orphanage.images}",
        "${orphanage.instruction}",
        "${orphanage.opening_hours}",
        "${orphanage.open_on_weekedens}"
        )    
     `);
        
}

module.exports = saveOrphanage;