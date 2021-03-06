const express = require('express')
const app = express();
const rateLimit = require('express-rate-limit');
const morgan = require('morgan');

// Rate limit middleware
const rateLimitMiddleware = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 10,
  message: 'Sua Mensagem exedeu o limite por hora',
  headers: true,
});

app.use(morgan('combined'))
 
app.get('/',rateLimitMiddleware, function (req, res) {
  res.send('Acesso Permitido!')
})

app.listen( process.env.PORT || 30015,() => {
  console.debug('App funcionando na porta :30015')
});
//app.use(rateLimitMiddleware);