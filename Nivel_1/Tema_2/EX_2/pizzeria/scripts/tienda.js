
db.createCollection('tienda{', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      required: ['tienda_id', 'direccion', 'localidad', 'cp', 'provincia }'],
      properties: {
        tienda_id: {
          bsonType: 'objectId'
        },
        direccion: {
          bsonType: 'string'
        },
        localidad: {
          bsonType: 'string'
        },
        cp: {
          bsonType: 'int'
        },
        provincia
      }: {
        bsonType: 'string'
      }
    }
  }
}
});