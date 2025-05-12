import { useState, useEffect } from "react";
import axios from "axios";
import { tabsLink } from "./tabs";
import { API_URL } from "../../http";
import ComponentCard from "../../components/ui/ComponentsElements/ComponentsThirdSection/ComponentCard";
import { namesList } from "./names";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

export default function AdminLayout() {
  const [activeTab, setActiveTab] = useState(tabsLink[0]);
  const [items, setItems] = useState<any[]>([]);
  const [modalActive, setModalActive] = useState<{
    active: boolean;
    state: "create" | "edit";
  }>({ active: false, state: "create" });
  const [formData, setFormData] = useState<Record<string, any>>({});
  const [showSuccess, setShowSuccess] = useState(false);

  // Load list whenever active tab changes
  useEffect(() => {
    axios
      .get(`${API_URL}/api/${activeTab.url}/list`)
      .then((res) => setItems(res.data.data ?? []))
      .catch(console.error);
  }, [activeTab]);

  const refreshList = () => {
    axios
      .get(`${API_URL}/api/${activeTab.url}/list`)
      .then((res) => setItems(res.data.data ?? []))
      .catch(console.error);
  };

  const handleInputChange = (key: string, value: any) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleCreateItem = () => {
    axios
      .post(`${API_URL}/api/${activeTab.url}/`, formData)
      .then(() => {
        setModalActive({ active: false, state: "create" });
        refreshList();
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 2000);
      })
      .catch(console.error);
  };

  const handleEditItem = () => {
    axios
      .patch(`${API_URL}/api/${activeTab.url}/${formData.id}`, formData)
      .then(() => {
        setModalActive({ active: false, state: "edit" });
        refreshList();
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 2000);
      })
      .catch(console.error);
  };

  const onDelete = (id: number) => {
    axios
      .delete(`${API_URL}/api/${activeTab.url}/${id}`)
      .then(() => setItems((prev) => prev.filter((it) => it.id !== id)))
      .catch(console.error);
  };

  const onEdit = (item: any) => {
    setFormData(item);
    setModalActive({ active: true, state: "edit" });
  };

  return (
    <div className="p-5">
      <h1 className="text-2xl font-semibold mb-6">Панель Администратора</h1>

      {/* Tabs Navigation */}
      <nav className="flex gap-2 mb-6 flex-wrap">
        {tabsLink.map((tab) => {
          const isActive = tab.name === activeTab.name;
          return (
            <button
              key={tab.url}
              onClick={() => {
                if (isActive) return;
                setActiveTab(tab);
                setItems([]);
              }}
              className={`px-4 py-2 rounded-md focus:outline-none transition-colors ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-800 hover:bg-gray-200"
              }`}
            >
              {tab.name}
            </button>
          );
        })}

        <button
          onClick={() => setModalActive({ active: true, state: "create" })}
          className="ml-auto px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none transition-colors"
        >
          Создать {activeTab.name}
        </button>
      </nav>

      {/* Content: Cards or Empty State */}
      <section className="mb-6">
        {items.length === 0 ? (
          <div className="w-full text-center py-10 text-gray-600 bg-gray-50 rounded-lg">
            <h2 className="mb-2 text-lg">
              Немає <strong>{activeTab.name}</strong>
            </h2>
            <p className="mb-1">Похоже {activeTab.name.toLowerCase()} немає.</p>
            <p>
              Нажмите <strong>Создать {activeTab.name}</strong>, чтобы добавить
              новую запись.
            </p>
          </div>
        ) : (
          <ul className="flex flex-wrap gap-4">
            {items.map((item) => (
              <ComponentCard
                key={item.id}
                component={item}
                adminPanel
                onDelete={() => onDelete(item.id)}
                onEdit={() => onEdit(item)}
              />
            ))}
          </ul>
        )}
      </section>

      {/* Modal */}
      {modalActive.active && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-40">
          <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md relative">
            <button
              onClick={() => setModalActive({ active: false, state: "create" })}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>

            <ul className="grid grid-cols-2 gap-4 mb-4">
              {Object.keys(activeTab.item ?? {}).map((key) => (
                <li key={key} className="flex flex-col">
                  <label className="mb-1 text-sm font-medium text-gray-700">
                    {namesList[key] ?? key}
                  </label>
                  <input
                    type="text"
                    value={formData[key] ?? ""}
                    onChange={(e) => handleInputChange(key, e.target.value)}
                    placeholder={key}
                    className="p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-300"
                  />
                </li>
              ))}
            </ul>

            <button
              onClick={() =>
                modalActive.state === "edit"
                  ? handleEditItem()
                  : handleCreateItem()
              }
              className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none transition-colors"
            >
              {modalActive.state === "edit" ? "Изменить" : "Создать"}{" "}
              {activeTab.name}
            </button>
          </div>
        </div>
      )}

      {/* Success Checkmark */}
      {showSuccess && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/40 pointer-events-none">
          <CheckCircleIcon className="w-24 h-24 text-green-400 animate-pop-in" />
        </div>
      )}
    </div>
  );
}
