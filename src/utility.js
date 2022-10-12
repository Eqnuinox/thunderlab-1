export async function itunesApiRequest(term) {
    const url = new URL("https://itunes.apple.com/search");
    const params = {
        country: "RU",
        lang: "en_us",
        limit: 5,
        term,
        media: "music"
    };
    try {
        url.search = new URLSearchParams(params);
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}
