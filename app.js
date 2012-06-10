 //define the application
      Ext.application({
        launch: function() {
          //create a window
          var win = Ext.create( 'Ext.window.Window' , {
            title: 'Hello Sencha',
            height: 285,
            width: 250,
            layout: 'fit',
            //add an image to the window by an xtype object
            items: {
              xtype: 'image',
              src: 'http://www.sencha.com/files/blog/old/blog/wp-content/uploads/2010/06/sencha-logo.png'
            },
            listeners:{
              beforehide: function( com, owner, opt ){
                alert('hiding win');
              }
            }
          });
          //show the window
          win.show();
        }
      });