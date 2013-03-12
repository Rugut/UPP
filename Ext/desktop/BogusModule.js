var windowIndex = 0;

Ext.define('MyDesktop.BogusModule',
{
    extend: 'Ext.ux.desktop.Module',

    init: function ()
    {
        this.launcher =
        {
            text: 'Window ' + (++windowIndex),
            iconCls: 'bogus',
            handler: this.createWindow,
            scope: this,
            windowId: windowIndex
        }
    },
    createWindow: function (src) {
        Ext.Loader.setConfig({ //Конфигурация загрузчика скриптов
            enabled: true,  //Загрузчик активен
            disableCaching: true,   //Не кеширует файоы
            paths: {
                Base: "js/Base", //Путь в пространству данных Base
                Метаданные: "Метаданные",
                Справочники: "Справочники"
            }
        });
        //alert(src.FormId);
        var win = Ext.create(src.FormId, {
            // grid: this
            //Создаем тестовое окно, определенное в файле Test, файл должен автоматически загрузится     this.tbar = new App.Common.CommonGridTBar({grid:this});
            //items:[{
            //    xtype:'form',
            //    items:[{
            //        xtype:'textfield',
            //        fieldLabel:'fdsfds'
            //    }]
            //}]
        });
        win.show();
        return win;
    }
});

