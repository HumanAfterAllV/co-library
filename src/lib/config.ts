export const config = {
    env: {
        apiEndpoint: process.env.NEXT_PUBLIC_API_ENDPOINT!,
        imagekit: {
            publicKey: process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT!,
            urlEndpoint: process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT!,
            privateKey: process.env.IMAGEKIT_PRIVETE_KEY!,
        },
        upstash:{
            redisUrl: process.env.UPSTASH_REDIS_URL!,
            redirToken: process.env.UPSTASH_REDIS_TOKEN!,
        }
    }
}
