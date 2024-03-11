export function isDebug () {
  return process.env.NODE_ENV === 'DEVELOPMENT'
}

export function isProduction () {
  return process.env.NODE_ENV === 'PRODUCTION'
}

export function isStaging () {
  return process.env.NODE_ENV === 'STAGING'
}
