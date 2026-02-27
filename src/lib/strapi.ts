import qs from "qs";

export function getStrapiURL(path = '') {
    return `${process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337'
        }${path}`;
}

export function getStrapiMedia(url: string | null) {
    if (url == null) {
        return null;
    }

    // Return the full URL if it's already an absolute URL
    if (url.startsWith('http') || url.startsWith('//')) {
        return url;
    }

    // Otherwise, prepend the Strapi URL
    return `${getStrapiURL()}${url}`;
}

export async function fetchAPI(
    path: string,
    urlParamsObject = {},
    options = {}
) {
    try {
        // Merge default and user options
        const mergedOptions = {
            next: { revalidate: 60 },
            headers: {
                'Content-Type': 'application/json',
            },
            ...options,
        };

        // Build request URL using qs for advanced parameter stringification
        const queryString = qs.stringify(urlParamsObject, { encodeValuesOnly: true });
        const requestUrl = `${getStrapiURL(
            `/api${path}${queryString ? `?${queryString}` : ''}`
        )}`;

        // Trigger API call
        const response = await fetch(requestUrl, mergedOptions);
        if (!response.ok) {
            console.error(response.statusText);
            throw new Error(`An error occurred please try again`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        throw new Error(`Please check if your Strapi server is running`);
    }
}
