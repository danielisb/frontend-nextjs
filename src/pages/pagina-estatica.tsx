/**
 * Página estática
 *
 * - Atualmente o conteúdo é gerado no momento em que a requisição é feita
 * - Você deve transformar essa página em uma página estática
 * - A página deve ser gerada no momento da build
 * - A página deve ser atualizada a cada 1 minuto
 */

import styles from '@/styles/lista.module.css';
import { ICity } from '@/types/city.d';

type ListaProps = {
	list: Array<ICity>;
};

export default function Lista({ list }: ListaProps) {
	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<h2>Lista de cidades</h2>

				<div data-list-container>
					{list.length > 0 ? (
						list.map((city) => (
							<div data-list-item key={city.id}>
								{city.name}
							</div>
						))
					) : (
						<p>Nenhuma cidade encontrada</p>
					)}
				</div>
			</div>
		</div>
	);
}

export async function getStaticProps() {
	try {
		const response = await fetch('http://localhost:8080/api/cities/10');
		const data: ICity[] = await response.json();

		if (!response.ok || !Array.isArray(data)) {
			throw new Error('Erro ao obter dados');
		}

		return {
			props: { list: data, },
			revalidate: 60,
		};
	} catch (error) {
		console.error('Erro ao obter a lista de cidades:', error);
		return {
			props: {
				list: [],
			},
		};
	}
}
