// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {


  if(req.method !== 'POST'){
    return res.status(200).json({ok:'ok'})
  }
  console.log('server api reached....');
  console.log('waiting for 5seconds started.',new Date());
  setTimeout(()=>{
    console.log('waiting for 5seconds ended.', new Date());
  },5000)
  console.log('url',req.url);
  console.log('body',req.body);
  res.status(200).json('1|OK');
}
