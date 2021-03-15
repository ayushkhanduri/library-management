const low = require('lowdb');
const path = require('path');
const FileAsync = require('lowdb/adapters/FileAsync');
const { v4 } = require('uuid');

(async () => {
    const db = path.resolve(__dirname + '/../store/book_library.json');
    const adapter = new FileAsync(db);
    const connection = await low(adapter);
    await connection.get('books').each(book => book.isbn = v4()).write();
})()
