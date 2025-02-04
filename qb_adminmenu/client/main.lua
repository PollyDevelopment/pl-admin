local QBCore = exports['qb-core']:GetCoreObject()
local isAdmin = false

RegisterCommand("adminmenu", function()
    if isAdmin then
        SetNuiFocus(true, true)
        SendNUIMessage({ action = "openMenu" })
    else
        QBCore.Functions.Notify("You do not have permission!", "error")
    end
end)

RegisterNetEvent("qb_adminmenu:setAdmin")
AddEventHandler("qb_adminmenu:setAdmin", function(status)
    isAdmin = status
end)

RegisterNUICallback("closeMenu", function(_, cb)
    SetNuiFocus(false, false)
    cb("ok")
end)

RegisterNUICallback("kickPlayer", function(data, cb)
    TriggerServerEvent("qb_adminmenu:kickPlayer", data.playerId, data.reason)
    cb("ok")
end)
