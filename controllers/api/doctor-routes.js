const router = require('express').Router();
const { Doctor, Client, Appointment } = require('../../models');
const withAuth = require('../../utils/auth');

// get all doctors
router.get('/', async (req, res) => {
    try {
    const dbDoctorData = await Doctor.findAll({
        attributes: [ 'first_name',
                        'last_name', 
                        'email',
                        'phoneNumber']
    });
    res.json(dbDoctorData)
} catch(error) {
    console.log(err);
    res.status(500).json(err);
}
});

//  get one doctor
router.get('/:id', async (req, res) => {
    try {
        const dbDoctorData = await Doctor.findOne({
            attributes: [ 'first_name',
                        'last_name', 
                        'email',
                        'phoneNumber'],
            where: {
                id: req.params.id
            }
        });
        if(!dbDoctorData) {
            res.status(404).json({message: "No doctor found with this id"});
        }
        else {
            res.json(dbDoctorData);
        }
    } catch (error) {
        res.status(500).json(error);
    }
});

// create a doctor

router.post('/', async (req, res) => {
    const  {first_name, last_name, email, phoneNumber, password} = req.body;
    try {
        const dbDoctorData = await Doctor.create({
           first_name,
           last_name,
           email,
           phoneNumber,
           password
        });
        if(dbDoctorData) {
            res.json(dbDoctorData);
        }
    } catch(error) {
        res.status(500).json(error);
    }               
});

// update a doctor

router.put('/:id', async (req, res) => {
    try {
        const dbDoctorData = await Doctor.update(req.body, {
            where: {
                id: req.params.id
            }
            
        });
        res.json(dbDoctorData);
    } catch(error) {
        res.status(500).json(error);
    }
});

// delete a doctor

router.delete('/:id', async (req, res) => {
    try {
        const dbDoctorData = await Doctor.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json(dbDoctorData);
    } catch(error) {
        res.status(500).json(error);
    }
})

module.exports = router;