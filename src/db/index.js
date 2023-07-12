import * as SQLite from "expo-sqlite"

const db = SQLite.openDatabase("address.db")

export const init = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql("create table if not exists address (id integer primary key not null, title text not null, image text not null, descripcion text not null);"),
            [],
            ()=> {
                resolve();
            },
            (_, err) => {
                reject(err)
            }
        })
    })
    return promise
}

export const insertAddress = (title, image, descripcion) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql("insert into address (title, image, descripcion) VALUES (?, ?, ?);",
            [title, image, descripcion],
            (_, result) => resolve(result),
            (_, err) => reject(err))
        })
    })
    return promise
}

export const fetchAddress = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql("SELECT * FROM address",
            [],
            (_, result) => resolve(result),
            (_, err) => reject(err))
        })
    })
    return promise
}