import qs from 'qs'

const isProd = process.env.NODE_ENV === 'production'

const apiBaseUrl =
  process.env.REACT_APP_SAASIFY_API_BASE_URL || 'https://api.saasify.sh'

const githubRedirectUri = `${window.location.origin}/auth/github`
const googleRedirectUri = `${window.location.origin}/auth/google`
const stripeRedirectUri = `${window.location.origin}/auth/stripe`
const spotifyRedirectUri = `${window.location.origin}/auth/spotify`
const twitterRedirectUri = `${window.location.origin}/auth/twitter`
const linkedinRedirectUri = `${window.location.origin}/auth/linkedin`

const githubRedirectQuery = qs.stringify({ uri: githubRedirectUri })

// NOTE: these are all public keys and ids
const saasifyProviderStripePublicKeyTest = 'pk_test_FvYaeQlk6RbGIL9E36p9xNRo'
const saasifyProviderStripePublicKeyLive = 'pk_live_3vousdHKwzzKdrP0quCQPWcr'
const saasifyProviderStripeClientIdDev = 'ca_GqgriKmt3i5JYrKOaHzJbAceDdB0Yc5k'
const saasifyProviderStripeClientIdPrd = 'ca_Gqgr4b80VSYylXdUDsh548bNb1wqdue8'
const saasifyProviderGitHubClientIdDev = '86d73532d0105da51a4d'
const saasifyProviderGitHubClientIdPrd = '6525c812c9b4430147c3'
const saasifyProviderSpotifyClientIdDev = '99702e2b2d9d45b7bb457b4e8a9e7d68'
const saasifyProviderSpotifyClientIdPrd = '99702e2b2d9d45b7bb457b4e8a9e7d68'
const saasifyProviderLinkedInClientId = '78vssc1d6gg0c2'

export default {
  isProd,

  apiBaseUrl,

  // github
  githubRedirectUri: `https://auth.saasify.sh?${githubRedirectQuery}`,
  providerGitHubClientId: isProd
    ? saasifyProviderGitHubClientIdPrd
    : saasifyProviderGitHubClientIdDev,

  // google
  googleRedirectUri,

  // stripe
  stripeRedirectUri,
  providerStripeClientId: isProd
    ? saasifyProviderStripeClientIdPrd
    : saasifyProviderStripeClientIdDev,
  stripePublicKey: isProd
    ? saasifyProviderStripePublicKeyLive
    : saasifyProviderStripePublicKeyTest,

  // spotify
  spotifyRedirectUri,
  providerSpotifyClientId: isProd
    ? saasifyProviderSpotifyClientIdPrd
    : saasifyProviderSpotifyClientIdDev,

  // twitter
  twitterRedirectUri,

  // linkedin
  linkedinRedirectUri,
  providerLinkedInClientId: saasifyProviderLinkedInClientId
}
