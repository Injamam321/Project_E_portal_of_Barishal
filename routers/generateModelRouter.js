const express = require('express');


function generateModelRouter(Model) {
    const router = express.Router();

    // Create a new document
    router.post('/', async (req, res) => {
        const document = new Model(req.body);
        try {
            await document.save();
            res.status(201).send(document);
        } catch (error) {
            res.status(400).send(error);
        }
    });

    // Read all documents
    router.get('/', async (req, res) => {
        try {
            const documents = await Model.find();
            res.json(documents);
        } catch (error) {
            res.status(500).send(error);
        }
    });

    // Read document by ID
    router.get('/:id', async (req, res) => {
        try {
            const document = await Model.findById(req.params.id);
            if (!document) {
                return res.status(404).send();
            }
            res.json(document);
        } catch (error) {
            res.status(400).send(error);
        }
    });

    // Update a document by ID
    router.put('/:id', async (req, res) => {
        try {
            const document = await Model.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
            if (!document) {
                return res.status(404).send();
            }
            res.send(document);
        } catch (error) {
            res.status(400).send(error);
        }
    });

    // Delete a document by ID
    router.delete('/:id', async (req, res) => {
        try {
            const document = await Model.findByIdAndDelete(req.params.id);
            if (!document) {
                return res.status(404).send();
            }
            res.send(document);
        } catch (error) {
            res.status(500).send(error);
        }
    });

    // Read all nested documents in 'result'
    router.get('/:id/service', async (req, res) => {
        try {
            const document = await Model.findById(req.params.id);
            if (!document) {
                return res.status(404).send();
            }
            res.json(document.result);
        } catch (error) {
            res.status(400).send(error);
        }
    });





    // Add a new nested document in 'result'
    router.post('/:id/service', async (req, res) => {
        try {
            const document = await Model.findById(req.params.id);
            if (!document) {
                return res.status(404).send();
            }
            document.result.push(req.body);
            await document.save();
            res.status(201).send(document);
        } catch (error) {
            res.status(400).send(error);
        }
    });


    // Get nested document in 'result' by ID
    router.get('/:id/service/:resultId', async (req, res) => {
        try {
            const document = await Model.findById(req.params.id);
            if (!document) {
                return res.status(404).send();
            }
            const result = document.result.id(req.params.resultId);
            if (!result) {
                return res.status(404).send();
            }
            res.json(result);
        } catch (error) {
            res.status(400).send(error);
        }
    });


    // Update a nested document in 'result' by ID
    router.put('/:id/service/:resultId', async (req, res) => {
        try {
            const document = await Model.findById(req.params.id);
            if (!document) {
                return res.status(404).send();
            }
            const result = document.result.id(req.params.resultId);
            if (!result) {
                return res.status(404).send();
            }
            Object.assign(result, req.body);
            await document.save();
            res.send(document);
        } catch (error) {
            res.status(400).send(error);
        }
    });

    // Delete a nested document in 'result' by ID
    router.delete('/:id/service/:resultId', async (req, res) => {
        try {
            const document = await Model.findById(req.params.id);
            if (!document) {
                return res.status(404).send();
            }
            const result = document.result.id(req.params.resultId);
            if (!result) {
                return res.status(404).send();
            }
            result.remove();
            await document.save();
            res.send(document);
        } catch (error) {
            res.status(500).send(error);
        }
    });

    return router;
}

module.exports = generateModelRouter;
