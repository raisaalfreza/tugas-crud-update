const dbpool =require('../config/database');

const updateBuku = (body, idBuku) => {
    const SQLQuery = ` UPDATE buku
    SET nama_buku='${body.nama_buku}', harga_buku='${body.harga_buku}', keterangan='${body.keterangan}'
    WHERE idbuku=${idBuku}`;

    return dbpool.execute (SQLQuery);

}
const getAllBuku = () => {
        const SQLQuery = `SELECT * FROM buku`;
        dbpool.execute(SQLQuery);

        return dbpool.execute(SQLQuery);
    }

    const createNewBuku = (body) => {
        const SQLQuery = `INSERT INTO buku (nama_buku, harga_buku, keterangan) 
                          VALUES ('${body.nama_buku}', '${body.harga_buku}', '${body.keterangan}')`;

                          return dbpool.execute (SQLQuery);
    }

  const deleteBuku = (idbuku) => {
    const SQLQuery = `DELETE FROM buku WHERE idbuku=${idbuku}`;

    return dbpool.execute(SQLQuery);

  }

  const readBuku = async (body, idBuku) => {
    const SQLQuery = `SELECT * FROM buku WHERE idbuku=${idBuku}`;

    const data= await dbpool.execute(SQLQuery);
    return data
}

    module.exports ={
        getAllBuku,
        createNewBuku,
        updateBuku,
        deleteBuku,
        readBuku,
    }