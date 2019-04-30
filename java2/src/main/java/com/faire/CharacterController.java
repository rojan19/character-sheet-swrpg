package com.faire;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.faire.model.CharacterDAO;
import com.faire.model.CharacterRepository;
import com.faire.model.CharacterSW;
import com.faire.model.DbObjectsService;

/**
 * Created by janda on 24.4.2019.
 */
@CrossOrigin( origins = {"http://localhost:3000", "http://localhost:3010"}) //
@RestController
public class CharacterController {

	@Autowired
	private DbObjectsService dbObjectsService;

	@Autowired
	private CharacterRepository repository;

	/*
	@GetMapping("/")
	public List<CharacterSW> getCharacterList() {
		return dbObjectsService.findAll();
	}*/

	@GetMapping("/all")
	public List<CharacterDAO> getAllCharacters() {
		return repository.findAll();
	}

	@GetMapping("/allold")
	public List<CharacterSW> getAllCharactersOld() {
		return dbObjectsService.findAll();
	}

	@GetMapping("/getNames")
	public Map<Long, String> getAllNames(){
		List<CharacterDAO> characterList = repository.findAll();
		Map<Long, String> result = new HashMap();
		for (CharacterDAO characterDAO : characterList) {
			result.put(characterDAO.getId(), characterDAO.getUsername());
		}
		return result;
	}

	@GetMapping("/{id}")
	public CharacterDAO getCharacter(@PathVariable Long id) {
		CharacterDAO characterDAO = repository.getOne(id);
		return characterDAO;
	}

	// todo prepsat na repository
	@DeleteMapping("/{id}")
	public ResponseEntity<Void> deleteCharacter(@PathVariable long id) {
		CharacterSW character = dbObjectsService.deleteByCharacterId(id);

		if (character != null) {
			return ResponseEntity.noContent().build(); //return back empty response
		}
		return ResponseEntity.notFound().build(); // return not-found error
	}
}
