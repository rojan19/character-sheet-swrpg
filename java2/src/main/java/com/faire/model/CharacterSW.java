package com.faire.model;

import java.util.Map;

/**
 * Created by janda on 24.4.2019.
 */
public class CharacterSW {
	private Long id;
	private String username;
	private Integer stamina;
	private Map<String, Integer> abilities;
	private Map<String, Integer> skills;

	public CharacterSW() {
	}

	public CharacterSW(Long id, String username, Integer stamina) {
		this.id = id;
		this.username = username;
		this.stamina = stamina;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public Integer getStamina() {
		return stamina;
	}

	public void setStamina(Integer stamina) {
		this.stamina = stamina;
	}

	public Map<String, Integer> getAbilities() {
		return abilities;
	}

	public void setAbilities(Map<String, Integer> abilities) {
		this.abilities = abilities;
	}

	public Map<String, Integer> getSkills() {
		return skills;
	}

	public void setSkills(Map<String, Integer> skills) {
		this.skills = skills;
	}
}
