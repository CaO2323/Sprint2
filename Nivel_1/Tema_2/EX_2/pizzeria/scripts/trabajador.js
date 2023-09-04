db.createCollection('trabajador {', {
    validator: {
      $jsonSchema: {
        bsonType: 'object',
        required: ['trabajador_id', 'nombre', 'apellidos', 'nif', 'telefono', 'puesto {', 'tienda{'],
        properties: {
          trabajador_id: {
            bsonType: 'objectId'
          },
          nombre: {
            bsonType: 'string'
          },
          apellidos: {
            bsonType: 'string'
          },
          nif: {
            bsonType: 'string'
          },
          telefono: {
            bsonType: 'int'
          },
          puesto {
            : {
              bsonType: 'int'
            }, tienda {
              : {
                bsonType: 'objectId'
              }
            }
          }
        }
      });