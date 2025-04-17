export type ProjectComposition = Array<string>;
export type ConfigurationData = { [key: string]: string };

export interface ToastType {
    id: number;
    type: string;
    message: string;
}

interface User {
    id?: number;
    [key: string]: any;
}

interface DecodedToken {
    user_id: number;
    exp: number;
    [key: string]: any;
}

type Role = {
    id: number;
    role: string;
    can_delete_user: boolean;
    can_edit_user_role: boolean;
    can_create_role: boolean;
    can_see_logs: boolean;
    can_delete_logs: boolean;
    can_download_logs: boolean;
    can_delete_role: boolean;
    can_see_role_list: boolean;
    can_edit_role: boolean;
    can_add_user_role: boolean;
    can_delete_user_role: boolean;
    can_create_user: boolean;
    can_add_user_to_intervention: boolean;
    can_remove_user_from_intervention: boolean;
    can_access_sav: boolean;
    can_access_be: boolean;
    can_generate_tia_project: boolean;
    can_export_standard_fb_to_xml: boolean;
    tier: number;
    color: string;
};

type RoleCreate = {
    role: string;
    can_delete_user: boolean;
    can_edit_user_role: boolean;
    can_create_role: boolean;
    can_see_logs: boolean;
    can_delete_logs: boolean;
    can_download_logs: boolean;
    can_delete_role: boolean;
    can_see_role_list: boolean;
    can_edit_role: boolean;
    can_add_user_role: boolean;
    can_delete_user_role: boolean;
    can_create_user: boolean;
    can_add_user_to_intervention: boolean;
    can_remove_user_from_intervention: boolean;
    can_access_sav: boolean;
    can_access_be: boolean;
    can_generate_tia_project: boolean;
    can_export_standard_fb_to_xml: boolean;
    tier: number;
    color: string;
};

type Privilege = {
    can_delete_user: boolean;
    can_edit_user_role: boolean;
    can_create_role: boolean;
    can_see_logs: boolean;
    can_delete_logs: boolean;
    can_download_logs: boolean;
    can_delete_role: boolean;
    can_see_role_list: boolean;
    can_edit_role: boolean;
    can_add_user_role: boolean;
    can_delete_user_role: boolean;
    can_create_user: boolean;
    can_add_user_to_intervention: boolean;
    can_remove_user_from_intervention: boolean;
    can_access_sav: boolean;
    can_access_be: boolean;
    can_generate_tia_project: boolean;
    can_export_standard_fb_to_xml: boolean;
    tier: number;
};

type UserResponse = {
    id : string
    name: string
    email: string
    role: Role[]
}

type AvisClient = {
    machine_propre: boolean,
    expl_travaux: boolean,
    eval: number,
    observ_client: string
}

type Intervention = {
    id: number,
    travaux_realise: string,
    demande_client: string,
    essais_realise: string,
    observation_essais: string,
    en_cours: boolean,
    termine: boolean,
    bool_essais_realise: boolean,
    bool_fourniture_envoye: boolean,
    bool_fluide_utilise: boolean,
    signature: string,
    fourniture_envoye?: Fourniture_envoye[],
    fluide_caloporteur?: Fluide_Caloporteur[],
    horaire_pointage?: Horaire_Pointage[],
    utilisation_fourniture?: Utilisation_Fourniture[],
    kit_fourniture?: Kit_fourniture[]
}

type Fourniture_envoye = {
    id? : string,
    code_article : string,
    quantite : number
}

type Fluide_Caloporteur = {
    id? : number,
    numero_lot : string,
    quantite? : number
}

type Horaire_Pointage = {
    id? : number,
    date : string,
    heure_debut_aller : string,
    heure_fin_aller : string,
    heure_debut_retour : string,
    heure_fin_retour : string,
    heure_debut_client : string,
    heure_fin_client : string,
    heure_debut_atelier : string,
    heure_fin_atelier : string,
    lst_technicien: string
}

type Utilisation_Fourniture = {
    id : string,
    code_article : string,
    quantite : number
}

type Kit_fourniture = {
    libelle : string,
    num_article : string,
    quantite : number,
    qttUtil : number,
    id? : number
}

type Dossier = {
    id: string; // Optional property
    titre: string;
    code_w?: string;
    contact_name?: string;
    contact_email?: string;
    contact_tel?: string;
    adresse?: string;
    date_creation: string;
    nom_client: string;
    date_intervention: string;
    appareil: string;
    numero_serie: string;
    numero_bl: string;
    etat?: boolean; // Optional property
    intervention?: Intervention; // Assuming Intervention is defined elsewhere
    avis_client?: AvisClient; // Assuming AvisClient is defined elsewhere
    bool_inter?: boolean;
    etat_dossier_client?: boolean;
    lst_technicien?: UserResponse[]; // Assuming UserResponse is defined elsewhere
};

export type {
    User,
    DecodedToken,
    Role,
    RoleCreate,
    Privilege,
    UserResponse,
    AvisClient,
    Intervention,
    Fourniture_envoye,
    Fluide_Caloporteur,
    Horaire_Pointage,
    Utilisation_Fourniture,
    Kit_fourniture,
    Dossier
}