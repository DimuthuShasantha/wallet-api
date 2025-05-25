import ratelimit from "../config/upstash.js";

const rateLimiter = async (req, res, next) => {
    try {
        // const identifier = req.ip;
        const { success } = await ratelimit.limit("my-rate-limit");
        if (!success) {
          return res.status(429).json({ message: "Rate limit exceeded. Please try again later" });
        }
        next();
    } catch (error) {
        console.log(`Error resetting rate limit: ${error.message}`);
        next(error);
    }
    
};

export default rateLimiter;