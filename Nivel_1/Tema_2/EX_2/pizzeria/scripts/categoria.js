
db.createCollection('categoria {', {
      validator: {
        $jsonSchema: {
          bsonType: 'object',
          required: ['categoria_id', 'nombre(Especial(1), Clásica(2)'],
          properties: {
            categoria_id: {
              bsonType: 'objectId'
            },
            nombre(Especial(1), Clásica(2)):
             {
                bsonType: 'string'
              }
            }
          }
        }
      });