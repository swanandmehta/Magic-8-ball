package com.liberty.magic8ball.dto;

import lombok.Getter;
import lombok.Setter;
import org.springframework.lang.NonNull;

@Getter
@Setter
public class QuestionRequestDto implements IQuestionDto {

    private String lang;
    @NonNull
    private String question;
    private String browser;
}
