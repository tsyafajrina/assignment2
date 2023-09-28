const editButton = document.getElementById('editButton')
const editForm = document.getElementById('editForm')
const nama = document.getElementById('nama')
const role = document.getElementById('role')
const availability = document.getElementById('availability')
const age = document.getElementById('age')
const lokasi = document.getElementById('lokasi')
const experience = document.getElementById('experience')
const email = document.getElementById('email')
const fileInput = document.getElementById('fileInput')
const submitButton = document.getElementById('submitButton')

const targetNama = document.getElementById('targetNama')
const targetRole = document.getElementById('targetRole')
const targetAvailability = document.getElementById('targetAvailability')
const targetAge = document.getElementById('targetAge')
const targetLokasi = document.getElementById('targetLokasi')
const targetExperience = document.getElementById('targetExperience')
const targetEmail = document.getElementById('targetEmail')
const targetImage= document.getElementById('targetImage')


editButton.addEventListener('click', toggleEditFrom)
submitButton.addEventListener('click', submitForm)

function toggleEditFrom (event){
    editForm.classList.toggle('d-none')
}

function submitForm(event){
    event.preventDefault()
    const currentNama = nama.value
    const currenRole = role.value
    const currentAvailability = availability.value
    const currentAge = age.value
    const currentLokasi = lokasi.value
    const currentExperience = experience.value
    const currentEmail = email.value
    const currentFile = fileInput.files[0]

    targetNama.innerHTML = currentNama
    targetRole.innerHTML = currenRole
    targetAvailability.innerHTML = currentAvailability
    targetAge.innerHTML = currentAge
    targetLokasi.innerHTML = currentLokasi
    targetExperience.innerHTML = currentExperience
    targetEmail.innerHTML = currentEmail

    if(currentFile){
        const reader = new FileReader()
        reader.onload = function(e){
            targetImage.src = e.target.result
        }
        reader.readAsDataURL(currentFile);
        console.log(currentFile)
        
    }

    toggleEditFrom()
}