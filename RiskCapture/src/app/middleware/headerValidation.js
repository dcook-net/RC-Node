module.exports = (req, res, next) => {
    
    let errors = [];
    
    if (req.get('ctm-session-id') === undefined)
        errors.push({message: 'ctm-session-id: The \'ctm-session-id\' header is required'});
  
    if (req.get('ctm-visitor-id') === undefined)
        errors.push({message: 'ctm-visitor-id: The \'ctm-visitor-id\' header is required'});

    if (req.get('ctm-correlation-id') === undefined)
        errors.push({message: 'ctm-correlation-id: The \'ctm-correlation-id\' header is required'});

    if (req.get('ctm-causation-id') === undefined)
        errors.push({message: 'ctm-causation-id: The \'ctm-causation-id\' header is required'});

    if (req.get('ctm-user-agent') === undefined)
        errors.push({message: 'ctm-user-agent: The \'ctm-user-agent\' header is required'});

    
    if (req.get('ctm-session-id') === '')
        errors.push({message: 'ctm-session-id: The \'ctm-session-id\' header is empty'});

    if (req.get('ctm-visitor-id') === '')
        errors.push({message: 'ctm-visitor-id: The \'ctm-visitor-id\' header is empty'});

    if (req.get('ctm-correlation-id') === '')
        errors.push({message: 'ctm-correlation-id: The \'ctm-correlation-id\' header is empty'});

    if (req.get('ctm-causation-id') === '')
        errors.push({message: 'ctm-causation-id: The \'ctm-causation-id\' header is empty'});

    if (req.get('ctm-user-agent') === '')
        errors.push({message: 'ctm-user-agent: The \'ctm-user-agent\' header is empty'});

    if (errors.length > 0)
        res.status(400).send(errors);
    
    next();
};
