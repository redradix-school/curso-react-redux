const loggerMiddleware = store => next => action => {
  //aquí tenemos acceso a todo
  console.log('Acción', action);
  next(action);
  console.log('Estado', store.getState());
}

export default loggerMiddleware;