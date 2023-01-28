import tls from "tls"

const CRLF = "\r\n"

export default function authenticate(host: string, port: number, username: string, password: string) {
  return new Promise<boolean>((resolve, reject) => {
    const socket = tls.connect({ host, port, servername: host })

    let response = ""

    socket.once("secureConnect", connect)
    socket.once("end", disconnect)
    socket.on("data", receive)
    socket.on("error", error)

    function connect() {
      socket.write(`A01 LOGIN ${username} ${password}${CRLF}`)
      socket.write(`A02 LOGOUT${CRLF}`)
    }

    function receive(data: Buffer) {
      response += data.toString()
    }

    function disconnect() {
      socket.off("data", receive)
      resolve(/^A01 OK/gm.test(response))
    }

    function error(error: any) {
      socket.off("data", receive)
      reject(error)
    }
  })
}