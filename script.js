(function () {
    const CLOUD_URL = 'https://xtiqwwwitvcmbblqqnxx.supabase.co';
    const CLOUD_KEY = 'sb_publishable_HyXPtAE9MaX01wBya036aQ_MZk5k842';
    const APP_VERSION = '1.2.0';
    let cloudDB = null;

    const BASE_DATA = {
        "rules": [
            "❌ Nada de miel (Riesgo de botulismo < 2 años)",
            "❌ Nada de carne picada comprada (Prevención SUH)",
            "✅ Comidas bien cocidas, blandas, desmenuzables o en trozos seguros",
            "✅ Priorizar hierro (carne, lentejas, espinaca) + Vitamina C (limón/fruta) para absorción",
            "✅ Adaptar sal y condimentos al final para adultos"
        ],
        "startDate": "2026-02-02",
        "weeks": [
            {
                "weekNumber": 1,
                "days": [
                    { "day": "Lunes", "lunch": "Pollo al horno con calabaza, batata y brócoli (flores blandas)", "dinner": "Sopa crema de calabaza con pollo desmechado y queso crema" },
                    { "day": "Martes", "lunch": "Risotto de pollo con arvejas y zanahoria rallada fina", "dinner": "Tarta de zucchini y queso (masa casera tierna, sin bordes duros)" },
                    { "day": "Miércoles", "lunch": "Guiso de lentejas (carne en trozos minúsculos, zanahoria y papa)", "dinner": "Puré de batata con huevo poché (yema bien cocida)" },
                    { "day": "Jueves", "lunch": "Milanesas de pollo (pechuga tiernizada) con puré de papas", "dinner": "Fideos cortos (tirabuzones) con salsa de tomate casera y albahaca" },
                    { "day": "Viernes", "lunch": "Pescado blanco (merluza) al papillote with bastoncitos de zucchini", "dinner": "Tortilla de papas y espinaca picada (bien cocida)" },
                    { "day": "Sábado", "lunch": "Pastas rellenas (ravioles de verdura) with salsa blanca suave", "dinner": "Pizza casera de molde (masa blanda) with mucho queso" },
                    { "day": "Domingo", "lunch": "Asado familiar (carne muy cocida y desmechada para Alma) with palta", "dinner": "Sándwiches de pollo desmechado en pan de leche (sin corteza)" }
                ],
                "shoppingList": [
                    { "item": "Pollo (pechugas y muslos)", "checked": false },
                    { "item": "Calabaza, Batata, Papas", "checked": false },
                    { "item": "Brócoli, Zucchini", "checked": false },
                    { "item": "Zanahorias, Tomates", "checked": false },
                    { "item": "Lentejas", "checked": false },
                    { "item": "Pescado blanco (Merluza)", "checked": false },
                    { "item": "Arroz, Fideos tirabuzón", "checked": false },
                    { "item": "Huevos, Queso crema, Queso fresco", "checked": false },
                    { "item": "Harina, Levadura (para pizza/tarta)", "checked": false }
                ]
            },
            {
                "weekNumber": 2,
                "days": [
                    { "day": "Lunes", "lunch": "Estofado de ternera (hilachas de carne) con zanahoria y arroz", "dinner": "Polenta cremosa con queso y tuco suave" },
                    { "day": "Martes", "lunch": "Garbanzos (pelados y pisados) con espinaca y huevo duro", "dinner": "Arroz con atún al natural (bien desmenuzado) y arvejas" },
                    { "day": "Miércoles", "lunch": "Canelones de verdura y ricota con salsa rosa", "dinner": "Sopa de vegetales con fideos munición o letras" },
                    { "day": "Jueves", "lunch": "Solomillo de cerdo (muy tierno) con puré de manzana", "dinner": "Budín de zanahoria y choclo cremoso" },
                    { "day": "Viernes", "lunch": "Pescado a la plancha con arroz primavera (vegetales picaditos)", "dinner": "Quesadillas en tortilla de trigo blanda con queso y calabaza" },
                    { "day": "Sábado", "lunch": "Hamburguesas de lentejas caseras (bien pisadas) con papas al horno", "dinner": "Lasagna de berenjenas (sin piel) con carne desmechada y queso" },
                    { "day": "Domingo", "lunch": "Pastel de papa (usando carne desmechada o procesada en casa)", "dinner": "Arroz blanco con queso, aceite de oliva y palta" }
                ],
                "shoppingList": [
                    { "item": "Ternera (Trozo para estofado)", "checked": false },
                    { "item": "Solomillo de cerdo", "checked": false },
                    { "item": "Pescado blanco", "checked": false },
                    { "item": "Garbanzos, Lentejas, Arvejas", "checked": false },
                    { "item": "Ricota, Queso, Huevos", "checked": false },
                    { "item": "Espinaca, Berenjenas, Zapallitos", "checked": false },
                    { "item": "Manzanas, Palta", "checked": false },
                    { "item": "Polenta, Arroz, Fideos munición", "checked": false },
                    { "item": "Atún al natural", "checked": false }
                ]
            },
            {
                "weekNumber": 3,
                "days": [
                    { "day": "Lunes", "lunch": "Albóndigas de pollo (procesado casero) con arroz al azafrán", "dinner": "Sopa de arroz, zanahoria y zapallito" },
                    { "day": "Martes", "lunch": "Wok de pollo y vegetales (bien cocidos, cortados en tiritas)", "dinner": "Revuelto de zapallitos con huevo y queso" },
                    { "day": "Miércoles", "lunch": "Ñoquis de papa con salsa de tomate y ricota", "dinner": "Omelette de queso y jamón cocido picadito" },
                    { "day": "Jueves", "lunch": "Carne al horno (tipo roast beef) muy tierna con puré bicolor", "dinner": "Tarta de choclo cremoso y queso (sin granos enteros para Alma)" },
                    { "day": "Viernes", "lunch": "Fideuá de pescado (fideos cortos cocidos en caldo de pescado)", "dinner": "Hummus de garbanzos con pan pita blando y zanahorias al vapor" },
                    { "day": "Sábado", "lunch": "Milanesas de berenjena (sin piel, bien tiernas) con ensalada de tomate", "dinner": "Papas rústicas al horno con dip de queso crema y verdeo" },
                    { "day": "Domingo", "lunch": "Pollo a la portuguesa (salsa de tomate, morrón y cebolla blanda)", "dinner": "Sobras del mediodía o Fideos con manteca y queso" }
                ],
                "shoppingList": [
                    { "item": "Pollo, Roast Beef", "checked": false },
                    { "item": "Pescado", "checked": false },
                    { "item": "Garbanzos", "checked": false },
                    { "item": "Papas, Batatas, Berenjenas", "checked": false },
                    { "item": "Tomates, Morrón, Cebolla", "checked": false },
                    { "item": "Zapallito, Zanahoria", "checked": false },
                    { "item": "Ricota, Queso crema, Jamón cocido", "checked": false },
                    { "item": "Fideos cortos (Fideuá), Arroz", "checked": false }
                ]
            },
            {
                "weekNumber": 4,
                "days": [
                    { "day": "Lunes", "lunch": "Estofado de pollo con papas, batatas y zanahorias", "dinner": "Caldo de pollo con fideos cabellín" },
                    { "day": "Martes", "lunch": "Pasta con pesto de espinaca (procesado liso, sin trozos de nuez)", "dinner": "Budín de calabaza y queso" },
                    { "day": "Miércoles", "lunch": "Cazuela de arroz, pollo y arvejas partidas", "dinner": "Terrina de vegetales (zanahoria, zucchini, berenjena)" },
                    { "day": "Jueves", "lunch": "Supremas de pollo a la plancha con puré de zapallo", "dinner": "Ensalada de fideos tornillitos con queso, tomate (sin piel) y oliva" },
                    { "day": "Viernes", "lunch": "Filete de merluza with puré de arvejas (bien liso)", "dinner": "Tacos de pollo desmechado (tortillas de trigo muy blandas)" },
                    { "day": "Sábado", "lunch": "Pastel de calabaza y pollo desmechado", "dinner": "Omelette de espinaca y queso con puré de papas" },
                    { "day": "Domingo", "lunch": "Comida libre familiar (opción segura: Pasta con salsa blanca)", "dinner": "Plan B: Arroz con huevo y palta" }
                ],
                "shoppingList": [
                    { "item": "Pollo (Supermas, Muslos)", "quantity": "1", "checked": false },
                    { "item": "Pescado (Merluza)", "quantity": "1", "checked": false },
                    { "item": "Espinaca, Calabaza, Zapallo", "quantity": "1", "checked": false },
                    { "item": "Papas, Zanahorias", "quantity": "1", "checked": false },
                    { "item": "Zucchini, Berenjena", "quantity": "1", "checked": false },
                    { "item": "Arvejas partidas", "quantity": "1", "checked": false },
                    { "item": "Arroz, Fideos tornillito, Cabellín", "quantity": "1", "checked": false },
                    { "item": "Quesos, Huevos, Palta", "quantity": "1", "checked": false }
                ]
            }
        ],
        "backups": [
            "Arroz con huevo y queso",
            "Fideos con manteca",
            "Omelette express de queso",
            "Sopa de vegetales con fideos",
            "Yogur natural con banana pisada"
        ]
    };

    let currentData = null;
    let planId = null;
    let editState = null;
    let expandedWeeks = new Set(); // Semana que están abiertas

    function migrateData(data) {
        if (!data) return null;
        if (!data.weeks) return data;

        data.weeks.forEach((w, i) => {
            if (!w.shoppingList) {
                w.shoppingList = JSON.parse(JSON.stringify(BASE_DATA.weeks[i].shoppingList));
            }
            w.shoppingList.forEach(item => {
                if (item.quantity === undefined) item.quantity = "1";
            });
            // También asegurar que existan los campos de receta
            w.days.forEach(day => {
                if (day.lunchUrl === undefined) day.lunchUrl = "";
                if (day.dinnerUrl === undefined) day.dinnerUrl = "";
            });
        });
        return data;
    }

    async function init() {
        // Inyectar versión
        const versionEl = document.getElementById('app-version');
        if (versionEl) versionEl.textContent = APP_VERSION;

        setupEventListeners(); // Llamamos esto PRIMERO para que los botones siempre anden
        const hashData = window.location.hash;
        const savedData = localStorage.getItem('comidas_data');

        // Supabase Initialization
        if (window.supabase) {
            cloudDB = window.supabase.createClient(CLOUD_URL, CLOUD_KEY);
            console.log("Cloud DB client initialized successfully.");
        } else {
            console.error("Supabase library NOT found (window.supabase is undefined).");
        }

        // Supabase Load
        if (cloudDB) {
            setCloudStatus("⏳ Conectando...", "syncing");
            try {
                const { data, error } = await cloudDB.from('meal_plans').select('id, data').limit(1).single();
                if (!error && data) {
                    planId = data.id;
                    currentData = migrateData(data.data);
                    if (Object.keys(currentData).length > 0) {
                        render();
                        saveLocalOnly();
                        setCloudStatus("☁️ Sincronizado", "synced");
                        // setupEventListeners already called at top
                        return;
                    }
                } else if (error && error.code !== 'PGRST116') {
                    console.error("Supabase load error:", error);
                    setCloudStatus("☁️ Error DB", "error");
                }
            } catch (e) {
                console.error("Supabase connection catch:", e);
                setCloudStatus("☁️ Error Red", "error");
            }
        }

        if (hashData && hashData.length > 1) {
            try {
                const decoded = decodeURIComponent(escape(atob(hashData.substring(1))));
                currentData = migrateData(JSON.parse(decoded));
                render();
                save();
                window.history.replaceState(null, null, window.location.pathname);
                showSaveStatus("✓ Sincronizado desde el link");
                return;
            } catch (e) {
                console.error("Error decoding hash data", e);
            }
        }

        if (savedData) {
            currentData = migrateData(JSON.parse(savedData));
            render();
        } else {
            try {
                const response = await fetch('comidas.json');
                if (response.ok) {
                    currentData = migrateData(await response.json());
                } else {
                    throw new Error("Local fetch blocked");
                }
            } catch (error) {
                currentData = migrateData(JSON.parse(JSON.stringify(BASE_DATA)));
            }
            render();
            save();
        }

        setupEventListeners();
    }

    function saveLocalOnly() {
        if (currentData) {
            localStorage.setItem('comidas_data', JSON.stringify(currentData));
        }
    }

    async function save() {
        if (!currentData) return;

        // Save Local
        localStorage.setItem('comidas_data', JSON.stringify(currentData));
        showSaveStatus();

        // Save Cloud
        if (cloudDB) {
            setCloudStatus("⏳ Sincronizando...", "syncing");
            try {
                let result;
                if (planId) {
                    result = await cloudDB.from('meal_plans').update({ data: currentData, updated_at: new Date() }).eq('id', planId);
                } else {
                    // Fallback: intentar insertar si no había nada
                    result = await cloudDB.from('meal_plans').insert([{ data: currentData }]).select();
                    if (!result.error && result.data) planId = result.data[0].id;
                }

                if (!result.error) {
                    setCloudStatus("☁️ Sincronizado", "synced");
                } else {
                    console.error("Supabase save error:", result.error);
                    setCloudStatus("☁️ Error al subir", "error");
                }
            } catch (e) {
                console.error("Supabase save catch:", e);
                setCloudStatus("☁️ Error de red", "error");
            }
        }
    }

    function showSaveStatus(message = "✓ Local") {
        const status = document.getElementById('save-status');
        status.textContent = "⏳...";
        status.classList.add('saving');

        setTimeout(() => {
            status.textContent = message;
            status.classList.remove('saving');
        }, 600);
    }

    function setCloudStatus(text, className) {
        const status = document.getElementById('cloud-status');
        if (status) {
            status.textContent = text;
            status.className = "cloud-status " + className;
        }
    }

    function getCurrentWeekIdx() {
        if (!currentData || !currentData.startDate) return 0;
        const start = new Date(currentData.startDate);
        const today = new Date();
        const diffTime = today - start;
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
        if (diffDays < 0) return 0; // Aún no empezó
        const weekIdx = Math.floor(diffDays / 7);
        return Math.min(weekIdx, currentData.weeks.length - 1);
    }

    function toggleWeek(idx) {
        if (expandedWeeks.has(idx)) {
            expandedWeeks.delete(idx);
        } else {
            expandedWeeks.add(idx);
        }
        render();
    }

    function render() {
        if (!currentData) return;

        const currentWeekIdx = getCurrentWeekIdx();
        // Si es la primera vez, expandir la actual
        if (expandedWeeks.size === 0) {
            expandedWeeks.add(currentWeekIdx);
        }

        // Rules
        const rulesList = document.getElementById('rules-list');
        rulesList.innerHTML = currentData.rules.map(rule => `<li>${rule}</li>`).join('');

        // Calendar
        const container = document.getElementById('calendar-container');
        container.innerHTML = currentData.weeks.map((week, wIdx) => {
            const isExpanded = expandedWeeks.has(wIdx);
            const isCurrent = (wIdx === currentWeekIdx);

            return `
            <div class="week-section ${!isExpanded ? 'collapsed' : ''} ${isCurrent ? 'current' : ''}">
                <div class="week-header" onclick="toggleWeek(${wIdx})">
                    <div class="week-title">
                        Semana ${week.weekNumber}
                        <span class="week-badge">Semana Actual</span>
                    </div>
                    <span class="expand-icon">🔽</span>
                </div>
                
                <div class="week-content">
                    <div class="week-grid-header">
                        <div>Día</div>
                        <div>Almuerzo</div>
                        <div>Cena</div>
                    </div>
                    ${week.days.map((day, dIdx) => {
                const lunchUrl = day.lunchUrl || "";
                const dinnerUrl = day.dinnerUrl || "";

                return `
                        <div class="day-row">
                            <div class="day-label">${day.day}</div>
                            <div class="meal-slot" ondblclick="editMeal(${wIdx}, ${dIdx}, 'lunch')">
                                <span>${day.lunch}</span>
                                ${lunchUrl ? `<a href="${lunchUrl}" target="_blank" class="recipe-link" onclick="event.stopPropagation()">🔗 Receta</a>` : ''}
                            </div>
                            <div class="meal-slot" ondblclick="editMeal(${wIdx}, ${dIdx}, 'dinner')">
                                <span>${day.dinner}</span>
                                ${dinnerUrl ? `<a href="${dinnerUrl}" target="_blank" class="recipe-link" onclick="event.stopPropagation()">🔗 Receta</a>` : ''}
                            </div>
                        </div>
                    `}).join('')}
                    
                    <div class="shopping-list-section">
                        <div class="shopping-list-title">
                            <span>🛒 Lista de Compras</span>
                            <button class="add-item-btn" onclick="addShoppingItem(${wIdx})">+ Agregar</button>
                        </div>
                        <div class="shopping-list-header">
                            <span class="col-item">Producto</span>
                            <span class="col-qty">Cant.</span>
                        </div>
                        <ul class="shopping-list">
                            ${week.shoppingList.map((item, iIdx) => `
                                <li class="shopping-item ${item.checked ? 'checked' : ''}" onclick="toggleShoppingItem(${wIdx}, ${iIdx})">
                                    <input type="checkbox" ${item.checked ? 'checked' : ''} onclick="event.stopPropagation(); toggleShoppingItem(${wIdx}, ${iIdx})">
                                    <span class="item-text">${item.item}</span>
                                    <span class="item-qty" onclick="event.stopPropagation(); editQuantity(${wIdx}, ${iIdx})">${item.quantity || '1'}</span>
                                </li>
                            `).join('')}
                        </ul>
                    </div>
                </div>
            </div>
        `;
        }).join('');

        // Backups
        const backupsList = document.getElementById('backups-list');
        backupsList.innerHTML = currentData.backups.map(item => `
        <div class="backup-item">${item}</div>
    `).join('');
    }

    function editMeal(weekIdx, dayIdx, type) {
        const currentValue = currentData.weeks[weekIdx].days[dayIdx][type];
        const currentUrl = currentData.weeks[weekIdx].days[dayIdx][type + 'Url'] || "";
        editState = { type: 'meal', weekIdx, dayIdx, field: type };
        openModal(`Editar ${type === 'lunch' ? 'Almuerzo' : 'Cena'}`, currentValue, currentUrl);
    }

    function editQuantity(wIdx, iIdx) {
        const item = currentData.weeks[wIdx].shoppingList[iIdx];
        const newQty = prompt(`Cantidad para "${item.item}":`, item.quantity || "1");
        if (newQty !== null) {
            item.quantity = newQty.trim() || "1";
            render();
            save();
        }
    }

    function openModal(title, value, url = "") {
        document.getElementById('modal-title').textContent = title;
        document.getElementById('edit-input').value = value;
        document.getElementById('edit-link').value = url;
        document.getElementById('edit-modal').classList.add('active');
        document.getElementById('edit-input').focus();
    }

    function closeModal() {
        document.getElementById('edit-modal').classList.remove('active');
        editState = null;
    }

    function saveModal() {
        if (!editState) return;
        const newValue = document.getElementById('edit-input').value.trim();
        const newUrl = document.getElementById('edit-link').value.trim();

        if (editState.type === 'meal') {
            currentData.weeks[editState.weekIdx].days[editState.dayIdx][editState.field] = newValue;
            currentData.weeks[editState.weekIdx].days[editState.dayIdx][editState.field + 'Url'] = newUrl;
        }

        render();
        save();
        closeModal();
    }

    function toggleShoppingItem(wIdx, iIdx) {
        currentData.weeks[wIdx].shoppingList[iIdx].checked = !currentData.weeks[wIdx].shoppingList[iIdx].checked;
        render();
        save();
    }

    function addShoppingItem(wIdx) {
        const newItem = prompt("Nuevo producto:");
        if (newItem && newItem.trim() !== "") {
            const qty = prompt("Cantidad (opcional):", "1");
            currentData.weeks[wIdx].shoppingList.push({
                item: newItem.trim(),
                quantity: qty ? qty.trim() : "1",
                checked: false
            });
            render();
            save();
        }
    }

    function setupEventListeners() {
        document.getElementById('share-btn').addEventListener('click', () => {
            const json = JSON.stringify(currentData);
            const encoded = btoa(unescape(encodeURIComponent(json)));
            const baseUrl = window.location.href.split('#')[0];
            const shareUrl = baseUrl + "#" + encoded;

            navigator.clipboard.writeText(shareUrl).then(() => {
                const btn = document.getElementById('share-btn');
                const originalText = btn.textContent;
                btn.textContent = "🔗 ¡Link Copiado!";
                setTimeout(() => btn.textContent = originalText, 2000);
                alert("¡Link de sincronización copiado! Pásalo por WhatsApp. Útil para primera sincronización rápida.");
            }).catch(err => {
                console.error(err);
            });
        });

        document.getElementById('copy-btn').addEventListener('click', () => {
            const json = JSON.stringify(currentData, null, 2);
            navigator.clipboard.writeText(json).then(() => {
                const btn = document.getElementById('copy-btn');
                btn.textContent = "✅ ¡Copiado!";
                setTimeout(() => btn.textContent = "📋 Copiar JSON", 2000);
            });
        });

        document.getElementById('export-btn').addEventListener('click', () => {
            const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(currentData, null, 2));
            const downloadAnchorNode = document.createElement('a');
            downloadAnchorNode.setAttribute("href", dataStr);
            downloadAnchorNode.setAttribute("download", "comidas_editado.json");
            document.body.appendChild(downloadAnchorNode);
            downloadAnchorNode.click();
            downloadAnchorNode.remove();
        });

        document.getElementById('import-btn').addEventListener('click', () => {
            document.getElementById('file-input').click();
        });

        document.getElementById('file-input').addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (!file) return;

            const reader = new FileReader();
            reader.onload = (event) => {
                try {
                    currentData = migrateData(JSON.parse(event.target.result));
                    render();
                    save();
                    alert("Importación exitosa.");
                } catch (err) {
                    alert("Error al procesar el archivo JSON.");
                }
                e.target.value = ''; // Resetear para permitir importar el mismo archivo
            };
            reader.readAsText(file);
        });

        document.getElementById('reset-btn').addEventListener('click', async () => {
            if (confirm("¿Estás seguro de que quieres resetear todo a la planificación base? Se perderán tus cambios actuales en la nube.")) {
                localStorage.removeItem('comidas_data');
                currentData = JSON.parse(JSON.stringify(BASE_DATA));
                render();
                save();
            }
        });

        // Modal Listeners
        document.getElementById('modal-close').addEventListener('click', closeModal);
        document.getElementById('modal-cancel').addEventListener('click', closeModal);
        document.getElementById('modal-save').addEventListener('click', saveModal);
        window.addEventListener('click', (e) => {
            if (e.target === document.getElementById('edit-modal')) closeModal();
        });
    }

    document.addEventListener('DOMContentLoaded', init);

    // Exponer funciones globales para el HTML onclick/ondblclick
    window.editMeal = editMeal;
    window.toggleShoppingItem = toggleShoppingItem;
    window.addShoppingItem = addShoppingItem;
    window.editQuantity = editQuantity;
    window.toggleWeek = toggleWeek;
    window.closeModal = closeModal;
    window.saveModal = saveModal;
})();
