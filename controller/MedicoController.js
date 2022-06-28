const express = require('express');
const fs = require('fs');

const app = express();
const router = express.Router();

const medico = require('../model/Medico');
const { Console } = require('console');


router.post('/medico/cadastrarMedico', (req, res)=>{

    

    const { nome_medico, email_medico, telefone_medico, celular_medico, tblEspecialidadeId } = req.body;
   

    medico.create(
        {
            nome_medico,
            email_medico,
            telefone_medico,
            celular_medico,
            tblEspecialidadeId

        }
    ).then(
        ()=>{
            res.send('MEDICO INSERIDO COM SUCESSO!');      
        }
    );

});

router.get('/medico/listarMedico', (req, res)=>{

    medico.findAll()
          .then((medicos)=>{
              res.send(medicos)
          });
});

router.get('/medico/listarMedico/:id', (req, res)=>{

    const { id } = req.params

    medico.findByPk(id)
          .then((medico)=>{
              res.send(medico)
          });
});

router.delete('/medico/excluirMedico/:id', (req, res)=>{

    const { id } = req.params;

                medico.destroy({
                where:(id)
            }).then(
                ()=>{
                   
                    res.send('MEDICO EXCLUIDO COM SUCESSO')
                 }
                 );
                });

                  

router.post('/medico/alterarMedico',  (req, res)=>{

    console.log(req.body);
    // res.send("OK!!!!");

    const { nome_medico, email_medico, telefone_medico, celular_medico, tblEspecialidadeId, id} = req.body;
   

            /**  ATUALIZAÇÃO DOS DADOS DO MEDICO **/
            medico.update(
                {  nome_medico,
                    email_medico,
                    telefone_medico,
                    celular_medico,
                    tblEspecialidadeId},
                {where: {id}}
            ).then(
            ()=>{
                res.send('MEDICO ALTERADOS COM SUCESSO!');
            }
            );

        }
        );

    

module.exports = router;