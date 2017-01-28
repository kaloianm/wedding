/**
 * Contains the Web site visitor tracking information model.
 */

'use strict';

import mongoose from 'mongoose';

const WebsiteVisitorSchema = new mongoose.Schema({
    date: { type: Date, default: () => Date.now() },
    ip: { type: String },
    userAgent: { type: String },
    sessionId: { type: String },
});

module.exports = mongoose.model('WebsiteVisitor', WebsiteVisitorSchema);
