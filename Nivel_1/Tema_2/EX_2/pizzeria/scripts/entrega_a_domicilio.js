db.createCollection('entrega a domicilio {', {
    validator: {
      $jsonSchema: {
        bsonType: 'object',
        required: ['domicilio_id', 'hora ', 'trabajador {'],
        properties: {
          domicilio_id: {
            bsonType: 'objectId'
          },
          hora: {
            bsonType: 'timestamp'
          },
          trabajador {
            : {
              bsonType: 'objectId'
            }
          }
        }
      }
    });