import Head from 'next/head';
import { useState } from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';

const STRIPE_SOCIAL_MEDIA_KIT = 'https://buy.stripe.com/6oU5kC6SbdLj4CwegicMM0k';
const STRIPE_BUNDLE = 'https://buy.stripe.com/bJe7sK0tNdLjgle0pscMM0b';

const NICHES = [
  'Fitness', 'Food', 'Travel', 'Fashion', 'Tech', 'Business', 'Photography',
  'Art', 'Music', 'Gaming', 'Beauty', 'Lifestyle', 'Pets', 'Parenting',
  'DIY', 'Education', 'Finance', 'Health', 'Real Estate', 'Marketing',
  'Motivational', 'Nature',
];

const PLATFORMS = [
  { id: 'instagram', label: 'Instagram', max: 30 },
  { id: 'tiktok', label: 'TikTok', max: 8 },
  { id: 'twitter', label: 'Twitter / X', max: 5 },
  { id: 'linkedin', label: 'LinkedIn', max: 5 },
  { id: 'youtube', label: 'YouTube', max: 15 },
  { id: 'all', label: 'All Platforms', max: 30 },
];

const STYLES = [
  { id: 'popular', label: 'Popular', desc: 'High-volume hashtags (1M+ posts)' },
  { id: 'niche', label: 'Niche', desc: 'Lower competition (10K-100K)' },
  { id: 'mix', label: 'Mix', desc: 'Balanced popular + niche' },
  { id: 'trending', label: 'Trending', desc: 'Currently trending tags' },
];

// --- Hashtag Database ---
// Each niche has: popular (1M+), medium (100K-1M), niche (10K-100K), trending
const HASHTAG_DB = {
  Fitness: {
    popular: ['#fitness','#gym','#workout','#fitnessmotivation','#fit','#motivation','#bodybuilding','#training','#health','#fitfam','#lifestyle','#muscle','#gymlife','#fitspo','#healthylifestyle','#personaltrainer','#exercise','#weightlifting','#crossfit','#strong','#cardio','#gains','#fitnessmodel','#abs','#legday','#deadlift','#squats','#benchpress','#running','#yoga'],
    medium: ['#fitlife','#gymmotivation','#strengthtraining','#fitnessjourney','#homeworkout','#fitnessgirl','#fitnessaddict','#weightloss','#getfit','#trainhard','#powerlifting','#functionaltraining','#fitnesscoach','#workoutmotivation','#gymrat','#fitnessgoals','#musclebuilding','#fitnesstips','#bodytransformation','#gainz','#legworkout','#armday','#chestday','#backday','#shoulderworkout','#coretraining'],
    niche: ['#homegymsetup','#calisthenicslife','#kettlebellworkout','#resistancebandworkout','#morningworkoutroutine','#fitnessover40','#beginnerworkout','#strengthandconditioning','#mindbodyconnection','#preworkoutmeal','#postworkoutmeal','#fitnesschallenge2026','#workoutsplit','#progressiveoverload','#musclerecovery','#flexibledieting','#liftingcommunity','#naturalbodybuilding','#fitnessaccountability','#reprange','#tempotraining','#dropsets','#superset','#amrap','#emom','#hiitworkout'],
    trending: ['#75hard','#fitnesstok','#gymtok','#bulkingseason','#cuttingseason','#maingaining','#fitover50','#hybridathlete','#rucking','#coldplunge','#walkingpad','#zonesofregulation','#proteinpacked','#stepsgoal','#musclemommy','#gymdad','#gymshark','#hotgirlwalk','#cozycardiowear','#12345method'],
  },
  Food: {
    popular: ['#food','#foodie','#foodporn','#instafood','#yummy','#delicious','#foodphotography','#foodstagram','#cooking','#homemade','#foodlover','#dinner','#lunch','#breakfast','#healthyfood','#recipe','#tasty','#chef','#baking','#vegan','#foodblogger','#eat','#dessert','#pizza','#chocolate','#pasta','#sushi','#brunch','#cake','#coffee'],
    medium: ['#foodgasm','#homecooking','#mealprep','#veganfood','#glutenfree','#plantbased','#comfortfood','#seafood','#streetfood','#instayum','#recipeideas','#cookingathome','#foodiesofinstagram','#easyrecipe','#dinnerideas','#foodpics','#bakedfromscratch','#sourdough','#freshfood','#organicfood','#mealprepping','#eatingclean','#cheflife','#cookingclass','#foodstyling','#restaurantfood'],
    niche: ['#30minutemeals','#budgetmeals','#airfryerrecipes','#instantpotrecipes','#onepanmeal','#sheetpandinner','#mealprepsunday','#highproteinmeals','#dairyfreecooking','#fermentedfood','#sourdoughstarter','#homemadepasta','#farmtotable','#seasonalcooking','#castironcooking','#smokedmeat','#bbqlife','#grillmaster','#saucefromscratch','#breadbaking','#pastrymaking','#foodwaste','#zerowastecooking','#batchcooking','#freezermeals','#slowcookerrecipes'],
    trending: ['#foodtok','#asmrfood','#proteincoffee','#girldinner','#snackplate','#whatieatinaday','#viralrecipe','#dubaiChocolate','#crumblecookies','#cottagecheese','#highproteinsnack','#lunchboxideas','#dinnerroulette','#recipereview','#pantrymeals','#10minutemeals','#cookingfail','#raboratoryrecipe','#butterboard','#smashburger'],
  },
  Travel: {
    popular: ['#travel','#travelgram','#travelphotography','#nature','#wanderlust','#explore','#vacation','#adventure','#instatravel','#traveling','#trip','#holiday','#photography','#travelling','#traveler','#travelblogger','#love','#traveltheworld','#tourism','#roadtrip','#beach','#landscape','#sunset','#mountains','#europe','#asia','#paradise','#hotel','#cityscape','#backpacking'],
    medium: ['#traveladdict','#travellife','#travelholic','#beautifuldestinations','#exploretocreate','#passportready','#globetrotter','#worldtraveler','#doyoutravel','#travelcouple','#solotravel','#luxurytravel','#budgettravel','#digitalnomad','#vanlife','#traveltips','#travelguide','#travelinspo','#adventuretime','#roamtheplanet','#letsgoeverywhere','#traveldiary','#welltravelled','#seetheworld','#travelstoke','#mytravelgram'],
    niche: ['#solofemaletravel','#overlanding','#houseswap','#workaway','#slowtravel','#sustainabletravel','#offthebeatenpath','#hiddengemtravel','#culturaltravel','#ecotourism','#volunteertravel','#housesitting','#worldschooling','#travelingwithkids','#remoteworktravel','#airbnbfinds','#hostellife','#traintravel','#campervanliving','#sailinglife','#islandhopping','#deserttrek','#arctictravels','#nighttraineurope','#pilgrimageroute','#bordertownexplorer'],
    trending: ['#traveltok','#hiddengem','#undertourism','#coolcation','#traintravel2026','#sleepervans','#passportstamps','#europebyrain','#allinclusiveresort','#flightdeals','#airportlife','#travelaesthetic','#hotelreview','#luxuryresort','#beachvibes2026','#nomadiclife','#remoteYear','#visafree','#bucketlisttravel','#overtourism'],
  },
  Fashion: {
    popular: ['#fashion','#style','#ootd','#fashionblogger','#love','#beauty','#fashionista','#outfit','#shopping','#model','#instagood','#streetstyle','#fashionstyle','#instafashion','#mensfashion','#womensfashion','#dress','#shoes','#fashiondesigner','#lookoftheday','#outfitoftheday','#clothing','#fashionphotography','#accessories','#luxury','#trendy','#vintage','#fashionweek','#styleinspo','#whatiwore'],
    medium: ['#outfitinspo','#wardrobeessentials','#capsulewardrobe','#sustainablefashion','#thriftfashion','#minimalfashion','#fashiondiaries','#streetwearfashion','#fashiontrends','#dailyoutfit','#everydaystyle','#casualstyle','#chicstyle','#lookbook','#styleblogger','#fashionlover','#newfashion','#fashiongoals','#ootdfashion','#modernstyle','#edgyfashion','#bohostyle','#preppystyle','#workwear','#athleisure','#partywear'],
    niche: ['#slowfashionmovement','#ethicalfashionbrand','#secondhandfashion','#upcycledclothing','#size16style','#midsizefashion','#petitestyle','#tallgirlstyle','#modestefashion','#darkaesthetic','#cottagecorefashion','#y2kfashion','#90sfashion','#vintagehaul','#depopfinds','#fashionrental','#capsulewardrobechallenge','#onebagtravel','#workfromhomeoutfit','#dateoutfitideas','#weddingguest','#festivalfashion','#momstyle','#dadstyle','#twinningoutfits','#fashionhack'],
    trending: ['#quietluxury','#oldmoneyaesthetic','#cleangirlaesthetic','#coastalgranddaughter','#mobwife','#cherrystyle','#lavenderhaze','#demure','#underconsumptioncore','#deinfluencing','#capsulewardrobe2026','#cherryred','#burgandy','#corpcore','#officecore','#tenniscore','#ballerinacore','#westernchic','#coquette','#blokecore'],
  },
  Tech: {
    popular: ['#technology','#tech','#innovation','#science','#engineering','#programming','#coding','#business','#software','#developer','#ai','#computer','#iot','#data','#python','#startup','#machinelearning','#gadgets','#electronics','#digital','#artificialintelligence','#cybersecurity','#blockchain','#robotics','#cloud','#webdevelopment','#javascript','#design','#android','#apple'],
    medium: ['#techlife','#techcommunity','#coder','#programminglife','#webdev','#devops','#frontend','#backend','#fullstack','#reactjs','#nodejs','#techstartup','#saas','#datascience','#deeplearning','#techtrends','#softwaredeveloper','#appdev','#mobiledev','#uxdesign','#uidesign','#techie','#opensourceproject','#github','#agile','#cloudcomputing'],
    niche: ['#techfounder','#indiehacker','#buildinpublic','#saasgrowth','#nocodetool','#lowcodedev','#promptengineering','#llmdev','#techethics','#openai','#aitools','#devtools','#startuphacks','#techwriting','#apidesign','#microservices','#kubernetes','#dockerize','#terraformiac','#techdebt','#cleancode','#codeReview','#pairProgramming','#techinterview','#systemdesign','#scalability'],
    trending: ['#chatgpt','#gpt4','#claudeai','#generativeai','#aiart','#aicoding','#copilot','#vibecoding','#agenticai','#locallama','#openrouter','#aiagents','#techtwitter','#techtok','#quantumcomputing','#spatialcomputing','#visionpro','#neuralink','#web3dev','#defi'],
  },
  Business: {
    popular: ['#business','#entrepreneur','#marketing','#success','#motivation','#money','#startup','#smallbusiness','#entrepreneurship','#goals','#inspiration','#businessowner','#hustle','#millionaire','#wealth','#leadership','#finance','#investing','#mindset','#growth','#branding','#digitalmarketing','#ceo','#billionaire','#sales','#realestate','#ecommerce','#networking','#strategy','#innovation'],
    medium: ['#businesstips','#onlinebusiness','#businessgrowth','#entrepreneurlife','#startuplife','#sidehustle','#passiveincome','#dropshipping','#businessmindset','#womeninbusiness','#smallbiz','#businesscoach','#growthmindset','#businessstrategy','#b2b','#b2c','#businessmodel','#scaling','#revenue','#profitability','#businessdevelopment','#founders','#solopreneur','#bootstrapped','#venturecapital','#angelinvestor'],
    niche: ['#micropreneur','#lifestylebusiness','#bootstrappedstartup','#solopreneurlife','#onepersonbusiness','#productizedservice','#recurringrevenue','#churnrate','#customerretention','#businessautomation','#businesssystems','#nicheresearch','#marketvalidation','#mvpbuild','#customerinterview','#pricingstrategy','#coldoutreach','#leadgeneration','#contentmarketing','#emailmarketing','#seoStrategy','#paidads','#funnelbuilding','#landingpage','#conversionrate','#growthHacking'],
    trending: ['#buildinpublic','#indiehackers','#shipfast','#aitool','#aiautomation','#aibusiness','#creatoreconomy','#digitalproducts','#selltemplates','#gumroad','#notionTemplates','#aiagency','#smma','#personalbranding','#linkedingrowth','#twittergrowth','#newsletterbusiness','#podcastgrowth','#communitybuilding','#Web3business'],
  },
  Photography: {
    popular: ['#photography','#photooftheday','#photo','#nature','#picoftheday','#love','#beautiful','#art','#instagood','#naturephotography','#travel','#landscape','#photographer','#portrait','#ig','#canon','#nikon','#sunset','#like','#follow','#life','#instadaily','#instagram','#sky','#sony','#streetphotography','#photoshoot','#photographylovers','#camera','#summer'],
    medium: ['#portraitphotography','#landscapephotography','#urbanphotography','#nightphotography','#macro','#macrophotography','#wildlifephotography','#birdphotography','#filmPhotography','#35mm','#analogphotography','#blackandwhitephotography','#dronePhotography','#travelphotographer','#photographyislife','#goldenhour','#bluehour','#longexposure','#lightroom','#photoshop','#raw','#mirrorless','#dslr','#photojournalism','#documentaryphotography','#fineartphotography'],
    niche: ['#photocommune','#strobist','#offcameraflash','#tetheredshooting','#compositing','#focusstacking','#astrolandscape','#milkywayphotography','#infraredphotography','#icmphotography','#freelensing','#prismPhotography','#crystalballphotography','#doubleexposure','#cyanotype','#wetplatecollodion','#tintypephoto','#pinholephotography','#largeformat','#mediumformat','#hasselblad','#leicaphotography','#fujifilm','#sigmafp','#photographyworkshop','#photowalk'],
    trending: ['#phototok','#reelsphoto','#aiupscale','#aiphotoediting','#luminarai','#topazphoto','#cinematic','#moodyedits','#filmlook','#analogvibes','#photodump','#minimalphoto','#quietmoments','#inthemoment','#rawstreet','#candidportrait','#editorialphotography','#branphotography','#contentcreation','#ugcphotographer'],
  },
  Art: {
    popular: ['#art','#artist','#drawing','#painting','#artwork','#illustration','#digitalart','#sketch','#design','#love','#artistsoninstagram','#creative','#instaart','#draw','#artoftheday','#contemporaryart','#watercolor','#abstractart','#fanart','#sketchbook','#arte','#artgallery','#oilpainting','#pencildrawing','#portrait','#doodle','#handmade','#acrylicpainting','#creativity','#modernart'],
    medium: ['#artcollector','#artcommission','#artstudio','#artprocess','#characterdesign','#conceptart','#procreate','#ipadart','#traditionalart','#artprint','#artforsale','#muralism','#graffitiart','#popart','#surrealism','#expressionism','#realism','#impressionism','#mixedmedia','#collage','#printmaking','#ceramics','#sculpture','#textileart','#fiberart','#artjournal'],
    niche: ['#artvideo','#processvideo','#wipwednesday','#arttutorial','#paintwithme','#drawtober','#arttips','#colortheory','#compositionart','#pleinairpainting','#urbanSketching','#gouachepainting','#inkdrawing','#penandink','#linocut','#woodcut','#screenprinting','#risograph','#zinemaking','#artbookfair','#gallerywall','#artstudiosetup','#artorganization','#artmaterials','#paletteinspiration','#colorstudy'],
    trending: ['#aiart','#midjourney','#stablediffusion','#generativeart','#nftart','#arttok','#digitalillustration','#characterart','#fantasyart','#darkart','#lowbrowart','#popsurrealism','#newcontemporary','#artfair2026','#artbasel','#sketchdaily','#artchallenge','#cottagecore','#darkcottagecore','#goblincore'],
  },
  Music: {
    popular: ['#music','#musician','#singer','#hiphop','#rap','#dj','#producer','#guitar','#song','#love','#artist','#rock','#band','#live','#beats','#piano','#newmusic','#pop','#dance','#rnb','#rap','#trap','#studio','#songwriter','#livemusic','#concert','#musicproducer','#soundcloud','#spotify','#musicvideo'],
    medium: ['#indiemusic','#electronicmusic','#techno','#housemusiclovers','#jazzmusic','#classicalmusic','#folkmusic','#countrymusic','#metalmusic','#punkrock','#reggae','#blues','#soul','#funk','#drumandbass','#ambient','#lofi','#synthwave','#beatmaker','#musicislife','#singersongwriter','#acousticcover','#musicianlife','#bandlife','#tourlife','#studioSession'],
    niche: ['#bedroomproducer','#homerecording','#musicproductiontips','#mixingtips','#masteringtips','#abletonlive','#flstudio','#logicpro','#protools','#analogsynth','#modularsynth','#vinylcollector','#crateDigging','#samplechopping','#beatbattle','#openmic','#songwritingtips','#musictheory','#eartraining','#sightreading','#musicbiz','#musicmarketing','#independentartist','#selfdistribution','#tunecore','#distrokid'],
    trending: ['#musictok','#spotifywrapped','#viralmusic','#musicdiscovery','#underratedartist','#newmusicfriday','#microgenre','#hyperpop','#phonk','#jerseyclub','#amapiano','#afrobeats','#corridos','#reggeaton','#citypop','#lofibeats','#studiovlog','#makingabeat','#vocalmixing','#aimusic'],
  },
  Gaming: {
    popular: ['#gaming','#gamer','#videogames','#game','#games','#playstation','#xbox','#pc','#twitch','#fortnite','#nintendo','#streamer','#ps5','#gamingcommunity','#esports','#pcgaming','#gamers','#cod','#callofduty','#valorant','#minecraft','#steam','#gameplay','#twitchstreamer','#gaminglife','#retrogaming','#rpg','#fps','#anime','#meme'],
    medium: ['#gamingsetup','#gamingpc','#gamerlife','#consolegaming','#mobilegaming','#indiegame','#gamedev','#gamedevelopment','#gameart','#cosplay','#rgblighting','#gamingroom','#desksetup','#mechanicalkeyboard','#gamingmouse','#gamingheadset','#gamingmonitor','#letsbuild','#firstpersonshooter','#battleroyale','#mmorpg','#openworld','#singleplayer','#multiplayer','#coop','#speedrun'],
    niche: ['#indiedev','#sologamedev','#pixelart','#retrogamer','#classicgames','#gamecollecting','#gameboyadvance','#n64','#snes','#dreamcast','#arcadegaming','#fightinggames','#tacticalshooter','#immersivesim','#metroidvania','#roguelike','#soulslike','#cozygaming','#farmingsim','#citybuildergame','#simulationgame','#strategyGame','#turnbased','#deckbuilder','#boardgames','#tabletopgaming'],
    trending: ['#gamingtok','#gamingclips','#eldenring','#baldursgate3','#palworld','#helldivers2','#gta6','#silksong','#cozyvibes','#cozygamer','#gamingaesthetic','#retrowave','#steamdeck','#roguelikegames','#deckbuilder','#aigenerated','#vrGaming','#metaquest','#gamingmemes','#clipsworthy'],
  },
  Beauty: {
    popular: ['#beauty','#makeup','#skincare','#fashion','#beautiful','#love','#style','#model','#cosmetics','#hair','#skin','#makeupartist','#mua','#beautyblogger','#like','#nails','#follow','#lipstick','#eyes','#lashes','#beautiful','#glam','#instamakeup','#makeuplover','#makeuptutorial','#eyeshadow','#foundation','#beautycare','#selfcare','#naturalmakeup'],
    medium: ['#skincareRoutine','#makeuplook','#beautyproducts','#beautytips','#makeupoftheday','#skincaretips','#cleanbeauty','#veganbeauty','#crueltyfreebeauty','#kbeauty','#jbeauty','#glassskin','#dewyskin','#acneprone','#sensitiveskin','#antiaging','#sunscreen','#retinol','#serums','#moisturizer','#beautyhacks','#makeuptransformation','#beforeandafter','#beautyreview','#beautycommunity','#beautyinfluencer'],
    niche: ['#skincaredecoded','#ingredientsmatter','#doubleCleansingmethod','#slugging','#skinbarrier','#ceramides','#niacinamide','#hyaluronicacid','#vitaminc','#aha','#bha','#chemicalexfoliation','#trentham','#cleanbeautybrand','#greenbeauty','#waterlessbeauty','#solidbeauty','#refillablebeauty','#minimalMakeup','#nomakeupMakeup','#makeupforbeginners','#drugstorebeauty','#dupes','#budgetbeauty','#beautyover40','#maturebeauty'],
    trending: ['#beautytok','#skintok','#grwm','#getreadywithme','#skincareroutine2026','#latte makeup','#undereyepatches','#lipmask','#peptides','#bakuchiol','#cloudyskin','#strawberrymakeup','#coldgirlmakeup','#dolphinskin','#laminated brows','#sunkissedglow','#blushdraping','#softglam','#cleangirlmakeup','#mobwifebeauty'],
  },
  Lifestyle: {
    popular: ['#lifestyle','#life','#love','#happy','#motivation','#instagood','#inspiration','#fashion','#fitness','#photooftheday','#style','#beautiful','#health','#mindset','#selfcare','#goals','#wellness','#positivevibes','#goodvibes','#happiness','#success','#beauty','#travel','#photography','#nature','#home','#family','#livingmybestlife','#dailylife','#lifestyle'],
    medium: ['#lifestyleblogger','#dailyroutine','#morningroutine','#nightroutine','#productivity','#minimallife','#slowliving','#intentionalliving','#simpleliving','#consciousliving','#homedecor','#homeinspo','#plantmom','#cozyathome','#sundayvibes','#weekendmood','#selfimprovement','#personalgrowth','#journaling','#gratitude','#wellnessjourney','#balancedlife','#worklifebalance','#liveyourbestlife','#everydaymoments','#littlethings'],
    niche: ['#5amclub','#dayinmylife','#lifestylevlog','#adultinglife','#apartmenttherapy','#rentaldecor','#smallspaceliving','#capsulelifestyle','#digitalminimalism','#screendetox','#analoglife','#seasonalliving','#rhythmoflife','#frenchlifestyle','#scandinavianlifestyle','#japandistyle','#wabisabi','#hygge','#lagom','#ikigai','#cottagecoreliving','#farmhouselifestyle','#suburbanliving','#citylifestyle','#vanlifeadventures','#tinyhousemovement'],
    trending: ['#lifestyletok','#romanticizeyourlife','#maincharacterenergy','#thatgirlroutine','#softlife','#lazygirljob','#deinfluencing','#underconsumptioncore','#silentwalking','#bedrotting','#doomspending','#girldinner','#girlmath','#boysober','#cleangirlaesthetic','#oldmoneylifestyle','#quietluxury','#coastalgranddaughter','#cottagecore','#darkacademia'],
  },
  Pets: {
    popular: ['#pets','#dog','#cat','#dogsofinstagram','#catsofinstagram','#puppy','#pet','#cute','#dogs','#cats','#animals','#love','#kitten','#doglife','#catlife','#petsofinstagram','#instadog','#instacat','#dogstagram','#catstagram','#doglover','#catlover','#petstagram','#adoptdontshop','#rescuedog','#goldenretriever','#germanshepherd','#frenchie','#labrador','#poodle'],
    medium: ['#puppylove','#kittensofinstagram','#dogmom','#catmom','#dogdad','#catdad','#petlife','#petlovers','#furbaby','#cutepets','#dogsitting','#petsitting','#dogwalker','#dogtraining','#catbehavior','#petphotography','#petportrait','#dogoftheday','#catoftheday','#petsmart','#petfood','#rawfeeding','#homecooked','#petnutrition','#pethealth','#petcare'],
    niche: ['#dogtrainingtips','#positivereinforcement','#clicertraining','#puppysocialization','#reactivedog','#anxiousdog','#seniordog','#seniorcat','#multidog','#multicathousehold','#indoorcat','#catenrichment','#catio','#dogagility','#nosework','#barnhunt','#dockdiving','#flyball','#petfirstaid','#petinsurance','#pettravel','#dogfriendlyhotels','#catfriendlyhome','#petadoption','#fosteringsaveslives','#rescuecatsrock'],
    trending: ['#pettok','#dogtok','#cattok','#funnypets','#petasmr','#petsoftiktok','#goldenretrieverpuppy','#orangecat','#voidcat','#spicycat','#gentlegiant','#tinydog','#dogpark','#catnip','#zoomies','#blep','#mlem','#barkbox','#catsubscription','#petinfluencer'],
  },
  Parenting: {
    popular: ['#parenting','#mom','#dad','#family','#kids','#baby','#momlife','#motherhood','#love','#children','#parentinglife','#dadlife','#fatherhood','#toddler','#newborn','#pregnancy','#babygirl','#babyboy','#mama','#papa','#instamom','#instadad','#familytime','#familylove','#parenthood','#mommy','#daddy','#babyfashion','#kidsactivities','#maternity'],
    medium: ['#gentleparenting','#positiveparenting','#consciousparenting','#respectfulparenting','#attachmentparenting','#parentingtips','#momtips','#dadtips','#firsttimemom','#firsttimedad','#boymom','#girlmom','#twinsofinstagram','#momofthree','#bigfamily','#homeschoolmom','#stayathomemom','#workingmom','#workingdad','#parentblogger','#momblogger','#dadblogger','#babyledweaning','#breastfeeding','#formulafeeding','#cosleeping'],
    niche: ['#montessoriathome','#reggioinspired','#waldorfinspired','#openendedplay','#loosepartplay','#sensoryplay','#messyplay','#toddleractivities','#preschoolactivities','#homeschoolcurriculum','#unschooling','#peacefulparenting','#parentburnout','#mommentalhealth','#parentingsupport','#specialneedsparenting','#autismparent','#adhdparenting','#neurodivergentfamily','#allergyparent','#foodallergieskids','#babysafety','#childproofing','#screenfreekids','#outdoorkids','#naturekids'],
    trending: ['#parentingtok','#momtok','#dadtok','#millennialparenting','#genzparenting','#gentleparentingtips','#parentingwin','#parentingfail','#snackplate','#lunchboxideas','#kidsmealideas','#parentinghack','#momhacks','#toddlermom','#threenager','#raisingboys','#raisinggirls','#parentingmemes','#momhumor','#dadjokes'],
  },
  DIY: {
    popular: ['#diy','#handmade','#craft','#homedecor','#homemade','#art','#design','#creative','#love','#crafts','#decor','#doityourself','#home','#woodworking','#interiordesign','#maker','#crafting','#wood','#decoration','#furniture','#vintage','#handcrafted','#homeimprovement','#renovation','#upcycle','#painting','#recycle','#sewing','#knitting','#crocheting'],
    medium: ['#diyhome','#diyprojects','#diydecor','#diycrafts','#makersgonnamake','#makersofinstagram','#woodworker','#carpentry','#powertools','#workshop','#buildersofinstagram','#diyideas','#diyrenovation','#homeproject','#fixerupper','#beforeandafter','#homereno','#tiledesign','#paintcolors','#wallpaper','#gardening','#gardendesign','#plantsofinstagram','#indoorGarden','#diyGifts','#handmadegifts'],
    niche: ['#epoxy','#epoxyresin','#resinart','#lasercutting','#3dprinting','#cncwoodworking','#scrollsaw','#turningwood','#liveedgetable','#concretediy','#terazzodiy','#macrame','#punchNeedle','#tuftinggun','#jesmonite','#polymerClay','#candle making','#soapmaking','#naturalDye','#blockprinting','#linoprinting','#bookbinding','#leathercraft','#metalworking','#welding','#blacksmithing'],
    trending: ['#diytok','#toolsofthetrade','#powertooltutorial','#satisfyingdiy','#ikeahack','#dollarstoredit','#budgetdiy','#rentalfriendly','#pinterstfail','#pinterestsuccess','#thriftflip','#furnitureflip','#dumpsterdive','#curbsidefinds','#oneroom challenge','#diyinfluencer','#makertok','#woodworkingtok','#buildwithme','#organizationhacks'],
  },
  Education: {
    popular: ['#education','#learning','#school','#teacher','#student','#study','#knowledge','#motivation','#science','#teaching','#english','#college','#students','#university','#math','#teachers','#studygram','#children','#books','#reading','#classroom','#art','#kids','#writing','#language','#history','#success','#exam','#onlinelearning','#elearning'],
    medium: ['#teacherlife','#teachersofinstagram','#educationmatters','#homeschool','#homeschooling','#studymotivation','#studytips','#studywithme','#edtech','#onlinecourse','#distancelearning','#lifelong learner','#earlychildhood','#elementary','#highschool','#gradschool','#phdlife','#academiclife','#research','#stem','#steameducation','#coding','#literacy','#specialeducation','#teacherresources','#lessonplan'],
    niche: ['#montessorimethod','#reggioemilia','#waldorfeducation','#projectbasedlearning','#inquirybasedlearning','#socialemotionallearning','#differentiatedinstruction','#gamification','#flippedclassroom','#blendedlearning','#microlearning','#educationreform','#teacherpd','#educationtechnology','#googleclassroom','#canvaLMS','#educationpolicy','#equityineducation','#culturallyresponsive','#traumainformed','#iepgoals','#504plan','#giftededucation','#twiceexceptional','#executivefunction','#dyslexia'],
    trending: ['#edutok','#learntok','#studytok','#aieducation','#chatgptforeducation','#aitools foreducators','#notebooklm','#aiinclassroom','#teacherreels','#teacherhumor','#teacherappreciation','#quittingteaching','#teachershortage','#microschool','#podhomeschool','#worldschool','#unschooling','#selfdirectedlearning','#skillbased','#credentialing'],
  },
  Finance: {
    popular: ['#finance','#money','#investing','#business','#investment','#financialfreedom','#entrepreneur','#trading','#stocks','#wealth','#realestate','#cryptocurrency','#bitcoin','#forex','#stockmarket','#economy','#personalfinance','#financialliteracy','#crypto','#motivation','#success','#millionaire','#rich','#savings','#income','#debt','#credit','#banking','#budget','#retirement'],
    medium: ['#financetips','#moneymanagement','#moneytips','#investingtips','#passiveincome','#dividends','#etfs','#indexfunds','#401k','#roth ira','#realestateinvesting','#rentalproperty','#sidehustle','#debtfree','#debtpayoff','#budgeting','#frugalliving','#savingmoney','#emergencyfund','#networth','#financialplanning','#wealthbuilding','#moneygoals','#financialindependence','#fireMovement','#earlyretirement'],
    niche: ['#boglehead','#valueinvesting','#dividendgrowth','#reitinvesting','#treasurybonds','#ibonds','#hysavings','#cdladder','#taxlossHarvesting','#backdoorroth','#megabackdoorroth','#soleproprietor','#selftax','#quarterlytaxes','#bookkeepingtips','#profitfirst','#zerobasedbudget','#sinkingfunds','#cashstuffing','#nobuychallenge','#lowbuyyear','#financialcoach','#moneymindset','#abundancemindset','#wealthConsciousness','#generationalwealth'],
    trending: ['#fintok','#moneytok','#investingtok','#stocktok','#bitcoinhalving','#ethereumstaking','#defi','#solana','#aicrypto','#highyieldsavings','#moneydate','#financialtherapy','#softSavings','#loudbudgeting','#cashstuffingtok','#budgetingtips2026','#girlmath','#richmomsavings','#wealthtok','#cryptotok'],
  },
  Health: {
    popular: ['#health','#healthy','#healthylifestyle','#fitness','#wellness','#nutrition','#healthyfood','#motivation','#workout','#gym','#love','#diet','#selfcare','#mentalhealth','#weightloss','#healthyeating','#lifestyle','#yoga','#life','#mindfulness','#meditation','#vegan','#organic','#exercise','#beauty','#skincare','#happy','#healing','#nature','#wellbeing'],
    medium: ['#healthtips','#healthyliving','#healthiswealth','#holistichealth','#naturalhealth','#guthealth','#immunehealth','#heartHealth','#brainhealth','#hormonehealth','#thyroidhealth','#sleephealth','#mentalwellness','#anxietyrelief','#stressmanagement','#breathwork','#coldtherapy','#fasting','#intermittentfasting','#plantbaseddiet','#wholefoods','#supplementation','#vitamins','#probiotics','#functionalmedicine','#integrativehealth'],
    niche: ['#biohacking','#quantifiedself','#cgm','#glucosemonitor','#heartratevariability','#vo2max','#sleepooptimization','#circadianrhythm','#redlighttherapy','#saunabenefits','#grounding','#earthing','#adaptogens','#medicinalMushrooms','#ashwagandha','#turmeric','#collagen','#bonebroth','#eliminationdiet','#fodmap','#autoimmune protocol','#carnivore','#ketodiet','#metabolichealth','#insulinresistance','#longevity'],
    trending: ['#healthtok','#wellnesstok','#biohackingtok','#guthealthtok','#ozempic','#glp1','#peptides','#bryanJohnson','#longevityprotocol','#dontdie','#blueprint','#zonediet','#animalbaseddiet','#seedoils','#processedfoods','#metabolicSyndrome','#trackingtok','#ouraRing','#whoop','#garminwatch'],
  },
  'Real Estate': {
    popular: ['#realestate','#realtor','#home','#property','#forsale','#househunting','#newhome','#realty','#investment','#dreamhome','#interiordesign','#architecture','#house','#luxury','#sold','#listing','#mortgage','#broker','#homedecor','#luxuryrealestate','#homesweethome','#realestateagent','#justlisted','#openhouse','#homesforsale','#realestateinvesting','#firsttimehomebuyer','#renovated','#curbappeal','#closingday'],
    medium: ['#realtorlife','#realestatelife','#realestatemarket','#homebuying','#homeselling','#propertyforsale','#realestatetips','#investmentproperty','#rentalincome','#fixandflip','#wholesaling','#commercialrealestate','#residentialrealestate','#condoliving','#townhouse','#singlefamily','#multifamily','#milliondollarlisting','#luxuryhomes','#buyersagent','#sellersagent','#realestatemarketing','#mls','#appraisal','#homeinspection','#escrow'],
    niche: ['#househackStrategy','#brrrrmethod','#1031exchange','#selfstorage','#syndication','#reiclub','#creativeFinancing','#sellerfinancing','#subjectto','#leaseoption','#shorttermalrental','#airbnbhost','#vrbo','#midtermrental','#roomrental','#studenthousing','#seniorliving','#assistedliving','#mobilehomeinvesting','#landInvesting','#rawland','#subdividing','#entitlements','#zoning','#realestatewholesale','#virtualdeal'],
    trending: ['#realestatetok','#realtortok','#housingmarket2026','#housingcrash','#interestrates','#mortgagerates','#buyermarket','#sellermarket','#firsttimebuyertips','#homesearching','#dreamkitchen','#dreambathroom','#beforandafterreno','#houseflip','#fixeruppertok','#airbnbsuperhost','#rentalArbitrage','#digitalclosing','#proptech','#aiinrealestate'],
  },
  Marketing: {
    popular: ['#marketing','#digitalmarketing','#socialmedia','#business','#branding','#socialmediamarketing','#entrepreneur','#seo','#onlinemarketing','#marketingdigital','#advertising','#contentmarketing','#marketingstrategy','#smallbusiness','#design','#instagram','#brand','#emailmarketing','#marketingtips','#startup','#graphicdesign','#sales','#copywriting','#contentcreator','#affiliatemarketing','#influencer','#growth','#creative','#website','#ppc'],
    medium: ['#digitalmarketingtips','#socialmediastrategy','#socialmediamanager','#socialmediatips','#brandingtips','#brandstrategy','#marketingagency','#marketingplan','#growthhacking','#growthmarketing','#performancemarketing','#conversionoptimization','#funnelmarketing','#b2bmarketing','#b2cmarketing','#inboundmarketing','#outboundmarketing','#videomMarketing','#youtubemarketing','#tiktokmarketing','#linkedinmarketing','#pinterestmarketing','#emaillist','#newsletters','#automationmarketing','#leadgeneration'],
    niche: ['#seotips','#keywordresearch','#linkbuilding','#technicalSEO','#localSEO','#googleads','#facebookads','#tiktokads','#linkedinads','#landingpagedesign','#abtesting','#uxcopy','#microcopy','#emailsequence','#dripCampaign','#segmentation','#personalization','#attributionModel','#customerLifetimevalue','#retentionmarketing','#communityMarketing','#ugcmarketing','#influencermarketing','#podcastMarketing','#webinarMarketing','#chatbotmarketing'],
    trending: ['#marketingtok','#socialmediatok','#aigeneratedcontent','#aimarketing','#chatgptmarketing','#aicopywriting','#aidesign','#ugccreator','#ugcjobs','#threadstrategy','#linkedinviral','#shortformvideo','#lonformcontent','#zerocClickcontent','#darkSocial','#aiAgentmarketing','#personalBrand','#creatOreconomy','#newslettergrowth','#communityled'],
  },
  Motivational: {
    popular: ['#motivation','#inspiration','#quotes','#love','#life','#success','#mindset','#believe','#goals','#motivationalquotes','#positivevibes','#happy','#happiness','#selflove','#entrepreneur','#fitness','#lifestyle','#inspirationalquotes','#nevergiveup','#positivity','#loveyourself','#hustle','#dream','#gratitude','#focus','#determination','#growth','#grind','#strength','#passion'],
    medium: ['#motivationdaily','#dailymotivation','#dailyinspiration','#morningmotivation','#mondaymotivation','#midweekmotivation','#fridaymotivation','#motivationmonday','#successmindset','#growthmindset','#winnermentality','#goalgetter','#goalsetting','#selfimprovement','#personaldevelopment','#selfgrowth','#mindsetcoach','#lifecoach','#motivationalspeaker','#keepgoing','#neverquit','#believeinyourself','#youvegotthis','#stayfocused','#staystrong','#riseandgrind'],
    niche: ['#5amroutine','#coldshowerbenefits','#journalingprompts','#visionboard','#affirmationsdaily','#lawOfAttraction','#manifestation','#visualization','#stoicphilosophy','#marcusAurelius','#ryannholiday','#atomichabits','#deepwork','#thethingthing','#uncomfortableGrowth','#embracethestruggle','#failureislearning','#10xmindset','#levelup','#betterthanYesterday','#progressnotperfection','#onepercentbetter','#compoundeffect','#disciplineequalsfreedom','#ownYourmorning','#intentionallife'],
    trending: ['#motivationtok','#stoictok','#mindsetshift','#masculinity','#feminineenergy','#healingjourney','#innerwork','#shadowwork','#regulateYourNervousSystem','#nervousSystemhealing','#somaticHealing','#dopamineDetox','#deepFocus','#flowState','#monkMode','#lockIn','#maincharacter','#hardtimes','#davidgoggins','#jocoWillink'],
  },
  Nature: {
    popular: ['#nature','#photography','#naturephotography','#landscape','#travel','#beautiful','#love','#sunset','#sky','#flowers','#mountains','#forest','#ocean','#wildlife','#green','#earth','#tree','#outdoors','#beach','#sun','#water','#clouds','#garden','#animals','#macro','#spring','#summer','#autumn','#winter','#sunrise'],
    medium: ['#naturelovers','#naturelover','#motherNature','#beautifulnature','#wildlifephotography','#birdwatching','#birdsofinstagram','#landscapephotography','#scenicview','#hikingadventures','#trailrunning','#nationalpark','#statepark','#camping','#backpacking','#wildflowers','#treesofinstagram','#forestbathing','#earthporn','#getoutside','#exploreoutdoors','#optoutside','#freshair','#seaview','#lakeside','#riverwalk'],
    niche: ['#rewilding','#oldgrowthforest','#temperate rainforest','#borealforest','#alpinemeadow','#tidalpool','#desertscape','#badlands','#geologyrocks','#paleontology','#mycology','#mushroomhunting','#foraging','#wildedibles','#botanicalart','#phenology','#darkskies','#nightsky','#startrails','#northernlights','#aurora','#meteorshower','#cloudspotting','#weathPhotography','#stormchasing','#underwaterphoto'],
    trending: ['#naturetok','#cottagecore','#goblincore','#forestcore','#cabinlife','#offgridliving','#darkskiesweek','#rewildingproject','#climateaction','#earthday','#biodiversity','#pollinator garden','#nativeplants','#xeriscaping','#noMowMay','#wildlifecorridor','#trailcam','#natureheals','#ecotherapy','#foresttherapy'],
  },
};

const PLATFORM_MAX = { instagram: 30, tiktok: 8, twitter: 5, linkedin: 5, youtube: 15, all: 30 };

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function generateKeywordHashtags(keyword) {
  if (!keyword || !keyword.trim()) return [];
  const kw = keyword.trim().toLowerCase().replace(/[^a-z0-9 ]/g, '');
  const words = kw.split(/\s+/).filter(Boolean);
  const base = words.join('');
  const tags = [];
  tags.push('#' + base);
  tags.push('#' + base + 'tips');
  tags.push('#' + base + 'life');
  tags.push('#' + base + 'lover');
  tags.push('#' + base + 'community');
  tags.push('#' + base + 'daily');
  tags.push('#' + base + 'goals');
  tags.push('#' + base + 'inspo');
  tags.push('#' + base + 'vibes');
  tags.push('#' + base + '2026');
  tags.push('#best' + base);
  tags.push('#love' + base);
  if (words.length === 1) {
    tags.push('#' + base + 'ofinstagram');
    tags.push('#' + base + 'photography');
    tags.push('#' + base + 'blog');
    tags.push('#insta' + base);
  }
  if (words.length > 1) {
    words.forEach(w => {
      tags.push('#' + w);
      tags.push('#' + w + 'life');
    });
  }
  return tags;
}

function generateHashtags(niche, keyword, platform, style) {
  const db = HASHTAG_DB[niche];
  if (!db) return [];
  const max = PLATFORM_MAX[platform] || 30;

  let pool = [];
  switch (style) {
    case 'popular':
      pool = [...shuffle(db.popular), ...shuffle(db.medium).slice(0, 8)];
      break;
    case 'niche':
      pool = [...shuffle(db.niche), ...shuffle(db.medium).slice(0, 8)];
      break;
    case 'trending':
      pool = [...shuffle(db.trending), ...shuffle(db.popular).slice(0, 10), ...shuffle(db.niche).slice(0, 5)];
      break;
    case 'mix':
    default:
      pool = [
        ...shuffle(db.popular).slice(0, 10),
        ...shuffle(db.medium).slice(0, 10),
        ...shuffle(db.niche).slice(0, 8),
        ...shuffle(db.trending).slice(0, 5),
      ];
      break;
  }

  // Add keyword-based hashtags
  const kwTags = generateKeywordHashtags(keyword);
  if (kwTags.length > 0) {
    pool = [...shuffle(kwTags).slice(0, 6), ...pool];
  }

  // Deduplicate (case-insensitive)
  const seen = new Set();
  const unique = [];
  for (const tag of pool) {
    const lower = tag.toLowerCase();
    if (!seen.has(lower)) {
      seen.add(lower);
      unique.push(tag);
    }
  }

  return unique.slice(0, max);
}


export default function HashtagGenerator() {
  const [niche, setNiche] = useState('');
  const [keyword, setKeyword] = useState('');
  const [platform, setPlatform] = useState('instagram');
  const [style, setStyle] = useState('mix');
  const [hashtags, setHashtags] = useState([]);
  const [copied, setCopied] = useState(null);
  const [toast, setToast] = useState('');

  function showToast(msg) {
    setToast(msg);
    setTimeout(() => setToast(''), 2000);
  }

  function handleGenerate() {
    if (!niche) return;
    const results = generateHashtags(niche, keyword, platform, style);
    setHashtags(results);
    setCopied(null);
  }

  function handleCopyOne(tag, idx) {
    navigator.clipboard.writeText(tag);
    setCopied(idx);
    showToast('Copied: ' + tag);
    setTimeout(() => setCopied(null), 2000);
  }

  function handleCopyAll() {
    if (hashtags.length === 0) return;
    navigator.clipboard.writeText(hashtags.join(' '));
    setCopied('all');
    showToast('All hashtags copied to clipboard!');
    setTimeout(() => setCopied(null), 2000);
  }

  const charCount = hashtags.join(' ').length;
  const platformMax = PLATFORMS.find(p => p.id === platform)?.max || 30;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Free AI Hashtag Generator',
    url: 'https://www.midastools.co/hashtag-generator',
    description: 'Generate optimized hashtags for Instagram, TikTok, Twitter/X, LinkedIn and YouTube. 22 niches, 4 hashtag styles, 30 tags per generation. 100% free.',
    applicationCategory: 'SocialMediaApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'How many hashtags should I use on Instagram?', acceptedAnswer: { '@type': 'Answer', text: 'Instagram allows up to 30 hashtags per post. Research shows that 20-30 targeted hashtags tend to maximize reach, but quality matters more than quantity. Our generator creates optimized sets of 30 hashtags mixing popular and niche tags for best results.' } },
      { '@type': 'Question', name: 'What are the best hashtags for TikTok?', acceptedAnswer: { '@type': 'Answer', text: 'TikTok works best with 3-8 highly relevant hashtags. Unlike Instagram, TikTok hashtags should be trending and niche-specific. Our generator adjusts the count and style automatically when you select TikTok as your platform.' } },
      { '@type': 'Question', name: 'Should I use popular or niche hashtags?', acceptedAnswer: { '@type': 'Answer', text: 'A mix of both works best. Popular hashtags (1M+ posts) give broad exposure but high competition. Niche hashtags (10K-100K posts) have less competition so your content is more likely to rank. Our Mix mode balances both for optimal reach.' } },
      { '@type': 'Question', name: 'How often should I change my hashtags?', acceptedAnswer: { '@type': 'Answer', text: 'You should rotate your hashtags with every post. Using the same set repeatedly can trigger spam filters on Instagram and reduce your reach. Use our Regenerate button to get fresh sets each time you post.' } },
      { '@type': 'Question', name: 'Is this hashtag generator free?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, 100% free with no signup, no login, and no limits. Generate as many hashtag sets as you want, copy them individually or all at once, and use them on any platform.' } },
      { '@type': 'Question', name: 'Do hashtags still work in 2026?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Hashtags remain a key discovery tool on Instagram, TikTok, LinkedIn, and Twitter/X. While algorithms have evolved, hashtags still help categorize your content and increase discoverability, especially niche hashtags that connect you with targeted audiences.' } },
    ],
  };

  return (
    <Layout>
      <Head>
        <title>Free AI Hashtag Generator - Instagram, TikTok, Twitter | Midas Tools</title>
        <meta name="description" content="Generate optimized hashtags for Instagram, TikTok, Twitter/X, LinkedIn and YouTube. 22 niches, 4 styles, 30 hashtags per set. Free hashtag generator with copy-to-clipboard. No signup required." />
        <meta property="og:title" content="Free AI Hashtag Generator | Midas Tools" />
        <meta property="og:description" content="Generate 30 optimized hashtags instantly for any niche. Instagram, TikTok, Twitter/X, LinkedIn, YouTube. 100% free." />
        <meta property="og:url" content="https://www.midastools.co/hashtag-generator" />
        <meta property="og:image" content="https://www.midastools.co/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://www.midastools.co/hashtag-generator" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      </Head>

      <style>{`
        .ht-page { max-width: 860px; margin: 0 auto; padding: 80px 40px; }
        .ht-hero { text-align: center; margin-bottom: 48px; }
        .ht-hero h1 { font-size: clamp(32px, 5.5vw, 52px); font-weight: 900; line-height: 1.1; letter-spacing: -2px; margin-bottom: 16px; color: var(--text); }
        .ht-hero h1 span { color: var(--accent); }
        .ht-hero p { font-size: 18px; color: var(--text-secondary); max-width: 580px; margin: 0 auto; line-height: 1.7; }

        .ht-form { background: var(--surface); border: 1px solid var(--border); border-radius: 20px; padding: 40px; margin-bottom: 40px; }
        .ht-form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin-bottom: 24px; }
        .ht-form-group label { display: block; font-size: 13px; font-weight: 700; color: var(--text); margin-bottom: 8px; letter-spacing: -0.2px; }
        .ht-form-group select, .ht-form-group input {
          width: 100%; padding: 14px 16px; border: 1px solid var(--border); border-radius: 12px;
          font-size: 15px; font-family: inherit; background: var(--bg); color: var(--text);
          outline: none; transition: border-color 0.15s;
        }
        .ht-form-group select:focus, .ht-form-group input:focus { border-color: var(--accent); }

        .ht-style-label { display: block; font-size: 13px; font-weight: 700; color: var(--text); margin-bottom: 10px; letter-spacing: -0.2px; }
        .ht-style-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; margin-bottom: 28px; }
        .ht-style-opt {
          border: 2px solid var(--border); border-radius: 12px; padding: 14px 12px; cursor: pointer;
          transition: border-color 0.15s, background 0.15s; text-align: center;
        }
        .ht-style-opt:hover { border-color: var(--text-tertiary); }
        .ht-style-opt.active { border-color: var(--accent); background: rgba(59,95,255,0.04); }
        .ht-style-opt .st-label { font-size: 14px; font-weight: 700; color: var(--text); }
        .ht-style-opt .st-desc { font-size: 11px; color: var(--text-secondary); margin-top: 4px; line-height: 1.4; }

        .ht-platform-grid { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 28px; }
        .ht-plat-btn {
          padding: 10px 20px; border-radius: 100px; border: 2px solid var(--border);
          background: var(--bg); font-size: 14px; font-weight: 600; font-family: inherit;
          cursor: pointer; transition: all 0.15s; color: var(--text-secondary);
        }
        .ht-plat-btn:hover { border-color: var(--text-tertiary); }
        .ht-plat-btn.active { border-color: var(--accent); background: rgba(59,95,255,0.06); color: var(--accent); }

        .ht-gen-btn {
          width: 100%; padding: 16px; background: var(--accent); color: #fff; border: none;
          border-radius: 100px; font-size: 16px; font-weight: 800; cursor: pointer;
          font-family: inherit; transition: transform 0.15s, box-shadow 0.15s;
        }
        .ht-gen-btn:hover { transform: translateY(-1px); box-shadow: 0 4px 24px rgba(59,95,255,0.25); }
        .ht-gen-btn:disabled { opacity: 0.5; cursor: not-allowed; transform: none; box-shadow: none; }

        .ht-results { animation: htFadeIn 0.4s ease; }
        @keyframes htFadeIn { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } }

        .ht-results-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; flex-wrap: wrap; gap: 12px; }
        .ht-results-header h2 { font-size: 24px; font-weight: 800; color: var(--text); margin: 0; }
        .ht-meta { display: flex; gap: 16px; align-items: center; flex-wrap: wrap; }
        .ht-meta-item { font-size: 13px; color: var(--text-secondary); font-weight: 600; }
        .ht-meta-item strong { color: var(--text); }

        .ht-copy-all-btn {
          padding: 10px 24px; border-radius: 100px; border: 2px solid var(--accent);
          background: rgba(59,95,255,0.06); color: var(--accent); font-size: 14px;
          font-weight: 700; font-family: inherit; cursor: pointer; transition: all 0.15s;
        }
        .ht-copy-all-btn:hover { background: var(--accent); color: #fff; }

        .ht-tags { display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 32px; }
        .ht-tag {
          display: inline-flex; align-items: center; padding: 10px 18px;
          background: rgba(59,95,255,0.07); border: 1px solid rgba(59,95,255,0.18);
          color: #3B5FFF; border-radius: 100px; font-size: 14px; font-weight: 600;
          cursor: pointer; transition: all 0.15s; user-select: none;
        }
        .ht-tag:hover { background: rgba(59,95,255,0.14); border-color: rgba(59,95,255,0.35); transform: translateY(-1px); }
        .ht-tag.copied { background: #3B5FFF; color: #fff; border-color: #3B5FFF; }

        .ht-actions-row { display: flex; gap: 12px; justify-content: center; margin-bottom: 40px; flex-wrap: wrap; }

        .ht-upsell-inline {
          background: linear-gradient(135deg, #f0f4ff 0%, #e8edff 100%);
          border: 1px solid rgba(59,95,255,0.15); border-radius: 20px;
          padding: 36px 40px; margin-bottom: 48px; text-align: center;
        }
        .ht-upsell-inline h3 { font-size: 22px; font-weight: 800; color: var(--text); margin: 0 0 8px; }
        .ht-upsell-inline p { font-size: 15px; color: var(--text-secondary); margin: 0 0 20px; line-height: 1.6; }
        .ht-upsell-inline a.ht-upsell-cta {
          display: inline-block; padding: 14px 32px; background: #3B5FFF; color: #fff;
          border-radius: 100px; font-weight: 800; font-size: 15px; text-decoration: none;
          transition: transform 0.15s, box-shadow 0.15s;
        }
        .ht-upsell-inline a.ht-upsell-cta:hover { transform: translateY(-2px); box-shadow: 0 4px 20px rgba(59,95,255,0.3); }

        .ht-how { background: var(--surface); border: 1px solid var(--border); border-radius: 20px; padding: 40px; margin-bottom: 48px; }
        .ht-how h2 { font-size: 28px; font-weight: 800; color: var(--text); margin: 0 0 28px; text-align: center; }
        .ht-steps { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
        .ht-step { text-align: center; }
        .ht-step-num { display: inline-flex; align-items: center; justify-content: center; width: 48px; height: 48px; border-radius: 50%; background: rgba(59,95,255,0.08); color: #3B5FFF; font-size: 20px; font-weight: 800; margin-bottom: 14px; }
        .ht-step h3 { font-size: 16px; font-weight: 700; color: var(--text); margin: 0 0 6px; }
        .ht-step p { font-size: 14px; color: var(--text-secondary); line-height: 1.6; margin: 0; }

        .ht-upsell-dark { background: var(--text); color: #fff; border-radius: 20px; padding: 48px 40px; text-align: center; margin-bottom: 48px; }
        .ht-upsell-dark h2 { font-size: 28px; font-weight: 900; color: #fff; margin: 0 0 12px; }
        .ht-upsell-dark p { color: rgba(255,255,255,0.7); font-size: 16px; margin: 0 0 28px; max-width: 520px; margin-left: auto; margin-right: auto; line-height: 1.6; }
        .ht-upsell-dark a.ht-bundle-cta {
          display: inline-block; background: #fff; color: var(--text); padding: 16px 36px;
          border-radius: 100px; font-weight: 800; font-size: 16px; text-decoration: none; transition: transform 0.15s;
        }
        .ht-upsell-dark a.ht-bundle-cta:hover { transform: translateY(-2px); }

        .ht-tools { margin-bottom: 48px; }
        .ht-tools h2 { font-size: 24px; font-weight: 800; color: var(--text); margin: 0 0 20px; }
        .ht-tools-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }
        .ht-tool-card {
          display: block; padding: 20px; border: 1px solid var(--border); border-radius: 14px;
          text-decoration: none; transition: all 0.15s; background: var(--surface);
        }
        .ht-tool-card:hover { border-color: var(--accent); box-shadow: 0 2px 12px rgba(59,95,255,0.08); transform: translateY(-2px); }
        .ht-tool-card h3 { font-size: 15px; font-weight: 700; color: var(--text); margin: 0 0 4px; }
        .ht-tool-card p { font-size: 13px; color: var(--text-secondary); margin: 0; line-height: 1.5; }

        .ht-seo { margin-bottom: 48px; }
        .ht-seo h2 { font-size: 28px; font-weight: 800; color: var(--text); margin-bottom: 16px; }
        .ht-seo h3 { font-size: 20px; font-weight: 700; color: var(--text); margin: 28px 0 12px; }
        .ht-seo p { font-size: 16px; color: var(--text-secondary); line-height: 1.8; margin-bottom: 16px; }
        .ht-seo ul { padding-left: 24px; margin-bottom: 16px; }
        .ht-seo li { font-size: 15px; color: var(--text-secondary); line-height: 1.7; margin-bottom: 8px; }

        .ht-faq { margin-bottom: 48px; }
        .ht-faq h2 { font-size: 28px; font-weight: 800; color: var(--text); margin-bottom: 16px; }
        .ht-faq-item { border-bottom: 1px solid var(--border); padding: 20px 0; }
        .ht-faq-item h3 { font-size: 16px; font-weight: 700; color: var(--text); margin: 0 0 8px; }
        .ht-faq-item p { font-size: 15px; color: var(--text-secondary); line-height: 1.7; margin: 0; }

        .ht-toast {
          position: fixed; bottom: 32px; left: 50%; transform: translateX(-50%) translateY(80px);
          background: var(--text); color: #fff; padding: 14px 28px; border-radius: 100px;
          font-size: 14px; font-weight: 600; z-index: 1000; opacity: 0;
          transition: transform 0.3s ease, opacity 0.3s ease; pointer-events: none;
          box-shadow: 0 8px 32px rgba(0,0,0,0.18);
        }
        .ht-toast.show { transform: translateX(-50%) translateY(0); opacity: 1; }

        @media(max-width:700px) {
          .ht-page { padding: 48px 20px; }
          .ht-form { padding: 24px; }
          .ht-form-grid { grid-template-columns: 1fr; }
          .ht-style-grid { grid-template-columns: repeat(2, 1fr); }
          .ht-steps { grid-template-columns: 1fr; gap: 20px; }
          .ht-tools-grid { grid-template-columns: 1fr; }
          .ht-upsell-inline { padding: 28px 20px; }
          .ht-upsell-dark { padding: 36px 24px; }
          .ht-how { padding: 28px 20px; }
          .ht-results-header { flex-direction: column; align-items: flex-start; }
        }
      `}</style>

      <div className="ht-page">
        {/* Hero */}
        <div className="ht-hero">
          <div className="badge" style={{ marginBottom: 24 }}>100% Free Tool</div>
          <h1>Free AI Hashtag<br /><span>Generator</span></h1>
          <p>Generate optimized hashtags for Instagram, TikTok, Twitter/X, LinkedIn, and YouTube. Pick your niche, choose a style, and get 30 ready-to-use hashtags in one click.</p>
        </div>

        {/* Form */}
        <div className="ht-form">
          <div className="ht-form-grid">
            <div className="ht-form-group">
              <label>Select your niche</label>
              <select value={niche} onChange={e => setNiche(e.target.value)}>
                <option value="">Choose a niche...</option>
                {NICHES.map(n => <option key={n} value={n}>{n}</option>)}
              </select>
            </div>
            <div className="ht-form-group">
              <label>Keyword or phrase (optional)</label>
              <input
                type="text"
                placeholder="e.g. protein shake, beach sunset..."
                value={keyword}
                onChange={e => setKeyword(e.target.value)}
              />
            </div>
          </div>

          <span className="ht-style-label">Platform</span>
          <div className="ht-platform-grid">
            {PLATFORMS.map(p => (
              <button
                key={p.id}
                className={`ht-plat-btn${platform === p.id ? ' active' : ''}`}
                onClick={() => setPlatform(p.id)}
                type="button"
              >
                {p.label}
              </button>
            ))}
          </div>

          <span className="ht-style-label">Hashtag style</span>
          <div className="ht-style-grid">
            {STYLES.map(s => (
              <div
                key={s.id}
                className={`ht-style-opt${style === s.id ? ' active' : ''}`}
                onClick={() => setStyle(s.id)}
              >
                <div className="st-label">{s.label}</div>
                <div className="st-desc">{s.desc}</div>
              </div>
            ))}
          </div>

          <button className="ht-gen-btn" onClick={handleGenerate} disabled={!niche}>
            Generate Hashtags &rarr;
          </button>
        </div>

        {/* Results */}
        {hashtags.length > 0 && (
          <div className="ht-results">
            <div className="ht-results-header">
              <div>
                <h2>Your Hashtags</h2>
                <div className="ht-meta" style={{ marginTop: 8 }}>
                  <span className="ht-meta-item"><strong>{hashtags.length}</strong> hashtags</span>
                  <span className="ht-meta-item"><strong>{charCount}</strong> characters</span>
                  {platform === 'instagram' && charCount < 2200 && (
                    <span className="ht-meta-item" style={{ color: '#059669' }}>Within Instagram limit</span>
                  )}
                </div>
              </div>
              <button className="ht-copy-all-btn" onClick={handleCopyAll}>
                {copied === 'all' ? 'Copied!' : 'Copy All'}
              </button>
            </div>

            <div className="ht-tags">
              {hashtags.map((tag, i) => (
                <span
                  key={i}
                  className={`ht-tag${copied === i ? ' copied' : ''}`}
                  onClick={() => handleCopyOne(tag, i)}
                  title="Click to copy"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="ht-actions-row">
              <button className="ht-gen-btn" onClick={handleGenerate} style={{ maxWidth: 320 }}>
                Regenerate &rarr;
              </button>
            </div>

            {/* Inline upsell after results */}
            <div className="ht-upsell-inline">
              <h3>Want 150+ ready-made social media prompts?</h3>
              <p>Stop guessing what to post. Our AI Social Media Manager Kit gives you plug-and-play prompts for captions, content calendars, engagement strategies, and more.</p>
              <a href={STRIPE_SOCIAL_MEDIA_KIT} className="ht-upsell-cta">Get the Social Media Kit &rarr;</a>
            </div>
          </div>
        )}

        {/* How to Use */}
        <div className="ht-how">
          <h2>How to Use the Hashtag Generator</h2>
          <div className="ht-steps">
            <div className="ht-step">
              <div className="ht-step-num">1</div>
              <h3>Pick Your Niche</h3>
              <p>Select from 22 niches and optionally add a keyword to make hashtags more specific to your content.</p>
            </div>
            <div className="ht-step">
              <div className="ht-step-num">2</div>
              <h3>Choose Platform + Style</h3>
              <p>Select your platform for optimized tag counts. Pick Popular, Niche, Mix, or Trending for your strategy.</p>
            </div>
            <div className="ht-step">
              <div className="ht-step-num">3</div>
              <h3>Copy and Post</h3>
              <p>Click any hashtag to copy it, or use Copy All to grab the entire set. Paste directly into your post.</p>
            </div>
          </div>
        </div>

        {/* Cross-promote tools */}
        <div className="ht-tools">
          <h2>More Free AI Tools</h2>
          <div className="ht-tools-grid">
            <Link href="/prompt-generator" className="ht-tool-card">
              <h3>AI Prompt Generator</h3>
              <p>Create expert-level AI prompts for any business task in seconds.</p>
            </Link>
            <Link href="/business-name-generator" className="ht-tool-card">
              <h3>Business Name Generator</h3>
              <p>Get 20 creative, brandable business names instantly.</p>
            </Link>
            <Link href="/email-subject-line-tester" className="ht-tool-card">
              <h3>Email Subject Line Tester</h3>
              <p>Score your email subject lines and boost open rates.</p>
            </Link>
          </div>
        </div>

        {/* SEO Content */}
        <div className="ht-seo">
          <h2>The Complete Guide to Hashtag Strategy in 2026</h2>
          <p>Hashtags remain one of the most powerful free tools for growing your social media presence. Whether you are building a brand on Instagram, going viral on TikTok, or establishing authority on LinkedIn, the right hashtags connect your content with the right audience.</p>

          <h3>Why Hashtags Still Matter</h3>
          <p>Despite algorithm changes across every platform, hashtags continue to serve as a categorization and discovery mechanism. When someone searches for or follows a hashtag, your content has a chance to appear in that feed. The key is using the right mix of popular and niche hashtags for your specific audience.</p>

          <h3>Platform-Specific Hashtag Best Practices</h3>
          <ul>
            <li><strong>Instagram (up to 30):</strong> Use a mix of popular (1M+ posts), medium (100K-1M), and niche (under 100K) hashtags. Place them in the caption or first comment. Rotate your sets to avoid being flagged as spam.</li>
            <li><strong>TikTok (3-8):</strong> Fewer, more targeted hashtags work best. Include at least one trending hashtag and 2-3 niche ones. TikTok's algorithm weighs content quality over hashtag volume.</li>
            <li><strong>Twitter/X (1-3):</strong> Less is more. Use 1-3 highly relevant hashtags. Tweets with hashtags get 2x more engagement than those without, but too many look spammy.</li>
            <li><strong>LinkedIn (3-5):</strong> Professional and industry-specific hashtags work best. Follow trending hashtags in your industry and include them when relevant to your post.</li>
            <li><strong>YouTube (8-15):</strong> Use hashtags in your video description and title. YouTube shows up to 3 hashtags above your video title, making them valuable for search visibility.</li>
          </ul>

          <h3>Popular vs. Niche Hashtags: Finding the Balance</h3>
          <p>Popular hashtags like #fitness or #travel have millions of posts. While they offer massive potential reach, your content competes with millions of other posts and may only appear in the feed for seconds. Niche hashtags like #homegymsetup or #solofemaletravel have fewer posts but a more engaged, targeted audience. Your content stays visible longer and reaches people genuinely interested in your topic.</p>
          <p>The sweet spot is a mix: use our generator's "Mix" style to automatically balance high-volume tags for broad exposure with niche tags for targeted engagement.</p>
        </div>

        {/* Bundle upsell */}
        <div className="ht-upsell-dark">
          <h2>Level up your entire AI workflow</h2>
          <p>Get all 15 AI kits in one bundle: social media, marketing, sales, content creation, business ops, and more. Over 2,000 expert prompts at 82% off.</p>
          <a href={STRIPE_BUNDLE} className="ht-bundle-cta">Get All 15 Kits — $97 (Save 82%) &rarr;</a>
        </div>

        {/* FAQ */}
        <div className="ht-faq">
          <h2>Frequently Asked Questions</h2>
          {[
            { q: 'How many hashtags should I use on Instagram?', a: 'Instagram allows up to 30 hashtags per post. Research shows that 20-30 targeted hashtags tend to maximize reach, but quality matters more than quantity. Our generator creates optimized sets of 30 hashtags mixing popular and niche tags for best results.' },
            { q: 'What are the best hashtags for TikTok?', a: 'TikTok works best with 3-8 highly relevant hashtags. Unlike Instagram, TikTok hashtags should be trending and niche-specific. Our generator adjusts the count and style automatically when you select TikTok as your platform.' },
            { q: 'Should I use popular or niche hashtags?', a: 'A mix of both works best. Popular hashtags (1M+ posts) give broad exposure but high competition. Niche hashtags (10K-100K posts) have less competition so your content is more likely to rank. Our "Mix" mode balances both for optimal reach.' },
            { q: 'How often should I change my hashtags?', a: 'You should rotate your hashtags with every post. Using the same set repeatedly can trigger spam filters on Instagram and reduce your reach. Use our Regenerate button to get fresh sets each time you post.' },
            { q: 'Is this hashtag generator free?', a: 'Yes, 100% free with no signup, no login, and no limits. Generate as many hashtag sets as you want, copy them individually or all at once, and use them on any platform.' },
            { q: 'Do hashtags still work in 2026?', a: 'Yes. Hashtags remain a key discovery tool on Instagram, TikTok, LinkedIn, and Twitter/X. While algorithms have evolved, hashtags still help categorize your content and increase discoverability, especially niche hashtags that connect you with targeted audiences.' },
          ].map((faq, i) => (
            <div key={i} className="ht-faq-item">
              <h3>{faq.q}</h3>
              <p>{faq.a}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Toast */}
      <div className={`ht-toast${toast ? ' show' : ''}`}>{toast}</div>
    </Layout>
  );
}
