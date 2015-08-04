(function() {

  // Legend: ['Interstitial', 'Video', 'Native', 'Offer Wall', 'Banner', 'Mediation']

  var adNetworks = [
    {
      name: 'AdMob (Google)',
      formats: [1, 1, 1, 0, 1, 1]
    },
    {
      name: 'Chartboost',
      formats: [1, 1, 0, 0, 0, 1]
    },
    {
      name: 'RevMob',
      formats: [1, 1, 0, 0, 0, 0]
    },
    {
      name: 'Tapjoy',
      formats: [1, 1, 0, 1, 0, 0]
    },
    {
      name: 'InMobi',
      formats: [1, 1, 1, 0, 1, 1]
    },
    {
      name: 'Applovin',
      formats: [1, 1, 1, 0, 1, 1]
    },
    {
      name: 'Unity Ads',
      formats: [1, 1, 0, 0, 0, 1]
    },
    {
      name: 'Supersonic',
      formats: [1, 1, 0, 1, 0, 1]
    },
    {
      name: 'Startapp',
      formats: [1, 0, 1, 0, 1, 1]
    },
    {
      name: 'AdColony',
      formats: [1, 1, 1, 0, 0, 1]
    },
    {
      name: 'MobileCore (IronSource)',
      formats: [1, 1, 1, 0, 1, 0]
    },
    {
      name: 'Inneractive',
      formats: [0, 1, 1, 0, 0, 0]
    },
    {
      name: 'HeyZap',
      formats: [1, 1, 1, 0, 1, 1]
    },
    {
      name: 'Vungle',
      formats: [0, 1, 0, 0, 0, 1]
    },
    {
      name: 'LeadBolt',
      formats: [1, 1, 1, 0, 0, 1]
    },
    {
      name: 'Fyber (Sponsorpay)',
      formats: [1, 1, 0, 1, 0, 1]
    },
    {
      name: 'AppFlood',
      formats: [1, 1, 0, 1, 1, 1]
    },
    {
      name: 'NativeX',
      formats: [1, 1, 1, 1, 1, 0]
    },
    {
      name: 'Trialpay',
      formats: [0, 1, 1, 1, 0, 1]
    },
    {
      name: 'AppsFire',
      formats: [0, 0, 1, 0, 0, 1]
    },
    {
      name: 'AdBuddiz',
      formats: [1, 0, 0, 0, 0, 0]
    },
    {
      name: 'Batch',
      formats: [1, 0, 1, 0, 0, 0]
    },
    {
      name: 'Fuse Powered',
      formats: [1, 1, 1, 0, 0, 1]
    },
    {
      name: 'Pokkt',
      formats: [0, 1, 0, 1, 0, 1]
    }
  ];


  if (!window.data) {
    window.data = {adNetworks: adNetworks};
  } else {
    _.extend(window.data, {adNetworks: adNetworks});
  }
}());
