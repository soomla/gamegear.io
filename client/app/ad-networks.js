(function() {

  // Legend: ['Interstitial', 'Video', 'Native', 'Offer Wall', 'Banner', 'Text']

  var adNetworks = [
    {
      name: 'Unity Ads',
      formats: [0, 0, 1, 1, 0, 0]
    },
    {
      name: 'Supersonic',
      formats: [1, 1, 1, 1, 0, 0]
    },
    {
      name: 'mobileCore',
      formats: [1, 1, 1, 1, 1, 0]
    }
  ];


  if (!window.data) {
    window.data = {adNetworks: adNetworks};
  } else {
    _.extend(window.data, {adNetworks: adNetworks});
  }
}());
