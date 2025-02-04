local QBCore = exports['qb-core']:GetCoreObject()

RegisterNetEvent("qb_adminmenu:kickPlayer", function(targetId, reason)
    local src = source
    local Player = QBCore.Functions.GetPlayer(src)
    
    if Player and Player.PlayerData.job.name == "admin" then
        DropPlayer(targetId, "You were kicked by an admin. Reason: " .. reason)
        TriggerClientEvent("QBCore:Notify", src, "Player kicked successfully!", "success")
    else
        TriggerClientEvent("QBCore:Notify", src, "You do not have permission!", "error")
    end
end)

QBCore.Functions.CreateCallback("qb_adminmenu:checkAdmin", function(source, cb)
    local Player = QBCore.Functions.GetPlayer(source)
    cb(Player and Player.PlayerData.job.name == "admin")
end)
