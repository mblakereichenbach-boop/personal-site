exports.handler = async function () {
  try {
    const res = await fetch('https://rss.beehiiv.com/feeds/9kSd0Ruqsj.xml');
    const xml = await res.text();
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/xml; charset=utf-8',
        'Cache-Control': 'public, max-age=3600',
      },
      body: xml,
    };
  } catch (e) {
    return { statusCode: 502, body: 'Failed to fetch RSS feed' };
  }
};
