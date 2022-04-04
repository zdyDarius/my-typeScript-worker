
// declare const zdy: KVNamespace;

export async function  handleRequest(): Promise<Response> {
 
 const res2 = await zdy.put('key','value');
 const res = await zdy.get('key');
 console.log(res,res2,2)
const a = '222233';
  return new Response( JSON.stringify({data:a}) ,{
    headers: { 'content-type': 'application/json; charset=utf-8' }
  })
}
