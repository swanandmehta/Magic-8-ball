package com.liberty.magic8ball.dto;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class QuestionResponseDto implements IQuestionDto {
    private String ans;
}
