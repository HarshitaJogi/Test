import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const List = () => {
  const rows = [
    {
      id: 1143155,
      product: "IIT Bombay",
      img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA3CAMAAABuDnn5AAAAdVBMVEX////X3er5+vzm6vLz9fnt8PYAOZfFzuHL0+Ta4OyxvdcAO5cAMpS5xNsAQZrq7fSotdOUpMkARZsASp2NoMegrs9mgrd5kL6DmcMAL5MANpZzirtgfrXg5e8rWqQhVqJDaqsAIpA2Y6gYUaBUdrFMcK4AKJG/khF8AAAFCklEQVRIiY1W24LCKAwNLQilYsGWgtLbVJ3//8QNUC8zo7vLQy9A4OTkJADwqd2Ou1278o/jn9rY4qOQ/f82sBea3z4+aZt7uf0PM3kK+pi+FpFebVqG7/u9/jd489IAmBWIvZ5yl1sNAf7dABva6pNd8aXSO3zNHW+2PmGmwzn9iP1Hy1uGB2V8sLFkhEakbFvkUHz08M5hKbW+WSec98oLljvJ7aOPxRkfCmgfjFZVxSirpODKq2TafaaHnxogPQM9IqiiJKSM4MrRSIcfS/fG5Lqie3LXMD3IuLDq23palqk+DrKAUpAB/VxddFi+2nU3Ma/dkYL2ugDqzz3PMgDKw75HHLzE9W5e3Or5BTHZ4UNcaQSmwe7tT/r0GbeSUlNYFoVElI+RNoeBeoKuzX0yIxSEwd804g4jCDtuTEx3OztsgDmDcZ9FAEOnvSVuypDFCdOEuTx0U3dmkp5BdhzGU1KHumoPyMcEXoa0abnnwKV8epbaGomutACaVMUNV8QDArUwEM8SxPI0YiRjQGktHk5OBkaLvE8JBNVIBJKEO7MOBpUVI2oMBY7Tw0tysy9kQoBNkrN+ATtyirgE6fDTWRL7vUNvClheBWQdMAHFPrkjCWeWSdwT+GioMiRkbLsSjN4y/A41UdKZ/OdBWwjZR6OYHTcW9QDcFbR+mBWkJl5S2G1xJ8JSS6L0rCDo+mOLMx0x1FttENN3PeEGHvhwn2BIp7yf1qHve111zb3fadAa5OH7MpANH0Vq3D2uWAM6qQKSwxfj16f+xAIpBaBEqyEz1o3QsvsEEpdIC9q45tOnHfCMk/QwxemFUbRo7+PNQkvuQgaNk/QDa8t4pfKUXEhoJxmbHyu7HoU6++DM0iPo6ZEOC1KTcBUz7FOPNGxcnuERnVf8Znnwvbv1zzQacMOs1wP0XwNGQnha/alFYWh+9fS80BG821/xj7uvYvBNM/2aRfWfuo/1kxNYV73Vh0NRyaY4/ppV6j9lbS5LRTfvYptS4rT0x6RRaEsU+dFXAw/kZYegns/UDFYYxbXhhGj5jGM1gdLwwmLvsLyBekoOOEf+SMUr/IAHYtMlyU13TR8HClyXcN46ZEMIV4oLJrnkfFR3H45jM2AW232STzjGl/YKfGaRCKiIIIRyykhFygo2dsWELsbFx2OEn48oIiWl5zR+k53vjLXdEB/eedvneE4c+m3t6OZ2RI2OgE+Zp3ursWHmG4skWWsyG2oFoTPLLsnn++45hTpWAtEZo6WUSyV7fElrXNyR7stCbwzn4zrE7fHEcBRI/Vr8+Y8TePbQBAZxDZ0rc1Pr/nLSaFusr4XoVyuPFo9q/n286sOWudbwhuHROO7kZzsEtSIbdYm3AvParWa1u+ur5NYNyzTP6xWLCHlIMazDm/uOzzejyiyHKVhFSkZpU3Hpr20bNg3oT9eAyh1WGykpQSgkVEctECi4Oy7y450D5LxiTqP6Qh+Ae4x+wNiiBCyez8TtwvjBMJ9CZtBCITSGLIOAklSOh1Q9hne3h9hcCgaL/hRR5hKFXiXmc8Lt3t+s+OWa6GHKL+cW+Ywgw22q296SdDsYzj19Y1cbrT3x89HJn75QjkRjll8Uv9Z/DWGSSrb7Q/u79MQmDsf65LUN766t4matNq4/veHOt4OzmC/vFsWbgJY2TId3pOtlfzXaDu8lSdbrLoi3Q7HITvNw+TAY/u32jKnev676D321T8ENkx4jAAAAAElFTkSuQmCC",
      customer: "30%",
      date: "1 March",
      amount: 785,
      method: "Cash on Delivery",
      status: "Approved",
    },
    {
      id: 2235235,
      product: "NIT Trichy",
      img: "data:image/jpeg;base64,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",
      customer: "27%",
      date: "1 March",
      amount: 900,
      method: "Online Payment",
      status: "Pending",
    },
    {
      id: 2342353,
      product: "SPIT",
      img: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUCQQKIB0iIiAdHx8kKDQsGCYlJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQ0NGgoPGjcZFRk3Nys3KysrKysrKzcrKzcrKysrNys3KysrNysrKzcrKysrNys3KzcrNysrNys3Nys3K//AABEIABAAEAMBIgACEQEDEQH/xAAWAAEBAQAAAAAAAAAAAAAAAAACBwD/xAAhEAACAgEEAgMAAAAAAAAAAAABAgMRBQAEEiETMSJRgf/EABUBAQEAAAAAAAAAAAAAAAAAAAMB/8QAFhEAAwAAAAAAAAAAAAAAAAAAABEh/9oADAMBAAIRAxEAPwCk5XIszPJ14UjMrmUnwYuDsA0O3JrSw+SfkpbjwdFlBiswZGFqFgE2hBP7rZDGzLMUjHwZeAsE7fdRXYBIsqwv36Oli8dI0g59qKUlQRDtowbpb7YkgWfrUEiP/9k=",
      customer: "22%",
      date: "1 March",
      amount: 35,
      method: "Cash on Delivery",
      status: "Pending",
    },
    {
      id: 2357741,
      product: "SPJIMR",
      img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAAVCAMAAAAkat3EAAAA21BMVEX////y8PX8/P04AHL6+fuCaqDp5u7DudHl4er39vmvosHTy9yQfKuikbeLd6ff2ubJwNX++fX71bbsAAC8scva1OKnmLuUga3zaAByVZX4qmKGb6P1iABRI4D3mzvxcnT85eXsGCH5xMPvNgPxXUj4ta/wVk/yYz/wUSbzhHj2mH3wQAD5xbvuHQD1mo72m3P70sX83dX3ppT4tJD4rIbyXQD4spj2n4b3onP1gj71jWP0g1z6x6H5vZD97eT0dR33m0dqSpBcN4dWLYP95ND1fQD3o1L5tnv2kyJKOjH8AAACDklEQVQ4jZWS6XabMBCFLwgLhFgERmC8tU26u2nipkmb1iHFIXHe/4k6El7an8w56Oho9M2duQL4P165GBqvzfdmnA3mLoCz8fhsKJedv8W78XtvKIcPH4n7NFQN+LzKvlx8BRznqOmYRYCjP+HimPHEnrvE1Wq9Pv9G+yKWhZCB1jxMg1RBKenEtAsQh4XmaRAopxCptuD1d9zcYvXD7ItSKhkplL6vQl0FSLRfBIUfowyVUmWhK1+maWjBCX7e4e4XflPLwnE91xFwXMdVtML1wHlAbXLP84Rw4Xie69kxNvfNJLt9wOVq4BPO8WeTTbLrm7WxIGpr6kO3dV1HnA6khFvSCGnvEOWKWZLMfKCZNnMs825yZRKMtQs2g2SP20fGiPR9uCOgrC0YVUBiPA1D3HfTPF/iaWMSJSO/qJpkVFqx+B/QyIuawMgOOMJzNsc8m05txZj1RlvQYckRjPXMpHV0And5nu+6OSyZMradFQaMlF8z/wTyhO7XoFKV5pyPJLIpXvDSbeZWKk22jIQkM0F9nUBeoZCeAcuwXBjVvNl1z9lTc7S5ZgTGqbYtHcCA5GoIAiMyZ8btQzbLbJlbRvimfdbPaKNQB1Bv/R6kgo41OWumXe8NtqxNWjbag0ay9Q4g6DkPIKK0J5/3P42oFmwR712FrJOaLrhkaBns8zSjAcWoBzbDfjYTfwFUfCgIxuh5dwAAAABJRU5ErkJggg==",
      customer: "20%",
      date: "1 March",
      amount: 920,
      method: "Online",
      status: "Approved",
    },
    {
      id: 2342355,
      product: "BITS PILANI",
      img: "data:image/png;base64,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",
      customer: "20%",
      date: "1 March",
      amount: 2000,
      method: "Online",
      status: "Pending",
    },
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 60 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">ID</TableCell>
            <TableCell className="tableCell">Campus</TableCell>
            <TableCell className="tableCell">Female Ratio</TableCell>
            {/* <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
            <TableCell className="tableCell">Payment Method</TableCell> */}
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                  {row.product}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.customer}</TableCell>
              {/* <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell> */}
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
