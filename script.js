const SUPABASE_URL = 'https://xtiqwwwitvcmbblqqnxx.supabase.co';
const SUPABASE_KEY = 'sb_publishable_HyXPtAE9MaX01wBya036aQ_MZk5k842';
const supabase = window.supabase ? window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY) : null;

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
                { "item": "Pollo (Supermas, Muslos)", "checked": false },
                { "item": "Pescado (Merluza)", "checked": false },
                { "item": "Espinaca, Calabaza, Zapallo", "checked": false },
                { "item": "Papas, Zanahorias", "checked": false },
                { "item": "Zucchini, Berenjena", "checked": false },
                { "item": "Arvejas partidas", "checked": false },
                { "item": "Arroz, Fideos tornillito, Cabellín", "checked": false },
                { "item": "Quesos, Huevos, Palta", "checked": false }
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

async function init() {
    const hashData = window.location.hash;
    const savedData = localStorage.getItem('comidas_data');

    // Supabase Load
    if (supabase) {
        setCloudStatus("⏳ Conectando...", "syncing");
        try {
            const { data, error } = await supabase.from('meal_plans').select('data').limit(1).single();
            if (!error && data && Object.keys(data.data).length > 0) {
                currentData = data.data;
                render();
                saveLocalOnly();
                setCloudStatus("☁️ Sincronizado", "synced");
                return;
            } else if (error && error.code !== 'PGRST116') {
                console.warn("Supabase load error", error);
                setCloudStatus("☁️ Error DB", "error");
            }
        } catch (e) {
            setCloudStatus("☁️ Error Red", "error");
        }
    }

    if (hashData && hashData.length > 1) {
        try {
            const decoded = decodeURIComponent(escape(atob(hashData.substring(1))));
            currentData = JSON.parse(decoded);
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
        currentData = JSON.parse(savedData);
        currentData.weeks.forEach((w, i) => {
            if (!w.shoppingList) w.shoppingList = JSON.parse(JSON.stringify(BASE_DATA.weeks[i].shoppingList));
        });
        render();
    } else {
        try {
            const response = await fetch('comidas.json');
            if (response.ok) {
                currentData = await response.json();
            } else {
                throw new Error("Local fetch blocked");
            }
        } catch (error) {
            currentData = JSON.parse(JSON.stringify(BASE_DATA));
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
    if (supabase) {
        setCloudStatus("⏳ Sincronizando...", "syncing");
        try {
            // Asumimos que hay un solo registro. En un app real usaríamos IDs.
            const { error } = await supabase.from('meal_plans').update({ data: currentData, updated_at: new Date() }).match({ id: 1 });
            if (!error) {
                setCloudStatus("☁️ Sincronizado", "synced");
            } else {
                setCloudStatus("☁️ Error al subir", "error");
            }
        } catch (e) {
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
    status.textContent = text;
    status.className = "cloud-status " + className;
}

function render() {
    if (!currentData) return;

    // Rules
    const rulesList = document.getElementById('rules-list');
    rulesList.innerHTML = currentData.rules.map(rule => `<li>${rule}</li>`).join('');

    // Calendar
    const container = document.getElementById('calendar-container');
    container.innerHTML = currentData.weeks.map((week, wIdx) => `
        <div class="week-section">
            <div class="week-title">Semana ${week.weekNumber}</div>
            ${week.days.map((day, dIdx) => `
                <div class="day-row">
                    <div class="day-label">${day.day}</div>
                    <div class="meal-slot" onclick="editMeal(${wIdx}, ${dIdx}, 'lunch')">
                        <div class="label">Almuerzo</div>
                        <span>${day.lunch}</span>
                    </div>
                    <div class="meal-slot" onclick="editMeal(${wIdx}, ${dIdx}, 'dinner')">
                        <div class="label">Cena</div>
                        <span>${day.dinner}</span>
                    </div>
                </div>
            `).join('')}
            
            <div class="shopping-list-section">
                <div class="shopping-list-title">
                    <span>🛒 Lista de Compras</span>
                    <button class="add-item-btn" onclick="addShoppingItem(${wIdx})">+ Sugerir/Agregar</button>
                </div>
                <ul class="shopping-list">
                    ${week.shoppingList.map((item, iIdx) => `
                        <li class="shopping-item ${item.checked ? 'checked' : ''}" onclick="toggleShoppingItem(${wIdx}, ${iIdx})">
                            <input type="checkbox" ${item.checked ? 'checked' : ''} onclick="event.stopPropagation(); toggleShoppingItem(${wIdx}, ${iIdx})">
                            <span>${item.item}</span>
                        </li>
                    `).join('')}
                </ul>
            </div>
        </div>
    `).join('');

    // Backups
    const backupsList = document.getElementById('backups-list');
    backupsList.innerHTML = currentData.backups.map(item => `
        <div class="backup-item">${item}</div>
    `).join('');
}

function editMeal(weekIdx, dayIdx, type) {
    const currentValue = currentData.weeks[weekIdx].days[dayIdx][type];
    const newValue = prompt(`Editar ${type === 'lunch' ? 'almuerzo' : 'cena'}:`, currentValue);

    if (newValue !== null && newValue.trim() !== "") {
        currentData.weeks[weekIdx].days[dayIdx][type] = newValue.trim();
        render();
        save();
    }
}

function toggleShoppingItem(wIdx, iIdx) {
    currentData.weeks[wIdx].shoppingList[iIdx].checked = !currentData.weeks[wIdx].shoppingList[iIdx].checked;
    render();
    save();
}

function addShoppingItem(wIdx) {
    const newItem = prompt("Nuevo item para la lista de compras:");
    if (newItem && newItem.trim() !== "") {
        currentData.weeks[wIdx].shoppingList.push({ item: newItem.trim(), checked: false });
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
                currentData = JSON.parse(event.target.result);
                render();
                save();
            } catch (err) {
                alert("Error al procesar el archivo JSON.");
            }
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
}

document.addEventListener('DOMContentLoaded', init);
