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
    acesso3_oiapoque: `${API_URL}/json/ac3_opq?t=`
}