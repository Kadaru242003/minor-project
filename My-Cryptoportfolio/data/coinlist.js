const coinlist = [
  {
    "Symbol": "BTC",
    "CoinName": "Bitcoin",
    "FullName": "Bitcoin (BTC)"
  },
  {
    "Symbol": "ETH",
    "CoinName": "Ethereum",
    "FullName": "Ethereum (ETH)"
  },
  {
    "Symbol": "ADA",
    "CoinName": "Cardano",
    "FullName": "Cardano (ADA)"
  },
  {
    "Symbol": "DOT",
    "CoinName": "Polkadot",
    "FullName": "Polkadot (DOT)"
  },
  {
    "Symbol": "XRP",
    "CoinName": "XRP",
    "FullName": "XRP (XRP)"
  },
  {
    "Symbol": "BNB",
    "CoinName": "Binance Coin",
    "FullName": "Binance Coin (BNB)"
  },
  {
    "Symbol": "LTC",
    "CoinName": "Litecoin",
    "FullName": "Litecoin (LTC)"
  },
  {
    "Symbol": "LINK",
    "CoinName": "Chainlink",
    "FullName": "Chainlink (LINK)"
  },
  {
    "Symbol": "XLM",
    "CoinName": "Stellar",
    "FullName": "Stellar (XLM)"
  },
  {
    "Symbol": "BCH",
    "CoinName": "Bitcoin Cash",
    "FullName": "Bitcoin Cash (BCH)"
  },
  {
    "Symbol": "DOGE",
    "CoinName": "Dogecoin",
    "FullName": "Dogecoin (DOGE)"
  },
  {
    "Symbol": "AAVE",
    "CoinName": "Aave",
    "FullName": "Aave (AAVE)"
  },
  {
    "Symbol": "UNI",
    "CoinName": "Uniswap Protocol Token",
    "FullName": "Uniswap Protocol Token (UNI)"
  },
  {
    "Symbol": "EOS",
    "CoinName": "EOS",
    "FullName": "EOS (EOS)"
  },
  {
    "Symbol": "BSV",
    "CoinName": "Bitcoin SV",
    "FullName": "Bitcoin SV (BSV)"
  },
  {
    "Symbol": "ATOM",
    "CoinName": "Cosmos",
    "FullName": "Cosmos (ATOM)"
  },
  {
    "Symbol": "TRX",
    "CoinName": "TRON",
    "FullName": "TRON (TRX)"
  },
  {
    "Symbol": "SNX",
    "CoinName": "Synthetix",
    "FullName": "Synthetix (SNX)"
  },
  {
    "Symbol": "XEM",
    "CoinName": "NEM",
    "FullName": "NEM (XEM)"
  },
  {
    "Symbol": "AVAX",
    "CoinName": "Avalanche",
    "FullName": "Avalanche (AVAX)"
  },
  {
    "Symbol": "XMR",
    "CoinName": "Monero",
    "FullName": "Monero (XMR)"
  },
  {
    "Symbol": "MIOTA",
    "CoinName": "IOTA",
    "FullName": "IOTA (MIOTA)"
  },
  {
    "Symbol": "XTZ",
    "CoinName": "Tezos",
    "FullName": "Tezos (XTZ)"
  },
  {
    "Symbol": "ZEC",
    "CoinName": "ZCash",
    "FullName": "ZCash (ZEC)"
  },
  {
    "Symbol": "SUSHI",
    "CoinName": "Sushi",
    "FullName": "Sushi (SUSHI)"
  },
  {
    "Symbol": "DASH",
    "CoinName": "Dash",
    "FullName": "Dash (DASH)"
  },
  {
    "Symbol": "NANO",
    "CoinName": "Nano",
    "FullName": "Nano (NANO)"
  },
  {
    "Symbol": "42",
    "CoinName": "42 Coin",
    "FullName": "42 Coin (42)"
  },
  {
    "Symbol": "MKR",
    "CoinName": "Maker",
    "FullName": "Maker (MKR)"
  },
  {
    "Symbol": "300",
    "CoinName": "300 token",
    "FullName": "300 token (300)"
  },
  {
    "Symbol": "365",
    "CoinName": "365Coin",
    "FullName": "365Coin (365)"
  },
  {
    "Symbol": "404",
    "CoinName": "404Coin",
    "FullName": "404Coin (404)"
  },
  {
    "Symbol": "433",
    "CoinName": "433 Token",
    "FullName": "433 Token (433)"
  },
  {
    "Symbol": "611",
    "CoinName": "SixEleven",
    "FullName": "SixEleven (611)"
  },
  {
    "Symbol": "808",
    "CoinName": "808",
    "FullName": "808 (808)"
  },
  {
    "Symbol": "888",
    "CoinName": "Octocoin",
    "FullName": "Octocoin (888)"
  },
  {
    "Symbol": "1337",
    "CoinName": "EliteCoin",
    "FullName": "EliteCoin (1337)"
  },
  {
    "Symbol": "2015",
    "CoinName": "2015 coin",
    "FullName": "2015 coin (2015)"
  },
  {
    "Symbol": "BTCD",
    "CoinName": "BitcoinDark",
    "FullName": "BitcoinDark (BTCD)"
  },
  {
    "Symbol": "CRAIG",
    "CoinName": "CraigsCoin",
    "FullName": "CraigsCoin (CRAIG)"
  },
  {
    "Symbol": "XBS",
    "CoinName": "Bitstake",
    "FullName": "Bitstake (XBS)"
  },
  {
    "Symbol": "XPY",
    "CoinName": "PayCoin",
    "FullName": "PayCoin (XPY)"
  },
  {
    "Symbol": "PRC",
    "CoinName": "ProsperCoin",
    "FullName": "ProsperCoin (PRC)"
  },
  {
    "Symbol": "YBC",
    "CoinName": "YbCoin",
    "FullName": "YbCoin (YBC)"
  },
  {
    "Symbol": "DANK",
    "CoinName": "DarkKush",
    "FullName": "DarkKush (DANK)"
  },
  {
    "Symbol": "GIVE",
    "CoinName": "GiveCoin",
    "FullName": "GiveCoin (GIVE)"
  },
  {
    "Symbol": "KOBO",
    "CoinName": "KoboCoin",
    "FullName": "KoboCoin (KOBO)"
  },
  {
    "Symbol": "DT",
    "CoinName": "DarkToken",
    "FullName": "DarkToken (DT)"
  },
  {
    "Symbol": "CETI",
    "CoinName": "CETUS Coin",
    "FullName": "CETUS Coin (CETI)"
  },
  {
    "Symbol": "SUP",
    "CoinName": "Supcoin",
    "FullName": "Supcoin (SUP)"
  },
  {
    "Symbol": "XPD",
    "CoinName": "PetroDollar",
    "FullName": "PetroDollar (XPD)"
  },
  {
    "Symbol": "GEO",
    "CoinName": "GeoCoin",
    "FullName": "GeoCoin (GEO)"
  },
  {
    "Symbol": "CHASH",
    "CoinName": "CleverHash",
    "FullName": "CleverHash (CHASH)"
  },
  {
    "Symbol": "NXTI",
    "CoinName": "NXTI",
    "FullName": "NXTI (NXTI)"
  },
  {
    "Symbol": "WOLF",
    "CoinName": "Insanity Coin",
    "FullName": "Insanity Coin (WOLF)"
  },
  {
    "Symbol": "XDP",
    "CoinName": "DogeParty",
    "FullName": "DogeParty (XDP)"
  },
  {
    "Symbol": "AC",
    "CoinName": "Asia Coin",
    "FullName": "Asia Coin (AC)"
  },
  {
    "Symbol": "ACOIN",
    "CoinName": "ACoin",
    "FullName": "ACoin (ACOIN)"
  },
  {
    "Symbol": "AERO",
    "CoinName": "Aero Coin",
    "FullName": "Aero Coin (AERO)"
  },
  {
    "Symbol": "ALF",
    "CoinName": "AlphaCoin",
    "FullName": "AlphaCoin (ALF)"
  },
  {
    "Symbol": "AEGIS",
    "CoinName": "Aegis",
    "FullName": "Aegis (AEGIS)"
  },
  {
    "Symbol": "AMC",
    "CoinName": "AmericanCoin",
    "FullName": "AmericanCoin (AMC)"
  },
  {
    "Symbol": "ALIEN",
    "CoinName": "AlienCoin",
    "FullName": "AlienCoin (ALIEN)"
  },
  {
    "Symbol": "APEX",
    "CoinName": "ApexCoin",
    "FullName": "ApexCoin (APEX)"
  },
  {
    "Symbol": "ARCH",
    "CoinName": "ArchCoin",
    "FullName": "ArchCoin (ARCH)"
  },
  {
    "Symbol": "ARG",
    "CoinName": "Argentum",
    "FullName": "Argentum (ARG)"
  },
  {
    "Symbol": "ARI",
    "CoinName": "AriCoin",
    "FullName": "AriCoin (ARI)"
  },
  {
    "Symbol": "AXR",
    "CoinName": "AXRON",
    "FullName": "AXRON (AXR)"
  },
  {
    "Symbol": "BEAN",
    "CoinName": "BeanCash",
    "FullName": "BeanCash (BEAN)"
  },
  {
    "Symbol": "BLU",
    "CoinName": "BlueCoin",
    "FullName": "BlueCoin (BLU)"
  },
  {
    "Symbol": "BOST",
    "CoinName": "BoostCoin",
    "FullName": "BoostCoin (BOST)"
  },
  {
    "Symbol": "BQC",
    "CoinName": "BQCoin",
    "FullName": "BQCoin (BQC)"
  },
  {
    "Symbol": "XMY",
    "CoinName": "MyriadCoin",
    "FullName": "MyriadCoin (XMY)"
  },
  {
    "Symbol": "ZET",
    "CoinName": "ZetaCoin",
    "FullName": "ZetaCoin (ZET)"
  },
  {
    "Symbol": "SXC",
    "CoinName": "SexCoin",
    "FullName": "SexCoin (SXC)"
  },
  {
    "Symbol": "QTL",
    "CoinName": "Quatloo",
    "FullName": "Quatloo (QTL)"
  },
  {
    "Symbol": "ENRG",
    "CoinName": "EnergyCoin",
    "FullName": "EnergyCoin (ENRG)"
  },
  {
    "Symbol": "RIC",
    "CoinName": "Riecoin",
    "FullName": "Riecoin (RIC)"
  },
  {
    "Symbol": "LIMX",
    "CoinName": "LimeCoinX",
    "FullName": "LimeCoinX (LIMX)"
  },
  {
    "Symbol": "BTB",
    "CoinName": "BitBar",
    "FullName": "BitBar (BTB)"
  },
  {
    "Symbol": "CAIX",
    "CoinName": "CAIx",
    "FullName": "CAIx (CAIx)"
  },
  {
    "Symbol": "BTMK",
    "CoinName": "BitMark",
    "FullName": "BitMark (BTMK)"
  },
  {
    "Symbol": "BUK",
    "CoinName": "CryptoBuk",
    "FullName": "CryptoBuk (BUK)"
  },
  {
    "Symbol": "CACH",
    "CoinName": "Cachecoin",
    "FullName": "Cachecoin (CACH)"
  },
  {
    "Symbol": "CANN",
    "CoinName": "CannabisCoin",
    "FullName": "CannabisCoin (CANN)"
  },
  {
    "Symbol": "CAP",
    "CoinName": "BottleCaps",
    "FullName": "BottleCaps (CAP)"
  },
  {
    "Symbol": "CASH",
    "CoinName": "CashCoin",
    "FullName": "CashCoin (CASH)"
  },
  {
    "Symbol": "CAT",
    "CoinName": "Catcoin",
    "FullName": "Catcoin (CAT)"
  },
  {
    "Symbol": "CBX",
    "CoinName": "CryptoBullion",
    "FullName": "CryptoBullion (CBX)"
  },
  {
    "Symbol": "CCN",
    "CoinName": "CannaCoin",
    "FullName": "CannaCoin (CCN)"
  },
  {
    "Symbol": "CIN",
    "CoinName": "CinderCoin",
    "FullName": "CinderCoin (CIN)"
  },
  {
    "Symbol": "CINNI",
    "CoinName": "CINNICOIN",
    "FullName": "CINNICOIN (CINNI)"
  },
  {
    "Symbol": "CXC",
    "CoinName": "CheckCoin",
    "FullName": "CheckCoin (CXC)"
  },
  {
    "Symbol": "CLAM",
    "CoinName": "CLAMS",
    "FullName": "CLAMS (CLAM)"
  },
  {
    "Symbol": "CLR",
    "CoinName": "CopperLark",
    "FullName": "CopperLark (CLR)"
  },
  {
    "Symbol": "CMC",
    "CoinName": "CosmosCoin",
    "FullName": "CosmosCoin (CMC)"
  },
  {
    "Symbol": "CNC",
    "CoinName": "ChinaCoin",
    "FullName": "ChinaCoin (CNC)"
  },
  {
    "Symbol": "CNL",
    "CoinName": "ConcealCoin",
    "FullName": "ConcealCoin (CNL)"
  },
  {
    "Symbol": "COMM",
    "CoinName": "Community Coin",
    "FullName": "Community Coin (COMM)"
  },
  {
    "Symbol": "COOL",
    "CoinName": "CoolCoin",
    "FullName": "CoolCoin (COOL)"
  },
  {
    "Symbol": "CRACK",
    "CoinName": "CrackCoin",
    "FullName": "CrackCoin (CRACK)"
  },
  {
    "Symbol": "CRYPT",
    "CoinName": "CryptCoin",
    "FullName": "CryptCoin (CRYPT)"
  },
  {
    "Symbol": "CSC",
    "CoinName": "CasinoCoin",
    "FullName": "CasinoCoin (CSC)"
  },
  {
    "Symbol": "DEM",
    "CoinName": "eMark",
    "FullName": "eMark (DEM)"
  },
  {
    "Symbol": "DIAM",
    "CoinName": "Diamond",
    "FullName": "Diamond (DIAM)"
  },
  {
    "Symbol": "DRKC",
    "CoinName": "DarkCash",
    "FullName": "DarkCash (DRKC)"
  },
  {
    "Symbol": "DSB",
    "CoinName": "DarkShibe",
    "FullName": "DarkShibe (DSB)"
  },
  {
    "Symbol": "DVC",
    "CoinName": "DevCoin",
    "FullName": "DevCoin (DVC)"
  },
  {
    "Symbol": "EAC",
    "CoinName": "EarthCoin",
    "FullName": "EarthCoin (EAC)"
  },
  {
    "Symbol": "EFL",
    "CoinName": "E-Gulden",
    "FullName": "E-Gulden (EFL)"
  },
  {
    "Symbol": "ELC",
    "CoinName": "Elacoin",
    "FullName": "Elacoin (ELC)"
  },
  {
    "Symbol": "EMD",
    "CoinName": "Emerald",
    "FullName": "Emerald (EMD)"
  },
  {
    "Symbol": "EXCL",
    "CoinName": "Exclusive Coin",
    "FullName": "Exclusive Coin (EXCL)"
  },
  {
    "Symbol": "EXE",
    "CoinName": "ExeCoin",
    "FullName": "ExeCoin (EXE)"
  },
  {
    "Symbol": "EZC",
    "CoinName": "EZCoin",
    "FullName": "EZCoin (EZC)"
  },
  {
    "Symbol": "FLAP",
    "CoinName": "Flappy Coin",
    "FullName": "Flappy Coin (FLAP)"
  },
  {
    "Symbol": "FC2",
    "CoinName": "Fuel2Coin",
    "FullName": "Fuel2Coin (FC2)"
  },
  {
    "Symbol": "FFC",
    "CoinName": "FireflyCoin",
    "FullName": "FireflyCoin (FFC)"
  },
  {
    "Symbol": "FIBRE",
    "CoinName": "FIBRE",
    "FullName": "FIBRE (FIBRE)"
  },
  {
    "Symbol": "FRC",
    "CoinName": "FireRoosterCoin",
    "FullName": "FireRoosterCoin (FRC)"
  },
  {
    "Symbol": "FLT",
    "CoinName": "FlutterCoin",
    "FullName": "FlutterCoin (FLT)"
  },
  {
    "Symbol": "FRK",
    "CoinName": "Franko",
    "FullName": "Franko (FRK)"
  },
  {
    "Symbol": "FRAC",
    "CoinName": "FractalCoin",
    "FullName": "FractalCoin (FRAC)"
  },
  {
    "Symbol": "FSTC",
    "CoinName": "FastCoin",
    "FullName": "FastCoin (FSTC)"
  },
  {
    "Symbol": "GDC",
    "CoinName": "GrandCoin",
    "FullName": "GrandCoin (GDC)"
  },
  {
    "Symbol": "GLX",
    "CoinName": "GalaxyCoin",
    "FullName": "GalaxyCoin (GLX)"
  },
  {
    "Symbol": "GLYPH",
    "CoinName": "GlyphCoin",
    "FullName": "GlyphCoin (GLYPH)"
  },
  {
    "Symbol": "GML",
    "CoinName": "GameLeagueCoin",
    "FullName": "GameLeagueCoin (GML)"
  },
  {
    "Symbol": "GUE",
    "CoinName": "GuerillaCoin",
    "FullName": "GuerillaCoin (GUE)"
  },
  {
    "Symbol": "HAL",
    "CoinName": "Halcyon",
    "FullName": "Halcyon (HAL)"
  },
  {
    "Symbol": "HBN",
    "CoinName": "HoboNickels",
    "FullName": "HoboNickels (HBN)"
  },
  {
    "Symbol": "HUC",
    "CoinName": "HunterCoin",
    "FullName": "HunterCoin (HUC)"
  },
  {
    "Symbol": "HVC",
    "CoinName": "HeavyCoin",
    "FullName": "HeavyCoin (HVC)"
  },
  {
    "Symbol": "HYP",
    "CoinName": "HyperStake",
    "FullName": "HyperStake (HYP)"
  },
  {
    "Symbol": "ICB",
    "CoinName": "IceBergCoin",
    "FullName": "IceBergCoin (ICB)"
  },
  {
    "Symbol": "IFC",
    "CoinName": "Infinite Coin",
    "FullName": "Infinite Coin (IFC)"
  },
  {
    "Symbol": "IXC",
    "CoinName": "IXcoin",
    "FullName": "IXcoin (IXC)"
  },
  {
    "Symbol": "JBS",
    "CoinName": "JumBucks Coin",
    "FullName": "JumBucks Coin (JBS)"
  },
  {
    "Symbol": "JKC",
    "CoinName": "JunkCoin",
    "FullName": "JunkCoin (JKC)"
  },
  {
    "Symbol": "JUDGE",
    "CoinName": "JudgeCoin",
    "FullName": "JudgeCoin (JUDGE)"
  },
  {
    "Symbol": "KDC",
    "CoinName": "Klondike Coin",
    "FullName": "Klondike Coin (KDC)"
  },
  {
    "Symbol": "KEYC",
    "CoinName": "KeyCoin",
    "FullName": "KeyCoin (KEYC)"
  },
  {
    "Symbol": "KGC",
    "CoinName": "KrugerCoin",
    "FullName": "KrugerCoin (KGC)"
  },
  {
    "Symbol": "LK7",
    "CoinName": "Lucky7Coin",
    "FullName": "Lucky7Coin (LK7)"
  },
  {
    "Symbol": "LKY",
    "CoinName": "LuckyCoin",
    "FullName": "LuckyCoin (LKY)"
  },
  {
    "Symbol": "LSD",
    "CoinName": "LightSpeedCoin",
    "FullName": "LightSpeedCoin (LSD)"
  },
  {
    "Symbol": "LTCD",
    "CoinName": "LitecoinDark",
    "FullName": "LitecoinDark (LTCD)"
  },
  {
    "Symbol": "LTCX",
    "CoinName": "LitecoinX",
    "FullName": "LitecoinX (LTCX)"
  },
  {
    "Symbol": "LXC",
    "CoinName": "LibrexCoin",
    "FullName": "LibrexCoin (LXC)"
  },
  {
    "Symbol": "LYC",
    "CoinName": "LycanCoin",
    "FullName": "LycanCoin (LYC)"
  },
  {
    "Symbol": "MAX",
    "CoinName": "MaxCoin",
    "FullName": "MaxCoin (MAX)"
  },
  {
    "Symbol": "MINRL",
    "CoinName": "Minerals Coin",
    "FullName": "Minerals Coin (MINRL)"
  },
  {
    "Symbol": "MINT",
    "CoinName": "MintCoin",
    "FullName": "MintCoin (MINT)"
  },
  {
    "Symbol": "MN",
    "CoinName": "Cryptsy Mining Contract",
    "FullName": "Cryptsy Mining Contract (MN)"
  },
  {
    "Symbol": "MINC",
    "CoinName": "MinCoin",
    "FullName": "MinCoin (MINC)"
  },
  {
    "Symbol": "MRY",
    "CoinName": "MurrayCoin",
    "FullName": "MurrayCoin (MRY)"
  },
  {
    "Symbol": "MZC",
    "CoinName": "MazaCoin",
    "FullName": "MazaCoin (MZC)"
  },
  {
    "Symbol": "NAN",
    "CoinName": "NanoToken",
    "FullName": "NanoToken (NAN)"
  },
  {
    "Symbol": "NAUT",
    "CoinName": "Nautilus Coin",
    "FullName": "Nautilus Coin (NAUT)"
  },
  {
    "Symbol": "NBL",
    "CoinName": "Nybble",
    "FullName": "Nybble (NBL)"
  },
  {
    "Symbol": "NET",
    "CoinName": "NetCoin",
    "FullName": "NetCoin (NET)"
  },
  {
    "Symbol": "NMB",
    "CoinName": "Nimbus Coin",
    "FullName": "Nimbus Coin (NMB)"
  },
  {
    "Symbol": "NRB",
    "CoinName": "NoirBits",
    "FullName": "NoirBits (NRB)"
  },
  {
    "Symbol": "NOBL",
    "CoinName": "NobleCoin",
    "FullName": "NobleCoin (NOBL)"
  },
  {
    "Symbol": "NRS",
    "CoinName": "NoirShares",
    "FullName": "NoirShares (NRS)"
  },
  {
    "Symbol": "NVC",
    "CoinName": "NovaCoin",
    "FullName": "NovaCoin (NVC)"
  },
  {
    "Symbol": "NYAN",
    "CoinName": "NyanCoin",
    "FullName": "NyanCoin (NYAN)"
  },
  {
    "Symbol": "ORB",
    "CoinName": "Orbitcoin",
    "FullName": "Orbitcoin (ORB)"
  },
  {
    "Symbol": "OPSC",
    "CoinName": "OpenSourceCoin",
    "FullName": "OpenSourceCoin (OPSC)"
  },
  {
    "Symbol": "PHS",
    "CoinName": "PhilosophersStone",
    "FullName": "PhilosophersStone (PHS)"
  },
  {
    "Symbol": "POINTS",
    "CoinName": "Cryptsy Points",
    "FullName": "Cryptsy Points (POINTS)"
  },
  {
    "Symbol": "PSEUD",
    "CoinName": "PseudoCash",
    "FullName": "PseudoCash (PSEUD)"
  },
  {
    "Symbol": "PXC",
    "CoinName": "PhoenixCoin",
    "FullName": "PhoenixCoin (PXC)"
  },
  {
    "Symbol": "PYC",
    "CoinName": "PayCoin",
    "FullName": "PayCoin (PYC)"
  },
  {
    "Symbol": "RIPO",
    "CoinName": "RipOffCoin",
    "FullName": "RipOffCoin (RIPO)"
  },
  {
    "Symbol": "RPC",
    "CoinName": "RonPaulCoin",
    "FullName": "RonPaulCoin (RPC)"
  },
  {
    "Symbol": "RT2",
    "CoinName": "RotoCoin",
    "FullName": "RotoCoin (RT2)"
  },
  {
    "Symbol": "RYC",
    "CoinName": "RoyalCoin",
    "FullName": "RoyalCoin (RYC)"
  },
  {
    "Symbol": "RZR",
    "CoinName": "RazorCoin",
    "FullName": "RazorCoin (RZR)"
  },
  {
    "Symbol": "SAT2",
    "CoinName": "Saturn2Coin",
    "FullName": "Saturn2Coin (SAT2)"
  },
  {
    "Symbol": "SBC",
    "CoinName": "StableCoin",
    "FullName": "StableCoin (SBC)"
  },
  {
    "Symbol": "SDC",
    "CoinName": "ShadowCash",
    "FullName": "ShadowCash (SDC)"
  },
  {
    "Symbol": "SFR",
    "CoinName": "SaffronCoin",
    "FullName": "SaffronCoin (SFR)"
  },
  {
    "Symbol": "SHADE",
    "CoinName": "ShadeCoin",
    "FullName": "ShadeCoin (SHADE)"
  },
  {
    "Symbol": "SHLD",
    "CoinName": "ShieldCoin",
    "FullName": "ShieldCoin (SHLD)"
  },
  {
    "Symbol": "SILK",
    "CoinName": "SilkCoin",
    "FullName": "SilkCoin (SILK)"
  },
  {
    "Symbol": "SLG",
    "CoinName": "SterlingCoin",
    "FullName": "SterlingCoin (SLG)"
  },
  {
    "Symbol": "SMC",
    "CoinName": "SmartCoin",
    "FullName": "SmartCoin (SMC)"
  },
  {
    "Symbol": "SOLE",
    "CoinName": "SoleCoin",
    "FullName": "SoleCoin (SOLE)"
  },
  {
    "Symbol": "SPOTS",
    "CoinName": "Spots",
    "FullName": "Spots (SPOTS)"
  },
  {
    "Symbol": "SRC",
    "CoinName": "SecureCoin",
    "FullName": "SecureCoin (SRC)"
  },
  {
    "Symbol": "SSV",
    "CoinName": "SSVCoin",
    "FullName": "SSVCoin (SSV)"
  },
  {
    "Symbol": "SUPER",
    "CoinName": "SuperCoin",
    "FullName": "SuperCoin (SUPER)"
  },
  {
    "Symbol": "SWIFT",
    "CoinName": "BitSwift",
    "FullName": "BitSwift (SWIFT)"
  },
  {
    "Symbol": "SYNC",
    "CoinName": "SyncCoin",
    "FullName": "SyncCoin (SYNC)"
  },
  {
    "Symbol": "TAG",
    "CoinName": "TagCoin",
    "FullName": "TagCoin (TAG)"
  },
  {
    "Symbol": "TAK",
    "CoinName": "TakCoin",
    "FullName": "TakCoin (TAK)"
  },
  {
    "Symbol": "TES",
    "CoinName": "TeslaCoin",
    "FullName": "TeslaCoin (TES)"
  },
  {
    "Symbol": "TGC",
    "CoinName": "TigerCoin",
    "FullName": "TigerCoin (TGC)"
  },
  {
    "Symbol": "TIT",
    "CoinName": "TittieCoin",
    "FullName": "TittieCoin (TIT)"
  },
  {
    "Symbol": "TOR",
    "CoinName": "TorCoin",
    "FullName": "TorCoin (TOR)"
  },
  {
    "Symbol": "TRC",
    "CoinName": "TerraCoin",
    "FullName": "TerraCoin (TRC)"
  },
  {
    "Symbol": "TITC",
    "CoinName": "TitCoin",
    "FullName": "TitCoin (TITC)"
  },
  {
    "Symbol": "ULTC",
    "CoinName": "Umbrella",
    "FullName": "Umbrella (ULTC)"
  },
  {
    "Symbol": "UNB",
    "CoinName": "UnbreakableCoin",
    "FullName": "UnbreakableCoin (UNB)"
  },
  {
    "Symbol": "UNO",
    "CoinName": "Unobtanium",
    "FullName": "Unobtanium (UNO)"
  },
  {
    "Symbol": "URO",
    "CoinName": "UroCoin",
    "FullName": "UroCoin (URO)"
  },
  {
    "Symbol": "USDE",
    "CoinName": "UnitaryStatus Dollar",
    "FullName": "UnitaryStatus Dollar (USDE)"
  },
  {
    "Symbol": "UTC",
    "CoinName": "UltraCoin",
    "FullName": "UltraCoin (UTC)"
  },
  {
    "Symbol": "UTIL",
    "CoinName": "Utility Coin",
    "FullName": "Utility Coin (UTIL)"
  },
  {
    "Symbol": "VDO",
    "CoinName": "VidioCoin",
    "FullName": "VidioCoin (VDO)"
  },
  {
    "Symbol": "VOOT",
    "CoinName": "VootCoin",
    "FullName": "VootCoin (VOOT)"
  },
  {
    "Symbol": "VRC",
    "CoinName": "VeriCoin",
    "FullName": "VeriCoin (VRC)"
  },
  {
    "Symbol": "XAI",
    "CoinName": "SapienceCoin",
    "FullName": "SapienceCoin (XAI)"
  },
  {
    "Symbol": "XBOT",
    "CoinName": "SocialXbotCoin",
    "FullName": "SocialXbotCoin (XBOT)"
  },
  {
    "Symbol": "XC",
    "CoinName": "X11 Coin",
    "FullName": "X11 Coin (XC)"
  },
  {
    "Symbol": "XCR",
    "CoinName": "Crypti",
    "FullName": "Crypti (XCR)"
  },
  {
    "Symbol": "XJO",
    "CoinName": "JouleCoin",
    "FullName": "JouleCoin (XJO)"
  },
  {
    "Symbol": "XLB",
    "CoinName": "LibertyCoin",
    "FullName": "LibertyCoin (XLB)"
  },
  {
    "Symbol": "XPM",
    "CoinName": "PrimeCoin",
    "FullName": "PrimeCoin (XPM)"
  },
  {
    "Symbol": "XST",
    "CoinName": "StealthCoin",
    "FullName": "StealthCoin (XST)"
  },
  {
    "Symbol": "XXX",
    "CoinName": "XXXCoin",
    "FullName": "XXXCoin (XXX)"
  },
  {
    "Symbol": "YAC",
    "CoinName": "YAcCoin",
    "FullName": "YAcCoin (YAC)"
  },
  {
    "Symbol": "ZCC",
    "CoinName": "ZCC Coin",
    "FullName": "ZCC Coin (ZCC)"
  },
  {
    "Symbol": "ZED",
    "CoinName": "ZedCoins",
    "FullName": "ZedCoins (ZED)"
  },
  {
    "Symbol": "EKN",
    "CoinName": "Elektron",
    "FullName": "Elektron (EKN)"
  },
  {
    "Symbol": "XAU",
    "CoinName": "XauCoin",
    "FullName": "XauCoin (XAU)"
  },
  {
    "Symbol": "TMC",
    "CoinName": "TimesCoin",
    "FullName": "TimesCoin (TMC)"
  },
  {
    "Symbol": "SJCX",
    "CoinName": "StorjCoin",
    "FullName": "StorjCoin (SJCX)"
  },
  {
    "Symbol": "START",
    "CoinName": "StartCoin",
    "FullName": "StartCoin (START)"
  },
  {
    "Symbol": "HUGE",
    "CoinName": "BigCoin",
    "FullName": "BigCoin (HUGE)"
  },
  {
    "Symbol": "XCP",
    "CoinName": "CounterParty",
    "FullName": "CounterParty (XCP)"
  },
  {
    "Symbol": "MAID",
    "CoinName": "MaidSafe Coin",
    "FullName": "MaidSafe Coin (MAID)"
  },
  {
    "Symbol": "007",
    "CoinName": "007 coin",
    "FullName": "007 coin (007)"
  },
  {
    "Symbol": "NSR",
    "CoinName": "NuShares",
    "FullName": "NuShares (NSR)"
  },
  {
    "Symbol": "MONA",
    "CoinName": "MonaCoin",
    "FullName": "MonaCoin (MONA)"
  },
  {
    "Symbol": "CELL",
    "CoinName": "SolarFarm",
    "FullName": "SolarFarm (CELL)"
  },
  {
    "Symbol": "TEK",
    "CoinName": "TekCoin",
    "FullName": "TekCoin (TEK)"
  },
  {
    "Symbol": "BAY",
    "CoinName": "BitBay",
    "FullName": "BitBay (BAY)"
  },
  {
    "Symbol": "NTRN",
    "CoinName": "Neutron",
    "FullName": "Neutron (NTRN)"
  },
  {
    "Symbol": "SLING",
    "CoinName": "Sling Coin",
    "FullName": "Sling Coin (SLING)"
  },
  {
    "Symbol": "XVC",
    "CoinName": "Vcash",
    "FullName": "Vcash (XVC)"
  },
  {
    "Symbol": "CRAVE",
    "CoinName": "CraveCoin",
    "FullName": "CraveCoin (CRAVE)"
  },
  {
    "Symbol": "XSI",
    "CoinName": "Stability Shares",
    "FullName": "Stability Shares (XSI)"
  },
  {
    "Symbol": "BYC",
    "CoinName": "ByteCent",
    "FullName": "ByteCent (BYC)"
  },
  {
    "Symbol": "GRC",
    "CoinName": "GridCoin",
    "FullName": "GridCoin (GRC)"
  },
  {
    "Symbol": "GEMZ",
    "CoinName": "Gemz Social",
    "FullName": "Gemz Social (GEMZ)"
  },
  {
    "Symbol": "KTK",
    "CoinName": "KryptCoin",
    "FullName": "KryptCoin (KTK)"
  },
  {
    "Symbol": "HZ",
    "CoinName": "Horizon",
    "FullName": "Horizon (HZ)"
  },
  {
    "Symbol": "QORA",
    "CoinName": "QoraCoin",
    "FullName": "QoraCoin (QORA)"
  },
  {
    "Symbol": "RBY",
    "CoinName": "RubyCoin",
    "FullName": "RubyCoin (RBY)"
  },
  {
    "Symbol": "PTC",
    "CoinName": "PesetaCoin",
    "FullName": "PesetaCoin (PTC)"
  },
  {
    "Symbol": "WBB",
    "CoinName": "Wild Beast Coin",
    "FullName": "Wild Beast Coin (WBB)"
  },
  {
    "Symbol": "SSD",
    "CoinName": "Sonic Screw Driver Coin",
    "FullName": "Sonic Screw Driver Coin (SSD)"
  },
  {
    "Symbol": "XTC",
    "CoinName": "TileCoin",
    "FullName": "TileCoin (XTC)"
  },
  {
    "Symbol": "NOTE",
    "CoinName": "Dnotes",
    "FullName": "Dnotes (NOTE)"
  },
  {
    "Symbol": "FLO",
    "CoinName": "Flo",
    "FullName": "Flo (FLO)"
  },
  {
    "Symbol": "MMXIV",
    "CoinName": "MaieutiCoin",
    "FullName": "MaieutiCoin (MMXIV)"
  },
  {
    "Symbol": "8BIT",
    "CoinName": "8BIT Coin",
    "FullName": "8BIT Coin (8BIT)"
  },
  {
    "Symbol": "STV",
    "CoinName": "Sativa Coin",
    "FullName": "Sativa Coin (STV)"
  },
  {
    "Symbol": "EBS",
    "CoinName": "EbolaShare",
    "FullName": "EbolaShare (EBS)"
  },
  {
    "Symbol": "AM",
    "CoinName": "AeroMe",
    "FullName": "AeroMe (AM)"
  },
  {
    "Symbol": "XMG",
    "CoinName": "Coin Magi",
    "FullName": "Coin Magi (XMG)"
  },
  {
    "Symbol": "AMBER",
    "CoinName": "AmberCoin",
    "FullName": "AmberCoin (AMBER)"
  },
  {
    "Symbol": "NKT",
    "CoinName": "NakomotoDark",
    "FullName": "NakomotoDark (NKT)"
  },
  {
    "Symbol": "J",
    "CoinName": "JoinCoin",
    "FullName": "JoinCoin (J)"
  },
  {
    "Symbol": "GHC",
    "CoinName": "GhostCoin",
    "FullName": "GhostCoin (GHC)"
  },
  {
    "Symbol": "ABY",
    "CoinName": "ArtByte",
    "FullName": "ArtByte (ABY)"
  },
  {
    "Symbol": "LDOGE",
    "CoinName": "LiteDoge",
    "FullName": "LiteDoge (LDOGE)"
  },
  {
    "Symbol": "MTR",
    "CoinName": "MasterTraderCoin",
    "FullName": "MasterTraderCoin (MTR)"
  },
  {
    "Symbol": "TRI",
    "CoinName": "Triangles Coin",
    "FullName": "Triangles Coin (TRI)"
  },
  {
    "Symbol": "SWARM",
    "CoinName": "SwarmCoin",
    "FullName": "SwarmCoin (SWARM)"
  },
  {
    "Symbol": "BBR",
    "CoinName": "Boolberry",
    "FullName": "Boolberry (BBR)"
  },
  {
    "Symbol": "BTCRY",
    "CoinName": "BitCrystal",
    "FullName": "BitCrystal (BTCRY)"
  },
  {
    "Symbol": "BCR",
    "CoinName": "BitCredit",
    "FullName": "BitCredit (BCR)"
  },
  {
    "Symbol": "XPB",
    "CoinName": "Pebble Coin",
    "FullName": "Pebble Coin (XPB)"
  },
  {
    "Symbol": "XDQ",
    "CoinName": "Dirac Coin",
    "FullName": "Dirac Coin (XDQ)"
  },
  {
    "Symbol": "FLDC",
    "CoinName": "Folding Coin",
    "FullName": "Folding Coin (FLDC)"
  },
  {
    "Symbol": "SLR",
    "CoinName": "SolarCoin",
    "FullName": "SolarCoin (SLR)"
  },
  {
    "Symbol": "SMAC",
    "CoinName": "Social Media Coin",
    "FullName": "Social Media Coin (SMAC)"
  },
  {
    "Symbol": "TRK",
    "CoinName": "TruckCoin",
    "FullName": "TruckCoin (TRK)"
  },
  {
    "Symbol": "U",
    "CoinName": "Ucoin",
    "FullName": "Ucoin (U)"
  },
  {
    "Symbol": "UIS",
    "CoinName": "Unitus",
    "FullName": "Unitus (UIS)"
  },
  {
    "Symbol": "CYP",
    "CoinName": "CypherPunkCoin",
    "FullName": "CypherPunkCoin (CYP)"
  },
  {
    "Symbol": "UFO",
    "CoinName": "UFO Coin",
    "FullName": "UFO Coin (UFO)"
  },
  {
    "Symbol": "ASN",
    "CoinName": "Ascension Coin",
    "FullName": "Ascension Coin (ASN)"
  },
  {
    "Symbol": "OC",
    "CoinName": "OrangeCoin",
    "FullName": "OrangeCoin (OC)"
  },
  {
    "Symbol": "GSM",
    "CoinName": "GSM Coin",
    "FullName": "GSM Coin (GSM)"
  },
  {
    "Symbol": "FSC",
    "CoinName": "FriendshipCoin",
    "FullName": "FriendshipCoin (FSC)"
  },
  {
    "Symbol": "NXTTY",
    "CoinName": "NXTTY",
    "FullName": "NXTTY (NXTTY)"
  },
  {
    "Symbol": "QBK",
    "CoinName": "QuBuck Coin",
    "FullName": "QuBuck Coin (QBK)"
  },
  {
    "Symbol": "BLC",
    "CoinName": "BlakeCoin",
    "FullName": "BlakeCoin (BLC)"
  },
  {
    "Symbol": "MARYJ",
    "CoinName": "MaryJane Coin",
    "FullName": "MaryJane Coin (MARYJ)"
  },
  {
    "Symbol": "OMC",
    "CoinName": "OmniCron",
    "FullName": "OmniCron (OMC)"
  },
  {
    "Symbol": "GIG",
    "CoinName": "GigCoin",
    "FullName": "GigCoin (GIG)"
  },
  {
    "Symbol": "CC",
    "CoinName": "CyberCoin",
    "FullName": "CyberCoin (CC)"
  },
  {
    "Symbol": "BITS",
    "CoinName": "BitstarCoin",
    "FullName": "BitstarCoin (BITS)"
  },
  {
    "Symbol": "LTBC",
    "CoinName": "LTBCoin",
    "FullName": "LTBCoin (LTBC)"
  },
  {
    "Symbol": "NEOS",
    "CoinName": "NeosCoin",
    "FullName": "NeosCoin (NEOS)"
  },
  {
    "Symbol": "HYPER",
    "CoinName": "HyperCoin",
    "FullName": "HyperCoin (HYPER)"
  },
  {
    "Symbol": "VTR",
    "CoinName": "Vtorrent",
    "FullName": "Vtorrent (VTR)"
  },
  {
    "Symbol": "METAL",
    "CoinName": "MetalCoin",
    "FullName": "MetalCoin (METAL)"
  },
  {
    "Symbol": "PINK",
    "CoinName": "PinkCoin",
    "FullName": "PinkCoin (PINK)"
  },
  {
    "Symbol": "GRE",
    "CoinName": "GreenCoin",
    "FullName": "GreenCoin (GRE)"
  },
  {
    "Symbol": "XG",
    "CoinName": "XG Sports",
    "FullName": "XG Sports (XG)"
  },
  {
    "Symbol": "CHILD",
    "CoinName": "ChildCoin",
    "FullName": "ChildCoin (CHILD)"
  },
  {
    "Symbol": "BOOM",
    "CoinName": "Boom Token",
    "FullName": "Boom Token (BOOM)"
  },
  {
    "Symbol": "MINE",
    "CoinName": "Instamine Nuggets",
    "FullName": "Instamine Nuggets (MINE)"
  },
  {
    "Symbol": "ROS",
    "CoinName": "ROS Coin",
    "FullName": "ROS Coin (ROS)"
  },
  {
    "Symbol": "UNAT",
    "CoinName": "Unattanium",
    "FullName": "Unattanium (UNAT)"
  },
  {
    "Symbol": "SLM",
    "CoinName": "SlimCoin",
    "FullName": "SlimCoin (SLM)"
  },
  {
    "Symbol": "GAIA",
    "CoinName": "GAIA Platform",
    "FullName": "GAIA Platform (GAIA)"
  },
  {
    "Symbol": "XTPL",
    "CoinName": "TrustPlus",
    "FullName": "TrustPlus (XTPL)"
  },
  {
    "Symbol": "XCN",
    "CoinName": "Cryptonite",
    "FullName": "Cryptonite (XCN)"
  },
  {
    "Symbol": "CURE",
    "CoinName": "Curecoin",
    "FullName": "Curecoin (CURE)"
  },
  {
    "Symbol": "GMC",
    "CoinName": "Gridmaster",
    "FullName": "Gridmaster (GMC)"
  },
  {
    "Symbol": "MMC",
    "CoinName": "MemoryCoin",
    "FullName": "MemoryCoin (MMC)"
  },
  {
    "Symbol": "XBC",
    "CoinName": "BitcoinPlus",
    "FullName": "BitcoinPlus (XBC)"
  },
  {
    "Symbol": "OCTOC",
    "CoinName": "OctoCoin",
    "FullName": "OctoCoin (OCTOC)"
  },
  {
    "Symbol": "MSC",
    "CoinName": "MasterCoin",
    "FullName": "MasterCoin (MSC)"
  },
  {
    "Symbol": "EGGC",
    "CoinName": "EggCoin",
    "FullName": "EggCoin (EGGC)"
  },
  {
    "Symbol": "C2",
    "CoinName": "Coin.2",
    "FullName": "Coin.2 (C2)"
  },
  {
    "Symbol": "GSX",
    "CoinName": "GlowShares",
    "FullName": "GlowShares (GSX)"
  },
  {
    "Symbol": "CAMC",
    "CoinName": "Camcoin",
    "FullName": "Camcoin (CAMC)"
  },
  {
    "Symbol": "RBR",
    "CoinName": "Ribbit Rewards",
    "FullName": "Ribbit Rewards (RBR)"
  },
  {
    "Symbol": "XQN",
    "CoinName": "Quotient",
    "FullName": "Quotient (XQN)"
  },
  {
    "Symbol": "ICASH",
    "CoinName": "ICASH",
    "FullName": "ICASH (ICASH)"
  },
  {
    "Symbol": "NODET",
    "CoinName": "Node",
    "FullName": "Node (NODET)"
  },
  {
    "Symbol": "SOON",
    "CoinName": "SoonCoin",
    "FullName": "SoonCoin (SOON)"
  },
  {
    "Symbol": "BTMI",
    "CoinName": "BitMiles",
    "FullName": "BitMiles (BTMI)"
  },
  {
    "Symbol": "EVENT",
    "CoinName": "Event Token",
    "FullName": "Event Token (EVENT)"
  },
  {
    "Symbol": "1CR",
    "CoinName": "1Credit",
    "FullName": "1Credit (1CR)"
  },
  {
    "Symbol": "VIOR",
    "CoinName": "ViorCoin",
    "FullName": "ViorCoin (VIOR)"
  },
  {
    "Symbol": "XCO",
    "CoinName": "XCoin",
    "FullName": "XCoin (XCO)"
  },
  {
    "Symbol": "VMC",
    "CoinName": "VirtualMining Coin",
    "FullName": "VirtualMining Coin (VMC)"
  },
  {
    "Symbol": "MARSC",
    "CoinName": "MarsCoin",
    "FullName": "MarsCoin (MARSC)"
  },
  {
    "Symbol": "VIRAL",
    "CoinName": "Viral Coin",
    "FullName": "Viral Coin (VIRAL)"
  },
  {
    "Symbol": "EQM",
    "CoinName": "Equilibrium Coin",
    "FullName": "Equilibrium Coin (EQM)"
  },
  {
    "Symbol": "ISL",
    "CoinName": "IslaCoin",
    "FullName": "IslaCoin (ISL)"
  },
  {
    "Symbol": "QSLV",
    "CoinName": "Quicksilver coin",
    "FullName": "Quicksilver coin (QSLV)"
  },
  {
    "Symbol": "XWT",
    "CoinName": "World Trade Funds",
    "FullName": "World Trade Funds (XWT)"
  },
  {
    "Symbol": "XNA",
    "CoinName": "DeOxyRibose",
    "FullName": "DeOxyRibose (XNA)"
  },
  {
    "Symbol": "SKB",
    "CoinName": "SkullBuzz",
    "FullName": "SkullBuzz (SKB)"
  },
  {
    "Symbol": "BSTY",
    "CoinName": "GlobalBoost",
    "FullName": "GlobalBoost (BSTY)"
  },
  {
    "Symbol": "FCS",
    "CoinName": "CryptoFocus",
    "FullName": "CryptoFocus (FCS)"
  },
  {
    "Symbol": "GAM",
    "CoinName": "Gambit coin",
    "FullName": "Gambit coin (GAM)"
  },
  {
    "Symbol": "CESC",
    "CoinName": "Crypto Escudo",
    "FullName": "Crypto Escudo (CESC)"
  },
  {
    "Symbol": "TWLV",
    "CoinName": "Twelve Coin",
    "FullName": "Twelve Coin (TWLV)"
  },
  {
    "Symbol": "EAGS",
    "CoinName": "EagsCoin",
    "FullName": "EagsCoin (EAGS)"
  },
  {
    "Symbol": "MLTC",
    "CoinName": "MultiWallet Coin",
    "FullName": "MultiWallet Coin (MLTC)"
  },
  {
    "Symbol": "ADC",
    "CoinName": "AudioCoin",
    "FullName": "AudioCoin (ADC)"
  },
  {
    "Symbol": "XMS",
    "CoinName": "Megastake",
    "FullName": "Megastake (XMS)"
  },
  {
    "Symbol": "SPHR",
    "CoinName": "Sphere Coin",
    "FullName": "Sphere Coin (SPHR)"
  },
  {
    "Symbol": "SIGU",
    "CoinName": "Singular",
    "FullName": "Singular (SIGU)"
  },
  {
    "Symbol": "M1",
    "CoinName": "SupplyShock",
    "FullName": "SupplyShock (M1)"
  },
  {
    "Symbol": "DB",
    "CoinName": "DarkBit",
    "FullName": "DarkBit (DB)"
  },
  {
    "Symbol": "CTO",
    "CoinName": "Crypto",
    "FullName": "Crypto (CTO)"
  },
  {
    "Symbol": "EDGE",
    "CoinName": "EdgeCoin",
    "FullName": "EdgeCoin (EDGE)"
  },
  {
    "Symbol": "BITL",
    "CoinName": "BitLux",
    "FullName": "BitLux (BITL)"
  },
  {
    "Symbol": "FUTC",
    "CoinName": "FutCoin",
    "FullName": "FutCoin (FUTC)"
  },
  {
    "Symbol": "GLOBE",
    "CoinName": "Global",
    "FullName": "Global (GLOBE)"
  },
  {
    "Symbol": "TAM",
    "CoinName": "TamaGucci",
    "FullName": "TamaGucci (TAM)"
  },
  {
    "Symbol": "MRP",
    "CoinName": "MorpheusCoin",
    "FullName": "MorpheusCoin (MRP)"
  },
  {
    "Symbol": "CREVA",
    "CoinName": "Creva Coin",
    "FullName": "Creva Coin (CREVA)"
  },
  {
    "Symbol": "NANAS",
    "CoinName": "BananaBits",
    "FullName": "BananaBits (NANAS)"
  },
  {
    "Symbol": "XCE",
    "CoinName": "Cerium",
    "FullName": "Cerium (XCE)"
  },
  {
    "Symbol": "ACP",
    "CoinName": "Anarchists Prime",
    "FullName": "Anarchists Prime (ACP)"
  },
  {
    "Symbol": "DRZ",
    "CoinName": "Droidz",
    "FullName": "Droidz (DRZ)"
  },
  {
    "Symbol": "BSC",
    "CoinName": "BowsCoin",
    "FullName": "BowsCoin (BSC)"
  },
  {
    "Symbol": "DRKT",
    "CoinName": "DarkTron",
    "FullName": "DarkTron (DRKT)"
  },
  {
    "Symbol": "CIRC",
    "CoinName": "CryptoCircuits",
    "FullName": "CryptoCircuits (CIRC)"
  },
  {
    "Symbol": "NKA",
    "CoinName": "IncaKoin",
    "FullName": "IncaKoin (NKA)"
  },
  {
    "Symbol": "VERSA",
    "CoinName": "Versa Token",
    "FullName": "Versa Token (VERSA)"
  },
  {
    "Symbol": "EPY",
    "CoinName": "Empyrean",
    "FullName": "Empyrean (EPY)"
  },
  {
    "Symbol": "SQL",
    "CoinName": "Squall Coin",
    "FullName": "Squall Coin (SQL)"
  },
  {
    "Symbol": "PIGGY",
    "CoinName": "Piggy Coin",
    "FullName": "Piggy Coin (PIGGY)"
  },
  {
    "Symbol": "CHA",
    "CoinName": "Charity Coin",
    "FullName": "Charity Coin (CHA)"
  },
  {
    "Symbol": "MIL",
    "CoinName": "Milllionaire Coin",
    "FullName": "Milllionaire Coin (MIL)"
  },
  {
    "Symbol": "CRW",
    "CoinName": "Crown Coin",
    "FullName": "Crown Coin (CRW)"
  },
  {
    "Symbol": "GEN",
    "CoinName": "Genstake",
    "FullName": "Genstake (GEN)"
  },
  {
    "Symbol": "XPH",
    "CoinName": "PharmaCoin",
    "FullName": "PharmaCoin (XPH)"
  },
  {
    "Symbol": "GRM",
    "CoinName": "GridMaster",
    "FullName": "GridMaster (GRM)"
  },
  {
    "Symbol": "QTZ",
    "CoinName": "Quartz",
    "FullName": "Quartz (QTZ)"
  },
  {
    "Symbol": "ARB",
    "CoinName": "Arbit Coin",
    "FullName": "Arbit Coin (ARB)"
  },
  {
    "Symbol": "LTS",
    "CoinName": "Litestar Coin",
    "FullName": "Litestar Coin (LTS)"
  },
  {
    "Symbol": "SPINC",
    "CoinName": "SpinCoin",
    "FullName": "SpinCoin (SPINC)"
  },
  {
    "Symbol": "GP",
    "CoinName": "GoldPieces",
    "FullName": "GoldPieces (GP)"
  },
  {
    "Symbol": "BITZ",
    "CoinName": "Bitz Coin",
    "FullName": "Bitz Coin (BITZ)"
  },
  {
    "Symbol": "DUB",
    "CoinName": "DubCoin",
    "FullName": "DubCoin (DUB)"
  },
  {
    "Symbol": "GRAV",
    "CoinName": "Graviton",
    "FullName": "Graviton (GRAV)"
  },
  {
    "Symbol": "BOBS",
    "CoinName": "Bob's Repair",
    "FullName": "Bob's Repair (BOBS)"
  },
  {
    "Symbol": "MNV",
    "CoinName": "MonetaVerde",
    "FullName": "MonetaVerde (MNV)"
  },
  {
    "Symbol": "QCN",
    "CoinName": "Quazar Coin",
    "FullName": "Quazar Coin (QCN)"
  },
  {
    "Symbol": "HEDGE",
    "CoinName": "Hedgecoin",
    "FullName": "Hedgecoin (HEDGE)"
  },
  {
    "Symbol": "SONG",
    "CoinName": "Song Coin",
    "FullName": "Song Coin (SONG)"
  },
  {
    "Symbol": "XSEED",
    "CoinName": "BitSeeds",
    "FullName": "BitSeeds (XSEED)"
  },
  {
    "Symbol": "AXIOM",
    "CoinName": "Axiom Coin",
    "FullName": "Axiom Coin (AXIOM)"
  },
  {
    "Symbol": "SMLY",
    "CoinName": "SmileyCoin",
    "FullName": "SmileyCoin (SMLY)"
  },
  {
    "Symbol": "RBT",
    "CoinName": "Rimbit",
    "FullName": "Rimbit (RBT)"
  },
  {
    "Symbol": "CHIP",
    "CoinName": "Chip",
    "FullName": "Chip (CHIP)"
  },
  {
    "Symbol": "SPEC",
    "CoinName": "SpecCoin",
    "FullName": "SpecCoin (SPEC)"
  },
  {
    "Symbol": "UNC",
    "CoinName": "UnCoin",
    "FullName": "UnCoin (UNC)"
  },
  {
    "Symbol": "SPRTS",
    "CoinName": "Sprouts",
    "FullName": "Sprouts (SPRTS)"
  },
  {
    "Symbol": "ZNY",
    "CoinName": "BitZeny",
    "FullName": "BitZeny (ZNY)"
  },
  {
    "Symbol": "BTQ",
    "CoinName": "BitQuark",
    "FullName": "BitQuark (BTQ)"
  },
  {
    "Symbol": "PKB",
    "CoinName": "ParkByte",
    "FullName": "ParkByte (PKB)"
  },
  {
    "Symbol": "SNRG",
    "CoinName": "Synergy",
    "FullName": "Synergy (SNRG)"
  },
  {
    "Symbol": "GHOUL",
    "CoinName": "Ghoul Coin",
    "FullName": "Ghoul Coin (GHOUL)"
  },
  {
    "Symbol": "HNC",
    "CoinName": "Hellenic Coin",
    "FullName": "Hellenic Coin (HNC)"
  },
  {
    "Symbol": "DIGS",
    "CoinName": "Diggits",
    "FullName": "Diggits (DIGS)"
  },
  {
    "Symbol": "GCR",
    "CoinName": "Global Currency Reserve",
    "FullName": "Global Currency Reserve (GCR)"
  },
  {
    "Symbol": "MAPC",
    "CoinName": "MapCoin",
    "FullName": "MapCoin (MAPC)"
  },
  {
    "Symbol": "MI",
    "CoinName": "XiaoMiCoin",
    "FullName": "XiaoMiCoin (MI)"
  },
  {
    "Symbol": "TX",
    "CoinName": "Transfer",
    "FullName": "Transfer (TX)"
  },
  {
    "Symbol": "CLV",
    "CoinName": "CleverCoin",
    "FullName": "CleverCoin (CLV)"
  },
  {
    "Symbol": "LYB",
    "CoinName": "LyraBar",
    "FullName": "LyraBar (LYB)"
  },
  {
    "Symbol": "PXI",
    "CoinName": "Prime-X1",
    "FullName": "Prime-X1 (PXI)"
  },
  {
    "Symbol": "CPC",
    "CoinName": "CapriCoin",
    "FullName": "CapriCoin (CPC)"
  },
  {
    "Symbol": "AMS",
    "CoinName": "Amsterdam Coin",
    "FullName": "Amsterdam Coin (AMS)"
  },
  {
    "Symbol": "OBITS",
    "CoinName": "Obits Coin",
    "FullName": "Obits Coin (OBITS)"
  },
  {
    "Symbol": "EMC",
    "CoinName": "Emercoin",
    "FullName": "Emercoin (EMC)"
  },
  {
    "Symbol": "BLITZ",
    "CoinName": "BlitzCoin",
    "FullName": "BlitzCoin (BLITZ)"
  },
  {
    "Symbol": "BHIRE",
    "CoinName": "BitHIRE",
    "FullName": "BitHIRE (BHIRE)"
  },
  {
    "Symbol": "EGC",
    "CoinName": "EverGreenCoin",
    "FullName": "EverGreenCoin (EGC)"
  },
  {
    "Symbol": "MND",
    "CoinName": "MindCoin",
    "FullName": "MindCoin (MND)"
  },
  {
    "Symbol": "I0C",
    "CoinName": "I0coin",
    "FullName": "I0coin (I0C)"
  },
  {
    "Symbol": "BTA",
    "CoinName": "Bata",
    "FullName": "Bata (BTA)"
  },
  {
    "Symbol": "NAS2",
    "CoinName": "Nas2Coin",
    "FullName": "Nas2Coin (NAS2)"
  },
  {
    "Symbol": "PAK",
    "CoinName": "Pakcoin",
    "FullName": "Pakcoin (PAK)"
  },
  {
    "Symbol": "DOGED",
    "CoinName": "DogeCoinDark",
    "FullName": "DogeCoinDark (DOGED)"
  },
  {
    "Symbol": "OK",
    "CoinName": "OKCash",
    "FullName": "OKCash (OK)"
  },
  {
    "Symbol": "RVR",
    "CoinName": "Revolution VR",
    "FullName": "Revolution VR (RVR)"
  },
  {
    "Symbol": "HYPERS",
    "CoinName": "HyperSpace",
    "FullName": "HyperSpace (HYPERS)"
  },
  {
    "Symbol": "HODL",
    "CoinName": "HOdlcoin",
    "FullName": "HOdlcoin (HODL)"
  },
  {
    "Symbol": "DGD",
    "CoinName": "Digix DAO",
    "FullName": "Digix DAO (DGD)"
  },
  {
    "Symbol": "EDRC",
    "CoinName": "EDRCoin",
    "FullName": "EDRCoin (EDRC)"
  },
  {
    "Symbol": "HTC",
    "CoinName": "Hitcoin",
    "FullName": "Hitcoin (HTC)"
  },
  {
    "Symbol": "DSH",
    "CoinName": "Dashcoin",
    "FullName": "Dashcoin (DSH)"
  },
  {
    "Symbol": "DBIC",
    "CoinName": "DubaiCoin",
    "FullName": "DubaiCoin (DBIC)"
  },
  {
    "Symbol": "XHI",
    "CoinName": "HiCoin",
    "FullName": "HiCoin (XHI)"
  },
  {
    "Symbol": "BIOS",
    "CoinName": "BiosCrypto",
    "FullName": "BiosCrypto (BIOS)"
  },
  {
    "Symbol": "CAB",
    "CoinName": "CabbageUnit",
    "FullName": "CabbageUnit (CAB)"
  },
  {
    "Symbol": "DIEM",
    "CoinName": "CarpeDiemCoin",
    "FullName": "CarpeDiemCoin (DIEM)"
  },
  {
    "Symbol": "GBT",
    "CoinName": "GameBetCoin",
    "FullName": "GameBetCoin (GBT)"
  },
  {
    "Symbol": "RCX",
    "CoinName": "RedCrowCoin",
    "FullName": "RedCrowCoin (RCX)"
  },
  {
    "Symbol": "PWR",
    "CoinName": "PWR Coin",
    "FullName": "PWR Coin (PWR)"
  },
  {
    "Symbol": "TRUMP",
    "CoinName": "TrumpCoin",
    "FullName": "TrumpCoin (TRUMP)"
  },
  {
    "Symbol": "PRM",
    "CoinName": "PrismChain",
    "FullName": "PrismChain (PRM)"
  },
  {
    "Symbol": "BCY",
    "CoinName": "BitCrystals",
    "FullName": "BitCrystals (BCY)"
  },
  {
    "Symbol": "RBIES",
    "CoinName": "Rubies",
    "FullName": "Rubies (RBIES)"
  },
  {
    "Symbol": "BLRY",
    "CoinName": "BillaryCoin",
    "FullName": "BillaryCoin (BLRY)"
  },
  {
    "Symbol": "DOTC",
    "CoinName": "Dotcoin",
    "FullName": "Dotcoin (DOTC)"
  },
  {
    "Symbol": "SCOT",
    "CoinName": "Scotcoin",
    "FullName": "Scotcoin (SCOT)"
  },
  {
    "Symbol": "CREED",
    "CoinName": "Thecreed",
    "FullName": "Thecreed (CREED)"
  },
  {
    "Symbol": "POSTC",
    "CoinName": "PostCoin",
    "FullName": "PostCoin (POSTC)"
  },
  {
    "Symbol": "INFX",
    "CoinName": "Influxcoin",
    "FullName": "Influxcoin (INFX)"
  },
  {
    "Symbol": "ETHS",
    "CoinName": "EthereumScrypt",
    "FullName": "EthereumScrypt (ETHS)"
  },
  {
    "Symbol": "PXL",
    "CoinName": "Phalanx",
    "FullName": "Phalanx (PXL)"
  },
  {
    "Symbol": "NUM",
    "CoinName": "NumbersCoin",
    "FullName": "NumbersCoin (NUM)"
  },
  {
    "Symbol": "GOST",
    "CoinName": "SoulCoin",
    "FullName": "SoulCoin (GOST)"
  },
  {
    "Symbol": "ION",
    "CoinName": "Ionomy",
    "FullName": "Ionomy (ION)"
  },
  {
    "Symbol": "GROW",
    "CoinName": "GrownCoin",
    "FullName": "GrownCoin (GROW)"
  },
  {
    "Symbol": "UNITY",
    "CoinName": "SuperNET",
    "FullName": "SuperNET (UNITY)"
  },
  {
    "Symbol": "OLDSF",
    "CoinName": "OldSafeCoin",
    "FullName": "OldSafeCoin (OLDSF)"
  },
  {
    "Symbol": "SSTC",
    "CoinName": "SunShotCoin",
    "FullName": "SunShotCoin (SSTC)"
  },
  {
    "Symbol": "NETC",
    "CoinName": "NetworkCoin",
    "FullName": "NetworkCoin (NETC)"
  },
  {
    "Symbol": "GPU",
    "CoinName": "GPU Coin",
    "FullName": "GPU Coin (GPU)"
  },
  {
    "Symbol": "TAGR",
    "CoinName": "Think And Get Rich Coin",
    "FullName": "Think And Get Rich Coin (TAGR)"
  },
  {
    "Symbol": "HMP",
    "CoinName": "HempCoin",
    "FullName": "HempCoin (HMP)"
  },
  {
    "Symbol": "ADZ",
    "CoinName": "Adzcoin",
    "FullName": "Adzcoin (ADZ)"
  },
  {
    "Symbol": "GAPC",
    "CoinName": "Gapcoin",
    "FullName": "Gapcoin (GAPC)"
  },
  {
    "Symbol": "MYC",
    "CoinName": "MayaCoin",
    "FullName": "MayaCoin (MYC)"
  },
  {
    "Symbol": "IVZ",
    "CoinName": "InvisibleCoin",
    "FullName": "InvisibleCoin (IVZ)"
  },
  {
    "Symbol": "VTA",
    "CoinName": "VirtaCoin",
    "FullName": "VirtaCoin (VTA)"
  },
  {
    "Symbol": "SOIL",
    "CoinName": "SoilCoin",
    "FullName": "SoilCoin (SOIL)"
  },
  {
    "Symbol": "CUBE",
    "CoinName": "DigiCube",
    "FullName": "DigiCube (CUBE)"
  },
  {
    "Symbol": "YOC",
    "CoinName": "YoCoin",
    "FullName": "YoCoin (YOC)"
  },
  {
    "Symbol": "VPRC",
    "CoinName": "VapersCoin",
    "FullName": "VapersCoin (VPRC)"
  },
  {
    "Symbol": "APC",
    "CoinName": "AlpaCoin",
    "FullName": "AlpaCoin (APC)"
  },
  {
    "Symbol": "STEPS",
    "CoinName": "Steps",
    "FullName": "Steps (STEPS)"
  },
  {
    "Symbol": "DBTC",
    "CoinName": "DebitCoin",
    "FullName": "DebitCoin (DBTC)"
  },
  {
    "Symbol": "UNIT",
    "CoinName": "Universal Currency",
    "FullName": "Universal Currency (UNIT)"
  },
  {
    "Symbol": "MOIN",
    "CoinName": "MoinCoin",
    "FullName": "MoinCoin (MOIN)"
  },
  {
    "Symbol": "ERC",
    "CoinName": "EuropeCoin",
    "FullName": "EuropeCoin (ERC)"
  },
  {
    "Symbol": "AIB",
    "CoinName": "AdvancedInternetBlock",
    "FullName": "AdvancedInternetBlock (AIB)"
  },
  {
    "Symbol": "PRIME",
    "CoinName": "PrimeChain",
    "FullName": "PrimeChain (PRIME)"
  },
  {
    "Symbol": "BERN",
    "CoinName": "BERNcash",
    "FullName": "BERNcash (BERN)"
  },
  {
    "Symbol": "BIGUP",
    "CoinName": "BigUp",
    "FullName": "BigUp (BIGUP)"
  },
  {
    "Symbol": "XRE",
    "CoinName": "RevolverCoin",
    "FullName": "RevolverCoin (XRE)"
  },
  {
    "Symbol": "PEPE",
    "CoinName": "PepeCoin",
    "FullName": "PepeCoin (PEPE)"
  },
  {
    "Symbol": "XDB",
    "CoinName": "DragonSphere",
    "FullName": "DragonSphere (XDB)"
  },
  {
    "Symbol": "ANTI",
    "CoinName": "Anti Bitcoin",
    "FullName": "Anti Bitcoin (ANTI)"
  },
  {
    "Symbol": "BRK",
    "CoinName": "BreakoutCoin",
    "FullName": "BreakoutCoin (BRK)"
  },
  {
    "Symbol": "COLX",
    "CoinName": "ColossusCoinXT",
    "FullName": "ColossusCoinXT (COLX)"
  },
  {
    "Symbol": "MNM",
    "CoinName": "Mineum",
    "FullName": "Mineum (MNM)"
  },
  {
    "Symbol": "ZEIT",
    "CoinName": "ZeitCoin",
    "FullName": "ZeitCoin (ZEIT)"
  },
  {
    "Symbol": "2GIVE",
    "CoinName": "2GiveCoin",
    "FullName": "2GiveCoin (2GIVE)"
  },
  {
    "Symbol": "CGA",
    "CoinName": "Cryptographic Anomaly",
    "FullName": "Cryptographic Anomaly (CGA)"
  },
  {
    "Symbol": "SWING",
    "CoinName": "SwingCoin",
    "FullName": "SwingCoin (SWING)"
  },
  {
    "Symbol": "SAFEX",
    "CoinName": "SafeExchangeCoin",
    "FullName": "SafeExchangeCoin (SAFEX)"
  },
  {
    "Symbol": "NEBU",
    "CoinName": "Nebuchadnezzar",
    "FullName": "Nebuchadnezzar (NEBU)"
  },
  {
    "Symbol": "AEC",
    "CoinName": "AcesCoin",
    "FullName": "AcesCoin (AEC)"
  },
  {
    "Symbol": "FRN",
    "CoinName": "Francs",
    "FullName": "Francs (FRN)"
  },
  {
    "Symbol": "ADNT",
    "CoinName": "Aiden",
    "FullName": "Aiden (ADNT)"
  },
  {
    "Symbol": "PULSE",
    "CoinName": "Pulse",
    "FullName": "Pulse (PULSE)"
  },
  {
    "Symbol": "N7",
    "CoinName": "Number7",
    "FullName": "Number7 (N7)"
  },
  {
    "Symbol": "CYG",
    "CoinName": "Cygnus",
    "FullName": "Cygnus (CYG)"
  },
  {
    "Symbol": "LGBTQ",
    "CoinName": "LGBTQoin",
    "FullName": "LGBTQoin (LGBTQ)"
  },
  {
    "Symbol": "UTH",
    "CoinName": "Uther",
    "FullName": "Uther (UTH)"
  },
  {
    "Symbol": "MPRO",
    "CoinName": "MediumProject",
    "FullName": "MediumProject (MPRO)"
  },
  {
    "Symbol": "KATZ",
    "CoinName": "KATZcoin",
    "FullName": "KATZcoin (KATZ)"
  },
  {
    "Symbol": "SPM",
    "CoinName": "Supreme",
    "FullName": "Supreme (SPM)"
  },
  {
    "Symbol": "MOJO",
    "CoinName": "Mojocoin",
    "FullName": "Mojocoin (MOJO)"
  },
  {
    "Symbol": "BELA",
    "CoinName": "Bela",
    "FullName": "Bela (BELA)"
  },
  {
    "Symbol": "FLX",
    "CoinName": "Flash",
    "FullName": "Flash (FLX)"
  },
  {
    "Symbol": "BOLI",
    "CoinName": "BolivarCoin",
    "FullName": "BolivarCoin (BOLI)"
  },
  {
    "Symbol": "CLUD",
    "CoinName": "CludCoin",
    "FullName": "CludCoin (CLUD)"
  },
  {
    "Symbol": "DIME",
    "CoinName": "DimeCoin",
    "FullName": "DimeCoin (DIME)"
  },
  {
    "Symbol": "FLY",
    "CoinName": "FlyCoin",
    "FullName": "FlyCoin (FLY)"
  },
  {
    "Symbol": "HVCO",
    "CoinName": "High Voltage Coin",
    "FullName": "High Voltage Coin (HVCO)"
  },
  {
    "Symbol": "GIZ",
    "CoinName": "GIZMOcoin",
    "FullName": "GIZMOcoin (GIZ)"
  },
  {
    "Symbol": "GREXIT",
    "CoinName": "GrexitCoin",
    "FullName": "GrexitCoin (GREXIT)"
  },
  {
    "Symbol": "CARBON",
    "CoinName": "Carboncoin",
    "FullName": "Carboncoin (CARBON)"
  },
  {
    "Symbol": "DEUR",
    "CoinName": "DigiEuro",
    "FullName": "DigiEuro (DEUR)"
  },
  {
    "Symbol": "TUR",
    "CoinName": "Turron",
    "FullName": "Turron (TUR)"
  },
  {
    "Symbol": "LEMON",
    "CoinName": "LemonCoin",
    "FullName": "LemonCoin (LEMON)"
  },
  {
    "Symbol": "DISK",
    "CoinName": "Dark Lisk",
    "FullName": "Dark Lisk (DISK)"
  },
  {
    "Symbol": "NEVA",
    "CoinName": "NevaCoin",
    "FullName": "NevaCoin (NEVA)"
  },
  {
    "Symbol": "CYT",
    "CoinName": "Cryptokenz",
    "FullName": "Cryptokenz (CYT)"
  },
  {
    "Symbol": "FUZZ",
    "CoinName": "Fuzzballs",
    "FullName": "Fuzzballs (FUZZ)"
  },
  {
    "Symbol": "NKC",
    "CoinName": "Nukecoinz",
    "FullName": "Nukecoinz (NKC)"
  },
  {
    "Symbol": "SECRT",
    "CoinName": "SecretCoin",
    "FullName": "SecretCoin (SECRT)"
  },
  {
    "Symbol": "XRA",
    "CoinName": "Ratecoin",
    "FullName": "Ratecoin (XRA)"
  },
  {
    "Symbol": "XNX",
    "CoinName": "XanaxCoin",
    "FullName": "XanaxCoin (XNX)"
  },
  {
    "Symbol": "STHR",
    "CoinName": "Stakerush",
    "FullName": "Stakerush (STHR)"
  },
  {
    "Symbol": "BONES",
    "CoinName": "BonesCoin",
    "FullName": "BonesCoin (BONES)"
  },
  {
    "Symbol": "WMC",
    "CoinName": "WMCoin",
    "FullName": "WMCoin (WMC)"
  },
  {
    "Symbol": "GOTX",
    "CoinName": "GothicCoin",
    "FullName": "GothicCoin (GOTX)"
  },
  {
    "Symbol": "FLVR",
    "CoinName": "FlavorCoin",
    "FullName": "FlavorCoin (FLVR)"
  },
  {
    "Symbol": "SHREK",
    "CoinName": "ShrekCoin",
    "FullName": "ShrekCoin (SHREK)"
  },
  {
    "Symbol": "REVE",
    "CoinName": "Revenu",
    "FullName": "Revenu (REVE)"
  },
  {
    "Symbol": "PBC",
    "CoinName": "PabyosiCoin",
    "FullName": "PabyosiCoin (PBC)"
  },
  {
    "Symbol": "OBS",
    "CoinName": "Obscurebay",
    "FullName": "Obscurebay (OBS)"
  },
  {
    "Symbol": "EXIT",
    "CoinName": "ExitCoin",
    "FullName": "ExitCoin (EXIT)"
  },
  {
    "Symbol": "EDUC",
    "CoinName": "EducoinV",
    "FullName": "EducoinV (EDUC)"
  },
  {
    "Symbol": "CLINT",
    "CoinName": "Clinton",
    "FullName": "Clinton (CLINT)"
  },
  {
    "Symbol": "CKC",
    "CoinName": "Clockcoin",
    "FullName": "Clockcoin (CKC)"
  },
  {
    "Symbol": "VIP",
    "CoinName": "VIP Tokens",
    "FullName": "VIP Tokens (VIP)"
  },
  {
    "Symbol": "NXE",
    "CoinName": "NXEcoin",
    "FullName": "NXEcoin (NXE)"
  },
  {
    "Symbol": "ZOOM",
    "CoinName": "ZoomCoin",
    "FullName": "ZoomCoin (ZOOM)"
  },
  {
    "Symbol": "DRACO",
    "CoinName": "DT Token",
    "FullName": "DT Token (DRACO)"
  },
  {
    "Symbol": "YOVI",
    "CoinName": "YobitVirtualCoin",
    "FullName": "YobitVirtualCoin (YOVI)"
  },
  {
    "Symbol": "ORLY",
    "CoinName": "OrlyCoin",
    "FullName": "OrlyCoin (ORLY)"
  },
  {
    "Symbol": "KUBOS",
    "CoinName": "KubosCoin",
    "FullName": "KubosCoin (KUBOS)"
  },
  {
    "Symbol": "INCP",
    "CoinName": "InceptionCoin",
    "FullName": "InceptionCoin (INCP)"
  },
  {
    "Symbol": "SAK",
    "CoinName": "SharkCoin",
    "FullName": "SharkCoin (SAK)"
  },
  {
    "Symbol": "EVIL",
    "CoinName": "EvilCoin",
    "FullName": "EvilCoin (EVIL)"
  },
  {
    "Symbol": "OMA",
    "CoinName": "OmegaCoin",
    "FullName": "OmegaCoin (OMA)"
  },
  {
    "Symbol": "MUE",
    "CoinName": "MonetaryUnit",
    "FullName": "MonetaryUnit (MUE)"
  },
  {
    "Symbol": "COX",
    "CoinName": "CobraCoin",
    "FullName": "CobraCoin (COX)"
  },
  {
    "Symbol": "BNT",
    "CoinName": "Bancor Network Token",
    "FullName": "Bancor Network Token (BNT)"
  },
  {
    "Symbol": "BSEND",
    "CoinName": "BitSend",
    "FullName": "BitSend (BSEND)"
  },
  {
    "Symbol": "DES",
    "CoinName": "Destiny",
    "FullName": "Destiny (DES)"
  },
  {
    "Symbol": "BIT16",
    "CoinName": "16BitCoin",
    "FullName": "16BitCoin (BIT16)"
  },
  {
    "Symbol": "PDC",
    "CoinName": "Project Decorum",
    "FullName": "Project Decorum (PDC)"
  },
  {
    "Symbol": "CMTC",
    "CoinName": "CometCoin",
    "FullName": "CometCoin (CMTC)"
  },
  {
    "Symbol": "CHESS",
    "CoinName": "ChessCoin",
    "FullName": "ChessCoin (CHESS)"
  },
  {
    "Symbol": "SPACE",
    "CoinName": "SpaceCoin",
    "FullName": "SpaceCoin (SPACE)"
  },
  {
    "Symbol": "REE",
    "CoinName": "ReeCoin",
    "FullName": "ReeCoin (REE)"
  },
  {
    "Symbol": "LQD",
    "CoinName": "Liquid",
    "FullName": "Liquid (LQD)"
  },
  {
    "Symbol": "MARV",
    "CoinName": "Marvelous",
    "FullName": "Marvelous (MARV)"
  },
  {
    "Symbol": "OMNI",
    "CoinName": "Omni",
    "FullName": "Omni (OMNI)"
  },
  {
    "Symbol": "GSY",
    "CoinName": "GenesysCoin",
    "FullName": "GenesysCoin (GSY)"
  },
  {
    "Symbol": "TRTK",
    "CoinName": "TrollTokens",
    "FullName": "TrollTokens (TRTK)"
  },
  {
    "Symbol": "LIR",
    "CoinName": "Let it Ride",
    "FullName": "Let it Ride (LIR)"
  },
  {
    "Symbol": "SCRPT",
    "CoinName": "ScryptCoin",
    "FullName": "ScryptCoin (SCRPT)"
  },
  {
    "Symbol": "LBC",
    "CoinName": "LBRY Credits",
    "FullName": "LBRY Credits (LBC)"
  },
  {
    "Symbol": "SPCIE",
    "CoinName": "Specie",
    "FullName": "Specie (SPCIE)"
  },
  {
    "Symbol": "CJ",
    "CoinName": "CryptoJacks",
    "FullName": "CryptoJacks (CJ)"
  },
  {
    "Symbol": "PUT",
    "CoinName": "PutinCoin",
    "FullName": "PutinCoin (PUT)"
  },
  {
    "Symbol": "KRAK",
    "CoinName": "Kraken",
    "FullName": "Kraken (KRAK)"
  },
  {
    "Symbol": "DLISK",
    "CoinName": "Dlisk",
    "FullName": "Dlisk (DLISK)"
  },
  {
    "Symbol": "IBANK",
    "CoinName": "iBankCoin",
    "FullName": "iBankCoin (IBANK)"
  },
  {
    "Symbol": "VOYA",
    "CoinName": "Voyacoin",
    "FullName": "Voyacoin (VOYA)"
  },
  {
    "Symbol": "ENTER",
    "CoinName": "EnterCoin",
    "FullName": "EnterCoin (ENTER)"
  },
  {
    "Symbol": "WRLGC",
    "CoinName": "World Gold Coin",
    "FullName": "World Gold Coin (WRLGC)"
  },
  {
    "Symbol": "BM",
    "CoinName": "BitMoon",
    "FullName": "BitMoon (BM)"
  },
  {
    "Symbol": "FRWC",
    "CoinName": "Frankywillcoin",
    "FullName": "Frankywillcoin (FRWC)"
  },
  {
    "Symbol": "PSY",
    "CoinName": "Psilocybin",
    "FullName": "Psilocybin (PSY)"
  },
  {
    "Symbol": "XTREME",
    "CoinName": "ExtremeCoin",
    "FullName": "ExtremeCoin (XTREME)"
  },
  {
    "Symbol": "RUST",
    "CoinName": "RustCoin",
    "FullName": "RustCoin (RUST)"
  },
  {
    "Symbol": "NZC",
    "CoinName": "NewZealandCoin",
    "FullName": "NewZealandCoin (NZC)"
  },
  {
    "Symbol": "SNGLS",
    "CoinName": "SingularDTV",
    "FullName": "SingularDTV (SNGLS)"
  },
  {
    "Symbol": "XAUR",
    "CoinName": "Xaurum",
    "FullName": "Xaurum (XAUR)"
  },
  {
    "Symbol": "BFX",
    "CoinName": "BitFinex Tokens",
    "FullName": "BitFinex Tokens (BFX)"
  },
  {
    "Symbol": "UNIQ",
    "CoinName": "Uniqredit",
    "FullName": "Uniqredit (UNIQ)"
  },
  {
    "Symbol": "CRX",
    "CoinName": "ChronosCoin",
    "FullName": "ChronosCoin (CRX)"
  },
  {
    "Symbol": "DCT",
    "CoinName": "Decent",
    "FullName": "Decent (DCT)"
  },
  {
    "Symbol": "XPOKE",
    "CoinName": "PokeChain",
    "FullName": "PokeChain (XPOKE)"
  },
  {
    "Symbol": "MUDRA",
    "CoinName": "MudraCoin",
    "FullName": "MudraCoin (MUDRA)"
  },
  {
    "Symbol": "WARP",
    "CoinName": "WarpCoin",
    "FullName": "WarpCoin (WARP)"
  },
  {
    "Symbol": "CNMT",
    "CoinName": "Coinomat",
    "FullName": "Coinomat (CNMT)"
  },
  {
    "Symbol": "PIZZA",
    "CoinName": "PizzaCoin",
    "FullName": "PizzaCoin (PIZZA)"
  },
  {
    "Symbol": "LC",
    "CoinName": "Lutetium Coin",
    "FullName": "Lutetium Coin (LC)"
  },
  {
    "Symbol": "HEAT",
    "CoinName": "Heat Ledger",
    "FullName": "Heat Ledger (HEAT)"
  },
  {
    "Symbol": "ICN",
    "CoinName": "Iconomi",
    "FullName": "Iconomi (ICN)"
  },
  {
    "Symbol": "EXB",
    "CoinName": "ExaByte (EXB)",
    "FullName": "ExaByte (EXB) (EXB)"
  },
  {
    "Symbol": "WINGS",
    "CoinName": "Wings DAO",
    "FullName": "Wings DAO (WINGS)"
  },
  {
    "Symbol": "CDEX",
    "CoinName": "Cryptodex",
    "FullName": "Cryptodex (CDEX)"
  },
  {
    "Symbol": "RBIT",
    "CoinName": "ReturnBit",
    "FullName": "ReturnBit (RBIT)"
  },
  {
    "Symbol": "DCS.",
    "CoinName": "deCLOUDs",
    "FullName": "deCLOUDs (DCS)"
  },
  {
    "Symbol": "GB",
    "CoinName": "GoldBlocks",
    "FullName": "GoldBlocks (GB)"
  },
  {
    "Symbol": "ANC",
    "CoinName": "Anoncoin",
    "FullName": "Anoncoin (ANC)"
  },
  {
    "Symbol": "SYNX",
    "CoinName": "Syndicate",
    "FullName": "Syndicate (SYNX)"
  },
  {
    "Symbol": "MC",
    "CoinName": "Mass Coin",
    "FullName": "Mass Coin (MC)"
  },
  {
    "Symbol": "JWL",
    "CoinName": "Jewels",
    "FullName": "Jewels (JWL)"
  },
  {
    "Symbol": "WAY",
    "CoinName": "WayCoin",
    "FullName": "WayCoin (WAY)"
  },
  {
    "Symbol": "TAB",
    "CoinName": "MollyCoin",
    "FullName": "MollyCoin (TAB)"
  },
  {
    "Symbol": "TRIG",
    "CoinName": "Trigger",
    "FullName": "Trigger (TRIG)"
  },
  {
    "Symbol": "BITCNY",
    "CoinName": "bitCNY",
    "FullName": "bitCNY (BITCNY)"
  },
  {
    "Symbol": "BITUSD",
    "CoinName": "bitUSD",
    "FullName": "bitUSD (BITUSD)"
  },
  {
    "Symbol": "ATMC",
    "CoinName": "Autumncoin",
    "FullName": "Autumncoin (ATMC)"
  },
  {
    "Symbol": "STO",
    "CoinName": "Save The Ocean",
    "FullName": "Save The Ocean (STO)"
  },
  {
    "Symbol": "SNS",
    "CoinName": "Sense",
    "FullName": "Sense (SNS)"
  },
  {
    "Symbol": "CART",
    "CoinName": "CarterCoin",
    "FullName": "CarterCoin (CART)"
  },
  {
    "Symbol": "TOT",
    "CoinName": "TotCoin",
    "FullName": "TotCoin (TOT)"
  },
  {
    "Symbol": "BTD",
    "CoinName": "Bitcloud",
    "FullName": "Bitcloud (BTD)"
  },
  {
    "Symbol": "BOTS",
    "CoinName": "ArkDAO",
    "FullName": "ArkDAO (BOTS)"
  },
  {
    "Symbol": "MDC",
    "CoinName": "MedicCoin",
    "FullName": "MedicCoin (MDC)"
  },
  {
    "Symbol": "FTP",
    "CoinName": "FuturePoints",
    "FullName": "FuturePoints (FTP)"
  },
  {
    "Symbol": "ZET2",
    "CoinName": "Zeta2Coin",
    "FullName": "Zeta2Coin (ZET2)"
  },
  {
    "Symbol": "CVNC",
    "CoinName": "CovenCoin",
    "FullName": "CovenCoin (CVNC)"
  },
  {
    "Symbol": "KRB",
    "CoinName": "Karbo",
    "FullName": "Karbo (KRB)"
  },
  {
    "Symbol": "TELL",
    "CoinName": "Tellurion",
    "FullName": "Tellurion (TELL)"
  },
  {
    "Symbol": "ENE",
    "CoinName": "EneCoin",
    "FullName": "EneCoin (ENE)"
  },
  {
    "Symbol": "TDFB",
    "CoinName": "TDFB",
    "FullName": "TDFB (TDFB)"
  },
  {
    "Symbol": "BLOCKPAY",
    "CoinName": "BlockPay",
    "FullName": "BlockPay (BLOCKPAY)"
  },
  {
    "Symbol": "BXT",
    "CoinName": "BitTokens",
    "FullName": "BitTokens (BXT)"
  },
  {
    "Symbol": "ZYD",
    "CoinName": "ZayedCoin",
    "FullName": "ZayedCoin (ZYD)"
  },
  {
    "Symbol": "MST",
    "CoinName": "MustangCoin",
    "FullName": "MustangCoin (MST)"
  },
  {
    "Symbol": "GOON",
    "CoinName": "Goonies",
    "FullName": "Goonies (GOON)"
  },
  {
    "Symbol": "VLT",
    "CoinName": "Veltor",
    "FullName": "Veltor (VLT)"
  },
  {
    "Symbol": "ZNE",
    "CoinName": "ZoneCoin",
    "FullName": "ZoneCoin (ZNE)"
  },
  {
    "Symbol": "DCK",
    "CoinName": "DickCoin",
    "FullName": "DickCoin (DCK)"
  },
  {
    "Symbol": "COVAL",
    "CoinName": "Circuits of Value",
    "FullName": "Circuits of Value (COVAL)"
  },
  {
    "Symbol": "DGDC",
    "CoinName": "DarkGold",
    "FullName": "DarkGold (DGDC)"
  },
  {
    "Symbol": "TODAY",
    "CoinName": "TodayCoin",
    "FullName": "TodayCoin (TODAY)"
  },
  {
    "Symbol": "VRM",
    "CoinName": "Verium",
    "FullName": "Verium (VRM)"
  },
  {
    "Symbol": "ROOT",
    "CoinName": "RootCoin",
    "FullName": "RootCoin (ROOT)"
  },
  {
    "Symbol": "1ST",
    "CoinName": "FirstBlood",
    "FullName": "FirstBlood (1ST)"
  },
  {
    "Symbol": "GPL",
    "CoinName": "Gold Pressed Latinum",
    "FullName": "Gold Pressed Latinum (GPL)"
  },
  {
    "Symbol": "DOPE",
    "CoinName": "DopeCoin",
    "FullName": "DopeCoin (DOPE)"
  },
  {
    "Symbol": "B3",
    "CoinName": "B3 Coin",
    "FullName": "B3 Coin (B3)"
  },
  {
    "Symbol": "FX",
    "CoinName": "FCoin",
    "FullName": "FCoin (FX)"
  },
  {
    "Symbol": "PIO",
    "CoinName": "Pioneershares",
    "FullName": "Pioneershares (PIO)"
  },
  {
    "Symbol": "PROUD",
    "CoinName": "PROUD Money",
    "FullName": "PROUD Money (PROUD)"
  },
  {
    "Symbol": "SMSR",
    "CoinName": "Samsara Coin",
    "FullName": "Samsara Coin (SMSR)"
  },
  {
    "Symbol": "UBIQ",
    "CoinName": "Ubiqoin",
    "FullName": "Ubiqoin (UBIQ)"
  },
  {
    "Symbol": "ARM",
    "CoinName": "Armory Coin",
    "FullName": "Armory Coin (ARM)"
  },
  {
    "Symbol": "ERB",
    "CoinName": "ERBCoin",
    "FullName": "ERBCoin (ERB)"
  },
  {
    "Symbol": "LAZ",
    "CoinName": "Lazarus",
    "FullName": "Lazarus (LAZ)"
  },
  {
    "Symbol": "FONZ",
    "CoinName": "FonzieCoin",
    "FullName": "FonzieCoin (FONZ)"
  },
  {
    "Symbol": "BTCR",
    "CoinName": "BitCurrency",
    "FullName": "BitCurrency (BTCR)"
  },
  {
    "Symbol": "FCTC",
    "CoinName": "FaucetCoin",
    "FullName": "FaucetCoin (FCTC)"
  },
  {
    "Symbol": "SANDG",
    "CoinName": "Save and Gain",
    "FullName": "Save and Gain (SANDG)"
  },
  {
    "Symbol": "PUNK",
    "CoinName": "SteamPunk",
    "FullName": "SteamPunk (PUNK)"
  },
  {
    "Symbol": "MOOND",
    "CoinName": "Dark Moon",
    "FullName": "Dark Moon (MOOND)"
  },
  {
    "Symbol": "DLC",
    "CoinName": "DollarCoin",
    "FullName": "DollarCoin (DLC)"
  },
  {
    "Symbol": "SEN",
    "CoinName": "Sentaro",
    "FullName": "Sentaro (SEN)"
  },
  {
    "Symbol": "SCN",
    "CoinName": "Swiscoin",
    "FullName": "Swiscoin (SCN)"
  },
  {
    "Symbol": "WEX",
    "CoinName": "Wexcoin",
    "FullName": "Wexcoin (WEX)"
  },
  {
    "Symbol": "LTH",
    "CoinName": "Lathaan",
    "FullName": "Lathaan (LTH)"
  },
  {
    "Symbol": "BRONZ",
    "CoinName": "BitBronze",
    "FullName": "BitBronze (BRONZ)"
  },
  {
    "Symbol": "SH",
    "CoinName": "Shilling",
    "FullName": "Shilling (SH)"
  },
  {
    "Symbol": "BUZZ",
    "CoinName": "BuzzCoin",
    "FullName": "BuzzCoin (BUZZ)"
  },
  {
    "Symbol": "MG",
    "CoinName": "Mind Gene",
    "FullName": "Mind Gene (MG)"
  },
  {
    "Symbol": "PSI",
    "CoinName": "PSIcoin",
    "FullName": "PSIcoin (PSI)"
  },
  {
    "Symbol": "XPO",
    "CoinName": "Opair",
    "FullName": "Opair (XPO)"
  },
  {
    "Symbol": "NLC",
    "CoinName": "NoLimitCoin",
    "FullName": "NoLimitCoin (NLC)"
  },
  {
    "Symbol": "PSB",
    "CoinName": "PesoBit",
    "FullName": "PesoBit (PSB)"
  },
  {
    "Symbol": "XBTS",
    "CoinName": "Beats",
    "FullName": "Beats (XBTS)"
  },
  {
    "Symbol": "FITC",
    "CoinName": "Fitcoin",
    "FullName": "Fitcoin (FITC)"
  },
  {
    "Symbol": "PINKX",
    "CoinName": "PantherCoin",
    "FullName": "PantherCoin (PINKX)"
  },
  {
    "Symbol": "FIRE",
    "CoinName": "FireCoin",
    "FullName": "FireCoin (FIRE)"
  },
  {
    "Symbol": "UNF",
    "CoinName": "Unfed Coin",
    "FullName": "Unfed Coin (UNF)"
  },
  {
    "Symbol": "SPORT",
    "CoinName": "SportsCoin",
    "FullName": "SportsCoin (SPORT)"
  },
  {
    "Symbol": "PPY",
    "CoinName": "Peerplays",
    "FullName": "Peerplays (PPY)"
  },
  {
    "Symbol": "NTC",
    "CoinName": "NineElevenTruthCoin",
    "FullName": "NineElevenTruthCoin (NTC)"
  },
  {
    "Symbol": "EGO",
    "CoinName": "EGOcoin",
    "FullName": "EGOcoin (EGO)"
  },
  {
    "Symbol": "RCOIN",
    "CoinName": "RCoin",
    "FullName": "RCoin (RCOIN)"
  },
  {
    "Symbol": "X2",
    "CoinName": "X2Coin",
    "FullName": "X2Coin (X2)"
  },
  {
    "Symbol": "TIA",
    "CoinName": "Tianhe",
    "FullName": "Tianhe (TIA)"
  },
  {
    "Symbol": "GBRC",
    "CoinName": "GBR Coin",
    "FullName": "GBR Coin (GBRC)"
  },
  {
    "Symbol": "XUP",
    "CoinName": "UPcoin",
    "FullName": "UPcoin (XUP)"
  },
  {
    "Symbol": "HALLO",
    "CoinName": "Halloween Coin",
    "FullName": "Halloween Coin (HALLO)"
  },
  {
    "Symbol": "BBCC",
    "CoinName": "BaseballCardCoin",
    "FullName": "BaseballCardCoin (BBCC)"
  },
  {
    "Symbol": "EMIGR",
    "CoinName": "EmiratesGoldCoin",
    "FullName": "EmiratesGoldCoin (EMIGR)"
  },
  {
    "Symbol": "BHC",
    "CoinName": "BighanCoin",
    "FullName": "BighanCoin (BHC)"
  },
  {
    "Symbol": "CRAFT",
    "CoinName": "Craftcoin",
    "FullName": "Craftcoin (CRAFT)"
  },
  {
    "Symbol": "INV",
    "CoinName": "Invictus",
    "FullName": "Invictus (INV)"
  },
  {
    "Symbol": "OLYMP",
    "CoinName": "OlympCoin",
    "FullName": "OlympCoin (OLYMP)"
  },
  {
    "Symbol": "DPAY",
    "CoinName": "DelightPay",
    "FullName": "DelightPay (DPAY)"
  },
  {
    "Symbol": "HKG",
    "CoinName": "Hacker Gold",
    "FullName": "Hacker Gold (HKG)"
  },
  {
    "Symbol": "ANTC",
    "CoinName": "AntiLitecoin",
    "FullName": "AntiLitecoin (ANTC)"
  },
  {
    "Symbol": "JOBS",
    "CoinName": "JobsCoin",
    "FullName": "JobsCoin (JOBS)"
  },
  {
    "Symbol": "DGORE",
    "CoinName": "DogeGoreCoin",
    "FullName": "DogeGoreCoin (DGORE)"
  },
  {
    "Symbol": "THC",
    "CoinName": "The Hempcoin",
    "FullName": "The Hempcoin (THC)"
  },
  {
    "Symbol": "TRA",
    "CoinName": "Tetra",
    "FullName": "Tetra (TRA)"
  },
  {
    "Symbol": "RMS",
    "CoinName": "Resumeo Shares",
    "FullName": "Resumeo Shares (RMS)"
  },
  {
    "Symbol": "FJC",
    "CoinName": "FujiCoin",
    "FullName": "FujiCoin (FJC)"
  },
  {
    "Symbol": "VAPOR",
    "CoinName": "Vaporcoin",
    "FullName": "Vaporcoin (VAPOR)"
  },
  {
    "Symbol": "SDP",
    "CoinName": "SydPakCoin",
    "FullName": "SydPakCoin (SDP)"
  },
  {
    "Symbol": "RRT",
    "CoinName": "Recovery Right Tokens",
    "FullName": "Recovery Right Tokens (RRT)"
  },
  {
    "Symbol": "PREM",
    "CoinName": "Premium",
    "FullName": "Premium (PREM)"
  },
  {
    "Symbol": "CALC",
    "CoinName": "CaliphCoin",
    "FullName": "CaliphCoin (CALC)"
  },
  {
    "Symbol": "LEA",
    "CoinName": "LeaCoin",
    "FullName": "LeaCoin (LEA)"
  },
  {
    "Symbol": "CF",
    "CoinName": "Californium",
    "FullName": "Californium (CF)"
  },
  {
    "Symbol": "CRNK",
    "CoinName": "CrankCoin",
    "FullName": "CrankCoin (CRNK)"
  },
  {
    "Symbol": "CFC",
    "CoinName": "CoffeeCoin",
    "FullName": "CoffeeCoin (CFC)"
  },
  {
    "Symbol": "VTY",
    "CoinName": "Victoriouscoin",
    "FullName": "Victoriouscoin (VTY)"
  },
  {
    "Symbol": "BS",
    "CoinName": "BlackShadowCoin",
    "FullName": "BlackShadowCoin (BS)"
  },
  {
    "Symbol": "JIF",
    "CoinName": "JiffyCoin",
    "FullName": "JiffyCoin (JIF)"
  },
  {
    "Symbol": "CRAB",
    "CoinName": "CrabCoin",
    "FullName": "CrabCoin (CRAB)"
  },
  {
    "Symbol": "HILL",
    "CoinName": "President Clinton",
    "FullName": "President Clinton (HILL)"
  },
  {
    "Symbol": "MONETA",
    "CoinName": "Moneta",
    "FullName": "Moneta (MONETA)"
  },
  {
    "Symbol": "ECLIP",
    "CoinName": "Eclipse",
    "FullName": "Eclipse (ECLIP)"
  },
  {
    "Symbol": "RUBIT",
    "CoinName": "Rublebit",
    "FullName": "Rublebit (RUBIT)"
  },
  {
    "Symbol": "BRAIN",
    "CoinName": "BrainCoin",
    "FullName": "BrainCoin (BRAIN)"
  },
  {
    "Symbol": "VTX",
    "CoinName": "Vertex",
    "FullName": "Vertex (VTX)"
  },
  {
    "Symbol": "KRC",
    "CoinName": "KRCoin",
    "FullName": "KRCoin (KRC)"
  },
  {
    "Symbol": "ROYAL",
    "CoinName": "RoyalCoin",
    "FullName": "RoyalCoin (ROYAL)"
  },
  {
    "Symbol": "LFC",
    "CoinName": "BigLifeCoin",
    "FullName": "BigLifeCoin (LFC)"
  },
  {
    "Symbol": "ZUR",
    "CoinName": "Zurcoin",
    "FullName": "Zurcoin (ZUR)"
  },
  {
    "Symbol": "NUBIS",
    "CoinName": "NubisCoin",
    "FullName": "NubisCoin (NUBIS)"
  },
  {
    "Symbol": "TENNET",
    "CoinName": "Tennet",
    "FullName": "Tennet (TENNET)"
  },
  {
    "Symbol": "PEC",
    "CoinName": "PeaceCoin",
    "FullName": "PeaceCoin (PEC)"
  },
  {
    "Symbol": "32BIT",
    "CoinName": "32Bitcoin",
    "FullName": "32Bitcoin (32BIT)"
  },
  {
    "Symbol": "GNJ",
    "CoinName": "GanjaCoin V2",
    "FullName": "GanjaCoin V2 (GNJ)"
  },
  {
    "Symbol": "TEAM",
    "CoinName": "TeamUP",
    "FullName": "TeamUP (TEAM)"
  },
  {
    "Symbol": "SCT",
    "CoinName": "ScryptToken",
    "FullName": "ScryptToken (SCT)"
  },
  {
    "Symbol": "LANA",
    "CoinName": "LanaCoin",
    "FullName": "LanaCoin (LANA)"
  },
  {
    "Symbol": "ELE",
    "CoinName": "Elementrem",
    "FullName": "Elementrem (ELE)"
  },
  {
    "Symbol": "GCC",
    "CoinName": "GuccioneCoin",
    "FullName": "GuccioneCoin (GCC)"
  },
  {
    "Symbol": "AND",
    "CoinName": "AndromedaCoin",
    "FullName": "AndromedaCoin (AND)"
  },
  {
    "Symbol": "EQUAL",
    "CoinName": "EqualCoin",
    "FullName": "EqualCoin (EQUAL)"
  },
  {
    "Symbol": "SWEET",
    "CoinName": "SweetStake",
    "FullName": "SweetStake (SWEET)"
  },
  {
    "Symbol": "2BACCO",
    "CoinName": "2BACCO Coin",
    "FullName": "2BACCO Coin (2BACCO)"
  },
  {
    "Symbol": "DKC",
    "CoinName": "DarkKnightCoin",
    "FullName": "DarkKnightCoin (DKC)"
  },
  {
    "Symbol": "COC",
    "CoinName": "Community Coin",
    "FullName": "Community Coin (COC)"
  },
  {
    "Symbol": "CHOOF",
    "CoinName": "ChoofCoin",
    "FullName": "ChoofCoin (CHOOF)"
  },
  {
    "Symbol": "CSH",
    "CoinName": "CashOut",
    "FullName": "CashOut (CSH)"
  },
  {
    "Symbol": "ZCL",
    "CoinName": "ZClassic",
    "FullName": "ZClassic (ZCL)"
  },
  {
    "Symbol": "RYCN",
    "CoinName": "RoyalCoin 2.0",
    "FullName": "RoyalCoin 2.0 (RYCN)"
  },
  {
    "Symbol": "PCS",
    "CoinName": "Pabyosi Coin",
    "FullName": "Pabyosi Coin (PCS)"
  },
  {
    "Symbol": "NBIT",
    "CoinName": "NetBit",
    "FullName": "NetBit (NBIT)"
  },
  {
    "Symbol": "WINE",
    "CoinName": "WineCoin",
    "FullName": "WineCoin (WINE)"
  },
  {
    "Symbol": "DAR",
    "CoinName": "Darcrus",
    "FullName": "Darcrus (DAR)"
  },
  {
    "Symbol": "IFLT",
    "CoinName": "InflationCoin",
    "FullName": "InflationCoin (IFLT)"
  },
  {
    "Symbol": "ZECD",
    "CoinName": "ZCashDarkCoin",
    "FullName": "ZCashDarkCoin (ZECD)"
  },
  {
    "Symbol": "ZXT",
    "CoinName": "Zcrypt",
    "FullName": "Zcrypt (ZXT)"
  },
  {
    "Symbol": "WASH",
    "CoinName": "WashingtonCoin",
    "FullName": "WashingtonCoin (WASH)"
  },
  {
    "Symbol": "TESLA",
    "CoinName": "TeslaCoilCoin",
    "FullName": "TeslaCoilCoin (TESLA)"
  },
  {
    "Symbol": "VSL",
    "CoinName": "vSlice",
    "FullName": "vSlice (VSL)"
  },
  {
    "Symbol": "TPG",
    "CoinName": "Troll Payment",
    "FullName": "Troll Payment (TPG)"
  },
  {
    "Symbol": "LC4",
    "CoinName": "LEOcoin",
    "FullName": "LEOcoin (LC4)"
  },
  {
    "Symbol": "MDT",
    "CoinName": "Midnight",
    "FullName": "Midnight (MDT)"
  },
  {
    "Symbol": "CBD",
    "CoinName": "CBD Crystals",
    "FullName": "CBD Crystals (CBD)"
  },
  {
    "Symbol": "PEX",
    "CoinName": "PosEx",
    "FullName": "PosEx (PEX)"
  },
  {
    "Symbol": "INSANE",
    "CoinName": "InsaneCoin",
    "FullName": "InsaneCoin (INSANE)"
  },
  {
    "Symbol": "PENC",
    "CoinName": "PenCoin",
    "FullName": "PenCoin (PENC)"
  },
  {
    "Symbol": "BASH",
    "CoinName": "LuckChain",
    "FullName": "LuckChain (BASH)"
  },
  {
    "Symbol": "FAMEC",
    "CoinName": "FameCoin",
    "FullName": "FameCoin (FAMEC)"
  },
  {
    "Symbol": "LIV",
    "CoinName": "LiviaCoin",
    "FullName": "LiviaCoin (LIV)"
  },
  {
    "Symbol": "SP",
    "CoinName": "Sex Pistols",
    "FullName": "Sex Pistols (SP)"
  },
  {
    "Symbol": "MEGA",
    "CoinName": "MegaFlash",
    "FullName": "MegaFlash (MEGA)"
  },
  {
    "Symbol": "VRS",
    "CoinName": "Veros",
    "FullName": "Veros (VRS)"
  },
  {
    "Symbol": "ALC",
    "CoinName": "Arab League Coin",
    "FullName": "Arab League Coin (ALC)"
  },
  {
    "Symbol": "DOGETH",
    "CoinName": "EtherDoge",
    "FullName": "EtherDoge (DOGETH)"
  },
  {
    "Symbol": "KLC",
    "CoinName": "KiloCoin",
    "FullName": "KiloCoin (KLC)"
  },
  {
    "Symbol": "HUSH",
    "CoinName": "Hush",
    "FullName": "Hush (HUSH)"
  },
  {
    "Symbol": "BTLC",
    "CoinName": "BitLuckCoin",
    "FullName": "BitLuckCoin (BTLC)"
  },
  {
    "Symbol": "DRM8",
    "CoinName": "Dream8Coin",
    "FullName": "Dream8Coin (DRM8)"
  },
  {
    "Symbol": "FIST",
    "CoinName": "FistBump",
    "FullName": "FistBump (FIST)"
  },
  {
    "Symbol": "EBZ",
    "CoinName": "Ebitz",
    "FullName": "Ebitz (EBZ)"
  },
  {
    "Symbol": "DRS",
    "CoinName": "Digital Rupees",
    "FullName": "Digital Rupees (DRS)"
  },
  {
    "Symbol": "FGZ",
    "CoinName": "Free Game Zone",
    "FullName": "Free Game Zone (FGZ)"
  },
  {
    "Symbol": "BOSON",
    "CoinName": "BosonCoin",
    "FullName": "BosonCoin (BOSON)"
  },
  {
    "Symbol": "ATX",
    "CoinName": "ArtexCoin",
    "FullName": "ArtexCoin (ATX)"
  },
  {
    "Symbol": "PNC",
    "CoinName": "PlatiniumCoin",
    "FullName": "PlatiniumCoin (PNC)"
  },
  {
    "Symbol": "BRDD",
    "CoinName": "BeardDollars",
    "FullName": "BeardDollars (BRDD)"
  },
  {
    "Symbol": "TIME",
    "CoinName": "Time",
    "FullName": "Time (TIME)"
  },
  {
    "Symbol": "BIPC",
    "CoinName": "BipCoin",
    "FullName": "BipCoin (BIPC)"
  },
  {
    "Symbol": "EMB",
    "CoinName": "EmberCoin",
    "FullName": "EmberCoin (EMB)"
  },
  {
    "Symbol": "BTTF",
    "CoinName": "Coin to the Future",
    "FullName": "Coin to the Future (BTTF)"
  },
  {
    "Symbol": "DLR",
    "CoinName": "DollarOnline",
    "FullName": "DollarOnline (DLR)"
  },
  {
    "Symbol": "CSMIC",
    "CoinName": "Cosmic",
    "FullName": "Cosmic (CSMIC)"
  },
  {
    "Symbol": "SCASH",
    "CoinName": "SpaceCash",
    "FullName": "SpaceCash (SCASH)"
  },
  {
    "Symbol": "XEN",
    "CoinName": "XenixCoin",
    "FullName": "XenixCoin (XEN)"
  },
  {
    "Symbol": "JIO",
    "CoinName": "JIO Token",
    "FullName": "JIO Token (JIO)"
  },
  {
    "Symbol": "IW",
    "CoinName": "iWallet",
    "FullName": "iWallet (IW)"
  },
  {
    "Symbol": "JNS",
    "CoinName": "Janus",
    "FullName": "Janus (JNS)"
  },
  {
    "Symbol": "TRICK",
    "CoinName": "TrickyCoin",
    "FullName": "TrickyCoin (TRICK)"
  },
  {
    "Symbol": "DCRE",
    "CoinName": "DeltaCredits",
    "FullName": "DeltaCredits (DCRE)"
  },
  {
    "Symbol": "FRE",
    "CoinName": "FreeCoin",
    "FullName": "FreeCoin (FRE)"
  },
  {
    "Symbol": "NPC",
    "CoinName": "NPCcoin",
    "FullName": "NPCcoin (NPC)"
  },
  {
    "Symbol": "PLNC",
    "CoinName": "PLNCoin",
    "FullName": "PLNCoin (PLNC)"
  },
  {
    "Symbol": "DGMS",
    "CoinName": "Digigems",
    "FullName": "Digigems (DGMS)"
  },
  {
    "Symbol": "ICOB",
    "CoinName": "Icobid",
    "FullName": "Icobid (ICOB)"
  },
  {
    "Symbol": "ARCO",
    "CoinName": "AquariusCoin",
    "FullName": "AquariusCoin (ARCO)"
  },
  {
    "Symbol": "KURT",
    "CoinName": "Kurrent",
    "FullName": "Kurrent (KURT)"
  },
  {
    "Symbol": "XCRE",
    "CoinName": "Creatio",
    "FullName": "Creatio (XCRE)"
  },
  {
    "Symbol": "ENT",
    "CoinName": "Eternity",
    "FullName": "Eternity (ENT)"
  },
  {
    "Symbol": "UR",
    "CoinName": "UR",
    "FullName": "UR (UR)"
  },
  {
    "Symbol": "MTLM3",
    "CoinName": "Metal Music v3",
    "FullName": "Metal Music v3 (MTLM3)"
  },
  {
    "Symbol": "ODNT",
    "CoinName": "Old Dogs New Tricks",
    "FullName": "Old Dogs New Tricks (ODNT)"
  },
  {
    "Symbol": "EUC",
    "CoinName": "Eurocoin",
    "FullName": "Eurocoin (EUC)"
  },
  {
    "Symbol": "CCXC",
    "CoinName": "CoolinDarkCoin",
    "FullName": "CoolinDarkCoin (CCXC)"
  },
  {
    "Symbol": "BCF",
    "CoinName": "BitcoinFast",
    "FullName": "BitcoinFast (BCF)"
  },
  {
    "Symbol": "SEEDS",
    "CoinName": "SeedShares",
    "FullName": "SeedShares (SEEDS)"
  },
  {
    "Symbol": "XSN",
    "CoinName": "Stakenet",
    "FullName": "Stakenet (XSN)"
  },
  {
    "Symbol": "TKS",
    "CoinName": "Tokes",
    "FullName": "Tokes (TKS)"
  },
  {
    "Symbol": "BCCOIN",
    "CoinName": "BitConnect Coin",
    "FullName": "BitConnect Coin (BCCOIN)"
  },
  {
    "Symbol": "SHORTY",
    "CoinName": "ShortyCoin",
    "FullName": "ShortyCoin (SHORTY)"
  },
  {
    "Symbol": "PCM",
    "CoinName": "Procom",
    "FullName": "Procom (PCM)"
  },
  {
    "Symbol": "KC",
    "CoinName": "Kernalcoin",
    "FullName": "Kernalcoin (KC)"
  },
  {
    "Symbol": "CORAL",
    "CoinName": "CoralPay",
    "FullName": "CoralPay (CORAL)"
  },
  {
    "Symbol": "BamitCoin",
    "CoinName": "BAM",
    "FullName": "BAM (BAM)"
  },
  {
    "Symbol": "NXC",
    "CoinName": "Nexium",
    "FullName": "Nexium (NXC)"
  },
  {
    "Symbol": "MONEY",
    "CoinName": "MoneyCoin",
    "FullName": "MoneyCoin (MONEY)"
  },
  {
    "Symbol": "BSTAR",
    "CoinName": "Blackstar",
    "FullName": "Blackstar (BSTAR)"
  },
  {
    "Symbol": "HSP",
    "CoinName": "Horse Power",
    "FullName": "Horse Power (HSP)"
  },
  {
    "Symbol": "HZT",
    "CoinName": "HazMatCoin",
    "FullName": "HazMatCoin (HZT)"
  },
  {
    "Symbol": "CRSP",
    "CoinName": "CryptoSpots",
    "FullName": "CryptoSpots (CRSP)"
  },
  {
    "Symbol": "XSPT",
    "CoinName": "PoolStamp",
    "FullName": "PoolStamp (XSPT)"
  },
  {
    "Symbol": "CCRB",
    "CoinName": "CryptoCarbon",
    "FullName": "CryptoCarbon (CCRB)"
  },
  {
    "Symbol": "BULLS",
    "CoinName": "BullshitCoin",
    "FullName": "BullshitCoin (BULLS)"
  },
  {
    "Symbol": "INCNT",
    "CoinName": "Incent",
    "FullName": "Incent (INCNT)"
  },
  {
    "Symbol": "ICON",
    "CoinName": "Iconic",
    "FullName": "Iconic (ICON)"
  },
  {
    "Symbol": "NIC",
    "CoinName": "NewInvestCoin",
    "FullName": "NewInvestCoin (NIC)"
  },
  {
    "Symbol": "ACN",
    "CoinName": "AvonCoin",
    "FullName": "AvonCoin (ACN)"
  },
  {
    "Symbol": "XNG",
    "CoinName": "Enigma",
    "FullName": "Enigma (XNG)"
  },
  {
    "Symbol": "XCI",
    "CoinName": "Cannabis Industry Coin",
    "FullName": "Cannabis Industry Coin (XCI)"
  },
  {
    "Symbol": "LOOK",
    "CoinName": "LookCoin",
    "FullName": "LookCoin (LOOK)"
  },
  {
    "Symbol": "LOC",
    "CoinName": "Loco",
    "FullName": "Loco (LOC)"
  },
  {
    "Symbol": "MMXVI",
    "CoinName": "MMXVI",
    "FullName": "MMXVI (MMXVI)"
  },
  {
    "Symbol": "TRST",
    "CoinName": "TrustCoin",
    "FullName": "TrustCoin (TRST)"
  },
  {
    "Symbol": "WOP",
    "CoinName": "WorldPay",
    "FullName": "WorldPay (WOP)"
  },
  {
    "Symbol": "CQST",
    "CoinName": "ConquestCoin",
    "FullName": "ConquestCoin (CQST)"
  },
  {
    "Symbol": "IMPS",
    "CoinName": "Impulse Coin",
    "FullName": "Impulse Coin (IMPS)"
  },
  {
    "Symbol": "IN",
    "CoinName": "InCoin",
    "FullName": "InCoin (IN)"
  },
  {
    "Symbol": "CHIEF",
    "CoinName": "TheChiefCoin",
    "FullName": "TheChiefCoin (CHIEF)"
  },
  {
    "Symbol": "GOAT",
    "CoinName": "Goat",
    "FullName": "Goat (GOAT)"
  },
  {
    "Symbol": "ANAL",
    "CoinName": "AnalCoin",
    "FullName": "AnalCoin (ANAL)"
  },
  {
    "Symbol": "RC",
    "CoinName": "Russiacoin",
    "FullName": "Russiacoin (RC)"
  },
  {
    "Symbol": "PND",
    "CoinName": "PandaCoin",
    "FullName": "PandaCoin (PND)"
  },
  {
    "Symbol": "PX",
    "CoinName": "PXcoin",
    "FullName": "PXcoin (PX)"
  },
  {
    "Symbol": "OPTION",
    "CoinName": "OptionCoin",
    "FullName": "OptionCoin (OPTION)"
  },
  {
    "Symbol": "AV",
    "CoinName": "Avatar Coin",
    "FullName": "Avatar Coin (AV)"
  },
  {
    "Symbol": "LTD",
    "CoinName": "Limited Coin",
    "FullName": "Limited Coin (LTD)"
  },
  {
    "Symbol": "UNITS",
    "CoinName": "GameUnits",
    "FullName": "GameUnits (UNITS)"
  },
  {
    "Symbol": "HEEL",
    "CoinName": "HeelCoin",
    "FullName": "HeelCoin (HEEL)"
  },
  {
    "Symbol": "GAKH",
    "CoinName": "GAKHcoin",
    "FullName": "GAKHcoin (GAKH)"
  },
  {
    "Symbol": "GAIN",
    "CoinName": "Gainfy",
    "FullName": "Gainfy (GAIN)"
  },
  {
    "Symbol": "S8C",
    "CoinName": "S88 Coin",
    "FullName": "S88 Coin (S8C)"
  },
  {
    "Symbol": "LVG",
    "CoinName": "Leverage Coin",
    "FullName": "Leverage Coin (LVG)"
  },
  {
    "Symbol": "DRA",
    "CoinName": "DraculaCoin",
    "FullName": "DraculaCoin (DRA)"
  },
  {
    "Symbol": "ASAFE2",
    "CoinName": "Allsafe",
    "FullName": "Allsafe (ASAFE2)"
  },
  {
    "Symbol": "LTCR",
    "CoinName": "LiteCreed",
    "FullName": "LiteCreed (LTCR)"
  },
  {
    "Symbol": "QBC",
    "CoinName": "Quebecoin",
    "FullName": "Quebecoin (QBC)"
  },
  {
    "Symbol": "XPRO",
    "CoinName": "ProCoin",
    "FullName": "ProCoin (XPRO)"
  },
  {
    "Symbol": "ASTR",
    "CoinName": "Astral",
    "FullName": "Astral (ASTR)"
  },
  {
    "Symbol": "GIFT",
    "CoinName": "GiftNet",
    "FullName": "GiftNet (GIFT)"
  },
  {
    "Symbol": "VIDZ",
    "CoinName": "PureVidz",
    "FullName": "PureVidz (VIDZ)"
  },
  {
    "Symbol": "INC",
    "CoinName": "Incrementum",
    "FullName": "Incrementum (INC)"
  },
  {
    "Symbol": "PTA",
    "CoinName": "PentaCoin",
    "FullName": "PentaCoin (PTA)"
  },
  {
    "Symbol": "ACID",
    "CoinName": "AcidCoin",
    "FullName": "AcidCoin (ACID)"
  },
  {
    "Symbol": "ZLQ",
    "CoinName": "ZLiteQubit",
    "FullName": "ZLiteQubit (ZLQ)"
  },
  {
    "Symbol": "RADI",
    "CoinName": "RadicalCoin",
    "FullName": "RadicalCoin (RADI)"
  },
  {
    "Symbol": "RNC",
    "CoinName": "ReturnCoin",
    "FullName": "ReturnCoin (RNC)"
  },
  {
    "Symbol": "GOLOS",
    "CoinName": "Golos",
    "FullName": "Golos (GOLOS)"
  },
  {
    "Symbol": "PASC",
    "CoinName": "Pascal Coin",
    "FullName": "Pascal Coin (PASC)"
  },
  {
    "Symbol": "TWIST",
    "CoinName": "TwisterCoin",
    "FullName": "TwisterCoin (TWIST)"
  },
  {
    "Symbol": "PAYP",
    "CoinName": "PayPeer",
    "FullName": "PayPeer (PAYP)"
  },
  {
    "Symbol": "DETH",
    "CoinName": "DarkEther",
    "FullName": "DarkEther (DETH)"
  },
  {
    "Symbol": "YAY",
    "CoinName": "YAYcoin",
    "FullName": "YAYcoin (YAY)"
  },
  {
    "Symbol": "YES",
    "CoinName": "YesCoin",
    "FullName": "YesCoin (YES)"
  },
  {
    "Symbol": "LENIN",
    "CoinName": "LeninCoin",
    "FullName": "LeninCoin (LENIN)"
  },
  {
    "Symbol": "MRSA",
    "CoinName": "MrsaCoin",
    "FullName": "MrsaCoin (MRSA)"
  },
  {
    "Symbol": "OS76",
    "CoinName": "OsmiumCoin",
    "FullName": "OsmiumCoin (OS76)"
  },
  {
    "Symbol": "BOSS",
    "CoinName": "BitBoss",
    "FullName": "BitBoss (BOSS)"
  },
  {
    "Symbol": "BIC",
    "CoinName": "Bikercoins",
    "FullName": "Bikercoins (BIC)"
  },
  {
    "Symbol": "CRPS",
    "CoinName": "CryptoPennies",
    "FullName": "CryptoPennies (CRPS)"
  },
  {
    "Symbol": "MOTO",
    "CoinName": "Motocoin",
    "FullName": "Motocoin (MOTO)"
  },
  {
    "Symbol": "NTCC",
    "CoinName": "NeptuneClassic",
    "FullName": "NeptuneClassic (NTCC)"
  },
  {
    "Symbol": "HXX",
    "CoinName": "HexxCoin",
    "FullName": "HexxCoin (HXX)"
  },
  {
    "Symbol": "SPKTR",
    "CoinName": "Ghost Coin",
    "FullName": "Ghost Coin (SPKTR)"
  },
  {
    "Symbol": "MAC",
    "CoinName": "MachineCoin",
    "FullName": "MachineCoin (MAC)"
  },
  {
    "Symbol": "SEL",
    "CoinName": "SelenCoin",
    "FullName": "SelenCoin (SEL)"
  },
  {
    "Symbol": "NOO",
    "CoinName": "Noocoin",
    "FullName": "Noocoin (NOO)"
  },
  {
    "Symbol": "CHAO",
    "CoinName": "23 Skidoo",
    "FullName": "23 Skidoo (CHAO)"
  },
  {
    "Symbol": "XGB",
    "CoinName": "GoldenBird",
    "FullName": "GoldenBird (XGB)"
  },
  {
    "Symbol": "YMC",
    "CoinName": "YamahaCoin",
    "FullName": "YamahaCoin (YMC)"
  },
  {
    "Symbol": "JOK",
    "CoinName": "JokerCoin",
    "FullName": "JokerCoin (JOK)"
  },
  {
    "Symbol": "GBIT",
    "CoinName": "GravityBit",
    "FullName": "GravityBit (GBIT)"
  },
  {
    "Symbol": "TEC",
    "CoinName": "TeCoin",
    "FullName": "TeCoin (TEC)"
  },
  {
    "Symbol": "BOMBC",
    "CoinName": "BombCoin",
    "FullName": "BombCoin (BOMBC)"
  },
  {
    "Symbol": "RIDE",
    "CoinName": "Ride My Car",
    "FullName": "Ride My Car (RIDE)"
  },
  {
    "Symbol": "KED",
    "CoinName": "Klingon Empire Darsek",
    "FullName": "Klingon Empire Darsek (KED)"
  },
  {
    "Symbol": "CNO",
    "CoinName": "Coino",
    "FullName": "Coino (CNO)"
  },
  {
    "Symbol": "WEALTH",
    "CoinName": "WealthCoin",
    "FullName": "WealthCoin (WEALTH)"
  },
  {
    "Symbol": "IOP",
    "CoinName": "Internet of People",
    "FullName": "Internet of People (IOP)"
  },
  {
    "Symbol": "XSPEC",
    "CoinName": "Spectre",
    "FullName": "Spectre (XSPEC)"
  },
  {
    "Symbol": "PEPECASH",
    "CoinName": "Pepe Cash",
    "FullName": "Pepe Cash (PEPECASH)"
  },
  {
    "Symbol": "CLICK",
    "CoinName": "Clickcoin",
    "FullName": "Clickcoin (CLICK)"
  },
  {
    "Symbol": "ELS",
    "CoinName": "Elysium",
    "FullName": "Elysium (ELS)"
  },
  {
    "Symbol": "KUSH",
    "CoinName": "KushCoin",
    "FullName": "KushCoin (KUSH)"
  },
  {
    "Symbol": "ERY",
    "CoinName": "Eryllium",
    "FullName": "Eryllium (ERY)"
  },
  {
    "Symbol": "PLU",
    "CoinName": "Pluton",
    "FullName": "Pluton (PLU)"
  },
  {
    "Symbol": "PRES",
    "CoinName": "President Trump",
    "FullName": "President Trump (PRES)"
  },
  {
    "Symbol": "BTZ",
    "CoinName": "BitzCoin",
    "FullName": "BitzCoin (BTZ)"
  },
  {
    "Symbol": "OPES",
    "CoinName": "Opes",
    "FullName": "Opes (OPES)"
  },
  {
    "Symbol": "WCT",
    "CoinName": "Waves Community Token",
    "FullName": "Waves Community Token (WCT)"
  },
  {
    "Symbol": "RATIO",
    "CoinName": "Ratio",
    "FullName": "Ratio (RATIO)"
  },
  {
    "Symbol": "BANC",
    "CoinName": "Babes and Nerds",
    "FullName": "Babes and Nerds (BANC)"
  },
  {
    "Symbol": "NICEC",
    "CoinName": "NiceCoin",
    "FullName": "NiceCoin (NICEC)"
  },
  {
    "Symbol": "SMF",
    "CoinName": "SmurfCoin",
    "FullName": "SmurfCoin (SMF)"
  },
  {
    "Symbol": "CWXT",
    "CoinName": "CryptoWorldXToken",
    "FullName": "CryptoWorldXToken (CWXT)"
  },
  {
    "Symbol": "TECH",
    "CoinName": "TechCoin",
    "FullName": "TechCoin (TECH)"
  },
  {
    "Symbol": "CIR",
    "CoinName": "CircuitCoin",
    "FullName": "CircuitCoin (CIR)"
  },
  {
    "Symbol": "LEPEN",
    "CoinName": "LePenCoin",
    "FullName": "LePenCoin (LEPEN)"
  },
  {
    "Symbol": "ROUND",
    "CoinName": "RoundCoin",
    "FullName": "RoundCoin (ROUND)"
  },
  {
    "Symbol": "MARI",
    "CoinName": "MarijuanaCoin",
    "FullName": "MarijuanaCoin (MARI)"
  },
  {
    "Symbol": "MARX",
    "CoinName": "MarxCoin",
    "FullName": "MarxCoin (MARX)"
  },
  {
    "Symbol": "HAZE",
    "CoinName": "HazeCoin",
    "FullName": "HazeCoin (HAZE)"
  },
  {
    "Symbol": "PRX",
    "CoinName": "Printerium",
    "FullName": "Printerium (PRX)"
  },
  {
    "Symbol": "NRC",
    "CoinName": "Neurocoin",
    "FullName": "Neurocoin (NRC)"
  },
  {
    "Symbol": "PAC",
    "CoinName": "PAC Global",
    "FullName": "PAC Global (PAC)"
  },
  {
    "Symbol": "IMPCH",
    "CoinName": "Impeach",
    "FullName": "Impeach (IMPCH)"
  },
  {
    "Symbol": "ERR",
    "CoinName": "ErrorCoin",
    "FullName": "ErrorCoin (ERR)"
  },
  {
    "Symbol": "TIC",
    "CoinName": "TrueInvestmentCoin",
    "FullName": "TrueInvestmentCoin (TIC)"
  },
  {
    "Symbol": "NUKE",
    "CoinName": "NukeCoin",
    "FullName": "NukeCoin (NUKE)"
  },
  {
    "Symbol": "EOC",
    "CoinName": "EveryonesCoin",
    "FullName": "EveryonesCoin (EOC)"
  },
  {
    "Symbol": "SFC",
    "CoinName": "Solarflarecoin",
    "FullName": "Solarflarecoin (SFC)"
  },
  {
    "Symbol": "JANE",
    "CoinName": "JaneCoin",
    "FullName": "JaneCoin (JANE)"
  },
  {
    "Symbol": "PARA",
    "CoinName": "ParanoiaCoin",
    "FullName": "ParanoiaCoin (PARA)"
  },
  {
    "Symbol": "MM",
    "CoinName": "MasterMint",
    "FullName": "MasterMint (MM)"
  },
  {
    "Symbol": "CTL",
    "CoinName": "Citadel",
    "FullName": "Citadel (CTL)"
  },
  {
    "Symbol": "NDOGE",
    "CoinName": "NinjaDoge",
    "FullName": "NinjaDoge (NDOGE)"
  },
  {
    "Symbol": "ZBC",
    "CoinName": "Zilbercoin",
    "FullName": "Zilbercoin (ZBC)"
  },
  {
    "Symbol": "FRST",
    "CoinName": "FirstCoin",
    "FullName": "FirstCoin (FRST)"
  },
  {
    "Symbol": "ORO",
    "CoinName": "OroCoin",
    "FullName": "OroCoin (ORO)"
  },
  {
    "Symbol": "ALEX",
    "CoinName": "Alexandrite",
    "FullName": "Alexandrite (ALEX)"
  },
  {
    "Symbol": "TBCX",
    "CoinName": "TrashBurn",
    "FullName": "TrashBurn (TBCX)"
  },
  {
    "Symbol": "MCAR",
    "CoinName": "MasterCar",
    "FullName": "MasterCar (MCAR)"
  },
  {
    "Symbol": "THS",
    "CoinName": "TechShares",
    "FullName": "TechShares (THS)"
  },
  {
    "Symbol": "ACES",
    "CoinName": "AcesCoin",
    "FullName": "AcesCoin (ACES)"
  },
  {
    "Symbol": "UAEC",
    "CoinName": "United Arab Emirates Coin",
    "FullName": "United Arab Emirates Coin (UAEC)"
  },
  {
    "Symbol": "EA",
    "CoinName": "EagleCoin",
    "FullName": "EagleCoin (EA)"
  },
  {
    "Symbol": "PIE",
    "CoinName": "Persistent Information Exchange",
    "FullName": "Persistent Information Exchange (PIE)"
  },
  {
    "Symbol": "CREA",
    "CoinName": "CreativeChain",
    "FullName": "CreativeChain (CREA)"
  },
  {
    "Symbol": "WISC",
    "CoinName": "WisdomCoin",
    "FullName": "WisdomCoin (WISC)"
  },
  {
    "Symbol": "BVC",
    "CoinName": "BeaverCoin",
    "FullName": "BeaverCoin (BVC)"
  },
  {
    "Symbol": "FIND",
    "CoinName": "FindCoin",
    "FullName": "FindCoin (FIND)"
  },
  {
    "Symbol": "MLITE",
    "CoinName": "MeLite",
    "FullName": "MeLite (MLITE)"
  },
  {
    "Symbol": "STALIN",
    "CoinName": "StalinCoin",
    "FullName": "StalinCoin (STALIN)"
  },
  {
    "Symbol": "TSE",
    "CoinName": "TattooCoin",
    "FullName": "TattooCoin (TSE)"
  },
  {
    "Symbol": "VLTC",
    "CoinName": "VaultCoin",
    "FullName": "VaultCoin (VLTC)"
  },
  {
    "Symbol": "BIOB",
    "CoinName": "BioBar",
    "FullName": "BioBar (BIOB)"
  },
  {
    "Symbol": "SWT",
    "CoinName": "Swarm City Token",
    "FullName": "Swarm City Token (SWT)"
  },
  {
    "Symbol": "PASL",
    "CoinName": "Pascal Lite",
    "FullName": "Pascal Lite (PASL)"
  },
  {
    "Symbol": "ZER",
    "CoinName": "Zero",
    "FullName": "Zero (ZER)"
  },
  {
    "Symbol": "CHAT",
    "CoinName": "OpenChat",
    "FullName": "OpenChat (CHAT)"
  },
  {
    "Symbol": "NETKO",
    "CoinName": "Netko",
    "FullName": "Netko (NETKO)"
  },
  {
    "Symbol": "ZOI",
    "CoinName": "Zoin",
    "FullName": "Zoin (ZOI)"
  },
  {
    "Symbol": "HONEY",
    "CoinName": "Honey",
    "FullName": "Honey (HONEY)"
  },
  {
    "Symbol": "MXTC",
    "CoinName": "MartexCoin",
    "FullName": "MartexCoin (MXTC)"
  },
  {
    "Symbol": "MUSIC",
    "CoinName": "Musicoin",
    "FullName": "Musicoin (MUSIC)"
  },
  {
    "Symbol": "DTB",
    "CoinName": "Databits",
    "FullName": "Databits (DTB)"
  },
  {
    "Symbol": "VEG",
    "CoinName": "BitVegan",
    "FullName": "BitVegan (VEG)"
  },
  {
    "Symbol": "MBIT",
    "CoinName": "Mbitbooks",
    "FullName": "Mbitbooks (MBIT)"
  },
  {
    "Symbol": "VOLT",
    "CoinName": "BitVolt",
    "FullName": "BitVolt (VOLT)"
  },
  {
    "Symbol": "EDG",
    "CoinName": "Edgeless",
    "FullName": "Edgeless (EDG)"
  },
  {
    "Symbol": "B@",
    "CoinName": "BankCoin",
    "FullName": "BankCoin (B@)"
  },
  {
    "Symbol": "BESTC",
    "CoinName": "BestChain",
    "FullName": "BestChain (BESTC)"
  },
  {
    "Symbol": "CHC",
    "CoinName": "ChainCoin",
    "FullName": "ChainCoin (CHC)"
  },
  {
    "Symbol": "ZENI",
    "CoinName": "Zennies",
    "FullName": "Zennies (ZENI)"
  },
  {
    "Symbol": "PLANET",
    "CoinName": "PlanetCoin",
    "FullName": "PlanetCoin (PLANET)"
  },
  {
    "Symbol": "BNX",
    "CoinName": "BnrtxCoin",
    "FullName": "BnrtxCoin (BNX)"
  },
  {
    "Symbol": "BSTK",
    "CoinName": "BattleStake",
    "FullName": "BattleStake (BSTK)"
  },
  {
    "Symbol": "RNS",
    "CoinName": "RenosCoin",
    "FullName": "RenosCoin (RNS)"
  },
  {
    "Symbol": "DBIX",
    "CoinName": "DubaiCoin",
    "FullName": "DubaiCoin (DBIX)"
  },
  {
    "Symbol": "AMIS",
    "CoinName": "AMIS",
    "FullName": "AMIS (AMIS)"
  },
  {
    "Symbol": "KAYI",
    "CoinName": "Kayı",
    "FullName": "Kayı (KAYI)"
  },
  {
    "Symbol": "XVP",
    "CoinName": "VirtacoinPlus",
    "FullName": "VirtacoinPlus (XVP)"
  },
  {
    "Symbol": "BOAT",
    "CoinName": "Doubloon",
    "FullName": "Doubloon (BOAT)"
  },
  {
    "Symbol": "TAJ",
    "CoinName": "TajCoin",
    "FullName": "TajCoin (TAJ)"
  },
  {
    "Symbol": "IMX",
    "CoinName": "Impact",
    "FullName": "Impact (IMX)"
  },
  {
    "Symbol": "CJC",
    "CoinName": "CryptoJournal",
    "FullName": "CryptoJournal (CJC)"
  },
  {
    "Symbol": "AMY",
    "CoinName": "Amygws",
    "FullName": "Amygws (AMY)"
  },
  {
    "Symbol": "QBT",
    "CoinName": "Cubits",
    "FullName": "Cubits (QBT)"
  },
  {
    "Symbol": "EB3",
    "CoinName": "EB3coin",
    "FullName": "EB3coin (EB3)"
  },
  {
    "Symbol": "XVE",
    "CoinName": "The Vegan Initiative",
    "FullName": "The Vegan Initiative (XVE)"
  },
  {
    "Symbol": "FAZZ",
    "CoinName": "FazzCoin",
    "FullName": "FazzCoin (FAZZ)"
  },
  {
    "Symbol": "APT",
    "CoinName": "Aptcoin",
    "FullName": "Aptcoin (APT)"
  },
  {
    "Symbol": "BLAZR",
    "CoinName": "BlazerCoin",
    "FullName": "BlazerCoin (BLAZR)"
  },
  {
    "Symbol": "ARPAC",
    "CoinName": "ArpaCoin",
    "FullName": "ArpaCoin (ARPAC)"
  },
  {
    "Symbol": "UNIVRS",
    "CoinName": "Universe",
    "FullName": "Universe (UNIVRS)"
  },
  {
    "Symbol": "ECOC",
    "CoinName": "ECOcoin",
    "FullName": "ECOcoin (ECOC)"
  },
  {
    "Symbol": "XLR",
    "CoinName": "Solaris",
    "FullName": "Solaris (XLR)"
  },
  {
    "Symbol": "DARK",
    "CoinName": "Dark",
    "FullName": "Dark (DARK)"
  },
  {
    "Symbol": "DON",
    "CoinName": "DonationCoin",
    "FullName": "DonationCoin (DON)"
  },
  {
    "Symbol": "MER",
    "CoinName": "Mercury",
    "FullName": "Mercury (MER)"
  },
  {
    "Symbol": "WGO",
    "CoinName": "WavesGO",
    "FullName": "WavesGO (WGO)"
  },
  {
    "Symbol": "RLC",
    "CoinName": "iEx.ec",
    "FullName": "iEx.ec (RLC)"
  },
  {
    "Symbol": "ATMOS",
    "CoinName": "Atmos",
    "FullName": "Atmos (ATMOS)"
  },
  {
    "Symbol": "ETT",
    "CoinName": "EncryptoTel",
    "FullName": "EncryptoTel (ETT)"
  },
  {
    "Symbol": "VISIO",
    "CoinName": "Visio",
    "FullName": "Visio (VISIO)"
  },
  {
    "Symbol": "HPC",
    "CoinName": "HappyCoin",
    "FullName": "HappyCoin (HPC)"
  },
  {
    "Symbol": "GIOT",
    "CoinName": "Giotto Coin",
    "FullName": "Giotto Coin (GIOT)"
  },
  {
    "Symbol": "CXT",
    "CoinName": "Coinonat",
    "FullName": "Coinonat (CXT)"
  },
  {
    "Symbol": "EMPC",
    "CoinName": "EmporiumCoin",
    "FullName": "EmporiumCoin (EMPC)"
  },
  {
    "Symbol": "GNO",
    "CoinName": "Gnosis",
    "FullName": "Gnosis (GNO)"
  },
  {
    "Symbol": "LGD",
    "CoinName": "Legends Cryptocurrency",
    "FullName": "Legends Cryptocurrency (LGD)"
  },
  {
    "Symbol": "TAAS",
    "CoinName": "Token as a Service",
    "FullName": "Token as a Service (TAAS)"
  },
  {
    "Symbol": "BUCKS",
    "CoinName": "SwagBucks",
    "FullName": "SwagBucks (BUCKS)"
  },
  {
    "Symbol": "XBY",
    "CoinName": "XTRABYTES",
    "FullName": "XTRABYTES (XBY)"
  },
  {
    "Symbol": "MCRN",
    "CoinName": "MacronCoin",
    "FullName": "MacronCoin (MCRN)"
  },
  {
    "Symbol": "LUN",
    "CoinName": "Lunyr",
    "FullName": "Lunyr (LUN)"
  },
  {
    "Symbol": "RAIN",
    "CoinName": "Condensate",
    "FullName": "Condensate (RAIN)"
  },
  {
    "Symbol": "WSX",
    "CoinName": "WeAreSatoshi",
    "FullName": "WeAreSatoshi (WSX)"
  },
  {
    "Symbol": "IEC",
    "CoinName": "IvugeoEvolutionCoin",
    "FullName": "IvugeoEvolutionCoin (IEC)"
  },
  {
    "Symbol": "IMS",
    "CoinName": "Independent Money System",
    "FullName": "Independent Money System (IMS)"
  },
  {
    "Symbol": "ARGUS",
    "CoinName": "ArgusCoin",
    "FullName": "ArgusCoin (ARGUS)"
  },
  {
    "Symbol": "CNT",
    "CoinName": "Centurion",
    "FullName": "Centurion (CNT)"
  },
  {
    "Symbol": "LMC",
    "CoinName": "LomoCoin",
    "FullName": "LomoCoin (LMC)"
  },
  {
    "Symbol": "BTCS",
    "CoinName": "Bitcoin Scrypt",
    "FullName": "Bitcoin Scrypt (BTCS)"
  },
  {
    "Symbol": "PROC",
    "CoinName": "ProCurrency",
    "FullName": "ProCurrency (PROC)"
  },
  {
    "Symbol": "XGR",
    "CoinName": "GoldReserve",
    "FullName": "GoldReserve (XGR)"
  },
  {
    "Symbol": "BENJI",
    "CoinName": "BenjiRolls",
    "FullName": "BenjiRolls (BENJI)"
  },
  {
    "Symbol": "HMQ",
    "CoinName": "Humaniq",
    "FullName": "Humaniq (HMQ)"
  },
  {
    "Symbol": "BCAP",
    "CoinName": "Blockchain Capital",
    "FullName": "Blockchain Capital (BCAP)"
  },
  {
    "Symbol": "DUO",
    "CoinName": "ParallelCoin",
    "FullName": "ParallelCoin (DUO)"
  },
  {
    "Symbol": "RBX",
    "CoinName": "RiptoBuX",
    "FullName": "RiptoBuX (RBX)"
  },
  {
    "Symbol": "GRW",
    "CoinName": "GrowthCoin",
    "FullName": "GrowthCoin (GRW)"
  },
  {
    "Symbol": "APX",
    "CoinName": "Apx",
    "FullName": "Apx (APX)"
  },
  {
    "Symbol": "MILO",
    "CoinName": "MiloCoin",
    "FullName": "MiloCoin (MILO)"
  },
  {
    "Symbol": "OLV",
    "CoinName": "OldV",
    "FullName": "OldV (OLV)"
  },
  {
    "Symbol": "ILC",
    "CoinName": "ILCOIN",
    "FullName": "ILCOIN (ILC)"
  },
  {
    "Symbol": "MRT",
    "CoinName": "MinersReward",
    "FullName": "MinersReward (MRT)"
  },
  {
    "Symbol": "IOU",
    "CoinName": "IOU1",
    "FullName": "IOU1 (IOU)"
  },
  {
    "Symbol": "PZM",
    "CoinName": "Prizm",
    "FullName": "Prizm (PZM)"
  },
  {
    "Symbol": "PHR",
    "CoinName": "Phreak",
    "FullName": "Phreak (PHR)"
  },
  {
    "Symbol": "PUPA",
    "CoinName": "PupaCoin",
    "FullName": "PupaCoin (PUPA)"
  },
  {
    "Symbol": "RICE",
    "CoinName": "RiceCoin",
    "FullName": "RiceCoin (RICE)"
  },
  {
    "Symbol": "XCT",
    "CoinName": "C-Bits",
    "FullName": "C-Bits (XCT)"
  },
  {
    "Symbol": "DEA",
    "CoinName": "Degas Coin",
    "FullName": "Degas Coin (DEA)"
  },
  {
    "Symbol": "REDCO",
    "CoinName": "Redcoin",
    "FullName": "Redcoin (REDCO)"
  },
  {
    "Symbol": "ZSE",
    "CoinName": "ZSEcoin",
    "FullName": "ZSEcoin (ZSE)"
  },
  {
    "Symbol": "CTIC",
    "CoinName": "Coinmatic",
    "FullName": "Coinmatic (CTIC)"
  },
  {
    "Symbol": "TAP",
    "CoinName": "TappingCoin",
    "FullName": "TappingCoin (TAP)"
  },
  {
    "Symbol": "BITOK",
    "CoinName": "BitOKX",
    "FullName": "BitOKX (BITOK)"
  },
  {
    "Symbol": "PBT",
    "CoinName": "Primalbase",
    "FullName": "Primalbase (PBT)"
  },
  {
    "Symbol": "MUU",
    "CoinName": "MilkCoin",
    "FullName": "MilkCoin (MUU)"
  },
  {
    "Symbol": "HTML5",
    "CoinName": "HTML5 Coin",
    "FullName": "HTML5 Coin (HTML5)"
  },
  {
    "Symbol": "MNE",
    "CoinName": "Minereum",
    "FullName": "Minereum (MNE)"
  },
  {
    "Symbol": "DICE",
    "CoinName": "Etheroll",
    "FullName": "Etheroll (DICE)"
  },
  {
    "Symbol": "SBSC",
    "CoinName": "Subscriptio",
    "FullName": "Subscriptio (SBSC)"
  },
  {
    "Symbol": "USC",
    "CoinName": "Ultimate Secure Cash",
    "FullName": "Ultimate Secure Cash (USC)"
  },
  {
    "Symbol": "DUX",
    "CoinName": "DuxCoin",
    "FullName": "DuxCoin (DUX)"
  },
  {
    "Symbol": "XPS",
    "CoinName": "PoisonIvyCoin",
    "FullName": "PoisonIvyCoin (XPS)"
  },
  {
    "Symbol": "EQT",
    "CoinName": "EquiTrader",
    "FullName": "EquiTrader (EQT)"
  },
  {
    "Symbol": "INSN",
    "CoinName": "Insane Coin",
    "FullName": "Insane Coin (INSN)"
  },
  {
    "Symbol": "BAT",
    "CoinName": "Basic Attention Token",
    "FullName": "Basic Attention Token (BAT)"
  },
  {
    "Symbol": "MNTC",
    "CoinName": "Manet Coin",
    "FullName": "Manet Coin (MNTC)"
  },
  {
    "Symbol": "F16",
    "CoinName": "F16Coin",
    "FullName": "F16Coin (F16)"
  },
  {
    "Symbol": "HAMS",
    "CoinName": "HamsterCoin",
    "FullName": "HamsterCoin (HAMS)"
  },
  {
    "Symbol": "NEF",
    "CoinName": "NefariousCoin",
    "FullName": "NefariousCoin (NEF)"
  },
  {
    "Symbol": "BOS",
    "CoinName": "BOScoin",
    "FullName": "BOScoin (BOS)"
  },
  {
    "Symbol": "QWARK",
    "CoinName": "Qwark",
    "FullName": "Qwark (QWARK)"
  },
  {
    "Symbol": "QRL",
    "CoinName": "Quantum Resistant Ledger",
    "FullName": "Quantum Resistant Ledger (QRL)"
  },
  {
    "Symbol": "ADL",
    "CoinName": "Adelphoi",
    "FullName": "Adelphoi (ADL)"
  },
  {
    "Symbol": "PTOY",
    "CoinName": "Patientory",
    "FullName": "Patientory (PTOY)"
  },
  {
    "Symbol": "ZRC",
    "CoinName": "ZrCoin",
    "FullName": "ZrCoin (ZRC)"
  },
  {
    "Symbol": "LKK",
    "CoinName": "Lykke",
    "FullName": "Lykke (LKK)"
  },
  {
    "Symbol": "ESP",
    "CoinName": "Espers",
    "FullName": "Espers (ESP)"
  },
  {
    "Symbol": "DYN",
    "CoinName": "Dynamic",
    "FullName": "Dynamic (DYN)"
  },
  {
    "Symbol": "SEQ",
    "CoinName": "Sequence",
    "FullName": "Sequence (SEQ)"
  },
  {
    "Symbol": "MCAP",
    "CoinName": "MCAP",
    "FullName": "MCAP (MCAP)"
  },
  {
    "Symbol": "MYST",
    "CoinName": "Mysterium",
    "FullName": "Mysterium (MYST)"
  },
  {
    "Symbol": "VERI",
    "CoinName": "Veritaseum",
    "FullName": "Veritaseum (VERI)"
  },
  {
    "Symbol": "CFI",
    "CoinName": "Cofound.it",
    "FullName": "Cofound.it (CFI)"
  },
  {
    "Symbol": "SNT",
    "CoinName": "Status Network Token",
    "FullName": "Status Network Token (SNT)"
  },
  {
    "Symbol": "IXT",
    "CoinName": "iXledger",
    "FullName": "iXledger (IXT)"
  },
  {
    "Symbol": "STA",
    "CoinName": "Starta",
    "FullName": "Starta (STA)"
  },
  {
    "Symbol": "TFL",
    "CoinName": "True Flip Lottery",
    "FullName": "True Flip Lottery (TFL)"
  },
  {
    "Symbol": "MCO",
    "CoinName": "Crypto.com",
    "FullName": "Crypto.com (MCO)"
  },
  {
    "Symbol": "NMR",
    "CoinName": "Numeraire",
    "FullName": "Numeraire (NMR)"
  },
  {
    "Symbol": "ADX",
    "CoinName": "AdEx",
    "FullName": "AdEx (ADX)"
  },
  {
    "Symbol": "QAU",
    "CoinName": "Quantum",
    "FullName": "Quantum (QAU)"
  },
  {
    "Symbol": "ECOB",
    "CoinName": "EcoBit",
    "FullName": "EcoBit (ECOB)"
  },
  {
    "Symbol": "PLBT",
    "CoinName": "Polybius",
    "FullName": "Polybius (PLBT)"
  },
  {
    "Symbol": "AHOO",
    "CoinName": "Ahoolee",
    "FullName": "Ahoolee (AHOO)"
  },
  {
    "Symbol": "ATB",
    "CoinName": "ATB coin",
    "FullName": "ATB coin (ATB)"
  },
  {
    "Symbol": "TIX",
    "CoinName": "Blocktix",
    "FullName": "Blocktix (TIX)"
  },
  {
    "Symbol": "CHAN",
    "CoinName": "ChanCoin",
    "FullName": "ChanCoin (CHAN)"
  },
  {
    "Symbol": "CMP",
    "CoinName": "Compcoin",
    "FullName": "Compcoin (CMP)"
  },
  {
    "Symbol": "RVT",
    "CoinName": "Rivetz",
    "FullName": "Rivetz (RVT)"
  },
  {
    "Symbol": "HRB",
    "CoinName": "Harbour DAO",
    "FullName": "Harbour DAO (HRB)"
  },
  {
    "Symbol": "NIM",
    "CoinName": "Nimiq",
    "FullName": "Nimiq (NIM)"
  },
  {
    "Symbol": "8BT",
    "CoinName": "8 Circuit Studios",
    "FullName": "8 Circuit Studios (8BT)"
  },
  {
    "Symbol": "DAOACT",
    "CoinName": "ACT",
    "FullName": "ACT (DAOACT)"
  },
  {
    "Symbol": "DNT",
    "CoinName": "district0x",
    "FullName": "district0x (DNT)"
  },
  {
    "Symbol": "SUR",
    "CoinName": "Suretly",
    "FullName": "Suretly (SUR)"
  },
  {
    "Symbol": "PING",
    "CoinName": "CryptoPing",
    "FullName": "CryptoPing (PING)"
  },
  {
    "Symbol": "MIV",
    "CoinName": "MakeItViral",
    "FullName": "MakeItViral (MIV)"
  },
  {
    "Symbol": "DAOC",
    "CoinName": "DAOBet",
    "FullName": "DAOBet (DAOC)"
  },
  {
    "Symbol": "SAN",
    "CoinName": "Santiment",
    "FullName": "Santiment (SAN)"
  },
  {
    "Symbol": "WGR",
    "CoinName": "Wagerr",
    "FullName": "Wagerr (WGR)"
  },
  {
    "Symbol": "XEL",
    "CoinName": "Elastic",
    "FullName": "Elastic (XEL)"
  },
  {
    "Symbol": "NVST",
    "CoinName": "NVO",
    "FullName": "NVO (NVST)"
  },
  {
    "Symbol": "FUNC",
    "CoinName": "FunCoin",
    "FullName": "FunCoin (FUNC)"
  },
  {
    "Symbol": "WTT",
    "CoinName": "Giga Watt",
    "FullName": "Giga Watt (WTT)"
  },
  {
    "Symbol": "HVN",
    "CoinName": "Hiveterminal Token",
    "FullName": "Hiveterminal Token (HVN)"
  },
  {
    "Symbol": "MYB",
    "CoinName": "MyBit",
    "FullName": "MyBit (MYB)"
  },
  {
    "Symbol": "SNC",
    "CoinName": "SunContract",
    "FullName": "SunContract (SNC)"
  },
  {
    "Symbol": "STAR",
    "CoinName": "Starbase",
    "FullName": "Starbase (STAR)"
  },
  {
    "Symbol": "COR",
    "CoinName": "Corion",
    "FullName": "Corion (COR)"
  },
  {
    "Symbol": "XRL",
    "CoinName": "Rialto.AI",
    "FullName": "Rialto.AI (XRL)"
  },
  {
    "Symbol": "OROC",
    "CoinName": "Orocrypt",
    "FullName": "Orocrypt (OROC)"
  },
  {
    "Symbol": "OAX",
    "CoinName": "Oax",
    "FullName": "Oax (OAX)"
  },
  {
    "Symbol": "MBI",
    "CoinName": "Monster Byte Inc",
    "FullName": "Monster Byte Inc (MBI)"
  },
  {
    "Symbol": "DDF",
    "CoinName": "Digital Developers Fund",
    "FullName": "Digital Developers Fund (DDF)"
  },
  {
    "Symbol": "DIM",
    "CoinName": "DIMCOIN",
    "FullName": "DIMCOIN (DIM)"
  },
  {
    "Symbol": "GGS",
    "CoinName": "Gilgam",
    "FullName": "Gilgam (GGS)"
  },
  {
    "Symbol": "FYN",
    "CoinName": "FundYourselfNow",
    "FullName": "FundYourselfNow (FYN)"
  },
  {
    "Symbol": "FND",
    "CoinName": "FundRequest",
    "FullName": "FundRequest (FND)"
  },
  {
    "Symbol": "DCY",
    "CoinName": "Dinastycoin",
    "FullName": "Dinastycoin (DCY)"
  },
  {
    "Symbol": "CFT",
    "CoinName": "CryptoForecast",
    "FullName": "CryptoForecast (CFT)"
  },
  {
    "Symbol": "D",
    "CoinName": "Denarius",
    "FullName": "Denarius (D)"
  },
  {
    "Symbol": "DP",
    "CoinName": "DigitalPrice",
    "FullName": "DigitalPrice (DP)"
  },
  {
    "Symbol": "VUC",
    "CoinName": "Virta Unique Coin",
    "FullName": "Virta Unique Coin (VUC)"
  },
  {
    "Symbol": "BTPL",
    "CoinName": "Bitcoin Planet",
    "FullName": "Bitcoin Planet (BTPL)"
  },
  {
    "Symbol": "UNIFY",
    "CoinName": "Unify",
    "FullName": "Unify (UNIFY)"
  },
  {
    "Symbol": "BRIT",
    "CoinName": "BritCoin",
    "FullName": "BritCoin (BRIT)"
  },
  {
    "Symbol": "AMMO",
    "CoinName": "Ammo Rewards",
    "FullName": "Ammo Rewards (AMMO)"
  },
  {
    "Symbol": "SOCC",
    "CoinName": "SocialCoin",
    "FullName": "SocialCoin (SOCC)"
  },
  {
    "Symbol": "LA",
    "CoinName": "LATOKEN",
    "FullName": "LATOKEN (LA)"
  },
  {
    "Symbol": "IML",
    "CoinName": "IMMLA",
    "FullName": "IMMLA (IML)"
  },
  {
    "Symbol": "STU",
    "CoinName": "BitJob",
    "FullName": "BitJob (STU)"
  },
  {
    "Symbol": "PLR",
    "CoinName": "Pillar",
    "FullName": "Pillar (PLR)"
  },
  {
    "Symbol": "GUNS",
    "CoinName": "GeoFunders",
    "FullName": "GeoFunders (GUNS)"
  },
  {
    "Symbol": "IFT",
    "CoinName": "InvestFeed",
    "FullName": "InvestFeed (IFT)"
  },
  {
    "Symbol": "BCAT",
    "CoinName": "BitClave",
    "FullName": "BitClave (BCAT)"
  },
  {
    "Symbol": "SYC",
    "CoinName": "SynchroCoin",
    "FullName": "SynchroCoin (SYC)"
  },
  {
    "Symbol": "IND",
    "CoinName": "Indorse",
    "FullName": "Indorse (IND)"
  },
  {
    "Symbol": "TRIBE",
    "CoinName": "TribeToken",
    "FullName": "TribeToken (TRIBE)"
  },
  {
    "Symbol": "ZRX",
    "CoinName": "0x",
    "FullName": "0x (ZRX)"
  },
  {
    "Symbol": "TNT",
    "CoinName": "Tierion",
    "FullName": "Tierion (TNT)"
  },
  {
    "Symbol": "COS",
    "CoinName": "COS",
    "FullName": "COS (COS)"
  },
  {
    "Symbol": "STORM",
    "CoinName": "Storm",
    "FullName": "Storm (STORM)"
  },
  {
    "Symbol": "NPX",
    "CoinName": "Napoleon X",
    "FullName": "Napoleon X (NPX)"
  },
  {
    "Symbol": "STORJ",
    "CoinName": "Storj",
    "FullName": "Storj (STORJ)"
  },
  {
    "Symbol": "SCORE",
    "CoinName": "Scorecoin",
    "FullName": "Scorecoin (SCORE)"
  },
  {
    "Symbol": "OTX",
    "CoinName": "Octanox",
    "FullName": "Octanox (OTX)"
  },
  {
    "Symbol": "VOISE",
    "CoinName": "Voise",
    "FullName": "Voise (VOISE)"
  },
  {
    "Symbol": "ETBS",
    "CoinName": "EthBits",
    "FullName": "EthBits (ETBS)"
  },
  {
    "Symbol": "CVCOIN",
    "CoinName": "Crypviser",
    "FullName": "Crypviser (CVCOIN)"
  },
  {
    "Symbol": "DRP",
    "CoinName": "DCORP",
    "FullName": "DCORP (DRP)"
  },
  {
    "Symbol": "ARC",
    "CoinName": "ArcticCoin",
    "FullName": "ArcticCoin (ARC)"
  },
  {
    "Symbol": "BOG",
    "CoinName": "Bogcoin",
    "FullName": "Bogcoin (BOG)"
  },
  {
    "Symbol": "NDC",
    "CoinName": "NeverDie",
    "FullName": "NeverDie (NDC)"
  },
  {
    "Symbol": "POE",
    "CoinName": "Po.et",
    "FullName": "Po.et (POE)"
  },
  {
    "Symbol": "ADT",
    "CoinName": "AdToken",
    "FullName": "AdToken (ADT)"
  },
  {
    "Symbol": "UET",
    "CoinName": "Useless Ethereum Token",
    "FullName": "Useless Ethereum Token (UET)"
  },
  {
    "Symbol": "AGRS",
    "CoinName": "Agoras Token",
    "FullName": "Agoras Token (AGRS)"
  },
  {
    "Symbol": "BEACH",
    "CoinName": "BeachCoin",
    "FullName": "BeachCoin (BEACH)"
  },
  {
    "Symbol": "DAS",
    "CoinName": "DAS",
    "FullName": "DAS (DAS)"
  },
  {
    "Symbol": "ADS",
    "CoinName": "Adshares",
    "FullName": "Adshares (ADS)"
  },
  {
    "Symbol": "XCJ",
    "CoinName": "CoinJob",
    "FullName": "CoinJob (XCJ)"
  },
  {
    "Symbol": "RKC",
    "CoinName": "Royal Kingdom Coin",
    "FullName": "Royal Kingdom Coin (RKC)"
  },
  {
    "Symbol": "NLC2",
    "CoinName": "NoLimitCoin",
    "FullName": "NoLimitCoin (NLC2)"
  },
  {
    "Symbol": "LINDA",
    "CoinName": "Metrix",
    "FullName": "Metrix (LINDA)"
  },
  {
    "Symbol": "KING93",
    "CoinName": "King93",
    "FullName": "King93 (KING93)"
  },
  {
    "Symbol": "ANCP",
    "CoinName": "Anacrypt",
    "FullName": "Anacrypt (ANCP)"
  },
  {
    "Symbol": "RCC",
    "CoinName": "Reality Clash",
    "FullName": "Reality Clash (RCC)"
  },
  {
    "Symbol": "ROOTS",
    "CoinName": "RootProject",
    "FullName": "RootProject (ROOTS)"
  },
  {
    "Symbol": "SNK",
    "CoinName": "Sosnovkino",
    "FullName": "Sosnovkino (SNK)"
  },
  {
    "Symbol": "CABS",
    "CoinName": "CryptoABS",
    "FullName": "CryptoABS (CABS)"
  },
  {
    "Symbol": "OPT",
    "CoinName": "Opus",
    "FullName": "Opus (OPT)"
  },
  {
    "Symbol": "ZNT",
    "CoinName": "OpenZen",
    "FullName": "OpenZen (ZNT)"
  },
  {
    "Symbol": "BITSD",
    "CoinName": "Bits Digit",
    "FullName": "Bits Digit (BITSD)"
  },
  {
    "Symbol": "XLC",
    "CoinName": "LeviarCoin",
    "FullName": "LeviarCoin (XLC)"
  },
  {
    "Symbol": "SKIN",
    "CoinName": "Skincoin",
    "FullName": "Skincoin (SKIN)"
  },
  {
    "Symbol": "MSP",
    "CoinName": "Mothership",
    "FullName": "Mothership (MSP)"
  },
  {
    "Symbol": "HIRE",
    "CoinName": "HireMatch",
    "FullName": "HireMatch (HIRE)"
  },
  {
    "Symbol": "REAL",
    "CoinName": "REAL",
    "FullName": "REAL (REAL)"
  },
  {
    "Symbol": "DFBT",
    "CoinName": "DentalFix",
    "FullName": "DentalFix (DFBT)"
  },
  {
    "Symbol": "EQ",
    "CoinName": "EQUI",
    "FullName": "EQUI (EQ)"
  },
  {
    "Symbol": "WLK",
    "CoinName": "Wolk",
    "FullName": "Wolk (WLK)"
  },
  {
    "Symbol": "VIB",
    "CoinName": "Viberate",
    "FullName": "Viberate (VIB)"
  },
  {
    "Symbol": "ONION",
    "CoinName": "DeepOnion",
    "FullName": "DeepOnion (ONION)"
  },
  {
    "Symbol": "ICE",
    "CoinName": "iDice",
    "FullName": "iDice (ICE)"
  },
  {
    "Symbol": "XID",
    "CoinName": "Sphre AIR",
    "FullName": "Sphre AIR (XID)"
  },
  {
    "Symbol": "GCN",
    "CoinName": "gCn Coin",
    "FullName": "gCn Coin (GCN)"
  },
  {
    "Symbol": "MANA",
    "CoinName": "Decentraland",
    "FullName": "Decentraland (MANA)"
  },
  {
    "Symbol": "ICOO",
    "CoinName": "ICO OpenLedger",
    "FullName": "ICO OpenLedger (ICOO)"
  },
  {
    "Symbol": "TME",
    "CoinName": "Timereum",
    "FullName": "Timereum (TME)"
  },
  {
    "Symbol": "SIGT",
    "CoinName": "Signatum",
    "FullName": "Signatum (SIGT)"
  },
  {
    "Symbol": "ONX",
    "CoinName": "Onix",
    "FullName": "Onix (ONX)"
  },
  {
    "Symbol": "COE",
    "CoinName": "CoEval",
    "FullName": "CoEval (COE)"
  },
  {
    "Symbol": "ARENA",
    "CoinName": "Arena",
    "FullName": "Arena (ARENA)"
  },
  {
    "Symbol": "WINK",
    "CoinName": "Wink",
    "FullName": "Wink (WINK)"
  },
  {
    "Symbol": "CRM",
    "CoinName": "Cream",
    "FullName": "Cream (CRM)"
  },
  {
    "Symbol": "DGPT",
    "CoinName": "DigiPulse",
    "FullName": "DigiPulse (DGPT)"
  },
  {
    "Symbol": "MOBI",
    "CoinName": "Mobius",
    "FullName": "Mobius (MOBI)"
  },
  {
    "Symbol": "CSNO",
    "CoinName": "BitDice",
    "FullName": "BitDice (CSNO)"
  },
  {
    "Symbol": "KICK",
    "CoinName": "KickToken",
    "FullName": "KickToken (KICK)"
  },
  {
    "Symbol": "SDAO",
    "CoinName": "Solar DAO",
    "FullName": "Solar DAO (SDAO)"
  },
  {
    "Symbol": "COREG",
    "CoinName": "Core Group Asset",
    "FullName": "Core Group Asset (COREG)"
  },
  {
    "Symbol": "KEN",
    "CoinName": "Kencoin",
    "FullName": "Kencoin (KEN)"
  },
  {
    "Symbol": "QVT",
    "CoinName": "Qvolta",
    "FullName": "Qvolta (QVT)"
  },
  {
    "Symbol": "TIE",
    "CoinName": "Ties Network",
    "FullName": "Ties Network (TIE)"
  },
  {
    "Symbol": "AUT",
    "CoinName": "Autoria",
    "FullName": "Autoria (AUT)"
  },
  {
    "Symbol": "GRWI",
    "CoinName": "Growers International",
    "FullName": "Growers International (GRWI)"
  },
  {
    "Symbol": "MNY",
    "CoinName": "Monkey",
    "FullName": "Monkey (MNY)"
  },
  {
    "Symbol": "MTH",
    "CoinName": "Monetha",
    "FullName": "Monetha (MTH)"
  },
  {
    "Symbol": "CCC",
    "CoinName": "CCCoin",
    "FullName": "CCCoin (CCC)"
  },
  {
    "Symbol": "UMC",
    "CoinName": "Umbrella Coin",
    "FullName": "Umbrella Coin (UMC)"
  },
  {
    "Symbol": "BMXT",
    "CoinName": "Bitmxittz",
    "FullName": "Bitmxittz (BMXT)"
  },
  {
    "Symbol": "GAS",
    "CoinName": "Gas",
    "FullName": "Gas (GAS)"
  },
  {
    "Symbol": "OCL",
    "CoinName": "Oceanlab",
    "FullName": "Oceanlab (OCL)"
  },
  {
    "Symbol": "BNC",
    "CoinName": "Benjacoin",
    "FullName": "Benjacoin (BNC)"
  },
  {
    "Symbol": "TOM",
    "CoinName": "Tomahawkcoin",
    "FullName": "Tomahawkcoin (TOM)"
  },
  {
    "Symbol": "SMNX",
    "CoinName": "SMNX",
    "FullName": "SMNX (SMNX)"
  },
  {
    "Symbol": "DCN",
    "CoinName": "Dentacoin",
    "FullName": "Dentacoin (DCN)"
  },
  {
    "Symbol": "DLT",
    "CoinName": "Agrello Delta",
    "FullName": "Agrello Delta (DLT)"
  },
  {
    "Symbol": "MRV",
    "CoinName": "Macroverse",
    "FullName": "Macroverse (MRV)"
  },
  {
    "Symbol": "MBRS",
    "CoinName": "Embers",
    "FullName": "Embers (MBRS)"
  },
  {
    "Symbol": "SUB",
    "CoinName": "Substratum Network",
    "FullName": "Substratum Network (SUB)"
  },
  {
    "Symbol": "PGL",
    "CoinName": "Prospectors",
    "FullName": "Prospectors (PGL)"
  },
  {
    "Symbol": "XMCC",
    "CoinName": "Monoeci",
    "FullName": "Monoeci (XMCC)"
  },
  {
    "Symbol": "AUN",
    "CoinName": "Authoreon",
    "FullName": "Authoreon (AUN)"
  },
  {
    "Symbol": "CMPCO",
    "CoinName": "CampusCoin",
    "FullName": "CampusCoin (CMPCO)"
  },
  {
    "Symbol": "DTCT",
    "CoinName": "DetectorToken",
    "FullName": "DetectorToken (DTCT)"
  },
  {
    "Symbol": "CTR",
    "CoinName": "Centra",
    "FullName": "Centra (CTR)"
  },
  {
    "Symbol": "WNET",
    "CoinName": "Wavesnode.net",
    "FullName": "Wavesnode.net (WNET)"
  },
  {
    "Symbol": "PRG",
    "CoinName": "Paragon",
    "FullName": "Paragon (PRG)"
  },
  {
    "Symbol": "THNX",
    "CoinName": "ThankYou",
    "FullName": "ThankYou (THNX)"
  },
  {
    "Symbol": "WORM",
    "CoinName": "HealthyWorm",
    "FullName": "HealthyWorm (WORM)"
  },
  {
    "Symbol": "FUCK",
    "CoinName": "Fuck Token",
    "FullName": "Fuck Token (FUCK)"
  },
  {
    "Symbol": "VRD",
    "CoinName": "Veredictum",
    "FullName": "Veredictum (VRD)"
  },
  {
    "Symbol": "SIFT",
    "CoinName": "Smart Investment Fund Token",
    "FullName": "Smart Investment Fund Token (SIFT)"
  },
  {
    "Symbol": "IGNIS",
    "CoinName": "Ignis",
    "FullName": "Ignis (IGNIS)"
  },
  {
    "Symbol": "IWT",
    "CoinName": "IwToken",
    "FullName": "IwToken (IWT)"
  },
  {
    "Symbol": "JDC",
    "CoinName": "JustDatingSite",
    "FullName": "JustDatingSite (JDC)"
  },
  {
    "Symbol": "ITF",
    "CoinName": "Intelligent Trading",
    "FullName": "Intelligent Trading (ITF)"
  },
  {
    "Symbol": "AIX",
    "CoinName": "Aigang",
    "FullName": "Aigang (AIX)"
  },
  {
    "Symbol": "XEC",
    "CoinName": "Eternal Coin",
    "FullName": "Eternal Coin (XEC)"
  },
  {
    "Symbol": "ENTRP",
    "CoinName": "Entropy Token",
    "FullName": "Entropy Token (ENTRP)"
  },
  {
    "Symbol": "ICOS",
    "CoinName": "ICOBox",
    "FullName": "ICOBox (ICOS)"
  },
  {
    "Symbol": "PIX",
    "CoinName": "Lampix",
    "FullName": "Lampix (PIX)"
  },
  {
    "Symbol": "MEDI",
    "CoinName": "MediBond",
    "FullName": "MediBond (MEDI)"
  },
  {
    "Symbol": "HGT",
    "CoinName": "Hello Gold",
    "FullName": "Hello Gold (HGT)"
  },
  {
    "Symbol": "LTA",
    "CoinName": "Litra",
    "FullName": "Litra (LTA)"
  },
  {
    "Symbol": "NIMFA",
    "CoinName": "Nimfamoney",
    "FullName": "Nimfamoney (NIMFA)"
  },
  {
    "Symbol": "SCOR",
    "CoinName": "Scorista",
    "FullName": "Scorista (SCOR)"
  },
  {
    "Symbol": "MLS",
    "CoinName": "CPROP",
    "FullName": "CPROP (MLS)"
  },
  {
    "Symbol": "KEX",
    "CoinName": "KexCoin",
    "FullName": "KexCoin (KEX)"
  },
  {
    "Symbol": "COB",
    "CoinName": "Cobinhood",
    "FullName": "Cobinhood (COB)"
  },
  {
    "Symbol": "BRO",
    "CoinName": "Bitradio",
    "FullName": "Bitradio (BRO)"
  },
  {
    "Symbol": "MINEX",
    "CoinName": "Minex",
    "FullName": "Minex (MINEX)"
  },
  {
    "Symbol": "ATL",
    "CoinName": "ATLANT",
    "FullName": "ATLANT (ATL)"
  },
  {
    "Symbol": "DFT",
    "CoinName": "Draftcoin",
    "FullName": "Draftcoin (DFT)"
  },
  {
    "Symbol": "UTK",
    "CoinName": "Utrust",
    "FullName": "Utrust (UTK)"
  },
  {
    "Symbol": "LAT",
    "CoinName": "Latium",
    "FullName": "Latium (LAT)"
  },
  {
    "Symbol": "SOJ",
    "CoinName": "Sojourn Coin",
    "FullName": "Sojourn Coin (SOJ)"
  },
  {
    "Symbol": "HDG",
    "CoinName": "Hedge Token",
    "FullName": "Hedge Token (HDG)"
  },
  {
    "Symbol": "STCN",
    "CoinName": "Stakecoin",
    "FullName": "Stakecoin (STCN)"
  },
  {
    "Symbol": "SQP",
    "CoinName": "SqPay",
    "FullName": "SqPay (SQP)"
  },
  {
    "Symbol": "RIYA",
    "CoinName": "Etheriya",
    "FullName": "Etheriya (RIYA)"
  },
  {
    "Symbol": "LNK",
    "CoinName": "Ethereum.Link",
    "FullName": "Ethereum.Link (LNK)"
  },
  {
    "Symbol": "AMB",
    "CoinName": "Amber",
    "FullName": "Amber (AMB)"
  },
  {
    "Symbol": "MNTP",
    "CoinName": "GoldMint",
    "FullName": "GoldMint (MNTP)"
  },
  {
    "Symbol": "ALTOCAR",
    "CoinName": "AltoCar",
    "FullName": "AltoCar (ALTOCAR)"
  },
  {
    "Symbol": "BKX",
    "CoinName": "BANKEX",
    "FullName": "BANKEX (BKX)"
  },
  {
    "Symbol": "BOU",
    "CoinName": "Boulle",
    "FullName": "Boulle (BOU)"
  },
  {
    "Symbol": "OXY",
    "CoinName": "Oxycoin",
    "FullName": "Oxycoin (OXY)"
  },
  {
    "Symbol": "AMT",
    "CoinName": "Acumen",
    "FullName": "Acumen (AMT)"
  },
  {
    "Symbol": "GIM",
    "CoinName": "Gimli",
    "FullName": "Gimli (GIM)"
  },
  {
    "Symbol": "NYC",
    "CoinName": "NewYorkCoin",
    "FullName": "NewYorkCoin (NYC)"
  },
  {
    "Symbol": "LBTC",
    "CoinName": "LiteBitcoin",
    "FullName": "LiteBitcoin (LBTC)"
  },
  {
    "Symbol": "FRAZ",
    "CoinName": "FrazCoin",
    "FullName": "FrazCoin (FRAZ)"
  },
  {
    "Symbol": "EMT",
    "CoinName": "EasyMine",
    "FullName": "EasyMine (EMT)"
  },
  {
    "Symbol": "HBT",
    "CoinName": "Hubii Network",
    "FullName": "Hubii Network (HBT)"
  },
  {
    "Symbol": "KRONE",
    "CoinName": "Kronecoin",
    "FullName": "Kronecoin (KRONE)"
  },
  {
    "Symbol": "SRT",
    "CoinName": "Scrypto",
    "FullName": "Scrypto (SRT)"
  },
  {
    "Symbol": "ACC",
    "CoinName": "AdCoin",
    "FullName": "AdCoin (ACC)"
  },
  {
    "Symbol": "Z2",
    "CoinName": "Z2 Coin",
    "FullName": "Z2 Coin (Z2)"
  },
  {
    "Symbol": "LINX",
    "CoinName": "Linx",
    "FullName": "Linx (LINX)"
  },
  {
    "Symbol": "XCXT",
    "CoinName": "CoinonatX",
    "FullName": "CoinonatX (XCXT)"
  },
  {
    "Symbol": "BLAS",
    "CoinName": "BlakeStar",
    "FullName": "BlakeStar (BLAS)"
  },
  {
    "Symbol": "SCL",
    "CoinName": "Sociall",
    "FullName": "Sociall (SCL)"
  },
  {
    "Symbol": "TRVL",
    "CoinName": "Travel Coin",
    "FullName": "Travel Coin (TRVL)"
  },
  {
    "Symbol": "CRTM",
    "CoinName": "Cryptum",
    "FullName": "Cryptum (CRTM)"
  },
  {
    "Symbol": "EON",
    "CoinName": "Exscudo",
    "FullName": "Exscudo (EON)"
  },
  {
    "Symbol": "PRIX",
    "CoinName": "Privatix",
    "FullName": "Privatix (PRIX)"
  },
  {
    "Symbol": "CTX",
    "CoinName": "CarTaxi",
    "FullName": "CarTaxi (CTX)"
  },
  {
    "Symbol": "ENJ",
    "CoinName": "Enjin Coin",
    "FullName": "Enjin Coin (ENJ)"
  },
  {
    "Symbol": "CNX",
    "CoinName": "Cryptonex",
    "FullName": "Cryptonex (CNX)"
  },
  {
    "Symbol": "FUEL",
    "CoinName": "Etherparty",
    "FullName": "Etherparty (FUEL)"
  },
  {
    "Symbol": "ACE",
    "CoinName": "TokenStars",
    "FullName": "TokenStars (ACE)"
  },
  {
    "Symbol": "WRC",
    "CoinName": "Worldcore",
    "FullName": "Worldcore (WRC)"
  },
  {
    "Symbol": "BRX",
    "CoinName": "Breakout Stake",
    "FullName": "Breakout Stake (BRX)"
  },
  {
    "Symbol": "UCASH",
    "CoinName": "U.CASH",
    "FullName": "U.CASH (UCASH)"
  },
  {
    "Symbol": "WRT",
    "CoinName": "WRTcoin",
    "FullName": "WRTcoin (WRT)"
  },
  {
    "Symbol": "ORME",
    "CoinName": "Ormeus Coin",
    "FullName": "Ormeus Coin (ORME)"
  },
  {
    "Symbol": "DEEPG",
    "CoinName": "Deep Gold",
    "FullName": "Deep Gold (DEEPG)"
  },
  {
    "Symbol": "WSH",
    "CoinName": "Wish Finance",
    "FullName": "Wish Finance (WSH)"
  },
  {
    "Symbol": "ARNA",
    "CoinName": "ARNA Panacea",
    "FullName": "ARNA Panacea (ARNA)"
  },
  {
    "Symbol": "ABC",
    "CoinName": "AB-Chain",
    "FullName": "AB-Chain (ABC)"
  },
  {
    "Symbol": "PRP",
    "CoinName": "Papyrus",
    "FullName": "Papyrus (PRP)"
  },
  {
    "Symbol": "BMC",
    "CoinName": "Blackmoon Crypto",
    "FullName": "Blackmoon Crypto (BMC)"
  },
  {
    "Symbol": "SKRT",
    "CoinName": "Skrilla Token",
    "FullName": "Skrilla Token (SKRT)"
  },
  {
    "Symbol": "3DES",
    "CoinName": "3DES",
    "FullName": "3DES (3DES)"
  },
  {
    "Symbol": "PYN",
    "CoinName": "Paycent",
    "FullName": "Paycent (PYN)"
  },
  {
    "Symbol": "KAPU",
    "CoinName": "Kapu",
    "FullName": "Kapu (KAPU)"
  },
  {
    "Symbol": "SENSE",
    "CoinName": "Sense Token",
    "FullName": "Sense Token (SENSE)"
  },
  {
    "Symbol": "CAPP",
    "CoinName": "Cappasity",
    "FullName": "Cappasity (CAPP)"
  },
  {
    "Symbol": "VEE",
    "CoinName": "BLOCKv",
    "FullName": "BLOCKv (VEE)"
  },
  {
    "Symbol": "FC",
    "CoinName": "Facecoin",
    "FullName": "Facecoin (FC)"
  },
  {
    "Symbol": "RCN",
    "CoinName": "Ripio",
    "FullName": "Ripio (RCN)"
  },
  {
    "Symbol": "NRN",
    "CoinName": "Doc.ai Neuron",
    "FullName": "Doc.ai Neuron (NRN)"
  },
  {
    "Symbol": "EVC",
    "CoinName": "Eventchain",
    "FullName": "Eventchain (EVC)"
  },
  {
    "Symbol": "WIZ",
    "CoinName": "Crowdwiz",
    "FullName": "Crowdwiz (WIZ)"
  },
  {
    "Symbol": "ATKN",
    "CoinName": "A-Token",
    "FullName": "A-Token (ATKN)"
  },
  {
    "Symbol": "KNC",
    "CoinName": "Kyber Network",
    "FullName": "Kyber Network (KNC)"
  },
  {
    "Symbol": "RUSTBITS",
    "CoinName": "Rustbits",
    "FullName": "Rustbits (RUSTBITS)"
  },
  {
    "Symbol": "REX",
    "CoinName": "Imbrex",
    "FullName": "Imbrex (REX)"
  },
  {
    "Symbol": "ETHD",
    "CoinName": "Ethereum Dark",
    "FullName": "Ethereum Dark (ETHD)"
  },
  {
    "Symbol": "SUMO",
    "CoinName": "Sumokoin",
    "FullName": "Sumokoin (SUMO)"
  },
  {
    "Symbol": "H2O",
    "CoinName": "Hydrominer",
    "FullName": "Hydrominer (H2O)"
  },
  {
    "Symbol": "TKT",
    "CoinName": "Crypto Tickets",
    "FullName": "Crypto Tickets (TKT)"
  },
  {
    "Symbol": "RHEA",
    "CoinName": "Rhea",
    "FullName": "Rhea (RHEA)"
  },
  {
    "Symbol": "ART",
    "CoinName": "Maecenas",
    "FullName": "Maecenas (ART)"
  },
  {
    "Symbol": "DRT",
    "CoinName": "DomRaider",
    "FullName": "DomRaider (DRT)"
  },
  {
    "Symbol": "SNOV",
    "CoinName": "Snovio",
    "FullName": "Snovio (SNOV)"
  },
  {
    "Symbol": "MTN",
    "CoinName": "TrackNetToken",
    "FullName": "TrackNetToken (MTN)"
  },
  {
    "Symbol": "STOCKBET",
    "CoinName": "StockBet",
    "FullName": "StockBet (STOCKBET)"
  },
  {
    "Symbol": "PLM",
    "CoinName": "Algo.Land",
    "FullName": "Algo.Land (PLM)"
  },
  {
    "Symbol": "SALT",
    "CoinName": "Salt Lending",
    "FullName": "Salt Lending (SALT)"
  },
  {
    "Symbol": "SND",
    "CoinName": "Sandcoin",
    "FullName": "Sandcoin (SND)"
  },
  {
    "Symbol": "XP",
    "CoinName": "Experience Points",
    "FullName": "Experience Points (XP)"
  },
  {
    "Symbol": "GLA",
    "CoinName": "Gladius",
    "FullName": "Gladius (GLA)"
  },
  {
    "Symbol": "ZNA",
    "CoinName": "Zenome",
    "FullName": "Zenome (ZNA)"
  },
  {
    "Symbol": "EZM",
    "CoinName": "EZMarket",
    "FullName": "EZMarket (EZM)"
  },
  {
    "Symbol": "ODN",
    "CoinName": "Obsidian",
    "FullName": "Obsidian (ODN)"
  },
  {
    "Symbol": "POLL",
    "CoinName": "ClearPoll",
    "FullName": "ClearPoll (POLL)"
  },
  {
    "Symbol": "MTK",
    "CoinName": "Moya Token",
    "FullName": "Moya Token (MTK)"
  },
  {
    "Symbol": "CAS",
    "CoinName": "Cashaa",
    "FullName": "Cashaa (CAS)"
  },
  {
    "Symbol": "MAT",
    "CoinName": "MiniApps",
    "FullName": "MiniApps (MAT)"
  },
  {
    "Symbol": "GJC",
    "CoinName": "Global Jobcoin",
    "FullName": "Global Jobcoin (GJC)"
  },
  {
    "Symbol": "WIC",
    "CoinName": "Wi Coin",
    "FullName": "Wi Coin (WIC)"
  },
  {
    "Symbol": "WEB",
    "CoinName": "Webcoin",
    "FullName": "Webcoin (WEB)"
  },
  {
    "Symbol": "WAND",
    "CoinName": "WandX",
    "FullName": "WandX (WAND)"
  },
  {
    "Symbol": "ELIX",
    "CoinName": "Elixir",
    "FullName": "Elixir (ELIX)"
  },
  {
    "Symbol": "EBTC",
    "CoinName": "eBitcoin",
    "FullName": "eBitcoin (EBTC)"
  },
  {
    "Symbol": "HAC",
    "CoinName": "Hackspace Capital",
    "FullName": "Hackspace Capital (HAC)"
  },
  {
    "Symbol": "YOYOW",
    "CoinName": "Yoyow",
    "FullName": "Yoyow (YOYOW)"
  },
  {
    "Symbol": "REC",
    "CoinName": "Regalcoin",
    "FullName": "Regalcoin (REC)"
  },
  {
    "Symbol": "BIS",
    "CoinName": "Bismuth",
    "FullName": "Bismuth (BIS)"
  },
  {
    "Symbol": "OPP",
    "CoinName": "Opporty",
    "FullName": "Opporty (OPP)"
  },
  {
    "Symbol": "ROCK2",
    "CoinName": "Ice Rock Mining",
    "FullName": "Ice Rock Mining (ROCK2)"
  },
  {
    "Symbol": "EARTH",
    "CoinName": "Earth Token",
    "FullName": "Earth Token (EARTH)"
  },
  {
    "Symbol": "VSX",
    "CoinName": "Vsync",
    "FullName": "Vsync (VSX)"
  },
  {
    "Symbol": "GRFT",
    "CoinName": "Graft Blockchain",
    "FullName": "Graft Blockchain (GRFT)"
  },
  {
    "Symbol": "BTCZ",
    "CoinName": "BitcoinZ",
    "FullName": "BitcoinZ (BTCZ)"
  },
  {
    "Symbol": "CZC",
    "CoinName": "Crazy Coin",
    "FullName": "Crazy Coin (CZC)"
  },
  {
    "Symbol": "PPP",
    "CoinName": "PayPie",
    "FullName": "PayPie (PPP)"
  },
  {
    "Symbol": "GUESS",
    "CoinName": "Peerguess",
    "FullName": "Peerguess (GUESS)"
  },
  {
    "Symbol": "CAN",
    "CoinName": "CanYaCoin",
    "FullName": "CanYaCoin (CAN)"
  },
  {
    "Symbol": "CIX",
    "CoinName": "Cryptonetix",
    "FullName": "Cryptonetix (CIX)"
  },
  {
    "Symbol": "ERT",
    "CoinName": "Esports.com",
    "FullName": "Esports.com (ERT)"
  },
  {
    "Symbol": "FLIK",
    "CoinName": "FLiK",
    "FullName": "FLiK (FLIK)"
  },
  {
    "Symbol": "TRIP",
    "CoinName": "Trippki",
    "FullName": "Trippki (TRIP)"
  },
  {
    "Symbol": "MBT",
    "CoinName": "Multibot",
    "FullName": "Multibot (MBT)"
  },
  {
    "Symbol": "JVY",
    "CoinName": "Javvy",
    "FullName": "Javvy (JVY)"
  },
  {
    "Symbol": "ALIS",
    "CoinName": "ALISmedia",
    "FullName": "ALISmedia (ALIS)"
  },
  {
    "Symbol": "LEV",
    "CoinName": "Leverj",
    "FullName": "Leverj (LEV)"
  },
  {
    "Symbol": "ARBI",
    "CoinName": "Arbi",
    "FullName": "Arbi (ARBI)"
  },
  {
    "Symbol": "REQ",
    "CoinName": "Request Network",
    "FullName": "Request Network (REQ)"
  },
  {
    "Symbol": "ARNX",
    "CoinName": "Aeron",
    "FullName": "Aeron (ARNX)"
  },
  {
    "Symbol": "DAT",
    "CoinName": "Datum",
    "FullName": "Datum (DAT)"
  },
  {
    "Symbol": "VIBE",
    "CoinName": "VIBEHub",
    "FullName": "VIBEHub (VIBE)"
  },
  {
    "Symbol": "ROK",
    "CoinName": "Rockchain",
    "FullName": "Rockchain (ROK)"
  },
  {
    "Symbol": "XRED",
    "CoinName": "X Real Estate Development",
    "FullName": "X Real Estate Development (XRED)"
  },
  {
    "Symbol": "DAY",
    "CoinName": "Chronologic",
    "FullName": "Chronologic (DAY)"
  },
  {
    "Symbol": "AST",
    "CoinName": "AirSwap",
    "FullName": "AirSwap (AST)"
  },
  {
    "Symbol": "FLP",
    "CoinName": "Gameflip",
    "FullName": "Gameflip (FLP)"
  },
  {
    "Symbol": "HXT",
    "CoinName": "HextraCoin",
    "FullName": "HextraCoin (HXT)"
  },
  {
    "Symbol": "CND",
    "CoinName": "Cindicator",
    "FullName": "Cindicator (CND)"
  },
  {
    "Symbol": "VRP",
    "CoinName": "Prosense.tv",
    "FullName": "Prosense.tv (VRP)"
  },
  {
    "Symbol": "NTM",
    "CoinName": "NetM",
    "FullName": "NetM (NTM)"
  },
  {
    "Symbol": "TZC",
    "CoinName": "TrezarCoin",
    "FullName": "TrezarCoin (TZC)"
  },
  {
    "Symbol": "MCI",
    "CoinName": "Musiconomi",
    "FullName": "Musiconomi (MCI)"
  },
  {
    "Symbol": "AIR",
    "CoinName": "AirToken",
    "FullName": "AirToken (AIR)"
  },
  {
    "Symbol": "FUJIN",
    "CoinName": "Fujinto",
    "FullName": "Fujinto (FUJIN)"
  },
  {
    "Symbol": "ATCC",
    "CoinName": "ATC Coin",
    "FullName": "ATC Coin (ATCC)"
  },
  {
    "Symbol": "KOLION",
    "CoinName": "Kolion",
    "FullName": "Kolion (KOLION)"
  },
  {
    "Symbol": "WILD",
    "CoinName": "Wild Crypto",
    "FullName": "Wild Crypto (WILD)"
  },
  {
    "Symbol": "ELTC2",
    "CoinName": "eLTC",
    "FullName": "eLTC (ELTC2)"
  },
  {
    "Symbol": "ILCT",
    "CoinName": "ILCoin Token",
    "FullName": "ILCoin Token (ILCT)"
  },
  {
    "Symbol": "POWR",
    "CoinName": "Power Ledger",
    "FullName": "Power Ledger (POWR)"
  },
  {
    "Symbol": "C20",
    "CoinName": "Crypto20",
    "FullName": "Crypto20 (C20)"
  },
  {
    "Symbol": "RYZ",
    "CoinName": "Anryze",
    "FullName": "Anryze (RYZ)"
  },
  {
    "Symbol": "ELM",
    "CoinName": "Elements",
    "FullName": "Elements (ELM)"
  },
  {
    "Symbol": "TER",
    "CoinName": "TerraNovaCoin",
    "FullName": "TerraNovaCoin (TER)"
  },
  {
    "Symbol": "XCS",
    "CoinName": "CybCSec Coin",
    "FullName": "CybCSec Coin (XCS)"
  },
  {
    "Symbol": "BQ",
    "CoinName": "Bitqy",
    "FullName": "Bitqy (BQ)"
  },
  {
    "Symbol": "CLOUT",
    "CoinName": "Clout",
    "FullName": "Clout (CLOUT)"
  },
  {
    "Symbol": "EVR",
    "CoinName": "Everus",
    "FullName": "Everus (EVR)"
  },
  {
    "Symbol": "TOA",
    "CoinName": "TOA Coin",
    "FullName": "TOA Coin (TOA)"
  },
  {
    "Symbol": "MNZ",
    "CoinName": "Monaize",
    "FullName": "Monaize (MNZ)"
  },
  {
    "Symbol": "VIVO",
    "CoinName": "VIVO Coin",
    "FullName": "VIVO Coin (VIVO)"
  },
  {
    "Symbol": "PHX",
    "CoinName": "Red Pulse Phoenix",
    "FullName": "Red Pulse Phoenix (PHX)"
  },
  {
    "Symbol": "ZSC",
    "CoinName": "Zeusshield",
    "FullName": "Zeusshield (ZSC)"
  },
  {
    "Symbol": "AURS",
    "CoinName": "Aureus",
    "FullName": "Aureus (AURS)"
  },
  {
    "Symbol": "CAG",
    "CoinName": "Change",
    "FullName": "Change (CAG)"
  },
  {
    "Symbol": "PKT",
    "CoinName": "Playkey",
    "FullName": "Playkey (PKT)"
  },
  {
    "Symbol": "ECHT",
    "CoinName": "e-Chat",
    "FullName": "e-Chat (ECHT)"
  },
  {
    "Symbol": "INXT",
    "CoinName": "Internxt",
    "FullName": "Internxt (INXT)"
  },
  {
    "Symbol": "ATS",
    "CoinName": "Authorship",
    "FullName": "Authorship (ATS)"
  },
  {
    "Symbol": "RGC",
    "CoinName": "RG Coin",
    "FullName": "RG Coin (RGC)"
  },
  {
    "Symbol": "EBET",
    "CoinName": "EthBet",
    "FullName": "EthBet (EBET)"
  },
  {
    "Symbol": "MOD",
    "CoinName": "Modum",
    "FullName": "Modum (MOD)"
  },
  {
    "Symbol": "BITCM",
    "CoinName": "Bitcomo",
    "FullName": "Bitcomo (BITCM)"
  },
  {
    "Symbol": "CPAY",
    "CoinName": "CryptoPay",
    "FullName": "CryptoPay (CPAY)"
  },
  {
    "Symbol": "RUP",
    "CoinName": "Rupee",
    "FullName": "Rupee (RUP)"
  },
  {
    "Symbol": "BON",
    "CoinName": "Bonpay",
    "FullName": "Bonpay (BON)"
  },
  {
    "Symbol": "WHL",
    "CoinName": "WhaleCoin",
    "FullName": "WhaleCoin (WHL)"
  },
  {
    "Symbol": "UP",
    "CoinName": "UpToken",
    "FullName": "UpToken (UP)"
  },
  {
    "Symbol": "ETG",
    "CoinName": "Ethereum Gold",
    "FullName": "Ethereum Gold (ETG)"
  },
  {
    "Symbol": "WOMEN",
    "CoinName": "WomenCoin",
    "FullName": "WomenCoin (WOMEN)"
  },
  {
    "Symbol": "MAY",
    "CoinName": "Theresa May Coin",
    "FullName": "Theresa May Coin (MAY)"
  },
  {
    "Symbol": "RNDR",
    "CoinName": "Render Token",
    "FullName": "Render Token (RNDR)"
  },
  {
    "Symbol": "EDDIE",
    "CoinName": "Eddie coin",
    "FullName": "Eddie coin (EDDIE)"
  },
  {
    "Symbol": "SOMA",
    "CoinName": "Soma",
    "FullName": "Soma (SOMA)"
  },
  {
    "Symbol": "NAMO",
    "CoinName": "NamoCoin",
    "FullName": "NamoCoin (NAMO)"
  },
  {
    "Symbol": "GAT",
    "CoinName": "GATCOIN",
    "FullName": "GATCOIN (GAT)"
  },
  {
    "Symbol": "BLUE",
    "CoinName": "Ethereum Blue",
    "FullName": "Ethereum Blue (BLUE)"
  },
  {
    "Symbol": "FLLW",
    "CoinName": "Follow Coin",
    "FullName": "Follow Coin (FLLW)"
  },
  {
    "Symbol": "WYR",
    "CoinName": "Wyrify",
    "FullName": "Wyrify (WYR)"
  },
  {
    "Symbol": "VZT",
    "CoinName": "Vezt",
    "FullName": "Vezt (VZT)"
  },
  {
    "Symbol": "INDI",
    "CoinName": "IndiCoin",
    "FullName": "IndiCoin (INDI)"
  },
  {
    "Symbol": "LUX",
    "CoinName": "LUXCoin",
    "FullName": "LUXCoin (LUX)"
  },
  {
    "Symbol": "BAR",
    "CoinName": "TBIS token",
    "FullName": "TBIS token (BAR)"
  },
  {
    "Symbol": "PIRL",
    "CoinName": "Pirl",
    "FullName": "Pirl (PIRL)"
  },
  {
    "Symbol": "ECASH",
    "CoinName": "Ethereum Cash",
    "FullName": "Ethereum Cash (ECASH)"
  },
  {
    "Symbol": "WPR",
    "CoinName": "WePower",
    "FullName": "WePower (WPR)"
  },
  {
    "Symbol": "DRGN",
    "CoinName": "Dragonchain",
    "FullName": "Dragonchain (DRGN)"
  },
  {
    "Symbol": "ODMC",
    "CoinName": "ODMCoin",
    "FullName": "ODMCoin (ODMC)"
  },
  {
    "Symbol": "BRAT",
    "CoinName": "BROTHER",
    "FullName": "BROTHER (BRAT)"
  },
  {
    "Symbol": "DTR",
    "CoinName": "Dynamic Trading Rights",
    "FullName": "Dynamic Trading Rights (DTR)"
  },
  {
    "Symbol": "TKR",
    "CoinName": "CryptoInsight",
    "FullName": "CryptoInsight (TKR)"
  },
  {
    "Symbol": "ELITE",
    "CoinName": "EthereumLite",
    "FullName": "EthereumLite (ELITE)"
  },
  {
    "Symbol": "XIOS",
    "CoinName": "Xios",
    "FullName": "Xios (XIOS)"
  },
  {
    "Symbol": "DOV",
    "CoinName": "DOVU",
    "FullName": "DOVU (DOV)"
  },
  {
    "Symbol": "REA",
    "CoinName": "Realisto",
    "FullName": "Realisto (REA)"
  },
  {
    "Symbol": "AVE",
    "CoinName": "Avesta",
    "FullName": "Avesta (AVE)"
  },
  {
    "Symbol": "XNN",
    "CoinName": "Xenon",
    "FullName": "Xenon (XNN)"
  },
  {
    "Symbol": "BTDX",
    "CoinName": "Bitcloud 2.0",
    "FullName": "Bitcloud 2.0 (BTDX)"
  },
  {
    "Symbol": "LOAN",
    "CoinName": "Lendoit",
    "FullName": "Lendoit (LOAN)"
  },
  {
    "Symbol": "ZAB",
    "CoinName": "ZABERcoin",
    "FullName": "ZABERcoin (ZAB)"
  },
  {
    "Symbol": "BT1",
    "CoinName": "Bitfinex Bitcoin Future",
    "FullName": "Bitfinex Bitcoin Future (BT1)"
  },
  {
    "Symbol": "BT2",
    "CoinName": "Bitcoin SegWit2X",
    "FullName": "Bitcoin SegWit2X (BT2)"
  },
  {
    "Symbol": "SHARPE",
    "CoinName": "Sharpe Capital",
    "FullName": "Sharpe Capital (SHARPE)"
  },
  {
    "Symbol": "JCR",
    "CoinName": "Jincor",
    "FullName": "Jincor (JCR)"
  },
  {
    "Symbol": "XSB",
    "CoinName": "Extreme Sportsbook",
    "FullName": "Extreme Sportsbook (XSB)"
  },
  {
    "Symbol": "ATM",
    "CoinName": "ATMChain",
    "FullName": "ATMChain (ATM)"
  },
  {
    "Symbol": "EBST",
    "CoinName": "eBoost",
    "FullName": "eBoost (EBST)"
  },
  {
    "Symbol": "KEK",
    "CoinName": "KekCoin",
    "FullName": "KekCoin (KEK)"
  },
  {
    "Symbol": "AID",
    "CoinName": "AidCoin",
    "FullName": "AidCoin (AID)"
  },
  {
    "Symbol": "BLHC",
    "CoinName": "BlackholeCoin",
    "FullName": "BlackholeCoin (BLHC)"
  },
  {
    "Symbol": "ALTCOM",
    "CoinName": "AltCommunity Coin",
    "FullName": "AltCommunity Coin (ALTCOM)"
  },
  {
    "Symbol": "DATA",
    "CoinName": "Streamr DATAcoin",
    "FullName": "Streamr DATAcoin (DATA)"
  },
  {
    "Symbol": "UGC",
    "CoinName": "ugChain",
    "FullName": "ugChain (UGC)"
  },
  {
    "Symbol": "PLAY",
    "CoinName": "HEROcoin",
    "FullName": "HEROcoin (PLAY)"
  },
  {
    "Symbol": "PURE",
    "CoinName": "Pure",
    "FullName": "Pure (PURE)"
  },
  {
    "Symbol": "CLD",
    "CoinName": "Cloud",
    "FullName": "Cloud (CLD)"
  },
  {
    "Symbol": "OTN",
    "CoinName": "Open Trading Network",
    "FullName": "Open Trading Network (OTN)"
  },
  {
    "Symbol": "POS",
    "CoinName": "PoSToken",
    "FullName": "PoSToken (POS)"
  },
  {
    "Symbol": "REBL",
    "CoinName": "REBL",
    "FullName": "REBL (REBL)"
  },
  {
    "Symbol": "NEOG",
    "CoinName": "NEO Gold",
    "FullName": "NEO Gold (NEOG)"
  },
  {
    "Symbol": "EXN",
    "CoinName": "ExchangeN",
    "FullName": "ExchangeN (EXN)"
  },
  {
    "Symbol": "TRCT",
    "CoinName": "Tracto",
    "FullName": "Tracto (TRCT)"
  },
  {
    "Symbol": "UKG",
    "CoinName": "UnikoinGold",
    "FullName": "UnikoinGold (UKG)"
  },
  {
    "Symbol": "BTCRED",
    "CoinName": "Bitcoin Red",
    "FullName": "Bitcoin Red (BTCRED)"
  },
  {
    "Symbol": "CPEX",
    "CoinName": "CoinPulseToken",
    "FullName": "CoinPulseToken (CPEX)"
  },
  {
    "Symbol": "JTX",
    "CoinName": "Project J",
    "FullName": "Project J (JTX)"
  },
  {
    "Symbol": "AXT",
    "CoinName": "AIX",
    "FullName": "AIX (AXT)"
  },
  {
    "Symbol": "NEU",
    "CoinName": "Neumark",
    "FullName": "Neumark (NEU)"
  },
  {
    "Symbol": "RUPX",
    "CoinName": "Rupaya",
    "FullName": "Rupaya (RUPX)"
  },
  {
    "Symbol": "BDR",
    "CoinName": "BlueDragon",
    "FullName": "BlueDragon (BDR)"
  },
  {
    "Symbol": "TIOX",
    "CoinName": "TIOx",
    "FullName": "TIOx (TIOX)"
  },
  {
    "Symbol": "HNCN",
    "CoinName": "Huncoin",
    "FullName": "Huncoin (HNCN)"
  },
  {
    "Symbol": "MADC",
    "CoinName": "MadCoin",
    "FullName": "MadCoin (MADC)"
  },
  {
    "Symbol": "PURA",
    "CoinName": "Pura",
    "FullName": "Pura (PURA)"
  },
  {
    "Symbol": "INN",
    "CoinName": "Innova",
    "FullName": "Innova (INN)"
  },
  {
    "Symbol": "HST",
    "CoinName": "Decision Token",
    "FullName": "Decision Token (HST)"
  },
  {
    "Symbol": "BDL",
    "CoinName": "Bitdeal",
    "FullName": "Bitdeal (BDL)"
  },
  {
    "Symbol": "CMS",
    "CoinName": "COMSA",
    "FullName": "COMSA (CMS)"
  },
  {
    "Symbol": "XBL",
    "CoinName": "Billionaire Token",
    "FullName": "Billionaire Token (XBL)"
  },
  {
    "Symbol": "ZEPH",
    "CoinName": "Zeph",
    "FullName": "Zeph (ZEPH)"
  },
  {
    "Symbol": "ATFS",
    "CoinName": "ATFS Project",
    "FullName": "ATFS Project (ATFS)"
  },
  {
    "Symbol": "GES",
    "CoinName": "Galaxy eSolutions",
    "FullName": "Galaxy eSolutions (GES)"
  },
  {
    "Symbol": "PHORE",
    "CoinName": "Phore",
    "FullName": "Phore (PHORE)"
  },
  {
    "Symbol": "LCASH",
    "CoinName": "LitecoinCash",
    "FullName": "LitecoinCash (LCASH)"
  },
  {
    "Symbol": "CFD",
    "CoinName": "Confido",
    "FullName": "Confido (CFD)"
  },
  {
    "Symbol": "SPHTX",
    "CoinName": "SophiaTX",
    "FullName": "SophiaTX (SPHTX)"
  },
  {
    "Symbol": "PLC",
    "CoinName": "PlusCoin",
    "FullName": "PlusCoin (PLC)"
  },
  {
    "Symbol": "WSC",
    "CoinName": "WiserCoin",
    "FullName": "WiserCoin (WSC)"
  },
  {
    "Symbol": "DBET",
    "CoinName": "Decent.bet",
    "FullName": "Decent.bet (DBET)"
  },
  {
    "Symbol": "XGOX",
    "CoinName": "Go!",
    "FullName": "Go! (xGOx)"
  },
  {
    "Symbol": "NEWB",
    "CoinName": "Newbium",
    "FullName": "Newbium (NEWB)"
  },
  {
    "Symbol": "LIFE",
    "CoinName": "LIFE",
    "FullName": "LIFE (LIFE)"
  },
  {
    "Symbol": "RMC",
    "CoinName": "Russian Mining Coin",
    "FullName": "Russian Mining Coin (RMC)"
  },
  {
    "Symbol": "CREDO",
    "CoinName": "Credo",
    "FullName": "Credo (CREDO)"
  },
  {
    "Symbol": "MSR",
    "CoinName": "Masari",
    "FullName": "Masari (MSR)"
  },
  {
    "Symbol": "CJT",
    "CoinName": "ConnectJob Token",
    "FullName": "ConnectJob Token (CJT)"
  },
  {
    "Symbol": "EVN",
    "CoinName": "Envion",
    "FullName": "Envion (EVN)"
  },
  {
    "Symbol": "BNK",
    "CoinName": "Bankera",
    "FullName": "Bankera (BNK)"
  },
  {
    "Symbol": "ELLA",
    "CoinName": "Ellaism",
    "FullName": "Ellaism (ELLA)"
  },
  {
    "Symbol": "BPL",
    "CoinName": "BlockPool",
    "FullName": "BlockPool (BPL)"
  },
  {
    "Symbol": "ROCK",
    "CoinName": "RocketCoin",
    "FullName": "RocketCoin (ROCK)"
  },
  {
    "Symbol": "DRXNE",
    "CoinName": "Droxne",
    "FullName": "Droxne (DRXNE)"
  },
  {
    "Symbol": "SKR",
    "CoinName": "Sakuracoin",
    "FullName": "Sakuracoin (SKR)"
  },
  {
    "Symbol": "GRID",
    "CoinName": "Grid+",
    "FullName": "Grid+ (GRID)"
  },
  {
    "Symbol": "XPTX",
    "CoinName": "PlatinumBAR",
    "FullName": "PlatinumBAR (XPTX)"
  },
  {
    "Symbol": "GVT",
    "CoinName": "Genesis Vision",
    "FullName": "Genesis Vision (GVT)"
  },
  {
    "Symbol": "ETK",
    "CoinName": "Energi Token",
    "FullName": "Energi Token (ETK)"
  },
  {
    "Symbol": "ASTRO",
    "CoinName": "Astronaut",
    "FullName": "Astronaut (ASTRO)"
  },
  {
    "Symbol": "GMT",
    "CoinName": "Mercury Protocol",
    "FullName": "Mercury Protocol (GMT)"
  },
  {
    "Symbol": "EMPH",
    "CoinName": "Emphy",
    "FullName": "Emphy (EMPH)"
  },
  {
    "Symbol": "SOAR",
    "CoinName": "Soarcoin",
    "FullName": "Soarcoin (SOAR)"
  },
  {
    "Symbol": "EXY",
    "CoinName": "Experty",
    "FullName": "Experty (EXY)"
  },
  {
    "Symbol": "ISH",
    "CoinName": "Interstellar Holdings",
    "FullName": "Interstellar Holdings (ISH)"
  },
  {
    "Symbol": "MNX",
    "CoinName": "MinexCoin",
    "FullName": "MinexCoin (MNX)"
  },
  {
    "Symbol": "CRDS",
    "CoinName": "Credits",
    "FullName": "Credits (CRDS)"
  },
  {
    "Symbol": "VIU",
    "CoinName": "Viuly",
    "FullName": "Viuly (VIU)"
  },
  {
    "Symbol": "SCRM",
    "CoinName": "Scorum",
    "FullName": "Scorum (SCRM)"
  },
  {
    "Symbol": "DBR",
    "CoinName": "Düber",
    "FullName": "Düber (DBR)"
  },
  {
    "Symbol": "GFT",
    "CoinName": "Giftcoin",
    "FullName": "Giftcoin (GFT)"
  },
  {
    "Symbol": "STAC",
    "CoinName": "STAC",
    "FullName": "STAC (STAC)"
  },
  {
    "Symbol": "RIPT",
    "CoinName": "RiptideCoin",
    "FullName": "RiptideCoin (RIPT)"
  },
  {
    "Symbol": "BBT",
    "CoinName": "BitBoost",
    "FullName": "BitBoost (BBT)"
  },
  {
    "Symbol": "GBX",
    "CoinName": "GoByte",
    "FullName": "GoByte (GBX)"
  },
  {
    "Symbol": "CSTL",
    "CoinName": "Castle",
    "FullName": "Castle (CSTL)"
  },
  {
    "Symbol": "ICC",
    "CoinName": "Insta Cash Coin",
    "FullName": "Insta Cash Coin (ICC)"
  },
  {
    "Symbol": "JNT",
    "CoinName": "Jibrel Network Token",
    "FullName": "Jibrel Network Token (JNT)"
  },
  {
    "Symbol": "XLQ",
    "CoinName": "Alqo",
    "FullName": "Alqo (XLQ)"
  },
  {
    "Symbol": "KNGN",
    "CoinName": "KingN Coin",
    "FullName": "KingN Coin (KNGN)"
  },
  {
    "Symbol": "TRIA",
    "CoinName": "Triaconta",
    "FullName": "Triaconta (TRIA)"
  },
  {
    "Symbol": "PBL",
    "CoinName": "Pebbles",
    "FullName": "Pebbles (PBL)"
  },
  {
    "Symbol": "MAG",
    "CoinName": "Magnet",
    "FullName": "Magnet (MAG)"
  },
  {
    "Symbol": "STEX",
    "CoinName": "STEX",
    "FullName": "STEX (STEX)"
  },
  {
    "Symbol": "UFR",
    "CoinName": "Upfiring",
    "FullName": "Upfiring (UFR)"
  },
  {
    "Symbol": "LOCI",
    "CoinName": "LociCoin",
    "FullName": "LociCoin (LOCI)"
  },
  {
    "Symbol": "TAU",
    "CoinName": "Lamden Tau",
    "FullName": "Lamden Tau (TAU)"
  },
  {
    "Symbol": "LAB",
    "CoinName": "Labrys",
    "FullName": "Labrys (LAB)"
  },
  {
    "Symbol": "DEB",
    "CoinName": "Debitum Token",
    "FullName": "Debitum Token (DEB)"
  },
  {
    "Symbol": "FLIXX",
    "CoinName": "Flixxo",
    "FullName": "Flixxo (FLIXX)"
  },
  {
    "Symbol": "FRD",
    "CoinName": "Farad",
    "FullName": "Farad (FRD)"
  },
  {
    "Symbol": "PFR",
    "CoinName": "PayFair",
    "FullName": "PayFair (PFR)"
  },
  {
    "Symbol": "ECA",
    "CoinName": "Electra",
    "FullName": "Electra (ECA)"
  },
  {
    "Symbol": "LDM",
    "CoinName": "Ludum token",
    "FullName": "Ludum token (LDM)"
  },
  {
    "Symbol": "LTG",
    "CoinName": "LiteCoin Gold",
    "FullName": "LiteCoin Gold (LTG)"
  },
  {
    "Symbol": "STP",
    "CoinName": "StashPay",
    "FullName": "StashPay (STP)"
  },
  {
    "Symbol": "SPANK",
    "CoinName": "SpankChain",
    "FullName": "SpankChain (SPANK)"
  },
  {
    "Symbol": "WISH",
    "CoinName": "MyWish",
    "FullName": "MyWish (WISH)"
  },
  {
    "Symbol": "AERM",
    "CoinName": "Aerium",
    "FullName": "Aerium (AERM)"
  },
  {
    "Symbol": "PLX",
    "CoinName": "PlexCoin",
    "FullName": "PlexCoin (PLX)"
  },
  {
    "Symbol": "AUTON",
    "CoinName": "Autonio",
    "FullName": "Autonio (AUTON)"
  },
  {
    "Symbol": "ETHB",
    "CoinName": "EtherBTC",
    "FullName": "EtherBTC (ETHB)"
  },
  {
    "Symbol": "FOOD",
    "CoinName": "FoodCoin",
    "FullName": "FoodCoin (FOOD)"
  },
  {
    "Symbol": "DEC",
    "CoinName": "Darico",
    "FullName": "Darico (DEC)"
  },
  {
    "Symbol": "VOT",
    "CoinName": "Votecoin",
    "FullName": "Votecoin (VOT)"
  },
  {
    "Symbol": "LEND",
    "CoinName": "Aave",
    "FullName": "Aave (LEND)"
  },
  {
    "Symbol": "SETHER",
    "CoinName": "Sether",
    "FullName": "Sether (SETHER)"
  },
  {
    "Symbol": "XSH",
    "CoinName": "SHIELD",
    "FullName": "SHIELD (XSH)"
  },
  {
    "Symbol": "GEA",
    "CoinName": "Goldea",
    "FullName": "Goldea (GEA)"
  },
  {
    "Symbol": "BCO",
    "CoinName": "BridgeCoin",
    "FullName": "BridgeCoin (BCO)"
  },
  {
    "Symbol": "DSR",
    "CoinName": "Desire",
    "FullName": "Desire (DSR)"
  },
  {
    "Symbol": "BDG",
    "CoinName": "BitDegree",
    "FullName": "BitDegree (BDG)"
  },
  {
    "Symbol": "ONG",
    "CoinName": "SoMee.Social",
    "FullName": "SoMee.Social (ONG)"
  },
  {
    "Symbol": "PRL",
    "CoinName": "Oyster Pearl",
    "FullName": "Oyster Pearl (PRL)"
  },
  {
    "Symbol": "BTCM",
    "CoinName": "BTCMoon",
    "FullName": "BTCMoon (BTCM)"
  },
  {
    "Symbol": "ETBT",
    "CoinName": "Ethereum Black",
    "FullName": "Ethereum Black (ETBT)"
  },
  {
    "Symbol": "ZCG",
    "CoinName": "ZCashGOLD",
    "FullName": "ZCashGOLD (ZCG)"
  },
  {
    "Symbol": "MUT",
    "CoinName": "Mutual Coin",
    "FullName": "Mutual Coin (MUT)"
  },
  {
    "Symbol": "DIVX",
    "CoinName": "Divi Exchange Token",
    "FullName": "Divi Exchange Token (DIVX)"
  },
  {
    "Symbol": "CNBC",
    "CoinName": "Cash & Back Coin",
    "FullName": "Cash & Back Coin (CNBC)"
  },
  {
    "Symbol": "RHOC",
    "CoinName": "RChain",
    "FullName": "RChain (RHOC)"
  },
  {
    "Symbol": "XUN",
    "CoinName": "UltraNote",
    "FullName": "UltraNote (XUN)"
  },
  {
    "Symbol": "RFL",
    "CoinName": "RAFL",
    "FullName": "RAFL (RFL)"
  },
  {
    "Symbol": "COFI",
    "CoinName": "CoinFi",
    "FullName": "CoinFi (COFI)"
  },
  {
    "Symbol": "ELTCOIN",
    "CoinName": "ELTCOIN",
    "FullName": "ELTCOIN (ELTCOIN)"
  },
  {
    "Symbol": "GRX",
    "CoinName": "Gold Reward Token",
    "FullName": "Gold Reward Token (GRX)"
  },
  {
    "Symbol": "NTK",
    "CoinName": "Neurotoken",
    "FullName": "Neurotoken (NTK)"
  },
  {
    "Symbol": "ERO",
    "CoinName": "Eroscoin",
    "FullName": "Eroscoin (ERO)"
  },
  {
    "Symbol": "RLX",
    "CoinName": "Relex",
    "FullName": "Relex (RLX)"
  },
  {
    "Symbol": "CWV",
    "CoinName": "CryptoWave",
    "FullName": "CryptoWave (CWV)"
  },
  {
    "Symbol": "NRO",
    "CoinName": "Neuro",
    "FullName": "Neuro (NRO)"
  },
  {
    "Symbol": "SEND",
    "CoinName": "Social Send",
    "FullName": "Social Send (SEND)"
  },
  {
    "Symbol": "GLT",
    "CoinName": "GlobalToken",
    "FullName": "GlobalToken (GLT)"
  },
  {
    "Symbol": "X8X",
    "CoinName": "X8Currency",
    "FullName": "X8Currency (X8X)"
  },
  {
    "Symbol": "COAL",
    "CoinName": "BitCoal",
    "FullName": "BitCoal (COAL)"
  },
  {
    "Symbol": "DAXX",
    "CoinName": "DaxxCoin",
    "FullName": "DaxxCoin (DAXX)"
  },
  {
    "Symbol": "BWK",
    "CoinName": "Bulwark",
    "FullName": "Bulwark (BWK)"
  },
  {
    "Symbol": "FNTB",
    "CoinName": "FinTab",
    "FullName": "FinTab (FNTB)"
  },
  {
    "Symbol": "XMRG",
    "CoinName": "Monero Gold",
    "FullName": "Monero Gold (XMRG)"
  },
  {
    "Symbol": "BTCE",
    "CoinName": "EthereumBitcoin",
    "FullName": "EthereumBitcoin (BTCE)"
  },
  {
    "Symbol": "FYP",
    "CoinName": "FlypMe",
    "FullName": "FlypMe (FYP)"
  },
  {
    "Symbol": "BOXY",
    "CoinName": "BoxyCoin",
    "FullName": "BoxyCoin (BOXY)"
  },
  {
    "Symbol": "NGC",
    "CoinName": "NagaCoin",
    "FullName": "NagaCoin (NGC)"
  },
  {
    "Symbol": "UTNP",
    "CoinName": "Universa",
    "FullName": "Universa (UTNP)"
  },
  {
    "Symbol": "EGAS",
    "CoinName": "ETHGAS",
    "FullName": "ETHGAS (EGAS)"
  },
  {
    "Symbol": "DPP",
    "CoinName": "Digital Assets Power Play",
    "FullName": "Digital Assets Power Play (DPP)"
  },
  {
    "Symbol": "ADB",
    "CoinName": "Adbank",
    "FullName": "Adbank (ADB)"
  },
  {
    "Symbol": "TGT",
    "CoinName": "TargetCoin",
    "FullName": "TargetCoin (TGT)"
  },
  {
    "Symbol": "BMT",
    "CoinName": "BMChain",
    "FullName": "BMChain (BMT)"
  },
  {
    "Symbol": "BIO",
    "CoinName": "Biocoin",
    "FullName": "Biocoin (BIO)"
  },
  {
    "Symbol": "MTRC",
    "CoinName": "ModulTrade",
    "FullName": "ModulTrade (MTRC)"
  },
  {
    "Symbol": "BTCL",
    "CoinName": "BTC Lite",
    "FullName": "BTC Lite (BTCL)"
  },
  {
    "Symbol": "PCN",
    "CoinName": "PeepCoin",
    "FullName": "PeepCoin (PCN)"
  },
  {
    "Symbol": "PYP",
    "CoinName": "PayPro",
    "FullName": "PayPro (PYP)"
  },
  {
    "Symbol": "CRED",
    "CoinName": "Verify",
    "FullName": "Verify (CRED)"
  },
  {
    "Symbol": "SBTC",
    "CoinName": "Super Bitcoin",
    "FullName": "Super Bitcoin (SBTC)"
  },
  {
    "Symbol": "KLKS",
    "CoinName": "Kalkulus",
    "FullName": "Kalkulus (KLKS)"
  },
  {
    "Symbol": "AC3",
    "CoinName": "AC3",
    "FullName": "AC3 (AC3)"
  },
  {
    "Symbol": "CHIPS",
    "CoinName": "CHIPS",
    "FullName": "CHIPS (CHIPS)"
  },
  {
    "Symbol": "HKN",
    "CoinName": "Hacken",
    "FullName": "Hacken (HKN)"
  },
  {
    "Symbol": "LOCK",
    "CoinName": "LockTrip",
    "FullName": "LockTrip (LOCK)"
  },
  {
    "Symbol": "LTHN",
    "CoinName": "Lethean",
    "FullName": "Lethean (LTHN)"
  },
  {
    "Symbol": "GER",
    "CoinName": "GermanCoin",
    "FullName": "GermanCoin (GER)"
  },
  {
    "Symbol": "LTCU",
    "CoinName": "LiteCoin Ultra",
    "FullName": "LiteCoin Ultra (LTCU)"
  },
  {
    "Symbol": "MGO",
    "CoinName": "MobileGo",
    "FullName": "MobileGo (MGO)"
  },
  {
    "Symbol": "BTCA",
    "CoinName": "Bitair",
    "FullName": "Bitair (BTCA)"
  },
  {
    "Symbol": "HQX",
    "CoinName": "HOQU",
    "FullName": "HOQU (HQX)"
  },
  {
    "Symbol": "STAK",
    "CoinName": "Straks",
    "FullName": "Straks (STAK)"
  },
  {
    "Symbol": "BCOIN",
    "CoinName": "BannerCoin",
    "FullName": "BannerCoin (BCOIN)"
  },
  {
    "Symbol": "MEDIB",
    "CoinName": "MediBloc",
    "FullName": "MediBloc (MEDIB)"
  },
  {
    "Symbol": "CCOS",
    "CoinName": "CrowdCoinage",
    "FullName": "CrowdCoinage (CCOS)"
  },
  {
    "Symbol": "BNTY",
    "CoinName": "Bounty0x",
    "FullName": "Bounty0x (BNTY)"
  },
  {
    "Symbol": "BRD",
    "CoinName": "Bread token",
    "FullName": "Bread token (BRD)"
  },
  {
    "Symbol": "HAT",
    "CoinName": "Hawala.Exchange",
    "FullName": "Hawala.Exchange (HAT)"
  },
  {
    "Symbol": "ELF",
    "CoinName": "aelf",
    "FullName": "aelf (ELF)"
  },
  {
    "Symbol": "VLR",
    "CoinName": "Valorem",
    "FullName": "Valorem (VLR)"
  },
  {
    "Symbol": "CWX",
    "CoinName": "Crypto-X",
    "FullName": "Crypto-X (CWX)"
  },
  {
    "Symbol": "DBC",
    "CoinName": "DeepBrain Chain",
    "FullName": "DeepBrain Chain (DBC)"
  },
  {
    "Symbol": "ZP",
    "CoinName": "Zen Protocol",
    "FullName": "Zen Protocol (ZP)"
  },
  {
    "Symbol": "POP",
    "CoinName": "PopularCoin",
    "FullName": "PopularCoin (POP)"
  },
  {
    "Symbol": "PNX",
    "CoinName": "PhantomX",
    "FullName": "PhantomX (PNX)"
  },
  {
    "Symbol": "BAS",
    "CoinName": "BitAsean",
    "FullName": "BitAsean (BAS)"
  },
  {
    "Symbol": "UTT",
    "CoinName": "United Traders Token",
    "FullName": "United Traders Token (UTT)"
  },
  {
    "Symbol": "AMM",
    "CoinName": "MicroMoney",
    "FullName": "MicroMoney (AMM)"
  },
  {
    "Symbol": "XCPO",
    "CoinName": "Copico",
    "FullName": "Copico (XCPO)"
  },
  {
    "Symbol": "GET",
    "CoinName": "Guaranteed Entrance Token",
    "FullName": "Guaranteed Entrance Token (GET)"
  },
  {
    "Symbol": "ERC20",
    "CoinName": "Index ERC20",
    "FullName": "Index ERC20 (ERC20)"
  },
  {
    "Symbol": "HTML",
    "CoinName": "HTML Coin",
    "FullName": "HTML Coin (HTML)"
  },
  {
    "Symbol": "GENE",
    "CoinName": "PARKGENE",
    "FullName": "PARKGENE (GENE)"
  },
  {
    "Symbol": "NMS",
    "CoinName": "Numus",
    "FullName": "Numus (NMS)"
  },
  {
    "Symbol": "PHO",
    "CoinName": "Photon",
    "FullName": "Photon (PHO)"
  },
  {
    "Symbol": "XTRA",
    "CoinName": "ExtraCredit",
    "FullName": "ExtraCredit (XTRA)"
  },
  {
    "Symbol": "NTWK",
    "CoinName": "Network Token",
    "FullName": "Network Token (NTWK)"
  },
  {
    "Symbol": "SUCR",
    "CoinName": "Sucre",
    "FullName": "Sucre (SUCR)"
  },
  {
    "Symbol": "ACCO",
    "CoinName": "Accolade",
    "FullName": "Accolade (ACCO)"
  },
  {
    "Symbol": "BYTHER",
    "CoinName": "Bytether ",
    "FullName": "Bytether  (BYTHER)"
  },
  {
    "Symbol": "REM",
    "CoinName": "REMME",
    "FullName": "REMME (REM)"
  },
  {
    "Symbol": "TOK",
    "CoinName": "TokugawaCoin",
    "FullName": "TokugawaCoin (TOK)"
  },
  {
    "Symbol": "EREAL",
    "CoinName": "eREAL",
    "FullName": "eREAL (EREAL)"
  },
  {
    "Symbol": "CPN",
    "CoinName": "CompuCoin",
    "FullName": "CompuCoin (CPN)"
  },
  {
    "Symbol": "XFT",
    "CoinName": "Fantasy Cash",
    "FullName": "Fantasy Cash (XFT)"
  },
  {
    "Symbol": "QLC",
    "CoinName": "QLC Chain",
    "FullName": "QLC Chain (QLC)"
  },
  {
    "Symbol": "BSE",
    "CoinName": "BitSerial",
    "FullName": "BitSerial (BSE)"
  },
  {
    "Symbol": "OMGC",
    "CoinName": "OmiseGO Classic",
    "FullName": "OmiseGO Classic (OMGC)"
  },
  {
    "Symbol": "Q2C",
    "CoinName": "QubitCoin",
    "FullName": "QubitCoin (Q2C)"
  },
  {
    "Symbol": "BLT",
    "CoinName": "Bloom Token",
    "FullName": "Bloom Token (BLT)"
  },
  {
    "Symbol": "SPF",
    "CoinName": "SportyCo",
    "FullName": "SportyCo (SPF)"
  },
  {
    "Symbol": "TDS",
    "CoinName": "TokenDesk",
    "FullName": "TokenDesk (TDS)"
  },
  {
    "Symbol": "ORE",
    "CoinName": "Galactrum",
    "FullName": "Galactrum (ORE)"
  },
  {
    "Symbol": "SPK",
    "CoinName": "SparksPay",
    "FullName": "SparksPay (SPK)"
  },
  {
    "Symbol": "GOA",
    "CoinName": "GoaCoin",
    "FullName": "GoaCoin (GOA)"
  },
  {
    "Symbol": "WAGE",
    "CoinName": "Digiwage",
    "FullName": "Digiwage (WAGE)"
  },
  {
    "Symbol": "GUN",
    "CoinName": "GunCoin",
    "FullName": "GunCoin (GUN)"
  },
  {
    "Symbol": "DFS",
    "CoinName": "Digital Fantasy Sports",
    "FullName": "Digital Fantasy Sports (DFS)"
  },
  {
    "Symbol": "WELL",
    "CoinName": "Well",
    "FullName": "Well (WELL)"
  },
  {
    "Symbol": "FLOT",
    "CoinName": "FireLotto",
    "FullName": "FireLotto (FLOT)"
  },
  {
    "Symbol": "CL",
    "CoinName": "CoinLancer",
    "FullName": "CoinLancer (CL)"
  },
  {
    "Symbol": "SHND",
    "CoinName": "StrongHands",
    "FullName": "StrongHands (SHND)"
  },
  {
    "Symbol": "AUA",
    "CoinName": "ArubaCoin",
    "FullName": "ArubaCoin (AUA)"
  },
  {
    "Symbol": "DNN",
    "CoinName": "DNN Token",
    "FullName": "DNN Token (DNN)"
  },
  {
    "Symbol": "SAGA",
    "CoinName": "SagaCoin",
    "FullName": "SagaCoin (SAGA)"
  },
  {
    "Symbol": "TSL",
    "CoinName": "Energo",
    "FullName": "Energo (TSL)"
  },
  {
    "Symbol": "IRL",
    "CoinName": "IrishCoin",
    "FullName": "IrishCoin (IRL)"
  },
  {
    "Symbol": "BODHI",
    "CoinName": "Bodhi Network",
    "FullName": "Bodhi Network (BODHI)"
  },
  {
    "Symbol": "PMA",
    "CoinName": "PumaPay",
    "FullName": "PumaPay (PMA)"
  },
  {
    "Symbol": "TROLL",
    "CoinName": "Trollcoin",
    "FullName": "Trollcoin (TROLL)"
  },
  {
    "Symbol": "FORCEC",
    "CoinName": "Force Coin",
    "FullName": "Force Coin (FORCEC)"
  },
  {
    "Symbol": "SUGAR",
    "CoinName": "Sugar Exchange",
    "FullName": "Sugar Exchange (SUGAR)"
  },
  {
    "Symbol": "JET",
    "CoinName": "Jetcoin",
    "FullName": "Jetcoin (JET)"
  },
  {
    "Symbol": "MDS",
    "CoinName": "MediShares",
    "FullName": "MediShares (MDS)"
  },
  {
    "Symbol": "LCP",
    "CoinName": "Litecoin Plus",
    "FullName": "Litecoin Plus (LCP)"
  },
  {
    "Symbol": "GTC",
    "CoinName": "Game",
    "FullName": "Game (GTC)"
  },
  {
    "Symbol": "IETH",
    "CoinName": "iEthereum",
    "FullName": "iEthereum (IETH)"
  },
  {
    "Symbol": "TGCC",
    "CoinName": "TheGCCcoin",
    "FullName": "TheGCCcoin (TGCC)"
  },
  {
    "Symbol": "SDRN",
    "CoinName": "Senderon",
    "FullName": "Senderon (SDRN)"
  },
  {
    "Symbol": "INK",
    "CoinName": "Ink",
    "FullName": "Ink (INK)"
  },
  {
    "Symbol": "KBR",
    "CoinName": "Kubera Coin",
    "FullName": "Kubera Coin (KBR)"
  },
  {
    "Symbol": "MONK",
    "CoinName": "Monkey Project",
    "FullName": "Monkey Project (MONK)"
  },
  {
    "Symbol": "MGN",
    "CoinName": "MagnaCoin",
    "FullName": "MagnaCoin (MGN)"
  },
  {
    "Symbol": "KZC",
    "CoinName": "KZCash",
    "FullName": "KZCash (KZC)"
  },
  {
    "Symbol": "GNR",
    "CoinName": "Gainer",
    "FullName": "Gainer (GNR)"
  },
  {
    "Symbol": "LNC",
    "CoinName": "Blocklancer",
    "FullName": "Blocklancer (LNC)"
  },
  {
    "Symbol": "LWF",
    "CoinName": "Local World Forwarders",
    "FullName": "Local World Forwarders (LWF)"
  },
  {
    "Symbol": "BRIC",
    "CoinName": "BrightCoin",
    "FullName": "BrightCoin (BRIC)"
  },
  {
    "Symbol": "WCG",
    "CoinName": "World Crypto Gold",
    "FullName": "World Crypto Gold (WCG)"
  },
  {
    "Symbol": "BHIVE",
    "CoinName": "Hive",
    "FullName": "Hive (BHIVE)"
  },
  {
    "Symbol": "LCK",
    "CoinName": "Luckbox",
    "FullName": "Luckbox (LCK)"
  },
  {
    "Symbol": "MFG",
    "CoinName": "SyncFab",
    "FullName": "SyncFab (MFG)"
  },
  {
    "Symbol": "ETL",
    "CoinName": "EtherLite",
    "FullName": "EtherLite (ETL)"
  },
  {
    "Symbol": "TEL",
    "CoinName": "Telcoin",
    "FullName": "Telcoin (TEL)"
  },
  {
    "Symbol": "DRG",
    "CoinName": "Dragon Coin",
    "FullName": "Dragon Coin (DRG)"
  },
  {
    "Symbol": "SPX",
    "CoinName": "Sp8de",
    "FullName": "Sp8de (SPX)"
  },
  {
    "Symbol": "ONL",
    "CoinName": "On.Live",
    "FullName": "On.Live (ONL)"
  },
  {
    "Symbol": "ZAP",
    "CoinName": "Zap",
    "FullName": "Zap (ZAP)"
  },
  {
    "Symbol": "AIDOC",
    "CoinName": "AI Doctor",
    "FullName": "AI Doctor (AIDOC)"
  },
  {
    "Symbol": "ECC",
    "CoinName": "ECC",
    "FullName": "ECC (ECC)"
  },
  {
    "Symbol": "ET4",
    "CoinName": "Eticket4",
    "FullName": "Eticket4 (ET4)"
  },
  {
    "Symbol": "LCT",
    "CoinName": "LendConnect",
    "FullName": "LendConnect (LCT)"
  },
  {
    "Symbol": "EBC",
    "CoinName": "EBCoin",
    "FullName": "EBCoin (EBC)"
  },
  {
    "Symbol": "VESTA",
    "CoinName": "Vestarin",
    "FullName": "Vestarin (VESTA)"
  },
  {
    "Symbol": "CPY",
    "CoinName": "COPYTRACK",
    "FullName": "COPYTRACK (CPY)"
  },
  {
    "Symbol": "STEN",
    "CoinName": "Steneum Coin",
    "FullName": "Steneum Coin (STEN)"
  },
  {
    "Symbol": "SFU",
    "CoinName": "Saifu",
    "FullName": "Saifu (SFU)"
  },
  {
    "Symbol": "PCOIN",
    "CoinName": "Pioneer Coin",
    "FullName": "Pioneer Coin (PCOIN)"
  },
  {
    "Symbol": "BLNM",
    "CoinName": "Bolenum",
    "FullName": "Bolenum (BLNM)"
  },
  {
    "Symbol": "LUC",
    "CoinName": "Play 2 Live",
    "FullName": "Play 2 Live (LUC)"
  },
  {
    "Symbol": "EDT",
    "CoinName": "EtherDelta",
    "FullName": "EtherDelta (EDT)"
  },
  {
    "Symbol": "CYDER",
    "CoinName": "Cyder Coin",
    "FullName": "Cyder Coin (CYDER)"
  },
  {
    "Symbol": "SRNT",
    "CoinName": "Serenity",
    "FullName": "Serenity (SRNT)"
  },
  {
    "Symbol": "MLT",
    "CoinName": "MultiGames",
    "FullName": "MultiGames (MLT)"
  },
  {
    "Symbol": "EKO",
    "CoinName": "EchoLink",
    "FullName": "EchoLink (EKO)"
  },
  {
    "Symbol": "UBTC",
    "CoinName": "UnitedBitcoin",
    "FullName": "UnitedBitcoin (UBTC)"
  },
  {
    "Symbol": "BTO",
    "CoinName": "Bottos",
    "FullName": "Bottos (BTO)"
  },
  {
    "Symbol": "DOCC",
    "CoinName": "Doc Coin",
    "FullName": "Doc Coin (DOCC)"
  },
  {
    "Symbol": "ARCT",
    "CoinName": "ArbitrageCT",
    "FullName": "ArbitrageCT (ARCT)"
  },
  {
    "Symbol": "IMVR",
    "CoinName": "ImmVRse",
    "FullName": "ImmVRse (IMVR)"
  },
  {
    "Symbol": "IDEX",
    "CoinName": "IDEX",
    "FullName": "IDEX (IDEX)"
  },
  {
    "Symbol": "IDH",
    "CoinName": "IndaHash",
    "FullName": "IndaHash (IDH)"
  },
  {
    "Symbol": "CBT",
    "CoinName": "CommerceBlock Token",
    "FullName": "CommerceBlock Token (CBT)"
  },
  {
    "Symbol": "ITZ",
    "CoinName": "Interzone",
    "FullName": "Interzone (ITZ)"
  },
  {
    "Symbol": "XBP",
    "CoinName": "Black Pearl Coin",
    "FullName": "Black Pearl Coin (XBP)"
  },
  {
    "Symbol": "EXRN",
    "CoinName": "EXRNchain",
    "FullName": "EXRNchain (EXRN)"
  },
  {
    "Symbol": "LGO",
    "CoinName": "Legolas Exchange",
    "FullName": "Legolas Exchange (LGO)"
  },
  {
    "Symbol": "SGL",
    "CoinName": "Sigil",
    "FullName": "Sigil (SGL)"
  },
  {
    "Symbol": "FSBT",
    "CoinName": "Forty Seven Bank",
    "FullName": "Forty Seven Bank (FSBT)"
  },
  {
    "Symbol": "CFTY",
    "CoinName": "Crafty",
    "FullName": "Crafty (CFTY)"
  },
  {
    "Symbol": "DTA",
    "CoinName": "Data",
    "FullName": "Data (DTA)"
  },
  {
    "Symbol": "CV",
    "CoinName": "CarVertical",
    "FullName": "CarVertical (CV)"
  },
  {
    "Symbol": "DTX",
    "CoinName": "DataBroker DAO",
    "FullName": "DataBroker DAO (DTX)"
  },
  {
    "Symbol": "MCU",
    "CoinName": "MediChain",
    "FullName": "MediChain (MCU)"
  },
  {
    "Symbol": "OCN",
    "CoinName": "Odyssey",
    "FullName": "Odyssey (OCN)"
  },
  {
    "Symbol": "THETA",
    "CoinName": "Theta",
    "FullName": "Theta (THETA)"
  },
  {
    "Symbol": "PRPS",
    "CoinName": "Purpose",
    "FullName": "Purpose (PRPS)"
  },
  {
    "Symbol": "DUBI",
    "CoinName": "Decentralized Universal Basic Income",
    "FullName": "Decentralized Universal Basic Income (DUBI)"
  },
  {
    "Symbol": "SGN",
    "CoinName": "Signals Network",
    "FullName": "Signals Network (SGN)"
  },
  {
    "Symbol": "TRAC",
    "CoinName": "OriginTrail",
    "FullName": "OriginTrail (TRAC)"
  },
  {
    "Symbol": "MOT",
    "CoinName": "Olympus Labs",
    "FullName": "Olympus Labs (MOT)"
  },
  {
    "Symbol": "QBAO",
    "CoinName": "Qbao",
    "FullName": "Qbao (QBAO)"
  },
  {
    "Symbol": "ACCN",
    "CoinName": "Accelerator Network",
    "FullName": "Accelerator Network (ACCN)"
  },
  {
    "Symbol": "SENT",
    "CoinName": "Sentinel",
    "FullName": "Sentinel (SENT)"
  },
  {
    "Symbol": "IPL",
    "CoinName": "InsurePal",
    "FullName": "InsurePal (IPL)"
  },
  {
    "Symbol": "OPC",
    "CoinName": "OP Coin",
    "FullName": "OP Coin (OPC)"
  },
  {
    "Symbol": "SAF",
    "CoinName": "Safinus",
    "FullName": "Safinus (SAF)"
  },
  {
    "Symbol": "PYLNT",
    "CoinName": "Pylon Network",
    "FullName": "Pylon Network (PYLNT)"
  },
  {
    "Symbol": "GRLC",
    "CoinName": "Garlicoin",
    "FullName": "Garlicoin (GRLC)"
  },
  {
    "Symbol": "EVE",
    "CoinName": "Devery",
    "FullName": "Devery (EVE)"
  },
  {
    "Symbol": "REPUX",
    "CoinName": "Repux",
    "FullName": "Repux (REPUX)"
  },
  {
    "Symbol": "JOYT",
    "CoinName": "JoyToken",
    "FullName": "JoyToken (JOYT)"
  },
  {
    "Symbol": "CAPD",
    "CoinName": "Capdax",
    "FullName": "Capdax (CAPD)"
  },
  {
    "Symbol": "BTW",
    "CoinName": "BitWhite",
    "FullName": "BitWhite (BTW)"
  },
  {
    "Symbol": "AXPR",
    "CoinName": "aXpire",
    "FullName": "aXpire (AXPR)"
  },
  {
    "Symbol": "FOTA",
    "CoinName": "Fortuna",
    "FullName": "Fortuna (FOTA)"
  },
  {
    "Symbol": "DDD",
    "CoinName": "Scry.info",
    "FullName": "Scry.info (DDD)"
  },
  {
    "Symbol": "CPCH",
    "CoinName": "CPChain",
    "FullName": "CPChain (CPCH)"
  },
  {
    "Symbol": "SPEND",
    "CoinName": "Spend",
    "FullName": "Spend (SPEND)"
  },
  {
    "Symbol": "ZPT",
    "CoinName": "Zeepin",
    "FullName": "Zeepin (ZPT)"
  },
  {
    "Symbol": "REF",
    "CoinName": "RefToken",
    "FullName": "RefToken (REF)"
  },
  {
    "Symbol": "SXDT",
    "CoinName": "SPECTRE Dividend Token",
    "FullName": "SPECTRE Dividend Token (SXDT)"
  },
  {
    "Symbol": "SXUT",
    "CoinName": "SPECTRE Utility Token",
    "FullName": "SPECTRE Utility Token (SXUT)"
  },
  {
    "Symbol": "LDC",
    "CoinName": "LeadCoin",
    "FullName": "LeadCoin (LDC)"
  },
  {
    "Symbol": "STK",
    "CoinName": "STK Token",
    "FullName": "STK Token (STK)"
  },
  {
    "Symbol": "MZX",
    "CoinName": "Mosaic Network",
    "FullName": "Mosaic Network (MZX)"
  },
  {
    "Symbol": "Q1S",
    "CoinName": "Quantum1Net",
    "FullName": "Quantum1Net (Q1S)"
  },
  {
    "Symbol": "POLY",
    "CoinName": "Polymath Network",
    "FullName": "Polymath Network (POLY)"
  },
  {
    "Symbol": "XTO",
    "CoinName": "Tao",
    "FullName": "Tao (XTO)"
  },
  {
    "Symbol": "CXO",
    "CoinName": "CargoX",
    "FullName": "CargoX (CXO)"
  },
  {
    "Symbol": "WT",
    "CoinName": "WeToken",
    "FullName": "WeToken (WT)"
  },
  {
    "Symbol": "HGS",
    "CoinName": "HashGains",
    "FullName": "HashGains (HGS)"
  },
  {
    "Symbol": "SISA",
    "CoinName": "Strategic Investments in Significant Areas",
    "FullName": "Strategic Investments in Significant Areas (SISA)"
  },
  {
    "Symbol": "EBIT",
    "CoinName": "eBit",
    "FullName": "eBit (EBIT)"
  },
  {
    "Symbol": "RCT",
    "CoinName": "RealChain",
    "FullName": "RealChain (RCT)"
  },
  {
    "Symbol": "CUZ",
    "CoinName": "Cool Cousin",
    "FullName": "Cool Cousin (CUZ)"
  },
  {
    "Symbol": "BETR",
    "CoinName": "BetterBetting",
    "FullName": "BetterBetting (BETR)"
  },
  {
    "Symbol": "GMR",
    "CoinName": "Gimmer",
    "FullName": "Gimmer (GMR)"
  },
  {
    "Symbol": "ING",
    "CoinName": "Iungo",
    "FullName": "Iungo (ING)"
  },
  {
    "Symbol": "LHC",
    "CoinName": "LHCoin",
    "FullName": "LHCoin (LHC)"
  },
  {
    "Symbol": "BLZ",
    "CoinName": "Bluzelle",
    "FullName": "Bluzelle (BLZ)"
  },
  {
    "Symbol": "CVNG",
    "CoinName": "Crave-NG",
    "FullName": "Crave-NG (CVNG)"
  },
  {
    "Symbol": "CHSB",
    "CoinName": "SwissBorg",
    "FullName": "SwissBorg (CHSB)"
  },
  {
    "Symbol": "EQUI",
    "CoinName": "EQUI Token",
    "FullName": "EQUI Token (EQUI)"
  },
  {
    "Symbol": "MCT",
    "CoinName": "1717 Masonic Commemorative Token",
    "FullName": "1717 Masonic Commemorative Token (MCT)"
  },
  {
    "Symbol": "HHEM",
    "CoinName": "Healthureum",
    "FullName": "Healthureum (HHEM)"
  },
  {
    "Symbol": "CWIS",
    "CoinName": "Crypto Wisdom Coin",
    "FullName": "Crypto Wisdom Coin (CWIS)"
  },
  {
    "Symbol": "SWM",
    "CoinName": "Swarm Fund",
    "FullName": "Swarm Fund (SWM)"
  },
  {
    "Symbol": "MDCL",
    "CoinName": "Medicalchain",
    "FullName": "Medicalchain (MDCL)"
  },
  {
    "Symbol": "WOBTC",
    "CoinName": "WorldBTC",
    "FullName": "WorldBTC (WOBTC)"
  },
  {
    "Symbol": "DNO",
    "CoinName": "Denaro",
    "FullName": "Denaro (DNO)"
  },
  {
    "Symbol": "eFIC",
    "CoinName": "FIC Network",
    "FullName": "FIC Network (eFIC)"
  },
  {
    "Symbol": "TKY",
    "CoinName": "THEKEY Token",
    "FullName": "THEKEY Token (TKY)"
  },
  {
    "Symbol": "BANCA",
    "CoinName": "BANCA",
    "FullName": "BANCA (BANCA)"
  },
  {
    "Symbol": "TRTL",
    "CoinName": "TurtleCoin",
    "FullName": "TurtleCoin (TRTL)"
  },
  {
    "Symbol": "DRPU",
    "CoinName": "DRP Utility",
    "FullName": "DRP Utility (DRPU)"
  },
  {
    "Symbol": "DOR",
    "CoinName": "Dorado",
    "FullName": "Dorado (DOR)"
  },
  {
    "Symbol": "PRFT",
    "CoinName": "Proof Suite Token",
    "FullName": "Proof Suite Token (PRFT)"
  },
  {
    "Symbol": "PARETO",
    "CoinName": "Pareto Network Token",
    "FullName": "Pareto Network Token (PARETO)"
  },
  {
    "Symbol": "DTRC",
    "CoinName": "Datarius",
    "FullName": "Datarius (DTRC)"
  },
  {
    "Symbol": "NDLC",
    "CoinName": "NeedleCoin",
    "FullName": "NeedleCoin (NDLC)"
  },
  {
    "Symbol": "BEE",
    "CoinName": "Bee Token",
    "FullName": "Bee Token (BEE)"
  },
  {
    "Symbol": "MUN",
    "CoinName": "MUNcoin",
    "FullName": "MUNcoin (MUN)"
  },
  {
    "Symbol": "TIG",
    "CoinName": "Tigereum",
    "FullName": "Tigereum (TIG)"
  },
  {
    "Symbol": "LYK",
    "CoinName": "Loyakk Vega",
    "FullName": "Loyakk Vega (LYK)"
  },
  {
    "Symbol": "NYX",
    "CoinName": "NYXCOIN",
    "FullName": "NYXCOIN (NYX)"
  },
  {
    "Symbol": "DXT",
    "CoinName": "DataWallet",
    "FullName": "DataWallet (DXT)"
  },
  {
    "Symbol": "SAT",
    "CoinName": "Satisfaction Token",
    "FullName": "Satisfaction Token (SAT)"
  },
  {
    "Symbol": "CRL",
    "CoinName": "Cryptelo Coin",
    "FullName": "Cryptelo Coin (CRL)"
  },
  {
    "Symbol": "ORI",
    "CoinName": "Origami",
    "FullName": "Origami (ORI)"
  },
  {
    "Symbol": "LYM",
    "CoinName": "Lympo",
    "FullName": "Lympo (LYM)"
  },
  {
    "Symbol": "USX",
    "CoinName": "Unified Society USDEX",
    "FullName": "Unified Society USDEX (USX)"
  },
  {
    "Symbol": "LGR",
    "CoinName": "Logarithm",
    "FullName": "Logarithm (LGR)"
  },
  {
    "Symbol": "BCA",
    "CoinName": "Bitcoin Atom",
    "FullName": "Bitcoin Atom (BCA)"
  },
  {
    "Symbol": "B2X",
    "CoinName": "SegWit2x",
    "FullName": "SegWit2x (B2X)"
  },
  {
    "Symbol": "UETL",
    "CoinName": "Useless Eth Token Lite",
    "FullName": "Useless Eth Token Lite (UETL)"
  },
  {
    "Symbol": "NBR",
    "CoinName": "Niobio Cash",
    "FullName": "Niobio Cash (NBR)"
  },
  {
    "Symbol": "ARY",
    "CoinName": "Block Array",
    "FullName": "Block Array (ARY)"
  },
  {
    "Symbol": "RAVE",
    "CoinName": "Ravelous",
    "FullName": "Ravelous (RAVE)"
  },
  {
    "Symbol": "ILT",
    "CoinName": "iOlite",
    "FullName": "iOlite (ILT)"
  },
  {
    "Symbol": "SCOOBY",
    "CoinName": "Scooby coin",
    "FullName": "Scooby coin (SCOOBY)"
  },
  {
    "Symbol": "CEFS",
    "CoinName": "CryptopiaFeeShares",
    "FullName": "CryptopiaFeeShares (CEFS)"
  },
  {
    "Symbol": "BUN",
    "CoinName": "BunnyCoin",
    "FullName": "BunnyCoin (BUN)"
  },
  {
    "Symbol": "BSR",
    "CoinName": "BitSoar Coin",
    "FullName": "BitSoar Coin (BSR)"
  },
  {
    "Symbol": "SKULL",
    "CoinName": "Pirate Blocks",
    "FullName": "Pirate Blocks (SKULL)"
  },
  {
    "Symbol": "TRDT",
    "CoinName": "Trident",
    "FullName": "Trident (TRDT)"
  },
  {
    "Symbol": "XBTY",
    "CoinName": "Bounty",
    "FullName": "Bounty (XBTY)"
  },
  {
    "Symbol": "JC",
    "CoinName": "JesusCoin",
    "FullName": "JesusCoin (JC)"
  },
  {
    "Symbol": "BTCP",
    "CoinName": "Bitcoin Private",
    "FullName": "Bitcoin Private (BTCP)"
  },
  {
    "Symbol": "SKC",
    "CoinName": "Skeincoin",
    "FullName": "Skeincoin (SKC)"
  },
  {
    "Symbol": "MWAT",
    "CoinName": "RED MegaWatt",
    "FullName": "RED MegaWatt (MWAT)"
  },
  {
    "Symbol": "JEW",
    "CoinName": "Shekel",
    "FullName": "Shekel (JEW)"
  },
  {
    "Symbol": "ERIS",
    "CoinName": "Eristica",
    "FullName": "Eristica (ERIS)"
  },
  {
    "Symbol": "KRM",
    "CoinName": "Karma",
    "FullName": "Karma (KRM)"
  },
  {
    "Symbol": "HT",
    "CoinName": "Huobi Token",
    "FullName": "Huobi Token (HT)"
  },
  {
    "Symbol": "CDY",
    "CoinName": "Bitcoin Candy",
    "FullName": "Bitcoin Candy (CDY)"
  },
  {
    "Symbol": "SSS",
    "CoinName": "ShareChain",
    "FullName": "ShareChain (SSS)"
  },
  {
    "Symbol": "CRDNC",
    "CoinName": "Credence Coin",
    "FullName": "Credence Coin (CRDNC)"
  },
  {
    "Symbol": "BIFI",
    "CoinName": "BitcoinFile",
    "FullName": "BitcoinFile (BIFI)"
  },
  {
    "Symbol": "CADN",
    "CoinName": "Content and AD Network",
    "FullName": "Content and AD Network (CADN)"
  },
  {
    "Symbol": "BTF",
    "CoinName": "Blockchain Traded Fund",
    "FullName": "Blockchain Traded Fund (BTF)"
  },
  {
    "Symbol": "IPC",
    "CoinName": "IPChain",
    "FullName": "IPChain (IPC)"
  },
  {
    "Symbol": "SHOW",
    "CoinName": "ShowCoin",
    "FullName": "ShowCoin (SHOW)"
  },
  {
    "Symbol": "STC",
    "CoinName": "StarChain",
    "FullName": "StarChain (STC)"
  },
  {
    "Symbol": "AIT",
    "CoinName": "AIChain Token",
    "FullName": "AIChain Token (AIT)"
  },
  {
    "Symbol": "STQ",
    "CoinName": "Storiqa Token",
    "FullName": "Storiqa Token (STQ)"
  },
  {
    "Symbol": "ALT",
    "CoinName": "ALTcoin",
    "FullName": "ALTcoin (ALT)"
  },
  {
    "Symbol": "CXP",
    "CoinName": "Caixa Pay",
    "FullName": "Caixa Pay (CXP)"
  },
  {
    "Symbol": "KB3",
    "CoinName": "B3Coin",
    "FullName": "B3Coin (KB3)"
  },
  {
    "Symbol": "FDX",
    "CoinName": "fidentiaX",
    "FullName": "fidentiaX (FDX)"
  },
  {
    "Symbol": "KREDS",
    "CoinName": "KREDS",
    "FullName": "KREDS (KREDS)"
  },
  {
    "Symbol": "EQL",
    "CoinName": "EQUAL",
    "FullName": "EQUAL (EQL)"
  },
  {
    "Symbol": "GAI",
    "CoinName": "GraphGrail AI",
    "FullName": "GraphGrail AI (GAI)"
  },
  {
    "Symbol": "VULC",
    "CoinName": "Vulcano",
    "FullName": "Vulcano (VULC)"
  },
  {
    "Symbol": "DVTC",
    "CoinName": "DivotyCoin",
    "FullName": "DivotyCoin (DVTC)"
  },
  {
    "Symbol": "DADI",
    "CoinName": "Edge",
    "FullName": "Edge (DADI)"
  },
  {
    "Symbol": "MGGT",
    "CoinName": "Maggie Token",
    "FullName": "Maggie Token (MGGT)"
  },
  {
    "Symbol": "TOKC",
    "CoinName": "Tokyo Coin",
    "FullName": "Tokyo Coin (TOKC)"
  },
  {
    "Symbol": "UNRC",
    "CoinName": "UniversalRoyalCoin",
    "FullName": "UniversalRoyalCoin (UNRC)"
  },
  {
    "Symbol": "BBP",
    "CoinName": "BiblePay",
    "FullName": "BiblePay (BBP)"
  },
  {
    "Symbol": "NOX",
    "CoinName": "NITRO",
    "FullName": "NITRO (NOX)"
  },
  {
    "Symbol": "HYS",
    "CoinName": "Heiss Shares",
    "FullName": "Heiss Shares (HYS)"
  },
  {
    "Symbol": "LCWP",
    "CoinName": "LiteCoinW Plus",
    "FullName": "LiteCoinW Plus (LCWP)"
  },
  {
    "Symbol": "NAVI",
    "CoinName": "NaviAddress",
    "FullName": "NaviAddress (NAVI)"
  },
  {
    "Symbol": "ADI",
    "CoinName": "Aditus",
    "FullName": "Aditus (ADI)"
  },
  {
    "Symbol": "VVI",
    "CoinName": "VV Coin",
    "FullName": "VV Coin (VVI)"
  },
  {
    "Symbol": "ANKORUS",
    "CoinName": "Ankorus Token",
    "FullName": "Ankorus Token (ANKORUS)"
  },
  {
    "Symbol": "IVC",
    "CoinName": "Investy Coin",
    "FullName": "Investy Coin (IVC)"
  },
  {
    "Symbol": "HLP",
    "CoinName": "Purpose Coin",
    "FullName": "Purpose Coin (HLP)"
  },
  {
    "Symbol": "VIN",
    "CoinName": "VinChain",
    "FullName": "VinChain (VIN)"
  },
  {
    "Symbol": "SHPING",
    "CoinName": "Shping Coin",
    "FullName": "Shping Coin (SHPING)"
  },
  {
    "Symbol": "PTR",
    "CoinName": "Petro",
    "FullName": "Petro (PTR)"
  },
  {
    "Symbol": "LCC",
    "CoinName": "LitecoinCash",
    "FullName": "LitecoinCash (LCC)"
  },
  {
    "Symbol": "VANY",
    "CoinName": "Vanywhere",
    "FullName": "Vanywhere (VANY)"
  },
  {
    "Symbol": "NOXB",
    "CoinName": "Noxbox",
    "FullName": "Noxbox (NOXB)"
  },
  {
    "Symbol": "BAX",
    "CoinName": "BABB",
    "FullName": "BABB (BAX)"
  },
  {
    "Symbol": "BERRY",
    "CoinName": "Rentberry",
    "FullName": "Rentberry (BERRY)"
  },
  {
    "Symbol": "FLIP",
    "CoinName": "BitFlip",
    "FullName": "BitFlip (FLIP)"
  },
  {
    "Symbol": "CLIN",
    "CoinName": "Clinicoin",
    "FullName": "Clinicoin (CLIN)"
  },
  {
    "Symbol": "GOOD",
    "CoinName": "Goodomy",
    "FullName": "Goodomy (GOOD)"
  },
  {
    "Symbol": "ENK",
    "CoinName": "Enkidu",
    "FullName": "Enkidu (ENK)"
  },
  {
    "Symbol": "ALX",
    "CoinName": "ALAX",
    "FullName": "ALAX (ALX)"
  },
  {
    "Symbol": "DTH",
    "CoinName": "Dether",
    "FullName": "Dether (DTH)"
  },
  {
    "Symbol": "SOC",
    "CoinName": "All Sports Coin",
    "FullName": "All Sports Coin (SOC)"
  },
  {
    "Symbol": "TDX",
    "CoinName": "Tidex Token",
    "FullName": "Tidex Token (TDX)"
  },
  {
    "Symbol": "LOTTO",
    "CoinName": "LottoCoin",
    "FullName": "LottoCoin (LOTTO)"
  },
  {
    "Symbol": "FUNK",
    "CoinName": "Cypherfunks Coin",
    "FullName": "Cypherfunks Coin (FUNK)"
  },
  {
    "Symbol": "LEAF",
    "CoinName": "LeafCoin",
    "FullName": "LeafCoin (LEAF)"
  },
  {
    "Symbol": "COMPD",
    "CoinName": "Compound Coin",
    "FullName": "Compound Coin (COMPD)"
  },
  {
    "Symbol": "BITCAR",
    "CoinName": "BitCar",
    "FullName": "BitCar (BITCAR)"
  },
  {
    "Symbol": "CLN",
    "CoinName": "Colu Local Network",
    "FullName": "Colu Local Network (CLN)"
  },
  {
    "Symbol": "ORYX",
    "CoinName": "OryxCoin",
    "FullName": "OryxCoin (ORYX)"
  },
  {
    "Symbol": "BASHC",
    "CoinName": "BashCoin",
    "FullName": "BashCoin (BASHC)"
  },
  {
    "Symbol": "DIGIF",
    "CoinName": "DigiFel",
    "FullName": "DigiFel (DIGIF)"
  },
  {
    "Symbol": "DGM",
    "CoinName": "DigiMoney",
    "FullName": "DigiMoney (DGM)"
  },
  {
    "Symbol": "CBS",
    "CoinName": "Cerberus",
    "FullName": "Cerberus (CBS)"
  },
  {
    "Symbol": "SVD",
    "CoinName": "savedroid",
    "FullName": "savedroid (SVD)"
  },
  {
    "Symbol": "PROOF",
    "CoinName": "PROVER",
    "FullName": "PROVER (PROOF)"
  },
  {
    "Symbol": "BTCH",
    "CoinName": "Bitcoin Hush",
    "FullName": "Bitcoin Hush (BTCH)"
  },
  {
    "Symbol": "redBUX",
    "CoinName": "redBUX",
    "FullName": "redBUX (redBUX)"
  },
  {
    "Symbol": "LIZ",
    "CoinName": "Lizus Payment",
    "FullName": "Lizus Payment (LIZ)"
  },
  {
    "Symbol": "CIF",
    "CoinName": "Crypto Improvement Fund",
    "FullName": "Crypto Improvement Fund (CIF)"
  },
  {
    "Symbol": "NCASH",
    "CoinName": "Nucleus Vision",
    "FullName": "Nucleus Vision (NCASH)"
  },
  {
    "Symbol": "SPD",
    "CoinName": "Stipend",
    "FullName": "Stipend (SPD)"
  },
  {
    "Symbol": "CMCT",
    "CoinName": "Crowd Machine",
    "FullName": "Crowd Machine (CMCT)"
  },
  {
    "Symbol": "RPUT",
    "CoinName": "Robin8 Profile Utility Token",
    "FullName": "Robin8 Profile Utility Token (RPUT)"
  },
  {
    "Symbol": "FILL",
    "CoinName": "Fillit",
    "FullName": "Fillit (FILL)"
  },
  {
    "Symbol": "XNK",
    "CoinName": "Ink Protocol",
    "FullName": "Ink Protocol (XNK)"
  },
  {
    "Symbol": "XYO",
    "CoinName": "XY Oracle",
    "FullName": "XY Oracle (XYO)"
  },
  {
    "Symbol": "PROPS",
    "CoinName": "Props",
    "FullName": "Props (PROPS)"
  },
  {
    "Symbol": "CEDEX",
    "CoinName": "CEDEX Coin",
    "FullName": "CEDEX Coin (CEDEX)"
  },
  {
    "Symbol": "FUNDP",
    "CoinName": "Fund Platform",
    "FullName": "Fund Platform (FUNDP)"
  },
  {
    "Symbol": "CEL",
    "CoinName": "Celsius Network",
    "FullName": "Celsius Network (CEL)"
  },
  {
    "Symbol": "CRDTS",
    "CoinName": "Credits",
    "FullName": "Credits (CRDTS)"
  },
  {
    "Symbol": "PUSHI",
    "CoinName": "Pushi",
    "FullName": "Pushi (PUSHI)"
  },
  {
    "Symbol": "BINS",
    "CoinName": "Bitsense",
    "FullName": "Bitsense (BINS)"
  },
  {
    "Symbol": "POKER",
    "CoinName": "PokerCoin",
    "FullName": "PokerCoin (POKER)"
  },
  {
    "Symbol": "AXYS",
    "CoinName": "Axys",
    "FullName": "Axys (AXYS)"
  },
  {
    "Symbol": "EVENC",
    "CoinName": "EvenCoin",
    "FullName": "EvenCoin (EVENC)"
  },
  {
    "Symbol": "BOLD",
    "CoinName": "Bold",
    "FullName": "Bold (BOLD)"
  },
  {
    "Symbol": "EXTN",
    "CoinName": "Extensive Coin",
    "FullName": "Extensive Coin (EXTN)"
  },
  {
    "Symbol": "DIG",
    "CoinName": "Dignity",
    "FullName": "Dignity (DIG)"
  },
  {
    "Symbol": "ETS",
    "CoinName": "ETH Share",
    "FullName": "ETH Share (ETS)"
  },
  {
    "Symbol": "LIPC",
    "CoinName": "LIpcoin",
    "FullName": "LIpcoin (LIPC)"
  },
  {
    "Symbol": "GOFF",
    "CoinName": "Gift Off Token",
    "FullName": "Gift Off Token (GOFF)"
  },
  {
    "Symbol": "HELL",
    "CoinName": "HELL COIN",
    "FullName": "HELL COIN (HELL)"
  },
  {
    "Symbol": "ELP",
    "CoinName": "Ellerium",
    "FullName": "Ellerium (ELP)"
  },
  {
    "Symbol": "ACAT",
    "CoinName": "Alphacat",
    "FullName": "Alphacat (ACAT)"
  },
  {
    "Symbol": "RKT",
    "CoinName": "Rock Token",
    "FullName": "Rock Token (RKT)"
  },
  {
    "Symbol": "ELI",
    "CoinName": "GoCrypto",
    "FullName": "GoCrypto (ELI)"
  },
  {
    "Symbol": "CO2",
    "CoinName": "CO2 Token",
    "FullName": "CO2 Token (CO2)"
  },
  {
    "Symbol": "INVOX",
    "CoinName": "Invox Finance",
    "FullName": "Invox Finance (INVOX)"
  },
  {
    "Symbol": "ACTN",
    "CoinName": "Action Coin",
    "FullName": "Action Coin (ACTN)"
  },
  {
    "Symbol": "LTCH",
    "CoinName": "Litecoin Cash",
    "FullName": "Litecoin Cash (LTCH)"
  },
  {
    "Symbol": "ZUP",
    "CoinName": "Zupply Token",
    "FullName": "Zupply Token (ZUP)"
  },
  {
    "Symbol": "USCOIN",
    "CoinName": "USCoin",
    "FullName": "USCoin (USCOIN)"
  },
  {
    "Symbol": "KIND",
    "CoinName": "Kind Ads",
    "FullName": "Kind Ads (KIND)"
  },
  {
    "Symbol": "BCHT",
    "CoinName": "Blockchain Terminal",
    "FullName": "Blockchain Terminal (BCHT)"
  },
  {
    "Symbol": "CLO",
    "CoinName": "Callisto Network",
    "FullName": "Callisto Network (CLO)"
  },
  {
    "Symbol": "CURI",
    "CoinName": "Curium",
    "FullName": "Curium (CURI)"
  },
  {
    "Symbol": "ELIC",
    "CoinName": "Elicoin",
    "FullName": "Elicoin (ELIC)"
  },
  {
    "Symbol": "MOAT",
    "CoinName": "Mother Of All Tokens",
    "FullName": "Mother Of All Tokens (MOAT)"
  },
  {
    "Symbol": "BBI",
    "CoinName": "BelugaPay",
    "FullName": "BelugaPay (BBI)"
  },
  {
    "Symbol": "ENTRC",
    "CoinName": "ENTER COIN",
    "FullName": "ENTER COIN (ENTRC)"
  },
  {
    "Symbol": "BTCGO",
    "CoinName": "BitcoinGo",
    "FullName": "BitcoinGo (BTCGO)"
  },
  {
    "Symbol": "XTROPTIONS",
    "CoinName": "TROPTIONS",
    "FullName": "TROPTIONS (XTROPTIONS)"
  },
  {
    "Symbol": "KNW",
    "CoinName": "Knowledge",
    "FullName": "Knowledge (KNW)"
  },
  {
    "Symbol": "PGC",
    "CoinName": "Pegascoin",
    "FullName": "Pegascoin (PGC)"
  },
  {
    "Symbol": "BIT",
    "CoinName": "BitRewards",
    "FullName": "BitRewards (BIT)"
  },
  {
    "Symbol": "DATX",
    "CoinName": "DATx",
    "FullName": "DATx (DATX)"
  },
  {
    "Symbol": "PKC",
    "CoinName": "Pikciochain",
    "FullName": "Pikciochain (PKC)"
  },
  {
    "Symbol": "SQOIN",
    "CoinName": "StasyQ",
    "FullName": "StasyQ (SQOIN)"
  },
  {
    "Symbol": "TBAR",
    "CoinName": "Titanium BAR",
    "FullName": "Titanium BAR (TBAR)"
  },
  {
    "Symbol": "TAN",
    "CoinName": "Taklimakan",
    "FullName": "Taklimakan (TAN)"
  },
  {
    "Symbol": "CPL",
    "CoinName": "CoinPlace Token",
    "FullName": "CoinPlace Token (CPL)"
  },
  {
    "Symbol": "TUBE",
    "CoinName": "BitTube",
    "FullName": "BitTube (TUBE)"
  },
  {
    "Symbol": "AUTO",
    "CoinName": "Cube",
    "FullName": "Cube (AUTO)"
  },
  {
    "Symbol": "OMX",
    "CoinName": "Project Shivom",
    "FullName": "Project Shivom (OMX)"
  },
  {
    "Symbol": "TRCK",
    "CoinName": "Truckcoin",
    "FullName": "Truckcoin (TRCK)"
  },
  {
    "Symbol": "TOMO",
    "CoinName": "TomoChain",
    "FullName": "TomoChain (TOMO)"
  },
  {
    "Symbol": "XAYA",
    "CoinName": "XAYA",
    "FullName": "XAYA (XAYA)"
  },
  {
    "Symbol": "MBM",
    "CoinName": "MobileBridge Momentum",
    "FullName": "MobileBridge Momentum (MBM)"
  },
  {
    "Symbol": "INVC",
    "CoinName": "Invacio",
    "FullName": "Invacio (INVC)"
  },
  {
    "Symbol": "W3C",
    "CoinName": "W3Coin",
    "FullName": "W3Coin (W3C)"
  },
  {
    "Symbol": "DIN",
    "CoinName": "Dinero",
    "FullName": "Dinero (DIN)"
  },
  {
    "Symbol": "INSTAR",
    "CoinName": "Insights Network",
    "FullName": "Insights Network (INSTAR)"
  },
  {
    "Symbol": "CHP",
    "CoinName": "CoinPoker Token",
    "FullName": "CoinPoker Token (CHP)"
  },
  {
    "Symbol": "PSD",
    "CoinName": "Poseidon",
    "FullName": "Poseidon (PSD)"
  },
  {
    "Symbol": "J8T",
    "CoinName": "JET8",
    "FullName": "JET8 (J8T)"
  },
  {
    "Symbol": "LELE",
    "CoinName": "Lelecoin",
    "FullName": "Lelecoin (LELE)"
  },
  {
    "Symbol": "DROP",
    "CoinName": "Dropil",
    "FullName": "Dropil (DROP)"
  },
  {
    "Symbol": "AKA",
    "CoinName": "Akroma",
    "FullName": "Akroma (AKA)"
  },
  {
    "Symbol": "SHIP",
    "CoinName": "ShipChain",
    "FullName": "ShipChain (SHIP)"
  },
  {
    "Symbol": "IHT",
    "CoinName": "I-House Token",
    "FullName": "I-House Token (IHT)"
  },
  {
    "Symbol": "LCS",
    "CoinName": "LocalCoinSwap",
    "FullName": "LocalCoinSwap (LCS)"
  },
  {
    "Symbol": "LALA",
    "CoinName": "LaLa World",
    "FullName": "LaLa World (LALA)"
  },
  {
    "Symbol": "LEDU",
    "CoinName": "Education Ecosystem",
    "FullName": "Education Ecosystem (LEDU)"
  },
  {
    "Symbol": "FOXT",
    "CoinName": "Fox Trading",
    "FullName": "Fox Trading (FOXT)"
  },
  {
    "Symbol": "ETKN",
    "CoinName": "EasyToken",
    "FullName": "EasyToken (ETKN)"
  },
  {
    "Symbol": "ROX",
    "CoinName": "Robotina",
    "FullName": "Robotina (ROX)"
  },
  {
    "Symbol": "ADM",
    "CoinName": "ADAMANT Messenger",
    "FullName": "ADAMANT Messenger (ADM)"
  },
  {
    "Symbol": "AMBT",
    "CoinName": "AMBT Token",
    "FullName": "AMBT Token (AMBT)"
  },
  {
    "Symbol": "BTRM",
    "CoinName": "Betrium Token",
    "FullName": "Betrium Token (BTRM)"
  },
  {
    "Symbol": "MANNA",
    "CoinName": "Manna",
    "FullName": "Manna (MANNA)"
  },
  {
    "Symbol": "ePRX",
    "CoinName": "eProxy",
    "FullName": "eProxy (ePRX)"
  },
  {
    "Symbol": "HMC",
    "CoinName": "Hi Mutual Society",
    "FullName": "Hi Mutual Society (HMC)"
  },
  {
    "Symbol": "ZIX",
    "CoinName": "ZIX Token",
    "FullName": "ZIX Token (ZIX)"
  },
  {
    "Symbol": "ELEC",
    "CoinName": "Electrify.Asia",
    "FullName": "Electrify.Asia (ELEC)"
  },
  {
    "Symbol": "ORGT",
    "CoinName": "Organic Token",
    "FullName": "Organic Token (ORGT)"
  },
  {
    "Symbol": "PAN",
    "CoinName": "Pantos",
    "FullName": "Pantos (PAN)"
  },
  {
    "Symbol": "BOTC",
    "CoinName": "BotChain",
    "FullName": "BotChain (BOTC)"
  },
  {
    "Symbol": "VIEW",
    "CoinName": "Viewly",
    "FullName": "Viewly (VIEW)"
  },
  {
    "Symbol": "OKOIN",
    "CoinName": "OKOIN",
    "FullName": "OKOIN (OKOIN)"
  },
  {
    "Symbol": "ADK",
    "CoinName": "Aidos Kuneen",
    "FullName": "Aidos Kuneen (ADK)"
  },
  {
    "Symbol": "ESS",
    "CoinName": "Essentia",
    "FullName": "Essentia (ESS)"
  },
  {
    "Symbol": "VIT",
    "CoinName": "Vision Industry Token",
    "FullName": "Vision Industry Token (VIT)"
  },
  {
    "Symbol": "SERA",
    "CoinName": "Seraph",
    "FullName": "Seraph (SERA)"
  },
  {
    "Symbol": "BLN",
    "CoinName": "Bulleon",
    "FullName": "Bulleon (BLN)"
  },
  {
    "Symbol": "AET",
    "CoinName": "AfterEther",
    "FullName": "AfterEther (AET)"
  },
  {
    "Symbol": "CMOS",
    "CoinName": "Cosmo",
    "FullName": "Cosmo (CMOS)"
  },
  {
    "Symbol": "PGN",
    "CoinName": "Pigeoncoin",
    "FullName": "Pigeoncoin (PGN)"
  },
  {
    "Symbol": "BMH",
    "CoinName": "BlockMesh",
    "FullName": "BlockMesh (BMH)"
  },
  {
    "Symbol": "REDN",
    "CoinName": "Reden",
    "FullName": "Reden (REDN)"
  },
  {
    "Symbol": "TLP",
    "CoinName": "TulipCoin",
    "FullName": "TulipCoin (TLP)"
  },
  {
    "Symbol": "GENS",
    "CoinName": "DAOstack",
    "FullName": "DAOstack (GENS)"
  },
  {
    "Symbol": "BSX",
    "CoinName": "Bitspace",
    "FullName": "Bitspace (BSX)"
  },
  {
    "Symbol": "BBN",
    "CoinName": "BBNCOIN",
    "FullName": "BBNCOIN (BBN)"
  },
  {
    "Symbol": "TDZ",
    "CoinName": "Tradelize",
    "FullName": "Tradelize (TDZ)"
  },
  {
    "Symbol": "PAVO",
    "CoinName": "Pavocoin",
    "FullName": "Pavocoin (PAVO)"
  },
  {
    "Symbol": "TUSD",
    "CoinName": "True USD",
    "FullName": "True USD (TUSD)"
  },
  {
    "Symbol": "LDN",
    "CoinName": "Lydiancoin",
    "FullName": "Lydiancoin (LDN)"
  },
  {
    "Symbol": "BUBO",
    "CoinName": "Budbo",
    "FullName": "Budbo (BUBO)"
  },
  {
    "Symbol": "USOAMIC",
    "CoinName": "USOAMIC",
    "FullName": "USOAMIC (USOAMIC)"
  },
  {
    "Symbol": "FLUZ",
    "CoinName": "FluzFluz",
    "FullName": "FluzFluz (FLUZ)"
  },
  {
    "Symbol": "IPSX",
    "CoinName": "IP Exchange",
    "FullName": "IP Exchange (IPSX)"
  },
  {
    "Symbol": "MIO",
    "CoinName": "Miner One token",
    "FullName": "Miner One token (MIO)"
  },
  {
    "Symbol": "AIC",
    "CoinName": "AI Crypto",
    "FullName": "AI Crypto (AIC)"
  },
  {
    "Symbol": "MITH",
    "CoinName": "Mithril",
    "FullName": "Mithril (MITH)"
  },
  {
    "Symbol": "BNN",
    "CoinName": "Banyan Network",
    "FullName": "Banyan Network (BNN)"
  },
  {
    "Symbol": "SPND",
    "CoinName": "Spindle",
    "FullName": "Spindle (SPND)"
  },
  {
    "Symbol": "FNO",
    "CoinName": "Fonero",
    "FullName": "Fonero (FNO)"
  },
  {
    "Symbol": "PAS",
    "CoinName": "Passive Coin",
    "FullName": "Passive Coin (PAS)"
  },
  {
    "Symbol": "CVTC",
    "CoinName": "CavatCoin",
    "FullName": "CavatCoin (CVTC)"
  },
  {
    "Symbol": "PLMT",
    "CoinName": "Pallium",
    "FullName": "Pallium (PLMT)"
  },
  {
    "Symbol": "NEXT",
    "CoinName": "Next.exchange Token",
    "FullName": "Next.exchange Token (NEXT)"
  },
  {
    "Symbol": "RNTB",
    "CoinName": "BitRent",
    "FullName": "BitRent (RNTB)"
  },
  {
    "Symbol": "XCLR",
    "CoinName": "ClearCoin",
    "FullName": "ClearCoin (XCLR)"
  },
  {
    "Symbol": "BPX",
    "CoinName": "BlitzPredict",
    "FullName": "BlitzPredict (BPX)"
  },
  {
    "Symbol": "SWTH",
    "CoinName": "Switcheo",
    "FullName": "Switcheo (SWTH)"
  },
  {
    "Symbol": "FDZ",
    "CoinName": "Friendz",
    "FullName": "Friendz (FDZ)"
  },
  {
    "Symbol": "VTN",
    "CoinName": "Voltroon",
    "FullName": "Voltroon (VTN)"
  },
  {
    "Symbol": "LION",
    "CoinName": "CoinLion",
    "FullName": "CoinLion (LION)"
  },
  {
    "Symbol": "MASP",
    "CoinName": "Market.space",
    "FullName": "Market.space (MASP)"
  },
  {
    "Symbol": "XTL",
    "CoinName": "Stellite",
    "FullName": "Stellite (XTL)"
  },
  {
    "Symbol": "UCN",
    "CoinName": "UC Coin",
    "FullName": "UC Coin (UCN)"
  },
  {
    "Symbol": "HUR",
    "CoinName": "Hurify",
    "FullName": "Hurify (HUR)"
  },
  {
    "Symbol": "BRIA",
    "CoinName": "Briacoin",
    "FullName": "Briacoin (BRIA)"
  },
  {
    "Symbol": "IC",
    "CoinName": "Ignition",
    "FullName": "Ignition (IC)"
  },
  {
    "Symbol": "ROI",
    "CoinName": "ROIcoin",
    "FullName": "ROIcoin (ROI)"
  },
  {
    "Symbol": "ETHPR",
    "CoinName": "Ethereum Premium",
    "FullName": "Ethereum Premium (ETHPR)"
  },
  {
    "Symbol": "MNB",
    "CoinName": "MoneyBag",
    "FullName": "MoneyBag (MNB)"
  },
  {
    "Symbol": "ACHC",
    "CoinName": "AchieveCoin",
    "FullName": "AchieveCoin (ACHC)"
  },
  {
    "Symbol": "BTL",
    "CoinName": "Bitrolium",
    "FullName": "Bitrolium (BTL)"
  },
  {
    "Symbol": "GOAL",
    "CoinName": "Goal Bonanza",
    "FullName": "Goal Bonanza (GOAL)"
  },
  {
    "Symbol": "RAC",
    "CoinName": "RAcoin",
    "FullName": "RAcoin (RAC)"
  },
  {
    "Symbol": "BEX",
    "CoinName": "BEX token",
    "FullName": "BEX token (BEX)"
  },
  {
    "Symbol": "HOLD",
    "CoinName": "HOLD",
    "FullName": "HOLD (HOLD)"
  },
  {
    "Symbol": "EZT",
    "CoinName": "EZToken",
    "FullName": "EZToken (EZT)"
  },
  {
    "Symbol": "VIC",
    "CoinName": "Victorium",
    "FullName": "Victorium (VIC)"
  },
  {
    "Symbol": "XCM",
    "CoinName": "CoinMetro",
    "FullName": "CoinMetro (XCM)"
  },
  {
    "Symbol": "NFN",
    "CoinName": "Nafen",
    "FullName": "Nafen (NFN)"
  },
  {
    "Symbol": "CEEK",
    "CoinName": "CEEK Smart VR Token",
    "FullName": "CEEK Smart VR Token (CEEK)"
  },
  {
    "Symbol": "WIIX",
    "CoinName": "Wiix",
    "FullName": "Wiix (WIIX)"
  },
  {
    "Symbol": "EOSDAC",
    "CoinName": "eosDAC",
    "FullName": "eosDAC (EOSDAC)"
  },
  {
    "Symbol": "BCI",
    "CoinName": "Bitcoin Interest",
    "FullName": "Bitcoin Interest (BCI)"
  },
  {
    "Symbol": "MEDIC",
    "CoinName": "MedicCoin",
    "FullName": "MedicCoin (MEDIC)"
  },
  {
    "Symbol": "BBCT",
    "CoinName": "TraDove B2BCoin",
    "FullName": "TraDove B2BCoin (BBCT)"
  },
  {
    "Symbol": "KWH",
    "CoinName": "KWHCoin",
    "FullName": "KWHCoin (KWH)"
  },
  {
    "Symbol": "VLD",
    "CoinName": "Valid",
    "FullName": "Valid (VLD)"
  },
  {
    "Symbol": "FTX",
    "CoinName": "FintruX",
    "FullName": "FintruX (FTX)"
  },
  {
    "Symbol": "GSI",
    "CoinName": "Globex SCI",
    "FullName": "Globex SCI (GSI)"
  },
  {
    "Symbol": "BDP",
    "CoinName": "Bidipass",
    "FullName": "Bidipass (BDP)"
  },
  {
    "Symbol": "FLMC",
    "CoinName": "FOLM coin",
    "FullName": "FOLM coin (FLMC)"
  },
  {
    "Symbol": "ALPS",
    "CoinName": "Alpenschillling",
    "FullName": "Alpenschillling (ALPS)"
  },
  {
    "Symbol": "ZEL",
    "CoinName": "Zelcash",
    "FullName": "Zelcash (ZEL)"
  },
  {
    "Symbol": "BKC",
    "CoinName": "Balkancoin",
    "FullName": "Balkancoin (BKC)"
  },
  {
    "Symbol": "BITG",
    "CoinName": "BitGreen",
    "FullName": "BitGreen (BITG)"
  },
  {
    "Symbol": "DEV",
    "CoinName": "Deviant Coin",
    "FullName": "Deviant Coin (DEV)"
  },
  {
    "Symbol": "CHT",
    "CoinName": "Countinghouse Fund",
    "FullName": "Countinghouse Fund (CHT)"
  },
  {
    "Symbol": "GREEN",
    "CoinName": "GreenX",
    "FullName": "GreenX (GREEN)"
  },
  {
    "Symbol": "ABJ",
    "CoinName": "Abjcoin",
    "FullName": "Abjcoin (ABJ)"
  },
  {
    "Symbol": "FTW",
    "CoinName": "FutureWorks",
    "FullName": "FutureWorks (FTW)"
  },
  {
    "Symbol": "RAP",
    "CoinName": "Rapture",
    "FullName": "Rapture (RAP)"
  },
  {
    "Symbol": "ARTE",
    "CoinName": "Artemine",
    "FullName": "Artemine (ARTE)"
  },
  {
    "Symbol": "ANI",
    "CoinName": "Animecoin",
    "FullName": "Animecoin (ANI)"
  },
  {
    "Symbol": "PHC",
    "CoinName": "Profit Hunters Coin",
    "FullName": "Profit Hunters Coin (PHC)"
  },
  {
    "Symbol": "ETHM",
    "CoinName": "Ethereum Meta",
    "FullName": "Ethereum Meta (ETHM)"
  },
  {
    "Symbol": "UBC",
    "CoinName": "Ubcoin",
    "FullName": "Ubcoin (UBC)"
  },
  {
    "Symbol": "NOKU",
    "CoinName": "NOKU Master token",
    "FullName": "NOKU Master token (NOKU)"
  },
  {
    "Symbol": "SENC",
    "CoinName": "Sentinel Chain",
    "FullName": "Sentinel Chain (SENC)"
  },
  {
    "Symbol": "PAT",
    "CoinName": "PATRON",
    "FullName": "PATRON (PAT)"
  },
  {
    "Symbol": "LIGER",
    "CoinName": "Ligercoin",
    "FullName": "Ligercoin (LIGER)"
  },
  {
    "Symbol": "CHFN",
    "CoinName": "NOKU CHF",
    "FullName": "NOKU CHF (CHFN)"
  },
  {
    "Symbol": "EURN",
    "CoinName": "NOKU EUR",
    "FullName": "NOKU EUR (EURN)"
  },
  {
    "Symbol": "LEU",
    "CoinName": "CryptoLEU",
    "FullName": "CryptoLEU (LEU)"
  },
  {
    "Symbol": "SWC",
    "CoinName": "Scanetchain Token",
    "FullName": "Scanetchain Token (SWC)"
  },
  {
    "Symbol": "ORS",
    "CoinName": "ORS Group",
    "FullName": "ORS Group (ORS)"
  },
  {
    "Symbol": "SEM",
    "CoinName": "Semux",
    "FullName": "Semux (SEM)"
  },
  {
    "Symbol": "DARX",
    "CoinName": "Bitdaric",
    "FullName": "Bitdaric (DARX)"
  },
  {
    "Symbol": "BBK",
    "CoinName": "BitBlocks",
    "FullName": "BitBlocks (BBK)"
  },
  {
    "Symbol": "NCT",
    "CoinName": "PolySwarm",
    "FullName": "PolySwarm (NCT)"
  },
  {
    "Symbol": "UWC",
    "CoinName": "Uwezocoin",
    "FullName": "Uwezocoin (UWC)"
  },
  {
    "Symbol": "UUU",
    "CoinName": "U Network",
    "FullName": "U Network (UUU)"
  },
  {
    "Symbol": "CPX",
    "CoinName": "Apex Token",
    "FullName": "Apex Token (CPX)"
  },
  {
    "Symbol": "EQC",
    "CoinName": "Ethereum Qchain Token",
    "FullName": "Ethereum Qchain Token (EQC)"
  },
  {
    "Symbol": "ADH",
    "CoinName": "Adhive",
    "FullName": "Adhive (ADH)"
  },
  {
    "Symbol": "ZLA",
    "CoinName": "Zilla",
    "FullName": "Zilla (ZLA)"
  },
  {
    "Symbol": "LIF",
    "CoinName": "Winding Tree",
    "FullName": "Winding Tree (LIF)"
  },
  {
    "Symbol": "EFX",
    "CoinName": "The Effect.ai",
    "FullName": "The Effect.ai (EFX)"
  },
  {
    "Symbol": "LND",
    "CoinName": "Lendingblock",
    "FullName": "Lendingblock (LND)"
  },
  {
    "Symbol": "MNRB",
    "CoinName": "MoneyRebel",
    "FullName": "MoneyRebel (MNRB)"
  },
  {
    "Symbol": "FTO",
    "CoinName": "FuturoCoin",
    "FullName": "FuturoCoin (FTO)"
  },
  {
    "Symbol": "HPAY",
    "CoinName": "HadePay",
    "FullName": "HadePay (HPAY)"
  },
  {
    "Symbol": "SIG",
    "CoinName": "Signal",
    "FullName": "Signal (SIG)"
  },
  {
    "Symbol": "CARE",
    "CoinName": "Carebit",
    "FullName": "Carebit (CARE)"
  },
  {
    "Symbol": "NZL",
    "CoinName": "Zealium",
    "FullName": "Zealium (NZL)"
  },
  {
    "Symbol": "TBT",
    "CoinName": "T-BOT",
    "FullName": "T-BOT (TBT)"
  },
  {
    "Symbol": "XMC",
    "CoinName": "Monero Classic",
    "FullName": "Monero Classic (XMC)"
  },
  {
    "Symbol": "OAK",
    "CoinName": "Acorn Collective",
    "FullName": "Acorn Collective (OAK)"
  },
  {
    "Symbol": "DML",
    "CoinName": "Decentralized Machine Learning",
    "FullName": "Decentralized Machine Learning (DML)"
  },
  {
    "Symbol": "GEM",
    "CoinName": "Gems",
    "FullName": "Gems (GEM)"
  },
  {
    "Symbol": "TIPS",
    "CoinName": "FedoraCoin",
    "FullName": "FedoraCoin (TIPS)"
  },
  {
    "Symbol": "MOS",
    "CoinName": "MOS Coin",
    "FullName": "MOS Coin (MOS)"
  },
  {
    "Symbol": "TBX",
    "CoinName": "Tokenbox",
    "FullName": "Tokenbox (TBX)"
  },
  {
    "Symbol": "PENTA",
    "CoinName": "Penta",
    "FullName": "Penta (PENTA)"
  },
  {
    "Symbol": "WCOIN",
    "CoinName": "WCoin",
    "FullName": "WCoin (WCOIN)"
  },
  {
    "Symbol": "CHARM",
    "CoinName": "Charm Coin",
    "FullName": "Charm Coin (CHARM)"
  },
  {
    "Symbol": "PROTON",
    "CoinName": "Proton",
    "FullName": "Proton (PROTON)"
  },
  {
    "Symbol": "DERO",
    "CoinName": "Dero",
    "FullName": "Dero (DERO)"
  },
  {
    "Symbol": "DEAL",
    "CoinName": "iDealCash",
    "FullName": "iDealCash (DEAL)"
  },
  {
    "Symbol": "JUMP",
    "CoinName": "Jumpcoin",
    "FullName": "Jumpcoin (JUMP)"
  },
  {
    "Symbol": "ZCO",
    "CoinName": "Zebi Coin",
    "FullName": "Zebi Coin (ZCO)"
  },
  {
    "Symbol": "KRL",
    "CoinName": "Kryll",
    "FullName": "Kryll (KRL)"
  },
  {
    "Symbol": "TRAXIA",
    "CoinName": "Traxia Membership Token",
    "FullName": "Traxia Membership Token (TRAXIA)"
  },
  {
    "Symbol": "SS",
    "CoinName": "Sharder",
    "FullName": "Sharder (SS)"
  },
  {
    "Symbol": "0XBTC",
    "CoinName": "0xBitcoin",
    "FullName": "0xBitcoin (0xBTC)"
  },
  {
    "Symbol": "XMO",
    "CoinName": "Monero Original",
    "FullName": "Monero Original (XMO)"
  },
  {
    "Symbol": "EDU",
    "CoinName": "EduCoin",
    "FullName": "EduCoin (EDU)"
  },
  {
    "Symbol": "PCL",
    "CoinName": "Peculium",
    "FullName": "Peculium (PCL)"
  },
  {
    "Symbol": "APH",
    "CoinName": "Aphelion",
    "FullName": "Aphelion (APH)"
  },
  {
    "Symbol": "NBAI",
    "CoinName": "Nebula AI",
    "FullName": "Nebula AI (NBAI)"
  },
  {
    "Symbol": "CVT",
    "CoinName": "CyberVein",
    "FullName": "CyberVein (CVT)"
  },
  {
    "Symbol": "TUT",
    "CoinName": "Tutellus",
    "FullName": "Tutellus (TUT)"
  },
  {
    "Symbol": "BETT",
    "CoinName": "Bettium",
    "FullName": "Bettium (BETT)"
  },
  {
    "Symbol": "NOAH",
    "CoinName": "NOAHCOIN",
    "FullName": "NOAHCOIN (NOAH)"
  },
  {
    "Symbol": "PAL",
    "CoinName": "PolicyPal Network",
    "FullName": "PolicyPal Network (PAL)"
  },
  {
    "Symbol": "ENU",
    "CoinName": "Enumivo",
    "FullName": "Enumivo (ENU)"
  },
  {
    "Symbol": "BFDT",
    "CoinName": "Befund",
    "FullName": "Befund (BFDT)"
  },
  {
    "Symbol": "KEP",
    "CoinName": "Kepler",
    "FullName": "Kepler (KEP)"
  },
  {
    "Symbol": "RUBY",
    "CoinName": "Rubius",
    "FullName": "Rubius (RUBY)"
  },
  {
    "Symbol": "CTKN",
    "CoinName": "Curaizon",
    "FullName": "Curaizon (CTKN)"
  },
  {
    "Symbol": "YUM",
    "CoinName": "Yumerium",
    "FullName": "Yumerium (YUM)"
  },
  {
    "Symbol": "GSC",
    "CoinName": "Global Social Chain",
    "FullName": "Global Social Chain (GSC)"
  },
  {
    "Symbol": "DESI",
    "CoinName": "Desico",
    "FullName": "Desico (DESI)"
  },
  {
    "Symbol": "FNP",
    "CoinName": "FlipNpik",
    "FullName": "FlipNpik (FNP)"
  },
  {
    "Symbol": "VLUX",
    "CoinName": "VLUX",
    "FullName": "VLUX (VLUX)"
  },
  {
    "Symbol": "SSH",
    "CoinName": "StreamSpace",
    "FullName": "StreamSpace (SSH)"
  },
  {
    "Symbol": "XBI",
    "CoinName": "Bitcoin Incognito",
    "FullName": "Bitcoin Incognito (XBI)"
  },
  {
    "Symbol": "VRA",
    "CoinName": "Verasity",
    "FullName": "Verasity (VRA)"
  },
  {
    "Symbol": "MRK",
    "CoinName": "MARK.SPACE",
    "FullName": "MARK.SPACE (MRK)"
  },
  {
    "Symbol": "FRV",
    "CoinName": "Fitrova",
    "FullName": "Fitrova (FRV)"
  },
  {
    "Symbol": "WINS",
    "CoinName": "WinStars",
    "FullName": "WinStars (WINS)"
  },
  {
    "Symbol": "XES",
    "CoinName": "Proxeus",
    "FullName": "Proxeus (XES)"
  },
  {
    "Symbol": "RTB",
    "CoinName": "AB-CHAIN",
    "FullName": "AB-CHAIN (RTB)"
  },
  {
    "Symbol": "FXT",
    "CoinName": "FuzeX",
    "FullName": "FuzeX (FXT)"
  },
  {
    "Symbol": "DXC",
    "CoinName": "DixiCoin",
    "FullName": "DixiCoin (DXC)"
  },
  {
    "Symbol": "CHBR",
    "CoinName": "CryptoHub",
    "FullName": "CryptoHub (CHBR)"
  },
  {
    "Symbol": "OWD",
    "CoinName": "Owlstand",
    "FullName": "Owlstand (OWD)"
  },
  {
    "Symbol": "ELLI",
    "CoinName": "ElliotCoin",
    "FullName": "ElliotCoin (ELLI)"
  },
  {
    "Symbol": "DAN",
    "CoinName": "Daneel",
    "FullName": "Daneel (DAN)"
  },
  {
    "Symbol": "CSEN",
    "CoinName": "Consensus",
    "FullName": "Consensus (CSEN)"
  },
  {
    "Symbol": "UBT",
    "CoinName": "UniBright",
    "FullName": "UniBright (UBT)"
  },
  {
    "Symbol": "AMO",
    "CoinName": "AMO Coin",
    "FullName": "AMO Coin (AMO)"
  },
  {
    "Symbol": "LIVE",
    "CoinName": "Live Stars",
    "FullName": "Live Stars (LIVE)"
  },
  {
    "Symbol": "GBG",
    "CoinName": "Golos Gold",
    "FullName": "Golos Gold (GBG)"
  },
  {
    "Symbol": "CNN",
    "CoinName": "Content Neutrality Network",
    "FullName": "Content Neutrality Network (CNN)"
  },
  {
    "Symbol": "SHL",
    "CoinName": "Oyster Shell",
    "FullName": "Oyster Shell (SHL)"
  },
  {
    "Symbol": "SKM",
    "CoinName": "Skrumble Network",
    "FullName": "Skrumble Network (SKM)"
  },
  {
    "Symbol": "SHR",
    "CoinName": "ShareToken",
    "FullName": "ShareToken (SHR)"
  },
  {
    "Symbol": "UBEX",
    "CoinName": "Ubex",
    "FullName": "Ubex (UBEX)"
  },
  {
    "Symbol": "IVY",
    "CoinName": "IvyKoin",
    "FullName": "IvyKoin (IVY)"
  },
  {
    "Symbol": "KEC",
    "CoinName": "KEYCO",
    "FullName": "KEYCO (KEC)"
  },
  {
    "Symbol": "AMN",
    "CoinName": "Amon",
    "FullName": "Amon (AMN)"
  },
  {
    "Symbol": "SABR",
    "CoinName": "SABR Coin",
    "FullName": "SABR Coin (SABR)"
  },
  {
    "Symbol": "HWC",
    "CoinName": "HollyWoodCoin",
    "FullName": "HollyWoodCoin (HWC)"
  },
  {
    "Symbol": "BITGOLD",
    "CoinName": "bitGold",
    "FullName": "bitGold (BITGOLD)"
  },
  {
    "Symbol": "BITSILVER",
    "CoinName": "bitSilver",
    "FullName": "bitSilver (BITSILVER)"
  },
  {
    "Symbol": "GIN",
    "CoinName": "GINcoin",
    "FullName": "GINcoin (GIN)"
  },
  {
    "Symbol": "OPEN",
    "CoinName": "Open Platform",
    "FullName": "Open Platform (OPEN)"
  },
  {
    "Symbol": "NLX",
    "CoinName": "Nullex",
    "FullName": "Nullex (NLX)"
  },
  {
    "Symbol": "LNKC",
    "CoinName": "Linker Coin",
    "FullName": "Linker Coin (LNKC)"
  },
  {
    "Symbol": "MRPH",
    "CoinName": "Morpheus Network",
    "FullName": "Morpheus Network (MRPH)"
  },
  {
    "Symbol": "IOTX",
    "CoinName": "IoTeX Network",
    "FullName": "IoTeX Network (IOTX)"
  },
  {
    "Symbol": "STM",
    "CoinName": "Streamity",
    "FullName": "Streamity (STM)"
  },
  {
    "Symbol": "ITL",
    "CoinName": "Italian Lira",
    "FullName": "Italian Lira (ITL)"
  },
  {
    "Symbol": "AITT",
    "CoinName": "AITrading",
    "FullName": "AITrading (AITT)"
  },
  {
    "Symbol": "ITM",
    "CoinName": "intimate.io",
    "FullName": "intimate.io (ITM)"
  },
  {
    "Symbol": "VID",
    "CoinName": "VideoCoin",
    "FullName": "VideoCoin (VID)"
  },
  {
    "Symbol": "UCT",
    "CoinName": "Ubique Chain Of Things",
    "FullName": "Ubique Chain Of Things (UCT)"
  },
  {
    "Symbol": "SNTR",
    "CoinName": "Silent Notary",
    "FullName": "Silent Notary (SNTR)"
  },
  {
    "Symbol": "ZMR",
    "CoinName": "Monero 0",
    "FullName": "Monero 0 (ZMR)"
  },
  {
    "Symbol": "XMV",
    "CoinName": "MoneroV",
    "FullName": "MoneroV (XMV)"
  },
  {
    "Symbol": "NKN",
    "CoinName": "NKN",
    "FullName": "NKN (NKN)"
  },
  {
    "Symbol": "ELY",
    "CoinName": "Elysian",
    "FullName": "Elysian (ELY)"
  },
  {
    "Symbol": "HER",
    "CoinName": "Hero Node",
    "FullName": "Hero Node (HER)"
  },
  {
    "Symbol": "PARLAY",
    "CoinName": "Parlay",
    "FullName": "Parlay (PARLAY)"
  },
  {
    "Symbol": "SLX",
    "CoinName": "Slate",
    "FullName": "Slate (SLX)"
  },
  {
    "Symbol": "LTCC",
    "CoinName": "Listerclassic Coin",
    "FullName": "Listerclassic Coin (LTCC)"
  },
  {
    "Symbol": "RST",
    "CoinName": "REGA Risk Sharing Token",
    "FullName": "REGA Risk Sharing Token (RST)"
  },
  {
    "Symbol": "AMX",
    "CoinName": "Amero",
    "FullName": "Amero (AMX)"
  },
  {
    "Symbol": "TFC",
    "CoinName": "The Freedom Coin",
    "FullName": "The Freedom Coin (TFC)"
  },
  {
    "Symbol": "REPO",
    "CoinName": "Repo Coin",
    "FullName": "Repo Coin (REPO)"
  },
  {
    "Symbol": "IRC",
    "CoinName": "IRONCOIN",
    "FullName": "IRONCOIN (IRC)"
  },
  {
    "Symbol": "PLATC",
    "CoinName": "PlatinCoin",
    "FullName": "PlatinCoin (PLATC)"
  },
  {
    "Symbol": "OIO",
    "CoinName": "Online",
    "FullName": "Online (OIO)"
  },
  {
    "Symbol": "ANGL",
    "CoinName": "Angel Token",
    "FullName": "Angel Token (ANGL)"
  },
  {
    "Symbol": "ANTS",
    "CoinName": "ANTS Reloaded",
    "FullName": "ANTS Reloaded (ANTS)"
  },
  {
    "Symbol": "KNG",
    "CoinName": "BetKings",
    "FullName": "BetKings (KNG)"
  },
  {
    "Symbol": "STT",
    "CoinName": "Staramba",
    "FullName": "Staramba (STT)"
  },
  {
    "Symbol": "WYS",
    "CoinName": "Wysker",
    "FullName": "Wysker (WYS)"
  },
  {
    "Symbol": "COG",
    "CoinName": "Cognitio",
    "FullName": "Cognitio (COG)"
  },
  {
    "Symbol": "ZIPT",
    "CoinName": "Zippie",
    "FullName": "Zippie (ZIPT)"
  },
  {
    "Symbol": "OSA",
    "CoinName": "OSA Token",
    "FullName": "OSA Token (OSA)"
  },
  {
    "Symbol": "EXC",
    "CoinName": "Eximchain",
    "FullName": "Eximchain (EXC)"
  },
  {
    "Symbol": "BEN",
    "CoinName": "BitCOEN",
    "FullName": "BitCOEN (BEN)"
  },
  {
    "Symbol": "BCIO",
    "CoinName": "Blockchain.io",
    "FullName": "Blockchain.io (BCIO)"
  },
  {
    "Symbol": "BMK",
    "CoinName": "Benchmark",
    "FullName": "Benchmark (BMK)"
  },
  {
    "Symbol": "ROC",
    "CoinName": "Rasputin Online Coin",
    "FullName": "Rasputin Online Coin (ROC)"
  },
  {
    "Symbol": "BZNT",
    "CoinName": "Bezant",
    "FullName": "Bezant (BZNT)"
  },
  {
    "Symbol": "LYL",
    "CoinName": "LoyalCoin",
    "FullName": "LoyalCoin (LYL)"
  },
  {
    "Symbol": "PHI",
    "CoinName": "PHI Token",
    "FullName": "PHI Token (PHI)"
  },
  {
    "Symbol": "PMNT",
    "CoinName": "Paymon",
    "FullName": "Paymon (PMNT)"
  },
  {
    "Symbol": "BNTN",
    "CoinName": "Blocnation",
    "FullName": "Blocnation (BNTN)"
  },
  {
    "Symbol": "HYT",
    "CoinName": "HoryouToken",
    "FullName": "HoryouToken (HYT)"
  },
  {
    "Symbol": "GRMD",
    "CoinName": "GreenMed",
    "FullName": "GreenMed (GRMD)"
  },
  {
    "Symbol": "SSC",
    "CoinName": "SelfSell",
    "FullName": "SelfSell (SSC)"
  },
  {
    "Symbol": "BKT",
    "CoinName": "Blocktrade token",
    "FullName": "Blocktrade token (BKT)"
  },
  {
    "Symbol": "NCP",
    "CoinName": "Newton Coin",
    "FullName": "Newton Coin (NCP)"
  },
  {
    "Symbol": "MPT",
    "CoinName": "Media Protocol Token",
    "FullName": "Media Protocol Token (MPT)"
  },
  {
    "Symbol": "STAX",
    "CoinName": "Staxcoin",
    "FullName": "Staxcoin (STAX)"
  },
  {
    "Symbol": "MRN",
    "CoinName": "Mercoin",
    "FullName": "Mercoin (MRN)"
  },
  {
    "Symbol": "FOPA",
    "CoinName": "Fopacoin",
    "FullName": "Fopacoin (FOPA)"
  },
  {
    "Symbol": "CBC",
    "CoinName": "Casino Betting Coin",
    "FullName": "Casino Betting Coin (CBC)"
  },
  {
    "Symbol": "OOT",
    "CoinName": "Utrum",
    "FullName": "Utrum (OOT)"
  },
  {
    "Symbol": "NBC",
    "CoinName": "Niobium",
    "FullName": "Niobium (NBC)"
  },
  {
    "Symbol": "SIC",
    "CoinName": "Swisscoin",
    "FullName": "Swisscoin (SIC)"
  },
  {
    "Symbol": "ALG",
    "CoinName": "Algory",
    "FullName": "Algory (ALG)"
  },
  {
    "Symbol": "EXCC",
    "CoinName": "ExchangeCoin",
    "FullName": "ExchangeCoin (EXCC)"
  },
  {
    "Symbol": "REL",
    "CoinName": "Reliance",
    "FullName": "Reliance (REL)"
  },
  {
    "Symbol": "BTCN",
    "CoinName": "BitcoiNote",
    "FullName": "BitcoiNote (BTCN)"
  },
  {
    "Symbol": "EJAC",
    "CoinName": "EJA Coin",
    "FullName": "EJA Coin (EJAC)"
  },
  {
    "Symbol": "APIS",
    "CoinName": "APIS",
    "FullName": "APIS (APIS)"
  },
  {
    "Symbol": "XT3",
    "CoinName": "Xt3ch",
    "FullName": "Xt3ch (XT3)"
  },
  {
    "Symbol": "MGD",
    "CoinName": "MassGrid",
    "FullName": "MassGrid (MGD)"
  },
  {
    "Symbol": "VIG",
    "CoinName": "TheVig",
    "FullName": "TheVig (VIG)"
  },
  {
    "Symbol": "PLURA",
    "CoinName": "PluraCoin",
    "FullName": "PluraCoin (PLURA)"
  },
  {
    "Symbol": "SWACH",
    "CoinName": "Swachhcoin",
    "FullName": "Swachhcoin (SWACH)"
  },
  {
    "Symbol": "NWCN",
    "CoinName": "NowCoin",
    "FullName": "NowCoin (NWCN)"
  },
  {
    "Symbol": "EMAR",
    "CoinName": "EmaratCoin",
    "FullName": "EmaratCoin (EMAR)"
  },
  {
    "Symbol": "ICST",
    "CoinName": "ICST",
    "FullName": "ICST (ICST)"
  },
  {
    "Symbol": "XTNC",
    "CoinName": "XtendCash",
    "FullName": "XtendCash (XTNC)"
  },
  {
    "Symbol": "ROE",
    "CoinName": "Rover Coin",
    "FullName": "Rover Coin (ROE)"
  },
  {
    "Symbol": "LTCP",
    "CoinName": "LitecoinPro",
    "FullName": "LitecoinPro (LTCP)"
  },
  {
    "Symbol": "DKD",
    "CoinName": "Dekado",
    "FullName": "Dekado (DKD)"
  },
  {
    "Symbol": "LYNX",
    "CoinName": "Lynx",
    "FullName": "Lynx (LYNX)"
  },
  {
    "Symbol": "POSQ",
    "CoinName": "Poseidon Quark",
    "FullName": "Poseidon Quark (POSQ)"
  },
  {
    "Symbol": "YCE",
    "CoinName": "MYCE",
    "FullName": "MYCE (YCE)"
  },
  {
    "Symbol": "OCX",
    "CoinName": "Original Crypto Coin",
    "FullName": "Original Crypto Coin (OCX)"
  },
  {
    "Symbol": "STOR",
    "CoinName": "Self Storage Coin",
    "FullName": "Self Storage Coin (STOR)"
  },
  {
    "Symbol": "ARO",
    "CoinName": "Arionum",
    "FullName": "Arionum (ARO)"
  },
  {
    "Symbol": "BWS",
    "CoinName": "BitcoinWSpectrum",
    "FullName": "BitcoinWSpectrum (BWS)"
  },
  {
    "Symbol": "BTCC",
    "CoinName": "Bitcoin Core",
    "FullName": "Bitcoin Core (BTCC)"
  },
  {
    "Symbol": "GOLF",
    "CoinName": "GolfCoin",
    "FullName": "GolfCoin (GOLF)"
  },
  {
    "Symbol": "MUSE",
    "CoinName": "Muse",
    "FullName": "Muse (MUSE)"
  },
  {
    "Symbol": "OCT",
    "CoinName": "OracleChain",
    "FullName": "OracleChain (OCT)"
  },
  {
    "Symbol": "XCEL",
    "CoinName": "XcelTrip",
    "FullName": "XcelTrip (XCEL)"
  },
  {
    "Symbol": "ECH",
    "CoinName": "EthereCash",
    "FullName": "EthereCash (ECH)"
  },
  {
    "Symbol": "XMN",
    "CoinName": "Motion",
    "FullName": "Motion (XMN)"
  },
  {
    "Symbol": "PLUS1",
    "CoinName": "PlusOneCoin",
    "FullName": "PlusOneCoin (PLUS1)"
  },
  {
    "Symbol": "COI",
    "CoinName": "Coinnec",
    "FullName": "Coinnec (COI)"
  },
  {
    "Symbol": "CANDY",
    "CoinName": "UnicornGo Candy",
    "FullName": "UnicornGo Candy (CANDY)"
  },
  {
    "Symbol": "AXE",
    "CoinName": "Axe",
    "FullName": "Axe (AXE)"
  },
  {
    "Symbol": "SHARD",
    "CoinName": "ShardCoin",
    "FullName": "ShardCoin (SHARD)"
  },
  {
    "Symbol": "GMCN",
    "CoinName": "GambleCoin",
    "FullName": "GambleCoin (GMCN)"
  },
  {
    "Symbol": "TRVC",
    "CoinName": "Trivechain",
    "FullName": "Trivechain (TRVC)"
  },
  {
    "Symbol": "BITX",
    "CoinName": "BitScreener",
    "FullName": "BitScreener (BITX)"
  },
  {
    "Symbol": "SKRB",
    "CoinName": "Sakura Bloom",
    "FullName": "Sakura Bloom (SKRB)"
  },
  {
    "Symbol": "HFT",
    "CoinName": "Hirefreehands",
    "FullName": "Hirefreehands (HFT)"
  },
  {
    "Symbol": "OOW",
    "CoinName": "OPP Open WiFi",
    "FullName": "OPP Open WiFi (OOW)"
  },
  {
    "Symbol": "DTEM",
    "CoinName": "Dystem",
    "FullName": "Dystem (DTEM)"
  },
  {
    "Symbol": "TIP",
    "CoinName": "Tip Blockchain",
    "FullName": "Tip Blockchain (TIP)"
  },
  {
    "Symbol": "SOUND",
    "CoinName": "Inmusik",
    "FullName": "Inmusik (SOUND)"
  },
  {
    "Symbol": "HB",
    "CoinName": "HeartBout",
    "FullName": "HeartBout (HB)"
  },
  {
    "Symbol": "TRW",
    "CoinName": "Triwer",
    "FullName": "Triwer (TRW)"
  },
  {
    "Symbol": "IQN",
    "CoinName": "IQeon",
    "FullName": "IQeon (IQN)"
  },
  {
    "Symbol": "GIC",
    "CoinName": "Giant",
    "FullName": "Giant (GIC)"
  },
  {
    "Symbol": "EPIK",
    "CoinName": "EPIK Token",
    "FullName": "EPIK Token (EPIK)"
  },
  {
    "Symbol": "SPARTA",
    "CoinName": "Spartan Protocol Token",
    "FullName": "Spartan Protocol Token (SPARTA)"
  },
  {
    "Symbol": "ZMN",
    "CoinName": "ZMINE",
    "FullName": "ZMINE (ZMN)"
  },
  {
    "Symbol": "PNY",
    "CoinName": "Peony Coin",
    "FullName": "Peony Coin (PNY)"
  },
  {
    "Symbol": "SAFE",
    "CoinName": "SafeCoin",
    "FullName": "SafeCoin (SAFE)"
  },
  {
    "Symbol": "COU",
    "CoinName": "Couchain",
    "FullName": "Couchain (COU)"
  },
  {
    "Symbol": "ATH",
    "CoinName": "Atheios",
    "FullName": "Atheios (ATH)"
  },
  {
    "Symbol": "ABS",
    "CoinName": "Absolute Coin",
    "FullName": "Absolute Coin (ABS)"
  },
  {
    "Symbol": "VITAE",
    "CoinName": "Vitae",
    "FullName": "Vitae (VITAE)"
  },
  {
    "Symbol": "XET",
    "CoinName": "Eternal Token",
    "FullName": "Eternal Token (XET)"
  },
  {
    "Symbol": "0xDIARY",
    "CoinName": "The 0xDiary Token",
    "FullName": "The 0xDiary Token (0xDIARY)"
  },
  {
    "Symbol": "BSPM",
    "CoinName": "Bitcoin Supreme",
    "FullName": "Bitcoin Supreme (BSPM)"
  },
  {
    "Symbol": "TDP",
    "CoinName": "TrueDeck",
    "FullName": "TrueDeck (TDP)"
  },
  {
    "Symbol": "XGS",
    "CoinName": "GenesisX",
    "FullName": "GenesisX (XGS)"
  },
  {
    "Symbol": "XUEZ",
    "CoinName": "XUEZ",
    "FullName": "XUEZ (XUEZ)"
  },
  {
    "Symbol": "BIM",
    "CoinName": "BitminerCoin",
    "FullName": "BitminerCoin (BIM)"
  },
  {
    "Symbol": "WORX",
    "CoinName": "Worx",
    "FullName": "Worx (WORX)"
  },
  {
    "Symbol": "Dow",
    "CoinName": "DowCoin",
    "FullName": "DowCoin (Dow)"
  },
  {
    "Symbol": "HEXC",
    "CoinName": "HexCoin",
    "FullName": "HexCoin (HEXC)"
  },
  {
    "Symbol": "PYT",
    "CoinName": "Payther",
    "FullName": "Payther (PYT)"
  },
  {
    "Symbol": "DEI",
    "CoinName": "Deimos",
    "FullName": "Deimos (DEI)"
  },
  {
    "Symbol": "TPC",
    "CoinName": "TPCash",
    "FullName": "TPCash (TPC)"
  },
  {
    "Symbol": "OYS",
    "CoinName": "Oyster Platform",
    "FullName": "Oyster Platform (OYS)"
  },
  {
    "Symbol": "WEBC",
    "CoinName": "Webchain",
    "FullName": "Webchain (WEBC)"
  },
  {
    "Symbol": "JEX",
    "CoinName": "JEX Token",
    "FullName": "JEX Token (JEX)"
  },
  {
    "Symbol": "ILK",
    "CoinName": "Inlock",
    "FullName": "Inlock (ILK)"
  },
  {
    "Symbol": "RYO",
    "CoinName": "Ryo",
    "FullName": "Ryo (RYO)"
  },
  {
    "Symbol": "MUSD",
    "CoinName": "MUSDcoin",
    "FullName": "MUSDcoin (MUSD)"
  },
  {
    "Symbol": "URALS",
    "CoinName": "Urals Coin",
    "FullName": "Urals Coin (URALS)"
  },
  {
    "Symbol": "QWC",
    "CoinName": "Qwertycoin",
    "FullName": "Qwertycoin (QWC)"
  },
  {
    "Symbol": "WAB",
    "CoinName": "WABnetwork",
    "FullName": "WABnetwork (WAB)"
  },
  {
    "Symbol": "BITN",
    "CoinName": "Bitcoin Nova",
    "FullName": "Bitcoin Nova (BITN)"
  },
  {
    "Symbol": "DACASH",
    "CoinName": "DACash",
    "FullName": "DACash (DACASH)"
  },
  {
    "Symbol": "EUNO",
    "CoinName": "EUNO",
    "FullName": "EUNO (EUNO)"
  },
  {
    "Symbol": "KAAS",
    "CoinName": "KAASY.AI",
    "FullName": "KAASY.AI (KAAS)"
  },
  {
    "Symbol": "MMO",
    "CoinName": "MMOCoin",
    "FullName": "MMOCoin (MMO)"
  },
  {
    "Symbol": "DASC",
    "CoinName": "DasCoin",
    "FullName": "DasCoin (DASC)"
  },
  {
    "Symbol": "PGTS",
    "CoinName": "Puregold token",
    "FullName": "Puregold token (PGTS)"
  },
  {
    "Symbol": "MEDX",
    "CoinName": "Medibloc",
    "FullName": "Medibloc (MEDX)"
  },
  {
    "Symbol": "CET",
    "CoinName": "CoinEx Token",
    "FullName": "CoinEx Token (CET)"
  },
  {
    "Symbol": "SLST",
    "CoinName": "SmartLands",
    "FullName": "SmartLands (SLST)"
  },
  {
    "Symbol": "TGAME",
    "CoinName": "TrueGame",
    "FullName": "TrueGame (TGAME)"
  },
  {
    "Symbol": "SPN",
    "CoinName": "Sapien Network",
    "FullName": "Sapien Network (SPN)"
  },
  {
    "Symbol": "ZINC",
    "CoinName": "ZINC",
    "FullName": "ZINC (ZINC)"
  },
  {
    "Symbol": "KETAN",
    "CoinName": "Ketan",
    "FullName": "Ketan (KETAN)"
  },
  {
    "Symbol": "KBC",
    "CoinName": "Karatgold coin",
    "FullName": "Karatgold coin (KBC)"
  },
  {
    "Symbol": "INSUR",
    "CoinName": "InsurChain Coin",
    "FullName": "InsurChain Coin (INSUR)"
  },
  {
    "Symbol": "NIX",
    "CoinName": "NIX",
    "FullName": "NIX (NIX)"
  },
  {
    "Symbol": "ZCN",
    "CoinName": "0chain",
    "FullName": "0chain (ZCN)"
  },
  {
    "Symbol": "RPM",
    "CoinName": "Render Payment",
    "FullName": "Render Payment (RPM)"
  },
  {
    "Symbol": "DGX",
    "CoinName": "Digix Gold token",
    "FullName": "Digix Gold token (DGX)"
  },
  {
    "Symbol": "ITA",
    "CoinName": "Italocoin",
    "FullName": "Italocoin (ITA)"
  },
  {
    "Symbol": "NOM",
    "CoinName": "Finom NOM Token",
    "FullName": "Finom NOM Token (NOM)"
  },
  {
    "Symbol": "XSTC",
    "CoinName": "Safe Trade Coin",
    "FullName": "Safe Trade Coin (XSTC)"
  },
  {
    "Symbol": "U42",
    "CoinName": "You42",
    "FullName": "You42 (U42)"
  },
  {
    "Symbol": "EGCC",
    "CoinName": "Engine",
    "FullName": "Engine (EGCC)"
  },
  {
    "Symbol": "FREC",
    "CoinName": "Freyrchain",
    "FullName": "Freyrchain (FREC)"
  },
  {
    "Symbol": "DCC",
    "CoinName": "Distributed Credit Chain",
    "FullName": "Distributed Credit Chain (DCC)"
  },
  {
    "Symbol": "MOTI",
    "CoinName": "Motion",
    "FullName": "Motion (MOTI)"
  },
  {
    "Symbol": "MEET",
    "CoinName": "CoinMeet",
    "FullName": "CoinMeet (MEET)"
  },
  {
    "Symbol": "CPT",
    "CoinName": "Cryptaur",
    "FullName": "Cryptaur (CPT)"
  },
  {
    "Symbol": "PCO",
    "CoinName": "Pecunio",
    "FullName": "Pecunio (PCO)"
  },
  {
    "Symbol": "XPST",
    "CoinName": "PokerSports",
    "FullName": "PokerSports (XPST)"
  },
  {
    "Symbol": "MCV",
    "CoinName": "MCV Token",
    "FullName": "MCV Token (MCV)"
  },
  {
    "Symbol": "SCRL",
    "CoinName": "Scroll",
    "FullName": "Scroll (SCRL)"
  },
  {
    "Symbol": "CONI",
    "CoinName": "CoinBene",
    "FullName": "CoinBene (CONI)"
  },
  {
    "Symbol": "XPAT",
    "CoinName": "Bitnation Pangea",
    "FullName": "Bitnation Pangea (XPAT)"
  },
  {
    "Symbol": "MBLC",
    "CoinName": "Mont Blanc",
    "FullName": "Mont Blanc (MBLC)"
  },
  {
    "Symbol": "DIW",
    "CoinName": "DIWtoken",
    "FullName": "DIWtoken (DIW)"
  },
  {
    "Symbol": "JOINT",
    "CoinName": "Joint Ventures",
    "FullName": "Joint Ventures (JOINT)"
  },
  {
    "Symbol": "IDXM",
    "CoinName": "IDEX Membership",
    "FullName": "IDEX Membership (IDXM)"
  },
  {
    "Symbol": "CCO",
    "CoinName": "Ccore",
    "FullName": "Ccore (CCO)"
  },
  {
    "Symbol": "ATMI",
    "CoinName": "Atonomi",
    "FullName": "Atonomi (ATMI)"
  },
  {
    "Symbol": "TKA",
    "CoinName": "Tokia",
    "FullName": "Tokia (TKA)"
  },
  {
    "Symbol": "RMT",
    "CoinName": "SureRemit",
    "FullName": "SureRemit (RMT)"
  },
  {
    "Symbol": "OLT",
    "CoinName": "OneLedger",
    "FullName": "OneLedger (OLT)"
  },
  {
    "Symbol": "GETX",
    "CoinName": "Guaranteed Ethurance Token Extra",
    "FullName": "Guaranteed Ethurance Token Extra (GETX)"
  },
  {
    "Symbol": "IQ",
    "CoinName": "Everipedia",
    "FullName": "Everipedia (IQ)"
  },
  {
    "Symbol": "BWT",
    "CoinName": "Bittwatt",
    "FullName": "Bittwatt (BWT)"
  },
  {
    "Symbol": "EMV",
    "CoinName": "Ethereum Movie Venture",
    "FullName": "Ethereum Movie Venture (EMV)"
  },
  {
    "Symbol": "ESZ",
    "CoinName": "EtherSportz",
    "FullName": "EtherSportz (ESZ)"
  },
  {
    "Symbol": "TRAK",
    "CoinName": "TrakInvest",
    "FullName": "TrakInvest (TRAK)"
  },
  {
    "Symbol": "ZXC",
    "CoinName": "Oxcert",
    "FullName": "Oxcert (ZXC)"
  },
  {
    "Symbol": "BTRN",
    "CoinName": "Biotron",
    "FullName": "Biotron (BTRN)"
  },
  {
    "Symbol": "XMX",
    "CoinName": "XMax",
    "FullName": "XMax (XMX)"
  },
  {
    "Symbol": "VME",
    "CoinName": "TrueVett",
    "FullName": "TrueVett (VME)"
  },
  {
    "Symbol": "PERU",
    "CoinName": "PeruCoin",
    "FullName": "PeruCoin (PERU)"
  },
  {
    "Symbol": "VITE",
    "CoinName": "VITE",
    "FullName": "VITE (VITE)"
  },
  {
    "Symbol": "RNT",
    "CoinName": "OneRoot Network",
    "FullName": "OneRoot Network (RNT)"
  },
  {
    "Symbol": "BBO",
    "CoinName": "Bigbom",
    "FullName": "Bigbom (BBO)"
  },
  {
    "Symbol": "YUP",
    "CoinName": "Crowdholding",
    "FullName": "Crowdholding (YUP)"
  },
  {
    "Symbol": "SNIP",
    "CoinName": "LyrnAI",
    "FullName": "LyrnAI (SNIP)"
  },
  {
    "Symbol": "SAL",
    "CoinName": "SalPay",
    "FullName": "SalPay (SAL)"
  },
  {
    "Symbol": "RPL",
    "CoinName": "RocketPool",
    "FullName": "RocketPool (RPL)"
  },
  {
    "Symbol": "CARD",
    "CoinName": "Cardstack",
    "FullName": "Cardstack (CARD)"
  },
  {
    "Symbol": "LIKE",
    "CoinName": "LikeCoin",
    "FullName": "LikeCoin (LIKE)"
  },
  {
    "Symbol": "THRT",
    "CoinName": "ThriveToken",
    "FullName": "ThriveToken (THRT)"
  },
  {
    "Symbol": "GTK",
    "CoinName": "GoToken",
    "FullName": "GoToken (GTK)"
  },
  {
    "Symbol": "SKRP",
    "CoinName": "Skraps",
    "FullName": "Skraps (SKRP)"
  },
  {
    "Symbol": "AVH",
    "CoinName": "Animation Vision Cash",
    "FullName": "Animation Vision Cash (AVH)"
  },
  {
    "Symbol": "SCC",
    "CoinName": "StockChain Coin",
    "FullName": "StockChain Coin (SCC)"
  },
  {
    "Symbol": "HALO",
    "CoinName": "Halo Platform",
    "FullName": "Halo Platform (HALO)"
  },
  {
    "Symbol": "BSTN",
    "CoinName": "BitStation",
    "FullName": "BitStation (BSTN)"
  },
  {
    "Symbol": "PITCH",
    "CoinName": "PITCH",
    "FullName": "PITCH (PITCH)"
  },
  {
    "Symbol": "NANJ",
    "CoinName": "NANJCOIN",
    "FullName": "NANJCOIN (NANJ)"
  },
  {
    "Symbol": "PAXEX",
    "CoinName": "PAXEX",
    "FullName": "PAXEX (PAXEX)"
  },
  {
    "Symbol": "DIT",
    "CoinName": "Ditcoin",
    "FullName": "Ditcoin (DIT)"
  },
  {
    "Symbol": "AZART",
    "CoinName": "Azart",
    "FullName": "Azart (AZART)"
  },
  {
    "Symbol": "CENNZ",
    "CoinName": "Centrality Token",
    "FullName": "Centrality Token (CENNZ)"
  },
  {
    "Symbol": "RDC",
    "CoinName": "Ordocoin",
    "FullName": "Ordocoin (RDC)"
  },
  {
    "Symbol": "TTU",
    "CoinName": "TaTaTu",
    "FullName": "TaTaTu (TTU)"
  },
  {
    "Symbol": "FREE",
    "CoinName": "FREE coin",
    "FullName": "FREE coin (FREE)"
  },
  {
    "Symbol": "AOP",
    "CoinName": "Averopay",
    "FullName": "Averopay (AOP)"
  },
  {
    "Symbol": "XAP",
    "CoinName": "Apollon",
    "FullName": "Apollon (XAP)"
  },
  {
    "Symbol": "INTO",
    "CoinName": "Influ Token",
    "FullName": "Influ Token (INTO)"
  },
  {
    "Symbol": "RED",
    "CoinName": "Red Community Token",
    "FullName": "Red Community Token (RED)"
  },
  {
    "Symbol": "AIMS",
    "CoinName": "HighCastle Token",
    "FullName": "HighCastle Token (AIMS)"
  },
  {
    "Symbol": "TSC",
    "CoinName": "ThunderStake",
    "FullName": "ThunderStake (TSC)"
  },
  {
    "Symbol": "SEER",
    "CoinName": "SEER",
    "FullName": "SEER (SEER)"
  },
  {
    "Symbol": "SPLB",
    "CoinName": "SimpleBank",
    "FullName": "SimpleBank (SPLB)"
  },
  {
    "Symbol": "CMZ",
    "CoinName": "CRYPTOMAGZ",
    "FullName": "CRYPTOMAGZ (CMZ)"
  },
  {
    "Symbol": "NOBS",
    "CoinName": "No BS Crypto",
    "FullName": "No BS Crypto ($NOBS)"
  },
  {
    "Symbol": "HMN",
    "CoinName": "Harvest Masternode Coin",
    "FullName": "Harvest Masternode Coin (HMN)"
  },
  {
    "Symbol": "MHP",
    "CoinName": "MedicoHealth",
    "FullName": "MedicoHealth (MHP)"
  },
  {
    "Symbol": "HMD",
    "CoinName": "Homelend",
    "FullName": "Homelend (HMD)"
  },
  {
    "Symbol": "JSE",
    "CoinName": "JSEcoin",
    "FullName": "JSEcoin (JSE)"
  },
  {
    "Symbol": "IMGZ",
    "CoinName": "Imigize",
    "FullName": "Imigize (IMGZ)"
  },
  {
    "Symbol": "NYN",
    "CoinName": "NYNJA",
    "FullName": "NYNJA (NYN)"
  },
  {
    "Symbol": "IAM",
    "CoinName": "IAME Identity",
    "FullName": "IAME Identity (IAM)"
  },
  {
    "Symbol": "URB",
    "CoinName": "Urbit Data",
    "FullName": "Urbit Data (URB)"
  },
  {
    "Symbol": "CHART",
    "CoinName": "BetOnChart",
    "FullName": "BetOnChart (CHART)"
  },
  {
    "Symbol": "WHEN",
    "CoinName": "WhenHub",
    "FullName": "WhenHub (WHEN)"
  },
  {
    "Symbol": "SFT",
    "CoinName": "SportsFix",
    "FullName": "SportsFix (SFT)"
  },
  {
    "Symbol": "ORBIS",
    "CoinName": "Orbis",
    "FullName": "Orbis (ORBIS)"
  },
  {
    "Symbol": "BLKS",
    "CoinName": "Blockshipping",
    "FullName": "Blockshipping (BLKS)"
  },
  {
    "Symbol": "ETRNT",
    "CoinName": "Eternal Trusts",
    "FullName": "Eternal Trusts (ETRNT)"
  },
  {
    "Symbol": "ITR",
    "CoinName": "INTRO",
    "FullName": "INTRO (ITR)"
  },
  {
    "Symbol": "CHE",
    "CoinName": "Cache",
    "FullName": "Cache (CHE)"
  },
  {
    "Symbol": "ZEEW",
    "CoinName": "Zeew",
    "FullName": "Zeew (ZEEW)"
  },
  {
    "Symbol": "MEM",
    "CoinName": "Memority",
    "FullName": "Memority (MEM)"
  },
  {
    "Symbol": "QUA",
    "CoinName": "Quasa",
    "FullName": "Quasa (QUA)"
  },
  {
    "Symbol": "RSC",
    "CoinName": "Ronaldinho Soccer Coin",
    "FullName": "Ronaldinho Soccer Coin (RSC)"
  },
  {
    "Symbol": "ENTRY",
    "CoinName": "ENTRY",
    "FullName": "ENTRY (ENTRY)"
  },
  {
    "Symbol": "PHTC",
    "CoinName": "Photochain",
    "FullName": "Photochain (PHTC)"
  },
  {
    "Symbol": "WORK",
    "CoinName": "Aworker",
    "FullName": "Aworker (WORK)"
  },
  {
    "Symbol": "ZAZA",
    "CoinName": "ZAZA",
    "FullName": "ZAZA (ZAZA)"
  },
  {
    "Symbol": "DNET",
    "CoinName": "DeNet",
    "FullName": "DeNet (DNET)"
  },
  {
    "Symbol": "IDAP",
    "CoinName": "IDAP",
    "FullName": "IDAP (IDAP)"
  },
  {
    "Symbol": "HEAL",
    "CoinName": "Etheal",
    "FullName": "Etheal (HEAL)"
  },
  {
    "Symbol": "OFCR",
    "CoinName": "CryptoPolice",
    "FullName": "CryptoPolice (OFCR)"
  },
  {
    "Symbol": "SHPT",
    "CoinName": "Shipit",
    "FullName": "Shipit (SHPT)"
  },
  {
    "Symbol": "LED",
    "CoinName": "Terawatt",
    "FullName": "Terawatt (LED)"
  },
  {
    "Symbol": "PRLPAY",
    "CoinName": "PearlPay",
    "FullName": "PearlPay (PRLPAY)"
  },
  {
    "Symbol": "RBDT",
    "CoinName": "RoBust Defense Token",
    "FullName": "RoBust Defense Token (RBDT)"
  },
  {
    "Symbol": "SKYFT",
    "CoinName": "SKYFchain",
    "FullName": "SKYFchain (SKYFT)"
  },
  {
    "Symbol": "TFLEX",
    "CoinName": "TrustedCars FLEX",
    "FullName": "TrustedCars FLEX (TFLEX)"
  },
  {
    "Symbol": "STRY",
    "CoinName": "STRYKZ",
    "FullName": "STRYKZ (STRY)"
  },
  {
    "Symbol": "FAN",
    "CoinName": "Fan360",
    "FullName": "Fan360 (FAN)"
  },
  {
    "Symbol": "GBTC",
    "CoinName": "GigTricks",
    "FullName": "GigTricks (GBTC)"
  },
  {
    "Symbol": "NBOX",
    "CoinName": "Unboxed",
    "FullName": "Unboxed (NBOX)"
  },
  {
    "Symbol": "BUD",
    "CoinName": "Buddy",
    "FullName": "Buddy (BUD)"
  },
  {
    "Symbol": "DBCCOIN",
    "CoinName": "Datablockchain",
    "FullName": "Datablockchain (DBCCOIN)"
  },
  {
    "Symbol": "K2G",
    "CoinName": "Kasko2go",
    "FullName": "Kasko2go (K2G)"
  },
  {
    "Symbol": "ARR",
    "CoinName": "ARROUND",
    "FullName": "ARROUND (ARR)"
  },
  {
    "Symbol": "GAMB",
    "CoinName": "GAMB",
    "FullName": "GAMB (GAMB)"
  },
  {
    "Symbol": "SPOT",
    "CoinName": "Spotcoin",
    "FullName": "Spotcoin (SPOT)"
  },
  {
    "Symbol": "VTUUR",
    "CoinName": "VTUUR",
    "FullName": "VTUUR (VTUUR)"
  },
  {
    "Symbol": "ETI",
    "CoinName": "EtherInc",
    "FullName": "EtherInc (ETI)"
  },
  {
    "Symbol": "FRECNX",
    "CoinName": "FreldoCoinX",
    "FullName": "FreldoCoinX (FRECNX)"
  },
  {
    "Symbol": "NOIA",
    "CoinName": "NOIA Network",
    "FullName": "NOIA Network (NOIA)"
  },
  {
    "Symbol": "LAX",
    "CoinName": "LAPO",
    "FullName": "LAPO (LAX)"
  },
  {
    "Symbol": "BOO",
    "CoinName": "BOOSTO",
    "FullName": "BOOSTO (BOO)"
  },
  {
    "Symbol": "DREAM",
    "CoinName": "DREAM",
    "FullName": "DREAM (DREAM)"
  },
  {
    "Symbol": "PTI",
    "CoinName": "Paytomat",
    "FullName": "Paytomat (PTI)"
  },
  {
    "Symbol": "LPC",
    "CoinName": "Little Phil",
    "FullName": "Little Phil (LPC)"
  },
  {
    "Symbol": "DYNO",
    "CoinName": "DYNO",
    "FullName": "DYNO (DYNO)"
  },
  {
    "Symbol": "MFX",
    "CoinName": "MFChain",
    "FullName": "MFChain (MFX)"
  },
  {
    "Symbol": "NOIZ",
    "CoinName": "NOIZ",
    "FullName": "NOIZ (NOIZ)"
  },
  {
    "Symbol": "SPIKE",
    "CoinName": "Spiking",
    "FullName": "Spiking (SPIKE)"
  },
  {
    "Symbol": "SGO",
    "CoinName": "Selfie GO",
    "FullName": "Selfie GO (SGO)"
  },
  {
    "Symbol": "RAWG",
    "CoinName": "RAWG",
    "FullName": "RAWG (RAWG)"
  },
  {
    "Symbol": "BDB",
    "CoinName": "Big Data Block",
    "FullName": "Big Data Block (BDB)"
  },
  {
    "Symbol": "ZNAQ",
    "CoinName": "ZNAQ",
    "FullName": "ZNAQ (ZNAQ)"
  },
  {
    "Symbol": "YBT",
    "CoinName": "YellowBetter",
    "FullName": "YellowBetter (YBT)"
  },
  {
    "Symbol": "OPET",
    "CoinName": "ÕpetFoundation",
    "FullName": "ÕpetFoundation (OPET)"
  },
  {
    "Symbol": "PSK",
    "CoinName": "Pool of Stake",
    "FullName": "Pool of Stake (PSK)"
  },
  {
    "Symbol": "COT",
    "CoinName": "CoTrader",
    "FullName": "CoTrader (COT)"
  },
  {
    "Symbol": "WPT",
    "CoinName": "Worldopo",
    "FullName": "Worldopo (WPT)"
  },
  {
    "Symbol": "ABELE",
    "CoinName": "Abele",
    "FullName": "Abele (ABELE)"
  },
  {
    "Symbol": "XEP",
    "CoinName": "ephelants360",
    "FullName": "ephelants360 (XEP)"
  },
  {
    "Symbol": "ARBT",
    "CoinName": "ARBITRAGE",
    "FullName": "ARBITRAGE (ARBT)"
  },
  {
    "Symbol": "OMI",
    "CoinName": "ECOMI",
    "FullName": "ECOMI (OMI)"
  },
  {
    "Symbol": "BILL",
    "CoinName": "TillBilly",
    "FullName": "TillBilly (BILL)"
  },
  {
    "Symbol": "ST",
    "CoinName": "Scienceroot",
    "FullName": "Scienceroot (ST)"
  },
  {
    "Symbol": "XDT",
    "CoinName": "Dataeum",
    "FullName": "Dataeum (XDT)"
  },
  {
    "Symbol": "WPP",
    "CoinName": "Green Energy Token",
    "FullName": "Green Energy Token (WPP)"
  },
  {
    "Symbol": "ASTO",
    "CoinName": "Aston",
    "FullName": "Aston (ASTO)"
  },
  {
    "Symbol": "SLT",
    "CoinName": "Social Lending Network",
    "FullName": "Social Lending Network (SLT)"
  },
  {
    "Symbol": "APL",
    "CoinName": "Apollo Currency",
    "FullName": "Apollo Currency (APL)"
  },
  {
    "Symbol": "HDAC",
    "CoinName": "Hdac",
    "FullName": "Hdac (HDAC)"
  },
  {
    "Symbol": "CCCX",
    "CoinName": "Clipper Coin Capital",
    "FullName": "Clipper Coin Capital (CCCX)"
  },
  {
    "Symbol": "VRH",
    "CoinName": "Virtual Rehab",
    "FullName": "Virtual Rehab (VRH)"
  },
  {
    "Symbol": "AEN",
    "CoinName": "Aenco",
    "FullName": "Aenco (AEN)"
  },
  {
    "Symbol": "SOLID",
    "CoinName": "Solidified",
    "FullName": "Solidified (SOLID)"
  },
  {
    "Symbol": "VANIG",
    "CoinName": "VANIG",
    "FullName": "VANIG (VANIG)"
  },
  {
    "Symbol": "AIRE",
    "CoinName": "Tokenaire",
    "FullName": "Tokenaire (AIRE)"
  },
  {
    "Symbol": "GMA",
    "CoinName": "Goldchip Mining Asset",
    "FullName": "Goldchip Mining Asset (GMA)"
  },
  {
    "Symbol": "WMB",
    "CoinName": "WatermelonBlock",
    "FullName": "WatermelonBlock (WMB)"
  },
  {
    "Symbol": "MVU",
    "CoinName": "meVu",
    "FullName": "meVu (MVU)"
  },
  {
    "Symbol": "TLNT",
    "CoinName": "Talent Token",
    "FullName": "Talent Token (TLNT)"
  },
  {
    "Symbol": "GLDR",
    "CoinName": "Golder Coin",
    "FullName": "Golder Coin (GLDR)"
  },
  {
    "Symbol": "IMU",
    "CoinName": "imusify",
    "FullName": "imusify (IMU)"
  },
  {
    "Symbol": "TRT",
    "CoinName": "TuurnT",
    "FullName": "TuurnT (TRT)"
  },
  {
    "Symbol": "CRS",
    "CoinName": "CRYSTALS",
    "FullName": "CRYSTALS (CRS)"
  },
  {
    "Symbol": "YON",
    "CoinName": "YondoCoin",
    "FullName": "YondoCoin (YON)"
  },
  {
    "Symbol": "URT",
    "CoinName": "Universal Recognition Token",
    "FullName": "Universal Recognition Token (URT)"
  },
  {
    "Symbol": "QCX",
    "CoinName": "QuickX Protocol",
    "FullName": "QuickX Protocol (QCX)"
  },
  {
    "Symbol": "CRON",
    "CoinName": "Cryptocean",
    "FullName": "Cryptocean (CRON)"
  },
  {
    "Symbol": "DIP",
    "CoinName": "Etherisc",
    "FullName": "Etherisc (DIP)"
  },
  {
    "Symbol": "PROD",
    "CoinName": "Productivist",
    "FullName": "Productivist (PROD)"
  },
  {
    "Symbol": "REDC",
    "CoinName": "RedCab",
    "FullName": "RedCab (REDC)"
  },
  {
    "Symbol": "ZCHN",
    "CoinName": "Zichain",
    "FullName": "Zichain (ZCHN)"
  },
  {
    "Symbol": "TTV",
    "CoinName": "TV-TWO",
    "FullName": "TV-TWO (TTV)"
  },
  {
    "Symbol": "OICOIN",
    "CoinName": "Osmium Investment Coin",
    "FullName": "Osmium Investment Coin (OICOIN)"
  },
  {
    "Symbol": "ENQ",
    "CoinName": "Enecuum",
    "FullName": "Enecuum (ENQ)"
  },
  {
    "Symbol": "DTN",
    "CoinName": "Datareum",
    "FullName": "Datareum (DTN)"
  },
  {
    "Symbol": "IDM",
    "CoinName": "IDM",
    "FullName": "IDM (IDM)"
  },
  {
    "Symbol": "SIDT",
    "CoinName": "SID Token",
    "FullName": "SID Token (SIDT)"
  },
  {
    "Symbol": "ISR",
    "CoinName": "Insureum",
    "FullName": "Insureum (ISR)"
  },
  {
    "Symbol": "CDPT",
    "CoinName": "Creditor Data Platform",
    "FullName": "Creditor Data Platform (CDPT)"
  },
  {
    "Symbol": "CRGO",
    "CoinName": "CargoCoin",
    "FullName": "CargoCoin (CRGO)"
  },
  {
    "Symbol": "QRP",
    "CoinName": "Cryptics",
    "FullName": "Cryptics (QRP)"
  },
  {
    "Symbol": "TIIM",
    "CoinName": "TriipMiles",
    "FullName": "TriipMiles (TIIM)"
  },
  {
    "Symbol": "BNR",
    "CoinName": "BiNeuro",
    "FullName": "BiNeuro (BNR)"
  },
  {
    "Symbol": "VRT",
    "CoinName": "Virtual Reality Technology",
    "FullName": "Virtual Reality Technology (VRT)"
  },
  {
    "Symbol": "ZCC1",
    "CoinName": "ZeroCarbon",
    "FullName": "ZeroCarbon (ZCC1)"
  },
  {
    "Symbol": "KRP",
    "CoinName": "Kryptoin",
    "FullName": "Kryptoin (KRP)"
  },
  {
    "Symbol": "OLE",
    "CoinName": "Olive",
    "FullName": "Olive (OLE)"
  },
  {
    "Symbol": "OKB",
    "CoinName": "Okex",
    "FullName": "Okex (OKB)"
  },
  {
    "Symbol": "AMLT",
    "CoinName": "AMLT",
    "FullName": "AMLT (AMLT)"
  },
  {
    "Symbol": "HGO",
    "CoinName": "HireGo",
    "FullName": "HireGo (HGO)"
  },
  {
    "Symbol": "TCOIN",
    "CoinName": "Talenthon",
    "FullName": "Talenthon (TCOIN)"
  },
  {
    "Symbol": "BZ",
    "CoinName": "Bit-Z",
    "FullName": "Bit-Z (BZ)"
  },
  {
    "Symbol": "PRA",
    "CoinName": "ProChain",
    "FullName": "ProChain (PRA)"
  },
  {
    "Symbol": "VLP",
    "CoinName": "Volpo",
    "FullName": "Volpo (VLP)"
  },
  {
    "Symbol": "ZIP",
    "CoinName": "Zipper",
    "FullName": "Zipper (ZIP)"
  },
  {
    "Symbol": "BTK",
    "CoinName": "Bostoken",
    "FullName": "Bostoken (BTK)"
  },
  {
    "Symbol": "KCASH",
    "CoinName": "Kcash",
    "FullName": "Kcash (KCASH)"
  },
  {
    "Symbol": "1WO",
    "CoinName": "1World",
    "FullName": "1World (1WO)"
  },
  {
    "Symbol": "ZB",
    "CoinName": "ZB",
    "FullName": "ZB (ZB)"
  },
  {
    "Symbol": "BOUTS",
    "CoinName": "BoutsPro",
    "FullName": "BoutsPro (BOUTS)"
  },
  {
    "Symbol": "EST",
    "CoinName": "ESports Chain",
    "FullName": "ESports Chain (EST)"
  },
  {
    "Symbol": "MODEX",
    "CoinName": "MODEX Token",
    "FullName": "MODEX Token (MODEX)"
  },
  {
    "Symbol": "OGT",
    "CoinName": "One Game",
    "FullName": "One Game (OGT)"
  },
  {
    "Symbol": "PLA",
    "CoinName": "PlayChip",
    "FullName": "PlayChip (PLA)"
  },
  {
    "Symbol": "NPER",
    "CoinName": "NPER",
    "FullName": "NPER (NPER)"
  },
  {
    "Symbol": "ATON",
    "CoinName": "Further Network",
    "FullName": "Further Network (ATON)"
  },
  {
    "Symbol": "EURS",
    "CoinName": "STASIS EURS",
    "FullName": "STASIS EURS (EURS)"
  },
  {
    "Symbol": "XCG",
    "CoinName": "Xchange",
    "FullName": "Xchange (XCG)"
  },
  {
    "Symbol": "BOONS",
    "CoinName": "BOONSCoin",
    "FullName": "BOONSCoin (BOONS)"
  },
  {
    "Symbol": "PCH",
    "CoinName": "POPCHAIN",
    "FullName": "POPCHAIN (PCH)"
  },
  {
    "Symbol": "ECOM",
    "CoinName": "Omnitude",
    "FullName": "Omnitude (ECOM)"
  },
  {
    "Symbol": "WIT",
    "CoinName": "Witcoin",
    "FullName": "Witcoin (WIT)"
  },
  {
    "Symbol": "OPU",
    "CoinName": "Opu Coin",
    "FullName": "Opu Coin (OPU)"
  },
  {
    "Symbol": "ETALON",
    "CoinName": "Etalon",
    "FullName": "Etalon (ETALON)"
  },
  {
    "Symbol": "TICS",
    "CoinName": "CargoConX",
    "FullName": "CargoConX (TICS)"
  },
  {
    "Symbol": "ZPR",
    "CoinName": "ZPER",
    "FullName": "ZPER (ZPR)"
  },
  {
    "Symbol": "EXLT",
    "CoinName": "ExtraLovers",
    "FullName": "ExtraLovers (EXLT)"
  },
  {
    "Symbol": "ESTATE",
    "CoinName": "AgentMile",
    "FullName": "AgentMile (ESTATE)"
  },
  {
    "Symbol": "BLV",
    "CoinName": "Blockvest",
    "FullName": "Blockvest (BLV)"
  },
  {
    "Symbol": "RRC",
    "CoinName": "Recycling Regeneration Chain",
    "FullName": "Recycling Regeneration Chain (RRC)"
  },
  {
    "Symbol": "MPG",
    "CoinName": "Max Property Group",
    "FullName": "Max Property Group (MPG)"
  },
  {
    "Symbol": "QNTU",
    "CoinName": "Quanta",
    "FullName": "Quanta (QNTU)"
  },
  {
    "Symbol": "IG",
    "CoinName": "IG Token ",
    "FullName": "IG Token  (IG1)"
  },
  {
    "Symbol": "FML",
    "CoinName": "FormulA",
    "FullName": "FormulA (FML)"
  },
  {
    "Symbol": "TLU",
    "CoinName": "Irene Energy",
    "FullName": "Irene Energy (TLU)"
  },
  {
    "Symbol": "PSM",
    "CoinName": "Prasm",
    "FullName": "Prasm (PSM)"
  },
  {
    "Symbol": "MON",
    "CoinName": "MilionCoin",
    "FullName": "MilionCoin (MON)"
  },
  {
    "Symbol": "AUDC",
    "CoinName": "Aussie Digital",
    "FullName": "Aussie Digital (AUDC)"
  },
  {
    "Symbol": "NMH",
    "CoinName": "Namahe",
    "FullName": "Namahe (NMH)"
  },
  {
    "Symbol": "KST",
    "CoinName": "StarKST",
    "FullName": "StarKST (KST)"
  },
  {
    "Symbol": "DEL",
    "CoinName": "DelChain",
    "FullName": "DelChain (DEL)"
  },
  {
    "Symbol": "HIT",
    "CoinName": "HitChain",
    "FullName": "HitChain (HIT)"
  },
  {
    "Symbol": "PBLK",
    "CoinName": "PayBlock",
    "FullName": "PayBlock (PBLK)"
  },
  {
    "Symbol": "MDN",
    "CoinName": "MADANA",
    "FullName": "MADANA (MDN)"
  },
  {
    "Symbol": "TMTG",
    "CoinName": "The Midas Touch Gold",
    "FullName": "The Midas Touch Gold (TMTG)"
  },
  {
    "Symbol": "PRT",
    "CoinName": "Papusha",
    "FullName": "Papusha (PRT)"
  },
  {
    "Symbol": "COSM",
    "CoinName": "CosmoChain",
    "FullName": "CosmoChain (COSM)"
  },
  {
    "Symbol": "GPPT",
    "CoinName": "Pluto Project Coin",
    "FullName": "Pluto Project Coin (GPPT)"
  },
  {
    "Symbol": "LNL",
    "CoinName": "LunarLink",
    "FullName": "LunarLink (LNL)"
  },
  {
    "Symbol": "VRN",
    "CoinName": "Vernam",
    "FullName": "Vernam (VRN)"
  },
  {
    "Symbol": "BRNX",
    "CoinName": "Bronix",
    "FullName": "Bronix (BRNX)"
  },
  {
    "Symbol": "SRCOIN",
    "CoinName": "SRCoin",
    "FullName": "SRCoin (SRCOIN)"
  },
  {
    "Symbol": "RFT",
    "CoinName": "RYFTS",
    "FullName": "RYFTS (RFT)"
  },
  {
    "Symbol": "MMTM",
    "CoinName": "Momentum",
    "FullName": "Momentum (MMTM)"
  },
  {
    "Symbol": "XGH",
    "CoinName": "Golden Hash",
    "FullName": "Golden Hash (XGH)"
  },
  {
    "Symbol": "FXP",
    "CoinName": "FXPay",
    "FullName": "FXPay (FXP)"
  },
  {
    "Symbol": "DICEM",
    "CoinName": "DICE Money",
    "FullName": "DICE Money (DICEM)"
  },
  {
    "Symbol": "PASS",
    "CoinName": "Blockpass",
    "FullName": "Blockpass (PASS)"
  },
  {
    "Symbol": "HRO",
    "CoinName": "HEROIC.com",
    "FullName": "HEROIC.com (HRO)"
  },
  {
    "Symbol": "DGTX",
    "CoinName": "Digitex Futures",
    "FullName": "Digitex Futures (DGTX)"
  },
  {
    "Symbol": "BSCH",
    "CoinName": "BitSchool",
    "FullName": "BitSchool (BSCH)"
  },
  {
    "Symbol": "TRVR",
    "CoinName": "Trivver",
    "FullName": "Trivver (TRVR)"
  },
  {
    "Symbol": "PESA",
    "CoinName": "Credible",
    "FullName": "Credible (PESA)"
  },
  {
    "Symbol": "CLPX",
    "CoinName": "Chynge.net",
    "FullName": "Chynge.net (CLPX)"
  },
  {
    "Symbol": "DAOX",
    "CoinName": "Daox",
    "FullName": "Daox (DAOX)"
  },
  {
    "Symbol": "GLN",
    "CoinName": "Galion Token",
    "FullName": "Galion Token (GLN)"
  },
  {
    "Symbol": "AUK",
    "CoinName": "Aukcecoin",
    "FullName": "Aukcecoin (AUK)"
  },
  {
    "Symbol": "PCCM",
    "CoinName": "Poseidon Chain",
    "FullName": "Poseidon Chain (PCCM)"
  },
  {
    "Symbol": "TOPC",
    "CoinName": "Topchain",
    "FullName": "Topchain (TOPC)"
  },
  {
    "Symbol": "PLAN",
    "CoinName": "Plancoin",
    "FullName": "Plancoin (PLAN)"
  },
  {
    "Symbol": "EVER",
    "CoinName": "EverLife.AI",
    "FullName": "EverLife.AI (EVER)"
  },
  {
    "Symbol": "TRAID",
    "CoinName": "Traid",
    "FullName": "Traid (TRAID)"
  },
  {
    "Symbol": "BNTE",
    "CoinName": "Bountie",
    "FullName": "Bountie (BNTE)"
  },
  {
    "Symbol": "DPY",
    "CoinName": "Delphy",
    "FullName": "Delphy (DPY)"
  },
  {
    "Symbol": "FUNDZ",
    "CoinName": "FundFantasy",
    "FullName": "FundFantasy (FUNDZ)"
  },
  {
    "Symbol": "MIB",
    "CoinName": "Mobile Integrated Blockchain",
    "FullName": "Mobile Integrated Blockchain (MIB)"
  },
  {
    "Symbol": "BAAS",
    "CoinName": "BaaSid",
    "FullName": "BaaSid (BAAS)"
  },
  {
    "Symbol": "LYNK",
    "CoinName": "Lynked.World",
    "FullName": "Lynked.World (LYNK)"
  },
  {
    "Symbol": "TBC",
    "CoinName": "Trecento Blockchain Capital",
    "FullName": "Trecento Blockchain Capital (TBC)"
  },
  {
    "Symbol": "CCL",
    "CoinName": "CyClean",
    "FullName": "CyClean (CCL)"
  },
  {
    "Symbol": "HYC",
    "CoinName": "HYCON",
    "FullName": "HYCON (HYC)"
  },
  {
    "Symbol": "TCX",
    "CoinName": "T-Coin",
    "FullName": "T-Coin (TCX)"
  },
  {
    "Symbol": "HLD",
    "CoinName": "HyperLending",
    "FullName": "HyperLending (HLD)"
  },
  {
    "Symbol": "NUSD",
    "CoinName": "Nomin USD",
    "FullName": "Nomin USD (NUSD)"
  },
  {
    "Symbol": "TCHB",
    "CoinName": "Teachers Blockchain",
    "FullName": "Teachers Blockchain (TCHB)"
  },
  {
    "Symbol": "DAX",
    "CoinName": "DAEX",
    "FullName": "DAEX (DAX)"
  },
  {
    "Symbol": "BECH",
    "CoinName": "Beauty Chain",
    "FullName": "Beauty Chain (BECH)"
  },
  {
    "Symbol": "VEEN",
    "CoinName": "LIVEEN",
    "FullName": "LIVEEN (VEEN)"
  },
  {
    "Symbol": "CIC",
    "CoinName": "CIChain",
    "FullName": "CIChain (CIC)"
  },
  {
    "Symbol": "MIODIO",
    "CoinName": "MIODIOCOIN",
    "FullName": "MIODIOCOIN (MIODIO)"
  },
  {
    "Symbol": "MOV",
    "CoinName": "MovieCoin",
    "FullName": "MovieCoin (MOV)"
  },
  {
    "Symbol": "IHF",
    "CoinName": "Invictus Hyperion Fund",
    "FullName": "Invictus Hyperion Fund (IHF)"
  },
  {
    "Symbol": "CNAB",
    "CoinName": "Cannabium",
    "FullName": "Cannabium (CNAB)"
  },
  {
    "Symbol": "SGP",
    "CoinName": "SGPay",
    "FullName": "SGPay (SGP)"
  },
  {
    "Symbol": "LTPC",
    "CoinName": "Lightpaycoin",
    "FullName": "Lightpaycoin (LTPC)"
  },
  {
    "Symbol": "HANA",
    "CoinName": "Hanacoin",
    "FullName": "Hanacoin (HANA)"
  },
  {
    "Symbol": "BTV",
    "CoinName": "Bitvote",
    "FullName": "Bitvote (BTV)"
  },
  {
    "Symbol": "URP",
    "CoinName": "Universal Reward Protocol",
    "FullName": "Universal Reward Protocol (URP)"
  },
  {
    "Symbol": "SHE",
    "CoinName": "Shine Chain",
    "FullName": "Shine Chain (SHE)"
  },
  {
    "Symbol": "IVN",
    "CoinName": "IVN Security",
    "FullName": "IVN Security (IVN)"
  },
  {
    "Symbol": "DAV",
    "CoinName": "DAV",
    "FullName": "DAV (DAV)"
  },
  {
    "Symbol": "ZAT",
    "CoinName": "ZatGo",
    "FullName": "ZatGo (ZAT)"
  },
  {
    "Symbol": "IMT",
    "CoinName": "MoneyToken",
    "FullName": "MoneyToken (IMT)"
  },
  {
    "Symbol": "MHC",
    "CoinName": "MetaHash",
    "FullName": "MetaHash (MHC)"
  },
  {
    "Symbol": "ROBET",
    "CoinName": "RoBet",
    "FullName": "RoBet (ROBET)"
  },
  {
    "Symbol": "CRYP",
    "CoinName": "CrypticCoin",
    "FullName": "CrypticCoin (CRYP)"
  },
  {
    "Symbol": "BONIX",
    "CoinName": "Blockonix",
    "FullName": "Blockonix (BONIX)"
  },
  {
    "Symbol": "BTXC",
    "CoinName": "Bettex coin",
    "FullName": "Bettex coin (BTXC)"
  },
  {
    "Symbol": "DAPS",
    "CoinName": "DAPS Coin",
    "FullName": "DAPS Coin (DAPS)"
  },
  {
    "Symbol": "ETE",
    "CoinName": "EXTRADECOIN",
    "FullName": "EXTRADECOIN (ETE)"
  },
  {
    "Symbol": "NHCT",
    "CoinName": "Nano Healthcare Token",
    "FullName": "Nano Healthcare Token (NHCT)"
  },
  {
    "Symbol": "AZ",
    "CoinName": "Azbit",
    "FullName": "Azbit (AZ)"
  },
  {
    "Symbol": "SWA",
    "CoinName": "Swace",
    "FullName": "Swace (SWA)"
  },
  {
    "Symbol": "USDCT",
    "CoinName": "USDCT",
    "FullName": "USDCT (USDCT)"
  },
  {
    "Symbol": "IAG",
    "CoinName": "IAGON",
    "FullName": "IAGON (IAG)"
  },
  {
    "Symbol": "MTCMN",
    "CoinName": "MTC Mesh",
    "FullName": "MTC Mesh (MTCMN)"
  },
  {
    "Symbol": "AAA",
    "CoinName": "AAA Reserve Currency",
    "FullName": "AAA Reserve Currency (AAA)"
  },
  {
    "Symbol": "ZEST",
    "CoinName": "ZestCoin",
    "FullName": "ZestCoin (ZEST)"
  },
  {
    "Symbol": "HLM",
    "CoinName": "Helium",
    "FullName": "Helium (HLM)"
  },
  {
    "Symbol": "CSP",
    "CoinName": "Caspian",
    "FullName": "Caspian (CSP)"
  },
  {
    "Symbol": "USDC",
    "CoinName": "USD Coin",
    "FullName": "USD Coin (USDC)"
  },
  {
    "Symbol": "ONGAS",
    "CoinName": "Ontology Gas",
    "FullName": "Ontology Gas (ONGAS)"
  },
  {
    "Symbol": "NRVE",
    "CoinName": "Narrative",
    "FullName": "Narrative (NRVE)"
  },
  {
    "Symbol": "BIP",
    "CoinName": "Minter",
    "FullName": "Minter (BIP)"
  },
  {
    "Symbol": "XCASH",
    "CoinName": "X-CASH",
    "FullName": "X-CASH (XCASH)"
  },
  {
    "Symbol": "RMESH",
    "CoinName": "RightMesh",
    "FullName": "RightMesh (RMESH)"
  },
  {
    "Symbol": "HAND",
    "CoinName": "ShowHand",
    "FullName": "ShowHand (HAND)"
  },
  {
    "Symbol": "GBXT",
    "CoinName": "Globitex Token",
    "FullName": "Globitex Token (GBXT)"
  },
  {
    "Symbol": "ABCC",
    "CoinName": "ABCC Token",
    "FullName": "ABCC Token (ABCC)"
  },
  {
    "Symbol": "BASIS",
    "CoinName": "Basis",
    "FullName": "Basis (BASIS)"
  },
  {
    "Symbol": "JIB",
    "CoinName": "Jibbit",
    "FullName": "Jibbit (JIB)"
  },
  {
    "Symbol": "PMTN",
    "CoinName": "Peer Mountain",
    "FullName": "Peer Mountain (PMTN)"
  },
  {
    "Symbol": "PHM",
    "CoinName": "Phomeum",
    "FullName": "Phomeum (PHM)"
  },
  {
    "Symbol": "CUSD",
    "CoinName": "Carbon",
    "FullName": "Carbon (CUSD)"
  },
  {
    "Symbol": "KUSD",
    "CoinName": "Kowala",
    "FullName": "Kowala (KUSD)"
  },
  {
    "Symbol": "VEOT",
    "CoinName": "Viewo",
    "FullName": "Viewo (VEOT)"
  },
  {
    "Symbol": "GGR",
    "CoinName": "GGRocket",
    "FullName": "GGRocket (GGR)"
  },
  {
    "Symbol": "VEST",
    "CoinName": "VestChain",
    "FullName": "VestChain (VEST)"
  },
  {
    "Symbol": "MCN",
    "CoinName": "mCoin",
    "FullName": "mCoin (MCN)"
  },
  {
    "Symbol": "DEPO",
    "CoinName": "Depository Network",
    "FullName": "Depository Network (DEPO)"
  },
  {
    "Symbol": "MENLO",
    "CoinName": "Menlo One",
    "FullName": "Menlo One (MENLO)"
  },
  {
    "Symbol": "METM",
    "CoinName": "MetaMorph",
    "FullName": "MetaMorph (METM)"
  },
  {
    "Symbol": "PAX",
    "CoinName": "Paxos Standard",
    "FullName": "Paxos Standard (PAX)"
  },
  {
    "Symbol": "ARAW",
    "CoinName": "Araw",
    "FullName": "Araw (ARAW)"
  },
  {
    "Symbol": "BRAZ",
    "CoinName": "Brazio",
    "FullName": "Brazio (BRAZ)"
  },
  {
    "Symbol": "TALAO",
    "CoinName": "Talao",
    "FullName": "Talao (TALAO)"
  },
  {
    "Symbol": "IZX",
    "CoinName": "IZX",
    "FullName": "IZX (IZX)"
  },
  {
    "Symbol": "DIVI",
    "CoinName": "Divi Project",
    "FullName": "Divi Project (DIVI)"
  },
  {
    "Symbol": "HQT",
    "CoinName": "HyperQuant",
    "FullName": "HyperQuant (HQT)"
  },
  {
    "Symbol": "W12",
    "CoinName": "W12 Protocol",
    "FullName": "W12 Protocol (W12)"
  },
  {
    "Symbol": "NBAR",
    "CoinName": "NOBAR",
    "FullName": "NOBAR (NBAR)"
  },
  {
    "Symbol": "KBX",
    "CoinName": "KuBitX",
    "FullName": "KuBitX (KBX)"
  },
  {
    "Symbol": "MYDFS",
    "CoinName": "MyDFS",
    "FullName": "MyDFS (MYDFS)"
  },
  {
    "Symbol": "BHPC",
    "CoinName": "BHPCash",
    "FullName": "BHPCash (BHPC)"
  },
  {
    "Symbol": "VTOS",
    "CoinName": "VTOS",
    "FullName": "VTOS (VTOS)"
  },
  {
    "Symbol": "M2O",
    "CoinName": "M2O Token",
    "FullName": "M2O Token (M2O)"
  },
  {
    "Symbol": "SLY",
    "CoinName": "SELFLLERY",
    "FullName": "SELFLLERY (SLY)"
  },
  {
    "Symbol": "UEC",
    "CoinName": "United Emirates Coin",
    "FullName": "United Emirates Coin (UEC)"
  },
  {
    "Symbol": "BEAT",
    "CoinName": "BEAT Token",
    "FullName": "BEAT Token (BEAT)"
  },
  {
    "Symbol": "MOLK",
    "CoinName": "Mobilink Token",
    "FullName": "Mobilink Token (MOLK)"
  },
  {
    "Symbol": "MSD",
    "CoinName": "MSD",
    "FullName": "MSD (MSD)"
  },
  {
    "Symbol": "SEED",
    "CoinName": "Superbloom",
    "FullName": "Superbloom (SEED)"
  },
  {
    "Symbol": "SEALN",
    "CoinName": "Seal Network",
    "FullName": "Seal Network (SEALN)"
  },
  {
    "Symbol": "GBO",
    "CoinName": "Gabro.io",
    "FullName": "Gabro.io (GBO)"
  },
  {
    "Symbol": "ACM",
    "CoinName": "Actinium",
    "FullName": "Actinium (ACM)"
  },
  {
    "Symbol": "DFXT",
    "CoinName": "DigiFinexToken",
    "FullName": "DigiFinexToken (DFXT)"
  },
  {
    "Symbol": "BF",
    "CoinName": "BitForex Token",
    "FullName": "BitForex Token (BF)"
  },
  {
    "Symbol": "NWP",
    "CoinName": "NWPSolution",
    "FullName": "NWPSolution (NWP)"
  },
  {
    "Symbol": "BCDT",
    "CoinName": "Blockchain Certified Data Token",
    "FullName": "Blockchain Certified Data Token (BCDT)"
  },
  {
    "Symbol": "EVOS",
    "CoinName": "EVOS",
    "FullName": "EVOS (EVOS)"
  },
  {
    "Symbol": "DEEX",
    "CoinName": "DEEX",
    "FullName": "DEEX (DEEX)"
  },
  {
    "Symbol": "ANON",
    "CoinName": "ANON",
    "FullName": "ANON (ANON)"
  },
  {
    "Symbol": "LTZ",
    "CoinName": "Litecoinz",
    "FullName": "Litecoinz (LTZ)"
  },
  {
    "Symbol": "MTZ",
    "CoinName": "Monetizr",
    "FullName": "Monetizr (MTZ)"
  },
  {
    "Symbol": "TBL",
    "CoinName": "Tombola",
    "FullName": "Tombola (TBL)"
  },
  {
    "Symbol": "BXY",
    "CoinName": "Beaxy",
    "FullName": "Beaxy (BXY)"
  },
  {
    "Symbol": "KUE",
    "CoinName": "Kuende",
    "FullName": "Kuende (KUE)"
  },
  {
    "Symbol": "ESN",
    "CoinName": "Ethersocial",
    "FullName": "Ethersocial (ESN)"
  },
  {
    "Symbol": "H3O",
    "CoinName": "Hydrominer",
    "FullName": "Hydrominer (H3O)"
  },
  {
    "Symbol": "BETHER",
    "CoinName": "Bethereum",
    "FullName": "Bethereum (BETHER)"
  },
  {
    "Symbol": "ETHO",
    "CoinName": "ETHER-1",
    "FullName": "ETHER-1 (ETHO)"
  },
  {
    "Symbol": "WTL",
    "CoinName": "Welltrado",
    "FullName": "Welltrado (WTL)"
  },
  {
    "Symbol": "HIH",
    "CoinName": "HiHealth",
    "FullName": "HiHealth (HIH)"
  },
  {
    "Symbol": "ANGEL",
    "CoinName": "Crypto Angel",
    "FullName": "Crypto Angel (ANGEL)"
  },
  {
    "Symbol": "P2PS",
    "CoinName": "P2P Solutions Foundation",
    "FullName": "P2P Solutions Foundation (P2PS)"
  },
  {
    "Symbol": "AIM",
    "CoinName": "Aimedis",
    "FullName": "Aimedis (AIM)"
  },
  {
    "Symbol": "TWISTR",
    "CoinName": "TWIST",
    "FullName": "TWIST (TWISTR)"
  },
  {
    "Symbol": "CXA",
    "CoinName": "CryptovationX",
    "FullName": "CryptovationX (CXA)"
  },
  {
    "Symbol": "BITTO",
    "CoinName": "BITTO",
    "FullName": "BITTO (BITTO)"
  },
  {
    "Symbol": "UMK",
    "CoinName": "UMKA",
    "FullName": "UMKA (UMK)"
  },
  {
    "Symbol": "VNX",
    "CoinName": "VisionX",
    "FullName": "VisionX (VNX)"
  },
  {
    "Symbol": "WMK",
    "CoinName": "Wemark",
    "FullName": "Wemark (WMK)"
  },
  {
    "Symbol": "MBTC",
    "CoinName": "MicroBitcoin",
    "FullName": "MicroBitcoin (MBTC)"
  },
  {
    "Symbol": "OJX",
    "CoinName": "Ojooo",
    "FullName": "Ojooo (OJX)"
  },
  {
    "Symbol": "CHW",
    "CoinName": "Chrysalis Coin",
    "FullName": "Chrysalis Coin (CHW)"
  },
  {
    "Symbol": "ABBC",
    "CoinName": "ABBC Coin",
    "FullName": "ABBC Coin (ABBC)"
  },
  {
    "Symbol": "CATT",
    "CoinName": "Catex",
    "FullName": "Catex (CATT)"
  },
  {
    "Symbol": "VEX",
    "CoinName": "Vexanium",
    "FullName": "Vexanium (VEX)"
  },
  {
    "Symbol": "LQDN",
    "CoinName": "Liquidity Network",
    "FullName": "Liquidity Network (LQDN)"
  },
  {
    "Symbol": "BIOC",
    "CoinName": "BioCrypt",
    "FullName": "BioCrypt (BIOC)"
  },
  {
    "Symbol": "FOREX",
    "CoinName": "FOREXCOIN",
    "FullName": "FOREXCOIN (FOREX)"
  },
  {
    "Symbol": "CPLO",
    "CoinName": "Cpollo",
    "FullName": "Cpollo (CPLO)"
  },
  {
    "Symbol": "XPX",
    "CoinName": "ProximaX",
    "FullName": "ProximaX (XPX)"
  },
  {
    "Symbol": "RIPAX",
    "CoinName": "RipaEx",
    "FullName": "RipaEx (RIPAX)"
  },
  {
    "Symbol": "HETA",
    "CoinName": "HetaChain",
    "FullName": "HetaChain (HETA)"
  },
  {
    "Symbol": "NOW",
    "CoinName": "NOW Token",
    "FullName": "NOW Token (NOW)"
  },
  {
    "Symbol": "ADAB",
    "CoinName": "Adab Solutions",
    "FullName": "Adab Solutions (ADAB)"
  },
  {
    "Symbol": "CIX100",
    "CoinName": "Cryptoindex",
    "FullName": "Cryptoindex (CIX100)"
  },
  {
    "Symbol": "FIH",
    "CoinName": "Fidelity House",
    "FullName": "Fidelity House (FIH)"
  },
  {
    "Symbol": "MINX",
    "CoinName": "InnovaMinex",
    "FullName": "InnovaMinex (MINX)"
  },
  {
    "Symbol": "MOBU",
    "CoinName": "MOBU",
    "FullName": "MOBU (MOBU)"
  },
  {
    "Symbol": "NVDX",
    "CoinName": "Nodvix",
    "FullName": "Nodvix (NVDX)"
  },
  {
    "Symbol": "COVEX",
    "CoinName": "CoVEX",
    "FullName": "CoVEX (COVEX)"
  },
  {
    "Symbol": "TAL",
    "CoinName": "Talentico",
    "FullName": "Talentico (TAL)"
  },
  {
    "Symbol": "F2K",
    "CoinName": "Farm2Kitchen",
    "FullName": "Farm2Kitchen (F2K)"
  },
  {
    "Symbol": "GTX",
    "CoinName": "GALLACTIC",
    "FullName": "GALLACTIC (GTX)"
  },
  {
    "Symbol": "LK",
    "CoinName": "Liker",
    "FullName": "Liker (LK)"
  },
  {
    "Symbol": "QOBI",
    "CoinName": "Qobit",
    "FullName": "Qobit (QOBI)"
  },
  {
    "Symbol": "BVO",
    "CoinName": "BRAVO Pay",
    "FullName": "BRAVO Pay (BVO)"
  },
  {
    "Symbol": "VENA",
    "CoinName": "Vena Network",
    "FullName": "Vena Network (VENA)"
  },
  {
    "Symbol": "CDRX",
    "CoinName": "CDRX",
    "FullName": "CDRX (CDRX)"
  },
  {
    "Symbol": "ELES",
    "CoinName": "Elements Estates",
    "FullName": "Elements Estates (ELES)"
  },
  {
    "Symbol": "GEON",
    "CoinName": "Geon",
    "FullName": "Geon (GEON)"
  },
  {
    "Symbol": "TZO",
    "CoinName": "TANZŌ",
    "FullName": "TANZŌ (TZO)"
  },
  {
    "Symbol": "WLME",
    "CoinName": "Wellmee",
    "FullName": "Wellmee (WLME)"
  },
  {
    "Symbol": "INVX",
    "CoinName": "Investx",
    "FullName": "Investx (INVX)"
  },
  {
    "Symbol": "AWT",
    "CoinName": "WhatsOnPic",
    "FullName": "WhatsOnPic (AWT)"
  },
  {
    "Symbol": "ABXC",
    "CoinName": "AutoBay",
    "FullName": "AutoBay (ABXC)"
  },
  {
    "Symbol": "LINKC",
    "CoinName": "LINKCHAIN",
    "FullName": "LINKCHAIN (LINKC)"
  },
  {
    "Symbol": "IMPCN",
    "CoinName": "Brain Space",
    "FullName": "Brain Space (IMPCN)"
  },
  {
    "Symbol": "FORK",
    "CoinName": "Gastro Advisor Token",
    "FullName": "Gastro Advisor Token (FORK)"
  },
  {
    "Symbol": "NMK",
    "CoinName": "Namek",
    "FullName": "Namek (NMK)"
  },
  {
    "Symbol": "OUT",
    "CoinName": "Netscouters",
    "FullName": "Netscouters (OUT)"
  },
  {
    "Symbol": "LPT",
    "CoinName": "Livepeer",
    "FullName": "Livepeer (LPT)"
  },
  {
    "Symbol": "IOVT",
    "CoinName": "IOV",
    "FullName": "IOV (IOVT)"
  },
  {
    "Symbol": "MYO",
    "CoinName": "Mycro",
    "FullName": "Mycro (MYO)"
  },
  {
    "Symbol": "ORET",
    "CoinName": "ORET Token",
    "FullName": "ORET Token (ORET)"
  },
  {
    "Symbol": "SEC",
    "CoinName": "SecureCryptoPayments",
    "FullName": "SecureCryptoPayments (SEC)"
  },
  {
    "Symbol": "QUIZ",
    "CoinName": "Quizando",
    "FullName": "Quizando (QUIZ)"
  },
  {
    "Symbol": "CYRS",
    "CoinName": "Cyrus Token",
    "FullName": "Cyrus Token (CYRS)"
  },
  {
    "Symbol": "UTL",
    "CoinName": "Utile Network",
    "FullName": "Utile Network (UTL)"
  },
  {
    "Symbol": "JOYS",
    "CoinName": "JOYS",
    "FullName": "JOYS (JOYS)"
  },
  {
    "Symbol": "DACH",
    "CoinName": "DACH Coin",
    "FullName": "DACH Coin (DACH)"
  },
  {
    "Symbol": "MNVM",
    "CoinName": "Novam",
    "FullName": "Novam (MNVM)"
  },
  {
    "Symbol": "PLTX",
    "CoinName": "PlutusX",
    "FullName": "PlutusX (PLTX)"
  },
  {
    "Symbol": "BTMG",
    "CoinName": "Bitcademy Football",
    "FullName": "Bitcademy Football (BTMG)"
  },
  {
    "Symbol": "BRIK",
    "CoinName": "BrikBit",
    "FullName": "BrikBit (BRIK)"
  },
  {
    "Symbol": "XTN",
    "CoinName": "XEND token",
    "FullName": "XEND token (XTN)"
  },
  {
    "Symbol": "LUMA",
    "CoinName": "LUMA Token",
    "FullName": "LUMA Token (LUMA)"
  },
  {
    "Symbol": "BTZN",
    "CoinName": "Bitzon",
    "FullName": "Bitzon (BTZN)"
  },
  {
    "Symbol": "CLRTY",
    "CoinName": "Clarity",
    "FullName": "Clarity (CLRTY)"
  },
  {
    "Symbol": "COING",
    "CoinName": "Coingrid",
    "FullName": "Coingrid (COING)"
  },
  {
    "Symbol": "NAVIB",
    "CoinName": "Navibration",
    "FullName": "Navibration (NAVIB)"
  },
  {
    "Symbol": "ARTP",
    "CoinName": "ArtPro",
    "FullName": "ArtPro (ARTP)"
  },
  {
    "Symbol": "PLEO",
    "CoinName": "Empleos",
    "FullName": "Empleos (PLEO)"
  },
  {
    "Symbol": "GDX",
    "CoinName": "Gamedex",
    "FullName": "Gamedex (GDX)"
  },
  {
    "Symbol": "EGDC",
    "CoinName": "EasyGuide",
    "FullName": "EasyGuide (EGDC)"
  },
  {
    "Symbol": "ENTT",
    "CoinName": "Presale Ventures",
    "FullName": "Presale Ventures (ENTT)"
  },
  {
    "Symbol": "RWD",
    "CoinName": "Reward Vision",
    "FullName": "Reward Vision (RWD)"
  },
  {
    "Symbol": "AURUM",
    "CoinName": "Aurum",
    "FullName": "Aurum (AURUM)"
  },
  {
    "Symbol": "WRL",
    "CoinName": "WHIRL",
    "FullName": "WHIRL (WRL)"
  },
  {
    "Symbol": "CRWD",
    "CoinName": "CRWD Network",
    "FullName": "CRWD Network (CRWD)"
  },
  {
    "Symbol": "ENCN",
    "CoinName": "EndChain",
    "FullName": "EndChain (ENCN)"
  },
  {
    "Symbol": "TAURI",
    "CoinName": "Extauri",
    "FullName": "Extauri (TAURI)"
  },
  {
    "Symbol": "EYE",
    "CoinName": "EYE Token",
    "FullName": "EYE Token (EYE)"
  },
  {
    "Symbol": "GTR",
    "CoinName": "Gturbo",
    "FullName": "Gturbo (GTR)"
  },
  {
    "Symbol": "HXC",
    "CoinName": "HexanCoin",
    "FullName": "HexanCoin (HXC)"
  },
  {
    "Symbol": "OPEX",
    "CoinName": "Optherium Token",
    "FullName": "Optherium Token (OPEX)"
  },
  {
    "Symbol": "SKYM",
    "CoinName": "SkyMap",
    "FullName": "SkyMap (SKYM)"
  },
  {
    "Symbol": "SCIA",
    "CoinName": "Stem Cell",
    "FullName": "Stem Cell (SCIA)"
  },
  {
    "Symbol": "TXP",
    "CoinName": "Trade Pharma Network",
    "FullName": "Trade Pharma Network (TXP)"
  },
  {
    "Symbol": "GPS",
    "CoinName": "Triffic",
    "FullName": "Triffic (GPS)"
  },
  {
    "Symbol": "WTXH",
    "CoinName": "WTX HUB",
    "FullName": "WTX HUB (WTXH)"
  },
  {
    "Symbol": "BBG",
    "CoinName": "BigBang",
    "FullName": "BigBang (BBG)"
  },
  {
    "Symbol": "NZE",
    "CoinName": "Nagezeni",
    "FullName": "Nagezeni (NZE)"
  },
  {
    "Symbol": "SHKG",
    "CoinName": "SharkGate",
    "FullName": "SharkGate (SHKG)"
  },
  {
    "Symbol": "TENZ",
    "CoinName": "Tenzorum",
    "FullName": "Tenzorum (TENZ)"
  },
  {
    "Symbol": "TWC",
    "CoinName": "Twilight",
    "FullName": "Twilight (TWC)"
  },
  {
    "Symbol": "WUG",
    "CoinName": "WatchUGot",
    "FullName": "WatchUGot (WUG)"
  },
  {
    "Symbol": "CAND",
    "CoinName": "Canlead",
    "FullName": "Canlead (CAND)"
  },
  {
    "Symbol": "CTW",
    "CoinName": "Citowise",
    "FullName": "Citowise (CTW)"
  },
  {
    "Symbol": "XIM",
    "CoinName": "Impresso",
    "FullName": "Impresso (XIM)"
  },
  {
    "Symbol": "NAM",
    "CoinName": "Namacoin",
    "FullName": "Namacoin (NAM)"
  },
  {
    "Symbol": "2TF",
    "CoinName": "2TF",
    "FullName": "2TF (2TF)"
  },
  {
    "Symbol": "BZKY",
    "CoinName": "Bizkey",
    "FullName": "Bizkey (BZKY)"
  },
  {
    "Symbol": "CARAT",
    "CoinName": "Carats Token",
    "FullName": "Carats Token (CARAT)"
  },
  {
    "Symbol": "ZILLA",
    "CoinName": "ChainZilla",
    "FullName": "ChainZilla (ZILLA)"
  },
  {
    "Symbol": "TCJ",
    "CoinName": "Coinshare",
    "FullName": "Coinshare (TCJ)"
  },
  {
    "Symbol": "MAEP",
    "CoinName": "Maester Protocol",
    "FullName": "Maester Protocol (MAEP)"
  },
  {
    "Symbol": "DN8",
    "CoinName": "Pldgr",
    "FullName": "Pldgr (DN8)"
  },
  {
    "Symbol": "XNT",
    "CoinName": "Exenium",
    "FullName": "Exenium (XNT)"
  },
  {
    "Symbol": "PPOVR",
    "CoinName": "POVR",
    "FullName": "POVR (PPOVR)"
  },
  {
    "Symbol": "LX",
    "CoinName": "Moonlight",
    "FullName": "Moonlight (LX)"
  },
  {
    "Symbol": "AWAX",
    "CoinName": "AWAX",
    "FullName": "AWAX (AWAX)"
  },
  {
    "Symbol": "VAR",
    "CoinName": "VARcrypt",
    "FullName": "VARcrypt (VAR)"
  },
  {
    "Symbol": "TKD",
    "CoinName": "Tokedo",
    "FullName": "Tokedo (TKD)"
  },
  {
    "Symbol": "VTAG",
    "CoinName": "veriTAG Token",
    "FullName": "veriTAG Token (VTAG)"
  },
  {
    "Symbol": "WBY",
    "CoinName": "WeBuy",
    "FullName": "WeBuy (WBY)"
  },
  {
    "Symbol": "BBOS",
    "CoinName": "Blackbox Foundation",
    "FullName": "Blackbox Foundation (BBOS)"
  },
  {
    "Symbol": "BFEX",
    "CoinName": "BFEX",
    "FullName": "BFEX (BFEX)"
  },
  {
    "Symbol": "HUS",
    "CoinName": "HUSSY",
    "FullName": "HUSSY (HUS)"
  },
  {
    "Symbol": "APXT",
    "CoinName": "ApolloX",
    "FullName": "ApolloX (APXT)"
  },
  {
    "Symbol": "IDORU",
    "CoinName": "Vip2Fan",
    "FullName": "Vip2Fan (IDORU)"
  },
  {
    "Symbol": "WOM",
    "CoinName": "WOM",
    "FullName": "WOM (WOM)"
  },
  {
    "Symbol": "BONA",
    "CoinName": "Bonafi",
    "FullName": "Bonafi (BONA)"
  },
  {
    "Symbol": "HLDY",
    "CoinName": "HOLIDAY",
    "FullName": "HOLIDAY (HLDY)"
  },
  {
    "Symbol": "BLACK",
    "CoinName": "eosBLACK",
    "FullName": "eosBLACK (BLACK)"
  },
  {
    "Symbol": "HORUS",
    "CoinName": "HorusPay",
    "FullName": "HorusPay (HORUS)"
  },
  {
    "Symbol": "MEETONE",
    "CoinName": "MEET.ONE",
    "FullName": "MEET.ONE (MEETONE)"
  },
  {
    "Symbol": "IOTW",
    "CoinName": "IOTW",
    "FullName": "IOTW (IOTW)"
  },
  {
    "Symbol": "EMPR",
    "CoinName": "empowr",
    "FullName": "empowr (EMPR)"
  },
  {
    "Symbol": "MPAY",
    "CoinName": "Menapay",
    "FullName": "Menapay (MPAY)"
  },
  {
    "Symbol": "AGM",
    "CoinName": "Argoneum",
    "FullName": "Argoneum (AGM)"
  },
  {
    "Symbol": "MTCN",
    "CoinName": "Multiven",
    "FullName": "Multiven (MTCN)"
  },
  {
    "Symbol": "PTO",
    "CoinName": "Patentico",
    "FullName": "Patentico (PTO)"
  },
  {
    "Symbol": "AS",
    "CoinName": "AmaStar",
    "FullName": "AmaStar (AS)"
  },
  {
    "Symbol": "OSF",
    "CoinName": "One Solution",
    "FullName": "One Solution (OSF)"
  },
  {
    "Symbol": "DLPT",
    "CoinName": "Deliverers Power Token",
    "FullName": "Deliverers Power Token (DLPT)"
  },
  {
    "Symbol": "GREENT",
    "CoinName": "Greentoken",
    "FullName": "Greentoken (GREENT)"
  },
  {
    "Symbol": "VIDI",
    "CoinName": "Vidion",
    "FullName": "Vidion (VIDI)"
  },
  {
    "Symbol": "OPQ",
    "CoinName": "Opacity",
    "FullName": "Opacity (OPQ)"
  },
  {
    "Symbol": "ZYM",
    "CoinName": "Enzym",
    "FullName": "Enzym (ZYM)"
  },
  {
    "Symbol": "RPB",
    "CoinName": "Republia",
    "FullName": "Republia (RPB)"
  },
  {
    "Symbol": "DYNCOIN",
    "CoinName": "Dyncoin",
    "FullName": "Dyncoin (DYNCOIN)"
  },
  {
    "Symbol": "MIT",
    "CoinName": "MiMiner",
    "FullName": "MiMiner (MIT)"
  },
  {
    "Symbol": "VANM",
    "CoinName": "VANM",
    "FullName": "VANM (VANM)"
  },
  {
    "Symbol": "PSF",
    "CoinName": "Prime Shipping Foundation",
    "FullName": "Prime Shipping Foundation (PSF)"
  },
  {
    "Symbol": "LITION",
    "CoinName": "Lition",
    "FullName": "Lition (LITION)"
  },
  {
    "Symbol": "NEW",
    "CoinName": "Newton",
    "FullName": "Newton (NEW)"
  },
  {
    "Symbol": "MZG",
    "CoinName": "Moozicore",
    "FullName": "Moozicore (MZG)"
  },
  {
    "Symbol": "VIAZ",
    "CoinName": "Viaz",
    "FullName": "Viaz (VIAZ)"
  },
  {
    "Symbol": "BTZC",
    "CoinName": "BeatzCoin",
    "FullName": "BeatzCoin (BTZC)"
  },
  {
    "Symbol": "ECR",
    "CoinName": "EcoVerse",
    "FullName": "EcoVerse (ECR)"
  },
  {
    "Symbol": "RF",
    "CoinName": "Raido Financial",
    "FullName": "Raido Financial (RF)"
  },
  {
    "Symbol": "ARMS",
    "CoinName": "2Acoin",
    "FullName": "2Acoin (ARMS)"
  },
  {
    "Symbol": "MPXT",
    "CoinName": "Myplacex",
    "FullName": "Myplacex (MPXT)"
  },
  {
    "Symbol": "XELS",
    "CoinName": "XELS Coin",
    "FullName": "XELS Coin (XELS)"
  },
  {
    "Symbol": "PGF7T",
    "CoinName": "PGF500",
    "FullName": "PGF500 (PGF7T)"
  },
  {
    "Symbol": "ZUUM",
    "CoinName": "Zuum",
    "FullName": "Zuum (ZUUM)"
  },
  {
    "Symbol": "UCOINT",
    "CoinName": "UCOIN",
    "FullName": "UCOIN (UCOINT)"
  },
  {
    "Symbol": "YDY",
    "CoinName": "Ydentity",
    "FullName": "Ydentity (YDY)"
  },
  {
    "Symbol": "FTUM",
    "CoinName": "Fatum",
    "FullName": "Fatum (FTUM)"
  },
  {
    "Symbol": "SPON",
    "CoinName": "Instant Sponsor Token",
    "FullName": "Instant Sponsor Token (SPON)"
  },
  {
    "Symbol": "DLXV",
    "CoinName": "Delta-X",
    "FullName": "Delta-X (DLXV)"
  },
  {
    "Symbol": "OCEANT",
    "CoinName": "Poseidon Foundation",
    "FullName": "Poseidon Foundation (OCEANT)"
  },
  {
    "Symbol": "TECO",
    "CoinName": "TerraEcoCoin",
    "FullName": "TerraEcoCoin (TECO)"
  },
  {
    "Symbol": "GOALS",
    "CoinName": "UnitedFans",
    "FullName": "UnitedFans (GOALS)"
  },
  {
    "Symbol": "ETHIX",
    "CoinName": "EthicHub",
    "FullName": "EthicHub (ETHIX)"
  },
  {
    "Symbol": "TTB",
    "CoinName": "TrustaBit",
    "FullName": "TrustaBit (TTB)"
  },
  {
    "Symbol": "CHK",
    "CoinName": "Chek",
    "FullName": "Chek (CHK)"
  },
  {
    "Symbol": "VLTX",
    "CoinName": "Volentix",
    "FullName": "Volentix (VLTX)"
  },
  {
    "Symbol": "PRPT",
    "CoinName": "Purple Token",
    "FullName": "Purple Token (PRPT)"
  },
  {
    "Symbol": "OASC",
    "CoinName": "Oasis City",
    "FullName": "Oasis City (OASC)"
  },
  {
    "Symbol": "TREE",
    "CoinName": "HyperionX",
    "FullName": "HyperionX (TREE)"
  },
  {
    "Symbol": "GDL",
    "CoinName": "GodlyCoin",
    "FullName": "GodlyCoin (GDL)"
  },
  {
    "Symbol": "LNT",
    "CoinName": "Litenett",
    "FullName": "Litenett (LNT)"
  },
  {
    "Symbol": "FTRC",
    "CoinName": "FutureCoin",
    "FullName": "FutureCoin (FTRC)"
  },
  {
    "Symbol": "HBX",
    "CoinName": "Hyperbridge",
    "FullName": "Hyperbridge (HBX)"
  },
  {
    "Symbol": "LAO",
    "CoinName": "LC Token",
    "FullName": "LC Token (LAO)"
  },
  {
    "Symbol": "GOVT",
    "CoinName": "The Government Network",
    "FullName": "The Government Network (GOVT)"
  },
  {
    "Symbol": "COGEN",
    "CoinName": "Cogenero",
    "FullName": "Cogenero (COGEN)"
  },
  {
    "Symbol": "DAILY",
    "CoinName": "Coindaily",
    "FullName": "Coindaily (DAILY)"
  },
  {
    "Symbol": "SREUR",
    "CoinName": "SocialRemit",
    "FullName": "SocialRemit (SREUR)"
  },
  {
    "Symbol": "MAZC",
    "CoinName": "MyMazzu",
    "FullName": "MyMazzu (MAZC)"
  },
  {
    "Symbol": "TGTC",
    "CoinName": "Tokensgate",
    "FullName": "Tokensgate (TGTC)"
  },
  {
    "Symbol": "PLNX",
    "CoinName": "Planumex",
    "FullName": "Planumex (PLNX)"
  },
  {
    "Symbol": "IPT",
    "CoinName": "Crypt-ON",
    "FullName": "Crypt-ON (IPT)"
  },
  {
    "Symbol": "IGTT",
    "CoinName": "IGT",
    "FullName": "IGT (IGTT)"
  },
  {
    "Symbol": "SRXIO",
    "CoinName": "Securix",
    "FullName": "Securix (SRXIO)"
  },
  {
    "Symbol": "GZB",
    "CoinName": "Gigzi",
    "FullName": "Gigzi (GZB)"
  },
  {
    "Symbol": "GGP",
    "CoinName": "GGPro",
    "FullName": "GGPro (GGP)"
  },
  {
    "Symbol": "IFUM",
    "CoinName": "Infleum",
    "FullName": "Infleum (IFUM)"
  },
  {
    "Symbol": "ATC",
    "CoinName": "AutoBlock",
    "FullName": "AutoBlock (ATC)"
  },
  {
    "Symbol": "DOOH",
    "CoinName": "Bidooh",
    "FullName": "Bidooh (DOOH)"
  },
  {
    "Symbol": "IOUX",
    "CoinName": "IOU",
    "FullName": "IOU (IOUX)"
  },
  {
    "Symbol": "BQTX",
    "CoinName": "BQT",
    "FullName": "BQT (BQTX)"
  },
  {
    "Symbol": "NVOY",
    "CoinName": "Envoy",
    "FullName": "Envoy (NVOY)"
  },
  {
    "Symbol": "CYBR",
    "CoinName": "CYBR",
    "FullName": "CYBR (CYBR)"
  },
  {
    "Symbol": "LLG",
    "CoinName": "Loligo",
    "FullName": "Loligo (LLG)"
  },
  {
    "Symbol": "LCR",
    "CoinName": "Lucre",
    "FullName": "Lucre (LCR)"
  },
  {
    "Symbol": "SNPC",
    "CoinName": "SnapCoin",
    "FullName": "SnapCoin (SNPC)"
  },
  {
    "Symbol": "VTM",
    "CoinName": "Victorieum",
    "FullName": "Victorieum (VTM)"
  },
  {
    "Symbol": "NRX",
    "CoinName": "Neironix",
    "FullName": "Neironix (NRX)"
  },
  {
    "Symbol": "BCNA",
    "CoinName": "BitCanna",
    "FullName": "BitCanna (BCNA)"
  },
  {
    "Symbol": "BTSG",
    "CoinName": "BitSong",
    "FullName": "BitSong (BTSG)"
  },
  {
    "Symbol": "CINX",
    "CoinName": "CINDX",
    "FullName": "CINDX (CINX)"
  },
  {
    "Symbol": "CCIN",
    "CoinName": "Cryptocoin Insurance",
    "FullName": "Cryptocoin Insurance (CCIN)"
  },
  {
    "Symbol": "CCI",
    "CoinName": "Cyber Capital Invest",
    "FullName": "Cyber Capital Invest (CCI)"
  },
  {
    "Symbol": "RDS",
    "CoinName": "Reger Diamond",
    "FullName": "Reger Diamond (RDS)"
  },
  {
    "Symbol": "GMS",
    "CoinName": "Gemstra",
    "FullName": "Gemstra (GMS)"
  },
  {
    "Symbol": "SGAT",
    "CoinName": "SGAT",
    "FullName": "SGAT (SGAT)"
  },
  {
    "Symbol": "SILKT",
    "CoinName": "SilkChain",
    "FullName": "SilkChain (SILKT)"
  },
  {
    "Symbol": "BITM",
    "CoinName": "BitMoney",
    "FullName": "BitMoney (BITM)"
  },
  {
    "Symbol": "TCHN",
    "CoinName": "Tachain",
    "FullName": "Tachain (TCHN)"
  },
  {
    "Symbol": "FIII",
    "CoinName": "Fiii",
    "FullName": "Fiii (FIII)"
  },
  {
    "Symbol": "ICHN",
    "CoinName": "i-chain",
    "FullName": "i-chain (ICHN)"
  },
  {
    "Symbol": "LVX",
    "CoinName": "Level01",
    "FullName": "Level01 (LVX)"
  },
  {
    "Symbol": "AENT",
    "CoinName": "AEN",
    "FullName": "AEN (AENT)"
  },
  {
    "Symbol": "LYFE",
    "CoinName": "Lyfe",
    "FullName": "Lyfe (LYFE)"
  },
  {
    "Symbol": "REMCO",
    "CoinName": "Remco",
    "FullName": "Remco (REMCO)"
  },
  {
    "Symbol": "GEMA",
    "CoinName": "Gemera",
    "FullName": "Gemera (GEMA)"
  },
  {
    "Symbol": "SCH",
    "CoinName": "Sia Cash Coin",
    "FullName": "Sia Cash Coin (SCH)"
  },
  {
    "Symbol": "VTEX",
    "CoinName": "Vertex",
    "FullName": "Vertex (VTEX)"
  },
  {
    "Symbol": "SRV",
    "CoinName": "ServAdvisor",
    "FullName": "ServAdvisor (SRV)"
  },
  {
    "Symbol": "DSLA",
    "CoinName": "Stacktical",
    "FullName": "Stacktical (DSLA)"
  },
  {
    "Symbol": "SYLO",
    "CoinName": "Sylo",
    "FullName": "Sylo (SYLO)"
  },
  {
    "Symbol": "YMZ",
    "CoinName": "Yamzu",
    "FullName": "Yamzu (YMZ)"
  },
  {
    "Symbol": "AER",
    "CoinName": "Aeryus",
    "FullName": "Aeryus (AER)"
  },
  {
    "Symbol": "ASQT",
    "CoinName": "ASQ Protocol",
    "FullName": "ASQ Protocol (ASQT)"
  },
  {
    "Symbol": "AXC",
    "CoinName": "autoXchange",
    "FullName": "autoXchange (AXC)"
  },
  {
    "Symbol": "BLKD",
    "CoinName": "Blinked",
    "FullName": "Blinked (BLKD)"
  },
  {
    "Symbol": "CYS",
    "CoinName": "BlooCYS",
    "FullName": "BlooCYS (CYS)"
  },
  {
    "Symbol": "ATTR",
    "CoinName": "Attrace",
    "FullName": "Attrace (ATTR)"
  },
  {
    "Symbol": "CTY",
    "CoinName": "Connecty",
    "FullName": "Connecty (CTY)"
  },
  {
    "Symbol": "DDL",
    "CoinName": "Donocle",
    "FullName": "Donocle (DDL)"
  },
  {
    "Symbol": "COY",
    "CoinName": "Coin Analyst",
    "FullName": "Coin Analyst (COY)"
  },
  {
    "Symbol": "FNL",
    "CoinName": "Finlocale",
    "FullName": "Finlocale (FNL)"
  },
  {
    "Symbol": "B2G",
    "CoinName": "Bitcoiin2Gen",
    "FullName": "Bitcoiin2Gen (B2G)"
  },
  {
    "Symbol": "CSQ",
    "CoinName": "cosquare",
    "FullName": "cosquare (CSQ)"
  },
  {
    "Symbol": "HBE",
    "CoinName": "healthbank",
    "FullName": "healthbank (HBE)"
  },
  {
    "Symbol": "ICT",
    "CoinName": "Intrachain",
    "FullName": "Intrachain (ICT)"
  },
  {
    "Symbol": "TOS",
    "CoinName": "KRATOS",
    "FullName": "KRATOS (TOS)"
  },
  {
    "Symbol": "CPROP",
    "CoinName": "CPROP",
    "FullName": "CPROP (CPROP)"
  },
  {
    "Symbol": "MOOLYA",
    "CoinName": "moolyacoin",
    "FullName": "moolyacoin (MOOLYA)"
  },
  {
    "Symbol": "PON",
    "CoinName": "Ponder",
    "FullName": "Ponder (PON)"
  },
  {
    "Symbol": "CREV",
    "CoinName": "CryptoRevolution",
    "FullName": "CryptoRevolution (CREV)"
  },
  {
    "Symbol": "VAD",
    "CoinName": "Varanida",
    "FullName": "Varanida (VAD)"
  },
  {
    "Symbol": "IDC",
    "CoinName": "IdealCoin",
    "FullName": "IdealCoin (IDC)"
  },
  {
    "Symbol": "LBR",
    "CoinName": "LaborCrypto",
    "FullName": "LaborCrypto (LBR)"
  },
  {
    "Symbol": "EMX",
    "CoinName": "EMX",
    "FullName": "EMX (EMX)"
  },
  {
    "Symbol": "XBASE",
    "CoinName": "ETERBASE",
    "FullName": "ETERBASE (XBASE)"
  },
  {
    "Symbol": "LEN",
    "CoinName": "Liqnet",
    "FullName": "Liqnet (LEN)"
  },
  {
    "Symbol": "KUBO",
    "CoinName": "KUBO",
    "FullName": "KUBO (KUBO)"
  },
  {
    "Symbol": "FABA",
    "CoinName": "Faba Invest",
    "FullName": "Faba Invest (FABA)"
  },
  {
    "Symbol": "LQ8",
    "CoinName": "Liquid8",
    "FullName": "Liquid8 (LQ8)"
  },
  {
    "Symbol": "GC",
    "CoinName": "Gric Coin",
    "FullName": "Gric Coin (GC)"
  },
  {
    "Symbol": "INFLR",
    "CoinName": "Inflr",
    "FullName": "Inflr (INFLR)"
  },
  {
    "Symbol": "LIB",
    "CoinName": "Libellum",
    "FullName": "Libellum (LIB)"
  },
  {
    "Symbol": "PERMIAN",
    "CoinName": "Permian",
    "FullName": "Permian (PERMIAN)"
  },
  {
    "Symbol": "PETL",
    "CoinName": "Petlife",
    "FullName": "Petlife (PETL)"
  },
  {
    "Symbol": "XDMC",
    "CoinName": "MPCX",
    "FullName": "MPCX (XDMC)"
  },
  {
    "Symbol": "PPS",
    "CoinName": "PopulStay",
    "FullName": "PopulStay (PPS)"
  },
  {
    "Symbol": "SMILO",
    "CoinName": "Smilo",
    "FullName": "Smilo (SMILO)"
  },
  {
    "Symbol": "BCVB",
    "CoinName": "BCV Blue Chip",
    "FullName": "BCV Blue Chip (BCVB)"
  },
  {
    "Symbol": "TREX",
    "CoinName": "TreeBlock",
    "FullName": "TreeBlock (TREX)"
  },
  {
    "Symbol": "VNS",
    "CoinName": "Venus",
    "FullName": "Venus (VNS)"
  },
  {
    "Symbol": "VRF",
    "CoinName": "Verifier",
    "FullName": "Verifier (VRF)"
  },
  {
    "Symbol": "AUX",
    "CoinName": "Auxilium",
    "FullName": "Auxilium (Auxilium)"
  },
  {
    "Symbol": "LYQD",
    "CoinName": "eLYQD",
    "FullName": "eLYQD (LYQD)"
  },
  {
    "Symbol": "CBP",
    "CoinName": "ComBox",
    "FullName": "ComBox (CBP)"
  },
  {
    "Symbol": "SMOKE",
    "CoinName": "Smoke",
    "FullName": "Smoke (SMOKE)"
  },
  {
    "Symbol": "EDN",
    "CoinName": "EdenChain",
    "FullName": "EdenChain (EDN)"
  },
  {
    "Symbol": "NOS",
    "CoinName": "nOS",
    "FullName": "nOS (NOS)"
  },
  {
    "Symbol": "DT1",
    "CoinName": "Dollar Token 1",
    "FullName": "Dollar Token 1 (DT1)"
  },
  {
    "Symbol": "FARMA",
    "CoinName": "FarmaTrust",
    "FullName": "FarmaTrust (FARMA)"
  },
  {
    "Symbol": "STACS",
    "CoinName": "STACS Token",
    "FullName": "STACS Token (STACS)"
  },
  {
    "Symbol": "JMC",
    "CoinName": "Junson Ming Chan Coin",
    "FullName": "Junson Ming Chan Coin (JMC)"
  },
  {
    "Symbol": "FOAM",
    "CoinName": "Foam",
    "FullName": "Foam (FOAM)"
  },
  {
    "Symbol": "FRED",
    "CoinName": "FREDEnergy",
    "FullName": "FREDEnergy (FRED)"
  },
  {
    "Symbol": "CNCT",
    "CoinName": "CONNECT",
    "FullName": "CONNECT (CNCT)"
  },
  {
    "Symbol": "ENGT",
    "CoinName": "Engagement Token",
    "FullName": "Engagement Token (ENGT)"
  },
  {
    "Symbol": "VRTY",
    "CoinName": "Verity",
    "FullName": "Verity (VRTY)"
  },
  {
    "Symbol": "TEAMT",
    "CoinName": "TokenStars TEAM Token",
    "FullName": "TokenStars TEAM Token (TEAMT)"
  },
  {
    "Symbol": "ZND",
    "CoinName": "Zenad",
    "FullName": "Zenad (ZND)"
  },
  {
    "Symbol": "3XD",
    "CoinName": "3DChain",
    "FullName": "3DChain (3XD)"
  },
  {
    "Symbol": "FPC",
    "CoinName": "Futurepia",
    "FullName": "Futurepia (FPC)"
  },
  {
    "Symbol": "SYNCO",
    "CoinName": "Synco",
    "FullName": "Synco (SYNCO)"
  },
  {
    "Symbol": "77G",
    "CoinName": "GraphenTech",
    "FullName": "GraphenTech (77G)"
  },
  {
    "Symbol": "HIDU",
    "CoinName": "H-Education World",
    "FullName": "H-Education World (HIDU)"
  },
  {
    "Symbol": "USE",
    "CoinName": "Usechain Token",
    "FullName": "Usechain Token (USE)"
  },
  {
    "Symbol": "NGIN",
    "CoinName": "Ngin",
    "FullName": "Ngin (NGIN)"
  },
  {
    "Symbol": "KOTO",
    "CoinName": "Koto",
    "FullName": "Koto (KOTO)"
  },
  {
    "Symbol": "GENX",
    "CoinName": "Genesis Network",
    "FullName": "Genesis Network (GENX)"
  },
  {
    "Symbol": "XSC",
    "CoinName": "Hyperspace",
    "FullName": "Hyperspace (XSC)"
  },
  {
    "Symbol": "VTL",
    "CoinName": "Vertical",
    "FullName": "Vertical (VTL)"
  },
  {
    "Symbol": "SECI",
    "CoinName": "Seci",
    "FullName": "Seci (SECI)"
  },
  {
    "Symbol": "SPRTZ",
    "CoinName": "SpritzCoin",
    "FullName": "SpritzCoin (SPRTZ)"
  },
  {
    "Symbol": "C25",
    "CoinName": "C25 Coin",
    "FullName": "C25 Coin (C25)"
  },
  {
    "Symbol": "LYN",
    "CoinName": "LYNCHPIN Token",
    "FullName": "LYNCHPIN Token (LYN)"
  },
  {
    "Symbol": "STASH",
    "CoinName": "BitStash",
    "FullName": "BitStash (STASH)"
  },
  {
    "Symbol": "HERB",
    "CoinName": "HerbCoin",
    "FullName": "HerbCoin (HERB)"
  },
  {
    "Symbol": "AQUA",
    "CoinName": "Aquachain",
    "FullName": "Aquachain (AQUA)"
  },
  {
    "Symbol": "XQR",
    "CoinName": "Qredit",
    "FullName": "Qredit (XQR)"
  },
  {
    "Symbol": "URX",
    "CoinName": "URANIUMX",
    "FullName": "URANIUMX (URX)"
  },
  {
    "Symbol": "KSYS",
    "CoinName": "K-Systems",
    "FullName": "K-Systems (KSYS)"
  },
  {
    "Symbol": "MTEL",
    "CoinName": "MEDoctor",
    "FullName": "MEDoctor (MTEL)"
  },
  {
    "Symbol": "MTT",
    "CoinName": "MulTra",
    "FullName": "MulTra (MTT)"
  },
  {
    "Symbol": "MITC",
    "CoinName": "MusicLife",
    "FullName": "MusicLife (MITC)"
  },
  {
    "Symbol": "BBTC",
    "CoinName": "BlakeBitcoin",
    "FullName": "BlakeBitcoin (BBTC)"
  },
  {
    "Symbol": "UMO",
    "CoinName": "Universal Molecule",
    "FullName": "Universal Molecule (UMO)"
  },
  {
    "Symbol": "MUST",
    "CoinName": "MUST Protocol",
    "FullName": "MUST Protocol (MUST)"
  },
  {
    "Symbol": "ELT",
    "CoinName": "Electron",
    "FullName": "Electron (ELT)"
  },
  {
    "Symbol": "XNB",
    "CoinName": "Xeonbit",
    "FullName": "Xeonbit (XNB)"
  },
  {
    "Symbol": "RBTC",
    "CoinName": "Smart Bitcoin",
    "FullName": "Smart Bitcoin (RBTC)"
  },
  {
    "Symbol": "BTCEX",
    "CoinName": "BtcEX",
    "FullName": "BtcEX (BTCEX)"
  },
  {
    "Symbol": "PIRATE",
    "CoinName": "PirateCash",
    "FullName": "PirateCash (PIRATE)"
  },
  {
    "Symbol": "EXO",
    "CoinName": "Exosis",
    "FullName": "Exosis (EXO)"
  },
  {
    "Symbol": "ONAM",
    "CoinName": "ONAM",
    "FullName": "ONAM (ONAM)"
  },
  {
    "Symbol": "BIH",
    "CoinName": "BitHostCoin",
    "FullName": "BitHostCoin (BIH)"
  },
  {
    "Symbol": "KARMA",
    "CoinName": "Karma",
    "FullName": "Karma (KARMA)"
  },
  {
    "Symbol": "CJR",
    "CoinName": "Conjure",
    "FullName": "Conjure (CJR)"
  },
  {
    "Symbol": "BLTG",
    "CoinName": "Block-Logic",
    "FullName": "Block-Logic (BLTG)"
  },
  {
    "Symbol": "AGVC",
    "CoinName": "AgaveCoin",
    "FullName": "AgaveCoin (AGVC)"
  },
  {
    "Symbol": "ASGC",
    "CoinName": "ASG",
    "FullName": "ASG (ASGC)"
  },
  {
    "Symbol": "MIMI",
    "CoinName": "MIMI Money",
    "FullName": "MIMI Money (MIMI)"
  },
  {
    "Symbol": "PXG",
    "CoinName": "PlayGame",
    "FullName": "PlayGame (PXG)"
  },
  {
    "Symbol": "ORM",
    "CoinName": "ORIUM",
    "FullName": "ORIUM (ORM)"
  },
  {
    "Symbol": "TRET",
    "CoinName": "Tourist Review",
    "FullName": "Tourist Review (TRET)"
  },
  {
    "Symbol": "SET",
    "CoinName": "Securosys",
    "FullName": "Securosys (SET)"
  },
  {
    "Symbol": "BEER",
    "CoinName": "BEER Coin",
    "FullName": "BEER Coin (BEER)"
  },
  {
    "Symbol": "TIMI",
    "CoinName": "Timicoin",
    "FullName": "Timicoin (TIMI)"
  },
  {
    "Symbol": "NRP",
    "CoinName": "Neural Protocol",
    "FullName": "Neural Protocol (NRP)"
  },
  {
    "Symbol": "CEN",
    "CoinName": "Coinsuper Ecosystem Network",
    "FullName": "Coinsuper Ecosystem Network (CEN)"
  },
  {
    "Symbol": "GARD",
    "CoinName": "Hashgard",
    "FullName": "Hashgard (GARD)"
  },
  {
    "Symbol": "UNX",
    "CoinName": "UNEOX",
    "FullName": "UNEOX (UNX)"
  },
  {
    "Symbol": "OWC",
    "CoinName": "Oduwa",
    "FullName": "Oduwa (OWC)"
  },
  {
    "Symbol": "WOWX",
    "CoinName": "WOWX",
    "FullName": "WOWX (WOWX)"
  },
  {
    "Symbol": "SRX",
    "CoinName": "Solarex",
    "FullName": "Solarex (SRX)"
  },
  {
    "Symbol": "THO",
    "CoinName": "Athero",
    "FullName": "Athero (THO)"
  },
  {
    "Symbol": "TOSS",
    "CoinName": "PROOF OF TOSS",
    "FullName": "PROOF OF TOSS (TOSS)"
  },
  {
    "Symbol": "KMX",
    "CoinName": "KiMex",
    "FullName": "KiMex (KMX)"
  },
  {
    "Symbol": "SKI",
    "CoinName": "Skillchain",
    "FullName": "Skillchain (SKI)"
  },
  {
    "Symbol": "SG",
    "CoinName": "SocialGood",
    "FullName": "SocialGood (SG)"
  },
  {
    "Symbol": "SUNEX",
    "CoinName": "The Sun Exchange",
    "FullName": "The Sun Exchange (SUNEX)"
  },
  {
    "Symbol": "VIDY",
    "CoinName": "Vidy",
    "FullName": "Vidy (VIDY)"
  },
  {
    "Symbol": "XRBT",
    "CoinName": "Xtribe",
    "FullName": "Xtribe (XRBT)"
  },
  {
    "Symbol": "ALUX",
    "CoinName": "Alux Bank",
    "FullName": "Alux Bank (ALUX)"
  },
  {
    "Symbol": "XBOND",
    "CoinName": "Bitacium",
    "FullName": "Bitacium (XBOND)"
  },
  {
    "Symbol": "BOSE",
    "CoinName": "Bitbose",
    "FullName": "Bitbose (BOSE)"
  },
  {
    "Symbol": "JOY",
    "CoinName": "Joycoin",
    "FullName": "Joycoin (JOY)"
  },
  {
    "Symbol": "WETH",
    "CoinName": "WETH",
    "FullName": "WETH (WETH)"
  },
  {
    "Symbol": "GBE",
    "CoinName": "Godbex",
    "FullName": "Godbex (GBE)"
  },
  {
    "Symbol": "HRBE",
    "CoinName": "Harambee Token",
    "FullName": "Harambee Token (HRBE)"
  },
  {
    "Symbol": "BEAM",
    "CoinName": "Beam",
    "FullName": "Beam (BEAM)"
  },
  {
    "Symbol": "MILC",
    "CoinName": "MIcro Licensing Coin",
    "FullName": "MIcro Licensing Coin (MILC)"
  },
  {
    "Symbol": "PINMO",
    "CoinName": "Pinmo",
    "FullName": "Pinmo (PINMO)"
  },
  {
    "Symbol": "POPC",
    "CoinName": "PopChest",
    "FullName": "PopChest (POPC)"
  },
  {
    "Symbol": "RGT",
    "CoinName": "Retail.Global",
    "FullName": "Retail.Global (RGT)"
  },
  {
    "Symbol": "SCOP",
    "CoinName": "Scopuly",
    "FullName": "Scopuly (SCOP)"
  },
  {
    "Symbol": "BMG",
    "CoinName": "Borneo",
    "FullName": "Borneo (BMG)"
  },
  {
    "Symbol": "OXY2",
    "CoinName": "Cryptoxygen",
    "FullName": "Cryptoxygen (OXY2)"
  },
  {
    "Symbol": "VC",
    "CoinName": "Vecap",
    "FullName": "Vecap (VC)"
  },
  {
    "Symbol": "FAIRC",
    "CoinName": "Faireum Token",
    "FullName": "Faireum Token (FAIRC)"
  },
  {
    "Symbol": "BPN",
    "CoinName": "beepnow",
    "FullName": "beepnow (BPN)"
  },
  {
    "Symbol": "DYC",
    "CoinName": "Dycoin",
    "FullName": "Dycoin (DYC)"
  },
  {
    "Symbol": "LN",
    "CoinName": "LINK",
    "FullName": "LINK (LN)"
  },
  {
    "Symbol": "FTR",
    "CoinName": "FactR",
    "FullName": "FactR (FTR)"
  },
  {
    "Symbol": "RWE",
    "CoinName": "Real-World Evidence",
    "FullName": "Real-World Evidence (RWE)"
  },
  {
    "Symbol": "YSH",
    "CoinName": "Yoshi",
    "FullName": "Yoshi (YSH)"
  },
  {
    "Symbol": "TASH",
    "CoinName": "Smart Trip Platform",
    "FullName": "Smart Trip Platform (TASH)"
  },
  {
    "Symbol": "TXM",
    "CoinName": "TMONEY",
    "FullName": "TMONEY (TXM)"
  },
  {
    "Symbol": "TRAVEL",
    "CoinName": "Travelvee",
    "FullName": "Travelvee (TRAVEL)"
  },
  {
    "Symbol": "ACA",
    "CoinName": "ACA Token",
    "FullName": "ACA Token (ACA)"
  },
  {
    "Symbol": "AAT",
    "CoinName": "Agricultural Trade Chain",
    "FullName": "Agricultural Trade Chain (AAT)"
  },
  {
    "Symbol": "AUPC",
    "CoinName": "Authpaper",
    "FullName": "Authpaper (AUPC)"
  },
  {
    "Symbol": "COSX",
    "CoinName": "Cosmecoin",
    "FullName": "Cosmecoin (COSX)"
  },
  {
    "Symbol": "DNTX",
    "CoinName": "DNAtix",
    "FullName": "DNAtix (DNTX)"
  },
  {
    "Symbol": "HART",
    "CoinName": "HARA",
    "FullName": "HARA (HART)"
  },
  {
    "Symbol": "KSS",
    "CoinName": "Krosscoin",
    "FullName": "Krosscoin (KSS)"
  },
  {
    "Symbol": "LIPS",
    "CoinName": "LipChain",
    "FullName": "LipChain (LIPS)"
  },
  {
    "Symbol": "MIBO",
    "CoinName": "miBoodle",
    "FullName": "miBoodle (MIBO)"
  },
  {
    "Symbol": "BRIX",
    "CoinName": "OpenBrix",
    "FullName": "OpenBrix (BRIX)"
  },
  {
    "Symbol": "NZO",
    "CoinName": "NonZero",
    "FullName": "NonZero (NZO)"
  },
  {
    "Symbol": "PTT",
    "CoinName": "Pink Taxi Token",
    "FullName": "Pink Taxi Token (PTT)"
  },
  {
    "Symbol": "XRK",
    "CoinName": "RecordsKeeper",
    "FullName": "RecordsKeeper (XRK)"
  },
  {
    "Symbol": "RMOB",
    "CoinName": "RewardMob",
    "FullName": "RewardMob (RMOB)"
  },
  {
    "Symbol": "XRF",
    "CoinName": "Sarf",
    "FullName": "Sarf (XRF)"
  },
  {
    "Symbol": "POD",
    "CoinName": "Smart League",
    "FullName": "Smart League (POD)"
  },
  {
    "Symbol": "SUT",
    "CoinName": "Suapp",
    "FullName": "Suapp (SUT)"
  },
  {
    "Symbol": "WHO",
    "CoinName": "Truwho",
    "FullName": "Truwho (WHO)"
  },
  {
    "Symbol": "ID",
    "CoinName": "TrigID",
    "FullName": "TrigID (ID)"
  },
  {
    "Symbol": "VRX Token",
    "CoinName": "VIARIUM",
    "FullName": "VIARIUM (VRX Token)"
  },
  {
    "Symbol": "WDX",
    "CoinName": "WeiDex",
    "FullName": "WeiDex (WDX)"
  },
  {
    "Symbol": "AIOT",
    "CoinName": "AIOT Token",
    "FullName": "AIOT Token (AIOT)"
  },
  {
    "Symbol": "AMOS",
    "CoinName": "Amos",
    "FullName": "Amos (AMOS)"
  },
  {
    "Symbol": "ESW",
    "CoinName": "eSwitch®",
    "FullName": "eSwitch® (ESW)"
  },
  {
    "Symbol": "XBANK",
    "CoinName": "Bancryp",
    "FullName": "Bancryp (XBANK)"
  },
  {
    "Symbol": "OX",
    "CoinName": "betbox",
    "FullName": "betbox (OX)"
  },
  {
    "Symbol": "KRO",
    "CoinName": "Betoken",
    "FullName": "Betoken (KRO)"
  },
  {
    "Symbol": "CAID",
    "CoinName": "ClearAid",
    "FullName": "ClearAid (CAID)"
  },
  {
    "Symbol": "GUAR",
    "CoinName": "Guarium",
    "FullName": "Guarium (GUAR)"
  },
  {
    "Symbol": "LTE",
    "CoinName": "Local Token Exchange",
    "FullName": "Local Token Exchange (LTE)"
  },
  {
    "Symbol": "MEL",
    "CoinName": "Melior AI",
    "FullName": "Melior AI (MEL)"
  },
  {
    "Symbol": "NEXXO",
    "CoinName": "Nexxo",
    "FullName": "Nexxo (NEXXO)"
  },
  {
    "Symbol": "QNTR",
    "CoinName": "Quantor",
    "FullName": "Quantor (QNTR)"
  },
  {
    "Symbol": "BTCUS",
    "CoinName": "Bitcoinus",
    "FullName": "Bitcoinus (BTCUS)"
  },
  {
    "Symbol": "RAYS",
    "CoinName": "Rays Network",
    "FullName": "Rays Network (RAYS)"
  },
  {
    "Symbol": "MOL",
    "CoinName": "Molecule",
    "FullName": "Molecule (MOL)"
  },
  {
    "Symbol": "REME",
    "CoinName": "REME-Coin",
    "FullName": "REME-Coin (REME)"
  },
  {
    "Symbol": "RENC",
    "CoinName": "RENC",
    "FullName": "RENC (RENC)"
  },
  {
    "Symbol": "TLT",
    "CoinName": "Travelertoken",
    "FullName": "Travelertoken (TLT)"
  },
  {
    "Symbol": "EMOT",
    "CoinName": "Sentigraph.io",
    "FullName": "Sentigraph.io (EMOT)"
  },
  {
    "Symbol": "USAT",
    "CoinName": "USAT",
    "FullName": "USAT (USAT)"
  },
  {
    "Symbol": "VOLAIR",
    "CoinName": "VolAir",
    "FullName": "VolAir (VOLAIR)"
  },
  {
    "Symbol": "AIRT",
    "CoinName": "Aircraft",
    "FullName": "Aircraft (AIRT)"
  },
  {
    "Symbol": "VTRD",
    "CoinName": "VTradeExchange",
    "FullName": "VTradeExchange (VTRD)"
  },
  {
    "Symbol": "GALI",
    "CoinName": "Galilel",
    "FullName": "Galilel (GALI)"
  },
  {
    "Symbol": "PLAI",
    "CoinName": "Plair",
    "FullName": "Plair (PLAI)"
  },
  {
    "Symbol": "BGG",
    "CoinName": "Bgogo Token",
    "FullName": "Bgogo Token (BGG)"
  },
  {
    "Symbol": "HEDG",
    "CoinName": "HedgeTrade",
    "FullName": "HedgeTrade (HEDG)"
  },
  {
    "Symbol": "ERE",
    "CoinName": "Erecoin",
    "FullName": "Erecoin (ERE)"
  },
  {
    "Symbol": "BTU",
    "CoinName": "BTU Protocol",
    "FullName": "BTU Protocol (BTU)"
  },
  {
    "Symbol": "APS",
    "CoinName": "APRES",
    "FullName": "APRES (APS)"
  },
  {
    "Symbol": "XBX",
    "CoinName": "BiteX",
    "FullName": "BiteX (XBX)"
  },
  {
    "Symbol": "FFUEL",
    "CoinName": "getFIFO",
    "FullName": "getFIFO (FFUEL)"
  },
  {
    "Symbol": "NSP",
    "CoinName": "NOMAD.space",
    "FullName": "NOMAD.space (NSP)"
  },
  {
    "Symbol": "SNcoin",
    "CoinName": "ScientificCoin",
    "FullName": "ScientificCoin (SNcoin)"
  },
  {
    "Symbol": "TTNT",
    "CoinName": "TITA Project",
    "FullName": "TITA Project (TTNT)"
  },
  {
    "Symbol": "BWT2",
    "CoinName": "Bitwin 2.0",
    "FullName": "Bitwin 2.0 (BWT2)"
  },
  {
    "Symbol": "OATH",
    "CoinName": "OATH Protocol",
    "FullName": "OATH Protocol (OATH)"
  },
  {
    "Symbol": "SBA",
    "CoinName": "simplyBrand",
    "FullName": "simplyBrand (SBA)"
  },
  {
    "Symbol": "DXG",
    "CoinName": "DexAge",
    "FullName": "DexAge (DXG)"
  },
  {
    "Symbol": "EXTP",
    "CoinName": "TradePlace",
    "FullName": "TradePlace (EXTP)"
  },
  {
    "Symbol": "ZEX",
    "CoinName": "Zaddex",
    "FullName": "Zaddex (ZEX)"
  },
  {
    "Symbol": "XCZ",
    "CoinName": "XCOYNZ",
    "FullName": "XCOYNZ (XCZ)"
  },
  {
    "Symbol": "CBUK",
    "CoinName": "CurveBlock",
    "FullName": "CurveBlock (CBUK)"
  },
  {
    "Symbol": "HIX",
    "CoinName": "HELIX Orange",
    "FullName": "HELIX Orange (HIX)"
  },
  {
    "Symbol": "TGN",
    "CoinName": "TerraGreen",
    "FullName": "TerraGreen (TGN)"
  },
  {
    "Symbol": "COGS",
    "CoinName": "Cogmento",
    "FullName": "Cogmento (COGS)"
  },
  {
    "Symbol": "XRM",
    "CoinName": "Aerum",
    "FullName": "Aerum (XRM)"
  },
  {
    "Symbol": "CCOIN",
    "CoinName": "Creditcoin",
    "FullName": "Creditcoin (CCOIN)"
  },
  {
    "Symbol": "APZ",
    "CoinName": "Alprockz",
    "FullName": "Alprockz (APZ)"
  },
  {
    "Symbol": "ICHX",
    "CoinName": "IceChain",
    "FullName": "IceChain (ICHX)"
  },
  {
    "Symbol": "IMP",
    "CoinName": "CoinIMP",
    "FullName": "CoinIMP (IMP)"
  },
  {
    "Symbol": "FORCE",
    "CoinName": "TriForce Tokens",
    "FullName": "TriForce Tokens (FORCE)"
  },
  {
    "Symbol": "BTMX",
    "CoinName": "BitMax Token",
    "FullName": "BitMax Token (BTMX)"
  },
  {
    "Symbol": "QUSD",
    "CoinName": "QUSD",
    "FullName": "QUSD (QUSD)"
  },
  {
    "Symbol": "BTH",
    "CoinName": "Bithereum",
    "FullName": "Bithereum (BTH)"
  },
  {
    "Symbol": "PLG",
    "CoinName": "Pledgecamp",
    "FullName": "Pledgecamp (PLG)"
  },
  {
    "Symbol": "PVP",
    "CoinName": "PVPChain",
    "FullName": "PVPChain (PVP)"
  },
  {
    "Symbol": "EMANATE",
    "CoinName": "EMANATE",
    "FullName": "EMANATE (EMANATE)"
  },
  {
    "Symbol": "RAIZER",
    "CoinName": "RAIZER",
    "FullName": "RAIZER (RAIZER)"
  },
  {
    "Symbol": "CP",
    "CoinName": "CryptoProfile",
    "FullName": "CryptoProfile (CP)"
  },
  {
    "Symbol": "DAYTA",
    "CoinName": "Dayta",
    "FullName": "Dayta (DAYTA)"
  },
  {
    "Symbol": "ORV",
    "CoinName": "Orvium",
    "FullName": "Orvium (ORV)"
  },
  {
    "Symbol": "CWT",
    "CoinName": "Coinware",
    "FullName": "Coinware (CWT)"
  },
  {
    "Symbol": "AQU",
    "CoinName": "aQuest",
    "FullName": "aQuest (AQU)"
  },
  {
    "Symbol": "CXG",
    "CoinName": "Coinxes",
    "FullName": "Coinxes (CXG)"
  },
  {
    "Symbol": "CHFT",
    "CoinName": "Crypto Holding",
    "FullName": "Crypto Holding (CHFT)"
  },
  {
    "Symbol": "VNTY",
    "CoinName": "VENOTY",
    "FullName": "VENOTY (VNTY)"
  },
  {
    "Symbol": "BTR",
    "CoinName": "Bither",
    "FullName": "Bither (BTR)"
  },
  {
    "Symbol": "SSX",
    "CoinName": "SOMESING",
    "FullName": "SOMESING (SSX)"
  },
  {
    "Symbol": "KLK",
    "CoinName": "Klickzie",
    "FullName": "Klickzie (KLK)"
  },
  {
    "Symbol": "LVN",
    "CoinName": "LivenPay",
    "FullName": "LivenPay (LVN)"
  },
  {
    "Symbol": "FFCT",
    "CoinName": "FortFC",
    "FullName": "FortFC (FFCT)"
  },
  {
    "Symbol": "AZU",
    "CoinName": "Azultec",
    "FullName": "Azultec (AZU)"
  },
  {
    "Symbol": "ARQ",
    "CoinName": "ArQmA",
    "FullName": "ArQmA (ARQ)"
  },
  {
    "Symbol": "WU",
    "CoinName": "WULET",
    "FullName": "WULET (WU)"
  },
  {
    "Symbol": "ZUC",
    "CoinName": "Zeux",
    "FullName": "Zeux (ZUC)"
  },
  {
    "Symbol": "FFM",
    "CoinName": "Files.fm Library",
    "FullName": "Files.fm Library (FFM)"
  },
  {
    "Symbol": "DRF",
    "CoinName": "Drife",
    "FullName": "Drife (DRF)"
  },
  {
    "Symbol": "GTIB",
    "CoinName": "Global Trust Coin",
    "FullName": "Global Trust Coin (GTIB)"
  },
  {
    "Symbol": "CR",
    "CoinName": "CryptoRiyal",
    "FullName": "CryptoRiyal (CR)"
  },
  {
    "Symbol": "VEO",
    "CoinName": "Amoveo",
    "FullName": "Amoveo (VEO)"
  },
  {
    "Symbol": "DLA",
    "CoinName": "Dolla",
    "FullName": "Dolla (DLA)"
  },
  {
    "Symbol": "AFO",
    "CoinName": "AllForOneBusiness",
    "FullName": "AllForOneBusiness (AFO)"
  },
  {
    "Symbol": "BB1",
    "CoinName": "Bitbond",
    "FullName": "Bitbond (BB1)"
  },
  {
    "Symbol": "FET",
    "CoinName": "Fetch.AI",
    "FullName": "Fetch.AI (FET)"
  },
  {
    "Symbol": "DAGT",
    "CoinName": "Digital Asset Guarantee Token",
    "FullName": "Digital Asset Guarantee Token (DAGT)"
  },
  {
    "Symbol": "GVE",
    "CoinName": "Globalvillage Ecosystem",
    "FullName": "Globalvillage Ecosystem (GVE)"
  },
  {
    "Symbol": "IDT",
    "CoinName": "InvestDigital",
    "FullName": "InvestDigital (IDT)"
  },
  {
    "Symbol": "KUV",
    "CoinName": "Kuverit",
    "FullName": "Kuverit (KUV)"
  },
  {
    "Symbol": "YACHTCO",
    "CoinName": "Yachtco",
    "FullName": "Yachtco (YACHTCO)"
  },
  {
    "Symbol": "BOLTT",
    "CoinName": "BolttCoin",
    "FullName": "BolttCoin (BOLTT)"
  },
  {
    "Symbol": "ENCX",
    "CoinName": "Encrybit",
    "FullName": "Encrybit (ENCX)"
  },
  {
    "Symbol": "VALID",
    "CoinName": "Validator Token",
    "FullName": "Validator Token (VALID)"
  },
  {
    "Symbol": "TYM",
    "CoinName": "Tryvium",
    "FullName": "Tryvium (TYM)"
  },
  {
    "Symbol": "VENUS",
    "CoinName": "VenusEnergy",
    "FullName": "VenusEnergy (VENUS)"
  },
  {
    "Symbol": "HYGH",
    "CoinName": "HYGH",
    "FullName": "HYGH (HYGH)"
  },
  {
    "Symbol": "ALCE",
    "CoinName": "Alcedo",
    "FullName": "Alcedo (ALCE)"
  },
  {
    "Symbol": "NODIS",
    "CoinName": "Nodis",
    "FullName": "Nodis (NODIS)"
  },
  {
    "Symbol": "MNC",
    "CoinName": "MainCoin",
    "FullName": "MainCoin (MNC)"
  },
  {
    "Symbol": "USDS",
    "CoinName": "StableUSD",
    "FullName": "StableUSD (USDS)"
  },
  {
    "Symbol": "HVE",
    "CoinName": "UHIVE",
    "FullName": "UHIVE (HVE)"
  },
  {
    "Symbol": "XR",
    "CoinName": "Gofind XR",
    "FullName": "Gofind XR (XR)"
  },
  {
    "Symbol": "VALOR",
    "CoinName": "Smart Valor",
    "FullName": "Smart Valor (VALOR)"
  },
  {
    "Symbol": "ALP",
    "CoinName": "Alphacon",
    "FullName": "Alphacon (ALP)"
  },
  {
    "Symbol": "EMU",
    "CoinName": "eMusic",
    "FullName": "eMusic (EMU)"
  },
  {
    "Symbol": "GST",
    "CoinName": "GameStars",
    "FullName": "GameStars (GST)"
  },
  {
    "Symbol": "ARTC",
    "CoinName": "Artcoin",
    "FullName": "Artcoin (ARTC)"
  },
  {
    "Symbol": "NRM",
    "CoinName": "Neuromachine",
    "FullName": "Neuromachine (NRM)"
  },
  {
    "Symbol": "APOD",
    "CoinName": "AirPod",
    "FullName": "AirPod (APOD)"
  },
  {
    "Symbol": "AX",
    "CoinName": "AlphaX",
    "FullName": "AlphaX (AX)"
  },
  {
    "Symbol": "CWEX",
    "CoinName": "Crypto Wine Exchange",
    "FullName": "Crypto Wine Exchange (CWEX)"
  },
  {
    "Symbol": "CLDX",
    "CoinName": "Cloverdex",
    "FullName": "Cloverdex (CLDX)"
  },
  {
    "Symbol": "ECTE",
    "CoinName": "EurocoinToken",
    "FullName": "EurocoinToken (ECTE)"
  },
  {
    "Symbol": "LABX",
    "CoinName": "Stakinglab",
    "FullName": "Stakinglab (LABX)"
  },
  {
    "Symbol": "ENV",
    "CoinName": "Envienta",
    "FullName": "Envienta (ENV)"
  },
  {
    "Symbol": "ANKR",
    "CoinName": "Ankr Network",
    "FullName": "Ankr Network (ANKR)"
  },
  {
    "Symbol": "GEP",
    "CoinName": "Gaia",
    "FullName": "Gaia (GEP)"
  },
  {
    "Symbol": "IZA",
    "CoinName": "Inzura",
    "FullName": "Inzura (IZA)"
  },
  {
    "Symbol": "GBA",
    "CoinName": "Geeba",
    "FullName": "Geeba (GBA)"
  },
  {
    "Symbol": "ITU",
    "CoinName": "iTrue",
    "FullName": "iTrue (ITU)"
  },
  {
    "Symbol": "FANZ",
    "CoinName": "FanChain",
    "FullName": "FanChain (FANZ)"
  },
  {
    "Symbol": "CSPN",
    "CoinName": "Crypto Sports",
    "FullName": "Crypto Sports (CSPN)"
  },
  {
    "Symbol": "CCH",
    "CoinName": "Coinchase",
    "FullName": "Coinchase (CCH)"
  },
  {
    "Symbol": "XOV",
    "CoinName": "XOVBank",
    "FullName": "XOVBank (XOV)"
  },
  {
    "Symbol": "EQUAD",
    "CoinName": "Quadrant Protocol",
    "FullName": "Quadrant Protocol (eQUAD)"
  },
  {
    "Symbol": "CURA",
    "CoinName": "Cura Network",
    "FullName": "Cura Network (CURA)"
  },
  {
    "Symbol": "ERA",
    "CoinName": "ETHA",
    "FullName": "ETHA (ERA)"
  },
  {
    "Symbol": "MAKE",
    "CoinName": "MAKE",
    "FullName": "MAKE (MAKE)"
  },
  {
    "Symbol": "SPKZ",
    "CoinName": "Spokkz",
    "FullName": "Spokkz (SPKZ)"
  },
  {
    "Symbol": "AWC",
    "CoinName": "Atomic Wallet Coin",
    "FullName": "Atomic Wallet Coin (AWC)"
  },
  {
    "Symbol": "DIS",
    "CoinName": "DiscoveryIoT",
    "FullName": "DiscoveryIoT (DIS)"
  },
  {
    "Symbol": "SCRIBE",
    "CoinName": "Scribe Network",
    "FullName": "Scribe Network (SCRIBE)"
  },
  {
    "Symbol": "INXM",
    "CoinName": "InMax",
    "FullName": "InMax (INXM)"
  },
  {
    "Symbol": "SQR",
    "CoinName": "Squeezer",
    "FullName": "Squeezer (SQR)"
  },
  {
    "Symbol": "GNC",
    "CoinName": "Greencoin",
    "FullName": "Greencoin (GNC)"
  },
  {
    "Symbol": "WVR",
    "CoinName": "Weave",
    "FullName": "Weave (WVR)"
  },
  {
    "Symbol": "PHT",
    "CoinName": "Photon Token",
    "FullName": "Photon Token (PHT)"
  },
  {
    "Symbol": "WHN",
    "CoinName": "Windhan Energy",
    "FullName": "Windhan Energy (WHN)"
  },
  {
    "Symbol": "CRO",
    "CoinName": "Crypto.com Chain Token",
    "FullName": "Crypto.com Chain Token (CRO)"
  },
  {
    "Symbol": "LYTX",
    "CoinName": "LYTIX",
    "FullName": "LYTIX (LYTX)"
  },
  {
    "Symbol": "TJA",
    "CoinName": "TapJets",
    "FullName": "TapJets (TJA)"
  },
  {
    "Symbol": "InBit",
    "CoinName": "PrepayWay",
    "FullName": "PrepayWay (InBit)"
  },
  {
    "Symbol": "DIO",
    "CoinName": "Decimated",
    "FullName": "Decimated (DIO)"
  },
  {
    "Symbol": "LIC",
    "CoinName": "Ligercoin",
    "FullName": "Ligercoin (LIC)"
  },
  {
    "Symbol": "SCA",
    "CoinName": "SiaClassic",
    "FullName": "SiaClassic (SCA)"
  },
  {
    "Symbol": "XOS",
    "CoinName": "Excalibur OS",
    "FullName": "Excalibur OS (XOS)"
  },
  {
    "Symbol": "VSYS",
    "CoinName": "V Systems",
    "FullName": "V Systems (VSYS)"
  },
  {
    "Symbol": "UGT",
    "CoinName": "Universal Games Token",
    "FullName": "Universal Games Token (UGT)"
  },
  {
    "Symbol": "ZEON",
    "CoinName": "Zeon Network",
    "FullName": "Zeon Network (ZEON)"
  },
  {
    "Symbol": "XRX",
    "CoinName": "Global Property Register",
    "FullName": "Global Property Register (XRX)"
  },
  {
    "Symbol": "PARQ",
    "CoinName": "PARQ",
    "FullName": "PARQ (PARQ)"
  },
  {
    "Symbol": "T4M",
    "CoinName": "Tap4.Menu",
    "FullName": "Tap4.Menu (T4M)"
  },
  {
    "Symbol": "TFF",
    "CoinName": "TheFaustFlick",
    "FullName": "TheFaustFlick (TFF)"
  },
  {
    "Symbol": "IZZY",
    "CoinName": "Izzy",
    "FullName": "Izzy (IZZY)"
  },
  {
    "Symbol": "SONT",
    "CoinName": "Sonata.ai",
    "FullName": "Sonata.ai (SONT)"
  },
  {
    "Symbol": "SWI",
    "CoinName": "Swinca",
    "FullName": "Swinca (SWI)"
  },
  {
    "Symbol": "LUNES",
    "CoinName": "Lunes",
    "FullName": "Lunes (LUNES)"
  },
  {
    "Symbol": "EDEXA",
    "CoinName": "edeXa Security Token",
    "FullName": "edeXa Security Token (EDEXA)"
  },
  {
    "Symbol": "PPI",
    "CoinName": "Primpy",
    "FullName": "Primpy (PPI)"
  },
  {
    "Symbol": "ANTE",
    "CoinName": "ANTE",
    "FullName": "ANTE (ANTE)"
  },
  {
    "Symbol": "TRXDICE",
    "CoinName": "TRONdice",
    "FullName": "TRONdice (TRXDICE)"
  },
  {
    "Symbol": "AFTT",
    "CoinName": "Africa Trading Chain",
    "FullName": "Africa Trading Chain (AFTT)"
  },
  {
    "Symbol": "TRXWIN",
    "CoinName": "TronWin",
    "FullName": "TronWin (TRXWIN)"
  },
  {
    "Symbol": "IGG",
    "CoinName": "IG Gold",
    "FullName": "IG Gold (IGG)"
  },
  {
    "Symbol": "MIG",
    "CoinName": "Migranet",
    "FullName": "Migranet (MIG)"
  },
  {
    "Symbol": "BWN",
    "CoinName": "BitWings",
    "FullName": "BitWings (BWN)"
  },
  {
    "Symbol": "IPUX",
    "CoinName": "IPUX",
    "FullName": "IPUX (IPUX)"
  },
  {
    "Symbol": "PCC",
    "CoinName": "PCORE",
    "FullName": "PCORE (PCC)"
  },
  {
    "Symbol": "DARB",
    "CoinName": "Darb Token",
    "FullName": "Darb Token (DARB)"
  },
  {
    "Symbol": "MBTX",
    "CoinName": "MinedBlock",
    "FullName": "MinedBlock (MBTX)"
  },
  {
    "Symbol": "CFun",
    "CoinName": "CFun",
    "FullName": "CFun (CFun)"
  },
  {
    "Symbol": "SLC",
    "CoinName": "SLICE",
    "FullName": "SLICE (SLC)"
  },
  {
    "Symbol": "AAS",
    "CoinName": "aassio",
    "FullName": "aassio (AAS)"
  },
  {
    "Symbol": "2GT",
    "CoinName": "2GETHER",
    "FullName": "2GETHER (2GT)"
  },
  {
    "Symbol": "VOLLAR",
    "CoinName": "Vollar",
    "FullName": "Vollar (VOLLAR)"
  },
  {
    "Symbol": "DXN",
    "CoinName": "DEXON",
    "FullName": "DEXON (DXN)"
  },
  {
    "Symbol": "BUYI",
    "CoinName": "Buying.com",
    "FullName": "Buying.com (BUYI)"
  },
  {
    "Symbol": "AFCT",
    "CoinName": "Allforcrypto",
    "FullName": "Allforcrypto (AFCT)"
  },
  {
    "Symbol": "REDI",
    "CoinName": "REDi",
    "FullName": "REDi (REDi)"
  },
  {
    "Symbol": "INET",
    "CoinName": "Insure Network",
    "FullName": "Insure Network (INET)"
  },
  {
    "Symbol": "WHY",
    "CoinName": "Whisky Token",
    "FullName": "Whisky Token (WHY)"
  },
  {
    "Symbol": "URIS",
    "CoinName": "Uris",
    "FullName": "Uris (URIS)"
  },
  {
    "Symbol": "ADUX",
    "CoinName": "Adult X Token",
    "FullName": "Adult X Token (ADUX)"
  },
  {
    "Symbol": "HRD",
    "CoinName": "Hoard",
    "FullName": "Hoard (HRD)"
  },
  {
    "Symbol": "QCO",
    "CoinName": "Qravity",
    "FullName": "Qravity (QCO)"
  },
  {
    "Symbol": "SHER",
    "CoinName": "Shercoin",
    "FullName": "Shercoin (SHER)"
  },
  {
    "Symbol": "ZEROB",
    "CoinName": "ZeroBank",
    "FullName": "ZeroBank (ZEROB)"
  },
  {
    "Symbol": "ISG",
    "CoinName": "ISG",
    "FullName": "ISG (ISG)"
  },
  {
    "Symbol": "GEC",
    "CoinName": "Geco.one",
    "FullName": "Geco.one (GEC)"
  },
  {
    "Symbol": "TAGZ",
    "CoinName": "TAGZ",
    "FullName": "TAGZ (TAGZ)"
  },
  {
    "Symbol": "SKP",
    "CoinName": "Skelpy",
    "FullName": "Skelpy (SKP)"
  },
  {
    "Symbol": "MCRC",
    "CoinName": "MyCreditChain",
    "FullName": "MyCreditChain (MCRC)"
  },
  {
    "Symbol": "XGN",
    "CoinName": "Golden Currency",
    "FullName": "Golden Currency (XGN)"
  },
  {
    "Symbol": "YPTO",
    "CoinName": "YPTOspace",
    "FullName": "YPTOspace (YPTO)"
  },
  {
    "Symbol": "UBE",
    "CoinName": "Ubecoin",
    "FullName": "Ubecoin (UBE)"
  },
  {
    "Symbol": "ETGP",
    "CoinName": "Ethereum Gold Project",
    "FullName": "Ethereum Gold Project (ETGP)"
  },
  {
    "Symbol": "GFCS",
    "CoinName": "Global Funeral Care",
    "FullName": "Global Funeral Care (GFCS)"
  },
  {
    "Symbol": "RDT",
    "CoinName": "Reindeer",
    "FullName": "Reindeer (RDT)"
  },
  {
    "Symbol": "IX",
    "CoinName": "X-Block",
    "FullName": "X-Block (IX)"
  },
  {
    "Symbol": "ALIC",
    "CoinName": "AliCoin",
    "FullName": "AliCoin (ALIC)"
  },
  {
    "Symbol": "HCXP",
    "CoinName": "HCX PAY",
    "FullName": "HCX PAY (HCXP)"
  },
  {
    "Symbol": "AGRO",
    "CoinName": "Bit Agro",
    "FullName": "Bit Agro (AGRO)"
  },
  {
    "Symbol": "TFUEL",
    "CoinName": "Theta Fuel",
    "FullName": "Theta Fuel (TFUEL)"
  },
  {
    "Symbol": "BYTS",
    "CoinName": "Bytus",
    "FullName": "Bytus (BYTS)"
  },
  {
    "Symbol": "EUCX",
    "CoinName": "EUCX",
    "FullName": "EUCX (EUCX)"
  },
  {
    "Symbol": "MYTV",
    "CoinName": "MyTVchain",
    "FullName": "MyTVchain (MYTV)"
  },
  {
    "Symbol": "LEVL",
    "CoinName": "Levolution",
    "FullName": "Levolution (LEVL)"
  },
  {
    "Symbol": "PNP",
    "CoinName": "LogisticsX",
    "FullName": "LogisticsX (PNP)"
  },
  {
    "Symbol": "PRY",
    "CoinName": "PRIMARY",
    "FullName": "PRIMARY (PRY)"
  },
  {
    "Symbol": "MXM",
    "CoinName": "Maximine",
    "FullName": "Maximine (MXM)"
  },
  {
    "Symbol": "TTC",
    "CoinName": "TTC PROTOCOL",
    "FullName": "TTC PROTOCOL (TTC)"
  },
  {
    "Symbol": "BCNX",
    "CoinName": "BCNEX",
    "FullName": "BCNEX (BCNX)"
  },
  {
    "Symbol": "EVED",
    "CoinName": "Evedo",
    "FullName": "Evedo (EVED)"
  },
  {
    "Symbol": "HTER",
    "CoinName": "Biogen",
    "FullName": "Biogen (HTER)"
  },
  {
    "Symbol": "GESE",
    "CoinName": "Gese",
    "FullName": "Gese (GESE)"
  },
  {
    "Symbol": "YBK",
    "CoinName": "YourBlock",
    "FullName": "YourBlock (YBK)"
  },
  {
    "Symbol": "GIF",
    "CoinName": "Gift Token",
    "FullName": "Gift Token (GIF)"
  },
  {
    "Symbol": "2KEY",
    "CoinName": "2key.network",
    "FullName": "2key.network (2KEY)"
  },
  {
    "Symbol": "STG",
    "CoinName": "STAYGE",
    "FullName": "STAYGE (STG)"
  },
  {
    "Symbol": "DEVX",
    "CoinName": "Developeo",
    "FullName": "Developeo (DEVX)"
  },
  {
    "Symbol": "TMB",
    "CoinName": "Teambrella",
    "FullName": "Teambrella (TMB)"
  },
  {
    "Symbol": "HBRS",
    "CoinName": "HubrisOne",
    "FullName": "HubrisOne (HBRS)"
  },
  {
    "Symbol": "XPL",
    "CoinName": "Exclusive Platform",
    "FullName": "Exclusive Platform (XPL)"
  },
  {
    "Symbol": "MTSH",
    "CoinName": "Mitoshi",
    "FullName": "Mitoshi (MTSH)"
  },
  {
    "Symbol": "DAGO",
    "CoinName": "Dago Mining",
    "FullName": "Dago Mining (DAGO)"
  },
  {
    "Symbol": "TEMPO",
    "CoinName": "Tempo",
    "FullName": "Tempo (TEMPO)"
  },
  {
    "Symbol": "PPR",
    "CoinName": "Papyrus",
    "FullName": "Papyrus (PPR)"
  },
  {
    "Symbol": "REW",
    "CoinName": "Review.Network",
    "FullName": "Review.Network (REW)"
  },
  {
    "Symbol": "ORBS",
    "CoinName": "Orbs",
    "FullName": "Orbs (ORBS)"
  },
  {
    "Symbol": "STE",
    "CoinName": "Streamex",
    "FullName": "Streamex (STE)"
  },
  {
    "Symbol": "TPLAY",
    "CoinName": "TruePlay",
    "FullName": "TruePlay (TPLAY)"
  },
  {
    "Symbol": "TELE",
    "CoinName": "Miracle Tele",
    "FullName": "Miracle Tele (TELE)"
  },
  {
    "Symbol": "GYM",
    "CoinName": "Gym Rewards",
    "FullName": "Gym Rewards (GYM)"
  },
  {
    "Symbol": "UDOO",
    "CoinName": "Howdoo",
    "FullName": "Howdoo (UDOO)"
  },
  {
    "Symbol": "KICKS",
    "CoinName": "SESSIA",
    "FullName": "SESSIA (KICKS)"
  },
  {
    "Symbol": "SPORTG",
    "CoinName": "SportGift",
    "FullName": "SportGift (SPORTG)"
  },
  {
    "Symbol": "CRES",
    "CoinName": "Cresio",
    "FullName": "Cresio (CRES)"
  },
  {
    "Symbol": "AES",
    "CoinName": "Artis Aes Evolution",
    "FullName": "Artis Aes Evolution (AES)"
  },
  {
    "Symbol": "AIBK",
    "CoinName": "AIB Utility Token",
    "FullName": "AIB Utility Token (AIBK)"
  },
  {
    "Symbol": "NCC",
    "CoinName": "NeuroChain",
    "FullName": "NeuroChain (NCC)"
  },
  {
    "Symbol": "STONE",
    "CoinName": "DataBloc",
    "FullName": "DataBloc (STONE)"
  },
  {
    "Symbol": "OILD",
    "CoinName": "OilWellCoin",
    "FullName": "OilWellCoin (OILD)"
  },
  {
    "Symbol": "VLM",
    "CoinName": "Volum",
    "FullName": "Volum (VLM)"
  },
  {
    "Symbol": "LOLC",
    "CoinName": "LOL Coin",
    "FullName": "LOL Coin (LOLC)"
  },
  {
    "Symbol": "CTLX",
    "CoinName": "Cash Telex",
    "FullName": "Cash Telex (CTLX)"
  },
  {
    "Symbol": "CSM",
    "CoinName": "Consentium",
    "FullName": "Consentium (CSM)"
  },
  {
    "Symbol": "LOTES",
    "CoinName": "Loteo",
    "FullName": "Loteo (LOTES)"
  },
  {
    "Symbol": "LOTEU",
    "CoinName": "Loteo",
    "FullName": "Loteo (LOTEU)"
  },
  {
    "Symbol": "RVO",
    "CoinName": "AhrvoDEEX",
    "FullName": "AhrvoDEEX (RVO)"
  },
  {
    "Symbol": "GTH",
    "CoinName": "Gath3r",
    "FullName": "Gath3r (GTH)"
  },
  {
    "Symbol": "KBT",
    "CoinName": "Kartblock",
    "FullName": "Kartblock (KBT)"
  },
  {
    "Symbol": "USDX",
    "CoinName": "USDX Stablecoin",
    "FullName": "USDX Stablecoin (USDX)"
  },
  {
    "Symbol": "LHT",
    "CoinName": "LHT Coin",
    "FullName": "LHT Coin (LHT)"
  },
  {
    "Symbol": "PLAT",
    "CoinName": "Platinum",
    "FullName": "Platinum (PLAT)"
  },
  {
    "Symbol": "NYCREC",
    "CoinName": "NYCREC",
    "FullName": "NYCREC (NYCREC)"
  },
  {
    "Symbol": "NSD",
    "CoinName": "Nasdacoin",
    "FullName": "Nasdacoin (NSD)"
  },
  {
    "Symbol": "SOLVE",
    "CoinName": "SOLVE",
    "FullName": "SOLVE (SOLVE)"
  },
  {
    "Symbol": "BOLT",
    "CoinName": "Bolt",
    "FullName": "Bolt (BOLT)"
  },
  {
    "Symbol": "BLOC",
    "CoinName": "Blockcloud",
    "FullName": "Blockcloud (BLOC)"
  },
  {
    "Symbol": "SPT",
    "CoinName": "SPECTRUM",
    "FullName": "SPECTRUM (SPT)"
  },
  {
    "Symbol": "FBB",
    "CoinName": "FilmBusinessBuster",
    "FullName": "FilmBusinessBuster (FBB)"
  },
  {
    "Symbol": "TCST",
    "CoinName": "TCST Coin",
    "FullName": "TCST Coin (TCST)"
  },
  {
    "Symbol": "BSAFE",
    "CoinName": "BlockSafe",
    "FullName": "BlockSafe (BSAFE)"
  },
  {
    "Symbol": "DBTN",
    "CoinName": "Universa Native token",
    "FullName": "Universa Native token (DBTN)"
  },
  {
    "Symbol": "HET",
    "CoinName": "HavEther",
    "FullName": "HavEther (HET)"
  },
  {
    "Symbol": "DARC",
    "CoinName": "Konstellation",
    "FullName": "Konstellation (DARC)"
  },
  {
    "Symbol": "CMA",
    "CoinName": "Crypto Market Ads",
    "FullName": "Crypto Market Ads (CMA)"
  },
  {
    "Symbol": "MAPR",
    "CoinName": "Maya Preferred 223",
    "FullName": "Maya Preferred 223 (MAPR)"
  },
  {
    "Symbol": "THR",
    "CoinName": "Thorecoin",
    "FullName": "Thorecoin (THR)"
  },
  {
    "Symbol": "PBET",
    "CoinName": "PBET",
    "FullName": "PBET (PBET)"
  },
  {
    "Symbol": "SST",
    "CoinName": "AllSesame",
    "FullName": "AllSesame (SST)"
  },
  {
    "Symbol": "PUX",
    "CoinName": "pukkamex",
    "FullName": "pukkamex (PUX)"
  },
  {
    "Symbol": "YANU",
    "CoinName": "Yanu",
    "FullName": "Yanu (YANU)"
  },
  {
    "Symbol": "XCB",
    "CoinName": "Crypto Birds",
    "FullName": "Crypto Birds (XCB)"
  },
  {
    "Symbol": "RSF",
    "CoinName": "Royal Sting",
    "FullName": "Royal Sting (RSF)"
  },
  {
    "Symbol": "WMD",
    "CoinName": "WindMine",
    "FullName": "WindMine (WMD)"
  },
  {
    "Symbol": "TOYKEN",
    "CoinName": "Toyken",
    "FullName": "Toyken (TOYKEN)"
  },
  {
    "Symbol": "XAL",
    "CoinName": "AuxChips",
    "FullName": "AuxChips (XAL)"
  },
  {
    "Symbol": "TAS",
    "CoinName": "TARUSH",
    "FullName": "TARUSH (TAS)"
  },
  {
    "Symbol": "UNTD",
    "CoinName": "YOUnited",
    "FullName": "YOUnited (UNTD)"
  },
  {
    "Symbol": "COVA",
    "CoinName": "COVA",
    "FullName": "COVA (COVA)"
  },
  {
    "Symbol": "LAMB",
    "CoinName": "Lambda",
    "FullName": "Lambda (LAMB)"
  },
  {
    "Symbol": "GEX",
    "CoinName": "Gexan",
    "FullName": "Gexan (GEX)"
  },
  {
    "Symbol": "VDL",
    "CoinName": "Vidulum",
    "FullName": "Vidulum (VDL)"
  },
  {
    "Symbol": "TMN",
    "CoinName": "TranslateMe",
    "FullName": "TranslateMe (TMN)"
  },
  {
    "Symbol": "TCR",
    "CoinName": "TecraCoin",
    "FullName": "TecraCoin (TCR)"
  },
  {
    "Symbol": "FUNX",
    "CoinName": "Function X",
    "FullName": "Function X (FUNX)"
  },
  {
    "Symbol": "ASST",
    "CoinName": "AssetStream",
    "FullName": "AssetStream (ASST)"
  },
  {
    "Symbol": "BEET",
    "CoinName": "Beetle Coin",
    "FullName": "Beetle Coin (BEET)"
  },
  {
    "Symbol": "IFX",
    "CoinName": "IdeaFeX",
    "FullName": "IdeaFeX (IFX)"
  },
  {
    "Symbol": "MART",
    "CoinName": "Monart",
    "FullName": "Monart (MART)"
  },
  {
    "Symbol": "TC",
    "CoinName": "Titan Coin",
    "FullName": "Titan Coin (TC)"
  },
  {
    "Symbol": "DAPPT",
    "CoinName": "Dapp Token",
    "FullName": "Dapp Token (DAPPT)"
  },
  {
    "Symbol": "TTN",
    "CoinName": "Titan Coin",
    "FullName": "Titan Coin (TTN)"
  },
  {
    "Symbol": "GNTO",
    "CoinName": "GoldeNugget Token",
    "FullName": "GoldeNugget Token (GNTO)"
  },
  {
    "Symbol": "OCEAN",
    "CoinName": "Ocean Protocol",
    "FullName": "Ocean Protocol (OCEAN)"
  },
  {
    "Symbol": "LMXC",
    "CoinName": "LimonX",
    "FullName": "LimonX (LMXC)"
  },
  {
    "Symbol": "UTPL",
    "CoinName": "Utopialand",
    "FullName": "Utopialand (UTPL)"
  },
  {
    "Symbol": "GDR",
    "CoinName": "Guider.Travel",
    "FullName": "Guider.Travel (GDR)"
  },
  {
    "Symbol": "LNX",
    "CoinName": "Lunox Token",
    "FullName": "Lunox Token (LNX)"
  },
  {
    "Symbol": "ORIGIN",
    "CoinName": "Origin Foundation",
    "FullName": "Origin Foundation (ORIGIN)"
  },
  {
    "Symbol": "NTO",
    "CoinName": "Neutro Protocol",
    "FullName": "Neutro Protocol (NTO)"
  },
  {
    "Symbol": "TXT",
    "CoinName": "TuneTrade",
    "FullName": "TuneTrade (TXT)"
  },
  {
    "Symbol": "ARRR",
    "CoinName": "Pirate Chain",
    "FullName": "Pirate Chain (ARRR)"
  },
  {
    "Symbol": "SCONE",
    "CoinName": "Sportcash One",
    "FullName": "Sportcash One (SCONE)"
  },
  {
    "Symbol": "OWN",
    "CoinName": "OWNDATA",
    "FullName": "OWNDATA (OWN)"
  },
  {
    "Symbol": "VLS",
    "CoinName": "Veles",
    "FullName": "Veles (VLS)"
  },
  {
    "Symbol": "AWR",
    "CoinName": "Award",
    "FullName": "Award (AWR)"
  },
  {
    "Symbol": "QQQ",
    "CoinName": "Poseidon Network",
    "FullName": "Poseidon Network (QQQ)"
  },
  {
    "Symbol": "ULED",
    "CoinName": "Ledder",
    "FullName": "Ledder (ULED)"
  },
  {
    "Symbol": "UVU",
    "CoinName": "CCUniverse",
    "FullName": "CCUniverse (UVU)"
  },
  {
    "Symbol": "KOZ",
    "CoinName": "Kozjin",
    "FullName": "Kozjin (KOZ)"
  },
  {
    "Symbol": "SMAT",
    "CoinName": "Smathium",
    "FullName": "Smathium (SMAT)"
  },
  {
    "Symbol": "IOWN",
    "CoinName": "iOWN Token",
    "FullName": "iOWN Token (IOWN)"
  },
  {
    "Symbol": "QBIT",
    "CoinName": "Qubitica",
    "FullName": "Qubitica (QBIT)"
  },
  {
    "Symbol": "BCX",
    "CoinName": "BitcoinX",
    "FullName": "BitcoinX (BCX)"
  },
  {
    "Symbol": "LEO",
    "CoinName": "LEO Token",
    "FullName": "LEO Token (LEO)"
  },
  {
    "Symbol": "BST",
    "CoinName": "BlockStamp",
    "FullName": "BlockStamp (BST)"
  },
  {
    "Symbol": "AYA",
    "CoinName": "Aryacoin",
    "FullName": "Aryacoin (AYA)"
  },
  {
    "Symbol": "BUSDC",
    "CoinName": "BUSD",
    "FullName": "BUSD (BUSDC)"
  },
  {
    "Symbol": "VCN",
    "CoinName": "VeganNation",
    "FullName": "VeganNation (VCN)"
  },
  {
    "Symbol": "BAC",
    "CoinName": "BACoin",
    "FullName": "BACoin (BAC)"
  },
  {
    "Symbol": "BLAST",
    "CoinName": "BLAST",
    "FullName": "BLAST (BLAST)"
  },
  {
    "Symbol": "PRDX",
    "CoinName": "ParamountDax",
    "FullName": "ParamountDax (PRDX)"
  },
  {
    "Symbol": "ZOPT",
    "CoinName": "Zoptax",
    "FullName": "Zoptax (ZOPT)"
  },
  {
    "Symbol": "FILM",
    "CoinName": "Filmpass",
    "FullName": "Filmpass (FILM)"
  },
  {
    "Symbol": "LUT",
    "CoinName": "Cinemadrom",
    "FullName": "Cinemadrom (LUT)"
  },
  {
    "Symbol": "VDX",
    "CoinName": "Vodi X",
    "FullName": "Vodi X (VDX)"
  },
  {
    "Symbol": "RSR",
    "CoinName": "Reserve Rights",
    "FullName": "Reserve Rights (RSR)"
  },
  {
    "Symbol": "ONE",
    "CoinName": "Harmony",
    "FullName": "Harmony (ONE)"
  },
  {
    "Symbol": "CKUSD",
    "CoinName": "CKUSD",
    "FullName": "CKUSD (CKUSD)"
  },
  {
    "Symbol": "CTPT",
    "CoinName": "Contents Protocol",
    "FullName": "Contents Protocol (CTPT)"
  },
  {
    "Symbol": "ESBC",
    "CoinName": "ESBC",
    "FullName": "ESBC (ESBC)"
  },
  {
    "Symbol": "GRAYLL",
    "CoinName": "GRAYLL",
    "FullName": "GRAYLL (GRAYLL)"
  },
  {
    "Symbol": "BRC",
    "CoinName": "Baer Chain",
    "FullName": "Baer Chain (BRC)"
  },
  {
    "Symbol": "MOC",
    "CoinName": "Mossland",
    "FullName": "Mossland (MOC)"
  },
  {
    "Symbol": "SERV",
    "CoinName": "Serve",
    "FullName": "Serve (SERV)"
  },
  {
    "Symbol": "PTON",
    "CoinName": "Foresting",
    "FullName": "Foresting (PTON)"
  },
  {
    "Symbol": "DPN",
    "CoinName": "DIPNET",
    "FullName": "DIPNET (DPN)"
  },
  {
    "Symbol": "VBK",
    "CoinName": "VeriBlock",
    "FullName": "VeriBlock (VBK)"
  },
  {
    "Symbol": "THEMIS",
    "CoinName": "Themis",
    "FullName": "Themis (THEMIS)"
  },
  {
    "Symbol": "YCC",
    "CoinName": "Yuan Chain Coin",
    "FullName": "Yuan Chain Coin (YCC)"
  },
  {
    "Symbol": "USDK",
    "CoinName": "USDK",
    "FullName": "USDK (USDK)"
  },
  {
    "Symbol": "MIX",
    "CoinName": "MIXMARVEL",
    "FullName": "MIXMARVEL (MIX)"
  },
  {
    "Symbol": "PLY",
    "CoinName": "PlayCoin",
    "FullName": "PlayCoin (PLY)"
  },
  {
    "Symbol": "BWX",
    "CoinName": "Blue Whale",
    "FullName": "Blue Whale (BWX)"
  },
  {
    "Symbol": "VST",
    "CoinName": "Vostok",
    "FullName": "Vostok (VST)"
  },
  {
    "Symbol": "WIB",
    "CoinName": "Wibson",
    "FullName": "Wibson (WIB)"
  },
  {
    "Symbol": "BOXX",
    "CoinName": "Blockparty",
    "FullName": "Blockparty (BOXX)"
  },
  {
    "Symbol": "UT",
    "CoinName": "Ulord",
    "FullName": "Ulord (UT)"
  },
  {
    "Symbol": "DX",
    "CoinName": "DxChain Token",
    "FullName": "DxChain Token (DX)"
  },
  {
    "Symbol": "MTV",
    "CoinName": "MultiVAC",
    "FullName": "MultiVAC (MTV)"
  },
  {
    "Symbol": "TRIAS",
    "CoinName": "Trias",
    "FullName": "Trias (TRIAS)"
  },
  {
    "Symbol": "WINT",
    "CoinName": "WinToken",
    "FullName": "WinToken (WINT)"
  },
  {
    "Symbol": "VNT",
    "CoinName": "VNT Chain",
    "FullName": "VNT Chain (VNT)"
  },
  {
    "Symbol": "OGO",
    "CoinName": "Origo",
    "FullName": "Origo (OGO)"
  },
  {
    "Symbol": "DVT",
    "CoinName": "DeVault",
    "FullName": "DeVault (DVT)"
  },
  {
    "Symbol": "BOMB",
    "CoinName": "BOMB",
    "FullName": "BOMB (BOMB)"
  },
  {
    "Symbol": "CARRY",
    "CoinName": "Carry",
    "FullName": "Carry (CARRY)"
  },
  {
    "Symbol": "BRYLL",
    "CoinName": "Bryllite",
    "FullName": "Bryllite (BRYLL)"
  },
  {
    "Symbol": "WXT",
    "CoinName": "Wirex Token",
    "FullName": "Wirex Token (WXT)"
  },
  {
    "Symbol": "BOXT",
    "CoinName": "BOX Token",
    "FullName": "BOX Token (BOXT)"
  },
  {
    "Symbol": "KAT",
    "CoinName": "Kambria",
    "FullName": "Kambria (KAT)"
  },
  {
    "Symbol": "BEST",
    "CoinName": "BEST",
    "FullName": "BEST (BEST)"
  },
  {
    "Symbol": "CAM",
    "CoinName": "Consumption Avatar Matrix",
    "FullName": "Consumption Avatar Matrix (CAM)"
  },
  {
    "Symbol": "HYDRO",
    "CoinName": "Hydro",
    "FullName": "Hydro (HYDRO)"
  },
  {
    "Symbol": "BITNEW",
    "CoinName": "BitNewChain",
    "FullName": "BitNewChain (BITNEW)"
  },
  {
    "Symbol": "ATP",
    "CoinName": "Atlas Protocol",
    "FullName": "Atlas Protocol (ATP)"
  },
  {
    "Symbol": "BCV",
    "CoinName": "BitCapitalVendor",
    "FullName": "BitCapitalVendor (BCV)"
  },
  {
    "Symbol": "FLC",
    "CoinName": "FlowChainCoin",
    "FullName": "FlowChainCoin (FLC)"
  },
  {
    "Symbol": "BKN",
    "CoinName": "BlockState",
    "FullName": "BlockState (BKN)"
  },
  {
    "Symbol": "INB",
    "CoinName": "Insight Chain",
    "FullName": "Insight Chain (INB)"
  },
  {
    "Symbol": "WICC",
    "CoinName": "WaykiChain",
    "FullName": "WaykiChain (WICC)"
  },
  {
    "Symbol": "EKT",
    "CoinName": "EDUCare",
    "FullName": "EDUCare (EKT)"
  },
  {
    "Symbol": "BIHU",
    "CoinName": "Key",
    "FullName": "Key (BIHU)"
  },
  {
    "Symbol": "1SG",
    "CoinName": "1SG",
    "FullName": "1SG (1SG)"
  },
  {
    "Symbol": "KT",
    "CoinName": "Kuai Token",
    "FullName": "Kuai Token (KT)"
  },
  {
    "Symbol": "INE",
    "CoinName": "IntelliShare",
    "FullName": "IntelliShare (INE)"
  },
  {
    "Symbol": "ARTF",
    "CoinName": "Artfinity Token",
    "FullName": "Artfinity Token (ARTF)"
  },
  {
    "Symbol": "AT",
    "CoinName": "AWARE",
    "FullName": "AWARE (AT)"
  },
  {
    "Symbol": "DEX",
    "CoinName": "DEX",
    "FullName": "DEX (DEX)"
  },
  {
    "Symbol": "ELD",
    "CoinName": "Electrum Dark",
    "FullName": "Electrum Dark (ELD)"
  },
  {
    "Symbol": "UOS",
    "CoinName": "UOS",
    "FullName": "UOS (UOS)"
  },
  {
    "Symbol": "UND",
    "CoinName": "United Network Distribution",
    "FullName": "United Network Distribution (UND)"
  },
  {
    "Symbol": "PEOS",
    "CoinName": "pEOS",
    "FullName": "pEOS (PEOS)"
  },
  {
    "Symbol": "BHD",
    "CoinName": "Bitcoin HD",
    "FullName": "Bitcoin HD (BHD)"
  },
  {
    "Symbol": "GTN",
    "CoinName": "GlitzKoin",
    "FullName": "GlitzKoin (GTN)"
  },
  {
    "Symbol": "VIPS",
    "CoinName": "Vipstar Coin",
    "FullName": "Vipstar Coin (VIPS)"
  },
  {
    "Symbol": "BBGC",
    "CoinName": "BigBang Game",
    "FullName": "BigBang Game (BBGC)"
  },
  {
    "Symbol": "INFC",
    "CoinName": "Influence Chain",
    "FullName": "Influence Chain (INFC)"
  },
  {
    "Symbol": "BTNT",
    "CoinName": "BitNautic",
    "FullName": "BitNautic (BTNT)"
  },
  {
    "Symbol": "WGP",
    "CoinName": "W Green Pay",
    "FullName": "W Green Pay (WGP)"
  },
  {
    "Symbol": "NPXSXEM",
    "CoinName": "Pundi X NEM",
    "FullName": "Pundi X NEM (NPXSXEM)"
  },
  {
    "Symbol": "YOU",
    "CoinName": "YOU Chain",
    "FullName": "YOU Chain (YOU)"
  },
  {
    "Symbol": "USCC",
    "CoinName": "USC",
    "FullName": "USC (USCC)"
  },
  {
    "Symbol": "ANDC",
    "CoinName": "Android chain",
    "FullName": "Android chain (ANDC)"
  },
  {
    "Symbol": "WGC",
    "CoinName": "WeGen Platform",
    "FullName": "WeGen Platform (WGC)"
  },
  {
    "Symbol": "GMB",
    "CoinName": "GMB",
    "FullName": "GMB (GMB)"
  },
  {
    "Symbol": "MRS",
    "CoinName": "Marginless",
    "FullName": "Marginless (MRS)"
  },
  {
    "Symbol": "FUND",
    "CoinName": "FUNDChains",
    "FullName": "FUNDChains (FUND)"
  },
  {
    "Symbol": "OCC",
    "CoinName": "Octoin Coin",
    "FullName": "Octoin Coin (OCC)"
  },
  {
    "Symbol": "NNB",
    "CoinName": "NNB Token",
    "FullName": "NNB Token (NNB)"
  },
  {
    "Symbol": "USDQ",
    "CoinName": "USDQ",
    "FullName": "USDQ (USDQ)"
  },
  {
    "Symbol": "ULT",
    "CoinName": "Ultiledger",
    "FullName": "Ultiledger (ULT)"
  },
  {
    "Symbol": "WWB",
    "CoinName": "Wowbit",
    "FullName": "Wowbit (WWB)"
  },
  {
    "Symbol": "VANT",
    "CoinName": "Vanta Network",
    "FullName": "Vanta Network (VANT)"
  },
  {
    "Symbol": "SNET",
    "CoinName": "Snetwork",
    "FullName": "Snetwork (SNET)"
  },
  {
    "Symbol": "BTCB",
    "CoinName": "Bitcoin BEP2",
    "FullName": "Bitcoin BEP2 (BTCB)"
  },
  {
    "Symbol": "IONC",
    "CoinName": "IONChain",
    "FullName": "IONChain (IONC)"
  },
  {
    "Symbol": "SMARTS",
    "CoinName": "Smartshare",
    "FullName": "Smartshare (SMARTS)"
  },
  {
    "Symbol": "CNUS",
    "CoinName": "CoinUs",
    "FullName": "CoinUs (CNUS)"
  },
  {
    "Symbol": "ABL",
    "CoinName": "Airbloc",
    "FullName": "Airbloc (ABL)"
  },
  {
    "Symbol": "SDA",
    "CoinName": "SDChain",
    "FullName": "SDChain (SDA)"
  },
  {
    "Symbol": "SMARTUP",
    "CoinName": "Smartup",
    "FullName": "Smartup (SMARTUP)"
  },
  {
    "Symbol": "HYN",
    "CoinName": "Hyperion",
    "FullName": "Hyperion (HYN)"
  },
  {
    "Symbol": "UIP",
    "CoinName": "UnlimitedIP",
    "FullName": "UnlimitedIP (UIP)"
  },
  {
    "Symbol": "MIR",
    "CoinName": "MIR COIN",
    "FullName": "MIR COIN (MIR)"
  },
  {
    "Symbol": "JCT",
    "CoinName": "Japan Content Token",
    "FullName": "Japan Content Token (JCT)"
  },
  {
    "Symbol": "FTI",
    "CoinName": "FansTime",
    "FullName": "FansTime (FTI)"
  },
  {
    "Symbol": "DOS",
    "CoinName": "DOS Network",
    "FullName": "DOS Network (DOS)"
  },
  {
    "Symbol": "LIBRA",
    "CoinName": "Facebook Libra",
    "FullName": "Facebook Libra (LIBRA)"
  },
  {
    "Symbol": "DLO",
    "CoinName": "Delio",
    "FullName": "Delio (DLO)"
  },
  {
    "Symbol": "DUOT",
    "CoinName": "DUO Network",
    "FullName": "DUO Network (DUOT)"
  },
  {
    "Symbol": "OCE",
    "CoinName": "OceanEX Token",
    "FullName": "OceanEX Token (OCE)"
  },
  {
    "Symbol": "ALGO",
    "CoinName": "Algorand",
    "FullName": "Algorand (ALGO)"
  },
  {
    "Symbol": "AIRX",
    "CoinName": "Aircoins",
    "FullName": "Aircoins (AIRX)"
  },
  {
    "Symbol": "RAVEN",
    "CoinName": "Raven Protocol",
    "FullName": "Raven Protocol (RAVEN)"
  },
  {
    "Symbol": "MIN",
    "CoinName": "MINDOL",
    "FullName": "MINDOL (MIN)"
  },
  {
    "Symbol": "MBL",
    "CoinName": "MovieBloc",
    "FullName": "MovieBloc (MBL)"
  },
  {
    "Symbol": "B91",
    "CoinName": "B91",
    "FullName": "B91 (B91)"
  },
  {
    "Symbol": "AIDT",
    "CoinName": "AIDUS TOKEN",
    "FullName": "AIDUS TOKEN (AIDT)"
  },
  {
    "Symbol": "ALI",
    "CoinName": "AiLink Token",
    "FullName": "AiLink Token (ALI)"
  },
  {
    "Symbol": "CLB",
    "CoinName": "Cloudbric",
    "FullName": "Cloudbric (CLB)"
  },
  {
    "Symbol": "CZR",
    "CoinName": "CanonChain",
    "FullName": "CanonChain (CZR)"
  },
  {
    "Symbol": "DELTA",
    "CoinName": "DeltaChain",
    "FullName": "DeltaChain (DELTA)"
  },
  {
    "Symbol": "GSE",
    "CoinName": "GSENetwork",
    "FullName": "GSENetwork (GSE)"
  },
  {
    "Symbol": "KNT",
    "CoinName": "Knekted",
    "FullName": "Knekted (KNT)"
  },
  {
    "Symbol": "KWATT",
    "CoinName": "4New",
    "FullName": "4New (KWATT)"
  },
  {
    "Symbol": "MAS",
    "CoinName": "Midas Protocol",
    "FullName": "Midas Protocol (MAS)"
  },
  {
    "Symbol": "UCH",
    "CoinName": "UChain",
    "FullName": "UChain (UCH)"
  },
  {
    "Symbol": "VDG",
    "CoinName": "VeriDocGlobal",
    "FullName": "VeriDocGlobal (VDG)"
  },
  {
    "Symbol": "YEED",
    "CoinName": "Yggdrash",
    "FullName": "Yggdrash (YEED)"
  },
  {
    "Symbol": "PRS",
    "CoinName": "PressOne",
    "FullName": "PressOne (PRS)"
  },
  {
    "Symbol": "EHRT",
    "CoinName": "Eight Hours Token",
    "FullName": "Eight Hours Token (EHRT)"
  },
  {
    "Symbol": "XRC",
    "CoinName": "Bitcoin Rhodium",
    "FullName": "Bitcoin Rhodium (XRC)"
  },
  {
    "Symbol": "TERA",
    "CoinName": "TERA",
    "FullName": "TERA (TERA)"
  },
  {
    "Symbol": "MXC",
    "CoinName": "Machine Xchange Coin",
    "FullName": "Machine Xchange Coin (MXC)"
  },
  {
    "Symbol": "JAR",
    "CoinName": "Jarvis+",
    "FullName": "Jarvis+ (JAR)"
  },
  {
    "Symbol": "VOCO",
    "CoinName": "Provoco",
    "FullName": "Provoco (VOCO)"
  },
  {
    "Symbol": "TNS",
    "CoinName": "Transcodium",
    "FullName": "Transcodium (TNS)"
  },
  {
    "Symbol": "NBOT",
    "CoinName": "Naka Bodhi Token",
    "FullName": "Naka Bodhi Token (NBOT)"
  },
  {
    "Symbol": "RATING",
    "CoinName": "DPRating",
    "FullName": "DPRating (RATING)"
  },
  {
    "Symbol": "AMPL",
    "CoinName": "Ampleforth",
    "FullName": "Ampleforth (AMPL)"
  },
  {
    "Symbol": "SOP",
    "CoinName": "SoPay",
    "FullName": "SoPay (SOP)"
  },
  {
    "Symbol": "LEMO",
    "CoinName": "LemoChain",
    "FullName": "LemoChain (LEMO)"
  },
  {
    "Symbol": "TYPE",
    "CoinName": "Typerium",
    "FullName": "Typerium (TYPE)"
  },
  {
    "Symbol": "CYL",
    "CoinName": "Crystal Token",
    "FullName": "Crystal Token (CYL)"
  },
  {
    "Symbol": "HLT",
    "CoinName": "HyperLoot",
    "FullName": "HyperLoot (HLT)"
  },
  {
    "Symbol": "E2C",
    "CoinName": "Electronic Energy Coin",
    "FullName": "Electronic Energy Coin (E2C)"
  },
  {
    "Symbol": "TAC",
    "CoinName": "Traceability Chain",
    "FullName": "Traceability Chain (TAC)"
  },
  {
    "Symbol": "TENX",
    "CoinName": "TenX Token",
    "FullName": "TenX Token (TENX)"
  },
  {
    "Symbol": "EKG",
    "CoinName": "Ekon Gold",
    "FullName": "Ekon Gold (EKG)"
  },
  {
    "Symbol": "SLV",
    "CoinName": "Silverway",
    "FullName": "Silverway (SLV)"
  },
  {
    "Symbol": "PHV",
    "CoinName": "PATHHIVE",
    "FullName": "PATHHIVE (PHV)"
  },
  {
    "Symbol": "ONOT",
    "CoinName": "ONO",
    "FullName": "ONO (ONOT)"
  },
  {
    "Symbol": "IMPT",
    "CoinName": "Ether Kingdoms Token",
    "FullName": "Ether Kingdoms Token (IMPT)"
  },
  {
    "Symbol": "BITRUE",
    "CoinName": "Bitrue Coin",
    "FullName": "Bitrue Coin (BITRUE)"
  },
  {
    "Symbol": "SWAPS",
    "CoinName": "SWAPS Network",
    "FullName": "SWAPS Network (SWAPS)"
  },
  {
    "Symbol": "SRK",
    "CoinName": "SparkPoint",
    "FullName": "SparkPoint (SRK)"
  },
  {
    "Symbol": "ACDC",
    "CoinName": "Volt",
    "FullName": "Volt (ACDC)"
  },
  {
    "Symbol": "YEC",
    "CoinName": "Ycash",
    "FullName": "Ycash (YEC)"
  },
  {
    "Symbol": "TOKO",
    "CoinName": "ToKoin",
    "FullName": "ToKoin (TOKO)"
  },
  {
    "Symbol": "ECO",
    "CoinName": "Ormeus Ecosystem",
    "FullName": "Ormeus Ecosystem (ECO)"
  },
  {
    "Symbol": "ADN",
    "CoinName": "Aladdin",
    "FullName": "Aladdin (ADN)"
  },
  {
    "Symbol": "FTN",
    "CoinName": "Fountain",
    "FullName": "Fountain (FTN)"
  },
  {
    "Symbol": "GRN",
    "CoinName": "GreenPower",
    "FullName": "GreenPower (GRN)"
  },
  {
    "Symbol": "NTY",
    "CoinName": "Nexty",
    "FullName": "Nexty (NTY)"
  },
  {
    "Symbol": "TEMCO",
    "CoinName": "TEMCO",
    "FullName": "TEMCO (TEMCO)"
  },
  {
    "Symbol": "ADRX",
    "CoinName": "Adrenaline Chain",
    "FullName": "Adrenaline Chain (ADRX)"
  },
  {
    "Symbol": "MESG",
    "CoinName": "MESG",
    "FullName": "MESG (MESG)"
  },
  {
    "Symbol": "SHX",
    "CoinName": "Stronghold Token",
    "FullName": "Stronghold Token (SHX)"
  },
  {
    "Symbol": "UPX",
    "CoinName": "uPlexa",
    "FullName": "uPlexa (UPX)"
  },
  {
    "Symbol": "FST",
    "CoinName": "1irstcoin",
    "FullName": "1irstcoin (FST)"
  },
  {
    "Symbol": "BCT",
    "CoinName": "Bitcratic Token",
    "FullName": "Bitcratic Token (BCT)"
  },
  {
    "Symbol": "TRTT",
    "CoinName": "Trittium",
    "FullName": "Trittium (TRTT)"
  },
  {
    "Symbol": "ABX",
    "CoinName": "Arbidex",
    "FullName": "Arbidex (ABX)"
  },
  {
    "Symbol": "HXRO",
    "CoinName": "Hxro",
    "FullName": "Hxro (HXRO)"
  },
  {
    "Symbol": "MONT",
    "CoinName": "Monarch Token",
    "FullName": "Monarch Token (MONT)"
  },
  {
    "Symbol": "WIN",
    "CoinName": "WINk",
    "FullName": "WINk (WIN)"
  },
  {
    "Symbol": "NUT",
    "CoinName": "Native Utility Token",
    "FullName": "Native Utility Token (NUT)"
  },
  {
    "Symbol": "TN",
    "CoinName": "TurtleNetwork",
    "FullName": "TurtleNetwork (TN)"
  },
  {
    "Symbol": "PBQ",
    "CoinName": "PUBLIQ",
    "FullName": "PUBLIQ (PBQ)"
  },
  {
    "Symbol": "ZDR",
    "CoinName": "Zloadr",
    "FullName": "Zloadr (ZDR)"
  },
  {
    "Symbol": "DOCT",
    "CoinName": "DocTailor",
    "FullName": "DocTailor (DOCT)"
  },
  {
    "Symbol": "DTEP",
    "CoinName": "DECOIN",
    "FullName": "DECOIN (DTEP)"
  },
  {
    "Symbol": "TCHAIN",
    "CoinName": "Tchain",
    "FullName": "Tchain (TCHAIN)"
  },
  {
    "Symbol": "XRTC",
    "CoinName": "Retailcoin",
    "FullName": "Retailcoin (XRTC)"
  },
  {
    "Symbol": "VRSC",
    "CoinName": "Verus Coin",
    "FullName": "Verus Coin (VRSC)"
  },
  {
    "Symbol": "VOL",
    "CoinName": "Volume Network",
    "FullName": "Volume Network (VOL)"
  },
  {
    "Symbol": "BSOV",
    "CoinName": "BitcoinSoV",
    "FullName": "BitcoinSoV (BSOV)"
  },
  {
    "Symbol": "FTT",
    "CoinName": "FTX Token",
    "FullName": "FTX Token (FTT)"
  },
  {
    "Symbol": "NAT",
    "CoinName": "Natmin",
    "FullName": "Natmin (NAT)"
  },
  {
    "Symbol": "TRV",
    "CoinName": "TrustVerse",
    "FullName": "TrustVerse (TRV)"
  },
  {
    "Symbol": "RET",
    "CoinName": "RealTract",
    "FullName": "RealTract (RET)"
  },
  {
    "Symbol": "GMAT",
    "CoinName": "GoWithMi",
    "FullName": "GoWithMi (GMAT)"
  },
  {
    "Symbol": "HUM",
    "CoinName": "Humanscape",
    "FullName": "Humanscape (HUM)"
  },
  {
    "Symbol": "LOL",
    "CoinName": "EMOGI Network",
    "FullName": "EMOGI Network (LOL)"
  },
  {
    "Symbol": "BCAC",
    "CoinName": "Business Credit Alliance Chain",
    "FullName": "Business Credit Alliance Chain (BCAC)"
  },
  {
    "Symbol": "XD",
    "CoinName": "Data Transaction Token",
    "FullName": "Data Transaction Token (XD)"
  },
  {
    "Symbol": "OTO",
    "CoinName": "OTOCASH",
    "FullName": "OTOCASH (OTO)"
  },
  {
    "Symbol": "BQQQ",
    "CoinName": "Bitsdaq Token",
    "FullName": "Bitsdaq Token (BQQQ)"
  },
  {
    "Symbol": "SIX",
    "CoinName": "SIX Network",
    "FullName": "SIX Network (SIX)"
  },
  {
    "Symbol": "LOCUS",
    "CoinName": "Locus Chain",
    "FullName": "Locus Chain (LOCUS)"
  },
  {
    "Symbol": "COZP",
    "CoinName": "COZPlus",
    "FullName": "COZPlus (COZP)"
  },
  {
    "Symbol": "OGOD",
    "CoinName": "GOTOGOD",
    "FullName": "GOTOGOD (OGOD)"
  },
  {
    "Symbol": "FOIN",
    "CoinName": "Foin",
    "FullName": "Foin (FOIN)"
  },
  {
    "Symbol": "YTA",
    "CoinName": "YottaChain",
    "FullName": "YottaChain (YTA)"
  },
  {
    "Symbol": "LXT",
    "CoinName": "LITEX",
    "FullName": "LITEX (LXT)"
  },
  {
    "Symbol": "IMG",
    "CoinName": "ImageCoin",
    "FullName": "ImageCoin (IMG)"
  },
  {
    "Symbol": "BOTX",
    "CoinName": "BOTXCOIN",
    "FullName": "BOTXCOIN (BOTX)"
  },
  {
    "Symbol": "DPT",
    "CoinName": "Diamond Platform Token",
    "FullName": "Diamond Platform Token (DPT)"
  },
  {
    "Symbol": "GT",
    "CoinName": "Gatechain Token",
    "FullName": "Gatechain Token (GT)"
  },
  {
    "Symbol": "TRAT",
    "CoinName": "Tratok",
    "FullName": "Tratok (TRAT)"
  },
  {
    "Symbol": "CHZ",
    "CoinName": "Chiliz",
    "FullName": "Chiliz (CHZ)"
  },
  {
    "Symbol": "OPNN",
    "CoinName": "Opennity",
    "FullName": "Opennity (OPNN)"
  },
  {
    "Symbol": "SINS",
    "CoinName": "SafeInsure",
    "FullName": "SafeInsure (SINS)"
  },
  {
    "Symbol": "BDX",
    "CoinName": "Beldex",
    "FullName": "Beldex (BDX)"
  },
  {
    "Symbol": "DXR",
    "CoinName": "DEXTER",
    "FullName": "DEXTER (DXR)"
  },
  {
    "Symbol": "PC",
    "CoinName": "Promotion Coin",
    "FullName": "Promotion Coin (PC)"
  },
  {
    "Symbol": "BUT",
    "CoinName": "BitUP Token",
    "FullName": "BitUP Token (BUT)"
  },
  {
    "Symbol": "GOS",
    "CoinName": "Gosama",
    "FullName": "Gosama (GOS)"
  },
  {
    "Symbol": "DEFI",
    "CoinName": "Defi",
    "FullName": "Defi (DEFI)"
  },
  {
    "Symbol": "BXK",
    "CoinName": "Bitbook Gambling",
    "FullName": "Bitbook Gambling (BXK)"
  },
  {
    "Symbol": "KNOW",
    "CoinName": "KNOW",
    "FullName": "KNOW (KNOW)"
  },
  {
    "Symbol": "WFX",
    "CoinName": "WebFlix",
    "FullName": "WebFlix (WFX)"
  },
  {
    "Symbol": "XPC",
    "CoinName": "eXPerience Chain",
    "FullName": "eXPerience Chain (XPC)"
  },
  {
    "Symbol": "ACD",
    "CoinName": "Alliance Cargo Direct",
    "FullName": "Alliance Cargo Direct (ACD)"
  },
  {
    "Symbol": "AKRO",
    "CoinName": "Akropolis",
    "FullName": "Akropolis (AKRO)"
  },
  {
    "Symbol": "AMON",
    "CoinName": "AmonD",
    "FullName": "AmonD (AMON)"
  },
  {
    "Symbol": "BENZI",
    "CoinName": "Ben Zi Token",
    "FullName": "Ben Zi Token (BENZI)"
  },
  {
    "Symbol": "BGBP",
    "CoinName": "Binance GBP Stable Coin",
    "FullName": "Binance GBP Stable Coin (BGBP)"
  },
  {
    "Symbol": "BHP",
    "CoinName": "Blockchain of Hash Power",
    "FullName": "Blockchain of Hash Power (BHP)"
  },
  {
    "Symbol": "XCHF",
    "CoinName": "CryptoFranc",
    "FullName": "CryptoFranc (XCHF)"
  },
  {
    "Symbol": "BXA",
    "CoinName": "Blockchain Exchange Alliance",
    "FullName": "Blockchain Exchange Alliance (BXA)"
  },
  {
    "Symbol": "CBNT",
    "CoinName": "Create Breaking News Together",
    "FullName": "Create Breaking News Together (CBNT)"
  },
  {
    "Symbol": "DEEP",
    "CoinName": "DeepCloud AI",
    "FullName": "DeepCloud AI (DEEP)"
  },
  {
    "Symbol": "DOC",
    "CoinName": "Dochain",
    "FullName": "Dochain (DOC)"
  },
  {
    "Symbol": "DTC",
    "CoinName": "Data Transaction",
    "FullName": "Data Transaction (DTC)"
  },
  {
    "Symbol": "DVP",
    "CoinName": "Decentralized Vulnerability Platform",
    "FullName": "Decentralized Vulnerability Platform (DVP)"
  },
  {
    "Symbol": "DWC",
    "CoinName": "Digital Wallet",
    "FullName": "Digital Wallet (DWC)"
  },
  {
    "Symbol": "ELAC",
    "CoinName": "ELA Coin",
    "FullName": "ELA Coin (ELAC)"
  },
  {
    "Symbol": "ETSC",
    "CoinName": "​Ether star blockchain",
    "FullName": "​Ether star blockchain (ETSC)"
  },
  {
    "Symbol": "FMEX",
    "CoinName": "FMex",
    "FullName": "FMex (FMEX)"
  },
  {
    "Symbol": "FTK",
    "CoinName": "FToken",
    "FullName": "FToken (FTK)"
  },
  {
    "Symbol": "FLEX",
    "CoinName": "FLEX Coin",
    "FullName": "FLEX Coin (FLEX)"
  },
  {
    "Symbol": "GE",
    "CoinName": "GEchain",
    "FullName": "GEchain (GE)"
  },
  {
    "Symbol": "GOT",
    "CoinName": "ParkinGo",
    "FullName": "ParkinGo (GOT)"
  },
  {
    "Symbol": "INFT",
    "CoinName": "Infinito",
    "FullName": "Infinito (INFT)"
  },
  {
    "Symbol": "ITOC",
    "CoinName": "ITOChain",
    "FullName": "ITOChain (ITOC)"
  },
  {
    "Symbol": "JCB",
    "CoinName": "Wine Chain",
    "FullName": "Wine Chain (JCB)"
  },
  {
    "Symbol": "KSC",
    "CoinName": "KStarCoin",
    "FullName": "KStarCoin (KSC)"
  },
  {
    "Symbol": "LHD",
    "CoinName": "LitecoinHD",
    "FullName": "LitecoinHD (LHD)"
  },
  {
    "Symbol": "LKN",
    "CoinName": "LinkCoin Token",
    "FullName": "LinkCoin Token (LKN)"
  },
  {
    "Symbol": "LPK",
    "CoinName": "Kripton",
    "FullName": "Kripton (LPK)"
  },
  {
    "Symbol": "MMT",
    "CoinName": "Master MIX Token",
    "FullName": "Master MIX Token (MMT)"
  },
  {
    "Symbol": "OSC",
    "CoinName": "iOscar",
    "FullName": "iOscar (OSC)"
  },
  {
    "Symbol": "PIB",
    "CoinName": "Pibble",
    "FullName": "Pibble (PIB)"
  },
  {
    "Symbol": "PNK",
    "CoinName": "Kleros",
    "FullName": "Kleros (PNK)"
  },
  {
    "Symbol": "PROM",
    "CoinName": "Prometeus",
    "FullName": "Prometeus (PROM)"
  },
  {
    "Symbol": "PROT",
    "CoinName": "PROT",
    "FullName": "PROT (PROT)"
  },
  {
    "Symbol": "QQBC",
    "CoinName": "QQBC IPFS BLOCKCHAIN",
    "FullName": "QQBC IPFS BLOCKCHAIN (QQBC)"
  },
  {
    "Symbol": "SPIN",
    "CoinName": "SPIN Protocol",
    "FullName": "SPIN Protocol (SPIN)"
  },
  {
    "Symbol": "TCNX",
    "CoinName": "Tercet Network",
    "FullName": "Tercet Network (TCNX)"
  },
  {
    "Symbol": "THX",
    "CoinName": "Thorenext",
    "FullName": "Thorenext (THX)"
  },
  {
    "Symbol": "THEX",
    "CoinName": "Thore Exchange",
    "FullName": "Thore Exchange (THEX)"
  },
  {
    "Symbol": "TCHTRX",
    "CoinName": "ThoreCashTRX",
    "FullName": "ThoreCashTRX (TCHTRX)"
  },
  {
    "Symbol": "UAT",
    "CoinName": "UltrAlpha",
    "FullName": "UltrAlpha (UAT)"
  },
  {
    "Symbol": "UENC",
    "CoinName": "UniversalEnergyChain",
    "FullName": "UniversalEnergyChain (UENC)"
  },
  {
    "Symbol": "ULTRA",
    "CoinName": "Ultra",
    "FullName": "Ultra (ULTRA)"
  },
  {
    "Symbol": "URAC",
    "CoinName": "Uranus",
    "FullName": "Uranus (URAC)"
  },
  {
    "Symbol": "USDSB",
    "CoinName": "USDSB",
    "FullName": "USDSB (USDSB)"
  },
  {
    "Symbol": "VINCI",
    "CoinName": "VINCI",
    "FullName": "VINCI (VINCI)"
  },
  {
    "Symbol": "WLO",
    "CoinName": "WOLLO",
    "FullName": "WOLLO (WLO)"
  },
  {
    "Symbol": "XENO",
    "CoinName": "Xenoverse",
    "FullName": "Xenoverse (XENO)"
  },
  {
    "Symbol": "XND",
    "CoinName": "ndau",
    "FullName": "ndau (XND)"
  },
  {
    "Symbol": "XSR",
    "CoinName": "Xensor",
    "FullName": "Xensor (XSR)"
  },
  {
    "Symbol": "ZAIF",
    "CoinName": "Zaif Token",
    "FullName": "Zaif Token (ZAIF)"
  },
  {
    "Symbol": "ETM",
    "CoinName": "En-Tan-Mo",
    "FullName": "En-Tan-Mo (ETM)"
  },
  {
    "Symbol": "AMIO",
    "CoinName": "Amino Network",
    "FullName": "Amino Network (AMIO)"
  },
  {
    "Symbol": "FAB",
    "CoinName": "FABRK Token",
    "FullName": "FABRK Token (FAB)"
  },
  {
    "Symbol": "VD",
    "CoinName": "VinDax Coin",
    "FullName": "VinDax Coin (VD)"
  },
  {
    "Symbol": "NYE",
    "CoinName": "NewYork Exchange",
    "FullName": "NewYork Exchange (NYE)"
  },
  {
    "Symbol": "LTK",
    "CoinName": "LinkToken",
    "FullName": "LinkToken (LTK)"
  },
  {
    "Symbol": "STREAM",
    "CoinName": "STREAMIT COIN",
    "FullName": "STREAMIT COIN (STREAM)"
  },
  {
    "Symbol": "BPRO",
    "CoinName": "BitCloud Pro",
    "FullName": "BitCloud Pro (BPRO)"
  },
  {
    "Symbol": "TOL",
    "CoinName": "Tolar",
    "FullName": "Tolar (TOL)"
  },
  {
    "Symbol": "CVCC",
    "CoinName": "CryptoVerificationCoin",
    "FullName": "CryptoVerificationCoin (CVCC)"
  },
  {
    "Symbol": "EVT",
    "CoinName": "EveriToken",
    "FullName": "EveriToken (EVT)"
  },
  {
    "Symbol": "NTBC",
    "CoinName": "Note Blockchain",
    "FullName": "Note Blockchain (NTBC)"
  },
  {
    "Symbol": "MEX",
    "CoinName": "MEX",
    "FullName": "MEX (MEX)"
  },
  {
    "Symbol": "ATN",
    "CoinName": "ATN",
    "FullName": "ATN (ATN)"
  },
  {
    "Symbol": "NASH",
    "CoinName": "NeoWorld Cash",
    "FullName": "NeoWorld Cash (NASH)"
  },
  {
    "Symbol": "CUST",
    "CoinName": "Custody Token",
    "FullName": "Custody Token (CUST)"
  },
  {
    "Symbol": "QCH",
    "CoinName": "QChi",
    "FullName": "QChi (QCH)"
  },
  {
    "Symbol": "FO",
    "CoinName": "FIBOS",
    "FullName": "FIBOS (FO)"
  },
  {
    "Symbol": "SON",
    "CoinName": "Simone",
    "FullName": "Simone (SON)"
  },
  {
    "Symbol": "BKBT",
    "CoinName": "BeeKan",
    "FullName": "BeeKan (BKBT)"
  },
  {
    "Symbol": "BQT",
    "CoinName": "Blockchain Quotations Index Token",
    "FullName": "Blockchain Quotations Index Token (BQT)"
  },
  {
    "Symbol": "BLOCM",
    "CoinName": "BLOC.MONEY",
    "FullName": "BLOC.MONEY (BLOCM)"
  },
  {
    "Symbol": "WSD",
    "CoinName": "White Standard",
    "FullName": "White Standard (WSD)"
  },
  {
    "Symbol": "SDS",
    "CoinName": "Alchemint Standards",
    "FullName": "Alchemint Standards (SDS)"
  },
  {
    "Symbol": "ZT",
    "CoinName": "ZBG Token",
    "FullName": "ZBG Token (ZT)"
  },
  {
    "Symbol": "GOM",
    "CoinName": "Gomics",
    "FullName": "Gomics (GOM)"
  },
  {
    "Symbol": "BAND",
    "CoinName": "Band Protocol",
    "FullName": "Band Protocol (BAND)"
  },
  {
    "Symbol": "OF",
    "CoinName": "OFCOIN",
    "FullName": "OFCOIN (OF)"
  },
  {
    "Symbol": "CBM",
    "CoinName": "CryptoBonusMiles",
    "FullName": "CryptoBonusMiles (CBM)"
  },
  {
    "Symbol": "EMRX",
    "CoinName": "Emirex Token",
    "FullName": "Emirex Token (EMRX)"
  },
  {
    "Symbol": "HBAR",
    "CoinName": "Hedera Hashgraph",
    "FullName": "Hedera Hashgraph (HBAR)"
  },
  {
    "Symbol": "IZI",
    "CoinName": "IZIChain",
    "FullName": "IZIChain (IZI)"
  },
  {
    "Symbol": "UC",
    "CoinName": "YouLive Coin",
    "FullName": "YouLive Coin (UC)"
  },
  {
    "Symbol": "TOSC",
    "CoinName": "T.OS",
    "FullName": "T.OS (TOSC)"
  },
  {
    "Symbol": "OVC",
    "CoinName": "OVCODE",
    "FullName": "OVCODE (OVC)"
  },
  {
    "Symbol": "WIKEN",
    "CoinName": "WITH",
    "FullName": "WITH (WIKEN)"
  },
  {
    "Symbol": "MCC",
    "CoinName": "Magic Cube Coin",
    "FullName": "Magic Cube Coin (MCC)"
  },
  {
    "Symbol": "HVNT",
    "CoinName": "HiveNet Token",
    "FullName": "HiveNet Token (HVNT)"
  },
  {
    "Symbol": "PAXG",
    "CoinName": "PAX Gold",
    "FullName": "PAX Gold (PAXG)"
  },
  {
    "Symbol": "MEXC",
    "CoinName": "MEXC Token",
    "FullName": "MEXC Token (MEXC)"
  },
  {
    "Symbol": "NSS",
    "CoinName": "NSS Coin",
    "FullName": "NSS Coin (NSS)"
  },
  {
    "Symbol": "TRP",
    "CoinName": "Tronipay",
    "FullName": "Tronipay (TRP)"
  },
  {
    "Symbol": "MB",
    "CoinName": "MineBee",
    "FullName": "MineBee (MB)"
  },
  {
    "Symbol": "CENT",
    "CoinName": "CENTERCOIN",
    "FullName": "CENTERCOIN (CENT)"
  },
  {
    "Symbol": "MB8",
    "CoinName": "MB8 Coin",
    "FullName": "MB8 Coin (MB8)"
  },
  {
    "Symbol": "HSN",
    "CoinName": "Hyper Speed Network",
    "FullName": "Hyper Speed Network (HSN)"
  },
  {
    "Symbol": "IDRT",
    "CoinName": "Rupiah Token",
    "FullName": "Rupiah Token (IDRT)"
  },
  {
    "Symbol": "ZUM",
    "CoinName": "ZumCoin",
    "FullName": "ZumCoin (ZUM)"
  },
  {
    "Symbol": "PIPL",
    "CoinName": "PiplCoin",
    "FullName": "PiplCoin (PIPL)"
  },
  {
    "Symbol": "BNANA",
    "CoinName": "Chimpion",
    "FullName": "Chimpion (BNANA)"
  },
  {
    "Symbol": "VNDC",
    "CoinName": "VNDC",
    "FullName": "VNDC (VNDC)"
  },
  {
    "Symbol": "MX",
    "CoinName": "MX Token",
    "FullName": "MX Token (MX)"
  },
  {
    "Symbol": "HUSD",
    "CoinName": "HUSD",
    "FullName": "HUSD (HUSD)"
  },
  {
    "Symbol": "GAP",
    "CoinName": "Gaps Chain",
    "FullName": "Gaps Chain (GAP)"
  },
  {
    "Symbol": "DDAM",
    "CoinName": "DDAM",
    "FullName": "DDAM (DDAM)"
  },
  {
    "Symbol": "PLAC",
    "CoinName": "PLANET",
    "FullName": "PLANET (PLAC)"
  },
  {
    "Symbol": "MOGU",
    "CoinName": "Mogu",
    "FullName": "Mogu (MOGU)"
  },
  {
    "Symbol": "CXCELL",
    "CoinName": "CAPITAL X CELL",
    "FullName": "CAPITAL X CELL (CXCELL)"
  },
  {
    "Symbol": "BGONE",
    "CoinName": "BigONE Token",
    "FullName": "BigONE Token (BGONE)"
  },
  {
    "Symbol": "TLOS",
    "CoinName": "Telos",
    "FullName": "Telos (TLOS)"
  },
  {
    "Symbol": "FLAS",
    "CoinName": "Flas Exchange Token",
    "FullName": "Flas Exchange Token (FLAS)"
  },
  {
    "Symbol": "DEQ",
    "CoinName": "Dequant",
    "FullName": "Dequant (DEQ)"
  },
  {
    "Symbol": "BCB",
    "CoinName": "BCB Blockchain",
    "FullName": "BCB Blockchain (BCB)"
  },
  {
    "Symbol": "LBK",
    "CoinName": "LBK",
    "FullName": "LBK (LBK)"
  },
  {
    "Symbol": "GSTT",
    "CoinName": "GSTT",
    "FullName": "GSTT (GSTT)"
  },
  {
    "Symbol": "ME",
    "CoinName": "All.me",
    "FullName": "All.me (ME)"
  },
  {
    "Symbol": "DMS",
    "CoinName": "Documentchain",
    "FullName": "Documentchain (DMS)"
  },
  {
    "Symbol": "TREEC",
    "CoinName": "TreeCoin",
    "FullName": "TreeCoin (TREEC)"
  },
  {
    "Symbol": "SCTK",
    "CoinName": "SharesChain",
    "FullName": "SharesChain (SCTK)"
  },
  {
    "Symbol": "RON",
    "CoinName": "RON",
    "FullName": "RON (RON)"
  },
  {
    "Symbol": "SINX",
    "CoinName": "SINX Token",
    "FullName": "SINX Token (SINX)"
  },
  {
    "Symbol": "HAZ",
    "CoinName": "Hazza",
    "FullName": "Hazza (HAZ)"
  },
  {
    "Symbol": "AIPE",
    "CoinName": "AI Prediction Ecosystem",
    "FullName": "AI Prediction Ecosystem (AIPE)"
  },
  {
    "Symbol": "MISS",
    "CoinName": "MISS",
    "FullName": "MISS (MISS)"
  },
  {
    "Symbol": "DKKT",
    "CoinName": "DKK Token",
    "FullName": "DKK Token (DKKT)"
  },
  {
    "Symbol": "BTY",
    "CoinName": "Bityuan",
    "FullName": "Bityuan (BTY)"
  },
  {
    "Symbol": "CSAC",
    "CoinName": "Credit Safe Application Chain",
    "FullName": "Credit Safe Application Chain (CSAC)"
  },
  {
    "Symbol": "TEM",
    "CoinName": "Temtum",
    "FullName": "Temtum (TEM)"
  },
  {
    "Symbol": "KAVA",
    "CoinName": "Kava",
    "FullName": "Kava (KAVA)"
  },
  {
    "Symbol": "DMC",
    "CoinName": "Dream21",
    "FullName": "Dream21 (DMC)"
  },
  {
    "Symbol": "CKB",
    "CoinName": "Nervos Network",
    "FullName": "Nervos Network (CKB)"
  },
  {
    "Symbol": "KISC",
    "CoinName": "Kaiser",
    "FullName": "Kaiser (KISC)"
  },
  {
    "Symbol": "VBT",
    "CoinName": "VB Token",
    "FullName": "VB Token (VBT)"
  },
  {
    "Symbol": "G50",
    "CoinName": "G50",
    "FullName": "G50 (G50)"
  },
  {
    "Symbol": "SEOS",
    "CoinName": "Smart Eye Operating System",
    "FullName": "Smart Eye Operating System (SEOS)"
  },
  {
    "Symbol": "ODC",
    "CoinName": "Overseas Direct Certification",
    "FullName": "Overseas Direct Certification (ODC)"
  },
  {
    "Symbol": "GALT",
    "CoinName": "Galtcoin",
    "FullName": "Galtcoin (GALT)"
  },
  {
    "Symbol": "LTBTC",
    "CoinName": "Lightning Bitcoin",
    "FullName": "Lightning Bitcoin (LTBTC)"
  },
  {
    "Symbol": "DAI",
    "CoinName": "Multi Collateral Dai",
    "FullName": "Multi Collateral Dai (DAI)"
  },
  {
    "Symbol": "TENA",
    "CoinName": "Tena",
    "FullName": "Tena (TENA)"
  },
  {
    "Symbol": "SPLA",
    "CoinName": "SmartPlay",
    "FullName": "SmartPlay (SPLA)"
  },
  {
    "Symbol": "UNICORN",
    "CoinName": "UNICORN Token",
    "FullName": "UNICORN Token (UNICORN)"
  },
  {
    "Symbol": "EONC",
    "CoinName": "Dimension",
    "FullName": "Dimension (EONC)"
  },
  {
    "Symbol": "PRCM",
    "CoinName": "Precium",
    "FullName": "Precium (PRCM)"
  },
  {
    "Symbol": "BFCH",
    "CoinName": "Big Fun Chain",
    "FullName": "Big Fun Chain (BFCH)"
  },
  {
    "Symbol": "LIGHT",
    "CoinName": "LightChain",
    "FullName": "LightChain (LIGHT)"
  },
  {
    "Symbol": "CBFT",
    "CoinName": "CoinBene Future Token",
    "FullName": "CoinBene Future Token (CBFT)"
  },
  {
    "Symbol": "TRDS",
    "CoinName": "Traders Token",
    "FullName": "Traders Token (TRDS)"
  },
  {
    "Symbol": "ETHPLO",
    "CoinName": "ETHplode",
    "FullName": "ETHplode (ETHPLO)"
  },
  {
    "Symbol": "YAP",
    "CoinName": "Yap Stone",
    "FullName": "Yap Stone (YAP)"
  },
  {
    "Symbol": "LKU",
    "CoinName": "Lukiu",
    "FullName": "Lukiu (LKU)"
  },
  {
    "Symbol": "SUTER",
    "CoinName": "Suterusu",
    "FullName": "Suterusu (SUTER)"
  },
  {
    "Symbol": "FMCT",
    "CoinName": "FirmaChain",
    "FullName": "FirmaChain (FMCT)"
  },
  {
    "Symbol": "NODE",
    "CoinName": "Whole Network",
    "FullName": "Whole Network (NODE)"
  },
  {
    "Symbol": "LINKA",
    "CoinName": "LINKA",
    "FullName": "LINKA (LINKA)"
  },
  {
    "Symbol": "ZVC",
    "CoinName": "ZVCHAIN",
    "FullName": "ZVCHAIN (ZVC)"
  },
  {
    "Symbol": "OROX",
    "CoinName": "Cointorox",
    "FullName": "Cointorox (OROX)"
  },
  {
    "Symbol": "ACU",
    "CoinName": "Aitheon",
    "FullName": "Aitheon (ACU)"
  },
  {
    "Symbol": "OLXA",
    "CoinName": "OLXA",
    "FullName": "OLXA (OLXA)"
  },
  {
    "Symbol": "WIX",
    "CoinName": "Wixlar",
    "FullName": "Wixlar (WIX)"
  },
  {
    "Symbol": "BRZE",
    "CoinName": "Breezecoin",
    "FullName": "Breezecoin (BRZE)"
  },
  {
    "Symbol": "BCZERO",
    "CoinName": "Buggyra Coin Zero",
    "FullName": "Buggyra Coin Zero (BCZERO)"
  },
  {
    "Symbol": "BTC2",
    "CoinName": "Bitcoin 2",
    "FullName": "Bitcoin 2 (BTC2)"
  },
  {
    "Symbol": "ECOREAL",
    "CoinName": "Ecoreal Estate",
    "FullName": "Ecoreal Estate (ECOREAL)"
  },
  {
    "Symbol": "S4F",
    "CoinName": "S4FE",
    "FullName": "S4FE (S4F)"
  },
  {
    "Symbol": "BIPX",
    "CoinName": "Bispex",
    "FullName": "Bispex (BIPX)"
  },
  {
    "Symbol": "BOK",
    "CoinName": "Blockium",
    "FullName": "Blockium (BOK)"
  },
  {
    "Symbol": "TEP",
    "CoinName": "Tepleton",
    "FullName": "Tepleton (TEP)"
  },
  {
    "Symbol": "TSR",
    "CoinName": "Tesra",
    "FullName": "Tesra (TSR)"
  },
  {
    "Symbol": "RUNE",
    "CoinName": "Thorchain",
    "FullName": "Thorchain (RUNE)"
  },
  {
    "Symbol": "HNB",
    "CoinName": "HashNet BitEco",
    "FullName": "HashNet BitEco (HNB)"
  },
  {
    "Symbol": "DILI",
    "CoinName": "D Community",
    "FullName": "D Community (DILI)"
  },
  {
    "Symbol": "CAI",
    "CoinName": "Cai Token",
    "FullName": "Cai Token (CAI)"
  },
  {
    "Symbol": "FLG",
    "CoinName": "Folgory Coin",
    "FullName": "Folgory Coin (FLG)"
  },
  {
    "Symbol": "MCH",
    "CoinName": "Meconcash",
    "FullName": "Meconcash (MCH)"
  },
  {
    "Symbol": "7E",
    "CoinName": "7ELEVEN",
    "FullName": "7ELEVEN (7E)"
  },
  {
    "Symbol": "XTX",
    "CoinName": "Xtock",
    "FullName": "Xtock (XTX)"
  },
  {
    "Symbol": "LOBS",
    "CoinName": "Lobstex",
    "FullName": "Lobstex (LOBS)"
  },
  {
    "Symbol": "MGX",
    "CoinName": "MargiX",
    "FullName": "MargiX (MGX)"
  },
  {
    "Symbol": "DAD",
    "CoinName": "DAD",
    "FullName": "DAD (DAD)"
  },
  {
    "Symbol": "EUM",
    "CoinName": "Elitium",
    "FullName": "Elitium (EUM)"
  },
  {
    "Symbol": "SOVE",
    "CoinName": "Soverain",
    "FullName": "Soverain (SOVE)"
  },
  {
    "Symbol": "BCS",
    "CoinName": "Business Credit Substitute",
    "FullName": "Business Credit Substitute (BCS)"
  },
  {
    "Symbol": "THP",
    "CoinName": "TurboHigh Performance",
    "FullName": "TurboHigh Performance (THP)"
  },
  {
    "Symbol": "TKC",
    "CoinName": "TurkeyChain",
    "FullName": "TurkeyChain (TKC)"
  },
  {
    "Symbol": "LT",
    "CoinName": "Loctite Assets Token",
    "FullName": "Loctite Assets Token (LT)"
  },
  {
    "Symbol": "MSN",
    "CoinName": "Manson Coin",
    "FullName": "Manson Coin (MSN)"
  },
  {
    "Symbol": "W1",
    "CoinName": "W1",
    "FullName": "W1 (W1)"
  },
  {
    "Symbol": "OFBC",
    "CoinName": "OneFinBank Coin",
    "FullName": "OneFinBank Coin (OFBC)"
  },
  {
    "Symbol": "CB",
    "CoinName": "COINBIG",
    "FullName": "COINBIG (CB)"
  },
  {
    "Symbol": "TD",
    "CoinName": "Trade Chain",
    "FullName": "Trade Chain (TD)"
  },
  {
    "Symbol": "DRINK",
    "CoinName": "DrinkChain",
    "FullName": "DrinkChain (DRINK)"
  },
  {
    "Symbol": "SNL",
    "CoinName": "Sport and Leisure",
    "FullName": "Sport and Leisure (SNL)"
  },
  {
    "Symbol": "EOSC",
    "CoinName": "EOSForce",
    "FullName": "EOSForce (EOSC)"
  },
  {
    "Symbol": "GLOS",
    "CoinName": "GLOS",
    "FullName": "GLOS (GLOS)"
  },
  {
    "Symbol": "SEA",
    "CoinName": "Second Exchange Alliance",
    "FullName": "Second Exchange Alliance (SEA)"
  },
  {
    "Symbol": "CBE",
    "CoinName": "The Chain of Business Entertainment",
    "FullName": "The Chain of Business Entertainment (CBE)"
  },
  {
    "Symbol": "KLAY",
    "CoinName": "Klaytn",
    "FullName": "Klaytn (KLAY)"
  },
  {
    "Symbol": "DZCC",
    "CoinName": "DZCC",
    "FullName": "DZCC (DZCC)"
  },
  {
    "Symbol": "TRCB",
    "CoinName": "TRCB Chain",
    "FullName": "TRCB Chain (TRCB)"
  },
  {
    "Symbol": "TROY",
    "CoinName": "Troy",
    "FullName": "Troy (TROY)"
  },
  {
    "Symbol": "MPL",
    "CoinName": "M+Plus",
    "FullName": "M+Plus (MPL)"
  },
  {
    "Symbol": "UIN",
    "CoinName": "Alliance Chain",
    "FullName": "Alliance Chain (UIN)"
  },
  {
    "Symbol": "XFC",
    "CoinName": "Football Coin",
    "FullName": "Football Coin (XFC)"
  },
  {
    "Symbol": "WOW",
    "CoinName": "Wownero",
    "FullName": "Wownero (WOW)"
  },
  {
    "Symbol": "USDN",
    "CoinName": "Neutrino",
    "FullName": "Neutrino (USDN)"
  },
  {
    "Symbol": "ROAD",
    "CoinName": "ROAD",
    "FullName": "ROAD (ROAD)"
  },
  {
    "Symbol": "BRZ",
    "CoinName": "Brazilian Digital Token",
    "FullName": "Brazilian Digital Token (BRZ)"
  },
  {
    "Symbol": "GKI",
    "CoinName": "GKi",
    "FullName": "GKi (GKI)"
  },
  {
    "Symbol": "FBN",
    "CoinName": "Five balance",
    "FullName": "Five balance (FBN)"
  },
  {
    "Symbol": "EVY",
    "CoinName": "EveryCoin",
    "FullName": "EveryCoin (EVY)"
  },
  {
    "Symbol": "PTN",
    "CoinName": "PalletOneToken",
    "FullName": "PalletOneToken (PTN)"
  },
  {
    "Symbol": "KSM",
    "CoinName": "Kusama",
    "FullName": "Kusama (KSM)"
  },
  {
    "Symbol": "TDE",
    "CoinName": "Trade Ecology Token",
    "FullName": "Trade Ecology Token (TDE)"
  },
  {
    "Symbol": "ECP",
    "CoinName": "ECP+ Technology",
    "FullName": "ECP+ Technology (ECP)"
  },
  {
    "Symbol": "XBG",
    "CoinName": "BitGrin",
    "FullName": "BitGrin (XBG)"
  },
  {
    "Symbol": "PP",
    "CoinName": "ProducePay Chain",
    "FullName": "ProducePay Chain (PP)"
  },
  {
    "Symbol": "CNTM",
    "CoinName": "Connectome",
    "FullName": "Connectome (CNTM)"
  },
  {
    "Symbol": "SCAP",
    "CoinName": "SafeCapital",
    "FullName": "SafeCapital (SCAP)"
  },
  {
    "Symbol": "FN",
    "CoinName": "Filenet",
    "FullName": "Filenet (FN)"
  },
  {
    "Symbol": "DYNMT",
    "CoinName": "Dynamite",
    "FullName": "Dynamite (DYNMT)"
  },
  {
    "Symbol": "MDM",
    "CoinName": "Medium",
    "FullName": "Medium (MDM)"
  },
  {
    "Symbol": "CCA",
    "CoinName": "Counos Coin",
    "FullName": "Counos Coin (CCA)"
  },
  {
    "Symbol": "DFP",
    "CoinName": "Digital Fund Coin",
    "FullName": "Digital Fund Coin (DFP)"
  },
  {
    "Symbol": "QTCON",
    "CoinName": "Quiztok",
    "FullName": "Quiztok (QTCON)"
  },
  {
    "Symbol": "GTSE",
    "CoinName": "Global Tourism Sharing Ecology",
    "FullName": "Global Tourism Sharing Ecology (GTSE)"
  },
  {
    "Symbol": "API",
    "CoinName": "Application Programming Interface",
    "FullName": "Application Programming Interface (API)"
  },
  {
    "Symbol": "RES",
    "CoinName": "Resistance",
    "FullName": "Resistance (RES)"
  },
  {
    "Symbol": "AMAL",
    "CoinName": "AMAL",
    "FullName": "AMAL (AMAL)"
  },
  {
    "Symbol": "BIUT",
    "CoinName": "Bit Trust System",
    "FullName": "Bit Trust System (BIUT)"
  },
  {
    "Symbol": "MLGC",
    "CoinName": "Marshal Lion Group Coin",
    "FullName": "Marshal Lion Group Coin (MLGC)"
  },
  {
    "Symbol": "PSC",
    "CoinName": "PSC Token",
    "FullName": "PSC Token (PSC)"
  },
  {
    "Symbol": "XDC",
    "CoinName": "Xinfin Network",
    "FullName": "Xinfin Network (XDC)"
  },
  {
    "Symbol": "DMTC",
    "CoinName": "Demeter Chain",
    "FullName": "Demeter Chain (DMTC)"
  },
  {
    "Symbol": "TRB",
    "CoinName": "Tellor",
    "FullName": "Tellor (TRB)"
  },
  {
    "Symbol": "TFB",
    "CoinName": "Truefeedback Token",
    "FullName": "Truefeedback Token (TFB)"
  },
  {
    "Symbol": "DAMO",
    "CoinName": "Coinzen",
    "FullName": "Coinzen (DAMO)"
  },
  {
    "Symbol": "XSPC",
    "CoinName": "SpectreSecurityCoin",
    "FullName": "SpectreSecurityCoin (XSPC)"
  },
  {
    "Symbol": "OXT",
    "CoinName": "Orchid Protocol",
    "FullName": "Orchid Protocol (OXT)"
  },
  {
    "Symbol": "USDG",
    "CoinName": "USDG",
    "FullName": "USDG (USDG)"
  },
  {
    "Symbol": "DGLD",
    "CoinName": "Digital Gold",
    "FullName": "Digital Gold (DGLD)"
  },
  {
    "Symbol": "MAP",
    "CoinName": "MarcoPolo Protocol",
    "FullName": "MarcoPolo Protocol (MAP)"
  },
  {
    "Symbol": "LVIP",
    "CoinName": "Limitless VIP",
    "FullName": "Limitless VIP (LVIP)"
  },
  {
    "Symbol": "BOA",
    "CoinName": "BOSAGORA",
    "FullName": "BOSAGORA (BOA)"
  },
  {
    "Symbol": "PLF",
    "CoinName": "PlayFuel",
    "FullName": "PlayFuel (PLF)"
  },
  {
    "Symbol": "CHARS",
    "CoinName": "CHARS",
    "FullName": "CHARS (CHARS)"
  },
  {
    "Symbol": "TYT",
    "CoinName": "Tianya Token",
    "FullName": "Tianya Token (TYT)"
  },
  {
    "Symbol": "NVL",
    "CoinName": "Nevula",
    "FullName": "Nevula (NVL)"
  },
  {
    "Symbol": "CSAI",
    "CoinName": "Compound SAI",
    "FullName": "Compound SAI (CSAI)"
  },
  {
    "Symbol": "CUSDC",
    "CoinName": "Compound USD Coin",
    "FullName": "Compound USD Coin (CUSDC)"
  },
  {
    "Symbol": "CBAT",
    "CoinName": "Compound Basic Attention Token",
    "FullName": "Compound Basic Attention Token (CBAT)"
  },
  {
    "Symbol": "CZRX",
    "CoinName": "Compound 0x",
    "FullName": "Compound 0x (CZRX)"
  },
  {
    "Symbol": "CREP",
    "CoinName": "Compound Augur",
    "FullName": "Compound Augur (CREP)"
  },
  {
    "Symbol": "CETH",
    "CoinName": "Compound Ethereum",
    "FullName": "Compound Ethereum (CETH)"
  },
  {
    "Symbol": "CDAI",
    "CoinName": "Compound Dai",
    "FullName": "Compound Dai (CDAI)"
  },
  {
    "Symbol": "CWBTC",
    "CoinName": "Compound Wrapped BTC",
    "FullName": "Compound Wrapped BTC (CWBTC)"
  },
  {
    "Symbol": "FCQ",
    "CoinName": "Fortem Capital",
    "FullName": "Fortem Capital (FCQ)"
  },
  {
    "Symbol": "BTCK",
    "CoinName": "Bitcoin Turbo Koin",
    "FullName": "Bitcoin Turbo Koin (BTCK)"
  },
  {
    "Symbol": "DAVP",
    "CoinName": "Davion",
    "FullName": "Davion (DAVP)"
  },
  {
    "Symbol": "XTP",
    "CoinName": "Tap",
    "FullName": "Tap (XTP)"
  },
  {
    "Symbol": "ZYN",
    "CoinName": "Zynecoin",
    "FullName": "Zynecoin (ZYN)"
  },
  {
    "Symbol": "OGN",
    "CoinName": "Origin Protocol",
    "FullName": "Origin Protocol (OGN)"
  },
  {
    "Symbol": "EXM",
    "CoinName": "EXMO Coin",
    "FullName": "EXMO Coin (EXM)"
  },
  {
    "Symbol": "CUT",
    "CoinName": "CUTcoin",
    "FullName": "CUTcoin (CUT)"
  },
  {
    "Symbol": "VEN",
    "CoinName": "VeChain Old",
    "FullName": "VeChain Old (VEN)"
  },
  {
    "Symbol": "LTBX",
    "CoinName": "Litbinex Coin",
    "FullName": "Litbinex Coin (LTBX)"
  },
  {
    "Symbol": "IPX",
    "CoinName": "Tachyon Protocol",
    "FullName": "Tachyon Protocol (IPX)"
  },
  {
    "Symbol": "ZANO",
    "CoinName": "Zano",
    "FullName": "Zano (ZANO)"
  },
  {
    "Symbol": "CYBER",
    "CoinName": "CyberWay",
    "FullName": "CyberWay (CYBER)"
  },
  {
    "Symbol": "NRV",
    "CoinName": "NERVE",
    "FullName": "NERVE (NRV)"
  },
  {
    "Symbol": "KOK",
    "CoinName": "KOK Coin",
    "FullName": "KOK Coin (KOK)"
  },
  {
    "Symbol": "KSH",
    "CoinName": "Kahsh",
    "FullName": "Kahsh (KSH)"
  },
  {
    "Symbol": "HTDF",
    "CoinName": "Orient Walt",
    "FullName": "Orient Walt (HTDF)"
  },
  {
    "Symbol": "EGG",
    "CoinName": "Nestree",
    "FullName": "Nestree (EGG)"
  },
  {
    "Symbol": "KRT",
    "CoinName": "TerraKRW",
    "FullName": "TerraKRW (KRT)"
  },
  {
    "Symbol": "N8V",
    "CoinName": "NativeCoin",
    "FullName": "NativeCoin (N8V)"
  },
  {
    "Symbol": "EBK",
    "CoinName": "Ebakus",
    "FullName": "Ebakus (EBK)"
  },
  {
    "Symbol": "PEG",
    "CoinName": "PegNet",
    "FullName": "PegNet (PEG)"
  },
  {
    "Symbol": "ERK",
    "CoinName": "Eureka Coin",
    "FullName": "Eureka Coin (ERK)"
  },
  {
    "Symbol": "BNP",
    "CoinName": "BenePit",
    "FullName": "BenePit (BNP)"
  },
  {
    "Symbol": "TUDA",
    "CoinName": "Tutor's Diary",
    "FullName": "Tutor's Diary (TUDA)"
  },
  {
    "Symbol": "APM",
    "CoinName": "apM Coin",
    "FullName": "apM Coin (APM)"
  },
  {
    "Symbol": "BLTV",
    "CoinName": "BLTV Token",
    "FullName": "BLTV Token (BLTV)"
  },
  {
    "Symbol": "RRB",
    "CoinName": "Renrenbit",
    "FullName": "Renrenbit (RRB)"
  },
  {
    "Symbol": "MESH",
    "CoinName": "MeshBox",
    "FullName": "MeshBox (MESH)"
  },
  {
    "Symbol": "WIKI",
    "CoinName": "Wiki Token",
    "FullName": "Wiki Token (WIKI)"
  },
  {
    "Symbol": "HINT",
    "CoinName": "Hintchain",
    "FullName": "Hintchain (HINT)"
  },
  {
    "Symbol": "PCI",
    "CoinName": "PayProtocol Paycoin",
    "FullName": "PayProtocol Paycoin (PCI)"
  },
  {
    "Symbol": "BNA",
    "CoinName": "BananaTok",
    "FullName": "BananaTok (BNA)"
  },
  {
    "Symbol": "AXL",
    "CoinName": "AXiaL",
    "FullName": "AXiaL (AXL)"
  },
  {
    "Symbol": "GOD",
    "CoinName": "Bitcoin God",
    "FullName": "Bitcoin God (GOD)"
  },
  {
    "Symbol": "ALY",
    "CoinName": "Ally",
    "FullName": "Ally (ALY)"
  },
  {
    "Symbol": "CODY",
    "CoinName": "Coindy",
    "FullName": "Coindy (CODY)"
  },
  {
    "Symbol": "SPOK",
    "CoinName": "Spock",
    "FullName": "Spock (SPOK)"
  },
  {
    "Symbol": "USDH",
    "CoinName": "HonestCoin",
    "FullName": "HonestCoin (USDH)"
  },
  {
    "Symbol": "GARK",
    "CoinName": "Game Ark",
    "FullName": "Game Ark (GARK)"
  },
  {
    "Symbol": "IDHUB",
    "CoinName": "IDHUB",
    "FullName": "IDHUB (IDHUB)"
  },
  {
    "Symbol": "IOEX",
    "CoinName": "ioeX",
    "FullName": "ioeX (IOEX)"
  },
  {
    "Symbol": "LM",
    "CoinName": "LM Token",
    "FullName": "LM Token (LM)"
  },
  {
    "Symbol": "BIKI",
    "CoinName": "BIKI",
    "FullName": "BIKI (BIKI)"
  },
  {
    "Symbol": "DLX",
    "CoinName": "DAppLinks",
    "FullName": "DAppLinks (DLX)"
  },
  {
    "Symbol": "DALI",
    "CoinName": "Dalichain",
    "FullName": "Dalichain (DALI)"
  },
  {
    "Symbol": "FLDT",
    "CoinName": "FairyLand",
    "FullName": "FairyLand (FLDT)"
  },
  {
    "Symbol": "TCO",
    "CoinName": "ThinkCoin",
    "FullName": "ThinkCoin (TCO)"
  },
  {
    "Symbol": "ETY",
    "CoinName": "Ethereum Cloud",
    "FullName": "Ethereum Cloud (ETY)"
  },
  {
    "Symbol": "LBXC",
    "CoinName": "LUX BIO EXCHANGE COIN",
    "FullName": "LUX BIO EXCHANGE COIN (LBXC)"
  },
  {
    "Symbol": "JOB",
    "CoinName": "Jobchain",
    "FullName": "Jobchain (JOB)"
  },
  {
    "Symbol": "VEIL",
    "CoinName": "VEIL",
    "FullName": "VEIL (VEIL)"
  },
  {
    "Symbol": "BTBL",
    "CoinName": "Bitball",
    "FullName": "Bitball (BTBL)"
  },
  {
    "Symbol": "MKEY",
    "CoinName": "MEDIKEY",
    "FullName": "MEDIKEY (MKEY)"
  },
  {
    "Symbol": "TAUC",
    "CoinName": "Taurus Coin",
    "FullName": "Taurus Coin (TAUC)"
  },
  {
    "Symbol": "GIB",
    "CoinName": "Bible Coin",
    "FullName": "Bible Coin (GIB)"
  },
  {
    "Symbol": "SCDS",
    "CoinName": "Shrine Cloud Storage Network",
    "FullName": "Shrine Cloud Storage Network (SCDS)"
  },
  {
    "Symbol": "CCX",
    "CoinName": "Conceal",
    "FullName": "Conceal (CCX)"
  },
  {
    "Symbol": "SYM",
    "CoinName": "SymVerse",
    "FullName": "SymVerse (SYM)"
  },
  {
    "Symbol": "ECT",
    "CoinName": "SuperEdge",
    "FullName": "SuperEdge (ECT)"
  },
  {
    "Symbol": "GIX",
    "CoinName": "GoldFinX",
    "FullName": "GoldFinX (GIX)"
  },
  {
    "Symbol": "SENNO",
    "CoinName": "SENNO",
    "FullName": "SENNO (SENNO)"
  },
  {
    "Symbol": "BEP",
    "CoinName": "Blucon",
    "FullName": "Blucon (BEP)"
  },
  {
    "Symbol": "GANA",
    "CoinName": "GANA",
    "FullName": "GANA (GANA)"
  },
  {
    "Symbol": "KAL",
    "CoinName": "Kaleido",
    "FullName": "Kaleido (KAL)"
  },
  {
    "Symbol": "NEWOS",
    "CoinName": "NewsToken",
    "FullName": "NewsToken (NEWOS)"
  },
  {
    "Symbol": "FNK",
    "CoinName": "FunKeyPay",
    "FullName": "FunKeyPay (FNK)"
  },
  {
    "Symbol": "TSF",
    "CoinName": "Teslafunds",
    "FullName": "Teslafunds (TSF)"
  },
  {
    "Symbol": "AIDUS",
    "CoinName": "AIDUS Token",
    "FullName": "AIDUS Token (AIDUS)"
  },
  {
    "Symbol": "STEEP",
    "CoinName": "SteepCoin",
    "FullName": "SteepCoin (STEEP)"
  },
  {
    "Symbol": "ZOC",
    "CoinName": "01coin",
    "FullName": "01coin (ZOC)"
  },
  {
    "Symbol": "YTN",
    "CoinName": "YENTEN",
    "FullName": "YENTEN (YTN)"
  },
  {
    "Symbol": "SCRIV",
    "CoinName": "SCRIV",
    "FullName": "SCRIV (SCRIV)"
  },
  {
    "Symbol": "AREPA",
    "CoinName": "Arepacoin",
    "FullName": "Arepacoin (AREPA)"
  },
  {
    "Symbol": "CHEESE",
    "CoinName": "CHEESE",
    "FullName": "CHEESE (CHEESE)"
  },
  {
    "Symbol": "PEPS",
    "CoinName": "PEPS Coin",
    "FullName": "PEPS Coin (PEPS)"
  },
  {
    "Symbol": "NEET",
    "CoinName": "Neetcoin",
    "FullName": "Neetcoin (NEET)"
  },
  {
    "Symbol": "OMEGA",
    "CoinName": "OMEGA",
    "FullName": "OMEGA (OMEGA)"
  },
  {
    "Symbol": "BBS",
    "CoinName": "BBSCoin",
    "FullName": "BBSCoin (BBS (1))"
  },
  {
    "Symbol": "BZL",
    "CoinName": "BZLCoin",
    "FullName": "BZLCoin (BZL)"
  },
  {
    "Symbol": "CRP",
    "CoinName": "Cranepay",
    "FullName": "Cranepay (CRP)"
  },
  {
    "Symbol": "GSR",
    "CoinName": "GeyserCoin",
    "FullName": "GeyserCoin (GSR)"
  },
  {
    "Symbol": "VARIUS",
    "CoinName": "Varius",
    "FullName": "Varius (VARIUS)"
  },
  {
    "Symbol": "AGET",
    "CoinName": "Agetron",
    "FullName": "Agetron (AGET)"
  },
  {
    "Symbol": "WRX",
    "CoinName": "WazirX",
    "FullName": "WazirX (WRX)"
  },
  {
    "Symbol": "ZCR",
    "CoinName": "ZCore",
    "FullName": "ZCore (ZCR)"
  },
  {
    "Symbol": "AEVO",
    "CoinName": "Always Evolving",
    "FullName": "Always Evolving (AEVO)"
  },
  {
    "Symbol": "NAH",
    "CoinName": "Strayacoin",
    "FullName": "Strayacoin (NAH)"
  },
  {
    "Symbol": "EGEM",
    "CoinName": "EtherGem",
    "FullName": "EtherGem (EGEM)"
  },
  {
    "Symbol": "DXO",
    "CoinName": "Dextro",
    "FullName": "Dextro (DXO)"
  },
  {
    "Symbol": "GOSS",
    "CoinName": "GOSSIP-Coin",
    "FullName": "GOSSIP-Coin (GOSS)"
  },
  {
    "Symbol": "NYEX",
    "CoinName": "Nyerium",
    "FullName": "Nyerium (NYEX)"
  },
  {
    "Symbol": "GIO",
    "CoinName": "Graviocoin",
    "FullName": "Graviocoin (GIO)"
  },
  {
    "Symbol": "TELOS",
    "CoinName": "Teloscoin",
    "FullName": "Teloscoin (TELOS)"
  },
  {
    "Symbol": "SIERRA",
    "CoinName": "Sierracoin",
    "FullName": "Sierracoin (SIERRA)"
  },
  {
    "Symbol": "VIVID",
    "CoinName": "Vivid Coin",
    "FullName": "Vivid Coin (VIVID)"
  },
  {
    "Symbol": "RPD",
    "CoinName": "Rapids",
    "FullName": "Rapids (RPD)"
  },
  {
    "Symbol": "PENG",
    "CoinName": "PENG",
    "FullName": "PENG (PENG)"
  },
  {
    "Symbol": "MERI",
    "CoinName": "Merebel",
    "FullName": "Merebel (MERI)"
  },
  {
    "Symbol": "KTS",
    "CoinName": "Klimatas",
    "FullName": "Klimatas (KTS)"
  },
  {
    "Symbol": "NOR",
    "CoinName": "Noir",
    "FullName": "Noir (NOR)"
  },
  {
    "Symbol": "BTCV",
    "CoinName": "BitcoinV",
    "FullName": "BitcoinV (BTCV)"
  },
  {
    "Symbol": "X42",
    "CoinName": "X42 Protocol",
    "FullName": "X42 Protocol (X42)"
  },
  {
    "Symbol": "XWP",
    "CoinName": "Swap",
    "FullName": "Swap (XWP)"
  },
  {
    "Symbol": "CSNP",
    "CoinName": "CrowdSale Network",
    "FullName": "CrowdSale Network (CSNP)"
  },
  {
    "Symbol": "CALL",
    "CoinName": "Global Crypto Alliance",
    "FullName": "Global Crypto Alliance (CALL)"
  },
  {
    "Symbol": "MOCO",
    "CoinName": "MoCo",
    "FullName": "MoCo (MOCO)"
  },
  {
    "Symbol": "WBET",
    "CoinName": "Wavesbet",
    "FullName": "Wavesbet (WBET)"
  },
  {
    "Symbol": "ARMR",
    "CoinName": "ARMR",
    "FullName": "ARMR (ARMR)"
  },
  {
    "Symbol": "XSD",
    "CoinName": "SounDAC",
    "FullName": "SounDAC (XSD)"
  },
  {
    "Symbol": "DIVO",
    "CoinName": "DIVO Token",
    "FullName": "DIVO Token (DIVO)"
  },
  {
    "Symbol": "WCC",
    "CoinName": "Wincash Coin",
    "FullName": "Wincash Coin (WCC)"
  },
  {
    "Symbol": "HUSL",
    "CoinName": "Hustle Token",
    "FullName": "Hustle Token (HUSL)"
  },
  {
    "Symbol": "WLF",
    "CoinName": "Wolfs Group",
    "FullName": "Wolfs Group (WLF)"
  },
  {
    "Symbol": "CNB",
    "CoinName": "Coinsbit Token",
    "FullName": "Coinsbit Token (CNB)"
  },
  {
    "Symbol": "CTAG",
    "CoinName": "CTAGtoken",
    "FullName": "CTAGtoken (CTAG)"
  },
  {
    "Symbol": "CWN",
    "CoinName": "CryptoWorldNews",
    "FullName": "CryptoWorldNews (CWN)"
  },
  {
    "Symbol": "HNS",
    "CoinName": "Handshake",
    "FullName": "Handshake (HNS)"
  },
  {
    "Symbol": "BLINK",
    "CoinName": "BlockMason Link",
    "FullName": "BlockMason Link (BLINK)"
  },
  {
    "Symbol": "JUL",
    "CoinName": "Joule",
    "FullName": "Joule (JUL)"
  },
  {
    "Symbol": "VEGA",
    "CoinName": "Vega Protocol",
    "FullName": "Vega Protocol (VEGA)"
  },
  {
    "Symbol": "BC",
    "CoinName": "Bitcoin Confidential",
    "FullName": "Bitcoin Confidential (BC)"
  },
  {
    "Symbol": "NCOV",
    "CoinName": "CoronaCoin",
    "FullName": "CoronaCoin (NCOV)"
  },
  {
    "Symbol": "ES",
    "CoinName": "Era Swap Token",
    "FullName": "Era Swap Token (ES)"
  },
  {
    "Symbol": "EER",
    "CoinName": "Ethereum eRush",
    "FullName": "Ethereum eRush (EER)"
  },
  {
    "Symbol": "USDA",
    "CoinName": "USDA",
    "FullName": "USDA (USDA)"
  },
  {
    "Symbol": "BCZ",
    "CoinName": "Bitcoin CZ",
    "FullName": "Bitcoin CZ (BCZ)"
  },
  {
    "Symbol": "DBY",
    "CoinName": "Dobuy",
    "FullName": "Dobuy (DBY)"
  },
  {
    "Symbol": "KAM",
    "CoinName": "BitKAM",
    "FullName": "BitKAM (KAM)"
  },
  {
    "Symbol": "EBASE",
    "CoinName": "EURBASE",
    "FullName": "EURBASE (EBASE)"
  },
  {
    "Symbol": "SWYFTT",
    "CoinName": "SWYFT",
    "FullName": "SWYFT (SWYFTT)"
  },
  {
    "Symbol": "DOGZ",
    "CoinName": "Dogz",
    "FullName": "Dogz (DOGZ)"
  },
  {
    "Symbol": "WPX",
    "CoinName": "Wallet Plus X",
    "FullName": "Wallet Plus X (WPX)"
  },
  {
    "Symbol": "POCC",
    "CoinName": "POC Chain",
    "FullName": "POC Chain (POCC)"
  },
  {
    "Symbol": "GFUN",
    "CoinName": "GoldFund",
    "FullName": "GoldFund (GFUN)"
  },
  {
    "Symbol": "NWC",
    "CoinName": "Newscrypto Coin",
    "FullName": "Newscrypto Coin (NWC)"
  },
  {
    "Symbol": "CVA",
    "CoinName": "Crypto Village Accelerator",
    "FullName": "Crypto Village Accelerator (CVA)"
  },
  {
    "Symbol": "JMT",
    "CoinName": "JMTIME",
    "FullName": "JMTIME (JMT)"
  },
  {
    "Symbol": "XAUT",
    "CoinName": "Tether Gold",
    "FullName": "Tether Gold (XAUT)"
  },
  {
    "Symbol": "URBC",
    "CoinName": "UrbanCasH",
    "FullName": "UrbanCasH (URBC)"
  },
  {
    "Symbol": "ABA",
    "CoinName": "EcoBall",
    "FullName": "EcoBall (ABA)"
  },
  {
    "Symbol": "DSC",
    "CoinName": "Dash Cash",
    "FullName": "Dash Cash (DSC)"
  },
  {
    "Symbol": "DAPP",
    "CoinName": "LiquidApps",
    "FullName": "LiquidApps (DAPP)"
  },
  {
    "Symbol": "XNC",
    "CoinName": "Xenios",
    "FullName": "Xenios (XNC)"
  },
  {
    "Symbol": "AMDC",
    "CoinName": "Allmedi Coin",
    "FullName": "Allmedi Coin (AMDC)"
  },
  {
    "Symbol": "NNC",
    "CoinName": "NEO Name Credit",
    "FullName": "NEO Name Credit (NNC)"
  },
  {
    "Symbol": "CCTN",
    "CoinName": "Connectchain",
    "FullName": "Connectchain (CCTN)"
  },
  {
    "Symbol": "TWEE",
    "CoinName": "TWEEBAA",
    "FullName": "TWEEBAA (TWEE)"
  },
  {
    "Symbol": "KBOT",
    "CoinName": "Korbot",
    "FullName": "Korbot (KBOT)"
  },
  {
    "Symbol": "EOSBULL",
    "CoinName": "3X Long EOS Token",
    "FullName": "3X Long EOS Token (EOSBULL)"
  },
  {
    "Symbol": "XRPBEAR",
    "CoinName": "3X Short XRP Token",
    "FullName": "3X Short XRP Token (XRPBEAR)"
  },
  {
    "Symbol": "EUSD",
    "CoinName": "Egoras Dollar",
    "FullName": "Egoras Dollar (EUSD)"
  },
  {
    "Symbol": "ALLBI",
    "CoinName": "ALL BEST ICO",
    "FullName": "ALL BEST ICO (ALLBI)"
  },
  {
    "Symbol": "ETR",
    "CoinName": "Electric Token",
    "FullName": "Electric Token (ETR)"
  },
  {
    "Symbol": "FK",
    "CoinName": "FK Coin",
    "FullName": "FK Coin (FK)"
  },
  {
    "Symbol": "XLA",
    "CoinName": "Scala",
    "FullName": "Scala (XLA)"
  },
  {
    "Symbol": "SOLO",
    "CoinName": "Sologenic",
    "FullName": "Sologenic (SOLO)"
  },
  {
    "Symbol": "BIRD",
    "CoinName": "Birdchain",
    "FullName": "Birdchain (BIRD)"
  },
  {
    "Symbol": "TCC",
    "CoinName": "The ChampCoin",
    "FullName": "The ChampCoin (TCC)"
  },
  {
    "Symbol": "AUNIT",
    "CoinName": "Aunit",
    "FullName": "Aunit (AUNIT)"
  },
  {
    "Symbol": "BNBBULL",
    "CoinName": "3X Long BNB Token",
    "FullName": "3X Long BNB Token (BNBBULL)"
  },
  {
    "Symbol": "BNBBEAR",
    "CoinName": "3X Short BNB Token",
    "FullName": "3X Short BNB Token (BNBBEAR)"
  },
  {
    "Symbol": "ODX",
    "CoinName": "ODX Token",
    "FullName": "ODX Token (ODX)"
  },
  {
    "Symbol": "TRYB",
    "CoinName": "BiLira",
    "FullName": "BiLira (TRYB)"
  },
  {
    "Symbol": "GLS",
    "CoinName": "Golos Blockchain",
    "FullName": "Golos Blockchain (GLS)"
  },
  {
    "Symbol": "TRXBULL",
    "CoinName": "3X Long TRX Token",
    "FullName": "3X Long TRX Token (TRXBULL)"
  },
  {
    "Symbol": "TRXBEAR",
    "CoinName": "3X Short TRX Token",
    "FullName": "3X Short TRX Token (TRXBEAR)"
  },
  {
    "Symbol": "LTCBULL",
    "CoinName": "3X Long Litecoin Token",
    "FullName": "3X Long Litecoin Token (LTCBULL)"
  },
  {
    "Symbol": "LTCBEAR",
    "CoinName": "3X Short Litecoin Token",
    "FullName": "3X Short Litecoin Token (LTCBEAR)"
  },
  {
    "Symbol": "AAB",
    "CoinName": "AAX Token",
    "FullName": "AAX Token (AAB)"
  },
  {
    "Symbol": "BKRW",
    "CoinName": "Binance KRW",
    "FullName": "Binance KRW (BKRW)"
  },
  {
    "Symbol": "HBD",
    "CoinName": "Hive Dollar",
    "FullName": "Hive Dollar (HBD)"
  },
  {
    "Symbol": "FRSP",
    "CoinName": "Forkspot",
    "FullName": "Forkspot (FRSP)"
  },
  {
    "Symbol": "ELAMA",
    "CoinName": "Elamachain",
    "FullName": "Elamachain (ELAMA)"
  },
  {
    "Symbol": "ANCT",
    "CoinName": "Anchor",
    "FullName": "Anchor (ANCT)"
  },
  {
    "Symbol": "USDJ",
    "CoinName": "USDJ",
    "FullName": "USDJ (USDJ)"
  },
  {
    "Symbol": "QC",
    "CoinName": "Qcash",
    "FullName": "Qcash (QC)"
  },
  {
    "Symbol": "ALV",
    "CoinName": "Allive",
    "FullName": "Allive (ALV)"
  },
  {
    "Symbol": "GZE",
    "CoinName": "GazeCoin",
    "FullName": "GazeCoin (GZE)"
  },
  {
    "Symbol": "DACS",
    "CoinName": "Dacsee",
    "FullName": "Dacsee (DACS)"
  },
  {
    "Symbol": "NII",
    "CoinName": "nahmii",
    "FullName": "nahmii (NII)"
  },
  {
    "Symbol": "UPEUR",
    "CoinName": "Universal Euro",
    "FullName": "Universal Euro (UPEUR)"
  },
  {
    "Symbol": "UPUSD",
    "CoinName": "Universal US Dollar",
    "FullName": "Universal US Dollar (UPUSD)"
  },
  {
    "Symbol": "UPT",
    "CoinName": "Universal Protocol Token",
    "FullName": "Universal Protocol Token (UPT)"
  },
  {
    "Symbol": "CIM",
    "CoinName": "COINCOME",
    "FullName": "COINCOME (CIM)"
  },
  {
    "Symbol": "EWT",
    "CoinName": "Energy Web Token",
    "FullName": "Energy Web Token (EWT)"
  },
  {
    "Symbol": "MORE",
    "CoinName": "More Coin",
    "FullName": "More Coin (MORE)"
  },
  {
    "Symbol": "HDAO",
    "CoinName": "HyperDAO",
    "FullName": "HyperDAO (HDAO)"
  },
  {
    "Symbol": "EURT",
    "CoinName": "Euro Tether",
    "FullName": "Euro Tether (EURT)"
  },
  {
    "Symbol": "LCX",
    "CoinName": "LCX",
    "FullName": "LCX (LCX)"
  },
  {
    "Symbol": "THX!",
    "CoinName": "Thx!",
    "FullName": "Thx! (THANKS)"
  },
  {
    "Symbol": "COSP",
    "CoinName": "Cosplay Token",
    "FullName": "Cosplay Token (COSP)"
  },
  {
    "Symbol": "HOTT",
    "CoinName": "HOT Token",
    "FullName": "HOT Token (HOTT)"
  },
  {
    "Symbol": "MZK",
    "CoinName": "Muzika Network",
    "FullName": "Muzika Network (MZK)"
  },
  {
    "Symbol": "QUROZ",
    "CoinName": "Qfora",
    "FullName": "Qfora (QUROZ)"
  },
  {
    "Symbol": "HUNT",
    "CoinName": "HUNT",
    "FullName": "HUNT (HUNT)"
  },
  {
    "Symbol": "VNXLU",
    "CoinName": "VNX Exchange",
    "FullName": "VNX Exchange (VNXLU)"
  },
  {
    "Symbol": "AIN",
    "CoinName": "AI Network",
    "FullName": "AI Network (AIN)"
  },
  {
    "Symbol": "PORTAL",
    "CoinName": "Portal",
    "FullName": "Portal (PORTAL)"
  },
  {
    "Symbol": "IIC",
    "CoinName": "Intelligent Investment Chain",
    "FullName": "Intelligent Investment Chain (IIC)"
  },
  {
    "Symbol": "BTCHG",
    "CoinName": "1X Short Bitcoin Token",
    "FullName": "1X Short Bitcoin Token (BTCHG)"
  },
  {
    "Symbol": "300F",
    "CoinName": "300FIT",
    "FullName": "300FIT (300F)"
  },
  {
    "Symbol": "HKDX",
    "CoinName": "eToro Hong Kong Dollar",
    "FullName": "eToro Hong Kong Dollar (HKDX)"
  },
  {
    "Symbol": "CNYX",
    "CoinName": "eToro Chinese Yuan",
    "FullName": "eToro Chinese Yuan (CNYX)"
  },
  {
    "Symbol": "NZDX",
    "CoinName": "eToro New Zealand Dollar",
    "FullName": "eToro New Zealand Dollar (NZDX)"
  },
  {
    "Symbol": "CHFX",
    "CoinName": "eToro Swiss Franc",
    "FullName": "eToro Swiss Franc (CHFX)"
  },
  {
    "Symbol": "CADX",
    "CoinName": "eToro Canadian Dollar",
    "FullName": "eToro Canadian Dollar (CADX)"
  },
  {
    "Symbol": "USDEX",
    "CoinName": "eToro US Dollar",
    "FullName": "eToro US Dollar (USDEX)"
  },
  {
    "Symbol": "JPYX",
    "CoinName": "eToro Japanese Yen",
    "FullName": "eToro Japanese Yen (JPYX)"
  },
  {
    "Symbol": "AUDX",
    "CoinName": "eToro Australian Dollar",
    "FullName": "eToro Australian Dollar (AUDX)"
  },
  {
    "Symbol": "GOLDX",
    "CoinName": "eToro Gold",
    "FullName": "eToro Gold (GOLDX)"
  },
  {
    "Symbol": "ZARX",
    "CoinName": "eToro South African Rand",
    "FullName": "eToro South African Rand (ZARX)"
  },
  {
    "Symbol": "TRYX",
    "CoinName": "eToro Turkish Lira",
    "FullName": "eToro Turkish Lira (TRYX)"
  },
  {
    "Symbol": "SGDX",
    "CoinName": "eToro Singapore Dollar",
    "FullName": "eToro Singapore Dollar (SGDX)"
  },
  {
    "Symbol": "RUBX",
    "CoinName": "eToro Russian Ruble",
    "FullName": "eToro Russian Ruble (RUBX)"
  },
  {
    "Symbol": "POLNX",
    "CoinName": "eToro Polish Zloty",
    "FullName": "eToro Polish Zloty (POLNX)"
  },
  {
    "Symbol": "EXCHBEAR",
    "CoinName": "3X Short Exchange Token Index Token",
    "FullName": "3X Short Exchange Token Index Token (EXCHBEAR)"
  },
  {
    "Symbol": "ALTBULL",
    "CoinName": "3X Long Altcoin Index Token",
    "FullName": "3X Long Altcoin Index Token (ALTBULL)"
  },
  {
    "Symbol": "EXCHBULL",
    "CoinName": "3X Long Exchange Token Index Token",
    "FullName": "3X Long Exchange Token Index Token (EXCHBULL)"
  },
  {
    "Symbol": "ALTBEAR",
    "CoinName": "3X Short Altcoin Index Token",
    "FullName": "3X Short Altcoin Index Token (ALTBEAR)"
  },
  {
    "Symbol": "BCHC",
    "CoinName": "BitCherry",
    "FullName": "BitCherry (BCHC)"
  },
  {
    "Symbol": "ZLS",
    "CoinName": "Zelerius",
    "FullName": "Zelerius (ZLS)"
  },
  {
    "Symbol": "PGX",
    "CoinName": "PhiGold Coin",
    "FullName": "PhiGold Coin (PGX)"
  },
  {
    "Symbol": "SLVX",
    "CoinName": "eToro Silver",
    "FullName": "eToro Silver (SLVX)"
  },
  {
    "Symbol": "DEP",
    "CoinName": "DEAPCOIN",
    "FullName": "DEAPCOIN (DEP)"
  },
  {
    "Symbol": "CTT",
    "CoinName": "Castweet",
    "FullName": "Castweet (CTT)"
  },
  {
    "Symbol": "KDG",
    "CoinName": "Kingdom Game 4.0",
    "FullName": "Kingdom Game 4.0 (KDG)"
  },
  {
    "Symbol": "HMR",
    "CoinName": "Homeros",
    "FullName": "Homeros (HMR)"
  },
  {
    "Symbol": "KIM",
    "CoinName": "King Money",
    "FullName": "King Money (KIM)"
  },
  {
    "Symbol": "LMCH",
    "CoinName": "Latamcash",
    "FullName": "Latamcash (LMCH)"
  },
  {
    "Symbol": "SNB",
    "CoinName": "SynchroBitcoin",
    "FullName": "SynchroBitcoin (SNB)"
  },
  {
    "Symbol": "CBUCKS",
    "CoinName": "CRYPTOBUCKS",
    "FullName": "CRYPTOBUCKS (CBUCKS)"
  },
  {
    "Symbol": "LAR",
    "CoinName": "LinkArt",
    "FullName": "LinkArt (LAR)"
  },
  {
    "Symbol": "EUCOIN",
    "CoinName": "EU Coin",
    "FullName": "EU Coin (EUCOIN)"
  },
  {
    "Symbol": "QBZ",
    "CoinName": "QUEENBEE",
    "FullName": "QUEENBEE (QBZ)"
  },
  {
    "Symbol": "BSVBULL",
    "CoinName": "3X Long Bitcoin SV Token",
    "FullName": "3X Long Bitcoin SV Token (BSVBULL)"
  },
  {
    "Symbol": "BSVBEAR",
    "CoinName": "3X Short Bitcoin SV Token",
    "FullName": "3X Short Bitcoin SV Token (BSVBEAR)"
  },
  {
    "Symbol": "FF1",
    "CoinName": "Two Prime FF1 Token",
    "FullName": "Two Prime FF1 Token (FF1)"
  },
  {
    "Symbol": "BCHBULL",
    "CoinName": "3X Long Bitcoin Cash Token",
    "FullName": "3X Long Bitcoin Cash Token (BCHBULL)"
  },
  {
    "Symbol": "BCHBEAR",
    "CoinName": "3X Short Bitcoin Cash Token",
    "FullName": "3X Short Bitcoin Cash Token (BCHBEAR)"
  },
  {
    "Symbol": "ISIKC",
    "CoinName": "Isiklar Coin",
    "FullName": "Isiklar Coin (ISIKC)"
  },
  {
    "Symbol": "ZFL",
    "CoinName": "Zuflo Coin",
    "FullName": "Zuflo Coin (ZFL)"
  },
  {
    "Symbol": "PCX",
    "CoinName": "ChainX",
    "FullName": "ChainX (PCX)"
  },
  {
    "Symbol": "CTSI",
    "CoinName": "Cartesi",
    "FullName": "Cartesi (CTSI)"
  },
  {
    "Symbol": "MWC",
    "CoinName": "MimbleWimbleCoin",
    "FullName": "MimbleWimbleCoin (MWC)"
  },
  {
    "Symbol": "IQC",
    "CoinName": "IQ.cash",
    "FullName": "IQ.cash (IQC)"
  },
  {
    "Symbol": "IDNA",
    "CoinName": "Idena",
    "FullName": "Idena (IDNA)"
  },
  {
    "Symbol": "IZER",
    "CoinName": "IZEROIUM",
    "FullName": "IZEROIUM (IZER)"
  },
  {
    "Symbol": "XXA",
    "CoinName": "Ixinium",
    "FullName": "Ixinium (XXA)"
  },
  {
    "Symbol": "SENSO",
    "CoinName": "SENSO",
    "FullName": "SENSO (SENSO)"
  },
  {
    "Symbol": "STAKE",
    "CoinName": "xDai Chain",
    "FullName": "xDai Chain (STAKE)"
  },
  {
    "Symbol": "IBVOL",
    "CoinName": "1x Short BTC Implied Volatility Token",
    "FullName": "1x Short BTC Implied Volatility Token (IBVOL)"
  },
  {
    "Symbol": "BVOL",
    "CoinName": "1x Long BTC Implied Volatility Token",
    "FullName": "1x Long BTC Implied Volatility Token (BVOL)"
  },
  {
    "Symbol": "SATX",
    "CoinName": "SatoExchange Token",
    "FullName": "SatoExchange Token (SATX)"
  },
  {
    "Symbol": "OBSR",
    "CoinName": "OBSERVER Coin",
    "FullName": "OBSERVER Coin (OBSR)"
  },
  {
    "Symbol": "UFOC",
    "CoinName": "Unknown Fair Object",
    "FullName": "Unknown Fair Object (UFOC)"
  },
  {
    "Symbol": "BONO",
    "CoinName": "Bonorum Coin",
    "FullName": "Bonorum Coin (BONO)"
  },
  {
    "Symbol": "WADS",
    "CoinName": "AdsByWiFi",
    "FullName": "AdsByWiFi (WADS)"
  },
  {
    "Symbol": "ALA",
    "CoinName": "ALA",
    "FullName": "ALA (ALA)"
  },
  {
    "Symbol": "XTZBULL",
    "CoinName": "3X Long TezosToken",
    "FullName": "3X Long TezosToken (XTZBULL)"
  },
  {
    "Symbol": "XTZBEAR",
    "CoinName": "3X Short Tezos Token",
    "FullName": "3X Short Tezos Token (XTZBEAR)"
  },
  {
    "Symbol": "EC",
    "CoinName": "Echoin",
    "FullName": "Echoin (EC)"
  },
  {
    "Symbol": "BTCT",
    "CoinName": "Bitcoin Token",
    "FullName": "Bitcoin Token (BTCT)"
  },
  {
    "Symbol": "RHP",
    "CoinName": "Rhypton Club",
    "FullName": "Rhypton Club (RHP)"
  },
  {
    "Symbol": "BTCSHORT",
    "CoinName": "Amun Short Bitcoin Token",
    "FullName": "Amun Short Bitcoin Token (BTCSHORT)"
  },
  {
    "Symbol": "DUC",
    "CoinName": "DucatusCoin",
    "FullName": "DucatusCoin (DUC)"
  },
  {
    "Symbol": "CNRG",
    "CoinName": "CryptoEnergy",
    "FullName": "CryptoEnergy (CNRG)"
  },
  {
    "Symbol": "JST",
    "CoinName": "JUST",
    "FullName": "JUST (JST)"
  },
  {
    "Symbol": "ADAI",
    "CoinName": "Aave DAI",
    "FullName": "Aave DAI (ADAI)"
  },
  {
    "Symbol": "ZNZ",
    "CoinName": "ZENZO",
    "FullName": "ZENZO (ZNZ)"
  },
  {
    "Symbol": "NYZO",
    "CoinName": "Nyzo",
    "FullName": "Nyzo (NYZO)"
  },
  {
    "Symbol": "ICH",
    "CoinName": "IdeaChain",
    "FullName": "IdeaChain (ICH)"
  },
  {
    "Symbol": "GLEEC",
    "CoinName": "Gleec Coin",
    "FullName": "Gleec Coin (GLEEC)"
  },
  {
    "Symbol": "LRG",
    "CoinName": "Largo Coin",
    "FullName": "Largo Coin (LRG)"
  },
  {
    "Symbol": "RVX",
    "CoinName": "Rivex",
    "FullName": "Rivex (RVX)"
  },
  {
    "Symbol": "ANJ",
    "CoinName": "Aragon Court",
    "FullName": "Aragon Court (ANJ)"
  },
  {
    "Symbol": "WET",
    "CoinName": "WeShow Token",
    "FullName": "WeShow Token (WET)"
  },
  {
    "Symbol": "ETHBN",
    "CoinName": "EtherBone",
    "FullName": "EtherBone (ETHBN)"
  },
  {
    "Symbol": "PXP",
    "CoinName": "PointPay",
    "FullName": "PointPay (PXP)"
  },
  {
    "Symbol": "YOUC",
    "CoinName": "YOUengine",
    "FullName": "YOUengine (YOUC)"
  },
  {
    "Symbol": "CWR",
    "CoinName": "Cowrium",
    "FullName": "Cowrium (CWR)"
  },
  {
    "Symbol": "IBS",
    "CoinName": "Irbis Network",
    "FullName": "Irbis Network (IBS)"
  },
  {
    "Symbol": "ZTN",
    "CoinName": "Zetanet",
    "FullName": "Zetanet (ZTN)"
  },
  {
    "Symbol": "DGN",
    "CoinName": "Diagon",
    "FullName": "Diagon (DGN)"
  },
  {
    "Symbol": "QI",
    "CoinName": "Quantum Intelligence",
    "FullName": "Quantum Intelligence (QI)"
  },
  {
    "Symbol": "TRNSC",
    "CoinName": "Transmutecoin",
    "FullName": "Transmutecoin (TRNSC)"
  },
  {
    "Symbol": "GLDS",
    "CoinName": "Gdigit",
    "FullName": "Gdigit (GLDS)"
  },
  {
    "Symbol": "CTE",
    "CoinName": "Crypto Tron",
    "FullName": "Crypto Tron (CTE)"
  },
  {
    "Symbol": "LLION",
    "CoinName": "Lydian Lion",
    "FullName": "Lydian Lion (LLION)"
  },
  {
    "Symbol": "SOW",
    "CoinName": "Seed of World",
    "FullName": "Seed of World (SOW)"
  },
  {
    "Symbol": "PWON",
    "CoinName": "Personal Wager",
    "FullName": "Personal Wager (PWON)"
  },
  {
    "Symbol": "Si14",
    "CoinName": "Si14",
    "FullName": "Si14 (Si14)"
  },
  {
    "Symbol": "NCR",
    "CoinName": "NCrypto",
    "FullName": "NCrypto (NCR)"
  },
  {
    "Symbol": "SKFT",
    "CoinName": "Sphinks Token",
    "FullName": "Sphinks Token (SKFT)"
  },
  {
    "Symbol": "NMT",
    "CoinName": "Nova Mining",
    "FullName": "Nova Mining (NMT)"
  },
  {
    "Symbol": "TUNEZ",
    "CoinName": "Tunez",
    "FullName": "Tunez (TUNEZ)"
  },
  {
    "Symbol": "TOX",
    "CoinName": "Toxic",
    "FullName": "Toxic (TOX)"
  },
  {
    "Symbol": "SONA",
    "CoinName": "Social Chains",
    "FullName": "Social Chains (SONA)"
  },
  {
    "Symbol": "BRAND",
    "CoinName": "BrandProtect",
    "FullName": "BrandProtect (BRAND)"
  },
  {
    "Symbol": "NTS",
    "CoinName": "Notarised",
    "FullName": "Notarised (NTS)"
  },
  {
    "Symbol": "WSLT",
    "CoinName": "White Stripe Lottery",
    "FullName": "White Stripe Lottery (WSLT)"
  },
  {
    "Symbol": "ENC",
    "CoinName": "Encores Token",
    "FullName": "Encores Token (ENC)"
  },
  {
    "Symbol": "SETI",
    "CoinName": "Sapien Wallet",
    "FullName": "Sapien Wallet (SETI)"
  },
  {
    "Symbol": "SDAT",
    "CoinName": "SDATokens",
    "FullName": "SDATokens (SDAT)"
  },
  {
    "Symbol": "IGCH",
    "CoinName": "IG-Crypto Holding",
    "FullName": "IG-Crypto Holding (IGCH)"
  },
  {
    "Symbol": "BNS",
    "CoinName": "BNS token",
    "FullName": "BNS token (BNS)"
  },
  {
    "Symbol": "PXB",
    "CoinName": "PixelBit",
    "FullName": "PixelBit (PXB)"
  },
  {
    "Symbol": "LUM",
    "CoinName": "Illuminates",
    "FullName": "Illuminates (LUM)"
  },
  {
    "Symbol": "TYC",
    "CoinName": "Tycoon",
    "FullName": "Tycoon (TYC)"
  },
  {
    "Symbol": "JUP",
    "CoinName": "Jupiter",
    "FullName": "Jupiter (JUP)"
  },
  {
    "Symbol": "JACS",
    "CoinName": "JACS",
    "FullName": "JACS (JACS)"
  },
  {
    "Symbol": "RWN",
    "CoinName": "Rowan Energy Blockchain",
    "FullName": "Rowan Energy Blockchain (RWN)"
  },
  {
    "Symbol": "SETS",
    "CoinName": "Sensitrust",
    "FullName": "Sensitrust (SETS)"
  },
  {
    "Symbol": "WRZ",
    "CoinName": "Weriz",
    "FullName": "Weriz (WRZ)"
  },
  {
    "Symbol": "ITAM",
    "CoinName": "ITAM Games",
    "FullName": "ITAM Games (ITAM)"
  },
  {
    "Symbol": "WOONK",
    "CoinName": "Woonkly",
    "FullName": "Woonkly (WOONK)"
  },
  {
    "Symbol": "ESH",
    "CoinName": "Switch",
    "FullName": "Switch (ESH)"
  },
  {
    "Symbol": "CPI",
    "CoinName": "Crypto Price Index",
    "FullName": "Crypto Price Index (CPI)"
  },
  {
    "Symbol": "JUI",
    "CoinName": "Juiice",
    "FullName": "Juiice (JUI)"
  },
  {
    "Symbol": "TWT",
    "CoinName": "Trust Wallet Token",
    "FullName": "Trust Wallet Token (TWT)"
  },
  {
    "Symbol": "METAC",
    "CoinName": "Metacoin",
    "FullName": "Metacoin (METAC)"
  },
  {
    "Symbol": "1GOLD",
    "CoinName": "1irstGold",
    "FullName": "1irstGold (1GOLD)"
  },
  {
    "Symbol": "LOON",
    "CoinName": "Loon Network",
    "FullName": "Loon Network (LOON)"
  },
  {
    "Symbol": "NDN",
    "CoinName": "NDN Link",
    "FullName": "NDN Link (NDN)"
  },
  {
    "Symbol": "GGC",
    "CoinName": "Global Game Coin",
    "FullName": "Global Game Coin (GGC)"
  },
  {
    "Symbol": "XIO",
    "CoinName": "XIO",
    "FullName": "XIO (XIO)"
  },
  {
    "Symbol": "1UP",
    "CoinName": "Uptrennd",
    "FullName": "Uptrennd (1UP)"
  },
  {
    "Symbol": "AFFC",
    "CoinName": "Affil Coin",
    "FullName": "Affil Coin (AFFC)"
  },
  {
    "Symbol": "BAN",
    "CoinName": "Banano",
    "FullName": "Banano (BAN)"
  },
  {
    "Symbol": "BBDT",
    "CoinName": "BBD Token",
    "FullName": "BBD Token (BBDT)"
  },
  {
    "Symbol": "CDL",
    "CoinName": "CoinDeal Token",
    "FullName": "CoinDeal Token (CDL)"
  },
  {
    "Symbol": "GLDY",
    "CoinName": "Buzzshow",
    "FullName": "Buzzshow (GLDY)"
  },
  {
    "Symbol": "CNHT",
    "CoinName": "Tether CNH",
    "FullName": "Tether CNH (CNHT)"
  },
  {
    "Symbol": "1211.CUR",
    "CoinName": "BYD Company Limited",
    "FullName": "BYD Company Limited (1211.CUR)"
  },
  {
    "Symbol": "1810.CUR",
    "CoinName": "Xiaomi corp.",
    "FullName": "Xiaomi corp. (1810.CUR)"
  },
  {
    "Symbol": "9988.CUR",
    "CoinName": "Alibaba Group Holding Limited",
    "FullName": "Alibaba Group Holding Limited (9988.CUR)"
  },
  {
    "Symbol": "TERADYNE",
    "CoinName": "Teradyne",
    "FullName": "Teradyne (TERADYNE)"
  },
  {
    "Symbol": "SESG.CUR",
    "CoinName": "Ses Fdr",
    "FullName": "Ses Fdr (SESG.CUR)"
  },
  {
    "Symbol": "TRIPAD",
    "CoinName": "TripAdvisor, Inc.",
    "FullName": "TripAdvisor, Inc. (TRIPAD)"
  },
  {
    "Symbol": "AAPL.CUR",
    "CoinName": "Apple Inc",
    "FullName": "Apple Inc (AAPL.CUR)"
  },
  {
    "Symbol": "PNC.CUR",
    "CoinName": "PNC Financial Services Group",
    "FullName": "PNC Financial Services Group (PNC.CUR)"
  },
  {
    "Symbol": "EXAS.CUR",
    "CoinName": "Exact Sciences Corporation",
    "FullName": "Exact Sciences Corporation (EXAS.CUR)"
  },
  {
    "Symbol": "IPN.CUR",
    "CoinName": "Ipsen",
    "FullName": "Ipsen (IPN.CUR)"
  },
  {
    "Symbol": "STM.CUR",
    "CoinName": "Stmicroelectronics Adr",
    "FullName": "Stmicroelectronics Adr (STM.CUR)"
  },
  {
    "Symbol": "TSLA.CUR",
    "CoinName": "Tesla",
    "FullName": "Tesla (TSLA.CUR)"
  },
  {
    "Symbol": "SDC.CUR",
    "CoinName": "SmileDirectClub Inc",
    "FullName": "SmileDirectClub Inc (SDC.CUR)"
  },
  {
    "Symbol": "JBL.CUR",
    "CoinName": "Jabil",
    "FullName": "Jabil (JBL.CUR)"
  },
  {
    "Symbol": "WLL.CUR",
    "CoinName": "Whiting Petroleum",
    "FullName": "Whiting Petroleum (WLL.CUR)"
  },
  {
    "Symbol": "Oil - Crude.CUR",
    "CoinName": "Brent Crude Oil Spot",
    "FullName": "Brent Crude Oil Spot (Oil - Crude.CUR)"
  },
  {
    "Symbol": "BILL.CUR",
    "CoinName": "Bill.com Inc",
    "FullName": "Bill.com Inc (BILL.CUR)"
  },
  {
    "Symbol": "BBY.CUR",
    "CoinName": "Best Buy",
    "FullName": "Best Buy (BBY.CUR)"
  },
  {
    "Symbol": "BILI.CUR",
    "CoinName": "Bilibili Inc.",
    "FullName": "Bilibili Inc. (BILI.CUR)"
  },
  {
    "Symbol": "GME.CUR",
    "CoinName": "Gamestop",
    "FullName": "Gamestop (GME.CUR)"
  },
  {
    "Symbol": "AA.CUR",
    "CoinName": "Alcoa",
    "FullName": "Alcoa (AA.CUR)"
  },
  {
    "Symbol": "BSX.CUR",
    "CoinName": "Boston Scientific",
    "FullName": "Boston Scientific (BSX.CUR)"
  },
  {
    "Symbol": "TFX.CUR",
    "CoinName": "Teleflex",
    "FullName": "Teleflex (TFX.CUR)"
  },
  {
    "Symbol": "NKE.CUR",
    "CoinName": "NIKE Inc",
    "FullName": "NIKE Inc (NKE.CUR)"
  },
  {
    "Symbol": "ABBV.CUR",
    "CoinName": "Abbvie",
    "FullName": "Abbvie (ABBV.CUR)"
  },
  {
    "Symbol": "AN.CUR",
    "CoinName": "Autonation",
    "FullName": "Autonation (AN.CUR)"
  },
  {
    "Symbol": "AAP.CUR",
    "CoinName": "Advance Auto Parts",
    "FullName": "Advance Auto Parts (AAP.CUR)"
  },
  {
    "Symbol": "AR.CUR",
    "CoinName": "Antero Resources",
    "FullName": "Antero Resources (AR.CUR)"
  },
  {
    "Symbol": "RH.CUR",
    "CoinName": "Rh",
    "FullName": "Rh (RH.CUR)"
  },
  {
    "Symbol": "JCP.CUR",
    "CoinName": "Jc Penney",
    "FullName": "Jc Penney (JCP.CUR)"
  },
  {
    "Symbol": "EPAM.CUR",
    "CoinName": "EPAM Systems, Inc.",
    "FullName": "EPAM Systems, Inc. (EPAM.CUR)"
  },
  {
    "Symbol": "ATVI.CUR",
    "CoinName": "Activision Blizzard Inc",
    "FullName": "Activision Blizzard Inc (ATVI.CUR)"
  },
  {
    "Symbol": "WMT.CUR",
    "CoinName": "Wal-Mart Stores Inc",
    "FullName": "Wal-Mart Stores Inc (WMT.CUR)"
  },
  {
    "Symbol": "BA.CUR",
    "CoinName": "Boeing",
    "FullName": "Boeing (BA.CUR)"
  },
  {
    "Symbol": "TGT.CUR",
    "CoinName": "Target Corp",
    "FullName": "Target Corp (TGT.CUR)"
  },
  {
    "Symbol": "YNDX.CUR",
    "CoinName": "Yandex N.V.",
    "FullName": "Yandex N.V. (YNDX.CUR)"
  },
  {
    "Symbol": "ROKU.CUR",
    "CoinName": "Roku, Inc.",
    "FullName": "Roku, Inc. (ROKU.CUR)"
  },
  {
    "Symbol": "CVS.CUR",
    "CoinName": "CVS Health",
    "FullName": "CVS Health (CVS.CUR)"
  },
  {
    "Symbol": "C.CUR",
    "CoinName": "Citigroup Inc",
    "FullName": "Citigroup Inc (C.CUR)"
  },
  {
    "Symbol": "LHA.CUR",
    "CoinName": "Deutsche Lufthansa AG",
    "FullName": "Deutsche Lufthansa AG (LHA.CUR)"
  },
  {
    "Symbol": "BLUE.CUR",
    "CoinName": "bluebird bio, Inc.",
    "FullName": "bluebird bio, Inc. (BLUE.CUR)"
  },
  {
    "Symbol": "F.CUR",
    "CoinName": "Ford Motor Co",
    "FullName": "Ford Motor Co (F.CUR)"
  },
  {
    "Symbol": "DDOG.CUR",
    "CoinName": "Datadog Inc",
    "FullName": "Datadog Inc (DDOG.CUR)"
  },
  {
    "Symbol": "K.CUR",
    "CoinName": "Kellogg",
    "FullName": "Kellogg (K.CUR)"
  },
  {
    "Symbol": "M.CUR",
    "CoinName": "Macys",
    "FullName": "Macys (M.CUR)"
  },
  {
    "Symbol": "SOHU.CUR",
    "CoinName": "Sohu.com Limited",
    "FullName": "Sohu.com Limited (SOHU.CUR)"
  },
  {
    "Symbol": "DHR.CUR",
    "CoinName": "Danaher",
    "FullName": "Danaher (DHR.CUR)"
  },
  {
    "Symbol": "TXT.CUR",
    "CoinName": "Textron",
    "FullName": "Textron (TXT.CUR)"
  },
  {
    "Symbol": "SLCA.CUR",
    "CoinName": "Us Silica Holdings",
    "FullName": "Us Silica Holdings (SLCA.CUR)"
  },
  {
    "Symbol": "R.CUR",
    "CoinName": "Ryder System",
    "FullName": "Ryder System (R.R.CUR)"
  },
  {
    "Symbol": "BYND.CUR",
    "CoinName": "Beyond Meat, Inc.",
    "FullName": "Beyond Meat, Inc. (BYND.CUR)"
  },
  {
    "Symbol": "S.CUR",
    "CoinName": "Sprint",
    "FullName": "Sprint (S.CUR)"
  },
  {
    "Symbol": "IBM.CUR",
    "CoinName": "International Business Machines Corp",
    "FullName": "International Business Machines Corp (IBM.CUR)"
  },
  {
    "Symbol": "XPO.CUR",
    "CoinName": "XPO Logistics",
    "FullName": "XPO Logistics (XPO.CUR)"
  },
  {
    "Symbol": "V.CUR",
    "CoinName": "Visa Inc",
    "FullName": "Visa Inc (V.CUR)"
  },
  {
    "Symbol": "W.CUR",
    "CoinName": "Wayfair Cl A",
    "FullName": "Wayfair Cl A (W.CUR)"
  },
  {
    "Symbol": "X.CUR",
    "CoinName": "US Steel Corp",
    "FullName": "US Steel Corp (X.CUR)"
  },
  {
    "Symbol": "VI",
    "CoinName": "Vid",
    "FullName": "Vid (VI)"
  },
  {
    "Symbol": "MXW",
    "CoinName": "Maxonrow",
    "FullName": "Maxonrow (MXW)"
  },
  {
    "Symbol": "SDT",
    "CoinName": "TerraSDT",
    "FullName": "TerraSDT (SDT)"
  },
  {
    "Symbol": "FORESTPLUS",
    "CoinName": "The Forbidden Forest",
    "FullName": "The Forbidden Forest (FORESTPLUS)"
  },
  {
    "Symbol": "DDK",
    "CoinName": "DDKoin",
    "FullName": "DDKoin (DDK)"
  },
  {
    "Symbol": "MTXLT",
    "CoinName": "Tixl",
    "FullName": "Tixl (MTXLT)"
  },
  {
    "Symbol": "LQBTC",
    "CoinName": "Liquid Bitcoin",
    "FullName": "Liquid Bitcoin (LQBTC)"
  },
  {
    "Symbol": "XPR",
    "CoinName": "Proton",
    "FullName": "Proton (XPR)"
  },
  {
    "Symbol": "UTI",
    "CoinName": "Unicorn Technology International",
    "FullName": "Unicorn Technology International (UTI)"
  },
  {
    "Symbol": "CN50.CUR",
    "CoinName": "FTSE China A50",
    "FullName": "FTSE China A50 (CN50.CUR)"
  },
  {
    "Symbol": "SQ.CUR",
    "CoinName": "Square Cl A",
    "FullName": "Square Cl A (SQ.CUR)"
  },
  {
    "Symbol": "CC.CUR",
    "CoinName": "Chemours",
    "FullName": "Chemours (CC.CUR)"
  },
  {
    "Symbol": "NVDA.CUR",
    "CoinName": "NVIDIA",
    "FullName": "NVIDIA (NVDA.CUR)"
  },
  {
    "Symbol": "NZD.CUR",
    "CoinName": "New Zealand Dollar",
    "FullName": "New Zealand Dollar (NZD.CUR)"
  },
  {
    "Symbol": "TWTR.CUR",
    "CoinName": "Twitter",
    "FullName": "Twitter (TWTR.CUR)"
  },
  {
    "Symbol": "MTCH.CUR",
    "CoinName": "Match Group, Inc.",
    "FullName": "Match Group, Inc. (MTCH.CUR)"
  },
  {
    "Symbol": "FTXR.CUR",
    "CoinName": "First Trust Nasdaq Transportation ETF",
    "FullName": "First Trust Nasdaq Transportation ETF (FTXR.CUR)"
  },
  {
    "Symbol": "FR40.CUR",
    "CoinName": "France 40",
    "FullName": "France 40 (FR40.CUR)"
  },
  {
    "Symbol": "SWN.CUR",
    "CoinName": "Southwestern Energy",
    "FullName": "Southwestern Energy (SWN.CUR)"
  },
  {
    "Symbol": "DIS.CUR",
    "CoinName": "Walt Disney",
    "FullName": "Walt Disney (DIS.CUR)"
  },
  {
    "Symbol": "INTC.CUR",
    "CoinName": "Intel Corporation",
    "FullName": "Intel Corporation (INTC.CUR)"
  },
  {
    "Symbol": "INCY.CUR",
    "CoinName": "Incyte Corporation",
    "FullName": "Incyte Corporation (INCY.CUR)"
  },
  {
    "Symbol": "TEAM.CUR",
    "CoinName": "Atlassian Corporation Plc",
    "FullName": "Atlassian Corporation Plc (TEAM.CUR)"
  },
  {
    "Symbol": "AMZN.CUR",
    "CoinName": "Amazon.com Inc",
    "FullName": "Amazon.com Inc (AMZN.CUR)"
  },
  {
    "Symbol": "DWDP.CUR",
    "CoinName": "DowDuPont Inc.",
    "FullName": "DowDuPont Inc. (DWDP.CUR)"
  },
  {
    "Symbol": "ALXN.CUR",
    "CoinName": "Alexion Pharmaceuticals, Inc.",
    "FullName": "Alexion Pharmaceuticals, Inc. (ALXN.CUR)"
  },
  {
    "Symbol": "AUD.CUR",
    "CoinName": "Australian Dollar",
    "FullName": "Australian Dollar (AUD.CUR)"
  },
  {
    "Symbol": "DE30.CUR",
    "CoinName": "Germany 30",
    "FullName": "Germany 30 (DE30.CUR)"
  },
  {
    "Symbol": "DE.CUR",
    "CoinName": "Deere",
    "FullName": "Deere (DE.CUR)"
  },
  {
    "Symbol": "DG.CUR",
    "CoinName": "Dollar General",
    "FullName": "Dollar General (DG.CUR)"
  },
  {
    "Symbol": "SRPT.CUR",
    "CoinName": "Sarepta Therapeutics, Inc.",
    "FullName": "Sarepta Therapeutics, Inc. (SRPT.CUR)"
  },
  {
    "Symbol": "APAM.CUR",
    "CoinName": "Aperam S.A.",
    "FullName": "Aperam S.A. (APAM.CUR)"
  },
  {
    "Symbol": "CHK.CUR",
    "CoinName": "Chesapeake Energy Corp",
    "FullName": "Chesapeake Energy Corp (CHK.CUR)"
  },
  {
    "Symbol": "KHC.CUR",
    "CoinName": "The Kraft Heinz Company",
    "FullName": "The Kraft Heinz Company (KHC.CUR)"
  },
  {
    "Symbol": "BBBY.CUR",
    "CoinName": "Bed Bath & Beyond Inc.",
    "FullName": "Bed Bath & Beyond Inc. (BBBY.CUR)"
  },
  {
    "Symbol": "GPS.CUR",
    "CoinName": "The Gap, Inc.",
    "FullName": "The Gap, Inc. (GPS.CUR)"
  },
  {
    "Symbol": "ADS.CUR",
    "CoinName": "Adidas AG",
    "FullName": "Adidas AG (ADS.CUR)"
  },
  {
    "Symbol": "CRON.CUR",
    "CoinName": "Cronos Group Inc.",
    "FullName": "Cronos Group Inc. (CRON.CUR)"
  },
  {
    "Symbol": "FIVE.CUR",
    "CoinName": "Five Below, Inc.",
    "FullName": "Five Below, Inc. (FIVE.CUR)"
  },
  {
    "Symbol": "PBF.CUR",
    "CoinName": "Pbf Energy Cl A",
    "FullName": "Pbf Energy Cl A (PBF.CUR)"
  },
  {
    "Symbol": "TLRY.CUR",
    "CoinName": "Tilray, Inc.",
    "FullName": "Tilray, Inc. (TLRY.CUR)"
  },
  {
    "Symbol": "GRUB.CUR",
    "CoinName": "Grubhub",
    "FullName": "Grubhub (GRUB.CUR)"
  },
  {
    "Symbol": "PAYC.CUR",
    "CoinName": "Paycom Software, Inc.",
    "FullName": "Paycom Software, Inc. (PAYC.CUR)"
  },
  {
    "Symbol": "DLPH.CUR",
    "CoinName": "Delphi Automotive",
    "FullName": "Delphi Automotive (DLPH.CUR)"
  },
  {
    "Symbol": "BABA.CUR",
    "CoinName": "Alibaba Group Holding Limited",
    "FullName": "Alibaba Group Holding Limited (BABA.CUR)"
  },
  {
    "Symbol": "JWN.CUR",
    "CoinName": "Nordstrom",
    "FullName": "Nordstrom (JWN.CUR)"
  },
  {
    "Symbol": "PBR.CUR",
    "CoinName": "Petroleo Brasileiro SA",
    "FullName": "Petroleo Brasileiro SA (PBR.CUR)"
  },
  {
    "Symbol": "GOLD.CUR",
    "CoinName": "Gold Spot",
    "FullName": "Gold Spot (Gold.CUR)"
  },
  {
    "Symbol": "CHF.CUR",
    "CoinName": "Swiss Franc",
    "FullName": "Swiss Franc (CHF.CUR)"
  },
  {
    "Symbol": "NL25.CUR",
    "CoinName": "Amsterdam Exchange Index 25",
    "FullName": "Amsterdam Exchange Index 25 (NL25.CUR)"
  },
  {
    "Symbol": "EMN.CUR",
    "CoinName": "Eastman Chemical",
    "FullName": "Eastman Chemical (EMN.CUR)"
  },
  {
    "Symbol": "HCA.CUR",
    "CoinName": "HCA Healthcare",
    "FullName": "HCA Healthcare (HCA.CUR)"
  },
  {
    "Symbol": "PBYI.CUR",
    "CoinName": "Puma Biotechnology, Inc.",
    "FullName": "Puma Biotechnology, Inc. (PBYI.CUR)"
  },
  {
    "Symbol": "AEM.CUR",
    "CoinName": "Agnico Eagle",
    "FullName": "Agnico Eagle (AEM.CUR)"
  },
  {
    "Symbol": "SIG.CUR",
    "CoinName": "Signet Jewelers",
    "FullName": "Signet Jewelers (SIG.CUR)"
  },
  {
    "Symbol": "Silver.CUR",
    "CoinName": "Silver Spot",
    "FullName": "Silver Spot (Silver.CUR)"
  },
  {
    "Symbol": "SYY.CUR",
    "CoinName": "Sysco",
    "FullName": "Sysco (SYY.CUR)"
  },
  {
    "Symbol": "NOW.CUR",
    "CoinName": "ServiceNow",
    "FullName": "ServiceNow (NOW.CUR)"
  },
  {
    "Symbol": "VOO.CUR",
    "CoinName": "Vanguard S&P 500 ETF",
    "FullName": "Vanguard S&P 500 ETF (VOO.CUR)"
  },
  {
    "Symbol": "EXEL.CUR",
    "CoinName": "Exelixis, Inc.",
    "FullName": "Exelixis, Inc. (EXEL.CUR)"
  },
  {
    "Symbol": "ICPT.CUR",
    "CoinName": "Intercept Pharmaceuticals, Inc.",
    "FullName": "Intercept Pharmaceuticals, Inc. (ICPT.CUR)"
  },
  {
    "Symbol": "FB.CUR",
    "CoinName": "Facebook",
    "FullName": "Facebook (FB.CUR)"
  },
  {
    "Symbol": "QRVO.CUR",
    "CoinName": "Qorvo, Inc.",
    "FullName": "Qorvo, Inc. (QRVO.CUR)"
  },
  {
    "Symbol": "OAS.CUR",
    "CoinName": "Oasis Petroleum",
    "FullName": "Oasis Petroleum (OAS.CUR)"
  },
  {
    "Symbol": "CSCO.CUR",
    "CoinName": "Cisco Systems",
    "FullName": "Cisco Systems (CSCO.CUR)"
  },
  {
    "Symbol": "IT40.CUR",
    "CoinName": "FTSE Borsa Italiana Index 40",
    "FullName": "FTSE Borsa Italiana Index 40 (IT40.CUR)"
  },
  {
    "Symbol": "PTON.CUR",
    "CoinName": "Peloton Interactive Inc",
    "FullName": "Peloton Interactive Inc (PTON.CUR)"
  },
  {
    "Symbol": "GPRO.CUR",
    "CoinName": "GoPro Inc",
    "FullName": "GoPro Inc (GPRO.CUR)"
  },
  {
    "Symbol": "GWPH.CUR",
    "CoinName": "GW Pharmaceuticals PLC",
    "FullName": "GW Pharmaceuticals PLC (GWPH.CUR)"
  },
  {
    "Symbol": "FP.CUR",
    "CoinName": "Total",
    "FullName": "Total (FP.CUR)"
  },
  {
    "Symbol": "MNK.CUR",
    "CoinName": "Mallinckrodt",
    "FullName": "Mallinckrodt (MNK.CUR)"
  },
  {
    "Symbol": "WB.CUR",
    "CoinName": "Weibo Corporation",
    "FullName": "Weibo Corporation (WB.CUR)"
  },
  {
    "Symbol": "NTES.CUR",
    "CoinName": "NetEase, Inc.",
    "FullName": "NetEase, Inc. (NTES.CUR)"
  },
  {
    "Symbol": "MSFT.CUR",
    "CoinName": "Microsoft",
    "FullName": "Microsoft (MSFT.CUR)"
  },
  {
    "Symbol": "SHOP.CUR",
    "CoinName": "Shopify Cl A Sub Vtg",
    "FullName": "Shopify Cl A Sub Vtg (SHOP.CUR)"
  },
  {
    "Symbol": "WBA.CUR",
    "CoinName": "Walgreen Boots Alliance",
    "FullName": "Walgreen Boots Alliance (WBA.CUR)"
  },
  {
    "Symbol": "LLY.CUR",
    "CoinName": "Eli Lilly & Co",
    "FullName": "Eli Lilly & Co (LLY.CUR)"
  },
  {
    "Symbol": "IFX.CUR",
    "CoinName": "Infineon Technologies AG",
    "FullName": "Infineon Technologies AG (IFX.CUR)"
  },
  {
    "Symbol": "GD.CUR",
    "CoinName": "General Dynamics",
    "FullName": "General Dynamics (GD.CUR)"
  },
  {
    "Symbol": "GE.CUR",
    "CoinName": "General Electric Co",
    "FullName": "General Electric Co (GE.CUR)"
  },
  {
    "Symbol": "NKTR.CUR",
    "CoinName": "Nektar Therapeutics",
    "FullName": "Nektar Therapeutics (NKTR.CUR)"
  },
  {
    "Symbol": "MOMO.CUR",
    "CoinName": "Momo Inc.",
    "FullName": "Momo Inc. (MOMO.CUR)"
  },
  {
    "Symbol": "BIG.CUR",
    "CoinName": "Big Lots",
    "FullName": "Big Lots (BIG.CUR)"
  },
  {
    "Symbol": "ONEM.CUR",
    "CoinName": "1Life Healthcare Inc",
    "FullName": "1Life Healthcare Inc (ONEM.CUR)"
  },
  {
    "Symbol": "WATT.CUR",
    "CoinName": "Energous Corporation",
    "FullName": "Energous Corporation (WATT.CUR)"
  },
  {
    "Symbol": "ALLY.CUR",
    "CoinName": "Ally Financial",
    "FullName": "Ally Financial (ALLY.CUR)"
  },
  {
    "Symbol": "AGN.CUR",
    "CoinName": "Allergan",
    "FullName": "Allergan (AGN.CUR)"
  },
  {
    "Symbol": "SWKS.CUR",
    "CoinName": "Skyworks Solutions, Inc.",
    "FullName": "Skyworks Solutions, Inc. (SWKS.CUR)"
  },
  {
    "Symbol": "CAD.CUR",
    "CoinName": "Canadian Dollar",
    "FullName": "Canadian Dollar (CAD.CUR)"
  },
  {
    "Symbol": "AFp.CUR",
    "CoinName": "Air France-Klm",
    "FullName": "Air France-Klm (AFp.CUR)"
  },
  {
    "Symbol": "GT.CUR",
    "CoinName": "The Goodyear Tire & Rubber Company",
    "FullName": "The Goodyear Tire & Rubber Company (GT.CUR)"
  },
  {
    "Symbol": "AZBI",
    "CoinName": "AZBI CORE",
    "FullName": "AZBI CORE (AZBI)"
  },
  {
    "Symbol": "DVX",
    "CoinName": "Derivex",
    "FullName": "Derivex (DVX)"
  },
  {
    "Symbol": "AR",
    "CoinName": "Arweave",
    "FullName": "Arweave (AR)"
  },
  {
    "Symbol": "ASM",
    "CoinName": "Assemble Protocol",
    "FullName": "Assemble Protocol (ASM)"
  },
  {
    "Symbol": "GHOST",
    "CoinName": "GhostbyMcAfee",
    "FullName": "GhostbyMcAfee (GHOST)"
  },
  {
    "Symbol": "HIBS",
    "CoinName": "Hiblocks",
    "FullName": "Hiblocks (HIBS)"
  },
  {
    "Symbol": "BZUN.CUR",
    "CoinName": "Baozun Inc.",
    "FullName": "Baozun Inc. (BZUN.CUR)"
  },
  {
    "Symbol": "TMUS.CUR",
    "CoinName": "T-Mobile US, Inc.",
    "FullName": "T-Mobile US, Inc. (TMUS.CUR)"
  },
  {
    "Symbol": "XEC.CUR",
    "CoinName": "Cimarex Energy",
    "FullName": "Cimarex Energy (XEC.CUR)"
  },
  {
    "Symbol": "CLVS.CUR",
    "CoinName": "Clovis Oncology, Inc.",
    "FullName": "Clovis Oncology, Inc. (CLVS.CUR)"
  },
  {
    "Symbol": "PEP.CUR",
    "CoinName": "Pepsico",
    "FullName": "Pepsico (PEP.CUR)"
  },
  {
    "Symbol": "TEVA.CUR",
    "CoinName": "Teva Pharma Ind Adr Rep 1",
    "FullName": "Teva Pharma Ind Adr Rep 1 (TEVA.CUR)"
  },
  {
    "Symbol": "ISRG.CUR",
    "CoinName": "Intuitive Surgical, Inc.",
    "FullName": "Intuitive Surgical, Inc. (ISRG.CUR)"
  },
  {
    "Symbol": "BIDU.CUR",
    "CoinName": "Baidu, Inc.",
    "FullName": "Baidu, Inc. (BIDU.CUR)"
  },
  {
    "Symbol": "PFE.CUR",
    "CoinName": "Pfizer Inc",
    "FullName": "Pfizer Inc (PFE.CUR)"
  },
  {
    "Symbol": "522.CUR",
    "CoinName": "ASM Pacific Technology Limited",
    "FullName": "ASM Pacific Technology Limited (522.CUR)"
  },
  {
    "Symbol": "COMM.CUR",
    "CoinName": "CommScope Holding Company, Inc.",
    "FullName": "CommScope Holding Company, Inc. (COMM.CUR)"
  },
  {
    "Symbol": "SBUX.CUR",
    "CoinName": "Starbucks Corp",
    "FullName": "Starbucks Corp (SBUX.CUR)"
  },
  {
    "Symbol": "IRBT.CUR",
    "CoinName": "iRobot Corporation",
    "FullName": "iRobot Corporation (IRBT.CUR)"
  },
  {
    "Symbol": "SBER.CUR",
    "CoinName": "Sberbank of Russia GDR",
    "FullName": "Sberbank of Russia GDR (SBER.CUR)"
  },
  {
    "Symbol": "VOW3.CUR",
    "CoinName": "Volkswagen AG",
    "FullName": "Volkswagen AG (VOW3.CUR)"
  },
  {
    "Symbol": "YY.CUR",
    "CoinName": "YY Inc.",
    "FullName": "YY Inc. (YY.CUR)"
  },
  {
    "Symbol": "OGZD.CUR",
    "CoinName": "Gazprom PJSC ADR",
    "FullName": "Gazprom PJSC ADR (OGZD.CUR)"
  },
  {
    "Symbol": "DLTR.CUR",
    "CoinName": "Dollar Tree, Inc.",
    "FullName": "Dollar Tree, Inc. (DLTR.CUR)"
  },
  {
    "Symbol": "IP.CUR",
    "CoinName": "International Paper",
    "FullName": "International Paper (IP.CUR)"
  },
  {
    "Symbol": "ALNY.CUR",
    "CoinName": "Alnylam Pharmaceuticals, Inc.",
    "FullName": "Alnylam Pharmaceuticals, Inc. (ALNY.CUR)"
  },
  {
    "Symbol": "AIR.CUR",
    "CoinName": "Delta Air Lines",
    "FullName": "Delta Air Lines (AIR.CUR)"
  },
  {
    "Symbol": "SMG.CUR",
    "CoinName": "The Scotts Miracle-Gro Company",
    "FullName": "The Scotts Miracle-Gro Company (SMG.CUR)"
  },
  {
    "Symbol": "MAC.CUR",
    "CoinName": "Macerich",
    "FullName": "Macerich (MAC.CUR)"
  },
  {
    "Symbol": "YOLO.CUR",
    "CoinName": "AdvisorShares Pure Cannabis ETF",
    "FullName": "AdvisorShares Pure Cannabis ETF (YOLO.CUR)"
  },
  {
    "Symbol": "FVRR.CUR",
    "CoinName": "Fiverr International Ltd",
    "FullName": "Fiverr International Ltd (FVRR.CUR)"
  },
  {
    "Symbol": "FSLR.CUR",
    "CoinName": "First Solar Inc",
    "FullName": "First Solar Inc (FSLR.CUR)"
  },
  {
    "Symbol": "JKS.CUR",
    "CoinName": "JinkoSolar Holding Co., Ltd.",
    "FullName": "JinkoSolar Holding Co., Ltd. (JKS.CUR)"
  },
  {
    "Symbol": "DKA",
    "CoinName": "dKargo",
    "FullName": "dKargo (DKA)"
  },
  {
    "Symbol": "RNX",
    "CoinName": "ROONEX",
    "FullName": "ROONEX (RNX)"
  },
  {
    "Symbol": "KDAG",
    "CoinName": "King DAG",
    "FullName": "King DAG (KDAG)"
  },
  {
    "Symbol": "KVI",
    "CoinName": "KVI Chain",
    "FullName": "KVI Chain (KVI)"
  },
  {
    "Symbol": "DRM",
    "CoinName": "DoDreamChain",
    "FullName": "DoDreamChain (DRM)"
  },
  {
    "Symbol": "PAXGBULL",
    "CoinName": "3X Long PAX Gold Token",
    "FullName": "3X Long PAX Gold Token (PAXGBULL)"
  },
  {
    "Symbol": "PAXGBEAR",
    "CoinName": "3X Short PAX Gold Token",
    "FullName": "3X Short PAX Gold Token (PAXGBEAR)"
  },
  {
    "Symbol": "PAXGHALF",
    "CoinName": "0.5X Long PAX Gold Token",
    "FullName": "0.5X Long PAX Gold Token (PAXGHALF)"
  },
  {
    "Symbol": "PHNX",
    "CoinName": "PhoenixDAO",
    "FullName": "PhoenixDAO (PHNX)"
  },
  {
    "Symbol": "MHLX",
    "CoinName": "HelixNetwork",
    "FullName": "HelixNetwork (MHLX)"
  },
  {
    "Symbol": "SPICE",
    "CoinName": "Spice",
    "FullName": "Spice (SPICE)"
  },
  {
    "Symbol": "GGOLD",
    "CoinName": "GramGold Coin",
    "FullName": "GramGold Coin (GGOLD)"
  },
  {
    "Symbol": "ALCH",
    "CoinName": "Alchemy",
    "FullName": "Alchemy (ALCH)"
  },
  {
    "Symbol": "SODA",
    "CoinName": "SODA Coin",
    "FullName": "SODA Coin (SODA)"
  },
  {
    "Symbol": "GILD.CUR",
    "CoinName": "Gilead Sciences",
    "FullName": "Gilead Sciences (GILD.CUR)"
  },
  {
    "Symbol": "RAD.CUR",
    "CoinName": "Rite Aid",
    "FullName": "Rite Aid (RAD.CUR)"
  },
  {
    "Symbol": "APA.CUR",
    "CoinName": "Apache",
    "FullName": "Apache (APA.CUR)"
  },
  {
    "Symbol": "MGM.CUR",
    "CoinName": "MGM Resorts International",
    "FullName": "MGM Resorts International (MGM.CUR)"
  },
  {
    "Symbol": "GRMN.CUR",
    "CoinName": "Garmin Ltd.",
    "FullName": "Garmin Ltd. (GRMN.CUR)"
  },
  {
    "Symbol": "UAA.CUR",
    "CoinName": "Under Armour Cl A",
    "FullName": "Under Armour Cl A (UAA.CUR)"
  },
  {
    "Symbol": "ADNT.CUR",
    "CoinName": "Adient",
    "FullName": "Adient (ADNT.CUR)"
  },
  {
    "Symbol": "LYFT.CUR",
    "CoinName": "LYFT",
    "FullName": "LYFT (LYFT.CUR)"
  },
  {
    "Symbol": "WORK.CUR",
    "CoinName": "Slack Technologies Inc",
    "FullName": "Slack Technologies Inc (WORK.CUR)"
  },
  {
    "Symbol": "MCHP.CUR",
    "CoinName": "Microchip Technology Incorporated",
    "FullName": "Microchip Technology Incorporated (MCHP.CUR)"
  },
  {
    "Symbol": "MRVL.CUR",
    "CoinName": "Marvell Technology Group Ltd.",
    "FullName": "Marvell Technology Group Ltd. (MRVL.CUR)"
  },
  {
    "Symbol": "US500.CUR",
    "CoinName": "S&P 500",
    "FullName": "S&P 500 (US500.CUR)"
  },
  {
    "Symbol": "MRK.CUR",
    "CoinName": "Merck & Co Inc",
    "FullName": "Merck & Co Inc (MRK.CUR)"
  },
  {
    "Symbol": "NDA.CUR",
    "CoinName": "Aurubis AG",
    "FullName": "Aurubis AG (NDA.CUR)"
  },
  {
    "Symbol": "SNE.CUR",
    "CoinName": "Sony Corporation",
    "FullName": "Sony Corporation (SNE.CUR)"
  },
  {
    "Symbol": "CNX.CUR",
    "CoinName": "Consol Energy",
    "FullName": "Consol Energy (CNX.CUR)"
  },
  {
    "Symbol": "VNET.CUR",
    "CoinName": "21Vianet Group, Inc.",
    "FullName": "21Vianet Group, Inc. (VNET.CUR)"
  },
  {
    "Symbol": "WFC.CUR",
    "CoinName": "Wells Fargo & Co",
    "FullName": "Wells Fargo & Co (WFC.CUR)"
  },
  {
    "Symbol": "QCOM.CUR",
    "CoinName": "QUALCOMM Inc",
    "FullName": "QUALCOMM Inc (QCOM.CUR)"
  },
  {
    "Symbol": "SP35.CUR",
    "CoinName": "Spain 35",
    "FullName": "Spain 35 (SP35.CUR)"
  },
  {
    "Symbol": "FDX.CUR",
    "CoinName": "Fedex",
    "FullName": "Fedex (FDX.CUR)"
  },
  {
    "Symbol": "US30.CUR",
    "CoinName": "Dow Jones 30",
    "FullName": "Dow Jones 30 (US30.CUR)"
  },
  {
    "Symbol": "TPX.CUR",
    "CoinName": "Tempur Sealy International",
    "FullName": "Tempur Sealy International (TPX.CUR)"
  },
  {
    "Symbol": "NFLX.CUR",
    "CoinName": "Netflix",
    "FullName": "Netflix (NFLX.CUR)"
  },
  {
    "Symbol": "TWLO.CUR",
    "CoinName": "Twilio Cl A",
    "FullName": "Twilio Cl A (TWLO.CUR)"
  },
  {
    "Symbol": "KO.CUR",
    "CoinName": "Coca-Cola",
    "FullName": "Coca-Cola (KO.CUR)"
  },
  {
    "Symbol": "RMD.CUR",
    "CoinName": "Resmed",
    "FullName": "Resmed (RMD.CUR)"
  },
  {
    "Symbol": "BTC3L",
    "CoinName": "Amun Bitcoin 3x Daily Long",
    "FullName": "Amun Bitcoin 3x Daily Long (BTC3L)"
  },
  {
    "Symbol": "EU50.CUR",
    "CoinName": "Euro Stoxx 50",
    "FullName": "Euro Stoxx 50 (EU50.CUR)"
  },
  {
    "Symbol": "DAI.CUR",
    "CoinName": "Daimler AG",
    "FullName": "Daimler AG (DAI.CUR)"
  },
  {
    "Symbol": "BTC3S",
    "CoinName": "Amun Bitcoin 3x Daily Short",
    "FullName": "Amun Bitcoin 3x Daily Short (BTC3S)"
  },
  {
    "Symbol": "BMW.CUR",
    "CoinName": "BMW AG",
    "FullName": "BMW AG (BMW.CUR)"
  },
  {
    "Symbol": "ETH3L",
    "CoinName": "Amun Ether 3x Daily Long",
    "FullName": "Amun Ether 3x Daily Long (ETH3L)"
  },
  {
    "Symbol": "DAL.CUR",
    "CoinName": "Delta Air Lines",
    "FullName": "Delta Air Lines (DAL.CUR)"
  },
  {
    "Symbol": "MCD.CUR",
    "CoinName": "McDonald's",
    "FullName": "McDonald's (MCD.CUR)"
  },
  {
    "Symbol": "ETH3S",
    "CoinName": "Amun Ether 3x Daily Short",
    "FullName": "Amun Ether 3x Daily Short (ETH3S)"
  },
  {
    "Symbol": "ADABEAR",
    "CoinName": "3X Short Cardano Token",
    "FullName": "3X Short Cardano Token (ADABEAR)"
  },
  {
    "Symbol": "ADABULL",
    "CoinName": "3X Long Cardano Token",
    "FullName": "3X Long Cardano Token (ADABULL)"
  },
  {
    "Symbol": "MATICBULL",
    "CoinName": "3X Long Matic Token",
    "FullName": "3X Long Matic Token (MATICBULL)"
  },
  {
    "Symbol": "MATICBEAR",
    "CoinName": "3X Short Matic Token",
    "FullName": "3X Short Matic Token (MATICBEAR)"
  },
  {
    "Symbol": "ATOMBULL",
    "CoinName": "3X Long Cosmos Token",
    "FullName": "3X Long Cosmos Token (ATOMBULL)"
  },
  {
    "Symbol": "ATOMBEAR",
    "CoinName": "3X Short Cosmos Token",
    "FullName": "3X Short Cosmos Token (ATOMBEAR)"
  },
  {
    "Symbol": "ALGOBULL",
    "CoinName": "3X Long Algorand Token",
    "FullName": "3X Long Algorand Token (ALGOBULL)"
  },
  {
    "Symbol": "ALGOBEAR",
    "CoinName": "3X Short Algorand Token",
    "FullName": "3X Short Algorand Token (ALGOBEAR)"
  },
  {
    "Symbol": "KNCBULL",
    "CoinName": "3X Long Kyber Network Token",
    "FullName": "3X Long Kyber Network Token (KNCBULL)"
  },
  {
    "Symbol": "THETABULL",
    "CoinName": "3X Long Theta Network Token",
    "FullName": "3X Long Theta Network Token (THETABULL)"
  },
  {
    "Symbol": "KNCBEAR",
    "CoinName": "3X Short Kyber Network Token",
    "FullName": "3X Short Kyber Network Token (KNCBEAR)"
  },
  {
    "Symbol": "BEARSHIT",
    "CoinName": "3X Short Shitcoin Index Token",
    "FullName": "3X Short Shitcoin Index Token (BEARSHIT)"
  },
  {
    "Symbol": "ETCBULL",
    "CoinName": "3X Long Ethereum Classic Token",
    "FullName": "3X Long Ethereum Classic Token (ETCBULL)"
  },
  {
    "Symbol": "ETCBEAR",
    "CoinName": "3X Short Ethereum Classic Token",
    "FullName": "3X Short Ethereum Classic Token (ETCBEAR)"
  },
  {
    "Symbol": "TOMOBEAR",
    "CoinName": "3X Short TomoChain Token",
    "FullName": "3X Short TomoChain Token (TOMOBEAR)"
  },
  {
    "Symbol": "TOMOBULL",
    "CoinName": "3X Long TomoChain Token",
    "FullName": "3X Long TomoChain Token (TOMOBULL)"
  },
  {
    "Symbol": "DRGNBEAR",
    "CoinName": "3X Short Dragon Index Token",
    "FullName": "3X Short Dragon Index Token (DRGNBEAR)"
  },
  {
    "Symbol": "DRGNBULL",
    "CoinName": "3X Long Dragon Index Token",
    "FullName": "3X Long Dragon Index Token (DRGNBULL)"
  },
  {
    "Symbol": "THETABEAR",
    "CoinName": "3X Short Theta Network Token",
    "FullName": "3X Short Theta Network Token (THETABEAR)"
  },
  {
    "Symbol": "MIDBEAR",
    "CoinName": "3X Short Midcap Index Token",
    "FullName": "3X Short Midcap Index Token (MIDBEAR)"
  },
  {
    "Symbol": "MIDBULL",
    "CoinName": "3X Long Midcap Index Token",
    "FullName": "3X Long Midcap Index Token (MIDBULL)"
  },
  {
    "Symbol": "OKBBEAR",
    "CoinName": "3X Short OKB Token",
    "FullName": "3X Short OKB Token (OKBBEAR)"
  },
  {
    "Symbol": "OKBBULL",
    "CoinName": "3X Long OKB Token",
    "FullName": "3X Long OKB Token (OKBBULL)"
  },
  {
    "Symbol": "BTMXBEAR",
    "CoinName": "3X Short BitMax Token Token",
    "FullName": "3X Short BitMax Token Token (BTMXBEAR)"
  },
  {
    "Symbol": "BTMXBULL",
    "CoinName": "3X Long BitMax Token Token",
    "FullName": "3X Long BitMax Token Token (BTMXBULL)"
  },
  {
    "Symbol": "LEOBULL",
    "CoinName": "3X Long LEO Token",
    "FullName": "3X Long LEO Token (LEOBULL)"
  },
  {
    "Symbol": "LEOBEAR",
    "CoinName": "3X Short LEO Token",
    "FullName": "3X Short LEO Token (LEOBEAR)"
  },
  {
    "Symbol": "HTBEAR",
    "CoinName": "3X Short Huobi Token Token",
    "FullName": "3X Short Huobi Token Token (HTBEAR)"
  },
  {
    "Symbol": "HTBULL",
    "CoinName": "3X Long Huobi Token Token",
    "FullName": "3X Long Huobi Token Token (HTBULL)"
  },
  {
    "Symbol": "DOGEBULL",
    "CoinName": "3X Long Dogecoin Token",
    "FullName": "3X Long Dogecoin Token (DOGEBULL)"
  },
  {
    "Symbol": "DOGEBEAR",
    "CoinName": "3X Short Dogecoin Token",
    "FullName": "3X Short Dogecoin Token (DOGEBEAR)"
  },
  {
    "Symbol": "PRIVBEAR",
    "CoinName": "3X Short Privacy Index Token",
    "FullName": "3X Short Privacy Index Token (PRIVBEAR)"
  },
  {
    "Symbol": "PRIVBULL",
    "CoinName": "3X Long Privacy Index Token",
    "FullName": "3X Long Privacy Index Token (PRIVBULL)"
  },
  {
    "Symbol": "USDTBULL",
    "CoinName": "3X Long Tether Token",
    "FullName": "3X Long Tether Token (USDTBULL)"
  },
  {
    "Symbol": "USDTBEAR",
    "CoinName": "3X Short Tether Token",
    "FullName": "3X Short Tether Token (USDTBEAR)"
  },
  {
    "Symbol": "WDAY.CUR",
    "CoinName": "Workday Inc",
    "FullName": "Workday Inc (WDAY.CUR)"
  },
  {
    "Symbol": "SNAP.CUR",
    "CoinName": "Snap",
    "FullName": "Snap (SNAP.CUR)"
  },
  {
    "Symbol": "241.CUR",
    "CoinName": "Alibaba Health Information Technology Limited",
    "FullName": "Alibaba Health Information Technology Limited (241.CUR)"
  },
  {
    "Symbol": "HMI.CUR",
    "CoinName": "Huami Corporation",
    "FullName": "Huami Corporation (HMI.CUR)"
  },
  {
    "Symbol": "XLV.CUR",
    "CoinName": "Health Care Select Sector SPDR Fund",
    "FullName": "Health Care Select Sector SPDR Fund (XLV.CUR)"
  },
  {
    "Symbol": "PYPL.CUR",
    "CoinName": "PayPal Holdings",
    "FullName": "PayPal Holdings (PYPL.CUR)"
  },
  {
    "Symbol": "SSA.CUR",
    "CoinName": "Sistema PJSFC GDR",
    "FullName": "Sistema PJSFC GDR (SSA.CUR)"
  },
  {
    "Symbol": "UBER.CUR",
    "CoinName": "Uber Technologies Inc",
    "FullName": "Uber Technologies Inc (UBER.CUR)"
  },
  {
    "Symbol": "VLDY",
    "CoinName": "Validity",
    "FullName": "Validity (VLDY)"
  },
  {
    "Symbol": "NEE.CUR",
    "CoinName": "Nextera Energy",
    "FullName": "Nextera Energy (NEE.CUR)"
  },
  {
    "Symbol": "CPRT.CUR",
    "CoinName": "Copart, Inc.",
    "FullName": "Copart, Inc. (CPRT.CUR)"
  },
  {
    "Symbol": "CPB.CUR",
    "CoinName": "Campbell Soup",
    "FullName": "Campbell Soup (CPB.CUR)"
  },
  {
    "Symbol": "LB.CUR",
    "CoinName": "L Brands",
    "FullName": "L Brands (LB.CUR)"
  },
  {
    "Symbol": "NEM.CUR",
    "CoinName": "Newmont Mining",
    "FullName": "Newmont Mining (NEM.CUR)"
  },
  {
    "Symbol": "ADPT.CUR",
    "CoinName": "Adaptive Biotechnologies Corporation",
    "FullName": "Adaptive Biotechnologies Corporation (ADPT.CUR)"
  },
  {
    "Symbol": "ETL.CUR",
    "CoinName": "Eutelsat Communications",
    "FullName": "Eutelsat Communications (ETL.CUR)"
  },
  {
    "Symbol": "NET.CUR",
    "CoinName": "Cloudflare Inc.",
    "FullName": "Cloudflare Inc. (NET.CUR)"
  },
  {
    "Symbol": "OSTK.CUR",
    "CoinName": "Overstock.com, Inc.",
    "FullName": "Overstock.com, Inc. (OSTK.CUR)"
  },
  {
    "Symbol": "AMUN.CUR",
    "CoinName": "Amundi",
    "FullName": "Amundi (AMUN.CUR)"
  },
  {
    "Symbol": "BMRN.CUR",
    "CoinName": "BioMarin Pharmaceutical Inc",
    "FullName": "BioMarin Pharmaceutical Inc (BMRN.CUR)"
  },
  {
    "Symbol": "Platinum.CUR",
    "CoinName": "Platinum Spot",
    "FullName": "Platinum Spot (Platinum.CUR)"
  },
  {
    "Symbol": "TTWO.CUR",
    "CoinName": "Take-Two Interactive Software, Inc.",
    "FullName": "Take-Two Interactive Software, Inc. (TTWO.CUR)"
  },
  {
    "Symbol": "NCLH.CUR",
    "CoinName": "Norwegian Cruise Line Holdings Ltd.",
    "FullName": "Norwegian Cruise Line Holdings Ltd. (NCLH.CUR)"
  },
  {
    "Symbol": "GOOGL.CUR",
    "CoinName": "Alphabet Inc",
    "FullName": "Alphabet Inc (GOOGL.CUR)"
  },
  {
    "Symbol": "BNTX.CUR",
    "CoinName": "Biontech SE",
    "FullName": "Biontech SE (BNTX.CUR)"
  },
  {
    "Symbol": "EDF.CUR",
    "CoinName": "Edf",
    "FullName": "Edf (EDF.CUR)"
  },
  {
    "Symbol": "CBK.CUR",
    "CoinName": "Commerzbank AG",
    "FullName": "Commerzbank AG (CBK.CUR)"
  },
  {
    "Symbol": "OCFT.CUR",
    "CoinName": "OneConnect",
    "FullName": "OneConnect (OCFT.CUR)"
  },
  {
    "Symbol": "EXPE.CUR",
    "CoinName": "Expedia Inc",
    "FullName": "Expedia Inc (EXPE.CUR)"
  },
  {
    "Symbol": "JNJ.CUR",
    "CoinName": "Johnson & Johnson",
    "FullName": "Johnson & Johnson (JNJ.CUR)"
  },
  {
    "Symbol": "JPM.CUR",
    "CoinName": "JPMorgan Chase",
    "FullName": "JPMorgan Chase (JPM.CUR)"
  },
  {
    "Symbol": "VGT.CUR",
    "CoinName": "Vanguard Information Technology ETF",
    "FullName": "Vanguard Information Technology ETF (VGT.CUR)"
  },
  {
    "Symbol": "BIIB.CUR",
    "CoinName": "Biogen Inc.",
    "FullName": "Biogen Inc. (BIIB.CUR)"
  },
  {
    "Symbol": "PTEN.CUR",
    "CoinName": "Patterson-UTI Energy, Inc.",
    "FullName": "Patterson-UTI Energy, Inc. (PTEN.CUR)"
  },
  {
    "Symbol": "STLD.CUR",
    "CoinName": "Steel Dynamics, Inc.",
    "FullName": "Steel Dynamics, Inc. (STLD.CUR)"
  },
  {
    "Symbol": "TRI.CUR",
    "CoinName": "Thomson Reuters",
    "FullName": "Thomson Reuters (TRI.CUR)"
  },
  {
    "Symbol": "GLPG.CUR",
    "CoinName": "Galapagos NV",
    "FullName": "Galapagos NV (GLPG.CUR)"
  },
  {
    "Symbol": "YELP.CUR",
    "CoinName": "Yelp",
    "FullName": "Yelp (YELP.CUR)"
  },
  {
    "Symbol": "ARNC.CUR",
    "CoinName": "Arconic",
    "FullName": "Arconic (ARNC.CUR)"
  },
  {
    "Symbol": "ADBE.CUR",
    "CoinName": "Adobe Systems Inc",
    "FullName": "Adobe Systems Inc (ADBE.CUR)"
  },
  {
    "Symbol": "SAGE.CUR",
    "CoinName": "Sage Therapeutics, Inc.",
    "FullName": "Sage Therapeutics, Inc. (SAGE.CUR)"
  },
  {
    "Symbol": "LKOD.CUR",
    "CoinName": "Lukoil PJSC ADR",
    "FullName": "Lukoil PJSC ADR (LKOD.CUR)"
  },
  {
    "Symbol": "EBAY.CUR",
    "CoinName": "eBay",
    "FullName": "eBay (EBAY.CUR)"
  },
  {
    "Symbol": "DBK.CUR",
    "CoinName": "Deutsche Bank AG",
    "FullName": "Deutsche Bank AG (DBK.CUR)"
  },
  {
    "Symbol": "Palladium.CUR",
    "CoinName": "Palladium Spot",
    "FullName": "Palladium Spot (Palladium.CUR)"
  },
  {
    "Symbol": "ORCL.CUR",
    "CoinName": "Oracle",
    "FullName": "Oracle (ORCL.CUR)"
  },
  {
    "Symbol": "LX.CUR",
    "CoinName": "LexinFintech Holdings Ltd.",
    "FullName": "LexinFintech Holdings Ltd. (LX.CUR)"
  },
  {
    "Symbol": "CAG.CUR",
    "CoinName": "Conagra Brands Inc",
    "FullName": "Conagra Brands Inc (CAG.CUR)"
  },
  {
    "Symbol": "1COV.CUR",
    "CoinName": "Covestro AG",
    "FullName": "Covestro AG (1COV.CUR)"
  },
  {
    "Symbol": "MU.CUR",
    "CoinName": "Micron Technology, Inc.",
    "FullName": "Micron Technology, Inc. (MU.CUR)"
  },
  {
    "Symbol": "SPN.CUR",
    "CoinName": "Superi Ener Svcs",
    "FullName": "Superi Ener Svcs (SPN.CUR)"
  },
  {
    "Symbol": "CTLT.CUR",
    "CoinName": "Catalent Inc",
    "FullName": "Catalent Inc (CTLT.CUR)"
  },
  {
    "Symbol": "CIEN.CUR",
    "CoinName": "Ciena",
    "FullName": "Ciena (CIEN.CUR)"
  },
  {
    "Symbol": "MJ.CUR",
    "CoinName": "ETFMG Alternative Harvest ETF",
    "FullName": "ETFMG Alternative Harvest ETF (MJ.CUR)"
  },
  {
    "Symbol": "DBX.CUR",
    "CoinName": "DropBox",
    "FullName": "DropBox (DBX.CUR)"
  },
  {
    "Symbol": "AMD.CUR",
    "CoinName": "Advanced Micro Devices Inc",
    "FullName": "Advanced Micro Devices Inc (AMD.CUR)"
  },
  {
    "Symbol": "XLNX.CUR",
    "CoinName": "Xilinx, Inc.",
    "FullName": "Xilinx, Inc. (XLNX.CUR)"
  },
  {
    "Symbol": "MC.CUR",
    "CoinName": "Lvmh Moet Hennessy Louis Vuitton Se",
    "FullName": "Lvmh Moet Hennessy Louis Vuitton Se (MC.CUR)"
  },
  {
    "Symbol": "MA.CUR",
    "CoinName": "Mastercard Inc",
    "FullName": "Mastercard Inc (MA.CUR)"
  },
  {
    "Symbol": "RNO.CUR",
    "CoinName": "Renault Par",
    "FullName": "Renault Par (RNO.CUR)"
  },
  {
    "Symbol": "FTCH.CUR",
    "CoinName": "Farfetch Ltd",
    "FullName": "Farfetch Ltd (FTCH.CUR)"
  },
  {
    "Symbol": "OHL.CUR",
    "CoinName": "Obrascón Huarte Lain, S.A.",
    "FullName": "Obrascón Huarte Lain, S.A. (OHL.CUR)"
  },
  {
    "Symbol": "TER.CUR",
    "CoinName": "Teradyne",
    "FullName": "Teradyne (TER.CUR)"
  },
  {
    "Symbol": "TRIP.CUR",
    "CoinName": "TripAdvisor, Inc.",
    "FullName": "TripAdvisor, Inc. (TRIP.CUR)"
  },
  {
    "Symbol": "COMP",
    "CoinName": "Compound",
    "FullName": "Compound (COMP)"
  },
  {
    "Symbol": "CGT",
    "CoinName": "CACHE Gold",
    "FullName": "CACHE Gold (CGT)"
  },
  {
    "Symbol": "UMA",
    "CoinName": "UMA",
    "FullName": "UMA (UMA)"
  },
  {
    "Symbol": "CUSDT",
    "CoinName": "cUSDT",
    "FullName": "cUSDT (CUSDT)"
  },
  {
    "Symbol": "BTRS",
    "CoinName": "Bitball Treasure",
    "FullName": "Bitball Treasure (BTRS)"
  },
  {
    "Symbol": "CELO",
    "CoinName": "Celo",
    "FullName": "Celo (CELO)"
  },
  {
    "Symbol": "D4RK",
    "CoinName": "DarkPayCoin",
    "FullName": "DarkPayCoin (D4RK)"
  },
  {
    "Symbol": "BTCUP",
    "CoinName": "BTCUP",
    "FullName": "BTCUP (BTCUP)"
  },
  {
    "Symbol": "BTCDOWN",
    "CoinName": "BTCDOWN",
    "FullName": "BTCDOWN (BTCDOWN)"
  },
  {
    "Symbol": "BIDR",
    "CoinName": "Binance IDR Stable Coin",
    "FullName": "Binance IDR Stable Coin (BIDR)"
  },
  {
    "Symbol": "BAL",
    "CoinName": "Balancer",
    "FullName": "Balancer (BAL)"
  },
  {
    "Symbol": "DAWN",
    "CoinName": "Dawn Protocol",
    "FullName": "Dawn Protocol (DAWN)"
  },
  {
    "Symbol": "IDK",
    "CoinName": "IDK",
    "FullName": "IDK (IDK)"
  },
  {
    "Symbol": "BTSE",
    "CoinName": "BTSE Token",
    "FullName": "BTSE Token (BTSE)"
  },
  {
    "Symbol": "PAMP",
    "CoinName": "PAMP Network",
    "FullName": "PAMP Network (PAMP)"
  },
  {
    "Symbol": "CODEO",
    "CoinName": "Codeo Token",
    "FullName": "Codeo Token (CODEO)"
  },
  {
    "Symbol": "MP",
    "CoinName": "Membership Placeholders",
    "FullName": "Membership Placeholders (MP)"
  },
  {
    "Symbol": "DMG",
    "CoinName": "DMM: Governance",
    "FullName": "DMM: Governance (DMG)"
  },
  {
    "Symbol": "BTE",
    "CoinName": "BTEcoin",
    "FullName": "BTEcoin (BTE)"
  },
  {
    "Symbol": "LUCY",
    "CoinName": "Lucy",
    "FullName": "Lucy (LUCY)"
  },
  {
    "Symbol": "POL",
    "CoinName": "Pool-X",
    "FullName": "Pool-X (POL)"
  },
  {
    "Symbol": "ARX",
    "CoinName": "ARCS",
    "FullName": "ARCS (ARX)"
  },
  {
    "Symbol": "PMGT",
    "CoinName": "Perth Mint Gold Token",
    "FullName": "Perth Mint Gold Token (PMGT)"
  },
  {
    "Symbol": "PAZZI",
    "CoinName": "Paparazzi",
    "FullName": "Paparazzi (PAZZI)"
  },
  {
    "Symbol": "PQT",
    "CoinName": "Prediqt",
    "FullName": "Prediqt (PQT)"
  },
  {
    "Symbol": "ISP",
    "CoinName": "Ispolink",
    "FullName": "Ispolink (ISP)"
  },
  {
    "Symbol": "SILKR",
    "CoinName": "SilkRoadCoin",
    "FullName": "SilkRoadCoin (SILKR)"
  },
  {
    "Symbol": "CCOMM",
    "CoinName": "Crypto Commonwealth",
    "FullName": "Crypto Commonwealth (CCOMM)"
  },
  {
    "Symbol": "LACCOIN",
    "CoinName": "LocalAgro",
    "FullName": "LocalAgro (LACCOIN)"
  },
  {
    "Symbol": "KAI",
    "CoinName": "KardiaChain",
    "FullName": "KardiaChain (KAI)"
  },
  {
    "Symbol": "BASIC",
    "CoinName": "BASIC",
    "FullName": "BASIC (BASIC)"
  },
  {
    "Symbol": "VARC",
    "CoinName": "VARC",
    "FullName": "VARC (VARC)"
  },
  {
    "Symbol": "CRD",
    "CoinName": "CryptalDash",
    "FullName": "CryptalDash (CRD)"
  },
  {
    "Symbol": "TRCL",
    "CoinName": "Treecle",
    "FullName": "Treecle (TRCL)"
  },
  {
    "Symbol": "EFK",
    "CoinName": "ReFork",
    "FullName": "ReFork (EFK)"
  },
  {
    "Symbol": "INNOU",
    "CoinName": "Innou",
    "FullName": "Innou (INNOU)"
  },
  {
    "Symbol": "CVS",
    "CoinName": "CoinVisa",
    "FullName": "CoinVisa (CVS)"
  },
  {
    "Symbol": "ZLST",
    "CoinName": "Zillios",
    "FullName": "Zillios (ZLST)"
  },
  {
    "Symbol": "JUR",
    "CoinName": "Jur",
    "FullName": "Jur (JUR)"
  },
  {
    "Symbol": "OZP",
    "CoinName": "OZAPHYRE",
    "FullName": "OZAPHYRE (OZP)"
  },
  {
    "Symbol": "SAC1",
    "CoinName": "Sable Coin",
    "FullName": "Sable Coin (SAC1)"
  },
  {
    "Symbol": "SCP",
    "CoinName": "ScPrime",
    "FullName": "ScPrime (SCP)"
  },
  {
    "Symbol": "SWAP",
    "CoinName": "Trustswap",
    "FullName": "Trustswap (SWAP)"
  },
  {
    "Symbol": "KEEP",
    "CoinName": "Keep Network",
    "FullName": "Keep Network (KEEP)"
  },
  {
    "Symbol": "BKS",
    "CoinName": "Barkis Network",
    "FullName": "Barkis Network (BKS)"
  },
  {
    "Symbol": "CCXX",
    "CoinName": "CounosX",
    "FullName": "CounosX (CCXX)"
  },
  {
    "Symbol": "BPS",
    "CoinName": "BitcoinPoS",
    "FullName": "BitcoinPoS (BPS)"
  },
  {
    "Symbol": "RAKU",
    "CoinName": "RAKUN",
    "FullName": "RAKUN (RAKU)"
  },
  {
    "Symbol": "DMCH",
    "CoinName": "DARMA Cash",
    "FullName": "DARMA Cash (DMCH)"
  },
  {
    "Symbol": "PLAAS",
    "CoinName": "PLAAS FARMERS TOKEN",
    "FullName": "PLAAS FARMERS TOKEN (PLAAS)"
  },
  {
    "Symbol": "NEAL",
    "CoinName": "Coineal Token",
    "FullName": "Coineal Token (NEAL)"
  },
  {
    "Symbol": "AMA",
    "CoinName": "Amaten",
    "FullName": "Amaten (AMA)"
  },
  {
    "Symbol": "VEDX",
    "CoinName": "VEDX TOKEN",
    "FullName": "VEDX TOKEN (VEDX)"
  },
  {
    "Symbol": "WEST",
    "CoinName": "Waves Enterprise",
    "FullName": "Waves Enterprise (WEST)"
  },
  {
    "Symbol": "BRTR",
    "CoinName": "Barter",
    "FullName": "Barter (BRTR)"
  },
  {
    "Symbol": "UFC",
    "CoinName": "Union Fair Coin",
    "FullName": "Union Fair Coin (UFC)"
  },
  {
    "Symbol": "TTM",
    "CoinName": "To The Moon",
    "FullName": "To The Moon (TTM)"
  },
  {
    "Symbol": "ETHUP",
    "CoinName": "ETHUP",
    "FullName": "ETHUP (ETHUP)"
  },
  {
    "Symbol": "ETHDOWN",
    "CoinName": "ETHDOWN",
    "FullName": "ETHDOWN (ETHDOWN)"
  },
  {
    "Symbol": "LINKDOWN",
    "CoinName": "LINKDOWN",
    "FullName": "LINKDOWN (LINKDOWN)"
  },
  {
    "Symbol": "LINKUP",
    "CoinName": "LINKUP",
    "FullName": "LINKUP (LINKUP)"
  },
  {
    "Symbol": "ADADOWN",
    "CoinName": "ADADOWN",
    "FullName": "ADADOWN (ADADOWN)"
  },
  {
    "Symbol": "ADAUP",
    "CoinName": "ADAUP",
    "FullName": "ADAUP (ADAUP)"
  },
  {
    "Symbol": "IDX",
    "CoinName": "Index Chain",
    "FullName": "Index Chain (IDX)"
  },
  {
    "Symbol": "FXF",
    "CoinName": "Finxflo",
    "FullName": "Finxflo (FXF)"
  },
  {
    "Symbol": "OKS",
    "CoinName": "Oikos",
    "FullName": "Oikos (OKS)"
  },
  {
    "Symbol": "XANK",
    "CoinName": "Xank",
    "FullName": "Xank (XANK)"
  },
  {
    "Symbol": "BLX",
    "CoinName": "Balloon-X",
    "FullName": "Balloon-X (BLX)"
  },
  {
    "Symbol": "DEXT",
    "CoinName": "DEXTools",
    "FullName": "DEXTools (DEXT)"
  },
  {
    "Symbol": "FOUR",
    "CoinName": "4THPILLAR TECHNOLOGIES",
    "FullName": "4THPILLAR TECHNOLOGIES (FOUR)"
  },
  {
    "Symbol": "XGM",
    "CoinName": "Defis",
    "FullName": "Defis (XGM)"
  },
  {
    "Symbol": "ALEPH",
    "CoinName": "Aleph.im",
    "FullName": "Aleph.im (ALEPH)"
  },
  {
    "Symbol": "STONK",
    "CoinName": "STONK",
    "FullName": "STONK (STONK)"
  },
  {
    "Symbol": "NEXBT",
    "CoinName": "Native XBTPro Exchange Token",
    "FullName": "Native XBTPro Exchange Token (NEXBT)"
  },
  {
    "Symbol": "MTA",
    "CoinName": "Meta",
    "FullName": "Meta (MTA)"
  },
  {
    "Symbol": "DFI",
    "CoinName": "DeFiChain",
    "FullName": "DeFiChain (DFI)"
  },
  {
    "Symbol": "YFI",
    "CoinName": "yearn.finance",
    "FullName": "yearn.finance (YFI)"
  },
  {
    "Symbol": "DECENTR",
    "CoinName": "Decentr",
    "FullName": "Decentr (DECENTR)"
  },
  {
    "Symbol": "ECOCH",
    "CoinName": "ECOChain",
    "FullName": "ECOChain (ECOCH)"
  },
  {
    "Symbol": "PROB",
    "CoinName": "ProBit Token",
    "FullName": "ProBit Token (PROB)"
  },
  {
    "Symbol": "VXV",
    "CoinName": "Vectorspace AI",
    "FullName": "Vectorspace AI (VXV)"
  },
  {
    "Symbol": "XOR",
    "CoinName": "Sora",
    "FullName": "Sora (XOR)"
  },
  {
    "Symbol": "PLT",
    "CoinName": "Add.xyz",
    "FullName": "Add.xyz (PLT)"
  },
  {
    "Symbol": "DEMOS",
    "CoinName": "DEMOS",
    "FullName": "DEMOS (DEMOS)"
  },
  {
    "Symbol": "NEST",
    "CoinName": "Nest Protocol",
    "FullName": "Nest Protocol (NEST)"
  },
  {
    "Symbol": "HYBN",
    "CoinName": "Hey Bitcoin",
    "FullName": "Hey Bitcoin (HYBN)"
  },
  {
    "Symbol": "UHP",
    "CoinName": "Ulgen Hash Power",
    "FullName": "Ulgen Hash Power (UHP)"
  },
  {
    "Symbol": "IMST",
    "CoinName": "Imsmart",
    "FullName": "Imsmart (IMST)"
  },
  {
    "Symbol": "GEODB",
    "CoinName": "GeoDB",
    "FullName": "GeoDB (GEODB)"
  },
  {
    "Symbol": "UBU",
    "CoinName": "UBU",
    "FullName": "UBU (UBU)"
  },
  {
    "Symbol": "DDRT",
    "CoinName": "DigiDinar Token",
    "FullName": "DigiDinar Token (DDRT)"
  },
  {
    "Symbol": "MCB",
    "CoinName": "MCDEX",
    "FullName": "MCDEX (MCB)"
  },
  {
    "Symbol": "ATT",
    "CoinName": "Attila",
    "FullName": "Attila (ATT)"
  },
  {
    "Symbol": "HOMI",
    "CoinName": "HOMIHELP",
    "FullName": "HOMIHELP (HOMI)"
  },
  {
    "Symbol": "CNS",
    "CoinName": "Centric Cash",
    "FullName": "Centric Cash (CNS)"
  },
  {
    "Symbol": "TEND",
    "CoinName": "Tendies",
    "FullName": "Tendies (TEND)"
  },
  {
    "Symbol": "MDU",
    "CoinName": "MDUKEY",
    "FullName": "MDUKEY (MDU)"
  },
  {
    "Symbol": "XAMP",
    "CoinName": "Antiample",
    "FullName": "Antiample (XAMP)"
  },
  {
    "Symbol": "FOCV",
    "CoinName": "FOCV",
    "FullName": "FOCV (FOCV)"
  },
  {
    "Symbol": "INRT",
    "CoinName": "INRToken",
    "FullName": "INRToken (INRT)"
  },
  {
    "Symbol": "LIDER",
    "CoinName": "Lider Token",
    "FullName": "Lider Token (LIDER)"
  },
  {
    "Symbol": "KTON",
    "CoinName": "Darwinia Commitment Token",
    "FullName": "Darwinia Commitment Token (KTON)"
  },
  {
    "Symbol": "SUKU",
    "CoinName": "SUKU",
    "FullName": "SUKU (SUKU)"
  },
  {
    "Symbol": "FEX",
    "CoinName": "FEX Token",
    "FullName": "FEX Token (FEX)"
  },
  {
    "Symbol": "DIA",
    "CoinName": "DIA",
    "FullName": "DIA (DIA)"
  },
  {
    "Symbol": "AOS",
    "CoinName": "AOS",
    "FullName": "AOS (AOS)"
  },
  {
    "Symbol": "DF",
    "CoinName": "dForce",
    "FullName": "dForce (DF)"
  },
  {
    "Symbol": "BPLC",
    "CoinName": "BlackPearl Token",
    "FullName": "BlackPearl Token (BPLC)"
  },
  {
    "Symbol": "AICO",
    "CoinName": "AICON",
    "FullName": "AICON (AICO)"
  },
  {
    "Symbol": "FLS",
    "CoinName": "Flits",
    "FullName": "Flits (FLS)"
  },
  {
    "Symbol": "ETHP",
    "CoinName": "ETHPlus",
    "FullName": "ETHPlus (ETHP)"
  },
  {
    "Symbol": "MLK",
    "CoinName": "MiL.k",
    "FullName": "MiL.k (MLK)"
  },
  {
    "Symbol": "LID",
    "CoinName": "Liquidity Dividends Protocol",
    "FullName": "Liquidity Dividends Protocol (LID)"
  },
  {
    "Symbol": "CREAM",
    "CoinName": "Cream",
    "FullName": "Cream (CREAM)"
  },
  {
    "Symbol": "GEEQ",
    "CoinName": "Geeq",
    "FullName": "Geeq (GEEQ)"
  },
  {
    "Symbol": "STAMP",
    "CoinName": "SafePost",
    "FullName": "SafePost (STAMP)"
  },
  {
    "Symbol": "DPIE",
    "CoinName": "DeFiPie",
    "FullName": "DeFiPie (DPIE)"
  },
  {
    "Symbol": "RMPL",
    "CoinName": "RMPL",
    "FullName": "RMPL (RMPL)"
  },
  {
    "Symbol": "XRT",
    "CoinName": "Robonomics.network",
    "FullName": "Robonomics.network (XRT)"
  },
  {
    "Symbol": "MGP",
    "CoinName": "MangoChain",
    "FullName": "MangoChain (MGP)"
  },
  {
    "Symbol": "JT",
    "CoinName": "Jubi Token",
    "FullName": "Jubi Token (JT)"
  },
  {
    "Symbol": "ZNN",
    "CoinName": "Zenon",
    "FullName": "Zenon (ZNN)"
  },
  {
    "Symbol": "SRM",
    "CoinName": "Serum",
    "FullName": "Serum (SRM)"
  },
  {
    "Symbol": "EDGEW",
    "CoinName": "Edgeware",
    "FullName": "Edgeware (EDGEW)"
  },
  {
    "Symbol": "ANW",
    "CoinName": "Anchor Neural World",
    "FullName": "Anchor Neural World (ANW)"
  },
  {
    "Symbol": "CRV",
    "CoinName": "Curve DAO Token",
    "FullName": "Curve DAO Token (CRV)"
  },
  {
    "Symbol": "BDCC",
    "CoinName": "BDCC COIN",
    "FullName": "BDCC COIN (BDCC)"
  },
  {
    "Symbol": "CORX",
    "CoinName": "CorionX",
    "FullName": "CorionX (CORX)"
  },
  {
    "Symbol": "PAR",
    "CoinName": "Parachute",
    "FullName": "Parachute (PAR)"
  },
  {
    "Symbol": "BREE",
    "CoinName": "CBDAO",
    "FullName": "CBDAO (BREE)"
  },
  {
    "Symbol": "PERX",
    "CoinName": "PeerEx Network",
    "FullName": "PeerEx Network (PERX)"
  },
  {
    "Symbol": "SAND",
    "CoinName": "The Sandbox",
    "FullName": "The Sandbox (SAND)"
  },
  {
    "Symbol": "BNBUP",
    "CoinName": "Long BNB with Up to 3x Leverage",
    "FullName": "Long BNB with Up to 3x Leverage (BNBUP)"
  },
  {
    "Symbol": "BNBDOWN",
    "CoinName": "Short BNB with Up to 3x Leverage",
    "FullName": "Short BNB with Up to 3x Leverage (BNBDOWN)"
  },
  {
    "Symbol": "XTZUP",
    "CoinName": "Long Tezos with Up to 3x Leverage",
    "FullName": "Long Tezos with Up to 3x Leverage (XTZUP)"
  },
  {
    "Symbol": "XTZDOWN",
    "CoinName": "Short Tezos with Up to 3x Leverage",
    "FullName": "Short Tezos with Up to 3x Leverage (XTZDOWN)"
  },
  {
    "Symbol": "PRQ",
    "CoinName": "PARSIQ",
    "FullName": "PARSIQ (PRQ)"
  },
  {
    "Symbol": "BLY",
    "CoinName": "Blocery",
    "FullName": "Blocery (BLY)"
  },
  {
    "Symbol": "4ART",
    "CoinName": "4ART Coin",
    "FullName": "4ART Coin (4ART)"
  },
  {
    "Symbol": "CAPT",
    "CoinName": "Bitcoin Captain",
    "FullName": "Bitcoin Captain (CAPT)"
  },
  {
    "Symbol": "YFII",
    "CoinName": "DFI.money",
    "FullName": "DFI.money (YFII)"
  },
  {
    "Symbol": "TRUST",
    "CoinName": "TrustDAO",
    "FullName": "TrustDAO (TRUST)"
  },
  {
    "Symbol": "YFL",
    "CoinName": "YF Link",
    "FullName": "YF Link (YFL)"
  },
  {
    "Symbol": "ETHV",
    "CoinName": "Ethverse",
    "FullName": "Ethverse (ETHV)"
  },
  {
    "Symbol": "REAP",
    "CoinName": "ReapChain",
    "FullName": "ReapChain (REAP)"
  },
  {
    "Symbol": "BRDG",
    "CoinName": "Bridge Protocol",
    "FullName": "Bridge Protocol (BRDG)"
  },
  {
    "Symbol": "DZI",
    "CoinName": "DeFinition",
    "FullName": "DeFinition (DZI)"
  },
  {
    "Symbol": "ZLW",
    "CoinName": "Zelwin",
    "FullName": "Zelwin (ZLW)"
  },
  {
    "Symbol": "BART",
    "CoinName": "BarterTrade",
    "FullName": "BarterTrade (BART)"
  },
  {
    "Symbol": "PSG",
    "CoinName": "Paris Saint-Germain Fan Token",
    "FullName": "Paris Saint-Germain Fan Token (PSG)"
  },
  {
    "Symbol": "HUP",
    "CoinName": "HUPAYX",
    "FullName": "HUPAYX (HUP)"
  },
  {
    "Symbol": "SHB",
    "CoinName": "SkyHub Coin",
    "FullName": "SkyHub Coin (SHB)"
  },
  {
    "Symbol": "RWS",
    "CoinName": "Robonomics Web Services",
    "FullName": "Robonomics Web Services (RWS)"
  },
  {
    "Symbol": "ZIN",
    "CoinName": "Zin Finance",
    "FullName": "Zin Finance (ZIN)"
  },
  {
    "Symbol": "KLP",
    "CoinName": "Kulupu",
    "FullName": "Kulupu (KLP)"
  },
  {
    "Symbol": "ZPAE",
    "CoinName": "ZelaaPayAE",
    "FullName": "ZelaaPayAE (ZPAE)"
  },
  {
    "Symbol": "UNT",
    "CoinName": "Uni Token",
    "FullName": "Uni Token (UNT)"
  },
  {
    "Symbol": "FSW",
    "CoinName": "Falconswap",
    "FullName": "Falconswap (FSW)"
  },
  {
    "Symbol": "HAKKA",
    "CoinName": "Hakka Finance",
    "FullName": "Hakka Finance (HAKKA)"
  },
  {
    "Symbol": "JRT",
    "CoinName": "Jarvis Reward Token",
    "FullName": "Jarvis Reward Token (JRT)"
  },
  {
    "Symbol": "STOP",
    "CoinName": "SatoPay",
    "FullName": "SatoPay (STOP)"
  },
  {
    "Symbol": "HTN",
    "CoinName": "Heart Number",
    "FullName": "Heart Number (HTN)"
  },
  {
    "Symbol": "DGVC",
    "CoinName": "DegenVC",
    "FullName": "DegenVC (DGVC)"
  },
  {
    "Symbol": "PDF",
    "CoinName": "Port of DeFi Network",
    "FullName": "Port of DeFi Network (PDF)"
  },
  {
    "Symbol": "RUG",
    "CoinName": "Rug",
    "FullName": "Rug (RUG)"
  },
  {
    "Symbol": "CVPT",
    "CoinName": "Concentrated Voting Power",
    "FullName": "Concentrated Voting Power (CVPT)"
  },
  {
    "Symbol": "CATX",
    "CoinName": "CAT.trade Protocol",
    "FullName": "CAT.trade Protocol (CATX)"
  },
  {
    "Symbol": "DFIO",
    "CoinName": "DeFi Omega",
    "FullName": "DeFi Omega (DFIO)"
  },
  {
    "Symbol": "NEWTON",
    "CoinName": "Newtonium",
    "FullName": "Newtonium (NEWTON)"
  },
  {
    "Symbol": "VIDYA",
    "CoinName": "Vidya",
    "FullName": "Vidya (VIDYA)"
  },
  {
    "Symbol": "QQQF",
    "CoinName": "Standard Crypto Fund",
    "FullName": "Standard Crypto Fund (QQQF)"
  },
  {
    "Symbol": "LIBFX",
    "CoinName": "Libfx",
    "FullName": "Libfx (LIBFX)"
  },
  {
    "Symbol": "FME",
    "CoinName": "FME",
    "FullName": "FME (FME)"
  },
  {
    "Symbol": "$BASED",
    "CoinName": "Based Money",
    "FullName": "Based Money ($BASED)"
  },
  {
    "Symbol": "YFFI",
    "CoinName": "yffi finance",
    "FullName": "yffi finance (YFFI)"
  },
  {
    "Symbol": "KLV",
    "CoinName": "Klever",
    "FullName": "Klever (KLV)"
  },
  {
    "Symbol": "LYRA",
    "CoinName": "Scrypta",
    "FullName": "Scrypta (LYRA)"
  },
  {
    "Symbol": "STATERA",
    "CoinName": "Statera",
    "FullName": "Statera (STATERA)"
  },
  {
    "Symbol": "PEARL",
    "CoinName": "Pearl Finance",
    "FullName": "Pearl Finance (PEARL)"
  },
  {
    "Symbol": "TAI",
    "CoinName": "tBridge Token",
    "FullName": "tBridge Token (TAI)"
  },
  {
    "Symbol": "DEXG",
    "CoinName": "Dextoken Governance",
    "FullName": "Dextoken Governance (DEXG)"
  },
  {
    "Symbol": "YFIS",
    "CoinName": "YFISCURITY",
    "FullName": "YFISCURITY (YFIS)"
  },
  {
    "Symbol": "CHAIN",
    "CoinName": "Chain Games",
    "FullName": "Chain Games (CHAIN)"
  },
  {
    "Symbol": "OIN",
    "CoinName": "OIN Finance",
    "FullName": "OIN Finance (OIN)"
  },
  {
    "Symbol": "SLINK",
    "CoinName": "Soft Link",
    "FullName": "Soft Link (SLINK)"
  },
  {
    "Symbol": "TOMA",
    "CoinName": "TomaInfo",
    "FullName": "TomaInfo (TOMA)"
  },
  {
    "Symbol": "UNIFI",
    "CoinName": "Unifi",
    "FullName": "Unifi (UNIFI)"
  },
  {
    "Symbol": "DACC2",
    "CoinName": "DACC2",
    "FullName": "DACC2 (DACC2)"
  },
  {
    "Symbol": "SOFI",
    "CoinName": "Social Finance",
    "FullName": "Social Finance (SOFI)"
  },
  {
    "Symbol": "YFIVE",
    "CoinName": "YFIVE FINANCE",
    "FullName": "YFIVE FINANCE (YFIVE)"
  },
  {
    "Symbol": "BAST",
    "CoinName": "Bast",
    "FullName": "Bast (BAST)"
  },
  {
    "Symbol": "YFIE",
    "CoinName": "YFIEXCHANGE.FINANCE",
    "FullName": "YFIEXCHANGE.FINANCE (YFIE)"
  },
  {
    "Symbol": "RELVT",
    "CoinName": "Relevant",
    "FullName": "Relevant (RELVT)"
  },
  {
    "Symbol": "OPTC",
    "CoinName": "Open Predict Token",
    "FullName": "Open Predict Token (OPTC)"
  },
  {
    "Symbol": "INXP",
    "CoinName": "Insight Protocol",
    "FullName": "Insight Protocol (INXP)"
  },
  {
    "Symbol": "UST",
    "CoinName": "TerraUSD",
    "FullName": "TerraUSD (UST)"
  },
  {
    "Symbol": "TLN",
    "CoinName": "Trustlines Network",
    "FullName": "Trustlines Network (TLN)"
  },
  {
    "Symbol": "KARMAD",
    "CoinName": "Karma DAO",
    "FullName": "Karma DAO (KARMAD)"
  },
  {
    "Symbol": "CORN",
    "CoinName": "CORN",
    "FullName": "CORN (CORN)"
  },
  {
    "Symbol": "SALMON",
    "CoinName": "Salmon",
    "FullName": "Salmon (SALMON)"
  },
  {
    "Symbol": "JFI",
    "CoinName": "JackPool.finance",
    "FullName": "JackPool.finance (JFI)"
  },
  {
    "Symbol": "QOOB",
    "CoinName": "QOOBER",
    "FullName": "QOOBER (QOOB)"
  },
  {
    "Symbol": "MATH",
    "CoinName": "MATH",
    "FullName": "MATH (MATH)"
  },
  {
    "Symbol": "SEEDV",
    "CoinName": "Seed Venture",
    "FullName": "Seed Venture (SEEDV)"
  },
  {
    "Symbol": "LGOT",
    "CoinName": "LGO Token",
    "FullName": "LGO Token (LGOT)"
  },
  {
    "Symbol": "CELOUSD",
    "CoinName": "Celo Dollar",
    "FullName": "Celo Dollar (CELOUSD)"
  },
  {
    "Symbol": "XFTC",
    "CoinName": "Offshift",
    "FullName": "Offshift (XFTC)"
  },
  {
    "Symbol": "SUN",
    "CoinName": "Sun Token",
    "FullName": "Sun Token (SUN)"
  },
  {
    "Symbol": "SWRV",
    "CoinName": "Swerve",
    "FullName": "Swerve (SWRV)"
  },
  {
    "Symbol": "EOSUP",
    "CoinName": "EOSUP",
    "FullName": "EOSUP (EOSUP)"
  },
  {
    "Symbol": "EOSDOWN",
    "CoinName": "EOSDOWN",
    "FullName": "EOSDOWN (EOSDOWN)"
  },
  {
    "Symbol": "TRXUP",
    "CoinName": "TRXUP",
    "FullName": "TRXUP (TRXUP)"
  },
  {
    "Symbol": "TRXDOWN",
    "CoinName": "TRXDOWN",
    "FullName": "TRXDOWN (TRXDOWN)"
  },
  {
    "Symbol": "XRPUP",
    "CoinName": "XRPUP",
    "FullName": "XRPUP (XRPUP)"
  },
  {
    "Symbol": "XRPDOWN",
    "CoinName": "XRPDOWN",
    "FullName": "XRPDOWN (XRPDOWN)"
  },
  {
    "Symbol": "DOTUP",
    "CoinName": "DOTUP",
    "FullName": "DOTUP (DOTUP)"
  },
  {
    "Symbol": "DOTDOWN",
    "CoinName": "DOTDOWN",
    "FullName": "DOTDOWN (DOTDOWN)"
  },
  {
    "Symbol": "POWER",
    "CoinName": "UniPower",
    "FullName": "UniPower (POWER)"
  },
  {
    "Symbol": "UMI",
    "CoinName": "Universal Money Intrument",
    "FullName": "Universal Money Intrument (UMI)"
  },
  {
    "Symbol": "HGET",
    "CoinName": "Hedget",
    "FullName": "Hedget (HGET)"
  },
  {
    "Symbol": "LTCUP",
    "CoinName": "LTCUP",
    "FullName": "LTCUP (LTCUP)"
  },
  {
    "Symbol": "LTCDOWN",
    "CoinName": "LTCDOWN",
    "FullName": "LTCDOWN (LTCDOWN)"
  },
  {
    "Symbol": "RVC",
    "CoinName": "Ravencoin Classic",
    "FullName": "Ravencoin Classic (RVC)"
  },
  {
    "Symbol": "PHA",
    "CoinName": "Phala Network",
    "FullName": "Phala Network (PHA)"
  },
  {
    "Symbol": "CRT",
    "CoinName": "Carr.Finance",
    "FullName": "Carr.Finance (CRT)"
  },
  {
    "Symbol": "YSAFE",
    "CoinName": "yieldfarming.insure",
    "FullName": "yieldfarming.insure (YSAFE)"
  },
  {
    "Symbol": "UNIFUND",
    "CoinName": "Unification",
    "FullName": "Unification (UNIFUND)"
  },
  {
    "Symbol": "UTOPIA",
    "CoinName": "Crypton",
    "FullName": "Crypton (UTOPIA)"
  },
  {
    "Symbol": "TYS",
    "CoinName": "Tyslin",
    "FullName": "Tyslin (TYS)"
  },
  {
    "Symbol": "ACH",
    "CoinName": "Alchemy Pay",
    "FullName": "Alchemy Pay (ACH)"
  },
  {
    "Symbol": "XT",
    "CoinName": "XT.com Token",
    "FullName": "XT.com Token (XT)"
  },
  {
    "Symbol": "SASHIMI",
    "CoinName": "Sashimi",
    "FullName": "Sashimi (SASHIMI)"
  },
  {
    "Symbol": "UNDB",
    "CoinName": "unibot.cash",
    "FullName": "unibot.cash (UNDB)"
  },
  {
    "Symbol": "SAKE",
    "CoinName": "SakeToken",
    "FullName": "SakeToken (SAKE)"
  },
  {
    "Symbol": "YFFC",
    "CoinName": "yffc.finance",
    "FullName": "yffc.finance (YFFC)"
  },
  {
    "Symbol": "ZDEX",
    "CoinName": "Zeedex",
    "FullName": "Zeedex (ZDEX)"
  },
  {
    "Symbol": "YFARM",
    "CoinName": "YFARM Token",
    "FullName": "YFARM Token (YFARM)"
  },
  {
    "Symbol": "CHADS",
    "CoinName": "CHADS VC",
    "FullName": "CHADS VC (CHADS)"
  },
  {
    "Symbol": "KATANA",
    "CoinName": "Katana Finance",
    "FullName": "Katana Finance (KATANA)"
  },
  {
    "Symbol": "ANK",
    "CoinName": "AlphaLink",
    "FullName": "AlphaLink (ANK)"
  },
  {
    "Symbol": "CNYT",
    "CoinName": "CNY Tether",
    "FullName": "CNY Tether (CNYT)"
  },
  {
    "Symbol": "REVV",
    "CoinName": "REVV",
    "FullName": "REVV (REVV)"
  },
  {
    "Symbol": "ZYRO",
    "CoinName": "Zyro",
    "FullName": "Zyro (ZYRO)"
  },
  {
    "Symbol": "PRINT",
    "CoinName": "Printer.Finance",
    "FullName": "Printer.Finance (PRINT)"
  },
  {
    "Symbol": "HBC",
    "CoinName": "Hybrid Bank Cash",
    "FullName": "Hybrid Bank Cash (HBC)"
  },
  {
    "Symbol": "WNRZ",
    "CoinName": "WinPlay",
    "FullName": "WinPlay (WNRZ)"
  },
  {
    "Symbol": "PFID",
    "CoinName": "Pofid Dao",
    "FullName": "Pofid Dao (PFID)"
  },
  {
    "Symbol": "DBOX",
    "CoinName": "DefiBox",
    "FullName": "DefiBox (DBOX)"
  },
  {
    "Symbol": "VYBE",
    "CoinName": "Vybe",
    "FullName": "Vybe (VYBE)"
  },
  {
    "Symbol": "NUTS",
    "CoinName": "Squirrel Finance",
    "FullName": "Squirrel Finance (NUTS)"
  },
  {
    "Symbol": "TRBT",
    "CoinName": "Tribute",
    "FullName": "Tribute (TRBT)"
  },
  {
    "Symbol": "SUSHIBULL",
    "CoinName": "3X Long Sushi Token",
    "FullName": "3X Long Sushi Token (SUSHIBULL)"
  },
  {
    "Symbol": "SUSHIBEAR",
    "CoinName": "3X Short Sushi Token",
    "FullName": "3X Short Sushi Token (SUSHIBEAR)"
  },
  {
    "Symbol": "UNISWAPBULL",
    "CoinName": "3X Long Uniswap Index Token",
    "FullName": "3X Long Uniswap Index Token (UNISWAPBULL)"
  },
  {
    "Symbol": "UNISWAPBEAR",
    "CoinName": "3X Short Uniswap Index Token",
    "FullName": "3X Short Uniswap Index Token (UNISWAPBEAR)"
  },
  {
    "Symbol": "XETH",
    "CoinName": "Xplosive Ethereum",
    "FullName": "Xplosive Ethereum (XETH)"
  },
  {
    "Symbol": "YFFII",
    "CoinName": "YFFII Finance",
    "FullName": "YFFII Finance (YFFII)"
  },
  {
    "Symbol": "ETHPY",
    "CoinName": "Etherpay",
    "FullName": "Etherpay (ETHPY)"
  },
  {
    "Symbol": "JIAOZI",
    "CoinName": "Jiaozi",
    "FullName": "Jiaozi (JIAOZI)"
  },
  {
    "Symbol": "ON",
    "CoinName": "OFIN Token",
    "FullName": "OFIN Token (ON)"
  },
  {
    "Symbol": "XSTAR",
    "CoinName": "StarCurve",
    "FullName": "StarCurve (XSTAR)"
  },
  {
    "Symbol": "ASK",
    "CoinName": "Permission Coin",
    "FullName": "Permission Coin (ASK)"
  },
  {
    "Symbol": "SOCKS",
    "CoinName": "Unisocks",
    "FullName": "Unisocks (SOCKS)"
  },
  {
    "Symbol": "RARI",
    "CoinName": "Rarible",
    "FullName": "Rarible (RARI)"
  },
  {
    "Symbol": "EVCC",
    "CoinName": "Eco Value Coin",
    "FullName": "Eco Value Coin (EVCC)"
  },
  {
    "Symbol": "RTH",
    "CoinName": "Rotharium",
    "FullName": "Rotharium (RTH)"
  },
  {
    "Symbol": "ARDX",
    "CoinName": "ArdCoin",
    "FullName": "ArdCoin (ARDX)"
  },
  {
    "Symbol": "NSBT",
    "CoinName": "Neutrino System Base Token",
    "FullName": "Neutrino System Base Token (NSBT)"
  },
  {
    "Symbol": "DOGEC",
    "CoinName": "DogeCash",
    "FullName": "DogeCash (DOGEC)"
  },
  {
    "Symbol": "QAC",
    "CoinName": "Quasarcoin",
    "FullName": "Quasarcoin (QAC)"
  },
  {
    "Symbol": "HTA",
    "CoinName": "Historia",
    "FullName": "Historia (HTA)"
  },
  {
    "Symbol": "CR8",
    "CoinName": "Crazy8Token",
    "FullName": "Crazy8Token (CR8)"
  },
  {
    "Symbol": "DIC",
    "CoinName": "Daikicoin",
    "FullName": "Daikicoin (DIC)"
  },
  {
    "Symbol": "BAK",
    "CoinName": "BaconCoin",
    "FullName": "BaconCoin (BAK)"
  },
  {
    "Symbol": "DVS",
    "CoinName": "Davies",
    "FullName": "Davies (DVS)"
  },
  {
    "Symbol": "BCEO",
    "CoinName": "bitCEO",
    "FullName": "bitCEO (BCEO)"
  },
  {
    "Symbol": "BITC",
    "CoinName": "BitCash",
    "FullName": "BitCash (BITC)"
  },
  {
    "Symbol": "LOT",
    "CoinName": "Lukki Operating Token",
    "FullName": "Lukki Operating Token (LOT)"
  },
  {
    "Symbol": "BXC",
    "CoinName": "Bitcoin Classic",
    "FullName": "Bitcoin Classic (BXC)"
  },
  {
    "Symbol": "DSCP",
    "CoinName": "Dreamscape",
    "FullName": "Dreamscape (DSCP)"
  },
  {
    "Symbol": "SURE",
    "CoinName": "inSure",
    "FullName": "inSure (SURE)"
  },
  {
    "Symbol": "RC20",
    "CoinName": "RoboCalls",
    "FullName": "RoboCalls (RC20)"
  },
  {
    "Symbol": "TOC",
    "CoinName": "TouchCon",
    "FullName": "TouchCon (TOC)"
  },
  {
    "Symbol": "NBS",
    "CoinName": "New BitShares",
    "FullName": "New BitShares (NBS)"
  },
  {
    "Symbol": "SCFIV2",
    "CoinName": "Semi Centralized Finance",
    "FullName": "Semi Centralized Finance (SCFIV2)"
  },
  {
    "Symbol": "GSTC",
    "CoinName": "GSTCOIN",
    "FullName": "GSTCOIN (GSTC)"
  },
  {
    "Symbol": "CHVF",
    "CoinName": "Chives Finance",
    "FullName": "Chives Finance (CHVF)"
  },
  {
    "Symbol": "GALA",
    "CoinName": "Gala",
    "FullName": "Gala (GALA)"
  },
  {
    "Symbol": "LGCY",
    "CoinName": "LGCY Network",
    "FullName": "LGCY Network (LGCY)"
  },
  {
    "Symbol": "UCO",
    "CoinName": "Uniris",
    "FullName": "Uniris (UCO)"
  },
  {
    "Symbol": "RIO",
    "CoinName": "Realio Network",
    "FullName": "Realio Network (RIO)"
  },
  {
    "Symbol": "DHT",
    "CoinName": "dHedge DAO",
    "FullName": "dHedge DAO (DHT)"
  },
  {
    "Symbol": "CHI",
    "CoinName": "Chi Gastoken",
    "FullName": "Chi Gastoken (CHI)"
  },
  {
    "Symbol": "SHROOM",
    "CoinName": "Shroom.Finance",
    "FullName": "Shroom.Finance (SHROOM)"
  },
  {
    "Symbol": "YSR",
    "CoinName": "Ystar",
    "FullName": "Ystar (YSR)"
  },
  {
    "Symbol": "KASSIAHOME",
    "CoinName": "Kassia Home",
    "FullName": "Kassia Home (KASSIAHOME)"
  },
  {
    "Symbol": "DAB",
    "CoinName": "DABANKING",
    "FullName": "DABANKING (DAB)"
  },
  {
    "Symbol": "YFF",
    "CoinName": "YFF.Finance",
    "FullName": "YFF.Finance (YFF)"
  },
  {
    "Symbol": "MEXP",
    "CoinName": "MOJI Experience Points",
    "FullName": "MOJI Experience Points (MEXP)"
  },
  {
    "Symbol": "DTOP",
    "CoinName": "DTOP Token",
    "FullName": "DTOP Token (DTOP)"
  },
  {
    "Symbol": "GPKR",
    "CoinName": "Gold Poker",
    "FullName": "Gold Poker (GPKR)"
  },
  {
    "Symbol": "MFC",
    "CoinName": "MFCoin",
    "FullName": "MFCoin (MFC)"
  },
  {
    "Symbol": "SPRKL",
    "CoinName": "Sparkle Loyalty",
    "FullName": "Sparkle Loyalty (SPRKL)"
  },
  {
    "Symbol": "SBE",
    "CoinName": "Sombe",
    "FullName": "Sombe (SBE)"
  },
  {
    "Symbol": "STS",
    "CoinName": "SBank",
    "FullName": "SBank (STS)"
  },
  {
    "Symbol": "FLM",
    "CoinName": "Flamingo",
    "FullName": "Flamingo (FLM)"
  },
  {
    "Symbol": "YFBETA",
    "CoinName": "yfBeta",
    "FullName": "yfBeta (YFBETA)"
  },
  {
    "Symbol": "DCASH",
    "CoinName": "Diabolo",
    "FullName": "Diabolo (DCASH)"
  },
  {
    "Symbol": "PTF",
    "CoinName": "PowerTrade Fuel",
    "FullName": "PowerTrade Fuel (PTF)"
  },
  {
    "Symbol": "AVAXIOU",
    "CoinName": "Avalanche IOU",
    "FullName": "Avalanche IOU (AVAXIOU)"
  },
  {
    "Symbol": "MARO",
    "CoinName": "Maro",
    "FullName": "Maro (MARO)"
  },
  {
    "Symbol": "$ROPE",
    "CoinName": "Rope",
    "FullName": "Rope ($ROPE)"
  },
  {
    "Symbol": "VELO",
    "CoinName": "Velo",
    "FullName": "Velo (VELO)"
  },
  {
    "Symbol": "BURGER",
    "CoinName": "Burger Swap",
    "FullName": "Burger Swap (BURGER)"
  },
  {
    "Symbol": "MINI",
    "CoinName": "Mini",
    "FullName": "Mini (MINI)"
  },
  {
    "Symbol": "EMN",
    "CoinName": "Eminence",
    "FullName": "Eminence (EMN)"
  },
  {
    "Symbol": "ONIT",
    "CoinName": "ONBUFF",
    "FullName": "ONBUFF (ONIT)"
  },
  {
    "Symbol": "TITAN",
    "CoinName": "TitanSwap",
    "FullName": "TitanSwap (TITAN)"
  },
  {
    "Symbol": "AGS",
    "CoinName": "Aegis",
    "FullName": "Aegis (AGS)"
  },
  {
    "Symbol": "CRU",
    "CoinName": "Crust Network",
    "FullName": "Crust Network (CRU)"
  },
  {
    "Symbol": "POLS",
    "CoinName": "Polkastarter",
    "FullName": "Polkastarter (POLS)"
  },
  {
    "Symbol": "WBNB",
    "CoinName": "Wrapped BNB",
    "FullName": "Wrapped BNB (WBNB)"
  },
  {
    "Symbol": "LUA",
    "CoinName": "Lua Token",
    "FullName": "Lua Token (LUA)"
  },
  {
    "Symbol": "AETH",
    "CoinName": "Aave ETH",
    "FullName": "Aave ETH (AETH)"
  },
  {
    "Symbol": "ISDT",
    "CoinName": "ISTARDUST",
    "FullName": "ISTARDUST (ISDT)"
  },
  {
    "Symbol": "CAKE",
    "CoinName": "PancakeSwap",
    "FullName": "PancakeSwap (CAKE)"
  },
  {
    "Symbol": "BASID",
    "CoinName": "Basid Coin",
    "FullName": "Basid Coin (BASID)"
  },
  {
    "Symbol": "BWF",
    "CoinName": "Beowulf",
    "FullName": "Beowulf (BWF)"
  },
  {
    "Symbol": "YFBT",
    "CoinName": "Yearn Finance Bit",
    "FullName": "Yearn Finance Bit (YFBT)"
  },
  {
    "Symbol": "FAME",
    "CoinName": "Fame",
    "FullName": "Fame (FAME)"
  },
  {
    "Symbol": "MXT",
    "CoinName": "MixTrust",
    "FullName": "MixTrust (MXT)"
  },
  {
    "Symbol": "UFFYI",
    "CoinName": "Unlimited FiscusFYI",
    "FullName": "Unlimited FiscusFYI (UFFYI)"
  },
  {
    "Symbol": "FAG",
    "CoinName": "PoorFag",
    "FullName": "PoorFag (FAG)"
  },
  {
    "Symbol": "NIN",
    "CoinName": "Next Innovation",
    "FullName": "Next Innovation (NIN)"
  },
  {
    "Symbol": "DMD",
    "CoinName": "DMD",
    "FullName": "DMD (DMD)"
  },
  {
    "Symbol": "SFG",
    "CoinName": "S.Finance",
    "FullName": "S.Finance (SFG)"
  },
  {
    "Symbol": "PJM",
    "CoinName": "Pajama.Finance",
    "FullName": "Pajama.Finance (PJM)"
  },
  {
    "Symbol": "UNII",
    "CoinName": "UNII Finance",
    "FullName": "UNII Finance (UNII)"
  },
  {
    "Symbol": "PGT",
    "CoinName": "Polyient Games Governance Token",
    "FullName": "Polyient Games Governance Token (PGT)"
  },
  {
    "Symbol": "EPIC",
    "CoinName": "Epic",
    "FullName": "Epic (EPIC)"
  },
  {
    "Symbol": "XVS",
    "CoinName": "Venus",
    "FullName": "Venus (XVS)"
  },
  {
    "Symbol": "XFI",
    "CoinName": "Xfinance",
    "FullName": "Xfinance (XFI)"
  },
  {
    "Symbol": "CORE",
    "CoinName": "cVault.finance",
    "FullName": "cVault.finance (CORE)"
  },
  {
    "Symbol": "BID",
    "CoinName": "Bidao",
    "FullName": "Bidao (BID)"
  },
  {
    "Symbol": "KING",
    "CoinName": "KingSwap",
    "FullName": "KingSwap (KING)"
  },
  {
    "Symbol": "DAOVC",
    "CoinName": "DAO.VC",
    "FullName": "DAO.VC (DAOVC)"
  },
  {
    "Symbol": "HOTN",
    "CoinName": "HotNow",
    "FullName": "HotNow (HOTN)"
  },
  {
    "Symbol": "IOV",
    "CoinName": "Starname",
    "FullName": "Starname (IOV)"
  },
  {
    "Symbol": "HLPT",
    "CoinName": "HLP Token",
    "FullName": "HLP Token (HLPT)"
  },
  {
    "Symbol": "DICETRX",
    "CoinName": "TRONbetDice",
    "FullName": "TRONbetDice (DICETRX)"
  },
  {
    "Symbol": "BEC",
    "CoinName": "Betherchip",
    "FullName": "Betherchip (BEC)"
  },
  {
    "Symbol": "AXEL",
    "CoinName": "AXEL",
    "FullName": "AXEL (AXEL)"
  },
  {
    "Symbol": "TOMOE",
    "CoinName": "TomoChain ERC-20",
    "FullName": "TomoChain ERC-20 (TOMOE)"
  },
  {
    "Symbol": "KOMP",
    "CoinName": "Kompass",
    "FullName": "Kompass (KOMP)"
  },
  {
    "Symbol": "DODO",
    "CoinName": "DODO",
    "FullName": "DODO (DODO)"
  },
  {
    "Symbol": "FIT",
    "CoinName": "Financial Investment Token",
    "FullName": "Financial Investment Token (FIT)"
  },
  {
    "Symbol": "EPS",
    "CoinName": "Epanus",
    "FullName": "Epanus (EPS)"
  },
  {
    "Symbol": "BBC",
    "CoinName": "BigBang Core",
    "FullName": "BigBang Core (BBC)"
  },
  {
    "Symbol": "XSP",
    "CoinName": "XSwap",
    "FullName": "XSwap (XSP)"
  },
  {
    "Symbol": "TRIX",
    "CoinName": "TriumphX",
    "FullName": "TriumphX (TRIX)"
  },
  {
    "Symbol": "YFIII",
    "CoinName": "Dify.Finance",
    "FullName": "Dify.Finance (YFIII)"
  },
  {
    "Symbol": "PLAYD",
    "CoinName": "PlayDapp",
    "FullName": "PlayDapp (PLAYD)"
  },
  {
    "Symbol": "BUY",
    "CoinName": "Burency",
    "FullName": "Burency (BUY)"
  },
  {
    "Symbol": "ECELL",
    "CoinName": "Consensus Cell Network",
    "FullName": "Consensus Cell Network (ECELL)"
  },
  {
    "Symbol": "UNIUP",
    "CoinName": "UNIUP",
    "FullName": "UNIUP (UNIUP)"
  },
  {
    "Symbol": "UNIDOWN",
    "CoinName": "UNIDOWN",
    "FullName": "UNIDOWN (UNIDOWN)"
  },
  {
    "Symbol": "KIF",
    "CoinName": "KittenFinance",
    "FullName": "KittenFinance (KIF)"
  },
  {
    "Symbol": "DUN",
    "CoinName": "Dune",
    "FullName": "Dune (DUN)"
  },
  {
    "Symbol": "UCA",
    "CoinName": "UCA Coin",
    "FullName": "UCA Coin (UCA)"
  },
  {
    "Symbol": "WBX",
    "CoinName": "WiBX",
    "FullName": "WiBX (WBX)"
  },
  {
    "Symbol": "DDR",
    "CoinName": "Digi Dinar",
    "FullName": "Digi Dinar (DDR)"
  },
  {
    "Symbol": "CUTE",
    "CoinName": "Blockchain Cuties Universe",
    "FullName": "Blockchain Cuties Universe (CUTE)"
  },
  {
    "Symbol": "SYBC",
    "CoinName": "SYB Coin",
    "FullName": "SYB Coin (SYBC)"
  },
  {
    "Symbol": "PLTC",
    "CoinName": "PlatonCoin",
    "FullName": "PlatonCoin (PLTC)"
  },
  {
    "Symbol": "USG",
    "CoinName": "USGold",
    "FullName": "USGold (USG)"
  },
  {
    "Symbol": "SEAL",
    "CoinName": "Seal Finance",
    "FullName": "Seal Finance (SEAL)"
  },
  {
    "Symbol": "OCTO",
    "CoinName": "OctoFi",
    "FullName": "OctoFi (OCTO)"
  },
  {
    "Symbol": "MBN",
    "CoinName": "Mobilian Coin",
    "FullName": "Mobilian Coin (MBN)"
  },
  {
    "Symbol": "BTTR",
    "CoinName": "BitTiger",
    "FullName": "BitTiger (BTTR)"
  },
  {
    "Symbol": "OWL",
    "CoinName": "OWL Token",
    "FullName": "OWL Token (OWL)"
  },
  {
    "Symbol": "EASY",
    "CoinName": "EasyFi",
    "FullName": "EasyFi (EASY)"
  },
  {
    "Symbol": "DEXE",
    "CoinName": "DeXe",
    "FullName": "DeXe (DEXE)"
  },
  {
    "Symbol": "STBZ",
    "CoinName": "Stabilize",
    "FullName": "Stabilize (STBZ)"
  },
  {
    "Symbol": "ZEFU",
    "CoinName": "Zenfuse",
    "FullName": "Zenfuse (ZEFU)"
  },
  {
    "Symbol": "SXPUP",
    "CoinName": "SXPUP",
    "FullName": "SXPUP (SXPUP)"
  },
  {
    "Symbol": "SXPDOWN",
    "CoinName": "SXPDOWN",
    "FullName": "SXPDOWN (SXPDOWN)"
  },
  {
    "Symbol": "YUSRA",
    "CoinName": "YUSRA",
    "FullName": "YUSRA (YUSRA)"
  },
  {
    "Symbol": "POST",
    "CoinName": "InterPlanetary Search Engine",
    "FullName": "InterPlanetary Search Engine (POST)"
  },
  {
    "Symbol": "ASTA",
    "CoinName": "ASTA",
    "FullName": "ASTA (ASTA)"
  },
  {
    "Symbol": "NU",
    "CoinName": "NuCypher",
    "FullName": "NuCypher (NU)"
  },
  {
    "Symbol": "FILUP",
    "CoinName": "FILUP",
    "FullName": "FILUP (FILUP)"
  },
  {
    "Symbol": "FILDOWN",
    "CoinName": "FILDOWN",
    "FullName": "FILDOWN (FILDOWN)"
  },
  {
    "Symbol": "YFIUP",
    "CoinName": "YFIUP",
    "FullName": "YFIUP (YFIUP)"
  },
  {
    "Symbol": "YFIDOWN",
    "CoinName": "YFIDOWN",
    "FullName": "YFIDOWN (YFIDOWN)"
  },
  {
    "Symbol": "HLX",
    "CoinName": "Helex",
    "FullName": "Helex (HLX)"
  },
  {
    "Symbol": "UFT",
    "CoinName": "UniLend Finance",
    "FullName": "UniLend Finance (UFT)"
  },
  {
    "Symbol": "AKT",
    "CoinName": "Akash Network",
    "FullName": "Akash Network (AKT)"
  },
  {
    "Symbol": "ZEE",
    "CoinName": "ZeroSwap",
    "FullName": "ZeroSwap (ZEE)"
  },
  {
    "Symbol": "NICE",
    "CoinName": "Nice",
    "FullName": "Nice (NICE)"
  },
  {
    "Symbol": "UBXT",
    "CoinName": "UpBots",
    "FullName": "UpBots (UBXT)"
  },
  {
    "Symbol": "LCG",
    "CoinName": "LCG",
    "FullName": "LCG (LCG)"
  },
  {
    "Symbol": "SWAG",
    "CoinName": "SWAG Finance",
    "FullName": "SWAG Finance (SWAG)"
  },
  {
    "Symbol": "UNCX",
    "CoinName": "UniCrypt",
    "FullName": "UniCrypt (UNCX)"
  },
  {
    "Symbol": "HTHEDGE",
    "CoinName": "1X Short Huobi Token Token",
    "FullName": "1X Short Huobi Token Token (HTHEDGE)"
  },
  {
    "Symbol": "HTHALF",
    "CoinName": "0.5X Long Huobi Token Token",
    "FullName": "0.5X Long Huobi Token Token (HTHALF)"
  },
  {
    "Symbol": "HEDGESHIT",
    "CoinName": "1X Short Shitcoin Index Token",
    "FullName": "1X Short Shitcoin Index Token (HEDGESHIT)"
  },
  {
    "Symbol": "HALFSHIT",
    "CoinName": "0.5X Long Shitcoin Index Token",
    "FullName": "0.5X Long Shitcoin Index Token (HALFSHIT)"
  },
  {
    "Symbol": "HALF",
    "CoinName": "0.5X Long Bitcoin Token",
    "FullName": "0.5X Long Bitcoin Token (HALF)"
  },
  {
    "Symbol": "EXCHHEDGE",
    "CoinName": "1X Short Exchange Token Index Token",
    "FullName": "1X Short Exchange Token Index Token (EXCHHEDGE)"
  },
  {
    "Symbol": "EXCHHALF",
    "CoinName": "0.5X Long Exchange Token Index Token",
    "FullName": "0.5X Long Exchange Token Index Token (EXCHHALF)"
  },
  {
    "Symbol": "ETHHEDGE",
    "CoinName": "1X Short Ethereum Token",
    "FullName": "1X Short Ethereum Token (ETHHEDGE)"
  },
  {
    "Symbol": "ETHHALF",
    "CoinName": "0.5X Long Ethereum Token",
    "FullName": "0.5X Long Ethereum Token (ETHHALF)"
  },
  {
    "Symbol": "ETCHEDGE",
    "CoinName": "1X Short Ethereum Classic Token",
    "FullName": "1X Short Ethereum Classic Token (ETCHEDGE)"
  },
  {
    "Symbol": "ETCHALF",
    "CoinName": "0.5X Long Ethereum Classic Token",
    "FullName": "0.5X Long Ethereum Classic Token (ETCHALF)"
  },
  {
    "Symbol": "EOSHEDGE",
    "CoinName": "1X Short EOS Token",
    "FullName": "1X Short EOS Token (EOSHEDGE)"
  },
  {
    "Symbol": "EOSHALF",
    "CoinName": "0.5X Long EOS Token",
    "FullName": "0.5X Long EOS Token (EOSHALF)"
  },
  {
    "Symbol": "DRGNHEDGE",
    "CoinName": "1X Short Dragon Index Token",
    "FullName": "1X Short Dragon Index Token (DRGNHEDGE)"
  },
  {
    "Symbol": "DRGNHALF",
    "CoinName": "0.5X Long Dragon Index Token",
    "FullName": "0.5X Long Dragon Index Token (DRGNHALF)"
  },
  {
    "Symbol": "DOGEHEDGE",
    "CoinName": "1X Short Dogecoin Token",
    "FullName": "1X Short Dogecoin Token (DOGEHEDGE)"
  },
  {
    "Symbol": "DOGEHALF",
    "CoinName": "0.5X Long Dogecoin Token",
    "FullName": "0.5X Long Dogecoin Token (DOGEHALF)"
  },
  {
    "Symbol": "DMGBULL",
    "CoinName": "3X Long DMM Governance Token",
    "FullName": "3X Long DMM Governance Token (DMGBULL)"
  },
  {
    "Symbol": "DMGBEAR",
    "CoinName": "3X Short DMM Governance Token",
    "FullName": "3X Short DMM Governance Token (DMGBEAR)"
  },
  {
    "Symbol": "DEFIHEDGE",
    "CoinName": "1X Short DeFi Index Token",
    "FullName": "1X Short DeFi Index Token (DEFIHEDGE)"
  },
  {
    "Symbol": "DEFIHALF",
    "CoinName": "0.5X Long DeFi Index Token",
    "FullName": "0.5X Long DeFi Index Token (DEFIHALF)"
  },
  {
    "Symbol": "DEFIBULL",
    "CoinName": "3X Long DeFi Index Token",
    "FullName": "3X Long DeFi Index Token (DEFIBULL)"
  },
  {
    "Symbol": "DEFIBEAR",
    "CoinName": "3X Short DeFi Index Token",
    "FullName": "3X Short DeFi Index Token (DEFIBEAR)"
  },
  {
    "Symbol": "CUSDTHEDGE",
    "CoinName": "1X Short Compound USDT Token",
    "FullName": "1X Short Compound USDT Token (CUSDTHEDGE)"
  },
  {
    "Symbol": "CUSDTHALF",
    "CoinName": "0.5X Long Compound USDT Token",
    "FullName": "0.5X Long Compound USDT Token (CUSDTHALF)"
  },
  {
    "Symbol": "CUSDTBULL",
    "CoinName": "3X Long Compound USDT Token",
    "FullName": "3X Long Compound USDT Token (CUSDTBULL)"
  },
  {
    "Symbol": "CUSDTBEAR",
    "CoinName": "3X Short Compound USDT Token",
    "FullName": "3X Short Compound USDT Token (CUSDTBEAR)"
  },
  {
    "Symbol": "COMPHEDGE",
    "CoinName": "1X Short Compound Token Token",
    "FullName": "1X Short Compound Token Token (COMPHEDGE)"
  },
  {
    "Symbol": "COMPHALF",
    "CoinName": "0.5X Long Compound Token Token",
    "FullName": "0.5X Long Compound Token Token (COMPHALF)"
  },
  {
    "Symbol": "COMPBULL",
    "CoinName": "3X Long Compound Token Token",
    "FullName": "3X Long Compound Token Token (COMPBULL)"
  },
  {
    "Symbol": "COMPBEAR",
    "CoinName": "3X Short Compound Token Token",
    "FullName": "3X Short Compound Token Token (COMPBEAR)"
  },
  {
    "Symbol": "BULLSHIT",
    "CoinName": "3X Long Shitcoin Index Token",
    "FullName": "3X Long Shitcoin Index Token (BULLSHIT)"
  },
  {
    "Symbol": "BTMXHEDGE",
    "CoinName": "1X Short BitMax Token Token",
    "FullName": "1X Short BitMax Token Token (BTMXHEDGE)"
  },
  {
    "Symbol": "BTMXHALF",
    "CoinName": "0.5X Long BitMax Token Token",
    "FullName": "0.5X Long BitMax Token Token (BTMXHALF)"
  },
  {
    "Symbol": "BSVHEDGE",
    "CoinName": "1X Short Bitcoin SV Token",
    "FullName": "1X Short Bitcoin SV Token (BSVHEDGE)"
  },
  {
    "Symbol": "BSVHALF",
    "CoinName": "0.5X Long Bitcoin SV Token",
    "FullName": "0.5X Long Bitcoin SV Token (BSVHALF)"
  },
  {
    "Symbol": "BNBHEDGE",
    "CoinName": "1X Short BNB Token",
    "FullName": "1X Short BNB Token (BNBHEDGE)"
  },
  {
    "Symbol": "BNBHALF",
    "CoinName": "0.5X Long BNB Token",
    "FullName": "0.5X Long BNB Token (BNBHALF)"
  },
  {
    "Symbol": "BCHHEDGE",
    "CoinName": "1X Short Bitcoin Cash Token",
    "FullName": "1X Short Bitcoin Cash Token (BCHHEDGE)"
  },
  {
    "Symbol": "BCHHALF",
    "CoinName": "0.5X Long Bitcoin Cash Token",
    "FullName": "0.5X Long Bitcoin Cash Token (BCHHALF)"
  },
  {
    "Symbol": "BALHEDGE",
    "CoinName": "1X Short Balancer Token",
    "FullName": "1X Short Balancer Token (BALHEDGE)"
  },
  {
    "Symbol": "BALHALF",
    "CoinName": "0.5X Long Balancer Token",
    "FullName": "0.5X Long Balancer Token (BALHALF)"
  },
  {
    "Symbol": "BALBULL",
    "CoinName": "3X Long Balancer Token",
    "FullName": "3X Long Balancer Token (BALBULL)"
  },
  {
    "Symbol": "BALBEAR",
    "CoinName": "3X Short Balancer Token",
    "FullName": "3X Short Balancer Token (BALBEAR)"
  },
  {
    "Symbol": "ATOMHEDGE",
    "CoinName": "1X Short Cosmos Token",
    "FullName": "1X Short Cosmos Token (ATOMHEDGE)"
  },
  {
    "Symbol": "ATOMHALF",
    "CoinName": "0.5X Long Cosmos Token",
    "FullName": "0.5X Long Cosmos Token (ATOMHALF)"
  },
  {
    "Symbol": "ALTHEDGE",
    "CoinName": "1X Short Altcoin Index Token",
    "FullName": "1X Short Altcoin Index Token (ALTHEDGE)"
  },
  {
    "Symbol": "ALTHALF",
    "CoinName": "0.5X Long Altcoin Index Token",
    "FullName": "0.5X Long Altcoin Index Token (ALTHALF)"
  },
  {
    "Symbol": "ALGOHEDGE",
    "CoinName": "1X Short Algorand Token",
    "FullName": "1X Short Algorand Token (ALGOHEDGE)"
  },
  {
    "Symbol": "ALGOHALF",
    "CoinName": "0.5X Long Algorand Token",
    "FullName": "0.5X Long Algorand Token (ALGOHALF)"
  },
  {
    "Symbol": "ADAHEDGE",
    "CoinName": "1X Short Cardano Token",
    "FullName": "1X Short Cardano Token (ADAHEDGE)"
  },
  {
    "Symbol": "ADAHALF",
    "CoinName": "0.5X Long Cardano Token",
    "FullName": "0.5X Long Cardano Token (ADAHALF)"
  },
  {
    "Symbol": "SPEED",
    "CoinName": "Speed Coin",
    "FullName": "Speed Coin (SPEED)"
  },
  {
    "Symbol": "TRYBBULL",
    "CoinName": "3X Long BiLira Token",
    "FullName": "3X Long BiLira Token (TRYBBULL)"
  },
  {
    "Symbol": "TRYBBEAR",
    "CoinName": "3X Short BiLira Token",
    "FullName": "3X Short BiLira Token (TRYBBEAR)"
  },
  {
    "Symbol": "TRXHEDGE",
    "CoinName": "1X Short TRX Token",
    "FullName": "1X Short TRX Token (TRXHEDGE)"
  },
  {
    "Symbol": "TRXHALF",
    "CoinName": "0.5X Long TRX Token",
    "FullName": "0.5X Long TRX Token (TRXHALF)"
  },
  {
    "Symbol": "TOMOHEDGE",
    "CoinName": "1X Short TomoChain Token",
    "FullName": "1X Short TomoChain Token (TOMOHEDGE)"
  },
  {
    "Symbol": "TOMOHALF",
    "CoinName": "0.5X Long TomoChain Token",
    "FullName": "0.5X Long TomoChain Token (TOMOHALF)"
  },
  {
    "Symbol": "TRYBHALF",
    "CoinName": "0.5X Long BiLira Token",
    "FullName": "0.5X Long BiLira Token (TRYBHALF)"
  },
  {
    "Symbol": "THETAHEDGE",
    "CoinName": "1X Short Theta Network Token",
    "FullName": "1X Short Theta Network Token (THETAHEDGE)"
  },
  {
    "Symbol": "VETBEAR",
    "CoinName": "3X Short VeChain Token",
    "FullName": "3X Short VeChain Token (VETBEAR)"
  },
  {
    "Symbol": "SXPHEDGE",
    "CoinName": "1X Short Swipe Token",
    "FullName": "1X Short Swipe Token (SXPHEDGE)"
  },
  {
    "Symbol": "TRYBHEDGE",
    "CoinName": "1X Short BiLira Token",
    "FullName": "1X Short BiLira Token (TRYBHEDGE)"
  },
  {
    "Symbol": "SXPHALF",
    "CoinName": "0.5X Long Swipe Token",
    "FullName": "0.5X Long Swipe Token (SXPHALF)"
  },
  {
    "Symbol": "SXPBULL",
    "CoinName": "3X Long Swipe Token",
    "FullName": "3X Long Swipe Token (SXPBULL)"
  },
  {
    "Symbol": "SXPBEAR",
    "CoinName": "3X Short Swipe Token",
    "FullName": "3X Short Swipe Token (SXPBEAR)"
  },
  {
    "Symbol": "PRIVHEDGE",
    "CoinName": "1X Short Privacy Index Token",
    "FullName": "1X Short Privacy Index Token (PRIVHEDGE)"
  },
  {
    "Symbol": "PRIVHALF",
    "CoinName": "0.5X Long Privacy Index Token",
    "FullName": "0.5X Long Privacy Index Token (PRIVHALF)"
  },
  {
    "Symbol": "PAXGHEDGE",
    "CoinName": "1X Short PAX Gold Token",
    "FullName": "1X Short PAX Gold Token (PAXGHEDGE)"
  },
  {
    "Symbol": "OKBHEDGE",
    "CoinName": "1X Short OKB Token",
    "FullName": "1X Short OKB Token (OKBHEDGE)"
  },
  {
    "Symbol": "OKBHALF",
    "CoinName": "0.5X Long OKB Token",
    "FullName": "0.5X Long OKB Token (OKBHALF)"
  },
  {
    "Symbol": "MKRBULL",
    "CoinName": "3X Long Maker Token",
    "FullName": "3X Long Maker Token (MKRBULL)"
  },
  {
    "Symbol": "MKRBEAR",
    "CoinName": "3X Short Maker Token",
    "FullName": "3X Short Maker Token (MKRBEAR)"
  },
  {
    "Symbol": "MIDHEDGE",
    "CoinName": "1X Short Midcap Index Token",
    "FullName": "1X Short Midcap Index Token (MIDHEDGE)"
  },
  {
    "Symbol": "MIDHALF",
    "CoinName": "0.5X Long Midcap Index Token",
    "FullName": "0.5X Long Midcap Index Token (MIDHALF)"
  },
  {
    "Symbol": "MATICHEDGE",
    "CoinName": "1X Short Matic Token",
    "FullName": "1X Short Matic Token (MATICHEDGE)"
  },
  {
    "Symbol": "MATICHALF",
    "CoinName": "0.5X Long Matic Token",
    "FullName": "0.5X Long Matic Token (MATICHALF)"
  },
  {
    "Symbol": "LTCHEDGE",
    "CoinName": "1X Short Litecoin Token",
    "FullName": "1X Short Litecoin Token (LTCHEDGE)"
  },
  {
    "Symbol": "LTCHALF",
    "CoinName": "0.5X Long Litecoin Token",
    "FullName": "0.5X Long Litecoin Token (LTCHALF)"
  },
  {
    "Symbol": "LINKHEDGE",
    "CoinName": "1X Short Chainlink Token",
    "FullName": "1X Short Chainlink Token (LINKHEDGE)"
  },
  {
    "Symbol": "LINKHALF",
    "CoinName": "0.5X Long Chainlink Token",
    "FullName": "0.5X Long Chainlink Token (LINKHALF)"
  },
  {
    "Symbol": "LEOHEDGE",
    "CoinName": "1X Short LEO Token",
    "FullName": "1X Short LEO Token (LEOHEDGE)"
  },
  {
    "Symbol": "LEOHALF",
    "CoinName": "0.5X Long LEO Token",
    "FullName": "0.5X Long LEO Token (LEOHALF)"
  },
  {
    "Symbol": "KNCHEDGE",
    "CoinName": "1X Short Kyber Network Token",
    "FullName": "1X Short Kyber Network Token (KNCHEDGE)"
  },
  {
    "Symbol": "KNCHALF",
    "CoinName": "0.5X Long Kyber Network Token",
    "FullName": "0.5X Long Kyber Network Token (KNCHALF)"
  },
  {
    "Symbol": "AFC",
    "CoinName": "Apiary Fund Coin",
    "FullName": "Apiary Fund Coin (AFC)"
  },
  {
    "Symbol": "HMST",
    "CoinName": "Hamster Marketplace Token",
    "FullName": "Hamster Marketplace Token (HMST)"
  },
  {
    "Symbol": "HMT",
    "CoinName": "HUMAN Token",
    "FullName": "HUMAN Token (HMT)"
  },
  {
    "Symbol": "HP",
    "CoinName": "HeartBout Pay",
    "FullName": "HeartBout Pay (HP)"
  },
  {
    "Symbol": "AQT",
    "CoinName": "Alpha Quark Token",
    "FullName": "Alpha Quark Token (AQT)"
  },
  {
    "Symbol": "HNY",
    "CoinName": "Honey",
    "FullName": "Honey (HNY)"
  },
  {
    "Symbol": "CAMP",
    "CoinName": "Camp",
    "FullName": "Camp (CAMP)"
  },
  {
    "Symbol": "KOREC",
    "CoinName": "Kore",
    "FullName": "Kore (KOREC)"
  },
  {
    "Symbol": "KORE",
    "CoinName": "KORE Vault",
    "FullName": "KORE Vault (KORE)"
  },
  {
    "Symbol": "RAMP",
    "CoinName": "RAMP",
    "FullName": "RAMP (RAMP)"
  },
  {
    "Symbol": "WINR",
    "CoinName": "JustBet",
    "FullName": "JustBet (WINR)"
  },
  {
    "Symbol": "DRC",
    "CoinName": "Digital Reserve Currency",
    "FullName": "Digital Reserve Currency (DRC)"
  },
  {
    "Symbol": "XTZHEDGE",
    "CoinName": "1X Short Tezos Token",
    "FullName": "1X Short Tezos Token (XTZHEDGE)"
  },
  {
    "Symbol": "XTZHALF",
    "CoinName": "0.5X Long Tezos Token",
    "FullName": "0.5X Long Tezos Token (XTZHALF)"
  },
  {
    "Symbol": "XRPHEDGE",
    "CoinName": "1X Short XRP Token",
    "FullName": "1X Short XRP Token (XRPHEDGE)"
  },
  {
    "Symbol": "XRPHALF",
    "CoinName": "0.5X Long XRP Token",
    "FullName": "0.5X Long XRP Token (XRPHALF)"
  },
  {
    "Symbol": "XAUTHEDGE",
    "CoinName": "1X Short Tether Gold Token",
    "FullName": "1X Short Tether Gold Token (XAUTHEDGE)"
  },
  {
    "Symbol": "XAUTHALF",
    "CoinName": "0.5X Long Tether Gold Token",
    "FullName": "0.5X Long Tether Gold Token (XAUTHALF)"
  },
  {
    "Symbol": "XAUTBULL",
    "CoinName": "3X Long Tether Gold Token",
    "FullName": "3X Long Tether Gold Token (XAUTBULL)"
  },
  {
    "Symbol": "XAUTBEAR",
    "CoinName": "3X Short Tether Gold Token",
    "FullName": "3X Short Tether Gold Token (XAUTBEAR)"
  },
  {
    "Symbol": "VETHEDGE",
    "CoinName": "1X Short VeChain Token",
    "FullName": "1X Short VeChain Token (VETHEDGE)"
  },
  {
    "Symbol": "VETBULL",
    "CoinName": "3X Long VeChain Token",
    "FullName": "3X Long VeChain Token (VETBULL)"
  },
  {
    "Symbol": "PRIA",
    "CoinName": "PRIA",
    "FullName": "PRIA (PRIA)"
  },
  {
    "Symbol": "FARMC",
    "CoinName": "FARM Coin",
    "FullName": "FARM Coin (FARMC)"
  },
  {
    "Symbol": "FARM",
    "CoinName": "Harvest Finance",
    "FullName": "Harvest Finance (FARM)"
  },
  {
    "Symbol": "DAM",
    "CoinName": "Datamine",
    "FullName": "Datamine (DAM)"
  },
  {
    "Symbol": "AUDIO",
    "CoinName": "Audius",
    "FullName": "Audius (AUDIO)"
  },
  {
    "Symbol": "XHT",
    "CoinName": "HollaEx",
    "FullName": "HollaEx (XHT)"
  },
  {
    "Symbol": "RUC",
    "CoinName": "Rush",
    "FullName": "Rush (RUC)"
  },
  {
    "Symbol": "AXIAV3",
    "CoinName": "Axia",
    "FullName": "Axia (AXIAV3)"
  },
  {
    "Symbol": "WON",
    "CoinName": "WeBlock",
    "FullName": "WeBlock (WON)"
  },
  {
    "Symbol": "BOR",
    "CoinName": "BoringDAO",
    "FullName": "BoringDAO (BOR)"
  },
  {
    "Symbol": "USNBT",
    "CoinName": "NuBits",
    "FullName": "NuBits (USNBT)"
  },
  {
    "Symbol": "NBT",
    "CoinName": "NIX Bridge Token",
    "FullName": "NIX Bridge Token (NBT)"
  },
  {
    "Symbol": "SSL",
    "CoinName": "Sergey Save Link",
    "FullName": "Sergey Save Link (SSL)"
  },
  {
    "Symbol": "CTK",
    "CoinName": "CertiK",
    "FullName": "CertiK (CTK)"
  },
  {
    "Symbol": "USDF",
    "CoinName": "FolgoryUSD",
    "FullName": "FolgoryUSD (USDF)"
  },
  {
    "Symbol": "XLT",
    "CoinName": "Nexalt",
    "FullName": "Nexalt (XLT)"
  },
  {
    "Symbol": "STPL",
    "CoinName": "Stream Protocol",
    "FullName": "Stream Protocol (STPL)"
  },
  {
    "Symbol": "RING",
    "CoinName": "Darwinia Network",
    "FullName": "Darwinia Network (RING)"
  },
  {
    "Symbol": "NPXS",
    "CoinName": "Pundi X",
    "FullName": "Pundi X (NPXS)"
  },
  {
    "Symbol": "KP3R",
    "CoinName": "Keep3rV1",
    "FullName": "Keep3rV1 (KP3R)"
  },
  {
    "Symbol": "SUSD",
    "CoinName": "sUSD",
    "FullName": "sUSD (SUSD)"
  },
  {
    "Symbol": "DREP",
    "CoinName": "DREP",
    "FullName": "DREP (DREP)"
  },
  {
    "Symbol": "FUN",
    "CoinName": "FunFair",
    "FullName": "FunFair (FUN)"
  },
  {
    "Symbol": "HPT",
    "CoinName": "Huobi Pool Token",
    "FullName": "Huobi Pool Token (HPT)"
  },
  {
    "Symbol": "AGI",
    "CoinName": "SingularityNET",
    "FullName": "SingularityNET (AGI)"
  },
  {
    "Symbol": "QASH",
    "CoinName": "Quoine Liquid",
    "FullName": "Quoine Liquid (QASH)"
  },
  {
    "Symbol": "VGX",
    "CoinName": "Voyager Token",
    "FullName": "Voyager Token (VGX)"
  },
  {
    "Symbol": "STPT",
    "CoinName": "STP Network",
    "FullName": "STP Network (STPT)"
  },
  {
    "Symbol": "CNNS",
    "CoinName": "CNNS",
    "FullName": "CNNS (CNNS)"
  },
  {
    "Symbol": "DAC",
    "CoinName": "Davinci Coin",
    "FullName": "Davinci Coin (DAC)"
  },
  {
    "Symbol": "TOPN",
    "CoinName": "TOP Network",
    "FullName": "TOP Network (TOPN)"
  },
  {
    "Symbol": "BORA",
    "CoinName": "BORA",
    "FullName": "BORA (BORA)"
  },
  {
    "Symbol": "CVC",
    "CoinName": "Civic",
    "FullName": "Civic (CVC)"
  },
  {
    "Symbol": "IBP",
    "CoinName": "Innovation Blockchain Payment",
    "FullName": "Innovation Blockchain Payment (IBP)"
  },
  {
    "Symbol": "VELOX",
    "CoinName": "Velox",
    "FullName": "Velox (VELOX)"
  },
  {
    "Symbol": "VLX",
    "CoinName": "Velas",
    "FullName": "Velas (VLX)"
  },
  {
    "Symbol": "TBTC",
    "CoinName": "tBTC",
    "FullName": "tBTC (TBTC)"
  },
  {
    "Symbol": "RSV",
    "CoinName": "Reserve",
    "FullName": "Reserve (RSV)"
  },
  {
    "Symbol": "PERP",
    "CoinName": "Perpetual Protocol",
    "FullName": "Perpetual Protocol (PERP)"
  },
  {
    "Symbol": "BLCT",
    "CoinName": "Bloomzed Loyalty Club Ticket",
    "FullName": "Bloomzed Loyalty Club Ticket (BLCT)"
  },
  {
    "Symbol": "YO",
    "CoinName": "Yobit Token",
    "FullName": "Yobit Token (YO)"
  },
  {
    "Symbol": "CONT",
    "CoinName": "Contentos",
    "FullName": "Contentos (CONT)"
  },
  {
    "Symbol": "APIX",
    "CoinName": "APIX",
    "FullName": "APIX (APIX)"
  },
  {
    "Symbol": "BULL",
    "CoinName": "3X Long Bitcoin Token",
    "FullName": "3X Long Bitcoin Token (BULL)"
  },
  {
    "Symbol": "QSP",
    "CoinName": "Quantstamp",
    "FullName": "Quantstamp (QSP)"
  },
  {
    "Symbol": "CTXC",
    "CoinName": "Cortex",
    "FullName": "Cortex (CTXC)"
  },
  {
    "Symbol": "RKN",
    "CoinName": "RAKON",
    "FullName": "RAKON (RKN)"
  },
  {
    "Symbol": "KAN",
    "CoinName": "Bitkan",
    "FullName": "Bitkan (KAN)"
  },
  {
    "Symbol": "ARPA",
    "CoinName": "ARPA Chain",
    "FullName": "ARPA Chain (ARPA)"
  },
  {
    "Symbol": "ROOBEE",
    "CoinName": "ROOBEE",
    "FullName": "ROOBEE (ROOBEE)"
  },
  {
    "Symbol": "STMX",
    "CoinName": "StormX",
    "FullName": "StormX (STMX)"
  },
  {
    "Symbol": "BMX",
    "CoinName": "BitMart Coin",
    "FullName": "BitMart Coin (BMX)"
  },
  {
    "Symbol": "MFT",
    "CoinName": "Mainframe",
    "FullName": "Mainframe (MFT)"
  },
  {
    "Symbol": "MTL",
    "CoinName": "Metal",
    "FullName": "Metal (MTL)"
  },
  {
    "Symbol": "RINGX",
    "CoinName": "RING X PLATFORM",
    "FullName": "RING X PLATFORM (RINGX)"
  },
  {
    "Symbol": "DENT",
    "CoinName": "Dent",
    "FullName": "Dent (DENT)"
  },
  {
    "Symbol": "CCOMP",
    "CoinName": "cCOMP",
    "FullName": "cCOMP (CCOMP)"
  },
  {
    "Symbol": "AG8",
    "CoinName": "ATROMG8",
    "FullName": "ATROMG8 (AG8)"
  },
  {
    "Symbol": "PEAK",
    "CoinName": "PEAKDEFI",
    "FullName": "PEAKDEFI (PEAK)"
  },
  {
    "Symbol": "WOO",
    "CoinName": "Wootrade",
    "FullName": "Wootrade (WOO)"
  },
  {
    "Symbol": "SLP",
    "CoinName": "Small Love Potion",
    "FullName": "Small Love Potion (SLP)"
  },
  {
    "Symbol": "COFIX",
    "CoinName": "CoFIX",
    "FullName": "CoFIX (COFIX)"
  },
  {
    "Symbol": "ECU",
    "CoinName": "ECOSC",
    "FullName": "ECOSC (ECU)"
  },
  {
    "Symbol": "DUCATO",
    "CoinName": "Ducato Protocol Token",
    "FullName": "Ducato Protocol Token (DUCATO)"
  },
  {
    "Symbol": "BCHUP",
    "CoinName": "BCHUP",
    "FullName": "BCHUP (BCHUP)"
  },
  {
    "Symbol": "BCHDOWN",
    "CoinName": "BCHDOWN",
    "FullName": "BCHDOWN (BCHDOWN)"
  },
  {
    "Symbol": "CNTR",
    "CoinName": "Centaur",
    "FullName": "Centaur (CNTR)"
  },
  {
    "Symbol": "RIF",
    "CoinName": "RIF Token",
    "FullName": "RIF Token (RIF)"
  },
  {
    "Symbol": "IZE",
    "CoinName": "IZE",
    "FullName": "IZE (IZE)"
  },
  {
    "Symbol": "GUSD",
    "CoinName": "Gemini Dollar",
    "FullName": "Gemini Dollar (GUSD)"
  },
  {
    "Symbol": "LOOM",
    "CoinName": "Loom Network",
    "FullName": "Loom Network (LOOM)"
  },
  {
    "Symbol": "BHAO",
    "CoinName": "Bithao",
    "FullName": "Bithao (BHAO)"
  },
  {
    "Symbol": "SURF",
    "CoinName": "Surf.Finance",
    "FullName": "Surf.Finance (SURF)"
  },
  {
    "Symbol": "PTERIA",
    "CoinName": "Pteria",
    "FullName": "Pteria (PTERIA)"
  },
  {
    "Symbol": "ERSDL",
    "CoinName": "UnFederalReserve",
    "FullName": "UnFederalReserve (ERSDL)"
  },
  {
    "Symbol": "WEMIX",
    "CoinName": "Wemix Token",
    "FullName": "Wemix Token (WEMIX)"
  },
  {
    "Symbol": "N0031",
    "CoinName": "nYFI",
    "FullName": "nYFI (N0031)"
  },
  {
    "Symbol": "ETHBULL",
    "CoinName": "3X Long Ethereum Token",
    "FullName": "3X Long Ethereum Token (ETHBULL)"
  },
  {
    "Symbol": "BKK",
    "CoinName": "BKEX Token",
    "FullName": "BKEX Token (BKK)"
  },
  {
    "Symbol": "CVNT",
    "CoinName": "Content Value Network",
    "FullName": "Content Value Network (CVNT)"
  },
  {
    "Symbol": "AAC",
    "CoinName": "Acute Angle Cloud",
    "FullName": "Acute Angle Cloud (AAC)"
  },
  {
    "Symbol": "TSHP",
    "CoinName": "12Ships",
    "FullName": "12Ships (TSHP)"
  },
  {
    "Symbol": "KEY",
    "CoinName": "SelfKey",
    "FullName": "SelfKey (KEY)"
  },
  {
    "Symbol": "OM",
    "CoinName": "MANTRA DAO",
    "FullName": "MANTRA DAO (OM)"
  },
  {
    "Symbol": "BIX",
    "CoinName": "BiboxCoin",
    "FullName": "BiboxCoin (BIX)"
  },
  {
    "Symbol": "ABT",
    "CoinName": "ArcBlock",
    "FullName": "ArcBlock (ABT)"
  },
  {
    "Symbol": "PPT",
    "CoinName": "Populous",
    "FullName": "Populous (PPT)"
  },
  {
    "Symbol": "DEGO",
    "CoinName": "Dego Finance",
    "FullName": "Dego Finance (DEGO)"
  },
  {
    "Symbol": "GHST",
    "CoinName": "Aavegotchi",
    "FullName": "Aavegotchi (GHST)"
  },
  {
    "Symbol": "TRADE",
    "CoinName": "UniTrade",
    "FullName": "UniTrade (TRADE)"
  },
  {
    "Symbol": "LET",
    "CoinName": "LinkEye",
    "FullName": "LinkEye (LET)"
  },
  {
    "Symbol": "YEE",
    "CoinName": "Yee",
    "FullName": "Yee (YEE)"
  },
  {
    "Symbol": "FYZ",
    "CoinName": "Fyooz",
    "FullName": "Fyooz (FYZ)"
  },
  {
    "Symbol": "GTO",
    "CoinName": "GIFTO",
    "FullName": "GIFTO (GTO)"
  },
  {
    "Symbol": "SUP8EME",
    "CoinName": "SUP8EME Token",
    "FullName": "SUP8EME Token (SUP8EME)"
  },
  {
    "Symbol": "CDN",
    "CoinName": "Canada eCoin",
    "FullName": "Canada eCoin (CDN)"
  },
  {
    "Symbol": "ORAI",
    "CoinName": "Oraichain Token",
    "FullName": "Oraichain Token (ORAI)"
  },
  {
    "Symbol": "KP4R",
    "CoinName": "Keep4r",
    "FullName": "Keep4r (KP4R)"
  },
  {
    "Symbol": "AUSCM",
    "CoinName": "Auric Network",
    "FullName": "Auric Network (AUSCM)"
  },
  {
    "Symbol": "XFYI",
    "CoinName": "XCredit",
    "FullName": "XCredit (XFYI)"
  },
  {
    "Symbol": "MOONDAY",
    "CoinName": "Moonday Finance",
    "FullName": "Moonday Finance (MOONDAY)"
  },
  {
    "Symbol": "FWT",
    "CoinName": "Freeway Token",
    "FullName": "Freeway Token (FWT)"
  },
  {
    "Symbol": "HD",
    "CoinName": "HubDao",
    "FullName": "HubDao (HD)"
  },
  {
    "Symbol": "SPORE",
    "CoinName": "Spore Finance",
    "FullName": "Spore Finance (SPORE)"
  },
  {
    "Symbol": "CELR",
    "CoinName": "Celer Network",
    "FullName": "Celer Network (CELR)"
  },
  {
    "Symbol": "MVL",
    "CoinName": "MVL",
    "FullName": "MVL (MVL)"
  },
  {
    "Symbol": "FRONT",
    "CoinName": "Frontier",
    "FullName": "Frontier (FRONT)"
  },
  {
    "Symbol": "PNT",
    "CoinName": "pNetwork Token",
    "FullName": "pNetwork Token (PNT)"
  },
  {
    "Symbol": "DUSK",
    "CoinName": "Dusk Network",
    "FullName": "Dusk Network (DUSK)"
  },
  {
    "Symbol": "SNTVT",
    "CoinName": "Sentivate",
    "FullName": "Sentivate (SNTVT)"
  },
  {
    "Symbol": "GOM2",
    "CoinName": "GoMoney2",
    "FullName": "GoMoney2 (GOM2)"
  },
  {
    "Symbol": "PERL",
    "CoinName": "Perlin",
    "FullName": "Perlin (PERL)"
  },
  {
    "Symbol": "MOF",
    "CoinName": "Molecular Future",
    "FullName": "Molecular Future (MOF)"
  },
  {
    "Symbol": "RDNN",
    "CoinName": "Raiden Network",
    "FullName": "Raiden Network (RDNN)"
  },
  {
    "Symbol": "ELAD",
    "CoinName": "ELAD Network",
    "FullName": "ELAD Network (ELAD)"
  },
  {
    "Symbol": "FNB",
    "CoinName": "FNB protocol",
    "FullName": "FNB protocol (FNB)"
  },
  {
    "Symbol": "MDA",
    "CoinName": "Moeda",
    "FullName": "Moeda (MDA)"
  },
  {
    "Symbol": "CROAT",
    "CoinName": "Croat",
    "FullName": "Croat (CROAT)"
  },
  {
    "Symbol": "PAY",
    "CoinName": "TenX",
    "FullName": "TenX (PAY)"
  },
  {
    "Symbol": "PRE",
    "CoinName": "Presearch",
    "FullName": "Presearch (PRE)"
  },
  {
    "Symbol": "MITX",
    "CoinName": "Morpheus Infrastructure Token",
    "FullName": "Morpheus Infrastructure Token (MITX)"
  },
  {
    "Symbol": "BEAR",
    "CoinName": "3X Short Bitcoin",
    "FullName": "3X Short Bitcoin (BEAR)"
  },
  {
    "Symbol": "PIXEL",
    "CoinName": "Piction Network",
    "FullName": "Piction Network (PIXEL)"
  },
  {
    "Symbol": "MET",
    "CoinName": "Metronome",
    "FullName": "Metronome (MET)"
  },
  {
    "Symbol": "LBA",
    "CoinName": "Cred",
    "FullName": "Cred (LBA)"
  },
  {
    "Symbol": "SMT",
    "CoinName": "SmartMesh",
    "FullName": "SmartMesh (SMT)"
  },
  {
    "Symbol": "DOCK",
    "CoinName": "Dock.io",
    "FullName": "Dock.io (DOCK)"
  },
  {
    "Symbol": "GNX",
    "CoinName": "Genaro Network",
    "FullName": "Genaro Network (GNX)"
  },
  {
    "Symbol": "UGAS",
    "CoinName": "Ultrain",
    "FullName": "Ultrain (UGAS)"
  },
  {
    "Symbol": "UPP",
    "CoinName": "Sentinel Protocol",
    "FullName": "Sentinel Protocol (UPP)"
  },
  {
    "Symbol": "BFT",
    "CoinName": "BF Token",
    "FullName": "BF Token (BFT)"
  },
  {
    "Symbol": "DFD",
    "CoinName": "DefiDollar DAO",
    "FullName": "DefiDollar DAO (DFD)"
  },
  {
    "Symbol": "MSB",
    "CoinName": "Misbloc",
    "FullName": "Misbloc (MSB)"
  },
  {
    "Symbol": "XAT",
    "CoinName": "ShareAt",
    "FullName": "ShareAt (XAT)"
  },
  {
    "Symbol": "XDOT",
    "CoinName": "DotBased",
    "FullName": "DotBased (XDOT)"
  },
  {
    "Symbol": "BOOB",
    "CoinName": "BooBank",
    "FullName": "BooBank (BOOB)"
  },
  {
    "Symbol": "EOSDT",
    "CoinName": "EOSDT",
    "FullName": "EOSDT (EOSDT)"
  },
  {
    "Symbol": "GBK",
    "CoinName": "Goldblock",
    "FullName": "Goldblock (GBK)"
  },
  {
    "Symbol": "TAT",
    "CoinName": "Tatcoin",
    "FullName": "Tatcoin (TAT)"
  },
  {
    "Symbol": "GSWAP",
    "CoinName": "Gameswap",
    "FullName": "Gameswap (GSWAP)"
  },
  {
    "Symbol": "YYFI",
    "CoinName": "YYFI.Protocol",
    "FullName": "YYFI.Protocol (YYFI)"
  },
  {
    "Symbol": "DFGL",
    "CoinName": "DeFi Gold",
    "FullName": "DeFi Gold (DFGL)"
  },
  {
    "Symbol": "NVA",
    "CoinName": "Neeva Defi",
    "FullName": "Neeva Defi (NVA)"
  },
  {
    "Symbol": "LEX",
    "CoinName": "Elxis",
    "FullName": "Elxis (LEX)"
  },
  {
    "Symbol": "BLOODY",
    "CoinName": "Bloody Token",
    "FullName": "Bloody Token (BLOODY)"
  },
  {
    "Symbol": "ASP",
    "CoinName": "Aspire",
    "FullName": "Aspire (ASP)"
  },
  {
    "Symbol": "PICKLE",
    "CoinName": "Pickle Finance",
    "FullName": "Pickle Finance (PICKLE)"
  },
  {
    "Symbol": "CTCN",
    "CoinName": "Contracoin",
    "FullName": "Contracoin (CTCN)"
  },
  {
    "Symbol": "ETHBEAR",
    "CoinName": "3X Short Ethereum Token",
    "FullName": "3X Short Ethereum Token (ETHBEAR)"
  },
  {
    "Symbol": "PRO",
    "CoinName": "Propy",
    "FullName": "Propy (PRO)"
  },
  {
    "Symbol": "TNB",
    "CoinName": "Time New Bank",
    "FullName": "Time New Bank (TNB)"
  },
  {
    "Symbol": "QUN",
    "CoinName": "QunQun",
    "FullName": "QunQun (QUN)"
  },
  {
    "Symbol": "MTX",
    "CoinName": "Matryx",
    "FullName": "Matryx (MTX)"
  },
  {
    "Symbol": "APPC",
    "CoinName": "AppCoins",
    "FullName": "AppCoins (APPC)"
  },
  {
    "Symbol": "CMT",
    "CoinName": "CyberMiles",
    "FullName": "CyberMiles (CMT)"
  },
  {
    "Symbol": "EOSBEAR",
    "CoinName": "3X Short EOS Token",
    "FullName": "3X Short EOS Token (EOSBEAR)"
  },
  {
    "Symbol": "ITC",
    "CoinName": "IoT Chain",
    "FullName": "IoT Chain (ITC)"
  },
  {
    "Symbol": "DMT",
    "CoinName": "DMarket",
    "FullName": "DMarket (DMT)"
  },
  {
    "Symbol": "FAIRG",
    "CoinName": "FairGame",
    "FullName": "FairGame (FAIRG)"
  },
  {
    "Symbol": "EM",
    "CoinName": "Eminer",
    "FullName": "Eminer (EM)"
  },
  {
    "Symbol": "WABI",
    "CoinName": "WABI",
    "FullName": "WABI (WABI)"
  },
  {
    "Symbol": "BOX",
    "CoinName": "ContentBox",
    "FullName": "ContentBox (BOX)"
  },
  {
    "Symbol": "SPENDC",
    "CoinName": "SpendCoin",
    "FullName": "SpendCoin (SPENDC)"
  },
  {
    "Symbol": "TRUMPLOSE",
    "CoinName": "Trump Loses Token",
    "FullName": "Trump Loses Token (TRUMPLOSE)"
  },
  {
    "Symbol": "EGT",
    "CoinName": "Egretia",
    "FullName": "Egretia (EGT)"
  },
  {
    "Symbol": "SRN",
    "CoinName": "SirinLabs",
    "FullName": "SirinLabs (SRN)"
  },
  {
    "Symbol": "XRPBULL",
    "CoinName": "3X Long XRP Token",
    "FullName": "3X Long XRP Token (XRPBULL)"
  },
  {
    "Symbol": "ABYSS",
    "CoinName": "The Abyss",
    "FullName": "The Abyss (ABYSS)"
  },
  {
    "Symbol": "OST",
    "CoinName": "Simple Token",
    "FullName": "Simple Token (OST)"
  },
  {
    "Symbol": "RUFF",
    "CoinName": "Ruff",
    "FullName": "Ruff (RUFF)"
  },
  {
    "Symbol": "RFUEL",
    "CoinName": "Rio DeFi",
    "FullName": "Rio DeFi (RFUEL)"
  },
  {
    "Symbol": "LINKBEAR",
    "CoinName": "3X Short Chainlink Token",
    "FullName": "3X Short Chainlink Token (LINKBEAR)"
  },
  {
    "Symbol": "EVX",
    "CoinName": "Everex",
    "FullName": "Everex (EVX)"
  },
  {
    "Symbol": "BEPRO",
    "CoinName": "BetProtocol",
    "FullName": "BetProtocol (BEPRO)"
  },
  {
    "Symbol": "TEN",
    "CoinName": "Tokenomy",
    "FullName": "Tokenomy (TEN)"
  },
  {
    "Symbol": "MVP",
    "CoinName": "Merculet",
    "FullName": "Merculet (MVP)"
  },
  {
    "Symbol": "PVT",
    "CoinName": "Pivot Token",
    "FullName": "Pivot Token (PVT)"
  },
  {
    "Symbol": "SYN",
    "CoinName": "SynLev",
    "FullName": "SynLev (SYN)"
  },
  {
    "Symbol": "YSEC",
    "CoinName": "Yearn Secure",
    "FullName": "Yearn Secure (YSEC)"
  },
  {
    "Symbol": "SMPL",
    "CoinName": "SMPL Foundation",
    "FullName": "SMPL Foundation (SMPL)"
  },
  {
    "Symbol": "DOGDEFI",
    "CoinName": "DogDeFiCoin",
    "FullName": "DogDeFiCoin (DOGDEFI)"
  },
  {
    "Symbol": "TKN",
    "CoinName": "Monolith",
    "FullName": "Monolith (TKN)"
  },
  {
    "Symbol": "NEC",
    "CoinName": "Nectar",
    "FullName": "Nectar (NEC)"
  },
  {
    "Symbol": "COTI",
    "CoinName": "COTI",
    "FullName": "COTI (COTI)"
  },
  {
    "Symbol": "FRM",
    "CoinName": "Ferrum Network",
    "FullName": "Ferrum Network (FRM)"
  },
  {
    "Symbol": "FSN",
    "CoinName": "Fusion",
    "FullName": "Fusion (FSN)"
  },
  {
    "Symbol": "INJ",
    "CoinName": "Injective Protocol",
    "FullName": "Injective Protocol (INJ)"
  },
  {
    "Symbol": "DVI",
    "CoinName": "Dvision Network",
    "FullName": "Dvision Network (DVI)"
  },
  {
    "Symbol": "ATRI",
    "CoinName": "Atari Token",
    "FullName": "Atari Token (ATRI)"
  },
  {
    "Symbol": "BUSD",
    "CoinName": "BUSD",
    "FullName": "BUSD (BUSD)"
  },
  {
    "Symbol": "XPN",
    "CoinName": "PANTHEON X",
    "FullName": "PANTHEON X (XPN)"
  },
  {
    "Symbol": "PST",
    "CoinName": "Primas",
    "FullName": "Primas (PST)"
  },
  {
    "Symbol": "8X8",
    "CoinName": "8X8 Protocol",
    "FullName": "8X8 Protocol (8X8)"
  },
  {
    "Symbol": "LTO",
    "CoinName": "LTO Network",
    "FullName": "LTO Network (LTO)"
  },
  {
    "Symbol": "MEME",
    "CoinName": "Meme",
    "FullName": "Meme (MEME)"
  },
  {
    "Symbol": "TRUMPWIN",
    "CoinName": "Trump Wins Token",
    "FullName": "Trump Wins Token (TRUMPWIN)"
  },
  {
    "Symbol": "GOF",
    "CoinName": "Golff",
    "FullName": "Golff (GOF)"
  },
  {
    "Symbol": "CDT",
    "CoinName": "Blox",
    "FullName": "Blox (CDT)"
  },
  {
    "Symbol": "XUC",
    "CoinName": "Exchange Union",
    "FullName": "Exchange Union (XUC)"
  },
  {
    "Symbol": "FAT",
    "CoinName": "Fatcoin",
    "FullName": "Fatcoin (FAT)"
  },
  {
    "Symbol": "LINKBULL",
    "CoinName": "3X Long Chainlink Token",
    "FullName": "3X Long Chainlink Token (LINKBULL)"
  },
  {
    "Symbol": "FLETA",
    "CoinName": "FLETA",
    "FullName": "FLETA (FLETA)"
  },
  {
    "Symbol": "OGSP",
    "CoinName": "OriginSport",
    "FullName": "OriginSport (OGSP)"
  },
  {
    "Symbol": "SPKL",
    "CoinName": "SpokLottery",
    "FullName": "SpokLottery (SPKL)"
  },
  {
    "Symbol": "SMARTCREDIT",
    "CoinName": "SmartCredit Token",
    "FullName": "SmartCredit Token (SMARTCREDIT)"
  },
  {
    "Symbol": "JEM",
    "CoinName": "Jem",
    "FullName": "Jem (JEM)"
  },
  {
    "Symbol": "NAMI",
    "CoinName": "Tsunami finance",
    "FullName": "Tsunami finance (NAMI)"
  },
  {
    "Symbol": "VIDT",
    "CoinName": "V-ID",
    "FullName": "V-ID (VIDT)"
  },
  {
    "Symbol": "SNM",
    "CoinName": "SONM",
    "FullName": "SONM (SNM)"
  },
  {
    "Symbol": "RFR",
    "CoinName": "Refereum",
    "FullName": "Refereum (RFR)"
  },
  {
    "Symbol": "TRIO",
    "CoinName": "Tripio",
    "FullName": "Tripio (TRIO)"
  },
  {
    "Symbol": "ADEL",
    "CoinName": "Akropolis Delphi",
    "FullName": "Akropolis Delphi (ADEL)"
  },
  {
    "Symbol": "YAM",
    "CoinName": "YAM",
    "FullName": "YAM (YAM)"
  },
  {
    "Symbol": "LRN",
    "CoinName": "Loopring [NEO]",
    "FullName": "Loopring [NEO] (LRN)"
  },
  {
    "Symbol": "WGRT",
    "CoinName": "WaykiChain Governance Coin",
    "FullName": "WaykiChain Governance Coin (WGRT)"
  },
  {
    "Symbol": "ROT",
    "CoinName": "Rotten",
    "FullName": "Rotten (ROT)"
  },
  {
    "Symbol": "NEX",
    "CoinName": "Nash Exchange",
    "FullName": "Nash Exchange (NEX)"
  },
  {
    "Symbol": "LST",
    "CoinName": "Lendroid Support Token",
    "FullName": "Lendroid Support Token (LST)"
  },
  {
    "Symbol": "MTRG",
    "CoinName": "Meter",
    "FullName": "Meter (MTRG)"
  },
  {
    "Symbol": "TT",
    "CoinName": "Thunder Token",
    "FullName": "Thunder Token (TT)"
  },
  {
    "Symbol": "AKN",
    "CoinName": "Akoin",
    "FullName": "Akoin (AKN)"
  },
  {
    "Symbol": "ALPHA",
    "CoinName": "Alpha Finance Lab",
    "FullName": "Alpha Finance Lab (ALPHA)"
  },
  {
    "Symbol": "YAMV1",
    "CoinName": "YAM v1",
    "FullName": "YAM v1 (YAMV1)"
  },
  {
    "Symbol": "META",
    "CoinName": "Metadium",
    "FullName": "Metadium (META)"
  },
  {
    "Symbol": "LOKI",
    "CoinName": "Loki",
    "FullName": "Loki (LOKI)"
  },
  {
    "Symbol": "FIL",
    "CoinName": "FileCoin",
    "FullName": "FileCoin (FIL)"
  },
  {
    "Symbol": "HOT",
    "CoinName": "Hydro Protocol",
    "FullName": "Hydro Protocol (HOT)"
  },
  {
    "Symbol": "USDTHEDGE",
    "CoinName": "1X Short Tether Token",
    "FullName": "1X Short Tether Token (USDTHEDGE)"
  },
  {
    "Symbol": "USDTHALF",
    "CoinName": "0.5X Long Tether Token",
    "FullName": "0.5X Long Tether Token (USDTHALF)"
  },
  {
    "Symbol": "UTU",
    "CoinName": "UTU Protocol",
    "FullName": "UTU Protocol (UTU)"
  },
  {
    "Symbol": "ORC",
    "CoinName": "Orbit Chain",
    "FullName": "Orbit Chain (ORC)"
  },
  {
    "Symbol": "FINA",
    "CoinName": "FinanceX",
    "FullName": "FinanceX (FINA)"
  },
  {
    "Symbol": "ORGA",
    "CoinName": "Organicco",
    "FullName": "Organicco (ORGA)"
  },
  {
    "Symbol": "BETF",
    "CoinName": "Betform",
    "FullName": "Betform (BETF)"
  },
  {
    "Symbol": "QNT",
    "CoinName": "Quant",
    "FullName": "Quant (QNT)"
  },
  {
    "Symbol": "YFR",
    "CoinName": "YFarmer",
    "FullName": "YFarmer (YFR)"
  },
  {
    "Symbol": "TESSLA",
    "CoinName": "Tessla Coin",
    "FullName": "Tessla Coin (TESSLA)"
  },
  {
    "Symbol": "MOONC",
    "CoinName": "MoonCoin",
    "FullName": "MoonCoin (MOONC)"
  },
  {
    "Symbol": "FINOM",
    "CoinName": "Finom FIN Token",
    "FullName": "Finom FIN Token (FINOM)"
  },
  {
    "Symbol": "REN",
    "CoinName": "REN",
    "FullName": "REN (REN)"
  },
  {
    "Symbol": "SXP",
    "CoinName": "Swipe",
    "FullName": "Swipe (SXP)"
  },
  {
    "Symbol": "NVT",
    "CoinName": "NerveNetwork",
    "FullName": "NerveNetwork (NVT)"
  },
  {
    "Symbol": "UNFI",
    "CoinName": "Unifi Protocol DAO",
    "FullName": "Unifi Protocol DAO (UNFI)"
  },
  {
    "Symbol": "HEZ",
    "CoinName": "Hermez Network Token",
    "FullName": "Hermez Network Token (HEZ)"
  },
  {
    "Symbol": "ALBT",
    "CoinName": "AllianceBlock",
    "FullName": "AllianceBlock (ALBT)"
  },
  {
    "Symbol": "LRC",
    "CoinName": "Loopring",
    "FullName": "Loopring (LRC)"
  },
  {
    "Symbol": "MOON",
    "CoinName": "r/CryptoCurrency Moons",
    "FullName": "r/CryptoCurrency Moons (MOON)"
  },
  {
    "Symbol": "LINANET",
    "CoinName": "Lina",
    "FullName": "Lina (LINANET)"
  },
  {
    "Symbol": "LINA",
    "CoinName": "Linear",
    "FullName": "Linear (LINA)"
  },
  {
    "Symbol": "FFYI",
    "CoinName": "Fiscus FYI",
    "FullName": "Fiscus FYI (FFYI)"
  },
  {
    "Symbol": "FIN",
    "CoinName": "DeFiner",
    "FullName": "DeFiner (FIN)"
  },
  {
    "Symbol": "TAPC",
    "CoinName": "Tap Coin",
    "FullName": "Tap Coin (TAPC)"
  },
  {
    "Symbol": "TTT",
    "CoinName": "The Transfer Token",
    "FullName": "The Transfer Token (TTT)"
  },
  {
    "Symbol": "BAMBOO",
    "CoinName": "BambooDeFi",
    "FullName": "BambooDeFi (BAMBOO)"
  },
  {
    "Symbol": "ANT",
    "CoinName": "Aragon",
    "FullName": "Aragon (ANT)"
  },
  {
    "Symbol": "BHT",
    "CoinName": "HBTC Captain Token",
    "FullName": "HBTC Captain Token (BHT)"
  },
  {
    "Symbol": "ORN",
    "CoinName": "Orion Protocol",
    "FullName": "Orion Protocol (ORN)"
  },
  {
    "Symbol": "DMX",
    "CoinName": "Dymmax",
    "FullName": "Dymmax (DMX)"
  },
  {
    "Symbol": "AEON",
    "CoinName": "AEON",
    "FullName": "AEON (AEON)"
  },
  {
    "Symbol": "VERIF",
    "CoinName": "Verifier",
    "FullName": "Verifier (VERIF)"
  },
  {
    "Symbol": "BNTX",
    "CoinName": "BioNTech FTX",
    "FullName": "BioNTech FTX (BNTX)"
  },
  {
    "Symbol": "AMZN",
    "CoinName": "Amazon FTX",
    "FullName": "Amazon FTX (AMZN)"
  },
  {
    "Symbol": "FB",
    "CoinName": "Facebook FTX",
    "FullName": "Facebook FTX (FB)"
  },
  {
    "Symbol": "TSLA",
    "CoinName": "Tesla FTX",
    "FullName": "Tesla FTX (TSLA)"
  },
  {
    "Symbol": "BILI",
    "CoinName": "Bilibili Inc FTX",
    "FullName": "Bilibili Inc FTX (BILI)"
  },
  {
    "Symbol": "SPY",
    "CoinName": "SPDR S&P 500 ETF FTX",
    "FullName": "SPDR S&P 500 ETF FTX (SPY)"
  },
  {
    "Symbol": "GOOGL",
    "CoinName": "Alphabet FTX",
    "FullName": "Alphabet FTX (GOOGL)"
  },
  {
    "Symbol": "UQC",
    "CoinName": "Uquid Coin",
    "FullName": "Uquid Coin (UQC)"
  },
  {
    "Symbol": "PFE",
    "CoinName": "Pfizer FTX",
    "FullName": "Pfizer FTX (PFE)"
  },
  {
    "Symbol": "BYND",
    "CoinName": "Beyond Meat Inc FTX",
    "FullName": "Beyond Meat Inc FTX (BYND)"
  },
  {
    "Symbol": "BABA",
    "CoinName": "Alibaba FTX",
    "FullName": "Alibaba FTX (BABA)"
  },
  {
    "Symbol": "BTCVT",
    "CoinName": "Bitcoin Vault",
    "FullName": "Bitcoin Vault (BTCVT)"
  },
  {
    "Symbol": "SAV3",
    "CoinName": "SAV3",
    "FullName": "SAV3 (SAV3)"
  },
  {
    "Symbol": "SFI",
    "CoinName": "Saffron.finance",
    "FullName": "Saffron.finance (SFI)"
  },
  {
    "Symbol": "WIS",
    "CoinName": "Experty Wisdom Token",
    "FullName": "Experty Wisdom Token (WIS)"
  },
  {
    "Symbol": "ROSE",
    "CoinName": "Oasis Labs",
    "FullName": "Oasis Labs (ROSE)"
  },
  {
    "Symbol": "CFX",
    "CoinName": "Conflux Network",
    "FullName": "Conflux Network (CFX)"
  },
  {
    "Symbol": "GASP",
    "CoinName": "gAsp",
    "FullName": "gAsp (GASP)"
  },
  {
    "Symbol": "LIEN",
    "CoinName": "Lien",
    "FullName": "Lien (LIEN)"
  },
  {
    "Symbol": "DOUGH",
    "CoinName": "PieDAO v2 (DOUGH)",
    "FullName": "PieDAO v2 (DOUGH) (DOUGH)"
  },
  {
    "Symbol": "IDEFI",
    "CoinName": "Inverse DeFi Index",
    "FullName": "Inverse DeFi Index (IDEFI)"
  },
  {
    "Symbol": "XDGB",
    "CoinName": "DigitalBits",
    "FullName": "DigitalBits (XDGB)"
  },
  {
    "Symbol": "HEGIC",
    "CoinName": "Hegic",
    "FullName": "Hegic (HEGIC)"
  },
  {
    "Symbol": "ERG",
    "CoinName": "Ergo",
    "FullName": "Ergo (ERG)"
  },
  {
    "Symbol": "OROP",
    "CoinName": "ORO",
    "FullName": "ORO (OROP)"
  },
  {
    "Symbol": "NRG",
    "CoinName": "Energi",
    "FullName": "Energi (NRG)"
  },
  {
    "Symbol": "AUR",
    "CoinName": "Auroracoin",
    "FullName": "Auroracoin (AUR)"
  },
  {
    "Symbol": "UBX",
    "CoinName": "UBIX Network",
    "FullName": "UBIX Network (UBX)"
  },
  {
    "Symbol": "WBIND",
    "CoinName": "Wrapped BIND",
    "FullName": "Wrapped BIND (WBIND)"
  },
  {
    "Symbol": "BIND",
    "CoinName": "Compendia",
    "FullName": "Compendia (BIND)"
  },
  {
    "Symbol": "KFC",
    "CoinName": "Chicken",
    "FullName": "Chicken (KFC)"
  },
  {
    "Symbol": "KIMCHI",
    "CoinName": "KIMCHI.finance",
    "FullName": "KIMCHI.finance (KIMCHI)"
  },
  {
    "Symbol": "JGN",
    "CoinName": "Juggernaut (JGN)",
    "FullName": "Juggernaut (JGN) (JGN)"
  },
  {
    "Symbol": "SPAIN",
    "CoinName": "SpainCoin",
    "FullName": "SpainCoin (SPAIN)"
  },
  {
    "Symbol": "SPA",
    "CoinName": "Sperax",
    "FullName": "Sperax (SPA)"
  },
  {
    "Symbol": "CREDIT",
    "CoinName": "TerraCredit",
    "FullName": "TerraCredit (CREDIT)"
  },
  {
    "Symbol": "API3",
    "CoinName": "API3",
    "FullName": "API3 (API3)"
  },
  {
    "Symbol": "LANE",
    "CoinName": "LaneAxis",
    "FullName": "LaneAxis (LANE)"
  },
  {
    "Symbol": "FAIR",
    "CoinName": "FairCoin",
    "FullName": "FairCoin (FAIR)"
  },
  {
    "Symbol": "MPH",
    "CoinName": "Morpher",
    "FullName": "Morpher (MPH)"
  },
  {
    "Symbol": "METER",
    "CoinName": "Meter Stable",
    "FullName": "Meter Stable (METER)"
  },
  {
    "Symbol": "PROXI",
    "CoinName": "PROXI",
    "FullName": "PROXI (PROXI)"
  },
  {
    "Symbol": "AXIS",
    "CoinName": "Axis DeFi",
    "FullName": "Axis DeFi (AXIS)"
  },
  {
    "Symbol": "SUPERTX",
    "CoinName": "SuperTX",
    "FullName": "SuperTX (SUPERTX)"
  },
  {
    "Symbol": "PEOPLE",
    "CoinName": "People",
    "FullName": "People (PEOPLE)"
  },
  {
    "Symbol": "XRIBA",
    "CoinName": "Xriba",
    "FullName": "Xriba (XRIBA)"
  },
  {
    "Symbol": "ETHY",
    "CoinName": "Ethereum Yield",
    "FullName": "Ethereum Yield (ETHY)"
  },
  {
    "Symbol": "BNF",
    "CoinName": "BonFi",
    "FullName": "BonFi (BNF)"
  },
  {
    "Symbol": "CGLD",
    "CoinName": "Celo Gold",
    "FullName": "Celo Gold (CGLD)"
  },
  {
    "Symbol": "TMT",
    "CoinName": "Tamy Token",
    "FullName": "Tamy Token (TMT)"
  },
  {
    "Symbol": "BSYS",
    "CoinName": "BSYS",
    "FullName": "BSYS (BSYS)"
  },
  {
    "Symbol": "MW",
    "CoinName": "MasterWin Coin",
    "FullName": "MasterWin Coin (MW)"
  },
  {
    "Symbol": "88MPH",
    "CoinName": "88mph",
    "FullName": "88mph (88MPH)"
  },
  {
    "Symbol": "BMP",
    "CoinName": "Brother Music Platform",
    "FullName": "Brother Music Platform (BMP)"
  },
  {
    "Symbol": "HSS",
    "CoinName": "Hashshare",
    "FullName": "Hashshare (HSS)"
  },
  {
    "Symbol": "FNX",
    "CoinName": "FinNexus",
    "FullName": "FinNexus (FNX)"
  },
  {
    "Symbol": "GAMEX",
    "CoinName": "GameX",
    "FullName": "GameX (GAMEX)"
  },
  {
    "Symbol": "GX",
    "CoinName": "Gx Coin",
    "FullName": "Gx Coin (GX)"
  },
  {
    "Symbol": "LUNA",
    "CoinName": "Terra",
    "FullName": "Terra (LUNA)"
  },
  {
    "Symbol": "DPI",
    "CoinName": "DeFiPulse Index",
    "FullName": "DeFiPulse Index (DPI)"
  },
  {
    "Symbol": "FIS",
    "CoinName": "Stafi",
    "FullName": "Stafi (FIS)"
  },
  {
    "Symbol": "GMX",
    "CoinName": "Goldmaxcoin",
    "FullName": "Goldmaxcoin (GOLDM)"
  },
  {
    "Symbol": "GXT",
    "CoinName": "Gem Exchange And Trading",
    "FullName": "Gem Exchange And Trading (GXT)"
  },
  {
    "Symbol": "YFPRO",
    "CoinName": "YFPRO Finance",
    "FullName": "YFPRO Finance (YFPRO)"
  },
  {
    "Symbol": "CCE",
    "CoinName": "CloudCoin",
    "FullName": "CloudCoin (CCE)"
  },
  {
    "Symbol": "SATT",
    "CoinName": "SaTT",
    "FullName": "SaTT (SATT)"
  },
  {
    "Symbol": "RPZX",
    "CoinName": "Rapidz",
    "FullName": "Rapidz (RPZX)"
  },
  {
    "Symbol": "GLM",
    "CoinName": "Golem Network Token",
    "FullName": "Golem Network Token (GLM)"
  },
  {
    "Symbol": "GBCR",
    "CoinName": "Gold BCR",
    "FullName": "Gold BCR (GBCR)"
  },
  {
    "Symbol": "TESTA",
    "CoinName": "Testa",
    "FullName": "Testa (TESTA)"
  },
  {
    "Symbol": "BTT",
    "CoinName": "BitTorrent",
    "FullName": "BitTorrent (BTT)"
  },
  {
    "Symbol": "CRYSTAL",
    "CoinName": "TON Crystal",
    "FullName": "TON Crystal (CRYSTAL)"
  },
  {
    "Symbol": "TON",
    "CoinName": "Tokamak Network",
    "FullName": "Tokamak Network (TON)"
  },
  {
    "Symbol": "FIELD",
    "CoinName": "Fieldcoin",
    "FullName": "Fieldcoin (FIELD)"
  },
  {
    "Symbol": "NEAR",
    "CoinName": "Near",
    "FullName": "Near (NEAR)"
  },
  {
    "Symbol": "ZLOT",
    "CoinName": "zLOT Finance",
    "FullName": "zLOT Finance (ZLOT)"
  },
  {
    "Symbol": "EL",
    "CoinName": "ELYSIA",
    "FullName": "ELYSIA (EL)"
  },
  {
    "Symbol": "ALN",
    "CoinName": "Aluna",
    "FullName": "Aluna (ALN)"
  },
  {
    "Symbol": "GAL",
    "CoinName": "Galatasaray Fan Token",
    "FullName": "Galatasaray Fan Token (GAL)"
  },
  {
    "Symbol": "NVZN",
    "CoinName": "INVIZION",
    "FullName": "INVIZION (NVZN)"
  },
  {
    "Symbol": "BWB",
    "CoinName": "Bit World Token",
    "FullName": "Bit World Token (BWB)"
  },
  {
    "Symbol": "BULLC",
    "CoinName": "BuySell",
    "FullName": "BuySell (BULLC)"
  },
  {
    "Symbol": "MONO",
    "CoinName": "Monoreto",
    "FullName": "Monoreto (MONO)"
  },
  {
    "Symbol": "MNR",
    "CoinName": "Mineral",
    "FullName": "Mineral (MNR)"
  },
  {
    "Symbol": "MEDIT",
    "CoinName": "MediterraneanCoin",
    "FullName": "MediterraneanCoin (MEDIT)"
  },
  {
    "Symbol": "MED",
    "CoinName": "Medibloc",
    "FullName": "Medibloc (MED)"
  },
  {
    "Symbol": "USDT",
    "CoinName": "Tether",
    "FullName": "Tether (USDT)"
  },
  {
    "Symbol": "FR",
    "CoinName": "Freedom Reserve",
    "FullName": "Freedom Reserve (FR)"
  },
  {
    "Symbol": "MINDS",
    "CoinName": "Minds",
    "FullName": "Minds (MINDS)"
  },
  {
    "Symbol": "WOZX",
    "CoinName": "Efforce",
    "FullName": "Efforce (WOZX)"
  },
  {
    "Symbol": "MIRROR",
    "CoinName": "Mirror Protocol",
    "FullName": "Mirror Protocol (MIRROR)"
  },
  {
    "Symbol": "NEWS",
    "CoinName": "NewsTokens",
    "FullName": "NewsTokens (NEWS)"
  },
  {
    "Symbol": "NFLX",
    "CoinName": "Netflix FTX",
    "FullName": "Netflix FTX (NFLX)"
  },
  {
    "Symbol": "BASE",
    "CoinName": "Base Protocol",
    "FullName": "Base Protocol (BASE)"
  },
  {
    "Symbol": "SWFL",
    "CoinName": "Swapfolio",
    "FullName": "Swapfolio (SWFL)"
  },
  {
    "Symbol": "EXRD",
    "CoinName": "Radix",
    "FullName": "Radix (EXRD)"
  },
  {
    "Symbol": "AAPL",
    "CoinName": "Apple FTX",
    "FullName": "Apple FTX (AAPL)"
  },
  {
    "Symbol": "SBD",
    "CoinName": "Steem Dollars",
    "FullName": "Steem Dollars (SBD)"
  },
  {
    "Symbol": "WUST",
    "CoinName": "Wrapped UST Token",
    "FullName": "Wrapped UST Token (WUST)"
  },
  {
    "Symbol": "RAISE",
    "CoinName": "Raise Token",
    "FullName": "Raise Token (RAISE)"
  },
  {
    "Symbol": "BFI",
    "CoinName": "BitDefi",
    "FullName": "BitDefi (BFI)"
  },
  {
    "Symbol": "INDA",
    "CoinName": "Inda",
    "FullName": "Inda (INDA)"
  },
  {
    "Symbol": "ROOK",
    "CoinName": "KeeperDAO",
    "FullName": "KeeperDAO (ROOK)"
  },
  {
    "Symbol": "INT",
    "CoinName": "INT",
    "FullName": "INT (INT)"
  },
  {
    "Symbol": "FIO",
    "CoinName": "FIO Protocol",
    "FullName": "FIO Protocol (FIO)"
  },
  {
    "Symbol": "TRUE",
    "CoinName": "True Chain",
    "FullName": "True Chain (TRUE)"
  },
  {
    "Symbol": "AUC",
    "CoinName": "Auctus",
    "FullName": "Auctus (AUC)"
  },
  {
    "Symbol": "CTI",
    "CoinName": "ClinTex CTi",
    "FullName": "ClinTex CTi (CTI)"
  },
  {
    "Symbol": "CVP",
    "CoinName": "PowerPool Concentrated Voting Power",
    "FullName": "PowerPool Concentrated Voting Power (CVP)"
  },
  {
    "Symbol": "RFI",
    "CoinName": "reflect.finance",
    "FullName": "reflect.finance (RFI)"
  },
  {
    "Symbol": "SCRT",
    "CoinName": "Secret",
    "FullName": "Secret (SCRT)"
  },
  {
    "Symbol": "XPT",
    "CoinName": "Cryptobuyer",
    "FullName": "Cryptobuyer (XPT)"
  },
  {
    "Symbol": "MTTCOIN",
    "CoinName": "Money of Tommorow, Today",
    "FullName": "Money of Tommorow, Today (MTTCOIN)"
  },
  {
    "Symbol": "BRG",
    "CoinName": "Bridge Oracle",
    "FullName": "Bridge Oracle (BRG)"
  },
  {
    "Symbol": "RDN",
    "CoinName": "Raiden Network Token",
    "FullName": "Raiden Network Token (RDN)"
  },
  {
    "Symbol": "XDNA",
    "CoinName": "XDNA",
    "FullName": "XDNA (XDNA)"
  },
  {
    "Symbol": "INO",
    "CoinName": "Ino Coin",
    "FullName": "Ino Coin (INO)"
  },
  {
    "Symbol": "DEFLCT",
    "CoinName": "Deflect",
    "FullName": "Deflect (DEFLCT)"
  },
  {
    "Symbol": "TIGER",
    "CoinName": "TigerCash",
    "FullName": "TigerCash (TIGER)"
  },
  {
    "Symbol": "GPT",
    "CoinName": "Grace Period Token",
    "FullName": "Grace Period Token (GPT)"
  },
  {
    "Symbol": "TCH",
    "CoinName": "Thorecash",
    "FullName": "Thorecash (TCH)"
  },
  {
    "Symbol": "YLD",
    "CoinName": "YIELD App",
    "FullName": "YIELD App (YLD)"
  },
  {
    "Symbol": "BADGER",
    "CoinName": "Badger DAO",
    "FullName": "Badger DAO (BADGER)"
  },
  {
    "Symbol": "POCKET",
    "CoinName": "XPocket",
    "FullName": "XPocket (POCKET)"
  },
  {
    "Symbol": "STOX",
    "CoinName": "Stox",
    "FullName": "Stox (STOX)"
  },
  {
    "Symbol": "OPENDAO",
    "CoinName": "OPEN Governance Token",
    "FullName": "OPEN Governance Token (OPENDAO)"
  },
  {
    "Symbol": "XCUR",
    "CoinName": "Curate",
    "FullName": "Curate (XCUR)"
  },
  {
    "Symbol": "FRA",
    "CoinName": "Findora",
    "FullName": "Findora (FRA)"
  },
  {
    "Symbol": "GZIL",
    "CoinName": "governance ZIL",
    "FullName": "governance ZIL (GZIL)"
  },
  {
    "Symbol": "NFXC",
    "CoinName": "NFX Coin",
    "FullName": "NFX Coin (NFXC)"
  },
  {
    "Symbol": "GOREC",
    "CoinName": "GoRecruit",
    "FullName": "GoRecruit (GOREC)"
  },
  {
    "Symbol": "CRYPTOE",
    "CoinName": "Cryptoenter",
    "FullName": "Cryptoenter (CRYPTOE)"
  },
  {
    "Symbol": "POND",
    "CoinName": "Marlin",
    "FullName": "Marlin (POND)"
  },
  {
    "Symbol": "MAHA",
    "CoinName": "MahaDAO",
    "FullName": "MahaDAO (MAHA)"
  },
  {
    "Symbol": "2BASED",
    "CoinName": "2Based Finance",
    "FullName": "2Based Finance (2BASED)"
  },
  {
    "Symbol": "JUV",
    "CoinName": "Juventus Fan Token",
    "FullName": "Juventus Fan Token (JUV)"
  },
  {
    "Symbol": "SWINGBY",
    "CoinName": "Swingby",
    "FullName": "Swingby (SWINGBY)"
  },
  {
    "Symbol": "BVND",
    "CoinName": "Binance VND",
    "FullName": "Binance VND (BVND)"
  },
  {
    "Symbol": "SORA",
    "CoinName": "Sora Validator Token",
    "FullName": "Sora Validator Token (SORA)"
  },
  {
    "Symbol": "VALORBIT",
    "CoinName": "Valorbit",
    "FullName": "Valorbit (VALORBIT)"
  },
  {
    "Symbol": "KVNT",
    "CoinName": "KVANT",
    "FullName": "KVANT (KVNT)"
  },
  {
    "Symbol": "UNN",
    "CoinName": "UNION Protocol Governance Token",
    "FullName": "UNION Protocol Governance Token (UNN)"
  },
  {
    "Symbol": "TVK",
    "CoinName": "Terra Virtua Kolect",
    "FullName": "Terra Virtua Kolect (TVK)"
  },
  {
    "Symbol": "ADP",
    "CoinName": "Adappter Token",
    "FullName": "Adappter Token (ADP)"
  },
  {
    "Symbol": "R34P",
    "CoinName": "R34P",
    "FullName": "R34P (R34P)"
  },
  {
    "Symbol": "GRPL",
    "CoinName": "Golden Ratio Per Liquidity",
    "FullName": "Golden Ratio Per Liquidity (GRPL)"
  },
  {
    "Symbol": "GRT",
    "CoinName": "The Graph",
    "FullName": "The Graph (GRT)"
  },
  {
    "Symbol": "ASR",
    "CoinName": "AS Roma Fan Token",
    "FullName": "AS Roma Fan Token (ASR)"
  },
  {
    "Symbol": "$ANRX",
    "CoinName": "AnRKey X",
    "FullName": "AnRKey X ($ANRX)"
  },
  {
    "Symbol": "RFCTR",
    "CoinName": "Reflector.Finance",
    "FullName": "Reflector.Finance (RFCTR)"
  },
  {
    "Symbol": "YVS",
    "CoinName": "YVS.Finance",
    "FullName": "YVS.Finance (YVS)"
  },
  {
    "Symbol": "TCORE",
    "CoinName": "TornadoCORE",
    "FullName": "TornadoCORE (TCORE)"
  },
  {
    "Symbol": "NHBTC",
    "CoinName": "NEST Protocol",
    "FullName": "NEST Protocol (NHBTC)"
  },
  {
    "Symbol": "POLIS",
    "CoinName": "PolisPay",
    "FullName": "PolisPay (POLIS)"
  },
  {
    "Symbol": "MEDICO",
    "CoinName": "Mediconnect",
    "FullName": "Mediconnect (MEDICO)"
  },
  {
    "Symbol": "RLY",
    "CoinName": "Rally",
    "FullName": "Rally (RLY)"
  },
  {
    "Symbol": "DXF",
    "CoinName": "Dexfin",
    "FullName": "Dexfin (DXF)"
  },
  {
    "Symbol": "XETH-G",
    "CoinName": "xETH-G",
    "FullName": "xETH-G (XETH-G)"
  },
  {
    "Symbol": "DXD",
    "CoinName": "DXdao",
    "FullName": "DXdao (DXD)"
  },
  {
    "Symbol": "PYRK",
    "CoinName": "Pyrk",
    "FullName": "Pyrk (PYRK)"
  },
  {
    "Symbol": "WBBC",
    "CoinName": "Wibcoin",
    "FullName": "Wibcoin (WBBC)"
  },
  {
    "Symbol": "TBB",
    "CoinName": "Trade Butler Bot",
    "FullName": "Trade Butler Bot (TBB)"
  },
  {
    "Symbol": "DYP",
    "CoinName": "DeFi Yield Protocol",
    "FullName": "DeFi Yield Protocol (DYP)"
  },
  {
    "Symbol": "CHAL",
    "CoinName": "Chalice Finance",
    "FullName": "Chalice Finance (CHAL)"
  },
  {
    "Symbol": "STETH",
    "CoinName": "Staked Ether",
    "FullName": "Staked Ether (STETH)"
  },
  {
    "Symbol": "TRINI",
    "CoinName": "Trinity Network Credit",
    "FullName": "Trinity Network Credit (TRINI)"
  },
  {
    "Symbol": "TNC",
    "CoinName": "TNC Coin",
    "FullName": "TNC Coin (TNC)"
  },
  {
    "Symbol": "HNT",
    "CoinName": "Helium",
    "FullName": "Helium (HNT)"
  },
  {
    "Symbol": "REV",
    "CoinName": "Revain",
    "FullName": "Revain (REV)"
  },
  {
    "Symbol": "1INCH",
    "CoinName": "1inch",
    "FullName": "1inch (1INCH)"
  },
  {
    "Symbol": "OG",
    "CoinName": "OG Fan Token",
    "FullName": "OG Fan Token (OG)"
  },
  {
    "Symbol": "LON",
    "CoinName": "Tokenlon",
    "FullName": "Tokenlon (LON)"
  },
  {
    "Symbol": "CHX",
    "CoinName": "Own",
    "FullName": "Own (CHX)"
  },
  {
    "Symbol": "WCUSD",
    "CoinName": "Wrapped Celo Dollar",
    "FullName": "Wrapped Celo Dollar (WCUSD)"
  },
  {
    "Symbol": "B21",
    "CoinName": "B21",
    "FullName": "B21 (B21)"
  },
  {
    "Symbol": "SPDR",
    "CoinName": "SpiderDAO",
    "FullName": "SpiderDAO (SPDR)"
  },
  {
    "Symbol": "KCH",
    "CoinName": "Keep Calm and Hodl",
    "FullName": "Keep Calm and Hodl (KCH)"
  },
  {
    "Symbol": "SKEY",
    "CoinName": "SmartKey",
    "FullName": "SmartKey (SKEY)"
  },
  {
    "Symbol": "TLO",
    "CoinName": "Talleo",
    "FullName": "Talleo (TLO)"
  },
  {
    "Symbol": "PAI",
    "CoinName": "Project Pai",
    "FullName": "Project Pai (PAI)"
  },
  {
    "Symbol": "ESD",
    "CoinName": "Empty Set Dollar",
    "FullName": "Empty Set Dollar (ESD)"
  },
  {
    "Symbol": "PYLON",
    "CoinName": "Pylon Finance",
    "FullName": "Pylon Finance (PYLON)"
  },
  {
    "Symbol": "FOREVER",
    "CoinName": "Forever Coin",
    "FullName": "Forever Coin (FOREVER)"
  },
  {
    "Symbol": "AVALON",
    "CoinName": "Avalon",
    "FullName": "Avalon (AVALON)"
  },
  {
    "Symbol": "CRDT",
    "CoinName": "CRDT",
    "FullName": "CRDT (CRDT)"
  },
  {
    "Symbol": "FRAX",
    "CoinName": "Frax",
    "FullName": "Frax (FRAX)"
  },
  {
    "Symbol": "FXS",
    "CoinName": "Frax Share",
    "FullName": "Frax Share (FXS)"
  },
  {
    "Symbol": "WIFI",
    "CoinName": "Wifi Coin",
    "FullName": "Wifi Coin (WIFI)"
  },
  {
    "Symbol": "DSD",
    "CoinName": "Dynamic Set Dollar",
    "FullName": "Dynamic Set Dollar (DSD)"
  },
  {
    "Symbol": "SPI",
    "CoinName": "Shopping.io",
    "FullName": "Shopping.io (SPI)"
  },
  {
    "Symbol": "ONS",
    "CoinName": "One Share",
    "FullName": "One Share (ONS)"
  },
  {
    "Symbol": "AME",
    "CoinName": "Amepay",
    "FullName": "Amepay (AME)"
  },
  {
    "Symbol": "XED",
    "CoinName": "Exeedme",
    "FullName": "Exeedme (XED)"
  },
  {
    "Symbol": "PIS",
    "CoinName": "Polkainsure Finance",
    "FullName": "Polkainsure Finance (PIS)"
  },
  {
    "Symbol": "DGCL",
    "CoinName": "DigiCol Token",
    "FullName": "DigiCol Token (DGCL)"
  },
  {
    "Symbol": "EXMR",
    "CoinName": "EXMR FDN",
    "FullName": "EXMR FDN (EXMR)"
  },
  {
    "Symbol": "NFTX",
    "CoinName": "NFTX",
    "FullName": "NFTX (NFTX)"
  },
  {
    "Symbol": "MCP",
    "CoinName": "My Crypto Play",
    "FullName": "My Crypto Play (MCP)"
  },
  {
    "Symbol": "BAO",
    "CoinName": "Bao Finance",
    "FullName": "Bao Finance (BAO)"
  },
  {
    "Symbol": "TSD",
    "CoinName": "True Seigniorage Dollar",
    "FullName": "True Seigniorage Dollar (TSD)"
  },
  {
    "Symbol": "SAS",
    "CoinName": "Stand Share",
    "FullName": "Stand Share (SAS)"
  },
  {
    "Symbol": "MSWAP",
    "CoinName": "MoneySwap",
    "FullName": "MoneySwap (MSWAP)"
  },
  {
    "Symbol": "ZAI",
    "CoinName": "Zero Collateral Dai",
    "FullName": "Zero Collateral Dai (ZAI)"
  },
  {
    "Symbol": "KOBE",
    "CoinName": "Shabu Shabu",
    "FullName": "Shabu Shabu (KOBE)"
  },
  {
    "Symbol": "COVEROLD",
    "CoinName": " Cover Protocol (old)",
    "FullName": " Cover Protocol (old) (COVEROLD)"
  },
  {
    "Symbol": "TIFT",
    "CoinName": "True Investment Finance",
    "FullName": "True Investment Finance (TIFT)"
  },
  {
    "Symbol": "ZKS",
    "CoinName": "ZKSwap",
    "FullName": "ZKSwap (ZKS)"
  },
  {
    "Symbol": "DNS",
    "CoinName": "BitDNS",
    "FullName": "BitDNS (DNS)"
  },
  {
    "Symbol": "SBDO",
    "CoinName": "bDollar Share",
    "FullName": "bDollar Share (SBDO)"
  },
  {
    "Symbol": "FOX",
    "CoinName": "FOX Token",
    "FullName": "FOX Token (FOX)"
  },
  {
    "Symbol": "HYPE",
    "CoinName": "Hype",
    "FullName": "Hype (HYPE)"
  },
  {
    "Symbol": "LDO",
    "CoinName": "Lido DAO",
    "FullName": "Lido DAO (LDO)"
  },
  {
    "Symbol": "WHITE",
    "CoinName": "Whiteheart",
    "FullName": "Whiteheart (WHITE)"
  },
  {
    "Symbol": "DFSOCIAL",
    "CoinName": "DefiSocial",
    "FullName": "DefiSocial (DFSOCIAL)"
  },
  {
    "Symbol": "LOG",
    "CoinName": "Wood Coin",
    "FullName": "Wood Coin (LOG)"
  },
  {
    "Symbol": "HEX",
    "CoinName": "HEX",
    "FullName": "HEX (HEX)"
  },
  {
    "Symbol": "AXN",
    "CoinName": "Axion",
    "FullName": "Axion (AXN)"
  },
  {
    "Symbol": "IGI",
    "CoinName": "Igi",
    "FullName": "Igi (IGI)"
  },
  {
    "Symbol": "CKEK",
    "CoinName": "CryptoKek",
    "FullName": "CryptoKek (CKEK)"
  },
  {
    "Symbol": "FLASHST",
    "CoinName": "Flashstake",
    "FullName": "Flashstake (FLASHST)"
  },
  {
    "Symbol": "WISE",
    "CoinName": "Wise Token",
    "FullName": "Wise Token (WISE)"
  },
  {
    "Symbol": "SGR",
    "CoinName": "Sogur Currency",
    "FullName": "Sogur Currency (SGR)"
  },
  {
    "Symbol": "AVA",
    "CoinName": "Travala",
    "FullName": "Travala (AVA)"
  },
  {
    "Symbol": "ARCA",
    "CoinName": "Arca",
    "FullName": "Arca (ARCA)"
  },
  {
    "Symbol": "INX",
    "CoinName": "INX Token",
    "FullName": "INX Token (INX)"
  },
  {
    "Symbol": "COINVEST",
    "CoinName": "Coinvest",
    "FullName": "Coinvest (COINVEST)"
  },
  {
    "Symbol": "COIN",
    "CoinName": "Coin",
    "FullName": "Coin (COIN)"
  },
  {
    "Symbol": "BOND",
    "CoinName": "BarnBridge",
    "FullName": "BarnBridge (BOND)"
  },
  {
    "Symbol": "MISCOIN",
    "CoinName": "MIScoin",
    "FullName": "MIScoin (MISCOIN)"
  },
  {
    "Symbol": "MIS",
    "CoinName": "Mithril Share",
    "FullName": "Mithril Share (MIS)"
  },
  {
    "Symbol": "INF8",
    "CoinName": "Infinium-8",
    "FullName": "Infinium-8 (INF8)"
  },
  {
    "Symbol": "FORTUNE",
    "CoinName": "Fortune",
    "FullName": "Fortune (FORTUNE)"
  },
  {
    "Symbol": "GUSDT",
    "CoinName": "Global Utility Smart Digital Token",
    "FullName": "Global Utility Smart Digital Token (GUSDT)"
  },
  {
    "Symbol": "BCPT",
    "CoinName": "BlockMason Credit Protocol",
    "FullName": "BlockMason Credit Protocol (BCPT)"
  },
  {
    "Symbol": "SHACOIN",
    "CoinName": "Shacoin",
    "FullName": "Shacoin (SHACOIN)"
  },
  {
    "Symbol": "SHA",
    "CoinName": "Safe Haven",
    "FullName": "Safe Haven (SHA)"
  },
  {
    "Symbol": "XDEF2",
    "CoinName": "Xdef Finance",
    "FullName": "Xdef Finance (XDEF2)"
  },
  {
    "Symbol": "IBETH",
    "CoinName": "Interest Bearing ETH",
    "FullName": "Interest Bearing ETH (IBETH)"
  },
  {
    "Symbol": "BRI",
    "CoinName": "Baroin",
    "FullName": "Baroin (BRI)"
  },
  {
    "Symbol": "BUXCOIN",
    "CoinName": "Buxcoin",
    "FullName": "Buxcoin (BUXCOIN)"
  },
  {
    "Symbol": "FLASHC",
    "CoinName": "FLASH coin",
    "FullName": "FLASH coin (FLASHC)"
  },
  {
    "Symbol": "APECOIN",
    "CoinName": "Asia Pacific Electronic Coin",
    "FullName": "Asia Pacific Electronic Coin (APECOIN)"
  },
  {
    "Symbol": "CBK",
    "CoinName": "Cobak Token",
    "FullName": "Cobak Token (CBK)"
  },
  {
    "Symbol": "XBB",
    "CoinName": "BrickBlock",
    "FullName": "BrickBlock (XBB)"
  },
  {
    "Symbol": "DAIQ",
    "CoinName": "Daiquilibrium",
    "FullName": "Daiquilibrium (DAIQ)"
  },
  {
    "Symbol": "VKF",
    "CoinName": "VKF Platform",
    "FullName": "VKF Platform (VKF)"
  },
  {
    "Symbol": "FLR",
    "CoinName": "Spark",
    "FullName": "Spark (FLR)"
  },
  {
    "Symbol": "EAURIC",
    "CoinName": "Eauric",
    "FullName": "Eauric (EAURIC)"
  },
  {
    "Symbol": "BIZZ",
    "CoinName": "BIZZCOIN",
    "FullName": "BIZZCOIN (BIZZ)"
  },
  {
    "Symbol": "BTCAS",
    "CoinName": "BitcoinAsia",
    "FullName": "BitcoinAsia (BTCAS)"
  },
  {
    "Symbol": "GLOBAL",
    "CoinName": "GlobalCoin",
    "FullName": "GlobalCoin (GLOBAL)"
  },
  {
    "Symbol": "GLC",
    "CoinName": "GoldCoin",
    "FullName": "GoldCoin (GLC)"
  },
  {
    "Symbol": "AHT",
    "CoinName": "AhaToken",
    "FullName": "AhaToken (AHT)"
  },
  {
    "Symbol": "LUCKYB",
    "CoinName": "LuckyBlocks",
    "FullName": "LuckyBlocks (LUCKYB)"
  },
  {
    "Symbol": "BUX",
    "CoinName": "BUX",
    "FullName": "BUX (BUX)"
  },
  {
    "Symbol": "TERN.ETH",
    "CoinName": "Ternio-ERC20",
    "FullName": "Ternio-ERC20 (TERN.ETH)"
  },
  {
    "Symbol": "PHB",
    "CoinName": "Red Pulse Phoenix Binance",
    "FullName": "Red Pulse Phoenix Binance (PHB)"
  },
  {
    "Symbol": "DOOM",
    "CoinName": "10X Short Bitcoin Token",
    "FullName": "10X Short Bitcoin Token (DOOM)"
  },
  {
    "Symbol": "BNBDOOM",
    "CoinName": "10X Short BNB Token",
    "FullName": "10X Short BNB Token (BNBDOOM)"
  },
  {
    "Symbol": "BCHDOOM",
    "CoinName": "10X Short Bitcoin Cash Token",
    "FullName": "10X Short Bitcoin Cash Token (BCHDOOM)"
  },
  {
    "Symbol": "ETHDOOM",
    "CoinName": "10X Short Ethereum Token",
    "FullName": "10X Short Ethereum Token (ETHDOOM)"
  },
  {
    "Symbol": "OKBDOOM",
    "CoinName": "10X Short OKB Token",
    "FullName": "10X Short OKB Token (OKBDOOM)"
  },
  {
    "Symbol": "LTCDOOM",
    "CoinName": "10X Short Litecoin Token",
    "FullName": "10X Short Litecoin Token (LTCDOOM)"
  },
  {
    "Symbol": "QARK",
    "CoinName": "QANplatform",
    "FullName": "QANplatform (QARK)"
  },
  {
    "Symbol": "pBTC35A",
    "CoinName": "pBTC35A",
    "FullName": "pBTC35A (pBTC35A)"
  },
  {
    "Symbol": "SERO",
    "CoinName": "Super Zero",
    "FullName": "Super Zero (SERO)"
  },
  {
    "Symbol": "FOR",
    "CoinName": "ForTube",
    "FullName": "ForTube (FOR)"
  },
  {
    "Symbol": "KCS",
    "CoinName": "KuCoin Token",
    "FullName": "KuCoin Token (KCS)"
  },
  {
    "Symbol": "HTR",
    "CoinName": "Hathor",
    "FullName": "Hathor (HTR)"
  },
  {
    "Symbol": "HGOLD",
    "CoinName": "HollyGold",
    "FullName": "HollyGold (HGOLD)"
  },
  {
    "Symbol": "UMX",
    "CoinName": "UniMex Network",
    "FullName": "UniMex Network (UMX)"
  },
  {
    "Symbol": "DSTR",
    "CoinName": "Dynamic Supply Tracker",
    "FullName": "Dynamic Supply Tracker (DSTR)"
  },
  {
    "Symbol": "RBC",
    "CoinName": "Roti Bank Coin",
    "FullName": "Roti Bank Coin (RBC)"
  },
  {
    "Symbol": "UNIDX",
    "CoinName": "UniDex",
    "FullName": "UniDex (UNIDX)"
  },
  {
    "Symbol": "XLMDOWN",
    "CoinName": "XLMDOWN",
    "FullName": "XLMDOWN (XLMDOWN)"
  },
  {
    "Symbol": "XLMUP",
    "CoinName": "XLMUP",
    "FullName": "XLMUP (XLMUP)"
  },
  {
    "Symbol": "SUSHIDOWN",
    "CoinName": "SUSHIDOWN",
    "FullName": "SUSHIDOWN (SUSHIDOWN)"
  },
  {
    "Symbol": "SUSHIUP",
    "CoinName": "SUSHIUP",
    "FullName": "SUSHIUP (SUSHIUP)"
  },
  {
    "Symbol": "AAVEDOWN",
    "CoinName": "AAVEDOWN",
    "FullName": "AAVEDOWN (AAVEDOWN)"
  },
  {
    "Symbol": "AAVEUP",
    "CoinName": "AAVEUP",
    "FullName": "AAVEUP (AAVEUP)"
  },
  {
    "Symbol": "XLMBULL",
    "CoinName": "3X Long Stellar Token",
    "FullName": "3X Long Stellar Token (XLMBULL)"
  },
  {
    "Symbol": "XLMBEAR",
    "CoinName": "3X Short Stellar Token",
    "FullName": "3X Short Stellar Token (XLMBEAR)"
  },
  {
    "Symbol": "THETAHALF",
    "CoinName": "0.5X Long Theta Network Token",
    "FullName": "0.5X Long Theta Network Token (THETAHALF)"
  },
  {
    "Symbol": "BTX",
    "CoinName": "BitCore",
    "FullName": "BitCore (BTX)"
  },
  {
    "Symbol": "MINDEX",
    "CoinName": "Mindexcoin",
    "FullName": "Mindexcoin (MINDEX)"
  },
  {
    "Symbol": "MIC",
    "CoinName": "Mithril Cash",
    "FullName": "Mithril Cash (MIC)"
  },
  {
    "Symbol": "STBU",
    "CoinName": "Stobox Token",
    "FullName": "Stobox Token (STBU)"
  },
  {
    "Symbol": "CUDOS",
    "CoinName": "Cudos",
    "FullName": "Cudos (CUDOS)"
  },
  {
    "Symbol": "CONUN",
    "CoinName": "CONUN",
    "FullName": "CONUN (CONUN)"
  },
  {
    "Symbol": "PAYCON",
    "CoinName": "Paycon",
    "FullName": "Paycon (PAYCON)"
  },
  {
    "Symbol": "STARP",
    "CoinName": "Star Pacific Coin",
    "FullName": "Star Pacific Coin (STARP)"
  },
  {
    "Symbol": "QKC",
    "CoinName": "QuarkChain",
    "FullName": "QuarkChain (QKC)"
  },
  {
    "Symbol": "RISE",
    "CoinName": "Rise",
    "FullName": "Rise (RISE)"
  },
  {
    "Symbol": "BTCST",
    "CoinName": "BTC Standard Hashrate Token",
    "FullName": "BTC Standard Hashrate Token (BTCST)"
  },
  {
    "Symbol": "BAGS",
    "CoinName": "Basis Gold Share",
    "FullName": "Basis Gold Share (BAGS)"
  },
  {
    "Symbol": "PROS",
    "CoinName": "Prosper",
    "FullName": "Prosper (PROS)"
  },
  {
    "Symbol": "KCAL",
    "CoinName": "Phantasma Energy",
    "FullName": "Phantasma Energy (KCAL)"
  },
  {
    "Symbol": "PUSD",
    "CoinName": "PegsUSD",
    "FullName": "PegsUSD (PUSD)"
  },
  {
    "Symbol": "GERA",
    "CoinName": "Gera Coin",
    "FullName": "Gera Coin (GERA)"
  },
  {
    "Symbol": "REEF",
    "CoinName": "Reef",
    "FullName": "Reef (REEF)"
  },
  {
    "Symbol": "POOLZ",
    "CoinName": "Poolz Finance",
    "FullName": "Poolz Finance (POOLZ)"
  },
  {
    "Symbol": "HELMET",
    "CoinName": "Helmet Insure",
    "FullName": "Helmet Insure (HELMET)"
  },
  {
    "Symbol": "COMBO",
    "CoinName": "Furucombo",
    "FullName": "Furucombo (COMBO)"
  },
  {
    "Symbol": "YFTE",
    "CoinName": "YFTether",
    "FullName": "YFTether (YFTE)"
  },
  {
    "Symbol": "TPAY",
    "CoinName": "TokenPay",
    "FullName": "TokenPay (TPAY)"
  },
  {
    "Symbol": "XHV",
    "CoinName": "Haven Protocol",
    "FullName": "Haven Protocol (XHV)"
  },
  {
    "Symbol": "FCT",
    "CoinName": "Factom",
    "FullName": "Factom (FCT)"
  },
  {
    "Symbol": "ETZ",
    "CoinName": "EtherZero",
    "FullName": "EtherZero (ETZ)"
  },
  {
    "Symbol": "SOUL",
    "CoinName": "Phantasma",
    "FullName": "Phantasma (SOUL)"
  },
  {
    "Symbol": "COVER",
    "CoinName": "Cover Protocol",
    "FullName": "Cover Protocol (COVER)"
  },
  {
    "Symbol": "OKT",
    "CoinName": "OKExChain",
    "FullName": "OKExChain (OKT)"
  },
  {
    "Symbol": "VRX",
    "CoinName": "Verox",
    "FullName": "Verox (VRX)"
  },
  {
    "Symbol": "GLCH",
    "CoinName": "Glitch",
    "FullName": "Glitch (GLCH)"
  },
  {
    "Symbol": "ARTH",
    "CoinName": "ARTH",
    "FullName": "ARTH (ARTH)"
  },
  {
    "Symbol": "ARIA20",
    "CoinName": "Arianee",
    "FullName": "Arianee (ARIA20)"
  },
  {
    "Symbol": "SBS",
    "CoinName": "StaysBASE",
    "FullName": "StaysBASE (SBS)"
  },
  {
    "Symbol": "ROYA",
    "CoinName": "Royale",
    "FullName": "Royale (ROYA)"
  },
  {
    "Symbol": "TRU",
    "CoinName": "TrueFi",
    "FullName": "TrueFi (TRU)"
  },
  {
    "Symbol": "RIGEL",
    "CoinName": "Rigel Finance",
    "FullName": "Rigel Finance (RIGEL)"
  },
  {
    "Symbol": "NDX",
    "CoinName": "Indexed Finance",
    "FullName": "Indexed Finance (NDX)"
  },
  {
    "Symbol": "PEGS",
    "CoinName": "PegShares",
    "FullName": "PegShares (PEGS)"
  },
  {
    "Symbol": "BCHA",
    "CoinName": "Bitcoin ABC",
    "FullName": "Bitcoin ABC (BCHA)"
  },
  {
    "Symbol": "CSX",
    "CoinName": "Coinstox",
    "FullName": "Coinstox (CSX)"
  },
  {
    "Symbol": "LKR",
    "CoinName": "Lokr",
    "FullName": "Lokr (LKR)"
  },
  {
    "Symbol": "DUCKD",
    "CoinName": "DuckDuckCoin",
    "FullName": "DuckDuckCoin (DUCKD)"
  },
  {
    "Symbol": "DDIM",
    "CoinName": "DuckDaoDime",
    "FullName": "DuckDaoDime (DDIM)"
  },
  {
    "Symbol": "DUCK",
    "CoinName": "DLP Duck Token",
    "FullName": "DLP Duck Token (DUCK)"
  },
  {
    "Symbol": "ROUTE",
    "CoinName": "Router Protocol",
    "FullName": "Router Protocol (ROUTE)"
  },
  {
    "Symbol": "YFO",
    "CoinName": "YFIONE",
    "FullName": "YFIONE (YFO)"
  },
  {
    "Symbol": "DEFI5",
    "CoinName": "DEFI Top 5 Tokens Index",
    "FullName": "DEFI Top 5 Tokens Index (DEFI5)"
  },
  {
    "Symbol": "CURRY",
    "CoinName": "CurrySwap",
    "FullName": "CurrySwap (CURRY)"
  },
  {
    "Symbol": "USDFL",
    "CoinName": "USDFreeLiquidity",
    "FullName": "USDFreeLiquidity (USDFL)"
  },
  {
    "Symbol": "FL",
    "CoinName": "Freeliquid",
    "FullName": "Freeliquid (FL)"
  },
  {
    "Symbol": "XSGD",
    "CoinName": "XSGD",
    "FullName": "XSGD (XSGD)"
  },
  {
    "Symbol": "NGM",
    "CoinName": "e-Money",
    "FullName": "e-Money (NGM)"
  },
  {
    "Symbol": "KSP",
    "CoinName": "KlaySwap Protocol",
    "FullName": "KlaySwap Protocol (KSP)"
  },
  {
    "Symbol": "KOIN",
    "CoinName": "Koinos",
    "FullName": "Koinos (KOIN)"
  },
  {
    "Symbol": "NTB",
    "CoinName": "TokenAsset",
    "FullName": "TokenAsset (NTB)"
  },
  {
    "Symbol": "INFI",
    "CoinName": "Insured Finance",
    "FullName": "Insured Finance (INFI)"
  },
  {
    "Symbol": "BSGS",
    "CoinName": "Basis Gold Share",
    "FullName": "Basis Gold Share (BSGS)"
  },
  {
    "Symbol": "NORD",
    "CoinName": "Nord Finance",
    "FullName": "Nord Finance (NORD)"
  },
  {
    "Symbol": "NIF",
    "CoinName": "Unifty",
    "FullName": "Unifty (NIF)"
  },
  {
    "Symbol": "GFARM2",
    "CoinName": "Gains V2",
    "FullName": "Gains V2 (GFARM2)"
  },
  {
    "Symbol": "HYDRA",
    "CoinName": "Hydra",
    "FullName": "Hydra (HYDRA)"
  },
  {
    "Symbol": "ELX",
    "CoinName": "Energy Ledger",
    "FullName": "Energy Ledger (ELX)"
  },
  {
    "Symbol": "SPC.QRC",
    "CoinName": "SpaceChain (QRC-20)",
    "FullName": "SpaceChain (QRC-20) (SPC.QRC)"
  },
  {
    "Symbol": "SPC",
    "CoinName": "SpaceChain (ERC-20)",
    "FullName": "SpaceChain (ERC-20) (SPC)"
  },
  {
    "Symbol": "STX",
    "CoinName": "Stacks",
    "FullName": "Stacks (STX)"
  },
  {
    "Symbol": "WAN",
    "CoinName": "Wanchain",
    "FullName": "Wanchain (WAN)"
  },
  {
    "Symbol": "MASS",
    "CoinName": "MASS",
    "FullName": "MASS (MASS)"
  },
  {
    "Symbol": "GXC",
    "CoinName": "GXChain",
    "FullName": "GXChain (GXC)"
  },
  {
    "Symbol": "CLOAK",
    "CoinName": "CloakCoin",
    "FullName": "CloakCoin (CLOAK)"
  },
  {
    "Symbol": "BCD",
    "CoinName": "Bitcoin Diamond",
    "FullName": "Bitcoin Diamond (BCD)"
  },
  {
    "Symbol": "PI",
    "CoinName": "PCHAIN",
    "FullName": "PCHAIN (PI)"
  },
  {
    "Symbol": "BITF",
    "CoinName": "Bit Financial",
    "FullName": "Bit Financial (BITF)"
  },
  {
    "Symbol": "BFC",
    "CoinName": "Bifrost",
    "FullName": "Bifrost (BFC)"
  },
  {
    "Symbol": "PHOON",
    "CoinName": "Typhoon Cash",
    "FullName": "Typhoon Cash (PHOON)"
  },
  {
    "Symbol": "CVR",
    "CoinName": "Polkacover",
    "FullName": "Polkacover (CVR)"
  },
  {
    "Symbol": "CAVO",
    "CoinName": "Excavo Finance",
    "FullName": "Excavo Finance (CAVO)"
  },
  {
    "Symbol": "UNDG",
    "CoinName": "UniDexGas",
    "FullName": "UniDexGas (UNDG)"
  },
  {
    "Symbol": "CRC",
    "CoinName": "CryCash",
    "FullName": "CryCash (CRC)"
  },
  {
    "Symbol": "CROWD",
    "CoinName": "CrowdCoin",
    "FullName": "CrowdCoin (CROWD)"
  },
  {
    "Symbol": "CC10",
    "CoinName": "Cryptocurrency Top 10 Tokens Index",
    "FullName": "Cryptocurrency Top 10 Tokens Index (CC10)"
  },
  {
    "Symbol": "MDX",
    "CoinName": "Mandala Exchange Token",
    "FullName": "Mandala Exchange Token (MDX)"
  },
  {
    "Symbol": "ARMOR",
    "CoinName": "ARMOR",
    "FullName": "ARMOR (ARMOR)"
  },
  {
    "Symbol": "ARNXM",
    "CoinName": "Armor NXM",
    "FullName": "Armor NXM (ARNXM)"
  },
  {
    "Symbol": "SNOW",
    "CoinName": "Snowswap",
    "FullName": "Snowswap (SNOW)"
  },
  {
    "Symbol": "WDC",
    "CoinName": "WorldCoin",
    "FullName": "WorldCoin (WDC)"
  },
  {
    "Symbol": "DIGG",
    "CoinName": "DIGG",
    "FullName": "DIGG (DIGG)"
  },
  {
    "Symbol": "BDT",
    "CoinName": "Block Duelers",
    "FullName": "Block Duelers (BDT)"
  },
  {
    "Symbol": "AREN",
    "CoinName": "Arenon",
    "FullName": "Arenon (AREN)"
  },
  {
    "Symbol": "BTNYX",
    "CoinName": "BitOnyx Token",
    "FullName": "BitOnyx Token (BTNYX)"
  },
  {
    "Symbol": "PBR",
    "CoinName": "PolkaBridge",
    "FullName": "PolkaBridge (PBR)"
  },
  {
    "Symbol": "FEY",
    "CoinName": "Feyorra",
    "FullName": "Feyorra (FEY)"
  },
  {
    "Symbol": "HH",
    "CoinName": "Holyheld",
    "FullName": "Holyheld (HH)"
  },
  {
    "Symbol": "ARE",
    "CoinName": "Aurei",
    "FullName": "Aurei (ARE)"
  },
  {
    "Symbol": "XCF",
    "CoinName": "Cenfura Token",
    "FullName": "Cenfura Token (XCF)"
  },
  {
    "Symbol": "DBUND",
    "CoinName": "DarkBundles",
    "FullName": "DarkBundles (DBUND)"
  },
  {
    "Symbol": "DOGY",
    "CoinName": "DogeYield",
    "FullName": "DogeYield (DOGY)"
  },
  {
    "Symbol": "NC",
    "CoinName": "Nayuta Coin",
    "FullName": "Nayuta Coin (NC)"
  },
  {
    "Symbol": "R3FI",
    "CoinName": "r3fi.finance",
    "FullName": "r3fi.finance (R3FI)"
  },
  {
    "Symbol": "EDC",
    "CoinName": "EDC Blockchain",
    "FullName": "EDC Blockchain (EDC)"
  },
  {
    "Symbol": "PAID",
    "CoinName": "PAID Network",
    "FullName": "PAID Network (PAID)"
  },
  {
    "Symbol": "TROP",
    "CoinName": "Interop",
    "FullName": "Interop (TROP)"
  },
  {
    "Symbol": "STN",
    "CoinName": "Sting",
    "FullName": "Sting (STN)"
  },
  {
    "Symbol": "POC",
    "CoinName": "POC Blockchain",
    "FullName": "POC Blockchain (POC)"
  },
  {
    "Symbol": "AVT",
    "CoinName": "Aventus",
    "FullName": "Aventus (AVT)"
  },
  {
    "Symbol": "NAWA",
    "CoinName": "Narwhale.finance",
    "FullName": "Narwhale.finance (NAWA)"
  },
  {
    "Symbol": "ZZZV2",
    "CoinName": "zzz.finance v2",
    "FullName": "zzz.finance v2 (ZZZV2)"
  },
  {
    "Symbol": "SIN",
    "CoinName": "SINOVATE",
    "FullName": "SINOVATE (SIN)"
  },
  {
    "Symbol": "XUSD",
    "CoinName": "XUSD Stable",
    "FullName": "XUSD Stable (XUSD)"
  },
  {
    "Symbol": "YPIE",
    "CoinName": "PieDAO Yearn Ecosystem Pie",
    "FullName": "PieDAO Yearn Ecosystem Pie (YPIE)"
  },
  {
    "Symbol": "EOX",
    "CoinName": "EXTRA ORDINARY",
    "FullName": "EXTRA ORDINARY (EOX)"
  },
  {
    "Symbol": "LMY",
    "CoinName": "Lunch Money",
    "FullName": "Lunch Money (LMY)"
  },
  {
    "Symbol": "QFI",
    "CoinName": "QFinance",
    "FullName": "QFinance (QFI)"
  },
  {
    "Symbol": "YFDAI",
    "CoinName": "YfDAI.finance",
    "FullName": "YfDAI.finance (YFDAI)"
  },
  {
    "Symbol": "LOOT",
    "CoinName": "NFTLootBox",
    "FullName": "NFTLootBox (LOOT)"
  },
  {
    "Symbol": "MLN",
    "CoinName": "Enzyme",
    "FullName": "Enzyme (MLN)"
  },
  {
    "Symbol": "BU",
    "CoinName": "BUMO",
    "FullName": "BUMO (BU)"
  },
  {
    "Symbol": "NAX",
    "CoinName": "NextDAO",
    "FullName": "NextDAO (NAX)"
  },
  {
    "Symbol": "BIXB",
    "CoinName": "BIXBCOIN",
    "FullName": "BIXBCOIN (BIXB)"
  },
  {
    "Symbol": "XFUND",
    "CoinName": "xFund",
    "FullName": "xFund (XFUND)"
  },
  {
    "Symbol": "TKMN",
    "CoinName": "Tokemon",
    "FullName": "Tokemon (TKMN)"
  },
  {
    "Symbol": "WSCRT",
    "CoinName": "Secret (ERC20)",
    "FullName": "Secret (ERC20) (WSCRT)"
  },
  {
    "Symbol": "U8D",
    "CoinName": "Universal Dollar",
    "FullName": "Universal Dollar (U8D)"
  },
  {
    "Symbol": "PGU",
    "CoinName": "Polyient Games Unity",
    "FullName": "Polyient Games Unity (PGU)"
  },
  {
    "Symbol": "FAMILY",
    "CoinName": "The Bitcoin Family",
    "FullName": "The Bitcoin Family (FAMILY)"
  },
  {
    "Symbol": "KHM",
    "CoinName": "Kohima",
    "FullName": "Kohima (KHM)"
  },
  {
    "Symbol": "TONE",
    "CoinName": "TE-FOOD",
    "FullName": "TE-FOOD (TONE)"
  },
  {
    "Symbol": "OPIUM",
    "CoinName": "Opium",
    "FullName": "Opium (OPIUM)"
  },
  {
    "Symbol": "RBIS",
    "CoinName": "ArbiSmart",
    "FullName": "ArbiSmart (RBIS)"
  },
  {
    "Symbol": "GASG",
    "CoinName": "Gasgains",
    "FullName": "Gasgains (GASG)"
  },
  {
    "Symbol": "LDFI",
    "CoinName": "LenDeFi Token",
    "FullName": "LenDeFi Token (LDFI)"
  },
  {
    "Symbol": "KBTC",
    "CoinName": "Klondike BTC",
    "FullName": "Klondike BTC (KBTC)"
  },
  {
    "Symbol": "KLON",
    "CoinName": "Klondike Finance",
    "FullName": "Klondike Finance (KLON)"
  },
  {
    "Symbol": "KBOND",
    "CoinName": "Klondike Bond",
    "FullName": "Klondike Bond (KBOND)"
  },
  {
    "Symbol": "CRPT",
    "CoinName": "Crypterium",
    "FullName": "Crypterium (CRPT)"
  },
  {
    "Symbol": "FLOWP",
    "CoinName": "Flow Protocol",
    "FullName": "Flow Protocol (FLOWP)"
  },
  {
    "Symbol": "FLOW",
    "CoinName": "Flow - Dapper Labs",
    "FullName": "Flow - Dapper Labs (FLOW)"
  },
  {
    "Symbol": "BETH",
    "CoinName": "Beacon ETH",
    "FullName": "Beacon ETH (BETH)"
  },
  {
    "Symbol": "VBX",
    "CoinName": "VIBEXXX",
    "FullName": "VIBEXXX (VBX)"
  },
  {
    "Symbol": "TMCN",
    "CoinName": "TimeCoinProtocol",
    "FullName": "TimeCoinProtocol (TMCN)"
  },
  {
    "Symbol": "YOP",
    "CoinName": "Yield Optimization Platform & Protocol",
    "FullName": "Yield Optimization Platform & Protocol (YOP)"
  },
  {
    "Symbol": "SWFTC",
    "CoinName": "SWFTCoin",
    "FullName": "SWFTCoin (SWFTC)"
  },
  {
    "Symbol": "SGOLD",
    "CoinName": "SpaceGold",
    "FullName": "SpaceGold (SGOLD)"
  },
  {
    "Symbol": "XLAB",
    "CoinName": "Xceltoken Plus",
    "FullName": "Xceltoken Plus (XLAB)"
  },
  {
    "Symbol": "ALH",
    "CoinName": "AlloHash",
    "FullName": "AlloHash (ALH)"
  },
  {
    "Symbol": "XWC",
    "CoinName": "WhiteCoin",
    "FullName": "WhiteCoin (XWC)"
  },
  {
    "Symbol": "SYS",
    "CoinName": "SysCoin",
    "FullName": "SysCoin (SYS)"
  },
  {
    "Symbol": "SMART",
    "CoinName": "SmartCash",
    "FullName": "SmartCash (SMART)"
  },
  {
    "Symbol": "LITHIUM",
    "CoinName": "Lithium",
    "FullName": "Lithium (LITHIUM)"
  },
  {
    "Symbol": "NULS",
    "CoinName": "Nuls",
    "FullName": "Nuls (NULS)"
  },
  {
    "Symbol": "MOAC",
    "CoinName": "MOAC",
    "FullName": "MOAC (MOAC)"
  },
  {
    "Symbol": "HC",
    "CoinName": "HyperCash",
    "FullName": "HyperCash (HC)"
  },
  {
    "Symbol": "GRS",
    "CoinName": "Groestlcoin",
    "FullName": "Groestlcoin (GRS)"
  },
  {
    "Symbol": "GRIN",
    "CoinName": "Grin",
    "FullName": "Grin (GRIN)"
  },
  {
    "Symbol": "GAME",
    "CoinName": "Gamecredits",
    "FullName": "Gamecredits (GAME)"
  },
  {
    "Symbol": "BTM",
    "CoinName": "Bytom",
    "FullName": "Bytom (BTM)"
  },
  {
    "Symbol": "AE",
    "CoinName": "Aeternity",
    "FullName": "Aeternity (AE)"
  },
  {
    "Symbol": "VAL",
    "CoinName": "Validity",
    "FullName": "Validity (VAL)"
  },
  {
    "Symbol": "BONDED",
    "CoinName": "Bonded Finance",
    "FullName": "Bonded Finance (BONDED)"
  },
  {
    "Symbol": "TENT",
    "CoinName": "TENT",
    "FullName": "TENT (TENT)"
  },
  {
    "Symbol": "DNA",
    "CoinName": "Metaverse",
    "FullName": "Metaverse (DNA)"
  },
  {
    "Symbol": "MYCE",
    "CoinName": "Mycelium Token",
    "FullName": "Mycelium Token (MYCE)"
  },
  {
    "Symbol": "MT",
    "CoinName": "MyToken",
    "FullName": "MyToken (MT)"
  },
  {
    "Symbol": "INFINI",
    "CoinName": "Infinity Economics",
    "FullName": "Infinity Economics (INFINI)"
  },
  {
    "Symbol": "XIN",
    "CoinName": "Mixin",
    "FullName": "Mixin (XIN)"
  },
  {
    "Symbol": "SOLA",
    "CoinName": "Sola",
    "FullName": "Sola (SOLA)"
  },
  {
    "Symbol": "BNIX",
    "CoinName": "BNIX Token",
    "FullName": "BNIX Token (BNIX)"
  },
  {
    "Symbol": "GRON",
    "CoinName": "Gron Digital",
    "FullName": "Gron Digital (GRON)"
  },
  {
    "Symbol": "YPRO",
    "CoinName": "YPro.Finance",
    "FullName": "YPro.Finance (YPRO)"
  },
  {
    "Symbol": "IPDN",
    "CoinName": "IPDnetwork",
    "FullName": "IPDnetwork (IPDN)"
  },
  {
    "Symbol": "I9C",
    "CoinName": "i9 Coin",
    "FullName": "i9 Coin (I9C)"
  },
  {
    "Symbol": "GRO",
    "CoinName": "GROWTH DeFi",
    "FullName": "GROWTH DeFi (GRO)"
  },
  {
    "Symbol": "EFT",
    "CoinName": "EasyFeedback",
    "FullName": "EasyFeedback (EFT)"
  },
  {
    "Symbol": "IDAC",
    "CoinName": "IDAC",
    "FullName": "IDAC (IDAC)"
  },
  {
    "Symbol": "RAINC",
    "CoinName": "RainCheck",
    "FullName": "RainCheck (RAINC)"
  },
  {
    "Symbol": "HAI",
    "CoinName": "Hacken Token",
    "FullName": "Hacken Token (HAI)"
  },
  {
    "Symbol": "CLUB",
    "CoinName": "ClubCoin",
    "FullName": "ClubCoin (CLUB)"
  },
  {
    "Symbol": "AERGO",
    "CoinName": "AERGO",
    "FullName": "AERGO (AERGO)"
  },
  {
    "Symbol": "AIBB",
    "CoinName": "AiBB",
    "FullName": "AiBB (AIBB)"
  },
  {
    "Symbol": "BCDN",
    "CoinName": "BlockCDN",
    "FullName": "BlockCDN (BCDN)"
  },
  {
    "Symbol": "BOE",
    "CoinName": "Bodhi",
    "FullName": "Bodhi (BOE)"
  },
  {
    "Symbol": "CAR",
    "CoinName": "CarBlock",
    "FullName": "CarBlock (CAR)"
  },
  {
    "Symbol": "CBRT",
    "CoinName": "Cybereits Token",
    "FullName": "Cybereits Token (CBRT)"
  },
  {
    "Symbol": "CCT",
    "CoinName": "Crystal Clear Token",
    "FullName": "Crystal Clear Token (CCT)"
  },
  {
    "Symbol": "CDX",
    "CoinName": "CDX Network",
    "FullName": "CDX Network (CDX)"
  },
  {
    "Symbol": "CMM",
    "CoinName": "Commercium",
    "FullName": "Commercium (CMM)"
  },
  {
    "Symbol": "CRB",
    "CoinName": "Creditbit",
    "FullName": "Creditbit (CRB)"
  },
  {
    "Symbol": "CRF",
    "CoinName": "CrowdForce",
    "FullName": "CrowdForce (CRF)"
  },
  {
    "Symbol": "CYC",
    "CoinName": "ConSpiracy Coin",
    "FullName": "ConSpiracy Coin (CYC)"
  },
  {
    "Symbol": "DACC",
    "CoinName": "Decentralized Accessible Content Chain",
    "FullName": "Decentralized Accessible Content Chain (DACC)"
  },
  {
    "Symbol": "RENBTC",
    "CoinName": "renBTC",
    "FullName": "renBTC (RENBTC)"
  },
  {
    "Symbol": "DAG",
    "CoinName": "Constellation",
    "FullName": "Constellation (DAG)"
  },
  {
    "Symbol": "DGC",
    "CoinName": "Digitalcoin",
    "FullName": "Digitalcoin (DGC)"
  },
  {
    "Symbol": "EPT",
    "CoinName": "Endor Protocol Token",
    "FullName": "Endor Protocol Token (EPT)"
  },
  {
    "Symbol": "ET",
    "CoinName": "ENDO",
    "FullName": "ENDO (ET)"
  },
  {
    "Symbol": "FACE",
    "CoinName": "Faceter",
    "FullName": "Faceter (FACE)"
  },
  {
    "Symbol": "FCN",
    "CoinName": "FantomCoin",
    "FullName": "FantomCoin (FCN)"
  },
  {
    "Symbol": "HCC",
    "CoinName": "HappyCreatorCoin",
    "FullName": "HappyCreatorCoin (HCC)"
  },
  {
    "Symbol": "HORSE",
    "CoinName": "Ethorse",
    "FullName": "Ethorse (HORSE)"
  },
  {
    "Symbol": "HSC",
    "CoinName": "HashCoin",
    "FullName": "HashCoin (HSC)"
  },
  {
    "Symbol": "INS",
    "CoinName": "Insolar (Old Chain)",
    "FullName": "Insolar (Old Chain) (INS)"
  },
  {
    "Symbol": "KVT",
    "CoinName": "Kinesis Velocity Token",
    "FullName": "Kinesis Velocity Token (KVT)"
  },
  {
    "Symbol": "LTB",
    "CoinName": "Litebar",
    "FullName": "Litebar (LTB)"
  },
  {
    "Symbol": "MARS",
    "CoinName": "MarsCoin",
    "FullName": "MarsCoin (MARS)"
  },
  {
    "Symbol": "MMNXT",
    "CoinName": "MMNXT",
    "FullName": "MMNXT (MMNXT)"
  },
  {
    "Symbol": "MSDT",
    "CoinName": "Measurable Data Token",
    "FullName": "Measurable Data Token (MSDT)"
  },
  {
    "Symbol": "MXX",
    "CoinName": "Multiplier",
    "FullName": "Multiplier (MXX)"
  },
  {
    "Symbol": "NSURE",
    "CoinName": "Nsure Network",
    "FullName": "Nsure Network (NSURE)"
  },
  {
    "Symbol": "ODE",
    "CoinName": "ODEM",
    "FullName": "ODEM (ODE)"
  },
  {
    "Symbol": "PLOT",
    "CoinName": "PlotX",
    "FullName": "PlotX (PLOT)"
  },
  {
    "Symbol": "RTE",
    "CoinName": "Rate3",
    "FullName": "Rate3 (RTE)"
  },
  {
    "Symbol": "STRS",
    "CoinName": "STARS",
    "FullName": "STARS (STRS)"
  },
  {
    "Symbol": "TCT",
    "CoinName": "TokenClub",
    "FullName": "TokenClub (TCT)"
  },
  {
    "Symbol": "VEC2",
    "CoinName": "VectorCoin 2.0",
    "FullName": "VectorCoin 2.0 (VEC2)"
  },
  {
    "Symbol": "VTHO",
    "CoinName": "VeChainThor",
    "FullName": "VeChainThor (VTHO)"
  },
  {
    "Symbol": "XIOT",
    "CoinName": "Xiotri",
    "FullName": "Xiotri (XIOT)"
  },
  {
    "Symbol": "YAMV2",
    "CoinName": "YAM v2",
    "FullName": "YAM v2 (YAMV2)"
  },
  {
    "Symbol": "DCX",
    "CoinName": "DeCEX",
    "FullName": "DeCEX (DCX)"
  },
  {
    "Symbol": "NXM",
    "CoinName": "Nexus Mutual",
    "FullName": "Nexus Mutual (NXM)"
  },
  {
    "Symbol": "KWIK",
    "CoinName": "KwikSwap",
    "FullName": "KwikSwap (KWIK)"
  },
  {
    "Symbol": "CLIQ",
    "CoinName": "DefiCliq",
    "FullName": "DefiCliq (CLIQ)"
  },
  {
    "Symbol": "UOP",
    "CoinName": "Utopia Genesis Foundation",
    "FullName": "Utopia Genesis Foundation (UOP)"
  },
  {
    "Symbol": "APY",
    "CoinName": "APY.Finance",
    "FullName": "APY.Finance (APY)"
  },
  {
    "Symbol": "GOLD",
    "CoinName": "Golden Goose",
    "FullName": "Golden Goose (GOLD)"
  },
  {
    "Symbol": "XTM",
    "CoinName": "TORUM",
    "FullName": "TORUM (XTM)"
  },
  {
    "Symbol": "UMB",
    "CoinName": "Umbrella Network",
    "FullName": "Umbrella Network (UMB)"
  },
  {
    "Symbol": "SFP",
    "CoinName": "SafePal",
    "FullName": "SafePal (SFP)"
  },
  {
    "Symbol": "BXF",
    "CoinName": "BlackFort Token",
    "FullName": "BlackFort Token (BXF)"
  },
  {
    "Symbol": "MINTME",
    "CoinName": "MintMe.com Coin",
    "FullName": "MintMe.com Coin (MINTME)"
  },
  {
    "Symbol": "NMX",
    "CoinName": "Nominex Token",
    "FullName": "Nominex Token (NMX)"
  },
  {
    "Symbol": "MYID",
    "CoinName": "My Identity Coin",
    "FullName": "My Identity Coin (MYID)"
  },
  {
    "Symbol": "IDEA",
    "CoinName": "Ideaology",
    "FullName": "Ideaology (IDEA)"
  },
  {
    "Symbol": "LYXE",
    "CoinName": "LUKSO",
    "FullName": "LUKSO (LYXE)"
  },
  {
    "Symbol": "MAPS",
    "CoinName": "MAPS",
    "FullName": "MAPS (MAPS)"
  },
  {
    "Symbol": "SOL",
    "CoinName": "Solana",
    "FullName": "Solana (SOL)"
  },
  {
    "Symbol": "SX",
    "CoinName": "SportX",
    "FullName": "SportX (SX)"
  },
  {
    "Symbol": "ZZZ",
    "CoinName": "zzz.finance",
    "FullName": "zzz.finance (ZZZ)"
  },
  {
    "Symbol": "L2L",
    "CoinName": "2local",
    "FullName": "2local (L2L)"
  },
  {
    "Symbol": "B2B",
    "CoinName": "B2BX",
    "FullName": "B2BX (B2B)"
  },
  {
    "Symbol": "CARR",
    "CoinName": "Carnomaly",
    "FullName": "Carnomaly (CARR)"
  },
  {
    "Symbol": "AXNT",
    "CoinName": "Axentro",
    "FullName": "Axentro (AXNT)"
  },
  {
    "Symbol": "YFXL",
    "CoinName": "Yield Farming XL",
    "FullName": "Yield Farming XL (YFXL)"
  },
  {
    "Symbol": "IRON",
    "CoinName": "Spartan Casino",
    "FullName": "Spartan Casino (IRON)"
  },
  {
    "Symbol": "COINSL",
    "CoinName": "CoinsLoot",
    "FullName": "CoinsLoot (COINSL)"
  },
  {
    "Symbol": "WBTC",
    "CoinName": "Wrapped Bitcoin",
    "FullName": "Wrapped Bitcoin (WBTC)"
  },
  {
    "Symbol": "MDH",
    "CoinName": "Telemedicoin",
    "FullName": "Telemedicoin (MDH)"
  },
  {
    "Symbol": "WNXM",
    "CoinName": "Wrapped NXM",
    "FullName": "Wrapped NXM (WNXM)"
  },
  {
    "Symbol": "WCCX",
    "CoinName": "Wrapped Conceal",
    "FullName": "Wrapped Conceal (WCCX)"
  },
  {
    "Symbol": "JUN",
    "CoinName": "Jun \"M\" Coin",
    "FullName": "Jun \"M\" Coin (JUN)"
  },
  {
    "Symbol": "WZEC",
    "CoinName": "Wrapped Zcash",
    "FullName": "Wrapped Zcash (WZEC)"
  },
  {
    "Symbol": "WFIL",
    "CoinName": "Wrapped FIlecoin",
    "FullName": "Wrapped FIlecoin (WFIL)"
  },
  {
    "Symbol": "LIT",
    "CoinName": "Litentry",
    "FullName": "Litentry (LIT)"
  },
  {
    "Symbol": "WCELO",
    "CoinName": "Wrapped Celo",
    "FullName": "Wrapped Celo (WCELO)"
  },
  {
    "Symbol": "SEELE",
    "CoinName": "Seele",
    "FullName": "Seele (SEELE)"
  },
  {
    "Symbol": "XNS",
    "CoinName": "Insolar",
    "FullName": "Insolar (XNS)"
  },
  {
    "Symbol": "REP",
    "CoinName": "Augur",
    "FullName": "Augur (REP)"
  },
  {
    "Symbol": "CIVIT",
    "CoinName": "Civitas Protocol",
    "FullName": "Civitas Protocol (CIVIT)"
  },
  {
    "Symbol": "WORLD",
    "CoinName": "World Token",
    "FullName": "World Token (WORLD)"
  },
  {
    "Symbol": "BMI",
    "CoinName": "Bridge Mutual",
    "FullName": "Bridge Mutual (BMI)"
  },
  {
    "Symbol": "CWS",
    "CoinName": "Crowns",
    "FullName": "Crowns (CWS)"
  },
  {
    "Symbol": "VALUE",
    "CoinName": "Value Liquidity",
    "FullName": "Value Liquidity (VALUE)"
  },
  {
    "Symbol": "SAI",
    "CoinName": "SAI",
    "FullName": "SAI (SAI)"
  },
  {
    "Symbol": "COV",
    "CoinName": "Covesting",
    "FullName": "Covesting (COV)"
  },
  {
    "Symbol": "XPRT",
    "CoinName": "Persistence",
    "FullName": "Persistence (XPRT)"
  },
  {
    "Symbol": "CHR",
    "CoinName": "Chromia",
    "FullName": "Chromia (CHR)"
  },
  {
    "Symbol": "RFOX",
    "CoinName": "RedFOX Labs",
    "FullName": "RedFOX Labs (RFOX)"
  },
  {
    "Symbol": "$TRDL",
    "CoinName": "Strudel Finance",
    "FullName": "Strudel Finance ($TRDL)"
  },
  {
    "Symbol": "GUM",
    "CoinName": "Gourmet Galaxy",
    "FullName": "Gourmet Galaxy (GUM)"
  },
  {
    "Symbol": "FUSE",
    "CoinName": "Fuse Network Token",
    "FullName": "Fuse Network Token (FUSE)"
  },
  {
    "Symbol": "XNO",
    "CoinName": "Xeno Token",
    "FullName": "Xeno Token (XNO)"
  },
  {
    "Symbol": "GOGO",
    "CoinName": "GOGO Finance",
    "FullName": "GOGO Finance (GOGO)"
  },
  {
    "Symbol": "YFV",
    "CoinName": "YFValue",
    "FullName": "YFValue (YFV)"
  },
  {
    "Symbol": "COCOS",
    "CoinName": "COCOS BCX",
    "FullName": "COCOS BCX (COCOS)"
  },
  {
    "Symbol": "TRS",
    "CoinName": "TORUS Token",
    "FullName": "TORUS Token (TRS)"
  },
  {
    "Symbol": "NUX",
    "CoinName": "Peanut",
    "FullName": "Peanut (NUX)"
  },
  {
    "Symbol": "KRX",
    "CoinName": "RAVN Korrax",
    "FullName": "RAVN Korrax (KRX)"
  },
  {
    "Symbol": "REST",
    "CoinName": "Restore",
    "FullName": "Restore (REST)"
  },
  {
    "Symbol": "CARROT",
    "CoinName": "CarrotSwap",
    "FullName": "CarrotSwap (CARROT)"
  },
  {
    "Symbol": "SWPRL",
    "CoinName": "Swaprol",
    "FullName": "Swaprol (SWPRL)"
  },
  {
    "Symbol": "MTC",
    "CoinName": "MEDICAL TOKEN CURRENCY",
    "FullName": "MEDICAL TOKEN CURRENCY (MTC)"
  },
  {
    "Symbol": "GNY",
    "CoinName": "GNY",
    "FullName": "GNY (GNY)"
  },
  {
    "Symbol": "EGLD",
    "CoinName": "Elrond",
    "FullName": "Elrond (EGLD)"
  },
  {
    "Symbol": "ERD",
    "CoinName": "Elrond",
    "FullName": "Elrond (ERD)"
  },
  {
    "Symbol": "BFLY",
    "CoinName": "Butterfly Protocol",
    "FullName": "Butterfly Protocol (BFLY)"
  },
  {
    "Symbol": "ZIL",
    "CoinName": "Zilliqa",
    "FullName": "Zilliqa (ZIL)"
  },
  {
    "Symbol": "WAXP",
    "CoinName": "Worldwide Asset eXchange",
    "FullName": "Worldwide Asset eXchange (WAXP)"
  },
  {
    "Symbol": "WAVES",
    "CoinName": "Waves",
    "FullName": "Waves (WAVES)"
  },
  {
    "Symbol": "WTC",
    "CoinName": "Waltonchain",
    "FullName": "Waltonchain (WTC)"
  },
  {
    "Symbol": "VIA",
    "CoinName": "ViaCoin",
    "FullName": "ViaCoin (VIA)"
  },
  {
    "Symbol": "VTC",
    "CoinName": "Vertcoin",
    "FullName": "Vertcoin (VTC)"
  },
  {
    "Symbol": "XVG",
    "CoinName": "Verge",
    "FullName": "Verge (XVG)"
  },
  {
    "Symbol": "VET",
    "CoinName": "VeChain",
    "FullName": "VeChain (VET)"
  },
  {
    "Symbol": "UBQ",
    "CoinName": "Ubiq",
    "FullName": "Ubiq (UBQ)"
  },
  {
    "Symbol": "STEEM",
    "CoinName": "Steem",
    "FullName": "Steem (STEEM)"
  },
  {
    "Symbol": "SKY",
    "CoinName": "Skycoin",
    "FullName": "Skycoin (SKY)"
  },
  {
    "Symbol": "SIB",
    "CoinName": "SibCoin",
    "FullName": "SibCoin (SIB)"
  },
  {
    "Symbol": "SC",
    "CoinName": "Siacoin",
    "FullName": "Siacoin (SC)"
  },
  {
    "Symbol": "SHIFT",
    "CoinName": "Shift",
    "FullName": "Shift (SHIFT)"
  },
  {
    "Symbol": "SLS",
    "CoinName": "SaluS",
    "FullName": "SaluS (SLS)"
  },
  {
    "Symbol": "RDD",
    "CoinName": "Reddcoin",
    "FullName": "Reddcoin (RDD)"
  },
  {
    "Symbol": "QRK",
    "CoinName": "QuarkCoin",
    "FullName": "QuarkCoin (QRK)"
  },
  {
    "Symbol": "QTUM",
    "CoinName": "QTUM",
    "FullName": "QTUM (QTUM)"
  },
  {
    "Symbol": "POT",
    "CoinName": "PotCoin",
    "FullName": "PotCoin (POT)"
  },
  {
    "Symbol": "POA",
    "CoinName": "Poa Network",
    "FullName": "Poa Network (POA)"
  },
  {
    "Symbol": "PIVX",
    "CoinName": "Private Instant Verified Transaction",
    "FullName": "Private Instant Verified Transaction (PIVX)"
  },
  {
    "Symbol": "PPC",
    "CoinName": "PeerCoin",
    "FullName": "PeerCoin (PPC)"
  },
  {
    "Symbol": "ONT",
    "CoinName": "Ontology",
    "FullName": "Ontology (ONT)"
  },
  {
    "Symbol": "OMG",
    "CoinName": "OMG Network",
    "FullName": "OMG Network (OMG)"
  },
  {
    "Symbol": "NXT",
    "CoinName": "Nxt",
    "FullName": "Nxt (NXT)"
  },
  {
    "Symbol": "NXS",
    "CoinName": "Nexus",
    "FullName": "Nexus (NXS)"
  },
  {
    "Symbol": "NEO",
    "CoinName": "NEO",
    "FullName": "NEO (NEO)"
  },
  {
    "Symbol": "NAS",
    "CoinName": "Nebulas",
    "FullName": "Nebulas (NAS)"
  },
  {
    "Symbol": "NEBL",
    "CoinName": "Neblio",
    "FullName": "Neblio (NEBL)"
  },
  {
    "Symbol": "NAV",
    "CoinName": "NavCoin",
    "FullName": "NavCoin (NAV)"
  },
  {
    "Symbol": "NMC",
    "CoinName": "Namecoin",
    "FullName": "Namecoin (NMC)"
  },
  {
    "Symbol": "ETP",
    "CoinName": "Metaverse",
    "FullName": "Metaverse (ETP)"
  },
  {
    "Symbol": "MEC",
    "CoinName": "MegaCoin",
    "FullName": "MegaCoin (MEC)"
  },
  {
    "Symbol": "MAN",
    "CoinName": "Matrix AI Network",
    "FullName": "Matrix AI Network (MAN)"
  },
  {
    "Symbol": "GUP",
    "CoinName": "Guppy",
    "FullName": "Guppy (GUP)"
  },
  {
    "Symbol": "LSK",
    "CoinName": "Lisk",
    "FullName": "Lisk (LSK)"
  },
  {
    "Symbol": "KMD",
    "CoinName": "Komodo",
    "FullName": "Komodo (KMD)"
  },
  {
    "Symbol": "KIN",
    "CoinName": "Kin",
    "FullName": "Kin (KIN)"
  },
  {
    "Symbol": "IOST",
    "CoinName": "IOS token",
    "FullName": "IOS token (IOST)"
  },
  {
    "Symbol": "IOC",
    "CoinName": "IOCoin",
    "FullName": "IOCoin (IOC)"
  },
  {
    "Symbol": "ICX",
    "CoinName": "ICON Project",
    "FullName": "ICON Project (ICX)"
  },
  {
    "Symbol": "ZEN",
    "CoinName": "Horizen",
    "FullName": "Horizen (ZEN)"
  },
  {
    "Symbol": "HOLO",
    "CoinName": "Holo",
    "FullName": "Holo (HOLO)"
  },
  {
    "Symbol": "HPB",
    "CoinName": "High Performance Blockchain",
    "FullName": "High Performance Blockchain (HPB)"
  },
  {
    "Symbol": "NLG",
    "CoinName": "Gulden",
    "FullName": "Gulden (NLG)"
  },
  {
    "Symbol": "GO",
    "CoinName": "GoChain",
    "FullName": "GoChain (GO)"
  },
  {
    "Symbol": "FIRO",
    "CoinName": "Firo",
    "FullName": "Firo (FIRO)"
  },
  {
    "Symbol": "FTC",
    "CoinName": "FeatherCoin",
    "FullName": "FeatherCoin (FTC)"
  },
  {
    "Symbol": "FTM",
    "CoinName": "Fantom",
    "FullName": "Fantom (FTM)"
  },
  {
    "Symbol": "EXP",
    "CoinName": "Expanse",
    "FullName": "Expanse (EXP)"
  },
  {
    "Symbol": "ETC",
    "CoinName": "Ethereum Classic",
    "FullName": "Ethereum Classic (ETC)"
  },
  {
    "Symbol": "ENG",
    "CoinName": "Enigma",
    "FullName": "Enigma (ENG)"
  },
  {
    "Symbol": "ETN",
    "CoinName": "Electroneum",
    "FullName": "Electroneum (ETN)"
  },
  {
    "Symbol": "ELA",
    "CoinName": "Elastos",
    "FullName": "Elastos (ELA)"
  },
  {
    "Symbol": "EMC2",
    "CoinName": "Einsteinium",
    "FullName": "Einsteinium (EMC2)"
  },
  {
    "Symbol": "XDN",
    "CoinName": "DigitalNote",
    "FullName": "DigitalNote (XDN)"
  },
  {
    "Symbol": "DGB",
    "CoinName": "DigiByte",
    "FullName": "DigiByte (DGB)"
  },
  {
    "Symbol": "DCR",
    "CoinName": "Decred",
    "FullName": "Decred (DCR)"
  },
  {
    "Symbol": "BCN",
    "CoinName": "ByteCoin",
    "FullName": "ByteCoin (BCN)"
  },
  {
    "Symbol": "GBYTE",
    "CoinName": "Obyte",
    "FullName": "Obyte (GBYTE)"
  },
  {
    "Symbol": "BURST",
    "CoinName": "BurstCoin",
    "FullName": "BurstCoin (BURST)"
  },
  {
    "Symbol": "BLOCK",
    "CoinName": "BlockNet",
    "FullName": "BlockNet (BLOCK)"
  },
  {
    "Symbol": "BLK",
    "CoinName": "BlackCoin",
    "FullName": "BlackCoin (BLK)"
  },
  {
    "Symbol": "BTG",
    "CoinName": "Bitcoin Gold",
    "FullName": "Bitcoin Gold (BTG)"
  },
  {
    "Symbol": "AOA",
    "CoinName": "Aurora",
    "FullName": "Aurora (AOA)"
  },
  {
    "Symbol": "XAS",
    "CoinName": "Asch",
    "FullName": "Asch (XAS)"
  },
  {
    "Symbol": "ARK",
    "CoinName": "ARK",
    "FullName": "ARK (ARK)"
  },
  {
    "Symbol": "ARDR",
    "CoinName": "Ardor",
    "FullName": "Ardor (ARDR)"
  },
  {
    "Symbol": "ACT",
    "CoinName": "Achain",
    "FullName": "Achain (ACT)"
  },
  {
    "Symbol": "HLC",
    "CoinName": "HalalChain",
    "FullName": "HalalChain (HLC)"
  },
  {
    "Symbol": "MAI",
    "CoinName": "Mindsync",
    "FullName": "Mindsync (MAI)"
  },
  {
    "Symbol": "PMEER",
    "CoinName": "Qitmeer",
    "FullName": "Qitmeer (PMEER)"
  },
  {
    "Symbol": "RVN",
    "CoinName": "Ravencoin",
    "FullName": "Ravencoin (RVN)"
  },
  {
    "Symbol": "IMPULSE",
    "CoinName": "IMPULSE by FDR",
    "FullName": "IMPULSE by FDR (IMPULSE)"
  },
  {
    "Symbol": "METH",
    "CoinName": "Farming Bad",
    "FullName": "Farming Bad (METH)"
  },
  {
    "Symbol": "DVG",
    "CoinName": "DAOventures",
    "FullName": "DAOventures (DVG)"
  },
  {
    "Symbol": "CURIO",
    "CoinName": "Curio Governance",
    "FullName": "Curio Governance (CURIO)"
  },
  {
    "Symbol": "YCBF",
    "CoinName": "Yearn Coin Barter Finance",
    "FullName": "Yearn Coin Barter Finance (YCBF)"
  },
  {
    "Symbol": "ZAPP",
    "CoinName": "Zappermint",
    "FullName": "Zappermint (ZAPP)"
  },
  {
    "Symbol": "RGP",
    "CoinName": "Rigel Protocol",
    "FullName": "Rigel Protocol (RGP)"
  },
  {
    "Symbol": "ZMY",
    "CoinName": "Zoomy",
    "FullName": "Zoomy (ZMY)"
  },
  {
    "Symbol": "MP3",
    "CoinName": "MP3",
    "FullName": "MP3 (MP3)"
  },
  {
    "Symbol": "LATX",
    "CoinName": "LatiumX",
    "FullName": "LatiumX (LATX)"
  },
  {
    "Symbol": "PART",
    "CoinName": "Particl",
    "FullName": "Particl (PART)"
  },
  {
    "Symbol": "FEG",
    "CoinName": "FEG Token",
    "FullName": "FEG Token (FEG)"
  },
  {
    "Symbol": "TERN",
    "CoinName": "Ternio",
    "FullName": "Ternio (TERN)"
  },
  {
    "Symbol": "DEFLA",
    "CoinName": "Defla",
    "FullName": "Defla (DEFLA)"
  },
  {
    "Symbol": "BIN",
    "CoinName": "Buildin Token",
    "FullName": "Buildin Token (BIN)"
  },
  {
    "Symbol": "VAIOT",
    "CoinName": "VAIOT",
    "FullName": "VAIOT (VAIOT)"
  },
  {
    "Symbol": "KDA",
    "CoinName": "Kadena",
    "FullName": "Kadena (KDA)"
  },
  {
    "Symbol": "ENCRYPG",
    "CoinName": "EncrypGen",
    "FullName": "EncrypGen (ENCRYPG)"
  },
  {
    "Symbol": "ATR",
    "CoinName": "Ather",
    "FullName": "Ather (ATR)"
  },
  {
    "Symbol": "YETU",
    "CoinName": "Yetucoin",
    "FullName": "Yetucoin (YETU)"
  },
  {
    "Symbol": "ALIAS",
    "CoinName": "Alias",
    "FullName": "Alias (ALIAS)"
  },
  {
    "Symbol": "VAI",
    "CoinName": "Vai",
    "FullName": "Vai (VAI)"
  },
  {
    "Symbol": "HFI",
    "CoinName": "Holder Finance",
    "FullName": "Holder Finance (HFI)"
  },
  {
    "Symbol": "AGT",
    "CoinName": "aGifttoken",
    "FullName": "aGifttoken (AGT (1))"
  },
  {
    "Symbol": "WP",
    "CoinName": "White Pigeon",
    "FullName": "White Pigeon (WP)"
  },
  {
    "Symbol": "XGT",
    "CoinName": "Xion Finance",
    "FullName": "Xion Finance (XGT)"
  },
  {
    "Symbol": "INDEX",
    "CoinName": "Index Cooperative",
    "FullName": "Index Cooperative (INDEX)"
  },
  {
    "Symbol": "BEZ",
    "CoinName": "Bezop",
    "FullName": "Bezop (BEZ)"
  },
  {
    "Symbol": "BT",
    "CoinName": "BT.Finance",
    "FullName": "BT.Finance (BT)"
  },
  {
    "Symbol": "BUILDTEAM",
    "CoinName": "BuildTeam",
    "FullName": "BuildTeam (BUILDTEAM)"
  },
  {
    "Symbol": "AMP",
    "CoinName": "Amp",
    "FullName": "Amp (AMP)"
  },
  {
    "Symbol": "FXC",
    "CoinName": "Flexacoin",
    "FullName": "Flexacoin (FXC)"
  },
  {
    "Symbol": "3FT",
    "CoinName": "ThreeFold Token",
    "FullName": "ThreeFold Token (3FT)"
  },
  {
    "Symbol": "TFT",
    "CoinName": "The Famous Token",
    "FullName": "The Famous Token (TFT)"
  },
  {
    "Symbol": "ETH2",
    "CoinName": "Eth 2.0 Staking by Pool-X",
    "FullName": "Eth 2.0 Staking by Pool-X (ETH2)"
  },
  {
    "Symbol": "ANY",
    "CoinName": "Anyswap",
    "FullName": "Anyswap (ANY)"
  },
  {
    "Symbol": "MASQ",
    "CoinName": "MASQ",
    "FullName": "MASQ (MASQ)"
  },
  {
    "Symbol": "CTASK",
    "CoinName": "CryptoTask",
    "FullName": "CryptoTask (CTASK)"
  },
  {
    "Symbol": "SVX",
    "CoinName": "Savix",
    "FullName": "Savix (SVX)"
  },
  {
    "Symbol": "ZUSD",
    "CoinName": "Zytara dollar",
    "FullName": "Zytara dollar (ZUSD)"
  },
  {
    "Symbol": "RPT",
    "CoinName": "Rug Proof",
    "FullName": "Rug Proof (RPT)"
  },
  {
    "Symbol": "MASK",
    "CoinName": "NFTX Hashmasks Index",
    "FullName": "NFTX Hashmasks Index (MASK)"
  },
  {
    "Symbol": "GOVI",
    "CoinName": "Govi",
    "FullName": "Govi (GOVI)"
  },
  {
    "Symbol": "BETA",
    "CoinName": "BetaCoin",
    "FullName": "BetaCoin (BETA)"
  },
  {
    "Symbol": "HIVE",
    "CoinName": "Hive",
    "FullName": "Hive (HIVE)"
  },
  {
    "Symbol": "FKX",
    "CoinName": "FortKnoxster",
    "FullName": "FortKnoxster (FKX)"
  },
  {
    "Symbol": "CUR",
    "CoinName": "Curio",
    "FullName": "Curio (CUR)"
  },
  {
    "Symbol": "HARD",
    "CoinName": "Hard Protocol",
    "FullName": "Hard Protocol (HARD)"
  },
  {
    "Symbol": "STRAX",
    "CoinName": "Stratis",
    "FullName": "Stratis (STRAX)"
  },
  {
    "Symbol": "SKL",
    "CoinName": "SKALE Network",
    "FullName": "SKALE Network (SKL)"
  },
  {
    "Symbol": "BEL",
    "CoinName": "Bella Protocol",
    "FullName": "Bella Protocol (BEL)"
  },
  {
    "Symbol": "IRIS",
    "CoinName": "IRIS Network",
    "FullName": "IRIS Network (IRIS)"
  },
  {
    "Symbol": "BTS",
    "CoinName": "Bitshares",
    "FullName": "Bitshares (BTS)"
  },
  {
    "Symbol": "DERI",
    "CoinName": "Deri Protocol",
    "FullName": "Deri Protocol (DERI)"
  },
  {
    "Symbol": "KTT",
    "CoinName": "K-Tune",
    "FullName": "K-Tune (KTT)"
  },
  {
    "Symbol": "STRONG",
    "CoinName": "Strong",
    "FullName": "Strong (STRONG)"
  },
  {
    "Symbol": "AUCTION",
    "CoinName": "Auction",
    "FullName": "Auction (AUCTION)"
  },
  {
    "Symbol": "BOT",
    "CoinName": "Bounce Token",
    "FullName": "Bounce Token (BOT)"
  },
  {
    "Symbol": "OUR",
    "CoinName": "Our Pay",
    "FullName": "Our Pay (OUR)"
  },
  {
    "Symbol": "WING",
    "CoinName": "Wing Finance",
    "FullName": "Wing Finance (WING)"
  },
  {
    "Symbol": "BAKE",
    "CoinName": "BakeryTokeN",
    "FullName": "BakeryTokeN (BAKE)"
  },
  {
    "Symbol": "NEXO",
    "CoinName": "NEXO",
    "FullName": "NEXO (NEXO)"
  },
  {
    "Symbol": "MATIC",
    "CoinName": "Polygon",
    "FullName": "Polygon (MATIC)"
  },
  {
    "Symbol": "BZRX",
    "CoinName": "bZx",
    "FullName": "bZx (BZRX)"
  },
  {
    "Symbol": "SOAK",
    "CoinName": "Soak Token",
    "FullName": "Soak Token (SOAK)"
  },
  {
    "Symbol": "FILDA",
    "CoinName": "Filda",
    "FullName": "Filda (FILDA)"
  },
  {
    "Symbol": "POLA",
    "CoinName": "Polaris Share",
    "FullName": "Polaris Share (POLA)"
  },
  {
    "Symbol": "AION",
    "CoinName": "Aion",
    "FullName": "Aion (AION)"
  },
  {
    "Symbol": "FAI",
    "CoinName": "Fairum",
    "FullName": "Fairum (FAI)"
  },
  {
    "Symbol": "AXS",
    "CoinName": "Axie Infinity Shards",
    "FullName": "Axie Infinity Shards (AXS)"
  },
  {
    "Symbol": "JULD",
    "CoinName": "JulSwap",
    "FullName": "JulSwap (JULD)"
  },
  {
    "Symbol": "RENDOGE",
    "CoinName": "renDOGE",
    "FullName": "renDOGE (RENDOGE)"
  },
  {
    "Symbol": "CTC",
    "CoinName": "Creditcoin",
    "FullName": "Creditcoin (CTC)"
  }
];