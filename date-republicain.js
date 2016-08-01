var getRepublicainDate = function (dateInput) {

    var RepublicainDate = function () {};
    RepublicainDate.prototype.toString = function () {
        return (this.month == 13 ? this.dayName : this.day + ' ' + this.monthName) + ' an ' + this.year;
    };

    var table = [
        {
            name: "Vendémiaire",
            link: "https://fr.wikipedia.org/wiki/Vend%C3%A9miaire",
            days: [
                {name: "Raisin", link: "https://fr.wikipedia.org/wiki/Raisin"},
                {name: "Safran", link: "https://fr.wikipedia.org/wiki/Safran_(%C3%A9pice)"},
                {name: "Châtaigne", link: "https://fr.wikipedia.org/wiki/Ch%C3%A2taigne"},
                {name: "Colchique", link: "https://fr.wikipedia.org/wiki/Colchique"},
                {name: "Cheval", link: "https://fr.wikipedia.org/wiki/Cheval"},
                {name: "Balsamine", link: "https://fr.wikipedia.org/wiki/Balsaminaceae"},
                {name: "Carotte", link: "https://fr.wikipedia.org/wiki/Carotte"},
                {name: "Amarante", link: "https://fr.wikipedia.org/wiki/Amarante_(plante)"},
                {name: "Panais", link: "https://fr.wikipedia.org/wiki/Panais"},
                {name: "Cuve", link: "https://fr.wikipedia.org/wiki/Cuve"},
                {name: "Pomme de terre", link: "https://fr.wikipedia.org/wiki/Pomme_de_terre"},
                {name: "Immortelle", link: "https://fr.wikipedia.org/wiki/Immortelle_commune"},
                {name: "Potiron", link: "https://fr.wikipedia.org/wiki/Potiron"},
                {name: "Réséda", link: "https://fr.wikipedia.org/wiki/R%C3%A9s%C3%A9da"},
                {name: "Âne", link: "https://fr.wikipedia.org/wiki/%C3%82ne"},
                {name: "Belle de nuit", link: "https://fr.wikipedia.org/wiki/Mirabilis_jalapa"},
                {name: "Citrouille", link: "https://fr.wikipedia.org/wiki/Citrouille"},
                {name: "Sarrasin", link: "https://fr.wikipedia.org/wiki/Sarrasin_(plante)"},
                {name: "Tournesol", link: "https://fr.wikipedia.org/wiki/Tournesol"},
                {name: "Pressoir", link: "https://fr.wikipedia.org/wiki/Pressoir"},
                {name: "Chanvre", link: "https://fr.wikipedia.org/wiki/Chanvre"},
                {name: "Pêche", link: "https://fr.wikipedia.org/wiki/P%C3%AAche_(fruit)"},
                {name: "Navet", link: "https://fr.wikipedia.org/wiki/Navet"},
                {name: "Amaryllis", link: "https://fr.wikipedia.org/wiki/Amaryllis_(plante)"},
                {name: "Bœuf", link: "https://fr.wikipedia.org/wiki/Bos_taurus"},
                {name: "Aubergine", link: "https://fr.wikipedia.org/wiki/Aubergine"},
                {name: "Piment", link: "https://fr.wikipedia.org/wiki/Piment"},
                {name: "Tomate", link: "https://fr.wikipedia.org/wiki/Tomate"},
                {name: "Orge", link: "https://fr.wikipedia.org/wiki/Orge_commune"},
                {name: "Tonneau", link: "https://fr.wikipedia.org/wiki/Tonneau_(r%C3%A9cipient)"}
            ]
        },
        {
            name: "Brumaire",
            link: "https://fr.wikipedia.org/wiki/Brumaire",
            days: [
                {name: "Pomme", link: "https://fr.wikipedia.org/wiki/Pomme"},
                {name: "Céleri", link: "https://fr.wikipedia.org/wiki/C%C3%A9leri"},
                {name: "Poire", link: "https://fr.wikipedia.org/wiki/Poire"},
                {name: "Betterave", link: "https://fr.wikipedia.org/wiki/Betterave"},
                {name: "Oie", link: "https://fr.wikipedia.org/wiki/Oie"},
                {name: "Héliotrope", link: "https://fr.wikipedia.org/wiki/H%C3%A9liotrope"},
                {name: "Figue", link: "https://fr.wikipedia.org/wiki/Figue"},
                {name: "Scorsonère", link: "https://fr.wikipedia.org/wiki/Scorson%C3%A8re"},
                {name: "Alisier", link: "https://fr.wikipedia.org/wiki/Sorbus_torminalis"},
                {name: "Charrue", link: "https://fr.wikipedia.org/wiki/Charrue"},
                {name: "Salsifis", link: "https://fr.wikipedia.org/wiki/Salsifis"},
                {name: "Mâcre", link: "https://fr.wikipedia.org/wiki/M%C3%A2cre_nageante"},
                {name: "Topinambour", link: "https://fr.wikipedia.org/wiki/Topinambour"},
                {name: "Endive", link: "https://fr.wikipedia.org/wiki/Endive"},
                {name: "Dindon", link: "https://fr.wikipedia.org/wiki/Dinde"},
                {name: "Chervis", link: "https://fr.wikipedia.org/wiki/Chervis"},
                {name: "Cresson", link: "https://fr.wikipedia.org/wiki/Cresson_de_fontaine"},
                {name: "Dentelaire", link: "https://fr.wikipedia.org/wiki/Plumbago"},
                {name: "Grenade", link: "https://fr.wikipedia.org/wiki/Grenade_(fruit)"},
                {name: "Herse", link: "https://fr.wikipedia.org/wiki/Herse_(agriculture)"},
                {name: "Bacchante", link: "https://fr.wikipedia.org/wiki/Bacchantes"},
                {name: "Azerole", link: "https://fr.wikipedia.org/wiki/Azerole"},
                {name: "Garance", link: "https://fr.wikipedia.org/wiki/Garance_des_teinturiers"},
                {name: "Orange", link: "https://fr.wikipedia.org/wiki/Orange_(fruit)"},
                {name: "Faisan", link: "https://fr.wikipedia.org/wiki/Faisan"},
                {name: "Pistache", link: "https://fr.wikipedia.org/wiki/Pistache"},
                {name: "Macjonc", link: "https://fr.wikipedia.org/wiki/Gesse_tub%C3%A9reuse"},
                {name: "Coing", link: "https://fr.wikipedia.org/wiki/Coing"},
                {name: "Cormier", link: "https://fr.wikipedia.org/wiki/Cormier"},
                {name: "Rouleau", link: "https://fr.wikipedia.org/wiki/Rouleau"}
            ]
        },
        {
            name: "Frimaire",
            link: "",
            days: [
                {name: "Raiponce", link: "https://fr.wikipedia.org/wiki/Raiponce_(plante)"},
                {name: "Turneps", link: "https://fr.wikipedia.org/wiki/Betterave_fourrag%C3%A8re"},
                {name: "Chicorée", link: "https://fr.wikipedia.org/wiki/Chicor%C3%A9e"},
                {name: "Nèfle", link: "https://fr.wikipedia.org/wiki/N%C3%A8fle"},
                {name: "Cochon", link: "https://fr.wikipedia.org/wiki/Cochon"},
                {name: "Mâche", link: "https://fr.wikipedia.org/wiki/M%C3%A2che"},
                {name: "Chou-fleur", link: "https://fr.wikipedia.org/wiki/Chou-fleur"},
                {name: "Miel", link: "https://fr.wikipedia.org/wiki/Miel"},
                {name: "Genièvre", link: "https://fr.wikipedia.org/wiki/Juniperus_communis"},
                {name: "Pioche", link: "https://fr.wikipedia.org/wiki/Pioche"},
                {name: "Cire", link: "https://fr.wikipedia.org/wiki/Cire"},
                {name: "Raifort", link: "https://fr.wikipedia.org/wiki/Raifort"},
                {name: "Cèdre", link: "https://fr.wikipedia.org/wiki/C%C3%A8dre"},
                {name: "Sapin", link: "https://fr.wikipedia.org/wiki/Sapin"},
                {name: "Chevreuil", link: "https://fr.wikipedia.org/wiki/Chevreuil"},
                {name: "Ajonc", link: "https://fr.wikipedia.org/wiki/Ajonc"},
                {name: "Cyprès", link: "https://fr.wikipedia.org/wiki/Cypr%C3%A8s"},
                {name: "Lierre", link: "https://fr.wikipedia.org/wiki/Hedera"},
                {name: "Sabine", link: "https://fr.wikipedia.org/wiki/Juniperus_sabina"},
                {name: "Hoyau", link: "https://fr.wikipedia.org/wiki/Hoyau"},
                {name: "Érable sucré", link: "https://fr.wikipedia.org/wiki/%C3%89rable_%C3%A0_sucre"},
                {name: "Bruyère", link: "https://fr.wikipedia.org/wiki/Bruy%C3%A8re"},
                {name: "Roseau", link: "https://fr.wikipedia.org/wiki/Roseau"},
                {name: "Oseille", link: "https://fr.wikipedia.org/wiki/Oseille"},
                {name: "Grillon", link: "https://fr.wikipedia.org/wiki/Gryllidae"},
                {name: "Pignon", link: "https://fr.wikipedia.org/wiki/Pignon_de_pin"},
                {name: "Liège", link: "https://fr.wikipedia.org/wiki/Li%C3%A8ge_(mat%C3%A9riau)"},
                {name: "Truffe", link: "https://fr.wikipedia.org/wiki/Truffe_(champignon)"},
                {name: "Olive", link: "https://fr.wikipedia.org/wiki/Olive"},
                {name: "Pelle", link: "https://fr.wikipedia.org/wiki/Pelle_(outil)"}
            ]
        },
        {
            name: "Nivôse",
            link: "https://fr.wikipedia.org/wiki/Niv%C3%B4se",
            days: [
                {name: "Tourbe", link: "https://fr.wikipedia.org/wiki/Tourbe"},
                {name: "Houille", link: "https://fr.wikipedia.org/wiki/Houille"},
                {name: "Bitume", link: "https://fr.wikipedia.org/wiki/Bitume"},
                {name: "Soufre", link: "https://fr.wikipedia.org/wiki/Soufre"},
                {name: "Chien", link: "https://fr.wikipedia.org/wiki/Chien"},
                {name: "Lave", link: "https://fr.wikipedia.org/wiki/Lave"},
                {name: "Terre végétale", link: "https://fr.wikipedia.org/wiki/Humus"},
                {name: "Fumier", link: "https://fr.wikipedia.org/wiki/Fumier"},
                {name: "Salpêtre", link: "https://fr.wikipedia.org/wiki/Nitrate_de_potassium"},
                {name: "Fléau", link: "https://fr.wikipedia.org/wiki/Fl%C3%A9au_(agriculture)"},
                {name: "Granit", link: "https://fr.wikipedia.org/wiki/Granit"},
                {name: "Argile", link: "https://fr.wikipedia.org/wiki/Argile"},
                {name: "Ardoise", link: "https://fr.wikipedia.org/wiki/Ardoise"},
                {name: "Grès", link: "https://fr.wikipedia.org/wiki/Gr%C3%A8s_(g%C3%A9ologie)"},
                {name: "Lapin", link: "https://fr.wikipedia.org/wiki/Oryctolagus_cuniculus"},
                {name: "Silex", link: "https://fr.wikipedia.org/wiki/Silex"},
                {name: "Marne", link: "https://fr.wikipedia.org/wiki/Marne_(g%C3%A9ologie)"},
                {name: "Pierre à chaux", link: "https://fr.wikipedia.org/wiki/Calcaire"},
                {name: "Marbre", link: "https://fr.wikipedia.org/wiki/Marbre"},
                {name: "Van", link: "https://fr.wikipedia.org/wiki/Van_(agriculture)"},
                {name: "Pierre à plâtre", link: "https://fr.wikipedia.org/wiki/Gypse"},
                {name: "Sel", link: "https://fr.wikipedia.org/wiki/Chlorure_de_sodium"},
                {name: "Fer", link: "https://fr.wikipedia.org/wiki/Fer"},
                {name: "Cuivre", link: "https://fr.wikipedia.org/wiki/Cuivre"},
                {name: "Chat", link: "https://fr.wikipedia.org/wiki/Chat"},
                {name: "Étain", link: "https://fr.wikipedia.org/wiki/%C3%89tain"},
                {name: "Plomb", link: "https://fr.wikipedia.org/wiki/Plomb"},
                {name: "Zinc", link: "https://fr.wikipedia.org/wiki/Zinc"},
                {name: "Mercure", link: "https://fr.wikipedia.org/wiki/Mercure_(chimie)"},
                {name: "Crible", link: "https://fr.wikipedia.org/wiki/Tamis"}
            ]
        },
        {
            name: "Pluviôse",
            link: "https://fr.wikipedia.org/wiki/Pluvi%C3%B4se",
            days: [
                {name: "Lauréole", link: "https://fr.wikipedia.org/wiki/Laur%C3%A9ole"},
                {name: "Mousse", link: "https://fr.wikipedia.org/wiki/Bryophyta"},
                {name: "Fragon", link: "https://fr.wikipedia.org/wiki/Ruscus_aculeatus"},
                {name: "Perce-neige", link: "https://fr.wikipedia.org/wiki/Perce-neige"},
                {name: "Taureau", link: "https://fr.wikipedia.org/wiki/Taureau"},
                {name: "Laurier tin", link: "https://fr.wikipedia.org/wiki/Viorne_tin"},
                {name: "Amadouvier", link: "https://fr.wikipedia.org/wiki/Amadouvier"},
                {name: "Mézéréon", link: "https://fr.wikipedia.org/wiki/Bois-joli"},
                {name: "Peuplier", link: "https://fr.wikipedia.org/wiki/Peuplier"},
                {name: "Cognée", link: "https://fr.wikipedia.org/wiki/Cogn%C3%A9e"},
                {name: "Ellébore", link: "https://fr.wikipedia.org/wiki/Hell%C3%A9bore"},
                {name: "Brocoli", link: "https://fr.wikipedia.org/wiki/Brocoli"},
                {name: "Laurier", link: "https://fr.wikipedia.org/wiki/Laurus_nobilis"},
                {name: "Avelinier", link: "https://fr.wikipedia.org/wiki/Noisetier"},
                {name: "Vache", link: "https://fr.wikipedia.org/wiki/Vache"},
                {name: "Buis", link: "https://fr.wikipedia.org/wiki/Buis"},
                {name: "Lichen", link: "https://fr.wikipedia.org/wiki/Lichen"},
                {name: "If", link: "https://fr.wikipedia.org/wiki/Taxus"},
                {name: "Pulmonaire", link: "https://fr.wikipedia.org/wiki/Pulmonaria"},
                {name: "Serpette", link: "https://fr.wikipedia.org/wiki/Serpette"},
                {name: "Thlaspi", link: "https://fr.wikipedia.org/wiki/Thlaspi"},
                {name: "Thimele", link: "https://fr.wikipedia.org/wiki/Daphn%C3%A9_garou"},
                {name: "Chiendent", link: "https://fr.wikipedia.org/wiki/Chiendent"},
                {name: "Trainasse", link: "https://fr.wikipedia.org/wiki/Renou%C3%A9e_des_oiseaux"},
                {name: "Lièvre", link: "https://fr.wikipedia.org/wiki/Li%C3%A8vre"},
                {name: "Guède", link: "https://fr.wikipedia.org/wiki/Gu%C3%A8de"},
                {name: "Noisetier", link: "https://fr.wikipedia.org/wiki/Noisetier"},
                {name: "Cyclamen", link: "https://fr.wikipedia.org/wiki/Cyclamen"},
                {name: "Chélidoine", link: "https://fr.wikipedia.org/wiki/Chelidonium_majus"},
                {name: "Traîneau", link: "https://fr.wikipedia.org/wiki/Tra%C3%AEneau"}
            ]
        },
        {
            name: "Ventôse",
            link: "https://fr.wikipedia.org/wiki/Vent%C3%B4se",
            days: [
                {name: "Tussilage", link: "https://fr.wikipedia.org/wiki/Tussilage"},
                {name: "Cornouiller", link: "https://fr.wikipedia.org/wiki/Cornus_(plante)"},
                {name: "Violier", link: "https://fr.wikipedia.org/wiki/V%C3%A9lar"},
                {name: "Troène", link: "https://fr.wikipedia.org/wiki/Tro%C3%A8ne"},
                {name: "Bouc", link: "https://fr.wikipedia.org/wiki/Bouc_(animal)"},
                {name: "Asaret", link: "https://fr.wikipedia.org/wiki/Asaret"},
                {name: "Alaterne", link: "https://fr.wikipedia.org/wiki/Nerprun_alaterne"},
                {name: "Violette", link: "https://fr.wikipedia.org/wiki/Viola_(genre_v%C3%A9g%C3%A9tal)"},
                {name: "Marceau", link: "https://fr.wikipedia.org/wiki/Saule_marsault"},
                {name: "Bêche", link: "https://fr.wikipedia.org/wiki/B%C3%AAche"},
                {name: "Narcisse", link: "https://fr.wikipedia.org/wiki/Narcissus"},
                {name: "Orme", link: "https://fr.wikipedia.org/wiki/Orme"},
                {name: "Fumeterre", link: "https://fr.wikipedia.org/wiki/Fumeterre"},
                {name: "Vélar", link: "https://fr.wikipedia.org/wiki/Erysimum"},
                {name: "Chèvre", link: "https://fr.wikipedia.org/wiki/Ch%C3%A8vre"},
                {name: "Épinard", link: "https://fr.wikipedia.org/wiki/%C3%89pinard"},
                {name: "Doronic", link: "https://fr.wikipedia.org/wiki/Doronicum"},
                {name: "Mouron", link: "https://fr.wikipedia.org/wiki/Mouron_(flore)"},
                {name: "Cerfeuil", link: "https://fr.wikipedia.org/wiki/Cerfeuil_commun"},
                {name: "Cordeau", link: "https://fr.wikipedia.org/wiki/Cordeau"},
                {name: "Mandragore", link: "https://fr.wikipedia.org/wiki/Mandragore"},
                {name: "Persil", link: "https://fr.wikipedia.org/wiki/Persil"},
                {name: "Cochléaria", link: "https://fr.wikipedia.org/wiki/Cochlearia"},
                {name: "Pâquerette", link: "https://fr.wikipedia.org/wiki/P%C3%A2querette"},
                {name: "Thon", link: "https://fr.wikipedia.org/wiki/Thon"},
                {name: "Pissenlit", link: "https://fr.wikipedia.org/wiki/Pissenlit"},
                {name: "Sylvie", link: "https://fr.wikipedia.org/wiki/An%C3%A9mone_sylvie"},
                {name: "Capillaire", link: "https://fr.wikipedia.org/wiki/Capillaire_de_Montpellier"},
                {name: "Frêne", link: "https://fr.wikipedia.org/wiki/Fr%C3%AAne"},
                {name: "Plantoir", link: "https://fr.wikipedia.org/wiki/Plantoir"}
            ]
        },
        {
            name: "Germinal",
            link: "https://fr.wikipedia.org/wiki/Germinal",
            days: [
                {name: "Primevère", link: "https://fr.wikipedia.org/wiki/Primev%C3%A8re"},
                {name: "Platane", link: "https://fr.wikipedia.org/wiki/Platane"},
                {name: "Asperge", link: "https://fr.wikipedia.org/wiki/Asperge"},
                {name: "Tulipe", link: "https://fr.wikipedia.org/wiki/Tulipe"},
                {name: "Poule", link: "https://fr.wikipedia.org/wiki/Poule_(animal)"},
                {name: "Bette", link: "https://fr.wikipedia.org/wiki/Blette_(plante)"},
                {name: "Bouleau", link: "https://fr.wikipedia.org/wiki/Bouleau"},
                {name: "Jonquille", link: "https://fr.wikipedia.org/wiki/Jonquille"},
                {name: "Aulne", link: "https://fr.wikipedia.org/wiki/Aulne"},
                {name: "Greffoir", link: "https://fr.wikipedia.org/wiki/Greffoir"},
                {name: "Pervenche", link: "https://fr.wikipedia.org/wiki/Pervenche"},
                {name: "Charme", link: "https://fr.wikipedia.org/wiki/Charme"},
                {name: "Morille", link: "https://fr.wikipedia.org/wiki/Morchella"},
                {name: "Hêtre", link: "https://fr.wikipedia.org/wiki/Fagus_sylvatica"},
                {name: "Abeille", link: "https://fr.wikipedia.org/wiki/Abeille"},
                {name: "Laitue", link: "https://fr.wikipedia.org/wiki/Laitue"},
                {name: "Mélèze", link: "https://fr.wikipedia.org/wiki/M%C3%A9l%C3%A8ze"},
                {name: "Ciguë", link: "https://fr.wikipedia.org/wiki/Cigu%C3%AB"},
                {name: "Radis", link: "https://fr.wikipedia.org/wiki/Radis"},
                {name: "Ruche", link: "https://fr.wikipedia.org/wiki/Ruche"},
                {name: "Gainier", link: "https://fr.wikipedia.org/wiki/Arbre_de_Jud%C3%A9e"},
                {name: "Romaine", link: "https://fr.wikipedia.org/wiki/Laitue_romaine"},
                {name: "Marronnier", link: "https://fr.wikipedia.org/wiki/Marronnier_commun"},
                {name: "Roquette", link: "https://fr.wikipedia.org/wiki/Roquette_(plante)"},
                {name: "Pigeon", link: "https://fr.wikipedia.org/wiki/Pigeon"},
                {name: "Lilas (commun)", link: "https://fr.wikipedia.org/wiki/Syringa_vulgaris"},
                {name: "Anémone", link: "https://fr.wikipedia.org/wiki/An%C3%A9mone"},
                {name: "Pensée", link: "https://fr.wikipedia.org/wiki/Viola_(genre_v%C3%A9g%C3%A9tal)"},
                {name: "Myrtile", link: "https://fr.wikipedia.org/wiki/Myrtile"},
                {name: "Couvoir", link: "https://fr.wikipedia.org/wiki/Couvoir"}
            ]
        },
        {
            name: "Floréal",
            link: "https://fr.wikipedia.org/wiki/Flor%C3%A9al",
            days: [
                {name: "Rose", link: "https://fr.wikipedia.org/wiki/Rose_(fleur)"},
                {name: "Chêne", link: "https://fr.wikipedia.org/wiki/Ch%C3%AAne"},
                {name: "Fougère", link: "https://fr.wikipedia.org/wiki/Foug%C3%A8re"},
                {name: "Aubépine", link: "https://fr.wikipedia.org/wiki/Aub%C3%A9pine"},
                {name: "Rossignol", link: "https://fr.wikipedia.org/wiki/Rossignol"},
                {name: "Ancolie", link: "https://fr.wikipedia.org/wiki/Ancolie"},
                {name: "Muguet", link: "https://fr.wikipedia.org/wiki/Muguet_de_mai"},
                {name: "Champignon", link: "https://fr.wikipedia.org/wiki/Champignon"},
                {name: "Hyacinthe", link: "https://fr.wikipedia.org/wiki/Hyacinthus"},
                {name: "Râteau", link: "https://fr.wikipedia.org/wiki/R%C3%A2teau_(outil)"},
                {name: "Rhubarbe", link: "https://fr.wikipedia.org/wiki/Rhubarbe"},
                {name: "Sainfoin", link: "https://fr.wikipedia.org/wiki/Sainfoin"},
                {name: "Bâton-d'or", link: "https://fr.wikipedia.org/wiki/Erysimum"},
                {name: "Chamérisier", link: "https://fr.wikipedia.org/wiki/Lonicera_xylosteum"},
                {name: "Ver à soie", link: "https://fr.wikipedia.org/wiki/Ver_%C3%A0_soie"},
                {name: "Consoude", link: "https://fr.wikipedia.org/wiki/Consoude"},
                {name: "Pimprenelle", link: "https://fr.wikipedia.org/wiki/Pimprenelle"},
                {name: "Corbeille d'or", link: "https://fr.wikipedia.org/wiki/Corbeille_d%27or"},
                {name: "Arroche", link: "https://fr.wikipedia.org/wiki/Arroche"},
                {name: "Sarcloir", link: "https://fr.wikipedia.org/wiki/Sarcloir"},
                {name: "Statice", link: "https://fr.wikipedia.org/wiki/Arm%C3%A9rie_maritime"},
                {name: "Fritillaire", link: "https://fr.wikipedia.org/wiki/Fritillaire"},
                {name: "Bourrache", link: "https://fr.wikipedia.org/wiki/Bourrache"},
                {name: "Valériane", link: "https://fr.wikipedia.org/wiki/Val%C3%A9riane"},
                {name: "Carpe", link: "https://fr.wikipedia.org/wiki/Carpe_(poisson)"},
                {name: "Fusain", link: "https://fr.wikipedia.org/wiki/Fusain"},
                {name: "Civette", link: "https://fr.wikipedia.org/wiki/Civette"},
                {name: "Buglosse", link: "https://fr.wikipedia.org/wiki/Anchusa"},
                {name: "Sénevé", link: "https://fr.wikipedia.org/wiki/Moutarde_blanche"},
                {name: "Houlette", link: "https://fr.wikipedia.org/wiki/Houlette_(agriculture)"}
            ]
        },
        {
            name: "Prairial",
            link: "https://fr.wikipedia.org/wiki/Prairial",
            days: [
                {name: "Luzerne", link: "https://fr.wikipedia.org/wiki/Luzerne_cultiv%C3%A9e"},
                {name: "Hémérocalle", link: "https://fr.wikipedia.org/wiki/H%C3%A9m%C3%A9rocalle"},
                {name: "Trèfle", link: "https://fr.wikipedia.org/wiki/Tr%C3%A8fle"},
                {name: "Angélique", link: "https://fr.wikipedia.org/wiki/Angelica"},
                {name: "Canard", link: "https://fr.wikipedia.org/wiki/Canard"},
                {name: "Mélisse", link: "https://fr.wikipedia.org/wiki/M%C3%A9lisse"},
                {name: "Fromental", link: "https://fr.wikipedia.org/wiki/Fromental_(plante)"},
                {name: "Lis martagon", link: "https://fr.wikipedia.org/wiki/Lis_martagon"},
                {name: "Serpolet", link: "https://fr.wikipedia.org/wiki/Serpolet"},
                {name: "Faux", link: "https://fr.wikipedia.org/wiki/Faux_(outil)"},
                {name: "Fraise", link: "https://fr.wikipedia.org/wiki/Fraise_(fruit)"},
                {name: "Bétoine", link: "https://fr.wikipedia.org/wiki/B%C3%A9toine"},
                {name: "Pois", link: "https://fr.wikipedia.org/wiki/Pois"},
                {name: "Acacia", link: "https://fr.wikipedia.org/wiki/Robinia_pseudoacacia"},
                {name: "Caille", link: "https://fr.wikipedia.org/wiki/Caille"},
                {name: "Œillet", link: "https://fr.wikipedia.org/wiki/%C5%92illet"},
                {name: "Sureau", link: "https://fr.wikipedia.org/wiki/Sureau"},
                {name: "Pavot", link: "https://fr.wikipedia.org/wiki/Pavot"},
                {name: "Tilleul", link: "https://fr.wikipedia.org/wiki/Tilleul"},
                {name: "Fourche", link: "https://fr.wikipedia.org/wiki/Fourche"},
                {name: "Barbeau", link: "https://fr.wikipedia.org/wiki/Centaurea_cyanus"},
                {name: "Camomille", link: "https://fr.wikipedia.org/wiki/Camomille_romaine"},
                {name: "Chèvrefeuille", link: "https://fr.wikipedia.org/wiki/Ch%C3%A8vrefeuille"},
                {name: "Caille-lait", link: "https://fr.wikipedia.org/wiki/Caille-lait"},
                {name: "Tanche", link: "https://fr.wikipedia.org/wiki/Tanche"},
                {name: "Jasmin", link: "https://fr.wikipedia.org/wiki/Jasmin"},
                {name: "Verveine", link: "https://fr.wikipedia.org/wiki/Verveine"},
                {name: "Thym", link: "https://fr.wikipedia.org/wiki/Thym"},
                {name: "Pivoine", link: "https://fr.wikipedia.org/wiki/Pivoine"},
                {name: "Chariot", link: "https://fr.wikipedia.org/wiki/Chariot"}
            ]
        },
        {
            name: "Messidor",
            link: "https://fr.wikipedia.org/wiki/Messidor",
            days: [
                {name: "Seigle", link: "https://fr.wikipedia.org/wiki/Seigle"},
                {name: "Avoine", link: "https://fr.wikipedia.org/wiki/Avoine_cultiv%C3%A9e"},
                {name: "Oignon", link: "https://fr.wikipedia.org/wiki/Oignon"},
                {name: "Véronique", link: "https://fr.wikipedia.org/wiki/V%C3%A9ronique_(plante)"},
                {name: "Mulet", link: "https://fr.wikipedia.org/wiki/Mulet"},
                {name: "Romarin", link: "https://fr.wikipedia.org/wiki/Romarin"},
                {name: "Concombre", link: "https://fr.wikipedia.org/wiki/Concombre"},
                {name: "Échalote", link: "https://fr.wikipedia.org/wiki/%C3%89chalote"},
                {name: "Absinthe", link: "https://fr.wikipedia.org/wiki/Absinthe_(plante)"},
                {name: "Faucille", link: "https://fr.wikipedia.org/wiki/Faucille"},
                {name: "Coriandre", link: "https://fr.wikipedia.org/wiki/Coriandre"},
                {name: "Artichaut", link: "https://fr.wikipedia.org/wiki/Artichaut"},
                {name: "Girofle", link: "https://fr.wikipedia.org/wiki/Girofle"},
                {name: "Lavande", link: "https://fr.wikipedia.org/wiki/Lavande"},
                {name: "Chamois", link: "https://fr.wikipedia.org/wiki/Chamois"},
                {name: "Tabac", link: "https://fr.wikipedia.org/wiki/Tabac"},
                {name: "Groseille", link: "https://fr.wikipedia.org/wiki/Groseille"},
                {name: "Gesse", link: "https://fr.wikipedia.org/wiki/Lathyrus"},
                {name: "Cerise", link: "https://fr.wikipedia.org/wiki/Cerise"},
                {name: "Parc", link: "https://fr.wikipedia.org/wiki/Parc_(homonymie)"},
                {name: "Menthe", link: "https://fr.wikipedia.org/wiki/Menthe"},
                {name: "Cumin", link: "https://fr.wikipedia.org/wiki/Cumin"},
                {name: "Haricot", link: "https://fr.wikipedia.org/wiki/Haricot"},
                {name: "Orcanète", link: "https://fr.wikipedia.org/wiki/Orcanette_des_teinturiers"},
                {name: "Pintade", link: "https://fr.wikipedia.org/wiki/Pintade"},
                {name: "Sauge", link: "https://fr.wikipedia.org/wiki/Sauge"},
                {name: "Ail", link: "https://fr.wikipedia.org/wiki/Ail_cultiv%C3%A9"},
                {name: "Vesce", link: "https://fr.wikipedia.org/wiki/Vesce"},
                {name: "Blé", link: "https://fr.wikipedia.org/wiki/Bl%C3%A9"},
                {name: "Chalemie", link: "https://fr.wikipedia.org/wiki/Chalemie"}
            ]
        },
        {
            name: "Thermidor",
            link: "https://fr.wikipedia.org/wiki/Thermidor",
            days: [
                {name: "Épeautre", link: "https://fr.wikipedia.org/wiki/%C3%89peautre"},
                {name: "Bouillon-blanc", link: "https://fr.wikipedia.org/wiki/Bouillon-blanc"},
                {name: "Melon", link: "https://fr.wikipedia.org/wiki/Melon_(plante)"},
                {name: "Ivraie", link: "https://fr.wikipedia.org/wiki/Ivraie"},
                {name: "Bélier", link: "https://fr.wikipedia.org/wiki/B%C3%A9lier"},
                {name: "Prêle", link: "https://fr.wikipedia.org/wiki/Sphenophyta"},
                {name: "Armoise", link: "https://fr.wikipedia.org/wiki/Armoise"},
                {name: "Carthame", link: "https://fr.wikipedia.org/wiki/Carthame"},
                {name: "Mûre", link: "https://fr.wikipedia.org/wiki/M%C3%BBre_(fruit_de_la_ronce)"},
                {name: "Arrosoir", link: "https://fr.wikipedia.org/wiki/Arrosoir"},
                {name: "Panic", link: "https://fr.wikipedia.org/wiki/Panic_(plante)"},
                {name: "Salicorne", link: "https://fr.wikipedia.org/wiki/Salicorne"},
                {name: "Abricot", link: "https://fr.wikipedia.org/wiki/Abricot"},
                {name: "Basilic", link: "https://fr.wikipedia.org/wiki/Basilic_(plante)"},
                {name: "Brebis", link: "https://fr.wikipedia.org/wiki/Mouton"},
                {name: "Guimauve", link: "https://fr.wikipedia.org/wiki/Guimauve_officinale"},
                {name: "Lin", link: "https://fr.wikipedia.org/wiki/Lin_cultiv%C3%A9"},
                {name: "Amande", link: "https://fr.wikipedia.org/wiki/Amande"},
                {name: "Gentiane", link: "https://fr.wikipedia.org/wiki/Gentiane"},
                {name: "Écluse", link: "https://fr.wikipedia.org/wiki/%C3%89cluse"},
                {name: "Carline", link: "https://fr.wikipedia.org/wiki/Carline"},
                {name: "Câprier", link: "https://fr.wikipedia.org/wiki/C%C3%A2prier"},
                {name: "Lentille", link: "https://fr.wikipedia.org/wiki/Lentille_cultiv%C3%A9e"},
                {name: "Aunée", link: "https://fr.wikipedia.org/wiki/Inule"},
                {name: "Loutre", link: "https://fr.wikipedia.org/wiki/Loutre"},
                {name: "Myrte", link: "https://fr.wikipedia.org/wiki/Myrte"},
                {name: "Colza", link: "https://fr.wikipedia.org/wiki/Colza"},
                {name: "Lupin", link: "https://fr.wikipedia.org/wiki/Lupin"},
                {name: "Coton", link: "https://fr.wikipedia.org/wiki/Coton"},
                {name: "Moulin", link: "https://fr.wikipedia.org/wiki/Moulin"}
            ]
        },
        {
            name: "Fructidor",
            link: "https://fr.wikipedia.org/wiki/Fructidor",
            days: [
                {name: "Prune", link: "https://fr.wikipedia.org/wiki/Prune_(fruit)"},
                {name: "Millet", link: "https://fr.wikipedia.org/wiki/Millet_(gramin%C3%A9e)"},
                {name: "Lycoperdon", link: "https://fr.wikipedia.org/wiki/Vesse-de-loup"},
                {name: "Escourgeon", link: "https://fr.wikipedia.org/wiki/Escourgeon"},
                {name: "Saumon", link: "https://fr.wikipedia.org/wiki/Saumon"},
                {name: "Tubéreuse", link: "https://fr.wikipedia.org/wiki/Tub%C3%A9reuse"},
                {name: "Sucrion", link: "https://fr.wikipedia.org/wiki/Escourgeon"},
                {name: "Apocyn", link: "https://fr.wikipedia.org/wiki/Ascl%C3%A9piade_commune"},
                {name: "Réglisse", link: "https://fr.wikipedia.org/wiki/R%C3%A9glisse"},
                {name: "Échelle", link: "https://fr.wikipedia.org/wiki/%C3%89chelle_(outil)"},
                {name: "Pastèque", link: "https://fr.wikipedia.org/wiki/Past%C3%A8que"},
                {name: "Fenouil", link: "https://fr.wikipedia.org/wiki/Fenouil"},
                {name: "Épine vinette", link: "https://fr.wikipedia.org/wiki/%C3%89pine_vinette"},
                {name: "Noix", link: "https://fr.wikipedia.org/wiki/Noix"},
                {name: "Truite", link: "https://fr.wikipedia.org/wiki/Truite"},
                {name: "Citron", link: "https://fr.wikipedia.org/wiki/Citron"},
                {name: "Cardère", link: "https://fr.wikipedia.org/wiki/Card%C3%A8re_sauvage"},
                {name: "Nerprun", link: "https://fr.wikipedia.org/wiki/Rhamnus"},
                {name: "Tagette", link: "https://fr.wikipedia.org/wiki/Tagetes"},
                {name: "Hotte", link: "https://fr.wikipedia.org/wiki/Hotte"},
                {name: "Églantier", link: "https://fr.wikipedia.org/wiki/Rosa_canina"},
                {name: "Noisette", link: "https://fr.wikipedia.org/wiki/Noisette"},
                {name: "Houblon", link: "https://fr.wikipedia.org/wiki/Houblon"},
                {name: "Sorgho", link: "https://fr.wikipedia.org/wiki/Sorgho_commun"},
                {name: "Écrevisse", link: "https://fr.wikipedia.org/wiki/%C3%89crevisse"},
                {name: "Bigarade", link: "https://fr.wikipedia.org/wiki/Bigarade"},
                {name: "Verge d'or", link: "https://fr.wikipedia.org/wiki/Verge_d%27or"},
                {name: "Maïs", link: "https://fr.wikipedia.org/wiki/Ma%C3%AFs"},
                {name: "Marron", link: "https://fr.wikipedia.org/wiki/Marron_(fruit)"},
                {name: "Panier", link: "https://fr.wikipedia.org/wiki/Panier"}
            ]
        },
        {
            name: "Jours complémentaires",
            link: "https://fr.wikipedia.org/wiki/Jour_compl%C3%A9mentaire",
            days: [
                {name: "Jour de la vertu", link: "https://fr.wikipedia.org/wiki/Jour_de_la_vertu"},
                {name: "Jour du génie", link: "https://fr.wikipedia.org/wiki/Jour_du_g%C3%A9nie"},
                {name: "Jour du travail", link: "https://fr.wikipedia.org/wiki/Jour_du_travail"},
                {name: "Jour de l'opinion", link: "https://fr.wikipedia.org/wiki/Jour_de_l%27opinion"},
                {name: "Jour des récompenses", link: "https://fr.wikipedia.org/wiki/Jour_des_r%C3%A9compenses"},
                {name: "Jour de la révolution", link: "https://fr.wikipedia.org/wiki/Jour_de_la_R%C3%A9volution"}
            ]
        }
    ];

    var date = moment(dateInput);
    var twentyOneSeptember1792 = moment('1792-09-22');
    var days = date.diff(twentyOneSeptember1792, 'days');

    var rep = new RepublicainDate;
    rep.year = 1;

    while (days >= 0) {
        var leapYear = (rep.year + 1) % 4 == 0;

        if (days >= (leapYear ? 366 : 365)) {
            rep.year++;
            days -= leapYear ? 366 : 365;
        } else {
            var monthIndex = Math.floor(days / 30);
            var dayIndex = days % 30;

            rep.month = monthIndex + 1;
            rep.monthName = table[monthIndex].name;
            rep.monthLink = table[monthIndex].link;
            rep.day = dayIndex + 1;
            rep.dayName = table[monthIndex].days[dayIndex].name;
            rep.dayLink = table[monthIndex].days[dayIndex].link;
            break;
        }
    }

    return rep;
};
