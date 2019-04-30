package com.faire;

import static com.faire.model.DbObjectsService.characterList;

import java.util.HashMap;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

import com.faire.model.CharacterDAO;
import com.faire.model.CharacterRepository;

@SpringBootApplication
public class Application implements CommandLineRunner {
	private Logger logger = LoggerFactory.getLogger(this.getClass());
	private static Map<String, Integer> abilities = new HashMap<>();
	private static Map<String, Integer> skills = new HashMap<>();

	private void resetSkillsAbilities() {
		abilities.replaceAll((k, v) -> v = 0);
		skills.replaceAll((k, v) -> v = 0);
	}

	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
	}

	@Autowired
	CharacterRepository repository;

	// Umyslne spatne nastaveny port
	@Bean
	public WebMvcConfigurer corsConfigurer() {
		return new WebMvcConfigurerAdapter() {
			@Override
			public void addCorsMappings(CorsRegistry registry) {
				registry.addMapping("/").allowedOrigins("http://localhost:3031");
			}
		};
	}

	@Override
	public void run(String... args) throws Exception {
		abilities.put("bra", 1);
		abilities.put("agi", 1);
		abilities.put("int", 1);
		abilities.put("cun", 1);
		abilities.put("will", 1);
		abilities.put("pre", 1);

		skills.put("astrogation", 0);
		skills.put("athletics", 0);
		skills.put("brawl", 0);
		skills.put("charm", 0);
		skills.put("coercion", 0);
		skills.put("cool", 0);
		skills.put("coordination", 0);
		skills.put("deception", 0);
		skills.put("discipline", 0);
		skills.put("gunnery", 0);
		skills.put("knowledge - inner worlds", 0);
		skills.put("knowledge - education", 0);
		skills.put("knowledge - lore", 0);
		skills.put("knowledge - outer rim", 0);
		skills.put("knowledge - underworld", 0);
		skills.put("knowledge - xenology", 0);
		skills.put("leadership", 0);
		skills.put("lightsaber", 0);
		skills.put("mechanics", 0);
		skills.put("medicine", 0);
		skills.put("melee", 0);
		skills.put("negotiation", 0);
		skills.put("perception", 0);
		skills.put("piloting - planetary", 0);
		skills.put("piloting - space", 0);
		skills.put("ranged - heavy", 0);
		skills.put("ranged - light", 0);
		skills.put("resilience", 0);
		skills.put("skulduggery", 0);
		skills.put("stealth", 0);
		skills.put("streetwise", 0);
		skills.put("survival", 0);
		skills.put("vigilance", 0);



		CharacterDAO mys = new CharacterDAO("Myšák", 13);
		abilities.replace("bra", 1);
		abilities.replace("agi", 2);
		abilities.replace("int", 2);
		abilities.replace("cun", 2);
		abilities.replace("will", 3);
		abilities.replace("pre", 4);
		mys.setAbilities(abilities);

		skills.replace("negotiation", 2);
		skills.replace("cool", 1);
		skills.replace("discipline", 1);
		mys.setSkills(skills);

		repository.save(mys);
		resetSkillsAbilities();

		CharacterDAO ailin = new CharacterDAO("Ailinka", 15);
		abilities.replace("bra", 2);
		abilities.replace("agi", 4);
		abilities.replace("int", 3);
		abilities.replace("cun", 2);
		abilities.replace("will",2);
		abilities.replace("pre", 2);
		ailin.setAbilities(abilities);

		skills.replace("mechanics", 2);
		skills.replace("ranged - light", 1);
		skills.replace("piloting - sprace", 1);
		ailin.setSkills(skills);

		repository.save(ailin);
		resetSkillsAbilities();


		/*
		logger.info("Student id 101: -> {}", repository.findById(101L));
		logger.info("All users: -> {}",repository.findAll());
		logger.info("Inserting -> {}", repository.save(new CharacterDAO("Myšák", 12)));
		logger.info("Inserting -> {}", repository.save(new CharacterDAO("Ailin", 14)));
		logger.info("Update 101 -> {}", repository.save(new CharacterDAO(1L, "Myšák", 13)));
		repository.deleteById(2L);
		logger.info("All users: -> {}", repository.findAll());
		*/
	}
}
