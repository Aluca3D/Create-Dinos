const emojiMap = {
  ":sword:": "\u2694",        // ⚔
  ":heart:": "\u2764",        // ❤
  ":fire:": "\uD83D\uDD25",   // 🔥
  ":star:": "\u2B50",         // ⭐
  ":dragon:": "\uD83D\uDC09", // 🐉
  ":skull:": "\uD83D\uDC80",  // 💀
  ":bow:": "\uD83C\uDFF9",    // 🏹
  ":shield:": "\uD83D\uDEE1", // 🛡
  ":sparkles:": "\u2728",     // ✨
  ":pickaxe:": "\u26CF",      // ⛏
  ":axe:": "\uD83E\uDE93",    // 🪓
  ":warning:": "\u26A0",      // ⚠
  ":check:": "\u2714",        // ✔
  ":x:": "\u274C",            // ❌
  ":clock:": "\uD83D\uDD52",  // 🕒
  ":diamond:": "\uD83D\uDC8E",// 💎
  ":zombie:": "\uD83E\uDDDF", // 🧟
  ":ghost:": "\uD83D\uDC7B",  // 👻
  ":creeper:": "\uD83D\uDCA5",// 💥
  ":potion:": "\uD83E\uDDEA", // 🧪
  ":bread:": "\uD83C\uDF5E",  // 🍞
  ":meat:": "\uD83E\uDD69",   // 🥩
  ":apple:": "\uD83C\uDF4E",  // 🍎
  ":sun:": "\u2600",          // ☀
  ":moon:": "\uD83C\uDF19",   // 🌙
  ":snowflake:": "\u2744",    // ❄
  ":bee:": "\uD83D\uDC1D",    // 🐝
  ":wrench:": "\uD83D\uDD27", // 🔧
  ":book:": "\uD83D\uDCD6",   // 📖
  ":map:": "\uD83D\uDDFA",    // 🗺
  ":hammer:": "\u2692",       // ⚒
  ":crown:": "\uD83D\uDC51",  // 👑
  ":chest:": "\uD83D\uDC5C",  // 👜
  ":scroll:": "\uD83D\uDCDC", // 📜
  ":coin:": "\uD83D\uDCB0",   // 💰
  ":torch:": "\uD83D\uDD26",  // 🔦
  ":globe:": "\uD83C\uDF0D",  // 🌍
  ":mountain:": "\u26F0",     // ⛰
  ":tent:": "\u26FA",         // ⛺
  ":anchor:": "\u2693",       // ⚓
  ":wave:": "\uD83C\uDF0A",   // 🌊
  ":leaf:": "\uD83C\uDF3F",   // 🍿
  ":tree:": "\uD83C\uDF33",   // 🌳
  ":flower:": "\uD83C\uDF3A", // 🌺
  ":mushroom:": "\uD83C\uDF44"// 🍄
};

console.log("Loaded Emojis")
PlayerEvents.decorateChat(event => {
  for (const [key, value] of Object.entries(emojiMap)) {
    event.setMessage(event.message.replace(key, value))
  }
})

console.log("Loaded Emoji Command")
ServerEvents.commandRegistry(event => {
  const { commands: Commands, arguments: Arguments } = event
  event.register(Commands.literal('emojilist')
    .executes(ctx => {
      const player = ctx.source.player
      for (const [key, value] of Object.entries(emojiMap)) {
        player.tell(
          Text.of(value)
            .green()
            .hover(Text.of(key))
        )
      }
      return 1
    })
  )

})

