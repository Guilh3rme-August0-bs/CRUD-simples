const url = `http://localhost:3000`

export async function getData({ term }) {
    const response = await fetch(`${url}/search?term=${encodeURIComponent(term ?? "")}`)
    const data = await response.json()

    if (Array.isArray(data)) {
        return data
    }

    return []
}

export async function createUser({ name, email, age, phone }) {
    try {
        if (name.trim() === '') {
            alert('Insira um nome!')
            return false
        }

        if (email.trim() === '') {
            alert('Insira um e-mail!')
            return false
        }

        await fetch(`${url}/insert`, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                name,
                email,
                age,
                phone
            })
        })

        alert(`Usuário ${name} cadastrado!`)
        return true
    } catch (error) {
        console.log(error)
        return false
    }
}