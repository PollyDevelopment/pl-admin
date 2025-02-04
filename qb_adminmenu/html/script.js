// Function to open a specific tab in the admin menu
function openTab(tabName) {
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => {
        tab.style.display = 'none'; // Hide all tabs
    });
    document.getElementById(tabName).style.display = 'flex'; // Show the selected tab
    const buttons = document.querySelectorAll('.tab-button');
    buttons.forEach(button => {
        button.classList.remove('active'); // Remove active class from all buttons
    });
    event.currentTarget.classList.add('active'); // Add active class to the clicked button
}

// Function to close the admin menu
function closeMenu() {
    document.getElementById('adminMenu').style.display = 'none'; // Hide the admin menu
}

// Player Management Functions
function kickPlayer() {
    const playerId = prompt("Enter Player ID to kick:");
    if (playerId) {
        emit('qb-admin:kickPlayer', playerId);
    }
}

function banPlayer() {
    const playerId = prompt("Enter Player ID to ban:");
    if (playerId) {
        emit('qb-admin:banPlayer', playerId);
    }
}

function freezePlayer() {
    const playerId = prompt("Enter Player ID to freeze:");
    if (playerId) {
        emit('qb-admin:freezePlayer', playerId);
    }
}

function revivePlayer() {
    const playerId = prompt("Enter Player ID to revive:");
    if (playerId) {
        emit('qb-admin:revivePlayer', playerId);
    }
}

function setJob() {
    const playerId = prompt("Enter Player ID to set job:");
    const jobName = prompt("Enter Job Name:");
    if (playerId && jobName) {
        emit('qb-admin:setJob', playerId, jobName);
    }
}

function setHealth() {
    const playerId = prompt("Enter Player ID to set health:");
    const health = prompt("Enter Health Value:");
    if (playerId && health) {
        emit('qb-admin:setHealth', playerId, health);
    }
}

function setArmor() {
    const playerId = prompt("Enter Player ID to set armor:");
    const armor = prompt("Enter Armor Value:");
    if (playerId && armor) {
        emit('qb-admin:setArmor', playerId, armor);
    }
}

function toggleGodMode() {
    const playerId = prompt("Enter Player ID to toggle God Mode:");
    if (playerId) {
        emit('qb-admin:toggleGodMode', playerId);
    }
}

function giveItem() {
    const playerId = prompt("Enter Player ID to give item:");
    const itemName = prompt("Enter Item Name:");
    const quantity = prompt("Enter Quantity:");
    if (playerId && itemName && quantity) {
        emit('qb-admin:giveItem', playerId, itemName, quantity);
    }
}

function jailPlayer() {
    const playerId = prompt("Enter Player ID to jail:");
    if (playerId) {
        emit('qb-admin:jailPlayer', playerId);
    }
}

function mutePlayer() {
    const playerId = prompt("Enter Player ID to mute:");
    if (playerId) {
        emit('qb-admin:mutePlayer', playerId);
    }
}

function unmutePlayer() {
    const playerId = prompt("Enter Player ID to unmute:");
    if (playerId) {
        emit('qb-admin:unmutePlayer', playerId);
    }
}

function teleportToPlayer() {
    const playerId = prompt("Enter Player ID to teleport to:");
    if (playerId) {
        emit('qb-admin:teleportToPlayer', playerId);
    }
}

function setPlayerMoney() {
    const playerId = prompt("Enter Player ID to set money:");
    const amount = prompt("Enter Amount:");
    if (playerId && amount) {
        emit('qb-admin:setPlayerMoney', playerId, amount);
    }
}

function setPlayerCoords() {
    const playerId = prompt("Enter Player ID to set coordinates:");
    const x = prompt("Enter X Coordinate:");
    const y = prompt("Enter Y Coordinate:");
    const z = prompt("Enter Z Coordinate:");
    if (playerId && x && y && z) {
        emit('qb-admin:setPlayerCoords', playerId, { x: parseFloat(x), y: parseFloat(y), z: parseFloat(z) });
    }
}

// Vehicle Management Functions
function repairVehicle() {
    const vehicleId = prompt("Enter Vehicle ID to repair:");
    if (vehicleId) {
        emit('qb-admin:repairVehicle', vehicleId);
    }
}

function spawnVehicle() {
    const vehicleName = prompt("Enter Vehicle Name to spawn:");
    if (vehicleName) {
        emit('qb-admin:spawnVehicle', vehicleName);
    }
}

function deleteVehicle() {
    const vehicleId = prompt("Enter Vehicle ID to delete:");
    if (vehicleId) {
        emit('qb-admin:deleteVehicle', vehicleId);
    }
}

// Teleportation Functions
function teleportToCoords() {
    const x = prompt("Enter X Coordinate:");
    const y = prompt("Enter Y Coordinate:");
    const z = prompt("Enter Z Coordinate:");
    if (x && y && z) {
        emit('qb-admin:teleportToCoords', { x: parseFloat(x), y: parseFloat(y), z: parseFloat(z) });
    }
}

// Server Management Functions
function restartServer() {
    emit('qb-admin:restartServer');
}

function shutdownServer() {
    emit('qb-admin:shutdownServer');
}

// Gang Operations Functions
function createGang() {
    const gangName = prompt("Enter Gang Name:");
    if (gangName) {
        emit('qb-admin:createGang', gangName);
    }
}

function deleteGang() {
    const gangId = prompt("Enter Gang ID to delete:");
    if (gangId) {
        emit('qb-admin:deleteGang', gangId);
    }
}

// Fun Activities Functions
function spawnPet() {
    const petName = prompt("Enter Pet Name to spawn:");
    if (petName) {
        emit('qb-admin:spawnPet', petName);
    }
}

// Developer Tools Functions
function logMessage() {
    const message = prompt("Enter message to log:");
    if (message) {
        console.log(message);
    }
}

// Status Check Functions
function checkPlayerStatus() {
    const playerId = prompt("Enter Player ID to check status:");
    if (playerId) {
        emit('qb-admin:checkPlayerStatus', playerId);
    }
}

function checkServerStatus() {
    emit('qb-admin:checkServerStatus');
}

// Event Listeners for Buttons
document.querySelectorAll('.tab-button').forEach(button => {
    button.addEventListener('click', function(event) {
        openTab(event.currentTarget.dataset.tab);
    });
});

document.querySelector('.close-button').addEventListener('click', closeMenu);