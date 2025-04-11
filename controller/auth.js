import { PrismaClient } from '@prisma/client'
import { bcryptjs } from 'bcryptjs';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();

export async function register (req, res, next) {

    const {name, tel, email, password} = req.body;
    const salt = await bcryptjs.genSalt();
    const hashedPassword = await bcryptjs.hash(password, salt);

    try {
    
        const user = await prisma.user.create({
            data: {
                name: name,
                tel: tel,
                email: email,
                password: hashedPassword
            }
        });

        const token = jwt.sign({userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' })

        res.json({
            success: true,
            user: user,
            token
        });

    } catch (error) {
        res.json({
            success: false,
            message: error
        })
    }
}