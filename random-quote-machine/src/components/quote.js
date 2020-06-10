const quotes = [{
    quote:'Anyone who has never made a mistake has never tried anything new.',
    writer:'Einstein'
},
{
    quote:'Just Apply',
    writer:'Duncan'
},
{
    quote:'Do it',
    writer:'Emmy'
},
{
    quote:'Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence.',
    writer:'Hellen'
},
{
    quote:'Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence.',
    writer:'Hellen'
},
{
    quote:'Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence.',
    writer:'Hellen'
},
{
    quote:'Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence.',
    writer:'Hellen'
},
{
    quote:'Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence.',
    writer:'Hellen'
},
{
    quote:'Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence.',
    writer:'Hellen'
},
{
    quote:'Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence.',
    writer:'Hellen'
},
{
    quote:'Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence.',
    writer:'Hellen'
},
{
    quote:'Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence.',
    writer:'Hellen'
},
{
    quote:'Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence.',
    writer:'Hellen'
},
{
    quote:'Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence.',
    writer:'Hellen'
},
{
    quote:'It’s likely that a university - being a slow moving giant - will teach you an outdated programming language, outdated “best practices”, and all sort of things that you will need to unlearn over time - not an easy task.',
    writer:'Hellen'
},
{
    quote:'Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence.',
    writer:'Hellen'
}
]

export const index = ()=>{
    
    const i= Math.floor(Math.random() * quotes.length)
    const text= quotes[i].quote
    const author= quotes[i].writer
    return {author,i,text}
    
}
