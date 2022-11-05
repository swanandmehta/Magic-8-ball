package com.liberty.magic8ball.controller;

import com.liberty.magic8ball.dto.IQuestionDto;
import com.liberty.magic8ball.dto.QuestionRequestDto;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.validation.Valid;

@RequestMapping("/")
public interface IQuestionController {

    @PostMapping(value = "/question", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
ResponseEntity<IQuestionDto> answerQuestion(@Valid @RequestBody  QuestionRequestDto request);

}
