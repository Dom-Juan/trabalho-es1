function queryExecuter(connection, sql, values) {
    return new Promise((resolve, reject) => {
      console.log(values);
        connection.query( sql, values,
          (error, result) => {
            if (error) reject(error);
            resolve(result);
          }
        );
      });
}

module.exports = queryExecuter;