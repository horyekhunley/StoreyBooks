const express = require('express');
const passport = require('passport')
const router = express.Router();

/* GET Google auth */
router.get('/google', passport.authenticate('google', { scope: ['profile']}));

/* GET Google auth callback page. */
router.get(
    '/google/callback',
    passport.authenticate('google',
        { failureRedirect: '/'}), (req, res)=>{
    res.redirect('/dashboard')
});

//logout user /auth/logout
router.get('/logout', (req, res)=>{
    req.logout()
    res.redirect('/')
})


module.exports = router;
