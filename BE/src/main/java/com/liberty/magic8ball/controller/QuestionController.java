package com.liberty.magic8ball.controller;

import com.liberty.magic8ball.dto.IQuestionDto;
import com.liberty.magic8ball.dto.QuestionRequestDto;
import com.liberty.magic8ball.dto.QuestionResponseDto;
import com.liberty.magic8ball.service.IQuestionService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class QuestionController implements IQuestionController {

    private final IQuestionService questionService;

    public QuestionController(IQuestionService questionService) {
        this.questionService = questionService;
    }

    @Override
    public ResponseEntity<IQuestionDto> answerQuestion(@RequestBody QuestionRequestDto request) {
        return ResponseEntity.ok(questionService.answerQuestion(request));
    }
}
