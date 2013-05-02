
Ext.define('Меню.СправочникиФормыЭлемента',
    {
        requires: ['Метаданные.Справочники'],
        extend: 'MyDesktop.BogusModule',
        init: function ()
        {
            this.launcher =
            {
                text: 'Справочники',
                iconCls: 'bogus',
                handler: function () {
                    return false;
                },
                menu: {
                    items: []
                }
            };
            var Справочники = Ext.create("Метаданные.Справочники");
            for (var Номер = 0, Элемент; Элемент = Справочники[Номер]; Номер++)
            {
                if (Элемент.ОсновнаяФормаОбъекта == '00000000-0000-0000-0000-000000000000')
                {
                        continue;
                }
                this.launcher.menu.items.push
                (
                    {
                        text: Элемент.Имя,
                        iconCls: 'bogus',
                        handler: this.createWindow,
                        scope: this,
                        windowId: ++windowIndex,
                        FormId: 'Справочники.' + Элемент.Имя + '.ФормаЭлемента',
                    }
                );
                if (Номер > 50)
                {
                    break;
                }
            }
        }
    }
);