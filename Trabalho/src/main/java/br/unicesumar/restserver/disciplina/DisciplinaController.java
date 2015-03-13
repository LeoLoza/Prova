package br.unicesumar.restserver.disciplina;

import java.util.List;
import javax.persistence.EntityManager;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value="/disciplinas")
@Transactional
public class DisciplinaController {
    
    @Autowired
    private EntityManager em;
    
    @RequestMapping(method = RequestMethod.GET)
    public List<Disciplina> getDisciplinas(){
        return em.createQuery("from Disciplina").getResultList();
    }
    
    @RequestMapping(method = RequestMethod.POST)
    public void criarDisciplina(@RequestBody Disciplina disciplina){
        em.persist(disciplina);
    }
    
    @RequestMapping(method = RequestMethod.PUT)
    public void alterarDisciplina(@RequestBody Disciplina disciplina){
        em.remove(disciplina.getId());
        em.persist(disciplina);
    }
    
    @RequestMapping(value="/{id}",method = RequestMethod.DELETE)
    public void excluirDisciplina(@RequestParam Long id){
        em.remove(id);
    }
}
