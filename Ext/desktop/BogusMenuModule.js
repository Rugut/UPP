/*!
* Ext JS Library 4.0
* Copyright(c) 2006-2011 Sencha Inc.
* licensing@sencha.com
* http://www.sencha.com/license
*/

Ext.define('MyDesktop.BogusMenuModule', {
    extend: 'MyDesktop.BogusModule',

    init: function () {

        this.launcher = {
            text: 'Справочники',
            iconCls: 'bogus',
            handler: function () {
                return false;
            },
            menu: {
                items: []
            }
        };
        
            Ext.Loader.setConfig({ //Конфигурация загрузчика скриптов
                enabled: true,  //Загрузчик активен
                disableCaching: true,   //Не кеширует файоы
                paths: {
                    Base: "js/Base", //Путь в пространству данных Base
                    Метаданные: "Метаданные",
                    Справочники: "Справочники",
                    Документы: "Документы",
                }
            });
            //alert(src.FormId);
            var Справочники = Ext.create("Метаданные.Справочники");
            for (var НомерСправочника = 0, Справочник; Справочник = Справочники[НомерСправочника]; НомерСправочника++)
            {
                this.launcher.menu.items.push({
                    text: Справочник.Имя,
                    iconCls: 'bogus',
                    handler: this.createWindow,
                    scope: this,
                    windowId: ++windowIndex,
                    FormId: 'Справочники.' + Справочник.Имя + '.ФормаЭлемента'
                });
                
                if (НомерСправочника > 20)
                {
                    break;
                }
                
            }
        


    }
});

Ext.define('MyDesktop.BogusMenuModule1', {
    extend: 'MyDesktop.BogusModule',

    init: function () {

        this.launcher = {
            text: 'Документы',
            iconCls: 'bogus',
            handler: function () {
                return false;
            },
            menu: {
                items: []
            }
        };

        Ext.Loader.setConfig({ //Конфигурация загрузчика скриптов
            enabled: true,  //Загрузчик активен
            disableCaching: true,   //Не кеширует файоы
            paths: {
                Base: "js/Base", //Путь в пространству данных Base
                Метаданные: "Метаданные",
                Справочники: "Справочники",
                Документы: "Документы",
            }
        });
        //alert(src.FormId);
        var Документы = Ext.create("Метаданные.Документы");
        for (var НомерДокумента = 0, Документ; Документ = Документы[НомерДокумента]; НомерДокумента++) {
            this.launcher.menu.items.push({
                text: Документ.Имя,
                iconCls: 'bogus',
                handler: this.createWindow,
                scope: this,
                windowId: ++windowIndex,
                FormId: 'Документы.' + Документ.Имя + '.ФормаДокумента'
            });

            if (НомерДокумента > 20)
            {
                break;
            }

        }
    }
});
