package com.software.dao.Entity;

public class UserEntity {
    private int id;
    private String username;
    private String password;

    public int getId() {
        return id;
    }
    public String getUsername() {
        return username;
    }
    public String getPassword() {
        return password;
    }

    public void setId(int id) {
        this.id = id;
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
        this.id = userEntity.getId();
        this.username = userEntity.getUsername();
        this.password = userEntity.getPassword();
    }
}
