@extends('backend.layouts.main')

@section('title', 'All products')

@section('content')
    <div class="row">
        <div class="col-xs-12">
            <div class="box">
                <div class="box-header">
                    <h3 class="box-title">Products</h3>

                    <div class="box-tools">
                        <div class="input-group input-group-sm" style="width: 150px;">
                            <input type="text" name="table_search" class="form-control pull-right" placeholder="Search">

                            <div class="input-group-btn">
                                <button type="submit" class="btn btn-default"><i class="fa fa-search"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- /.box-header -->
                <div class="box-body table-responsive no-padding">
                    <table class="table table-hover">
                        <tbody>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Categories</th>
                            <th>Hits</th>
                            <th>Price</th>
                            <th class="text-center">Options</th>
                        </tr>
                        @foreach($products as $product)
                            <tr>
                                <td>{{ $product->id }}</td>
                                <td>{{ $product->name }}</td>
                                <td>
                                    @foreach($product->categories as $category)
                                        <span class="label label-default">{{ $category->name }}</span>
                                    @endforeach
                                </td>
                                <td>{{ $product->hits }}</td>
                                <td>{{ $product->current_price }}</td>
                                <td class="text-center">
                                    <a href="{{ route('products.show', $product->slug) }}" class="btn btn-success"><i
                                                class="fa fa-link"></i></a>
                                    <a href="{{ route('admin.products.edit', $product->id) }}"
                                       class="btn btn-primary"><i class="fa fa-edit"></i></a>
                                    <form method="POST"
                                          action="{{ route('admin.products.destroy', [$product->id]) }}"
                                          class="inline">
                                        {{ method_field('delete') }}

                                        {{ csrf_field() }}
                                        <button class="btn btn-danger"><i class="fa fa-trash"></i></button>
                                    </form>
                                </td>
                            </tr>
                        @endforeach
                        </tbody>
                    </table>
                </div>
                <!-- /.box-body -->
                <div class="box-footer clearfix">
                    {{ $products->render() }}
                </div>
            </div>
            <!-- /.box -->
        </div>
    </div>
@endsection