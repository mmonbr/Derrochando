@extends('backend.layouts.main')

@section('content')
    <div class="row">
        <div class="col-md-12">
            <div class="box">
                <form method="post" action="{{ route('admin.categories.store') }}">

                    {{ csrf_field() }}

                    <div class="box-header">
                        <h3 class="box-title">Add a new category</h3>
                    </div>
                    <!-- /.box-header -->
                    <div class="box-body">
                        <div class="form-group">
                            <label>Name</label>
                            <input name="name" value="{{ old('name') }}" type="text" class="form-control">
                        </div>
                        <div class="form-group">
                            <label>Children Of</label>
                            {!! app('App\Utilities\NestedSelect')->name('category_id')->categories($categories_list)->selected(old('category_id', []))->render() !!}
                        </div>
                    </div>
                    <!-- /.box-body -->
                    <div class="box-footer">
                        <button type="submit" class="btn btn-primary btn-block">Create</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
@endsection