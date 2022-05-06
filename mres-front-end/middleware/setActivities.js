export default function ({ store }) {
    store.dispatch('activity/fetchActivities')
}