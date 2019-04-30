package com.faire.model;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

/**
 * Created by janda on 24.4.2019.
 */
@Service
public class DbObjectsService {

	public static List<CharacterSW> characterList = new ArrayList<>();
	private static long idCounter = 0;
	private static Map<String, Integer> skillsMap = new HashMap();

	static {
		skillsMap.put("astrogation", 0);
		skillsMap.put("athletics", 0);
		skillsMap.put("brawl", 0);
		skillsMap.put("charm", 0);
		skillsMap.put("coercion", 0);
		skillsMap.put("cool", 0);
		skillsMap.put("coordination", 0);
		skillsMap.put("deception", 0);
		skillsMap.put("discipline", 0);
		skillsMap.put("gunnery", 0);
		skillsMap.put("knowledge - inner worlds", 0);
		skillsMap.put("knowledge - education", 0);
		skillsMap.put("knowledge - lore", 0);
		skillsMap.put("knowledge - outer rim", 0);
		skillsMap.put("knowledge - underworld", 0);
		skillsMap.put("knowledge - xenology", 0);
		skillsMap.put("leadership", 0);
		skillsMap.put("lightsaber", 0);
		skillsMap.put("mechanics", 0);
		skillsMap.put("medicine", 0);
		skillsMap.put("melee", 0);
		skillsMap.put("negotiation", 0);
		skillsMap.put("perception", 0);
		skillsMap.put("piloting - planetary", 0);
		skillsMap.put("piloting - space", 0);
		skillsMap.put("ranged - heavy", 0);
		skillsMap.put("ranged - light", 0);
		skillsMap.put("resilience", 0);
		skillsMap.put("skulduggery", 0);
		skillsMap.put("stealth", 0);
		skillsMap.put("streetwise", 0);
		skillsMap.put("survival", 0);
		skillsMap.put("vigilance", 0);

		CharacterSW mys = new CharacterSW(idCounter++, "Myš", 13);

		Map<String, Integer> mysAbilities = new HashMap<>();
		mysAbilities.put("bra", 2);
		mysAbilities.put("agi", 2);
		mysAbilities.put("int", 3);
		mysAbilities.put("cun", 2);
		mysAbilities.put("will", 2);
		mysAbilities.put("pre", 4);
		mys.setAbilities(mysAbilities);

		Map<String, Integer> mysSkills = new HashMap<>();
		mysSkills = skillsMap;
		mysSkills.replace("negotiation", 1);
		mysSkills.replace("vigilance", 2);

		mys.setSkills(mysSkills);
		characterList.add(mys);

		CharacterSW ailin = new CharacterSW(idCounter++, "Ailin", 13);

		Map<String, Integer> aiAbilities = new HashMap<>();
		aiAbilities.put("bra", 2);
		aiAbilities.put("agi", 4);
		aiAbilities.put("int", 3);
		aiAbilities.put("cun", 2);
		aiAbilities.put("will", 3);
		aiAbilities.put("pre", 2);
		ailin.setAbilities(mysAbilities);

		Map<String, Integer> aiSkills = new HashMap<>();
		aiSkills = skillsMap;
		aiSkills.replace("mechanics", 1);
		aiSkills.replace("ranged-light", 1);
		ailin.setSkills(aiSkills);

		characterList.add(ailin);
	}

	public CharacterSW findById(long id) {
		for (CharacterSW character : characterList) {
			if (character.getId() == id) {
				return character;
			}
		}
		return null;
	}

	public CharacterSW findByName(String name) {
		for (CharacterSW character : characterList) {
			if (character.getUsername().equals(name)) {
				return character;
			}
		}
		return null;
	}

	public List<CharacterSW> findAll() {
		return characterList;
	}

	public List<String> getAllNames() {
		List<String> result = new ArrayList<>();
		for (CharacterSW character : characterList) {
			result.add(character.getUsername());
		}
		return result;
	}

	public CharacterSW deleteByCharacterId(long id) {
		CharacterSW character = findById(id);

		if (character != null && characterList.remove(character)) {
			System.out.println("Character deleted.");
			return character;
		}
		return null;
	}
}
