const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const getProducts = async (req, res) => {
    try {
        const products = await prisma.product.findMany({});
        return res.status(200).json({
            status: 200,
            data: products
        });
    } catch (error) {
        return res.status(400).json({
            status: 400,
            message: error.message
        });

    }
};

const getProductById = async (req, res) => {
    try {
        const products = await prisma.product.findUnique({
            where: {
                id: Number(req.params.id)
            },
            include: { category: true }
        });
        if (!products) {
            return res.status(404).json({
                status: 404,
                message: 'not found',
            });
        }
        return res.status(200).json({
            status: 200,
            data: products
        });
    } catch (error) {
        return res.status(400).json({
            status: 400,
            message: error.message
        });

    }
};


const createProducts = async (req, res) => {
    try {
        const products = await prisma.product.create({
            data: req.body
        });
        return res.status(200).json({
            status: 200,
            data: products
        });
    } catch (error) {
        return res.status(400).json({
            status: 400,
            message: error.message
        });

    }
};


const deleteProducts = async (req, res) => {
    try {
        const products = await prisma.product.delete({
            where: {
                id: Number(req.params.id)
            }
        });
        if (!products.id) {
            return res.status(404).json({
                status: 404,
                message: 'not found',
            });
        }
        return res.status(200).json({
            status: 200,
            message: 'Success'
        });
    } catch (error) {
        return res.status(400).json({
            status: 400,
            message: error.message
        });

    }
};



module.exports = {
    getProducts,
    createProducts,
    getProductById,
    deleteProducts
};