export default function ({ store }) {
    store.dispatch('announcement/fetchAnnouncements')
}