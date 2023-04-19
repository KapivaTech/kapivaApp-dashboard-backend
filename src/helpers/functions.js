require('dotenv').config()

let server_url = ""
if(process.env.mode == "live"){
  server_url = process.env.live_server_url
}else{
  server_url = process.env.test_server_url
}
const BASE_URL = process.env.base_url
const STATIC_PATH = process.env.static_path || "/static"

const getRandomFileName = (name) => {
    let ext = name.split('.')
    ext = ext[ext.length - 1]
    return Math.ceil(Math.random() * 100000) + name.replace(/[^a-z0-9]/gi, '_').toLowerCase() + "." + ext;
}

const getStaticUrl = (fileName) => {
    if (fileName === undefined) {
        return server_url + BASE_URL + STATIC_PATH
    }
    return server_url + BASE_URL + STATIC_PATH + "/" + fileName
}

module.exports = {
    getRandomFileName,
    getStaticUrl,
    server_url
}