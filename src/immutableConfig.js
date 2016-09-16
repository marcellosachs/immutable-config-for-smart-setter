import Im from 'immutable';

const immutableConfig = {
  get: ($$obj, propKey) => {
    return $$obj.get(propKey)
  },
  set: ($$obj, propKey, value) => {
    return $$obj.set(propKey, value)
  },
  getKeys: $$obj => {
    return $$obj.keySeq().toArray()
  },
  isObjectOrMap: $$item => {
    return Im.Map.isMap($$item)
  },
  isArrayOrList: $$item => {
    return Im.List.isList($$item)
  },
  push: ($$arr, $$item) => {
    return $$arr.push($$item)
  },
  clone: $$obj => {
    return $$obj // no need to clone since object is immutable
  },
}

export default immutableConfig
