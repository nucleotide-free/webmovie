package com.software.dao;

import com.software.dao.Entity.UserEntity;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserEntityMapper {

    List<UserEntity> selectUserInfo(UserEntity userEntity);

    int insertUserInfo(UserEntity userEntity);
}
