export const displayedColumns: string[] = ['name', 'inputvalue', 'outputvalue'];

const API_URL = "http://172.18.10.201:5000"

export const ApiEndpoints: Record<string, string> = {
    core_laranjal: `${API_URL}/json/core_lji?t=`,
    acesso1_laranjal: `${API_URL}/json/ac1_lji?t=`,
    acesso2_laranjal: `${API_URL}/json/ac2_lji?t=`,
    acesso3_laranjal: `${API_URL}/json/ac3_lji?t=`,

    core_oiapoque: `${API_URL}/json/core_opq?t=`,
    acesso1_oiapoque: `${API_URL}/json/ac1_opq?t=`,
    acesso2_oiapoque: `${API_URL}/json/ac2_opq?t=`,
    acesso3_oiapoque: `${API_URL}/json/ac3_opq?t=`,

    //core_macapa
    core_macapa: `${API_URL}/json/core_mcp?t=`,
    acesso_terreo_cpd_macapa:`${API_URL}/json/ac_cpd_mcp?t=`,
    acesso_terreo_lado_secos_macapa:`${API_URL}/json/ac_secos_mcp?t=`,
    acesso_terreo_lado_cpd_sepol_macapa:`${API_URL}/json/ac_sepol_mcp?t=`,
    acesso_terreo_lado_cpd_semam_macapa:`${API_URL}/json/semam_mcp?t=`,

    acesso_andar1_lado_Nutec_macapa:`${API_URL}/json/ac_nutec_mcp?t=`,
    acesso_andar1_rack1_macapa: `${API_URL}/json/ac_ol_r1_mcp?t=`,
    acesso_andar1_rack2_macapa: `${API_URL}/json/ac_ol_r2_mcp?t=`,

    acesso_andar2_lado_refeitorio_macapa:`${API_URL}/json/ac_refeitorio_mcp?t=`,
    acesso_andar2_lado_secad_rack1_macapa:`${API_URL}/json/ac_secad_r1_mcp?t=`,
    acesso_andar2_lado_secad_rack2_macapa:`${API_URL}/json/ac_secad_r2_mcp?t=`,
}