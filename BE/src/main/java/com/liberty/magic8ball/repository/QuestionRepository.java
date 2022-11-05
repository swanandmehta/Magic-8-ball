package com.liberty.magic8ball.repository;

import com.liberty.magic8ball.entity.Question;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface QuestionRepository extends MongoRepository<Question, String> {
}
