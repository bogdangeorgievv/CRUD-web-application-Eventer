import { del, get, post, put } from "./requester.js";

const endpoints = {
    dashboard: '/data/events?sortBy=_createdOn%20desc', // if order by date needed -  '/data/events?sortBy=date'
    events: '/data/events',
    eventById: '/data/events/',
}

export async function getAllEvents() {
    return get(endpoints.dashboard)
}

export async function getEventById(id) {
    return get(endpoints.eventById + id);
}

export async function createEvents(name, imageUrl, category, description, date) {  
    return post(endpoints.events, {
        name,
        imageUrl,  
        category,
        description,
        date
        });
}

export async function updateEvent(id, data) {
    return put(endpoints.eventById + id, data)
}

export async function deleteEvent(id) {
    return del(endpoints.eventById + id);
}
