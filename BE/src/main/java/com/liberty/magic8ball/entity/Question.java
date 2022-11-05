package com.liberty.magic8ball.entity;

import com.liberty.magic8ball.enums.Answer;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;

@Getter
@Setter
@Document("questions")
public class Question implements IEntity {

    @Id
    private String id;
    private String question;
    private Answer ans;
    private LocalDateTime createdTime;
    private String browserLang;
    private String browser;
}
