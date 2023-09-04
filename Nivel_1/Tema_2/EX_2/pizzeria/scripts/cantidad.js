db.createCollection('cantidad {', {
    validator: {
      $jsonSchema: {
        bsonType: 'object',
        required: ['cantidad_id', 'cantidad_pizza', 'cantidad_hamburguesa', 'cantidad_bebidas }', 'categoria {', 'pedido {'],
        properties: {
          cantidad_id: {
            bsonType: 'objectId'
          },
          cantidad_pizza: {
            bsonType: 'int'
          },
          cantidad_hamburguesa: {
            bsonType: 'int'
          },
          cantidad_bebidas
        }: {
          bsonType: 'int'
        },
        categoria {
          : {
            bsonType: 'objectId'
          }, pedido {
            : {
              bsonType: 'objectId'
            }
          }
        }
      }
    });
              }
            });
          : {
            bsonType: 'objectId'
          }, pedido 
            : {
              bsonType: 'objectId'
            }
          }
        }
      }
    });