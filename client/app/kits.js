(function(exports){


  var platforms = {
    ios: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAAwCAYAAACMuVOlAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAitJREFUeNrUmd1xgkAQgIWhAEqgg8QK0ApCB8KjT2oFCRUYn3wMqUCsQFOBWEEogRKy6ywTPO9OQe9cduYGZ9DlY+/2V2dgSdbrdQSXENbrdDodt/mtZwluCSvoqsMzCOfD5QtWdK8uzyDgDrdWcrtsq881ZMiNAhBl/3RIsOIcLiPNV1ZtdToGtvkXlq+yYlvPNmHJSANYwUq6KH005Jvm3gKsWHKA9FUWBMCMXZxseHLS1YI3Q4IzYCiZSELKDzlCM6QUZLkjrKyGAx0BndcXIfNUpCfXvYjzgHSGynNY2yYweTrqmGliZlPwOKQyWMdAOivobHbJ1RU5WKaEvJLObAoeleTCuxkBosTA8yELQUsmgPW2F2fbDdQjsiIHQbgxbHclWnLJFfBkSYqDByaQQwAsZGkxYgKYyQBryJAJZKorMDh4dKlLi66m/rPtMNZ7nLZy7APkoA+QYR8gg15AUmpWQu6ZgE50kCUTyFhlTZd6DC6yobqW7XbXLfGOGrd/SEpHBSPQU1UGoLFY9M4Z1ZRiJzqsQ1DONdtgAezSh5L6Xm6SisE85bbVdf/tNszKzZoLVVrkYk2cMeVSSLLms0Evhq3SgRWEpMMT2wqcBX3eUgUl9Ea2JRcBlZDUWiaWAZXPdDVBNLcIKp1caM+kcD5jSpn+lYd8S2qAEdWJQVfAmyAJFB/yPjj/C6SidLpSTR4av0fYmTAtOUWSewb+ugf6sprPpPwJMACyUcOBEmrErwAAAABJRU5ErkJggg==',
    android: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAAyCAYAAADFhCKTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAiBJREFUeNrsmd1tgzAQxwFlAEZIN2CEMEHLBIXHPDWdIO0EtE95TDJB2AA6QdmgbBBv0N5FZ8lFhviDGEWypROpsXs/H+e/jYkCzbLb7U5gm8CiQP8aLNftFxn4+gQrwVliCPoGF+xb3Rx2vV43cPkA24PjWBMUIbdgGfwfpus7NIwOQn6DIfgX2CNFaylp3grtELQB0FcTvwuL1EOAnGysJGQ8z4+mDkODqD5hCoDFFgPFaBcQ4fZmOQugJVxOlqA82jUNfHpYAt30opNpzOoDtecTCweMMriaNA0oAqdeNc7oiu7/KqhIKEjXVriF8A8q6hAqzvwfyaNH0IImWKkw5oL61JQG/6IOsMUUaZAP5ChG+6wIGtCkPEtALz4gKMspYJ8DN+XFCpZSIHEEu7KNrCtQ175uXxbC4+YCjWt3N0Ma8E2SuOnB1Oi4RC6oshZmPIO6ghrwe64K1+K9uOeAv3EBSiPJ8hmTzMxSaEXLJflcRgPbulhnGXSkCsvoniaYh/WwHtbDelgP62FnhWUzMbEx2EZS3+oe7UxYqgHgY0SnJCIw/k7netT0loJnCJ0Q6XeoP4QKG+HaIWjo1cDDWsK6lC9mBUvydXAEe/U7g+r5bCK8rl9ei0cctv1X6IG2ojwyFV03+aYwJmdp71RlsO01mfJq4GE97B3AdhMsIswJLG3hVPfA7QBY5TINZHvgTDIwRuLf9UCNvor/CTAA5CK9MOxL8koAAAAASUVORK5CYII=',
    unity: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAArCAYAAAAOnxr+AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAzJJREFUeNrMWd2R2jAQFhoKgA6cDnwVYCo40gE88gSuAKgA8sQjdHBQgbkK4g5CKohLyC6zyog9/Z5lXzSjMXCS/Onb1bervaH4D9rxeMzhUUB/hZ4tl8tvfMzgi4BlBGwCfQZ9xIa8ANha/2HYI7gZAUOAuWc4ju0HKDNnETkd52w7Mz2BWxGwrOVyYzB/o77IxESeoM8TgFTmF8mBApvrAN9TreY+aDF/Wh8FkHhqN44hd+g36Fd6YvvpWbbo4jDtmcQoYO/4BF+7s41tDe7RsDVGMK6AubdooPQCG3MXAnbhwAwaujKA/A69Mpg/Dii8YO4AuQBw58ClNgaB/4HMwTvujGk8UGXwYSKQp7Yg0ZSkCk/+C/OVZt7Y3zKygB9oKpAam7yV2uerTaZkXyAphPIIhQfton83TJ04gVKU2SdiUljW0tkUFIkunFGUP+kAWRmc/lMgLXJ05hkStXeTpsoeQI4sclQ6ZO5DlJJdgrQEAyVHjWkwaTDX4d+S7TwpSNq4S45EAKsI+jAMAPnIimDMiSbdI7BmvgNkaShTa/q8Q/YHGshcdN9QjqaB1viDGZYaL3sEKQJSO55xXfV8tBb9tTlZMOTy97gtqPFDoHZBTm9jFU/n1KJ5vhfuNV8TdAbwt0VgLprR/K069VMHsw8fps3Eth1tlLPqu6ro2f0Gx0stdCUHS+vuLHer4OwerSDZoj6wbyE+xsAeDJJWUMpnSwU/vEMaGFgYzKXrYhUL1uKT+5BLnYr/0sBATczawOaxYOnew1O4nNJIn9kf+istC4eAPSVgdaNvWJMlHnJr6WDBB3ZGYTWU1UfMNrjS2semN8MnsKVHwE8t5Wqlsfpqy09lABNnj0DPqUryWbkaaQersGVSwUUyz/1JRbB/1RDP3f6XIbNaGNbHpOQluppHzO0jkoqbVpRomFZWAWscYF4ZDbTlBmq9zIPBQ/jrplNV0klWHwWwlYgr2Na+9BJADpKXHT0RzabFziTbGkLbNDo8u4Qbv3YCVEtAxlSZO7RMyp8Y7fzfNyTmBZl6EujHDWx63CtQRypXOIBjFeUpyAy/AijPphjw3FTW+SvAAB4+a5z9OnEaAAAAAElFTkSuQmCC',
    cocos2dx: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAvCAQAAAAhzqDQAAADM0lEQVRIx6WWz33iOhCAv/i3BWg7UCp43gpiKnikgtjHOQUqACqAnOZobwX4VWCnArQVRB3EHWQPlo0NhkeSuSBG/n2aGWn+wKSo1ZRPSTStFs8/+vYZ2N2lDTUcsDiWUn8LBJpQAbBjI803QKAHYhoMjkzcl2IUxAOPlMRUOv8OyAJeHlli2OviS67pmicsjfwM8dpjKCT7FEgTcixQ8Lu7M42prqEmQJqSAyVL8SP9VdQZSLcsaFhKMXFEi1rK7n9BmpLTMLt02QH1KOVVkMYcTjFqWLA7PkhNqGj4NXb79PpzYHNizZwV8+Nfqdlg2HNZdKEfWk3okzNNpR+6vuiavmO4PzV58kjLAcbu9a5piqG4BQPiecGwmo7RM/ByCwZA1nhStWcgtcS4Nsya6vYG1gaGNkUhlAnwX9D9S3qDTQUNqZqjRbnmangA6qDLuL/JvwKOR97pB1BjsTKdwJacbOoS1PKGk1/DGCXY3p5TSUhIJp3zeOLOuQhwNEBzKRZyN5XAAJQhugHU8AL8uSkuY3kF4nb5A4AdNf4LIAc8DEDSXIzQVRGv/Tr6CmAgvovRj+OyEzXEgDtvihM7HttZ5GGYM7rlnYqKt3GhUDPYSc9Ni3D0kQddswhLw2qUc/lgJz9HRbzSR17tuDSw6IqapsMqCWx7aGttHFFD/1Fyeg5PJ7+dmHBEDPrBO8+RNJRYbZ07xsqxpBhoEmDHcvDaTB9ugE1EWz6eR+c1zGQnGcUxemxkKTtmg28AuaMBNuIjoKQJ1c519oQL/tNrwpMV3+dkA6BbYpysIQJpc20FUobPEo1BDU89qGxt1jS45MWBzlkAGYQuooY3DDOpQ9+HtkYZ7lvbNOaAHzzemdTjBh4BSEMG5GqkoBsREgyz7g2LI8METEMmtRr2GMpuDuirou6ZU8sM1DLH4CnHSTLUq6Eixh2POoLarSuj1AB5hhl32tbnkuz6DKsxeyyOx8lOC+KY4ZlzOO/2A8yCCotjNm4Ip/ORYU8CFGzOO4fGbElgyuqp0W/BCgOUvFKH7mtJeCIBGjY3TGy9XSvSPpuGMmnpRVDAzXkg7p+go+bl8rTyF526TMiOGvgpAAAAAElFTkSuQmCC',
    wp8: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAQAAAC0NkA6AAAH+UlEQVRYw82YXYycVRnHf885552ZnSFIgSqVAitUDBsSIolRiAqTqJUQMVx0DUjpLoIbMRESSeRu38bEjxs1MREK0m2LEDO9gADBC0I/AjEaoyjgokvB3dayLVAW6s7s7rznnMeLdz63u90Sbzw3M/POeZ7/8/3xwv/lEeTDk5zRLZW9AjCpAEMtqklN45mQu7UupGaDnQ2yCrOaXS/XB9H/QZPUXGeqPmeWbcwu4SJZFwckal3ftYebM3cdz+/td6cHWhVEZbtNPajsvpYb+Tyb+GjRtq8Hmosyq6/JPvvM1n/mYgyHDwmSk9QK9VtllM8NFMDjUVUVBRURKxZHYGmO53lw5Hmo2dV8tCLIflf1sHOzGS9cY2gSAxFRI723I4rinCQsII/HH47+YzV9ZGWIHeXCj8w9JRaUgGDa93Q5kRJRcWXqc9w/8hCkLvVrgux3Vb/zUvObyjUNNMPpmQR5JCSJY+nhi++u+lNh5FSIPVfGJ8uXNTyCXT1kBO1n4rEVqT+1dMtYYzmM6f2Ruqp/dFN8euCyRhOLRVd22ilJrxqxqvVQuanweM2mvmZX0aRmh0PtI/V9lasbTS2cxq4KqCLa+i5qLYqiUWLF1R8YuRtUupnT0URlOEDjF2ddXc9IemUWBFFUo0LAE1CMNc4WbckNuLJNiM24BGLU1LX4nV3fgr1mBQH3u6rfc6t9LENjDi2K5tGDQTAiiiNBCAR84ATv6Fu8wYw9HP/GSPG+pYDFJy57V68dfb3rGdc2VdXvPi+OJ+DFKaJEjBiDs7l5Pc2I8Uf9FEd4XaZ1hmP2rdvrbSEnZk1uSpf58vmNcW5LfdtkvQXyzoHLG1EsiCIlG8kIc2FWj8mbcjhMmTK/ZHzkkWU+l4fcOhluSlEBFQFZhG/sefD2Fw9YfAekZofDr8+NoxGJOI3GaHPxQf0jb8XZ0tvfnMvZ7dhQDPED2JGsi3MGZpU4rqJkqQHV3MQq2OjLrjHGi9WWLh1N3ObkU0uKBYnWZA33k62zXXl3JGOZOUfFFAGGA63ikfb4VQCV/LMJNzy6aeuhvYYADlQkgH49oeklUUQAWTyH2YnSTHNIJnVctys4L6oBZlfJUG1poojN4sB5i5s5tEXbISwwcYFckyHSFkvURBj0aRwOaRQdUsgE5Aw7KcFAFSSqgIG9AuZKLvZg2kKqOIWp5Ym9JoS2pBDx6Kd3roftOcikQLyiRIzdrBH1pzAs5jnOdadTIfc/ajyy0W7M5wEH4zHFDBokqutKlBgoWA35AIElRIOIgVdsrc8rk7JBaCVwrqsiEjEFHeSlSQGHSIS4vodOQSInYHRxtP0sgJ4wUT6A7y2tqMO8kGdYi1N0prm+Fbma26jSg2AilMJ9u/4tA7HVTkVY5EKK8ZZdl8hZcVmTFdEFvpqB9HhNbYdry0DSW84kokXZRpZHvbbREy3IDXxR88pGr80kcrbvZkz7rxZXlz/XRjf6iM76/8QbRl96ZJ1krdt25uQnruIg3x+ZeGzdYl9LKkpdxj7YPV5MF6MYRPMyLxEabU00NWmU95b3i+IJUd7rZbbnhConoV1m+o/OS4dYAIxH57rmMkRmFPKaKQiohDJMlCotTbDDzVBGpATPFuf7NJmUDTKWaVF7pVQjITANQz21a2oJLNpJJtUAg77aqlE1gJA/nffLxx6VMYjdEBZQR3bcHOm4ZkhBXw7vOIj97uw/plVWJpenqWzvSeIWbEzg5W1H8xHd5B+j0/LnAhq7soldXlaintF4RJ6MCi9CatIcJI01C/J0REy7PImGBbhcU7Pfpa5m5wxEc/rpvVvqJVi3sBB/Bxh6+0l8dvFYckHmcaBgzQamq56WrQlgoooYONfWFCY11ZZtW/ncLvVALNjGwTv+0qZ2AFuiikxP/Da5NwPFBDhLa7tmOcq0vMlhP+3e3XY0NJ3G+W5ZSc2QWS9wkKGOhiqCRkma2IfbM3ULRDR1ePNAY6s7z3sciiQb7UY+Y4g0sQtxbtcbzDNgNu95PzQ40jwxlvVP8HlYiiISSmZx/7Ynbudg7Boyl8ulfuL+8o8XAgZpjUKCqhFjMThgAQf4Ou/ocfkXh5nmMNOF41PvpXHi3vLPFwKWYGwMWh19oa1H77QSofKzxuby9Y0mBRVsJyjVq2gWAedBbMVW7KB8FjxNOJnNDh7fNaWfbOZu1hILPx15IW/q+enMrAc0dd/NvvaHMFw4OzSlO8sKgojBYlUEVGOIPmSaaRARV3TnJ5cUrmYwKEJWSerPTd91IIo5oF0WPSd1qd/9JX0mKWZNCqvFa4dEQVW0Va4MkJULjVf1y6PH+uf6/vSSmhkOu2/Wx4ulxUxst+ezFiAEtOwar/mb7jzU9UZ++lYHdEus2W1P6E1Lb1cSBb/Wm4FWqiiZ2Iqr/z5uvvPQjqS6bAnqB0F0S6zZ0efkCwv7ysY5MkK33fUCdp4pnlhKDPO/sl+540jqxrLloqy449TMcEjd4D38oLJ+iSxKRFREOlU2Fz/3hytiWPgr4yNPrbwxrrpi51Z9dFMY062lj5nWgk3sFGnBGHFYMvyrssPuue1kLtwanus/qRmS4QA7L5Ib5Wa90ny80F2CiUSWMpnhT1pL9t128vRvJU7r15rdEnPC3RfKVfEKvVTWaVEii/o2r/N3Xhl9P78Hq7+PWPtIzfYvmado7FKzJpMzQVLZa+ZMZx9BZbtcZ6bk20GUtVIJ+C9FFuYLPlrY1AAAAABJRU5ErkJggg=='
  };

  var platformAliases = {
    ios: ['iphone', 'ipad'],
    android: ['google play'],
    unity: [],
    cocos2dx: ['cocos2d'],
    wp8: ['windows phone']
  };

  var kits = [
    {
      name: "Chartboost",
      description: "Chartboost is a San Francisco-based mobile game discovery and monetization platform. The company, which acts as a business engine for mobile games, allows video game developers to create customized interstitial and video ads, promote new games, and swap traffic with one another. Developers have direct access to game data derived from Chartboost-enabled games. As of 2014, Chartboost had been integrated into more than 60,000 games with 12 billion game sessions per month. The company has raised $21 million in funding and has offices in San Francisco and Amsterdam.",
      founded: 2011,
      hq: "San Francisco",
      url: "http://www.chartboost.com",
      github: "http://github.com/chartboost",
      crunchbase: "https://www.crunchbase.com/organization/chartboost",
      downloads: "https://answers.chartboost.com/hc/en-us/sections/200229069-Downloads",
      platforms: ['ios', 'android', 'unity', 'cocos2dx', 'wp8'],
      tags: ['advertising', 'banner ads', 'video ads'],
      favicon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAc9JREFUOI2Vkj9oU1EYxX/ffa+v4aXqEpxEKoho3Bpo87pIERxEnSp2EKFQF7eiRMThranESRTUOjgJOoi420FJUhMUwWehg4t/6KKEmLYx7717HRLbaE0b73i++zv3O4cL/3GKX+6NG+Orbk36AW8H6aFGffecoC4pFR29Mvb6w++ZvRPsVzNuo+68FeQgQBxbJ4D+DZKRc54O3N5ZxrrnagvR/XqQdozh2qZiarYV+n0buD/2zAgyDGAMEUrOXR6tLHff6VlioZpJ6dBZAkm1FX0x55XnfYPaVfIOaTuq5UYrKz070C3nJrIBX8955fl80RtXZW5pkRFiu7H4+f6Rf0aYW/QmEbnQgf3VbDl/o5TNifASZKSz/FALTm7ZoFD0DmvNA4PRiMyurQ/eSZa9uyAzf+cVI3v/MChUM6k45LlAJKJPr64nXriJn49ATfZI2tww8KsZN245zxBW9IA6LnGs3URrQVDZXj0BXxWAv3As4YYDD4Ena01ngjDOirbeCbIdDEaW7cfBWedj/dMZlJ7VWiWSg62noE5tC9L+F2Gs3qsgnY4ktl5hrKsKCRDZEQZAzJuJA9NNe6qW3f9teN8UyHcg3xcMGNEVKPELtsai8iC06xMAAAAASUVORK5CYII="
    },
    {
      name: "SOOMLA",
      description: "The SOOMLA Project is the first virtual economy platform. At the heart of the solution - SOOMLA's open source framework is standartizing virtual economies in games while the platform allows to create and manage virtual economies. The company's core technology is focused on financial algorithms, big data and community based frameworks.",
      founded: 2012,
      hq: "Tel Aviv",
      url: "www.sooml.la",
      github: "https://github.com/soomla",
      crunchbase: "https://www.crunchbase.com/organization/soomla",
      downloads: "https://doorman.soom.la/login",
      platforms: ['ios', 'android', 'unity', 'cocos2dx'],
      tags: ['virtual economy'],
      favicon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAAA3NCSVQICAjb4U/gAAACC0lEQVQokX2SPWgTYRjH//e+711yHwlJLk2sFUNQRM1ga/3AmqmIOjhYrmjmDm4OBt0cRBwzKLjo4lApWHQQRDsILYotRCIuEVFRKsWERC9N73JJk/twSJU01f6m/5/neeD54mQtix5czwPHHd27u6TXV8o/icBjM6TP247Tbq7fvqRNjB1q1gxsgQoHT2zyjK2vlH+53tLHb5VVwyf6+woYAMKoYVqorsJzYbWSR1LXtFP5T8uX3xZNfQ08BThEQ4GA5NoOA9A2rZ1q6NzZk8Rxw7J45eKZgYB8bF9CDcgvC0VJ8rdt50XhQ6VSY6IPspbFaOb69DNvW27MPMdoRtaypNXu8HH1QnoEQObe49zcYm/HubnFibuPAEyODfM71Fa7wxzHFRQpGVcBTKVHoorUWzB+IJkaigFIxCJMlpqmxSijHaPxpVwdTu46ndrTt5PDicGu+FyqdowG5Rnx88yu6DMLha0r72X29Tu7ovt5xgDwcXV6Pq+IgkCp43m6Xs+MHwcwO58PhYOU4wghD18VWCyycQdBEcvV2p2nC9Gg0mm20vuTlBAAS8WvP2p1XhJLet1YM5VQ0HMcTtayDdMaHIgsP7jJM/rPfp68eT95NScPxbHxS7YblPz/ywbgAeC4riYAwMFx3W0m5hmF53U1A+CTRd20zt+6Twjx/gT+wij5Xq3x0XDX/ga6RNskfYuBqQAAAABJRU5ErkJggg=="
    },
    {
      name: "GameAnalytics",
      description: "GameAnalytics is an analytics engine that enables game developers to acquire, retain and monetize players.",
      founded: 2011,
      hq: "Copenhagen",
      url: "http://www.gameanalytics.com/",
      github: "https://github.com/GameAnalytics",
      crunchbase: "https://www.crunchbase.com/organization/gameanalytics",
      downloads: "https://go.gameanalytics.com/signup",
      platforms: ['ios', 'unity3'],
      tags: ['virtual economy', 'analytics', 'data visualisation'],
      favicon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAipJREFUOI2NkrFLG2EYxp/vPqme5vAcQnIuOZXGwVakUhAHbejgWmg6+RcUHZIlGQSvc3GJgSLtYDN2sluG0B5FKRZKvcKVIoJWcrQRCxoCibZNni45iHqCL/zg4/1+z8vLxydwtXQAjwDMAjDbvQ8AHABvA/wL9QzACQAGoarqLwAPgoI6APu64GWWlpaWLw9Yv2nYp9lsZvzwdJBgGEbDP4dCob9B9yQnIIRYF0LQJ5/P75G0Sdqe572bm5s7Jmmvrq66nZ4QgltbW5uQUlaklJRScnFxsUzSHhoactu9A8uylkm+jEQipu/5WJZ1oCiKAp9UKvUbwFfP88baPbPZbD4xDONhpVLp6u3t/dbpl0olvUtK2dP5mufn566UEq7rOiMjI6cAelZWVu4AeC6EKEkpx3xXSokLGziO09Pd3f1TURSMj49PLCwsfI5EIm8URcHa2trdarX6vtMfHh4+w8DAwKamadQ0jfF4vEHyMcn7+/v7OyQ3p6amPmmaxkQicUIyGQ6HPd/f2Nj4LkZHR58eHR298NdSVfWPruuvBgcHz+r1+u3d3d3ZVqvVDwDpdHo7l8tFW62W2dfX98/zvG1Bst80zb1arRYO/NzXVCaT+ZHNZl0BACSnY7GY3Wg0bt0kPDk5eVosFh0ABQUAhBAfDw8Pk9FotN75SEEkk8lKsVh0AThCiNcXJpO8VygUvszMzNQMw2An8/Pzx+Vyeaf9S7MkQwDwH8e+GTmD1K/KAAAAAElFTkSuQmCC"
    },
    {
      name: "DeltaDNA",
      description: "DeltaDNA provides real-time player relationship management solutions for the deep-dive data analysis of player data.",
      founded: 2010,
      hq: "Edinburgh",
      url: "www.deltadna.com",
      github: "",
      crunchbase: "https://www.crunchbase.com/organization/deltadna",
      downloads: "http://www.deltadna.com/sdk/",
      platforms: ['ios', 'android', 'unity'],
      tags: ['analytics'],
      favicon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsSAAALEgHS3X78AAACiElEQVQ4EaVTzU8TURCf2tJuS7tQtlRb6UKBIkQwkRRSEzkQgyEc6lkOKgcOph78Y+CgjXjDs2i44FXY9AMTlQRUELZapVlouy3d7kKtb0Zr0MSLTvL2zb75eL838xtTvV6H/xELBptMJojeXLCXyobnyog4YhzXYvmCFi6qVSfaeRdXdrfaU1areV5KykmX06rcvzumjY/1ggkR3Jh+bNf1mr8v1D5bLuvR3qDgFbvbBJYIrE1mCIoCrKxsHuzK+Rzvsi29+6DEbTZz9unijEYI8ObBgXOzlcrx9OAlXyDYKUCzwwrDQx1wVDGg089Dt+gR3mxmhcUnaWeoxwMbm/vzDFzmDEKMMNhquRqduT1KwXiGt0vre6iSeAUHNDE0d26NBtAXY9BACQyjFusKuL2Ry+IPb/Y9ZglwuVscdHaknUChqLF/O4jn3V5dP4mhgRJgwSYm+gV0Oi3XrvYB30yvhGa7BS70eGFHPoTJyQHhMK+F0ZesRVVznvXw5Ixv7/C10moEo6OZXbWvlFAF9FVZDOqEABUMRIkMd8GnLwVWg9/RkJF9sA4oDfYQAuzzjqzwvnaRUFxn/X2ZlmGLXAE7AL52B4xHgqAUqrC1nSNuoJkQtLkdqReszz/9aRvq90NOKdOS1nch8TpL555WDp49f3uAMXhACRjD5j4ykuCtf5PP7Fm1b0DIsl/VHGezzP1KwOiZQobFF9YyjSRYQETRENSlVzI8iK9mWlzckpSSCQHVALmN9Az1euDho9Xo8vKGd2rqooA8yBcrwHgCqYR0kMkWci08t/R+W4ljDCanWTg9TJGwGNaNk3vYZ7VUdeKsYJGFNkfSzjXNrSX20s4/h6kB81/271ghG17l+rPTAAAAAElFTkSuQmCC"
    },
    {
      name: "AdColony",
      description: "AdColony is a mobile video advertising platform. AdColony works with Fortune 500 brands and more than 85% of the world’s top grossing publishers. AdColony is a division of Opera Mediaworks and has offices in Los Angeles, San Francisco, Seattle, New York, London and Helsinki.",
      founded: 2011,
      hq: "Los Angeles",
      url: "http://www.adcolony.com/",
      github: "https://github.com/AdColony",
      crunchbase: "https://www.crunchbase.com/organization/adcolony",
      platforms: ['ios', 'android', 'unity', 'adobeAIR'],
      tags: ['video ads', 'mobile video', 'virtual economy', 'ads'],
      favicon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAiZJREFUOI2NUl1Ik2EUft7NljLoop+rWd2ayAIpMouZUGTibkzNbOBWqxmL7O9SKaFWRCgJJS0iSjMkUVtG0Y85TAsiuqlFEWIFa04lSjD99n3v00Vuzi9HHTgXL4fn55znBUnxnw2SkJLOO12BJ7NvgX8A5oHrT/nu7z1wmDMKUxIgVefZtr/VJE/bS6soJU/ECQyYKwJAODJxUdNwlUBufOB0e/uH+h/2TP2Kpedkr4EQuDCHSlLeVFA0rEk2JCsrKuuvXLvxufmSv8++0xGKqexOXi9BUOlwB1WNN/XWz55vimqSZd2BRx11J32jSbMEAUhaPN6j1IMrdrsGSBZLyfwd9oqYJnlOd1wRt3lm5GtkcDam/KfPnveokvsjYxNDJJFlzWM4Mv5Gr54gGB373qKovE0SuRsKp901R+jxHuPklNJYVFIW7ezujS4EJikEScQ0NIJY4ah2WhaZMgqtOdk/w98ixuXLlo6/C31Y3d7qtwggDEBAV38SAGzlVa5bHW3XXxoNKAeQuc9TG0pPN6WRIkNV1UH/5cZaAK//IomnYNtaMiIl16sqvduKS6lqbP0xOd20x1nD4MDQp4XskxRpcaLg43trresKXrmqK02rVlpCRgOazebFWTFFgW3zxl1663oHgiQ6uwLtBw8d/3K398ELknj/cbhFStalUp/3kUgC5kxF1dgmJZdIyS2pLq9PQQCgRvgMwIwQaNAfOqV9AL8B0AxNfV3k8u8AAAAASUVORK5CYII="
    },
    {
      name: "Unity Analytics",
      description: "Unity Analytics (formerly Playnomics) is a predictive analytics and messaging platform helping mobile apps and free-to-play games to earn from players.",
      founded: 2009,
      hq: "Copenhagen",
      url: "https://unity3d.com/unity/analytics",
      github: "https://github.com/unity-technologies",
      crunchbase: "https://www.crunchbase.com/organization/unity-technologies",
      downloads: "https://unity3d.com/get-unity",
      platforms: ['ios', 'android', 'wp8', 'windows', 'windows store apps', 'mac', 'linux'],
      tags: ['analytics'],
      favicon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAAA3NCSVQICAjb4U/gAAABoElEQVQokWNU0jFnIAUwkaSagYGBBY+cmbGhtaWpvq42KwtLdHI2Pg0JMeG15YUMDAzfvn/n4uRkYGAQFRF+/eYtAwMDs6CYDLLSAB+PmIhgaSnJw8dO5hZX//3z18zEkIGB4enzFxcvX2NgYGBQ0jGHo/beyf///1+3aRtc5P///4kZBQePHH/0+AlEBOGkzJT4kvzM1JySfQePQET2bFn17v2Hg0eO62pr2llboPihoaokNjLk0+fPbs72ibHhzEzMnJwcivJyJnYeDAwMZ85fnDprAYoGFhZmGIOFlZWViZGJlZWVgYHh75+/DAwM//////fvL9QlcOf2T5kFcTFc5OGjJ69ev1HSMe+bPPP////ofpg8Y+6/f3/nTe9fs2FLeW0LAwODk3fInUvHrS1MjQx0nzx7DlGGEqynz154/uKlhLiYh4uDrrbWnbv3f/3+3dZQpSAnO3HanAuXrjIwMDBiTUsp8VGVJXkMDAzfvn3n4uJkYGCwdPJ59foNTg0MDAxMTEwWpsbWlqb6OlpMzMxRiZkQcZwacAGSUysAzMmZ99Y8DDUAAAAASUVORK5CYII="
    },
    {
      name: "Unity Ads",
      description: "Unity Ads is the top performing video ad network.",
      founded: 2005,
      hq: "Copenhagen",
      url: "https://unityads.unity3d.com/",
      github: "",
      crunchbase: "https://www.crunchbase.com/product/unity",
      downloads: "https://unityads.unity3d.com/help/Documentation%20for%20Publishers/Downloads",
      platforms: ['ios', 'android'],
      tags: ['ads', 'video ads', 'monetization', 'advertising'],
      favicon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAoBJREFUOI2Nk09I03EYhz8aGLjATGrOjA2dCglWagvSoENRB2l18N88OWudIiQtmRXOIUZl2qE/ZGoRi9ZwlTq2kw4RgqVoQZpjsO2nbU0zNotUqn06iEObZQ98Ly88D7y8fIH/RKlUGnJycu7k5ebyXE0NV+Yx/5Kqq68ZZmbeqcbHJzA/Pw+RSIRwOIyEhEQYhgbVspiYrti/ybb+/pIBu1FlMDxFOByGRqPBtqQkLC4u4NvXEB401B9eV6y/ohOOHjvOoqITtFgsFASBJDk6OkYArL14ieLtW9h218ooubGpSZBnZFChUHBpaYmrycvP58GCApJkikTCsvLytQFdU6sgk0kpT0+n1+ulx+PhpHOSgtfL1rbbBMDe3j4Gg0EWFxczOzubZrO5EgCgvaoXRPGbKZfLOel0Upiaps/n50xgllPTHwmApWUq/vj1k8FgkJ2dnUxJ3UWT6WUlqs93uzfFghKJhGKxmADWfW63J7KOy+VipVr9HgBijzR+GaxQaeD3+yFOTkb/gB2venrR12eBzWaD8bkJAND16HFkXZ/PB7t9cHcoFKoAADjc7hJ1lYYAqNPp+CcXamoJgIIwRZLU6/VEXBzv3e8wRqoOx1hJ1enliFarXRP4vrBAAFSePEWSlEqlLCw8FH3G1yOOkqozZ5fvXVfHubm5SMRoNBEATd3dBMDLDdejAwBgMJsrXt1scVvb2wmAWVlZbG5u5tjYW+5XHGDi1kTukEr5rLTctW5gNTdabnHP3n2MF8UTAFNTd1Imk1Gemcmh4WEjsMFnAgCr1Wqc9n3K+zwbSH8zPALnhwmkpWWip8e8oRtFIOCr6Hr4pMM89MK9MvsNLTuSVgAI/zUAAAAASUVORK5CYII="
    },
    {
      name: "Cocos2d-x",
      description: "Cocos2d-X is a suite of open-source, cross-platform, game-development tools used by thousands of developers all over the world.",
      founded: 2010,
      hq: "Beijing",
      url: "http://www.cocos2d-x.org/",
      github: "https://github.com/cocos2d/cocos2d-x",
      crunchbase: "https://www.crunchbase.com/product/cocos2d-x",
      downloads: "http://www.cocos2d-x.org/download",
      platforms: ['ios', 'android', 'wp8', 'mac', 'windows'],
      tags: ['game development'],
      favicon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAvNJREFUOI1dkctrXGUYxn/vd86cc+Y+IU1sjE1EJSaiARcFLUSNWpcWKeJCbLeCLrsQRClIceEfoNR6AREFRTBkoYgExEXaSqmQZpLWXM2kTZtMJpk5p+fMnO/7XCRe4gvv6uF5eC4yXLVn5FbtnOkkLogFEBF0s4H2ArxsDqs1B8+Kyvip7e1/W4Z/Xr0rygQY+y8uQpKmHHnvNL+deofB4VFsOzmoIQK4sUo37wQmbh/AOhkP94evOXniBOfsEn9MTyGe/z8TFtOOAlfvtMBYbDZA5QJMLo/+9gJTb75C75FBTKfD8vkPuXD1IgOPP4FN4gMiTumpl89iLBiDRbhx+VeunHqOwaFhqtUqKEU3Qmu9ypWZG5SGHgWz14nVGqV3W+x9SKMR8q5ewbgea2trFAoFtNZ0dXczWipz6NI3tOt3QNQ/DtTf5GR5gc2vPuL5p8eYmJhkvVajtlZjdnYWRLEzP89LY89Sn7mMKLVfIrim2QJrieOI8d2rJO1XeWRkhHp9m9WVFbK5LGErxIhgNrco9vVg98lgcXWzhdWWRjvi2PhxFhcX+HFyAj/IMn78BXSaMvn9d0xPX+To6Cj+4Qf/EwFc3Qqx2pJxFOs3N9AafpqaohnFlCoVSuUKn33xJQD39R0m3moQNLZwiiXAokwrRO828RPN74u3iaKQZhRzz/lPuD5/nYVr1+j5+FMAIit0Pv+AtLGLiZO9Gb3+o2dtqlFas9zs8FB2l2Iuz9xajbHeHgrFIjPVObo2blGpFNgcew1/YAQ6HWy7jRSffMMizl4k18f/c4pnHuuj51APC0vLRPFdPBFC02HO7aP84uuII6hcgIg9KIC1aJMSLf3C/f42kgkwjkOcttnpepjysZM4uTyS9VDZLKIsLuKGCHmswcbbEG4QBFlWogTbTFCOIZOv4BlFUr1Epn8It7sXOhpcN3Rl4N4zZvXm+2JNRYIyTtCFA2T2dxLHQXwP8X2U72ESTVqvo/KFHel+4K2/AAWoasXk7RPQAAAAAElFTkSuQmCC"
    },
    {
      name: "Applovin",
      description: "AppLovin is a mobile advertising technology company that enables brands to acquire and re-engage customers on mobile.",
      founded: 2012,
      hq: "San Francisco",
      url: "https://www.applovin.com/",
      github: "https://github.com/AppLovin",
      crunchbase: "https://www.crunchbase.com/organization/applovin",
      downloads: "https://applovin.com/developers",
      platforms: ['ios', 'android'],
      tags: ['ads', 'analytics', 'ad targeting'],
      favicon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAAA3NCSVQICAjb4U/gAAAB2ElEQVQokZVSS2hTQRS9dz4vLxNraWypBkUk2li1EbsRVLpRhFLBD6JWXalQBEFBodnqRnRTtSCC6EpEBDU7cZVFFPyAVMRujE2oGkhVgmkzfXnzZsaFv9CnFu/y3Hvu59yDIpOF/wn2R1QqDQAupySUCiMgpbre331jYI3nazMvQWpzZuOy2y8mjz54PbqtywvmUkIrEbw/PjWyJ33MU9fyE0BwvpUaemRXz+l7Y4fujp3dsQ5m1b8I0toNba4KTGE2AEbflqu7k3Fp7N8n1NWlfb1777yMRFiUk6Hsm+GBHpjxm0so33LgR3tjB5OLHISHxapGCKwFSuJG9y1vy5Vr/Ocx7Jc4UGsc37q672p+f6ojsTCCgJWZxsXn73NDm87nizLmCEYAAEUmK5U5lV6cXtHewslEZbpS8z7VfWNtxwKns8VdGo9xh41/qJ57UhIuY8rCSsESrdEjN5+NHuwdzhXAoYAIAGAt+Pry9tTJR69OrE8c7mq/VaoShlCoq1VLWi/sXFuamgaHCkoEQUFQUAIR9rT45Up/9+ZU5+OPXxkiikzWAHi+Tsb4OxkIHv69TXBS9jVQIhDYd2mjDp30TbgaAATFz8a6jJBmlRCAzzXB72j2zzcznK+3yBKdxQAAAABJRU5ErkJggg=="
    },
    {
      name: "Nextpeer",
      description: "Nextpeer is a multiplayer cross platform SDK for iOS, Android and Unity. ",
      founded: 2013,
      hq: "Tel Aviv",
      url: "https://www.nextpeer.com/",
      github: "https://github.com/Nextpeer",
      crunchbase: "https://www.crunchbase.com/organization/nextpeer",
      downloads: "https://developers.nextpeer.com/login?p=%2Fdownload",
      platforms: ['ios', 'android', 'unity', 'cocos2dx'],
      tags: ['social integration'],
      favicon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAARZJREFUOI3d0j8vg1EUBvDf2z8Gg9AmYhELk0TSRWK0+AQ2g0VIiE3SRadOTWz4AAaTxGQSG5OlH4BFmCQtrWgkVTX0vvJ60y/AWW7ufc55znmec/nzESUv/UoJ8iiijU5UrQ/Dx/GCz0wKjLCFaxxjKrwnYxlXWIJMCpzBDmaxjhoKKZJn3KIJuRTBCuYS8tbwjnK/UuphFyPYQ+uHIHQYwyqy+AokWWyghwbKofAcraha/zXBNBbwEUYvBj/y2A45GdzgMS7KJfQ94QhdHIbuWWyGU5jkDO14O7GJ8zjABWpRtd7BG/Zxin7Iu8Nl0rSYoIBFTMZA6NAMuk9wb7DahyRBFCTkMIFXdId8nlEDkxtp/B/EN0YaS/KMlo5TAAAAAElFTkSuQmCC"
    },
    {
      name: "AdMob",
      description: "AdMob is one of the world's largest mobile advertising platforms and claims to serve more than 40 billion mobile banner and text ads per month across mobile Web sites and handset applications,",
      founded: 2006,
      hq: "Mountain View",
      url: "https://www.google.com/admob",
      github: "https://github.com/googleads/googleads-mobile-plugins",
      crunchbase: "https://www.crunchbase.com/organization/admob",
      downloads: "https://developers.google.com/mobile-ads-sdk/download",
      platforms: ['ios', 'android', 'webos', 'flashlite', 'wp8'],
      tags: ['mobile ads', 'monetization'],
      favicon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAfhJREFUOI2Vkz1oU1EUx3/nvXvfS15jqnVwcHHwA4UqdNAWKoomBcGhWNGpk8XFxUEUcRaFqKtTEQyC7urgUBoQtNRNFCsIbSF0qI3WNk1y38d1SJDmQ8S7HDic/4/zP+ceyRfsODAdm+oA//Fcr68CXJF8wa71EtfCVowttQgyGtJK8Nx2iOolXqvDzTFNmAi5QcXeXcL7rxGlzxEvP8Z/ILGpDjid4g0DhYse2oGHbxocv1elXEkQgeJ81NYBQBdgM7Tkj2oWVhJ2eMK+jFAsGU4cUMQ9ZtEFkFYc3u/yy1gcgcWKpR6Bls7qHoCsJ0zPGHLHNOODitWGZXJUc+NpjZ2pboLqTAQaHpcMc99iRg+6fLmc4c7zOnNLMVm/G9DVAUBKCfPLMbdfGwCunvVwXCFKumvlzN1Nuz1RqVkuDWmGD7ksf7cEynJhxCOxcP5BFROCI38BVEO4ntOcPKwYe7RFVgtRYhFXmLkV8Gkp5tqzOv3brLRZqIaWiRGPVx9CAiUEGrK+IAkUZw3pf83Ac2ChnDB52iebgtUty3rDsm4s54Y0T2YNgWqHtFmwFmoJ3J/wOXVEUf5hWfmZECfw4q3h3WJCoDuG2HlM1sKGsdRiUALKaX6utBZ0x85cr6/iAFOt02wSpel7TyDsTgv9vpD1e4uBqd8JecJJIf0F1wAAAABJRU5ErkJggg=="
    },
    {
      name: "RevMob",
      description: "RevMob is a worldwide pay per install based ad network for mobile apps & web sites. It has SDKs for platforms like iOS, Android, Unity, Corona, PhoneGap, AdobeAir and Titanium.",
      founded: 2011,
      hq: "Sao Paulo",
      url: "https://www.revmobmobileadnetwork.com/",
      github: "https://github.com/RevMob",
      crunchbase: "https://www.crunchbase.com/organization/revmob",
      downloads: "http://sdk.revmobmobileadnetwork.com/ios.html",
      platforms: ['ios', 'android', 'unity', 'adobeAIR', 'corona', 'marmalade', 'gideros', 'cocos2dx', 'cocos2d-iphone', 'cordova', 'titanium', 'amazon', 'buzztouch', 'shiva3d', 'kivy', 'rubymotion'],
      tags: ['advertising', 'banner ads', 'mobile ads'],
      favicon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAg5JREFUOI2tkj1oE2EYx//Pe+/lktwFcrnahJpSrEUHHUqho1XEUnFxEVz9wK9BQoZCQQSLizhltSA4Oegi4iDdWsGxi9QMEqG1EBKpGXLXu+vd+74OIZiPRhf/0/vx/H/v8/55gP8t897G08TNTTW51WxPva/d+Fc9dRdOefNq28VajMS49A5QfDwHkAHst76m3m5f+1ZZrB4JOH3r5cQOm34XadY84gBQEiIQqvhollQoAM7BdANo/lrfPV9cogEAq51YeCZsZx6hC0gxulVGuADwwXOmJMUyZ4NNFwUzk1IJCSgAxECmCWr7VevV1tndc8eXNoB4EMBBpCAlJEhDYRxaNpBsrwkKogO9uX/3++WTr/8WIuvbSQnoOtjsGfZj7phV/xxcHGWcWq+v9QOkhJbQY5kbYyppAgAO7eJta3W7MmT+WK/QTOEOADCppM4Ygdk5IawsBwhQqlMZevCTTslarT7vNavJfEl6ncB52qAPsWlej/R0gqIQnQR7FLrwk/aytfLFy18ZMyMnX1JeG5TqdMm8lZk34UPHSPmtFxpPQGn60H9V6CKwMk9cz1xG6B4doleeuB8+SJMRup9gpP+YAXCNxcq20agK+HuRIE7DAKAz1365sJBpVBd7zSLrcEgJTQd+1pjm7xzGXcjgZPa9bFRaSpgZQMm+OxED+VMcjUuMRgK6kFHqGn8Dp+LIB4M+3M4AAAAASUVORK5CYII="
    },
    {
      name: "Flurry",
      description: "Flurry is a mobile analytics, monetization, and advertising company founded in 2005.",
      founded: 2005,
      hq: "San Francisco",
      url: "http://www.flurry.com/",
      github: "https://github.com/flurry",
      crunchbase: "https://www.crunchbase.com/organization/flurry",
      downloads: "https://developer.yahoo.com/flurry/",
      platforms: ['ios', 'android', 'wp8', 'blackberry', 'HTML5', 'JavaME'],
      tags: ['analytics'],
      favicon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAAA3NCSVQICAjb4U/gAAAC0klEQVQokT2SPUvzUACFb3LThrbWLkFJJC0VnWyHRAVBxYIWjUHsooKgoJPg4uDoDxBEBwuC6KxSwYpDcehgBD8QlwbsoLT4kYaIESlJtLZJr0Nf3u3h8EznHIzneQzDEEI4jv/+/v78/Pj9frfbDSGsVCqGYZAk6fV6HcdpaAQAoGGbpskwTCKRiMViLMtCCBVFub6+Pjk5KRQKzc3NCCEMwyBN0xBCy7JEUUwmk7FYzOPx5PN5VVXD4XB/f//k5KRhGLlczu12I4Qgy7KGYQiCsLm5adv2xsbG0dFRrVbTdT2VSt3c3HAcJ4qiruv39/cejwdSFMUwzPb2NoRwaWmJ47iVlZVarYYQEkURx/GdnZ2BgYF4PC5JkqZpMBAIzM/PDw0Nra+vR6PR8fHxxcXFYrHo9/sVRenr66Mo6uDgQBAEhFA2mwUcx8mybJrmwsJCuVxOJBIcx6XTacuyEEKqqlYqleXl5dfXV03T4vE4TpJkW1tbLpeLRqPFYlGW5ZGRkdHRUYIgbNtuaWkhSbKjo+Pu7q61tZVlWRwA8H+Her3ucrkmJiY8Hk8jdxynAfV6vQF4tVpVVTUSiciy3N7eTtN0Pp8HABAEASEkCAIAUCgUenp6Pj8/FUXBDcO4uroKBAI0TWez2b29vbOzs93d3cfHx1KphOP4+fk5ACAcDkuS9PLyAiKRiCAIlmWVy+XZ2dl0Oq1p2vHx8eXlpaqqmUxmbm7u7e0NITQzM9PV1QVDodD7+/vX19fY2Njg4ODh4eHFxQVFUbqun56ePj09ra2tsSy7tbWVyWSampownudxHP/+/p6enl5dXfX5fKVS6fb2FiHU29sbCoVs204mk/v7+16vFwCA8TyPEIIQmqbZ2dk5NTU1PDzMMAwA4OPjQ5KkVCr18PDQsAEAWHd397++cNyyrGq1GgwGg8EghmGKojw/P7tcLp/P5zhO461/CP5mAYtR610AAAAASUVORK5CYII="
    },
    {
      name: "InMobi",
      description: "InMobi is a mobile-first platform allowing brands, developers and publishers to engage consumers through mobile advertising.",
      founded: 2007,
      hq: "San Francisco",
      url: "http://www.inmobi.com/",
      github: "https://github.com/InMobi",
      crunchbase: "https://www.crunchbase.com/organization/inmobi",
      downloads: "http://www.inmobi.com/products/sdk/",
      platforms: ['ios', 'android'],
      tags: ['advertising', 'mobile ads', 'monetization', 'analytics'],
      favicon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAYNJREFUOI3Fkr1LW3EUhp/zu/cmNjQuV4hfhHTs5iJSCtG2IUPQxY4ddXB217+jf0RFKIjoYj+Cg0UoHQQFv26r5MMa0ZiYe5scB1FMDbFQwWc7cN73HN5z4LGR28X0ptLxhxE1WIDe7jOGk9WfrK+EgKQ0G8zuKBdlPgTV0ttmXTORaPRsPuesbwQ08HnDmGADBBWW/LN8OuLGPIV9lEYrAzU4Y734G6teip74Hh81Yc9saWe1juuFYiuFEq+zL6SV9ob3nkJP/BO/D4Zx+ybtQo3TzaPz57ZlWdnkk/aJAVNxgUWtApDbfWm2y7ySWiViOeHaveq/EVFjQ7390u0xyNUlFP13n+uQVcU0DJ8BglIxmlnTgXvFywpaHwSg+1lWANJruuAXDjNiLEJu7CvcOaMRcGzI/yhz5Hl7E3Qn9glICEDqm+Ioc7Xj4niroSLCxdOuL1vnhIv5X0O4/YvYZEhL8yunsortMNLQm1c2RtjOldn9XmGUMD5Flnn3P7E/NJcTqI/RzDOOpAAAAABJRU5ErkJggg=="
    },
    {
      name: "Tapjoy",
      description: "Tapjoy is a mobile advertising and monetization platform that allows users to select personalized advertisements with which to engage for virtual rewards or premium content.",
      founded: 2007,
      hq: "San Francisco",
      url: "http://home.tapjoy.com",
      github: "https://github.com/Tapjoy",
      crunchbase: "https://www.crunchbase.com/organization/tapjoy",
      downloads: "http://home.tapjoy.com/tech/product-overview/tapjoy-sdks/sdk",
      platforms: ['ios', 'android', 'adobeAIR'],
      tags: ['analytics', 'monetization'],
      favicon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAAA3NCSVQICAjb4U/gAAABiUlEQVQokZWSPUtbcRTGf+f6v5Gb3nB9ARPRQptapIv4BTo4VNtBF6HQyQ/g0qVDlw7t4OjQbu3kRyhCp1JFBMeCKFh8K1VMIkaSmpur/xtPh9q8QELxTIeH8+PwPOdIYXSc25Rzq2nANFpr9bTE7yrE/wf0vGzGHiU/vUo8HJGUj/5VFVUAx2kFwmri+UzP+0UAG+vFBSKoYoykfECL5w2mMDqep692klPV0us3OcgT5AlyUHwxp6p2a/vkn5gnMIBSdDJprA0X3nbVQzsrJZ4+AezhTye4K5n+RkpCimqE63rzL693ftwA4aX7IAvEm1sku+seHIChwfK7BSD4sNj3fUN/FQDCisneB+LVdfFaAfGT0cel4uR09PVb9fMyvT6qGM8ZzAD2ywqmkf5NJ/09tb2D8uwcvid+kivrPnsMXB8dA4i0O5zr1p1pGLlTE4DdP+CO13y4Dq8RXXVls4Dd3Wt23BmIa246TXQZr6xJ6wbp9K16VKBSkXtDdCeaddN2GpDhgbb6H/IOjHK99SRyAAAAAElFTkSuQmCC"
    },
    {
      name: "Startapp",
      description: "StartApp is a mobile advertising platform.",
      founded: 2010,
      hq: "New York",
      url: "http://www.startapp.com/",
      github: "https://github.com/StartApp-SDK",
      crunchbase: "https://www.crunchbase.com/organization/startapp",
      downloads: "",
      platforms: ['ios', 'android', 'cordova', 'marmalade', 'unity'],
      tags: ['analytics', 'monetization', 'advertising', 'banner ads'],
      favicon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAATdJREFUOI3Nkb1KA1EQhb97s5vNCvoMYiM28RFEdAUjNmKXQhDRRgsLbSy0tRDBQgQxvoG2gdj4CCbRTsHKBwhKEu/esVjM/klsc6qZe2bOnMOFkUPwxPnKO1J5Q4ImH2m2dJyd19kHpdg0HRADAqcxU6yAOsnOF5LNQpNt12fdGrCG7kOZ1Zh1rkFPRivm8U8HGnZtH7QLKG4zZudAALWVcvxbLLaZKfq8mE/QHtSnYy6CL3Ftl6DXSDnQlrOwB8qBsE89mxXkPtEc5SJoj2UxUPAAy0FeoLuWjpMQCFpcIqAKYL54bszSjmhvHsYksp+MAFCqDQSUsGG/QRchFC4Sl27yTgaoAqigxY7jcRX2QSydRpmJIUuA/wpMRbXd0wiHygF3HFDUhi8D2Lvo8xSg9/+fH3n8AJgAVgNHR4R6AAAAAElFTkSuQmCC"
    },
    {
      name: "HeyZap",
      description: "Heyzap is a premier mobile ad network that helps millions of users discover apps they love.",
      founded: 2009,
      hq: "San Francisco",
      url: "http://www.heyzap.com",
      github: "https://github.com/Heyzap",
      crunchbase: "https://www.crunchbase.com/organization/heyzap",
      downloads: "https://developers.heyzap.com/docs/android_sdk_setup_and_requirements",
      platforms: ['ios', 'android', 'adobeAIR', 'unity', 'cocos2dx', 'marmalade'],
      tags: ['analytics', 'monetization', 'mobile ads', 'advertising', 'banner ads'],
      favicon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAAZiS0dEAP8A/wD/oL2nkwAAAh1JREFUOI19k81LVGEUh5/z3lfveO/oaA0UFiIEiVNZiwjNTRBBCwna9BeEQcvatGtnbawgMxQKirbRpl37kKQM+6CIyNRRSI00Z+bOzL33tBjGRkc9u/eF53c+fucIQO/o9DBwRUR8VNk1RFDVHDA2cbXnuvSOTA9bz78WFfPsBCtCqAZHYgwKIjiuR5jP3bEYBmvhUA1lDEV1KKkBiWkza/Q0zbMWtTJXTmNUiYp5MAxaEUlW4Rg4nJjhSGKersQPDjV95oA7Tdr+BIH+T29qylJEJGmrsCIERDzrGgABFEohqLaDgbGFIVajFC2muEnEbswGBW1kLDtEtrSft4VOsqHHZOYMuTDF3aULtJlS3Xxs7cOTkNHlizgoK7HL444hGmzAyNwtGrEI9QJm64cvZSwxx90ZzrY94nfxIA9WzuNvk72ugmosxQlG2kdB4P7iTRpwyCvEKjRvEaoTKKvDae8rp1LPmS2c5OXfDOeS7+hOZEk3znF78TKuxDsL/IpdnrTfgxg63I9MHuuvuALc+P4UxVAxfBuBkjpcapkgk3zFfHCU2eAE3wrdTOU76fGneLHax16nsCmh9D38oP8XSUjbPyyEPqtREgdBRRhofs37fIZA3YrdG7RgVXW9uo0GZTlsxQX2OQEKeKbISriHXNyElWgTrKrrhphxx/VAKo0atCaL4JsCX4LOOthxPYgZF9j9nBWpK7v2nP8BZADmfaPKk3sAAAAASUVORK5CYII="
    },
    {
      name: "Kamcord",
      description: "Kamcord allows users to record and share mobile gameplays. Users can share via Facebook, Twitter, YouTube, and email. Currently available for cocos2d, Unity3d, and custom game engines on iOS.",
      founded: 2012,
      hq: "San Francisco",
      url: "https://www.kamcord.com",
      github: "https://github.com/kamcord",
      crunchbase: "https://www.crunchbase.com/organization/kamcord",
      downloads: "https://www.kamcord.com/developers/",
      platforms: ['ios', 'android'],
      tags: ['game development'],
      favicon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAZJJREFUOI3Fkj9oVEEQxn8zO3vv7oTELhCSgxRGQTAKsbG1EOxSCLEVG0uFJFhooYVVCisbWxtBMGAKK1FE0cKkiviviaKNTZC7XF7e27F4L0rA4lmIH3yww+w3uzPzwf+GACz46riit4tdplxDEiIuCthv1nHCUCKJICKxkCVfmfny8v16mSc8CU5ACLgEQIFQUarzXl5ixvipkw8s7w/uFju7eBl/TJ0+8ahAtHpB9v3A69gxBFOhtbYsvVvMP7lZnrmz4Nf844W/6f2qr5299O3VB+t/3RII5OwMm4qv+wvePn6+WgwzLOUJ63Z/DbQJEuX5fKtPcsdCFpGQEZrrKXAphjnuhlo7SmvkAIbfa1wBoRhso1kLG5s99Ong5OErN+RoY3mHlDmB7sREqo20sjj8vn1MQkzVniOugWqFYR/bo6Pp89PXcyl0R8Zmj7+xRX94f/PZxrnqgv7RSF4bSQgkV1QzQtYitrOLFgflkd7M9IaqeWUURbC6wB4NVEEijlF2Ou/ALi9Lb7P53P4VfgKXVYg+rLV7FgAAAABJRU5ErkJggg=="
    },
    {
      name: "Twitch",
      description: "Twitch is the largest live video platform and community for gamers with more than 45 million visitors per month.",
      founded: 2007,
      hq: "San Francisco",
      url: "www.twitch.tv",
      github: "https://github.com/justintv/Twitch-API",
      crunchbase: "https://www.crunchbase.com/organization/twitch",
      downloads: "",
      platforms: ['java'],
      tags: ['mobile broadcasting'],
      favicon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAJlJREFUOI3FkbENwjAQRZ8jNrGUFdwzQWqL0rdFKtaw6wyQAejZAVbhaLBIkdgmSHDVFff+v69vVNUAyHF6sGM6gCSc9sAARlXN0j1efNcCZqbpuDRFgSSE7LTcmwW+/uAnAv9pIQlj3j8WSMJ4vU9nAGd9f9h6Dd5x1upz1vchcqt+UIKhEqEGw6uFGuisH0JkXjOpRijBAE97H0UM9W9NTQAAAABJRU5ErkJggg=="
    },
    {
      name: "App Annie",
      description: "App Annie provides business intelligence solutions such as ranking, sales analytics and advanced market intelligence for the app economy.",
      founded: 2010,
      hq: "San Francisco",
      url: "https://www.appannie.com/",
      github: "",
      crunchbase: "https://www.crunchbase.com/organization/app-annie",
      downloads: "https://www.appannie.com/tours/store-intelligence/",
      platforms: ['ios', 'android', 'amazon'],
      tags: ['intelligence', 'analytics', 'data'],
      favicon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAxVJREFUOI09k89P23Ucxl+fH99+21JK2/FLfg0QSbaJZroYHFEXE40Z8aqn/QXKQROzi3MHvRpj4sE/wAsXLwuJGrMYYxYnRgMq2i5Y2AYMoVJoS9vvt5/P2wNzr/vzHJ68HiXX0fW7l16vefnEpZsTuakqNhBEAEBpobOTw+32gAAKRGTFKK51j9xcUhtXLl7O2HDpQDqo/ABheEi+t4wJQbzC/ZM9CXsFike0nOOw3Zw3V5+ZXDyKjh9ThUGGFz6iXTmm/vc23eemUT1zJF68itIGd38dxAMak2ty5JvEkX7e1uL2jNOGzOgkOtVFdu4V1HMvYQZGMMMTxMvfoTLdmJEJOuslTF8bM1KhX3sONtNjOlloooKQ5NgU8d4Wyckz0Kjhy0UApFpBFfpR2UHMqQPs2D5Yj1JQON1AJ7MR+XFFdm4emx9AvMMGIW73PgD68bNAAhWUMUM1MP5kzIfofzcy2LRD1cvUvvgU1n4lePYFgouv4vcfQL1Bu/g1DJ/CjJwBUfzf4GtJrDhFpZwh4y0pvUPrmy8JgwTRV4uY/iGioXG2bn5P35V36Zk+i+rfwN+7hds5wFeymIWnRj/oVlrbzRK6EJJ8823cnRJ+u0yttEqtskPy9BTihPb6KumX38L2nif+aQXi2NtcEJIUwW1tYcZfQ+cG8fUb2LnL5KfPkY2a6CDEt445Lv2Oqx+iM+NgEkADnTQGRFDZHOaJGeK1Zcz5C9jZS6hUF7anF5vvx0cRgThoCNGdZYLZNyAIsY/WzBawT14Aa/EimK4u2sWfUZk+UtMzKNchMTxBYnSCjo+J9tdAefSJ8ArdO0B0XOPex++hjaWz9wCT7yU1PUPzlx+QagWpVqgtfk701wrt29/S2ldYUHfFxZOtyi5pEVobReqrPwLQ+OM2KbcIxT+J9vZIJBI4ESIRrNbE4n+zWvuFo9gttWpV7GaJTnWf7c+uIUDaWKwJMIFHh+bkUA8d6HhP23feV3IdXSzNzouWD0E9zclj6bIBKWNxXjCBYBMeFQdEseDEl5sufmd88taN/wCtxV0SmMYZZwAAAABJRU5ErkJggg=="
    },
    {
      name: "Appsflyer",
      description: "AppsFlyer is a mobile advertising measurement platform that allows app marketers to measure their user acquisition campaigns in real-time.",
      founded: 2011,
      hq: "Herzliya",
      url: "http://www.appsflyer.com/",
      github: "https://github.com/AppsFlyerSDK",
      crunchbase: "https://www.crunchbase.com/organization/appsflyer",
      downloads: "",
      platforms: ['ios', 'android', 'amazon', 'unity', 'adobeAIR', 'phonegap', 'marmalade', 'specs', 'coco2dx', 'titanium'],
      tags: ['mobile ads', 'analytics', 'data', 'ads'],
      favicon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAilJREFUOI2Vkt9Lk1EYx7/n/TE3p3PYfmjoylGaUGDCCCS6qMmQJqREbF535YXspjuR6NK6iP4AgyCREdvAGBStC/EuCBYEI0w3Md1sLd3c9m573/fpYptsVFt94ZyL53nO55zvcx5GRAxt5A7CAOA9A56tz+BFY45rd7imlVw8Oi4XTxbdIXT+F8AdxFI2Hp0FgHzq6wUQ5hvzrJWFyVXcKaWigcaY2NWb1pkGL7+ewSEACAAQgWcZYJ0EAgNTGRSNCn3y3MWVidiBCJ6rgAAwAJWTjElnGlwEsHAKSO3mnYnP2bH6LQQGkStgyPr4U0y8J5FyrK3GqxAG2Jp6YLXpffWCOkJWteguhAfsI9IXRe1A3afG2LevKPA1AW5hbcMx1R86bUxtl3LF3nHbS1nUGY4IDIzXlJnWOhe+i3gToKYlnmdy/SUEQFG1YN8jwyOje/GSbIBoHp1/68XGX38hAs+TD2+SPlJVjmpuO/gczI7pd1vyw82r5mV/DzYFQJBvIhD7DVCFeIcB4hjK4JFHFtek8MdH9893Pb8hJp5elypGMMbgmLLMOeFfazkHADAdgjOzvRM2nqmkJy89UKXMj7MEAaYB7bb9inGs5SQ6V9GXTyX8AssKP9O85VvFk+G5MogI6b2inQCf0Aqg06NQ4cyHxcKRkWcSd6B4t1yu8AJDyVArSf6LhdnjnegrTU//frfFMhF0Y7epgIhYu3U7QOvuALn+lPsF+qMAvjUsx9gAAAAASUVORK5CYII="
    },
    {
      name: "Kochava",
      description: "Kochava gives mobile advertisers the ability to understand their user acquisition activities in context through real-time visualization of campaign data. The Kochava platform provides precise analytics that span from initial launch through conversion, optimization and lifetime value (LTV) reporting. ",
      founded: 2011,
      hq: "Sandpoint",
      url: "https://www.kochava.com/",
      github: "https://github.com/Kochava",
      crunchbase: "https://www.crunchbase.com/organization/kochava",
      downloads: "",
      platforms: ['ios', 'android', 'amazon', 'wp8'],
      tags: ['analytics', 'visualization'],
      favicon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAY1JREFUOI2Vk78vQ1EUxz+nVLBYSNAyEQmtCLqVEIPQyZ9hkYhFYhCLySAMRnsXidmvQZBomqKJIJE06mcliPjV9/KOwWvayntRZzn3nh+f+73n5kIJtu0LRNxynr+ao1CGRxajUOYI0LzVqOqwvb7MFdT6OnsRaanzBUOlKOiz/UYuIB6N2JWjpQD6bb+VD0mk2BebqKra63ogBVQA9SLysNvU1mhQkUZEUFUvWX/46uzGEXAzvzTXePk4+5a5zx4m9tN2vgqkIV+ut8BHfivPhQoueHltfZpZOD9aX2tBxP2FVC1gFfNruhDwDlQDezv+zik8rCDS5dCcwGJ88PrkAIqHOGb77oH0cRzYdD5eNnLNvwHHgAlUAl0gwy76i+KFgA8gCfAZT44iBGzJGbGsCVQzPwIkuNvQ3uwEAIgDmHvxkdx9LcMMDaSTy5ZhhlBNAJjl5RE3QAzAe5bqUEujRlbCQ3enKYChu9OUkZWwWhpV1PVzEaPHu+0PTCmI4wRAdpqCkzF6vK6Q/9g3BAmvMgbbesIAAAAASUVORK5CYII="
    },
    {
      name: "Adjust",
      description: "Adjust is a business intelligence platform for mobile app marketers, combining attribution for advertising sources with advanced analytics and store statistics.",
      founded: 2012,
      hq: "San Francisco",
      url: "https://www.adjust.com/",
      github: "https://github.com/adjust",
      crunchbase: "https://www.crunchbase.com/organization/adjust-2",
      downloads: "",
      platforms: "",
      tags: ['data', 'analytics', 'attribution', 'marketing'],
      favicon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsSAAALEgHS3X78AAACiElEQVQ4EaVTzU8TURCf2tJuS7tQtlRb6UKBIkQwkRRSEzkQgyEc6lkOKgcOph78Y+CgjXjDs2i44FXY9AMTlQRUELZapVlouy3d7kKtb0Zr0MSLTvL2zb75eL838xtTvV6H/xELBptMJojeXLCXyobnyog4YhzXYvmCFi6qVSfaeRdXdrfaU1areV5KykmX06rcvzumjY/1ggkR3Jh+bNf1mr8v1D5bLuvR3qDgFbvbBJYIrE1mCIoCrKxsHuzK+Rzvsi29+6DEbTZz9unijEYI8ObBgXOzlcrx9OAlXyDYKUCzwwrDQx1wVDGg089Dt+gR3mxmhcUnaWeoxwMbm/vzDFzmDEKMMNhquRqduT1KwXiGt0vre6iSeAUHNDE0d26NBtAXY9BACQyjFusKuL2Ry+IPb/Y9ZglwuVscdHaknUChqLF/O4jn3V5dP4mhgRJgwSYm+gV0Oi3XrvYB30yvhGa7BS70eGFHPoTJyQHhMK+F0ZesRVVznvXw5Ixv7/C10moEo6OZXbWvlFAF9FVZDOqEABUMRIkMd8GnLwVWg9/RkJF9sA4oDfYQAuzzjqzwvnaRUFxn/X2ZlmGLXAE7AL52B4xHgqAUqrC1nSNuoJkQtLkdqReszz/9aRvq90NOKdOS1nch8TpL555WDp49f3uAMXhACRjD5j4ykuCtf5PP7Fm1b0DIsl/VHGezzP1KwOiZQobFF9YyjSRYQETRENSlVzI8iK9mWlzckpSSCQHVALmN9Az1euDho9Xo8vKGd2rqooA8yBcrwHgCqYR0kMkWci08t/R+W4ljDCanWTg9TJGwGNaNk3vYZ7VUdeKsYJGFNkfSzjXNrSX20s4/h6kB81/271ghG17l+rPTAAAAAElFTkSuQmCC"
    },
    {
      name: "AD-X",
      favicon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAlRJREFUOI2dkstLVHEUxz+/e+/oODb5qEZLbWYUH6E44lCWNCBJmSCD5aNFD+ofkAhbJIEQVLhOcCFoEdEmxH0tbFEERkU7FymWNk2Ko06N9zH3/loMJFgT2Fmew+fDOYevkI4zGG5qGspzuy12V66a6uq7ormxcVVR1X27hAHQNG1FyXO77f+BAYQQjvKPIcbmOo79pz9tbGHpKQCyCvTkBm0Dw5T4q0ibxnZ/Y426zguEOnuwLXNbYNs2qVTGaug6llB5PnyV8O1RSg6WkbZM9M0E9Z39BM+c4/3TMVJbOhqAlJLyigpOtLYyMT5OVzSK1+vF6/Xy8c41Wu494tWNXvZHOghGL/GkI4R62I9mmGgoCuvr6/T29ZFOpzEMg8KCQh5OTmCZJtcHB3nccYiz0wv8iC8z0RHC6w8CEiEEmmPb1Dc0EIvFmJ2d5eKVy1hpC5crB8eRLH9ZYjkBC1OTrMx9IKe4CJC/f6Lu8Xhu9vT15Y+NjpJYS3Cs5Ti6bpBMJmkMhSgu8JIbPoXvaITy9m7MpXlW5ufQct0oivJTVPkDMVeOq9TQDRRFASlxezzU1tay+vUz+c3tBNqjPOuP4AHOz8zz7v4An96+xlNQFFdUVRWmYWbgTADQU1u8eTnDgUgXgdPdTPVH2BsIovmDTLdV0jz0gLqT7dimgaiprPpm23bJzhzYaYuy6iMszrwgNxAEmblbAmpyhcK6MImlxXhWAYB0HITy96xJ6aBprriCzJ7GbHDmUgUkilbq843EvsdvCSEsQGQldi4gpavU5xv5BbfJ5anXEOHDAAAAAElFTkSuQmCC"
    },
    {
      name: "Apsalar",
      description: "Apsalar is an etnerprise marketing analytics solution for mobile app marketers. It allows marketers to effectively measure the performance of mobile marketing, better understand the mobile app audience and share these insights with media partners for more effective acquisition and re-engagement.",
      founded: 2010,
      hq: "San Francisco",
      url: "https://apsalar.com",
      github: "https://github.com/apsalar",
      crunchbase: "https://www.crunchbase.com/organization/apsalar",
      downloads: "https://apsalar.com/app/login?action=register",
      platforms: ['ios', 'android'],
      tags: ['data', 'analytics', 'attribution', 'mobile app', 'tracking'],
      favicon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAPNJREFUOI1jYKAn+Bih/P9/rKoAshgTKQbwsTIt+PT73/v/saoKZBnw6fe/BD5WpgOffv+7/z9W1YAcFxz49PufA5Q+/z9W1YCFGI1l1WUFHz98FPj0do8DHyvThE+//xVA6fMENQeHBc83MTP5b2Jm8v/89fMO6PJ4vRAcFjz/4YOHCfjU4DQAppmZmfkDOzv7A5IMQNa8/9h+Ry5uLuINwNDMyHUBnxdQYgHZzywsLB/8Pf37XT1cGT59/GRA0AD0APv586fCz58/FfDZDjcA2dn5xfmJmtqaH5AVFWYX9n/58gWrK1iI8bOrh+sHbJqpAgCGcoDhliuZgwAAAABJRU5ErkJggg=="
    },
    {
      name: "TalkingData",
      description: "TalkingData is a Chinese mobile data analysis service offering app analytics, mobile game analytics, mobile campaigns and analytics for enterprises.",
      founded: 2011,
      hq: "Beijing",
      url: "https://www.talkingdata.com/",
      github: "https://github.com/TalkingData/",
      crunchbase: "https://www.crunchbase.com/organization/talking-data",
      downloads: "",
      platforms: ['ios', 'android'],
      tags: ['data', 'big data', 'analytics', 'mobile', 'games', 'ads', 'mobile ads'],
      favicon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAklJREFUOI19k09IFGEYxn8zOzsRLflvmjH/7FiEtGFFbkhEQUxudJAOUSAdOkhBp6AIDyUSEuGhQ90kPHToEB1EKCQw96BRIS5EkltB4khpE7umpu4yOzvTYV3bFbfn9vE9v+d74XtewfM8gQKFozQAHUAbUA68yq4stvsC5bNAFOiLGXzN+4V8QDiKCNzNJOc7PceWAWQ1OIsgTNiWeX7jBUF0ZbX+WsygH0AsgHtsy+zKwzmzkAakwglltf41UBmOYmwEAH3AXlnT7wuSbBf4iwJkTX8MzNiW2essJQbDUYJSOEqrbZlXAKRy9Ze/avdN4LJtmS2ADQTWx74NGLZlngFw06sBypQuoXnEe2FbZlvRmJr+DPgMHAMcYBC4ZVvm/kKfv6pmTjg0mFxy1/7sZJNkTZ8A2oFgNrX6PLucUDZ7AKQN2Cc5slL7BhgCpoHGxiMoHRWh4xl2dC9weG2e0+I0F52P7/yBdIpKoFpoHvEeAePrgYbnZM5mknM1sqaP9hqh95Njqc6tXg5UiIk9Tdt6JMC1Ez+ekHX+fZdPci4YAw8+vU0NbAUDrPx2FWBcBD4UwYCs1D48yp3rbra4A4U6eHL7ywjxcRF4Kmv6aP7Cv6vue7dhTE2OpVpLwWpQmiZXd8SYgQuckzV9CKC6wdeV/GLeKwUrddKMpvtPRIgnYL2JMYPlmEGbrOmnbuwLucvJrFoqoEzxLUSI/8yfhc3bCDBMKAA0ASqwSK5ULTNTdj/A1QPfqv8bUErDhBRye3MpQtwG+Au4dtW4CwQquwAAAABJRU5ErkJggg=="
    },
    {
      name: "Chupa Mobile",
      description: "Chupamobile is the Marketplace where everybody can buy professional Apps and Games, ready to be customized and distributed on the App Stores. It is like Amazon for Apps and Games ready to be launched in the market.",
      founded: 2011,
      hq: "London",
      url: "http://www.chupamobile.com/",
      github: "https://github.com/ChupamobileTeam",
      crunchbase: "https://www.crunchbase.com/organization/chupamobile",
      downloads: "",
      platforms: ['ios', 'android', 'unity'],
      tags: ['mobile', 'games', 'store'],
      favicon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAm1JREFUOI2VkktIVHEUxn//e+/MnTF1JNTMwNSUUEwNpCIkihYVFtXC1EVZSFqLihR7UeTCENtGEFaLUIPIXpAQZRtBMRSTyKgofFVqFuqo4+vOPS1E05SoszqL7/txHp9iiZLeLsqGokrGLA5hE6AAU+fGpVOUcAwHmWp6VqsWOk/Dy+5S/F8m2PGqtKxFzvyc8pYrEXTTRXyouTuv3i7GrTWTqYoXAuQE1Hzu57svHKXA8EN+vbryRhoGR4Y3A4Qt9zw++5wq3H01eCIqyFIF2hygrucDA75wBLBssAzoI0tXfNMNA3eQZzoqmHOEsJfpSfAO5APMAGTnVszIWo4fSSYl8jYOBQnBbazg3tQgmQ7nMhVr4sypYxe+noPYfggO65hbwStJtDJdbqGv3269K1DGhXQIrUQVLrxulURicA1BB/aRo2YAjyTldXvDeKrYQlyy2Z0T8nb1Ut9ZqjSAj83jqdiCAoYG7YB/NQMYc42pEb7BXT2Kq+OOQK76m+0PgGFqFCWvU1J7fxsGSYxC7v+MUSFpefKEPdKC+JsQaaFRGhfrJHEtkhhbKRtX3ZX4WGBekKSNp5MjZACYAVg4ieXWmh7CxsBtQpHGZAJDXy3LYwvEmcYn1d4R/ztIxgzMaQBBZHM9Zr83eEyGx0Uwhk4SrT3stiyPHxAFvZY/DmaDBOAlwwziBwpw8IBQ66LPEqZsQHdF0Ol45tIUOuBSipWGXr1gBQBpAgJpw8lNLoem98Xo2dgQ6FQSeKBPIyk+hTTzKKMj3ep919VFgDlQK9Gc39TJlo76sQmVqmnidzs0HwH2YVXY/2K+9hcRk+K/c8221wAAAABJRU5ErkJggg=="
    },
    {
      name: "Fyber",
      description: "Fyber is a leading mobile advertising technology company that empowers app developers to execute smart ad monetization strategies across all connected devices through a unified mobile Supply-Side Platform. Serving approximately 320+ million monthly active users, Fyber works with thousands of the world's leading app developers, publishers and advertisers.",
      founded: 2009,
      hq: "Berlin",
      url: "http://www.fyber.com/company.html",
      github: "https://github.com/SponsorPay",
      crunchbase: "https://www.crunchbase.com/organization/sponsorpay",
      downloads: "http://developer.fyber.com/content/",
      platforms: ['ios', 'android', 'unity'],
      tags: ['mobile ads', 'ad revenue', 'optimization', 'advertising', 'mobile', 'monetization'],
      favicon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAQJJREFUOI2lUztuwkAQfbNwgVQpQLIQUpYmKdLQYMsnoHKD7DtwFcIZHFFAxQUCFg0VBY1NAUQmh0gRD1Us44wXS3nV6knvM7uzBAFhFLPEB06PytwNUSU0GeWHorht6VfXol1R9JGy93VK5mUTKoulmlJLImLf1qpZVW3kDf+MM1ssKXB6FEYxMzMBgMrTH3THJC6i3dVjAHjfHH7yBsEznaVEycBt0TSM4jfOMqVMSXXQlMjZYkkjb8jlUaRGYoN7dyA2WG3Zcvv0eS8RANYXHqfHBKRUpn6f7vKdnOumpsdkAgD+4Knx70USV9nS+sV+pH1RaFxlycQE8TPVMZLGuwJZ+HikXjcfLAAAAABJRU5ErkJggg=="
    },
    {
      name: "Upsight",
      description: "Upsight is one of the largest mobile analytics and marketing platforms in the world, processing more than 500 billion data points monthly and used by thousands of apps worldwide to manage and optimize their mobile businesses.",
      founded: 2007,
      hq: "San Francisco",
      url: "http://www.upsight.com/",
      github: "https://github.com/upsight",
      crunchbase: "https://www.crunchbase.com/organization/upsight",
      downloads: "http://www.upsight.com/resources/",
      platforms: ['ios', 'android'],
      tags: ['mobile', 'analytics', 'bigdata', 'datamining', 'data'],
      favicon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAHVJREFUOI3tk7ENgDAMBN+IDjGOp/F8nsbrQG0KFJSQhJiGiq+il+7tSG9yd4Ql7ABWqG3JonDACQNqlNvTK/j+HgYIO4S9mDrcIEFBxb7wB3wfsL8JmBveAgBFgR560b6FHqBGEAbULqvVxKquGVz58Wvs6AB25S3hMGZIGgAAAABJRU5ErkJggg=="
    },
    {
      name: "TUNE",
      description: "TUNE is an attribution analytics company behind the products MobileAppTracking (MAT) and HasOffers. It creates Software-as-a-Service (SaaS) products to help marketers manage performance advertising relationships across mobile and desktop.",
      founded: 2009,
      hq: "Seattle",
      url: "http://www.tune.com/",
      github: "https://github.com/MobileAppTracking",
      crunchbase: "https://www.crunchbase.com/organization/tune",
      downloads: "http://www.tune.com/#products",
      platforms: "",
      tags: ['mobile', 'ads', 'marketing', 'data', 'advertising', 'analytics'],
      favicon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAaJJREFUOI2V0z9L1lEYxvHPef6g1hxuDtVWzxtwFUHdpaUIEgQXg6BZlKQlBO0VBC3inArq6huwJajFTdqCSv397nMa/D32GE9QFxw4cK7ry+HmupNBvS4UY5KHmJRMoIPSnD912AGvCpcIPcmyYk4yoggk3MatIQAdq4UxZFOyTck4tiW7+NL47irmMK8YlwYBGd/0sClpS55IjmSVlca5Wj5JDmUf8EbxoA9pqY0Ky7I7wgsX9tUDYVhJ1CqX9oWXsjM1gpasJ8wKO4oDCWsD4b7W0tU0igNhR+4DwqRsVNhTqa0PCfe1nqjUwp7wQy11hAlJ4PPfkwMKmuF+5wrwf6qvbwV1SzgV2sL9f4IFjbctnLaEY+FcmFXpWBpWuEZLhUqnGfq5cNxSnAi7wrxsWsHiEMhiufp0Ni3MC3uKk5baueyt8FW2oTIjdC0MQBYKoasyI9tovFtq58mzQoWuKcUmxhXb3KjyPcxJHuFM8lzlSFdTyKelX5IezTIxwvVY27ho9mNLcqLgXXKzNY8LjKKnmMRE83IqOcZH/PT+d+wXXNy1M4EK5+8AAAAASUVORK5CYII="
    },
    {
      name: "NativeX",
      description: "NativeX offers developers a holistic approach to monetization, through a wide range of both reward and non-reward ad formats including interstitials, Lightning Play video, in-house promotions and playable ads all in one SDK.",
      founded: 2000,
      hq: "Sartell",
      url: "http://nativex.com/",
      github: "https://github.com/nativex",
      crunchbase: "https://www.crunchbase.com/organization/nativex",
      downloads: "http://nativex.com/monetize/nativexsdk/",
      platforms: ['ios', 'android', 'unity'],
      tags: ['mobile', 'ads', 'analytics', 'advertising', 'games', 'video ads', 'banner ads'],
      favicon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAolJREFUOI110V9ozXEYx/H38/39OefYZtuxbGNnmxkTpoTynyhFLtyhlJUiuaRd7FL+xI0iuSEpuRC1MtailFxRxBmRHNqNZYZz9uec3/n9vt+vi82ZWXsuv5/v8+rpeQQANq680v/6guPKHmsNF3e14MZBFPz6qDh6f5DUyjGMFkRAeba3ujHfecCnX7W0tLQvahpNP71eu8efEyGOcPjaIMOfFCaC1KaQxeuyGC0AWAuep3efWb8iDW3tTk1t/Q3l2aXvemK07QioqIlILgzI5+P0P45z6NJ3yudprJkAXN/wpi/Jq/tzqG+WlLS2LbcA1kzwnX2fiYouRluu7m/kVG+GwqjH3/LiIed3tuK4gihQfwNRUMgpnt2qxU9olAsn7g4QjE01O57h/dMk+WEHmewsAQCJasvD05X8/uZPooK1U7nrax5fqaJsvim9TQMAqhZZus/V4Sc0/NOsXEvmZSVD7z2Uw+yA41iGvzgMfY2XxgTw4xF9l5NUpMy0/zOAMBCWbBpjXiqYWCygHMvnF5UMPPdRLrMDJoLqhSEbDuaIilORG9O8ejCXsgbL/zUN0EVhzb4Rkg1B6e4AYcFh57EhcgMyOxAVhMbVBZZtG0FHU64XM1gjJBsCNhwZI8zLTMBasMaypeMnXozS6WLlId1n6vDjmmDcYWvH8IwplIjqCbKK7UezlFVpYmV6InAN754k6b05l4G35YhATXOe5XsL6BBEBBF61KcP0tW0NmTZ1hyV9RFGCyYSglHFneM1NDdrnt+uwk9oiuMumw9lyf9wUKLQxUKXgnT6ZM/HVfEK26smpxNl6D67gEQduDHL23sJsoMe1gpNq0cIc+bR+GjYnslk0n8ABt/9esSmVlIAAAAASUVORK5CYII="
    },
    {
      name: "Parse (Facebook)",
      description: "Parse is a cloud app platform that enables users to add a scalable and powerful backend to launch a full-featured app.",
      founded: 2011,
      hq: "Menlo Park",
      url: "https://www.parse.com/",
      github: "https://github.com/ParsePlatform",
      crunchbase: "https://www.crunchbase.com/organization/parse",
      downloads: "https://parse.com/docs/downloads",
      platforms: ['ios', 'android', 'wp8', 'unity', 'xamarin', 'react'],
      tags: ['mobile', 'enterprise', 'apps', 'development'],
      favicon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAh1BMVEUsgvykwvxUovxEkvzU5vw0ivxksvxMmvz09vxEivxcqvxEgvysyvxUlvzc7vxcmvxElvyEsvxEjvw0hvxcpvw8jvxUnvz8/vxkrvykzvzs8vycuvw0gvykxvxcovxMkvzc6vw8ivxUmvz0+vxMivxkqvxEhvzk8vxkmvxMlvxMjvyszvycvvwGxgYbAAAAlElEQVQYlV3I7RKCIBRF0ZNl5QeNIUNlgInoCPr+zxeXfuW6MLPnoNpB1f4fZuLSJXAuuGJWSqFw1Ag8hGIbb123cGr0EddvKD621DQwXh96P5wWHxvMMtbUWz7kjyM1bOT19fYZ754aMrqsurGNpZRpkGstM2liGAkjjJAvnZlIxAdBTCZK8YOJlGX8qSY8d3DeDV/krRiUfsOgEwAAAABJRU5ErkJggg=="
    },
    {
      name: "Kinvey",
      description: "Kinvey is a BaaS provider that makes it easy for developers to set up, use and operate a cloud back-end for their mobile apps.",
      founded: 2010,
      hq: "Boston",
      url: "http://www.kinvey.com/",
      github: "https://github.com/Kinvey",
      crunchbase: "https://www.crunchbase.com/organization/kinvey",
      downloads: "http://devcenter.kinvey.com/",
      platforms: ['ios', 'android', 'java', 'HTML5', 'Angular.js', 'Backbone.js', 'Ember.js', 'Phonegap', 'Titanium', 'Node.js', 'Xamarin'],
      tags: ['finance', 'enterprise', 'software'],
      favicon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAiJJREFUOI2lk01IFGEcxn/vOzP7Mbuzg1GXjIpKKyMKDaUi+joYiAV9UER58BREXQzBQxRBlyikQ9E3RtRGkIUpGYWb0MdCRnYyDCusFPTUzrrOzuzMdogWlkUIe66/93n4vw//v0gfWvXDcn2DWcjQpKWOZXLlszEDWK4fk4YmU7MNMDSZUmeCIqyh1+9FWbEehMAZ7MN++qjkXVGAVrkMvBzuyLc/5tVbsLsuk8+kCTU0o1XWMN11ldzX78UB6qJyos1n8J0sCEnYc7F7O5h6HC9MIyJlKHMXoh9oRQZCpDtOw9g4qlJdq0b3nMB9102mJw6KRG9sQt/XgjPUhLZ4KdHjV3Be3CT15BgioKI3HCR69CI8PK+KycFELjeVUqwLrUV/C27aTqBuB/nJUYSiYt1qLy6w5RxqJOZJETaFPzFaUo47NACOjVpRS/r+pRLuT4wiwqaQ/nDSC1TXI81IAUozgnm2G2/kA/bLOGbbdeScWBEPVNfjDyc91eu8ZvtOVjNPxckm7uBPZwht2IX75gHTiR7ymSyKbmCevIvTf4+8lyO49TDOQA+y+7Ytxvev/GW5fiy4cTOBqjrUdY3kPr3Cam8DILBmLaJsHvl0imDNNlA0nI/9ZF/3Y2gyVQgo7ELFEkI7j4BjA3mUBVXYvTewE89KejA0mZIl5X3+gvP+OUKPQSiK+7YTO9lXYv4rMbx7eX5G+g9S5+vqz/85599YFc04iS9ruwAAAABJRU5ErkJggg=="
    },
    {
      name: "Gondola",
      description: "Gondola is a virtual economy management tool that enables mobile game developers to balance and optimize virtual economies.",
      founded: 2013,
      hq: "New York",
      url: "http://gondola.io/",
      github: "http://gondola.github.io/",
      crunchbase: "https://www.crunchbase.com/organization/gondola",
      downloads: "",
      platforms: "",
      tags: ['virtual economy', 'analytics', 'game development'],
      favicon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAsRJREFUOI1Vk9tvVFUUxn9rn33O6ZnOUNtBqem0GEpUEAJBQgghBIjCi0bwwQf/FhObFF+M8RYffDaRBA2tCYmGa1BMazBeYgkYqtxaehE7LZ2hM3Mue/lwCh3Xy06+vb9vfVl7fQKQOh1S5U1AENZKV882THNMjTBijQzZxOmwJ7xTS/L3ssoLfPj624v0dJU4tG8PaZYLWAERiCzbE6eeUeV4LYZm6ohTRyt1JJlSXW5x8rtL7N29m0asxKkjSR2NxKHqSBVUOW5EHrtac2sCoaMYcnV2nqV6HRMIQWiwBgq+YE1OEkENgDUQejk5iAyTH33AxGuHOccMs2+9yi/7d/LXl19Q6MhFUqekLm9oADIHTiEKDDNzC1RHTlJ71GR0cppLvVsIbci5Eyd4FGf5ANrKPB62AAULH585S7G0jvMtj/e8Lt7VDm71P8/81CSnLo/hm/wnknYHAIkaZh9U+fzTz/B9ny0BHChFHJy6yTMLc3SXN3B6eJj5f2s0sjUXkjidWEnYlgKzly9Qmb7F37fvsPT9RWIMFU0xtWXOb9vBvv4+gkOvUzl4mACIfK7ZJwviQCr9dB15he7xMUrbd7L8QoWnN27mxulRBiMhHqhQKg9gFJppRsH3aBNQevoHmfjqFMlPP5JFRRaTFvfHf6b++zWWlx4Q9/ayaehDFldSxu/VeXtH15oAKL5v6T56jJufvM/1sV9ZAfzVWwvsujuHDQv8MFnHU3mC4xuoxhnFALo7Q/q+ucJz9/5koZmROAhF2bB5kEJPmav3W1QbjvVhHhyLIq1MwQgP44zf/kn4Yy7m5We3sphZyiFsKltKHoxNNahnlumHTQb6IhTEIow+FcpLnlhuL8VEVti6PmRhxaHEzDSh5CmuU+gpBiS1lAMDnbzxYifAqLTH2Zg8uPL/BOMU3OrSGAFF1amMWCND/wG0tC9owL9oNgAAAABJRU5ErkJggg=="
    },
    {
      name: "Kiip",
      description: "Kiip is a rewards network and mobile application that offers rewards from brands and companies for virtual achievements.",
      founded: 2010,
      hq: "San Francisco",
      url: "http://www.kiip.me/",
      github: "https://github.com/kiip",
      crunchbase: "https://www.crunchbase.com/organization/kiip",
      downloads: "http://docs.kiip.me/en/downloads/",
      platforms: ['ios', 'android', 'unity'],
      tags: ['mobile ads', 'advertising', 'games', 'virtual economy'],
      favicon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAAA3NCSVQICAjb4U/gAAABNUlEQVQokWP8qsiADLju/WdgYPimxMiAA7D8xSaKVRCm4T82DdgEoRr+YBPFKgjTgM0wrIIQwPT7PwMyggAIm9HQUuzCW4kH/wVXHPjDzgkRZPmFzZhfDAycVk6iczYycfO8OnX0TIyP6u/vTBAn/cZmO7uLn8TUFUwcnK9OHT0e6aH6+8tfWNAxXpRBUar3+D8DA8P/378YWdlenjp6JNpb+cdHJmRPY7Xh79+/LKwM/3/9kv/z/e9/lGhh+s3AgIwgYHtC0J8f3yVsHJVnrv7DzIysgOnXfwZkBDXm0M5tSaF/f/8SdPNT6J2PrAB7sHIw/P+3f9vmxNC/v3+Jh8QqNk6AK2DcIYHi+kv/WBgYGPSY/jAwMHz6z/jwP/N/BgYRxn9SjP8gChi3oGogCLCnVjwAAKzqp1tGgqXEAAAAAElFTkSuQmCC"
    },
    {
      name: "Personaly",
      description: "PERSONA is a personal data monetization ecosystem for web and mobile consumers.",
      founded: "",
      hq: "Watertown",
      url: "http://persona.ly/",
      github: "https://github.com/personaly",
      crunchbase: "https://www.crunchbase.com/organization/persona",
      downloads: "",
      platforms: ['android'],
      tags: ['monetization', 'mobile'],
      favicon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsSAAALEgHS3X78AAACiElEQVQ4EaVTzU8TURCf2tJuS7tQtlRb6UKBIkQwkRRSEzkQgyEc6lkOKgcOph78Y+CgjXjDs2i44FXY9AMTlQRUELZapVlouy3d7kKtb0Zr0MSLTvL2zb75eL838xtTvV6H/xELBptMJojeXLCXyobnyog4YhzXYvmCFi6qVSfaeRdXdrfaU1areV5KykmX06rcvzumjY/1ggkR3Jh+bNf1mr8v1D5bLuvR3qDgFbvbBJYIrE1mCIoCrKxsHuzK+Rzvsi29+6DEbTZz9unijEYI8ObBgXOzlcrx9OAlXyDYKUCzwwrDQx1wVDGg089Dt+gR3mxmhcUnaWeoxwMbm/vzDFzmDEKMMNhquRqduT1KwXiGt0vre6iSeAUHNDE0d26NBtAXY9BACQyjFusKuL2Ry+IPb/Y9ZglwuVscdHaknUChqLF/O4jn3V5dP4mhgRJgwSYm+gV0Oi3XrvYB30yvhGa7BS70eGFHPoTJyQHhMK+F0ZesRVVznvXw5Ixv7/C10moEo6OZXbWvlFAF9FVZDOqEABUMRIkMd8GnLwVWg9/RkJF9sA4oDfYQAuzzjqzwvnaRUFxn/X2ZlmGLXAE7AL52B4xHgqAUqrC1nSNuoJkQtLkdqReszz/9aRvq90NOKdOS1nch8TpL555WDp49f3uAMXhACRjD5j4ykuCtf5PP7Fm1b0DIsl/VHGezzP1KwOiZQobFF9YyjSRYQETRENSlVzI8iK9mWlzckpSSCQHVALmN9Az1euDho9Xo8vKGd2rqooA8yBcrwHgCqYR0kMkWci08t/R+W4ljDCanWTg9TJGwGNaNk3vYZ7VUdeKsYJGFNkfSzjXNrSX20s4/h6kB81/271ghG17l+rPTAAAAAElFTkSuQmCC"
    },
    {
      name: "mobileCore",
      description: "mobileCore offers app developers and advertisers a variety of ad formats and engagement tools, from traditional display ads, to interstitials, video ads and more. mobileCore offers the unique cross-promotion tool that allows mobile app developers to promote to their traffic their additional apps.",
      founded: 2013,
      hq: "San Francisco",
      url: "https://www.mobilecore.com/",
      github: "https://github.com/mobilecore",
      crunchbase: "https://www.crunchbase.com/product/mobilecore",
      downloads: "https://www.mobilecore.com/sdk/",
      platforms: ['phonegap', 'B4A', 'unity', 'adobe', 'corona'],
      tags: ['ads', 'display ads', 'banner ads', 'monetization'],
      favicon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAk1JREFUOI2Fk89LVEEAxz/vvXnvbe6mKdtuWiBEYXgoiKKDQSJ68qhtHcRtty4ZERpYFyGhoi516ZrrCh1yyYOHCkUvQfQPmEEH8ZCmuS6t6+6+H/O2w7bKYtr3MjDzne98v9+ZgQMQjYz3xCPJ2YM4yn4LsavJOcM41CGlQ6nk4Xmlx4lU/8h/BeKR8TugvFJVgee5OzQhDFzXWlIUp/v121uL/xSIR5ILujBbHdcGSnvtKiqapuM61vhYKhqrEohHJjxVVRXPk3s2uo7Hds5ByhK6rlJXH0BKeyqRivaICkkXppLN5hBCwXE8TFPDsiSapnDuQhMDQx34/QYb6zmej86ytlIsAqgVgULeYeB+G23tJxl+1MmJ5noejnYRDPm5N9yF328wP7tIMBRgYPAKmfUCAGJXwOVyewtHQ7W0tDZyrLGOxuNH6OzexDA1AEYHZ1i+myabsTnc4KPKQQUfphcA+Pzpezm/u9tJMSc5f7GZ02fC2JasdlAp3TDKp+l6eRRCJbOZp76hhsT0dVrPNuEz17EKstpBMOzn11qO3JbFz5Usmxt5Vn/8Jvvb4unIe5aX0pxqCfPt6yovnswRDJtUXePtvqnSZjqD6VMpFlwMU8O2JIapoQmFwraLlCWEUKmt8yM9593YZH/vToRifqurJiDe6MIICd0ux/lbHkCg1kBRFITwYduF+UQq2lvloIJYJPlMaPqD8vvfLVBoBo5rpz28vmQq9rEyf9Bn+mLovkvSc1EUBVfaLxOTN4b24+8ncu1mZGLmIM4f8izi4ODarBUAAAAASUVORK5CYII="
    },
    {
      name: "Trialpay",
      description: "TrialPay is an alternative e-commerce payment system in which a consumer gets an item for free from a participating merchant in exchange for buying or trying out another product or service from a TrialPay advertiser.",
      founded: 2006,
      hq: "Mountain View",
      url: "https://www.trialpay.com/",
      github: "https://github.com/trialpay",
      crunchbase: "https://www.crunchbase.com/organization/trialpay",
      downloads: "https://www.trialpay.com/legal/mobile-sdk/",
      favicon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAe9JREFUOI2Nk71rVEEUxX/zfG+z2aAElWwMJoWNdikEC23Si7WghWhjZSXivyB2mkZst9DSItE0ClY2QS1iClERjZBi3V03bz9m3sy9Fm+zb5NNIAcuM/eDmXPP3DEAr752NDaGODLEEQMzJCN+vt+bnzseG3Pi/hudv7DIqcmI9zerANxaqSMKlSSiEhumEsNUKcrXxFBJDJUk4uJsidiLkjqhfMywi9/tQCUxWA8uMTgxOAHrTW7B4AK4oESZQOqU9duzwwPe3aiyOFOi7YS2E1KrtK3QtkLTCs2+0OgFrFfiIEo3U/ajbZW16zNj8Q9/LG9/9mn2BStKBJCJUn2yNSw683SLlW/dob+8vkNto0MmyqW5CS6fnaDRF6yHeLeoHBcadL3ipbj12aeUydjwpZ7xaGma8ycTWn3BhgGD/ehlStcXbaUDLV5/7wFwuhLR7AsuaMFgFEqu8PCATMlE8ZKzDAItK1h/CIODGHUyZWmhDMCPluefVZyMMDCFBGQPF7hS2y40eTA/3O844eVmh9QJLlAwqHeFO6t/h4Xnpse7+7jtuLvW4PnnlNQp2agGNii1jQ4vNjsYDEGV2rU8V378i8jkMVEw5H/BywEi5s+3d7CCQtAipuSz45WjiXgoBmyI7q2Oz/IRIMtXzX+kPQWJy3tRuAAAAABJRU5ErkJggg=="
    },
    {
      name: "Superrewards",
      favicon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAj1JREFUOI2Fk89KG1EUh787o5j+BUEjLoKLRFwZ6DOEbGJsHiBxUd9BQayCKHFXfIJ04WRoNyOCiJBFVChuXNguxKZCF3HRTBAXs5hr7szcLmwCrTE9y3PP+Tjnd+4PBkS5XK6Uy+XKoBrx1MPW1pZ1e3tbBBgbG7NWV1cX+tWZ/ZKbm5u77Xa7JKVEKYWUMp3P51P1en3vv4CNjQ3Ldd2SlBKtNVprgiBASpmem5ubPj4+dp4ErK+vW67rFn3fJwzDHkBrjeo8TJLL5aZPTk6cR4C1tbXdVqtV8n0fz/OYnJzk7u6OKNCIIY0ONSroQVKnp6d7PRFXVlasVqtVvL+/x/d9dnZ2SCQSDyt9eM+PRA1TPUM3XxFdjDLyfJiJiYnq9vZ2SSwvL1dc130npQRACIFt29RqNc6+nHHV/spw5hfh1SjRt9cgQKOJxWLE4/GP5tTUVCEIgjfdnT3P4+bmhkwmw/zbeRo/v9N6cYWqjxOFmkhHPV08z7swbNteVEpVATqdDrOzsywtLXF+fg7AeDyONiJCHRCGAWEYAqCUqtq2vWgCXF5eOjMzMynDMNLNZhPXdUmlUtTrdT5ZnxkxXtJpmmihMQyDKIosx3EWeiJ2o1AoWEDR932UUpimSWwkhg5BDIFpmgDV/f39Urfn0VfO5/MWUOyO2rv3n+aDg4PSX/l/AY1Gw0kmkykg3RXWMAy01tbh4eEjP/T1wvX19V4ymZwWQqSFEADW0dFRXzMNjGw2W8lmswPt/BsrPDDproYbPQAAAABJRU5ErkJggg=="
    },
    {
      name: "Everbadge",
      favicon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAddJREFUOI2Vkj9oFFEQxn9zt/9yenc5lQSJSBBPzKEEBSER4SCNhYV2ghYKOTsrC0ubtDb214hVurQKsdIg2BjCIQEFQdF4Jhovidndt7vP4u2xObMWGXi8x8z3fTN88wRgqkVHhAYHCK358KZN3Zpq0bl7406jeal5ED5L75ZOQ7tjidCQynMWV58CkCSw+we2eqDCjOB6UB02N8BQZQQRGhZAz1/Dtk3B34UhNcPDm4v7us4tCMUUtxV3AbAAoghETGFnGy7XZwG4dl8YPmLytgtnJg12b1gAKgYKJhGoDHRqEsZODhJUnCMQRUA6QRSB1ubd/QZRSnBdKFfBcf8zgZasQ19g/pEeAD94JkgxRyBQEKfYUGUCzVmhXEs9sGH8nMHun0BBkpJUBP2+JyZgZGyQEOYJBAqKfYHY/AWAH2sQpoY6DpTKZhu5HiT9TAGWP77k6vQtXjwe9OD2E6H0jwcyfQ9dvwiFtJAk0FuHza+Q7FmZZcPxs2A7WW71LVgaVn52OV8bzQrlY+bkRZyOutkFDStWorm+/pn2xhdm8in5oeFVFNMSgOX3rz/FOiZQPn7gs/HrO36wTe/3DioIsV2HSvUQnnuYo7VRPNfDc0pcmLgy/hcCiqspqeS+/AAAAABJRU5ErkJggg=="
    },
    {
      name: "Mopub",
      favicon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAP9JREFUOI3djrFKw1AARc8zz0DERk0RpXsXBz9AEMzm4GfYyUXs1LGrk1sXHf2OLg6l0MFNyCyoFGqaJo/G9/JcYkkLDo72TJc7nHvh3yN+QrNvj4FbE4/PrNFSBodD4AbIgDs9eT8FkHsHT0AnCsVgIWj27ZFJpwOrktqS3fWUkJtfRTb1l2alm8vd/ZMoFCNZVl2rkhpCWFlvPAJvhZq1ijTesbnyhOspxw8eAEd/flyicxfoAhcSwKTxOYCsN3pRKK7KVy9FGt8DOH7QjkLRK/u5Hr9em2QSAmwAWDXbLp+MKkefK3m42tt5trUQVCgqWVey4RdWBX9mDQRrwDd8uV2rVH3gQgAAAABJRU5ErkJggg=="
    },
    {
      name: "Paymentwall",
      favicon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAZ9JREFUOI3Fk79LW3EUxT/v+33v5SWNGmMtNEgFzaKDgzwyBCcrXVsc+gd0Ck6dxMG5Q0fp5NBBipNIlwqCs4iDiHQr6VBrqkkNL1Hjy/vx/XYo9QemoFjoXe+5h3PuudfQWhvco8R9hv8JgfnXzsbjN9h9BQDC+g5PK7OdYEbHHXyULslH24QNQIPVC351gufR5u0UNFUxOj68NKh+YFoUgRsE1xWsd78kNThDoLPocIBa+RXoiIfDSwi7gm385PzbIs8ayzcJVo0Uyb49VDCEakMiA0GzBDrA7nlP2wORAOl8p1UbZVqfXrfgM0Tz+EmkAAMEVSUEL4BAxVWlQECA4CQnkuSB3d8KPlkjpPPv0DJNxBhe+S2t8zX6cwtY2RxoCL0qtYMZUs4Umfw8ks+IuMlZ+bWJSsxydjRJeAJWCh44Lpa/gojH8b+YaA12NkeP8LEcl2DfIWy5WF2gEnMm9dOJWP3x0UAKXKAUq6NLe/pQSEkJvMIFVteRkqJJmw8S8leSqQBbEtJcCZKIDcCTMHCBjPja+ZDuUP//mX4BnvqdIjEI9MUAAAAASUVORK5CYII="
    },
    {
      name: "Fiksu",
      favicon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAARVJREFUOI2V079Kw2AUBfBfTOKgVkHRvoW4t7sv4eCgUKqTPoN0c3QpCiKouOhecBIXJ9HZUSwiViodLCUOjRBKaeIZ73fPuef++YKkXp1HDavoITEZAWbxgGaEbQywi+8c8h8WUt5mhDXsoxMc3RViJ/XqB87QiPCDr/QBytjCXKadIM1p4iONdTCIxhQoY6/bHyxmg6U4fMN1RgCME8iSbvCIMHXwPpozUQBXuBidTdpqIYEdrCf1aoQWTv/loNsfVFCBUhz2/i1QisMT3CPG07icvBZauJw0g6kcgVyMc9DGYSkOZ/BcRGAaS3hNrbZxUKD4MqaCpF6tYQXH+DQ82zwsGZ77S2S4mg00DH9lEYS4xfkvLylGOX/MWc4AAAAASUVORK5CYII="
    },
    {
      name: "AppsFire",
      favicon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAwlJREFUOI11k2tIk3EUxp//+zrd1tbcVtHU0rLILmAXyWtWREaE0RDntjRjhpGJ3ctuhEFQREWZ1RZSUdoQtD5EHyoqi8ruZBeysaRWw0rbprVXt72dPkg2BZ9vh/P8nnM+nMMwRNXtNOHW4S2Hujo70/v8QhxjAC+RdKm12ldxU+ZW27YWXQ33s/AiZ/Mee89HZ4FKF1ufo19vc2UkNM8NAM47mPT49u7SLvenigh19MfyYyenGVRs8OSM/OLW+Sstjgc+GrrUgLJ6CMtKt19OzTWEUijMl7Nmg32eucShxfBwuJZWVFozDUUdAMDafTSxYJXRWVFjZ4Vx/WstLFp7N0ql+K6LSWpve9a8jnGcn4+I4BeWlCdXLZ7tBoDM/GLXzISY0/yHTo9NOzr+5YGCBU0AkG2ytPi93kzB650OxrvkCnmbr+tbeigYkIuCv1eXmFRprDzyNt604N7TKzequG6fLz0lz2QFgPlGS4vQ3Z1K9AdEhG+f3xt5fgTGJMy4yBgQCoXg+9Gx+HZ9zfNeVfKLQKBPxQV6/bHRyZPvZ5ssD/09/fCACPja3mrmGGMa3fg7ITEYCQAiY+LRGOaOVCrdHADwMiDYK0wdBIeFeDqcKWpd7AcSRR6MQanWNDEAHBhxEonkJ/cV4zbV1qslUqlvKC+RyT7NzjJcdr5sWSuVK7o5jkNhVc3ejfQbQUHQclEqTeuTC8fXGzQM26vrosNDIqTSn1cuXEoQR+a+SJw1Z7/H7cqIUsgdlnjWNummfIooijJuRc7yE29eP9n0iB5BH8uw+mR/SKRM7ik8X6cdq2CoaWLXIJE/C5GIpJR55QDQVF9uSxylbQAAZBtXv1tSts3+b3Kdl3DKO/xRlZxrNKfpTdT6z2N1E1JzDcH8zVVnyHF9+BMkJ/adazSn6VfSDpt96aBeGhEy8oo6sgzFrnXWuvyDJAz0dtEvnPXQ9EWWsuY0vZl21F4agAe9FFlLkecYs/P7Z1dZMNCnkSmVX4hAAUHQ0h9Rqho1uuG07XjJRPYf+wsRMkb3a7brwQAAAABJRU5ErkJggg=="
    },
    {
      name: "Playfab",
      favicon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAftJREFUOI2Vk89LlHEQh5/vu/vuu+vKlpQYUmqwmbCdykII8dIlFDp08BKRFdGPrQ516FaEkR3qIPgHBEFEXYIiwkOHTqZiRGEEZYGXSGvVbd333X3fT4fWbXXbpIGBgZl5Zhg+gySzjqPARyMDh3SWhzrHfY0M9Cv/E0nGSDL828RF53w+7w0jwIdolq8Mz2yhqY3wus3vx2DJO21scA7cOEyy8xmz00ma2gAMf1250j9MopPM6ATL+vy2MmckmfCqacDEPIRhQ0Es7N1czogw8Ok1uMvQ3lluWgEoEMRGuenlCmncbD3xjRkiZkgduoUhcMNEnQdHvrFAgWtjzezcJ8BYK6TYKGe8xcwVQjLEG55SzNWRXRp6md1zEINfKlsGcpVHsgCNz4HnkUYwuD2SUh99g8n4fgJxdZ4LGIqRAi7991q4PplkW8fvA5YA2Bbge60Yy+9p5AtATyMTBAEvXBKAb3ygZRfs2A11CVO5QSkK+VhBqPsVT25P09U9znPsEHcTTAG2AAKftbZaBxK4P3ovv6EXC4g2zB9t99K4zLpFnGhQrAEQIBnsWP5UczS11eGYG5Dp2sQd6ovQc+l4FMVpTVUBkMTUnOBxYZFHWffd9zVCqhbXKuFVSdlTOaz8kZr/8ueIgR9CgVWrsJaFy3zb+YjtxP4X8Atq4B9ZS2fStQAAAABJRU5ErkJggg=="
    },
    {
      name: "AppFlood",
      favicon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAAA3NCSVQICAjb4U/gAAABxElEQVQokX1Sz0tUURT+zr33vatv3rOiBM2mJqmF1EKF1hW0iWqVf0m1ClqUblq0alcG0abAINq4SWyrEgkhRJPgOEyjOFbQzJ33a+47LQYGnVG/5Xe+j3POdw7thPbRamOuFDdSFoQDkTF8h6bO6elJXz382nizHt0t6PO+ZIC5W00EAjYa9vV61GKouVI0VdAzk/4pLQD06NHu+jvOBPC+FKlmiwu+HO4XffKQgQAAksRoIEPLShANOKSIFqrJym6qBO7k9dgx1WWwDAYkkdICZZM9+FJf3ErKxlrGh814esK/cdrdawgc8iQxoLSkj+WoFnGSMQBJWKqlr36GY8fViCfa6nrK85V4cTtxBRQBv5pZu3B9yL027L740VzZTcvGtg2ft5PZYrhcSzeNPeEKtTeW+5e90UB+qsZnc/JCIC3j3Ub0bM2s/ml1Etu33FYzuzig7l3KXTmpPEWzxXDmm6kY2xFwl+HpmrGMq0NONcyefw9fFsO/SdZ9lsG3O7VoHzviiXrK/9LeG2KwTyjbw3cy6IVliH55WPUAaAFxO68Dh476CgAAAb5Dt/JaPZnwCZivJKZ11HvnFN084z4e9/8D2IG7lvzaKDwAAAAASUVORK5CYII="
    },
    {
      name: "Applifier",
      favicon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAvBJREFUOI1lkl9olnUUxz/nPM/7bu/rwjk1dbaBa8ZYr4S0SVAR9A8hFAqTbvp3lVFgdVvQlTcVQTcadddF0cVsBkZdtIyZ2K5abrpsrs3Nf83UNue793l+v3O6eN9J0YEDhwPfD1/O+Yq7c6VG14FfOTw2ffE+VBGc/1dja5HeLZtH36mwZ2Mzk3Kh6j3PDV4401RuIimkaFowdEX0b5DjUYgh11BdZvnmEl8+231/+sE4nxVLRQrlkkkiKGANnYiCgIpgDi6GO0YqOK7HLvOtPPL5eS+sKpE0FwxzYozgDiKICKqKqIJDjIGsVqM1icxdXdSuspAagiMWaoEsy8iyDIsGQJqmFIoFkiRBgBgCrUlgcHeHvnfiIgOj86RuTgyRaIGXe8o81rFWO1cXqQbj1J9VDpyct/lFR1TJ85y/85yjkzfYt/1OBkbnUTfHcyMsBzrKic4t1Bic+Ivp68vsaF/Fwcfb9dZSFclrjLzYrZ0tCe9+f96qoeHSohFCJJrx5nezlmUZ5pE8wse7t+jOrW1sKiuzCzWGZxZ4+6F2fX7gdzs+s7ACiLhAVst4ra9N91bW0VZKmbm+TKlY/2ezOsTIV+NXeX/nFixGpq5VG4BgWHR2dbewr38jX5++yhe/zFshEV7q26CP3l3EzInR6FzdxOXFDI9Oa1MKgJoZIY9U1jcpwEfDF+3nmQWOTd64HSELRlGENx7czKGTl7Bg9HW01B14PSEMnVuwvdvW6uEXenXo3A3672phwx3FRoiFLAr7j0zxzcQ1e/KeNdrdVmoAoiOKHp+u2utH/rA9lTXaVko5dOISlxcznt62npuZUkhShqaWrLW5yMFntvJjw6G88oOPjJz6rd9dLcRAjBEHVLidxkQTRBV3g5jz6gPr9NOfZumtbJ+QuUXveeqTsTMk9aO4iNVt1xupTyKCuxHyTEOeEUNgaP+OJ8TduXKLrreGOTo2Pt5TF6wg/js5jptxb6X37IcP665NZc7+A0lYfdO2lKYpAAAAAElFTkSuQmCC"
    },
    {
      name: "Appoxee (Teradata)",
      favicon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAAA3NCSVQICAjb4U/gAAAAwklEQVQokWP8cmYBAymAhYGB4de+WiJVszk1syDzecKWMQsqMvz78//3NwYGRkZWTgYmlj/PL3zdlIliAxwwi6gzcQoy/P/PwMzCwMDA8PcPAyMjE68kupPg4PPyEEYGxv+/PvEl7v3/58enRV5M7Pz/vr/DqeHf+/sQxv9/vxn+/vr/7e3fb2/RvMGEw3uMOMRxasAJhowGRkYmBkZmrFIsWEX//fzIiMMs7Bp+39jCyClIgobvR3qwijMwMDCSmrwB+sQ6nnQuMJUAAAAASUVORK5CYII="
    },
    {
      name: "Photon PUN (Exit Games)",
      favicon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAAA3NCSVQICAjb4U/gAAACM0lEQVQokYWSzUuUURTGn3PvmXlHxy90nCQ0RCTMooEwW9gsbFELsUVQtMh14GhU5qKVf0DrggoiaBXZwqJcBUlbjRDMNg0EStnoIDav8/Hee04LbSNFZ33Ow8Pv/Cicm6h8uI+Y4r8TUSKbo607ZAIG4IxnsaoCgMjs7SgRJCJiABqRSsQ2BvWeSK1CI6eNbRRukhEPJSLUYFTFRsZDQACMh4pTVyPZUc5carm5kjw3IxU1Cvi/9GREFPRfQEuX3y7EjwyaxrSmjwIQgnUQOnhAu29uJYZn/MYyd2elmI9WZsP393R3i0hJACGjKhbGw4MAsOWm8Nmo7Rzg7qxp7TFBSn9umiRQRTwJ2zmAhi4+NmLSx6WwWn01bm+3L0DKDWOzsAkp5qkpTYFVVOOZy5zqCUYfcN+Iae+P5qf4xBWKJ+30ALj3THD6uoqrvL5h6tPckfHFfCJzjaz1X9/J+hL3jdrDp0xHBgSmdMq09UoxLzvrfPJq6fFFABKQW3pZPzQWOzsNX629nfJri7Y7i3KBwrmJxPBd+f65NJ9rnlwpPTlf+7JgYwIg3nyobnzRrc5VXkxQDBAQgaOPT6Pl53BlAuAi1LUaETVEolLaKD8clHCbAsACgAKMsCQUGlXflNojLcawqidEDij82Mda+4NVGTBwAJe3fj0a0u01jqtTEEGNITn4bBZHhokJjpS+fVKGhTKR/4eyJpHNiVMfgRSIKZEKwWMvWJTVx6D77iKRzf0GZLYKeH4tozMAAAAASUVORK5CYII="
    },
    {
      name: "Urban Airship",
      favicon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAjBJREFUOI2lkktPE1EYhp8znV4YFKwlIuGiIsYFLkiUKDExYgw7xL/g1h/iX3Dl0pUmbHTpRnaaojEG0NA2SEfolGmp006nc/tcNFLFakx8Vyff5TknOY9a/bIfiIjiePrVjlqiREQppUSPoyjRF/BTFKA0TbpzgkgPpP9pWSlQKMI4puMH+EGounXFQDpFKqkjIuj9bhOg0WxTqdbxXY8UkNQUSU0jiGI6wGB2iImzuR6g+0xFq92hUrHJahq3xs+Q0RPYjsv+oUO96eJ3Ajzf59X6Jst3r/cAbsdnr1rHiGKWpicYNtLsVOt8rtb55nrYjotZa1Co2Lzd3sVpe8zNXkRTgOcHPH25RnBwyL0rM2gKPplVSlaNLdMiXyyzax+S0BSNVpua08LIpMllh9BRCq8TcOPCOA+XFrAaTcp2A9txySST3Lx8Hj+MWC+VeZHf5H3RRAGL87PMTI6ih2FEfqPA3EgWLwjxgpBTgwP4YcSHnT1ebxR4V/rKQcNBopgTJw2WF65y/848ekJDPc5vyJuP2+xbNSpWHT8IOXBa1JttAIx0kiEjQxwLudwwK7evMTszSULTEBHUs8Ku6IkERdPi0ZNVpidGGRocwKzYeK5H2w8I4phL58Z4sLLI6OlhojjuffvzYlkA/CCkZFpMjY1gZNKYVo219S2MTIqpsZEjsPzQ8DgAQNMUIl1VlVJdN1RX1Fjkt2XgVxPjuDcgIkj30M/0o2h/7f5D/hvwHcCRIz4/n9tVAAAAAElFTkSuQmCC"
    },
    {
      name: "Swrve",
      favicon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAiRJREFUOI2lkV1oknEUxp+/76vvTNtSWx+zVbY2t2HiZiMERYm6GGV1kyBCFAlBF+smGBHRjRThVXSxq+gu2lyxWbGGQavRqKCtaDD7nBiZXdQY8+v1VU8X5XDxRsHO1Z//+Z2H5zkHWGWxfwGLebLyHNaLJaT0a1j8v5UvPP64q6XL9dTYZqtsbe8mY5tNatjRHV0g2lLLcXLDQ0OkGwj5HikqJasgqJhSpYQgqBQcJDPPa1ti9+7cqrIKOYHxuYFDlWLB9Csk903faIygggIANNRrCrWsrEAyHm+tvjduMw1PPRj0Xbw22bPZ5jrh9Rw5XcvycgLNOy0fPr+bBgCkE/MBb/Bcyu9kYQCzTTevrmBXXIGIOMZYmYg0VmfvpFTIdFV7nFJ42xkMHYsEHS9kI4hEDrf36Gubx3uXAeU9gbED9YZNI9V+WRLNU+G+21+IDHKuMf5k5sYGk4U6djtpv78vVP3vvz7R2+nY96nd7iSj2UaLRTou68Dtsk0oeR5EQGLuZX/gbPgUAO7KSc+YztD0cNlJBdtld0BEyjPnL8VGoyNutSAAAHhBMyvUCamlhR8uhQLqpUwGr6ZnfI0aFqnOLV+BMSa9/07+4Wh0VA30AEBJzFpKYtai+O2TE9TPk3Hcl40AAK0G9jX15tleta75ci4vpnLZHHLZHDKZbJ5xaweTB2OH7XaWk43wZ6XTtE6vR4cE1FERCa2Wzf+NXVX9BEXcwhiuUGgUAAAAAElFTkSuQmCC"
    },
    {
      name: "Fortumo",
      favicon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAlFJREFUOI2lkk1IVGEUhp/v3jvXKadRZ0yzJEvJlNII2kWJizZRIkESCC0SXIQQSRtXZW2iHzcRtSpokYtw0zIkpRaFgqaYqVFBYfgzjD/jOHPvnfudFpVSaUi9cFbnvO85cB74T6n1GnK9tQLfayccPo6v+ynd36DqGmO/zxlrmh/cPkfQHpL8wgY2hUJiZ9Uy8Lx6QxdIR9sOfHdYh3MjaEEphUovTxPIriYxF0ORx+JsBjeTUDcf65UAudwcQKsAGaeYcO4QOZGgiEbFZyZZjJ8ma8tRgsFmsrOjeJ7Hwtw4xXsuKgBpqW9ga9ElrEAFVqAT257QiflbhuP14nt3MFSjRApPYWeBAEqBaFQqOabk2oU63OQTHSmwRYDlJczEYgem9RQtlUx+Ou+HwlXfN2VAmWAYYAUwROIWC7EbOpRr82EMFhcwfS9GMGeavHCUop2SeT9UZcRnUYYBIohSIAKiwQ7OGkx9ydf9L9Bv32DOzY0Sym1jaaEmM9jXRTKRZe0qPyNOCnHSiJMGJwVuGkOLQ174qpKmk42MDtSxu2yc6PZRJoav+KnkXjFMlK8x9x2sJxQU3o20YgWr8d1ZDGOQ7Oh91dndu/qF9pZt9L967U9PlijLQhTgZzBzIt3q2egxOVurKKnIIzaTUve6Uj991goAfS+b/MnPJZgW4vo/KFEw9dUAUI96BHri65M4MRLA1+C6q7W0BAWFy2sR+GdA5YEplU6D66A8D1IpTK0dDh1++LeAXyRHSu9K+eaklNnzUh39KDWlJzZs/ld9A705BAhn6CRYAAAAAElFTkSuQmCC"
    },
    {
      name: "Zong (Paypal)",
      favicon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAbBJREFUOI3Fk79rU2EUhp9zv15usUosEgwxNWlxUREXtTrYQaKTnUS0/gkd3KQIQqdKcdJCVt2E0urmILjEQaWFlm4iFFOSmNLSyk2bxlxzv9Mh/mjsbZcOHniXl/c8cF44oqocZJwDbQMd/xrrVYaOZXMvUke9BgIoiIhePtNTevLgxstMksf7AhYrXKey5pXqxgP54xeLy7Gppx/HllZGayfjPNvzhLf5Lz10OWAMSAg0WzIh9CqFAld35ncBcq/yp3AdQBG/iFTLLW2UYf0rNyffXGvAkT0AluX5cgYjYJuAgGNaEoP4DTZO9Ha/XuR5ZAehdeLoL6sZgFWwFsIQKj4M31G6Y2IEGwlY9RnEAxDEKJJKqJgOtcnjIpcuYhMJoa5cSDAdDVijHxfwt3Du3wvDZNxgrdC0aBBA3XL3fGqm7xBTkYDZhW9pXJCfwOFO2NwEFQbPZmbSLlu307wbiNuxndW1AXKT+dP8sKjrYjs9h0bArXOZT9P9XPmbau+9DTA+MvShVq3Nf1793vUwcLJYyMYosd+o6i7N+TrMxJIyUdD3K/ooKvNb8t+/cRvSOcN8WjkQLwAAAABJRU5ErkJggg=="
    },
    {
      name: "Boku",
      favicon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAeFJREFUOI2lkLFrU1EUxr97333Na/Je0CgmQeqQyViEYmpFqnEIpWC1LjrVLX9Ai3vBdrCDQ8AO4iIFoR1Eh7Q2o4MYSgUJVaGDGgOBGFt9r7X1xdvkHqe8VqpJxTMdPs73O+c7wH8W26eskr/87sE9c6102d36HhVCQA+FK7K7P3cskUy3BNj21zExN5Ux3s5D1hUUABCBQ8HoDGLj9NVKKDV5CjHmND2i2ZSkPGPdH83UVp7B1S2A74IbALZ/SviXH0Vt6X6c/EzxTIRVgT1j5sOJBflmEUq3/hKWQWoBBFaeHh4vzGabMgeAfO7xjdCnl9G65m/3M9RIwPc61/dik5IeoCdgpN31IsB4azcAMAHftyLU7O2jHkDYZQITrY17otS313D24pW0B4DewQE6GAAA4zqk8+W9B9gQwSLXDngBKYhgBKvw5T1AITE0o0IxgBrttyuJzUg33e1KZT3AwBH/0o8LN5cNqqFlFFIwD4Wx1Ts0/eQEcz0AAEwnRoZrqTHbIBcgtd+sdmAaPlTjg/Nd/YOjTdkLPhFm1Z0yxW91mtlAfq6POyWAaQABXNNQP94DJzmyELl0bfi3SH+6dLGy3nv+w6s7TuF5Q3VYPBg7WSycuz4zYLGltk/61/oFX8GmkUWNbS0AAAAASUVORK5CYII="
    },
    {
      name: "Prime31",
      favicon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAGhJREFUOI21U0EOgDAIK8bP+P/H+Bx2UeNqxzBoT4PSriEbUIQBcKqx970L28GTRg8n4UtBDABYJ0mMaufe3UANR+YhORJwX+7gETPCaIkepJga2BcJ0vj9HSjuPJsi38LlZ8oIC5f2aFSkGA7cTRTbAAAAAElFTkSuQmCC"
    },
    {
      name: "Countly",
      favicon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAwFJREFUOI1Nk01oXGUUhp/v3u/emTuTzE1mkkkbJ0VsbI1CixkVKrXFydKVFCyRQiutC9GNXQhFXUgt6FYrRYq4FDfVgsUipCRZtCBm04UFkXYSYyY/TTJ37vTO/ZvvczED5sDh/HDe98A5vAJgdunNuY5IT2itpdYAGmLQsQIA20DYopcLMIRIHS0Xf6j+NCPemJ+Zq4de7d9tjzhMCaMEJYA/W7DT7oGKA/B8AQtBNmNhZEwqJZdnsu4dcezGK8m9+3/LMS+PSrugdG+RKYhJEAgkElMbIGDdW2V85GnWBlscOzKZyieqI98rzfLiqWmUUghAaxBCsNPYRkqJWx4iTVIun/qM9898QPXMy9z77S6/d+9KqZXCdVz2OWP4no8AbCeDaZoou4tlWZRzZS6cPM+Va1cYfraINCSu46K6CsMwDEayJQ6XDzF//Q5vV2dx2lkmiwcZH9jPgaEJNu9vUJ2exrZtvnznC0q6yIhTwjANDGEKhjIuY5kxvr52FYCK+xSVQoVyrsyoM8pLz1U5d/YcmZbNxYsfcnj/IQp2AWEIZKwSHJnDtQsATE1NMZwbZsh2KdiD2NJm8uAkR6eOstccM0usEmSQRCQyIVYxlmHRWG0Qq4RIRURphDY0KSlLfyyxsrzC8ZPHGR0ZJemmdLoRRkCMH/lsdrb4Zf4WTb/JzVs32exssd3ZoRk3ub1wm0sfXWJtu0HttRqP4238yCcgxmgZMbvBLvXWMg8ePuDy1c97tbfMenudVW+N/MQAn3z7KYEMCPyAurfMbqeJb8TIsBvQDD3qzTrjr1YQQgCaR806jztbyNQiCmPSKOHnb27w+ls16q06rdAjyHeQ7HRZWF9g49cNlFL/X0kI2r6PaZg4+RwCeOHsEb7/6jvaxSc8Ch6CmSLEx3aiw1iyD8gDdk8wCOCfPtlET189t8BLoAEia6dSh+kiK9T4C8gCmT7YAn7sE5wGkj5BlEDYm9UH0sWeRt8Vc/icQCMRe57d7UdzT08DgpRBFrmuZ/4DQQNEdMJUffAAAAAASUVORK5CYII="
    },
    {
      name: "Kii",
      favicon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAWlJREFUOI3VkbFqVGEQhb8z/92b1s7SQgvBC2IpgpWNnZUPkJWARvAhbBRBtI63MGCVKiBoZaOVYFDcJVj6AFooEXL3v3MsNmyRZuucbs7Ad84wcOYl9x3AQ3ABfdF09smvO6hsYyZYL8AQfsTIS23N8c6V2wRoOn8n73TQylQD7Gs6u+O+60GbNMAiBfpK6CqZ+0tfv5Cg5uWgGKqpI2CO3XcgbQ41YeE93ZsD/k4a0DfCvzFHpP8h/2hOXXSE/X6oSdvGSPruif8WcYg5wAb7MQCOyQowpmkKF4fqm1oaz5fpQBtPPeQFwUccfwk9WS7yIFbZAuBn27CwAXRrVWz08ZiAGICF0zgNRF0BQgJjrD0Ehmvuuxvr3hin5g3E/baIRTWYZ+sBoyBECQBvaDr7A8xKCIqu+1V3HmhKAPYE3EhCEtiloQRk7koW1ocT8IMS3iIR8jlGdoUvIX0mmYPfIEA+XNfwDOg/AZCnO4UtwssAAAAASUVORK5CYII="
    },
    {
      name: "Bee7",
      favicon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAAA3NCSVQICAjb4U/gAAABuElEQVQokX2SPUsrURCGnxOUXRUrjUGLtIL2Wi0kQVQsFUQiGitJoxYBrcTOws7ejyqV+ANcFbSxt1EQLRIEJR+ysk1CzMwtdr0h92reamYOz+F9hzGqSmc1mxQKxGL09QFoZ11cSCIhiYQkk3p3p6qdADk5kbU1LZdVVY6OZHZWRf4DPE/v7/XyUo6PZXpaa7VwXiiI42il0tXy6rqaz/P6yvg4IyPc3pqdHSwreNSzM6JRBgZQVfV9Sadld1efnkIzp6eyvBz+/fIiS0syN6ePj2EGyWbl/LzlyvclldLr67B9exPH0VIp6CJ4Hg8PZn4+NFavay7H4CCpVDiJxbAsSqWgi2BZNJuUywDPz5rJ8PVFf38rmzH09lKpfAM9PSwu6saGbm/r6qpZX6dWo1rFdduYej0ouwCzucnYmL6/m1wO4POTyUk9ODCqzMwANBrYdgsAmJoyQVEs4vtma0vjcd3fJ5/HcQCGhtqBvxoeJhKhWDSZDMmkui43N9g2o6PfGf5RdzcLC3p4SLVKPG4mJvA8VlYwoQPz47Xq3h5XV9g2jQbptMlmW/l/Pe+PDzyPaLRtxfAH4N5Be3i6H2wAAAAASUVORK5CYII="
    },
    {
      name: "NinjaMetrics",
      favicon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAAA3NCSVQICAjb4U/gAAACjElEQVQokT1SO0xTYRT+/t7bB1ShFqX0wXNxMTGRMMhAVEIQ0WjwkeDsoCYObi6GzcRV3TRxIAwao6bWaIgiEeShAkp4BEpKqQgBCrHYltv73/8chwue4bzyfeecnHyipbmJiACAwQAzY8/bgXcLO2N9c2NDEQkhiIiIAFaKbIxSiplJEYRQSjGTspSmOwiApmkMCCFsqM0HBDOEw2E3iRhCaG/eREPhSDw+N/5zBqrAxHs0m7O7x/bMLP5fuLa6NDI8PD72fWhk9EPfIACvCy63R3c6hXAQkZRmJlsQbe3nbl6/1nDsaCAUBiSUApEljemZ2eRiYj6eSCRTv5ZSDC47UNJ8ohH+YAQoAtynWlrfxV6yzJCRNrZ/y+zKj2+fuLCqtpPyz4LcmjM2pnKrE47sjhmuCYVrIpMzs21nr9QeOf74aY+UBV0DyOrovJFcSinLzOX+Gjt5YyePryMDAPwVEcBbVFbhD1bC7QN89+91TY/1pVMT/khd7MUTY+3n5uLQZmIATNnhwb7TZ9pHvnzsunun4Xgj9pcDLvsTVzsv9Ua7Ac+rnofZ5dH0widRyKVdut7/eeBPZvvC+VYyjfX1dGIxuZBIPn/d+zb2ESW+w5WH5qanhnq7q0OHhNrZIrJ0TYxNTFZHAsVFbiYlwA5Bbt0Rfd9/u+tBideTL1jxmaUH92/p0djbqkhFKBSsP3aETFNKg5hJWVJJskQ+n1+cn409e9TSVB9PpDTBolhH3gIArxMXL3ecbGoMBsrCFQdLS/Z5XFrpfq8QSkkpTQNMbElRVx0mIqWUUiqX+5vJmtgzF1Ae8Hm93kiwnJgFsLyyJmqrQkRk68RObAnZUyzLYmZLmgwwQ3c6/wGGFKgkOgS0DQAAAABJRU5ErkJggg=="
    },
    {
      name: "LeadBolt",
      favicon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAmdJREFUOI2Vk1FIk2EUht9tmrrEopWakJpGkGFRYGUZ+RsNzNiCGGYpuFYrzN1ElnYRFFYWNRuBeSUbhbC8iOw3vahkVFotFbVf6yIx0bRooOCmbG5vNzU2m1AHDnzf+c77wPlejowkIobfD0yPo/ZbGr64gXhF8CXjXg5G/lzkkdVLhgZAcmjhfwBHfHPu3QC6/xGgABb8kMsBBJAz+qbtVHTc8moAYTMvBVC2d7Qeh/t7ViAASHbz26gY5RyASgAHQhujFivNZvOFtjaxVqmQjU00vCh93zvwWO6d42T/68MTn/o0m0vObQkTkAymyWRqFASBA30ftJz+CfMQYXKy6KyTl3ZU3g7UDxEdUwzTBA8ul0stCAJJppOE3mB4ZCjMa+2cpEzroPVKPw9ZLhqrKXUmhgKCI+j1enN2dnYjgNHCg0WT0b5ZT0lZ+Y3mMVxNVeL+5cyZd/u7Bp96VmUqqrPyr/31iR6PJ91isZy3Wq1nOD8b3fDEkfl8o+GJLICuXc47W+EaSczNV9f19fSoI7pAUgHA/crhEDJS1jyrHwam5qHUZ6Dd9rD5rj91W9rePbmDPp8vPiJALpd7AWyou3W96fP4j7LtK7Hi2Dp8ZW+rzrcsIU4BOEVR3BcbG+uKaKNKpXLqdDprS0tLXkraerGpPHc6IS5meMYn23S6ouIkAEiSZKyqqipdysYMQRBot9tPkIQkSZqampqbJNeSRHFx8Uu1Wu0KdSDMRpIQRbFUEAQajcYHJFW/6zs1Gs3HgoKCBZLJiwGyCOuco9Vqm7xe72oAAZJRSUlJ3Tab7SiA+cXNvwBqS1ORxbKzaQAAAABJRU5ErkJggg=="
    },
    {
      name: "Inneractive",
      favicon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAATBJREFUOI2lUz1LA0EQfXMXTokWChoTFQPiDzgrK2FTpRausLSwslDRTiGgrRBJBH+AlaWlhRBBQSz0rKzWQiQQUDDYaA5kLMIea3bPIPfK9zG8ZWeImZEKagAHUnAgD/v55eTuu551dPFInmzW/UpipfvCNn/w14jOZWzGul/hrDvYXr3bGVXBpKHEzNhYWLMa8h0XrYHvpCxqt8dkbQAAKy9ZAMD1xBAAQHqvVp/TS8x8unFYx1w0Dgdk8L8a2II6ZqMxMBhP3pvZIN9x/wwrUE8L4wn/RQYAauWDEi7O/RA3fRcp9qtGzAwiAherIoyaDSXMe1NL9Lx1BgBX4rQRth+F0tYf9gnobqLxjTlnuDXd3Cvo3OLlcgnoLphRJ76FYlUYogUcSF/PUuprTIsf0Rxq1C8DIZoAAAAASUVORK5CYII="
    },
    {
      name: "Supersonic",
      favicon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAcdJREFUOI2dkl9IU3EUgL/fvZctvXOEMBMsqTAzq8daUAgrhAoicFZWrhwSRUQQiO0hCiToD0EvQRQEYtRLD1H6EEUg9lBR25peQ18rQe7mmHebMNj154NgyO5get7On+875+EIKaMuCuptpOyxrHwDFYTXq88gxCBue0DIfOyelVuIVAKWiDzV94VciJtWNu9bl6BGT2prgXPZHMav34x+HKNp53Y6uzt8WiXQRHySr2Pfif9IkE6lqav3ca3/CgCOgkw6w3jM4Oe3GInoOClzbqWnqio3B/rw1HjKC8zZJO/ejDBlTJf0zoZP07K7eSVXnATNrTt48OQu/oP7VtV37W3hVCi4quZ4QSI6wdDzV0wZ02xubODfnxmqqjZwPXIVTVPLC6SUPH74lM/vPwFw5mInBw7t58alfi5c7qZx65aSZf8F8zmKz95iDY9SEJJwuIvzvV0kzRRHjgU4ETzudCxi3hiRi8NfWHz5Ab1Q5G9PO5Pb6gi0twFg2zZ20cbldjkL5ppaJYqCcrINJXQUNtU6DpYLIYcemZZ/j4+NnjWBsPzKCsHDL9YDA6CIQY1qecer6i4k5ywrX1/RZq8+i+A1bvvWEpnon7mT+ZlkAAAAAElFTkSuQmCC"
    },
    {
      name: "Vungle",
      description: "Vungle helps mobile application developers promote and monetize their apps through in-app video trailers. They enable developers to get a short, snappy video trailer made and distributed through their in-app mobile video platform. They also generate incremental revenue for developers by displaying video trailers inside of their apps. - See more at: https://www.crunchbase.com/organization/vungle#sthash.1ovAGY11.dpuf",
      founded: 2011,
      hq: "San Francisco",
      url: "http://www.vungle.com#sthash.1ovAGY11.dpuf",
      github: "https://github.com/Vungle",
      crunchbase: "https://www.crunchbase.com/organization/vungle",
      platforms: ['ios', 'android', 'unity'],
      tags: ['advertising', 'banner ads', 'video ads'],
      favicon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsSAAALEgHS3X78AAACiElEQVQ4EaVTzU8TURCf2tJuS7tQtlRb6UKBIkQwkRRSEzkQgyEc6lkOKgcOph78Y+CgjXjDs2i44FXY9AMTlQRUELZapVlouy3d7kKtb0Zr0MSLTvL2zb75eL838xtTvV6H/xELBptMJojeXLCXyobnyog4YhzXYvmCFi6qVSfaeRdXdrfaU1areV5KykmX06rcvzumjY/1ggkR3Jh+bNf1mr8v1D5bLuvR3qDgFbvbBJYIrE1mCIoCrKxsHuzK+Rzvsi29+6DEbTZz9unijEYI8ObBgXOzlcrx9OAlXyDYKUCzwwrDQx1wVDGg089Dt+gR3mxmhcUnaWeoxwMbm/vzDFzmDEKMMNhquRqduT1KwXiGt0vre6iSeAUHNDE0d26NBtAXY9BACQyjFusKuL2Ry+IPb/Y9ZglwuVscdHaknUChqLF/O4jn3V5dP4mhgRJgwSYm+gV0Oi3XrvYB30yvhGa7BS70eGFHPoTJyQHhMK+F0ZesRVVznvXw5Ixv7/C10moEo6OZXbWvlFAF9FVZDOqEABUMRIkMd8GnLwVWg9/RkJF9sA4oDfYQAuzzjqzwvnaRUFxn/X2ZlmGLXAE7AL52B4xHgqAUqrC1nSNuoJkQtLkdqReszz/9aRvq90NOKdOS1nch8TpL555WDp49f3uAMXhACRjD5j4ykuCtf5PP7Fm1b0DIsl/VHGezzP1KwOiZQobFF9YyjSRYQETRENSlVzI8iK9mWlzckpSSCQHVALmN9Az1euDho9Xo8vKGd2rqooA8yBcrwHgCqYR0kMkWci08t/R+W4ljDCanWTg9TJGwGNaNk3vYZ7VUdeKsYJGFNkfSzjXNrSX20s4/h6kB81/271ghG17l+rPTAAAAAElFTkSuQmCC"
    }
  ];


  //
  // Notes:
  //
  // Appsflyer: Install tracking and attribution
  // Kochava: Install tracking and attribution
  // Adjust: Install tracking and attribution
  // AD-X: Install tracking and attribution
  // Apsalar: Install tracking and attribution
  // TalkingData: Install tracking and attribution.  Chinese market
  // Fyber: Formerly Sponsorpay
  // Upsight: Playhaven merged with Kontagent
  // TUNE: Formerly HasOffers.  Has several products: HasOffers, MAT (Mobile App Tracking)
  // mobileCore: Part of Iron Source
  // Bee7: platforms: ['android', 'unity'],


  var data = {
    kits           : kits,
    platforms      : platforms,
    platformAliases: platformAliases
  };

  if ( typeof module === "object" && module && typeof module.exports === "object" ) {
    // Expose jQuery as module.exports in loaders that implement the Node
    // module pattern (including browserify). Do not create the global, since
    // the user will be storing it themselves locally, and globals are frowned
    // upon in the Node module world.
    module.exports = data;
  } else {
    // Otherwise expose jQuery to the global object as usual
    window.data = data;

    // Register as a named AMD module, since jQuery can be concatenated with other
    // files that may use define, but not via a proper concatenation script that
    // understands anonymous AMD modules. A named AMD is safest and most robust
    // way to register. Lowercase jquery is used because AMD module names are
    // derived from file names, and jQuery is normally delivered in a lowercase
    // file name. Do this after creating the global so that if an AMD module wants
    // to call noConflict to hide this version of jQuery, it will work.
    //if ( typeof define === "function" && define.amd ) {
    //  define( "jquery", [], function () { return jQuery; } );
    //}
  }


})(this);


