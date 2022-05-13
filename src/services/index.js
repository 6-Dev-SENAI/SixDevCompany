import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.0.127:3000",
});
api.defaults.timeout = 2500;

export default class Services {
  async login(body) {
    const response = await api.post("/login", body);
    return response.data;
  }

  async getStaffs() {
    const response = await api.get("/funcionarios");
    return response.data;
  }

  async createStaff(body) {
    const response = await api.post("/cadastrar", body);
    return response.data;
  }

  async deleteAll() {
    const response = await api.get("/funcionarios");

    const data = response.data;

    const ids = data.reduce((acc, curr) => [...acc, curr._id], []);

    ids
      .filter((id) => id !== "627dcf75fe79daf476a62bc6")
      .forEach(async (id) => {
        await api.delete(`/deletar/${id}`);
      });
  }

  async delete(id) {
    const response = await api.delete(`/deletar/${id}`);
    return response.data;
  }

  async update(id, body) {
    const response = await api.patch(`/atualizar/${id}`, body);
    return response.data;
  }
}
