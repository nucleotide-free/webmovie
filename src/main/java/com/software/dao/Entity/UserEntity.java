package com.software.dao.Entity;

public class UserEntity {
    private String userId;
    private String username;
    private String password;

    public String getId() {
        return userId;
    }
    public String getUsername() {
        return username;
    }
    public String getPassword() {
        return password;
    }

    public void setId(String id) {
        this.userId = id;
    }
    public void setUsername(String username) {
        this.username = username == null ? null : username.trim();
    }
    public void setPassword(String password) {
        this.password = password == null ? null : password.trim();
    }

    public UserEntity() {}

    public UserEntity(UserEntity userEntity) {
        super();
        this.userId = userEntity.getId();
        this.username = userEntity.getUsername();
        this.password = userEntity.getPassword();
    }
}
