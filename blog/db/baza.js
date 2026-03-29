// db.js
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

let link;

try {
    link = await open({
        filename: 'db.sqlite3',
        driver: sqlite3.Database
    });

    console.log('Pomyślnie otwarto plik SQLite');

    const tabele = await link.all("SELECT name FROM sqlite_master WHERE type='table'");
    const nazwyTabel = tabele.map(t => t.name);
    
    if (nazwyTabel.includes('blog_post')) {
        console.log(`Znaleziono tabelę`);
    } else {
        console.warn('UWAGA: Połączono, ale baza jest pusta! Prawdopodobnie jest zła i Node stworzył nowy plik.');
        console.log('Dostępne tabele:', nazwyTabel);
    }

} catch (error) {
    console.error('błąd połączenia z bazą danych:', error.message);
}

export { link };
