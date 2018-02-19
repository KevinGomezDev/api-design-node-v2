import mongoose from 'mongoose'
mongoose.Promise = global.Promise

export const connect = () => {
  return mongoose.connect('mongodb://tester:QMCJXxQTTDNbaUQWBVgUJCTrDqwrymUEeMcNhxPn@ds121898.mlab.com:21898/apidevelopment', {
    useMongoClient: true
  })
}
