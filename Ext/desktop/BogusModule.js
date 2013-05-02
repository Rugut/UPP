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
    createWindow: function (src)
    {
        Ext.require([src.FormId]);
        Ext.onReady(function() {
            var win = Ext.create(src.FormId, {});
            win.show();
            return win;
        }
        );
        //Ext.Loader.setConfig({ //Конфигурация загрузчика скриптов
        //    enabled: true,  //Загрузчик активен
        //    disableCaching: true,   //Не кеширует файоы
        //    paths: {
        //        Base: "js/Base", //Путь в пространству данных Base
        //        Метаданные: "Метаданные",
        //        Справочники: "Справочники"
        //    }
        //});
        //alert(src.FormId);

    }
});

