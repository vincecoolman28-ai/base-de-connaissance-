// On place les données brutes directement dans le code
const rawData = `
CMT Paris,LISTE DU CORPS MEDICAL,,,,,,
CMT Malakoff,,,,,,,
CMT Pajol,,,,,,,
Nom,Prenom,Specialité,Lieu de consultation,Prise de rdv,Secrétariat de cs,Secrétariat d'hospi,DECT
ABITBOL,Olivia,Ophtalmologie,"168 Rue Raymond Losserand 75014 Paris",8000,3039,3039,
ADAM,Frederic,Anesthésie,"Porte 1 niveau G Ste Geneviève",3640,7580,,
ADAM,Julien,Ana path,"Porte 18 niveau 0 St Luc",,3645,,
AFRIAT,Raymond,Gyneco Obstetrique,"CMT 14 189 Rue Raymond ",8719,7173,,
AIM,Jean Luc,Urgences,Urgences,3458,7452,3787,7907
ALAMRI,Ahmed,Diabétologie,"Porte 8 niveau G St Jean",8000,6145,3395,
ALFONSI,Pascal,Anesthésie,"Porte 1 niveau G Ste Geneviève",3640,7580,,3677
ALIKHTIAR,Inaya,Pediatre / Néonatalogie,"Porte 10 niveau 3 NDBS",8105,6403,,6723
ATANASIU,Calina,Gastro,"POLE SPE CHIR 8503- PM GASTRO",,,,3183
BANU ,Isabele,Diabétologie,"Porte 8 niveau G St Jean",8000,6145,3395,
BARRE,Amélie,Proctologie,"Porte 3",8000,7245,7469,
BASSO MICHAUD,Valéria,Chir digestive ,"Porte 2 niveau G St Jean",8000,,, 
BATAIL,Aurelie,Dentiste,"CMT Malakoff",8585,8800,,
BAUDELLE ,Emmanuelle,Orthophoniste,"Porte K 189 rue Raymond Losserand",8000,3378,3440,
BELLASFAR,Dorsaf,Urgences,"POLE MED 8526- PM URGENCES",,,,7224
BEN ZINA,Nader,Gyneco Obstetrique,"Porte 10 niveau 1 NDBS",8719,8103,8104,6734
BENFREDJ,Paul,Proctologie,"Porte 3",8000,7245,7469,7719
BENHATCHI,Nassima,Ophtalmologie,"168 Rue Raymond Losserand 75014 Paris",8000,3039,3039,
BENICHOU,Ludovic,Chir Maxillo-Faciale,"Porte K 189 rue Raymond Losserand",8000,7699,3440,7194
BENOILID,Michael,Chir plastique,"Porte 1 niveau G Ste Geneviève",8000,3771,3771,
BENOUGHIDANE ,BANY,Méd Vasc,"Porte 2 niveau G St Jean",8000,3184,8184,
BENSMAIL,Djawed,Ophtalmologie,"168 Rue Raymond Losserand 75014 Paris",8000,3039,3039,
BERKANI,Merouane,Ophtalmologie,"168 Rue Raymond Losserand 75014 Paris",8000,3039,3039,
BERNARDESCHI,Celine,Chir Maxillo-Faciale,"Porte K 189 rue Raymond Losserand",8000,7699,3440,
BESSE,Francoise,Cardiologie/Explocv,"Porte 8 niveau G St Jean",7023,3777,,
BEZIE ,Yvonnick,Pharmacie,"Porte 16 niveau -1 St Michel",3360,3603,,7859
BOILLOT,François,Chir ortho,"Porte 2 niveau G St Jean",8000,3357,"7845/7985",6886
BONETE,Rémi,Laboratoire et DIM,"Porte 22 niveau 1 Didot",,8044,,"61567804"
BONHOMME ,Stephanie,Méd Vasc,"Porte 2 niveau G St Jean",8000,3184,7831,7458
BONNET,Veronique,Diabétologie,"CMT 189 Rue Raymond ",8000,6170,3395,
BONNIOT,Jean Pierre,Pneumologie,"CMT 189 Rue Raymond ",8000,6170,3926,
BORIE CAVROIS,Marie Françoise,Médecine Interne,"Porte 14 niveau G St Michel",8000,7317,6305,6928
BOROJENI,Shahed,Chir uro,"Porte 2 niveau G St Jean",8000,3821,"7477/8231",
BOROJENI,Shahed,Chir uro,"CMT 189 Rue Raymond ",8000,6170,,
BOUBEE,Marie Laure,Anesthésie,"Porte 1 niveau G Ste Geneviève",3640,7580,,7885
BOUILLAUD,Florence,Diabétologie,"Porte 8 niveau G St Jean",8000,6145,3395,
BOUILLOT,Jean Luc,Chir digestive,"Porte 2 niveau G St Jean",8000,3556,3800,
BOUJENAH,Laurence,Pediatre / Néonatalogie,"Porte 10 niveau 3 NDBS",8105,6403,,7083
BOULAY COLETTA,Isabelle ,Imagerie médicale,"Hall d'accueil",8060,3603,,7784
BOURAT,Benoit,Chir vasc,"Porte 2 niveau G St Jean",8000,5513,3471,
BOURA,Benoit,"Chir Vasc","POLE CNVM 8510- PM CHIR VASC",,,,3536
BOURSIER,Virginie,DSI,"Porte 22 niveau 0 Didot",,3603,,7717
BUMBU , Anisoara,Diabétologie,"Porte 8 niveau G St Jean",8000,6145,3395,
BUSQUET,Jacques,Chir vasc,"CMT Malakoff",8585,8800,,
CADOR,Romain,Cardiologie,"Porte 8 niveau G St Jean",8000,3746,3129,7811
CAILLOT ,Aude,"Chir Maxillo-Faciale","Porte K 189 rue Raymond Losserand",8000,7699,3440,
CAISSO,Cécile,Urgences,Urgences,3458,7452,3787,
CARBONE,Paolo,Doppler,"Porte 8 niveau G St Jean",7023,3777,,
CARUSO,Dario,Urgences,"POLE MED 8526- PM URGENCES",,,,3466
CASANOVA ,Jean Michel,"Gyneco Obstetrique/nephrologue","Porte 10 niveau 1 NDBS",8719,8104,8104,
CASSUTO,Margot,Urgences,Urgences,3458,7452,3787,
CAUCANAS,Clemence,Méd Vasc,"Porte 2 niveau G St Jean",8000,3184,7861,
CAZEAU,Serge,Rythmologie,"Porte 8 niveau G St Jean",3725,3725,3129,8100
CECCARELLI,Marie,Gyneco Obstetrique,"Porte 10 niveau 1 NDBS",8719,8103,8104,06.20.96.83.23
CEDDAHA,Michelle,Anesthésie,"Porte 1 niveau G Ste Geneviève",3640,7580,,7916
CHANTELOUP,Elise,Gastro enterologie,"Porte 3 niveau G ",8000,3009,3399,7614
CHAPUIS,Francoise,Urgences,Urgences,3458,7452,3787,
CHARNOZ,Bernard,Cardiologie/explo,"Porte 8 niveau G St Jean",3777,3746,3129,
CHAINE SIDIBE,Benedicte,Dermatologie,"CMT Pajol",8686,8444,,
CHALFINE,Annie,EOH unité hygiène,,,,,7768
CHAMBAZ,Mathieu,Anesthésie,"Porte 1 niveau G Ste Geneviève",3640,7580,,7617
CHAMPAULT,Axele,Chir digestive,"Porte 2 niveau G St Jean",8000,3556,3800,
CHANTAL,DUVERGER,Douleur,"Porte 14 niveau G St Michel",8000,6180,,
CHATEAUNEUF ,Anne Laurence,Anesthésie,"Porte 1 niveau G Ste Geneviève",3640,7580,,7916
CHATEL,Harold,Chir plastique,"Porte 1 niveau G Ste Geneviève",8000,3771,3771,
CHAUFFERT,Maryline,Laboratoire,"Notre Dame",,8044,,3634
CHEBBI,Ala,Chir uro,"Porte 2 niveau G St Jean",8000,3821,"7477/8231",
CHEDAN,Françoise,Neurologie,"Porte 8 niveau G St Jean",3769,3769,7242,7356
CHERIF,Mohamed,Anesthésie,"Porte 1 niveau G Ste Geneviève",3640,7580,,7916
CHERIN ,Mélanie,Réa Poly,"Porte 10 niveau 0 NDBS",,7135,,
CHERVET,Delphine,Urgences,Urgences,3458,7452,3787,
CHEVALLIER,Gerard,ORL,"Porte K 189 rue Raymond Losserand",8000,3378,3440,
COHEN KISIELEWSI,Yardena,Gyneco Obstetrique,"Porte 10 niveau 1 NDBS",8719,8103,8104,8049
COHEN SOLAL,Julien,Rhumatologie,"CMT 189 Rue Raymond ",8000,6170,6170,7903
COHEN-SOLAL,Julien,Rhumatologie,"Porte 14 niveau G St Michel",7317,7317,7795,
CONARD,Jacqueline,Hématologue,"Porte 2 niveau G St Jean",3184,3184,,
CONSOLI,Nathalie,Soins Palliatifs,"Porte G niveau 1 Losserand",3334,3334,,7280
CONVERSY,LEA,Gyneco Obstetrique,"Porte 10 niveau 1 NDBS",8719,8103,8104,6781
CONVERSY,Lea,Pedopsychiatre,"Porte 10 niveau 1 NDBS",8719,8104,8104,
CORSO,Aurore,Imagerie médicale,"Hall d'accueil",8060,3603,,7783
COSTANZO,Alessandro,Chir vasc,"Porte 2 niveau G St Jean",8000,5513,3471,
COURILLON,Florence,Laboratoire,"Notre Dame",,8044,,3624
COURORE,Francois,Laboratoire,"Notre Dame",,8044,,6909
COUTAUX,Anne,Douleur,"Porte 14 niveau G St Michel",8000,6180,,
COUTEAUD,Chantal,Laboratoire,"Notre Dame",,8044,,3028
COUZIGOU,Carine,Infectieux,"Porte 2 niveau G St Jean",3184,3184,,7824
CRISTEA,Cosmin,Gastro,"POLE SPE CHIR 8503- PM GASTRO",,,,3369
CRISTEA COSMIN ,Gabriel,Gastro enterologie,"Porte 2 niveau G St Jean",8000,3009,3399,
CUDEK,Paulette,Laboratoire,"Notre Dame",,8044,,7836
DABAN,Catherine,Gyneco Obstetrique,"Porte 10 niveau 1 NDBS",8719,8104,8104,
DANDON,Michel,Doppler,"Porte 8 niveau G St Jean",7023,3777,,
DANSET ,Jean Baptiste,Gastro enterologie,"Porte 3 niveau G ",8000,3009,3399,
DANSET,Jean-Baptiste,Gastro,"POLE SPE CHIR 8503- PM GASTRO",,,,6952
DASSONVILLE,Bernard,Cardiologie/explo,"Porte 8 niveau G St Jean",3777,3746,3129,
DAUTHIER,Clément,Anesthésie,"Porte 1 niveau G Ste Geneviève",3640,7580,,7885
DE BLIC ,Romain,Chir vasc,"Porte 2 niveau G St Jean",8000,5513,3471,
DE BONNECHOSE ,Gregoire,Gastro enterologie,"Porte 3 niveau G",8000,3009,3399,
DE BONNECHOSE ,Gregoire,Proctologie,"Porte 3",8000,7245,7469,
DE JODE ,Patrick,Cardiologie/explo,"Porte 8 niveau G St Jean",3777,3746,3129,
DE KERAUTEN,Albane,Oncologie,"Porte 16 niveau G St Michel",3078,"3189/3078",3894,7805
DE LA ROCHEFORDIERE ,Anne,Oncologie,"Porte 16 niveau G St Michel",3078,"3189/3078",3894,7805
DE NICOLA ,Raphael,Ophtalmologie,"168 Rue Raymond Losserand 75014 Paris",8000,3039,3039,
DE PARADES,Vincent,Proctologie,"Porte 3",8000,7245,7469,
DE TORCY,Marie,Pneumologie,"Porte 14 niveau G St Michel",8000,3153,"3926/3894",7057
DECAUDAVEINE ,Suzanne,Chir Maxillo-Faciale,"Porte K 189 rue Raymond Losserand",8000,7699,3440,
DEGIEUX,Pierre,Rhumatologie,"Porte 14 niveau G St Michel",8000,7317,7795,
DEL BOURGO,Audrey,Dentiste,"CMT Malakoff",8585,8800,,
DELALANDE,Philippe,Gastro enterologie,"Porte 3 niveau G",8000,3009,3399,7489
DELEUZE,Philippe,Cardiologie/explo,"Porte 8 niveau G St Jean",3777,3746,,
DELOS,Aurélie,Cardiologie/explo,"Porte 8 niveau G St Jean",3777,3746,3129,
DEMAZURE,Eric,Readapt cardiaque,"Porte A niveau 0 Losserand",6348,,, 
DERKX,Salomé,Cardiologie,"CMT 189 Rue Raymond ",8000,6170,,
DERKX,Salomé,Cardiologie,"CMT Malakoff",8585,8800,,
DERYCKE,Lucie,"Chir Vasc","POLE CNVM 8510- PM CHIR VASC",,,,3730
DESMOTTES,Loic,Imagerie médicale,"Hall d'accueil",8060,3603,,7973
DESPORTES,Gilles,Chir ortho,"Porte 2 niveau G St Jean",8000,3020,"7845/7985",7551
DORVAL,Ombeline,Gastro,"POLE SPE CHIR 8503- PM GASTRO",,,,7290
DROUET,Ludovic,Hématologue,"Porte 2 niveau G St Jean",8000,3184,,
DUC,Philippe,Readapt cardiaque,"Porte B niveau 0 Losserand","06 69 26 06 29",,, 
DUCASSE NEVEUX,Marie Helene,Anesthésie,"Porte 1 niveau G Ste Geneviève",3640,7580,,7873
DUCHATELLE DUSSAULE,Véronique,Ana path,"Porte 18 niveau 0 St Luc",,3645,,7613
DUCKERT,Isabelle,Douleur,"Porte 14 niveau G St Michel",8000,6180,,7147
DUCROS,Jean Jacques,Phlebologie,"CMT 189 Rue Raymond ",8000,6170,,
DUFAY,Antoine,Cardiologie,"CMT 189 Rue Raymond ",8000,6170,,
DUFAY,Antoine,Cardiologie,"CMT Malakoff",8000,8800,,
DUFAY,Antoine,Cardiologie,"Porte 8 niveau G St Jean",8000,3746,3129,
DUPONT,Jean,Cardiologie,"Porte 8 niveau G St Jean",8000,3746,3129,
DUPONT,Jean,Cardiologie,"CMT Malakoff",8585,8800,,
DUPONT,Jean,Cardiologie,"CMT 189 Rue Raymond ",8000,6170,,
DUPUY,Olivier,Diabétologie,"Porte 8 niveau G St Jean",8000,6145,3395,7690
DURAND,Philippe,Cardiologie,"Porte 8 niveau G St Jean",8000,3746,3129,
DURAND,Xavier,Chir uro,"Porte 2 niveau G St Jean",8000,3821,"7477/8231",
DUSSEL,Marguerite,Douleur,"Porte 14 niveau G St Michel",8000,6180,,7147
D'USSEL,Marguerite,Douleur,"Porte 14 niveau G St Michel",6180,6180,,
DUTRAY,Françoise,Pédiatre,"CMT Malakoff",8585,8800,,
EBBO,David,ORL,"Porte K 189 rue Raymond Losserand",8000,3378,3440,
EBOUE,Florence,Gyneco Obstetrique,"Porte 10 niveau 1 NDBS",8719,8103,8104,3546
EDMONT,Elodie,Sage-femme,"CMT Pajol",8686,8444,,
EIFERMAN,Charles,Cardiologie,"Porte 8 niveau G St Jean",8000,3746,3129,
EKOUME,Isabelle,Pneumologie,"CMT Pajol",8686,8444,,
EL BACHA,Chama,Gyneco Obstetrique,"Porte 10 niveau 1 NDBS",8719,8103,8104,8167
EL ETR,Martine,Diabétologie,"CMT 189 Rue Raymond ",8000,6170,3395,
EL KHOURY,Bernard,Gastro,"POLE SPE CHIR 8503- PM GASTRO",,,,8549
EL KOHEN,Asma,Urgences,Urgences,3458,7452,3787,
EL MTUIALY,Ahlem ,Proctologie,"CMT Porte 3 niveau G Ste Geneviève",8000,7245,7469,
EL RIFAI,Abdulrazak,Urgences,Urgences,3458,7452,3787,7187
FATHALLA,Nadia,Gastro,"POLE SPE CHIR 8503- PM GASTRO",,,,7183
FENNOURI (depart fin decembre),Mohamed,Chir uro,"Porte 2 niveau G St Jean",8000,3821,"7477/8231",6895
FENNOURI,Mohamed,Chir uro,"CMT Malakoff",8000,8800,"7477/8231",
FENOLL,Claire,Chir plastique,"Porte 1 niveau G Ste Geneviève",8000,3771,3771,
FETIZON,Brigitte,Anesthésie,"Porte 1 niveau G Ste Geneviève",3640,7580,,7623
FEVRE,Guillaume,Anesthésie,"Porte 1 niveau G Ste Geneviève",3640,7580,,7745
FEVRIER ,Martine,Laboratoire,"Notre Dame",,8044,,7347
FICHET,Sara,Gyneco Obstetrique,"Porte 10 niveau 1 NDBS",8719,8103,8104,
FITE,Charoltte,Dermatologie,"Porte 14 niveau G St Michel",8000,3558,,
FOUILLAT,Dominique,Anesthésie,"Porte 1 niveau G Ste Geneviève",3640,7580,,7461
FOUDI ,Faride,Méd Vasc,"Porte 2 niveau G St Jean",8000,3184,8025,7486
FRANCESCHI,Claude,Phlébo/doppler,"CMT 189 Rue Raymond ",8000,6170,,
FRANDON,Denis,Diabétologie,"CMT 189 Rue Raymond ",8000,6170,3395,
FRETON ,Maxime,Psy liaison,Urgences,3458,7452,3787,
FRETON,Maxime,Psychiatre,Urgences,3458,7452,3787,7677
FRANCOIS,Anne-Marie,Gastro,"POLE SPE CHIR 8503- PM GASTRO",,,,8697
GANANSIA,Olivier,Urgences,Urgences,3458,7452,3787,7654
GARCON,Philippe,Cardiologie,"Porte 8 niveau G St Jean",8000,3746,3129,7693
GARDIAN,Viorica,Gynécologie,"CMT Malakoff",8585,8800,8221,
GERLIER,Camille,Urgences,"POLE MED 8526- PM URGENCES",,,,8023
GERMANOS,Ayla,Urgences,"POLE MED 8526- PM URGENCES",,,,3621
GOUEFFIC,Yann,Chir vasc,"POLE CNVM 8510- PM CHIR VASC",,,,6172
GOUEFFIC,Yann,Chir vasc,"POLE CNVM 8510- PM CHIR VASC",,,,6172
GOUZE,Charles,"Chir Vasc","POLE CNVM 8510- PM CHIR VASC",,,,8528
GRABER,Martin,Ophtalmologie,"168 Rue Raymond Losserand 75014 Paris",8000,3039,,
GRACIER,Frederic,Cardiologie/explo,"Porte 8 niveau G St Jean",3777,3746,3129,
GRACIES,Henri,Ophtalmologie,"168 Rue Raymond Losserand 75014 Paris",8000,3039,3039,
GRANIER,Sandra,Oncologie,"Porte 16 niveau G St Michel",3078,"3189/3078",3894,7805
GRESSIER,Ludivine,Dermatologie,"Porte 14 niveau G St Michel",8000,3558,,
GRILLOT,Pierre,Dermatologie,"CMT 189 Rue Raymond ",8000,6170,,
GUENON ,Philippe,ORL,"Porte K 189 rue Raymond Losserand",8000,3378,3440,
GUERIN,Capucine,Med générale,"CMT 189 Rue Raymond ",8000,6170,,
HADDAK,belkacem,Cardiologie,"POLE CNVM 8508- PM CARDIO",,,,8086
HAMMOUD,Sirine,Ophtalmologie,"CMT Malakoff",8000,8800,,
HAUCHARD,Erwan,Chir Maxillo-Faciale,"Porte K 189 rue Raymond Losserand",7699,7699,3440,
HAUGUEL,Alexandra,"Chir Vasc","POLE CNVM 8510- PM CHIR VASC",,,,3183
HAYEM ,Gilles,Rhumatologie,"Porte 14 niveau G St Michel",8000,7317,7795,
HENRIOT,Edouard,Chir Maxillo-Faciale,"Porte K 189 rue Raymond Losserand",8000,7699,3440,
HERAIT,Julien,Gyneco Obstetrique,"Porte 10 niveau 1 NDBS",8719,8104,8104,
HERETH,,Ophtalmologie,"CMT Malakoff",8000,8800,,
HERETH,,Ophtalmologie,"168 Rue Raymond Losserand 75014 Paris",8000,3039,,
HERGLI,ILHEM,Ana path,"Porte 18 niveau 0 St Luc",,3645,,
HODEL ,Jerome,Imagerie médicale,"Hall d'accueil",8060,3603,,7778
HOFFMAN,Dr,Urgences,"POLE MED 8526- PM URGENCES",,,,7108
HOFFMANN,Nadege Fatiha,Urgences,Urgences,3458,7452,3787,
HUBERT,Sidonie,Oncologie,"Porte 16 niveau G St Michel",3078,"3189/3078",6120,
HUET ,Dominique,Diabétologie,"Porte 8 niveau G St Jean",8000,6145,3395,7925
HUET ,Maylis,Urgences,Urgences,3458,7452,3787,7169
HUET,Dominique,Diabétologie,"Porte 8 niveau G St Jean",8000,6145,3395,7925
HUGUES ,Albane,Med générale,"CMT Pajol",8686,8444,,
HUSCENOT,Patrick,Anesthésie,"Porte 1 niveau G Ste Geneviève",3640,7580,,7498
ISRAEL,Jonathan,Rhumatologie,"CMT 189 Rue Raymond ",8000,6170,6354,
JACQUEMOD,Aurelien,Anesthésie,"Porte 1 niveau G Ste Geneviève",3640,7580,,7382
JAGU,Annabelle,Cardiologie,"POLE CNVM 8508- PM CARDIO",,,,3674
KAMTCHUENG,Pryscille,Cardiologie,"CMT 189 Rue Raymond ",8000,6170,,
KAMTCHUENG,Pryscille,Cardiologie,"CMT Pajol",8000,8444,,
KARAGULIAN,Philippe,Phlebologie,"CMT 189 Rue Raymond ",8000,6170,,
KETOFF,Serge,Chir Maxillo-Faciale,"Porte K 189 rue Raymond Losserand",8000,7699,3440,
KHALIFE,MARC,Chir ortho,"Porte 2 niveau G St Jean",8000,3580,"7845/7985",6886
KOMAJDA,Michel,Cardiologie,"POLE CNVM 8508- PM CARDIO",,,,3397
KOMAJDA,Michel,cardiologie,"Porte 8 niveau G St Jean",3727,3727,,
KOSTER,Delphine,Anesthésie,"Porte 1 niveau G Ste Geneviève",3640,7580,,7473
L HUILLERY,Delphine,Douleur,"Porte 14 niveau G St Michel",8000,7740,,
LACAILLE,Louise,Laboratoire,"Notre Dame",,8044,,6156
LACHKAR,Yves,Ophtalmologie,"Porte 1 niveau G Ste Geneviève",8000,3039,3039,3795
LACOMBE,Caroline,Gastro,"POLE SPE CHIR 8503- PM GASTRO",,,,6293
LAFARGE,Bénédicte,Gyneco Obstetrique,"Porte 10 niveau 1 NDBS",8719,8104,8104,6748
LAFAY ,Michel,Pneumologie,"Porte 14 niveau G St Michel",8000,3153,3926,7888
LAFI,Mehdi,Urgences,Urgences,3458,7452,3787,
LAHLOU,Nadia,Tabacologue,"Porte 14 niveau G St Michel",8000,3153,3926,
LAHLOU,Nadia,Tabacologue,"Porte 14 niveau G St Michel",8000,3153,3926,
LAMAU,Charlotte,Gynécologie ,"CMT 189 Rue Raymond ",8000,,, 
LAMY,Laurent,Chir uro,"CMT 189 Rue Raymond ",8000,6170,"7477/8231",
LAPLANCHE,Sophie,Laboratoire,"Notre Dame",,8044,,7485
LAUNAY,Jacques,Doppler,"Porte 8 niveau G St Jean",7023,3777,,
LAURENT,Anne Charlotte ,Gyneco Obstetrique ,"Porte 10 niveau 1 NDBS",8719,8103,8104,7522
LAURIAN,Claude,Chir vasc,"CMT 189 Rue Raymond ",8000,6170,3471,
LAURIER,Jean Noel,ORL,"Porte K 189 rue Raymond Losserand",8000,3378,3440,
LAUROY,Julien,cardiologie,"Porte 8 niveau G St Jean",3727,3727,,
LAZARETH ,Isabelle,Méd Vasc,"Porte 2 niveau G St Jean",8000,3184,8184,
LE BALEUR ,Yann,Gastro enterologie,"Porte 2 niveau G St Jean",8000,3009,3399,
LE DU,Virginie,Sage-femme,"CMT Malakoff",8585,8800,,
LE GOUX ,Patrick,Rhumatologie,"Porte 14 niveau G St Michel",8000,7317,,
LE LORC,Erwan,Médecine Interne,"Porte 14 niveau G St Michel",8000,7317,6305,6990
LE MAIRE,Sacha,Anesthésie,"Porte 1 niveau G Ste Geneviève",3640,7580,,7727
LE MARCHAND ,Nicolas,Proctologie,"CMT Pajol",8000,8444,,
LE MARCHAND ,Nicolas,Proctologie,"Porte 3",8000,7245,7469,7823
LE MONNIER,Alban,Laboratoire,"Notre Dame",,8044,,7932
LE QUINTREC,Jean Laurent,Rhumatologie,"CMT 189 Rue Raymond ",8000,6170,,
LE TIEN,Valérie,Ophtalmologie,"Porte 1 niveau G Ste Geneviève",8000,3039,3039,
LECLER,Christelle,Gyneco Obstetrique,"Porte 10 niveau 1 NDBS",8719,8104,8104,
LEDOYEN,Silvie,Diabétologie,"CMT 189 Rue Raymond ",8000,6170,,
LEFEVRE,Aurélia ,Masseur-Kiné,"CMT 189 Rue Raymond ",8000,,, 
LEHRER ,Martine,Ophtalmologie,"Porte 1 niveau G Ste Geneviève",8000,3039,3039,
LESAGE ,Jean Baptiste,cardiologie,"Porte 8 niveau G St Jean",8000,3746,,
LOPARD,Eric,Anesthésie,"Porte 1 niveau G Ste Geneviève",3640,7580,,6742
LORIAU ,Jerome,Chir digestive,"Porte 2 niveau G St Jean",8000,3556,3800,
LOURTET,Julie,Laboratoire,"Notre Dame",,8044,,7420
LOZINGUEZ,Olivier,Cardiologie/explo,"Porte 8 niveau G St Jean",7023,6722,3129,
LOZINGUEZ,Olivier,Cardiologie,"POLE CNVM 8508- PM CARDIO",,,,8562
MAILLE ,François,Gastro enterologie,"Porte 2 niveau G St Jean",8000,3009,3399,6953
MAILLE ,Francois,Gastro,"POLE SPE CHIR 8503- PM GASTRO",,,,6953
MALAHEL,Jeanny,Allergologie,"CMT 189 Rue Raymond ",8000,6170,3926,
MALTRET, Alice,Cardiologie,"Porte 8 niveau G St Jean",8000,3746,3129,3688
MALLIOS ,Alexandros,Chir vasc,"Porte 2 niveau G St Jean",8000,5513,3471,
MALLIOS ,Alexandros,Chir vasc,"POLE CNVM 8510- PM CHIR VASC",,,,3575
MAMMAR,Siham,Pneumologie,"Porte 14 niveau G St Michel",8000,3159,3926,
MANACH,Quentin ,Chir uro,"CMT Malakoff",8000,8800,,
MANACH,Quentin ,Chir uro,"Porte 2 niveau G St Jean",8000,3821,"7477/8231",
MANASTERSKI,Fabien,Med générale,"CMT Pajol",8686,8444,,
MARIBAS ,Philippe,Cardiologie,"Porte 8 niveau G St Jean",8000,3746,3129,3688
MARIBAS ,Philippe,Cardiologie,"POLE CNVM 8508- PM CARDIO",,,,3688
MARCAUD,Véronique,Neurologie,"Porte 8 niveau G St Jean",8000,3769,7242,7303
MARTIN,Guillaume,Urgences,"POLE MED 8526- PM URGENCES",,,,6122
MARTY,Olivier,Gastro,"POLE SPE CHIR 8503- PM GASTRO",,,,7457
MEDLIJ,Cynthia,Gastro,"POLE SPE CHIR 8503- PM GASTRO",,,,3663
MIJAHED,Rami,Urgences,"POLE MED 8526- PM URGENCES",,,,3465
MICHON PASTUREL,Ulrique,Méd Vasc,"Porte 2 niveau G St Jean",8000,3184,7831,7870
MILLONCOURT,Lucas,Anesthésie,"Porte 1 niveau G Ste Geneviève",3640,7580,,7395
MILONGO ,Vanessa,Méd Vasc,"Porte 2 niveau G St Jean",8000,3184,7831,7870
MINZALA ,Georgiana,Gastro enterologie,"Porte 3 niveau G ",8000,3009,3399,
MINZALA ,Geogiana,Gastro,"POLE SPE CHIR 8503- PM GASTRO",,,,7392
MIRAMONT,Pascale,Laboratoire,"Notre Dame",,8044,,7017
MIZRAHI,Assaf,Laboratoire,"Notre Dame",,8044,,7030
MOEUF,Yoan,Cardiologie,"Porte 8 niveau G St Jean",8000,3746,3129,
MOHAMED HADJ ,Abdelslam,Infectieux ortho,"Porte 8 niveau G St Jean",3020,3020,,3978
MOUBARAK,Ghassan,Rythmologie,"Porte 8 niveau G St Jean",3725,3725,3129,
MOUHOUB,Yamina,Rythmologie,"Porte 8 niveau G St Jean",3725,3725,3129,
MOUHOUB,Yamina,Cardiologie,"POLE CNVM 8508- PM CARDIO",,,,3628
MOULINIER,Laurence,Rhumatologie,"CMT 189 Rue Raymond ",8000,6170,6170,
MOULINIER,Laurence,Rhumatologie,"CMT Malakoff",8000,8800,,
MOUNEDJI,Amina,Pneumologie,"Porte 14 niveau G St Michel",8000,3558,3926,
MOURAD ,Jean Jacques,Médecine Interne,"Porte 14 niveau G St Michel",8000,7317,6305,3540
MOUSSET ,Carole,ORL,"Porte K 189 rue Raymond Losserand",8000,3378,3440,
MOUTACALLI,,Cardiologie/explo,"Porte 8 niveau G St Jean",6722,3777,,
MOUTON,Martin,Chir uro,"CMT Pajol",8000,8444,,
MOYSAN,Philippe,Imagerie médicale,"Hall d'accueil",8060,3603,,
MULLER,Benedicte,Med générale,"CMT Malakoff",8585,8800,,
MYARA,Anne,Laboratoire,"Notre Dame",,8044,,3625
NACCACHE ,Jean Marc ,Pneumo-onco,"Porte 14 niveau G St Michel",8000,3153,,7217
NADLER FLUTEAU ,Sophie,Diabétologie,"Porte 8 niveau G St Jean",8000,6145,3395,7275
NALTET,Charles ,Pneumo-onco,"Porte 16 niveau G St Michel",3078,"3189/3078",3894,7805
NASSIRI,Shiva,Laboratoire,"Notre Dame",,8044,,3056
NEDELEC ,Mathilde,Chir uro,"CMT 189 Rue Raymond ",8000,6170,,
NGUYEN,Lan,Chir ortho,"Porte 8 niveau G St Jean",8000,3433,"7845/7985",
OVART,Lionel,Cardiologie,"POLE CNVM 8508- PM CARDIO",,,,8674
PACALLI,Johan,Gynéco obst,"Porte 10 NDBS","8719/8103",8104,8221,
PACELLI ,Johan,Gyneco Obstetrique,"Porte 10 niveau 1 NDBS",8719,8103,8104,
PACHET,Corinne,Chir plastique,"Porte 1 niveau G Ste Geneviève",8000,3771,3771,
PALUD,Aurore,Anesthésie,"Porte 1 niveau G Ste Geneviève",3640,7580,,7393
PARVANESCU ,Alina,Chir digestive,"Porte 2 niveau G St Jean",8000,3556,3800,
PARVANESCU,Alina,Gastro,"POLE SPE CHIR 8503- PM GASTRO",,,,3490
PAUCHET ,Daphnée,ORL,"Porte K 189 rue Raymond Losserand",8000,3378,3440,
PAYEN,Anouck,psychiatre,"CMT 189 Rue Raymond ",8000,6170,,
PEIGNOT,Jean François,Gastro enterologie,"CMT 189 Rue Raymond ",8000,6170,3399,
PSY,Liaison,Urgences,"POLE MED 8526- PM URGENCES",,,,7737
RAUX,Maxime,Chir vasc,"POLE CNVM 8510- PM CHIR VASC",,,,7674
RAUX,Maxime,Chir vasc,"POLE CNVM 8510- PM CHIR VASC",,,,7674
RANDRIARIVONY,Jenny,Urgences,"POLE MED 8526- PM URGENCES",,,,7341
RAZAFINIMANANA,Méva,Chir digestive,"Porte 2 niveau G St Jean",8000,3556,3800,
REACH,Pauline,Neurologie,"Porte 8 niveau G St Jean",8000,3769,7242,
REGUESSE,Anne Sophie,Chir plastique,"Porte 1 niveau G Ste Geneviève",8000,3771,3771,
REJASSE ,Gilles,DIM,"Porte 22 niveau 1 Didot",,,,6993
REM ,Kessara,Chir plastique,"Porte 1 niveau G Ste Geneviève",8000,3771,3771,
RENTIEN,Anne-Laure,Proctologie,"CMT Pajol",8686,8444,,
RENTIEN,Anne-Laure,Proctologie,"Porte 3",8000,7245,7469,7813
REUNION,Staff SUR1B105,Chir vasc,"POLE CNVM 8510- PM CHIR VASC",,,,3025
REUNION,Staff SUR1B105,Chir vasc,"POLE CNVM 8510- PM CHIR VASC",,,,3025
RICHARD,Jean François,Soins Palliatifs,"Porte G niveau 1 Losserand",8000,3334,,7593
RIFAI,Raed,Cardiologie,"CMT Malakoff",8585,8800,,
RIOUALLON ,Guillaume,Chir ortho,"Porte 6 niveau G St Jean",8000,3433,"7845/7985",
RIZK ,Elie,Gyneco Obstetrique,"CMT 189 Rue Raymond ",8719,7173,,6776
ROBERT,Damien,Urgences,"POLE MED 8526- PM URGENCES",,,,6249
RODALLEC ,Mathieu,Imagerie médicale,"Hall d'accueil",8060,3603,,7583
ROLAND,Deborah,Gastro,"POLE SPE CHIR 8503- PM GASTRO",,,,7385
ROLAND,Déborah,Gastro enterologie,"Porte 2 niveau G St Jean",8000,3009,3399,
ROLAND,Déborah,Proctologie,"Porte 3",8000,7245,7469,
ROLLAND ,Catherine,Diabétologie,"Porte 8 niveau G St Jean",8000,6145,3395,
ROLLAND ,Jean-Marc,Chir cardiaque,"Porte 8 niveau G St Jean",7575,"3376 (CML)",,
ROMULUS,Adrien,Neurologie,"Porte 8 niveau G St Jean",8000,3769,7242,
ROSIER,Sully Pierre,Cardiologie,"CMT Pajol",8000,8444,,
ROUBEAU,Vincent,Neurologie,"Porte 8 niveau G St Jean",8000,3769,7242,
ROUCHE ,Ouir,Anesthésie,"Porte 1 niveau G Ste Geneviève",3640,7580,,7926
ROUX ,Fabienne,Rhumatologie,"Porte 14 niveau G St Michel",8000,7317,7795,7917
ROVANI PANTHIER,Marion,Cardiologie,"CMT 189 Rue Raymond ",8000,6170,depart fin juillet,
ROZENFELD,Richard,Urgences,Urgences,3458,7452,3787,
SAFA FAR ,Eric,Proctologie,"Porte 3",8000,7245,7469,
SALMERON, Sergio ,Pneumologie,"Porte 14 niveau G St Michel",8000,3159,3926,7874
SALMI,Lynda,Anesthésie,"Porte 1 niveau G Ste Geneviève",3640,7580,,
SAMSON,Michel,Rhumatologie,"Porte 14 niveau G St Michel",8000,7317,7795,
SAMTMANN,Olivier,Chir Maxillo-Faciale,"Porte K 189 rue Raymond Losserand",8000,7699,3440,
SAUVAGET,Elisabeth,ORL,"Porte K 189 rue Raymond Losserand",8000,3378,3440,
SAUVANET,Eric,Gyneco Obstetrique,"CMT 189 Rue Raymond ",8719,7173,,
SAUVANET,Eric,Gyneco Obstetrique,"Porte 10 niveau 1 NDBS",8719,8103,8104,6714
SAVINELLI,Francesco,Oncologie,"Porte 16 niveau G St Michel",3078,"3189/3078",6120,7577
SCEMAMA,Maud,Cardiologie/explo,"Porte 8 niveau G St Jean",3777,3746,3129,
SCHIANO,Sylvie,Gynéco/Endométriose,"CMT 189 Rue Raymond ",8719,6170,,
SCHMITT,Philippe,Cardiologie,"POLE CNVM 8508- PM CARDIO",,,,3690
SCHMITT,Taliah,Chir plastique,"Porte 1 niveau G Ste Geneviève",8000,3771,3771,
SEBBAG,William,"Chir Vasc","POLE CNVM 8510- PM CHIR VASC",,,,8355
SEBAN, Gilles,psychiatre,"CMT 189 Rue Raymond ",8000,,, 
SEGARD REBILLARD,Mireille,Doppler,"Porte 8 niveau G St Jean",7023,3777,,
SEGARD REBILLARD,Mireille,Phlebologie,"CMT 189 Rue Raymond ",8000,6170,,
SENGHOR,Yaye,Laboratoire,"Notre Dame",,8044,,3635
SELLAK,Fatima,Urgences,"POLE MED 8526- PM URGENCES",,,,3918
SERINGULIAN,Alice,Allergologie,"Porte 14 niveau G St Michel",7599,7599,,
SERT LANGERON,Caroline,Diabétologie,"CMT 189 Rue Raymond ",8000,6170,3395,
SIAME,Juliette,Anesthésie,"Porte 1 niveau G Ste Geneviève",3640,7580,,7781
SLAMA,Swann,"Chir Vasc","FHSJ - CHIR VASCULAIRE Medecins",,,,3940
STANDISH,Brigitte,Cardiologie,"POLE CNVM 8508- PM CARDIO",,,,3708
SUBERVILLE,Marie,Urgences,Urgences,3458,7452,3787,
SUDUCA,Mélanie,Phlébo/doppler,"CMT 20ème",8000,8486,,
SUILS,Hélène,Pediatre / Néonatalogie,"Porte 10 niveau 3 NDBS",8105,6403,,6966
SUSTRONCK,,Ophtalmologie,"CMT Malakoff",8000,8800,,
SUSTRONKC,,Ophtalmologie,"168 Rue Raymond Losserand 75014 Paris",8000,3039,,
SVERDLIN,Robert,Oncologie,"Porte 16 niveau G St Michel",3078,"3189/3078",6120,6914
SZWEBEL,Julien,Chir plastique,"Porte 1 niveau G Ste Geneviève",8000,3771,3771,
TALON ,Valérie,Pharmacie,"Porte 16 niveau -1 St Michel",3360,,,7578
TAMAZYAN,Ruben,Neurologie,"Porte 8 niveau G St Jean",8000,3769,7242,
TAROT,Jean Pierre,Anesthésie,"Porte 1 niveau G Ste Geneviève",3640,7580,,3621
TASSEAU,Angélique,Pediatre / Néonatalogie,"Porte 10 niveau 3 NDBS",8105,6403,,6728
TATARU,Alina,Neurologie,"Porte 8 niveau G St Jean",8000,3769,7242,
TEIXEIRA,Pierre,Allergologie,"Porte 14 niveau G St Michel",8000,7599,,
TERSEN, Isabelle,Pharmacie,"Porte 16 niveau -1 St Michel",3360,,,7826
THIRY,Juliette,Anesthésie,"Porte 1 niveau G Ste Geneviève",3640,7580,,3618
THOMAS,Christian,Proctologie,"Porte 3",8000,7245,7469,
WYLOMANSKI,Sophie,"Chir gyneco","CMT 189 Rue Raymond ",8719,7173,,
YANNOUTSOS,Alexandra,"Méd vasc","Porte 2 niveau G St Jean",8000,3184,8184,
ZAGZOOG,Mohammad,"Chir Vasc","POLE CNVM 8510- PM CHIR VASC",,,,7920
ZANKER,Bertrand,"Med générale","CMT 189 Rue Raymond ",8000,6170,,
ZANKER,Bertrand,"Med générale","CMT Malakoff",8000,8800,,
ZARAA,Ines ,Dermatologie,"Porte 14 niveau G St Michel",8000,3558,,
ZARAA,Mourad,"Chir ortho","Porte 2 niveau G St Jean",8000,3580,"7845/7985",
ZIDOUNE,Anissa,Cardiologie,"POLE CNVM 8508- PM CARDIO",,,,8732
ZINS ,Marc,"Imagerie médicale","Hall d'accueil",8060,3603,,7930
ZUBER,Mathieu,Neurologie,"Porte 8 niveau G St Jean",8000,3769,3409,
`;

// --- FONCTIONS GLOBALES ---
// Ces fonctions sont appelées par les `onclick` du HTML, elles doivent donc être dans le scope global.
function showGardesTable() {
    document.getElementById('gardesTable').classList.remove('hidden');
    document.getElementById('annuaireTable').classList.add('hidden');
}

function showAnnuaireTable() {
    document.getElementById('annuaireTable').classList.remove('hidden');
    document.getElementById('gardesTable').classList.add('hidden');
}

function filterGardesTable() {
    const searchTerm = document.getElementById('search-gardes-input').value.toLowerCase();
    const tableBody = document.getElementById('gardes-body');
    const rows = tableBody.getElementsByTagName('tr');
    for (const row of rows) {
        row.style.display = row.textContent.toLowerCase().includes(searchTerm) ? "" : "none";
    }
}

// --- CODE PRINCIPAL ---
// S'exécute quand le document HTML est entièrement chargé.
document.addEventListener('DOMContentLoaded', () => {

    // --- Variables et Références DOM ---
    let allDoctors = [];
    const directoryBody = document.getElementById('directory-body');
    const searchInput = document.getElementById('search-input');
    const modal = document.getElementById('contact-modal');
    const modalTitle = document.getElementById('modal-title');
    const contactForm = document.getElementById('contact-form');
    const contactIdInput = document.getElementById('contact-id');
    const exportBtn = document.getElementById('export-btn');
    const importBtn = document.getElementById('import-btn');
    const importFileInput = document.getElementById('import-file-input');

    // --- Fonctions de gestion des données ---
    const parseInitialData = (text) => {
        const lines = text.trim().split('\n');
        const data = [];
        const startIndex = lines.findIndex(line => line.toLowerCase().startsWith('nom,prenom,specialit'));
        
        for (let i = startIndex + 1; i < lines.length; i++) {
            const columns = lines[i].split(',');
            if (columns.length < 2 || !columns[0].trim() || columns[0].trim().toLowerCase() === 'nom') continue;

            const doctor = {
                id: Date.now() + i, // ID unique basé sur le temps + index
                nom: (columns[0] || '').trim(),
                prenom: (columns[1] || '').trim(),
                specialite: (columns[2] || '').trim(),
                lieu: (columns[3] || '').trim(),
                rdv: (columns[4] || '').trim(),
                secretariat_cs: (columns[5] || '').trim(),
                secretariat_hospi: (columns[6] || '').trim(),
                dect: (columns[7] || '').trim().replace(/"/g, ''),
            };
            data.push(doctor);
        }
        return data;
    };

    const saveData = () => {
        localStorage.setItem('doctorsDirectory', JSON.stringify(allDoctors));
    };

    const renderTable = (doctors) => {
        directoryBody.innerHTML = '';
        if (doctors.length === 0) {
            directoryBody.innerHTML = '<tr><td colspan="9" style="text-align:center;">Aucun résultat trouvé.</td></tr>';
            return;
        }

        doctors.forEach(doc => {
            const row = document.createElement('tr');
            row.dataset.id = doc.id; // Ajoute l'ID à la ligne
            row.innerHTML = `
                <td>${doc.nom || ''}</td>
                <td>${doc.prenom || ''}</td>
                <td>${doc.specialite || ''}</td>
                <td>${doc.lieu || ''}</td>
                <td>${doc.rdv || ''}</td>
                <td>${doc.secretariat_cs || ''}</td>
                <td>${doc.secretariat_hospi || ''}</td>
                <td>${doc.dect || ''}</td>
                <td>
                    <button class="edit-btn">Modifier</button>
                    <button class="delete-btn">Supprimer</button>
                </td>
            `;
            directoryBody.appendChild(row);
        });
    };
    
    const loadData = () => {
        const savedData = localStorage.getItem('doctorsDirectory');
        if (savedData) {
            allDoctors = JSON.parse(savedData);
        } else {
            allDoctors = parseInitialData(rawData);
            saveData();
        }
        renderTable(allDoctors);
    };

    // --- Fonctions de la Modale ---
    const showModal = (isEdit = false, doctor = null) => {
        contactForm.reset();
        if (isEdit && doctor) {
            modalTitle.textContent = 'Modifier le contact';
            contactIdInput.value = doctor.id;
            document.getElementById('nom').value = doctor.nom;
            document.getElementById('prenom').value = doctor.prenom;
            document.getElementById('specialite').value = doctor.specialite;
            document.getElementById('lieu').value = doctor.lieu;
            document.getElementById('rdv').value = doctor.rdv;
            document.getElementById('secretariat_cs').value = doctor.secretariat_cs;
            document.getElementById('secretariat_hospi').value = doctor.secretariat_hospi;
            document.getElementById('dect').value = doctor.dect;
        } else {
            modalTitle.textContent = 'Ajouter un nouveau contact';
            contactIdInput.value = '';
        }
        modal.classList.remove('hidden');
    };

    const hideModal = () => {
        modal.classList.add('hidden');
    };

    // --- Gestion des Événements ---
    
    // Barre de recherche de l'annuaire
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredDoctors = allDoctors.filter(doc => 
            Object.values(doc).some(value => String(value).toLowerCase().includes(searchTerm))
        );
        renderTable(filteredDoctors);
    });

    // Clics sur les boutons (utilisant la délégation d'événements)
    document.body.addEventListener('click', (e) => {
        // Clic sur le bouton "Ajouter un contact"
        if (e.target.id === 'add-new-btn') {
            showModal();
        }
        // Clic sur le bouton "Annuler" ou sur le fond de la modale
        if (e.target.id === 'cancel-btn' || e.target === modal) {
            hideModal();
        }

        const editButton = e.target.closest('.edit-btn');
        if (editButton) {
            const row = editButton.closest('tr');
            const id = parseInt(row.dataset.id, 10);
            const doctorToEdit = allDoctors.find(doc => doc.id === id);
            if (doctorToEdit) showModal(true, doctorToEdit);
        }

        const deleteButton = e.target.closest('.delete-btn');
        if (deleteButton) {
            if (confirm('Êtes-vous sûr de vouloir supprimer ce contact ?')) {
                const row = deleteButton.closest('tr');
                const id = parseInt(row.dataset.id, 10);
                allDoctors = allDoctors.filter(doc => doc.id !== id);
                saveData();
                renderTable(allDoctors); // Rafraîchit la vue
            }
        }
    });

    // Soumission du formulaire (Ajout/Modification)
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const id = contactIdInput.value ? parseInt(contactIdInput.value, 10) : null;
        
        const doctorData = {
            nom: document.getElementById('nom').value.trim(),
            prenom: document.getElementById('prenom').value.trim(),
            specialite: document.getElementById('specialite').value.trim(),
            lieu: document.getElementById('lieu').value.trim(),
            rdv: document.getElementById('rdv').value.trim(),
            secretariat_cs: document.getElementById('secretariat_cs').value.trim(),
            secretariat_hospi: document.getElementById('secretariat_hospi').value.trim(),
            dect: document.getElementById('dect').value.trim(),
        };

        if (id) { // Modification
            const index = allDoctors.findIndex(doc => doc.id === id);
            if (index > -1) {
                allDoctors[index] = { id: id, ...doctorData };
            }
        } else { // Ajout
            doctorData.id = Date.now();
            allDoctors.unshift(doctorData); // Ajoute au début de la liste
        }
        
        saveData();
        renderTable(allDoctors);
        hideModal();
    });

    // --- Fonctions d'Import / Export ---
    exportBtn.addEventListener('click', () => {
        const dataStr = JSON.stringify(allDoctors, null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(dataBlob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'annuaire_sauvegarde.json';
        link.click();
        URL.revokeObjectURL(url);
    });

    importBtn.addEventListener('click', () => importFileInput.click());

    importFileInput.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const importedData = JSON.parse(e.target.result);
                if (Array.isArray(importedData)) {
                    allDoctors = importedData;
                    saveData();
                    renderTable(allDoctors);
                    alert('Données importées avec succès !');
                } else {
                    alert('Erreur : Le fichier importé n\'est pas au bon format.');
                }
            } catch (error) {
                alert('Erreur de lecture du fichier. Assurez-vous que c\'est un JSON valide.');
            }
        };
        reader.readAsText(file);
        importFileInput.value = ''; // Permet de ré-importer le même fichier
    });
    
    // --- Initialisation de la page ---
    loadData();
    showAnnuaireTable();
});