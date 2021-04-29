const mongoose = require('mongoose')
const Schema = mongoose.Schema

const karyawanSchema = new Schema({
    IDKaryawan: {
        type: String
    },
    NamaKaryawan: {
        type: String
    },
    Alamat: {
        type: String
    },
    Jabatan: {
        type: String
    },
    Status: {
        type: String
    }
    
}) 

module.exports = mongoose.model('karyawan', karyawanSchema)