// This plugin converts data to human readable format


function parseTag(string, tag){
    const formatTags = {
        b: "strong",
        i: "em",
        u: "span"
    }
    // Check if string has [tag]
    let hasOpenTag = string.indexOf(`[${tag}]`) >= 0
    if(hasOpenTag){
      let hasCloseTag = string.indexOf(`[/${tag}]`) >= 0
      if (hasCloseTag) {
        // Define html wrapping tags
        let openHtmlTag = (tag==='u') ? '<span style="text-decoration:underline">' : `<${formatTags[tag]}>`
        let closeHtmlTag = `</${formatTags[tag]}>` 
        // Replace Tags
        string = string.replace(`[${tag}]`, openHtmlTag)
        string = string.replace(`[/${tag}]`, closeHtmlTag)
        // Search the string again for nested tags
        string = parseTag(string, tag) 
      }
      else{
        parseTag(string.substring(string.indexOf(`[${tag}]`) + 3, string.length - 1))
      }
    }

    return string
}
function applyTags(targetString){
  targetString = parseTag(targetString, 'b')
  targetString = parseTag(targetString, 'i')
  targetString = parseTag(targetString, 'u')
  return targetString
}
function formatPost(post){
  post.description = applyTags(post.description)

  post['formattedCreatedAt'] = formatDate(post.createdAt)

  return post
}
function formatDate(eventdate){
  const date = new Date(eventdate)
  
  return `${date.toLocaleString('default', { month: 'long' })} ${date.getDate()}, ${date.getFullYear()}`
}
// Returns 24 hour time format to 12 hour format with halfday suffix
// Ex: 0:32 -> will be converted to 12:32 AM
function formatTime(time){
  let hrMin = time.slice(0, 5)
  let hr = parseInt(hrMin.split(':')[0])
  let hrFormatted = (hr <= 12) ?  hr : (hr - 12)
  let min = hrMin.split(':')[1] 
  let dayHalf = (hr <= 12) ?  " AM" : " PM"
  if (hr === 0) hrFormatted = 12
  return `${hrFormatted}:${min} ${dayHalf}`
}

module.exports = {
  formatPost,
  formatDate,
  formatTime
}