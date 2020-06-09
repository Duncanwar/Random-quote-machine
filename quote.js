const text = document.getElementById('text');
const author = document.getElementById('author');
const button = document.getElementById('new');

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

const index = ()=>{
    
    const i= Math.floor(Math.random() * quotes.length)
    text.textContent= quotes[i].quote
    author.textContent= quotes[i].writer
    return {author,i,text}
    
}

index()


button.addEventListener('click',()=>{
index()
console.log(index())}
)