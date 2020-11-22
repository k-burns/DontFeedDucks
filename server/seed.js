const db = require('./db/db')
const {Snack} = require('./models/snacks')

const snacks = [
  {
    name:'avacodo',
    img: '',
    good: false,
    facts: 'toxic. cause cardiac arrest and heart failure'
  },
  {
    name:'onions',
    img: '',
    good: false,
    facts: 'cause diarrhea or vomiting. could cause blood conditions and death'
  },
  {
    name:'citrus',
    img: '',
    good: false,
    facts: 'too much acid. Causes tummy aches. May not be symptoms, but still pain'
  },{
    name:'nuts',
    img: '' ,
    good: false,
    facts: 'too large, could cause choking, cannot digest which leads to death'
  },{
    name:'chocolate',
    img: '',
    good: false,
    facts: 'extremly toxic. Effects digestive and nervous system. Just do not.'
  },{
    name:'popcorn',
    img: '',
    good: false,
    facts: 'hard for ducks to swallow. kernals can cause choking'
  },{
    name:'carbonated drinks',
    img: '',
    good: false,
    facts: 'ducks cannot burp or pass gas. The bubbles will get caught and lead to death'
  },{
    name:'alcohol',
    img: '',
    good: false,
    facts: 'depresses system?'
  },{
    name:'bread',
    img: '',
    good: false,
    facts: 'no health beniifits, can cause death, can make wild ducks too fat to fly'
  },{
    name:'koi food',
    img: '',
    good: true,
    facts: 'has protien and vitamins yum yum!'
  },{
    name:'meal worms',
    img: '',
    good: true,
    facts: 'yummy protien treats'
  },{
    name:'corn',
    img: '',
    good: true,
    facts: 'tasty! They even enjoy nibbling at the cob!'
  },{
    name:'rice',
    img: '',
    good: true,
    facts: 'wait rice makes birds explode? Nope. that is a myth.'
  },{
    name:'weeds',
    img: '',
    good: true,
    facts: 'these are great ducky snacks they can have as many as they want'
  },{
    name:'grass',
    img: '',
    good: true,
    facts: 'ducks love to nibble on grass they can eat to their little hearts content'
  },{
    name:'kale',
    img: '',
    good: true,
    facts: '(torn in little pieces) a good source of calcium. And it floats!'
  },{
    name: 'caffeine',
    img: '',
    good: false,
    facts: 'causes cardiac problems'
  },{
    name:'sugar',
    img: '',
    good: false,
    facts: 'very unhealthy. causes shorter life'
  },{
    name:'salt',
    img: '',
    good: false,
    facts: 'unhealthy. Causes short lives'
  },{
    name:'fatty',
    img: '',
    good: false,
    facts: 'very unhealthy. causes shorter life'
  },{
    name:'spinach',
    img: '',
    good: false,
    facts: 'makes it hard for them to absorb calcium'
  },{
    name:'peas',
    img: '',
    good: true,
    facts: 'yum yum yum! tasty greens'
  },{
    name:'worms',
    img: '',
    good: true,
    facts: 'yummy protien treats, especially if they are alive. Ducks love foraging'
  },{
    name:'scrambled eggs',
    img: '',
    good: true,
    facts: 'good protien snacks. Just do not tell your ducks if they are duck eggs...'
  },{
    name:'live fish',
    img: '',
    good: true,
    facts: 'yummy little protien snacks. Plus they love chasing them!'
  },{
    name:'live fish',
    img: '',
    good: true,
    facts: 'yummy little protien snacks. Plus they love chasing them!'
  },{
    name:'live fish',
    img: '',
    good: true,
    facts: 'yummy little protien snacks. Plus they love chasing them!'
  },

]

const seed = async () => {
  try {
    await db.sync({force: true})

    await Promise.all(
      snacks.map(snack => {
        return Snack.create(snack)
      })
    )
    console.log('Seeding success!')
    db.close()
  } catch (err) {
    console.error(err)
    db.close()
  }
}

seed()
