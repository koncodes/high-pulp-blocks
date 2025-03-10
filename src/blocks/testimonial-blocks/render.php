<?php
wp_enqueue_style('bootstrap-cdn', 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css');

$query = new WP_Query([
	'post_type' => 'testimonial',
	'orderby'   => 'title',
	'order'     => 'ASC',
]);

if ($query->have_posts()) :
	?>
	<div <?php echo get_block_wrapper_attributes(); ?>>
		<div id="testimonialCarousel" class="carousel slide">
			<div class="carousel-inner">
				<?php
				$counter = 0;
				$grouped_posts = array_chunk($query->posts, 3);

				foreach ($grouped_posts as &$group) :
					while (count($group) < 3) {
						$group[] = null;
					}
					?>
					<div class="carousel-item <?= $counter === 0 ? 'active' : '' ?>">
						<div class="cards-wrapper d-flex justify-content-center">
							<?php foreach ($group as $post) : ?>
								<?php if ($post) : ?>
									<?php
									$post = get_post($post->ID);
									setup_postdata($post);
									?>
									<div class="card">
										<?= get_the_post_thumbnail($post->ID, 'medium', ['class' => 'card-img-top']); ?>
										<div class="card-body">
											<h5 class="card-title"><?= esc_html(get_the_title($post->ID)); ?></h5>
											<p>
												<?= ($author_link = get_post_meta($post->ID, 'authorLink', true))
													? '<a href="' . esc_url($author_link) . '" target="_blank">' . esc_html(get_post_meta($post->ID, 'authorName', true)) . '</a>'
													: esc_html(get_post_meta($post->ID, 'authorName', true)); ?>
											</p>
											<p class="card-text"><?= esc_html(wp_trim_words(get_the_content(), 20, '...')); ?></p>
											<a href="<?= esc_url(get_the_permalink($post->ID)); ?>" class="btn btn-primary">
												Read More
											</a>
										</div>
									</div>
								<?php else : ?>
									<div class="card invisible" style="visibility: hidden;">
										<div class="card-body"></div>
									</div>
								<?php endif; ?>
							<?php endforeach; ?>
						</div>
					</div>
					<?php
					$counter++;
				endforeach;
				wp_reset_postdata();
				?>
			</div>

			<button class="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
				<span class="carousel-control-prev-icon" aria-hidden="true"></span>
				<span class="visually-hidden">Previous</span>
			</button>
			<button class="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
				<span class="carousel-control-next-icon" aria-hidden="true"></span>
				<span class="visually-hidden">Next</span>
			</button>
		</div>
	</div>

	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>

<?php
endif;
?>
