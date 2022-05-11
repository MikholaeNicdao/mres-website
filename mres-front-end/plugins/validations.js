export default {
    methods: {
        isValidImage(img) {
            const file = img;
            const fileType = file['type'];
            const validImageTypes = ['image/gif', 'image/jpeg', 'image/png'];
            if (!validImageTypes.includes(fileType)) return false
            return true
        }
    }
}