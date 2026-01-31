import axios from 'axios';

const DEFAULT_RETRY_OPTIONS = {
    maxRetries: 5,
    initialDelayMs: 1000,
    maxDelayMs: 30000,
    backoffMultiplier: 2
};

const sleep = (ms) => new Promise((resolve) => { setTimeout(resolve, ms); });

const isRetryableError = (error) => {
    if (!error || !error.response) return false;
    const { status } = error.response;
    // 429 = Too Many Requests, 503 = Service Unavailable
    return status === 429 || status === 503;
};

const api = axios.create({
    baseURL: 'https://api.stlouisfed.org/fred/',
    timeout: 30000,
    headers: {}
});

// Add retry interceptor with exponential backoff
api.interceptors.response.use(
    (response) => response,
    (error) => {
        const { config } = error;

        // Initialize retry state
        if (!config.retryCount) {
            config.retryCount = 0;
        }

        const retryOptions = config.retryOptions || DEFAULT_RETRY_OPTIONS;

        if (isRetryableError(error) && config.retryCount < retryOptions.maxRetries) {
            config.retryCount += 1;
            const baseDelay = retryOptions.initialDelayMs;
            const multiplier = retryOptions.backoffMultiplier ** (config.retryCount - 1);
            const delay = Math.min(baseDelay * multiplier, retryOptions.maxDelayMs);

            return sleep(delay).then(() => api.request(config));
        }

        return Promise.reject(error);
    }
);

export default api;
export { DEFAULT_RETRY_OPTIONS };
