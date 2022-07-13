//package com.software.controller;
//
//import com.software.beans.HttpResponseEntity;
//import com.software.common.Constans;
//import org.apache.shiro.util.CollectionUtils;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestMethod;
//
//import java.util.Map;
//
//public class UserController {
//
//    /**
//     * 用户登录
//     * @param
//     * @return
//     */
//    @RequestMapping(value="/userSignIn",method= RequestMethod.POST, headers = "Accept=application/json")
//    public HttpResponseEntity userSignIn(@RequestBody Map<String,Object> userInfo) {
//        HttpResponseEntity httpResponseEntity = new HttpResponseEntity();
//        try {
//
//            List<UserEntity> hasUser = userEntityMapper.selectUserInfo(userEntity);
//            if(CollectionUtils.isEmpty(hasUser) ) {
//                httpResponseEntity.setCode(Constans.EXIST_CODE);
//                httpResponseEntity.setData(null);
//                httpResponseEntity.setMessage(Constans.LOGIN_USERNAME_PASSWORD_MESSAGE);
//            }else {
//                httpResponseEntity.setCode(Constans.SUCCESS_CODE);
//                httpResponseEntity.setData(hasUser.get(0));
//                httpResponseEntity.setMessage(Constans.LOGIN_MESSAGE);
//            }
//
//        } catch (Exception e) {
//            httpResponseEntity.setCode(Constans.EXIST_CODE);
//            httpResponseEntity.setMessage(Constans.EXIST_MESSAGE);
//        }
//        return httpResponseEntity;
//    }
//
//
//
//}
//
//
