package com.faire;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.faire.dao.CharacterSW;
import com.faire.dao.DbObjectsService;

/**
 * Created by janda on 24.4.2019.
 */
@CrossOrigin( origins = {"http://localhost:3000", "http://localhost:3010"}) //
@RestController
public class CharacterController {

	@Autowired
	private DbObjectsService dbObjectsService;

	/*
	@GetMapping("/")
	public List<CharacterSW> getCharacterList() {
		return dbObjectsService.findAll();
	}*/

	@GetMapping("/all")
	public List<CharacterSW> getAllCharacters() {
		return dbObjectsService.findAll();
	}

	@GetMapping("/getNames")
	public List<String> getAllNames(){
		return dbObjectsService.getAllNames();
	}

	@GetMapping("/{characterName}")
	public List<CharacterSW> getCharacterByName(@PathVariable String characterName) {
		CharacterSW characterSW = dbObjectsService.findByName(characterName);
		List<CharacterSW> characterSWList = new ArrayList<>();
		characterSWList.add(characterSW);
		return characterSWList;
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<Void> deleteCharacter(@PathVariable long id) {
		CharacterSW character = dbObjectsService.deleteByCharacterId(id);

		if (character != null) {
			return ResponseEntity.noContent().build(); //return back empty response
		}
		return ResponseEntity.notFound().build(); // return not-found error
	}
}
