import React, { useEffect, useState } from 'react';

interface CustomSound {
  /** 
   * Pode ser:
   *   "https://api.soundcloud.com/tracks/1904481743"
   *   "https://api.soundcloud.com/tracks/1897798665"
   *   etc.
   */
  trackUrl: string;
  /** Copie aqui o seu client_id obtido no site de desenvolvedor do SoundCloud */
  clientId: string;
}

const CustomSound: React.FC<CustomSound> = ({
  trackUrl,
  clientId,
}) => {
  const [streamUrl, setStreamUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Ao montar, vamos buscar as informações da track (incluindo stream_url)
    fetch(`${trackUrl}?client_id=${clientId}`)
      .then(async (resp) => {
        if (!resp.ok) {
          throw new Error(`Erro ao buscar track (${resp.status})`);
        }
        return resp.json();
      })
      .then((json: any) => {
        // O JSON deve ter a propriedade "stream_url"
        if (json.stream_url) {
          setStreamUrl(`${json.stream_url}?client_id=${clientId}`);
        } else {
          throw new Error("Resposta inesperada: sem campo 'stream_url'");
        }
      })
      .catch((err: any) => {
        console.error("Falha ao obter stream_url:", err);
        setError("Não foi possível obter o áudio do SoundCloud.");
      });
  }, [trackUrl, clientId]);

  if (error) {
    return <p style={{ color: 'red' }}>{error}</p>;
  }

  return (
    <div style={{ minHeight:  '100px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      {!streamUrl ? (
        <p>Carregando áudio...</p>
      ) : (
        <audio controls style={{ width: '100%' }} src={streamUrl}>
          Seu navegador não suporta o elemento de áudio.
        </audio>
      )}
    </div>
  );
};

export default CustomSound;
