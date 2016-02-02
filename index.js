class FileSystem {
  static readFile(bytes, path, options){
      return FileSystem._requestQuota(bytes).then
      (FileSystem._requestFileSystem).then
      (function(fs){
        return FileSystem._getFile(fs, path, options)}).then
      (FileSystem._getFileEntry)
  }

  static _getFileEntry(fileEntry){
    return new Promise((resolve, reject) => {
        fileEntry.file(resolve, reject);
    });
  }

  static _getFile(fs, path, options){
    return new Promise((resolve, reject) => {
        fs.root.getFile(path, options, resolve, reject)
    });
  }

  static _requestFileSystem(bytes){
    return new Promise((resolve, reject) => {
      window.webkitRequestFileSystem(window.PERSISTENT, bytes, resolve, reject);
    });
  }
  static _requestQuota(bytes){
    return new Promise((resolve, reject)=> {
      navigator
        .webkitPersistentStorage
        .requestQuota(bytes, resolve, reject)
    });
  }
}
