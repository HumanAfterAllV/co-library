import redis from "@/db/redis";
import { Ratelimit } from "@upstash/ratelimit";

const rateLimit = new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(5, "1m"),
    analytics: true,
    prefix: "@upstash/ratelimit",
})

export default rateLimit;