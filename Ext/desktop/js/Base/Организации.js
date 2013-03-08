Ext.define('Base.Организации', {  //Определение класса окошка
    extend: 'Ext.window.Window', //Расширяет класс стандартного окна
    height: 480,
    width: 640,
    items:[
      Ext.create('Ext.Button', {
          //renderTo: document.body,
          // region: south,
          text: 'Click me',
          style: 'position:absolute;left:232px;top:85px;width:40px;height:19px;',
          //scale: 'large',
          //Height: 20,
          //width: 60,
          //setPosition: (20, 40)

      }),
    
    
    Ext.create('Ext.Panel', {
        title: 'Форма ввода',
        width: 250,
        autoHeight: true,
        bodyPadding: 10,
        defaults: {
            labelWidth: 100
        },
        items: [{
            xtype: 'textfield',
            fieldLabel: 'Ваше имя:',
            name: 'name'
        }],
        renderTo: Ext.getBody()
    })],


    iconCls: 'bogus',
    //html: '<p>Когда мужчина с женщиной друзья, Всё очень просто, но безумно сложно. Ведь многое практически нельзя, Хотя теоретически возможно.</p>',
    title: 'Организации',
    buttons: [{
        text: 'Save',
        top: 10,
        left:10,
        width: 40,
        height: 40,
        style: 'position:absolute;left:232px;top:85px;width:40px;height:19px;',
        handler: function () {
            alert("Save");
        }
    }, {
        text: 'Cancel',
        handler: function () {
            alert("Cancel");
        }
    }]
});