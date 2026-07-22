// =========================================================================
// 🚀 DYNAMIC CMS MASTER CONFIGURATION MODULE (app.js)
// Clean, secure, optimized fetch framework for headless Airtable integrations.
// =========================================================================

const CONFIG = {
    // 1. Replace with your actual Airtable Base ID (starts with "app"):
    BASE_ID: 'YOUR_ACTUAL_BASE_ID_HERE', 
    
    // 2. Airtable table name housing your published catalog items:
    TABLE_NAME: 'Resources',
    
    // 3. Replace with your Read-Only Personal Access Token (starts with "pat"):
    // IMPORTANT SECURITY NOTE: Ensure your token scope is strictly set to data.records:read
    TOKEN: 'PASTE_YOUR_SECRET_TOKEN_HERE' 
};

/**
 * Utility: Sanitizes raw text inputs to prevent Cross-Site Scripting (XSS)
 * @param {string} str 
 * @returns {string} Sanitized string
 */
function escapeHTML(str) {
    if (!str) return '';
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

/**
 * Executes a real-time data fetch from the configured Airtable database architecture,
 * processes the returned record payloads, and renders optimized responsive cards.
 */
async function fetchResources() {
    const container = document.getElementById('resource-container');
    
    // Safety check: Exit gracefully if the mounting point does not exist in the DOM
    if (!container) {
        console.warn("Application Initialization Warning: Mount target element '#resource-container' was not found in the DOM.");
        return;
    }

    // Build REST API gateway endpoint dynamically at invocation time
    const encodedTable = encodeURIComponent(CONFIG.TABLE_NAME);
    const filterFormula = encodeURIComponent("Status='Published'");
    const urlEndpoint = `https://api.airtable.com/v0/${CONFIG.BASE_ID}/${encodedTable}?filterByFormula=${filterFormula}`;

    try {
        const response = await fetch(urlEndpoint, {
            headers: {
                'Authorization': `Bearer ${CONFIG.TOKEN}`,
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`Airtable Sync Protocol Exception. Status Code: ${response.status}`);
        }

        const data = await response.json();
        
        // Handle empty database returns cleanly
        if (!data.records || data.records.length === 0) {
            container.innerHTML = `
                <p class="loading">
                    No live assets found. Set item status to 'Published' inside your Airtable database to display products.
                </p>`;
            return;
        }

        // Accumulator variable to avoid multiple DOM reflows
        let gridHTML = '';

        // Loop over published records and build structural cards
        data.records.forEach(record => {
            const fields = record.fields || {};
            
            // Safe extraction & HTML sanitization
            const name = escapeHTML(fields['Resource Name'] || 'Untitled Resource Asset');
            const category = escapeHTML(fields['Category'] || 'Resource');
            const description = escapeHTML(fields['Description'] || 'No description provided for this dynamic resource item.');
            
            // Validate link URL structure
            let link = fields['Access Link'] || '#';
            if (link !== '#' && !/^https?:\/\//i.test(link)) {
                link = `https://${link}`;
            }

            // Extract attachment object securely (favoring optimized 'large' thumbnail)
            let imageUrl = '';
            if (fields['Cover Image'] && Array.isArray(fields['Cover Image']) && fields['Cover Image'].length > 0) {
                const imgObj = fields['Cover Image'][0];
                imageUrl = (imgObj.thumbnails && imgObj.thumbnails.large) 
                    ? imgObj.thumbnails.large.url 
                    : imgObj.url;
            }

            // Generate category badge classes dynamically
            const categorySlug = category.toLowerCase().replace(/[^a-z0-9]+/g, '-');
            const badgeClass = `badge-${categorySlug}`;

            // Accumulate Card Template HTML
            gridHTML += `
                <article class="card card-anim">
                    ${imageUrl 
                        ? `<img src="${imageUrl}" alt="${name}" class="card-image" loading="lazy" decoding="async">` 
                        : '<div class="card-image" aria-hidden="true"></div>'
                    }
                    <div class="card-content">
                        <span class="badge ${badgeClass}">${category}</span>
                        <h3 class="card-title">${name}</h3>
                        <p class="card-description">${description}</p>
                        <a href="${escapeHTML(link)}" target="_blank" rel="noopener noreferrer" class="card-btn">
                            Access Resource
                        </a>
                    </div>
                </article>
            `;
        });

        // Single DOM Write Operation (High Performance)
        container.innerHTML = gridHTML;

    } catch (error) {
        console.error('Data Transmission Error:', error);
        container.innerHTML = `
            <div class="loading text-red-500 font-semibold" style="color: #ef4444; text-align: center; width: 100%;">
                <p>🔒 Secure Database Gateway Connection Failure.</p>
                <p class="text-xs text-gray-500 mt-2 font-normal" style="font-size: 0.85rem; color: #6b7280; margin-top: 0.5rem;">
                    Please verify your <code>BASE_ID</code> and <code>TOKEN</code> credentials inside <code>app.js</code>.
                </p>
            </div>
        `;
    }
}

// Instantiate application process when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', fetchResources);
} else {
    fetchResources();
}
