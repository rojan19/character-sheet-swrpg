package com.faire.model;

import java.util.Map;

import javax.persistence.CollectionTable;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;

/**
 * Created by janda on 29.4.2019.
 */

@Entity
public class CharacterDAO {

	@Id
	@GeneratedValue
	private Long id;
	private String username;
	private Integer stamina;

	@ElementCollection
	@CollectionTable(name = "character_abilities", joinColumns = @JoinColumn(name = "characterdao_id"))
	private Map<String, Integer> abilities;

	@ElementCollection
	@CollectionTable(name = "character_skills", joinColumns = @JoinColumn(name = "characterdao_id"))
	private Map<String, Integer> skills;

	public CharacterDAO() {
	}

	public CharacterDAO(Long id) {
		this.id = id;
	}

	public CharacterDAO(String username, Integer stamina) {
		this.username = username;
		this.stamina = stamina;
	}

	public CharacterDAO(Long id, String username, Integer stamina) {
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

	@Override
	public String toString() {
		return "CharacterDAO{" + "id=" + id + ", username='" + username + '\'' + ", stamina=" + stamina + ", abilities="
				+ abilities + ", skills=" + skills + '}';
	}
}
