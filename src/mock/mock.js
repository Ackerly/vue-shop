import Mock from 'mockjs'
const Random = Mock.Random
var index = Mock.mock('http://api.com/index', {
  'carousel|4': [
    {
      imgPath: Random.image('800x400', '#04a1f7', '#fff'),
      'id': '@id'
    }
  ],
  'base': {
    'list|4': [{
      'imgPath': Random.image('400x400', '#b7ddf2'),
      'id': '@id'
    }],
    'banner': Random.image('400x100', '#ffcc33')
  },
  recommend: {
    'item|12': [{
      'imgPath': Random.image('400x400', '#dec4e0'),
      'id': '@id'
    }]
  },
  panicbuying: {
    'item|3': [{
      'title': '@last',
      'imgPath': Random.image('400x400', '#dec4e0'),
      'startTime': Random.time(),
      'id': '@id'
    }]
  }
})
export {index}
