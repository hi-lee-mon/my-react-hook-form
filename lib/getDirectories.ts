import fs from 'fs'
export const getDirectories = (source: string) =>
  fs
    .readdirSync(source, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory()) // ディレクトリのみ取得
    .map((dirent) => dirent.name)
