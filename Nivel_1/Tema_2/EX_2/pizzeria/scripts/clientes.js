db.createCollection('cliente{', {
    validator: {
      $jsonSchema: {
        bsonType: 'object',
        required: ['cliente_id', 'nombre', 'apellidos', 'direccion', 'cp', 'localidad', 'provincia', 'telefono', 'tienda{'],
        properties: {
          cliente_id: {
            bsonType: 'objectId'
          },
          nombre: {
            bsonType: 'string'
          },
          apellidos: {
            bsonType: 'string'
          },
          direccion: {
            bsonType: 'string'
          },
          cp: {
            bsonType: 'int'
          },
          localidad: {
            bsonType: 'string'
          },
          provincia: {
            bsonType: 'string'
          },
          telefono: {
            bsonType: 'string'
          },
          tienda {
            : {
              bsonType: 'objectId'
            }
          }
        }
      }
    });