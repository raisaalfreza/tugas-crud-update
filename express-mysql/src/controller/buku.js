const BukuModel = require ('../models/buku');
const getAllBuku = async (req, res,)=>{
   try {
    const [data]= await BukuModel.getAllBuku();

    res.json({
        message: 'Data berhasil didapatkan',
        data: data
    })
   } catch (error) {
    res.status(500).json({
        message: 'Server error',
        serverMassage: error,
    })
   }
  
}

const createNewBuku = async (req, res)=> {
    const {body} = req;

    if(!body.nama_buku || !body.harga_buku || !body.keterangan){
        return res.status(400).json({
            message: 'ANDA MENGIRIM DATA YANG SALAH',
            data: null,
        })
    }
    
    try {
        await BukuModel.createNewBuku(body);
        res.status(201).json({
            message:'CREATE new buku success',
            data: body
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server error',
            serverMassage: error,
        })
    }
   
}

const updateBuku = async (req, res)=>{
    const {id} = req.params;
    const {body} = req;
    try {
        await BukuModel.updateBuku(body, id);
        res.json({
            message: 'UPDATE BUKU success',
            data: {
                id,
                ...body
            }
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server error',
            serverMassage: error,
        })
    }   
}

const deleteBuku = async (req, res) =>{
    const {id} = req.params;
    try {
        await BukuModel.deleteBuku(id);
        res.json({
            message: 'DELETE BUKU success',
            data: null
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server error',
            serverMassage: error,
        })
    }
  
}

const readBuku = async (req, res)=>{
    const {id} = req.params;
    const {body} = req;
    try {
   const result= await BukuModel.readBuku(body, id);
        res.json({
            message: 'lihat data',
            data: result[0][0]
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server error',
            serverMassage: error,
        })
    }   
}

module.exports={
    getAllBuku,
    createNewBuku,
    updateBuku,
    deleteBuku,
    readBuku,
}