import UserModel from '../models/UserModel.js'

async function registerUser(request, response){
    const {name, email, passward, profile_pic} = request.body;
    const checkEmail = await UserModel.findOne({email})
    if (checkEmail){
        return response.status(400).json({
            message: "이미 등록된 사용자입니다.",
            error: true
        })
    }
    const payload = {
        name, email, passward, profile_pic
    }
    const user = new UserModel(payload)
    const userSave = await user.save()

    return response.status(201).json({
        message: "사용자 등록에 성공하였습니다."
    })
}

export default registerUser