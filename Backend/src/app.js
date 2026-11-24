import express from 'express';
import morgan from 'morgan';
import multer from 'multer'
import mammoth from 'mammoth'

const app = express();
const upload = multer({ storage: multer.memoryStorage() })

app.use(morgan(process.env.NODE_ENV === 'production' ? 'combined' : 'dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

// app.use((_req, res) => {
//   res.status(404).json({ error: 'Not found' });
// });

app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).json({
    error: err.status && err.status < 500 ? err.message : 'Internal server error',
  });
});

app.post("/upload-file", upload.single('wordFile'), async (req, res) => {
    const { wordFile } = req.file;
    const result = await mammoth.extractRawText({ buffer: req.file.buffer })

    const cleaned = result.value
    .replace(/\r/g, "")
    .replace(/\n{2,}/g, "\n")   // collapse blank lines
    .trim();
    console.log(cleaned);
})  

export default app;
