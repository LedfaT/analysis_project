// src/pages/Admin/AdminLayout.jsx
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import "./AdminLayout.css";
import { tabsLink } from "./tabs";
import { API_URL } from "../../http/index";
import ComponentCard from "../../components/ui/ComponentsElements/ComponentsThirdSection/ComponentCard";
import { namesList } from "./names";

const AdminLayout = () => {
  const [activeTab, setActiveTab] = useState(tabsLink[0]);
  const tabsRef = useRef(null);
  const [indicator, setIndicator] = useState({
    left: 0,
    width: 0,
    top: 0,
    height: 0,
  });
  const [items, setItems] = useState<any[]>([]);
  const [modalActive, setModalActive] = useState<{
    active: boolean;
    state?: "edit" | "create";
  }>({ active: false });
  const [formData, setFormData] = useState({});

  const handleInputChange = (key, value) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const onDelete = (id) => {
    axios
      .delete(`${API_URL}/api/${activeTab.url}/${id}`)
      .then((res) => setItems((prev) => prev.filter((item) => item.id !== id)))
      .catch(console.error);
  };

  const onEdit = (item) => {
    setFormData(item);
    setModalActive({ active: true, state: "edit" });
  };

  const handleCreateItem = () => {
    axios
      .post(`${API_URL}/api/${activeTab.url}/`, formData)
      .then(() => {
        setModalActive({ active: false });
        axios
          .get(`${API_URL}/api/${activeTab.url}/list`)
          .then((res) => {
            const data = res?.data?.data ?? [];
            console.log(res);
            setItems(data);
          })
          .catch(console.error);
      })
      .catch(console.error);
  };

  const handleEditItem = () => {
    axios
      .patch(`${API_URL}/api/${activeTab.url}/${formData["id"]}`, formData)
      .then(() => {
        setModalActive({ active: false });
        axios
          .get(`${API_URL}/api/${activeTab.url}/list`)
          .then((res) => {
            const data = res?.data?.data ?? [];
            console.log(res);
            setItems(data);
          })
          .catch(console.error);
      })
      .catch(console.error);
  };
  console.log(items);
  useEffect(() => {
    axios
      .get(`${API_URL}/api/${activeTab.url}/list`)
      .then((res) => {
        const data = res?.data?.data ?? [];
        console.log(res);
        setItems(data);
      })
      .catch(console.error);
  }, [activeTab]);

  useEffect(() => {
    const container = tabsRef.current;
    if (!container) return;
    const btn = container.querySelector(".tab--active");
    if (btn) {
      setIndicator({
        left: btn.offsetLeft,
        width: btn.offsetWidth,
        top: btn.offsetTop,
        height: btn.offsetHeight,
      });
    }
  }, [activeTab]);

  return (
    <>
      <div style={{ padding: 20 }}>
        <div className="adminHeader">
          <h1>Панель Адміністратора</h1>
        </div>

        <nav className="tabsWrapper">
          <div className="tabsScroll" ref={tabsRef}>
            {tabsLink.map((tab) => (
              <button
                key={tab.name}
                className={`tab ${
                  tab.name === activeTab.name ? "tab--active" : ""
                }`}
                onClick={() => {
                  setActiveTab(tab);
                  setItems([]);
                }}
              >
                {tab.name}
              </button>
            ))}
            <span
              className="tabIndicator"
              style={{
                left: indicator.left,
                width: indicator.width,
                top: indicator.top,
                height: indicator.height,
              }}
            />
          </div>
          <button
            className="btn btnPrimary createButton"
            onClick={() => setModalActive({ active: true, state: "create" })}
          >
            Створити {activeTab.name}
          </button>
        </nav>

        <section>
          <ul style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            {!items.length && (
              <div
                style={{
                  width: "100%",
                  textAlign: "center",
                  padding: "40px",
                  color: "#666",
                }}
              >
                <h2>
                  Немає <strong>{activeTab.name}</strong>
                </h2>
                <p>Похоже {activeTab.name.toLowerCase()} немає.</p>
                <p>
                  Натисніть <strong>Створити {activeTab.name}</strong> щоб
                  додати нову.
                </p>
              </div>
            )}

            {items.map((item) => (
              <ComponentCard
                component={item}
                adminPanel
                onDelete={() => onDelete(item.id)}
                onEdit={() => onEdit(item)}
              />
            ))}
          </ul>
        </section>
      </div>
      {modalActive.active && (
        <div className="modalOverlay">
          <div className="modalWindow">
            <button
              className="modalClose"
              onClick={() => setModalActive({ active: false })}
            >
              ✕
            </button>

            <ul className="formList">
              {Object.keys(activeTab.item ?? {}).map((key) => (
                <li className="formItem" key={key}>
                  <label className="formLabel">{namesList[key] ?? key}</label>
                  <input
                    className="formInput"
                    type="text"
                    value={formData[key] ?? ""}
                    placeholder={`Enter ${key}`}
                    onChange={(e) => handleInputChange(key, e.target.value)}
                  />
                </li>
              ))}
            </ul>

            <button
              className="btn btnPrimary"
              onClick={() => {
                modalActive.state === "edit"
                  ? handleEditItem()
                  : handleCreateItem();
              }}
            >
              {modalActive.state === "edit" ? "Змінити" : "Створити"}{" "}
              {activeTab.name}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default AdminLayout;
