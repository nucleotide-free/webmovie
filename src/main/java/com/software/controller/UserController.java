package com.software.controller;

import com.software.beans.HttpResponseEntity;
import com.software.common.Constans;
import com.software.dao.Entity.UserEntity;
import com.software.service.UserService;
import org.apache.shiro.util.CollectionUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
@RestController
public class UserController {

    private final Logger logger = LoggerFactory.getLogger(ProductResultController.class);

    @Autowired
    private UserService userService;

    /**
     * 1--用户登录
     */
    @RequestMapping(value="/userSignIn",method= RequestMethod.POST, headers = "Accept=application/json")
    public HttpResponseEntity userSignIn(@RequestBody UserEntity userEntity) {
        HttpResponseEntity httpResponseEntity = new HttpResponseEntity();
            List<UserEntity> hasUser = userService.selectUserInfo(userEntity);
            if(CollectionUtils.isEmpty(hasUser) ) {
                httpResponseEntity.setCode(Constans.EXIST_CODE);
                httpResponseEntity.setData(1);
                httpResponseEntity.setMessage(Constans.LOGIN_MESSAGE);
         //       httpResponseEntity.setMessage(Constans.LOGIN_USERNAME_PASSWORD_MESSAGE);
            }else {
                httpResponseEntity.setCode(Constans.SUCCESS_CODE);
                httpResponseEntity.setData(hasUser.get(0));
                httpResponseEntity.setMessage(Constans.LOGIN_MESSAGE);
            }
        return httpResponseEntity;
    }

    /**
     * 2--用户注册
     */
    @RequestMapping(value="/userSignUp",method= RequestMethod.POST, headers = "Accept=application/json")
    public HttpResponseEntity userSignUp(@RequestBody UserEntity userEntity) {
        HttpResponseEntity httpResponseEntity = new HttpResponseEntity();
        int hasUser = userService.insertUserInfo(userEntity);
        if(hasUser >0) {
            httpResponseEntity.setCode(Constans.SUCCESS_CODE);
            httpResponseEntity.setData(hasUser);
            httpResponseEntity.setMessage(Constans.LOGIN_MESSAGE);
            //       httpResponseEntity.setMessage(Constans.LOGIN_USERNAME_PASSWORD_MESSAGE);

        }else {
            httpResponseEntity.setCode(Constans.EXIST_CODE);
            httpResponseEntity.setData(hasUser);
            httpResponseEntity.setMessage(Constans.LOGIN_MESSAGE);
        }
        return httpResponseEntity;
    }
}


