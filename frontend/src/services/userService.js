const url = `http://localhost:3000`

export async function getData({ term }) {

    const response = await fetch(`${url}/search?term=${term}`)
    const data = await response.json()

    if (Array.isArray(data)) {
        return data
    }

    return []
}

export async function createUser({ name, email, age, phone }) {
    try {

        if (name === '') {
            alert('Insira um nome!')
            return
        }

        if (email === '') {
            alert('Insira um e-mail!')
            return
        }

        await fetch(`${url}/insert`, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                name: name,
                email: email,
                age: age,
                phone: phone
            })
        })
        alert(`Usuário ${name} cadastrado!`)
    } catch (error) {
        console.log(error)
    }
}