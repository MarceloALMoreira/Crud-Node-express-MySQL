const app = require('./app');

require('dotenv').config();


//se nossa porta nao tiver disponivel podemos ujsar outra usando operador OU
const PORT = process.env.PORT ;

app.listen(PORT, () => console.log(`Server running or porta : ${PORT}`))