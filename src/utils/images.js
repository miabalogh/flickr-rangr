
export const formatImagesData = res => {
  let dataRaw = res.data;

  /* Fix JSON string for parsing */
  dataRaw = JSON.parse(dataRaw.replaceAll('\\"', "'").replaceAll("\\", "").slice(15, -1));
  console.log(dataRaw)
  let data = dataRaw.items;

  /* Extract author's Flickr handle name */
  const authorExtractor = /(?<=nobody@flickr\.com \(\')(.*)(?=\'\))/;

  /* Reformat data for display */
  data.forEach((e) => {
    e.author = e.author.match(authorExtractor)[0];

    let dateTaken = new Date(e.date_taken);

    /* Take care of invalid dates */
    if (isNaN(dateTaken)) {
      dateTaken = new Date(e.date_published)
      if (isNaN(dateTaken)) {
        dateTaken = "N/A"
      }
    }
    e.date_taken = dateTaken === 'N/A' ? dateTaken : dateTaken.toLocaleDateString();
  })

  return {items: data, discoverLink: dataRaw.link};

}
