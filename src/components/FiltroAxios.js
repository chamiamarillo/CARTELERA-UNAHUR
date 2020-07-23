
const axios = require('axios');

    
     getData = async ()=>{

    const datos = await axios.get('http://181.45.234.123:8095/guarani/3.17/rest/comisiones-aulas?limit=20')

    return datos.data;

    }

