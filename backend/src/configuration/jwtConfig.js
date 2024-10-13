import crypto from 'crypto';

const secreatkey = crypto.randomBytes(32).toString("hex");


export {secreatkey};