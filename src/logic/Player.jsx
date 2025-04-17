export default class Player {
  constructor(name) {
    (this.name = name),
      (this.xp = {
        mining: 0,
      }),
      (this.skill = {
        Woodcutting: {
          lvl: 34,
          NormalTree: 12,
          OakTree: 21,
          WillowTree: 35,
          TeakTree: 43,
          MapleTree: 52,
          MahoganyTree: 65,
          YewTree: 73,
          MagicTree: 82,
          RedwoodTree: 95,
        },
        Fishing: {
          lvl:2,
            RawShrimp: 0,
            RawLobster: 0,
            RawCrab: 0,
            RawSardine: 0,
            RawHerring: 0,
            RawCarp: 0,
            RawBlowfish: 0,
            RawPoisonFish: 0,
            RawAnglerfish: 0,
            RawCaveFish: 0,
            RawTrout: 0,
            RawSalmon: 0,
            RawFanfish: 0,
            RawSwordfish: 0,
            RawMantaRay: 0,
            RawShark: 0,
            RawWhale: 0,
            LeapingTrout: 0,
            LeapingSalmon: 0,
            LeapingBroadFish: 0,
            RawSeahorse: 0,
            RawSkeletonFish: 0,
            RawMagicFish: 0
          }
          ,
        Firemaking: {
          lvl:3
        },
        Cooking: {
          lvl:44
        },
        Mining: 60,
        Smithing: 33,
        Thieving: 10,
        Fletching: 15,
        Crafting: 20,
        Runecrafting: 5,
        Herblore: 8,
        Agility: 25,
        Summoning: 2,
        Astrology: 7,
        AltMagic: 11,
      }),
      (this.resources = {
        copper: 0,
      });
  }
}
