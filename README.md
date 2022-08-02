# Telescope
A one-page app that demonstrates a small live sampling of Circa Victor's data.

## Launch Announcement
- [Telescope. A stock ticker for the Political Economy](https://medium.com/circa-victor/telescope-a-stock-ticker-for-the-political-economy-26e884f795ef)

## Resources
- [Planning document](https://quip.com/jKBbAG9eKROl)
- [Design prototype](https://projects.invisionapp.com/share/U5M8SY9TB7E#/screens/306771629)

## Installation

### Install Dependencies

```sh
npm install
```

### Configure Connection to API

1. Navigate to `data/`.
2. Retrieve the test payload by running:
```sh
curl -O https://gist.githubusercontent.com/levibrooke/ad30653f3a223826db6499f4c633007b/raw/382a6c552e6f070209e04c9aad737144239a13c7/telescope.payload.json
```

### Local Development

```sh
npm run dev
```

## Building

```sh
npm run build
```