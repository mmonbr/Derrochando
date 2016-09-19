<?php

namespace App\Products\Scopes;

use Illuminate\Database\Eloquent\Scope;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;

class PublishedScope implements Scope
{
    /**
     * Apply the scope to a given Eloquent query builder.
     * @param Builder $builder
     * @param Model $model
     * @return $this|void
     */
    public function apply(Builder $builder, Model $model)
    {
        return $builder->where('published', 1);
    }
}
