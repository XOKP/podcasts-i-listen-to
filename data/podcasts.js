const podcasts = [
  {
    url:
      "https://podcasts.apple.com/us/podcast/american-history-tellers/id1313596069",
    image:
      "https://overcast.fm/art?s=ec24a12b6f9898b2561586ef0143e2e8df59909321cb7945d978141c4b832b11&w=160&u=https%3A%2F%2Fcontent.production.cdn.art19.com%2Fimages%2F28%2F64%2Ff6%2Fde%2F2864f6de-3194-4381-9629-081cf744cecf%2Fd392809bbdd2cb70122102ee273b6096314d7de7a11da60f3d6c89c424b282f30c6a61fcc4b7415ade9fca34f14b1afc06412524713c4214c0f3906bf7295dcc.jpeg",
    title: "American History Tellers"
  },
  {
    url:
      "https://podcasts.apple.com/us/podcast/build-your-saas-bootstrapping-in-2019/id1357295850",
    image:
      "https://overcast.fm/art?s=5bb7c7f9a853944cac1cc693d135cb53b41886a8a110a94126c36f6fd92900c5&w=160&u=https%3A%2F%2Fimages.transistor.fm%2Ffile%2Ftransistor%2Fimages%2Fshow%2F15%2Ffull_1521237846-artwork.jpg",
    title: "Build Your SaaS &ndash; bootstrapping in 2019"
  },
  {
    url: "https://podcasts.apple.com/us/podcast/business-wars/id1335814741",
    image:
      "https://overcast.fm/art?s=7aef4e92900b45ae4587978f80c71989d83f21a9ea0632ad1ef68f142165a830&w=160&u=https%3A%2F%2Fcontent.production.cdn.art19.com%2Fimages%2F72%2F49%2Ff7%2Fa4%2F7249f7a4-163e-443e-9d0b-c4d2133eb36c%2F28ee9ab994e1d3017649f8beb239f7f01c4c677cd3dce26ccec4a27f8c066901c8de40be841fe20e91c8ec5b8713ae3fda343671b3dbf73b9bd537cee88d7988.jpeg",
    title: "Business Wars"
  },
  {
    url: "https://podcasts.apple.com/us/podcast/codenewbie/id919219256",
    image:
      "https://overcast.fm/art?s=71ef918a2ded75b0cb19125782054cea78a1444cffddac1e54295503772f7f2d&w=160&u=http%3A%2F%2Fs3.amazonaws.com%2Fcodenewbie-assets%2Fpodcasts%2Fcodenewbie_podcast_cover_art_gradient.png",
    title: "CodeNewbie"
  },
  {
    url: "https://podcasts.apple.com/us/podcast/cold/id1441595858",
    image:
      "https://overcast.fm/art?s=8bfd2655c176eee868cbceb33e17cb4c7dddc05b4024f374062180e7d70f6f73&w=160&u=https%3A%2F%2Fcontent.production.cdn.art19.com%2Fimages%2F2c%2F80%2F3e%2F3a%2F2c803e3a-263b-4f9b-a43a-422a1cbab445%2Ff1099d0dfeb0f9a4e6ad8a7d65dbb6057b353aa2e8a570d80ba046379050e2f13e0a1216e606f4f0dbc0763db55fa3b585ea9eb606b702bbb1f4f4e5116ae668.jpeg",
    title: "Cold"
  },
  {
    url: "https://podcasts.apple.com/us/podcast/constitutional/id1254001472",
    image:
      "https://overcast.fm/art?s=bd32420ad0935702e9ddb028ce3d1faf5e69967fb5b7f8d7e3677ea554ba996c&w=160&u=https%3A%2F%2Fpodcast.posttv.com%2Fseries%2F20170724%2Ft_1500924687921_name_FINAL_WP_actual_square.jpg",
    title: "Constitutional"
  },
  {
    url: "https://podcasts.apple.com/us/podcast/dirty-john/id1272970334",
    image:
      "https://overcast.fm/art?s=5ce4c4a1f33d312a13fce0d94edeecb25988fd653615f770ebf066be61cb0428&w=160&u=https%3A%2F%2Fcontent.production.cdn.art19.com%2Fimages%2Ff5%2Fcf%2Fd8%2F37%2Ff5cfd837-6c97-4422-a573-4ea06f2b2a13%2F92560badd97d72391e87a7f98ef308a82f3f8973b0ac04d558be398f1bb06c4d0b09e982e9f7d939e7a7be6f06470d4b2f015e2211d4c4a67c73378122690d54.jpeg",
    title: "Dirty John"
  },
  {
    url: "https://podcasts.apple.com/us/podcast/the-dropout/id1449500734",
    image:
      "https://overcast.fm/art?s=49a6fd1b4583243e0cde3941f622eb659f9a5a1789f5483be4f68d35d0c2384b&w=160&u=http%3A%2F%2Fdlgie0dznny76.cloudfront.net%2Fwp-content%2Fuploads%2F2015%2F10%2F04171621%2FIcon-min.jpg",
    title: "The Dropout"
  },
  {
    url:
      "https://podcasts.apple.com/us/podcast/egghead-io-developer-chats/id1308497805",
    image:
      "https://overcast.fm/art?s=e48a1f2e131f4f7e4ab2f345cc302cab28193e34b0c3970305a70e41d052b946&w=160&u=https%3A%2F%2Fcdn.simplecast.com%2Fimages%2F2ac34cab-4949-40aa-bac7-d7e3a70f0a39%2F5c248f0e-22e7-45a2-8c91-922c49d1f322%2F3000x3000%2F1509728209artwork.jpg%3Faid%3Drss_feed",
    title: "egghead.io developer chats"
  },
  {
    url:
      "https://podcasts.apple.com/us/podcast/freakonomics-radio/id354668519",
    image:
      "https://overcast.fm/art?s=882cbeeb1520267927c507f82ac30ab689fba227312c849c3140e8c3a07c5cb4&w=160&u=https%3A%2F%2Fcontent.production.cdn.art19.com%2Fimages%2F01%2F73%2F7e%2F02%2F01737e02-609c-40c0-8cb1-6c010b5a170b%2F7300ad8b177115c141228ae24897bb5b828ba645232b5732ec43d9610a782138cd3d69d0c88f44559420c2ded82022e03600e57040740f1c7b42c93bfc06a675.jpeg",
    title: "Freakonomics Radio"
  },
  {
    url:
      "https://podcasts.apple.com/us/podcast/frontline-film-audio-track-pbs/id336934080",
    image:
      "https://overcast.fm/art?s=175f65df9329e0b06e788e4cc1f1f2507088afcde6027a8b542005fe40dc4f52&w=160&u=http%3A%2F%2Fi1.sndcdn.com%2Favatars-000527349831-l3qxaz-original.jpg",
    title: "FRONTLINE: Film Audio Track | PBS"
  },
  {
    url:
      "https://podcasts.apple.com/us/podcast/full-stack-radio/id931714873",
    image:
      "https://overcast.fm/art?s=c068312ef1eab5d8655ac45b4e0669c142b9b135d5ed93aa3250defb41dc4c25&w=160&u=https%3A%2F%2Fmedia.simplecast.com%2Fpodcast%2Fimage%2F279%2F1413649662-artwork.jpg",
    title: "Full Stack Radio"
  },
  {
    url: "https://podcasts.apple.com/us/podcast/hbr-ideacast/id152022135",
    image:
      "https://overcast.fm/art?s=9d1fd79773ad6464a3425f44cc1489a1d68b39ade1879207c530ed39dbf9c2fd&w=160&u=https%3A%2F%2Fhbr.org%2Fresources%2Fimages%2Fideacast%2F1400-hbr-ideacast-lg-3.jpg",
    title: "HBR IdeaCast"
  },
  {
    url: "https://podcasts.apple.com/us/podcast/hidden-brain/id1028908750",
    image:
      "https://overcast.fm/art?s=2215d523eea920ea2dfd417afc335015b6833dde92443d3bb04f5cf429bcda99&w=160&u=https%3A%2F%2Fmedia.npr.org%2Fassets%2Fimg%2F2018%2F08%2F03%2Fnpr_hiddenbrain_podcasttile_sq-270ab642de6948802f485c6ad1f087239ef6e324.jpg%3Fs%3D1400",
    title: "Hidden Brain"
  },
  {
    url:
      "https://podcasts.apple.com/us/podcast/how-i-built-this-with-guy-raz/id1150510297",
    image:
      "https://overcast.fm/art?s=0c8ebd3fcbbc170961e23b04fe2ff64f92101bfa0c4235b8ee40a1677b663d08&w=160&u=https%3A%2F%2Fmedia.npr.org%2Fassets%2Fimg%2F2018%2F08%2F03%2Fnpr_hibt_podcasttile_sq-98320b282169a8cea04a406530e6e7b957665b3f.jpg%3Fs%3D1400",
    title: "How I Built This with Guy Raz"
  },
  {
    url:
      "https://podcasts.apple.com/us/podcast/the-indicator-from-planet-money/id1320118593",
    image:
      "https://overcast.fm/art?s=13ce86b0ffa1887fe8870214e22261762b880232b0d1f74ac5f19047a22f5148&w=160&u=https%3A%2F%2Fmedia.npr.org%2Fassets%2Fimg%2F2018%2F08%2F03%2Fnpr_theindicatorpm_podcasttile_sq-2b1d594a6a7d6c70618924796b4ffd778e9d33a8.jpg%3Fs%3D1400",
    title: "The Indicator from Planet Money"
  },
  {
    url: "https://podcasts.apple.com/us/podcast/invisibilia/id953290300",
    image:
      "https://overcast.fm/art?s=01ef9d21bebc012173c17301dccfe8d1969f275b82f506754cbceba3d7eb9204&w=160&u=https%3A%2F%2Fmedia.npr.org%2Fassets%2Fimg%2F2018%2F08%2F03%2Fnpr_invisibilia_podcasttile_sq-1c4d3c46584f71f04dc5b913c3cb8c08c0209f66.jpg%3Fs%3D1400",
    title: "Invisibilia"
  },
  {
    url:
      "https://podcasts.apple.com/us/podcast/the-laracasts-snippet/id1059530816",
    image:
      "https://overcast.fm/art?s=105e6b6e2be55c9121a620a13dcf9ecc616baa713289bad5acac9d67e305a0fb&w=160&u=https%3A%2F%2Fmedia.simplecast.com%2Fpodcast%2Fimage%2F1486%2F1517699545-artwork.jpg",
    title: "The Laracasts Snippet"
  },
  {
    url:
      "https://podcasts.apple.com/us/podcast/laravel-news-podcast/id1051289963",
    image:
      "https://overcast.fm/art?s=732cb789de795825c2d74dcced002e910feaa5bb1d60fb422a5eea91e3d20d93&w=160&u=https%3A%2F%2Fmedia.simplecast.com%2Fpodcast%2Fimage%2F1356%2F1471538580-artwork.jpg",
    title: "Laravel News Podcast"
  },
  {
    url:
      "https://podcasts.apple.com/us/podcast/the-laravel-podcast/id653204183",
    image:
      "https://overcast.fm/art?s=25c4eaad99fdb02766b15e7e58707a8de0bb05063627cd79b5e2957957678116&w=160&u=https%3A%2F%2Fcdn.simplecast.com%2Fimages%2F700f6514-4574-436c-9181-9237e843c16a%2Ff376330e-73fc-41ee-9993-273ab896e669%2F3000x3000%2F1511814564artwork.jpg%3Faid%3Drss_feed",
    title: "The Laravel Podcast"
  },
  {
    url:
      "https://podcasts.apple.com/us/podcast/the-laravel-snippet/id1451072164",
    image:
      "https://overcast.fm/art?s=4ec3d71dd9ae73fd1e25eeb1ed27c0d59d07e7dfa150c1fb5916070d4e3f247f&w=160&u=https%3A%2F%2Fimages.transistor.fm%2Ffile%2Ftransistor%2Fimages%2Fshow%2F872%2Ffull_1548859226-artwork.jpg",
    title: "The Laravel Snippet"
  },
  {
    url:
      "https://podcasts.apple.com/us/podcast/no-plans-to-merge/id1455034944",
    image:
      "https://overcast.fm/art?s=360a5487f0e8b72d027342c46406578ae2a7bdfe6aa3f3b30928fed138202108&w=160&u=https%3A%2F%2Fcdn.simplecast.com%2Fimages%2F6232da22-dbb9-483e-9208-b2a740767729%2F5c14c978-65b9-4737-ab69-30c4ca672938%2F3000x3000%2F1551799236artwork.jpg%3Faid%3Drss_feed",
    title: "No Plans to Merge"
  },
  {
    url: "https://podcasts.apple.com/us/podcast/planet-money/id290783428",
    image:
      "https://overcast.fm/art?s=e1ead5eab7ec731b2975b6dfa71b74ed4a02df2e0aa3285ff9c48058185eb79c&w=160&u=https%3A%2F%2Fmedia.npr.org%2Fassets%2Fimg%2F2018%2F08%2F02%2Fnpr_planetmoney_podcasttile_sq-7b7fab0b52fd72826936c3dbe51cff94889797a0.jpg%3Fs%3D1400",
    title: "Planet Money"
  },
  {
    url:
      "https://podcasts.apple.com/us/podcast/radiolab-presents-more-perfect/id1117202653",
    image:
      "https://overcast.fm/art?s=116b5f89b43e85991645a861c3737778251245183e369bb998a8afff26e3cfac&w=160&u=https%3A%2F%2Fmedia2.wnyc.org%2Fi%2F1400%2F1400%2Fl%2F80%2F1%2FMorePerfect_WNYCStudios_1400.png",
    title: "Radiolab Presents: More Perfect"
  },
  {
    url: "https://podcasts.apple.com/us/podcast/react-podcast/id1341969432",
    image:
      "https://overcast.fm/art?s=265ca9e07f079330fb24c6c9ef33e1f08e96726d3176e3a92fa885e031c45d2b&w=160&u=https%3A%2F%2Fmedia.simplecast.com%2Fpodcast%2Fimage%2F6265%2F1550288890-artwork.jpg",
    title: "React Podcast"
  },
  {
    url:
      "https://podcasts.apple.com/us/podcast/revisionist-history/id1119389968",
    image:
      "https://overcast.fm/art?s=79fddaadee73cd6215aef13529e5843be4c706c31cc54bf553dd79eb29f7a915&w=160&u=https%3A%2F%2Fstatic.megaphone.fm%2Fpodcasts%2F1427a2f4-2674-11e6-a3d7-cf7ee2a2c03c%2Fimage%2Fuploads_2F1560353177555-sxxs9t8ht7e-2310281f075c6384ff9e252ff5ab26a7_2FRH%252BTile%252BArtwork.jpg",
    title: "Revisionist History"
  },
  {
    url: "https://podcasts.apple.com/us/podcast/science-vs/id1051557000",
    image:
      "https://overcast.fm/art?s=2b65a3ec5d445c2c0a9459e6b739d1693913249ca86cbb60a33f40da45d50e18&w=160&u=https%3A%2F%2Fstatic.megaphone.fm%2Fpodcasts%2Ff521b120-2c30-11e6-b5f3-63ee984ee1a4%2Fimage%2Fuploads_2F1559145548278-k02bujbgxok-5bebf6ebfa2c93a077d526de036aeac1_2F20190520_ScienceVS_ShowCover-Logo.png",
    title: "Science Vs"
  },
  {
    url: "https://podcasts.apple.com/us/podcast/serial/id917918570",
    image:
      "https://overcast.fm/art?s=b9cfa0b930cc3e022f67beba0b05057a53d6d61fb753f604b7bf061048eb61d2&w=160&u=https%3A%2F%2Fserialpodcast.org%2Fsites%2Fall%2Fmodules%2Fcustom%2Fserial%2Fimg%2Fserial-itunes-logo.png",
    title: "Serial"
  },
  {
    url: "https://podcasts.apple.com/us/podcast/shoptalk/id493890455",
    image:
      "https://overcast.fm/art?s=f636213434226cf0e43810ab2d24c90335c5439ff117f83b13e0b80b4e8529a4&w=160&u=https%3A%2F%2Fres.cloudinary.com%2Fcss-tricks%2Fimage%2Fupload%2Fv1549562952%2FShopTalk-3000_noum8w.png",
    title: "ShopTalk &raquo;"
  },
  {
    url: "https://podcasts.apple.com/us/podcast/silicon-slopes/id1262148655",
    image:
      "https://overcast.fm/art?s=ccfc885a09bd3b05076a608238533b1f6cb1c695aed06e7716e8bfcab0be664e&w=160&u=http%3A%2F%2Fstatic.libsyn.com%2Fp%2Fassets%2F2%2F5%2Ff%2F1%2F25f1c28c017b42b8%2Fsslogo.jpg",
    title: "Silicon Slopes"
  },
  {
    url: "https://podcasts.apple.com/us/podcast/slow-burn/id1315040130",
    image:
      "https://overcast.fm/art?s=f0f60a341fc719312e7dcd4c3d305baaf48c18cb8ab0e035e2ada1162db35158&w=160&u=https%3A%2F%2Fstatic.megaphone.fm%2Fpodcasts%2F86fe6492-bb2a-11e7-873d-cf56b25e8a62%2Fimage%2Fuploads_2F1532379389565-qz30ca54m1q-6110eb97cb104c6ddcd3b68545243c7e_2FSlow-Burn-S2-Podcast-Artwork-Slate-Logo.jpg",
    title: "Slow Burn"
  },
  {
    url: "https://podcasts.apple.com/us/podcast/solvable/id1463448386",
    image:
      "https://overcast.fm/art?s=72bb8cb8305b4fb9be695f61098c439d468a2979bf6979f84913f0ba812f814d&w=160&u=https%3A%2F%2Fstatic.megaphone.fm%2Fpodcasts%2F9997654a-75c3-11e9-8399-5b93ab36efad%2Fimage%2Fuploads_2F1560784420641-nhc7633n4cm-66b335ddc59bfbd84ca4d00033f1ed7f_2FSolvable%252BLogo%252B2-3.jpg",
    title: "Solvable"
  },
  {
    url: "https://podcasts.apple.com/us/podcast/startup-podcast/id913805339",
    image:
      "https://overcast.fm/art?s=c6e7e775bce92e4b0f0c63e0575185d04ebef0ebe71743ef38042f37fcfbaa41&w=160&u=https%3A%2F%2Fstatic.megaphone.fm%2Fpodcasts%2Ff23b021e-a9a3-11e5-8768-bfc7a8ea314d%2Fimage%2Fuploads_2F1517245218052-chutdg7xnlh-a4988f407d3afb297332b6e225d69283_2F20171116_StartUp-ShowCover.png",
    title: "StartUp Podcast"
  },
  {
    url:
      "https://podcasts.apple.com/us/podcast/syntax-tasty-web-development-treats/id1253186678",
    image:
      "https://overcast.fm/art?s=709ed86dab63b674fcd1aebf90a668b23832fb979e0d01ad04f13ff63820d392&w=160&u=https%3A%2F%2Fssl-static.libsyn.com%2Fp%2Fassets%2F7%2F9%2F0%2F7%2F790703531a3c8eca%2FiTunes_Artwork.png",
    title: "Syntax - Tasty Web Development Treats"
  },
  {
    url:
      "https://podcasts.apple.com/us/podcast/techmeme-ride-home/id1355212895",
    image:
      "https://overcast.fm/art?s=d96a2b0376d900ee3a180e3f79f626ee1cfd13d7bc2558a51964340a1c707e32&w=160&u=https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fanchor-generated-image-bank%2Fstaging%2Fpodcast_uploaded_nologo%2F455429%2F455429-1545064229621-c3e5c1dc61d15.jpg",
    title: "Techmeme Ride Home"
  },
  {
    url: "https://podcasts.apple.com/us/podcast/ted-radio-hour/id523121474",
    image:
      "https://overcast.fm/art?s=d197bb66cce2f499acbfcb6e04723bbceb0e617a093a20bdc5a1efab0cde4953&w=160&u=https%3A%2F%2Fmedia.npr.org%2Fassets%2Fimg%2F2018%2F08%2F03%2Fnpr_ted_podcasttile_sq-f924b1a84a189479b7555a19b030778d88ee55f5.jpg%3Fs%3D1400",
    title: "TED Radio Hour"
  },
  {
    url:
      "https://podcasts.apple.com/us/podcast/today-explained/id1346207297",
    image:
      "https://overcast.fm/art?s=dbb2e8437a202cdd2eb53db6228e3524305b66e3e2c1aef32229859bccf40737&w=160&u=https%3A%2F%2Fcontent.production.cdn.art19.com%2Fimages%2Fbb%2Fae%2F09%2F4a%2Fbbae094a-2155-4d58-982d-de9dfcfe85ca%2F8a3f7e169a75297006cc47f9e8f8f30374035eb75be667f42c10436cecc8bdfcce07e921b2f9892a0a08b72a3eb63c8f876c8f4130c7bb46ad9f43650f030dea.jpeg",
    title: "Today, Explained"
  }
];
export default podcasts;