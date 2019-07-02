import Mock from 'mockjs'
const Random = Mock.Random
let now = new Date()
let startTime = now.setHours(now.getHours() + 6)
let startTime1 = now.setHours(now.getHours() - 1)
var index = Mock.mock('http://api.com/index', {
  'carousel|4': [{
    imgPath: Random.image('800x400', '#04a1f7', '#fff'),
    'id': '@id'
  }],
  'base': {
    'list|4': [{
      'imgPath': Random.image('400x400', '#b7ddf2'),
      'id': '@id'
    }],
    'banner': Random.image('400x100', '#ffcc33')
  },
  recommend: {
    'item|3': [{
      'imgPath': Random.image('400x400', '#dec4e0'),
      'id': '@id'
    }]
  },
  panicbuying: {
    'item': [{
      'title': '@last',
      'imgPath': Random.image('400x400', '#dec4e0'),
      'startTime': startTime,
      'hh': '',
      'mm': '',
      'ss': '',
      'id': '@id'
    },
    {
      'title': '@last',
      'imgPath': Random.image('400x400', '#dec4e0'),
      'startTime': startTime1,
      'hh': '',
      'mm': '',
      'ss': '',
      'id': '@id'
    }
    ]
  }
})

var category = Mock.mock('http://api.com/category', {
  'aside|18': [{
    'title': '@first',
    'list|60': [{
      'title': '@last',
      'imgPath': Random.image('200x200', '#5169b4', '#FFF', 'png', '')
    }]
  }]
})
export {
  index,
  category
}
