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

        const token = jwt.sign({userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        return res.status(200).cookie('token', token).json({
            success: true,
            userId: user.id,
        });

    } catch (error) {
        return res.json({
            success: false,
            message: error
        })
    }
}

export async function login (req, res, next) {

    try {
        const {email, password} = req.body;

        const user = await prisma.user.findUnique({
            where: { email }
        });

        if (!user) {
            return res.status(401).json({
                success: false,
                message: 'User not found'
            })
        }

        const isMatch = await bcryptjs.compare(password, user.password);
        if (!isMatch) {
          return res.status(401).json({
            success: false,
            message: 'Invalid credentials'
          });
        }

        const token = jwt.sign({userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' })

        return res.status(200).cookie('token', token).json({
            success: true,
            userId: user.id,
        });


    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error
        });
    }
}