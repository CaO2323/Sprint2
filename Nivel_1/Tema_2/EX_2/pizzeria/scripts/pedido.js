db.createCollection('pedido {', {
    validator: {
      $jsonSchema: {
        bsonType: 'object',
        required: ['pedido_id', 'fecha/hora', 'precio_total', 'id_repartidor', 'take_away }'],
        properties: {
          pedido_id: {
            bsonType: 'objectId'
          },
          fecha / hora: {
            bsonType: 'timestamp'
          },
          precio_total: {
            bsonType: 'decimal'
          },
          id_repartidor: {
            bsonType: 'int'
          },
          take_away
        }: {
          bsonType: 'int'
        }
      }
    }
  }
  });