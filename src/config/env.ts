import 'dotenv/config';
import * as Joi from 'joi';

interface EnvVars {

    NODE_ENV: string;
    PORT: number;
}

const envsSchema = Joi.object({
    NODE_ENV: Joi.string().valid('development', 'production', 'test').default('development'),
    PORT: Joi.number().required(),
}).unknown(true);

const { error, value } = envsSchema.validate(process.env);

if (error) {
    throw new Error(`Config validation error: ${error.message}`);
}

const EnvVars: EnvVars = value;

export const envs = {
    nodeEnv: EnvVars.NODE_ENV,
    port: EnvVars.PORT,
}
