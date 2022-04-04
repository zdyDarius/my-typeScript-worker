
// declare const zdy: KVNamespace;

export async function  handleRequest(): Promise<Response> {
 
await zdy.put('key','value');
 const res = await zdy.get('key');

// const a = '2223';
  return new Response( JSON.stringify({data:res}) ,{
    headers: { 'content-type': 'application/json; charset=utf-8' }
  })
}
