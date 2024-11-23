def chunk_text(text, chunk_size=1000):
    """Splits text into manageable chunks."""
    words = text.split()
    for i in range(0, len(words), chunk_size):
        yield " ".join(words[i:i + chunk_size])
