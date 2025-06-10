let coding = ["ja", "py", "html", "css", "django"]

// const val = coding.forEach((item) => {
//     console.log(item)
//     return item
// })

// console.log(val)

// filter

let nums = [1,2,3,4,5,6,7,8,9]

// const highnums = nums.filter((num) => {num > 4})

// const highnums = nums.filter((num) => {
//     return num > 4
// })

// const highnums = []

// nums.forEach((num) => {
//     if(num > 4){
//         highnums.push(num)
//     }
// } )

// console.log(highnums);

const Books =  [
    {
      "name": "The Hitchhiker's Guide to the Galaxy",
      "publish": 1979,
      "author": "Douglas Adams",
      "genre": "Science Fiction",
      "pages": 193
    },
    {
      "name": "Pride and Prejudice",
      "publish": 1813,
      "author": "Jane Austen",
      "genre": "Romance",
      "pages": 279
    },
    {
      "name": "1984",
      "publish": 1949,
      "author": "George Orwell",
      "genre": "Dystopian",
      "pages": 328
    },
    {
      "name": "To Kill a Mockingbird",
      "publish": 1960,
      "author": "Harper Lee",
      "genre": "Southern Gothic",
      "pages": 281
    },
    {
      "name": "The Great Gatsby",
      "publish": 1925,
      "author": "F. Scott Fitzgerald",
      "genre": "Fantasy",
      "pages": 180
    },
    {
      "name": "Dune",
      "publish": 1965,
      "author": "Frank Herbert",
      "genre": "Adventure",
      "pages": 412
    },
    {
      "name": "Moby Dick",
      "publish": 1851,
      "author": "Herman Melville",
      "genre": "Adventure",
      "pages": 635
    },
    {
      "name": "War and Peace",
      "publish": 1869,
      "author": "Leo Tolstoy",
      "genre": "Historical Fiction",
      "pages": 1225
    },
    {
      "name": "The Catcher in the Rye",
      "publish": 1951,
      "author": "J.D. Salinger",
      "genre": "Fantasy",
      "pages": 214
    },
    {
      "name": "The Hobbit",
      "publish": 1937,
      "author": "J.R.R. Tolkien",
      "genre": "Fantasy",
      "pages": 310
    }
  ]



const userBooks = Books.filter((bk) => {
    return bk.genre === "Fantasy" && bk.publish >= 1930
})

console.log(userBooks)