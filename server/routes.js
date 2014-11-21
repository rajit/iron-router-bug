Router.route('/text-file', {
    where: 'server',
    action: function () {
        this.response.write('This is a text file');
        this.response.end();
    }
});
