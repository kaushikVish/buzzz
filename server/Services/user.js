const {userModel} = require('../Models/user');
const { OAuth2Client } = require('google-auth-library')
const client = new OAuth2Client(process.env.CLIENT_ID)

module.exports.create = async ({
    tokenId,
})=>{
    const ticket = await client.verifyIdToken({
        idToken: tokenId,
        audience: process.env.CLIENT_ID
    });
    const { name, email, picture } = ticket.getPayload();
    
    console.log("========>",ticket.getPayload());
    return ticket.getPayload();
}